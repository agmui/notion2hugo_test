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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LRYLKQJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEkDIFxxkyG05afqdJ0A35aw9B66jbhR8qKPp6cJ%2F9xkAiBhkFIaVcRFnlEo9NDlh59Jcocj9edXXcPb%2BAuyZpc0eSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMleZXOtotdmmJll7vKtwDxlh4XYDExXIUACxHKp5%2BqJQCOluxHSKt%2FihOF7htWhbj6EtafxGDmck9APAUXd%2BFOpeIDug%2F7e9PTtRvbNCPm97EDMQURZJFeicrHy8z%2FEj1aKpQXKLaK%2F6CqK%2B8yQW7vli221pKBrUCIq3jKr1P%2BnqlDy0h0hYm9FtqkGRU6%2BhNzeGVBYWfJ0yW5amc%2FLcCRYWFgDGyrCnL9THMjqjwZPQsiQoIB%2FYYdV%2Bvw7xn2dT3tPOpFVY1ULdQfeCeaUq7j4Nhx6evR1xpD%2Fwo4WDg2IVdEAOP5DkIQZBvtggcW6tRubkgPyv6%2Fs1WOgOv7OdC8qOKJX7TgnM0LF7mBqfP1oGcu07RkvcEOAfNsomVDh0n9fyrLvIAoT9VvR6j8MSEoujob%2BHmfd%2FkztgsGwBRaoy60ZXy%2FRhOS4WFKtNWUDvfJ%2F8xVcnAM%2B3o6s1MZVNY9UUibEeJ42JPjKp3MbOSjutfxrK0SwHEy%2B36r%2FLXd1MfS8WsM85ASTQcofhJ2M%2BaXYN35xVA7XgW60UR0ojeTVeY4okTOf1HXbio%2B8T7ubO6AK21Nhjq1auZwi3v1Bx5sfCWFad3ZBkCXXMPjN58Le%2FQVtdD3CX3Kvm%2BM1PszXF3gbGradXY1L8s6pgwhabz0AY6pgEFvXxw02rjkm2i0jAZKVhqOI9DmbThc77O3pDy32FBa9ybFFSRHSG9H0AaANZV0Uj7FXRXH0RdpX9Bf0XBZx6Qqh2XHNyh9630UBukdkOGFvcuFInA3iWYkj6PwSgPjjtDsH9ZGhJ7nXMpNdmJj0OXl28q2obbrtlpp3rIYeVhCff9LVn63UcPe%2Bh%2F016QDnpHqsn390RXg9W%2B4%2FgtZtECd%2FCV3v3h&X-Amz-Signature=13c1c06607d9fd1fe475590a02cab37e0353c71ad106e63fc4f312346587127e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LRYLKQJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEkDIFxxkyG05afqdJ0A35aw9B66jbhR8qKPp6cJ%2F9xkAiBhkFIaVcRFnlEo9NDlh59Jcocj9edXXcPb%2BAuyZpc0eSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMleZXOtotdmmJll7vKtwDxlh4XYDExXIUACxHKp5%2BqJQCOluxHSKt%2FihOF7htWhbj6EtafxGDmck9APAUXd%2BFOpeIDug%2F7e9PTtRvbNCPm97EDMQURZJFeicrHy8z%2FEj1aKpQXKLaK%2F6CqK%2B8yQW7vli221pKBrUCIq3jKr1P%2BnqlDy0h0hYm9FtqkGRU6%2BhNzeGVBYWfJ0yW5amc%2FLcCRYWFgDGyrCnL9THMjqjwZPQsiQoIB%2FYYdV%2Bvw7xn2dT3tPOpFVY1ULdQfeCeaUq7j4Nhx6evR1xpD%2Fwo4WDg2IVdEAOP5DkIQZBvtggcW6tRubkgPyv6%2Fs1WOgOv7OdC8qOKJX7TgnM0LF7mBqfP1oGcu07RkvcEOAfNsomVDh0n9fyrLvIAoT9VvR6j8MSEoujob%2BHmfd%2FkztgsGwBRaoy60ZXy%2FRhOS4WFKtNWUDvfJ%2F8xVcnAM%2B3o6s1MZVNY9UUibEeJ42JPjKp3MbOSjutfxrK0SwHEy%2B36r%2FLXd1MfS8WsM85ASTQcofhJ2M%2BaXYN35xVA7XgW60UR0ojeTVeY4okTOf1HXbio%2B8T7ubO6AK21Nhjq1auZwi3v1Bx5sfCWFad3ZBkCXXMPjN58Le%2FQVtdD3CX3Kvm%2BM1PszXF3gbGradXY1L8s6pgwhabz0AY6pgEFvXxw02rjkm2i0jAZKVhqOI9DmbThc77O3pDy32FBa9ybFFSRHSG9H0AaANZV0Uj7FXRXH0RdpX9Bf0XBZx6Qqh2XHNyh9630UBukdkOGFvcuFInA3iWYkj6PwSgPjjtDsH9ZGhJ7nXMpNdmJj0OXl28q2obbrtlpp3rIYeVhCff9LVn63UcPe%2Bh%2F016QDnpHqsn390RXg9W%2B4%2FgtZtECd%2FCV3v3h&X-Amz-Signature=bacaaabc88216e05d7a30087cc8730a00da2fbd650f929c2401db42e1377d64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
