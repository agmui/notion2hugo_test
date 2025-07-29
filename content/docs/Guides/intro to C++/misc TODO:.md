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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6MLSA4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBZMROn7fps7c42oZpOFWy8cVDZjjbscVeTLaJ2F5mKwIgD%2FVxFVBc1Y%2BKVxyGcAHFIQerJedKPNvasVRarcsl9CYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJ4jd9OPA6UVvrfiircA0H25u%2BH%2BBZGa%2FVLg3vsyIg55d2E1pML1knlwxEPoE%2BlTYIeKg2BHgJMrgYkwfhV0k142EgXRgBHA4R8HZ9LWAtg3HSYUIqEr8Yr1VqdaS%2BieUVzP9X0LW%2FaMFfk3658Cl%2BWt6xy%2BG13BjmOve29VlXDl%2BftVKNeykbKdpdHzg7aoFGXVerJOa2%2FxujuutxYqNbjJi0Kqopyw6ml8mlXZhmqOVFT1rgpKaGztcL9XmQoo64kZpR%2Bbz23evZLWJdjs296fGGYU%2FRZC6vlnSQ7oOZVZpEfL3CAUhGrnGczJKKicSYPS2FC9JOnW%2FyTpfIpqwnK4JQAFOoCG%2FEI3mTa6Syy3sqsz9i2f3t9QtYeVnqKcxQn%2F2k9ZXYUTMeAvmDwLsurrFe8k4%2BWcQxWL3t78O74YT7Dde6xwflUs1Y%2Bz%2BTFFni4p9UafeptbunkL8J6Lg%2B6Lz1owdEmDzAd%2FQKXHTqXFqczSdj%2Bgb6iPR1fSlPlxFY9HnSmSoBFawf3Tr%2BoF7F6Zp9Wjc3or1gWfxJ2PsbDD8pXqjjANzdaZSsH5Qz3OB3EEko9RSoySfkD4TozqfmFBsAOquCVgVrWXwrla6bH%2BrY0c09mj6k4Lpg%2BcB1zGrBzvqEPJwTccLqZMJX%2Bo8QGOqUBg8gXxxtsCpd2cKLXkPZgnNXrkSSEBDlUQHJ0lI%2FphbOI6rzvMgA6U7G4XcZHo6yJ1F9xikc2XJSm69ieU%2F3YfU73yFyUVP5IlOYRYkqjhAYiJOKB5NwoxXRDL6c2i%2Fp1a5JTNDAvSChbrhME4Ej6Bry0ZQlABub3vW04QahycLvQAzR%2BmZXlTB0muc%2FVddNHARZBzhxsDgQKGUI4VvyDzBNHUkZ3&X-Amz-Signature=a6382881ca012167b605075cb1f545d2ec9b57cfe2ed6ca378edf2035b40b02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6MLSA4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBZMROn7fps7c42oZpOFWy8cVDZjjbscVeTLaJ2F5mKwIgD%2FVxFVBc1Y%2BKVxyGcAHFIQerJedKPNvasVRarcsl9CYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJ4jd9OPA6UVvrfiircA0H25u%2BH%2BBZGa%2FVLg3vsyIg55d2E1pML1knlwxEPoE%2BlTYIeKg2BHgJMrgYkwfhV0k142EgXRgBHA4R8HZ9LWAtg3HSYUIqEr8Yr1VqdaS%2BieUVzP9X0LW%2FaMFfk3658Cl%2BWt6xy%2BG13BjmOve29VlXDl%2BftVKNeykbKdpdHzg7aoFGXVerJOa2%2FxujuutxYqNbjJi0Kqopyw6ml8mlXZhmqOVFT1rgpKaGztcL9XmQoo64kZpR%2Bbz23evZLWJdjs296fGGYU%2FRZC6vlnSQ7oOZVZpEfL3CAUhGrnGczJKKicSYPS2FC9JOnW%2FyTpfIpqwnK4JQAFOoCG%2FEI3mTa6Syy3sqsz9i2f3t9QtYeVnqKcxQn%2F2k9ZXYUTMeAvmDwLsurrFe8k4%2BWcQxWL3t78O74YT7Dde6xwflUs1Y%2Bz%2BTFFni4p9UafeptbunkL8J6Lg%2B6Lz1owdEmDzAd%2FQKXHTqXFqczSdj%2Bgb6iPR1fSlPlxFY9HnSmSoBFawf3Tr%2BoF7F6Zp9Wjc3or1gWfxJ2PsbDD8pXqjjANzdaZSsH5Qz3OB3EEko9RSoySfkD4TozqfmFBsAOquCVgVrWXwrla6bH%2BrY0c09mj6k4Lpg%2BcB1zGrBzvqEPJwTccLqZMJX%2Bo8QGOqUBg8gXxxtsCpd2cKLXkPZgnNXrkSSEBDlUQHJ0lI%2FphbOI6rzvMgA6U7G4XcZHo6yJ1F9xikc2XJSm69ieU%2F3YfU73yFyUVP5IlOYRYkqjhAYiJOKB5NwoxXRDL6c2i%2Fp1a5JTNDAvSChbrhME4Ej6Bry0ZQlABub3vW04QahycLvQAzR%2BmZXlTB0muc%2FVddNHARZBzhxsDgQKGUI4VvyDzBNHUkZ3&X-Amz-Signature=767fcc65dd34be53244c284a0c1eecf01a51adee687cf9fdbebd6cc58c99a31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
