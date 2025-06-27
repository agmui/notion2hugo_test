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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2IT2FG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIF7YJWlfXnncrnWR%2F0XLj2ugHoHMD8stM5HbTEX3oe8yAiAiejCRwxDu7m%2Bdlsy7mHL2ZxAyU4FNT%2BpN0qb1ygczsyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM6xi352PenLkDHiyEKtwD2aRLaRp0aEjEZyq75iGTnjQY2IwITlp9sygnULkMS3YGJ7%2Fm8V6eXTjpQjDJwVoYecj%2BsF6FKjtdc5jWSjFEWJDC0aA6kAbITNj2HCwFx9%2BMcMOfwWhlnh9dreXJtUpO%2ForOf5xE%2FZTZAl5ZhZAxX26mrjB8VqqNJT1QyMmQdh%2FTyzVfEEy5er78YXNPSnhwT26mBztuXO1eq6jwDv89yYki0vQiI9VII9hdAY54BI7RIXsyADgB3FUkxs6C4jSH%2FdT71BtdumR1j255HLDUCJglcQjqOm1APUKnMWEvBgF7XIvbuEtBVyHlq%2FIgG%2BJPvG4RKsaUs7sL839u6vZHzpAD1mzPc6bE7y9vCNHgPIIWW2wSiumjVkzTTfIgjYbtoC3R40PnGc%2BHLd1nCeZvbNk%2FbWOe1Tm1wdG9KyPeIATqNaw%2B0Dakk1M2GKvdj%2FQ4ddS1UOi6baG9ZRrWbgGRsE6mJxwaallYhfx9RnGjkIU5Vqgdwm%2FwJJQOO1L6t%2FajsPa1V%2BU4hRIf5pHCHpnV%2B6E12dkeLEMhOYs59%2B0h%2BnbdSnxBcMctr5292AGtlrOr2nIhz0TiXahOlpJT3JvhY9j6Rh4%2F8wkBIn%2BfswDTdja5OL3QD8FQrrluqWQwgPj4wgY6pgHZt3bdjsMWCXpCQ6yh2tWDuIZ1rU3Gs9MD5Cbd30GZOMxYMx8nX0ldiCxj939St%2BGH67W%2BWlc55ryUdmbuvIxLAcVr7%2B586ufhQ1YnDn4lTIfthGQpn%2Bdk7nTNDSajODacLG2gx29WQUmxil4joj5%2Fy9KUkkMfdSkiiP1%2FTXbMQnU6xoXEYsmFf6vjmXrLbBRS5qNib0oZZXsK0OfYIejvNfSsBFa2&X-Amz-Signature=c703c3dc4663b58b4b5b472cc7b5ebf98cdb94e3d417cbb945467b8ab5270140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2IT2FG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIF7YJWlfXnncrnWR%2F0XLj2ugHoHMD8stM5HbTEX3oe8yAiAiejCRwxDu7m%2Bdlsy7mHL2ZxAyU4FNT%2BpN0qb1ygczsyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM6xi352PenLkDHiyEKtwD2aRLaRp0aEjEZyq75iGTnjQY2IwITlp9sygnULkMS3YGJ7%2Fm8V6eXTjpQjDJwVoYecj%2BsF6FKjtdc5jWSjFEWJDC0aA6kAbITNj2HCwFx9%2BMcMOfwWhlnh9dreXJtUpO%2ForOf5xE%2FZTZAl5ZhZAxX26mrjB8VqqNJT1QyMmQdh%2FTyzVfEEy5er78YXNPSnhwT26mBztuXO1eq6jwDv89yYki0vQiI9VII9hdAY54BI7RIXsyADgB3FUkxs6C4jSH%2FdT71BtdumR1j255HLDUCJglcQjqOm1APUKnMWEvBgF7XIvbuEtBVyHlq%2FIgG%2BJPvG4RKsaUs7sL839u6vZHzpAD1mzPc6bE7y9vCNHgPIIWW2wSiumjVkzTTfIgjYbtoC3R40PnGc%2BHLd1nCeZvbNk%2FbWOe1Tm1wdG9KyPeIATqNaw%2B0Dakk1M2GKvdj%2FQ4ddS1UOi6baG9ZRrWbgGRsE6mJxwaallYhfx9RnGjkIU5Vqgdwm%2FwJJQOO1L6t%2FajsPa1V%2BU4hRIf5pHCHpnV%2B6E12dkeLEMhOYs59%2B0h%2BnbdSnxBcMctr5292AGtlrOr2nIhz0TiXahOlpJT3JvhY9j6Rh4%2F8wkBIn%2BfswDTdja5OL3QD8FQrrluqWQwgPj4wgY6pgHZt3bdjsMWCXpCQ6yh2tWDuIZ1rU3Gs9MD5Cbd30GZOMxYMx8nX0ldiCxj939St%2BGH67W%2BWlc55ryUdmbuvIxLAcVr7%2B586ufhQ1YnDn4lTIfthGQpn%2Bdk7nTNDSajODacLG2gx29WQUmxil4joj5%2Fy9KUkkMfdSkiiP1%2FTXbMQnU6xoXEYsmFf6vjmXrLbBRS5qNib0oZZXsK0OfYIejvNfSsBFa2&X-Amz-Signature=e3254b2034542e8201eac6f4489608a7834dca503684e70bb1bae8eabc0cb25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
