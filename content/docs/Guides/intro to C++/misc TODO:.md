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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CTRA5G%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDgA7PEc78tDN3zryrIXtyb5dZb%2Fb0gVe0WCST70mrCYgIhAOLNZQgQ1jt3553moz6tKD%2BgATxGFDAxi%2FRaFEa9r89iKv8DCCcQABoMNjM3NDIzMTgzODA1Igwpj5%2FtapOuchR%2FNu8q3AOjthqvVQL9F6N%2BKOyAtrt3d01SgXsrh0mXB7br6zHS7yuV%2B5it6O1cWPj6x8TzHTJuafjSKqmeUnJaIy3SXEHnAC%2FUiOxR%2FQWRihkruiynmHt2TJQzQLA%2BygrRZA2MedfCZAX%2FuHXZbNtPi9qrTKApMSOYOrdgphmdrQeaHzvqw1RYppiVtqXHzY8jdLlHKCVr4Uke51hSYNHI4wViKPXTFYZlZcg%2FGqvRokSQZzItx5JzKu6QcdNmpHR6Q8z%2Bso4g1s%2BIDuGlJRTWuF5jlc7fxsgyIS0nBYCxrxugiNWb1IEzZhAQUtneemb1GFArnxAllkXXFeMFdZsMBYWKywkXAzzN%2B7JCYqQyQKk1nKTgUQvUIqnHEQ9uNSRt%2FP3j%2BW%2B9pfprGjkLFXrFlRSKeLPax8cz3JDn2kGs2g3OtRMLtiaxg7e7GXEA8cZQwDZFFXo0xuuWQbR51BVCkq0XK%2Be0P%2B0LLDbcoGz3KlQmHf9qROtQkCcm9c58pXAx3majhY9AVX40vjrBQUMosXrjOMid5Ml1IGkt3%2BhKxW0%2BEGnKJ0YqO8ZKi%2FY2T1IA6s%2Fx3HZfyDbzztdIrKEesFZFdb1xV6gbWb62ibYSzwR9%2BQe98%2FSxo3G0fJq6LGPInjDvsNLDBjqkAbhwjnyP6mKrV0ozDKBwQuqejPqZIypm7%2B6C4azlliWPPaObovTT7NY9GY6ly2z3agf6TKv2UQCONZo75g4DortCMVz4bXXIc%2FmLOXBkTjUXqhrrlBWqOquacV2AxJlZN2BkXIEmJufRV%2B%2BAwu8vuP8cpbDDUmLKZBa9WFxyiQvmdRxjwstLCnK9EiFlBBUTJGFIp5xIw73KFChkFcwu5B102Yt%2B&X-Amz-Signature=3c1b6096ebbc529d0049ac6ab0085e264118540bb9eb1b285c0aee494ad9ee67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CTRA5G%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDgA7PEc78tDN3zryrIXtyb5dZb%2Fb0gVe0WCST70mrCYgIhAOLNZQgQ1jt3553moz6tKD%2BgATxGFDAxi%2FRaFEa9r89iKv8DCCcQABoMNjM3NDIzMTgzODA1Igwpj5%2FtapOuchR%2FNu8q3AOjthqvVQL9F6N%2BKOyAtrt3d01SgXsrh0mXB7br6zHS7yuV%2B5it6O1cWPj6x8TzHTJuafjSKqmeUnJaIy3SXEHnAC%2FUiOxR%2FQWRihkruiynmHt2TJQzQLA%2BygrRZA2MedfCZAX%2FuHXZbNtPi9qrTKApMSOYOrdgphmdrQeaHzvqw1RYppiVtqXHzY8jdLlHKCVr4Uke51hSYNHI4wViKPXTFYZlZcg%2FGqvRokSQZzItx5JzKu6QcdNmpHR6Q8z%2Bso4g1s%2BIDuGlJRTWuF5jlc7fxsgyIS0nBYCxrxugiNWb1IEzZhAQUtneemb1GFArnxAllkXXFeMFdZsMBYWKywkXAzzN%2B7JCYqQyQKk1nKTgUQvUIqnHEQ9uNSRt%2FP3j%2BW%2B9pfprGjkLFXrFlRSKeLPax8cz3JDn2kGs2g3OtRMLtiaxg7e7GXEA8cZQwDZFFXo0xuuWQbR51BVCkq0XK%2Be0P%2B0LLDbcoGz3KlQmHf9qROtQkCcm9c58pXAx3majhY9AVX40vjrBQUMosXrjOMid5Ml1IGkt3%2BhKxW0%2BEGnKJ0YqO8ZKi%2FY2T1IA6s%2Fx3HZfyDbzztdIrKEesFZFdb1xV6gbWb62ibYSzwR9%2BQe98%2FSxo3G0fJq6LGPInjDvsNLDBjqkAbhwjnyP6mKrV0ozDKBwQuqejPqZIypm7%2B6C4azlliWPPaObovTT7NY9GY6ly2z3agf6TKv2UQCONZo75g4DortCMVz4bXXIc%2FmLOXBkTjUXqhrrlBWqOquacV2AxJlZN2BkXIEmJufRV%2B%2BAwu8vuP8cpbDDUmLKZBa9WFxyiQvmdRxjwstLCnK9EiFlBBUTJGFIp5xIw73KFChkFcwu5B102Yt%2B&X-Amz-Signature=41eb819cfd50d57adfbde0bddd66932025f2d8d0c7fab1ac21f344473025da80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
