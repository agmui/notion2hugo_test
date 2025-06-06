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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EBPFAFK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2Bc%2Fdft9LuFFU0SzqsSxnOTKRVdjbZdnlLf55tO3taQIgQGYQEUYZE0%2FZXjM%2Bbp39NFfgPXKFFoXEcrO8QMR1TTcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNFS89C2tuA4TQ0RqCrcA75uXk5MD91IWWBqHyiV%2BfDUzO9oF771kCFrz97uL92wqA3n7wYt3N2U9MIYqG6oUBtV1yBQrnGI7NoFF6LlDYEWtt03XYGP9vg5HnsFlH6uM3CYuL6GNs%2F6pKjkBoVsPD%2BT7Fi8g9vtMwlYSOgSOc4kZUah1NzTStsBv7w1Oqb27%2F6xfurZufF%2BFeLUXjd3GY8YGrHlIgzDIabZ2zHB%2BsbAc6GkWK%2FO3qApTaBOUYReN%2BqhL591Swo%2BckRcgtQyYdV4UtZrevQjw0H7RboaKsBZsgl8QCuh8v1wP2wQflRGdi5cYzclMu3oVtqjKStMPFRMz7V6KUkrMru1%2BY%2FMq8x8SsEalgQg7m6fj4aHdp4z8QheCn8phYrHNhTM1tFQ%2BDsX9oAxVB1zSPd9Pc%2BYNMe0p5GMBnvqiCzMvO2ciy2aX5HXaCTgCShtBTjp1GaNYIa6UEHmYeow0I1rf4k3eeHvvrnE3Nqmn5Z1cXMGH3%2BiSmXc1nwAXzHOXqJR1Qw5%2BFljb7mtkJ%2FGEsupbq%2FPOsDOHVoVeVfyi2r%2FXEeagXLacwnfqRkDtKrXUxJcOc0UIovtrAZQUFwtBnLNCfGEFhJgJwH92S4Rr22lsa1UR7HFlq2FgDQyCArV%2FNBgMLC9i8IGOqUB0PRjyQFB8wTxnc5hbvZPCMX9Pdh%2BReLbK5gb9EWh78RfV%2FnX9rahrsJOji3%2FgzLv6D0hPcm0QgRrchlnVTCbbRrQhJDSVTYdvuT8jVcCCRtwBsEbQSbe%2B%2B0ejWR98manKK6Smga%2FKjZfNzmVTpvcHTi15MwfXJ%2FzrJntEVaBSq5fkCLOefPGzB0AS9z2z9wK0zIk5prXCOIbwfjz2vq%2BMEEfTh%2FS&X-Amz-Signature=68996ca2a91f0ed4038e39f29bfc77760e3cc89ec2af7728d31620d51ef70dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EBPFAFK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2Bc%2Fdft9LuFFU0SzqsSxnOTKRVdjbZdnlLf55tO3taQIgQGYQEUYZE0%2FZXjM%2Bbp39NFfgPXKFFoXEcrO8QMR1TTcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNFS89C2tuA4TQ0RqCrcA75uXk5MD91IWWBqHyiV%2BfDUzO9oF771kCFrz97uL92wqA3n7wYt3N2U9MIYqG6oUBtV1yBQrnGI7NoFF6LlDYEWtt03XYGP9vg5HnsFlH6uM3CYuL6GNs%2F6pKjkBoVsPD%2BT7Fi8g9vtMwlYSOgSOc4kZUah1NzTStsBv7w1Oqb27%2F6xfurZufF%2BFeLUXjd3GY8YGrHlIgzDIabZ2zHB%2BsbAc6GkWK%2FO3qApTaBOUYReN%2BqhL591Swo%2BckRcgtQyYdV4UtZrevQjw0H7RboaKsBZsgl8QCuh8v1wP2wQflRGdi5cYzclMu3oVtqjKStMPFRMz7V6KUkrMru1%2BY%2FMq8x8SsEalgQg7m6fj4aHdp4z8QheCn8phYrHNhTM1tFQ%2BDsX9oAxVB1zSPd9Pc%2BYNMe0p5GMBnvqiCzMvO2ciy2aX5HXaCTgCShtBTjp1GaNYIa6UEHmYeow0I1rf4k3eeHvvrnE3Nqmn5Z1cXMGH3%2BiSmXc1nwAXzHOXqJR1Qw5%2BFljb7mtkJ%2FGEsupbq%2FPOsDOHVoVeVfyi2r%2FXEeagXLacwnfqRkDtKrXUxJcOc0UIovtrAZQUFwtBnLNCfGEFhJgJwH92S4Rr22lsa1UR7HFlq2FgDQyCArV%2FNBgMLC9i8IGOqUB0PRjyQFB8wTxnc5hbvZPCMX9Pdh%2BReLbK5gb9EWh78RfV%2FnX9rahrsJOji3%2FgzLv6D0hPcm0QgRrchlnVTCbbRrQhJDSVTYdvuT8jVcCCRtwBsEbQSbe%2B%2B0ejWR98manKK6Smga%2FKjZfNzmVTpvcHTi15MwfXJ%2FzrJntEVaBSq5fkCLOefPGzB0AS9z2z9wK0zIk5prXCOIbwfjz2vq%2BMEEfTh%2FS&X-Amz-Signature=291acd924a391b86320c16b24aea104394fbb0ceda64a9468ffeb7f30d1e2907&X-Amz-SignedHeaders=host&x-id=GetObject)

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
