import { FragmentOf, graphql, readFragment } from '../graphql';

export const PokemonItemFragment = graphql(`
                                        
                                        
                                        
                                        
                                        
                                        
                                    
                                        
                                        
                                        
                                        
                                        
  fragment PokemonItem on Pokemon {
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
      evolutions {
        id
        evolutions {
          id
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
              }
            }
          }
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
    }
  }
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
`);

interface Props {
  data: FragmentOf<typeof PokemonItemFragment> | null;
}

const PokemonItem = ({ data }: Props) => {
  const pokemon = readFragment(PokemonItemFragment, data);
  if (!pokemon) {
    return null;
  }

  return (
    <li>
      {pokemon.name}
    </li>
  );
};

export { PokemonItem };
