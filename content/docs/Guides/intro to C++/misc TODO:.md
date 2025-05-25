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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAHRYC3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC%2FRqlk6JsZJiD4LzcYuKkAQzDTk%2F3bpdS1r5NiFVyMsAiBmGhg%2B7YYHFFeiIUM3evrQMCiN9tG0gm0ZImLlP67j2Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFxeiN6QuYfTbZposKtwDVeCkVTH8%2BNdhhM3rO5GivlcJTphCAGPkgka40JjC32zkzZjJEgMEj2Tr2vSITP7l9UFFYoRpfzjeH%2B9URIgmUsqR5dUnRIThNNq6iRTy0RuEuXFO0ZJlQoF4Xm2A1CuXduKTKnGUEqEIPKIS70iQJQz7w1LRPGd8X8i58owZzDJnw0%2FMri%2Bjo%2BmvpE%2FqQI0Pthl0Z0YeoxRGDv1IPMA6q9s1%2BZ3C7CWHM8Qg14irkcrRIp1zp%2BI1YcjHhxdUc1CJN7MVGS3mt71uxjnp8i9MVnZcWgKAxuQHF8ykPNQPDu00B3Rw94olo8wDqxZUFbCWPLt0tgqUTOJifUZDyih6mR8in1AIo5YAoYnblWFYObt1dzYI67PeSRKAYVdKTcTxBWus4%2BrxTwxB%2BgxRsrU%2B9rGCxcW2mm5%2Bq1HoD7z8wbZqR%2BW1ddMsbta10BxHCoNBP38yCA9qr%2Fhh3xp%2FYU%2FAYDZ2tuK76WYHWKc1pQO5Hk4rN%2Fl%2FtDhqn%2Bi4Bro7x1gKcHliYzfrpsxrfu0PILyl2e3y491CBHSbaa6pqQG6uDRoVhgZajjOYTRKAOWyN6rhq1%2FNRHTAA9vgL7JIuZwfSBD5A8PJU9aFRWztA560KcgfZIo6XOqlAGcXMpgwhczJwQY6pgHKm8LW7XJ7eiRc82oXxVQSmPl%2BuskaMw8szHfX%2BXfoUreX0IjeGDZTnmBdJ6iAHvnr1cDftquBh1cnKNVVMgAna9q5y8bQHMNz46I1TOiukAYYGOYbm9brVqkO5y45m1uYdtDJG9LCscNTMG4JCNugFtCPXw2pOLQ2QY9gNu2vWzAGUMuqQUXg4LeUOhIdpAOH75Ucad9xTcXIAE5WSg5Z1oSRspLm&X-Amz-Signature=b05dd6410327470acd87f3de2adf837c6e07511d144ababaff7cb269ed8f9651&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAHRYC3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC%2FRqlk6JsZJiD4LzcYuKkAQzDTk%2F3bpdS1r5NiFVyMsAiBmGhg%2B7YYHFFeiIUM3evrQMCiN9tG0gm0ZImLlP67j2Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFxeiN6QuYfTbZposKtwDVeCkVTH8%2BNdhhM3rO5GivlcJTphCAGPkgka40JjC32zkzZjJEgMEj2Tr2vSITP7l9UFFYoRpfzjeH%2B9URIgmUsqR5dUnRIThNNq6iRTy0RuEuXFO0ZJlQoF4Xm2A1CuXduKTKnGUEqEIPKIS70iQJQz7w1LRPGd8X8i58owZzDJnw0%2FMri%2Bjo%2BmvpE%2FqQI0Pthl0Z0YeoxRGDv1IPMA6q9s1%2BZ3C7CWHM8Qg14irkcrRIp1zp%2BI1YcjHhxdUc1CJN7MVGS3mt71uxjnp8i9MVnZcWgKAxuQHF8ykPNQPDu00B3Rw94olo8wDqxZUFbCWPLt0tgqUTOJifUZDyih6mR8in1AIo5YAoYnblWFYObt1dzYI67PeSRKAYVdKTcTxBWus4%2BrxTwxB%2BgxRsrU%2B9rGCxcW2mm5%2Bq1HoD7z8wbZqR%2BW1ddMsbta10BxHCoNBP38yCA9qr%2Fhh3xp%2FYU%2FAYDZ2tuK76WYHWKc1pQO5Hk4rN%2Fl%2FtDhqn%2Bi4Bro7x1gKcHliYzfrpsxrfu0PILyl2e3y491CBHSbaa6pqQG6uDRoVhgZajjOYTRKAOWyN6rhq1%2FNRHTAA9vgL7JIuZwfSBD5A8PJU9aFRWztA560KcgfZIo6XOqlAGcXMpgwhczJwQY6pgHKm8LW7XJ7eiRc82oXxVQSmPl%2BuskaMw8szHfX%2BXfoUreX0IjeGDZTnmBdJ6iAHvnr1cDftquBh1cnKNVVMgAna9q5y8bQHMNz46I1TOiukAYYGOYbm9brVqkO5y45m1uYdtDJG9LCscNTMG4JCNugFtCPXw2pOLQ2QY9gNu2vWzAGUMuqQUXg4LeUOhIdpAOH75Ucad9xTcXIAE5WSg5Z1oSRspLm&X-Amz-Signature=31b0f39a8b1c4fb52e676d9a488c64753a063d0016f0d46e24d3c5fa15865f73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
