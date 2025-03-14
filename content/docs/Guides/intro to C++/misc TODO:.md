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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTMWFGM7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa3FqO11jxfZGcIee%2BOQ9RzbpmUTGhbCT2q5y0%2Bt2n6wIhAKlLDX%2B9fPO%2F45CJxKjP3rvrqsgehDBa9R3dZgWfu4FWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIl4eRO3A1X9S1pUsq3AMJ%2FGaUadU0GbYfD2C1Uu%2BF7qZmvkfsGWhS4PeAFj2K2AyNav77ibS7q1OLIG%2B1sJv3w4bixvTUu9jIXnBsSHP3qIiWgJcxKsvxsu3UJ49C4SR9e1FYAVLQSenefGvYa0KlCe1P8tPbhYxJfMVzAwlz4j47dJjBzNIavjC8BS0FEAWJ3RZJSkRxPsIeDZKppZmiw5uiWyjfKsWPAOJTsUHliVEihlyWhFzrwq1IvA9lvgR7Mk66sx4hRmsgRA%2F0Bpz6sgpE6UlMlTUhrHXOfXlt16BusG24MDiq0zcsZ3ojrxuFsiwUs6zBvTACIcIYPDweIFq1LgpOfI3JFAUY4HX6pxpF4VWKe4xEFBVpxksDSSNb5%2FGISCkp5B2eYJCpmT6pZA%2BLRQv55TVpC1AHHNnIxpHeaHTgga8RQxpJ2mzaXadojw9ROyQSBZMiuQ6Q21svCPrJ90Gfiqv%2B3OIc1IOVkkr0a7sv7lvNP9AngIhYlYCUVcWQGuQyp%2BcQ7xMs6043bM3dHW3D%2BuOAIZYXCYb5vLUDPWL9WDD5ZD17D1X6DQP0qN%2FoCjhdxoqtoMEYiUoxTDmNITZsQIe4l2zQv8d7hPBr21gJRrqsobppM2qXcvvuA8Cue1Qsbw7emTDu%2BNC%2BBjqkAVQNWBFTtlJpew1KCPzkM2MImY%2BB5NreWROaGKwGvuhurjnAzClNlz1d3uRArzrAGAPS5SOqGKP3QM%2F%2FAj1tFQUY40b1zI%2F%2B%2BvWsuif2mjjU2e8g%2BBrlKkovJ47emdB1%2FPAMX9%2BiOHP6DAc7piUclLYiHAwIxDOkppl2L8Y5ymkuDsFGlqIlLawYP992SxK471kWUQcVY7pu5JxtJQXD0m5vfQOX&X-Amz-Signature=5551706e729cb20b48dbae243ce35313561a679972f2bcfaad4716a2accf22e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTMWFGM7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa3FqO11jxfZGcIee%2BOQ9RzbpmUTGhbCT2q5y0%2Bt2n6wIhAKlLDX%2B9fPO%2F45CJxKjP3rvrqsgehDBa9R3dZgWfu4FWKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIl4eRO3A1X9S1pUsq3AMJ%2FGaUadU0GbYfD2C1Uu%2BF7qZmvkfsGWhS4PeAFj2K2AyNav77ibS7q1OLIG%2B1sJv3w4bixvTUu9jIXnBsSHP3qIiWgJcxKsvxsu3UJ49C4SR9e1FYAVLQSenefGvYa0KlCe1P8tPbhYxJfMVzAwlz4j47dJjBzNIavjC8BS0FEAWJ3RZJSkRxPsIeDZKppZmiw5uiWyjfKsWPAOJTsUHliVEihlyWhFzrwq1IvA9lvgR7Mk66sx4hRmsgRA%2F0Bpz6sgpE6UlMlTUhrHXOfXlt16BusG24MDiq0zcsZ3ojrxuFsiwUs6zBvTACIcIYPDweIFq1LgpOfI3JFAUY4HX6pxpF4VWKe4xEFBVpxksDSSNb5%2FGISCkp5B2eYJCpmT6pZA%2BLRQv55TVpC1AHHNnIxpHeaHTgga8RQxpJ2mzaXadojw9ROyQSBZMiuQ6Q21svCPrJ90Gfiqv%2B3OIc1IOVkkr0a7sv7lvNP9AngIhYlYCUVcWQGuQyp%2BcQ7xMs6043bM3dHW3D%2BuOAIZYXCYb5vLUDPWL9WDD5ZD17D1X6DQP0qN%2FoCjhdxoqtoMEYiUoxTDmNITZsQIe4l2zQv8d7hPBr21gJRrqsobppM2qXcvvuA8Cue1Qsbw7emTDu%2BNC%2BBjqkAVQNWBFTtlJpew1KCPzkM2MImY%2BB5NreWROaGKwGvuhurjnAzClNlz1d3uRArzrAGAPS5SOqGKP3QM%2F%2FAj1tFQUY40b1zI%2F%2B%2BvWsuif2mjjU2e8g%2BBrlKkovJ47emdB1%2FPAMX9%2BiOHP6DAc7piUclLYiHAwIxDOkppl2L8Y5ymkuDsFGlqIlLawYP992SxK471kWUQcVY7pu5JxtJQXD0m5vfQOX&X-Amz-Signature=9c60e68598f37a54a984f439625d52b621804e9f984895b9a4237535d3648f43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
