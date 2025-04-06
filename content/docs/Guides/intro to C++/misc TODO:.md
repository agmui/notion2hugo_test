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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4EVII2%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlH1jS0n6raWz7zFZr6qi3dLOBZ5fZM9D9nUtrYQw4BAiAzxzWdRaTryQKoAOD8O9K3T5%2F%2BKJzfmhliyIfUNnhfhir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM173FkC9Lz8D8vDlaKtwDS3ZQxNfoIa65FJrFnB6WW5POoP81JxMyiEFpvgwmbrWxYfAeeyadsdXhtMMEO9bq2CNH6TQn7CllOHM1yG4Opniv6dltxdt6GciaCcq4LBtzvpglU6%2BWqxQBmORMs17YC4udIQIJpO3r4A%2BrydGjAsdviAyTo4VEtgS4XtMUhMOH7C3xa%2Fwh%2F%2FVa8VyaY9gk8TIBpsV1ueduyQ9%2FmWk7WdirWJSu6OREU34U9ougy1WLvZoiHAAD46x9GaTQYvj2r9spSSX%2BXcFkkSR%2FF4hcR4eH3DXbKhZbAfRK8q%2BSPJ4HUI3FlXtCDeDfPlJrYMdsHsjorx93C%2B8Q6A2XwgG0zMLbNiO1WsMXaBmfX%2FvVXHdFfhUBVHBo1QGC3PEidezxGaK8EYhzDoKrFHjDwc50UtVuoWAJZJWmyMu3FdzbvmusqzQKA51U8njaqTnFaF%2BGecg%2Fcvn54DOfgR7yDJJlhv3ZXhtclhTpDqoV42Ukx%2F8qGot7Hl9YVjneGiMVknuw4mbI9bGhXTHOeH229c7nIBCoW6zuD8%2FhIEXWBCZDRj%2BFvw%2F8ewUeWgTOM7%2BiVEF2mqN8UUoUA9y5uOE572tAWh31IR5Bpxk3g3hdJxrLdx5oqvtFrewpwJ1i%2FGkw8MLGvwY6pgHfjn0TApNpCUy43ZQ1EVPrAkqYYyd%2FYG9BrxeTmVstoXNVfXEcep1yO2e%2BsD10xM8iLN08RMh%2BIKKuFUDY3UUQjf55kn%2Fe4FVbPFGckBjIzQSGg1%2Fk8%2Fkbw2RuJGDPszl9L8bBuW7%2BMwG7BbY%2FVg4w%2FwXrA1%2FE8Rsivp7JDiD6KOCCg4p2kSk81Ya81pXuryijW1CdJFMMXEtTQkXtHCbxXtSQGNlc&X-Amz-Signature=72c30dd7af1e358c444a70473af11cb594c5956d6574d44430fa9665c4e6d70b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4EVII2%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlH1jS0n6raWz7zFZr6qi3dLOBZ5fZM9D9nUtrYQw4BAiAzxzWdRaTryQKoAOD8O9K3T5%2F%2BKJzfmhliyIfUNnhfhir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM173FkC9Lz8D8vDlaKtwDS3ZQxNfoIa65FJrFnB6WW5POoP81JxMyiEFpvgwmbrWxYfAeeyadsdXhtMMEO9bq2CNH6TQn7CllOHM1yG4Opniv6dltxdt6GciaCcq4LBtzvpglU6%2BWqxQBmORMs17YC4udIQIJpO3r4A%2BrydGjAsdviAyTo4VEtgS4XtMUhMOH7C3xa%2Fwh%2F%2FVa8VyaY9gk8TIBpsV1ueduyQ9%2FmWk7WdirWJSu6OREU34U9ougy1WLvZoiHAAD46x9GaTQYvj2r9spSSX%2BXcFkkSR%2FF4hcR4eH3DXbKhZbAfRK8q%2BSPJ4HUI3FlXtCDeDfPlJrYMdsHsjorx93C%2B8Q6A2XwgG0zMLbNiO1WsMXaBmfX%2FvVXHdFfhUBVHBo1QGC3PEidezxGaK8EYhzDoKrFHjDwc50UtVuoWAJZJWmyMu3FdzbvmusqzQKA51U8njaqTnFaF%2BGecg%2Fcvn54DOfgR7yDJJlhv3ZXhtclhTpDqoV42Ukx%2F8qGot7Hl9YVjneGiMVknuw4mbI9bGhXTHOeH229c7nIBCoW6zuD8%2FhIEXWBCZDRj%2BFvw%2F8ewUeWgTOM7%2BiVEF2mqN8UUoUA9y5uOE572tAWh31IR5Bpxk3g3hdJxrLdx5oqvtFrewpwJ1i%2FGkw8MLGvwY6pgHfjn0TApNpCUy43ZQ1EVPrAkqYYyd%2FYG9BrxeTmVstoXNVfXEcep1yO2e%2BsD10xM8iLN08RMh%2BIKKuFUDY3UUQjf55kn%2Fe4FVbPFGckBjIzQSGg1%2Fk8%2Fkbw2RuJGDPszl9L8bBuW7%2BMwG7BbY%2FVg4w%2FwXrA1%2FE8Rsivp7JDiD6KOCCg4p2kSk81Ya81pXuryijW1CdJFMMXEtTQkXtHCbxXtSQGNlc&X-Amz-Signature=595e61ced2e5942bdce25ed0a8cbf83203717dece759f78b0a901d1e92f56f31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
