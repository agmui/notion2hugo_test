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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XOVIJW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIC4%2FzLRj3SrUmemMLx9J85I%2BE%2BT4KkioNog%2Fq2jukJsjAiBHQKcP9RDEahmB4fVngZCQonknBSjIOwirF7f%2FNBackiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUddXPm0qpwMEshyRKtwDT%2B494R4U7ZtvXEC9x1iceY%2B2LE%2BGYAk3G9uKfH1lSxdmwr%2BDHtaaFNotsyROgKEgYC6kH44E6nLWLSAHEyeZn4AjTs9NyxgnnSsnM2ZFHKM3d5%2BTJy5aH2Ve947pzOStouNhFXx0%2Fs0qCxV2U%2FQzYVsk9USE%2BU4nP0cnSgfUSLF90j5biSjrEods5x90n16jgEAmUSJgjyFUFCWgSWInHiW3yKmgXrWl7Y0WBsl4q91K38hjn7KhWr86kIWBVyXXzpeix5fDOs%2BOEk53Xd%2BLFuubR%2BDi62R6O6zFXZwUT6aRvJT%2FeghWv9qWEyVr%2B%2B6ZLLcO9QqKZnra4HSpe7LMvmTF8XaGr%2FnFYQiJ9Qpgmd9DjcgtQcduPhWYHUh%2FDy3oQW54zGV9N5UGUbVBG2Y5fjbqsBf6BZx7HCwWvhK0fPaKGaKmmmbSCLxWyiiGDftTWg%2FmSfKCZptKP6Mzd9qNVAxxU0xw25djtpl9QSkhkYbIhEZ8nhsKtmu8zryhchceo6jESoB4OxTajm9JI%2B4DE3um%2FqOLxX3MfU%2BbaLJFj%2Fi%2BN3PnuPaAPHjp4eZfkjpahBh46jwoFKGas6Ttitpd7Vr9vpgsSAyEbQ%2F%2BAFX3UHiMN%2Fp%2FQR%2FLAd%2BsuQ8wg%2F7SvQY6pgE9%2FdgpKUiEhgIQVRWm9p4uS8tB7M5a3VPi2YcCqdzhQqBcicvzpSe4Qu5svqpzFyg68wOZ1LqWo4oBrKFpdTXCeRvUYF1DNAydephx3r3lGx1wEGpsqw5Gm2ZhBImG1TDloaXuNpq%2F6Z62H%2BmkdZf%2BCukVkm%2B2A3cR488UBhFowM2YPy0WK0YptRpDe%2BlZqLWUd3PlasUDWMfKABS1R2EADorgrL9b&X-Amz-Signature=600f489e71e38fc2eaf623dc04f859e6ab773c0bacc049d65ff5513d447a054c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XOVIJW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIC4%2FzLRj3SrUmemMLx9J85I%2BE%2BT4KkioNog%2Fq2jukJsjAiBHQKcP9RDEahmB4fVngZCQonknBSjIOwirF7f%2FNBackiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUddXPm0qpwMEshyRKtwDT%2B494R4U7ZtvXEC9x1iceY%2B2LE%2BGYAk3G9uKfH1lSxdmwr%2BDHtaaFNotsyROgKEgYC6kH44E6nLWLSAHEyeZn4AjTs9NyxgnnSsnM2ZFHKM3d5%2BTJy5aH2Ve947pzOStouNhFXx0%2Fs0qCxV2U%2FQzYVsk9USE%2BU4nP0cnSgfUSLF90j5biSjrEods5x90n16jgEAmUSJgjyFUFCWgSWInHiW3yKmgXrWl7Y0WBsl4q91K38hjn7KhWr86kIWBVyXXzpeix5fDOs%2BOEk53Xd%2BLFuubR%2BDi62R6O6zFXZwUT6aRvJT%2FeghWv9qWEyVr%2B%2B6ZLLcO9QqKZnra4HSpe7LMvmTF8XaGr%2FnFYQiJ9Qpgmd9DjcgtQcduPhWYHUh%2FDy3oQW54zGV9N5UGUbVBG2Y5fjbqsBf6BZx7HCwWvhK0fPaKGaKmmmbSCLxWyiiGDftTWg%2FmSfKCZptKP6Mzd9qNVAxxU0xw25djtpl9QSkhkYbIhEZ8nhsKtmu8zryhchceo6jESoB4OxTajm9JI%2B4DE3um%2FqOLxX3MfU%2BbaLJFj%2Fi%2BN3PnuPaAPHjp4eZfkjpahBh46jwoFKGas6Ttitpd7Vr9vpgsSAyEbQ%2F%2BAFX3UHiMN%2Fp%2FQR%2FLAd%2BsuQ8wg%2F7SvQY6pgE9%2FdgpKUiEhgIQVRWm9p4uS8tB7M5a3VPi2YcCqdzhQqBcicvzpSe4Qu5svqpzFyg68wOZ1LqWo4oBrKFpdTXCeRvUYF1DNAydephx3r3lGx1wEGpsqw5Gm2ZhBImG1TDloaXuNpq%2F6Z62H%2BmkdZf%2BCukVkm%2B2A3cR488UBhFowM2YPy0WK0YptRpDe%2BlZqLWUd3PlasUDWMfKABS1R2EADorgrL9b&X-Amz-Signature=613270b9e075d0ec7de4ba9a0bd5070d1f28324a6a557d4a60f12a9ed17e0e39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
