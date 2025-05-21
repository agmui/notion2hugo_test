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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOYOVUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiTd9jmDxrFqK4Uskma0i41dz617nwejACTqGYnwPTBAiEAmgmpszaz%2Flx9WP1jGShE8pt4%2BATahfSTJcAgWJMsiJ8qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCYNP8EFqbNjyVX0yrcA%2Bn0BmFQ4CPUdL9LBT%2FFMFgDn2EeUWCSdMRyZSmNsYqm48kl071EIOrBKBQGLASGUaeDi6G8RPHcIp3RX2pSEdoLqHGuZy3YTG4C4PJwKyyOVr132Ma1Umvln4TjPd6pbA%2B2CawCbBiY6hVwQbMoh9UNT4FghbDIWSnhM4x8XEfpBNX%2BPOpstd%2BVX5bvm3mOjRzr6QHdhULIFYp2xWHXvz0QcpQl06DQwc6iAZM%2FHUG8vwKDOBuFILTvpcMpKMS5s59iBISUitwPQOy0Ju8xxqhjy4Ka2dGyhXFNHSjvi1wR5k3VQINCCMAXASZJPltb3wXBzI0f8qDrcf8fqWh62mU5all2tXevyoQbx%2Ba9ELU%2Fp20NpYYbFHQcRz8BsPcMzavlWI2h4MrUHIuE6lEHxujDxXxXUby%2Fi0P3%2BgLd%2FKry%2Bn4jFb6GChGz5BYRwY8PaH3fb3vwvF4D3v6umFs9MnNrTONip0Qqbg3jRJjsplmga8bzQJcD3Xr0a0NvUEKCvkxtuGsNudvFNZgmp2OYSOlLpMM6impgle%2FEE3Z2ZWsPfsoO5Mbw%2FhAMYT8AcfTKmRTq1OLZpTxCW6aBzmqo33mVheq8WvuovynO4ayNlQypFi%2FeEXu3GgrQJWd8MLeutcEGOqUBU3v0Y4IEqaNcdD97o8YLER65WFmNptD4TZahbUp6fozvcCC3DO%2BAMgVf2WGiMHxo2gRYB3Byz7ltojUmiZAJ4PVT9NgeJGusPeBvT9qm2bXdAEJ72VRoL2%2Fm3rHG0GTHKOIP1NnMiVUP0x4FN7nbEszs3PkCN6MANgQJFK1IAt6vnujw4yTGn4DrPc1esCMfDGWTgpt%2BFFLdAYQy5TIEAENFK6JT&X-Amz-Signature=7d6ab6e297883cddc7e4b07b53d5b3b5b77abd09f051a053f2c68feaf3794522&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOYOVUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiTd9jmDxrFqK4Uskma0i41dz617nwejACTqGYnwPTBAiEAmgmpszaz%2Flx9WP1jGShE8pt4%2BATahfSTJcAgWJMsiJ8qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCYNP8EFqbNjyVX0yrcA%2Bn0BmFQ4CPUdL9LBT%2FFMFgDn2EeUWCSdMRyZSmNsYqm48kl071EIOrBKBQGLASGUaeDi6G8RPHcIp3RX2pSEdoLqHGuZy3YTG4C4PJwKyyOVr132Ma1Umvln4TjPd6pbA%2B2CawCbBiY6hVwQbMoh9UNT4FghbDIWSnhM4x8XEfpBNX%2BPOpstd%2BVX5bvm3mOjRzr6QHdhULIFYp2xWHXvz0QcpQl06DQwc6iAZM%2FHUG8vwKDOBuFILTvpcMpKMS5s59iBISUitwPQOy0Ju8xxqhjy4Ka2dGyhXFNHSjvi1wR5k3VQINCCMAXASZJPltb3wXBzI0f8qDrcf8fqWh62mU5all2tXevyoQbx%2Ba9ELU%2Fp20NpYYbFHQcRz8BsPcMzavlWI2h4MrUHIuE6lEHxujDxXxXUby%2Fi0P3%2BgLd%2FKry%2Bn4jFb6GChGz5BYRwY8PaH3fb3vwvF4D3v6umFs9MnNrTONip0Qqbg3jRJjsplmga8bzQJcD3Xr0a0NvUEKCvkxtuGsNudvFNZgmp2OYSOlLpMM6impgle%2FEE3Z2ZWsPfsoO5Mbw%2FhAMYT8AcfTKmRTq1OLZpTxCW6aBzmqo33mVheq8WvuovynO4ayNlQypFi%2FeEXu3GgrQJWd8MLeutcEGOqUBU3v0Y4IEqaNcdD97o8YLER65WFmNptD4TZahbUp6fozvcCC3DO%2BAMgVf2WGiMHxo2gRYB3Byz7ltojUmiZAJ4PVT9NgeJGusPeBvT9qm2bXdAEJ72VRoL2%2Fm3rHG0GTHKOIP1NnMiVUP0x4FN7nbEszs3PkCN6MANgQJFK1IAt6vnujw4yTGn4DrPc1esCMfDGWTgpt%2BFFLdAYQy5TIEAENFK6JT&X-Amz-Signature=5718eeb20aa022d6ec1656d2712860dd46ced4a4995e940b934ce95360b73d42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
