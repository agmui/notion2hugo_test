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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A5BN4A4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCLPdW0%2B3sX%2FuPZW6lPMC4G%2BuyeS3dJSJmpkiCXnwFpJQIgHTdDAtWrmuA64R96vEqglmFVrYaf%2BZGTIz8WdrXQuN0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCPfCzVavSMNkbwDNCrcA4wP7nvVcmJafr5Ud2YE5du8kFtZDbqJaxVg7n8%2BhTRzmKa61jLzJHnTcyFxs7SgTgfWKmO9UtyFdzLl1Dbo711aIV%2BJaUXxbwCX5lD50Qp1CAdhUE9zFe0VJQS2FL3ftC6iwVqfipI9J%2BdCP2ImA1tO%2BtLO7nX08cYywwtJheV8Rykc%2BpkQFHzYK5J%2BHfkUV2cuoV2Dk3i%2BNJ57zsD2TIvqewaRgkxQYDX%2BUR%2FUy2ANAe7Uwnw5WmnA6vLaK1wmWEObH4XO0uGcDNq1gCkCMzbq%2Beaa39vfn0CjdT2oJl7Xp81%2BE0ZL7yw%2B4iKfct4wl176vwiDkf1UN9V3GFI9BifLapiVADlrEIA4bVi9pK4jD7NmkAtXWiOe2vLJZdq2UwCrHz7yQrixRjdbRpas%2FZDtvbQrUb8mbEw0vEGMMl6Ew0TswzzsNdBZ14wC7Bw7eMWNruRKhNIIFLpZZGX748llbk9Eun3A9fUqlHJgXcE69XbnZIQivFk7SgGAaUBjB66x1X0q%2BPb9C%2FVxYn89v%2B%2BZ7hLoxdncbdpGCIMfHSNF15A9OXgmIbnHC6RpHXci%2FLcL13yczT9deQubGDJxJfhwd7oOE7jN9bYAn72eU5t5tXRc1oDxYCgN8brHMK7FucIGOqUBf9qUF6CKG1oC17WU2krYDKn%2FzzxAXHsplDbC8UClCYcah6%2Fc%2FuM1FOvUOtc5roK10D5wFlHKOCILfGpgtuMYBUtnQvVija9HsrwR7mw7%2BzPA36YXWiZ1crdCTVTCuJKk5JXRWJ5l222Jc1QUdisFTWXk60mR722xpxkiVV1GitkHCtCQ84t%2Bxth6tHR63cXLg0rG81Q3v9WRbTCDcmlGF0nX2sxr&X-Amz-Signature=051a23766a28b02c83399af2bb7fc092bda1d25608d81e3783b54caac35b9c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A5BN4A4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCLPdW0%2B3sX%2FuPZW6lPMC4G%2BuyeS3dJSJmpkiCXnwFpJQIgHTdDAtWrmuA64R96vEqglmFVrYaf%2BZGTIz8WdrXQuN0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCPfCzVavSMNkbwDNCrcA4wP7nvVcmJafr5Ud2YE5du8kFtZDbqJaxVg7n8%2BhTRzmKa61jLzJHnTcyFxs7SgTgfWKmO9UtyFdzLl1Dbo711aIV%2BJaUXxbwCX5lD50Qp1CAdhUE9zFe0VJQS2FL3ftC6iwVqfipI9J%2BdCP2ImA1tO%2BtLO7nX08cYywwtJheV8Rykc%2BpkQFHzYK5J%2BHfkUV2cuoV2Dk3i%2BNJ57zsD2TIvqewaRgkxQYDX%2BUR%2FUy2ANAe7Uwnw5WmnA6vLaK1wmWEObH4XO0uGcDNq1gCkCMzbq%2Beaa39vfn0CjdT2oJl7Xp81%2BE0ZL7yw%2B4iKfct4wl176vwiDkf1UN9V3GFI9BifLapiVADlrEIA4bVi9pK4jD7NmkAtXWiOe2vLJZdq2UwCrHz7yQrixRjdbRpas%2FZDtvbQrUb8mbEw0vEGMMl6Ew0TswzzsNdBZ14wC7Bw7eMWNruRKhNIIFLpZZGX748llbk9Eun3A9fUqlHJgXcE69XbnZIQivFk7SgGAaUBjB66x1X0q%2BPb9C%2FVxYn89v%2B%2BZ7hLoxdncbdpGCIMfHSNF15A9OXgmIbnHC6RpHXci%2FLcL13yczT9deQubGDJxJfhwd7oOE7jN9bYAn72eU5t5tXRc1oDxYCgN8brHMK7FucIGOqUBf9qUF6CKG1oC17WU2krYDKn%2FzzxAXHsplDbC8UClCYcah6%2Fc%2FuM1FOvUOtc5roK10D5wFlHKOCILfGpgtuMYBUtnQvVija9HsrwR7mw7%2BzPA36YXWiZ1crdCTVTCuJKk5JXRWJ5l222Jc1QUdisFTWXk60mR722xpxkiVV1GitkHCtCQ84t%2Bxth6tHR63cXLg0rG81Q3v9WRbTCDcmlGF0nX2sxr&X-Amz-Signature=93f86e1d418d7cac42a9b17865223a1a2a6d82216ed7152174d73493a771a598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
