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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3O3ASR3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6asx5vzKYT9USm6nmYokBr3J4nwEu9XuJvNeP2IukQQIgdiAUiUlFdAP7QA0hLsKz%2Bi%2FWQ1PV07MT9ayd8DRfZRMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPVUUDR3oloR0daiRyrcAxSPVu6Z3uqS2pnKvmJUEPAo0mP6Dcw%2FowDGRquTGVGFwn83hTnjk83gIZ0Sn0p1ZJhJIr%2F58CL3CbzWLxLKWGu9WIL4xbyMHi90FxDkvMYldEg5i2s41cG%2BU8pSyfMIRfIqjIt30hlzF6Pax9Y6t9iqPJFx4cWPGJThGJNacoDDNmj4eVSYCSsvhC%2Besixnb5yfsOzjY3oNx%2FWGEyZUsdYwCWEJmW3b%2B8kDcogGLKUywogrwKY88b9aHq83USmG%2BQZAJV2D%2Ft%2F1hHaoP7s5GzBelMOHY9gF550P0nRfmcEuXvFG0VZPCzzpzj2oJSjFwgz3hizRmGCqnr0R2dm7dIBTjqqmFortPYUH1eD4lzsiBOESK%2FIDahonarQRYBPp5NV%2BkLfjEoEZtZZ8SjY2nZXhpUhMXic%2FkbtxCH8G2ZE4ve7D%2Fuj0MZGvBLi4IRLoAtf2rAB%2BE4fjQCXM2isDkPUBmU4NDKoALXRXrST%2F86zim5QN4PBzx%2F95%2FR1u1Sd4uzhFvcfjMcFVF3zV2Lgt5XeNVmXnnQR6Cy8ukq2pfgT7Lf9xyWg6CqeH9gJ%2Fxx1lT9po1tIERWRwNJt1E8qkSJ3rixpn%2FlvU0TUnMn24Ay1qqy8ZUYMKEhFtUkO6MOW3978GOqUBjRG93fMDQK4AX3ienliHX%2BWzJVM0D%2FEyBPzBCTFzqHlTHa4bZQFEFRIr8nVclBd6Q1F9U5x0UDUrfW%2BgcKug7gIrVtfuX3rrMAn3PSTRRQyMOhhIjTWduJ2%2B4vHL8tf%2BV%2BLrfO%2BDxrTS2LkRnMR37eCto5Dsmo4uPQvpn4jURm7%2FAIS7GP%2F9mRXN%2BptUOMVAbZ3EBThUH2QfeR82Jam7skfjY5Fi&X-Amz-Signature=3d3a1be935ef32edd7371a57c7a941dfa760374a00d037a2fc29f50d38e605a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3O3ASR3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6asx5vzKYT9USm6nmYokBr3J4nwEu9XuJvNeP2IukQQIgdiAUiUlFdAP7QA0hLsKz%2Bi%2FWQ1PV07MT9ayd8DRfZRMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDPVUUDR3oloR0daiRyrcAxSPVu6Z3uqS2pnKvmJUEPAo0mP6Dcw%2FowDGRquTGVGFwn83hTnjk83gIZ0Sn0p1ZJhJIr%2F58CL3CbzWLxLKWGu9WIL4xbyMHi90FxDkvMYldEg5i2s41cG%2BU8pSyfMIRfIqjIt30hlzF6Pax9Y6t9iqPJFx4cWPGJThGJNacoDDNmj4eVSYCSsvhC%2Besixnb5yfsOzjY3oNx%2FWGEyZUsdYwCWEJmW3b%2B8kDcogGLKUywogrwKY88b9aHq83USmG%2BQZAJV2D%2Ft%2F1hHaoP7s5GzBelMOHY9gF550P0nRfmcEuXvFG0VZPCzzpzj2oJSjFwgz3hizRmGCqnr0R2dm7dIBTjqqmFortPYUH1eD4lzsiBOESK%2FIDahonarQRYBPp5NV%2BkLfjEoEZtZZ8SjY2nZXhpUhMXic%2FkbtxCH8G2ZE4ve7D%2Fuj0MZGvBLi4IRLoAtf2rAB%2BE4fjQCXM2isDkPUBmU4NDKoALXRXrST%2F86zim5QN4PBzx%2F95%2FR1u1Sd4uzhFvcfjMcFVF3zV2Lgt5XeNVmXnnQR6Cy8ukq2pfgT7Lf9xyWg6CqeH9gJ%2Fxx1lT9po1tIERWRwNJt1E8qkSJ3rixpn%2FlvU0TUnMn24Ay1qqy8ZUYMKEhFtUkO6MOW3978GOqUBjRG93fMDQK4AX3ienliHX%2BWzJVM0D%2FEyBPzBCTFzqHlTHa4bZQFEFRIr8nVclBd6Q1F9U5x0UDUrfW%2BgcKug7gIrVtfuX3rrMAn3PSTRRQyMOhhIjTWduJ2%2B4vHL8tf%2BV%2BLrfO%2BDxrTS2LkRnMR37eCto5Dsmo4uPQvpn4jURm7%2FAIS7GP%2F9mRXN%2BptUOMVAbZ3EBThUH2QfeR82Jam7skfjY5Fi&X-Amz-Signature=30412906f49a0801afa5c718b8c9371f9293613b45e6b9b115c88605361eea01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
