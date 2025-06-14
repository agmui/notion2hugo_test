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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDQVCM4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDwFHOo7RXg4Mww4nVekyZi4e6HaU1Cil1h8i%2Bt4KQTuQIgDHiNqM9Ujqfvonu8qni9xgO5U7QVaVovl4Ot%2BY4AJlQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEAoriH1IuslYtEjMircA629p5n3rUXqjR%2B2L8hPM9s4dffI6HmzTQ%2Biim3TIoYJzADabcQpedZ5kO6MyneeLCN0O1L2mYvWxnkYCTQGrpV1pwE5B14AuQfllIw3PifWpOCxqUTJ05p9pMR1PQCoPygsUxs%2FLjiija4vpbscvPQPkRE3ECG20S5zPCG91Yohlue6ERi0enbF0Coojx0BpDtjijEt3yuAgj%2BxaxgdAwYNtnB3o2dutKPefK6i0O7DH58xydWML5SH4OrrHgulSdC4ei29syPJFF75xdjFpSfsJOo%2BDaVcNcudg27KwIrLh2JkI0hK6mJLsl2VW%2BM%2B0L7b0rEYtgGEO8nZSTaLS99zThjOHlP1obgQYnS5dx0YBrorEe9Wc22q6wG1hNaR%2BsyPv1725wiOIInLe3Im9Tvp%2BPBs74UtNMiTV8HDskz64XIyCZpACjgKidiK4MCMgxrbYehosy0Cm%2BfAUmot8OLYCuCc7B%2FZn%2FKNxaIGkhAhWGcYoFLftHUr8joQf6hFklkmD3JtbNV39bDfwQXUWMH5C2NKeZAmArCFVb%2BNQodXoYMAAsXlvwd71Ry5yJvy7WpprDdTzdLGOS0s%2BULfzyzBT9ChmAqiWFgTOym2VBHF0PY2zvCZZ3nAt2D4ML%2BTtcIGOqUBFINgPR9J5LdepyjkIxLf57m5cGlucGcTq3QyhAKr%2BhlUFpbx4lhFMOoDvZVbToxMv8ksR6Jr7lbG7B5oGYB2q8Afm7uGcFdQzOfzcmuKNC%2BKiUhqOskWyy%2FwwsIAxX9AVO1IbLGKOICZK4acfcZLFIhdxO8ExTQwt3a5m4k2eFoXtSGENBIY7eySrbA%2BFrkO6DBhMlN%2FMD6C1kZo14c%2BEaVPFMrz&X-Amz-Signature=b4f2ed04726108393bc62990d5a3fdc76ad0a8f65d32e09f615438972fe2651c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDQVCM4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDwFHOo7RXg4Mww4nVekyZi4e6HaU1Cil1h8i%2Bt4KQTuQIgDHiNqM9Ujqfvonu8qni9xgO5U7QVaVovl4Ot%2BY4AJlQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEAoriH1IuslYtEjMircA629p5n3rUXqjR%2B2L8hPM9s4dffI6HmzTQ%2Biim3TIoYJzADabcQpedZ5kO6MyneeLCN0O1L2mYvWxnkYCTQGrpV1pwE5B14AuQfllIw3PifWpOCxqUTJ05p9pMR1PQCoPygsUxs%2FLjiija4vpbscvPQPkRE3ECG20S5zPCG91Yohlue6ERi0enbF0Coojx0BpDtjijEt3yuAgj%2BxaxgdAwYNtnB3o2dutKPefK6i0O7DH58xydWML5SH4OrrHgulSdC4ei29syPJFF75xdjFpSfsJOo%2BDaVcNcudg27KwIrLh2JkI0hK6mJLsl2VW%2BM%2B0L7b0rEYtgGEO8nZSTaLS99zThjOHlP1obgQYnS5dx0YBrorEe9Wc22q6wG1hNaR%2BsyPv1725wiOIInLe3Im9Tvp%2BPBs74UtNMiTV8HDskz64XIyCZpACjgKidiK4MCMgxrbYehosy0Cm%2BfAUmot8OLYCuCc7B%2FZn%2FKNxaIGkhAhWGcYoFLftHUr8joQf6hFklkmD3JtbNV39bDfwQXUWMH5C2NKeZAmArCFVb%2BNQodXoYMAAsXlvwd71Ry5yJvy7WpprDdTzdLGOS0s%2BULfzyzBT9ChmAqiWFgTOym2VBHF0PY2zvCZZ3nAt2D4ML%2BTtcIGOqUBFINgPR9J5LdepyjkIxLf57m5cGlucGcTq3QyhAKr%2BhlUFpbx4lhFMOoDvZVbToxMv8ksR6Jr7lbG7B5oGYB2q8Afm7uGcFdQzOfzcmuKNC%2BKiUhqOskWyy%2FwwsIAxX9AVO1IbLGKOICZK4acfcZLFIhdxO8ExTQwt3a5m4k2eFoXtSGENBIY7eySrbA%2BFrkO6DBhMlN%2FMD6C1kZo14c%2BEaVPFMrz&X-Amz-Signature=41c53135ed5a77f9461fa6d515a51245cb4eaa17d9ead5a3c43c7a273a42a505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
