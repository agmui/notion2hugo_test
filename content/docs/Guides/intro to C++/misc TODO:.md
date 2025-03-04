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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUEXBX2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2GkYJGn69DSid88YDrj9d8cJneK0WDybXYtTm%2Ba%2BQ7AiEAhGPt8jlSpMxKLdN4OjKQCsTYwjufa89Ay1bnHzaaOP8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh94NGOpwwQProWZircA4pEJaC%2BWSJzITQfkdXXFFnHYK4T6z3kDJqzo9eBp%2BH4FvNHxFWmobDXLA%2FKoOWHSdXz84UffLyO3kIAsEBxN81DsfYnDr8vSsuj4eMg5uT%2BaAENmMqVpJGxdSnoafiS%2FDw9U8FEqNnn1ZUR10r53%2FX4kW%2B3NwbcwSdD6FeSorUdOIQMxibc%2BXIwWyWoho%2BHS31f9BFzfC4kruECpuS5V3lw9TRw9zuSZiwY8vxprTk7yZ7mkHMk%2B9kGw29QHN9QEP8ccaNIUvJCw4ZZxUXbtk0Ov0GOJImfQH4lRp9SNNq7AiLSyI7FL8644OtxZNdFaOWCsox%2BcxON3vjDNEjWD78BWHL3m8dmdF3Fb4cbVEFwYYJ2ofougdN3waFvykWDiPPqc3Zfo4OexvkZb24r2ItOnXjXdLfUzywW%2FpVjS2l7YC6XB%2B%2Blz%2FaVevelCeUFe3FNh65O%2B04ObL6z2sjQN02JNgx5i5TpALU0xiMLOINOEzwr0P23PlgSRQgmufVrVNxce%2BR1oDmzzxFPLPqBGc%2BnGSG1MmILXLJVT%2F%2Flb4SToCqsJQzrB%2BND8hVaBxD7EXEuPT8K6vs8u2axkmAaJ65U%2Bfg%2BuCszIiGHZhIcHSmtz1NmqLX0BnV9%2Bys6MJvTnL4GOqUBr46gGULhZHDIoHQ50WeEUQNg0%2BMZl4fgnLXbLDXmLdmUBmURIQSx0mQk1WhDo1SNiOOu%2Fw0tQmIRl4exktBfX1R37SyyCO4%2Fz743%2FYUK8NrnU8%2BKrDcS1po6ZRM96acjrsdv74dH7grOOTkMInpA%2B8aNdjZX3%2FUELWnAh40ApFtR18o0UIxTjQdWnie2y7cEhPmvcNUZwb9gRmVC1wqfw%2BrOqtzD&X-Amz-Signature=d0a3931285a02cdc346cfbd6d1f3d9328a342f58d3b7e63ef9dccd23e45633bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUEXBX2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2GkYJGn69DSid88YDrj9d8cJneK0WDybXYtTm%2Ba%2BQ7AiEAhGPt8jlSpMxKLdN4OjKQCsTYwjufa89Ay1bnHzaaOP8qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh94NGOpwwQProWZircA4pEJaC%2BWSJzITQfkdXXFFnHYK4T6z3kDJqzo9eBp%2BH4FvNHxFWmobDXLA%2FKoOWHSdXz84UffLyO3kIAsEBxN81DsfYnDr8vSsuj4eMg5uT%2BaAENmMqVpJGxdSnoafiS%2FDw9U8FEqNnn1ZUR10r53%2FX4kW%2B3NwbcwSdD6FeSorUdOIQMxibc%2BXIwWyWoho%2BHS31f9BFzfC4kruECpuS5V3lw9TRw9zuSZiwY8vxprTk7yZ7mkHMk%2B9kGw29QHN9QEP8ccaNIUvJCw4ZZxUXbtk0Ov0GOJImfQH4lRp9SNNq7AiLSyI7FL8644OtxZNdFaOWCsox%2BcxON3vjDNEjWD78BWHL3m8dmdF3Fb4cbVEFwYYJ2ofougdN3waFvykWDiPPqc3Zfo4OexvkZb24r2ItOnXjXdLfUzywW%2FpVjS2l7YC6XB%2B%2Blz%2FaVevelCeUFe3FNh65O%2B04ObL6z2sjQN02JNgx5i5TpALU0xiMLOINOEzwr0P23PlgSRQgmufVrVNxce%2BR1oDmzzxFPLPqBGc%2BnGSG1MmILXLJVT%2F%2Flb4SToCqsJQzrB%2BND8hVaBxD7EXEuPT8K6vs8u2axkmAaJ65U%2Bfg%2BuCszIiGHZhIcHSmtz1NmqLX0BnV9%2Bys6MJvTnL4GOqUBr46gGULhZHDIoHQ50WeEUQNg0%2BMZl4fgnLXbLDXmLdmUBmURIQSx0mQk1WhDo1SNiOOu%2Fw0tQmIRl4exktBfX1R37SyyCO4%2Fz743%2FYUK8NrnU8%2BKrDcS1po6ZRM96acjrsdv74dH7grOOTkMInpA%2B8aNdjZX3%2FUELWnAh40ApFtR18o0UIxTjQdWnie2y7cEhPmvcNUZwb9gRmVC1wqfw%2BrOqtzD&X-Amz-Signature=f7b418d594d4003febd86538d0e37728df6da065230410be68666e90c9a39754&X-Amz-SignedHeaders=host&x-id=GetObject)

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
