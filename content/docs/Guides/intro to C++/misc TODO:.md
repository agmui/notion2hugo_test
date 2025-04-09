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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QALSHZA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCrKO1tS3GaRS8KGxcWPRmxTDY2TEnQ10%2Bzi%2BRAngprzAIgBmlv1S8AI2vj562hRzoI6zZ%2BoVDbbjX%2Buf42oO%2B9aNcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhX0TyWpefiFKOv3ircA6jnd%2B8jzaZPODgZSBByrvQnDRUq5q1B1T%2F2bVX5itZJm15ffEy2DOUKit85p%2B8KVJU%2FORTxzc6YTh3UaU7Lg43P4Lz0NaK0cQ%2FPv55ID8TeX8Eig6FLNWEObfaeWlIyMBWEjGvHiK1SbP8btnrSFdxw4XrO7sz2pmxIzvkTEJdQwd2NDB%2B49z%2F2Qg7Sjlw6Hb4pDCmv09ADYUTh6t9A1yv1uCDEro2gAZV2O%2BwM5t8ZaqYJ6kZlz%2FnrxVBaYvnoOf7sYrnjtxjccWBlpYhpbKbBGJDDvl41YVHN7qTxmY9TvwSR6vP3zPh1%2Fw8MnofVu%2FCftb4Kil0ErJ4e%2BvTcRkYx7u4C6C9kbvy655V22n1Ix04%2ByT9qNMhe6RuN3RQyAp44byHL4ueAR5ZzRl0UCSiTxDMzMECbzxvDkDrMerYM8SeGBS8HjpaolrnJVAEu7kBcqt0zDNik9sptA4T3Ouifw%2Bsy7k6WHI6ixanSK4DWRY3wE%2FE%2F9aCfIwjHRja2uBAPu0UmEkM3p0aDllZ1nx1ezP6R%2Fn67Rk3m9z%2FjpZ1qhfi7ZStkfyf2oK4TnPoAUmUoereRcSCuRlcX0Gl8VCA1dm0oioHBgTSZVuErp3Com4OEcsbMAJoGBxbBMPeZ2L8GOqUB%2FB0F%2BkyNZIhdUjlBalmJmRGtQWvrFyzygesCGYs2bhu9uLXRiO1kuOSpyWPjbRG4M4QAtL8XiN0CEFRkCbBvR1MWhFeI%2FCJ7kjROu7XlTTf70ZN%2BEuPyOzJVrDFIhFcOyqf5d7sGZh2p%2FRxZOF24h3JyiWoLRXKcPnow6cYoBayhoiyUMWgNnJ8elwGhZxWavm5V%2B%2FGQ7T7xEJndF%2BiRQqibX94o&X-Amz-Signature=9dce48ce19ef6bc8bbd2b786196bfb73a2de3e68805425cbd25263d085bcb866&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QALSHZA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCrKO1tS3GaRS8KGxcWPRmxTDY2TEnQ10%2Bzi%2BRAngprzAIgBmlv1S8AI2vj562hRzoI6zZ%2BoVDbbjX%2Buf42oO%2B9aNcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhX0TyWpefiFKOv3ircA6jnd%2B8jzaZPODgZSBByrvQnDRUq5q1B1T%2F2bVX5itZJm15ffEy2DOUKit85p%2B8KVJU%2FORTxzc6YTh3UaU7Lg43P4Lz0NaK0cQ%2FPv55ID8TeX8Eig6FLNWEObfaeWlIyMBWEjGvHiK1SbP8btnrSFdxw4XrO7sz2pmxIzvkTEJdQwd2NDB%2B49z%2F2Qg7Sjlw6Hb4pDCmv09ADYUTh6t9A1yv1uCDEro2gAZV2O%2BwM5t8ZaqYJ6kZlz%2FnrxVBaYvnoOf7sYrnjtxjccWBlpYhpbKbBGJDDvl41YVHN7qTxmY9TvwSR6vP3zPh1%2Fw8MnofVu%2FCftb4Kil0ErJ4e%2BvTcRkYx7u4C6C9kbvy655V22n1Ix04%2ByT9qNMhe6RuN3RQyAp44byHL4ueAR5ZzRl0UCSiTxDMzMECbzxvDkDrMerYM8SeGBS8HjpaolrnJVAEu7kBcqt0zDNik9sptA4T3Ouifw%2Bsy7k6WHI6ixanSK4DWRY3wE%2FE%2F9aCfIwjHRja2uBAPu0UmEkM3p0aDllZ1nx1ezP6R%2Fn67Rk3m9z%2FjpZ1qhfi7ZStkfyf2oK4TnPoAUmUoereRcSCuRlcX0Gl8VCA1dm0oioHBgTSZVuErp3Com4OEcsbMAJoGBxbBMPeZ2L8GOqUB%2FB0F%2BkyNZIhdUjlBalmJmRGtQWvrFyzygesCGYs2bhu9uLXRiO1kuOSpyWPjbRG4M4QAtL8XiN0CEFRkCbBvR1MWhFeI%2FCJ7kjROu7XlTTf70ZN%2BEuPyOzJVrDFIhFcOyqf5d7sGZh2p%2FRxZOF24h3JyiWoLRXKcPnow6cYoBayhoiyUMWgNnJ8elwGhZxWavm5V%2B%2FGQ7T7xEJndF%2BiRQqibX94o&X-Amz-Signature=8e63e2a11a3eb88941d68786ab1be657d8f9809b28988e1971e0c7a9450b03aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
