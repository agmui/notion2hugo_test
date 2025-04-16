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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4JJ7FP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM0t2dSRSPBaw7hoTMRW9tXEyoFn0Zb0IeSwh7tUieJAiA%2F3MWHpmREtvz%2FDVsIcCuUotCaHa0U2nHhvCe3lSM9hSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMjn0EKSnN9IFdGd8HKtwDye2W17zokS4rowHEdtFB%2BjckN9mATSRC30%2BbsMj%2FwM8TFAq7oUDPyKxHYZ2Lk5OqtfpYz6rFXkXEV7VSXPN8G0XhlNkhacEtTfChEhIOnFlYbLvDBm5evRo2G%2FyBpb0t%2FpSThD5iLXyjkeM%2F1hgUITs1uIa0s59WxNSrS7bHeH6MUnyoM5IF0cGv%2BECsjStHl9I0IoVFYkvg3pxuKraRFIf26nQ%2BuJTlTQuRWYYzt2XfxbIetTnnT4Gh6gEXMfiY%2FTSBdXU%2F2BjIYcDp0n2tuCKDKCjOyqZHRPKPg5ZhagLRM4yrutVmxPQFNJcjBOb2KXno%2B8p84LdpSHXnd6%2BHHQmKhcfc4YJWwLOQkPn%2FNyybxrmr5xadgWalBj6jXy8CmeACRi%2F5H%2FoILLfIIsmPUfB7CnD7skE7zSo4rR0ZnpD8YKml%2FFMKIAg5kvl24KQ3AdtP%2BIJ%2B3NyE1DJMyS6BNJjzhf%2BY3OcDTGF2tcu3soHIL11%2BUcnHE0kkmmqtnlhGk7XxGTRjw3RGkZXDQcFPURnLZMuxUaWIpq5E4CDmyvyJ0n%2FoPbPJKAfuT63%2FbH4J2Y0NN1jNDn%2F1%2BaZsh1GrZAOW0E7CUSlUl8sPA30dw0QGkeJAn01bX0XecQAwx8aAwAY6pgHo9Wo6pe0Eg2kNXb%2FNv6SbsGS6TVsSyaYiDJPayV3suentr6BsqcPOUd7Vd95Zb%2BbrhjR4H9BXP8MAiNZI54ugTAz8icaxTeD3DNSPahZ2%2B9FLmeQH8DmFtgtbER1pmqAXCg6LMKGS0U7qJMsMoitxju0ncomxUfPP8KXp%2F5ZAFEpvlEe6FPFjoTdQbypPPTddMmm37GIPGDWE5fIwHPSAOY%2FhtYFs&X-Amz-Signature=bf6fbfd1d3935036bc37f426028d2936af87b8592bc1701cf94534b8fe7aff3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO4JJ7FP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM0t2dSRSPBaw7hoTMRW9tXEyoFn0Zb0IeSwh7tUieJAiA%2F3MWHpmREtvz%2FDVsIcCuUotCaHa0U2nHhvCe3lSM9hSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMjn0EKSnN9IFdGd8HKtwDye2W17zokS4rowHEdtFB%2BjckN9mATSRC30%2BbsMj%2FwM8TFAq7oUDPyKxHYZ2Lk5OqtfpYz6rFXkXEV7VSXPN8G0XhlNkhacEtTfChEhIOnFlYbLvDBm5evRo2G%2FyBpb0t%2FpSThD5iLXyjkeM%2F1hgUITs1uIa0s59WxNSrS7bHeH6MUnyoM5IF0cGv%2BECsjStHl9I0IoVFYkvg3pxuKraRFIf26nQ%2BuJTlTQuRWYYzt2XfxbIetTnnT4Gh6gEXMfiY%2FTSBdXU%2F2BjIYcDp0n2tuCKDKCjOyqZHRPKPg5ZhagLRM4yrutVmxPQFNJcjBOb2KXno%2B8p84LdpSHXnd6%2BHHQmKhcfc4YJWwLOQkPn%2FNyybxrmr5xadgWalBj6jXy8CmeACRi%2F5H%2FoILLfIIsmPUfB7CnD7skE7zSo4rR0ZnpD8YKml%2FFMKIAg5kvl24KQ3AdtP%2BIJ%2B3NyE1DJMyS6BNJjzhf%2BY3OcDTGF2tcu3soHIL11%2BUcnHE0kkmmqtnlhGk7XxGTRjw3RGkZXDQcFPURnLZMuxUaWIpq5E4CDmyvyJ0n%2FoPbPJKAfuT63%2FbH4J2Y0NN1jNDn%2F1%2BaZsh1GrZAOW0E7CUSlUl8sPA30dw0QGkeJAn01bX0XecQAwx8aAwAY6pgHo9Wo6pe0Eg2kNXb%2FNv6SbsGS6TVsSyaYiDJPayV3suentr6BsqcPOUd7Vd95Zb%2BbrhjR4H9BXP8MAiNZI54ugTAz8icaxTeD3DNSPahZ2%2B9FLmeQH8DmFtgtbER1pmqAXCg6LMKGS0U7qJMsMoitxju0ncomxUfPP8KXp%2F5ZAFEpvlEe6FPFjoTdQbypPPTddMmm37GIPGDWE5fIwHPSAOY%2FhtYFs&X-Amz-Signature=e56f81cb5f6dd877d161dd25a1ae54b22ac658387e8b8142ac30d2f7c832b924&X-Amz-SignedHeaders=host&x-id=GetObject)

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
