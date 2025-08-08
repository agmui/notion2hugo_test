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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQA6TNK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDHuLL0CWLMmXlT5Fz3vXlDwTRPIwiISaV7x275ya%2B74gIhAP6COp%2FMpSwKa%2B0WFWgIwHbzCqXkeFfeXy3XSCfh%2BBBiKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqbZjx7uWQREaxwGgq3AMfurXH5tLZM3ez2sh74%2F%2BpY5G%2FbYnHFdB3I%2BOn%2BVtmsQxb590%2FE19oRwFkT2HBDItyoTxuwNV%2FEdVipz%2BiG1piVjqvEU4iy2oswnKj3gOOnHyCySpRaxsvYYsnUc%2FoSiEsjO9T0ARwp6YlFkvvbtdtIDMMw0KxU%2FgUynLuuL%2FTEBJ%2F6qGLLvBC4uvxq%2B5UnOYQArHfkaM1yIKKvxNFGox3P%2BT8oslgbkx5G0%2BMMMVTuk0fA3y%2Ft1pyk8RTruaaJnXlgkjPOunZRrvsY2a8JiJ5O5IEpqg%2FNtOLzFBNzJVPy2FoSM4isEMckt8o5kR05rE5iz%2FL83%2BFhjFbXn6FrPQG20sc1FGGbfdwC04Mkgo0yc3a6u2WcdhFE6gPRDYZF8Ly0AKfWU9j8hTeUOAadnRfk%2FLUJHGWCrZUucX4IRGVw%2BGEPJ8uWo%2Bxske855cPz59mv2z61eAwQ8wsUCA71ZGcAGqXpfHimmFU0SeCIEeCMfGoWffPJXLPMzZE%2BKv3NGtHt%2BdfgsrYZ%2FCC95JkVOWy2Yt7Vx7%2BuJZ0w9VLmYL8bBdGsdyTBne0uCcNkNfmN9kT%2FLKpebRxNONhESc9ElNiyNIIynt%2F8PdS5AiMOqwEOOqbO6q9PlVJ6wXEDDCQ4NnEBjqkAbJ15xRmhlSv0p2QXEuF9xEJC7BNEbrZOna2V5d%2BaFI2dwYxRg8peP14i43tmkZdGLFUCbrbm8ZJoSd9nZu4s%2FvzinMwPHs%2B1OwJYt1yHRvhI6tCzvjOft0A4TkD53ofKPfLSDXhJA%2BUFN9VQGSm9UZCQMIhc%2FQtVxOTer3orhK99XIewCPenwNjCEhExMCHJqvGVB1dKEp8wEFPTRK1ZJ%2BRavEb&X-Amz-Signature=dae14e51ec9ad7b7f82bc4100f7fe82c30e25483e61c10659f5a28992787ff76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQA6TNK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDHuLL0CWLMmXlT5Fz3vXlDwTRPIwiISaV7x275ya%2B74gIhAP6COp%2FMpSwKa%2B0WFWgIwHbzCqXkeFfeXy3XSCfh%2BBBiKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqbZjx7uWQREaxwGgq3AMfurXH5tLZM3ez2sh74%2F%2BpY5G%2FbYnHFdB3I%2BOn%2BVtmsQxb590%2FE19oRwFkT2HBDItyoTxuwNV%2FEdVipz%2BiG1piVjqvEU4iy2oswnKj3gOOnHyCySpRaxsvYYsnUc%2FoSiEsjO9T0ARwp6YlFkvvbtdtIDMMw0KxU%2FgUynLuuL%2FTEBJ%2F6qGLLvBC4uvxq%2B5UnOYQArHfkaM1yIKKvxNFGox3P%2BT8oslgbkx5G0%2BMMMVTuk0fA3y%2Ft1pyk8RTruaaJnXlgkjPOunZRrvsY2a8JiJ5O5IEpqg%2FNtOLzFBNzJVPy2FoSM4isEMckt8o5kR05rE5iz%2FL83%2BFhjFbXn6FrPQG20sc1FGGbfdwC04Mkgo0yc3a6u2WcdhFE6gPRDYZF8Ly0AKfWU9j8hTeUOAadnRfk%2FLUJHGWCrZUucX4IRGVw%2BGEPJ8uWo%2Bxske855cPz59mv2z61eAwQ8wsUCA71ZGcAGqXpfHimmFU0SeCIEeCMfGoWffPJXLPMzZE%2BKv3NGtHt%2BdfgsrYZ%2FCC95JkVOWy2Yt7Vx7%2BuJZ0w9VLmYL8bBdGsdyTBne0uCcNkNfmN9kT%2FLKpebRxNONhESc9ElNiyNIIynt%2F8PdS5AiMOqwEOOqbO6q9PlVJ6wXEDDCQ4NnEBjqkAbJ15xRmhlSv0p2QXEuF9xEJC7BNEbrZOna2V5d%2BaFI2dwYxRg8peP14i43tmkZdGLFUCbrbm8ZJoSd9nZu4s%2FvzinMwPHs%2B1OwJYt1yHRvhI6tCzvjOft0A4TkD53ofKPfLSDXhJA%2BUFN9VQGSm9UZCQMIhc%2FQtVxOTer3orhK99XIewCPenwNjCEhExMCHJqvGVB1dKEp8wEFPTRK1ZJ%2BRavEb&X-Amz-Signature=f12488884c7eeee5193862fc794e642033a3d10557f17330ced6093abf2ebfb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
