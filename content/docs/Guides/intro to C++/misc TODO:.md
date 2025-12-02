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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYZYLV4%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAuxZfdy3BQYbnOyY8MajWspgZSh3nbckl3kw1DyWqUOAiAEK6T3ZKL8i3kT72AQK2u23MHL4pz3t3%2FEZYObDRX63Cr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMmVvrhNWQJRh3VLPhKtwDJvyiOAAHuNGmBFLFMoz0gtZYONmMjypAMe3KymEKRF27X%2F1%2BZ49KTajR28JUKbH483XvYtiGvWUMGhxDAnJs7tlTRdjfvwkh%2FDWhxlXBep2%2F1gMFxRBZfzwZoAA0fGWMGuj8eL%2BOXdB6zzUN%2FrSOxCW6AI2nt%2B34hJQtWUzbyjwMioAd3XJnXqEGWI76SIG57xLXbdQclMd8iBllJuHD4ZYNhcBax9es%2BPyYY6WYtlsIgi0WAjJIe5u1Ru58N4E6%2B5pNiCS3n2PzemABq2CNjupBI4i6we2nPlV5xwKwz6JDaAlWZGms3geu7x718CnkL7G31tTR0Xpx0lW4dgbVPMEugQCVdY7ZPicyYUIeQZWx603pnYQhAstl9nDQez62lcyvehmuCsFjQVF5f25dXD%2FOvAtpGnwdrgucVnSmgfvR%2F2%2BWI63UYvdnsewj5WPy6v8cQsOZOj%2BhBXiRhumtD4MPSBreQ2UJTiHueww%2FTG%2FmJKFFOytWR0Gnf8QmPiGV4f8%2B%2FIYYjieVJOtEP5wDRQc1TaCkOGgO9U9BARDUvXw31O32G7056dmDaFvHLACAwGoS6c3MNp1ytGKohE2pc%2FPz0kMdcDsyC1GxViv7Yio1XLkDzpRNI%2BGHy3ww5N%2B4yQY6pgH40n8vJJ1KKAh9SBE1UAu33g0S%2BnjYr0Hl7hF0Ruxtso9zEx4oCfSNi6I443fIdPNQq2uwWFf0qofeDR19eibgjfnJyQNzQJFT2yVwiKgj33kF3tuT26o5aGMsNxqKnLOKzCNH1l7U26uFUIvWDA7rrSi9uWdWqoFi3ku0x1e2g7yPaQ9ioCY4tlkeS%2FP6m8AIozOKgucoqj0XL%2BGrn7HpxyvA8XTm&X-Amz-Signature=577a9decd3eae9525451272f0f22084f74ae2c169529165d2028606e4ce9f4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYZYLV4%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAuxZfdy3BQYbnOyY8MajWspgZSh3nbckl3kw1DyWqUOAiAEK6T3ZKL8i3kT72AQK2u23MHL4pz3t3%2FEZYObDRX63Cr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMmVvrhNWQJRh3VLPhKtwDJvyiOAAHuNGmBFLFMoz0gtZYONmMjypAMe3KymEKRF27X%2F1%2BZ49KTajR28JUKbH483XvYtiGvWUMGhxDAnJs7tlTRdjfvwkh%2FDWhxlXBep2%2F1gMFxRBZfzwZoAA0fGWMGuj8eL%2BOXdB6zzUN%2FrSOxCW6AI2nt%2B34hJQtWUzbyjwMioAd3XJnXqEGWI76SIG57xLXbdQclMd8iBllJuHD4ZYNhcBax9es%2BPyYY6WYtlsIgi0WAjJIe5u1Ru58N4E6%2B5pNiCS3n2PzemABq2CNjupBI4i6we2nPlV5xwKwz6JDaAlWZGms3geu7x718CnkL7G31tTR0Xpx0lW4dgbVPMEugQCVdY7ZPicyYUIeQZWx603pnYQhAstl9nDQez62lcyvehmuCsFjQVF5f25dXD%2FOvAtpGnwdrgucVnSmgfvR%2F2%2BWI63UYvdnsewj5WPy6v8cQsOZOj%2BhBXiRhumtD4MPSBreQ2UJTiHueww%2FTG%2FmJKFFOytWR0Gnf8QmPiGV4f8%2B%2FIYYjieVJOtEP5wDRQc1TaCkOGgO9U9BARDUvXw31O32G7056dmDaFvHLACAwGoS6c3MNp1ytGKohE2pc%2FPz0kMdcDsyC1GxViv7Yio1XLkDzpRNI%2BGHy3ww5N%2B4yQY6pgH40n8vJJ1KKAh9SBE1UAu33g0S%2BnjYr0Hl7hF0Ruxtso9zEx4oCfSNi6I443fIdPNQq2uwWFf0qofeDR19eibgjfnJyQNzQJFT2yVwiKgj33kF3tuT26o5aGMsNxqKnLOKzCNH1l7U26uFUIvWDA7rrSi9uWdWqoFi3ku0x1e2g7yPaQ9ioCY4tlkeS%2FP6m8AIozOKgucoqj0XL%2BGrn7HpxyvA8XTm&X-Amz-Signature=9902b8062b4e2a41a677aa80993d01e42e308c17fa7b9c1f96ce62deb41bee47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
