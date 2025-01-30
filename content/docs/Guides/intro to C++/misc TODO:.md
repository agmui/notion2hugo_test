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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHXSBF7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvw8TopFMGyZwTvEtNNQuqRoC0Pf9okleMk7zukgJ5DQIhAMf4cjAKLDe3rdUFK%2FwTimiBWqsVHgBbncu66M5VQaTTKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrbyAwiAdL%2F6OP3pQq3AOMwnBLSbeXtTp7%2Fo%2FvzJzltBjR7WugUSiNfLh4makLpKnJ2f1YSFNq4wpU1zha1KuhR1Xc%2F3PXfcRhtxDEdlbICT1jlQUBiIiGhL9BOuwTLXT59NyaMMS5r3s4QZ9e3RA9mDgSritvV6ujsAcZIC3LX%2F%2FL0yDXVI1EEPM56SLlq7C7wg%2BNkwWXOlNZPdEZ6nal1m0jYMtruzkDTAQKp7zB6Hza5HaXAyVDc%2FBjSxv1bO19nijY7S7vt1B3h%2BmIoc5Q8H9qPl1%2BwnWlLTFc2xfwvc98g%2FXMQQW0AINKW6sINyWdJUZzkGOdn%2FSzXuZCjVfqNIkoftyMdN6ICn%2Byk7m96u9gzAdY3xnOGOZC3PAaNWsJJ6%2BM32pD%2Fne31UqOfcTk8VN9B6Aa1bR99V%2Ffjq62gfuMlugWOYtgykLr6VwbdmfdWlN8MjrMAxilEqS3Ohdu39Yj4OrcfYGZAxUhPtC90kbhuncj1El20WZufpX7x7rAF%2Bi7st7a%2F08v3XVYCUpWKojnTrriTPDH7158l9V3zZt0DsKN95RjITroze5bslFmAM1gKniD%2Fq4dNoFa12HzxYOVivfmq1OguMz66nvJfiKMIQaFVvueckFOFRCp%2FyuFriTtir3y5cRLcjDD7uy8BjqkAfjj6Gw2IzvbKhundMPhfZ%2B3cqAFAbUuDYjGA5Vh1i8AZFKh1KdvXxzxsUF7pOIPAqe88qpfP8BrOU72Tz9KTPPHtOzHNUN24eaV09i8FIrTIVLL3sDaDLMNE7RHTniq%2BLabtoXv2SXBinnvXPL1nd7jpdvVUyzyxn9OAhHymZmewuw9zwW688vvC5rZss0FKa%2BCLkW62YTIR%2BPMLgAAPFuh5Ety&X-Amz-Signature=3a4625bcabb5f3fabec94d9c124d9faa96f77432e6b4602604a3ecde22a8123c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHXSBF7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvw8TopFMGyZwTvEtNNQuqRoC0Pf9okleMk7zukgJ5DQIhAMf4cjAKLDe3rdUFK%2FwTimiBWqsVHgBbncu66M5VQaTTKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrbyAwiAdL%2F6OP3pQq3AOMwnBLSbeXtTp7%2Fo%2FvzJzltBjR7WugUSiNfLh4makLpKnJ2f1YSFNq4wpU1zha1KuhR1Xc%2F3PXfcRhtxDEdlbICT1jlQUBiIiGhL9BOuwTLXT59NyaMMS5r3s4QZ9e3RA9mDgSritvV6ujsAcZIC3LX%2F%2FL0yDXVI1EEPM56SLlq7C7wg%2BNkwWXOlNZPdEZ6nal1m0jYMtruzkDTAQKp7zB6Hza5HaXAyVDc%2FBjSxv1bO19nijY7S7vt1B3h%2BmIoc5Q8H9qPl1%2BwnWlLTFc2xfwvc98g%2FXMQQW0AINKW6sINyWdJUZzkGOdn%2FSzXuZCjVfqNIkoftyMdN6ICn%2Byk7m96u9gzAdY3xnOGOZC3PAaNWsJJ6%2BM32pD%2Fne31UqOfcTk8VN9B6Aa1bR99V%2Ffjq62gfuMlugWOYtgykLr6VwbdmfdWlN8MjrMAxilEqS3Ohdu39Yj4OrcfYGZAxUhPtC90kbhuncj1El20WZufpX7x7rAF%2Bi7st7a%2F08v3XVYCUpWKojnTrriTPDH7158l9V3zZt0DsKN95RjITroze5bslFmAM1gKniD%2Fq4dNoFa12HzxYOVivfmq1OguMz66nvJfiKMIQaFVvueckFOFRCp%2FyuFriTtir3y5cRLcjDD7uy8BjqkAfjj6Gw2IzvbKhundMPhfZ%2B3cqAFAbUuDYjGA5Vh1i8AZFKh1KdvXxzxsUF7pOIPAqe88qpfP8BrOU72Tz9KTPPHtOzHNUN24eaV09i8FIrTIVLL3sDaDLMNE7RHTniq%2BLabtoXv2SXBinnvXPL1nd7jpdvVUyzyxn9OAhHymZmewuw9zwW688vvC5rZss0FKa%2BCLkW62YTIR%2BPMLgAAPFuh5Ety&X-Amz-Signature=db824f3cfc91cb41179f4c04e9dfcabb957736c2f34a694a9108488f4dd9d5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
