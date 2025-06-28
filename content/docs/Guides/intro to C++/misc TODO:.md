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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4443X7M%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3EzHIopjAU09TqKDj9CsIf2HVTbuHo%2BBpLLwdPk2KgAiA6fyFLSZkR2YCjqanLgICrRrug2eTLFOmdc%2B1R8HTdISqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk9IW%2B40cEN%2B3rAcKtwDMDR8T8D1LCB%2BfD38umZStk3th3rFi3nen45p6kL2kxHek%2F2kU5o%2BsObGI7tUkXw0547L4ltKkXEEu7XcqbGjcOxJw%2BEjYob2ftPhJqd9DIeTlzEyfgXPDrPtE%2FKmEL6cHbsZA0snvxaXhpg58piuft9cNEmaPVA7b6E5Lege%2FwT4XprHLuiSkGltDLWlNx1PYfYaBkYHdR10asyWgjCoE1YIC5c9F%2F61CjVWbnkezxKaxCI9V3573P5N0pryGeVhHLs4WDwhSdCwaaRNPnKwkkAGdM12%2Bk6h%2Bp4cAH9FZ1Nbc0oKrFkTvRmolA9YwJmZ8kGW6lXDXCQ1EQrzMhgjzSlDZNsk15K5MJ4hlnlHTQex9lJALxQBE6jnpZiKfjgqIdlrctQ2dQkB%2F3uzDt6JSWK7DGURUpzGIf0Tnae1ogrgenZ5EbsXVKVXZPrPWLJgPOK7iqjB6O%2FzfeVx%2Fzilnvx%2BdKaWbfcvS3pfvLsuZ985tEEmc%2FflMS0QFJxlIEHfs67cwcoWBREmqeyqYI3N99Ye7N1oOwvULWrJFQniG0jxyk%2BrNf4QeS5jhQCi1xoD1%2BdpEFmo252X9smiOyMWBlPBr3ktJfn2EY%2FP9WtFB9HULpRQgeGsekexlMAwmJD%2FwgY6pgFChksrUM%2BAbeKNuZWpoxaHVqiK18T9G%2FsT2WeBRD0flNDaB28THQz8VGWWd%2F2R%2FwjElBGdWDCRZr3J4zXOUnzRgiuUEnDhx8M63Y%2FVeMh%2BZphzEURkyRqN12galGtq%2F8dcfImGl9vKZkeMUUbOYvvIXDdJ97Tm0DiwjLwIl5hT%2FvAXmi6Hq%2BllyqXqvdybF0Lkd0cioyQBDqs8%2FMRwUiGQJDS7lJxo&X-Amz-Signature=9d0ce053b3a22ffb808b565fd6abe1f474821a7d1802ec0bf59e84652360373b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4443X7M%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3EzHIopjAU09TqKDj9CsIf2HVTbuHo%2BBpLLwdPk2KgAiA6fyFLSZkR2YCjqanLgICrRrug2eTLFOmdc%2B1R8HTdISqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk9IW%2B40cEN%2B3rAcKtwDMDR8T8D1LCB%2BfD38umZStk3th3rFi3nen45p6kL2kxHek%2F2kU5o%2BsObGI7tUkXw0547L4ltKkXEEu7XcqbGjcOxJw%2BEjYob2ftPhJqd9DIeTlzEyfgXPDrPtE%2FKmEL6cHbsZA0snvxaXhpg58piuft9cNEmaPVA7b6E5Lege%2FwT4XprHLuiSkGltDLWlNx1PYfYaBkYHdR10asyWgjCoE1YIC5c9F%2F61CjVWbnkezxKaxCI9V3573P5N0pryGeVhHLs4WDwhSdCwaaRNPnKwkkAGdM12%2Bk6h%2Bp4cAH9FZ1Nbc0oKrFkTvRmolA9YwJmZ8kGW6lXDXCQ1EQrzMhgjzSlDZNsk15K5MJ4hlnlHTQex9lJALxQBE6jnpZiKfjgqIdlrctQ2dQkB%2F3uzDt6JSWK7DGURUpzGIf0Tnae1ogrgenZ5EbsXVKVXZPrPWLJgPOK7iqjB6O%2FzfeVx%2Fzilnvx%2BdKaWbfcvS3pfvLsuZ985tEEmc%2FflMS0QFJxlIEHfs67cwcoWBREmqeyqYI3N99Ye7N1oOwvULWrJFQniG0jxyk%2BrNf4QeS5jhQCi1xoD1%2BdpEFmo252X9smiOyMWBlPBr3ktJfn2EY%2FP9WtFB9HULpRQgeGsekexlMAwmJD%2FwgY6pgFChksrUM%2BAbeKNuZWpoxaHVqiK18T9G%2FsT2WeBRD0flNDaB28THQz8VGWWd%2F2R%2FwjElBGdWDCRZr3J4zXOUnzRgiuUEnDhx8M63Y%2FVeMh%2BZphzEURkyRqN12galGtq%2F8dcfImGl9vKZkeMUUbOYvvIXDdJ97Tm0DiwjLwIl5hT%2FvAXmi6Hq%2BllyqXqvdybF0Lkd0cioyQBDqs8%2FMRwUiGQJDS7lJxo&X-Amz-Signature=2b18ed8738ffe935e94dbb9994ad5af02718c83feefc7eb66d5672787f39e98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
