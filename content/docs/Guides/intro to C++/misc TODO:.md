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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASHAMB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAhXoPXvJ9%2B1ouIXgQdvm6xYMN72dbQ1ddfKPxhBI0hVAiAeVedMTgF740VKDuiO%2FXeVYgXcYzSVN5dgpkC1JyF%2FdCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmQQKG%2Fk%2F%2FyA2Byz9KtwDg57jYCf4xHZCkhWk2FaLG2oXIHDNuZxsEixAX9JaoQmUTc8uZw%2FdswO%2BD4Ri7hkQkkIu2nq3MXxsIWcMy7LLo5bmUiDbLNmCKABfc9o7fZxad0NujNQwtucZA4qpAcRffsG2ptMO7WRZDkXcUa%2FSw7AZltXfEBwjvLyFXSkKYnHfKkjvAb0Y6Gko1iJwFXRSyw8R%2FsSDBSjdFkvaNKpXuITJuQOqnyWYIQumPk8257R7ZtAosPF5kiTMcYeLkGRSKVhpe5iLuIomPXzpg5GjUECoUFbE%2Bw2C1dJpeTpPePLWpVZsdjLPqLxfkippEIP7%2Btjkr%2FGS7XL%2Fm8%2BXWOm%2BI1eK3y0D2cV%2Fl85oSB1hWoZWZMOjDaztzcqY7Elvbihh5RdydwHjxtTDinHIFGDzw2wcP6sXxqLOwyFxoQfQR4Xfrl3glo29NpX903FsObu7lGSpzJ4mWXCIRlCXdR%2FudJGPbf2iE%2FZFfh2fRbkccZfR8M2dko4%2BIZpwh8qqkQPcF6FnPGaTrrgQGDkF2OAoubfkfnQ1d02kBhRCbwrQCMToORpeGhlbFYBHSn7WLeeBemIm5sD%2FCeA7JqrZZGFMVzBOHfoj8O1%2BKxP7Dw7%2Bivuzcbx7tYxkWxoUGgcwwauSxAY6pgEJYtAjtZXO0E3Hteco0iFnaYjWjmWALMU5G8umJ4E3bYTq8ktrZxgoQzjvxlLzn4%2BcKyo%2Fnqj12QJTvZykBBXec2bSHAj73%2FLrUGKI4940XmJw5o%2Be4j0itfRtiSa87bxENaGOK0p6IvV4XOLo3px3pA8gTJ%2BU293ILz0Y%2F0ogRDd4zyJ9U5y6Kq7ZcrrgN8wONhqG4pvjZk5Gm2fpHQd6YZYUrW32&X-Amz-Signature=7da0237f69258315bcc40cc9c3549b0c019e8b20ce118e6a3c7f57d615ecbe99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ASHAMB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAhXoPXvJ9%2B1ouIXgQdvm6xYMN72dbQ1ddfKPxhBI0hVAiAeVedMTgF740VKDuiO%2FXeVYgXcYzSVN5dgpkC1JyF%2FdCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmQQKG%2Fk%2F%2FyA2Byz9KtwDg57jYCf4xHZCkhWk2FaLG2oXIHDNuZxsEixAX9JaoQmUTc8uZw%2FdswO%2BD4Ri7hkQkkIu2nq3MXxsIWcMy7LLo5bmUiDbLNmCKABfc9o7fZxad0NujNQwtucZA4qpAcRffsG2ptMO7WRZDkXcUa%2FSw7AZltXfEBwjvLyFXSkKYnHfKkjvAb0Y6Gko1iJwFXRSyw8R%2FsSDBSjdFkvaNKpXuITJuQOqnyWYIQumPk8257R7ZtAosPF5kiTMcYeLkGRSKVhpe5iLuIomPXzpg5GjUECoUFbE%2Bw2C1dJpeTpPePLWpVZsdjLPqLxfkippEIP7%2Btjkr%2FGS7XL%2Fm8%2BXWOm%2BI1eK3y0D2cV%2Fl85oSB1hWoZWZMOjDaztzcqY7Elvbihh5RdydwHjxtTDinHIFGDzw2wcP6sXxqLOwyFxoQfQR4Xfrl3glo29NpX903FsObu7lGSpzJ4mWXCIRlCXdR%2FudJGPbf2iE%2FZFfh2fRbkccZfR8M2dko4%2BIZpwh8qqkQPcF6FnPGaTrrgQGDkF2OAoubfkfnQ1d02kBhRCbwrQCMToORpeGhlbFYBHSn7WLeeBemIm5sD%2FCeA7JqrZZGFMVzBOHfoj8O1%2BKxP7Dw7%2Bivuzcbx7tYxkWxoUGgcwwauSxAY6pgEJYtAjtZXO0E3Hteco0iFnaYjWjmWALMU5G8umJ4E3bYTq8ktrZxgoQzjvxlLzn4%2BcKyo%2Fnqj12QJTvZykBBXec2bSHAj73%2FLrUGKI4940XmJw5o%2Be4j0itfRtiSa87bxENaGOK0p6IvV4XOLo3px3pA8gTJ%2BU293ILz0Y%2F0ogRDd4zyJ9U5y6Kq7ZcrrgN8wONhqG4pvjZk5Gm2fpHQd6YZYUrW32&X-Amz-Signature=9c26222fb0bcf5fc5ab7ac7425c215dc8be4797e04d88720cc70f7b975770226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
