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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSZJXCE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDRjIbqGluepeyYHt%2B3Pz2LR%2FLFlPZu0EHSr8znp2DIHQIhAJ0gs%2FCmCSTDo6BUGJKXs2S%2F7dbF2OvPLxfN2JnSWU%2BlKv8DCFMQABoMNjM3NDIzMTgzODA1Igww0BWLaV7Dzta5vZoq3APR1ucaXXDxb1g6zakig%2BpPsnGgUb%2BHlyPYCouurYG6FG1tnNeh6gopQEl5GEomWYy0v1d3UaM87CiBhvHgRmUJFDj9eBMU6gvu%2FTywh15MpEDDjZbMfbUL1fODb%2BXOZxBD%2Frc7Mm34TMXPA4Hh3dwXscgkHGncZqY3DkJ3SHNG6gL5KfEs1AFUoKMGnimOm5itDovvj5RPfJnB56XFCrgzhVUi3B%2FxSvBodPs1j7w5cIVQVHgtZNIIHwpkihQezszzPY1VuHmEaB%2Fiqm4%2BP2Q2SSueoXsFVS7%2FjZRoQBo%2FelEtaKt1use%2FqBWtW9UMizKEgZjXBzmGvY%2FuRRApDg5d7bwb47wyJd0lVqAvBXFFqHnlIBLVbO6%2BdlMp7JqMIbnMwQdwHdZJnf5GXRlEOosE5uPUc5T7%2FC%2BERsAipOMEWyGtMGqeblgTYLsMvUYdQYKu2RVRHNOjr7N0IiSECUVeZkYWXGOWOriE4iZ9bxKj%2Fr7PN6%2FYVrw5tlAQcd0VKRq%2FIuOQ8kq1%2FKEEd33mRfKRwonnC4nyU7UlqAiR12grRa6XY6ygmbDzQvhwt%2BXSmkm2emE8IYqqtvApr77Nt4IIIW3JnxgfMsOEiiMFTRVRjGgoAZzjdi6NfnWFmTDe%2Fr3CBjqkARe6EqM8d8BL6%2FMH1%2FKLrdKYcY90q8yzMbQi3J6YAPxCsDJR%2BOMnxzrTZaw5%2Bvtzo2aneJGzEYBZ8Tejxzid1GwWf19CsGPaffHCEB6pNH5Voe7I2bPVmfn7UIGkrxUe7fNyZTLh1R3xDLreBKPgDHqIuOAn7W78gXk2%2FoD7auvAXODBJnFnB1V%2Ft5IGxEj5pNxn2CpIagKN27wsaoK72gcl1fw%2F&X-Amz-Signature=b1d399421ca2177f4b2a571b314b47b9895a8ba12c368b58f1dce9cd6c89c9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSZJXCE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDRjIbqGluepeyYHt%2B3Pz2LR%2FLFlPZu0EHSr8znp2DIHQIhAJ0gs%2FCmCSTDo6BUGJKXs2S%2F7dbF2OvPLxfN2JnSWU%2BlKv8DCFMQABoMNjM3NDIzMTgzODA1Igww0BWLaV7Dzta5vZoq3APR1ucaXXDxb1g6zakig%2BpPsnGgUb%2BHlyPYCouurYG6FG1tnNeh6gopQEl5GEomWYy0v1d3UaM87CiBhvHgRmUJFDj9eBMU6gvu%2FTywh15MpEDDjZbMfbUL1fODb%2BXOZxBD%2Frc7Mm34TMXPA4Hh3dwXscgkHGncZqY3DkJ3SHNG6gL5KfEs1AFUoKMGnimOm5itDovvj5RPfJnB56XFCrgzhVUi3B%2FxSvBodPs1j7w5cIVQVHgtZNIIHwpkihQezszzPY1VuHmEaB%2Fiqm4%2BP2Q2SSueoXsFVS7%2FjZRoQBo%2FelEtaKt1use%2FqBWtW9UMizKEgZjXBzmGvY%2FuRRApDg5d7bwb47wyJd0lVqAvBXFFqHnlIBLVbO6%2BdlMp7JqMIbnMwQdwHdZJnf5GXRlEOosE5uPUc5T7%2FC%2BERsAipOMEWyGtMGqeblgTYLsMvUYdQYKu2RVRHNOjr7N0IiSECUVeZkYWXGOWOriE4iZ9bxKj%2Fr7PN6%2FYVrw5tlAQcd0VKRq%2FIuOQ8kq1%2FKEEd33mRfKRwonnC4nyU7UlqAiR12grRa6XY6ygmbDzQvhwt%2BXSmkm2emE8IYqqtvApr77Nt4IIIW3JnxgfMsOEiiMFTRVRjGgoAZzjdi6NfnWFmTDe%2Fr3CBjqkARe6EqM8d8BL6%2FMH1%2FKLrdKYcY90q8yzMbQi3J6YAPxCsDJR%2BOMnxzrTZaw5%2Bvtzo2aneJGzEYBZ8Tejxzid1GwWf19CsGPaffHCEB6pNH5Voe7I2bPVmfn7UIGkrxUe7fNyZTLh1R3xDLreBKPgDHqIuOAn7W78gXk2%2FoD7auvAXODBJnFnB1V%2Ft5IGxEj5pNxn2CpIagKN27wsaoK72gcl1fw%2F&X-Amz-Signature=be1bc5dbdc7ddba97f860a135ccec0dd115f200c25f78eca22fe11ad34ff977f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
