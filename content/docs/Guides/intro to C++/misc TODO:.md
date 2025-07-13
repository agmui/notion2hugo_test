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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TK2NGQJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQlJpFiwxyiGDGAwtK7UZLqRUvliypfzvU0jExwjjomwIhAIi7maJJTkakxb7HhNm%2BEAo9nQJLwIs9FV7k1DWbSRa7KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FbDBQcQHPVVzrgDUq3ANqS1b6tR6j%2Bw7O0O9mDGtn9Q%2BzWpNYggSYByjOROzFJ2g9QxEK5hP90tbvhNTjrkQapbmszBR6ArXuRFDkBAC%2B%2FkwXmpw%2BsHIMT2sFFmD98GHm50%2BfgfIQi0OujSQ4nFhHVHBnUFqU6xKY1U%2FZeuYuHUqE4wVv8t4%2B%2B%2BaTc55eyrpSvr0Qqp4gLYUI%2FEyJumfCLQPj0TBz7KNih%2F4maMdQyQYXunr8ZQiMRWvF7EHMeF8SNMOHfvO%2BD98DaWrC9rM6v0QwaAk%2BXseUBDsViuGKifZWjm%2B6SFcDU1qJSzBcQNQ%2FTmok4KnEUEFaDYTP%2B6joDq9XQjDHholEfmXp3VVZ84tgzXcBLj1WQZxPc6qZwPVPtTX7ODwKb32UDK7agjnwOrBjtAPwAIP%2BsjZZPAGsGfE1dlrNRJveOcDbiMYOMkCAwUflcRzJMhvLnoxnDSmq84t9mFIau6kFEf5viaxt9949JoZAw1ZS%2FkGELkdGh9aEazhqWXDwShGtKqbTRLeE8DFkrtSbNCYWDmuYXd3rI%2FpVGRwdW71RrYVuk7dkwZpMsP1aPL8zj8yLbKtnZyo4%2F0IUWzs9EpMckUmNrBKfrJKTu%2Fs1p9%2FUkWsMi6EOZkjVTLU97t%2FvLFmdijDe2MzDBjqkAW2bKbJkbItT2XWNCybVxzJM8NuclgWK2nYhzYR1AijTAQHqAjaUMfij80E5p4lmtZiOy0xToBCYfSjhRQlFIyMPBMuq54J8xzcGy2Chg9gLz4yLQzabWhkLod9fPZBCC%2F5%2BGmIC2h8Ue7EhLXKB5qVcjyqYYvWdcYDUT3zgj6qPgZuCR0sqKVhuGpZOsqX8pE0vry2eOYGM%2Fex5ccXs3eYW5GVV&X-Amz-Signature=565fee1ecbfd536713e888d1ea44396e764512e0cde34dbedaf9ed55be9c09e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TK2NGQJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQlJpFiwxyiGDGAwtK7UZLqRUvliypfzvU0jExwjjomwIhAIi7maJJTkakxb7HhNm%2BEAo9nQJLwIs9FV7k1DWbSRa7KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FbDBQcQHPVVzrgDUq3ANqS1b6tR6j%2Bw7O0O9mDGtn9Q%2BzWpNYggSYByjOROzFJ2g9QxEK5hP90tbvhNTjrkQapbmszBR6ArXuRFDkBAC%2B%2FkwXmpw%2BsHIMT2sFFmD98GHm50%2BfgfIQi0OujSQ4nFhHVHBnUFqU6xKY1U%2FZeuYuHUqE4wVv8t4%2B%2B%2BaTc55eyrpSvr0Qqp4gLYUI%2FEyJumfCLQPj0TBz7KNih%2F4maMdQyQYXunr8ZQiMRWvF7EHMeF8SNMOHfvO%2BD98DaWrC9rM6v0QwaAk%2BXseUBDsViuGKifZWjm%2B6SFcDU1qJSzBcQNQ%2FTmok4KnEUEFaDYTP%2B6joDq9XQjDHholEfmXp3VVZ84tgzXcBLj1WQZxPc6qZwPVPtTX7ODwKb32UDK7agjnwOrBjtAPwAIP%2BsjZZPAGsGfE1dlrNRJveOcDbiMYOMkCAwUflcRzJMhvLnoxnDSmq84t9mFIau6kFEf5viaxt9949JoZAw1ZS%2FkGELkdGh9aEazhqWXDwShGtKqbTRLeE8DFkrtSbNCYWDmuYXd3rI%2FpVGRwdW71RrYVuk7dkwZpMsP1aPL8zj8yLbKtnZyo4%2F0IUWzs9EpMckUmNrBKfrJKTu%2Fs1p9%2FUkWsMi6EOZkjVTLU97t%2FvLFmdijDe2MzDBjqkAW2bKbJkbItT2XWNCybVxzJM8NuclgWK2nYhzYR1AijTAQHqAjaUMfij80E5p4lmtZiOy0xToBCYfSjhRQlFIyMPBMuq54J8xzcGy2Chg9gLz4yLQzabWhkLod9fPZBCC%2F5%2BGmIC2h8Ue7EhLXKB5qVcjyqYYvWdcYDUT3zgj6qPgZuCR0sqKVhuGpZOsqX8pE0vry2eOYGM%2Fex5ccXs3eYW5GVV&X-Amz-Signature=7515a667242f4a445f921bc3118f7836c8f999f143e8ac892f4ad4a8c8d3ee22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
