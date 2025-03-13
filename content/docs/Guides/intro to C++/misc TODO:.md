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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYAMNH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUQxqg2h5%2F4KvTsQR9qv3uAsYb9bYGSic7vLRxMkWA4AiEA5s7B0Z%2B6BPWLnc58OaMfh13SeQcTqofj0gv65x6UHZkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRwx8LrDIoRd4y4xSrcA2yMqnvdYa%2BLDY1SVSNdEGct1fNTLYgHak6t9M1Fs3ugtj3oSTYImub9fTSuL1pt4xe7VAGTSDLMN%2FFmMEdlECIQ1Al%2BQhbP9IEtSC2Gd5FI%2FbWFs0Ide6YFo2NvN6pDHhAI6GXQUT%2F3AgbC9BF7zJ6kHCu5HsGtHI%2BbsvZFbd3J5MSY8DvIDKWGQ7F9BWjmfdoD8SPXfvHnmpnesFMMXkirogST0bQKKakQIwFJV%2BRwT2kr6hFa89Z4Ync4g8o%2FizF5WInAHfNAK5ajEpqOUPvpq%2BqbnzBTZaeF2EV3hy66lrwCCLZLzeRpFuQjERIeup%2Bimx5FBTzaFHRt%2B%2FahaQVHCuaxY58YyII0I%2FkLS5gq%2Bolyka8VpIJtwc5v02QX4c7DXiwbWPSLlqgrey6hwnd3YWqj0znzn17EfnUCFYT1w6D8Zx%2FORNQBXZ%2BzWF056jjckt5dbfs3iHCu0PIon%2BdtyQKFoHnQV2oHWnlIW9HPAI88PorKi5h8M7KJsVZx1j1w9szEuRBMywCCGVjDaNiq66bPJGCGVixk%2FCpG2VIC08cS49emxrYl8oesCQ6layjDYmKFy5LiNkkAPZM6qSp4o%2FB9oZBtV1MnWt8g5sKDVna%2BjsP8vexOe4%2FgMKOcy74GOqUBnlSW78T3%2B8dnnnxKPdGYeQubmqjF22dsrodUtWCa9X51IKfI9zg46SELh3Vj%2F1%2B87KmXFNGZMVtgDi6sMFdcuw%2BdfJ40%2BC4q3X6R1k9kr97dE9zQiuADrqoYvOg3b%2Fai%2FAGbw8C%2FI0Em3dcsISU99n8eXZLvZYQE0JH%2FgTddbCOD%2Fl9CMX4F7UFy31oVFo6%2F0gxDxKW0KlNX%2BJPSPxl%2FyEfMwUR2&X-Amz-Signature=ecd26681b4a4db00c17c66d41e96eae9cf23c68779542aaa45cecf55da7b6e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYAMNH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUQxqg2h5%2F4KvTsQR9qv3uAsYb9bYGSic7vLRxMkWA4AiEA5s7B0Z%2B6BPWLnc58OaMfh13SeQcTqofj0gv65x6UHZkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRwx8LrDIoRd4y4xSrcA2yMqnvdYa%2BLDY1SVSNdEGct1fNTLYgHak6t9M1Fs3ugtj3oSTYImub9fTSuL1pt4xe7VAGTSDLMN%2FFmMEdlECIQ1Al%2BQhbP9IEtSC2Gd5FI%2FbWFs0Ide6YFo2NvN6pDHhAI6GXQUT%2F3AgbC9BF7zJ6kHCu5HsGtHI%2BbsvZFbd3J5MSY8DvIDKWGQ7F9BWjmfdoD8SPXfvHnmpnesFMMXkirogST0bQKKakQIwFJV%2BRwT2kr6hFa89Z4Ync4g8o%2FizF5WInAHfNAK5ajEpqOUPvpq%2BqbnzBTZaeF2EV3hy66lrwCCLZLzeRpFuQjERIeup%2Bimx5FBTzaFHRt%2B%2FahaQVHCuaxY58YyII0I%2FkLS5gq%2Bolyka8VpIJtwc5v02QX4c7DXiwbWPSLlqgrey6hwnd3YWqj0znzn17EfnUCFYT1w6D8Zx%2FORNQBXZ%2BzWF056jjckt5dbfs3iHCu0PIon%2BdtyQKFoHnQV2oHWnlIW9HPAI88PorKi5h8M7KJsVZx1j1w9szEuRBMywCCGVjDaNiq66bPJGCGVixk%2FCpG2VIC08cS49emxrYl8oesCQ6layjDYmKFy5LiNkkAPZM6qSp4o%2FB9oZBtV1MnWt8g5sKDVna%2BjsP8vexOe4%2FgMKOcy74GOqUBnlSW78T3%2B8dnnnxKPdGYeQubmqjF22dsrodUtWCa9X51IKfI9zg46SELh3Vj%2F1%2B87KmXFNGZMVtgDi6sMFdcuw%2BdfJ40%2BC4q3X6R1k9kr97dE9zQiuADrqoYvOg3b%2Fai%2FAGbw8C%2FI0Em3dcsISU99n8eXZLvZYQE0JH%2FgTddbCOD%2Fl9CMX4F7UFy31oVFo6%2F0gxDxKW0KlNX%2BJPSPxl%2FyEfMwUR2&X-Amz-Signature=3b4f93acf8dc8beeb81faedd3012564045b14b706c14cd46cf1a877cdc371cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
