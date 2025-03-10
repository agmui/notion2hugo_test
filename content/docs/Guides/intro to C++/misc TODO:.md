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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDI6SOR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDMs8Yam%2B7mwZ8iI2k1mY1KB%2BioFr%2FpN8rocGltcrONngIgEKLTkdaFxBwEkY%2FEZ%2F1UXG1xS8InahwPUQGUj4kU9hUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYXAdVWMBBWyuioWSrcA0f4HtkCXLv9J%2BkG8hnml%2Fcv9vVFzxmetomSwhs1HNeJXAhj51GHoYrUjyh3pkv1pHKoVWWTvLUY0VDBlEgRoYdDSebFSoECeDMuzhwv0lz7VeyqLwhhZ0BiDG9zL5aLhyMHb2njZc4klqV%2F%2Bu8lNtoR3QG%2FD%2FfaeMjT9Ct%2BHAcyc8Drwh1%2FQoA3by0uEaXjY5qE4f1DKen%2BndooMiRciXX%2FXT5PbDDhAsgb80dSUaDIfnwkIUMGnIMND%2BS8ZnPOYGSaoccppOFJL%2BexINbwI72kTlNHKbnLySbDmpfb3OR9WwgKyFFhDGnNKH8mNqGU5yKYjMS4CqK80bE4m9thzB39TmJrfaCC4uEMAGB9uV1YwDl%2FLsR2Jdrt5hBUdifCSFBBbRvtedB4N6fxPhlGMTNiG88JyNW0u3m6i4bBiIChEhZc22aJ07XNmJtva8Z%2BTAd9xJ76dUgir875fjWjqhm1YvwTv%2Fb6p9xNsMgaa%2BvOaFJh8UuTRfC4Gg4PpT32s7tOzfsoKtI0Ub9IfQGz1QKRMN4ebjdi4DU%2Bo95fPaPhBYGiBXPDwQbHIbqFm4mN8dlrqJfIPxEM8pCkyR%2BPOS5CCR4L0tp0zQTyUuuHUbxv%2FCVUJT%2Bh%2F%2FOqCopjMO7Mub4GOqUBQ2AklJwUv557VEaD5ho7KN45myViv%2FYxgJ0xUlFcGLn%2F%2Bt76qFLP2AeEc%2FacbZZjwBH20JyZpXF11Nys5GKQe1d8UyTySxAoxjvFh%2FUR0PogxAATyVFwOTVuMwUo3gf5ofykYiWYH9cxxc%2FpB%2BvzyZ145SE4GJHA6rLs3xH0Dt%2FK%2FXChkFa%2Bg3ZTlB3PiXz3k69lfcBZgWw2Ray%2BDWzoN0MyQmkU&X-Amz-Signature=f2f6f78de05f15238b18fbc91b30b00d3e598304f1670494366862647a090c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDI6SOR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDMs8Yam%2B7mwZ8iI2k1mY1KB%2BioFr%2FpN8rocGltcrONngIgEKLTkdaFxBwEkY%2FEZ%2F1UXG1xS8InahwPUQGUj4kU9hUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYXAdVWMBBWyuioWSrcA0f4HtkCXLv9J%2BkG8hnml%2Fcv9vVFzxmetomSwhs1HNeJXAhj51GHoYrUjyh3pkv1pHKoVWWTvLUY0VDBlEgRoYdDSebFSoECeDMuzhwv0lz7VeyqLwhhZ0BiDG9zL5aLhyMHb2njZc4klqV%2F%2Bu8lNtoR3QG%2FD%2FfaeMjT9Ct%2BHAcyc8Drwh1%2FQoA3by0uEaXjY5qE4f1DKen%2BndooMiRciXX%2FXT5PbDDhAsgb80dSUaDIfnwkIUMGnIMND%2BS8ZnPOYGSaoccppOFJL%2BexINbwI72kTlNHKbnLySbDmpfb3OR9WwgKyFFhDGnNKH8mNqGU5yKYjMS4CqK80bE4m9thzB39TmJrfaCC4uEMAGB9uV1YwDl%2FLsR2Jdrt5hBUdifCSFBBbRvtedB4N6fxPhlGMTNiG88JyNW0u3m6i4bBiIChEhZc22aJ07XNmJtva8Z%2BTAd9xJ76dUgir875fjWjqhm1YvwTv%2Fb6p9xNsMgaa%2BvOaFJh8UuTRfC4Gg4PpT32s7tOzfsoKtI0Ub9IfQGz1QKRMN4ebjdi4DU%2Bo95fPaPhBYGiBXPDwQbHIbqFm4mN8dlrqJfIPxEM8pCkyR%2BPOS5CCR4L0tp0zQTyUuuHUbxv%2FCVUJT%2Bh%2F%2FOqCopjMO7Mub4GOqUBQ2AklJwUv557VEaD5ho7KN45myViv%2FYxgJ0xUlFcGLn%2F%2Bt76qFLP2AeEc%2FacbZZjwBH20JyZpXF11Nys5GKQe1d8UyTySxAoxjvFh%2FUR0PogxAATyVFwOTVuMwUo3gf5ofykYiWYH9cxxc%2FpB%2BvzyZ145SE4GJHA6rLs3xH0Dt%2FK%2FXChkFa%2Bg3ZTlB3PiXz3k69lfcBZgWw2Ray%2BDWzoN0MyQmkU&X-Amz-Signature=534003db45d8938ec9d7720922b706a74c52c07f0bacde16abb2f58ae69fcb50&X-Amz-SignedHeaders=host&x-id=GetObject)

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
