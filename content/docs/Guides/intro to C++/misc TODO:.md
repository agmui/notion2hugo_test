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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBYPXBNN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcemZECqD4kQessHx90nPYMlrnJWRJTCjWv5enT6W%2FmgIhAPwC2wXaUwqaZ9Njc%2FqH6nmm%2BwJ9e4cx4TansH7Q5txaKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa07oYDP%2FnCizGWU0q3ANG9qZbZxAsB7uBle2olnwhZCCPwhbZmsqWHPXhkc0XtjWBnzI7EOk8xWxIT7SWHkEvuaEWFQ9%2BCSEMQ18rwPJfcXTRfI5Us2wV3tNQE2QXndwxWtC8%2B6fNQ8qeo8AW6dUj9Wzru%2BM4apVVoQGp7gBF3eZZbJrJkW8d4WIimy10pC0FJXJFScdNojfu4bJsmDsyW81ztpErm8I1MXkV7k42V1XJYYPMT6ghSmSy1DIFsayG%2Fgdv%2FyDzWi4GQR%2FnLOWNsxEEyxO2stfQULCpV30E41ml27NVMqH8dtJ37mW1Cyz2q%2FGIQgleJM8SbgWVfKrOZv1R6IgtIHCTVi4xYFAZTj1CowiOOzVXEieYDTLKqLHUc0syIrrCS9tOP3DF0xM4pKe710cEbvegqKtItwYf4KVfuPgEd0GfPxvOaAQHDVOtjcNPVYs0W0ka67Z3B9ZNIzqmlh6pupSNV5PFeP2VM9IdMxkuWrV%2FUsMDht7IYN70ecCMtxzxNa2eJpnHMTgSWTScOs8d0LmZ9%2B2wSZxYYuhsRq7Y3dKKJQ8mBPqe3Zq4ZtYjzP1%2BMmUUtiMFkkuTTU16aJ6zyuZI6wHClVgIKt0JDZz2leSUmelvnDV8wKO1IVz%2FQVYeg2FXezDgxvi8BjqkAWq39QuRHx9P4IsnDatffnZtnzNvSx42S2FJXNmPWKU2Bz9MioIqKn%2BR5v8iu7%2BbVQfUc893A2VUN8vidS676a2HHJOt9b%2BffUTSsaOLF1WC%2FrQkvGi6bp%2FP1JeEzHfrMxcF4Tn0O0aUL2js7wd0SEvjDu7auM1gQeaiuIBlZAEWT2dwDGgAkRecM1WPZyE1%2BpW045eC0SogpRzJgvyDM5Kc%2FJYh&X-Amz-Signature=3daf2aaf54a0c2299b4e82e924f75967656e15ba1ec2da85665907881d1521c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBYPXBNN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcemZECqD4kQessHx90nPYMlrnJWRJTCjWv5enT6W%2FmgIhAPwC2wXaUwqaZ9Njc%2FqH6nmm%2BwJ9e4cx4TansH7Q5txaKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa07oYDP%2FnCizGWU0q3ANG9qZbZxAsB7uBle2olnwhZCCPwhbZmsqWHPXhkc0XtjWBnzI7EOk8xWxIT7SWHkEvuaEWFQ9%2BCSEMQ18rwPJfcXTRfI5Us2wV3tNQE2QXndwxWtC8%2B6fNQ8qeo8AW6dUj9Wzru%2BM4apVVoQGp7gBF3eZZbJrJkW8d4WIimy10pC0FJXJFScdNojfu4bJsmDsyW81ztpErm8I1MXkV7k42V1XJYYPMT6ghSmSy1DIFsayG%2Fgdv%2FyDzWi4GQR%2FnLOWNsxEEyxO2stfQULCpV30E41ml27NVMqH8dtJ37mW1Cyz2q%2FGIQgleJM8SbgWVfKrOZv1R6IgtIHCTVi4xYFAZTj1CowiOOzVXEieYDTLKqLHUc0syIrrCS9tOP3DF0xM4pKe710cEbvegqKtItwYf4KVfuPgEd0GfPxvOaAQHDVOtjcNPVYs0W0ka67Z3B9ZNIzqmlh6pupSNV5PFeP2VM9IdMxkuWrV%2FUsMDht7IYN70ecCMtxzxNa2eJpnHMTgSWTScOs8d0LmZ9%2B2wSZxYYuhsRq7Y3dKKJQ8mBPqe3Zq4ZtYjzP1%2BMmUUtiMFkkuTTU16aJ6zyuZI6wHClVgIKt0JDZz2leSUmelvnDV8wKO1IVz%2FQVYeg2FXezDgxvi8BjqkAWq39QuRHx9P4IsnDatffnZtnzNvSx42S2FJXNmPWKU2Bz9MioIqKn%2BR5v8iu7%2BbVQfUc893A2VUN8vidS676a2HHJOt9b%2BffUTSsaOLF1WC%2FrQkvGi6bp%2FP1JeEzHfrMxcF4Tn0O0aUL2js7wd0SEvjDu7auM1gQeaiuIBlZAEWT2dwDGgAkRecM1WPZyE1%2BpW045eC0SogpRzJgvyDM5Kc%2FJYh&X-Amz-Signature=d2e7000f7e09c56b56bc5aea44d496e414a1be879fcb4387889ab66111661fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
