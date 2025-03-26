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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTHK3OU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH985oZc61ZQSYpGifYOcLg7QeHQEGxlU6amC9srqstMAiEAz7VDZO4hL2TI080VWpSqBXm85%2FJiK6dKozdN4noRpVQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOvjAv91qOt4YuXAvCrcA7cNkKMxNG4fTkSZRVKEj%2BfUmImYXlki71AbK%2BRDfXB5pUsXOA7RXvKR5IK8DyXDfxWetEIc5HBifV5Wzsxk6PCAfCiA8nDG7UrJw5%2BzBoglSiPeXyIK6KW800SpHSx9U0cKiOuOL8BZAm%2BZHm56nBKfdiWXrvqVEReIasPWw47wxqKAv11AXNBGC0RGUpxSdGIueGDYfUTpdPsBGl7%2BT68oygRWypBEIcWMHOqwk7XSFM6aNxhLHSIOB6QB%2BLxI7HASZbxOEtSe1DA%2B29WLWYYQxWk2nLxW7Uw%2BNcMwlrZ3Bdw6Y7TZzgWhO81E3tken%2Bd27WgZsi7%2BzkkwGHo0fVFO8lcnD%2BeTUAyO9EPW7%2F8j%2BGL7LLXmwf5Y6r11Lir5xjEAfjRnStka4i10MU%2BwaNVd%2Bea5H1dIa1H0SqonT9VTgVAREjVsd0%2BoYrgwCrdsExgQNCZhcVH3WF1mRrTqbGPpnCf2BJfpAumCx7MIg14Mn0TYomADbotkcXix72HhYwynnJr4XTggl%2FmSMgoSgX5ZQjkbgsenqF%2BvESN1b3tIMSpF%2FMIh0ZnQZOC2pXCSLXQpc7m%2F1gfMJj4z9AB2pug8b%2FIVwCgmW8ef6optQvGhpSwOp7JVzKPQQxjZMOLaj78GOqUB9q7Q%2FRpO%2Fo5P4uf6OkXULe6mHfuGkyYizn1BGAmvEhoE4xgz0yb896gsyMDqhFxsH%2Fjyzd8FqmMbQpo5CO5oMcuPomOHMKpVmCVFkST1X%2B4th71Hz%2BqLOQ8iEK3wpmhU%2BOGksJ702EFDUdclSJjNuEHXv9xn61ZifHuiU9BQsoc%2FRQ4RxH1fF%2BXs1G%2Fr2WOJw%2B9mZJeghiro%2BGUFemERj24PLGCo&X-Amz-Signature=017141f9ec100fe25383697d04cef87be0587d1049a753d2f6894f0f65c36497&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTHK3OU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH985oZc61ZQSYpGifYOcLg7QeHQEGxlU6amC9srqstMAiEAz7VDZO4hL2TI080VWpSqBXm85%2FJiK6dKozdN4noRpVQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOvjAv91qOt4YuXAvCrcA7cNkKMxNG4fTkSZRVKEj%2BfUmImYXlki71AbK%2BRDfXB5pUsXOA7RXvKR5IK8DyXDfxWetEIc5HBifV5Wzsxk6PCAfCiA8nDG7UrJw5%2BzBoglSiPeXyIK6KW800SpHSx9U0cKiOuOL8BZAm%2BZHm56nBKfdiWXrvqVEReIasPWw47wxqKAv11AXNBGC0RGUpxSdGIueGDYfUTpdPsBGl7%2BT68oygRWypBEIcWMHOqwk7XSFM6aNxhLHSIOB6QB%2BLxI7HASZbxOEtSe1DA%2B29WLWYYQxWk2nLxW7Uw%2BNcMwlrZ3Bdw6Y7TZzgWhO81E3tken%2Bd27WgZsi7%2BzkkwGHo0fVFO8lcnD%2BeTUAyO9EPW7%2F8j%2BGL7LLXmwf5Y6r11Lir5xjEAfjRnStka4i10MU%2BwaNVd%2Bea5H1dIa1H0SqonT9VTgVAREjVsd0%2BoYrgwCrdsExgQNCZhcVH3WF1mRrTqbGPpnCf2BJfpAumCx7MIg14Mn0TYomADbotkcXix72HhYwynnJr4XTggl%2FmSMgoSgX5ZQjkbgsenqF%2BvESN1b3tIMSpF%2FMIh0ZnQZOC2pXCSLXQpc7m%2F1gfMJj4z9AB2pug8b%2FIVwCgmW8ef6optQvGhpSwOp7JVzKPQQxjZMOLaj78GOqUB9q7Q%2FRpO%2Fo5P4uf6OkXULe6mHfuGkyYizn1BGAmvEhoE4xgz0yb896gsyMDqhFxsH%2Fjyzd8FqmMbQpo5CO5oMcuPomOHMKpVmCVFkST1X%2B4th71Hz%2BqLOQ8iEK3wpmhU%2BOGksJ702EFDUdclSJjNuEHXv9xn61ZifHuiU9BQsoc%2FRQ4RxH1fF%2BXs1G%2Fr2WOJw%2B9mZJeghiro%2BGUFemERj24PLGCo&X-Amz-Signature=5051097d9252c307f9bda355b92557f319d7b4c77a098ac2190b779b0b85b390&X-Amz-SignedHeaders=host&x-id=GetObject)

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
