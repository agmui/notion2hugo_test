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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXIBAMU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEhZfhAEPCds9yd08c43A3UMSCyVhj53g5i0TskCyLkGAiBqb0woHK6160fqfSPwEdwWLjsk%2FxL4B2vHTsxxa0bITCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo63SULSW6Yso7Ii8KtwDdmp9rp%2FNkddwoPM4XI%2FUupH3B015pixSku9Jck6SB%2B%2BuIDnPHpQUIHyMngHsg7WAGbRP3ySTl9WbM5pdVk5x285XmsY2yyX%2BryOj9O7e6QhI0lPCAYAnGvmutEUHSRhgi4RU6%2FRyBOUqxYlP8F88JBX0TeA0hII%2Ftc5TEwQzFIa0E1A9F7cho%2BmLcSEoThWf1qffMYwyAf%2FoC31FPN5USNUr97pm0nIQWjJpOiHur8aP%2FMKxqJqqj1p8DjZn3c%2FHVP7qcgVC4sEpS0UA1tWn1iby6sHtvpeq8nbKs%2BpYLuKMful4KOZrFDGWW0ioZb7AC3eL2WU0lbk3%2BQEHkJQExrswLGFTKWE81zCyN6y%2B5RLhEMd7Gc6TVZ2lICZYqDtixion%2BrHmLum8fpoP%2Bb6XpGGt%2FLniXOmcGRG1yQMel%2BWc151vkzad2yERBeT8MkEWU1wvgNDqJdwERmtbcGsY4AphOpiXLuzXAHkSOUwlA1nqOGbmxZ3OLNTwn%2BDf4V%2FcLrlaXgXlJngaWXkPEr9snqE7q7DOaNhBxTYE8jVLo050ipBD0jO4j2CxaMtg40tkUv6FtHXzINXb20i7h1beV75bTH80YE6GyV5etMBV2syixhRzjSy0CCH%2FvggwkfHawAY6pgE%2FlPeRusb%2FUD5xAkn5UOFUUg%2FNyFZzPZPOQ7A%2FZn0yK4TLPzz2B7bSKw0hyEjDpfjmUDubtBqTdPCXicMc1tzKgHHdfkEj2mC6rQotUYNYD0KFFXQTQ9Xyn00BQ01uVZPBHuRb0faMCFL8zSA5XLZkc00MzFONtYup0TCWvx7CzbZ7iggrWmWxF2Krz8%2FN7n2pfS8C%2Fxs9ToJGmW6CBo0InAG3zpsm&X-Amz-Signature=cea3af9ae46fcb6e10af855c72abe7797890421224a37726d0fa70d5949af559&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXIBAMU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEhZfhAEPCds9yd08c43A3UMSCyVhj53g5i0TskCyLkGAiBqb0woHK6160fqfSPwEdwWLjsk%2FxL4B2vHTsxxa0bITCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo63SULSW6Yso7Ii8KtwDdmp9rp%2FNkddwoPM4XI%2FUupH3B015pixSku9Jck6SB%2B%2BuIDnPHpQUIHyMngHsg7WAGbRP3ySTl9WbM5pdVk5x285XmsY2yyX%2BryOj9O7e6QhI0lPCAYAnGvmutEUHSRhgi4RU6%2FRyBOUqxYlP8F88JBX0TeA0hII%2Ftc5TEwQzFIa0E1A9F7cho%2BmLcSEoThWf1qffMYwyAf%2FoC31FPN5USNUr97pm0nIQWjJpOiHur8aP%2FMKxqJqqj1p8DjZn3c%2FHVP7qcgVC4sEpS0UA1tWn1iby6sHtvpeq8nbKs%2BpYLuKMful4KOZrFDGWW0ioZb7AC3eL2WU0lbk3%2BQEHkJQExrswLGFTKWE81zCyN6y%2B5RLhEMd7Gc6TVZ2lICZYqDtixion%2BrHmLum8fpoP%2Bb6XpGGt%2FLniXOmcGRG1yQMel%2BWc151vkzad2yERBeT8MkEWU1wvgNDqJdwERmtbcGsY4AphOpiXLuzXAHkSOUwlA1nqOGbmxZ3OLNTwn%2BDf4V%2FcLrlaXgXlJngaWXkPEr9snqE7q7DOaNhBxTYE8jVLo050ipBD0jO4j2CxaMtg40tkUv6FtHXzINXb20i7h1beV75bTH80YE6GyV5etMBV2syixhRzjSy0CCH%2FvggwkfHawAY6pgE%2FlPeRusb%2FUD5xAkn5UOFUUg%2FNyFZzPZPOQ7A%2FZn0yK4TLPzz2B7bSKw0hyEjDpfjmUDubtBqTdPCXicMc1tzKgHHdfkEj2mC6rQotUYNYD0KFFXQTQ9Xyn00BQ01uVZPBHuRb0faMCFL8zSA5XLZkc00MzFONtYup0TCWvx7CzbZ7iggrWmWxF2Krz8%2FN7n2pfS8C%2Fxs9ToJGmW6CBo0InAG3zpsm&X-Amz-Signature=c3be8bf5e50cc273107ff8ac995db57c574d0d42335bc2e4a459e593b55f2fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
