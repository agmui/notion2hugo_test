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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277P2J6F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDnqyj5vlpLDK6EBkIbzYm%2FOlGX9TgdnwOvXEqJYDw7WAIhAICB%2FiJ9nEzlVQfY6JfTJV3%2BnQZ%2BGAwQJMfuxaYJ3EguKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7F2AxghM%2FX4HjHlMq3AMmhQTRsshDlf3Kev6MPq%2Fvhto6w3MTPJlZb9yR3aCIq4CbajM%2B0I7CaZonI0AuiaVJcEhu9t3jF2jzDHNVsk9wkYiibGVeu%2BCUtoqfOKXmqDFVGYYt6a0d451FAcZ9ype1y4pUhMscSxLXXEdt%2FnVGsr9sFG0Cr7lENmnkCRJ95v%2BrYuDNQAtxAzj1WgAloYhq9eJ1UD00kTLFPLUcPCJkahSsqV0hhUK9ufUAOvcYMKCh9ZD0rX%2Fc9OtP4NBIihGF2REIBsy6%2Bo1EGx6DFxelaRt7D8xVze2S4vF83XWq445VhvA6CZY7idsXcJrXgC0p1V%2FA1%2FoIFXufr%2BjsbY2uqsWTMRxZUQWqMYLqwtSAMnkhr0tod%2BwTptdSo8TqNMXT%2Fi9rVNEqeU8QhVGdnBl9CXL74sBuwM0xGMvgDEOslAOIYGjgfQaKopWtJAu9Sgid6SMg6cpBhLQldhgnNX6RWfjec5WCbg3BLaeTol6oCc2g0gQOdEzw97AywtswUvZTTI%2B1rnULEFj%2FVIfC6jUFLTVOU9ysUFcUSEWMJbwwS%2FdDWFlHBb37nU0%2FEBSE6u7kp9gJ8x2sJ0sdJMQ0L2GZmrUA%2FuS55a8piZM2fW3eN3%2FrorkV9TrZvHKeXzCwxdW9BjqkAUkGnqJ6umWirdtU2Epl1hSdQtrw4JREirD9N6837oPwmXhhCfw5bIJ12bD1rz2YJbD1VuvQnoEf0SkASF%2B0ima7qjtqMHwqABeNTCgEuL%2FhfN1nSogW%2BQXDOa2gb2WhZLCwjTod9yhaXSVDN%2FQXwTzCgg0aIam1RXYyqKk1g9ZG4aErsgNotUeiaqOc00j9FNnOhJdf2H2ql1zNy3eW8AuuO7kr&X-Amz-Signature=7cbd59532a6a4164c6db074f1bac7605911e27d67cc484c682531252c07e5b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277P2J6F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDnqyj5vlpLDK6EBkIbzYm%2FOlGX9TgdnwOvXEqJYDw7WAIhAICB%2FiJ9nEzlVQfY6JfTJV3%2BnQZ%2BGAwQJMfuxaYJ3EguKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7F2AxghM%2FX4HjHlMq3AMmhQTRsshDlf3Kev6MPq%2Fvhto6w3MTPJlZb9yR3aCIq4CbajM%2B0I7CaZonI0AuiaVJcEhu9t3jF2jzDHNVsk9wkYiibGVeu%2BCUtoqfOKXmqDFVGYYt6a0d451FAcZ9ype1y4pUhMscSxLXXEdt%2FnVGsr9sFG0Cr7lENmnkCRJ95v%2BrYuDNQAtxAzj1WgAloYhq9eJ1UD00kTLFPLUcPCJkahSsqV0hhUK9ufUAOvcYMKCh9ZD0rX%2Fc9OtP4NBIihGF2REIBsy6%2Bo1EGx6DFxelaRt7D8xVze2S4vF83XWq445VhvA6CZY7idsXcJrXgC0p1V%2FA1%2FoIFXufr%2BjsbY2uqsWTMRxZUQWqMYLqwtSAMnkhr0tod%2BwTptdSo8TqNMXT%2Fi9rVNEqeU8QhVGdnBl9CXL74sBuwM0xGMvgDEOslAOIYGjgfQaKopWtJAu9Sgid6SMg6cpBhLQldhgnNX6RWfjec5WCbg3BLaeTol6oCc2g0gQOdEzw97AywtswUvZTTI%2B1rnULEFj%2FVIfC6jUFLTVOU9ysUFcUSEWMJbwwS%2FdDWFlHBb37nU0%2FEBSE6u7kp9gJ8x2sJ0sdJMQ0L2GZmrUA%2FuS55a8piZM2fW3eN3%2FrorkV9TrZvHKeXzCwxdW9BjqkAUkGnqJ6umWirdtU2Epl1hSdQtrw4JREirD9N6837oPwmXhhCfw5bIJ12bD1rz2YJbD1VuvQnoEf0SkASF%2B0ima7qjtqMHwqABeNTCgEuL%2FhfN1nSogW%2BQXDOa2gb2WhZLCwjTod9yhaXSVDN%2FQXwTzCgg0aIam1RXYyqKk1g9ZG4aErsgNotUeiaqOc00j9FNnOhJdf2H2ql1zNy3eW8AuuO7kr&X-Amz-Signature=9b33e99a9ef4709d887bbdf333364c6f58d1535aa2a1d603f663f341e03af874&X-Amz-SignedHeaders=host&x-id=GetObject)

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
