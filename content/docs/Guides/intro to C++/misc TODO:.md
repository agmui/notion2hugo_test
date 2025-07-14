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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKJT4QV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD2ZeqPJZ9rvzmg7fWQMQ%2Fw8Vbc4Gn0nrrPR%2BK9YEXAqQIgbYs3xv035vDU7DJsxkERrFrx%2FeMMtt5FO12RM41hCZAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFllBElbXNZhxxaT9ircA6mtZrLY2mVGy0Ndam47qMcGexFvESgpOBatfd%2FjIFLut%2FL%2F4eQUWRgJl5xyLaLd%2Fcc6LnhoRMnL%2Bl0nEghrTEz2dvOeM82tdabWFYf02ZHbggjuOG2JmpKIdUB1LI4amP9I0%2F77Qm6ZaHy1rEG7SiqQ2o5FShXbwegWd7PxLs5d6FwDIgjYZMHn7WB7AptFoBM%2FaphY39wg7Tgqvz5zlfIeEPR6fWwWIuGwXbS%2B4Y8A1SDNg6uof5iBMqIymKUms8NDz9IHYwlYLVm8gCfJbMzicjVe4TrRIlkQeXSAfxqnbFllgPIN1fwInOS65W7ccouphhfQTpQjcHi9ewYa1D7M2ILuVkXjEaU9By2ejfD4P9FYsw%2BnLROS%2B8OIIXHrPe6AXFTD2ZA3BXZ2CfJ4JvbOiFl37tZfPd%2BNP%2FcDdkBCQfMDBKG8gt1tmCYBB9uzpx04nT8K7i3wgvw%2BIjpKWFj0IXhIZv9AHqXqA7DwwYHvuEBs6cV3qy7sbbYxr7Q%2FPW5792ab1avifg3oBQlPCfq5UVL3wszipHwZBJRTrUfqS5XQtbGeSrY7d23czNSqRLU8gy5Rtrq4pgIu4aUiwbf%2BDlC4SWsv7FyS8zdkbVJaty2txAa9khbYDTkrMK7M0cMGOqUBHh86hU7qNs0xQe5wWj1bPupt%2FYPBQpta%2FlxGUq6RjgOOkOt4JeGGkyP4zo%2FxwWPKtfSbgS%2FGx65eYLybb3qbY99sLNeVUZ6f4rgJnSowOMi9727nd03CSLl2gdD%2F0WuogVpO4z8dnV%2FFnFL5UDbHmf5SzlF43v7%2Fjx9llbJseIW3t2YDK2JaWi0mnziMwn0WpKNgzRJC7Y2zq3oiF6sMajYo2S7Q&X-Amz-Signature=141b540ce74f8aba195d8a7a3773db2a7b9ae184f3b7491c172e46b5fc4d803b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SKJT4QV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD2ZeqPJZ9rvzmg7fWQMQ%2Fw8Vbc4Gn0nrrPR%2BK9YEXAqQIgbYs3xv035vDU7DJsxkERrFrx%2FeMMtt5FO12RM41hCZAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFllBElbXNZhxxaT9ircA6mtZrLY2mVGy0Ndam47qMcGexFvESgpOBatfd%2FjIFLut%2FL%2F4eQUWRgJl5xyLaLd%2Fcc6LnhoRMnL%2Bl0nEghrTEz2dvOeM82tdabWFYf02ZHbggjuOG2JmpKIdUB1LI4amP9I0%2F77Qm6ZaHy1rEG7SiqQ2o5FShXbwegWd7PxLs5d6FwDIgjYZMHn7WB7AptFoBM%2FaphY39wg7Tgqvz5zlfIeEPR6fWwWIuGwXbS%2B4Y8A1SDNg6uof5iBMqIymKUms8NDz9IHYwlYLVm8gCfJbMzicjVe4TrRIlkQeXSAfxqnbFllgPIN1fwInOS65W7ccouphhfQTpQjcHi9ewYa1D7M2ILuVkXjEaU9By2ejfD4P9FYsw%2BnLROS%2B8OIIXHrPe6AXFTD2ZA3BXZ2CfJ4JvbOiFl37tZfPd%2BNP%2FcDdkBCQfMDBKG8gt1tmCYBB9uzpx04nT8K7i3wgvw%2BIjpKWFj0IXhIZv9AHqXqA7DwwYHvuEBs6cV3qy7sbbYxr7Q%2FPW5792ab1avifg3oBQlPCfq5UVL3wszipHwZBJRTrUfqS5XQtbGeSrY7d23czNSqRLU8gy5Rtrq4pgIu4aUiwbf%2BDlC4SWsv7FyS8zdkbVJaty2txAa9khbYDTkrMK7M0cMGOqUBHh86hU7qNs0xQe5wWj1bPupt%2FYPBQpta%2FlxGUq6RjgOOkOt4JeGGkyP4zo%2FxwWPKtfSbgS%2FGx65eYLybb3qbY99sLNeVUZ6f4rgJnSowOMi9727nd03CSLl2gdD%2F0WuogVpO4z8dnV%2FFnFL5UDbHmf5SzlF43v7%2Fjx9llbJseIW3t2YDK2JaWi0mnziMwn0WpKNgzRJC7Y2zq3oiF6sMajYo2S7Q&X-Amz-Signature=1a910ebb5df6962bf03ce94d6a7bde982d281de2d2bcfcc944346bb4e93de350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
