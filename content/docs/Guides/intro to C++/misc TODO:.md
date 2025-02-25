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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XPUFIZE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDNZJfURLw8I%2BhfCmYlj7XYEYOOIWZLqeGjsIUZAvp1cQIhAO4gBZbUqZlWNMr62%2BJLRy44EXkPVoGhL5OwLF670x3fKv8DCEEQABoMNjM3NDIzMTgzODA1IgwRHpD8ShxUKIgQGZMq3AM48DbLY6wkTJvl3xeqtIquvC6s6TbLBE4aEK%2FyNyb9i95cB9AFxSu9le3F1MtyAtSZHHrXZpa8wzeNwZlNCOOsG22ImT6O%2FEqbvGDbXSla4HBisBdN%2FlXT1%2BI52Zll3vqdbIxLEjbIIPLlhVgRfx5IgezU2Zj5OLTNRs%2BxYAtovLgRq9TWw5WdIhsmPICZYQXiLwQngR63v3guoPZGNVL0tlu499qBcwDgto9lHs0E%2F1CAvEVsDtXY%2BLRXn1yPCZWO69ecHIXoDm9s%2F1lhspfssp%2BF5x2DIVBWc2gsKOIaBpkE7FI7%2BAfsn1INA4OO0fZHkbbuJlejCtK8U09rQrlcDM5p5g0wiZ37TSwrU4PPKTYX05OP3wHc420mh5XP%2F%2FUU%2BQWY5%2B6wsxbx28JSPmzDBqnlNdrS04xRrMxrHn0IanvByBx33ONMNUuOCG70WFiG8xk1rHJjjrHapVhdLumoS7HVU8bGYadTSLgrcagkhuW1QZTwPoITrxZo8puLaBwe1SdAGXLBXMhZ1FJ0hr8isVQ7IQLvVGil4cPiZxx5gcnKmvzdtUAUPuCuthLT3ZX%2BorA74WCheGanfqYzBmwDyBrO8FI9phPiwusQVMZQwn3BuTBVfaK1Fh9v3zD95%2FW9BjqkARHsnW31M8hcaxolqpdDWTczCl3snz%2BGY9uaoJi2VaqD4nsJc2cyhbJMlW%2FPwjdwtTJauIv%2Bxatj9uBspZZ%2BDMfUdOsVv%2BEZmfyFILmkGO3P0udM7ERwDJpPK%2BKZUc%2FcIedGk7Rd5iFJLqHu8ESMGIwX8AtGD9MLxPyqiSbioY%2BpgkSXkB%2F0LFHryrJQxbfzQs6p%2BmwwCBXXgsfT%2FuP0iJ1LHanF&X-Amz-Signature=6d1788f6a1eea822cb1ab5b72d7a6bde5418220a9e55286908175a73687baf7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XPUFIZE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDNZJfURLw8I%2BhfCmYlj7XYEYOOIWZLqeGjsIUZAvp1cQIhAO4gBZbUqZlWNMr62%2BJLRy44EXkPVoGhL5OwLF670x3fKv8DCEEQABoMNjM3NDIzMTgzODA1IgwRHpD8ShxUKIgQGZMq3AM48DbLY6wkTJvl3xeqtIquvC6s6TbLBE4aEK%2FyNyb9i95cB9AFxSu9le3F1MtyAtSZHHrXZpa8wzeNwZlNCOOsG22ImT6O%2FEqbvGDbXSla4HBisBdN%2FlXT1%2BI52Zll3vqdbIxLEjbIIPLlhVgRfx5IgezU2Zj5OLTNRs%2BxYAtovLgRq9TWw5WdIhsmPICZYQXiLwQngR63v3guoPZGNVL0tlu499qBcwDgto9lHs0E%2F1CAvEVsDtXY%2BLRXn1yPCZWO69ecHIXoDm9s%2F1lhspfssp%2BF5x2DIVBWc2gsKOIaBpkE7FI7%2BAfsn1INA4OO0fZHkbbuJlejCtK8U09rQrlcDM5p5g0wiZ37TSwrU4PPKTYX05OP3wHc420mh5XP%2F%2FUU%2BQWY5%2B6wsxbx28JSPmzDBqnlNdrS04xRrMxrHn0IanvByBx33ONMNUuOCG70WFiG8xk1rHJjjrHapVhdLumoS7HVU8bGYadTSLgrcagkhuW1QZTwPoITrxZo8puLaBwe1SdAGXLBXMhZ1FJ0hr8isVQ7IQLvVGil4cPiZxx5gcnKmvzdtUAUPuCuthLT3ZX%2BorA74WCheGanfqYzBmwDyBrO8FI9phPiwusQVMZQwn3BuTBVfaK1Fh9v3zD95%2FW9BjqkARHsnW31M8hcaxolqpdDWTczCl3snz%2BGY9uaoJi2VaqD4nsJc2cyhbJMlW%2FPwjdwtTJauIv%2Bxatj9uBspZZ%2BDMfUdOsVv%2BEZmfyFILmkGO3P0udM7ERwDJpPK%2BKZUc%2FcIedGk7Rd5iFJLqHu8ESMGIwX8AtGD9MLxPyqiSbioY%2BpgkSXkB%2F0LFHryrJQxbfzQs6p%2BmwwCBXXgsfT%2FuP0iJ1LHanF&X-Amz-Signature=3506ee75a4e8b4f9bee58759193bf3d01a3326412fa65bba86188306d142f7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
