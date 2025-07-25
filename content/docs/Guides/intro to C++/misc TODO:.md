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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V657YWR2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHuDJrs4dYNCvX4cz%2FZu%2FjLwYwEjHPRabOpZhPT7pkBOAiBERCwX%2FLedALEGMtb7NtkdO65D0WACH5HcsLPVFO9aUir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMvasTTU0s%2Fivn%2BoGYKtwD%2Fz1pSj5exAFH%2BO0D54heABhSoTrsJl8RCuudgecjSdhNoIoMeDVFGlYuU72KUPkuzC7W%2FJsDs25ZviGqmnGPavcd2aAEjUHAGAt85ck0qaS5tcyTAdyVHxPMKUasiaO1o%2Biz5VkutHLYgIEtyr1yRsT5naKsP%2FMtP8MRdnKKPE5vGNijQXTSWYHbUPxP%2FZPtGJZ1RSYhcwXr%2F2DJeQHiGnhqiTETJH9Sj7CMPbhMYj3IRVpGRuhOCsf2L%2FWgzsIDb2HImU8uxDx%2Bs8TQDtoXT8wvI%2BuFUzvIRzXW2XLw3%2BGy4Qbd8pnQZ3p%2FfrTIwDHY5OzAzKOfJ4qddaUyl1krI9qOl0z0Sm%2FOCgyCt%2FtxN2N8gm%2FwxWQ2UofbZ%2FcgK145PcIjfkNvix7UQYeMOOhgYaR6x%2FPRB55y56DcayfgtyUK78UcNLu5KdVNIra8shho8QK6poEMgx%2B6FDE04WT0foNtCxJ8OP19iRx2OUMwXluaD87GMlg0pW%2FZFDHWGkb4RMvqhvA6ReZjtIdgrqEGFZtQ3cmy591W89aQBd4rNnURQqdkVuWYsItcqbo%2F%2FUCqrbqLwnGM4ZZAYrnXb0PPDVARZPkwVjnjm9i2%2FP%2FEmKjOTIGERpdNtrVBMm8wtoaPxAY6pgFtfkO98d6SN5VwMRZ5VhYo7K6QFLGQYAFUPLKQPvTwJz1ioHNbuHigus9W77x0aRqjvZVvYoMJJsvS%2FMlduNLRarpTAhiVtwGYCUAZwHgemBXVMD79RXAtizX4C%2Fmv1GD7Dlgg0b6Kmd10UhmP4h%2Bd4i7%2FuD8S%2BPyqMZ0%2BRQ8mzefIGjlkrO5u0TUQ%2FTzjZBxYygmLqKY%2Bnicfan3vauLA%2BI2Xpu76&X-Amz-Signature=0beffb432064d5464ee70f64471736c7f1864f662af8645edf4ec836c3c364c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V657YWR2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHuDJrs4dYNCvX4cz%2FZu%2FjLwYwEjHPRabOpZhPT7pkBOAiBERCwX%2FLedALEGMtb7NtkdO65D0WACH5HcsLPVFO9aUir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMvasTTU0s%2Fivn%2BoGYKtwD%2Fz1pSj5exAFH%2BO0D54heABhSoTrsJl8RCuudgecjSdhNoIoMeDVFGlYuU72KUPkuzC7W%2FJsDs25ZviGqmnGPavcd2aAEjUHAGAt85ck0qaS5tcyTAdyVHxPMKUasiaO1o%2Biz5VkutHLYgIEtyr1yRsT5naKsP%2FMtP8MRdnKKPE5vGNijQXTSWYHbUPxP%2FZPtGJZ1RSYhcwXr%2F2DJeQHiGnhqiTETJH9Sj7CMPbhMYj3IRVpGRuhOCsf2L%2FWgzsIDb2HImU8uxDx%2Bs8TQDtoXT8wvI%2BuFUzvIRzXW2XLw3%2BGy4Qbd8pnQZ3p%2FfrTIwDHY5OzAzKOfJ4qddaUyl1krI9qOl0z0Sm%2FOCgyCt%2FtxN2N8gm%2FwxWQ2UofbZ%2FcgK145PcIjfkNvix7UQYeMOOhgYaR6x%2FPRB55y56DcayfgtyUK78UcNLu5KdVNIra8shho8QK6poEMgx%2B6FDE04WT0foNtCxJ8OP19iRx2OUMwXluaD87GMlg0pW%2FZFDHWGkb4RMvqhvA6ReZjtIdgrqEGFZtQ3cmy591W89aQBd4rNnURQqdkVuWYsItcqbo%2F%2FUCqrbqLwnGM4ZZAYrnXb0PPDVARZPkwVjnjm9i2%2FP%2FEmKjOTIGERpdNtrVBMm8wtoaPxAY6pgFtfkO98d6SN5VwMRZ5VhYo7K6QFLGQYAFUPLKQPvTwJz1ioHNbuHigus9W77x0aRqjvZVvYoMJJsvS%2FMlduNLRarpTAhiVtwGYCUAZwHgemBXVMD79RXAtizX4C%2Fmv1GD7Dlgg0b6Kmd10UhmP4h%2Bd4i7%2FuD8S%2BPyqMZ0%2BRQ8mzefIGjlkrO5u0TUQ%2FTzjZBxYygmLqKY%2Bnicfan3vauLA%2BI2Xpu76&X-Amz-Signature=b1d92a7432654ef4676814d013e906454dde8777d1c477a47d8ccbc7502cd288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
