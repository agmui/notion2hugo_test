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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQAKEGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMqqP0s6h%2FxxXQwOXKj%2FeJB7i7Xc4dDR993u%2B1Q7pFrAiAjOHoFTYoGZOLum4CkfSlg4X4LNaFb%2F6IWhJpuYn8pSyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjROdxdp6ov5%2BKB1qKtwD0TiTvVEUSN4hmv9UtdRTWjUZmBrIQvnKMibmZ%2F0FaCaKYGpwRo4sRgV9mUYIwiAf0YhdicDGI%2FgyPy7uBW5M%2FTGGh9LAuMnfK%2FFmdV0Fk5v9QZGwX%2Fb5tYZb1uM5xTTNdl%2BSlZgCTVcnd0r3ycBh9kkidJ%2BN4vMMaKMYNrcNvzBrCVz9ywdkA4HBTiVn0Gv44lC4QIFua4OX%2Bh9bLOGfnnP%2BLRk6WvKqbMzbOuITKIQzryCN6oMVrO8OmpJubVZX0b64oZKXv%2FlwHQtZwWoYWogX%2BKqMPWcLp5i%2FprqDAtrLnIBdh0dSrz68JIuI%2BNxZ6dzzx5Os6KXQOkm%2FM2g5RfNamusM6DAZjuGzJEmTcv2IzHaR019arzyfUhKOvpFbfshfIWUMIK%2Fx28Uj%2BvXBPIaoIC21hkvEhwg3RL2J7hql2Qt9L3DCuOe5UY3AChTeDDf3sWVerCS2YYAJ0Ksx5eSauis%2B61CV89cahipYSm86%2BD8whdDkUg0incvldMhJIKJgvdOhBEaQIxpaqVhxpgew0M%2ByUEW19j2bHqMrKw8ZjYm8LS460YnGGMarQ1IagQKoQtrNAQ%2FUTMNu3lM%2Bkq%2BtlCGj0l8rLHYVypuxGRA9HmU3hhk%2F%2FvnOlLcw0%2FaqvQY6pgGBSB0WQDDdpgarxP0UiSMfjP%2Be2wMZ10tEnZO4n4sivhVyvfqYLqucZioamRE%2F3%2F%2Bz3F5v2YCkzCp0LxvEDVOAUKkoDBZYqKGl9jjS5lMBr7Z0FvQZz%2BjHEuihspH7LA%2BL7dIFo4WLZvjSxOszIZkULqkROrH7Y9agBbDjq0%2B41HBmH%2Fxh%2F4P%2FzoxD%2BFAljRT4x99JBY6xyx4TsEct%2FevycRgaUD%2F0&X-Amz-Signature=dcbc5305dd394e640bc0dda6ccd1e5de7a6a1c042cf0da670ce973ce72d0a3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQAKEGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMqqP0s6h%2FxxXQwOXKj%2FeJB7i7Xc4dDR993u%2B1Q7pFrAiAjOHoFTYoGZOLum4CkfSlg4X4LNaFb%2F6IWhJpuYn8pSyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjROdxdp6ov5%2BKB1qKtwD0TiTvVEUSN4hmv9UtdRTWjUZmBrIQvnKMibmZ%2F0FaCaKYGpwRo4sRgV9mUYIwiAf0YhdicDGI%2FgyPy7uBW5M%2FTGGh9LAuMnfK%2FFmdV0Fk5v9QZGwX%2Fb5tYZb1uM5xTTNdl%2BSlZgCTVcnd0r3ycBh9kkidJ%2BN4vMMaKMYNrcNvzBrCVz9ywdkA4HBTiVn0Gv44lC4QIFua4OX%2Bh9bLOGfnnP%2BLRk6WvKqbMzbOuITKIQzryCN6oMVrO8OmpJubVZX0b64oZKXv%2FlwHQtZwWoYWogX%2BKqMPWcLp5i%2FprqDAtrLnIBdh0dSrz68JIuI%2BNxZ6dzzx5Os6KXQOkm%2FM2g5RfNamusM6DAZjuGzJEmTcv2IzHaR019arzyfUhKOvpFbfshfIWUMIK%2Fx28Uj%2BvXBPIaoIC21hkvEhwg3RL2J7hql2Qt9L3DCuOe5UY3AChTeDDf3sWVerCS2YYAJ0Ksx5eSauis%2B61CV89cahipYSm86%2BD8whdDkUg0incvldMhJIKJgvdOhBEaQIxpaqVhxpgew0M%2ByUEW19j2bHqMrKw8ZjYm8LS460YnGGMarQ1IagQKoQtrNAQ%2FUTMNu3lM%2Bkq%2BtlCGj0l8rLHYVypuxGRA9HmU3hhk%2F%2FvnOlLcw0%2FaqvQY6pgGBSB0WQDDdpgarxP0UiSMfjP%2Be2wMZ10tEnZO4n4sivhVyvfqYLqucZioamRE%2F3%2F%2Bz3F5v2YCkzCp0LxvEDVOAUKkoDBZYqKGl9jjS5lMBr7Z0FvQZz%2BjHEuihspH7LA%2BL7dIFo4WLZvjSxOszIZkULqkROrH7Y9agBbDjq0%2B41HBmH%2Fxh%2F4P%2FzoxD%2BFAljRT4x99JBY6xyx4TsEct%2FevycRgaUD%2F0&X-Amz-Signature=a8d3ef23ba120852aae6af582b24deee9849231b2e929adcbd8f1cbec44407ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
