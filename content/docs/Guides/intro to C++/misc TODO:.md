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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XA6X63%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMK01RsbLK2A5a%2FmbfdPLyfpABYL28yCHypwvOxooOhAiEAtB5oedDc4SAcI962gRnptoUHDSRXHW6fO7XlCrcq82MqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJUQaEATQgjxxzkcyrcA00kaSttdI%2BqQ%2B3olgOzM%2F4lWyEjX8EQSCZp2QxVGmyROwvHt6AXY5WYMXe%2BV1mVUbh3%2ByUjTdVpno%2BPgNN2hly9fqYgQ%2BcYdspaebEvMRC1eUCbJmDCMyyvPgiC4HY9D3FYZcCb1U41CM7IqFPnpIFtYczVdNx%2F1qUHrKzY3eZLNlPb8IbMxgR50RBl%2BxHQAAegb%2B%2Bc9E0S9Z16BbwCiZ%2FTxsvmZITpViqArADhJB6SQWAJt45dOHDITqs%2Bogu4ivO5HccbsLijhrCQqbY53YMPFf6Ff4mT%2Bcg6st6hQGPHfyqiMEm4da1ysaT1fH4wnSfs0iX0qDfF5uBnWuUv5SfOcHBJYf4712NDTdRxQL66lLLrZSop4vNWvHKTSr6dgYRwPSB%2B%2BW0qYRWuE2cbWB2CyXRkaxdyEMDPO8WP5Vi%2BrTaccgQC0X0raWjcQLOaBvUVyMW7pIY2nkRyQ8b4s8mO6YRXPfvKvanZ9qZzG4NSiw860QQtzAJzB4p741w2DGl2JLfxp0xia3njm0qfkhJMZfJwvlrEjVrCXU4jvvAFxCj%2B7R9SuimL8wCwiei7afDJ%2BDrtiybPRplZDyqR%2BEyJP2xeOojnhBswcLkva0M7fTB1V%2BeeDmV4135XMKCz1sIGOqUB4WHJSat%2BWfzbnKDNW8CLMxRJeagVIjKTZsTbbOBoWkP5ageQ5KmY69Lnl2vd6z%2BpZi%2BXM6CpMUYtPtMR3wIIdCu0tQxuxOT8edWnhsv4FMyT%2BhYE3ZBTeFJwpyzSN7Cib3W%2BQm%2Bqe2zGQIp0WIVtbFAUgenROKUvzxwi6D14xWdnqNzM4e0K3UDTFubS263e5Xue5DqC226Mvpd2uDkzE9OX1B0U&X-Amz-Signature=5ae4576b5afa055ecc32a9b9adc551d6e558e4d934a4a652a03ab3306da90b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XA6X63%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMK01RsbLK2A5a%2FmbfdPLyfpABYL28yCHypwvOxooOhAiEAtB5oedDc4SAcI962gRnptoUHDSRXHW6fO7XlCrcq82MqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJUQaEATQgjxxzkcyrcA00kaSttdI%2BqQ%2B3olgOzM%2F4lWyEjX8EQSCZp2QxVGmyROwvHt6AXY5WYMXe%2BV1mVUbh3%2ByUjTdVpno%2BPgNN2hly9fqYgQ%2BcYdspaebEvMRC1eUCbJmDCMyyvPgiC4HY9D3FYZcCb1U41CM7IqFPnpIFtYczVdNx%2F1qUHrKzY3eZLNlPb8IbMxgR50RBl%2BxHQAAegb%2B%2Bc9E0S9Z16BbwCiZ%2FTxsvmZITpViqArADhJB6SQWAJt45dOHDITqs%2Bogu4ivO5HccbsLijhrCQqbY53YMPFf6Ff4mT%2Bcg6st6hQGPHfyqiMEm4da1ysaT1fH4wnSfs0iX0qDfF5uBnWuUv5SfOcHBJYf4712NDTdRxQL66lLLrZSop4vNWvHKTSr6dgYRwPSB%2B%2BW0qYRWuE2cbWB2CyXRkaxdyEMDPO8WP5Vi%2BrTaccgQC0X0raWjcQLOaBvUVyMW7pIY2nkRyQ8b4s8mO6YRXPfvKvanZ9qZzG4NSiw860QQtzAJzB4p741w2DGl2JLfxp0xia3njm0qfkhJMZfJwvlrEjVrCXU4jvvAFxCj%2B7R9SuimL8wCwiei7afDJ%2BDrtiybPRplZDyqR%2BEyJP2xeOojnhBswcLkva0M7fTB1V%2BeeDmV4135XMKCz1sIGOqUB4WHJSat%2BWfzbnKDNW8CLMxRJeagVIjKTZsTbbOBoWkP5ageQ5KmY69Lnl2vd6z%2BpZi%2BXM6CpMUYtPtMR3wIIdCu0tQxuxOT8edWnhsv4FMyT%2BhYE3ZBTeFJwpyzSN7Cib3W%2BQm%2Bqe2zGQIp0WIVtbFAUgenROKUvzxwi6D14xWdnqNzM4e0K3UDTFubS263e5Xue5DqC226Mvpd2uDkzE9OX1B0U&X-Amz-Signature=4593613a118ce202ef7aea319eb834c18a357e7fdbffd0abc49b174189039fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
