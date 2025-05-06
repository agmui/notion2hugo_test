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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J55V2W%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFihixkIYTqHDlhtxe3KEJaz21lZ12ecnH3k5hVrKG%2FsAiEA9xiWTKTOHrtW%2BuqwgEtccyThZ19caWzTb5Sse6IEBwkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNtpwHpwJeF2ejnQ7yrcA8CnyJD4X6hML9Z8I0tLUYkTdicxgKYjFS%2B6IyXCFNUWGJFR1DpkycRTjFYb7XJFnIvwBMqbVLh15Lal%2BAxmB1fbUsJxDqR3ziCY9AJ07Uvl6hxkwy2igP8%2FgKqCaWfDBghFiogmU0OTK2xXcw9%2B2w%2FDyGmQFDyxVnjaO%2Bo%2FwLr59Xb06QDVUuVpycYDcE3EGJMlN0TaL35opovDbpPDHuSON4LE7H6xwpucJMZXoRdR9RC%2Bz2bJouQCECDZgk1fKdoeRPjOJ%2BlMZnBTrt05%2FfBd2QvgcdH4DbpJHd5y6qQC8Bb1tw1igtFJxw2rmYriUrYAPbdAbtCIpc41PJFY5oKIY7Jfa%2FKbkWIoB76Urw4k6cXCXvnn3SZiU4O5jr1VQYOLxEyTcqNW4F0hYORYjTAbXjSm%2FIXljGTjco0aIofjMlrpvniyX3AJwh46whO%2FnM3P8rtcgeSG34Kdl8cjuKxCkEa%2Fdkwwi5SjBcjboFaEfU27IB5Kryf5%2BQcdL4%2BvQGL6G8mtT%2FgaBI8G4cx32P7m1eIWPD0yW4PsaYPjaRSNHn358%2FjvM6W2zPsdLCLvq9qKGFvibdNTRD7C%2BqrDbo55TamD6PzhJ%2B6yCZyS1sFrTBReo9Oq41XpzqnMMLHL5cAGOqUB8AMh930P%2BMJfHiQj0kLoFMiD7hj%2FRiyWxch4O%2FpKnm4SQnm%2FxIW2n754lWCbdUxXQ5r6DdRcoFE0aRSBE%2BrXatCAnEDrdZXtPh1m050TvW%2B%2BhXh6mkih2thConz00%2FITJNW9UiZp6qyBH%2Bxe7dknenUUrEpJiTFUkOJr%2Fod%2Fwl3A0XZ%2BNPisaIgQM6UkphaP10nOZXY8V4qlm7WSW0BzPg1akmJa&X-Amz-Signature=859dcc2f8c0360d339bbfdbc40222cce76feaa8b6903d3e10297db42525bd799&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J55V2W%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFihixkIYTqHDlhtxe3KEJaz21lZ12ecnH3k5hVrKG%2FsAiEA9xiWTKTOHrtW%2BuqwgEtccyThZ19caWzTb5Sse6IEBwkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNtpwHpwJeF2ejnQ7yrcA8CnyJD4X6hML9Z8I0tLUYkTdicxgKYjFS%2B6IyXCFNUWGJFR1DpkycRTjFYb7XJFnIvwBMqbVLh15Lal%2BAxmB1fbUsJxDqR3ziCY9AJ07Uvl6hxkwy2igP8%2FgKqCaWfDBghFiogmU0OTK2xXcw9%2B2w%2FDyGmQFDyxVnjaO%2Bo%2FwLr59Xb06QDVUuVpycYDcE3EGJMlN0TaL35opovDbpPDHuSON4LE7H6xwpucJMZXoRdR9RC%2Bz2bJouQCECDZgk1fKdoeRPjOJ%2BlMZnBTrt05%2FfBd2QvgcdH4DbpJHd5y6qQC8Bb1tw1igtFJxw2rmYriUrYAPbdAbtCIpc41PJFY5oKIY7Jfa%2FKbkWIoB76Urw4k6cXCXvnn3SZiU4O5jr1VQYOLxEyTcqNW4F0hYORYjTAbXjSm%2FIXljGTjco0aIofjMlrpvniyX3AJwh46whO%2FnM3P8rtcgeSG34Kdl8cjuKxCkEa%2Fdkwwi5SjBcjboFaEfU27IB5Kryf5%2BQcdL4%2BvQGL6G8mtT%2FgaBI8G4cx32P7m1eIWPD0yW4PsaYPjaRSNHn358%2FjvM6W2zPsdLCLvq9qKGFvibdNTRD7C%2BqrDbo55TamD6PzhJ%2B6yCZyS1sFrTBReo9Oq41XpzqnMMLHL5cAGOqUB8AMh930P%2BMJfHiQj0kLoFMiD7hj%2FRiyWxch4O%2FpKnm4SQnm%2FxIW2n754lWCbdUxXQ5r6DdRcoFE0aRSBE%2BrXatCAnEDrdZXtPh1m050TvW%2B%2BhXh6mkih2thConz00%2FITJNW9UiZp6qyBH%2Bxe7dknenUUrEpJiTFUkOJr%2Fod%2Fwl3A0XZ%2BNPisaIgQM6UkphaP10nOZXY8V4qlm7WSW0BzPg1akmJa&X-Amz-Signature=58ebc057503f4cf80af61cfe0f923b680253c1d604052cc9b0c6ab4253dda156&X-Amz-SignedHeaders=host&x-id=GetObject)

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
