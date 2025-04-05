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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQNIP5FZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdGJcr963Fpiv9x8ZQEvmHRzNmU1g6oRe7jJO2Wr7unAiEArL4hhqebMlF9hwOtaFukySObpzlUfrf61bRnZX1ieywq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBU00sqxsy9WJkOknSrcA%2BaD5898jJPnHi9SSJe%2FFRZ9ixw9kdoqMb6fHqGMwTjD8pPwBioW2ikXRLF62UhS2%2B8bO%2Bg1N9jP8FSDTIj%2BdCfq%2BliS2AVWBXeJAoWbiTOPYpkuEpYj0U0aSVee%2F9KHpDFIyCa9SHtv99edmPijWAK0hdnh7EKigZwmgaT8EfyLJl1POHhomnj6w1as9yES39Zmtu74VzH9kGU27IIzTwQe0je8ZKq4N%2F0IfJj3Lue10G5jfW1%2Bvxn1ZLNJfkHRIGWasxYveV5AIPko6ZsOuKjrydCXIUlPyRIzg0z9B8A9qXCJagmtQSwv1S%2Bkt63CVLU6%2F0S6oDCTP4KNYc%2FMcB9wL%2FEtnavkwigI4L%2FwcEbnhBR%2Bs7K6bj6uXBtI2nMEEhvQETBoBJULDJLwlOes5APyeFxIWNUiAkYGWgBkJZZlx9CcBjSfuorpQtNP35%2Bw4kK4hqd5svcEMtE88nRIgWEJ%2Biu%2B3v3uZR%2FnXWzudp4YmEOWpGNDpYm%2Bo7hAsTa66WzIbWk0ymVu1u0kxXTr4Y6B4MrCJGmPP01hmwRIS4ASDhQ0q24ar%2FMcsZLd9G98AdZ05dNzUHsYfLdV%2BbrHYbVcwpyv8SEBYWgWpOJ8aJE7Z5E7UFOtvx2z0DCjMPvHxb8GOqUBvFJ9TdLN5isE28k9kqspJvOOYvY7%2FYkSuiVzFDGozq%2FUUvdnEUS55aYx2Oz3lADfn2S3ho%2FkF1zpXsa7n1jUQlWoBVv6WiNSQTGsIfP9cewXEEMZeDFJmxIxZaKtFL0F0LGcVsUTrgiAdVpiZQ1KmFlEp2EwzmAoM173j2ihzHjATcUfpy%2BZYpLOC9M%2FDwk1%2BVrzQEEPxGThlsdjuAYOKGPx79dE&X-Amz-Signature=511138002436bfb0ace1738a53652737d02ee576cd4d6f5cb7e0b6c30d514d03&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQNIP5FZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdGJcr963Fpiv9x8ZQEvmHRzNmU1g6oRe7jJO2Wr7unAiEArL4hhqebMlF9hwOtaFukySObpzlUfrf61bRnZX1ieywq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBU00sqxsy9WJkOknSrcA%2BaD5898jJPnHi9SSJe%2FFRZ9ixw9kdoqMb6fHqGMwTjD8pPwBioW2ikXRLF62UhS2%2B8bO%2Bg1N9jP8FSDTIj%2BdCfq%2BliS2AVWBXeJAoWbiTOPYpkuEpYj0U0aSVee%2F9KHpDFIyCa9SHtv99edmPijWAK0hdnh7EKigZwmgaT8EfyLJl1POHhomnj6w1as9yES39Zmtu74VzH9kGU27IIzTwQe0je8ZKq4N%2F0IfJj3Lue10G5jfW1%2Bvxn1ZLNJfkHRIGWasxYveV5AIPko6ZsOuKjrydCXIUlPyRIzg0z9B8A9qXCJagmtQSwv1S%2Bkt63CVLU6%2F0S6oDCTP4KNYc%2FMcB9wL%2FEtnavkwigI4L%2FwcEbnhBR%2Bs7K6bj6uXBtI2nMEEhvQETBoBJULDJLwlOes5APyeFxIWNUiAkYGWgBkJZZlx9CcBjSfuorpQtNP35%2Bw4kK4hqd5svcEMtE88nRIgWEJ%2Biu%2B3v3uZR%2FnXWzudp4YmEOWpGNDpYm%2Bo7hAsTa66WzIbWk0ymVu1u0kxXTr4Y6B4MrCJGmPP01hmwRIS4ASDhQ0q24ar%2FMcsZLd9G98AdZ05dNzUHsYfLdV%2BbrHYbVcwpyv8SEBYWgWpOJ8aJE7Z5E7UFOtvx2z0DCjMPvHxb8GOqUBvFJ9TdLN5isE28k9kqspJvOOYvY7%2FYkSuiVzFDGozq%2FUUvdnEUS55aYx2Oz3lADfn2S3ho%2FkF1zpXsa7n1jUQlWoBVv6WiNSQTGsIfP9cewXEEMZeDFJmxIxZaKtFL0F0LGcVsUTrgiAdVpiZQ1KmFlEp2EwzmAoM173j2ihzHjATcUfpy%2BZYpLOC9M%2FDwk1%2BVrzQEEPxGThlsdjuAYOKGPx79dE&X-Amz-Signature=810c36654f915e0fd8f7d73b77b3f9bd344b461df060bf373574f746389cb113&X-Amz-SignedHeaders=host&x-id=GetObject)

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
