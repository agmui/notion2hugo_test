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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIVK2UFO%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGZ%2BEJJ2%2BsWkAoK4CoBNbVfh7BieUyaEDA3Et%2BEQte3cAiAnjT3wrsbEKYFiI99VHmqj2stieh0sEQwM34Q911tobir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMzpM2dLiT4QWFRwRyKtwDmRlmd1QIxI9nkxWGITiDoXFf%2FiGehFaMy9Ap5jvveF%2Fq9XbuMkaeiKazWxhicfFSPu6Fn4jIvo8JbGuk4BXmkpHfGigPel%2BLylo4s4%2BouuEkdFmt8gUIcRLz2vQL8HJbDaPHTo032sxEqpwVWbdc3g%2BMQ9U2NGamGSJ%2FkA5FEJm6giasqz3Ybc9hIa3mYN2BI2FBdIoEBcA7SCtP0wuiGM3eq9JqypekVBr2vgKZMWQsQPEUwg0t5BoA7FAH7m59%2BxtIMR5eg1zZ5QH%2BACT6CBeUb90qyh7JKU%2BNatoOqfjQ%2Bctp9NCDi4nGmAFCb7Ft69SAK6gYFM%2BexPbh8E60vVtLXMWL1L32HCEZAMhbWmnSqLel%2Fy%2FpPO2AnnQtzKgD8D720BrrtCYcwfCVUyZ3ebh%2BlwxSoOKtKXmdQM7igNraUkacx3fiIEb5x1OIV2GVTDnzeUL%2B8jZwU%2F9%2BDmIwZHpoCF4jM%2B61AaPJS%2B%2Fpq6cXvyCNvbFfWkwastzsIScxiqaQw%2Bwl2Fk6esyIW7jR4XjJ9rb5dAwpefCbrBJYwp9I%2FIxOZp7Qeo8WY0ljS8e6uJYcXwVarwfGOCE9%2BSjjd1fEJmkZI%2BHMMJLWZeJIVTABhToobaxSVMeNqYYwm%2FGMvQY6pgHYf9P9mrBEOBygfuuVkQT36uOfeSjuI5tt%2FyQxBqIiX%2BHTv80qe7hdl2uaAN%2B4CQ3t4uC8KLqaNWYXlsVSzrvm4gzyuMqQEfxb%2B7B7SLtyQToK%2BsjWUils8L9nkhSQ3oUcugZ5aOC7VjO7Oh2qf%2FZziETo4LbD469MJWMsD8x2abNjjHxn0s%2F0aS97Mw12810s%2B7WM50l9%2BQcp8qfbDm%2FFvFWBlVjI&X-Amz-Signature=be028bc14b7698fd42dd9a9eecb1e14a03e0fe4cfa886fb136b5d4f813b0ef3d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIVK2UFO%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGZ%2BEJJ2%2BsWkAoK4CoBNbVfh7BieUyaEDA3Et%2BEQte3cAiAnjT3wrsbEKYFiI99VHmqj2stieh0sEQwM34Q911tobir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMzpM2dLiT4QWFRwRyKtwDmRlmd1QIxI9nkxWGITiDoXFf%2FiGehFaMy9Ap5jvveF%2Fq9XbuMkaeiKazWxhicfFSPu6Fn4jIvo8JbGuk4BXmkpHfGigPel%2BLylo4s4%2BouuEkdFmt8gUIcRLz2vQL8HJbDaPHTo032sxEqpwVWbdc3g%2BMQ9U2NGamGSJ%2FkA5FEJm6giasqz3Ybc9hIa3mYN2BI2FBdIoEBcA7SCtP0wuiGM3eq9JqypekVBr2vgKZMWQsQPEUwg0t5BoA7FAH7m59%2BxtIMR5eg1zZ5QH%2BACT6CBeUb90qyh7JKU%2BNatoOqfjQ%2Bctp9NCDi4nGmAFCb7Ft69SAK6gYFM%2BexPbh8E60vVtLXMWL1L32HCEZAMhbWmnSqLel%2Fy%2FpPO2AnnQtzKgD8D720BrrtCYcwfCVUyZ3ebh%2BlwxSoOKtKXmdQM7igNraUkacx3fiIEb5x1OIV2GVTDnzeUL%2B8jZwU%2F9%2BDmIwZHpoCF4jM%2B61AaPJS%2B%2Fpq6cXvyCNvbFfWkwastzsIScxiqaQw%2Bwl2Fk6esyIW7jR4XjJ9rb5dAwpefCbrBJYwp9I%2FIxOZp7Qeo8WY0ljS8e6uJYcXwVarwfGOCE9%2BSjjd1fEJmkZI%2BHMMJLWZeJIVTABhToobaxSVMeNqYYwm%2FGMvQY6pgHYf9P9mrBEOBygfuuVkQT36uOfeSjuI5tt%2FyQxBqIiX%2BHTv80qe7hdl2uaAN%2B4CQ3t4uC8KLqaNWYXlsVSzrvm4gzyuMqQEfxb%2B7B7SLtyQToK%2BsjWUils8L9nkhSQ3oUcugZ5aOC7VjO7Oh2qf%2FZziETo4LbD469MJWMsD8x2abNjjHxn0s%2F0aS97Mw12810s%2B7WM50l9%2BQcp8qfbDm%2FFvFWBlVjI&X-Amz-Signature=101d35876ad18ef7b4661e5080cf63de8074fde9d34597ffbabd23f379d24ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
