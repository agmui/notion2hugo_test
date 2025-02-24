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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYYZ7TAY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Bng8KlAfL4Tz3iHq1TiektKrrOkt2Lnmm6qKE3gVqAiAhoA3bBPtCXS9j9coUID00g6yb7tHZZtnYXcBGczdGUCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMSjJzVDh1kPDh9tOxKtwDQQa1Ae3jENlpJGYfplB1TjssnEPxfMESvogZ9S%2F43ThrvqGjehlHQUAvvlWkY0sTxxb7YPa2JlbQoh1qmNkpOUmbcFGtcVDXmNNP5WxuFPTo6VCROGX4VXF0mR1X4%2Fz6i%2FCcKDbgBiC3d3SBwjBgSnNl2pJAiE6uHo5whbsYG0xYQm3Qvc3y1wIB%2B13wKRoM5U1NlOYJhF%2B8cX3lniybIrvjuuTMYGT%2F5c8SQGrfU06KUlMrH1q5bBqzWUt%2BluNrUUiqv%2Fopg%2Bj5hyZMQ8E7PIMNErcmnsjTfhmMyV9U7Fvw313gaxj0TgyfQCZZlyIUJnD2Ps4wgeDDKYQwST06CCtLNOUS8ztaz8L1dZACaO%2FEisoRMv0BmUNxZlRSEYdiR8ybXVJxfz0Td7vgNPv4wyTS1cwI8HIEu%2F0zWMr5Cliet4demT1o5kfIXMUOU5U4ntJEv9wWDdDuqg1SiBfWLR%2FYkvhuDIlcOLSdf74UBbd%2BHPXzFKPzCkYNvbXLXygql449GCDjTSKogsy%2BScjg1OLT9rofbfCcpNCgYFcUbQOiE8vyqJ3dg69hTrfeyU8DG2gaZdHA%2F7yfgHHqgKj3n%2FnycZT1%2FSTsZoBeQi8JJAj6YX%2BTL5YnBisqlTQwufDuvQY6pgG3hW5kvN4Aoq2FVhskJggoN0dIY7NauiQm5rEc0EFqF6N%2BthCPxYeVs586rJq788rgZ%2BgzzZcOsL1341f%2FLqxQPxzvI1uvn1ZQN68qdGau6VSaJ0%2BOj30PFC1FFtGJyz8DjsFh5mvI1D8JfpFl6pmyOfIV6YGd8SprXEqE9hQKVZUeX0Ct18Dcp3NCwTxx6AHtNPhCn%2BZvaOoAKchcJAVMREPMpUtt&X-Amz-Signature=d07c0ecaa7f7b2fe9098857b8b6eb80a1323fbd48b3ee3a7c70d2c96e3cbdbb5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYYZ7TAY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Bng8KlAfL4Tz3iHq1TiektKrrOkt2Lnmm6qKE3gVqAiAhoA3bBPtCXS9j9coUID00g6yb7tHZZtnYXcBGczdGUCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMSjJzVDh1kPDh9tOxKtwDQQa1Ae3jENlpJGYfplB1TjssnEPxfMESvogZ9S%2F43ThrvqGjehlHQUAvvlWkY0sTxxb7YPa2JlbQoh1qmNkpOUmbcFGtcVDXmNNP5WxuFPTo6VCROGX4VXF0mR1X4%2Fz6i%2FCcKDbgBiC3d3SBwjBgSnNl2pJAiE6uHo5whbsYG0xYQm3Qvc3y1wIB%2B13wKRoM5U1NlOYJhF%2B8cX3lniybIrvjuuTMYGT%2F5c8SQGrfU06KUlMrH1q5bBqzWUt%2BluNrUUiqv%2Fopg%2Bj5hyZMQ8E7PIMNErcmnsjTfhmMyV9U7Fvw313gaxj0TgyfQCZZlyIUJnD2Ps4wgeDDKYQwST06CCtLNOUS8ztaz8L1dZACaO%2FEisoRMv0BmUNxZlRSEYdiR8ybXVJxfz0Td7vgNPv4wyTS1cwI8HIEu%2F0zWMr5Cliet4demT1o5kfIXMUOU5U4ntJEv9wWDdDuqg1SiBfWLR%2FYkvhuDIlcOLSdf74UBbd%2BHPXzFKPzCkYNvbXLXygql449GCDjTSKogsy%2BScjg1OLT9rofbfCcpNCgYFcUbQOiE8vyqJ3dg69hTrfeyU8DG2gaZdHA%2F7yfgHHqgKj3n%2FnycZT1%2FSTsZoBeQi8JJAj6YX%2BTL5YnBisqlTQwufDuvQY6pgG3hW5kvN4Aoq2FVhskJggoN0dIY7NauiQm5rEc0EFqF6N%2BthCPxYeVs586rJq788rgZ%2BgzzZcOsL1341f%2FLqxQPxzvI1uvn1ZQN68qdGau6VSaJ0%2BOj30PFC1FFtGJyz8DjsFh5mvI1D8JfpFl6pmyOfIV6YGd8SprXEqE9hQKVZUeX0Ct18Dcp3NCwTxx6AHtNPhCn%2BZvaOoAKchcJAVMREPMpUtt&X-Amz-Signature=423d3675ec49c76d70064e2aad9d1b5c4da64a518d3736ffd093a965b4c3ce2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
