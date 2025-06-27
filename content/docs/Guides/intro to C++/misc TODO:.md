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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPRJ6ITI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdGrRQUjGXiDrVy2qFCghXVGJBgX1nIwptpv9SOpMzbgIhAIbhb0QwLP0BZ7D1C5LXaCC1Cm8JtPpBWd5d1qyMvgEqKv8DCHoQABoMNjM3NDIzMTgzODA1IgysqIpgRMrMy6sr9Pgq3APSmy7myDyPscfr2X3xyWRisA%2F8%2FkWAe1Mj9oq%2FoDxf44jQqH2c5OSY9JqquDGCsWsSG4shMTh3fTpXoCI9I6%2FnP1zQTKu48xjl4EX5GciLQIhtSXlGZX117YX88tHz7MVPLuCpwDszHBGudPNPGlCoKcV50chqplz8pSl%2BXP99YOTOW2l28webH%2BCwXlVcXYXsZUquY2whhcQEBQvTr%2BdMpCo3QrmSktZV%2Bh8s1hM%2FBEtQGDS5yTCrOgeEAFLjPD1QoKGSAcxnlpLw9VAKWWdPKq9OZfIlpb3ePQoH6vK4gY7TATJjO1ylPKutvyc8C1x0kV659qIPVNICjBjutSqHmOC3pB5M9hZqbsISOiWt%2BpdjWShT9c3V4Zy8o480b%2BRUX%2BSkcl2spO6raekEqa1xnjuTlmg1g0UBCUhCqzp1vTqrw0K0sUAwxqB7wO0c%2BjmdDYbZeGjENPhZ%2BoCTYjPVFf7Ubp%2Bf6%2ByAt537mE5IF7F%2BoCgIobZR0T5KCMf4jAuAFFbmG3guPvjQ%2BXad1XdTrESB9fOmpOV123dZEXl9vbSqMWuLHtr17BCQIzREx0brQcquYpG93XQpcJT14qPbJ16NzooVoHsFuK3qZ%2BwYY4vGCz1fMPOod%2BzfBDCIpPvCBjqkAUL8beGrn18pOSK4Z6SmB7zb0crAIbg6MpZBrAb3IuFD9MG7vI5m3saPSOgD5iia77tWqt%2BMQwnFa9CAEhCLuf2bO06g7IG6hWYOKl%2BmhBwIn53n2iBHR25vueuppY%2FlxjKqP1V%2BKkyCTcInTzzhKt36BIBJAU1WRr3U0iQoUcwlCJslqxbbIlDBCWgXYzSrqI1T52KuAhQPVCSE0CuP4U0aUKrZ&X-Amz-Signature=89c4ec0c240855656259e7dfd76a0943ef916777e1446706dcdde8c4465719f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPRJ6ITI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdGrRQUjGXiDrVy2qFCghXVGJBgX1nIwptpv9SOpMzbgIhAIbhb0QwLP0BZ7D1C5LXaCC1Cm8JtPpBWd5d1qyMvgEqKv8DCHoQABoMNjM3NDIzMTgzODA1IgysqIpgRMrMy6sr9Pgq3APSmy7myDyPscfr2X3xyWRisA%2F8%2FkWAe1Mj9oq%2FoDxf44jQqH2c5OSY9JqquDGCsWsSG4shMTh3fTpXoCI9I6%2FnP1zQTKu48xjl4EX5GciLQIhtSXlGZX117YX88tHz7MVPLuCpwDszHBGudPNPGlCoKcV50chqplz8pSl%2BXP99YOTOW2l28webH%2BCwXlVcXYXsZUquY2whhcQEBQvTr%2BdMpCo3QrmSktZV%2Bh8s1hM%2FBEtQGDS5yTCrOgeEAFLjPD1QoKGSAcxnlpLw9VAKWWdPKq9OZfIlpb3ePQoH6vK4gY7TATJjO1ylPKutvyc8C1x0kV659qIPVNICjBjutSqHmOC3pB5M9hZqbsISOiWt%2BpdjWShT9c3V4Zy8o480b%2BRUX%2BSkcl2spO6raekEqa1xnjuTlmg1g0UBCUhCqzp1vTqrw0K0sUAwxqB7wO0c%2BjmdDYbZeGjENPhZ%2BoCTYjPVFf7Ubp%2Bf6%2ByAt537mE5IF7F%2BoCgIobZR0T5KCMf4jAuAFFbmG3guPvjQ%2BXad1XdTrESB9fOmpOV123dZEXl9vbSqMWuLHtr17BCQIzREx0brQcquYpG93XQpcJT14qPbJ16NzooVoHsFuK3qZ%2BwYY4vGCz1fMPOod%2BzfBDCIpPvCBjqkAUL8beGrn18pOSK4Z6SmB7zb0crAIbg6MpZBrAb3IuFD9MG7vI5m3saPSOgD5iia77tWqt%2BMQwnFa9CAEhCLuf2bO06g7IG6hWYOKl%2BmhBwIn53n2iBHR25vueuppY%2FlxjKqP1V%2BKkyCTcInTzzhKt36BIBJAU1WRr3U0iQoUcwlCJslqxbbIlDBCWgXYzSrqI1T52KuAhQPVCSE0CuP4U0aUKrZ&X-Amz-Signature=37b27fbc44bae318d2460f54dbef89fd395efee71d57e85927c09a11e9add705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
