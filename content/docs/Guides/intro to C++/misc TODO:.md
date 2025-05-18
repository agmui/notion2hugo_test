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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHWOZBXK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUUTA92syi6Id1pjHbXlyKDIVlKiHVICe1DfZKcIKjtwIgNjPcNb27cfugVzlMyP49GPVU%2Fjt9d3lSgxdkyXGxHfYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNXJp6H9NtGS%2FgRUmCrcA4WoxGSxJNL4ZYEmQ6jJLwXYQHhaCVEOzrw6%2F9D4zqmaI4hJlCOrefC9ZWbW9hLuLs77A1MRIXoExxjIP%2BtSBLf2IsTEzdqfTH5zJkgPWjD6ckKxabHkQLoCWaQqGmPFD2Rs0d%2BqbEaEio31gRWso%2FlCgmKgFTIPa12dYMcxUilCnZ5mOmXXjr7VzUSZ1g4%2FELuySvrLPvxzq3qFS1PPnqirppBhEMiA3S2fawGZOzJZTU7%2BocKW%2B7HC9CXo1pMsxkoTWV6tnfxed0xVRhadUzIwLVGsefVNpieKpEshPzCAwv0Qe48c70UQ%2F%2Bsu%2B6PZZGt12Z5UVXOKxHu0v4bdbUWLnevdsQt6c9abVGyeLLxu%2F4pQW4nWq4ucGvBnnIPHYN8CYKHDVXHOkmUbMGQBAn2Qz6zlwujexHLWOv3lkAQlg%2By3ESmy5EoGpcleyr4mvDsGpxoqoDlmQ%2F8OTuvJ5V3hM9BS02jfPdV72m%2BromsMU368cXcNB5Soiuxp4dde%2Fgyr4gdIz1gbinNBJjtuFeZJjqO1YBd8Cdq9bg5qtQ%2Bsg6gP4smjXrCqJktQFYbfkFq772cnvux8fLkL41%2FyxK8JTJhoPKWn4yMs0v%2FDmCviPiKXZKjAzwAu2WjdMPLXpMEGOqUBOAxzvqT%2FKXhPNDkZtl8GUWxuBR9CHwVuSj1W96pyphbOONbeapPTKO%2BmT%2FP%2F7MTlMAL5%2B13y%2BfGuK3UbLxCpmUOLJuN4pTWLeso4oxWVZIPQxA%2FVAqhrE4NIT69N8CmgM3uVODE%2Fl73dUEijlF%2BFlJNe%2Fm5wc9ljnt9yASsS6qHi%2B0BZwIInfEEwPNnkTWvErpFvMJiRq%2FAaYVmw2BFCsbAEtKhg&X-Amz-Signature=223214009414e09fafb3b6398e4a203a920c8dde424acfd9e11de60aa4b6d987&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHWOZBXK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUUTA92syi6Id1pjHbXlyKDIVlKiHVICe1DfZKcIKjtwIgNjPcNb27cfugVzlMyP49GPVU%2Fjt9d3lSgxdkyXGxHfYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNXJp6H9NtGS%2FgRUmCrcA4WoxGSxJNL4ZYEmQ6jJLwXYQHhaCVEOzrw6%2F9D4zqmaI4hJlCOrefC9ZWbW9hLuLs77A1MRIXoExxjIP%2BtSBLf2IsTEzdqfTH5zJkgPWjD6ckKxabHkQLoCWaQqGmPFD2Rs0d%2BqbEaEio31gRWso%2FlCgmKgFTIPa12dYMcxUilCnZ5mOmXXjr7VzUSZ1g4%2FELuySvrLPvxzq3qFS1PPnqirppBhEMiA3S2fawGZOzJZTU7%2BocKW%2B7HC9CXo1pMsxkoTWV6tnfxed0xVRhadUzIwLVGsefVNpieKpEshPzCAwv0Qe48c70UQ%2F%2Bsu%2B6PZZGt12Z5UVXOKxHu0v4bdbUWLnevdsQt6c9abVGyeLLxu%2F4pQW4nWq4ucGvBnnIPHYN8CYKHDVXHOkmUbMGQBAn2Qz6zlwujexHLWOv3lkAQlg%2By3ESmy5EoGpcleyr4mvDsGpxoqoDlmQ%2F8OTuvJ5V3hM9BS02jfPdV72m%2BromsMU368cXcNB5Soiuxp4dde%2Fgyr4gdIz1gbinNBJjtuFeZJjqO1YBd8Cdq9bg5qtQ%2Bsg6gP4smjXrCqJktQFYbfkFq772cnvux8fLkL41%2FyxK8JTJhoPKWn4yMs0v%2FDmCviPiKXZKjAzwAu2WjdMPLXpMEGOqUBOAxzvqT%2FKXhPNDkZtl8GUWxuBR9CHwVuSj1W96pyphbOONbeapPTKO%2BmT%2FP%2F7MTlMAL5%2B13y%2BfGuK3UbLxCpmUOLJuN4pTWLeso4oxWVZIPQxA%2FVAqhrE4NIT69N8CmgM3uVODE%2Fl73dUEijlF%2BFlJNe%2Fm5wc9ljnt9yASsS6qHi%2B0BZwIInfEEwPNnkTWvErpFvMJiRq%2FAaYVmw2BFCsbAEtKhg&X-Amz-Signature=42953011e6a54db2c0d0c900954db10471fe004865f541a72c72e121963d7d97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
