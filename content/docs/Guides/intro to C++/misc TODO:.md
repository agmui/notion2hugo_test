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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2VHLE5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAaFef3Venb%2B9m8tx%2BdFFCp7wLMeHiW0oJkgqyCV63ADAiEAv6jwWFnVING8OsSwkMtvBzLmSmthHsJGgCZIUqkmC64qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsAp%2BgCchxJQIOnASrcA1bDyu8unQQt8kbFZDxf1gf6yAT7IIAhWLQ36umUgLq1OHdYEGPo7%2FtU77S56hBH%2BsJWpCcePHDpoT4Bt8e3uGxkKLchUhluPY4FXfIhofZV%2BBJ13853ejvsj5%2Fm3%2BzKWD1yM%2B0%2Fmj0GnE71O1%2FS%2Fi8kd%2FRhMr2VPtORxwHmRWp0NrwuLLGkQDcwmEPm216PxM%2FqfhwEYovMuvCrJvYmp2wzBNAEwuLZUnKVL4T2cYzZROQkBAR8sEYo18f2yi4zzphdsUIB31knOT341pK%2ByFDgHj7eIfuBMNKYg9UGXeBaE7ls0qs7Sy9gX30QUOp5mLFYFTNvZQsSBA5apasXWStoWNN0TmmXQ%2Bnw%2F5GGw1XChWpuUfsoydJHTha62PmLx%2FnW083Kq4Kat2Ed2hTn2tUHAAQe4StDYhxGIiDyzDhZLD0HXRfS%2BHQk2GrUzaaWejfpz93Zp2VVuSmk5dHKVIw%2FPYmgelc7YXSo%2BIEPHvLivNWt6neZ4NE3C2UH2vk0LJWxsaeIXT2nu19hO8s40Dmr1bMB6SH5XtEUWD%2BctOGRc4gWXcl0N0YxcCCD182wJ3ZD32DYidDrOnpN7lgpE4Tlu1aQ%2FQbb2JDcFh%2FthfrwUoicVUpLhYzVqfUsMOSIqr8GOqUBK6C6G6bDsG9ugSpxr0DDGsF%2BV3SnN5RttNmSQT7feY0UV9C2flvccQBnATr7NGSGET3s%2Fp35gsgUYDwJ272p540DTM95CrRUIToxrp8U1X38kU0oHou001WLFVYNaLAbPX2SG3wYvFVazLM6xx%2BpNkIchsTTOxtfu5fL1JrtUzaEjG%2BwMWQWw7utN8SbzPITcR%2FuBgHCAycS%2FeFi3ip4sjXv93F%2B&X-Amz-Signature=2362c812a566eeaa87578fdf20799da07238cfab624434b19b7869a6e95d75b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2VHLE5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAaFef3Venb%2B9m8tx%2BdFFCp7wLMeHiW0oJkgqyCV63ADAiEAv6jwWFnVING8OsSwkMtvBzLmSmthHsJGgCZIUqkmC64qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsAp%2BgCchxJQIOnASrcA1bDyu8unQQt8kbFZDxf1gf6yAT7IIAhWLQ36umUgLq1OHdYEGPo7%2FtU77S56hBH%2BsJWpCcePHDpoT4Bt8e3uGxkKLchUhluPY4FXfIhofZV%2BBJ13853ejvsj5%2Fm3%2BzKWD1yM%2B0%2Fmj0GnE71O1%2FS%2Fi8kd%2FRhMr2VPtORxwHmRWp0NrwuLLGkQDcwmEPm216PxM%2FqfhwEYovMuvCrJvYmp2wzBNAEwuLZUnKVL4T2cYzZROQkBAR8sEYo18f2yi4zzphdsUIB31knOT341pK%2ByFDgHj7eIfuBMNKYg9UGXeBaE7ls0qs7Sy9gX30QUOp5mLFYFTNvZQsSBA5apasXWStoWNN0TmmXQ%2Bnw%2F5GGw1XChWpuUfsoydJHTha62PmLx%2FnW083Kq4Kat2Ed2hTn2tUHAAQe4StDYhxGIiDyzDhZLD0HXRfS%2BHQk2GrUzaaWejfpz93Zp2VVuSmk5dHKVIw%2FPYmgelc7YXSo%2BIEPHvLivNWt6neZ4NE3C2UH2vk0LJWxsaeIXT2nu19hO8s40Dmr1bMB6SH5XtEUWD%2BctOGRc4gWXcl0N0YxcCCD182wJ3ZD32DYidDrOnpN7lgpE4Tlu1aQ%2FQbb2JDcFh%2FthfrwUoicVUpLhYzVqfUsMOSIqr8GOqUBK6C6G6bDsG9ugSpxr0DDGsF%2BV3SnN5RttNmSQT7feY0UV9C2flvccQBnATr7NGSGET3s%2Fp35gsgUYDwJ272p540DTM95CrRUIToxrp8U1X38kU0oHou001WLFVYNaLAbPX2SG3wYvFVazLM6xx%2BpNkIchsTTOxtfu5fL1JrtUzaEjG%2BwMWQWw7utN8SbzPITcR%2FuBgHCAycS%2FeFi3ip4sjXv93F%2B&X-Amz-Signature=3f0cc3088195389edb199b06afa15d4cec1da7234b4b1be7273168b643201ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
