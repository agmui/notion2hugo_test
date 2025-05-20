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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3G6YA3I%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmicv%2FsRqzHFL%2F9RcGO8GkkPE9QUditP37ScSlqjDB8AiEA0nA93a2uKTkfuRKRUps9sFqYWXdOGZaQYLReUG6vIVMqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJl8h7CXJY77TESmyrcA37xi%2F6SDPPDGfcHQVeH6%2FY149bJzEKt1Jd61a5mceKs3RZyI3%2BEcmxc8e2fVmRXuh5TNz%2FSh09Q%2B6iP8fpBhpXMaqIpSr4K6uhMp1JBx%2BSbMu6VmcdPDcVyrinth5kW6S%2BjcReoVNOATOI7nslcpuXJvb7j2D9VI3laPc6SKQt%2FM7wb1k5XckTLMcVGIHNePrJlw7OmikPKu%2FCsQw2D2ZGIx2kZ%2FJ%2BVe%2BY1AUwRQlzXg3fYcTWTmn%2BfYe3p4AFdwpLUJuXdnt1Qw4lWH%2FyCBnoJo7rVFnGS4KemHGzQA5MWCee2SySsHRjhTY3LGaFAatZl29tTucue4lRSUS8HUaxpW1OOFYilNMlOnB6tAHFO%2FmnioDS0WIDo75Q%2FqwWnxQ0VYuJOObOkRg69ldYnWqNOys%2FjCFqkNoue1a7MANx%2BjPFRFn%2Fv7Au97tVbitAwqAcfM6qbZqyJgxr6ErAvXFIvXmOHMxsecVbQjUuAX6CViKFDKjfdtFzOux5T%2BMnZfI6Qt8OI6W1CYLDe1dNNS9qzR0umomVY7lGUM6mFhLgUdeoy9TqDCyQSwwG0rARoppC9ezO98OheEVPrubCWc8vNxzpn7Ib9bsfAsvYQ4h3lTbsAxS0EjyqFgrYWMKXLs8EGOqUBA65wla%2BggxgIcKygJe8cUXfG3iI0YAd5KmyPu6B1j9ZqnnVfeQfryH720wlDn5q%2FDkgn5dwR%2FoyCEuAZyh6ZWH6wlVf5NpSDTDSP64t47d5bNfPeKgIV%2FNBg5e9NXWnm85uXZAJcnxlwxjRcX3x5%2FjBJY3yfMYnzYze6FvzqwbZpNPvNzBaLXD6S9ikde833vLUkIPws%2F%2F%2FHjAk%2FNL%2FFm2UY2GMl&X-Amz-Signature=f1cb226610731fcf8d45013b4eee87aef49f718727253c786bbd27b6e9c33428&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3G6YA3I%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmicv%2FsRqzHFL%2F9RcGO8GkkPE9QUditP37ScSlqjDB8AiEA0nA93a2uKTkfuRKRUps9sFqYWXdOGZaQYLReUG6vIVMqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJl8h7CXJY77TESmyrcA37xi%2F6SDPPDGfcHQVeH6%2FY149bJzEKt1Jd61a5mceKs3RZyI3%2BEcmxc8e2fVmRXuh5TNz%2FSh09Q%2B6iP8fpBhpXMaqIpSr4K6uhMp1JBx%2BSbMu6VmcdPDcVyrinth5kW6S%2BjcReoVNOATOI7nslcpuXJvb7j2D9VI3laPc6SKQt%2FM7wb1k5XckTLMcVGIHNePrJlw7OmikPKu%2FCsQw2D2ZGIx2kZ%2FJ%2BVe%2BY1AUwRQlzXg3fYcTWTmn%2BfYe3p4AFdwpLUJuXdnt1Qw4lWH%2FyCBnoJo7rVFnGS4KemHGzQA5MWCee2SySsHRjhTY3LGaFAatZl29tTucue4lRSUS8HUaxpW1OOFYilNMlOnB6tAHFO%2FmnioDS0WIDo75Q%2FqwWnxQ0VYuJOObOkRg69ldYnWqNOys%2FjCFqkNoue1a7MANx%2BjPFRFn%2Fv7Au97tVbitAwqAcfM6qbZqyJgxr6ErAvXFIvXmOHMxsecVbQjUuAX6CViKFDKjfdtFzOux5T%2BMnZfI6Qt8OI6W1CYLDe1dNNS9qzR0umomVY7lGUM6mFhLgUdeoy9TqDCyQSwwG0rARoppC9ezO98OheEVPrubCWc8vNxzpn7Ib9bsfAsvYQ4h3lTbsAxS0EjyqFgrYWMKXLs8EGOqUBA65wla%2BggxgIcKygJe8cUXfG3iI0YAd5KmyPu6B1j9ZqnnVfeQfryH720wlDn5q%2FDkgn5dwR%2FoyCEuAZyh6ZWH6wlVf5NpSDTDSP64t47d5bNfPeKgIV%2FNBg5e9NXWnm85uXZAJcnxlwxjRcX3x5%2FjBJY3yfMYnzYze6FvzqwbZpNPvNzBaLXD6S9ikde833vLUkIPws%2F%2F%2FHjAk%2FNL%2FFm2UY2GMl&X-Amz-Signature=9b7b60d1655d7006015ac784409715a819cf25153e932c895e9f131ddd7bd554&X-Amz-SignedHeaders=host&x-id=GetObject)

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
