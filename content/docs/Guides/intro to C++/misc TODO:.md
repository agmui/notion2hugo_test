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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYNXB3R%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG29vvszJ1vSYT1Ap1BNsgCoC84AsU7ZPZx9LLjyq%2BqCAiEAqIFDyKIBmLCgETBDmNM8zMD6C9Bz4CpWBmL%2FG0Uj500qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlu3JxyafrkYxThpircAzKhVfnhIR%2Ba%2Fok4ey1sH%2B%2FWQ0EcaBkyQVFDUlYjijUsGXXtL49PfXIquRBE3QA0ogDO1EJtkeDrLmaA0e1NywxThcfm0MGmJGQmmQpa0UUccmFdlc%2BsoTlJjrZqpynCPsKkv4%2BGD0Pbfj2TZPjJOCT3eijMDpPfGCdbTvCL9lTHeHG%2Bu72g4YfnY7SmWik6CZhNozLvJoN6cFQKCg9LWcpRrMTQWjKlfY3ds3NnSn4x8Zy5pCYIpz8ud6G%2BdlYquEMlxxjERe%2BbNLepVv4ihuY0NlEcIXHz6DfnbLxVpswi80BK%2BsxEZZy%2F3NoTROCeuwZKeG3e%2BXc2L20zEGm75T%2FWr0O%2F5rCvpkvO5BXdMg0jtaWdBXq5oLK7n0JLj9fqAHw%2BBEI1GhZT%2BMoYIQRVgGmZGzNSywKbfJTzvLuHaZlEASyRAX56JVW5ScBjaMLmF00aKOSVAurHNUWC7C04hExWIt6ZKLzdYoaMgNeVwpcoJWyrk2LBlcgMbSwZSo%2BL9uAcFl%2BJQSn3Wtyy%2BJNsQd%2FTetJxnuFZ5VjVgQUDqB3Ex%2BG6zZ80fv83yGgSRrFY8f4Xzd87LuHImmtlSVARxf9uDGqpfPEm7lBSk9N60RK9MTaznVQ8CCbaQ0D0MKmutcMGOqUBg8PqNh4PR5kagwBvyQFMZ1QLHEG9aF5ZkgGS4eaVeBNFnZHzNK5A4mcmmgkOhvcrmsfPJ0eKb1giYH2JNn%2BbUcTJ0Dg%2Fu9hp7JdENN0eg%2FxFxKtJcFYRruAltJdtKGl%2Bp6ZioqscmDAIEOuStqMn9CcaAQNyo7LG%2Fdom5fY%2BfeUx%2BALTkMHYgeXCeLXmAZniTLTkFPfPaH5RFRSOgLbo0lO1hB0Y&X-Amz-Signature=019ba55086314066b3754d3046b03c1d370010b80aff6e2dafbdfbb7d7c25066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYNXB3R%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG29vvszJ1vSYT1Ap1BNsgCoC84AsU7ZPZx9LLjyq%2BqCAiEAqIFDyKIBmLCgETBDmNM8zMD6C9Bz4CpWBmL%2FG0Uj500qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlu3JxyafrkYxThpircAzKhVfnhIR%2Ba%2Fok4ey1sH%2B%2FWQ0EcaBkyQVFDUlYjijUsGXXtL49PfXIquRBE3QA0ogDO1EJtkeDrLmaA0e1NywxThcfm0MGmJGQmmQpa0UUccmFdlc%2BsoTlJjrZqpynCPsKkv4%2BGD0Pbfj2TZPjJOCT3eijMDpPfGCdbTvCL9lTHeHG%2Bu72g4YfnY7SmWik6CZhNozLvJoN6cFQKCg9LWcpRrMTQWjKlfY3ds3NnSn4x8Zy5pCYIpz8ud6G%2BdlYquEMlxxjERe%2BbNLepVv4ihuY0NlEcIXHz6DfnbLxVpswi80BK%2BsxEZZy%2F3NoTROCeuwZKeG3e%2BXc2L20zEGm75T%2FWr0O%2F5rCvpkvO5BXdMg0jtaWdBXq5oLK7n0JLj9fqAHw%2BBEI1GhZT%2BMoYIQRVgGmZGzNSywKbfJTzvLuHaZlEASyRAX56JVW5ScBjaMLmF00aKOSVAurHNUWC7C04hExWIt6ZKLzdYoaMgNeVwpcoJWyrk2LBlcgMbSwZSo%2BL9uAcFl%2BJQSn3Wtyy%2BJNsQd%2FTetJxnuFZ5VjVgQUDqB3Ex%2BG6zZ80fv83yGgSRrFY8f4Xzd87LuHImmtlSVARxf9uDGqpfPEm7lBSk9N60RK9MTaznVQ8CCbaQ0D0MKmutcMGOqUBg8PqNh4PR5kagwBvyQFMZ1QLHEG9aF5ZkgGS4eaVeBNFnZHzNK5A4mcmmgkOhvcrmsfPJ0eKb1giYH2JNn%2BbUcTJ0Dg%2Fu9hp7JdENN0eg%2FxFxKtJcFYRruAltJdtKGl%2Bp6ZioqscmDAIEOuStqMn9CcaAQNyo7LG%2Fdom5fY%2BfeUx%2BALTkMHYgeXCeLXmAZniTLTkFPfPaH5RFRSOgLbo0lO1hB0Y&X-Amz-Signature=ee6bd243d11047917663a0a3180d7a5548b40ae0d73ff95e3e111b9f3b71ac88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
