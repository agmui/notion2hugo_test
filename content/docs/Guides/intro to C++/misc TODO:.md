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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEJXPHR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2edpo628Mty1eaS4%2FSpJN1p5QV6CyWHnWt91%2BdLyHWAIgb%2B3OeAns6CHqtsVapmJaxUSM%2BvPVNsXOHd%2BCbWWJuUMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBIrBrC1B05rXMssQircA%2FrC7DnkJHA7jMpMuE7uFGkwvlsL3XsEebXQjNP%2BedoU8UDsKrhf18qKVOe6plcxGQs05p%2BUAVfOr%2FV87GS5lF1T2CxJMZWvtxYz1M2KQTqH7VeyIPYWXT00J20Xs3B2Mdaxoy7uQ0NqW5gp6ydjW6q4BusVHWCBteJp%2Bu8rq7RERVCjffwy66fR717lyzMwYdDxpOriPI9JrJp2hiw6RkCVG3JqKxAD7hq3vhzWXHrYAWdQ8cSWKfn7nJq9tAKRq7E8yMNIKLDXNMSK3elAPM5pVU4vgG8aCJAUADV8GYKfd61RsxeN6Z9IIJj5sJXsX86UD%2FHIhyU2LS4kE06aOBGsmv7qshru6%2FsGtsN6mWEheXwAmaiJvxHphkl9Aw%2Bv2jVgqEAbcroo335uunGVf5pWHVmwEv5qsWLSxnSwlCQPHGhIO5AkRCJ9HJZWOO7nZiicPPSbttQcxZ2cyQRIEKGytw6mE6tFepzjm0ouLU3C%2Bq%2F%2FpQkKo5GDf1LJJ%2BKvagRxY933fa5TaizwFMChCSZF21IWmh1PBMuT5vdmbVjgvGpZFi4exYyfvtdFYtYFeNU3SUVeuRD1lOh8DvPFaMZG32p%2FHjZahrHkQul2H2vFmCJ51dxNkvM0D5ijMPWUmr8GOqUBPYUTDF8RoJsukYeEpsgPldXkeRVC0syW6wyXuzNWSw71FbdO3CO802TE4nVqXfzZ4FZ0sc%2FdQqkwVC2qD%2B4FUmtOgRPSIBE4y7gHxG8okzrsAMryOgAWnAo0u5Xt9RtRHqh3LFqafB9KzPB1Fk%2Fn4Pil6TpDOYtMp94GyGW4h92%2BqQoZai9PyQOakqVml5w6zOLhwhEfkI6xbYf3S0o24nrkfhSh&X-Amz-Signature=586860eed351039fc0d65b100ccd8f5460a7677c6c6e359b7d5e106f7aae131e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEJXPHR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2edpo628Mty1eaS4%2FSpJN1p5QV6CyWHnWt91%2BdLyHWAIgb%2B3OeAns6CHqtsVapmJaxUSM%2BvPVNsXOHd%2BCbWWJuUMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBIrBrC1B05rXMssQircA%2FrC7DnkJHA7jMpMuE7uFGkwvlsL3XsEebXQjNP%2BedoU8UDsKrhf18qKVOe6plcxGQs05p%2BUAVfOr%2FV87GS5lF1T2CxJMZWvtxYz1M2KQTqH7VeyIPYWXT00J20Xs3B2Mdaxoy7uQ0NqW5gp6ydjW6q4BusVHWCBteJp%2Bu8rq7RERVCjffwy66fR717lyzMwYdDxpOriPI9JrJp2hiw6RkCVG3JqKxAD7hq3vhzWXHrYAWdQ8cSWKfn7nJq9tAKRq7E8yMNIKLDXNMSK3elAPM5pVU4vgG8aCJAUADV8GYKfd61RsxeN6Z9IIJj5sJXsX86UD%2FHIhyU2LS4kE06aOBGsmv7qshru6%2FsGtsN6mWEheXwAmaiJvxHphkl9Aw%2Bv2jVgqEAbcroo335uunGVf5pWHVmwEv5qsWLSxnSwlCQPHGhIO5AkRCJ9HJZWOO7nZiicPPSbttQcxZ2cyQRIEKGytw6mE6tFepzjm0ouLU3C%2Bq%2F%2FpQkKo5GDf1LJJ%2BKvagRxY933fa5TaizwFMChCSZF21IWmh1PBMuT5vdmbVjgvGpZFi4exYyfvtdFYtYFeNU3SUVeuRD1lOh8DvPFaMZG32p%2FHjZahrHkQul2H2vFmCJ51dxNkvM0D5ijMPWUmr8GOqUBPYUTDF8RoJsukYeEpsgPldXkeRVC0syW6wyXuzNWSw71FbdO3CO802TE4nVqXfzZ4FZ0sc%2FdQqkwVC2qD%2B4FUmtOgRPSIBE4y7gHxG8okzrsAMryOgAWnAo0u5Xt9RtRHqh3LFqafB9KzPB1Fk%2Fn4Pil6TpDOYtMp94GyGW4h92%2BqQoZai9PyQOakqVml5w6zOLhwhEfkI6xbYf3S0o24nrkfhSh&X-Amz-Signature=f1891d54ce451917cb70dd86e99ff12b2f66fa793f158c1919c10244fe15b8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
