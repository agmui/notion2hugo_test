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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HBQM4M3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7LmFs3%2FYVjkDb0IjQlyjiZH0oCL3l2Y7hW9vLtD7JcwIgML6rXpjJuz7X%2Bv2c6KrFZNvhFWLm%2BwxQUrbosWZOOmwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDH0oXmnTIGU%2FLy%2BItCrcA6hfJaAMCTtt5R%2Fvv3RGUX%2Bv1AMkB4T65sYyGxHj47Lr073kDTxhoGihLVv0ksQfmxHsGbYnlRLodPsM%2FwcxgLxGDwoLTMoOzRwU3g4XRAjItY7FT%2Bpsf1AhDNjKGlryvpLOmkZQuJ2c5KhKUKRFXNqwkQPBzVFsC9o3pL1J69cYISYaHk8izWtpIW1xtMv9q93Lq01GX2wpXmcksFpBiQFXiGa6b5KYne8OQlrUi%2BsmYpH5hauF32xktOD6w7KT5Y4VtCqxIyTfkUWWZzjTEv5%2FKF5gtHs0VRY99AobelgPaVhctHGKH4rUiFBJeJg9sfndTN4vPNN%2FIw%2FFro97jCNh9L3xSAe9VEonp6U%2FTdwE8LJWMxw5TSoDt9P%2Big8QUBMp4%2B%2FcoqYn7S5dtbTdVRO5H5D03gcxLg3MVwJpKc4aiFQqWHN4lDkjc%2Fdg3WMkMNDYhkgVZZJ7hg3dVL7TtHZ1GeETlpZdRFMuHM7xKN%2BM9EPiVaYJ93IHxDrDFlqQq28W3NPyanyTZRb04cndMpUOMJcLc68YMawVbxzCaOoqCrcLyGmOFN6vZkHqtiqac1HBAfiBVXzukNtVPtuYtA3hqi5JDxMVE%2BGqlZSO9sC9WyV6G0SMljWUekOLMImMw8IGOqUBIfsGXM2Wn5LIoYp%2F1RoB%2BoFrzBbbaZcvvOOGdPTCbAiDKorp62eug2LgV5MuAZOMoMcgt09o2VBPt4wSlnff53xP%2FhQfTypUY9M7Gt79RiojuL8m4k4FtiMJitu%2B2gDNz0HxD7PjCndbi7l8wEWJY0ZyGC1C5tvVz0Vj94KjfL3l%2Bd7Ki8k5%2F1124FwafDqgXa73QuMgPRddEuB98sGmvKFaVdd7&X-Amz-Signature=db59d187eb1f6ed014c2083bff11e01a20072203a27b2df8b28541b8eac10c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HBQM4M3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7LmFs3%2FYVjkDb0IjQlyjiZH0oCL3l2Y7hW9vLtD7JcwIgML6rXpjJuz7X%2Bv2c6KrFZNvhFWLm%2BwxQUrbosWZOOmwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDH0oXmnTIGU%2FLy%2BItCrcA6hfJaAMCTtt5R%2Fvv3RGUX%2Bv1AMkB4T65sYyGxHj47Lr073kDTxhoGihLVv0ksQfmxHsGbYnlRLodPsM%2FwcxgLxGDwoLTMoOzRwU3g4XRAjItY7FT%2Bpsf1AhDNjKGlryvpLOmkZQuJ2c5KhKUKRFXNqwkQPBzVFsC9o3pL1J69cYISYaHk8izWtpIW1xtMv9q93Lq01GX2wpXmcksFpBiQFXiGa6b5KYne8OQlrUi%2BsmYpH5hauF32xktOD6w7KT5Y4VtCqxIyTfkUWWZzjTEv5%2FKF5gtHs0VRY99AobelgPaVhctHGKH4rUiFBJeJg9sfndTN4vPNN%2FIw%2FFro97jCNh9L3xSAe9VEonp6U%2FTdwE8LJWMxw5TSoDt9P%2Big8QUBMp4%2B%2FcoqYn7S5dtbTdVRO5H5D03gcxLg3MVwJpKc4aiFQqWHN4lDkjc%2Fdg3WMkMNDYhkgVZZJ7hg3dVL7TtHZ1GeETlpZdRFMuHM7xKN%2BM9EPiVaYJ93IHxDrDFlqQq28W3NPyanyTZRb04cndMpUOMJcLc68YMawVbxzCaOoqCrcLyGmOFN6vZkHqtiqac1HBAfiBVXzukNtVPtuYtA3hqi5JDxMVE%2BGqlZSO9sC9WyV6G0SMljWUekOLMImMw8IGOqUBIfsGXM2Wn5LIoYp%2F1RoB%2BoFrzBbbaZcvvOOGdPTCbAiDKorp62eug2LgV5MuAZOMoMcgt09o2VBPt4wSlnff53xP%2FhQfTypUY9M7Gt79RiojuL8m4k4FtiMJitu%2B2gDNz0HxD7PjCndbi7l8wEWJY0ZyGC1C5tvVz0Vj94KjfL3l%2Bd7Ki8k5%2F1124FwafDqgXa73QuMgPRddEuB98sGmvKFaVdd7&X-Amz-Signature=cd040a7d584f44a5279a2349100817ea6d269090c5fb0dbe8474829550188f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
