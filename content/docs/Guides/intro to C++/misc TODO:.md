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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQNR4AE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnO3GYix8hEMzzq0xuRWB9x31RcBYPZaoR6o7wbvO%2BbAiEAmQk1AHUvSRHIFx6%2FlwI7ThiXeg2GgWMAGlxHwqkKoWEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATyGeQUNQN5aTRC0ircA5fzHgb6hhG2CSeFTcTnRGwdd1ItNUHlW4da6hj%2Bu8J8gPRMUMIZON1LWqIiLqoWhlyNlOtXKPWV2cOoJJd59RygaWLns%2BvuDFrFI0K7yp1fXxdaKaDeuEOFq9szWD1uwskVgkpB1kH2q5etwkyWvkYh9N4CPIhP3L6LBjYYLNGOl0JoQxFSZWTrCwxlfy4HnN5XlgheI02I9MF9vX6xQ4PTR9kjJkXYTbvsmgTyIBTbhHsVXLodzDgJMKzE%2B8s7c5ESaKnkR9FN9SnJnp8BfIKCifDAJN2LpIJrbpTeoRorj3qum9dqqRDo%2FF3Ecij8yvGhT4ZYZkl%2BgE2MUuOLi0iA3uvqLOZHX8Bb5EYRvkeeTmnD82joW9jnEi2GP7pQ3Rbj%2FyjrBSeqiG297ZiA2f2S0I7%2FZoLW8NnWh1VvE7GPv7hBe4HczsukelQCa%2B8IUqILUhN%2BhyAaiNoDF8qmP99ig90czq6M9m3mXnKkhfUb9WXqnhHtYfeUkeNtjbMimoow6VJdMmIkPWx2w1xvxztqPjXmjjpJ2TpWowLVoUOEpXGfS%2FbKgqiC86YlKd5%2BD2MUKOT9jV01CHd6VT%2B6fqGOG7ItbsVX84m1bw3mqt6rsdFpQ2lFQx%2FZ%2FsLJMK%2B2wcAGOqUBERNPA0NiyKsUDyXCWYBMshXhoqwVI9fR%2FgNBnphEPjw0QDyoDNmY7prHmbkoZMrQPXZVfj1YAgW6vWEomWnXvebTprNNzOulxiv%2BjWVQ7VXkBJ2iUxwfpK5xuXZz6Rf8AuNyU1P0es1kAVnywscaADQjvyjnMRkSeNimzsJzBTN6tqXFrhJEj2q1xD%2BwebOvjNo739DYQKHDN9DZkuGQCHojSanN&X-Amz-Signature=69bf4fa7e6ff36326ef33b3537674b6f04c39f0315db6cf674a0e0675f635c71&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQNR4AE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnO3GYix8hEMzzq0xuRWB9x31RcBYPZaoR6o7wbvO%2BbAiEAmQk1AHUvSRHIFx6%2FlwI7ThiXeg2GgWMAGlxHwqkKoWEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATyGeQUNQN5aTRC0ircA5fzHgb6hhG2CSeFTcTnRGwdd1ItNUHlW4da6hj%2Bu8J8gPRMUMIZON1LWqIiLqoWhlyNlOtXKPWV2cOoJJd59RygaWLns%2BvuDFrFI0K7yp1fXxdaKaDeuEOFq9szWD1uwskVgkpB1kH2q5etwkyWvkYh9N4CPIhP3L6LBjYYLNGOl0JoQxFSZWTrCwxlfy4HnN5XlgheI02I9MF9vX6xQ4PTR9kjJkXYTbvsmgTyIBTbhHsVXLodzDgJMKzE%2B8s7c5ESaKnkR9FN9SnJnp8BfIKCifDAJN2LpIJrbpTeoRorj3qum9dqqRDo%2FF3Ecij8yvGhT4ZYZkl%2BgE2MUuOLi0iA3uvqLOZHX8Bb5EYRvkeeTmnD82joW9jnEi2GP7pQ3Rbj%2FyjrBSeqiG297ZiA2f2S0I7%2FZoLW8NnWh1VvE7GPv7hBe4HczsukelQCa%2B8IUqILUhN%2BhyAaiNoDF8qmP99ig90czq6M9m3mXnKkhfUb9WXqnhHtYfeUkeNtjbMimoow6VJdMmIkPWx2w1xvxztqPjXmjjpJ2TpWowLVoUOEpXGfS%2FbKgqiC86YlKd5%2BD2MUKOT9jV01CHd6VT%2B6fqGOG7ItbsVX84m1bw3mqt6rsdFpQ2lFQx%2FZ%2FsLJMK%2B2wcAGOqUBERNPA0NiyKsUDyXCWYBMshXhoqwVI9fR%2FgNBnphEPjw0QDyoDNmY7prHmbkoZMrQPXZVfj1YAgW6vWEomWnXvebTprNNzOulxiv%2BjWVQ7VXkBJ2iUxwfpK5xuXZz6Rf8AuNyU1P0es1kAVnywscaADQjvyjnMRkSeNimzsJzBTN6tqXFrhJEj2q1xD%2BwebOvjNo739DYQKHDN9DZkuGQCHojSanN&X-Amz-Signature=f321f571657f5650933dbddf4a22ab4e497fb4f9b48c59bfcdfe0e18d117e25d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
