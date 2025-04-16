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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XWBZRYQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5HKg7aPq9TniL8R1jBQy3BQfmMIL%2FJziKQFvjA02M2AiAYGbKfefh66BozCP0cjw%2Bqrvuv%2BktCJv%2F2rFFfNcMb6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMFFYV5ov%2BZfyeTV1fKtwD4DkQGZXr44gp50huKQYN14zWxMNdzCBGiyFUjNFXWbf6tvWPocjDotzSZHI1ocgG9OMOSb1nTY0NAfUPKNPhLNSuWiVjAlygPW5wWlcqn%2FeUCZsfY%2FrRyMAMU7stWlLEilvo2pN1GYBmxuXpf81P97iYSRHmvbHxaAGxu68NVGCkYyOpAqdKCza1jQqET%2BVqUXXikR6lBNJLS%2FhW2z3mStJF8xDEYmGdakB3E0S3UnBCP4gmznMUk81mZatUJTp4W6EKTDG5IsFOu3VrQVFr8ASsniQ9eYsCurr%2FKGdXZF5GQFe2vfGC4dIMotXIdMOPiFXp7im4hDqSbVaKhXhwdlO%2FYiMVhmte3FkjxEWcBswcFYpEe7Ds2ojlznu7tqTpmel2fnP6GPVRK4DJ2SZ%2Fiicsuz41ynjZcqAb51PxWT%2Fl9I5RwJw90YP1tC9hG7alDtMafkXB212cejvZdsWyvcvsJNHq%2F%2FodkP3txpyLLvo5ZJw6GaWi%2BCb0aeNwSV04%2BC%2FKW%2By19qI0xYSjLrXecsPryUuOP%2BAqm%2BAQVpIf4LqMS7xOh1YF7%2FlI7jQ9qXL%2Bk8TYdRHYo8b3VE%2FDtSMm6ROQirA%2BqXsIc4iav%2FdH5nO3MTDShc8e72dlb5cwqcD9vwY6pgG5Mzw10GqSL%2Fj7QTfOsl8IAfUsR43asnzmJIos15uvCpDEY8%2BrgmkWTJlWMDCNB102jswU2vMfPLASHcsWDO62oWL39AXdyXz0jEwcfngun142wnhXXZfC04qu%2BZSZ7wPFF%2BmsKRylxxhYIaOZNYUcp1kQ6YSewfNPW1gR4e0nIN9BY%2F1ny665fVX3v0F%2F4wLnzrErbPvIrRwj6yI63hqJAN6kDqgK&X-Amz-Signature=56e85efb25b1b9e8a1dfc5a60cab3a42a69a378ba70ac4c41b4ed20be9221c64&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XWBZRYQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5HKg7aPq9TniL8R1jBQy3BQfmMIL%2FJziKQFvjA02M2AiAYGbKfefh66BozCP0cjw%2Bqrvuv%2BktCJv%2F2rFFfNcMb6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMFFYV5ov%2BZfyeTV1fKtwD4DkQGZXr44gp50huKQYN14zWxMNdzCBGiyFUjNFXWbf6tvWPocjDotzSZHI1ocgG9OMOSb1nTY0NAfUPKNPhLNSuWiVjAlygPW5wWlcqn%2FeUCZsfY%2FrRyMAMU7stWlLEilvo2pN1GYBmxuXpf81P97iYSRHmvbHxaAGxu68NVGCkYyOpAqdKCza1jQqET%2BVqUXXikR6lBNJLS%2FhW2z3mStJF8xDEYmGdakB3E0S3UnBCP4gmznMUk81mZatUJTp4W6EKTDG5IsFOu3VrQVFr8ASsniQ9eYsCurr%2FKGdXZF5GQFe2vfGC4dIMotXIdMOPiFXp7im4hDqSbVaKhXhwdlO%2FYiMVhmte3FkjxEWcBswcFYpEe7Ds2ojlznu7tqTpmel2fnP6GPVRK4DJ2SZ%2Fiicsuz41ynjZcqAb51PxWT%2Fl9I5RwJw90YP1tC9hG7alDtMafkXB212cejvZdsWyvcvsJNHq%2F%2FodkP3txpyLLvo5ZJw6GaWi%2BCb0aeNwSV04%2BC%2FKW%2By19qI0xYSjLrXecsPryUuOP%2BAqm%2BAQVpIf4LqMS7xOh1YF7%2FlI7jQ9qXL%2Bk8TYdRHYo8b3VE%2FDtSMm6ROQirA%2BqXsIc4iav%2FdH5nO3MTDShc8e72dlb5cwqcD9vwY6pgG5Mzw10GqSL%2Fj7QTfOsl8IAfUsR43asnzmJIos15uvCpDEY8%2BrgmkWTJlWMDCNB102jswU2vMfPLASHcsWDO62oWL39AXdyXz0jEwcfngun142wnhXXZfC04qu%2BZSZ7wPFF%2BmsKRylxxhYIaOZNYUcp1kQ6YSewfNPW1gR4e0nIN9BY%2F1ny665fVX3v0F%2F4wLnzrErbPvIrRwj6yI63hqJAN6kDqgK&X-Amz-Signature=e44d4948f4bcc55963ed9b90f189649f4a616a44b50770a1c6d9d99690ddc476&X-Amz-SignedHeaders=host&x-id=GetObject)

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
