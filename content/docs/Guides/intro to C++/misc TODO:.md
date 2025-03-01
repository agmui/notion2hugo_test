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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHBOJ57%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCt9IqRNkB8Ik6SMqoK6kf37c4qJr6wPJNE5th2%2FZbUXAIgbjB9CyqbR4Q3abQawnXGm4dB0BOV7A8Ya1I9Mudmz4AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE6Fr6J8cSb9pslpyrcAyL78LtPfJXyxlgctf6hfO%2BzyNlLveR2pPsZHX7hVpaek6iU9EgQm9Q%2BZ3xe7ATuvEgwAczx%2BoTi8y5cYfbk%2FE2Gsh4VF8OdQviDGvk0tqGV29H51HM%2B97kOl%2F6K9z8ednHbV6tBynnW2kgjXu7ZC%2FmJrU9%2FxcIxeGC6jtWeMPQfILCzwNt4a6XA5l2REQ2IlVTvUCIiMie6UPZQnmvDY6hu1EjAim6pFvNLseovdGb2VoPKI%2BFEGi2Ga0Vqc84L2Gc2B1YUJ0O0jWmTcNr8Cy6fHk9nUS%2FEv3SWgmV9Y2wbL8SrfyZr%2BqeiRZevx6FpxpH%2B4%2FZLvy1QuWgBUStKUMGL%2BxsWsYPntq8iKxI%2FhAZUwnDVhHZG5oTGuFp9CdVURcGXJM4FqfuDSWbv3yY1Cw3cyYB6cq5Ntpxx7Eem7xemT4%2FqCvLlSb2HH2zSydfnLK8Ti5XK6Pe1JYDKoIfbHtGp0uW6NEuf%2F0UedzO%2FDlpNo%2FSnIyyEEIR6NwwcpmbqYzHRUgGM3tMIT%2B8a0qhLVA77HVHVzOanLERa0hqVB%2BJQtHNqIh%2F6B8TwOaYU4z0vIOebeCSTlCxx8PQGSIycUJaa4FJ96wH88VvwbIKJZueWqJMUls1YjjvBNhp%2BMMfHjb4GOqUBGw3lzLTsfq5bMy8fn%2BX4Y5CrMrLV2vduIepUYSspplgpagsO2k%2FuohWzmV2RUUSYLyDk34roo%2BdWkx7w9acd99UPF%2F3FD1Xc6hmpJO5dRSDBIuaAmk4SoSVu5xfMOB8NBbf4bMocmJNIDD2k%2FyqOVq%2BaOlmEQgVZZCu2YJXzyO%2FRSeN7QIykwtSPc1X8phoLSIXbqKn5tOI9io7kQD0a8lVjEq95&X-Amz-Signature=c44eed83641b4f40cf784b1bfab852d614c7d4875e182f31ca27eddf7490dade&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHBOJ57%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCt9IqRNkB8Ik6SMqoK6kf37c4qJr6wPJNE5th2%2FZbUXAIgbjB9CyqbR4Q3abQawnXGm4dB0BOV7A8Ya1I9Mudmz4AqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE6Fr6J8cSb9pslpyrcAyL78LtPfJXyxlgctf6hfO%2BzyNlLveR2pPsZHX7hVpaek6iU9EgQm9Q%2BZ3xe7ATuvEgwAczx%2BoTi8y5cYfbk%2FE2Gsh4VF8OdQviDGvk0tqGV29H51HM%2B97kOl%2F6K9z8ednHbV6tBynnW2kgjXu7ZC%2FmJrU9%2FxcIxeGC6jtWeMPQfILCzwNt4a6XA5l2REQ2IlVTvUCIiMie6UPZQnmvDY6hu1EjAim6pFvNLseovdGb2VoPKI%2BFEGi2Ga0Vqc84L2Gc2B1YUJ0O0jWmTcNr8Cy6fHk9nUS%2FEv3SWgmV9Y2wbL8SrfyZr%2BqeiRZevx6FpxpH%2B4%2FZLvy1QuWgBUStKUMGL%2BxsWsYPntq8iKxI%2FhAZUwnDVhHZG5oTGuFp9CdVURcGXJM4FqfuDSWbv3yY1Cw3cyYB6cq5Ntpxx7Eem7xemT4%2FqCvLlSb2HH2zSydfnLK8Ti5XK6Pe1JYDKoIfbHtGp0uW6NEuf%2F0UedzO%2FDlpNo%2FSnIyyEEIR6NwwcpmbqYzHRUgGM3tMIT%2B8a0qhLVA77HVHVzOanLERa0hqVB%2BJQtHNqIh%2F6B8TwOaYU4z0vIOebeCSTlCxx8PQGSIycUJaa4FJ96wH88VvwbIKJZueWqJMUls1YjjvBNhp%2BMMfHjb4GOqUBGw3lzLTsfq5bMy8fn%2BX4Y5CrMrLV2vduIepUYSspplgpagsO2k%2FuohWzmV2RUUSYLyDk34roo%2BdWkx7w9acd99UPF%2F3FD1Xc6hmpJO5dRSDBIuaAmk4SoSVu5xfMOB8NBbf4bMocmJNIDD2k%2FyqOVq%2BaOlmEQgVZZCu2YJXzyO%2FRSeN7QIykwtSPc1X8phoLSIXbqKn5tOI9io7kQD0a8lVjEq95&X-Amz-Signature=f1cb62ad1cbf951dc11be9d2a67ad2fdcbd83eeddd502557d9b518a733db4cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
