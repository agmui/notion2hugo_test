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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJAZAL4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD44g3Enjst7bizIO%2Bbd6keOsDpmoyM1dYM8zDQIquVfwIgU5ZiXakGF1lgQDn%2B7Deauboht3oRSzGnY3hK4FNWlPAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH2CdCbmVrASoBhpLyrcA2O%2Be1ddxW3m%2FACgAtQf60QPEa6KQSaKj0w3nQW7iPfe%2B%2FXOWKYbqDUSZh1MfhEGEfF7uojCDjZ8raGkMZYyCdsFITcWOmIyXPAwzdwS9rPmsu%2BMVLR3zcnj4KtAQQZprtSUpphmBzFYAuIR0LTzP%2BKSFzjmBZGqbLfzpTZCLTQlNoZEfcWQc6VKQixFDPpA4P8j%2FBgXdvEfsBw2jFkUfieU4QcgXUs8s%2FzuK1SlZulpBXMll9uiGOTp7aoW8mehqE1e3WSDbd3n%2BHl%2BbLlP1R%2FdnuvH4LwKg%2Fa%2FqXV5VoqMBfzRPLuA7%2FWb8K13%2Bywn6NkrKwzNyKq9Ym64%2BnaidUq3baL11YmnTVLZaDViu%2BytaL%2BRGm28SkeDueEd2UY2%2BMEyZPDsjOBXLcYXJppxFahtUe%2BnzsDP2egRA2YGxEvDe5tzsOcWEc%2BEWGZ19JKbkUZ5soEQsMf3c6yG95sXylr%2FdGx91s8xLyzYLReiPjuMWiVLXvyEQ%2FGNLgkt4QEc5s0U%2F6LnLMTHsNmGrnqDBFHC5%2FioXm3UL5VfuP6KRwbVk0k8WV9ILdRUEnDNy%2BQZGhD4ooqA4m86wVSqiGZPXGWl8n3IeBza0Li18y3FNG2yTzcoVWXoCp9PMvriMLG%2FoMMGOqUBjhBYHpxW9WLezY9WStOoPPDdyp%2Bzgn3cxKy%2FrPqbn33fRr3Ck9fuoqxxTy53M81oj0nMm7wOO60rZvG0mLGZEoXDWW9HafKB7hznqMXawEba2VdOi7UBNAMmlEYyuJZ5mDFT1GhvHUCzBcpY9JymzT0oOwtn8p3g3g68SD%2BjhIyrA1YheMYE2uATfJ0HCgMRAUfl76tJOQnIZb6PJw%2BoHqpV5uMX&X-Amz-Signature=6e435a40b89e30e05566c77277dfc5f4749cfb903b790bb944867b453e913408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJAZAL4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD44g3Enjst7bizIO%2Bbd6keOsDpmoyM1dYM8zDQIquVfwIgU5ZiXakGF1lgQDn%2B7Deauboht3oRSzGnY3hK4FNWlPAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH2CdCbmVrASoBhpLyrcA2O%2Be1ddxW3m%2FACgAtQf60QPEa6KQSaKj0w3nQW7iPfe%2B%2FXOWKYbqDUSZh1MfhEGEfF7uojCDjZ8raGkMZYyCdsFITcWOmIyXPAwzdwS9rPmsu%2BMVLR3zcnj4KtAQQZprtSUpphmBzFYAuIR0LTzP%2BKSFzjmBZGqbLfzpTZCLTQlNoZEfcWQc6VKQixFDPpA4P8j%2FBgXdvEfsBw2jFkUfieU4QcgXUs8s%2FzuK1SlZulpBXMll9uiGOTp7aoW8mehqE1e3WSDbd3n%2BHl%2BbLlP1R%2FdnuvH4LwKg%2Fa%2FqXV5VoqMBfzRPLuA7%2FWb8K13%2Bywn6NkrKwzNyKq9Ym64%2BnaidUq3baL11YmnTVLZaDViu%2BytaL%2BRGm28SkeDueEd2UY2%2BMEyZPDsjOBXLcYXJppxFahtUe%2BnzsDP2egRA2YGxEvDe5tzsOcWEc%2BEWGZ19JKbkUZ5soEQsMf3c6yG95sXylr%2FdGx91s8xLyzYLReiPjuMWiVLXvyEQ%2FGNLgkt4QEc5s0U%2F6LnLMTHsNmGrnqDBFHC5%2FioXm3UL5VfuP6KRwbVk0k8WV9ILdRUEnDNy%2BQZGhD4ooqA4m86wVSqiGZPXGWl8n3IeBza0Li18y3FNG2yTzcoVWXoCp9PMvriMLG%2FoMMGOqUBjhBYHpxW9WLezY9WStOoPPDdyp%2Bzgn3cxKy%2FrPqbn33fRr3Ck9fuoqxxTy53M81oj0nMm7wOO60rZvG0mLGZEoXDWW9HafKB7hznqMXawEba2VdOi7UBNAMmlEYyuJZ5mDFT1GhvHUCzBcpY9JymzT0oOwtn8p3g3g68SD%2BjhIyrA1YheMYE2uATfJ0HCgMRAUfl76tJOQnIZb6PJw%2BoHqpV5uMX&X-Amz-Signature=6e41892ac006afac5b2ad5f2e3ef2e97bc5407c976e60cb494deaa1e8c785b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
