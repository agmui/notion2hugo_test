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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PTXQBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCIDwcAFa%2FWp4VnvyT4vV5%2F6OXP4OecT0VZKCms9U4zZAIgUZWzesE2xjaONBX5LUpTM6cuSUeRs2TSkSsI7SMYqAEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDnMra12X4pHjEmFpSrcA%2FyWS63fdkdfopI3hCaaty3z2x%2FxZSK5Qe529LEjFW585doooX34roLM%2FFMMIe2a2%2Fu0cIf2weoEjVXbLcTpflIPthXPsmyWOHxHqcO4JiU41gWLKCCarNn67ImNRdbxaFzCAGpHedCX8VcEGXTIbEhqqR1oUHWrn8rRXmZXzb7AluvQsz3ZfJFytXftH%2B%2B%2BLFiBFVZZUBXK1QV56W9O2HntTGe1n2X8WEeFDmH%2FQFbJUNRizg6PNsV%2FjqONMGftxQWrIPDlRfwQZjXzE4UgP1io2mYGoXJwR2vHrT%2B5Tax2kPE8e1dTgJ0V%2FILssj4xioX%2Ba5HkU6FvPnE5f5UeyiGt%2FKdkT7A1c8gwNhgkvtngtn9Q3pKfGJzLAOTN9QG5tyYHnrwqiiozfC5X1RnVuDdS6B2qhwHRfxgJPXti5ogxdbR0TmDAjUkOKBMVlsoXR%2BtDGpq45iOnCqgS66fu%2BDSvcsNeS3YF9cUmgItuDGVc5BCBqFjcbi8SjGu04ZH9ZOApkk3uV%2BMX19eksplGICidHjUOANp9d5u51sg4yYKoZwGj4brBDcpJDmjZ3m7w3y5shuvcN8EvB%2B%2BvtHFGVzuh1G1TE%2BQbWxeuROSiaeiR9SYBBFAaoMGko%2BgSMPy%2F%2B70GOqUBWD3uXxr3EllNZf1NJR7Y87%2BPzUJoAoPR4N56DB8a4u25a%2FgYuNtMHwjq31hrpjFd4sCt0%2FJJWuhCwPzZi6OGgRB55R9amARNoTHCr%2F8FTcxt7s3wi0XzlQ8Vx3OB4Zo0xHsY0gomqQXZAY1pLTRHcD4%2BUZEhjMmW1v3bcMm8YrTlG0PbeKNE0JXa1zoYld7XxpbrRHjqI9%2F82d70zuGsSekxe4be&X-Amz-Signature=a0330335f38c7d4677f3945b2fc48db036b9ce0e811b3ab29c042d2448c288ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PTXQBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCIDwcAFa%2FWp4VnvyT4vV5%2F6OXP4OecT0VZKCms9U4zZAIgUZWzesE2xjaONBX5LUpTM6cuSUeRs2TSkSsI7SMYqAEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDnMra12X4pHjEmFpSrcA%2FyWS63fdkdfopI3hCaaty3z2x%2FxZSK5Qe529LEjFW585doooX34roLM%2FFMMIe2a2%2Fu0cIf2weoEjVXbLcTpflIPthXPsmyWOHxHqcO4JiU41gWLKCCarNn67ImNRdbxaFzCAGpHedCX8VcEGXTIbEhqqR1oUHWrn8rRXmZXzb7AluvQsz3ZfJFytXftH%2B%2B%2BLFiBFVZZUBXK1QV56W9O2HntTGe1n2X8WEeFDmH%2FQFbJUNRizg6PNsV%2FjqONMGftxQWrIPDlRfwQZjXzE4UgP1io2mYGoXJwR2vHrT%2B5Tax2kPE8e1dTgJ0V%2FILssj4xioX%2Ba5HkU6FvPnE5f5UeyiGt%2FKdkT7A1c8gwNhgkvtngtn9Q3pKfGJzLAOTN9QG5tyYHnrwqiiozfC5X1RnVuDdS6B2qhwHRfxgJPXti5ogxdbR0TmDAjUkOKBMVlsoXR%2BtDGpq45iOnCqgS66fu%2BDSvcsNeS3YF9cUmgItuDGVc5BCBqFjcbi8SjGu04ZH9ZOApkk3uV%2BMX19eksplGICidHjUOANp9d5u51sg4yYKoZwGj4brBDcpJDmjZ3m7w3y5shuvcN8EvB%2B%2BvtHFGVzuh1G1TE%2BQbWxeuROSiaeiR9SYBBFAaoMGko%2BgSMPy%2F%2B70GOqUBWD3uXxr3EllNZf1NJR7Y87%2BPzUJoAoPR4N56DB8a4u25a%2FgYuNtMHwjq31hrpjFd4sCt0%2FJJWuhCwPzZi6OGgRB55R9amARNoTHCr%2F8FTcxt7s3wi0XzlQ8Vx3OB4Zo0xHsY0gomqQXZAY1pLTRHcD4%2BUZEhjMmW1v3bcMm8YrTlG0PbeKNE0JXa1zoYld7XxpbrRHjqI9%2F82d70zuGsSekxe4be&X-Amz-Signature=27f88b68bd018cedf8274a607fd1567eaf19047588d64fae62ecb32eb6b75700&X-Amz-SignedHeaders=host&x-id=GetObject)

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
