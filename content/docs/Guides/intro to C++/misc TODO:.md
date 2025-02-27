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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52KBNZA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE%2F%2BLJR8pzzsqULw8vBVee9wlswL8%2F6q5YaFGJoZkNFPAiA8SAFi9bbnlrEYzShJeLaTCL3HCfr8COkEUQvEmpjAqCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMBdHfBNl97mB3ozLeKtwDW7PyI8ELBGWac1qQVvAQeeszl3%2FRzaH22z%2BEaGpoWF86qLjon%2B9Vd3Iym2lTe8E9iTmaRUP1iDA7Y2rpMCKNZJPeZJMZkRkkcrdTyeCp4l4EsdbtwssXFUGSq0wvG2xh4iahM9CI492tn%2BDp5b3xnXMczAZL3wTQG7JNyNAABFVkA%2FyGpqMGxv0AS9bnbWekA1IThGLvUYOCsggSSJfK64Zc2FZxWYrlW0x%2BUE0ANHc6FmAJktP1sdm84wmKCZaB0tTCGp5T0ngP9wP1dIp2MN4xTCv63kbGEWMJujZ%2BoI7pazk5SBTDR2SksjzwFLkZY4eZBShi07%2BbqkMAQ7yuVz0UP1aBhdCS86yf%2FEfDOKU3OH%2Fb619G95LbOhaPXoXgvqih8YvQe9IMH5AhTYs62Z22JVv2OsCPMO%2F%2Bvc%2B5f%2B1ZrYd%2BIA2lzbThWcARE4gPpE%2FA3Dnaigh8d6sKBS6G%2FiBSLIFABO9VFbPo%2BYPOdll11ltCTYTeTDhF6tl2D9%2BQ69M35S1hAepxSKZSA%2FqnuTUs2H5o53SjM6J1u8qCn1UdlErwKhaD7Ru622f2uyuFfru0RWcpyu3w7lN0lfdtM%2FSecMyJaIkqXlYokTbFMH5BKxEYwHIXJ8PqBGEw0IuAvgY6pgH6h2Zl16wKTXkUa2NY12el4PydpLmnqauLgxfEGjUM48FIfPBlykgQXSetVQzDwjhaxYWCrhiTOCm3OfLZGz5BlXePj4PinW%2FHFOnaXgS9QTfboEW8i6m6Gbvnl%2FkVICaFpWsfYaam9%2FYYYwWk%2BaWTgY6RXfAcuCpu01%2Fzb%2BJehCf3abdgU58j4vU2EQAzTZpFeXlsThMPSOFT9h%2BwA%2FpzNZrKloMx&X-Amz-Signature=dc0bb578bd3ae7ace672c9645a57a73596a37856f6ff688bca6cb4d023da9407&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52KBNZA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE%2F%2BLJR8pzzsqULw8vBVee9wlswL8%2F6q5YaFGJoZkNFPAiA8SAFi9bbnlrEYzShJeLaTCL3HCfr8COkEUQvEmpjAqCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMBdHfBNl97mB3ozLeKtwDW7PyI8ELBGWac1qQVvAQeeszl3%2FRzaH22z%2BEaGpoWF86qLjon%2B9Vd3Iym2lTe8E9iTmaRUP1iDA7Y2rpMCKNZJPeZJMZkRkkcrdTyeCp4l4EsdbtwssXFUGSq0wvG2xh4iahM9CI492tn%2BDp5b3xnXMczAZL3wTQG7JNyNAABFVkA%2FyGpqMGxv0AS9bnbWekA1IThGLvUYOCsggSSJfK64Zc2FZxWYrlW0x%2BUE0ANHc6FmAJktP1sdm84wmKCZaB0tTCGp5T0ngP9wP1dIp2MN4xTCv63kbGEWMJujZ%2BoI7pazk5SBTDR2SksjzwFLkZY4eZBShi07%2BbqkMAQ7yuVz0UP1aBhdCS86yf%2FEfDOKU3OH%2Fb619G95LbOhaPXoXgvqih8YvQe9IMH5AhTYs62Z22JVv2OsCPMO%2F%2Bvc%2B5f%2B1ZrYd%2BIA2lzbThWcARE4gPpE%2FA3Dnaigh8d6sKBS6G%2FiBSLIFABO9VFbPo%2BYPOdll11ltCTYTeTDhF6tl2D9%2BQ69M35S1hAepxSKZSA%2FqnuTUs2H5o53SjM6J1u8qCn1UdlErwKhaD7Ru622f2uyuFfru0RWcpyu3w7lN0lfdtM%2FSecMyJaIkqXlYokTbFMH5BKxEYwHIXJ8PqBGEw0IuAvgY6pgH6h2Zl16wKTXkUa2NY12el4PydpLmnqauLgxfEGjUM48FIfPBlykgQXSetVQzDwjhaxYWCrhiTOCm3OfLZGz5BlXePj4PinW%2FHFOnaXgS9QTfboEW8i6m6Gbvnl%2FkVICaFpWsfYaam9%2FYYYwWk%2BaWTgY6RXfAcuCpu01%2Fzb%2BJehCf3abdgU58j4vU2EQAzTZpFeXlsThMPSOFT9h%2BwA%2FpzNZrKloMx&X-Amz-Signature=e7b30730b94d2c220e29b993f56ab65aa95f681f19004f6248bad3c4f88ee12f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
