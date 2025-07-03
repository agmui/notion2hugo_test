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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CDB5F3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCXMz8LD8rE0vz6PiP4IO2Xv2Hw%2FsKvozuYNG%2FaFkefmQIgCry1Q2pcqrcCxAmZ%2FPzALmTuxJjHIi06%2BA5THQtbWlMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH14QhmPg5EKMu%2FGDCrcA%2BGAlEMlGgW70Rtl6WosAlRzyD72YDla6c3D5SPPfpbwk%2B7dq%2BaerHQsFbH9ITPwEbswUagIeYQCzIUHY%2FwTFugyXTcNocxEDuwjgTCdzq1U%2BFlZGkqLBN5tnyJDfgCHIIwI0gN%2BrXQJMJOvWKOYg91f3jBN%2FrFizkOdF5IiYlCzLgqI3TlkMO7OY%2FrvKLeI9tZHnqHH8pK3kxNgxoqIjZbdRmlG9JGxlpR8THNzaZLIugGy8h3zZddOgOQlICiMTgRtshG5buK4DqS7px5lvBvaFPEQOFsHvcmsPZTioNlQ797qDgd3AUCV1rsrXGtQSUzNQCpw%2FbF821YNsqDnGwN%2FHuwN%2BehluemWbVKGfAISRd6bWQ0l7%2FzKsfI1RWgv3nPZKy4%2F5gjBa%2FJ89Qcp4oCEB%2F68THPssBSwS9uxdhOpVcHtIrJ3hAFagNOmuZ816%2F4f4hz%2BgX3IlUY1ETMg2fETZd773fV0FO2yvQJsrblYkdWDsnYeWpHMMC%2FKjMjhkBgnJLLYsi3lxTWRMh1yMSwnHGi5rFeBIGKry3xgP7PDmvnGg4ami64%2BUsnRmQaM4VVvqih1iFrL4vl5YMRDzXNqrSvjR%2BUYCaMdD6I8sgQDuHNjCp%2BO%2FVg3A2GqMNiHmMMGOqUB3m5QvR9SrlwVC36WEXWSWqq1zqTJgDzmON9137AUoGk5sPeroUnU3BSOfmZjx8A2PFOhYApZbHNjxz%2BdXEuWv4cgUAv1xsXEiCasO0Bo4f228GNeAMkVDk4sJvA6hYcFEm28afoCA6h3xSl9bm9jvsLPzgo7CE2xhsjvXKgRB7GhYAfr0piLTKbPPJRHh2w%2F0Vi5E%2FftJaTXaTkPzR0EMnOFqw9b&X-Amz-Signature=273f04cb2d94f9e565b3bf29cefb1fb7c1c80671b7e9e314ceeda0ae15125348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CDB5F3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCXMz8LD8rE0vz6PiP4IO2Xv2Hw%2FsKvozuYNG%2FaFkefmQIgCry1Q2pcqrcCxAmZ%2FPzALmTuxJjHIi06%2BA5THQtbWlMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH14QhmPg5EKMu%2FGDCrcA%2BGAlEMlGgW70Rtl6WosAlRzyD72YDla6c3D5SPPfpbwk%2B7dq%2BaerHQsFbH9ITPwEbswUagIeYQCzIUHY%2FwTFugyXTcNocxEDuwjgTCdzq1U%2BFlZGkqLBN5tnyJDfgCHIIwI0gN%2BrXQJMJOvWKOYg91f3jBN%2FrFizkOdF5IiYlCzLgqI3TlkMO7OY%2FrvKLeI9tZHnqHH8pK3kxNgxoqIjZbdRmlG9JGxlpR8THNzaZLIugGy8h3zZddOgOQlICiMTgRtshG5buK4DqS7px5lvBvaFPEQOFsHvcmsPZTioNlQ797qDgd3AUCV1rsrXGtQSUzNQCpw%2FbF821YNsqDnGwN%2FHuwN%2BehluemWbVKGfAISRd6bWQ0l7%2FzKsfI1RWgv3nPZKy4%2F5gjBa%2FJ89Qcp4oCEB%2F68THPssBSwS9uxdhOpVcHtIrJ3hAFagNOmuZ816%2F4f4hz%2BgX3IlUY1ETMg2fETZd773fV0FO2yvQJsrblYkdWDsnYeWpHMMC%2FKjMjhkBgnJLLYsi3lxTWRMh1yMSwnHGi5rFeBIGKry3xgP7PDmvnGg4ami64%2BUsnRmQaM4VVvqih1iFrL4vl5YMRDzXNqrSvjR%2BUYCaMdD6I8sgQDuHNjCp%2BO%2FVg3A2GqMNiHmMMGOqUB3m5QvR9SrlwVC36WEXWSWqq1zqTJgDzmON9137AUoGk5sPeroUnU3BSOfmZjx8A2PFOhYApZbHNjxz%2BdXEuWv4cgUAv1xsXEiCasO0Bo4f228GNeAMkVDk4sJvA6hYcFEm28afoCA6h3xSl9bm9jvsLPzgo7CE2xhsjvXKgRB7GhYAfr0piLTKbPPJRHh2w%2F0Vi5E%2FftJaTXaTkPzR0EMnOFqw9b&X-Amz-Signature=6c7cd51929d4665ecdb01d3b21c4d92a02eb31a05c224a797c8478eb4a91ba9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
