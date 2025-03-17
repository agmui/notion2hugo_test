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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2QYERYS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2U80pJRSpTRKqo6uOJLpQ0X3Oj5sUveFvQdcNLdVQvgIhAPpSKelgoFMBmv7mOZU1JkmcWBNaHUql%2BzJ%2FMSjM%2FDVfKv8DCEEQABoMNjM3NDIzMTgzODA1IgylHm7V4EQiMkqarnwq3ANH6zVyGWpp%2BaIFZDYYvpHPxO1C7wg7%2Ftc5AmES%2BbfKdN%2FoGdVu0Sf0Z2%2Bv%2FVtTEEPLizQ1Xc95kwO51sHA7qmAJWYOXfDZC2%2BzbMbgj0BkWo8SmnkijyXZWOhx6TisOR25ycuzGHAWUF4XtRXEWuaPuP2Gj%2FO2hRxEkiG962FHWa9v0VG%2BnzSm%2BA6EpP%2FLdi2JQCPobTkTniaQnG5agZEFNplPnRWH0cevzOEzMSZgYCD5nQ0kOwIc6M5XB7CNkVg4bVyxa3pfARc1cW0EJ%2BaQPwnuJnNm2cPSZP%2F78fD0RYgHosi5RUfP6dboTiLY6p8SE5axYu9jMl%2F6Xa7yD9QNqfoynrqbTm58uKNPO37ORUfSExMmZZFdtvyQgUeMcW3FE%2FIeXSLQo22NkqXqqfP60tiRRk5j%2Bwh7w9qg3wDWvisrgViSbGjj6np1YHt9eyv7xuT7%2BXG71QlDOtSeAo7qs3zwF89ZsoXvKWr%2BBz8H0IWx0XfHktmYZSvk9q%2FoMzalnRF3JJDJmdbjkG6xl33RUp8St1%2BvwLRqjt9RtpDnRg5z8ov%2BBk0GUyV14EH9ZbLaxRV7WYjy0NbhkrnVEx37hyZo61RTcFTSkzp1FjQxSkvwuqtVo51oYhceTzCTr9%2B%2BBjqkATnL5k%2FMKgWsHnNQaS3GUBrDwV8ywpWIESD1C7Jvuh3Wfa%2F5r7QGxgdbtipBujJ3G9SPCrD3W0LZfo%2Bgp5ZjI1Nmv4bgqpHjCzbX65ZncVIlPWJHxg8FhLoXrLcfePuTBJ8XeCciYASxEWnrgdrhNd6iWr3mrkBiGNLx02oe%2FuRBFfrrGxJyxTy2oGGX9DaVYJn2qvOgbA1e6pTVGwQMLRpsHPu8&X-Amz-Signature=c62f8080e8448a5f72e2783ae839ddd84e4f97e7ab4d31b097224448679bb792&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2QYERYS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2U80pJRSpTRKqo6uOJLpQ0X3Oj5sUveFvQdcNLdVQvgIhAPpSKelgoFMBmv7mOZU1JkmcWBNaHUql%2BzJ%2FMSjM%2FDVfKv8DCEEQABoMNjM3NDIzMTgzODA1IgylHm7V4EQiMkqarnwq3ANH6zVyGWpp%2BaIFZDYYvpHPxO1C7wg7%2Ftc5AmES%2BbfKdN%2FoGdVu0Sf0Z2%2Bv%2FVtTEEPLizQ1Xc95kwO51sHA7qmAJWYOXfDZC2%2BzbMbgj0BkWo8SmnkijyXZWOhx6TisOR25ycuzGHAWUF4XtRXEWuaPuP2Gj%2FO2hRxEkiG962FHWa9v0VG%2BnzSm%2BA6EpP%2FLdi2JQCPobTkTniaQnG5agZEFNplPnRWH0cevzOEzMSZgYCD5nQ0kOwIc6M5XB7CNkVg4bVyxa3pfARc1cW0EJ%2BaQPwnuJnNm2cPSZP%2F78fD0RYgHosi5RUfP6dboTiLY6p8SE5axYu9jMl%2F6Xa7yD9QNqfoynrqbTm58uKNPO37ORUfSExMmZZFdtvyQgUeMcW3FE%2FIeXSLQo22NkqXqqfP60tiRRk5j%2Bwh7w9qg3wDWvisrgViSbGjj6np1YHt9eyv7xuT7%2BXG71QlDOtSeAo7qs3zwF89ZsoXvKWr%2BBz8H0IWx0XfHktmYZSvk9q%2FoMzalnRF3JJDJmdbjkG6xl33RUp8St1%2BvwLRqjt9RtpDnRg5z8ov%2BBk0GUyV14EH9ZbLaxRV7WYjy0NbhkrnVEx37hyZo61RTcFTSkzp1FjQxSkvwuqtVo51oYhceTzCTr9%2B%2BBjqkATnL5k%2FMKgWsHnNQaS3GUBrDwV8ywpWIESD1C7Jvuh3Wfa%2F5r7QGxgdbtipBujJ3G9SPCrD3W0LZfo%2Bgp5ZjI1Nmv4bgqpHjCzbX65ZncVIlPWJHxg8FhLoXrLcfePuTBJ8XeCciYASxEWnrgdrhNd6iWr3mrkBiGNLx02oe%2FuRBFfrrGxJyxTy2oGGX9DaVYJn2qvOgbA1e6pTVGwQMLRpsHPu8&X-Amz-Signature=60f85994d559065b46d69a3f9c0e672cafd27c8209b95e278c81a5450c167945&X-Amz-SignedHeaders=host&x-id=GetObject)

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
