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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVIU7MN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGLvvQuoOIDeP6p65zrHwSqKkAuWnsST2B8lNMhDq1wMAiEAt%2F2Nk3AV%2Bq3PI%2BprmXjlRZhvHGzzoA%2B4MOKLLifRHiwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCw%2BiN%2FcKJdsZ1r%2FSCrcAwa%2B2Pe%2Fvz%2FpekJ0a0CBs097TWL20dW%2BvWPMJrPWImtm0R5unWJhyLHGLtfGFLzPbeXNEv%2B%2F0fYExdQtc57Xpp9nWl1PJ%2BWvlx0EGqjlkH9JdrItpFDKbPeCb3YsFyjDLLd76rWEr8qvG%2B02sseXzthFT5gpGerUdD8Ab4Irp%2FBInAEIZ0E48hAuM56JjKcVoOAtRDxLknebjzQlTI2RHh3heD4mYPWGDg9eY5HzDlHeihpnR8RCnbUobCZxB0OyhDEdLpnpkA3s8MtJ81QML7XVJD475jaad8THcZovYt56HAiqhX4m6tVPsSrdzNk8Uep7v0Ttcs%2FV7f%2FuUn5s0MNhmFhEdeoKp3%2BFxka2p%2Bix%2B8pmwOkSucT9r1sRUbJcc0A%2FFicMqHogMBUSCBbwNJhArluDvZguTZqDCBtZT0L4P2rz8D2DtwiMkpv7UQGiqfQbVecEuiPBhyJ5QwvAlclfoKwoXYesgzt9qhTpgR3S04CMQOhDKfc9yxEKhbMMWFXY1PZmdFZ3a%2F7KpMmzc6w9fUB3nBGBUIhxcI0Vf3oHT9vwVh1AEMxYBoTJd%2FsiDsOA4EBYOni4aB%2BNCai2kWC%2F%2BdRuDVLgOYTbjPNspusiMjeVrd8XWrpmgEKqMPv91sMGOqUBl%2FejxjwniBc6q8PXi8vTtb31652Fi8R6TiBFELD2NQyJYO4zpmHIEaq8%2F5EJ6XDPU7TGfGwRTA9I31P%2FeZboolujUPpbkiIY8egKw%2FKxlihOD2Yhrmg15tq5fgcuPJARHbkknLKWioQRZNmmb8La6jIkb7REhOpzOslmHQYUlc7R6b4MjcF74bpeZsHvjAuQfq3imHgFOX%2FeKrcEG6j8ZgV33cuO&X-Amz-Signature=35284963fc94122e6b223b147e5e2e0b5bea967e4e6e5c1562298d750f920f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVIU7MN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGLvvQuoOIDeP6p65zrHwSqKkAuWnsST2B8lNMhDq1wMAiEAt%2F2Nk3AV%2Bq3PI%2BprmXjlRZhvHGzzoA%2B4MOKLLifRHiwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCw%2BiN%2FcKJdsZ1r%2FSCrcAwa%2B2Pe%2Fvz%2FpekJ0a0CBs097TWL20dW%2BvWPMJrPWImtm0R5unWJhyLHGLtfGFLzPbeXNEv%2B%2F0fYExdQtc57Xpp9nWl1PJ%2BWvlx0EGqjlkH9JdrItpFDKbPeCb3YsFyjDLLd76rWEr8qvG%2B02sseXzthFT5gpGerUdD8Ab4Irp%2FBInAEIZ0E48hAuM56JjKcVoOAtRDxLknebjzQlTI2RHh3heD4mYPWGDg9eY5HzDlHeihpnR8RCnbUobCZxB0OyhDEdLpnpkA3s8MtJ81QML7XVJD475jaad8THcZovYt56HAiqhX4m6tVPsSrdzNk8Uep7v0Ttcs%2FV7f%2FuUn5s0MNhmFhEdeoKp3%2BFxka2p%2Bix%2B8pmwOkSucT9r1sRUbJcc0A%2FFicMqHogMBUSCBbwNJhArluDvZguTZqDCBtZT0L4P2rz8D2DtwiMkpv7UQGiqfQbVecEuiPBhyJ5QwvAlclfoKwoXYesgzt9qhTpgR3S04CMQOhDKfc9yxEKhbMMWFXY1PZmdFZ3a%2F7KpMmzc6w9fUB3nBGBUIhxcI0Vf3oHT9vwVh1AEMxYBoTJd%2FsiDsOA4EBYOni4aB%2BNCai2kWC%2F%2BdRuDVLgOYTbjPNspusiMjeVrd8XWrpmgEKqMPv91sMGOqUBl%2FejxjwniBc6q8PXi8vTtb31652Fi8R6TiBFELD2NQyJYO4zpmHIEaq8%2F5EJ6XDPU7TGfGwRTA9I31P%2FeZboolujUPpbkiIY8egKw%2FKxlihOD2Yhrmg15tq5fgcuPJARHbkknLKWioQRZNmmb8La6jIkb7REhOpzOslmHQYUlc7R6b4MjcF74bpeZsHvjAuQfq3imHgFOX%2FeKrcEG6j8ZgV33cuO&X-Amz-Signature=72bb4c3d33901bcf96a3f20d19ff003623b531c94e41ac34637d1700ff8dca51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
