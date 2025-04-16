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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFH2MWX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9AndD759t6FAdpsvdOayTtjlDaF71Zb64l5oAxQLFMAiApyv8GhUF8JChYbvSVmDDaGelDyHP0Jf8ON8g07ffGMCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWnRqOB%2FSdddFrOVfKtwD8j48RIBc1YGIlty%2FNiRuy5DinjT%2Bcxl6Pbt9%2B%2B8NwvsfUS9qyCkrfFBhO4pTrEPs%2FhiZIQgSxUKBCuNzN9t245odZCiPp0H7lUAjS5eWVd7N9joeKTYdr%2FTK0H1xAi3%2BTiVyg%2BTlQvMjsu%2BhQrEQOIKztIQ7%2Fzj%2B5T1uxvNwyLI%2FcUpsMBj5%2Bp6er3%2BQ77vYSXLVR2vacZLTi2Czz8OzVPJpzm41OG9DuZLpWL0jSOf9mb6jXc4rE9J7Qvofp6xSXHsH%2FdtQ27GvWksDMrTY%2FTLhbWzI6kz%2BH3wpU4%2FWjXl1M4TpLSBdFo%2BCq0ZkYX5y8Io7WKB20GD%2BT0UTkg%2FtE1QgWW3jSPHuNrUUhetWYNVYGrcY%2Byg1%2BGA0F5wK95IYmDOWGBx3WAT3n%2Bqiz1DlpCMOSiw%2Bd%2BdesecewqCBBYsAkc3W9Vt3h6oRFz1y9n7N6%2BnxWGF%2BB98DKmOHia1Y0BntBvBqsffwxx%2BjAinjYOL0gcsdrHuhaG%2FpvxDGNZgUk0OQWe%2BFWZSJub5htpx1cyLhvI0NKDrmmSW%2B4%2FRT7HN4VopfEDUVl9fd1c%2BdWV%2BiVomH62ALhe96tQn8YNf%2FA%2BBAXCohqzZk%2F0UpjrElOPz9F%2FAY3%2Bu9PHo%2BQ3sw%2FPT9vwY6pgHdjnfmz4dN2%2FkE0WuBqsP52PTWKP4j%2BcvpWyqCjlJsHbXP8GLq%2Bg1mQrtPAVTGJzuvN%2F7us7h%2Fb7MqQ%2FRcVg8PBE4TyLGaadVSie99YyL%2BR1D%2BF4jCjZYHWwUmfG9iVatw0ddffVPQETBrwSU5mT43BEmJSelgT2PDZdVCG71FYep5CNLjJjJSnYIWH9HnlJlARRBZ77SIJKqVZd500TNVPy74A8Am&X-Amz-Signature=3302160aaf974c305939f765466e8dacbd28f3c0c0d768b63613c2ce701d7ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFH2MWX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9AndD759t6FAdpsvdOayTtjlDaF71Zb64l5oAxQLFMAiApyv8GhUF8JChYbvSVmDDaGelDyHP0Jf8ON8g07ffGMCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMWnRqOB%2FSdddFrOVfKtwD8j48RIBc1YGIlty%2FNiRuy5DinjT%2Bcxl6Pbt9%2B%2B8NwvsfUS9qyCkrfFBhO4pTrEPs%2FhiZIQgSxUKBCuNzN9t245odZCiPp0H7lUAjS5eWVd7N9joeKTYdr%2FTK0H1xAi3%2BTiVyg%2BTlQvMjsu%2BhQrEQOIKztIQ7%2Fzj%2B5T1uxvNwyLI%2FcUpsMBj5%2Bp6er3%2BQ77vYSXLVR2vacZLTi2Czz8OzVPJpzm41OG9DuZLpWL0jSOf9mb6jXc4rE9J7Qvofp6xSXHsH%2FdtQ27GvWksDMrTY%2FTLhbWzI6kz%2BH3wpU4%2FWjXl1M4TpLSBdFo%2BCq0ZkYX5y8Io7WKB20GD%2BT0UTkg%2FtE1QgWW3jSPHuNrUUhetWYNVYGrcY%2Byg1%2BGA0F5wK95IYmDOWGBx3WAT3n%2Bqiz1DlpCMOSiw%2Bd%2BdesecewqCBBYsAkc3W9Vt3h6oRFz1y9n7N6%2BnxWGF%2BB98DKmOHia1Y0BntBvBqsffwxx%2BjAinjYOL0gcsdrHuhaG%2FpvxDGNZgUk0OQWe%2BFWZSJub5htpx1cyLhvI0NKDrmmSW%2B4%2FRT7HN4VopfEDUVl9fd1c%2BdWV%2BiVomH62ALhe96tQn8YNf%2FA%2BBAXCohqzZk%2F0UpjrElOPz9F%2FAY3%2Bu9PHo%2BQ3sw%2FPT9vwY6pgHdjnfmz4dN2%2FkE0WuBqsP52PTWKP4j%2BcvpWyqCjlJsHbXP8GLq%2Bg1mQrtPAVTGJzuvN%2F7us7h%2Fb7MqQ%2FRcVg8PBE4TyLGaadVSie99YyL%2BR1D%2BF4jCjZYHWwUmfG9iVatw0ddffVPQETBrwSU5mT43BEmJSelgT2PDZdVCG71FYep5CNLjJjJSnYIWH9HnlJlARRBZ77SIJKqVZd500TNVPy74A8Am&X-Amz-Signature=1a91d911cc5867db672b86bb0c7b2778078952c75bb3c35a3cc2aadf05d8b24e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
