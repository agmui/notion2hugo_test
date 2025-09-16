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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WM2EUNZ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICHVRRR42HMiGDJlaM6xxZB%2FAjClGKUu08p1fSKQzITyAiBodiw08oJLiGkaqHpGOZV6BN9SxwsNyI63H9%2FBugVyeyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZvfRcBzQ2Ifs77yqKtwD1MMOmCTcJO9KOQkwpltnx%2FvVKEYbJ6owdNoo%2FTAAsIgUyebEbdawgk%2FkcMjz0ax8GD11UbpxXvMMGJ6RuItUdVNpecJ0MDMRzsnJC4yir7pcle57WSAd48yw%2FrEPK00vaA8O5kloJGKJVFHYQpbCkoj3ut89weEFrqydi%2FMrqH5ScDCWtuy%2FYPBh11YT5Wjd%2FGd3WQO%2BxLUBcaplxVj393L2kJB8u%2F3UODSexTEtGLgK9iEUZkotb%2FxcLNGa6PFIywAWLA0o6A9hV8OtuyLuH9mYCJKXwqdWUhotCagKAIruSxf6sK75E5Ph%2FVRrQtQOp81c2s532mgpRUlL29DtzN7LoWO5SwUFryVnswDnxT1lAOy9tXvE1VFuiVrA0jgv%2FJQ3n6WEiFXDVgHD0R2xLVbUDvHQn4TOUVGPPWaWeQuJWWRcMmjClM3C9FXxSnJkPACVvKjxavaNrcpgcbTrSnDr%2BK8XapjOTpBn81yjBtB3M3%2FR%2FpuPPqrjPdNU8K60RUzaHf0MhPYris%2BOmrzgKjnIm6ne5Cc7YMuhpnT4yonvq%2FOKD74uIz6oCOaWuiF5qnzls5WjxTsQ4CyN0CYnJ9XI9YICMBJFFltwDeO8TOzeePCdZtxiI3lA1qgwnvCixgY6pgHPSXRoYgBvahyiiduoJ4pMx4yVq2o9aufxY38JkbWWw3j8hvlFU8YK8QUpgxFr84hM5zFsKH1soXdhZ816Gw1%2FBgQxJUJTV3MouLwCed8lk97m8bH%2B94DMdcKDjEmKN9dMUiLLKCkR%2BnFmKCbkOoOR5JaamzvFzfcNekUV9MqEGp5r6XVOPPpvnnEpkb%2F010WdwMPG0osKuHr8owGEI33wVyk2hMhD&X-Amz-Signature=81dae354d1e6dd675420365708ae486fc9e58e4472cf7c5713e72e405b4bb23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WM2EUNZ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICHVRRR42HMiGDJlaM6xxZB%2FAjClGKUu08p1fSKQzITyAiBodiw08oJLiGkaqHpGOZV6BN9SxwsNyI63H9%2FBugVyeyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZvfRcBzQ2Ifs77yqKtwD1MMOmCTcJO9KOQkwpltnx%2FvVKEYbJ6owdNoo%2FTAAsIgUyebEbdawgk%2FkcMjz0ax8GD11UbpxXvMMGJ6RuItUdVNpecJ0MDMRzsnJC4yir7pcle57WSAd48yw%2FrEPK00vaA8O5kloJGKJVFHYQpbCkoj3ut89weEFrqydi%2FMrqH5ScDCWtuy%2FYPBh11YT5Wjd%2FGd3WQO%2BxLUBcaplxVj393L2kJB8u%2F3UODSexTEtGLgK9iEUZkotb%2FxcLNGa6PFIywAWLA0o6A9hV8OtuyLuH9mYCJKXwqdWUhotCagKAIruSxf6sK75E5Ph%2FVRrQtQOp81c2s532mgpRUlL29DtzN7LoWO5SwUFryVnswDnxT1lAOy9tXvE1VFuiVrA0jgv%2FJQ3n6WEiFXDVgHD0R2xLVbUDvHQn4TOUVGPPWaWeQuJWWRcMmjClM3C9FXxSnJkPACVvKjxavaNrcpgcbTrSnDr%2BK8XapjOTpBn81yjBtB3M3%2FR%2FpuPPqrjPdNU8K60RUzaHf0MhPYris%2BOmrzgKjnIm6ne5Cc7YMuhpnT4yonvq%2FOKD74uIz6oCOaWuiF5qnzls5WjxTsQ4CyN0CYnJ9XI9YICMBJFFltwDeO8TOzeePCdZtxiI3lA1qgwnvCixgY6pgHPSXRoYgBvahyiiduoJ4pMx4yVq2o9aufxY38JkbWWw3j8hvlFU8YK8QUpgxFr84hM5zFsKH1soXdhZ816Gw1%2FBgQxJUJTV3MouLwCed8lk97m8bH%2B94DMdcKDjEmKN9dMUiLLKCkR%2BnFmKCbkOoOR5JaamzvFzfcNekUV9MqEGp5r6XVOPPpvnnEpkb%2F010WdwMPG0osKuHr8owGEI33wVyk2hMhD&X-Amz-Signature=2557cdca0b7e11bc3516b519c3015c48b8b777a396b42701527c0aceb2253dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
