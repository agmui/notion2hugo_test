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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN2N3NP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg6VXZEP9igfd62ooiz%2Fe7Y6Q0aXQU1hJ4lmM3jmuW8AiAoP%2BDO%2FR0oax2URYyQViENUQWb0ovOzE5q7T9xPkTB1iqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF01KW7kwlG7hZM39KtwDZeRqAeqpt4bl3z64sPGv2qkLVD8A3hGSl6lOLPpkk39ZOKkO5paF1to%2Bx3nlKXtYHWvgD1uIzQEKFyUNK3FRxFucpGeyky0KBroTV%2B26EjQobp%2FzNeREq%2BhE1ulHbnnGK2rUXT3CTmxbW3AgqLQMR7McPam2774IiTlMz3H3U3echiCLsiOGPzx3Yf6%2FXLxBLacVd85ghYn07ID8%2FjIHM%2BnuYvIPNj4E%2B6RICfMZoVMgCaoL0N0l8C5zM1pqIxpzUwn5nkuKKnMVIb4MNAOkebXivK2F7cwX7l2c51wBXxg5eYkb8woYQpGmmONDUwmcAItKMRSHFpa6EWwf7pJjAufgKazM%2FdAt7lpOoLZFHmOy6SkDfG47EQAIaAvtBm%2FY2HK3pdAFBekwW2ucs4OP5ic5injYXu2Xn0zcMqJ7LcjO%2FM%2FdGy20qmxeJN0KRz%2BCejhMrW9Obu8AxiQ5dcsR%2B9s%2FUfjelKOPLj0%2BX2SB%2FxmIfEK6tPBk5n2PE%2FP1PYBv2gguJ3aQNjoTp31rtNFMaa5DRHGOex9sjdzVUuyiYPKaMt7%2BW1Uox%2FMeJhL6MI2UDHo9m4o4t0CAJcdmKk5dF80%2BV2NXY6FKKI%2B%2B0PX%2FTtEYAojK4QcQijr8E%2BwwiK%2FyvwY6pgFcbnWUhfveqtRtasJ6aa%2FQOdYvJouPyc1I3KtExdZv205ndaa%2FVbamommVNXl77bnDYiABahPeADQH6UPt7nKqC4ZB2WXedM6wgXc9VNHNlr7PXllKD%2BM5TBu121frGcmzfFdYbHPPNsi2V6PhgQpNS%2B%2Fi7LjMxD%2BT9VCi%2BuyeAqybH5SFEcVuqA3aitBvJbzwpF0Qppv%2F9h3SIUtIRKtc%2F1pN6ykU&X-Amz-Signature=18bc5bc92fbbb4f43e639695ed0190466a3851df32e3f5f8125b834265cff90a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN2N3NP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg6VXZEP9igfd62ooiz%2Fe7Y6Q0aXQU1hJ4lmM3jmuW8AiAoP%2BDO%2FR0oax2URYyQViENUQWb0ovOzE5q7T9xPkTB1iqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF01KW7kwlG7hZM39KtwDZeRqAeqpt4bl3z64sPGv2qkLVD8A3hGSl6lOLPpkk39ZOKkO5paF1to%2Bx3nlKXtYHWvgD1uIzQEKFyUNK3FRxFucpGeyky0KBroTV%2B26EjQobp%2FzNeREq%2BhE1ulHbnnGK2rUXT3CTmxbW3AgqLQMR7McPam2774IiTlMz3H3U3echiCLsiOGPzx3Yf6%2FXLxBLacVd85ghYn07ID8%2FjIHM%2BnuYvIPNj4E%2B6RICfMZoVMgCaoL0N0l8C5zM1pqIxpzUwn5nkuKKnMVIb4MNAOkebXivK2F7cwX7l2c51wBXxg5eYkb8woYQpGmmONDUwmcAItKMRSHFpa6EWwf7pJjAufgKazM%2FdAt7lpOoLZFHmOy6SkDfG47EQAIaAvtBm%2FY2HK3pdAFBekwW2ucs4OP5ic5injYXu2Xn0zcMqJ7LcjO%2FM%2FdGy20qmxeJN0KRz%2BCejhMrW9Obu8AxiQ5dcsR%2B9s%2FUfjelKOPLj0%2BX2SB%2FxmIfEK6tPBk5n2PE%2FP1PYBv2gguJ3aQNjoTp31rtNFMaa5DRHGOex9sjdzVUuyiYPKaMt7%2BW1Uox%2FMeJhL6MI2UDHo9m4o4t0CAJcdmKk5dF80%2BV2NXY6FKKI%2B%2B0PX%2FTtEYAojK4QcQijr8E%2BwwiK%2FyvwY6pgFcbnWUhfveqtRtasJ6aa%2FQOdYvJouPyc1I3KtExdZv205ndaa%2FVbamommVNXl77bnDYiABahPeADQH6UPt7nKqC4ZB2WXedM6wgXc9VNHNlr7PXllKD%2BM5TBu121frGcmzfFdYbHPPNsi2V6PhgQpNS%2B%2Fi7LjMxD%2BT9VCi%2BuyeAqybH5SFEcVuqA3aitBvJbzwpF0Qppv%2F9h3SIUtIRKtc%2F1pN6ykU&X-Amz-Signature=be24e64e99f9e1bfe17449465e349a2ba47ac3a460e01b5d0fcbecf3ea2e828c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
