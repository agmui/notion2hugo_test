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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGUJPNHV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAkbxC6ndfavOSIlEhXT6UPuud%2BKqShFw9VWvp4IYO9AiEAnrbOfZfzb5ye%2FtBU29vk9bGdRmMsUhY4jouz%2Bl6VpXMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6p2oNDv8THrUXK5CrcA0nGRQXQvtcaOscq5n31Mbv6TeB4po19Nqkv%2BZ4xctOeQqBoa0oYHws6%2F9k9lOrsqI3oU3No5kiSYCz6LonXwBfhm3ON0MImXVLkKVMcSRB6FA9mZ2ZkJon%2FAv669an7YjXLRcoZZuuQbwSIzOgJfz%2Fmpzml039JRWvtXLcCM%2FXuAzieDU9yJLK9WP4TcZN2JIn%2BHb6NJ%2BEwG48ChnZZdpv8JDB%2BPJWQpV26AIxnZkf%2FeBos0Arm%2BQb9nnCPfsEUgDb%2FneCkW6GpPDhUMCVjvF8jg3NDOGH6dHocZcZ8JKr2V%2Bg%2Bwug%2FumWsO1WPNlb8iEfGuZVgM4%2BEHNHrnLs5ry6P5DB7FO%2BxZvzaucP47R4f2Bw%2BxXZIuphpZaj7QcbRJ6YnxQ5USi6HewZ0st2VRk4t%2B%2F1OZgc%2BIoKn%2Boa%2FLTS5AXtJBMsMHciYo8HA2Xdb1JyXRI35nVJAipzymYbbgWybWI5rSGWOwYLf4TkhAcu%2B661ZPO0TUKp4VnjwkB9t5G47Vj3eA%2FSL3P10y47UQ2nyMPzbLNyDkf%2Ferrt%2F6y7Mh06mTCHuUOteyprdqDnv3kIiBjDYRgz50tQUVYGvrdTC%2BkT3HTd1MjwPR0o8basBjxRcun%2FtM7RikH6WMMrzysIGOqUBq6U4ZWYaTkpbU7X%2BnyPGWjLq6bpSrujQdDZoB8WdXDYjDY1IpwT2p3s0mjRCuXw8QWT6nkL0UDQTFowEZRQtgqTKFy7LULNg0QLqgQDJyfRFPIzBs7E1lOJTUq%2F%2FJ0okvWzVNdTPoi%2B3pqD7KFXUucRhmZ4juGuWDySQK2rc2VuOS4kq1AtzPLR5l25GWFvi%2FvueD0Jvm4tIMAqgKjnOx5MRcKNt&X-Amz-Signature=71afd8c300abce8ffcc949fa7cd662c3a42b055ae7e038e0e5b8f91a5fb1630b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGUJPNHV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAkbxC6ndfavOSIlEhXT6UPuud%2BKqShFw9VWvp4IYO9AiEAnrbOfZfzb5ye%2FtBU29vk9bGdRmMsUhY4jouz%2Bl6VpXMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6p2oNDv8THrUXK5CrcA0nGRQXQvtcaOscq5n31Mbv6TeB4po19Nqkv%2BZ4xctOeQqBoa0oYHws6%2F9k9lOrsqI3oU3No5kiSYCz6LonXwBfhm3ON0MImXVLkKVMcSRB6FA9mZ2ZkJon%2FAv669an7YjXLRcoZZuuQbwSIzOgJfz%2Fmpzml039JRWvtXLcCM%2FXuAzieDU9yJLK9WP4TcZN2JIn%2BHb6NJ%2BEwG48ChnZZdpv8JDB%2BPJWQpV26AIxnZkf%2FeBos0Arm%2BQb9nnCPfsEUgDb%2FneCkW6GpPDhUMCVjvF8jg3NDOGH6dHocZcZ8JKr2V%2Bg%2Bwug%2FumWsO1WPNlb8iEfGuZVgM4%2BEHNHrnLs5ry6P5DB7FO%2BxZvzaucP47R4f2Bw%2BxXZIuphpZaj7QcbRJ6YnxQ5USi6HewZ0st2VRk4t%2B%2F1OZgc%2BIoKn%2Boa%2FLTS5AXtJBMsMHciYo8HA2Xdb1JyXRI35nVJAipzymYbbgWybWI5rSGWOwYLf4TkhAcu%2B661ZPO0TUKp4VnjwkB9t5G47Vj3eA%2FSL3P10y47UQ2nyMPzbLNyDkf%2Ferrt%2F6y7Mh06mTCHuUOteyprdqDnv3kIiBjDYRgz50tQUVYGvrdTC%2BkT3HTd1MjwPR0o8basBjxRcun%2FtM7RikH6WMMrzysIGOqUBq6U4ZWYaTkpbU7X%2BnyPGWjLq6bpSrujQdDZoB8WdXDYjDY1IpwT2p3s0mjRCuXw8QWT6nkL0UDQTFowEZRQtgqTKFy7LULNg0QLqgQDJyfRFPIzBs7E1lOJTUq%2F%2FJ0okvWzVNdTPoi%2B3pqD7KFXUucRhmZ4juGuWDySQK2rc2VuOS4kq1AtzPLR5l25GWFvi%2FvueD0Jvm4tIMAqgKjnOx5MRcKNt&X-Amz-Signature=8f9cee8de08f61d959c099e554795056bdc1e5df9000a9bf9546573006798464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
