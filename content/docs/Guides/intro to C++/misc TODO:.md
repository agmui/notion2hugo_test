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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGRMKW5P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC9i3zmeYjuuMiH7bIhaXjNpMb%2BWbs2oqX2wjjRmRufCAIhAKwvzjFM39v50aid7jJ%2B8p9Xvup8fDXvhjqbBjVi3B2dKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHouR8DotBausATpcq3AMkhTvOsrPzme0PQxDTaCHuZ5TAmzabh7Gfl68KZ%2BarXr5vNdOZqy48uvWvCEF9D2M4oic9vcbIAURpMD95sGWj4lUbMe4O6%2B%2FNlW7TEX5NTvRCMA90LZ92x6Da9pQv4LxSks1TTFBtfLoHfHcTiqlycyq4pQ2HFawnTa8Zn48GHvjdF3Y5JKduGEPlUYlwaKxg2SNm9mSffZD3vT4WbFKBmRCnNZ7ftx1TTxefvFHEv8BB7puZ3LHCAfeS3Xo4fvj1RkW3AkjtZhwMN2SINWZfUbKtTJWKnMpZOCmZFIChv9DfFDri35RHHVetfm8nqH2Z%2FWNi%2BsXMSBYJsNzksE3emo7APcG%2BlbFgE6s6oCEhM08XIxz110tEeJa2JzP8o7%2FGZZzvqJGVkGh9tyVIoz6xVeJGLygqYlr6vsPkPuA4x%2F9yKQsNcAlfuOelYt1fzrIR0MWjOh1cUfL721pl0%2BTFxp7hPTxCKhFnPHG%2FOvGdyeP96ybvV8plJ%2F8XAIGLjFbmoVk%2Fq59KKmz6TDVQas6Kss7DATdIhtSwSeAC9sx%2B%2FYzcVe6yRMXq7oAm%2FVIkmyjgC%2BLhUpTwWW8ZgGlkylL1PiJZ%2Fpy%2FeduanWsPXRgONTY9c15hjnpYvsxFOTC03oDBBjqkARn1EN%2FAM%2B893v5rmvX7sH9TKXErUQcA7bRGul0ySBvvTjgEkIWep0Vp%2F6z4HZlIbDIZZdsF4nbA7PfQ1NZUPJ0SH%2BzsiEa2xKLQtJJDmXjZEifi4m61oBrrEXXEQ6K45%2FHRe8OyOmUsN%2BYozXPjrUCZCXnXmvFHhpm5%2BU1hjapTZDxFPveCz66bHLQSny3WMltzQW0zxm21E9Yj748FE%2FoWQ2QT&X-Amz-Signature=44b5e1c927578129d8e2a30abb5519178ae5b5ffbe2450df0ddeadcb72c1a86b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGRMKW5P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC9i3zmeYjuuMiH7bIhaXjNpMb%2BWbs2oqX2wjjRmRufCAIhAKwvzjFM39v50aid7jJ%2B8p9Xvup8fDXvhjqbBjVi3B2dKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHouR8DotBausATpcq3AMkhTvOsrPzme0PQxDTaCHuZ5TAmzabh7Gfl68KZ%2BarXr5vNdOZqy48uvWvCEF9D2M4oic9vcbIAURpMD95sGWj4lUbMe4O6%2B%2FNlW7TEX5NTvRCMA90LZ92x6Da9pQv4LxSks1TTFBtfLoHfHcTiqlycyq4pQ2HFawnTa8Zn48GHvjdF3Y5JKduGEPlUYlwaKxg2SNm9mSffZD3vT4WbFKBmRCnNZ7ftx1TTxefvFHEv8BB7puZ3LHCAfeS3Xo4fvj1RkW3AkjtZhwMN2SINWZfUbKtTJWKnMpZOCmZFIChv9DfFDri35RHHVetfm8nqH2Z%2FWNi%2BsXMSBYJsNzksE3emo7APcG%2BlbFgE6s6oCEhM08XIxz110tEeJa2JzP8o7%2FGZZzvqJGVkGh9tyVIoz6xVeJGLygqYlr6vsPkPuA4x%2F9yKQsNcAlfuOelYt1fzrIR0MWjOh1cUfL721pl0%2BTFxp7hPTxCKhFnPHG%2FOvGdyeP96ybvV8plJ%2F8XAIGLjFbmoVk%2Fq59KKmz6TDVQas6Kss7DATdIhtSwSeAC9sx%2B%2FYzcVe6yRMXq7oAm%2FVIkmyjgC%2BLhUpTwWW8ZgGlkylL1PiJZ%2Fpy%2FeduanWsPXRgONTY9c15hjnpYvsxFOTC03oDBBjqkARn1EN%2FAM%2B893v5rmvX7sH9TKXErUQcA7bRGul0ySBvvTjgEkIWep0Vp%2F6z4HZlIbDIZZdsF4nbA7PfQ1NZUPJ0SH%2BzsiEa2xKLQtJJDmXjZEifi4m61oBrrEXXEQ6K45%2FHRe8OyOmUsN%2BYozXPjrUCZCXnXmvFHhpm5%2BU1hjapTZDxFPveCz66bHLQSny3WMltzQW0zxm21E9Yj748FE%2FoWQ2QT&X-Amz-Signature=0e141f9fdd79f06c12c6423960eee6c5773d7d3fc0bec80e7b6cde391effc789&X-Amz-SignedHeaders=host&x-id=GetObject)

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
