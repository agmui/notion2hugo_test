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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGH2EQG5%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQClrm99rYAxCyW%2Bj%2BNYRyXh8v%2Bfjx9m8jat71HHCRW%2BQAIhAM7DQ5sTbzkqhm9OeUGdwoHH2LckOLoC6Y1D595pX%2Fd8KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqRw7pcnC%2FxNLJX9sq3AOad9aF%2BLF79TQaU3OxOf8k7kfnrUDlol%2BSsFpotSP%2B7TtZRzVofToSZLCXbgsP2IqMakfVGONzfEhP0CrDZs9YRMS86JamRuXYae4GM8SfM1uK3nZbyLjUGLRjAQtfEkC40f4q1iApN2DmoLTCVb%2FwPSXw03jPLqoKALdaH7wpK3WkQu8bZadXqDGx%2BqM1rCsTuFasgnnQXAV7KUdDkb7MrLpPc5MH9yB9UWbM9G6dC4eO7jiRttxRRHc2wP02AQdK1WYhzLLJ5xHCAhbZ01BUuwT9cIzTuOju8oE3lhEs9NfzjxyzJO%2BJ5uwnlnGoxSo9niE0lvAmyrllEvTOAIJbotElhcQ5vU5hsDn0rT7LlCx8rufb1k3vmvGjOWI7wEljnnIbJIGRN5fIsBQTi4%2B04bvUeCM%2FKJCNBCqU0VmE1o7Ej0fasDolTH5R6tAb0KoLaZ0kb6iFyWTDrttBRlpIuFsmNbs0K6dsajwPKzwW%2FlKzS0k6d7GiI2cIZzgis2yCPYtEl2qZnYGcqHjstjRBKe%2FQzLk8HnqA10vJn6eqsKHlUlr3fkmz0%2FBeot4gUtWOvnGeO98A7F6RYIAtww9TlKRQtMobwsxtboffZRFUFnaNxxK6Usv0k3iasjDdwLrTBjqkATs7lMasxccebqmo2HZnja4A%2BGa0Nygs0Sz6BcYTYontg8a7E1M9FCXcHSsJMqBuAkTNxZsdZHmXYCQW%2FUpXz9srylvfA%2FTQB0%2B6Vrmi0w4LBYwzula1tR6K3LGLLCO5Mww%2Fr%2FljC2z4c%2FH4hlgiRRTEDmAcIYhLBu4pkI6qZQVlDYuH%2B9xm0kQNGhv4GTyHN9PNxHS2pZmtwQ8U7sygmYMsajzk&X-Amz-Signature=742d8c2b05854d848232fa2529a73610e15f28d334544f5cdc72f7724695b693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGH2EQG5%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQClrm99rYAxCyW%2Bj%2BNYRyXh8v%2Bfjx9m8jat71HHCRW%2BQAIhAM7DQ5sTbzkqhm9OeUGdwoHH2LckOLoC6Y1D595pX%2Fd8KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqRw7pcnC%2FxNLJX9sq3AOad9aF%2BLF79TQaU3OxOf8k7kfnrUDlol%2BSsFpotSP%2B7TtZRzVofToSZLCXbgsP2IqMakfVGONzfEhP0CrDZs9YRMS86JamRuXYae4GM8SfM1uK3nZbyLjUGLRjAQtfEkC40f4q1iApN2DmoLTCVb%2FwPSXw03jPLqoKALdaH7wpK3WkQu8bZadXqDGx%2BqM1rCsTuFasgnnQXAV7KUdDkb7MrLpPc5MH9yB9UWbM9G6dC4eO7jiRttxRRHc2wP02AQdK1WYhzLLJ5xHCAhbZ01BUuwT9cIzTuOju8oE3lhEs9NfzjxyzJO%2BJ5uwnlnGoxSo9niE0lvAmyrllEvTOAIJbotElhcQ5vU5hsDn0rT7LlCx8rufb1k3vmvGjOWI7wEljnnIbJIGRN5fIsBQTi4%2B04bvUeCM%2FKJCNBCqU0VmE1o7Ej0fasDolTH5R6tAb0KoLaZ0kb6iFyWTDrttBRlpIuFsmNbs0K6dsajwPKzwW%2FlKzS0k6d7GiI2cIZzgis2yCPYtEl2qZnYGcqHjstjRBKe%2FQzLk8HnqA10vJn6eqsKHlUlr3fkmz0%2FBeot4gUtWOvnGeO98A7F6RYIAtww9TlKRQtMobwsxtboffZRFUFnaNxxK6Usv0k3iasjDdwLrTBjqkATs7lMasxccebqmo2HZnja4A%2BGa0Nygs0Sz6BcYTYontg8a7E1M9FCXcHSsJMqBuAkTNxZsdZHmXYCQW%2FUpXz9srylvfA%2FTQB0%2B6Vrmi0w4LBYwzula1tR6K3LGLLCO5Mww%2Fr%2FljC2z4c%2FH4hlgiRRTEDmAcIYhLBu4pkI6qZQVlDYuH%2B9xm0kQNGhv4GTyHN9PNxHS2pZmtwQ8U7sygmYMsajzk&X-Amz-Signature=6f7681e32c7343cf5916cbb2ddee263e4a111bd2fda4e3f6c5728f25e24a5697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
