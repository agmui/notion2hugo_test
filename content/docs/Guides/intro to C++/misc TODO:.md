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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676CBTDCQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbk2lKiiX0qTrs%2BkOecixrlG8eTG1wI1iht66YMFrNWwIgMjyhWZeUXEAndFCh1KDEFsJLsOVOj8sV5wd4lAtSsNMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEErsdFtyxp1UrnGSrcAwBC2x3Q9kIDQoX2KyoLgG4bZqZKGbGBI%2FCf11%2FPRIlnnLtpITMmUkoFBFu6FdTJVnHA%2BxGUr0uH0gcXZlxxRVbVaeqscKyWk48pvL0XqPOJEZMygCz2xnkGRtNxtKqvBfLjFT4LxlYoaAhVyWIxGAw0YK%2F7qLBD0zuNw%2FFuVN6NtWoO6GFTCuMuFBtd9KNVQrGtEyL0aV15Id%2F9PR5OfaCfQscBu3jH4PX1rgrcc9s%2FQCyuI6%2Bh0iyovn1fATSW3Zihjt5Oii81CduX5AkDdIiuH%2BSSpNoFYkkxchNUm%2BzM%2FbyrPCLStrzqFg022KlO705SFKExG%2B9Gx4FA9wqXH%2F2lAo5tRkA4u8Ou7dL5k7%2FsKpGkw9%2BDUVyiYToVvCV%2FuYLn3n4CNJQs8TW%2FKNHt%2F89KEp4%2Bf91O8yV3wgdDId%2B4R%2BqGl62nhc4vAYoFyESkcvWtkSTTqqZHMaUJS6BAmb8SKPbNrBTvVoEgJPYQP8eUHGNVphuz3Z3MWqvkTIfnX9U%2FGdYGXIuS06Bex3LKI9YlukrAbEqEgCVEIFm2%2Bo%2F83%2F0uQwj7Jj08aSk%2BB7CiC1NVyzKyxaH%2FqeQ5C93v0xE6t5OoqmNifsZoSgMo5t3Hr%2FBY3ZQRGDYOilXTMMvsqcEGOqUBXq5WppzAthEr7Aito9mNfu0jID8pzLmpF0IRq7xxNUqxHrFOAW5%2BcKuT6z5MYWfefhojZtc1k8pIJ%2FFVVRcghNgrer%2B7YIDRKBrn4k0oqafZ3qy%2F1BcWUKb4pusZ22W4a2ipeb%2B6kCdYRPZbzgUAMnaFzD7isYjXEnfr3vw%2FQKzgOCslQtpKHvIZv5eebkyFYSVgQdrikVM5Graz9nJ7%2Fq6uwG9D&X-Amz-Signature=bbaecf64df4251b14a7a448645fc92f5e11d8366c85f392250314efb5ab861ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676CBTDCQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbk2lKiiX0qTrs%2BkOecixrlG8eTG1wI1iht66YMFrNWwIgMjyhWZeUXEAndFCh1KDEFsJLsOVOj8sV5wd4lAtSsNMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEErsdFtyxp1UrnGSrcAwBC2x3Q9kIDQoX2KyoLgG4bZqZKGbGBI%2FCf11%2FPRIlnnLtpITMmUkoFBFu6FdTJVnHA%2BxGUr0uH0gcXZlxxRVbVaeqscKyWk48pvL0XqPOJEZMygCz2xnkGRtNxtKqvBfLjFT4LxlYoaAhVyWIxGAw0YK%2F7qLBD0zuNw%2FFuVN6NtWoO6GFTCuMuFBtd9KNVQrGtEyL0aV15Id%2F9PR5OfaCfQscBu3jH4PX1rgrcc9s%2FQCyuI6%2Bh0iyovn1fATSW3Zihjt5Oii81CduX5AkDdIiuH%2BSSpNoFYkkxchNUm%2BzM%2FbyrPCLStrzqFg022KlO705SFKExG%2B9Gx4FA9wqXH%2F2lAo5tRkA4u8Ou7dL5k7%2FsKpGkw9%2BDUVyiYToVvCV%2FuYLn3n4CNJQs8TW%2FKNHt%2F89KEp4%2Bf91O8yV3wgdDId%2B4R%2BqGl62nhc4vAYoFyESkcvWtkSTTqqZHMaUJS6BAmb8SKPbNrBTvVoEgJPYQP8eUHGNVphuz3Z3MWqvkTIfnX9U%2FGdYGXIuS06Bex3LKI9YlukrAbEqEgCVEIFm2%2Bo%2F83%2F0uQwj7Jj08aSk%2BB7CiC1NVyzKyxaH%2FqeQ5C93v0xE6t5OoqmNifsZoSgMo5t3Hr%2FBY3ZQRGDYOilXTMMvsqcEGOqUBXq5WppzAthEr7Aito9mNfu0jID8pzLmpF0IRq7xxNUqxHrFOAW5%2BcKuT6z5MYWfefhojZtc1k8pIJ%2FFVVRcghNgrer%2B7YIDRKBrn4k0oqafZ3qy%2F1BcWUKb4pusZ22W4a2ipeb%2B6kCdYRPZbzgUAMnaFzD7isYjXEnfr3vw%2FQKzgOCslQtpKHvIZv5eebkyFYSVgQdrikVM5Graz9nJ7%2Fq6uwG9D&X-Amz-Signature=858772e88b06314f9493dae6e1b17c53cefa4e38d0d39c8fcbb7d6fafef984e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
