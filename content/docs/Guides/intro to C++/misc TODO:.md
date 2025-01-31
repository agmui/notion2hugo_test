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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDPNSMP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcaYDCKOnyn3tikFpaFpIpnGQT5gX3CWKn7s%2FdHi3rQIhALaL%2BiV73%2B0NCkGCPg6LbtDy%2FeIDjoI7Q0332QPLWZ3VKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipL3GLYDdldvSGisq3AMFuPGN%2BzCbZ722vItQPEjTjLuoUusbUx0cS63%2FbryVn3XDTBkBGDL1nRPPNgcvjLXapo20wL4u5%2FF%2BviQiwoT2fsmeipBjfAcrLZRsNDVJKKOwfR1noqQpxCp9C2BMgbVX1R0NmpsDef2IDaapqpmEH1KELSMosHcNovcaINNFvvc339PZyyidQLsa6Bi2fxUCNw8oXJaE77t7yko653F4IeJwyilBNqDRvEqQgbUJYxZUWT0%2Fzo4Gr%2B7L6hOiKsrF8CeheUB2PoKZaKmSDfEeWsMpVUBAGRSmYpp82yC5VDgOoR4VdlPWAk5CHYqYVTq3JQRJ3vGPVi9uuRpBNbQVDbqmvP7B91RO2C7OUebYsnqGo73SqRfpB2swYlYYjrq9ku8C4QkoEd2Q7TGjdRX53LZP5C0gnXUq18t%2FH%2FasIZD68bDtkoc4u1aNxs%2Ff6wjGZ%2BJaEyMQeGN2ZgIduhspMyATgECrVxODQ7b%2FLVjQjUev7dn3r3YwWIMSpCGY3ZCU%2B3f5VbBLuaR5QS9a3mnQ7P8MX%2BKXDz7Y4rgdMcDH7Ye5CWA9qCZds%2FuUzsIAKCPAnucbKYUHT%2FpQFfCizR0jcrfDSPRuAKAZisKKtLLX45b%2BWM0797IzBJhMRDDHwfS8BjqkAXa70QVdfXC%2FnVceUFqmFNP1Ah%2B%2BEJeY83QndYymIq7WfdpDyO4%2B8rojp3JVMbqDhzZCi2eZzd%2BrCfV1U01cEJbypkVLe1Ubn7zuNFto%2FwbpacJKl19ytEQ6KSZQBLoBBHOlZShswJaygSAYZeZtqFx7niLlWcB02TbhEgFxaEBDlRt33mz1V5dN7SRf0hfKjLKfXttswo1vrSxprk%2Bf7E9sBFon&X-Amz-Signature=0745f30bdd6b2ef1a1fb8f7ed08a8df103f7800e47dd91b1e4ef8e8e477d5cec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDPNSMP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcaYDCKOnyn3tikFpaFpIpnGQT5gX3CWKn7s%2FdHi3rQIhALaL%2BiV73%2B0NCkGCPg6LbtDy%2FeIDjoI7Q0332QPLWZ3VKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipL3GLYDdldvSGisq3AMFuPGN%2BzCbZ722vItQPEjTjLuoUusbUx0cS63%2FbryVn3XDTBkBGDL1nRPPNgcvjLXapo20wL4u5%2FF%2BviQiwoT2fsmeipBjfAcrLZRsNDVJKKOwfR1noqQpxCp9C2BMgbVX1R0NmpsDef2IDaapqpmEH1KELSMosHcNovcaINNFvvc339PZyyidQLsa6Bi2fxUCNw8oXJaE77t7yko653F4IeJwyilBNqDRvEqQgbUJYxZUWT0%2Fzo4Gr%2B7L6hOiKsrF8CeheUB2PoKZaKmSDfEeWsMpVUBAGRSmYpp82yC5VDgOoR4VdlPWAk5CHYqYVTq3JQRJ3vGPVi9uuRpBNbQVDbqmvP7B91RO2C7OUebYsnqGo73SqRfpB2swYlYYjrq9ku8C4QkoEd2Q7TGjdRX53LZP5C0gnXUq18t%2FH%2FasIZD68bDtkoc4u1aNxs%2Ff6wjGZ%2BJaEyMQeGN2ZgIduhspMyATgECrVxODQ7b%2FLVjQjUev7dn3r3YwWIMSpCGY3ZCU%2B3f5VbBLuaR5QS9a3mnQ7P8MX%2BKXDz7Y4rgdMcDH7Ye5CWA9qCZds%2FuUzsIAKCPAnucbKYUHT%2FpQFfCizR0jcrfDSPRuAKAZisKKtLLX45b%2BWM0797IzBJhMRDDHwfS8BjqkAXa70QVdfXC%2FnVceUFqmFNP1Ah%2B%2BEJeY83QndYymIq7WfdpDyO4%2B8rojp3JVMbqDhzZCi2eZzd%2BrCfV1U01cEJbypkVLe1Ubn7zuNFto%2FwbpacJKl19ytEQ6KSZQBLoBBHOlZShswJaygSAYZeZtqFx7niLlWcB02TbhEgFxaEBDlRt33mz1V5dN7SRf0hfKjLKfXttswo1vrSxprk%2Bf7E9sBFon&X-Amz-Signature=4472a5111e20e6f2f0ffbdc96c5b8431a08925f58283e5e5565ffe588e9bd8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
