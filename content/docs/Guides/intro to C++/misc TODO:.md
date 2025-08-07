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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OK3G6RP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbCYeWamnTVQEjpHf3bmFbhG90%2BGf2hokhTRu84JLWwQIgbd66PHnLRJsLWYpSzpdQXQ%2FhNBdW5CUonfOzY3h7NCUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmv5i1%2F8hP04QcF7CrcA%2F7o6a%2By0BDIpmZIsdtij31HRDXFihF58AeowykCbefEBSqjj0d0sMmqGDRl4eeXNo0SWs1IgM0Fp2MEguweQFVOqGhj0vDNCY%2BuUJFn%2FzPv5GNq5lN5VMQuyYnAVjletTUskAdy64J6ENHD%2F2VJN2wwenfijGDi4b99b7EhqVBEuXXISQK7FQvReRKC6Z4C5s9vvKbPdcvbFGeA1iR2dClu9mlbd%2BXxQnCoOWJQV3rixzwDySHuwPSFmSwuTLiegs8L8q5JOpJQcDzjr6Z25yYHoicHA2%2BCuhL1jRY9FY8Nvog2nlKzhW4iZ%2BPraXspzjsjbZXoqAOY5NSg9Hi8ME1aMdv2h9UsLMcJb2dh0%2BdyhgD49Qwf5qNqrv%2BOZBQioEEEiL46lSf1inLbruW9RT6k16o8NCo%2BfkpasuVX%2FvSGqBR4Vm6h8igSc7%2BU2PfznFuUN9rgxrRYDvn0ghHkoFoVUvwJNz5zAocg6gJy2HWe3einlx%2BEbVCypAh4Z5LRl6C0yiOq%2FgYfyMwOe%2FPsOB%2BZK2%2FOCqyMGgSWQXpmQTTKATUusoJkLihVOqHpljwhKOzYIAw5%2BDcHqNGDrPmqFJSjL8jqdpLW7U6hZJxlHNIAxHaQtJ2dJqPeuJ81MPiQ0cQGOqUBM%2FZHPl40DSBv9XAmFAHj7VW1AhsopA5Cd6F8qkMzzg9ZPev40tFi9xV%2BNeSkEWh3t31z7QsZP3jBHOnAwnYeIfHoPSqrOaRgFzyWW8uXxuqOBK960CSrpvaZncB8D41AMViwnc44rBjUOsZa%2F8QxXuDHvpY8DrZONbJzHKcCzpqkUPQliagzFXloTqc3KbBB6PaRVn93hDT1mxRv2VfO7v5A11BA&X-Amz-Signature=f5ce5b0e0d706cdd832203c2f58c012f31f86c2a103eb0961bc612dd9f3b2e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OK3G6RP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbCYeWamnTVQEjpHf3bmFbhG90%2BGf2hokhTRu84JLWwQIgbd66PHnLRJsLWYpSzpdQXQ%2FhNBdW5CUonfOzY3h7NCUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmv5i1%2F8hP04QcF7CrcA%2F7o6a%2By0BDIpmZIsdtij31HRDXFihF58AeowykCbefEBSqjj0d0sMmqGDRl4eeXNo0SWs1IgM0Fp2MEguweQFVOqGhj0vDNCY%2BuUJFn%2FzPv5GNq5lN5VMQuyYnAVjletTUskAdy64J6ENHD%2F2VJN2wwenfijGDi4b99b7EhqVBEuXXISQK7FQvReRKC6Z4C5s9vvKbPdcvbFGeA1iR2dClu9mlbd%2BXxQnCoOWJQV3rixzwDySHuwPSFmSwuTLiegs8L8q5JOpJQcDzjr6Z25yYHoicHA2%2BCuhL1jRY9FY8Nvog2nlKzhW4iZ%2BPraXspzjsjbZXoqAOY5NSg9Hi8ME1aMdv2h9UsLMcJb2dh0%2BdyhgD49Qwf5qNqrv%2BOZBQioEEEiL46lSf1inLbruW9RT6k16o8NCo%2BfkpasuVX%2FvSGqBR4Vm6h8igSc7%2BU2PfznFuUN9rgxrRYDvn0ghHkoFoVUvwJNz5zAocg6gJy2HWe3einlx%2BEbVCypAh4Z5LRl6C0yiOq%2FgYfyMwOe%2FPsOB%2BZK2%2FOCqyMGgSWQXpmQTTKATUusoJkLihVOqHpljwhKOzYIAw5%2BDcHqNGDrPmqFJSjL8jqdpLW7U6hZJxlHNIAxHaQtJ2dJqPeuJ81MPiQ0cQGOqUBM%2FZHPl40DSBv9XAmFAHj7VW1AhsopA5Cd6F8qkMzzg9ZPev40tFi9xV%2BNeSkEWh3t31z7QsZP3jBHOnAwnYeIfHoPSqrOaRgFzyWW8uXxuqOBK960CSrpvaZncB8D41AMViwnc44rBjUOsZa%2F8QxXuDHvpY8DrZONbJzHKcCzpqkUPQliagzFXloTqc3KbBB6PaRVn93hDT1mxRv2VfO7v5A11BA&X-Amz-Signature=d0c5e9e3e2c9cc3a263088c48db5dcf7dbc641c90c820845b81044f7d3b3f89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
