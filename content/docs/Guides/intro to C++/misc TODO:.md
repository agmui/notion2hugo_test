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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EXTSW34%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CwBC1rfSLwcVSlKbZwx6YVAUklVk9QVSpcByS9hiBAIhANf2GN2E4gQ%2BuBpHsh54zOZPLKWpNeB1scUw%2FoYj%2F0KZKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykmnhBjlqeRgT5XcIq3APNiu25je8y5HwntS00GE1PVByL2WdhvbVW%2B9soVBL4b5vR9pH3cagzDahO7ngtjNHmRiP9Qkx84ukwJwuW7U6X8AGbmYmDlS46FuSP2Oc4mnSrJLfuq0mKOpZhzk%2FCoKwGKv91YVvbh%2Br0s1zGt1xx%2F47fZ6fwHKXt%2FKO%2FZnFDEA9o0UojxUcyCThMEOPgoqFf7hGu4iNQDyRDRzNYdF7i7bmOIr34dT1wF4TStlkefqVaMW0hB6Fw2XPignJ4ZIMgV68Uft5Cixnp24KDZsWU5BxRU40OzfvxzM8jmg4MFI8h9BTzZ4Chi59r5TIlU9PSIf5WcHUZUhmtThni7WTA6zO7l%2BvKrq45mrZTALjKJzRGzhSS%2FkMT%2Fu%2B98ctEWY0w6mhGwYaysXJeTuKIgj%2BBFOprDNKu7XihRtXfracPx8YXxeuYSsCv1BADxjm9vMIeWYfgdwSWKcyMd0criQ9lCBnSMOTeMd50qnErJW8Tgv2ExLa2sgdDXqLdaFrKs%2BoLpbxUzvfbeYZ0l43E7DKMaCTJNwxVRVyX7Kqm9dHuZApO4ZI8SLeA1Noyq3XH2KVo4eVruSTIAfck0jEBH%2FhsyQMfSfFdJ%2F6SHxBHpPbmcqAPeAnIFl7CrmbibjCs5%2B3DBjqkAZyecyzJ%2BKDisxm1dFPBuC1STu59Sxw8AXCSLJWi8orR1tGEU5u8i83%2FPcrfbW%2FDlqus377syhm09UYD6yx7LlgOd4h%2BjRQr7UwIZQ9r5Tup4sREXi9oBmG1Y812l45uyxN3Nag7UMGw%2Fy2CXng5Y1bVP2vftFSw4JTH5BbN2WmjNMlM%2BptJIoHXs%2F2pgc%2Bcpl14%2F8EI03Kikq6%2F1bghM%2BmoQFNH&X-Amz-Signature=46ff5eba152f23c679d85a4630430812575fef8901af8afdc91f989e8d1f9b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EXTSW34%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CwBC1rfSLwcVSlKbZwx6YVAUklVk9QVSpcByS9hiBAIhANf2GN2E4gQ%2BuBpHsh54zOZPLKWpNeB1scUw%2FoYj%2F0KZKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykmnhBjlqeRgT5XcIq3APNiu25je8y5HwntS00GE1PVByL2WdhvbVW%2B9soVBL4b5vR9pH3cagzDahO7ngtjNHmRiP9Qkx84ukwJwuW7U6X8AGbmYmDlS46FuSP2Oc4mnSrJLfuq0mKOpZhzk%2FCoKwGKv91YVvbh%2Br0s1zGt1xx%2F47fZ6fwHKXt%2FKO%2FZnFDEA9o0UojxUcyCThMEOPgoqFf7hGu4iNQDyRDRzNYdF7i7bmOIr34dT1wF4TStlkefqVaMW0hB6Fw2XPignJ4ZIMgV68Uft5Cixnp24KDZsWU5BxRU40OzfvxzM8jmg4MFI8h9BTzZ4Chi59r5TIlU9PSIf5WcHUZUhmtThni7WTA6zO7l%2BvKrq45mrZTALjKJzRGzhSS%2FkMT%2Fu%2B98ctEWY0w6mhGwYaysXJeTuKIgj%2BBFOprDNKu7XihRtXfracPx8YXxeuYSsCv1BADxjm9vMIeWYfgdwSWKcyMd0criQ9lCBnSMOTeMd50qnErJW8Tgv2ExLa2sgdDXqLdaFrKs%2BoLpbxUzvfbeYZ0l43E7DKMaCTJNwxVRVyX7Kqm9dHuZApO4ZI8SLeA1Noyq3XH2KVo4eVruSTIAfck0jEBH%2FhsyQMfSfFdJ%2F6SHxBHpPbmcqAPeAnIFl7CrmbibjCs5%2B3DBjqkAZyecyzJ%2BKDisxm1dFPBuC1STu59Sxw8AXCSLJWi8orR1tGEU5u8i83%2FPcrfbW%2FDlqus377syhm09UYD6yx7LlgOd4h%2BjRQr7UwIZQ9r5Tup4sREXi9oBmG1Y812l45uyxN3Nag7UMGw%2Fy2CXng5Y1bVP2vftFSw4JTH5BbN2WmjNMlM%2BptJIoHXs%2F2pgc%2Bcpl14%2F8EI03Kikq6%2F1bghM%2BmoQFNH&X-Amz-Signature=25c4a3840a19c5273f4ec2a0da4b1f362c1531fc442947a787a3dadc2fcb0f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
