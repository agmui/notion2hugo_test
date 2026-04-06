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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMZXVQ2%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRoWt9VEhgzBPYKmpMWxU3%2FtyghwcoKPEYnbdWTkTiOAiEA2QJAgpRnQkLQG6d1srWqwaJWOfYUOgY8OA9Iw6uJeckqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl9RAJA4O300bK3nSrcAzWHOa50w7Z2Xhr4bQiQVvaxMFg%2BZgJ2GkN9z4nzpj3nVR4JwPvtEJM22vMqjjZOPobJNNb07VAR3U9%2FKNMMS5OYmB2VVrHsdm5nKBBCXq83zu5hbFhna3KgvXEgr1gkEYKoO3udovG4D9Wqx0%2BZ67Q092NSx%2FwNjnQHDU6KluwpjiNLl4GqCzUzk7bubMYqEfdpfv7xUzs%2F%2BjnWN3shr8F9fiOhT8Stb%2FUTHvlUW5Rmrrni0bm%2BZCgYsKEftO8q15KT0PLkRuRq3WhPISO5Qe62ZXipujIIQ%2FEguMR%2Fx4KxS6AZSkdo7d0I%2FR4tpe%2Fb%2BZs3mj6RfFs0ib5c56my7LskdJDchfhYPGVXp1rG9g0J2leJ1sdLEOdaCxvThr54CY0O7IMdydtgBXiijCGUcoJc6gEkvcXg%2FG53bSCpOWDzBqW8%2BQ0gaZmr5IS99%2F%2FbbUTEFMhe7KORQMi5iZF5IFPI9fesOD4rIV%2FWbXZd42aVHDJ0kGleh6q7ZQjgijvZw6IZ97MYNZxHx4GGFMn0%2BUaKL3VlV%2Blf8g1YOj0ztZqbozPQotyLybtgoD97FDuIMkxyyvfyDcf%2F5kgZK%2Bi9yICCHM9K3y2w4gIr5RPaPQuHQUdRjY2OczlC3%2Fw1MKSvzM4GOqUB6O1QNtzScNlE2%2Foa1SQoMvuoZKbfNfzvsH5TuKulWsWsvprqXlpyM7VN0pI09B8rT3uD%2BvcCzyl0UgvBNLQCT0FYTdU649FcDQHHmn4H1vtFy9dYFDU%2Fi5oDqFcHHxubEmybf%2Fuoa8Agem1eJviNIYLmLxqaa3C6HqVhelmPl8hnxDfJMszz8%2BvFWHobSQ5RCS9jq7rH%2FpXZvWMo8llHUrzkuX9q&X-Amz-Signature=7df1b30740c19f9d5e1b8b8c89cfbc525f3393e469c63fa2905d09db5286435c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMZXVQ2%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRoWt9VEhgzBPYKmpMWxU3%2FtyghwcoKPEYnbdWTkTiOAiEA2QJAgpRnQkLQG6d1srWqwaJWOfYUOgY8OA9Iw6uJeckqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl9RAJA4O300bK3nSrcAzWHOa50w7Z2Xhr4bQiQVvaxMFg%2BZgJ2GkN9z4nzpj3nVR4JwPvtEJM22vMqjjZOPobJNNb07VAR3U9%2FKNMMS5OYmB2VVrHsdm5nKBBCXq83zu5hbFhna3KgvXEgr1gkEYKoO3udovG4D9Wqx0%2BZ67Q092NSx%2FwNjnQHDU6KluwpjiNLl4GqCzUzk7bubMYqEfdpfv7xUzs%2F%2BjnWN3shr8F9fiOhT8Stb%2FUTHvlUW5Rmrrni0bm%2BZCgYsKEftO8q15KT0PLkRuRq3WhPISO5Qe62ZXipujIIQ%2FEguMR%2Fx4KxS6AZSkdo7d0I%2FR4tpe%2Fb%2BZs3mj6RfFs0ib5c56my7LskdJDchfhYPGVXp1rG9g0J2leJ1sdLEOdaCxvThr54CY0O7IMdydtgBXiijCGUcoJc6gEkvcXg%2FG53bSCpOWDzBqW8%2BQ0gaZmr5IS99%2F%2FbbUTEFMhe7KORQMi5iZF5IFPI9fesOD4rIV%2FWbXZd42aVHDJ0kGleh6q7ZQjgijvZw6IZ97MYNZxHx4GGFMn0%2BUaKL3VlV%2Blf8g1YOj0ztZqbozPQotyLybtgoD97FDuIMkxyyvfyDcf%2F5kgZK%2Bi9yICCHM9K3y2w4gIr5RPaPQuHQUdRjY2OczlC3%2Fw1MKSvzM4GOqUB6O1QNtzScNlE2%2Foa1SQoMvuoZKbfNfzvsH5TuKulWsWsvprqXlpyM7VN0pI09B8rT3uD%2BvcCzyl0UgvBNLQCT0FYTdU649FcDQHHmn4H1vtFy9dYFDU%2Fi5oDqFcHHxubEmybf%2Fuoa8Agem1eJviNIYLmLxqaa3C6HqVhelmPl8hnxDfJMszz8%2BvFWHobSQ5RCS9jq7rH%2FpXZvWMo8llHUrzkuX9q&X-Amz-Signature=ea3f19d3ce82bd69e491d20a65b8ebf67eb6d7374803a473b477033fc6621644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
