import { useQuery } from 'urql';
import { graphql } from '../graphql';

import { PokemonItem, PokemonItemFragment } from './PokemonItem';

const PokemonsQuery = graphql(`
  query Pokemons ($limit: Int = 10) {
    pokemons(limit: $limit) {
      id
      evolutions {
        evolutions {
          evolutions {
            evolutions {
              evolutions {
                evolutions {
                  evolutions {
                    evolutions {
                      evolutions {
                        evolutions {
                          id
                          name
                          resistant
                          types
                          weaknesses
                          maxCP
                          maxHP
                          weight {
                            minimum
                            maximum
                            __typename
                          }
                          height {
                            minimum
                            maximum
                            __typename
                          }
                          evolutionRequirements {
                            amount
                            name
                            __typename
                          }
                          fleeRate
                          attacks {
                            fast {
                              damage
                              name
                              type
                              __typename
                            }
                            special {
                              damage
                              name
                              type
                              __typename
                            }
                          }
                        }
                        id
                        name
                        resistant
                        types
                        weaknesses
                        maxCP
                        maxHP
                        weight {
                          minimum
                          maximum
                          __typename
                        }
                        height {
                          minimum
                          maximum
                          __typename
                        }
                        evolutionRequirements {
                          amount
                          name
                          __typename
                        }
                        fleeRate
                        attacks {
                          fast {
                            damage
                            name
                            type
                            __typename
                          }
                          special {
                            damage
                            name
                            type
                            __typename
                          }
                        }
                      }
                      id
                      name
                      resistant
                      types
                      weaknesses
                      maxCP
                      maxHP
                      weight {
                        minimum
                        maximum
                        __typename
                      }
                      height {
                        minimum
                        maximum
                        __typename
                      }
                      evolutionRequirements {
                        amount
                        name
                        __typename
                      }
                      fleeRate
                      attacks {
                        fast {
                          damage
                          name
                          type
                          __typename
                        }
                        special {
                          damage
                          name
                          type
                          __typename
                        }
                      }
                    }
                    id
                    name
                    resistant
                    types
                    weaknesses
                    maxCP
                    maxHP
                    weight {
                      minimum
                      maximum
                      __typename
                    }
                    height {
                      minimum
                      maximum
                      __typename
                    }
                    evolutionRequirements {
                      amount
                      name
                      __typename
                    }
                    fleeRate
                    attacks {
                      fast {
                        damage
                        name
                        type
                        __typename
                      }
                      special {
                        damage
                        name
                        type
                        __typename
                      }
                    }
                  }
                  id
                  name
                  resistant
                  types
                  weaknesses
                  maxCP
                  maxHP
                  weight {
                    minimum
                    maximum
                    __typename
                  }
                  height {
                    minimum
                    maximum
                    __typename
                  }
                  evolutionRequirements {
                    amount
                    name
                    __typename
                  }
                  fleeRate
                  attacks {
                    fast {
                      damage
                      name
                      type
                      __typename
                    }
                    special {
                      damage
                      name
                      type
                      __typename
                    }
                  }
                }
                id
                name
                resistant
                types
                weaknesses
                maxCP
                maxHP
                weight {
                  minimum
                  maximum
                  __typename
                }
                height {
                  minimum
                  maximum
                  __typename
                }
                evolutionRequirements {
                  amount
                  name
                  __typename
                }
                fleeRate
                attacks {
                  fast {
                    damage
                    name
                    type
                    __typename
                  }
                  special {
                    damage
                    name
                    type
                    __typename
                  }
                }
              }
              id
              name
              resistant
              types
              weaknesses
              maxCP
              maxHP
              weight {
                minimum
                maximum
                __typename
              }
              height {
                minimum
                maximum
                __typename
              }
              evolutionRequirements {
                amount
                name
                __typename
              }
              fleeRate
              attacks {
                fast {
                  damage
                  name
                  type
                  __typename
                }
                special {
                  damage
                  name
                  type
                  __typename
                }
              }
            }
            id
            name
            resistant
            types
            weaknesses
            maxCP
            maxHP
            weight {
              minimum
              maximum
              __typename
            }
            height {
              minimum
              maximum
              __typename
            }
            evolutionRequirements {
              amount
              name
              __typename
            }
            fleeRate
            attacks {
              fast {
                damage
                name
                type
                __typename
              }
              special {
                damage
                name
                type
                __typename
              }
            }
          }
          id
          name
          resistant
          types
          weaknesses
          maxCP
          maxHP
          weight {
            minimum
            maximum
            __typename
          }
          height {
            minimum
            maximum
            __typename
          }
          evolutionRequirements {
            amount
            name
            __typename
          }
          fleeRate
          attacks {
            fast {
              damage
              name
              type
              __typename
            }
            special {
              damage
              name
              type
              __typename
            }
          }
        }
        id
        name
        resistant
        types
        weaknesses
        maxCP
        maxHP
        weight {
          minimum
          maximum
          __typename
        }
        height {
          minimum
          maximum
          __typename
        }
        evolutionRequirements {
          amount
          name
          __typename
        }
        fleeRate
        attacks {
          fast {
            damage
            name
            type
            __typename
          }
          special {
            damage
            name
            type
            __typename
          }
        }
      }
      ...PokemonItem
      
    }
  }
`, [PokemonItemFragment]);

const PokemonList = () => {
  const [result] = useQuery({ query: PokemonsQuery });

  const { data, fetching, error } = result;

  if (error) {
    return (
      <>
        <h3>Oh no!</h3>
        <pre>{error.message}</pre>
      </>
    );
  } else if (fetching || !data) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {data.pokemons ? (
        <ul>
          {data.pokemons.map((pokemon, index) => (
            <PokemonItem data={pokemon} key={pokemon?.id || index} />
          ))}
        </ul>
      ) : (
        <h3>Your Pokedex is empty.</h3>
      )}
    </div>
  );
};

export { PokemonList };
