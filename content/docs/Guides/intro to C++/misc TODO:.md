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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAWFQR3V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYw9E5VlZe%2Bp1habViknqC2lPCF4MbnJEDrr6x9IjL1AIgPwAI9O3MfOBhIvS0NFqsxbiEoNnsrgqKO09zeAE%2FoLwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDA4QJ3tvdEAhAQHDMCrcA7yUevMWXOyYu7ceo%2FfIufQldke5szxZP5KZtqIGNbXtuzlKAaWYR%2BvXLr7kzQiLyromXT55hhTQk5704Knr5U1Jx1skYYrhhbQBmCEu02PkLSYTiWRpFSk9gHscQngayNLwtHno7Krv1LZVvdxPW5EMTZsBF7NTI%2BtxmMcQUSro%2BtM%2BgKBjwqnaEEE9qFgie57JsYHxjfGJiD1SKBizqDN%2FZMTZ20IFECVRwvswWul18VQQwfOVZ1brKKhK%2BweoZl13fWLnZ1fGwKcUosS6QDiVo%2BHLWpxWUATgQLF5FwIZ6%2BQ%2FnEehnDMILzs6kueNY5%2FtV%2F2s9ljVuqg%2BNCe%2FM2LYXYb5SeNePCWN0AO%2F90ZuxPJr7FZXRBPNu8Y4ifAO7EPeEYa0AEK0SNzSkEmi0YjJFK19MnPTJ3bs7Bc%2FHsIJsz%2BL6%2B%2FFALcbCzsH81IiyYEiw73Kw%2F9Lh8ykcKOSfx97X2kvFMArn53YtfpVAk80KrSNJhCzZIXzgCB%2Fns9xzp36CjaBqltYAfqK%2BD%2BM7Y1cZ9lh0iAmMvrOIw%2FidNsUq1nPtVRONNXVJpshz4PTdOL%2BoiInsnm%2BtEBhICv%2Fhb5palSiljbPSRG4%2BJp7xOtngoPuBCmKitVtX6OMMMvTm8EGOqUBe%2Br90Z6487oudVToGCz0s7fZsNFM7YsBBDCKwKtpY3INNwj65yQpxgzCUk8csgyNL6%2FgyIxyLxREM44hrWLS9gAnyKH6OaWbvUarZgF4490fBAfsyOzDR6pds2lufbOnbO7Zm4jwAarIZw8%2F3zRCQHSu2ZmBoA67i5GJ02au6GKt2SN2KvjXPS06z%2BBYO4bNbQX8fTQRHjbTT6%2BuXZX%2B66yH5Ygq&X-Amz-Signature=35c40e6227b0b55f7b724f8511ee36c8bfff3320cba11cad1d7c379be51969a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAWFQR3V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYw9E5VlZe%2Bp1habViknqC2lPCF4MbnJEDrr6x9IjL1AIgPwAI9O3MfOBhIvS0NFqsxbiEoNnsrgqKO09zeAE%2FoLwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDA4QJ3tvdEAhAQHDMCrcA7yUevMWXOyYu7ceo%2FfIufQldke5szxZP5KZtqIGNbXtuzlKAaWYR%2BvXLr7kzQiLyromXT55hhTQk5704Knr5U1Jx1skYYrhhbQBmCEu02PkLSYTiWRpFSk9gHscQngayNLwtHno7Krv1LZVvdxPW5EMTZsBF7NTI%2BtxmMcQUSro%2BtM%2BgKBjwqnaEEE9qFgie57JsYHxjfGJiD1SKBizqDN%2FZMTZ20IFECVRwvswWul18VQQwfOVZ1brKKhK%2BweoZl13fWLnZ1fGwKcUosS6QDiVo%2BHLWpxWUATgQLF5FwIZ6%2BQ%2FnEehnDMILzs6kueNY5%2FtV%2F2s9ljVuqg%2BNCe%2FM2LYXYb5SeNePCWN0AO%2F90ZuxPJr7FZXRBPNu8Y4ifAO7EPeEYa0AEK0SNzSkEmi0YjJFK19MnPTJ3bs7Bc%2FHsIJsz%2BL6%2B%2FFALcbCzsH81IiyYEiw73Kw%2F9Lh8ykcKOSfx97X2kvFMArn53YtfpVAk80KrSNJhCzZIXzgCB%2Fns9xzp36CjaBqltYAfqK%2BD%2BM7Y1cZ9lh0iAmMvrOIw%2FidNsUq1nPtVRONNXVJpshz4PTdOL%2BoiInsnm%2BtEBhICv%2Fhb5palSiljbPSRG4%2BJp7xOtngoPuBCmKitVtX6OMMMvTm8EGOqUBe%2Br90Z6487oudVToGCz0s7fZsNFM7YsBBDCKwKtpY3INNwj65yQpxgzCUk8csgyNL6%2FgyIxyLxREM44hrWLS9gAnyKH6OaWbvUarZgF4490fBAfsyOzDR6pds2lufbOnbO7Zm4jwAarIZw8%2F3zRCQHSu2ZmBoA67i5GJ02au6GKt2SN2KvjXPS06z%2BBYO4bNbQX8fTQRHjbTT6%2BuXZX%2B66yH5Ygq&X-Amz-Signature=5b6809aa361b779a4c074eb1d12caeadb09f4628c26e633c61bda6962b5bd45c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
