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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3NX6II%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCeMMvymv1hE83M1FrNl7IaDsoY7AHVB8URBefxRVbaQAIgEEiZJotZl2mkmZ%2FCwpYivREhXj5x4zdZFgKx0ft7OVsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCk6PGpPdj1AjEPnircAxj%2BURUe9kUwIQUsOdl4ycWM8IUViOde1V21bAcKnGJV6YIJw%2F7XzJ4lR1egYwG7G%2ByutmfjJALKl9BKzTKVQnS46B55nlkj7erhLw2DwK%2B4XM3rxxM1qUObbVjKPw0H%2Ffume%2B5kMn66rrCTBDiCMIzdEw92Qh3g8cIzzoj%2B4uJeMb5APnONsT1Fw4ILk1D89yurHxJE6RSso56MhfiXvWDL4dtDmzdzbNYxkzc7QneoCZyeJeJfHBzuEjdG9AiEQ6bD%2Fz%2FQeyhS7X1dHZwUSBs5sw9Q7Rwb5czNmTdjX0ui%2FBmVBVhWG3jgX7ACMHm3nmse%2BhsDXSk%2BlfKIfRXkiRhWJS6yMjXNuVgSH9mXyVXIqru58rUJHEs8O7FZA3HlFC7Ho%2FmPNf7GO1wsdNrlV5C7Oz5vmyjjqdDvQPbGMki34a8dZOaAe5sh6NbCPWufWw0NNwAU72FM1CgPRrfJ%2F6Plc8HL9Yyr2dugo2kjL2%2Bi2CEhfa5%2BxXp2VDlxP3dMlMjWSiPlPorjilP8GsRfytMkZQ15tceOzifdXAgS2%2BJrJt6E6ypgKtaTh0mBJApL6o2IFoKU7JD93ppDpIiLYWd3Ccl66N01jCTd7NSu2q5hI1QXgbdcnjpCUIJIMNz2%2Br4GOqUBP2ZxePHFt3D3oJnpq6UynXmE5k%2BSJdViTHLZyCKC7ymahX9vSZsCIqSXJqMXWYvO1He%2BwV%2BJr28ON9GUO2LA%2FRmF4eQjaowJeERFGFByIoYlLVPrUsFTUryN%2Fnin3SIduN1DY%2FEl3jL2TxuC%2BNcyFqPiyx06mXfNL%2F3Tste32iQIwtuBksotjGMtwqTEAAjtW7Ei0d0AZBoWl9GuCcIq1kjEtBTX&X-Amz-Signature=b51a37dd646d4bf65e7600f7083263c3e6fcb4d6ec29945e78df09351fa2a004&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3NX6II%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCeMMvymv1hE83M1FrNl7IaDsoY7AHVB8URBefxRVbaQAIgEEiZJotZl2mkmZ%2FCwpYivREhXj5x4zdZFgKx0ft7OVsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCk6PGpPdj1AjEPnircAxj%2BURUe9kUwIQUsOdl4ycWM8IUViOde1V21bAcKnGJV6YIJw%2F7XzJ4lR1egYwG7G%2ByutmfjJALKl9BKzTKVQnS46B55nlkj7erhLw2DwK%2B4XM3rxxM1qUObbVjKPw0H%2Ffume%2B5kMn66rrCTBDiCMIzdEw92Qh3g8cIzzoj%2B4uJeMb5APnONsT1Fw4ILk1D89yurHxJE6RSso56MhfiXvWDL4dtDmzdzbNYxkzc7QneoCZyeJeJfHBzuEjdG9AiEQ6bD%2Fz%2FQeyhS7X1dHZwUSBs5sw9Q7Rwb5czNmTdjX0ui%2FBmVBVhWG3jgX7ACMHm3nmse%2BhsDXSk%2BlfKIfRXkiRhWJS6yMjXNuVgSH9mXyVXIqru58rUJHEs8O7FZA3HlFC7Ho%2FmPNf7GO1wsdNrlV5C7Oz5vmyjjqdDvQPbGMki34a8dZOaAe5sh6NbCPWufWw0NNwAU72FM1CgPRrfJ%2F6Plc8HL9Yyr2dugo2kjL2%2Bi2CEhfa5%2BxXp2VDlxP3dMlMjWSiPlPorjilP8GsRfytMkZQ15tceOzifdXAgS2%2BJrJt6E6ypgKtaTh0mBJApL6o2IFoKU7JD93ppDpIiLYWd3Ccl66N01jCTd7NSu2q5hI1QXgbdcnjpCUIJIMNz2%2Br4GOqUBP2ZxePHFt3D3oJnpq6UynXmE5k%2BSJdViTHLZyCKC7ymahX9vSZsCIqSXJqMXWYvO1He%2BwV%2BJr28ON9GUO2LA%2FRmF4eQjaowJeERFGFByIoYlLVPrUsFTUryN%2Fnin3SIduN1DY%2FEl3jL2TxuC%2BNcyFqPiyx06mXfNL%2F3Tste32iQIwtuBksotjGMtwqTEAAjtW7Ei0d0AZBoWl9GuCcIq1kjEtBTX&X-Amz-Signature=08cca4ea49eb99be8111b091e0980a20137f43eb31435abbe23adf03a1b03ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
