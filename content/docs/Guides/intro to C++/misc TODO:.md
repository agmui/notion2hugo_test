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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664UZ7E2S%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDjUGp%2FRQU1nhrUZz3VB%2BXiuUmOfXuSkjkpENAmSYbgQAIgCiwyJmxKBfGPBDssziG%2BlOn2VfpPywa4qmVV0r3b%2FPgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzh2L3USc2Ab1KVYircA73LhWfNfPxg%2FFFbM%2FYl6emjQCneKUPoBxCg5B8HuxbOTiq9yXx%2Bp6OcgA1NuO5qm0Qk5EqCIkhCN7poTnWmdVDeFgt6BK0ItMSKHxanUUcURxpEPIl4y2okFMh2%2BitcVvEdPVS2sNiDNMNvliiS3A9kxGxlE%2FtZEsPBnPQ0uJlz50anKxwpF9E%2F9Drc4gFueo4S7w%2F2A8oB%2BOM9URyQa8Rp3Izi%2Brapf6ccI94DBZ1IEC3%2FQIFGs89yeBuOnpibhjmfEV%2BaxyiN%2F3DqUn3yy8muSdQzK8PB%2BbJxoOvncx7n2j94O8%2BgSONgFvOmCBZQWnC%2F5wWwzbG5G2EnTRO3NQdoXAOAEzkFnckLYR3Oylw%2BIeQtqOnRhJumIOzFYDKJ%2FZytig7rmFt%2F33UCL6Vz7xAzC9SqYb5dwkS3LRqIeVO3IyLaWP0qbi3coL6EQKDfVnmVuqTR7xWivuR%2BLy9ueF%2Fk3FFOYb1RNxp1mB1RnQkhV1GbVJBxlWpKZS3kUDeIoVnac96HQl%2BZHqHNi5LFv%2Fn64eAou%2B6BXRjHQ%2BUh7rq%2BwjbQZXt6ydJJdYVlBprC0G0p4i2%2FPtMZ%2B1PuNKrAa1EmD0hNoEcNn5OkL66IV3FZr1GGAD3pXkV1ntPMMJi4ysAGOqUBMkP1lWQDHTuPtjUu9nJ9MRveOeGFJwhoE6aZi%2BzKVvnSB5uXVr1W1u5JNUIJABl2yuyE%2Busl7DmItnyf3L84QFFBWM7sdTpilE7jQxKPeGZGdmWnzORryA8WhI6D3tSlINr%2ByDw%2F0gj3ySy3%2Fat85edDui98weJQFVhM%2FaSzjoG1Lmj5OkIrEBeNqtW%2B%2BrDdx4NvU%2FlAxyct0iXeQPtN1LD0XtGe&X-Amz-Signature=eef60f87abe5b8e625d9d61a93f2e0c857afb484e8829555bd4b6857c9227ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664UZ7E2S%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDjUGp%2FRQU1nhrUZz3VB%2BXiuUmOfXuSkjkpENAmSYbgQAIgCiwyJmxKBfGPBDssziG%2BlOn2VfpPywa4qmVV0r3b%2FPgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzh2L3USc2Ab1KVYircA73LhWfNfPxg%2FFFbM%2FYl6emjQCneKUPoBxCg5B8HuxbOTiq9yXx%2Bp6OcgA1NuO5qm0Qk5EqCIkhCN7poTnWmdVDeFgt6BK0ItMSKHxanUUcURxpEPIl4y2okFMh2%2BitcVvEdPVS2sNiDNMNvliiS3A9kxGxlE%2FtZEsPBnPQ0uJlz50anKxwpF9E%2F9Drc4gFueo4S7w%2F2A8oB%2BOM9URyQa8Rp3Izi%2Brapf6ccI94DBZ1IEC3%2FQIFGs89yeBuOnpibhjmfEV%2BaxyiN%2F3DqUn3yy8muSdQzK8PB%2BbJxoOvncx7n2j94O8%2BgSONgFvOmCBZQWnC%2F5wWwzbG5G2EnTRO3NQdoXAOAEzkFnckLYR3Oylw%2BIeQtqOnRhJumIOzFYDKJ%2FZytig7rmFt%2F33UCL6Vz7xAzC9SqYb5dwkS3LRqIeVO3IyLaWP0qbi3coL6EQKDfVnmVuqTR7xWivuR%2BLy9ueF%2Fk3FFOYb1RNxp1mB1RnQkhV1GbVJBxlWpKZS3kUDeIoVnac96HQl%2BZHqHNi5LFv%2Fn64eAou%2B6BXRjHQ%2BUh7rq%2BwjbQZXt6ydJJdYVlBprC0G0p4i2%2FPtMZ%2B1PuNKrAa1EmD0hNoEcNn5OkL66IV3FZr1GGAD3pXkV1ntPMMJi4ysAGOqUBMkP1lWQDHTuPtjUu9nJ9MRveOeGFJwhoE6aZi%2BzKVvnSB5uXVr1W1u5JNUIJABl2yuyE%2Busl7DmItnyf3L84QFFBWM7sdTpilE7jQxKPeGZGdmWnzORryA8WhI6D3tSlINr%2ByDw%2F0gj3ySy3%2Fat85edDui98weJQFVhM%2FaSzjoG1Lmj5OkIrEBeNqtW%2B%2BrDdx4NvU%2FlAxyct0iXeQPtN1LD0XtGe&X-Amz-Signature=9bff05bb69577d15e0c0256f0c0f74f1d2565cbfb74330203fd2142f973d8dad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
