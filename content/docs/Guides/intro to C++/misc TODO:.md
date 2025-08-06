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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC52EFBU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD9PNI2Txdw%2Bt8Z4evEdCTKE4FGDQtW7NzMbyIrM1BwSgIgfopTCYLA0HoYzhIDFp1hDQfJQaG6hWxBEa7Yunchcg4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMBq7%2FhxVX%2BcdnQsECrcAyLwDyYzZWVbuhWGqVE6aU%2BK5H6lRWU9KDKw72g3GyoCP4XoyZznPOvoNn%2F3i0ybO0VG7Z915I98Jsh72iBRCQnl5p8ELFTK3CP1JuW%2Fkq2ytg1SA0Lk4j%2BMrB1A5IYywdinxtoNlF84trpXglYtlG5E%2FcjUC%2F2MS9isNuS5Vl5GOGUQlzhoSEJT0bfRql1vTu%2Fxw38nL8ZqFIYjLunFxRPj6JJbMIGpjtu6si4mjDkhi39MlnNiRz%2FR3lvXnh4sXWns46fK1XinMGb4tHyNcsixusYOpaEVDRbQNNi%2F1JhP8UIrTeDf8k55nf6WrXrlkH%2FS6QgUc9USFTZl9l21B4E2oy6H%2F8oWPSzxdvBXEDjDRGzFhBfBnnqQ7PRFuW9050Xtj8VawUtqvBsfIrFSa798u5xwuHL3DpkJR%2ByatNKnhMQabI4dLngbmkIJpEF1uczIYmGp%2Bh7h%2FT%2Ft8lizk6NPVEO6Z%2Fmd6jJP0UqCuXLfA%2F7zsQrpqVWBLdmobT7bAErOislOZPXt0zu9cKAF0s0H8ViPOa8AIHy1ZoPVhEu6bMZ4DORZIgbhIsPzTPMMAldY0mC61Q7sye%2BYw2mMMOqVw7jdxm7oHZFK0JeMLih%2BW18on6hCOaUsSJYOMJCOz8QGOqUB4lyL%2B2BIQvfcDHdn9hQI0H6y%2FaT2YEO%2FZjmFXPHfTXU9Bgry5GXX3FicMEXX07Yh32bbfXTwFH0I2kDt3jV3o%2F9bDP9Dxp2nITyxUpIj67Jbu0mo2H0rx3s3HiMr%2F%2BTw3qlTM5D%2FsHjO89E%2BQec2H3mWiTxNXxdnzq8zt%2B3JrYsAC5r922r5SCiNPQiNXRCdzgu0WJkbDN4i%2Fw%2FfF5ApwOhm7sYi&X-Amz-Signature=1d203ceaf4ff5445ae72e7218a86e1310c84625663e697cef0a5e773ca2b07af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC52EFBU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQD9PNI2Txdw%2Bt8Z4evEdCTKE4FGDQtW7NzMbyIrM1BwSgIgfopTCYLA0HoYzhIDFp1hDQfJQaG6hWxBEa7Yunchcg4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMBq7%2FhxVX%2BcdnQsECrcAyLwDyYzZWVbuhWGqVE6aU%2BK5H6lRWU9KDKw72g3GyoCP4XoyZznPOvoNn%2F3i0ybO0VG7Z915I98Jsh72iBRCQnl5p8ELFTK3CP1JuW%2Fkq2ytg1SA0Lk4j%2BMrB1A5IYywdinxtoNlF84trpXglYtlG5E%2FcjUC%2F2MS9isNuS5Vl5GOGUQlzhoSEJT0bfRql1vTu%2Fxw38nL8ZqFIYjLunFxRPj6JJbMIGpjtu6si4mjDkhi39MlnNiRz%2FR3lvXnh4sXWns46fK1XinMGb4tHyNcsixusYOpaEVDRbQNNi%2F1JhP8UIrTeDf8k55nf6WrXrlkH%2FS6QgUc9USFTZl9l21B4E2oy6H%2F8oWPSzxdvBXEDjDRGzFhBfBnnqQ7PRFuW9050Xtj8VawUtqvBsfIrFSa798u5xwuHL3DpkJR%2ByatNKnhMQabI4dLngbmkIJpEF1uczIYmGp%2Bh7h%2FT%2Ft8lizk6NPVEO6Z%2Fmd6jJP0UqCuXLfA%2F7zsQrpqVWBLdmobT7bAErOislOZPXt0zu9cKAF0s0H8ViPOa8AIHy1ZoPVhEu6bMZ4DORZIgbhIsPzTPMMAldY0mC61Q7sye%2BYw2mMMOqVw7jdxm7oHZFK0JeMLih%2BW18on6hCOaUsSJYOMJCOz8QGOqUB4lyL%2B2BIQvfcDHdn9hQI0H6y%2FaT2YEO%2FZjmFXPHfTXU9Bgry5GXX3FicMEXX07Yh32bbfXTwFH0I2kDt3jV3o%2F9bDP9Dxp2nITyxUpIj67Jbu0mo2H0rx3s3HiMr%2F%2BTw3qlTM5D%2FsHjO89E%2BQec2H3mWiTxNXxdnzq8zt%2B3JrYsAC5r922r5SCiNPQiNXRCdzgu0WJkbDN4i%2Fw%2FfF5ApwOhm7sYi&X-Amz-Signature=8d35898b54f90cb01076ec94b42f29d700d191b4b69907b95aa075c315d558c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
