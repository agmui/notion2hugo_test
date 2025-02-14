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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBCZ6I4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDn5%2FNLg0VIY%2BR5y81bmYGQGDvPLeC3kMZ%2FLg%2BnegoAUwIhAIOY9%2B2vLUnnuPglbwh7EyuvpanRNu014ej98kWHX3MCKv8DCDYQABoMNjM3NDIzMTgzODA1IgwqsfP%2BJzxxFAqSAZUq3AO5BpjQSErtk0ucuBalysmRAbCAemLbCgJZ9dXInMefQcyriKpbjQmgz5X5ZALy8R8iSpBaGr4qG%2BjD198ufCZdIq31VGhGkkT6JSypTbo9q2HSVvcoLI03NcOsTUP3HTd8R%2BZr4bkGeFda7zSDcatAEaGOacYfZZSJmmZ3qKrGw5lp6Tkrt6yFWVEU4zR135%2F1C9hkhGdxWw5FVv%2BALUP4KhYgwQBrzEk2cwjGkYU%2FMTGqAjQQr3QGMfTjlcSNKkyolP7a8LwOjxlCmBLKIvDP3dlE1DfUSOrnUQiY6gL2F%2BktS8T1KFZryI0lfSDrhsY%2FFcV6acPEu7xErPNrHX0FCQJ%2BSnoNxF0CJBB%2B6oVBW4xG5buK%2BmkzXDFBIoBAZ8IT0O7tYewnEVPZUMKLwBH%2BONaqS7XHOouqi10amHSSBPdH1xV6RrBN%2BKOg0N0RhlpkAmH2mN40ALG%2FRhBYw3yZCpEjU%2BiUdbSHavAsGd2hhHz0%2FBLWABfLNcJ%2Bb1Nbi%2FgWhd8i6g4PjaI7aaKJf9bT3EoOhhLOqQmbjF30cmQx6UuaIGsHjcXIz6CeQMjDHuO2%2BoAUUgUH9aKJFkJyyMv81qk8qzfJQ78aqN%2BwDUeJbPEaLfyTZ%2BMVv%2FuL%2FjD50b69BjqkAblqA7C4cDuKAjv1IuXsAwjtxmPJS55M%2BDX2Q70OUEtrRmKb1U4oBV7nPyKcReFqef3DUEOfwfxPIjUfwwtqC7VkW9MEyBO73XQ%2BsP%2FBnoX6X%2BnpCz2UBfVy5HpCmV9GNeCrzzSurQwf8umvXnm8RvoNE4CBIMFVKpTixdeheuwjKXoI09NSGzVs%2FFxXSk3LQF3x4XWI7Y8atqA9Kf5XB34cv50n&X-Amz-Signature=ad778cddcebe790191bf236e26ad4e9fcf629f14300e9d5793a785e73a7538be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBCZ6I4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDn5%2FNLg0VIY%2BR5y81bmYGQGDvPLeC3kMZ%2FLg%2BnegoAUwIhAIOY9%2B2vLUnnuPglbwh7EyuvpanRNu014ej98kWHX3MCKv8DCDYQABoMNjM3NDIzMTgzODA1IgwqsfP%2BJzxxFAqSAZUq3AO5BpjQSErtk0ucuBalysmRAbCAemLbCgJZ9dXInMefQcyriKpbjQmgz5X5ZALy8R8iSpBaGr4qG%2BjD198ufCZdIq31VGhGkkT6JSypTbo9q2HSVvcoLI03NcOsTUP3HTd8R%2BZr4bkGeFda7zSDcatAEaGOacYfZZSJmmZ3qKrGw5lp6Tkrt6yFWVEU4zR135%2F1C9hkhGdxWw5FVv%2BALUP4KhYgwQBrzEk2cwjGkYU%2FMTGqAjQQr3QGMfTjlcSNKkyolP7a8LwOjxlCmBLKIvDP3dlE1DfUSOrnUQiY6gL2F%2BktS8T1KFZryI0lfSDrhsY%2FFcV6acPEu7xErPNrHX0FCQJ%2BSnoNxF0CJBB%2B6oVBW4xG5buK%2BmkzXDFBIoBAZ8IT0O7tYewnEVPZUMKLwBH%2BONaqS7XHOouqi10amHSSBPdH1xV6RrBN%2BKOg0N0RhlpkAmH2mN40ALG%2FRhBYw3yZCpEjU%2BiUdbSHavAsGd2hhHz0%2FBLWABfLNcJ%2Bb1Nbi%2FgWhd8i6g4PjaI7aaKJf9bT3EoOhhLOqQmbjF30cmQx6UuaIGsHjcXIz6CeQMjDHuO2%2BoAUUgUH9aKJFkJyyMv81qk8qzfJQ78aqN%2BwDUeJbPEaLfyTZ%2BMVv%2FuL%2FjD50b69BjqkAblqA7C4cDuKAjv1IuXsAwjtxmPJS55M%2BDX2Q70OUEtrRmKb1U4oBV7nPyKcReFqef3DUEOfwfxPIjUfwwtqC7VkW9MEyBO73XQ%2BsP%2FBnoX6X%2BnpCz2UBfVy5HpCmV9GNeCrzzSurQwf8umvXnm8RvoNE4CBIMFVKpTixdeheuwjKXoI09NSGzVs%2FFxXSk3LQF3x4XWI7Y8atqA9Kf5XB34cv50n&X-Amz-Signature=3d8fd64f47b2d60738c12bf9320547306211d37ad4f559bfaf983433507873fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
