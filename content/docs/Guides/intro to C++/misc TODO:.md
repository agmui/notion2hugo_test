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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTW327F%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBRB9cBbV0qrvkogfjvpqOP0c05jR1BcYm4nz7l34AWeAiEA2IerIjL%2FQ6%2BFT5%2FYwc4OjQ6UGQvVq%2BrXq8mqt3K4e18q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA3aa6FC5e1isUC6KSrcAysmyd0LUNAEaYfyqDlWnNRlyrsjGnM4o1v7ykopzLTVMk5Y%2BlLY1DBlwaZjioO3ke0eI7iBvtOTLFgMEffk0IVSuvcMnLW%2Frs2%2BLjrq8ZvYQn%2B1p5%2BUAE3KVFNIsHC1WSI3lEaUVo1wYz9xsuKmT7nTly4zcKRIdSaR229NM%2Bd9YYicirkZybqIqx6Mnc0Ii0HvBxHVgwfSAVUZ3GyeIShBBpIVV7l7qBIZnL3XcgvEoa5hiCRnT7kgdiMfHFOFdKwc6tNjiYeKuF0aqE6gxZXROjaseIJ%2FiZlXOPyPt7ZEOMHV5MjGF%2BQZU77P%2BaOqZv4KRoLfI1%2FryM5KA1F66cuxGm3DlCRyCgJye%2BRL5%2BpinSVi0j11TCkZZE1NKxlXj0471AMDPL5rYajgwdo0%2B0nax4M5LFR2wEwc2PxqnJlXZfIbqA3SGTlfQi97USD5gjwSKsB3iWBqAzg2NnORo4z2NdBNbt6cvel%2FdsGaaOSTW6z88VTUSf37OpiQxKKz6ipMFkYzNDwAm4DZijX%2B5Eo8PGsC73S0lIQq6CM5h6URyKwkhIrMRueErsUCzNRevJ4bqO1DMBuqQq9evRlIpHDZ3FyPOdH922xq4F0hr1ZHz74NM5ty7ZQo2tUEMLq7lsQGOqUBeiwdN%2BJlp%2FCBNG4WZtjdT0LRQDienNtrO3LWfi44zesgq04GVmYRpaBrqDbWIrOWkR4BK4aYgOgwF0N0VVVWNBt4STBdPG2Oq7QhIkrUgz8Pure63PbrliR9wP3%2BOrhhUiCqmZs5UBBFKswMvMqSmFOqsXOsW8nypG7wNHgxov4UC%2BKr13vehm%2FGwCL1rcAXuRizMhAf%2BBWaor8xOQUg08QNNgnL&X-Amz-Signature=ba292aa11fa812bc51be7c4949c021a7c18518fc46dcde04c0259e10fdf2d3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTW327F%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBRB9cBbV0qrvkogfjvpqOP0c05jR1BcYm4nz7l34AWeAiEA2IerIjL%2FQ6%2BFT5%2FYwc4OjQ6UGQvVq%2BrXq8mqt3K4e18q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA3aa6FC5e1isUC6KSrcAysmyd0LUNAEaYfyqDlWnNRlyrsjGnM4o1v7ykopzLTVMk5Y%2BlLY1DBlwaZjioO3ke0eI7iBvtOTLFgMEffk0IVSuvcMnLW%2Frs2%2BLjrq8ZvYQn%2B1p5%2BUAE3KVFNIsHC1WSI3lEaUVo1wYz9xsuKmT7nTly4zcKRIdSaR229NM%2Bd9YYicirkZybqIqx6Mnc0Ii0HvBxHVgwfSAVUZ3GyeIShBBpIVV7l7qBIZnL3XcgvEoa5hiCRnT7kgdiMfHFOFdKwc6tNjiYeKuF0aqE6gxZXROjaseIJ%2FiZlXOPyPt7ZEOMHV5MjGF%2BQZU77P%2BaOqZv4KRoLfI1%2FryM5KA1F66cuxGm3DlCRyCgJye%2BRL5%2BpinSVi0j11TCkZZE1NKxlXj0471AMDPL5rYajgwdo0%2B0nax4M5LFR2wEwc2PxqnJlXZfIbqA3SGTlfQi97USD5gjwSKsB3iWBqAzg2NnORo4z2NdBNbt6cvel%2FdsGaaOSTW6z88VTUSf37OpiQxKKz6ipMFkYzNDwAm4DZijX%2B5Eo8PGsC73S0lIQq6CM5h6URyKwkhIrMRueErsUCzNRevJ4bqO1DMBuqQq9evRlIpHDZ3FyPOdH922xq4F0hr1ZHz74NM5ty7ZQo2tUEMLq7lsQGOqUBeiwdN%2BJlp%2FCBNG4WZtjdT0LRQDienNtrO3LWfi44zesgq04GVmYRpaBrqDbWIrOWkR4BK4aYgOgwF0N0VVVWNBt4STBdPG2Oq7QhIkrUgz8Pure63PbrliR9wP3%2BOrhhUiCqmZs5UBBFKswMvMqSmFOqsXOsW8nypG7wNHgxov4UC%2BKr13vehm%2FGwCL1rcAXuRizMhAf%2BBWaor8xOQUg08QNNgnL&X-Amz-Signature=339b7f8c069054f936819a5d27fb519adf857b3824a559c705ed7817c6fa183c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
