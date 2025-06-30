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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWPVDC7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1Cv3VnAhTqk%2Bdr5yZKllehTBc07QLu0c5pT1cjeHoLAiBZn5MMmDFTTJOlpgFBtEvS5flvNvQUXbxJumUHg71NISqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmEKF57dNROgdtK4KtwDwdH5uqgjDMntoA7Dcy2fIY6nXPuLbZRFl9dPyRmJwF10pWjRuTd4UgNW0A%2B8P41emkqGL2UCfGoCt1Ich3DpLdDaEb5csdWs4mbhzOyt8O1YR893U8VL39%2FDuHR1g64ZXKjtosbcuXsfolYM0Bsvp38W1TYJWjiSV732QKIIHft4dNpS7fuF%2F54esb%2Fqo%2B149GOkQBviurTUyMAszClFXgl0W%2BOXUA9h5nFL%2F9St3AQvbgGz9UM66oV5CZnae8760ji9N8xRSbbYuN89CoukPofXZeiIZXOGNEPH1TRmhNxfFjcEf0tBmEABxn11uyRstV7n7aaO1hNl%2B3G%2Buc2vVhjMK6MqYhB6Ls5lptPJ%2FFXK%2FxVW5hZWjowKYhWqa%2BdYves8jMtmnsD8Xz7PTjwkfxKdk29ox2mnxxIBAZNo7U2jFUjCdi5rnYf7KlbIa8a3laMGy4ghuQGcVRyz5xYio78Hpx1sSrxXME4aOi3fpFTenR0KgK1sFI33PlRxIV5U%2FEyopp1PYPwmwAbY9lWamVYnqTS4t9qgkcFbrt8SJAJPbRGpDRCo%2FubgIcSSktk0JottnbleBzCZuQI6%2F7XK24sG3OKzDk3Oh%2F8w5qxNb8ey%2FomlyMEFOLWS2K8wns6LwwY6pgHy3YRnPvOCrDAfvcw3uuEI732LGwmINxbe%2BtErEryDQcuclxVBsfjo0Aj3xpiyx3bcsfuI8upwpii7ySNmjLiFuHm0kPWhqCBaV%2FJqFAshQ8bnsQgAJ2PHp%2FXQYvUtguCcSZ4PzZiIjJdM7QyUlywCiB30C8hm6JDva4%2FZDe7CrTl6ryxAXHXvnv%2FrvNANZCt3SfwKhFW3uxexWCfBCouayRoMtaqq&X-Amz-Signature=fb346f212e1149cfdd6a2fc75f4292c35aebca6cd522b6a489c5e756158a7040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWPVDC7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1Cv3VnAhTqk%2Bdr5yZKllehTBc07QLu0c5pT1cjeHoLAiBZn5MMmDFTTJOlpgFBtEvS5flvNvQUXbxJumUHg71NISqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmEKF57dNROgdtK4KtwDwdH5uqgjDMntoA7Dcy2fIY6nXPuLbZRFl9dPyRmJwF10pWjRuTd4UgNW0A%2B8P41emkqGL2UCfGoCt1Ich3DpLdDaEb5csdWs4mbhzOyt8O1YR893U8VL39%2FDuHR1g64ZXKjtosbcuXsfolYM0Bsvp38W1TYJWjiSV732QKIIHft4dNpS7fuF%2F54esb%2Fqo%2B149GOkQBviurTUyMAszClFXgl0W%2BOXUA9h5nFL%2F9St3AQvbgGz9UM66oV5CZnae8760ji9N8xRSbbYuN89CoukPofXZeiIZXOGNEPH1TRmhNxfFjcEf0tBmEABxn11uyRstV7n7aaO1hNl%2B3G%2Buc2vVhjMK6MqYhB6Ls5lptPJ%2FFXK%2FxVW5hZWjowKYhWqa%2BdYves8jMtmnsD8Xz7PTjwkfxKdk29ox2mnxxIBAZNo7U2jFUjCdi5rnYf7KlbIa8a3laMGy4ghuQGcVRyz5xYio78Hpx1sSrxXME4aOi3fpFTenR0KgK1sFI33PlRxIV5U%2FEyopp1PYPwmwAbY9lWamVYnqTS4t9qgkcFbrt8SJAJPbRGpDRCo%2FubgIcSSktk0JottnbleBzCZuQI6%2F7XK24sG3OKzDk3Oh%2F8w5qxNb8ey%2FomlyMEFOLWS2K8wns6LwwY6pgHy3YRnPvOCrDAfvcw3uuEI732LGwmINxbe%2BtErEryDQcuclxVBsfjo0Aj3xpiyx3bcsfuI8upwpii7ySNmjLiFuHm0kPWhqCBaV%2FJqFAshQ8bnsQgAJ2PHp%2FXQYvUtguCcSZ4PzZiIjJdM7QyUlywCiB30C8hm6JDva4%2FZDe7CrTl6ryxAXHXvnv%2FrvNANZCt3SfwKhFW3uxexWCfBCouayRoMtaqq&X-Amz-Signature=3c96aea286078f2e4526ff3e2d72b3def91f0e091870f78849e02a2e0360f284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
