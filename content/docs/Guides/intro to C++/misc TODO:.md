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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXP24GNS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBCYWPCe8O6Tsg7Gzx0RM1fOid6bOqQ9ngWcKP7e7ZOgIgeE3CXnIpiuLl0LKI%2BYjW1xDDqDJDqG%2Bzu0wum2rPWUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7VadJteIGMFeLByircA4riQU89NymruhRslWuFQv3OIO%2B5PpM9ml%2BuvXPIUntSbA7h72NQc9WJJ5XGFdmKYD33SeXxpOvY0NpYfvnF5LtzoOjgO77OQ1wuGRTk8w3PBH6mw%2BDuthmQDu2Jn6B72CLoPfLwlMlA4v54HkNP5ByH6ZSKwwV6hk99ZTRYbCx6NkqS2WqAQrMP6Qyom9ShN9pWoANSGvRxQFA9QjQ%2BtimgXl%2B6MoTW3HNOQCmWfPIiY0M9FFA8nIQXhp6mucetYMsxbrSxfom2rWDh30kDyAbF3aF6PQMrKEwBJLPjMhwLc7LFcciVlipBvijQKJHOcltJimgB8rfB157GG266yPRq2X3nx3QZMvNcJ8Qd7OqT%2FC2yndIVK20osHMJocTbxJ%2BghJJt%2BIiNdgmFnDLXU6eFDq0F%2FbK3g5F%2FDMlbuhtm5udViCtzRYVLSkykAjwX1nakZZLyVt3RkK0wLZOScujQUstfabIXcahqn%2Fl0gDl%2FRBwITIwEYfYn5BFiiqxKDiQcREyjMfRyNXAUACAe6ra2j7NMEbI%2Fz7IyPNLQ0GlS2AcFRMzb4ObQvS0yJJvdUIlLMN9LNj60ZzdZdmSFw9rMQyf5c7L0V233UTSv4FD%2BMxjpjK2ggS0MDRvhMPvehb8GOqUB1cFMW6%2Fx6LrUsfeUCKl8gTzzH3A9Ngp%2BLAPdFovMIi9IbkyG2MP8TudY35QCkQMGWdXt5MuE05H47SjYjBV3oHf%2FSKOnn65MQDPCT1UaGJ0Wca8OT44nYBX0wTWEmoneM34DF%2FXHTklkACcJNYQnbv9thErtbaQ22CdzmCr6GWCiTquXBlyYf4eE3Mu5RXb3DcK0fl0O3w%2BgxNr%2FtQv3wEihmagp&X-Amz-Signature=ce2d5d7a704d60d40a7d32e8462c863d8ce230a7eab1f6546db311da62c34d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXP24GNS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBCYWPCe8O6Tsg7Gzx0RM1fOid6bOqQ9ngWcKP7e7ZOgIgeE3CXnIpiuLl0LKI%2BYjW1xDDqDJDqG%2Bzu0wum2rPWUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7VadJteIGMFeLByircA4riQU89NymruhRslWuFQv3OIO%2B5PpM9ml%2BuvXPIUntSbA7h72NQc9WJJ5XGFdmKYD33SeXxpOvY0NpYfvnF5LtzoOjgO77OQ1wuGRTk8w3PBH6mw%2BDuthmQDu2Jn6B72CLoPfLwlMlA4v54HkNP5ByH6ZSKwwV6hk99ZTRYbCx6NkqS2WqAQrMP6Qyom9ShN9pWoANSGvRxQFA9QjQ%2BtimgXl%2B6MoTW3HNOQCmWfPIiY0M9FFA8nIQXhp6mucetYMsxbrSxfom2rWDh30kDyAbF3aF6PQMrKEwBJLPjMhwLc7LFcciVlipBvijQKJHOcltJimgB8rfB157GG266yPRq2X3nx3QZMvNcJ8Qd7OqT%2FC2yndIVK20osHMJocTbxJ%2BghJJt%2BIiNdgmFnDLXU6eFDq0F%2FbK3g5F%2FDMlbuhtm5udViCtzRYVLSkykAjwX1nakZZLyVt3RkK0wLZOScujQUstfabIXcahqn%2Fl0gDl%2FRBwITIwEYfYn5BFiiqxKDiQcREyjMfRyNXAUACAe6ra2j7NMEbI%2Fz7IyPNLQ0GlS2AcFRMzb4ObQvS0yJJvdUIlLMN9LNj60ZzdZdmSFw9rMQyf5c7L0V233UTSv4FD%2BMxjpjK2ggS0MDRvhMPvehb8GOqUB1cFMW6%2Fx6LrUsfeUCKl8gTzzH3A9Ngp%2BLAPdFovMIi9IbkyG2MP8TudY35QCkQMGWdXt5MuE05H47SjYjBV3oHf%2FSKOnn65MQDPCT1UaGJ0Wca8OT44nYBX0wTWEmoneM34DF%2FXHTklkACcJNYQnbv9thErtbaQ22CdzmCr6GWCiTquXBlyYf4eE3Mu5RXb3DcK0fl0O3w%2BgxNr%2FtQv3wEihmagp&X-Amz-Signature=0dd7c383a6d0a69aa516ada1afc32d0ca915d23f791fa03cc50bb4707590f102&X-Amz-SignedHeaders=host&x-id=GetObject)

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
