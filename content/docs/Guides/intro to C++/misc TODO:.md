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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWQRS4J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYWXKbNd0VZC0l1EK9hmNf9rf2S25Ra2ZzNq18z%2BDalAiEAlMl2CqQqg9PGxnmYxDsJeBLOmpliRAJrKnQ1OlrMUPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDecA0%2B0goFifpjd3SrcA7AJw1ZUDxZigxUbeuKcWsrdreTM8%2Fk8kM0m%2FfGYofh%2BA76Ju4RSkTmQFBFKJ6%2BEisL4T3j0X%2FXuDTpzMbDBrjAyPiY1VUIPYEvcjIiB8r3rZbbMXa87zWGef8wWnRAncYJRtFbWnrIFyOMV1eOENn2TsxFuj7pfLZlBo8psFB%2BbdtE5nsSzsTwBH0MXweQQPCxv18AKMMmhBgjbEMA%2BC2jPhilUq%2B3NPob%2FaDdQFGGh7sM0dgqfwQO4z8qZSEWOyZmoOLznKEE85tVGlSd8Imxf9iIYACqmCh%2BFBl1Ga1ZcsqTFwppNowni2Sx7gJg7yCI4WfOAZ4ecUqJ3Ob7YcV0TuOr4913RjaDgOG20l5uAM%2BUnhJRNKHaD8DQ2qy1xZc1v08b1MORn2vZILhc0JLLaS2jj0wel6NpZrjrSTMQki7CWFzExVTJ3uXgUp0V%2B84d6VxI1QPzGOPXvdWZl9iJtx9lY3RCrmWFayAC7%2F%2BtGGXWXZjdX6Roczs%2FxKUSYXaV1%2F%2FPpxDWu3uo6HWXHjOYzJQYvTrdyt7vnuth9TEtjgTVenUNS%2Bh0TOuDBY6ISEFz%2BTZPb6XqnsoKb0iGg08Zrl07gWSuH7VpdlBQO%2B5gtlr0bBDOnj1hU0k%2FZMN21ssQGOqUB%2BRBFSJcubbZB0LKNwkzhf2THzPGzDikYxzyUXHgHplgIxnrSuoJmxY6oWjJpybC7AGRPkw9MriUn1XuaQ2UEP%2FzSt2qKdMGA6dieLgs7dSKy5o9HTHLek%2BROoJfghjSmVZojqELHDyZpybWsiAHL8%2FLlku4MAntvhbQeTrexknP5rxCBgUg9Zq8%2FzjSKuIwoZsoS9A4f0tyZMZoVH7S8cdEUy5MD&X-Amz-Signature=cdd423e6fd06eb9f15d7811624fbda068da51b413c7ae435a316f3bcf5c71a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWQRS4J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYWXKbNd0VZC0l1EK9hmNf9rf2S25Ra2ZzNq18z%2BDalAiEAlMl2CqQqg9PGxnmYxDsJeBLOmpliRAJrKnQ1OlrMUPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDecA0%2B0goFifpjd3SrcA7AJw1ZUDxZigxUbeuKcWsrdreTM8%2Fk8kM0m%2FfGYofh%2BA76Ju4RSkTmQFBFKJ6%2BEisL4T3j0X%2FXuDTpzMbDBrjAyPiY1VUIPYEvcjIiB8r3rZbbMXa87zWGef8wWnRAncYJRtFbWnrIFyOMV1eOENn2TsxFuj7pfLZlBo8psFB%2BbdtE5nsSzsTwBH0MXweQQPCxv18AKMMmhBgjbEMA%2BC2jPhilUq%2B3NPob%2FaDdQFGGh7sM0dgqfwQO4z8qZSEWOyZmoOLznKEE85tVGlSd8Imxf9iIYACqmCh%2BFBl1Ga1ZcsqTFwppNowni2Sx7gJg7yCI4WfOAZ4ecUqJ3Ob7YcV0TuOr4913RjaDgOG20l5uAM%2BUnhJRNKHaD8DQ2qy1xZc1v08b1MORn2vZILhc0JLLaS2jj0wel6NpZrjrSTMQki7CWFzExVTJ3uXgUp0V%2B84d6VxI1QPzGOPXvdWZl9iJtx9lY3RCrmWFayAC7%2F%2BtGGXWXZjdX6Roczs%2FxKUSYXaV1%2F%2FPpxDWu3uo6HWXHjOYzJQYvTrdyt7vnuth9TEtjgTVenUNS%2Bh0TOuDBY6ISEFz%2BTZPb6XqnsoKb0iGg08Zrl07gWSuH7VpdlBQO%2B5gtlr0bBDOnj1hU0k%2FZMN21ssQGOqUB%2BRBFSJcubbZB0LKNwkzhf2THzPGzDikYxzyUXHgHplgIxnrSuoJmxY6oWjJpybC7AGRPkw9MriUn1XuaQ2UEP%2FzSt2qKdMGA6dieLgs7dSKy5o9HTHLek%2BROoJfghjSmVZojqELHDyZpybWsiAHL8%2FLlku4MAntvhbQeTrexknP5rxCBgUg9Zq8%2FzjSKuIwoZsoS9A4f0tyZMZoVH7S8cdEUy5MD&X-Amz-Signature=8e716ee610600ec41bff8000691123bcd4594a9b7880b40ef23cd2cf0c984891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
