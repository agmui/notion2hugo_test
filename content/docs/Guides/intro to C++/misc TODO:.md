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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPWNE3T%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJSAnXM6Q5NZvtk03mqiNc6QCbBZYTlqxERTdwhkxd0AiBQvfSOr65ucwEwhkS0O2JvgeFPdcRub8giZiD7dElYoir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM45GMxs9wiKO3Dx5tKtwDy%2F2FsfNMRGG6nRol7LLDtwyZ0c9lEZ9k9ZdJq9Zvqo9W1EFSvHZHxJK2xSatBg4bXrEboWP0CW7sxbL0i7mSfgmLZPKhqdSiLVPwEO5ZsIzpy1HxpbWJn2%2FuArAoVCjhcDbtZekPlvoIrWEE5jN6I%2BMlaL%2FVIofJqR32RuM8aqIWO4iiadefCwvFolulEjZ%2Fvqrt1dJwd5nA1ssfePlWX2bfUe9OJaSULuAdXbQbhZT9JSaKGSuqpVfCVzVDtklOmWGiSgBjpz7K5r8XN2nuE3yyMSYYN0wCJu%2FT7%2Bp7drUpS9iJKqtpez2Tf3tb2rTyhyld%2FMUAt7lVpQs9ZngnzX85Gt7F0N63Y534b5n6TMZwPJXsKtYL%2FNrycw8EMiUqvHkD2VnPrB%2Fi12Ab99rfbPjBHaPTEta0C5yrKdvSE9rKMaftc0swKC%2Fv1xT3%2BpQ22Ut3XnbVPDGtro0eG3%2FUWj%2BySysGn%2FxNeXvdGZXYtMu8UMnPUhPRVslKnUSg4CuGgY%2BJ01oT3qq%2BZPFwmK5LOclrzcqTmZmgmDiA9pwr5YsyINx20DPaNxv1RjXNC8a0f0lCBGjWwgdAlXiNJNWxB9r91nTARlcBCr%2BTGK4RXS3aIeR3qLpw4esVzVUw7L%2B1wAY6pgHiaxdlPvNjP3Ex1x86citmgziWZMQ%2BvQlteUzINQJGQr%2BHZdy5brRDt9PS6rMLC5XtaiPJmWQwu3eSuXdcE4bD45t%2BbBGD%2F1ANXZRCFIVRnGgWu3cdDgRvCjIiWVASRK5zd0fbWN9rNMEg1S4wniLapH9iuQbuqXKgIn2MB9Gt8L7jY0Z0Ukcoy6bE89MDYWZIjGj5KQQ6ENHzRjqF62kG0NRAWle%2F&X-Amz-Signature=ace82d6b52fcfc1408ddc21932889a831843cf95e57463079bc8ebcf6a60498a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPWNE3T%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJSAnXM6Q5NZvtk03mqiNc6QCbBZYTlqxERTdwhkxd0AiBQvfSOr65ucwEwhkS0O2JvgeFPdcRub8giZiD7dElYoir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM45GMxs9wiKO3Dx5tKtwDy%2F2FsfNMRGG6nRol7LLDtwyZ0c9lEZ9k9ZdJq9Zvqo9W1EFSvHZHxJK2xSatBg4bXrEboWP0CW7sxbL0i7mSfgmLZPKhqdSiLVPwEO5ZsIzpy1HxpbWJn2%2FuArAoVCjhcDbtZekPlvoIrWEE5jN6I%2BMlaL%2FVIofJqR32RuM8aqIWO4iiadefCwvFolulEjZ%2Fvqrt1dJwd5nA1ssfePlWX2bfUe9OJaSULuAdXbQbhZT9JSaKGSuqpVfCVzVDtklOmWGiSgBjpz7K5r8XN2nuE3yyMSYYN0wCJu%2FT7%2Bp7drUpS9iJKqtpez2Tf3tb2rTyhyld%2FMUAt7lVpQs9ZngnzX85Gt7F0N63Y534b5n6TMZwPJXsKtYL%2FNrycw8EMiUqvHkD2VnPrB%2Fi12Ab99rfbPjBHaPTEta0C5yrKdvSE9rKMaftc0swKC%2Fv1xT3%2BpQ22Ut3XnbVPDGtro0eG3%2FUWj%2BySysGn%2FxNeXvdGZXYtMu8UMnPUhPRVslKnUSg4CuGgY%2BJ01oT3qq%2BZPFwmK5LOclrzcqTmZmgmDiA9pwr5YsyINx20DPaNxv1RjXNC8a0f0lCBGjWwgdAlXiNJNWxB9r91nTARlcBCr%2BTGK4RXS3aIeR3qLpw4esVzVUw7L%2B1wAY6pgHiaxdlPvNjP3Ex1x86citmgziWZMQ%2BvQlteUzINQJGQr%2BHZdy5brRDt9PS6rMLC5XtaiPJmWQwu3eSuXdcE4bD45t%2BbBGD%2F1ANXZRCFIVRnGgWu3cdDgRvCjIiWVASRK5zd0fbWN9rNMEg1S4wniLapH9iuQbuqXKgIn2MB9Gt8L7jY0Z0Ukcoy6bE89MDYWZIjGj5KQQ6ENHzRjqF62kG0NRAWle%2F&X-Amz-Signature=079e926dfdb9f6eae5be7cf0df654a80b4bb4f214abfce12c99f464e31ef6f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
