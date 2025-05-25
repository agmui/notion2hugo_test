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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5BTHCH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICpXhYnTH8LkZr7Z7Yvr6ZccfkhnnPdmDTBUEa3LVNHVAiEA%2BRcp1311GLZtKRlyf3%2FbUZ3NAWHYgfd5CwbcSlCK1GMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIkKX25Iy8hG8JDjDyrcA9d6Jwg23CNQVfKMG1Eec2QxQCyC3BmVqyvDbgNnfgE6vSiSPAxTL46WuB3JVJgmv1idezPl0RFS%2Fja%2BbTB%2BTQ4Rc4fdczL8U9p2B1xZEupMHOMZObYZ%2FK%2BEMBG0YkP2xO2vHwHqhHJfFVklUi4oSq%2FD%2BURzR3x7N1U%2F0MkLxYfKCIJ0WfLPuGvjcls2nXLTTFuq7Ul3XF0o5ITtPYWB7AWI40NRuk3gTe4CVv5qM%2BQsTOhw3xHv3GfEX8ZWwZgiYuow7w7RmE686jHMUZrumlqUgSpr22l50scBh7LulBky6anUO8ZL2OOd4juQyHc4pwrivoz%2FPh4AaW452m8M21LHJmMEXp1C0ISt66pH8bwYV94AsIHiK8nNggmPRCBOy8CI%2Fnqg0Puc%2BhGKJ%2FNYFp7KwLq%2BJ6f1c%2FxOqhbF%2FyKlq59JWnVE2nd4K2WO5c72lMnp4v%2FkvBWXOCjI17IgN6E%2F%2FJ4CY%2FeKPbNGrTfJ%2F2rETx5%2FFESSfdzzJN7Wq9v6N45RXWUMX1GAFW12uY5jtNnTDKdLsXQwDW9AcA9HeLoqtenxx%2Bze3JU%2FZyB6OusmnMyCdm1mjhALAcJBE5UxmrN9s8uY65eDMLc8Csy930eFhXAAXNVfJvMbvBE%2BMIqYysEGOqUBhdicUZVMyv3cSKxZDx2QBwdoQLNqlryZfP7buGaazUyMP04KuMJ%2Bks95UD4hFf6KQ4IhADXSCrhsH4cxHikV%2Buffl2nqkWKN2AvQRdbOzTMXU%2F8upBnaFjDfUyB2OzNYBT61L3VVDFqFQbYIPzQvS1MfyFx9gGqWen6dKMlocSmuY8Kax5ctA3WX1Dv27svW6l3cu5PxlS3ePBLSpbWinSX3A9w6&X-Amz-Signature=76eb74ac95ca07b0f767950e968495cf943af4d2893b2e2083a9904d2670e55a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5BTHCH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICpXhYnTH8LkZr7Z7Yvr6ZccfkhnnPdmDTBUEa3LVNHVAiEA%2BRcp1311GLZtKRlyf3%2FbUZ3NAWHYgfd5CwbcSlCK1GMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIkKX25Iy8hG8JDjDyrcA9d6Jwg23CNQVfKMG1Eec2QxQCyC3BmVqyvDbgNnfgE6vSiSPAxTL46WuB3JVJgmv1idezPl0RFS%2Fja%2BbTB%2BTQ4Rc4fdczL8U9p2B1xZEupMHOMZObYZ%2FK%2BEMBG0YkP2xO2vHwHqhHJfFVklUi4oSq%2FD%2BURzR3x7N1U%2F0MkLxYfKCIJ0WfLPuGvjcls2nXLTTFuq7Ul3XF0o5ITtPYWB7AWI40NRuk3gTe4CVv5qM%2BQsTOhw3xHv3GfEX8ZWwZgiYuow7w7RmE686jHMUZrumlqUgSpr22l50scBh7LulBky6anUO8ZL2OOd4juQyHc4pwrivoz%2FPh4AaW452m8M21LHJmMEXp1C0ISt66pH8bwYV94AsIHiK8nNggmPRCBOy8CI%2Fnqg0Puc%2BhGKJ%2FNYFp7KwLq%2BJ6f1c%2FxOqhbF%2FyKlq59JWnVE2nd4K2WO5c72lMnp4v%2FkvBWXOCjI17IgN6E%2F%2FJ4CY%2FeKPbNGrTfJ%2F2rETx5%2FFESSfdzzJN7Wq9v6N45RXWUMX1GAFW12uY5jtNnTDKdLsXQwDW9AcA9HeLoqtenxx%2Bze3JU%2FZyB6OusmnMyCdm1mjhALAcJBE5UxmrN9s8uY65eDMLc8Csy930eFhXAAXNVfJvMbvBE%2BMIqYysEGOqUBhdicUZVMyv3cSKxZDx2QBwdoQLNqlryZfP7buGaazUyMP04KuMJ%2Bks95UD4hFf6KQ4IhADXSCrhsH4cxHikV%2Buffl2nqkWKN2AvQRdbOzTMXU%2F8upBnaFjDfUyB2OzNYBT61L3VVDFqFQbYIPzQvS1MfyFx9gGqWen6dKMlocSmuY8Kax5ctA3WX1Dv27svW6l3cu5PxlS3ePBLSpbWinSX3A9w6&X-Amz-Signature=6e2afcd8bd46220c0f238deef30d5786a3cadf0dd896f949bdee0e319abde33c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
