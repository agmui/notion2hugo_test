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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQ4FIJM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD4zSAK%2FhCT9z0YOlzM3ayQQQaHGTgvf%2FLf0gj9odhlHgIhAJa8aDcUl8%2B%2Ba%2FXzq4ZBBeGH7IdXzB8%2FyIAva%2Bu28juFKv8DCE4QABoMNjM3NDIzMTgzODA1Igz6j7m1I9H82XjwiHwq3ANdj%2BQf5C0ybKbaa2rijIp4sSVniKK%2F6FPP0mCldtCmFlEIZAjC6fNb37OcbodAXBqL6juIaG%2F9iYIHF%2B5GGzDkJoeYie1UH7CcIo0DclWtDOeEMSsg4VUtHdAzUS271z4Foof5wkO1pRFqJ4NZ9kXwHSnZt6AxmwVXq9anDiHKelTMQl9uqMnW%2B%2FNr1Oyja%2FSCUyO75WDVxwNI0CHBINmicTN%2FtPNfDueBQ9gJCEk6RbVJ%2FVtxi0w2B%2FkI8o1DxSqs1oNyYFrOgrMO2z%2Fu0jafMsy5kAGDyn1VuDslUxxGqlApThyLxawkZS8f8nUfAMIlVV2tQu%2B9F8rwpARb2z92b%2F0c8WL%2Ba0I150OxSl12SmWZ%2F4yalJs8ITLtB%2FArujZj0ge%2FwoSroVrN7n6Qt1up380Dc8qw%2BKH4ni07h4Ij5rdgWyN7JmwLAwbpKe%2FGlLKXvUdIMh8VpnMgzBCY2DaskJM6Zp%2B%2FvWwKCf8F2ty4%2BYL%2BgBjJWorR6zTCuKjhhx7YUjc7y7gO2%2FX%2B1QZjYDe9wWkhfmqMa1UInU51uZTRb%2F2vL234ib59w8diRBt6xl2K6iGq7Xsie%2FdPdbijdqqAoK0F8W2N6%2FbuI3wde8SJtn2JC%2BKfDjlLCxwWUTCM9cO9BjqkAafUBgfTOeJHxHNK%2FcBTXhQZorI9XkRc%2BL04k4DTVglGtmDc%2BPWRS595SUuWy20Isq4O5fQ0mBWN%2Bi8OQbz5NBWTzX1i%2FNqp1Pw06YDb0cTBuzfZpxVf8pkQPfVeOdV0BsTSBC1GiEp1eD15cwsta%2FvHrM6aC%2B8EllosaBF%2FnpdQ%2FJTYlgebipIfryaUEisThc5Q76XCSHRpkq4HXGoymSUHajzm&X-Amz-Signature=05ab6a0a60810d48fab81a9847a06db1c9515650ae166b00bb1d5eebd4fb87e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQ4FIJM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD4zSAK%2FhCT9z0YOlzM3ayQQQaHGTgvf%2FLf0gj9odhlHgIhAJa8aDcUl8%2B%2Ba%2FXzq4ZBBeGH7IdXzB8%2FyIAva%2Bu28juFKv8DCE4QABoMNjM3NDIzMTgzODA1Igz6j7m1I9H82XjwiHwq3ANdj%2BQf5C0ybKbaa2rijIp4sSVniKK%2F6FPP0mCldtCmFlEIZAjC6fNb37OcbodAXBqL6juIaG%2F9iYIHF%2B5GGzDkJoeYie1UH7CcIo0DclWtDOeEMSsg4VUtHdAzUS271z4Foof5wkO1pRFqJ4NZ9kXwHSnZt6AxmwVXq9anDiHKelTMQl9uqMnW%2B%2FNr1Oyja%2FSCUyO75WDVxwNI0CHBINmicTN%2FtPNfDueBQ9gJCEk6RbVJ%2FVtxi0w2B%2FkI8o1DxSqs1oNyYFrOgrMO2z%2Fu0jafMsy5kAGDyn1VuDslUxxGqlApThyLxawkZS8f8nUfAMIlVV2tQu%2B9F8rwpARb2z92b%2F0c8WL%2Ba0I150OxSl12SmWZ%2F4yalJs8ITLtB%2FArujZj0ge%2FwoSroVrN7n6Qt1up380Dc8qw%2BKH4ni07h4Ij5rdgWyN7JmwLAwbpKe%2FGlLKXvUdIMh8VpnMgzBCY2DaskJM6Zp%2B%2FvWwKCf8F2ty4%2BYL%2BgBjJWorR6zTCuKjhhx7YUjc7y7gO2%2FX%2B1QZjYDe9wWkhfmqMa1UInU51uZTRb%2F2vL234ib59w8diRBt6xl2K6iGq7Xsie%2FdPdbijdqqAoK0F8W2N6%2FbuI3wde8SJtn2JC%2BKfDjlLCxwWUTCM9cO9BjqkAafUBgfTOeJHxHNK%2FcBTXhQZorI9XkRc%2BL04k4DTVglGtmDc%2BPWRS595SUuWy20Isq4O5fQ0mBWN%2Bi8OQbz5NBWTzX1i%2FNqp1Pw06YDb0cTBuzfZpxVf8pkQPfVeOdV0BsTSBC1GiEp1eD15cwsta%2FvHrM6aC%2B8EllosaBF%2FnpdQ%2FJTYlgebipIfryaUEisThc5Q76XCSHRpkq4HXGoymSUHajzm&X-Amz-Signature=02aede012c7b497df3d00b80015b385dfc450504373b8648037a63d13077671a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
