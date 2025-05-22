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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RBOPIG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDJ2Qeynj9n5W%2B%2BUQnxRjgtwYHfpwk0cjjLm5TAmnmPlwIhAKiXzyyZoZN2Q2Nu6q7otZhcNLDo%2BMXuF8rQFZF2JfwuKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoXSqpFPqXGGOpP68q3AP2PkQCpaYdPXVIm%2Fkh%2FNTs0SKRexUaQ8J9QD1zLQtRlD4m9JBLTruLMEph%2FskGvcZO%2BWaoCxcPducK7fgSjENNOdRQgbPntm%2FRjP%2F7qkOckhoPnAV4bQ%2F6XjNEkxqX9WNuTi3Qklc0RfNzQTzGV519G4k%2FVwsFXjkEUcczqEBzvjN%2B1q7Jw9EvTfEVCnhz9yMVj7%2F3yJe4RfZmqQgRDMjEX10jeF0GLsJfcvoIZLAG6fOr0LlnBfgZGeVkOf0yFuNipba4DolJV9TfHz9Phhkixacr1NMztgiFzeE2wkYw9QXA61%2FpXql8vg9eTt3ZFagJsZK8HUibBRPVa666KvlMu23msXp88FDZJClkXhvJhK73y90R%2FU%2Fmh02K8hsT2fWzzcai0GdudRDFAdD87%2F%2F%2B6AC30OT4K4ujvxcCD8fPvgE0u7QF7P1V5bJjZvyylosQLPTyHI%2FKgPkNur826wLbkNBhUMCX%2BtbcMbPOyqMQWqORgHCXshTvJY50uASDIyywm2PD2v3E5YfvN4fx%2BUbO8U7GLZ5ppv81oJLokhd%2BZDmQ%2BXJ%2BaJR%2FicPn%2BEMRL2CL1yalwX4N6tEfPffQgGjMJIk1T1rjQe1AmMyJwWCoDN1cPxGp9hytTH0VPjDM%2FrzBBjqkAWYjCSLATiDTxQ9UwvJSGvCFjyIo2NYtjdQMW4x7l218EpZwaWwidL5ia%2FXPQ9iuiibT%2B5DnTcXsgrdilKeBOh8pLYNCYtTsdn%2BAnp0%2BR%2BNTNIq0H%2BzchbVr3RZgM2wil4l0LI9Hg%2Fo4TWQFYCI%2BTMp8z6ILFYtu5lSti1EOJf2Jj3jRad%2BL1tO2t3PmBhWJh%2FVjWyK10Aj1X5Vs9alxZU5WsmvV&X-Amz-Signature=2d02c0559c1866f036052348d48216e89c0599c408eb887c29a7ec679db99e49&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RBOPIG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDJ2Qeynj9n5W%2B%2BUQnxRjgtwYHfpwk0cjjLm5TAmnmPlwIhAKiXzyyZoZN2Q2Nu6q7otZhcNLDo%2BMXuF8rQFZF2JfwuKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoXSqpFPqXGGOpP68q3AP2PkQCpaYdPXVIm%2Fkh%2FNTs0SKRexUaQ8J9QD1zLQtRlD4m9JBLTruLMEph%2FskGvcZO%2BWaoCxcPducK7fgSjENNOdRQgbPntm%2FRjP%2F7qkOckhoPnAV4bQ%2F6XjNEkxqX9WNuTi3Qklc0RfNzQTzGV519G4k%2FVwsFXjkEUcczqEBzvjN%2B1q7Jw9EvTfEVCnhz9yMVj7%2F3yJe4RfZmqQgRDMjEX10jeF0GLsJfcvoIZLAG6fOr0LlnBfgZGeVkOf0yFuNipba4DolJV9TfHz9Phhkixacr1NMztgiFzeE2wkYw9QXA61%2FpXql8vg9eTt3ZFagJsZK8HUibBRPVa666KvlMu23msXp88FDZJClkXhvJhK73y90R%2FU%2Fmh02K8hsT2fWzzcai0GdudRDFAdD87%2F%2F%2B6AC30OT4K4ujvxcCD8fPvgE0u7QF7P1V5bJjZvyylosQLPTyHI%2FKgPkNur826wLbkNBhUMCX%2BtbcMbPOyqMQWqORgHCXshTvJY50uASDIyywm2PD2v3E5YfvN4fx%2BUbO8U7GLZ5ppv81oJLokhd%2BZDmQ%2BXJ%2BaJR%2FicPn%2BEMRL2CL1yalwX4N6tEfPffQgGjMJIk1T1rjQe1AmMyJwWCoDN1cPxGp9hytTH0VPjDM%2FrzBBjqkAWYjCSLATiDTxQ9UwvJSGvCFjyIo2NYtjdQMW4x7l218EpZwaWwidL5ia%2FXPQ9iuiibT%2B5DnTcXsgrdilKeBOh8pLYNCYtTsdn%2BAnp0%2BR%2BNTNIq0H%2BzchbVr3RZgM2wil4l0LI9Hg%2Fo4TWQFYCI%2BTMp8z6ILFYtu5lSti1EOJf2Jj3jRad%2BL1tO2t3PmBhWJh%2FVjWyK10Aj1X5Vs9alxZU5WsmvV&X-Amz-Signature=ad3788b5668708d4b1c5b38b25c6cdf1185773b3078578bf46d8392c8359aed0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
