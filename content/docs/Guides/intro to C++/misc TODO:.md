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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEYBZKK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FX7FWmq6RfxWmKw1bZU7AnGQfyk3sLi0FEjDGMdnxyAIhALGSb11Vn%2F9duVuMDUVNEVfDKWxoi3pkqjGPJq9l0UMQKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpKk%2F70IObD3WIUSkq3ANUnc9qw%2Bl7Svz%2FDgt6HCKAC45KmqiyumT4T3UX%2FDaPvPnq7l%2BOncjH1jmVsxAwNE4F1JZHKtg7LLqioxdwBmPwNZ6ImYmQhuiqypkfNXSUBe3XLs5VVXjBQ1kh3CqbQT4Edn3EzJG841i4ADMOknhAz0OySkN9qGSiVOiLzhGI%2FdxbaKmLjsMw3SjrI1vxgjv8OC%2B0pjBxe4USf3AAxh%2FHrm1wzEEbM0WQq8RPUEfIVTIF%2BODTFbO8gplWY4%2BoJBH%2F9Mn%2F%2BLDifSDR31NCOhCGCtKQMK3n75gRx8Xg%2FlAu76y7PIx0pe2z05zuYGq7djhKLWvcTidMwIaoSxWpqDOZZq7W52pvYnY%2Fi57OZP973hxDUOb2uhgpde%2BT%2FvqaDzFbVTfza4%2BDbBlbXuFNuAkm7fHZjtuc%2FGaSuG%2FV1RhicCqj0pP9aa7kqNa5b0XSPb%2FIwhW%2FKMno1oUskOzYSxJQkuf%2FzCUt1VsVrT9DRxw5eOUI5VExT4FFaAo2JDHr8bUoWjjCI2lp2xfB2UzOOITugpk5dUfpQBa%2B9nP%2FSap0ifNXuOp%2F1XtqmwVm9sE9HlKD3o3defBYeQ01%2BzOjyIMnmt0KRjf6cLUOKw3k%2FhJ8Zw6IPM4etrYQ9mmnhDD9s87CBjqkAdlt2LNkHi9SifZp819nfaMWdEkSE4d5FR7Ctm0hOBVfoBhXU%2BdkMM6takKD4T8zVnov%2BAB7HK6%2BdxBYO9gXDX%2B9YOxsZK4Hm3FQoIXzcPEKdxjpC6R%2BgFV8%2BGsQoDsyn0G2cWjDxnmXkEXlgLV2YfLWt5pE%2BbZB1uCZCXVg4bbzv6buYi7kjpBzy0rM2%2Fz%2BsZXAcT6CJv7YrxOia9YWT25pMaVA&X-Amz-Signature=a07f5ae5a6daf0f16b5176f528f7098f31c48ae9199b25d88f0ae09a15d41195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEYBZKK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FX7FWmq6RfxWmKw1bZU7AnGQfyk3sLi0FEjDGMdnxyAIhALGSb11Vn%2F9duVuMDUVNEVfDKWxoi3pkqjGPJq9l0UMQKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpKk%2F70IObD3WIUSkq3ANUnc9qw%2Bl7Svz%2FDgt6HCKAC45KmqiyumT4T3UX%2FDaPvPnq7l%2BOncjH1jmVsxAwNE4F1JZHKtg7LLqioxdwBmPwNZ6ImYmQhuiqypkfNXSUBe3XLs5VVXjBQ1kh3CqbQT4Edn3EzJG841i4ADMOknhAz0OySkN9qGSiVOiLzhGI%2FdxbaKmLjsMw3SjrI1vxgjv8OC%2B0pjBxe4USf3AAxh%2FHrm1wzEEbM0WQq8RPUEfIVTIF%2BODTFbO8gplWY4%2BoJBH%2F9Mn%2F%2BLDifSDR31NCOhCGCtKQMK3n75gRx8Xg%2FlAu76y7PIx0pe2z05zuYGq7djhKLWvcTidMwIaoSxWpqDOZZq7W52pvYnY%2Fi57OZP973hxDUOb2uhgpde%2BT%2FvqaDzFbVTfza4%2BDbBlbXuFNuAkm7fHZjtuc%2FGaSuG%2FV1RhicCqj0pP9aa7kqNa5b0XSPb%2FIwhW%2FKMno1oUskOzYSxJQkuf%2FzCUt1VsVrT9DRxw5eOUI5VExT4FFaAo2JDHr8bUoWjjCI2lp2xfB2UzOOITugpk5dUfpQBa%2B9nP%2FSap0ifNXuOp%2F1XtqmwVm9sE9HlKD3o3defBYeQ01%2BzOjyIMnmt0KRjf6cLUOKw3k%2FhJ8Zw6IPM4etrYQ9mmnhDD9s87CBjqkAdlt2LNkHi9SifZp819nfaMWdEkSE4d5FR7Ctm0hOBVfoBhXU%2BdkMM6takKD4T8zVnov%2BAB7HK6%2BdxBYO9gXDX%2B9YOxsZK4Hm3FQoIXzcPEKdxjpC6R%2BgFV8%2BGsQoDsyn0G2cWjDxnmXkEXlgLV2YfLWt5pE%2BbZB1uCZCXVg4bbzv6buYi7kjpBzy0rM2%2Fz%2BsZXAcT6CJv7YrxOia9YWT25pMaVA&X-Amz-Signature=0fe2f2a8586be30434dc424b84592cbace4fa23c15f84ec5592145d842108c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
