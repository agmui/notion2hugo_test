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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6OXZXY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFsA8KMU7cLqOcIM3b9Lig6fRGgGYH8JXOhaBx3lRfbmAiBtBhHTh2%2Brcp3N11taroUvtRhhQRp2Oj3jf7GgPjT%2F2SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS6viG3EfJCTWstbyKtwDaoLEZQOWshpxC4Bjscity2IIjJR5QsAo7z3UvmPJfpcanh8L4ZOiyhnuP85Y34Ha%2BuYdw%2Fjy3n56ZZzlVOmaiFyGt%2BZtbLPKQcXAQ5B3p%2BhuZOKBP8MOD8dUSkzEyH2ET7NeMuvuawQzFYRj8GGpj7eWfz3jpRt8RAW2R%2BvLso7OrShMmynW9X0Pk4Igi6LjFUDW06dMCvuFkdXyHgh%2FAsWkb9MWjSGThoh7RuK5qlcd2I%2BrEzr5VXw%2Bx1nSHwZppMDj%2BjgyxudNz6A%2Bjlgl8uSnOVVsznvsNuiK7%2Fu5SaNg1vdSqKtIwUnMMoGueYH13igbVMbvi3BzCllvABCFR2Pj1Cw0gDOLjL%2FGvlaokGwJZ6mDzYZspSG3b3%2FfFmeLphcOVHLHowNnyaYkFqmUDhPjbVbDQskY%2BFI9rXhCmO8YPa3UaCkMLDMckLHQpfXOBJeU1SgJTIlO2SUQla35p6rlcfSfCRPtmt7VGBUyH5Fcy2d%2Bbd%2B3zvDCr7HJ%2FzuRYSdyxltr44THQgiN9K8JmIrr4KBu3fyEd%2FMBsdKpfzXdX7B6%2BCN8waiadYHk5YvI5exfXMsIrJO89rnwAh4rGQem5pSmZPJh%2Fz1xtdzYov5xnQ9NWzK7G%2By5D4Yw95SovwY6pgGkw%2FlZGgTD24HrqrHOQMg7kA02UGl0VbAtnwL70RAayRgkfnTkObQoZju3D%2FI9R8fIznOyiZony1V%2BGo9Jc25RZs3bko%2BwkhWBLiZGsznqiPF9ZYUJu3p%2Fa1N4TVn4RwWdBQQVUk4lHpIE67CNFh914ghrtZIX3v738l4XeEdCWNS5mq%2FGLq7NUqkaEcOa8CqKOgiYR%2FR82Dudc59lEjkQnaTeJudQ&X-Amz-Signature=d81f8c7935dc8281a71d7ed9f04c291a0c7350833c7bcad95d10bba6b21d9f30&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6OXZXY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFsA8KMU7cLqOcIM3b9Lig6fRGgGYH8JXOhaBx3lRfbmAiBtBhHTh2%2Brcp3N11taroUvtRhhQRp2Oj3jf7GgPjT%2F2SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS6viG3EfJCTWstbyKtwDaoLEZQOWshpxC4Bjscity2IIjJR5QsAo7z3UvmPJfpcanh8L4ZOiyhnuP85Y34Ha%2BuYdw%2Fjy3n56ZZzlVOmaiFyGt%2BZtbLPKQcXAQ5B3p%2BhuZOKBP8MOD8dUSkzEyH2ET7NeMuvuawQzFYRj8GGpj7eWfz3jpRt8RAW2R%2BvLso7OrShMmynW9X0Pk4Igi6LjFUDW06dMCvuFkdXyHgh%2FAsWkb9MWjSGThoh7RuK5qlcd2I%2BrEzr5VXw%2Bx1nSHwZppMDj%2BjgyxudNz6A%2Bjlgl8uSnOVVsznvsNuiK7%2Fu5SaNg1vdSqKtIwUnMMoGueYH13igbVMbvi3BzCllvABCFR2Pj1Cw0gDOLjL%2FGvlaokGwJZ6mDzYZspSG3b3%2FfFmeLphcOVHLHowNnyaYkFqmUDhPjbVbDQskY%2BFI9rXhCmO8YPa3UaCkMLDMckLHQpfXOBJeU1SgJTIlO2SUQla35p6rlcfSfCRPtmt7VGBUyH5Fcy2d%2Bbd%2B3zvDCr7HJ%2FzuRYSdyxltr44THQgiN9K8JmIrr4KBu3fyEd%2FMBsdKpfzXdX7B6%2BCN8waiadYHk5YvI5exfXMsIrJO89rnwAh4rGQem5pSmZPJh%2Fz1xtdzYov5xnQ9NWzK7G%2By5D4Yw95SovwY6pgGkw%2FlZGgTD24HrqrHOQMg7kA02UGl0VbAtnwL70RAayRgkfnTkObQoZju3D%2FI9R8fIznOyiZony1V%2BGo9Jc25RZs3bko%2BwkhWBLiZGsznqiPF9ZYUJu3p%2Fa1N4TVn4RwWdBQQVUk4lHpIE67CNFh914ghrtZIX3v738l4XeEdCWNS5mq%2FGLq7NUqkaEcOa8CqKOgiYR%2FR82Dudc59lEjkQnaTeJudQ&X-Amz-Signature=b052370cf9d1c91a65cc867f807f7b882d1574a339bc9b3010a9936cd15b7459&X-Amz-SignedHeaders=host&x-id=GetObject)

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
