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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7IGKBG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBukxxNKafqDTaLPaDlLVUcuJzOzVtZL8s%2FLrGCXZLRMAiB5xBrDToZrS%2FIBAxw%2Be3sPb2MoReIEvBMGKxb%2B5cBiJiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIlt9Ua6%2FsG9fcToWKtwDvX1lW6BZ%2BnparolQ%2FjjvNsIshK8azQMpu%2FhIzahvAbNB0oaNlDFJ%2FHfqOzaWVaPGXWUgAQN2o2BlyX3CFYuF3NrWwGxhEzl1cB2Xd7Eh%2Fzgoe7Zv9Pu%2Bd5lQwDzlLCxzpQOcbzRnlBYwa4EmAB5jzOs7e0jWtz093z9qIGfNy5WlDlPQyd3NfyZY2CHC1NolFKWBsEDiXaEYC07b6gm0Q%2BY5CjpLYRZvCklX9uHFcZFQcyW0SpB5x%2BceFoYteTsVo%2BxWxxQmDcsSKoqClCtogSHyzIVh0vb7q86JveNlS6nvKjeEbkadAD%2FnNOp%2BMbPg9aGObelE9EbQ9odYmaD7NLb558YGgKq59ujY7qlPki%2F7rxkB9X%2FAKZC5iHcfCwZehey%2BQmdWPbUSFrh%2FpXGLLUTUtDThT%2FizMcTve3WphrzoVnPfSqEUbnq9ZsGWGNEcZJcsIKCS0VsD1evrzhTfss%2FdlQNMhS6bk%2F9wOwmWX3j14At2EVKbPDaTwtaU03OIQmZyAVmDsxSQ2YTJw1zFMO3Uncs2dBoEzOG4q73uPJLKUqSLxcKoE9Qmt27uvrIoNpKrRH48ZhTiIqr1gUZBHlLysrgkmG28GCasH8M0kxkcUdcMGopsoBdFnEcwl%2F6ywQY6pgF8ufAuvU3OBz2wQbfeEUdwpO4lcO4NGlq6u%2F4ISvxKAqFTvjD3gBKQZuJWx7k7pWnq4sA6DyBy2TFr%2BgaCpCbYxIfAbsA5UQ52T0ZoGLus15xmaCTcZytLyXkcpCzet%2FpdJlcvkK1Wvt6AZMx0XjwhSqmPMQm9S8N6vX9n8dGKp%2Bm3375ap1t99XrbJTFSeztZ%2BXIYTbmCoeELTkAH%2BV%2FY62ZOyFZe&X-Amz-Signature=55e36c49702786b9d50730c816795de6ba6c96ca5f6bdbd60e0b371f2e2cd4c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7IGKBG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBukxxNKafqDTaLPaDlLVUcuJzOzVtZL8s%2FLrGCXZLRMAiB5xBrDToZrS%2FIBAxw%2Be3sPb2MoReIEvBMGKxb%2B5cBiJiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIlt9Ua6%2FsG9fcToWKtwDvX1lW6BZ%2BnparolQ%2FjjvNsIshK8azQMpu%2FhIzahvAbNB0oaNlDFJ%2FHfqOzaWVaPGXWUgAQN2o2BlyX3CFYuF3NrWwGxhEzl1cB2Xd7Eh%2Fzgoe7Zv9Pu%2Bd5lQwDzlLCxzpQOcbzRnlBYwa4EmAB5jzOs7e0jWtz093z9qIGfNy5WlDlPQyd3NfyZY2CHC1NolFKWBsEDiXaEYC07b6gm0Q%2BY5CjpLYRZvCklX9uHFcZFQcyW0SpB5x%2BceFoYteTsVo%2BxWxxQmDcsSKoqClCtogSHyzIVh0vb7q86JveNlS6nvKjeEbkadAD%2FnNOp%2BMbPg9aGObelE9EbQ9odYmaD7NLb558YGgKq59ujY7qlPki%2F7rxkB9X%2FAKZC5iHcfCwZehey%2BQmdWPbUSFrh%2FpXGLLUTUtDThT%2FizMcTve3WphrzoVnPfSqEUbnq9ZsGWGNEcZJcsIKCS0VsD1evrzhTfss%2FdlQNMhS6bk%2F9wOwmWX3j14At2EVKbPDaTwtaU03OIQmZyAVmDsxSQ2YTJw1zFMO3Uncs2dBoEzOG4q73uPJLKUqSLxcKoE9Qmt27uvrIoNpKrRH48ZhTiIqr1gUZBHlLysrgkmG28GCasH8M0kxkcUdcMGopsoBdFnEcwl%2F6ywQY6pgF8ufAuvU3OBz2wQbfeEUdwpO4lcO4NGlq6u%2F4ISvxKAqFTvjD3gBKQZuJWx7k7pWnq4sA6DyBy2TFr%2BgaCpCbYxIfAbsA5UQ52T0ZoGLus15xmaCTcZytLyXkcpCzet%2FpdJlcvkK1Wvt6AZMx0XjwhSqmPMQm9S8N6vX9n8dGKp%2Bm3375ap1t99XrbJTFSeztZ%2BXIYTbmCoeELTkAH%2BV%2FY62ZOyFZe&X-Amz-Signature=6522e6f76d4e7e0a57ae95b6862ab6e8bf7f6e21d8450474601730736d0fc9db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
