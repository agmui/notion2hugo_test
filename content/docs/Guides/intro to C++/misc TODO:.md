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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4OMOB5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDqHAIR7tUD0bNCosQZqg9%2FHtC567BMd1VToB2lBH0DzAIgFklNZY8u%2FnJqjLusbuDqTto%2FclB13ozA29lapMoqiW8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDYxCnVvopztn4HQaCrcA4AecGThFTBqmETJIB916b1SKWS8GAl5zh6GD%2BjawCUKhxVLQW%2FrioTt48jd1VyavXoOze6kgVnMLkuW%2B%2Fs8c%2F5%2BIvvlRG6KC2MSQI%2Fztlb4y8Zb3ZXZbWeC5BbKMWLZMI8hxsderlqGIh3NxgkHyV%2Bc2Kd22pYUqT%2B2HiUAuh5TR7OmjUlzWomLCF%2Flowp7AwbbkUo%2FeqlmcyZaq0Kcjr4pvDYbEBxpIeQlXQ1Ksqajnbzm%2BQ7rRcOqDngYyDkDZy0vRoHmNfOMVAI58NcPWq9RsV8ftF27NgCR4zu8JzONOFyqjvtAZGeCsAnwy9ZEFx5M%2FYTdbWGPlNBkiGdvp7Wg10qVtcTPTDSSFxOR0q9HQCU7NAOdbxfFIhdB2GOn1vrPzhLe%2BibW%2FNLWzD5pWyW9z%2F%2BJ4C8wx8QnfYfrXqctoqot2RmRmpd7ltD1xrgUZ0uuCEfBXFUWpQ5ysP69HJldak%2FxfjPspawpPFDVIH%2BJ7ZA3Zf%2Be9w38R5O8uZda9rwBU2eVvvr%2FFJxrJyMqKO%2BYjNesIAV%2BEE0ILlDYoLU%2FbBZXJ5P6VqSLY7QqWQhEPx2%2Bx6VT4i9v07K%2Fa0hA6Og9kza21cdnfW7pokLrw%2BNzsw4Dm7ehcVGl7vzFMNCs38AGOqUBVGpF1O5tr7qlvPlfqT19yxBtu6xEAuvFwxszlioiH%2Fup7FHmeNCTb0nExW8YKj2XCYynGLDsetFhULMbPFhxJ2Q8BbaHWvkpcvM01n3%2BxHgbKTaE1HtJZaDi2hYIaEJWASVwwgEQH089mkbof1j1YG7KqcqK9wCiZ8prb9yuDs1qmkqarKlr%2BnW1R7UtfZ1%2BPYU8VI62kZeYYH%2Fv081yvWCkDpIe&X-Amz-Signature=3081a2c7ae4b01f0f26d022082e53fe4c2e97728137b09fa9c63c48fdde466dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D4OMOB5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDqHAIR7tUD0bNCosQZqg9%2FHtC567BMd1VToB2lBH0DzAIgFklNZY8u%2FnJqjLusbuDqTto%2FclB13ozA29lapMoqiW8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDYxCnVvopztn4HQaCrcA4AecGThFTBqmETJIB916b1SKWS8GAl5zh6GD%2BjawCUKhxVLQW%2FrioTt48jd1VyavXoOze6kgVnMLkuW%2B%2Fs8c%2F5%2BIvvlRG6KC2MSQI%2Fztlb4y8Zb3ZXZbWeC5BbKMWLZMI8hxsderlqGIh3NxgkHyV%2Bc2Kd22pYUqT%2B2HiUAuh5TR7OmjUlzWomLCF%2Flowp7AwbbkUo%2FeqlmcyZaq0Kcjr4pvDYbEBxpIeQlXQ1Ksqajnbzm%2BQ7rRcOqDngYyDkDZy0vRoHmNfOMVAI58NcPWq9RsV8ftF27NgCR4zu8JzONOFyqjvtAZGeCsAnwy9ZEFx5M%2FYTdbWGPlNBkiGdvp7Wg10qVtcTPTDSSFxOR0q9HQCU7NAOdbxfFIhdB2GOn1vrPzhLe%2BibW%2FNLWzD5pWyW9z%2F%2BJ4C8wx8QnfYfrXqctoqot2RmRmpd7ltD1xrgUZ0uuCEfBXFUWpQ5ysP69HJldak%2FxfjPspawpPFDVIH%2BJ7ZA3Zf%2Be9w38R5O8uZda9rwBU2eVvvr%2FFJxrJyMqKO%2BYjNesIAV%2BEE0ILlDYoLU%2FbBZXJ5P6VqSLY7QqWQhEPx2%2Bx6VT4i9v07K%2Fa0hA6Og9kza21cdnfW7pokLrw%2BNzsw4Dm7ehcVGl7vzFMNCs38AGOqUBVGpF1O5tr7qlvPlfqT19yxBtu6xEAuvFwxszlioiH%2Fup7FHmeNCTb0nExW8YKj2XCYynGLDsetFhULMbPFhxJ2Q8BbaHWvkpcvM01n3%2BxHgbKTaE1HtJZaDi2hYIaEJWASVwwgEQH089mkbof1j1YG7KqcqK9wCiZ8prb9yuDs1qmkqarKlr%2BnW1R7UtfZ1%2BPYU8VI62kZeYYH%2Fv081yvWCkDpIe&X-Amz-Signature=0f37d96b5c7c0191b497cb92ed712540e9d0d8c5e9e79afb997ef603c9c902ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
