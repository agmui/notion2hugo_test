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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGNNJMN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC9caS207nmEXYsULjmQ2QQYPqnmQNpOKv2OR4JSUq%2FJwIgf%2BKLgVSGPIxGKsh3jsgVEIe7LmuMTJXIvhuOtnN4sVQq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGDTgcLkJO1%2BsoK0qSrcAxZOzHDJpRv0Fc%2BBTubY4xl8kakmYNz4OUO2P41gHWVJiKzQeqsfRM7KHWbR1oR35Vt6tjdWOTtaZvx8KGsvQJ1XBixttd5kr%2FasSnkxXK6jBCtLmAhlH%2Fj%2FR%2BFkHcANwlNbCnrznIz1UtxXbNUl2uGGOzqrdovgfOC1ImzSKn6A2toBnN1%2BHO5xS0IctdUEtAb3MMik368pp95IalX%2BLmmyav9HTFjiPMjiz0bjcxPws7O9%2B1mgqDko6ysoTYJa7KSAi3c8LJqwDPu1EqwN%2BNn%2BngiwCHMcdIgK9H2sLDSarfBB%2F54GvB6bu81eC314fkcq27I3%2FlrYt%2BLXSZtyA8IHS%2F4PLAxjTY2T6Fz00NWmgUXWUHwmHB3gw4n0TTrL%2BEhvTHBO4OJ6QKkXqSPDyKjW8Uz%2FVzcUf86lDGmB9J4UCKW0lfBqQQf6NSNNdIxzbeFHCeyJ9RbApNsNwpFAxs917a1KRQhOs8sOlFpSMoG35gg4SVjFH2k8Z6TZzVNRsmenmmw6bmluJZLbnUlOv1Rx31IGiNH63t6jolFH0xOQC%2BJhqDtqsyA404ISRqNUn5DHC2Q2aBGKH6pRMbuu6PZVQN5TPcczNnvADhSNYTi77zBoYn2hWVFWjLQlMISO5MIGOqUBNYIzFbWHQzuHHmJNOiZ%2BESdsLUSJxs6HfEekji0CxbzF4m0fYtPfTAxX9K1WtaMyT8QqWYIFX0TICVNvsMkf3CXb80lX0vs6O65iDoVWlQ8pmbe1YRGuXRoVFms06sjQBBXWWykw%2BOoT0YThzs58GwYGdtN8mbn4vy%2BFrib504Hzo7GEYy4pUR%2FZVmjHaBguq3KaXDv4qrhRImtFr8NAHu46DNwQ&X-Amz-Signature=92f84f098eb5ca3d05237ba0f69239d29b13ebae62d9271a51fac9a09d1b740d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGNNJMN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC9caS207nmEXYsULjmQ2QQYPqnmQNpOKv2OR4JSUq%2FJwIgf%2BKLgVSGPIxGKsh3jsgVEIe7LmuMTJXIvhuOtnN4sVQq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGDTgcLkJO1%2BsoK0qSrcAxZOzHDJpRv0Fc%2BBTubY4xl8kakmYNz4OUO2P41gHWVJiKzQeqsfRM7KHWbR1oR35Vt6tjdWOTtaZvx8KGsvQJ1XBixttd5kr%2FasSnkxXK6jBCtLmAhlH%2Fj%2FR%2BFkHcANwlNbCnrznIz1UtxXbNUl2uGGOzqrdovgfOC1ImzSKn6A2toBnN1%2BHO5xS0IctdUEtAb3MMik368pp95IalX%2BLmmyav9HTFjiPMjiz0bjcxPws7O9%2B1mgqDko6ysoTYJa7KSAi3c8LJqwDPu1EqwN%2BNn%2BngiwCHMcdIgK9H2sLDSarfBB%2F54GvB6bu81eC314fkcq27I3%2FlrYt%2BLXSZtyA8IHS%2F4PLAxjTY2T6Fz00NWmgUXWUHwmHB3gw4n0TTrL%2BEhvTHBO4OJ6QKkXqSPDyKjW8Uz%2FVzcUf86lDGmB9J4UCKW0lfBqQQf6NSNNdIxzbeFHCeyJ9RbApNsNwpFAxs917a1KRQhOs8sOlFpSMoG35gg4SVjFH2k8Z6TZzVNRsmenmmw6bmluJZLbnUlOv1Rx31IGiNH63t6jolFH0xOQC%2BJhqDtqsyA404ISRqNUn5DHC2Q2aBGKH6pRMbuu6PZVQN5TPcczNnvADhSNYTi77zBoYn2hWVFWjLQlMISO5MIGOqUBNYIzFbWHQzuHHmJNOiZ%2BESdsLUSJxs6HfEekji0CxbzF4m0fYtPfTAxX9K1WtaMyT8QqWYIFX0TICVNvsMkf3CXb80lX0vs6O65iDoVWlQ8pmbe1YRGuXRoVFms06sjQBBXWWykw%2BOoT0YThzs58GwYGdtN8mbn4vy%2BFrib504Hzo7GEYy4pUR%2FZVmjHaBguq3KaXDv4qrhRImtFr8NAHu46DNwQ&X-Amz-Signature=a4f4baed7fe124e96f9b758bd02b5f144ee5ca052be68f205a02a4547e02aa2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
