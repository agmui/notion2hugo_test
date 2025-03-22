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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEFFCHN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC3Q6f%2FGsCLcO1Xd5%2BDDdpOUlUwUL5ZlTmD%2BhJ%2FJTSamQIgJ52PTovV08vczCXWVF2qiSeVQOU%2Bo%2FPksEYjZqNaRcEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6PQgIFkSen9BkD6ircA%2FMNSpYfle12ueZBh%2F%2BM3zMOvjE4fE2HFd07y2qCrsY%2FgLaZedS2bFurc%2Bf4sS7G1kE%2FWuNWEFbVVsKZL1h6BCnv7Us8%2BeCQ2d1ux46degSTiBQjLbW40fg1xakzfDsbBQwLAcUWEbQ2Dz74GAHfJIryrmSicTpQeUuwcaPXTZHO4oAtZ5Msx5e%2Bxba%2B061AFMN%2FAVqT1W8OMo3Qv7F31VnmiVHILc%2BdWlDkK2B5c%2BXDbah2owgT2vbNcplXmXzZfRIM4p%2FyKoANlO8Y4kqBdlsdEcJy%2BG9cCszDLmgK3Mf9Ddp05dhxdgkTc6IyezYcVDRewTOQiRn6fAePOq5zexiJJ%2FwuMwClFjMxTF5QkohDIHY7sdox7zioXmEEgHZv78C9TNIduVCqgx7TpHAAtL1ewJ%2BjD9gRaRTkp9rFP5La7px8YNhbbkuiE1FzKjB9aRP7N89kDPqV0Q%2BXggTk6VTeTyvyqN%2BmYrr17SAuFO2LUPU10G5hSmUiLuYGYPCnpFkPEXEwfPMFtux3eMGD7qg0pgMa%2FU8yy6I5L9yZEUjzUlJx5lFGc35P3ieDllCjQfjWpGFvIqrlXENLTz3uQkekbD2F2qL2SIeS0NonIiMGo02DC7yQie6i2IlQMPDo%2BL4GOqUBzaniPV6NVFr0mm9%2FCmtpqAJaEzeJZW0k51ttffFPp8MwnotOsCqajGgyUCLjroKUHIOOHfF1eEIEW4ZEJctBtSxsnaA3W%2F7aRJod%2FmKKoGtnjksaIgiHPEFHp%2FupNA6f%2BMW871GmJEQVwDIxTRd4jHmVI3rg9FXxqkt9avUGWTGGcoGO75KrbYyuXDvs%2BYRmVi29KsI51nRkfoi7CRHyLvKYeY5A&X-Amz-Signature=3143aafde42b7332d337598bff82569d1ed28f57d72b6e160f32626bae838eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEFFCHN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC3Q6f%2FGsCLcO1Xd5%2BDDdpOUlUwUL5ZlTmD%2BhJ%2FJTSamQIgJ52PTovV08vczCXWVF2qiSeVQOU%2Bo%2FPksEYjZqNaRcEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6PQgIFkSen9BkD6ircA%2FMNSpYfle12ueZBh%2F%2BM3zMOvjE4fE2HFd07y2qCrsY%2FgLaZedS2bFurc%2Bf4sS7G1kE%2FWuNWEFbVVsKZL1h6BCnv7Us8%2BeCQ2d1ux46degSTiBQjLbW40fg1xakzfDsbBQwLAcUWEbQ2Dz74GAHfJIryrmSicTpQeUuwcaPXTZHO4oAtZ5Msx5e%2Bxba%2B061AFMN%2FAVqT1W8OMo3Qv7F31VnmiVHILc%2BdWlDkK2B5c%2BXDbah2owgT2vbNcplXmXzZfRIM4p%2FyKoANlO8Y4kqBdlsdEcJy%2BG9cCszDLmgK3Mf9Ddp05dhxdgkTc6IyezYcVDRewTOQiRn6fAePOq5zexiJJ%2FwuMwClFjMxTF5QkohDIHY7sdox7zioXmEEgHZv78C9TNIduVCqgx7TpHAAtL1ewJ%2BjD9gRaRTkp9rFP5La7px8YNhbbkuiE1FzKjB9aRP7N89kDPqV0Q%2BXggTk6VTeTyvyqN%2BmYrr17SAuFO2LUPU10G5hSmUiLuYGYPCnpFkPEXEwfPMFtux3eMGD7qg0pgMa%2FU8yy6I5L9yZEUjzUlJx5lFGc35P3ieDllCjQfjWpGFvIqrlXENLTz3uQkekbD2F2qL2SIeS0NonIiMGo02DC7yQie6i2IlQMPDo%2BL4GOqUBzaniPV6NVFr0mm9%2FCmtpqAJaEzeJZW0k51ttffFPp8MwnotOsCqajGgyUCLjroKUHIOOHfF1eEIEW4ZEJctBtSxsnaA3W%2F7aRJod%2FmKKoGtnjksaIgiHPEFHp%2FupNA6f%2BMW871GmJEQVwDIxTRd4jHmVI3rg9FXxqkt9avUGWTGGcoGO75KrbYyuXDvs%2BYRmVi29KsI51nRkfoi7CRHyLvKYeY5A&X-Amz-Signature=d6d2ed16827b5b1572d5391333c7add3cfb6f56a511788f5d15f514cd1eb9ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
