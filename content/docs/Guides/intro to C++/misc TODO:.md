---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3SFPLD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuO5krH3b3AlEC4D%2Fkp6OkggpKNkM3s9%2Fh%2Bv6k6gIreAIhAOPnPKFLamo4bKtVL29uAeoY1CLFm%2F2FdYn0dDPH3VaOKv8DCHgQABoMNjM3NDIzMTgzODA1Igy2vaKc9WPAG%2B%2BVBRsq3AM2Z3BtZ43EbJdGPhuGURqqV1MS2RUdgoqSz%2B1bjKSudBZBdRchSPsuuv1Jp358ubw%2B8TuWOBjOC7y%2FSiaXMj%2FQ%2BYvgSoSzXXb0Awz5Sedlbtl7xFett6lmvh0kDMTk10q%2FhzKrkKCfFoOSwJDxjxdu5H2105%2FME6nch1bJSt%2B2t68Gx1S%2BiTPSTSJh3f4ls9NUs5g1bYSQVS%2Bj9jhhd5Df2xyw0XNR%2BsSMW79C9JyJFV3lvGO3XLMjwqsb3aRpYyrmM7%2BD7gatZbrdglzJ%2FI2vldv2SmEosoVDpCb9%2FmAdjv5ztxBrQrzBFOobYpx0XJq5P8Y4ugmQNauGqhBolnj2waTDHCeAr%2BC%2BmA3DU2TN3PQ1rGznkN6FGJ40MUJ2hL%2BzLYVGBhAocAeEjmF5OTSJm3dtJCRhmjcTT1fE0AE2vcS04RVU4pKyRHHw4axeklgFODwkapZd1XXar6ezIJgBZ3oCN1hQ0f4J%2FQMHAqwqy%2FsTHDxyKBpU25I7wDjxCbeQFnTF7ML9kVMMN6Qnyosg5%2BxeJ%2BvFKWSI62mJ0TNo%2Fx%2F%2F%2Fkp2Xcr4vLpY1mcmlWWOMNTkT1nlYBL%2BmVJuFaNeiLpnr58HRzxoDsZc6DgQ8HbdZwigd29ipIJUiDD885jEBjqkAR0pQkcEYVX0rh3CiUyuRPLCZ00tr8q9CgjMaqB96u1XoT1KKORZ%2B4d4C%2F3gF7uKnmgQ20h0YjWzCyyFLWUA%2B%2BCIH8Y9aDGOun7KuJAibRALm%2F4wJCtnp1zgmhTSeaboOhoATGacwOn5yL%2B7QSiK6mscdpj1L5Q84dD5PoNC4gXjpSzlw6gAklMuFmS%2BmE8Q1a3xERYOJj9nGZnlPz6GkUjJA1C0&X-Amz-Signature=e3d22c25b7eedde11807f7c360606929b6832676d47136078ab89a5b16e9cfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3SFPLD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCuO5krH3b3AlEC4D%2Fkp6OkggpKNkM3s9%2Fh%2Bv6k6gIreAIhAOPnPKFLamo4bKtVL29uAeoY1CLFm%2F2FdYn0dDPH3VaOKv8DCHgQABoMNjM3NDIzMTgzODA1Igy2vaKc9WPAG%2B%2BVBRsq3AM2Z3BtZ43EbJdGPhuGURqqV1MS2RUdgoqSz%2B1bjKSudBZBdRchSPsuuv1Jp358ubw%2B8TuWOBjOC7y%2FSiaXMj%2FQ%2BYvgSoSzXXb0Awz5Sedlbtl7xFett6lmvh0kDMTk10q%2FhzKrkKCfFoOSwJDxjxdu5H2105%2FME6nch1bJSt%2B2t68Gx1S%2BiTPSTSJh3f4ls9NUs5g1bYSQVS%2Bj9jhhd5Df2xyw0XNR%2BsSMW79C9JyJFV3lvGO3XLMjwqsb3aRpYyrmM7%2BD7gatZbrdglzJ%2FI2vldv2SmEosoVDpCb9%2FmAdjv5ztxBrQrzBFOobYpx0XJq5P8Y4ugmQNauGqhBolnj2waTDHCeAr%2BC%2BmA3DU2TN3PQ1rGznkN6FGJ40MUJ2hL%2BzLYVGBhAocAeEjmF5OTSJm3dtJCRhmjcTT1fE0AE2vcS04RVU4pKyRHHw4axeklgFODwkapZd1XXar6ezIJgBZ3oCN1hQ0f4J%2FQMHAqwqy%2FsTHDxyKBpU25I7wDjxCbeQFnTF7ML9kVMMN6Qnyosg5%2BxeJ%2BvFKWSI62mJ0TNo%2Fx%2F%2F%2Fkp2Xcr4vLpY1mcmlWWOMNTkT1nlYBL%2BmVJuFaNeiLpnr58HRzxoDsZc6DgQ8HbdZwigd29ipIJUiDD885jEBjqkAR0pQkcEYVX0rh3CiUyuRPLCZ00tr8q9CgjMaqB96u1XoT1KKORZ%2B4d4C%2F3gF7uKnmgQ20h0YjWzCyyFLWUA%2B%2BCIH8Y9aDGOun7KuJAibRALm%2F4wJCtnp1zgmhTSeaboOhoATGacwOn5yL%2B7QSiK6mscdpj1L5Q84dD5PoNC4gXjpSzlw6gAklMuFmS%2BmE8Q1a3xERYOJj9nGZnlPz6GkUjJA1C0&X-Amz-Signature=27048621d0cf4ca1c270a6810e5ab022eab6d098b297dc6c4ca350c9624395c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
