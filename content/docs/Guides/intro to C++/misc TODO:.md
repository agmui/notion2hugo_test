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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGODGFEL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtlPqzVx%2F5RDFC3BqiyXDXE5dQ%2FqHjGHdTowSAJfs5bAiEAiyAKxaEOSAgVfkb%2BTl%2FT2QoEp5%2B4yL1ZgGR85ePhwQgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEA6LPMe8bImz%2BpbrSrcA0sO4fvmcDxpOPFX2kQ2yzSVmXZKQtHnRR%2BPBJ0SGLvHZCDBlEm6Guc6yCsySTvGZED0uFxvuKMS1sIXDjesZOj2p%2FeMB6navvy0A8lm0hvqEg9gQM%2FZFAYt34W4EC5rj6ecTlaqe8HJ0BUEXqHf15XEeCqP%2FhdBnE4YmVmvnwjWoeTG2gJVPebVFyGWCw6xyGXSK4GdZe8QZYUNm4owe0leiRREz5SFHgsP5ZlkSMMEHn112sGmf8k49qbOCKLfzdENavIMBRGH0ewvoXbPUF0PmhQhcYYasYtjsP%2BOGo8SkhKWUwMOf5SaXGLBy4rX9tzkWQaj9bsoDn5X1E%2B%2Fqp6Nm1DZ12sfonmMl5ylrY9GvYHbWH4eN6IwHR0rlkmwC6GIxYnW8IjXK4Xk5FcKzH1p1MX%2B%2FIsIe7XqhgrSjU2flFm2bLFWYm487mNMHsmOuOIawbxunMRTIP12fkw24RywGJZTILZJk24G0HF5%2FwyUA8HM8PJqPYCrHCl7fasQB%2B4xOB9v6eTHTYjzT2DbeCJvLaBnwueYG88bJb%2Br5ADuKSH7Xe%2BV13zVJPBp6K1WpePPNMttz%2FyZXBu0xJiHYD%2BMq2pGPWxeSaZPRIQMdEwmWaTx4oSuclPftN39MNXcpMQGOqUBRSX%2FcXrErgQZgt4fMkr%2BI%2FC0zKFtp6VCa%2BcXu2eF2iXu9U5BjyzzUOGxS%2Bev5wQebF%2F1Gjk3SrpPXPd2J0aCAnRQTSPFdgHsIr%2FTmvtjs1e%2F6MBNsNJQrXblkyDnAdxBVykHmSDTU83S0%2BaZhg%2F5AstSL9DAzzFosaPne%2FYMA96PbXjPDWNLd2Dk0uLbch6nzN1fuY9X3al5Iwdt%2F1C%2FlS8sI%2B6V&X-Amz-Signature=1b6d590ff5b36c71452239e32ccae79ec94da4f7a60114eddb44f5e7f620ca20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGODGFEL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtlPqzVx%2F5RDFC3BqiyXDXE5dQ%2FqHjGHdTowSAJfs5bAiEAiyAKxaEOSAgVfkb%2BTl%2FT2QoEp5%2B4yL1ZgGR85ePhwQgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEA6LPMe8bImz%2BpbrSrcA0sO4fvmcDxpOPFX2kQ2yzSVmXZKQtHnRR%2BPBJ0SGLvHZCDBlEm6Guc6yCsySTvGZED0uFxvuKMS1sIXDjesZOj2p%2FeMB6navvy0A8lm0hvqEg9gQM%2FZFAYt34W4EC5rj6ecTlaqe8HJ0BUEXqHf15XEeCqP%2FhdBnE4YmVmvnwjWoeTG2gJVPebVFyGWCw6xyGXSK4GdZe8QZYUNm4owe0leiRREz5SFHgsP5ZlkSMMEHn112sGmf8k49qbOCKLfzdENavIMBRGH0ewvoXbPUF0PmhQhcYYasYtjsP%2BOGo8SkhKWUwMOf5SaXGLBy4rX9tzkWQaj9bsoDn5X1E%2B%2Fqp6Nm1DZ12sfonmMl5ylrY9GvYHbWH4eN6IwHR0rlkmwC6GIxYnW8IjXK4Xk5FcKzH1p1MX%2B%2FIsIe7XqhgrSjU2flFm2bLFWYm487mNMHsmOuOIawbxunMRTIP12fkw24RywGJZTILZJk24G0HF5%2FwyUA8HM8PJqPYCrHCl7fasQB%2B4xOB9v6eTHTYjzT2DbeCJvLaBnwueYG88bJb%2Br5ADuKSH7Xe%2BV13zVJPBp6K1WpePPNMttz%2FyZXBu0xJiHYD%2BMq2pGPWxeSaZPRIQMdEwmWaTx4oSuclPftN39MNXcpMQGOqUBRSX%2FcXrErgQZgt4fMkr%2BI%2FC0zKFtp6VCa%2BcXu2eF2iXu9U5BjyzzUOGxS%2Bev5wQebF%2F1Gjk3SrpPXPd2J0aCAnRQTSPFdgHsIr%2FTmvtjs1e%2F6MBNsNJQrXblkyDnAdxBVykHmSDTU83S0%2BaZhg%2F5AstSL9DAzzFosaPne%2FYMA96PbXjPDWNLd2Dk0uLbch6nzN1fuY9X3al5Iwdt%2F1C%2FlS8sI%2B6V&X-Amz-Signature=e829ebb9dc2aa0734c2181db80b0cb7d32da66dc12eaa38f59407c179a2ea545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
