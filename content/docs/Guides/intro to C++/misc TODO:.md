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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK4H3EVE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIz8TsjGEKye%2FIq0BPbn1cVAWM9WJ17IizQYdzvqehDAiEA02k%2FlYcWDkqyy1tS9D31SXOe5V1jfZawqBUATGB6WxoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B2p15z1iJYl%2BEjDircA1Pn2Eo9JvPyC67xMMrgLFUD3VDsTfh%2FuYz8pK5VT4an2ENRUDZTz1h%2BoEkMJxJItdBa1Hk7vvMGLFcQGrm7rhMPuTRcvS4X%2B%2BSu%2FWl4%2F9bSPCIxTE3%2FQslWeWb5zykxMm61WWvH%2BPLK5VZgD735M%2BLi1RdQaDa6vKhRWLXRKtaIhu1Vpep6J%2FJn%2FZZCjudsgtMpirEuybBbZQI1qhK8%2F6O3UaBaNCXIwuFLFnWcPLkhbRLjZEyGTJo3g%2FARTYXgnoqAiV0SKwAAWDH%2Bv%2Ftt%2BlcEM1Hv9gpZgjvzQLy%2FkJgNPF2KLJmkMYMJkg6yeTXIkuvHQYV9feOsOsGM%2BiTbEGKUy221yi%2F36PEhzf9GPFG2Opgg9mAuVPi2qZHJ0bC6fUtanMooVhrFn%2BvrAHrQx5DWXxG4JN5lKnlR2Rt%2FN3p5We3gihGLF56XGN3y7Jy05rRdEhxP%2FnKwcJE6My09bbnAYNjD3XblWiLaavfl4aeOz1yWmTU8EJDtQP6TluhRGzETh67EURQKOSAKrxDjEShN1XcIl6GAqrrjbbFMgr3K6LMEl%2FFewfZMCo%2BxlBvsCHKZIVc%2BirlIS7fsPOwTzcQax7uuZ9bULpD41I6gAS2aihO7DMSJJMEmrlpSMOi9ucMGOqUBptCIcc70Gy%2FZhx5ysXvmVnp3NbGssjOLbESkc3QxkTfWBkAukQPAZyiuHwktylBi7Hfi2Ln0%2FlXzu5UHC3Ftf2dBGlVaUCux%2Fbx4xrDROjKYeV9jzBOySgKpyA3ZZngk58cKAZL87RRBvkY1plsJMq1xmTERyHV0ERJpO4BrRO%2F78J57KVvRmhf3hIYT1b9cWaIhjHLhAFqbdgCyCnQT08lqyfpL&X-Amz-Signature=9438bcfbb68639e43d1db3a3b67232c23ed38c65940e9fabf60a3598d4fd6a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK4H3EVE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIz8TsjGEKye%2FIq0BPbn1cVAWM9WJ17IizQYdzvqehDAiEA02k%2FlYcWDkqyy1tS9D31SXOe5V1jfZawqBUATGB6WxoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B2p15z1iJYl%2BEjDircA1Pn2Eo9JvPyC67xMMrgLFUD3VDsTfh%2FuYz8pK5VT4an2ENRUDZTz1h%2BoEkMJxJItdBa1Hk7vvMGLFcQGrm7rhMPuTRcvS4X%2B%2BSu%2FWl4%2F9bSPCIxTE3%2FQslWeWb5zykxMm61WWvH%2BPLK5VZgD735M%2BLi1RdQaDa6vKhRWLXRKtaIhu1Vpep6J%2FJn%2FZZCjudsgtMpirEuybBbZQI1qhK8%2F6O3UaBaNCXIwuFLFnWcPLkhbRLjZEyGTJo3g%2FARTYXgnoqAiV0SKwAAWDH%2Bv%2Ftt%2BlcEM1Hv9gpZgjvzQLy%2FkJgNPF2KLJmkMYMJkg6yeTXIkuvHQYV9feOsOsGM%2BiTbEGKUy221yi%2F36PEhzf9GPFG2Opgg9mAuVPi2qZHJ0bC6fUtanMooVhrFn%2BvrAHrQx5DWXxG4JN5lKnlR2Rt%2FN3p5We3gihGLF56XGN3y7Jy05rRdEhxP%2FnKwcJE6My09bbnAYNjD3XblWiLaavfl4aeOz1yWmTU8EJDtQP6TluhRGzETh67EURQKOSAKrxDjEShN1XcIl6GAqrrjbbFMgr3K6LMEl%2FFewfZMCo%2BxlBvsCHKZIVc%2BirlIS7fsPOwTzcQax7uuZ9bULpD41I6gAS2aihO7DMSJJMEmrlpSMOi9ucMGOqUBptCIcc70Gy%2FZhx5ysXvmVnp3NbGssjOLbESkc3QxkTfWBkAukQPAZyiuHwktylBi7Hfi2Ln0%2FlXzu5UHC3Ftf2dBGlVaUCux%2Fbx4xrDROjKYeV9jzBOySgKpyA3ZZngk58cKAZL87RRBvkY1plsJMq1xmTERyHV0ERJpO4BrRO%2F78J57KVvRmhf3hIYT1b9cWaIhjHLhAFqbdgCyCnQT08lqyfpL&X-Amz-Signature=7ab77e2b54a79380474ce5eac4d27b7619f262bc3fc61907a6ffcb8e8541007f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
