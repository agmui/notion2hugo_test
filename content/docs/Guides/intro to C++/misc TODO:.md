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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQE4ALL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICa7FuhHvpFz9MLEbZ3Ay2bC7bjcdCuHb63Yfra4izLLAiEArZa9zMUYVhWpXRDbjzw%2B28DtyhUXslc5bWV7jSY8kfkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN5eMnZoVdSUzJm41yrcA79xCgLeOAHXjnOhp%2BIcFqxadDSjhjvrA8DbGEWJhlW5EO345wKTWjUMPdRBQO1jp3Zzf%2FPXm7T5h2y%2Bv44%2Fw%2B2e9%2BlhkAvcjCxBRZyXuUuu%2F1LjJbT%2Fi6fARy7%2Bg%2BH%2BKZBQgTALnO%2BMWLEXr8kw51jQEkEL%2FkXnD5h6ZC0Qa9Q7dT1myaybF4gfqPe1LeQOlt9QcyLDXQj3FGwcFcjv2EY9qhE2xZRcMHkBu7LBIkIt7sHmJfF3WC4FdhgQzRbMPGLMvxCbhBW90ZCNnpeRcjRDlKqbO6A0uDFJR7d4yLmOQIRG0t2YqwH5C7J2P5guM6IzroUo1803t1Njs666WfmlixokHCvAg5O8qQKFsZMwsKmd0ST2TF3et2urZkbap3g0pDWwq5kVxm3%2F%2FLIxHAbU%2BsGeOpFfVjFJWNHgZ%2BkEOj19NWpkewome6OG%2B8gLmwJd93%2FueYWgIfmYIQWrwo6hiJsQlXxGymbFGELAHoWDLvgL6qL0hFuWm7RxXR0lyl0gLq%2BHCFaqIY0HBrdNAmBwx1yImB4iI2UJ3KqPFj5LQc6dWvJ1lc8%2FI5hTeLvezSdOGaDhOgcTiA7IBZ7M1mshWSHxygK6b%2F1ygAtV9LyTyOGlJtgjUk7xJtSqMLON670GOqUBgtZfnM9EPZLnht8773rc7tYMTJqPmbMr5%2BJBfcThLnj7UMx%2FXHVGi%2FzY7APq1xBlspbl21GZsrj5WK15UmIs8hxh6W%2F%2BnJ9kqSt7a4BXQ%2BT%2FOQ%2FCmnFSCjpDJx7EzZk6u85gShDcyEkuoTsZksk%2B5SXP83YbQSTHGcEsJ%2F8Fc76MJixXaj0HmrRvE10wEeriXNmLPMRZ%2B8W1qtb322ik608O1McC&X-Amz-Signature=04c004eecb8c179c159c6b12ec277f2188bc0c5bcbc5a8b6853f37bbc2ce5cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQE4ALL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICa7FuhHvpFz9MLEbZ3Ay2bC7bjcdCuHb63Yfra4izLLAiEArZa9zMUYVhWpXRDbjzw%2B28DtyhUXslc5bWV7jSY8kfkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN5eMnZoVdSUzJm41yrcA79xCgLeOAHXjnOhp%2BIcFqxadDSjhjvrA8DbGEWJhlW5EO345wKTWjUMPdRBQO1jp3Zzf%2FPXm7T5h2y%2Bv44%2Fw%2B2e9%2BlhkAvcjCxBRZyXuUuu%2F1LjJbT%2Fi6fARy7%2Bg%2BH%2BKZBQgTALnO%2BMWLEXr8kw51jQEkEL%2FkXnD5h6ZC0Qa9Q7dT1myaybF4gfqPe1LeQOlt9QcyLDXQj3FGwcFcjv2EY9qhE2xZRcMHkBu7LBIkIt7sHmJfF3WC4FdhgQzRbMPGLMvxCbhBW90ZCNnpeRcjRDlKqbO6A0uDFJR7d4yLmOQIRG0t2YqwH5C7J2P5guM6IzroUo1803t1Njs666WfmlixokHCvAg5O8qQKFsZMwsKmd0ST2TF3et2urZkbap3g0pDWwq5kVxm3%2F%2FLIxHAbU%2BsGeOpFfVjFJWNHgZ%2BkEOj19NWpkewome6OG%2B8gLmwJd93%2FueYWgIfmYIQWrwo6hiJsQlXxGymbFGELAHoWDLvgL6qL0hFuWm7RxXR0lyl0gLq%2BHCFaqIY0HBrdNAmBwx1yImB4iI2UJ3KqPFj5LQc6dWvJ1lc8%2FI5hTeLvezSdOGaDhOgcTiA7IBZ7M1mshWSHxygK6b%2F1ygAtV9LyTyOGlJtgjUk7xJtSqMLON670GOqUBgtZfnM9EPZLnht8773rc7tYMTJqPmbMr5%2BJBfcThLnj7UMx%2FXHVGi%2FzY7APq1xBlspbl21GZsrj5WK15UmIs8hxh6W%2F%2BnJ9kqSt7a4BXQ%2BT%2FOQ%2FCmnFSCjpDJx7EzZk6u85gShDcyEkuoTsZksk%2B5SXP83YbQSTHGcEsJ%2F8Fc76MJixXaj0HmrRvE10wEeriXNmLPMRZ%2B8W1qtb322ik608O1McC&X-Amz-Signature=277c289d00e5c1b0be551a6c8653a99e2f86ffe79b3c1a59bcd789abff58af03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
