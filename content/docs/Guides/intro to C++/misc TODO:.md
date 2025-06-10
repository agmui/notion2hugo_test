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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BW6KBE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FWm1N0XAm0uIBMScTOYOQwEvffPuuusnddrj0q2TOeQIhAPOUC%2FB%2BNxdJCaVzt%2BCM8zlGJSfCDJtTjTgArQ3tFV03KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNfRsGaI1mIgqFMwgq3AOb0NdeQIjDnfNcopLZD4N3VBHFKpV7lJBmZuPd183QBXqHXNrnyVtDJ3OieZkPZmM9N%2Fk2s6cWLPcAAog4U7EJXGKrrbaEhaR%2FEeFC57i9pLiX8vW6BowC5Dq1mQB6qiB6s7P9v0gaC7S1vP4%2BKRjAoEMNOadD0nZi8FMlzMHK42PLlOyfHfZbxHSM9NUuGBR5nkcJqL715ApTzj0TzyEoJbl%2F7dqd00XjHlSrWCQKU4oBp5FEpKPdS7DpXQ8%2FaJnqBgoD0HqXh%2FCXhRNHYbpGupU%2F26p0LRCxEPqQmC8LTQSPENaWz%2F%2BOgAXUCS3ItzbwdRSqvgcGh%2FBGlOEiW2uoex0YUqrb7MNMB3yOKvcdYbRrpOALrqsXq3fyioAWwtDBu0aOxkfjKEgTJz%2FKbh7NJco36%2BH4h7uKJ5vCTANwOHyWhKf1icqU6UE3p%2B0wBPM3tEhSna5Ou50Guew3%2BUpNiJpSkoL3MbBlGklZr9XK5XyGITXQwk2c9usqXuXuFknG16b7xBDGmWKF45ArNmdItW1KOb7Z1Ur%2BudrVpQVG8Ih6%2B7pbxyMByWz6DIMgtw2y6GRYZQCW9DUC7fwLcrnhlzRMn5aUK7QhISG%2Fk33FvgxOgoooJ%2BXJodIOfTDY35%2FCBjqkARSyVZxfUamwmFz0ts4exw4gO%2BKbc7AL2ZQ3F7QDTmelyz6HnN6tt0MDrIW3aKudiBy5cHbZxGBOwnB7ClvTRxWWFGjiSgoi8cYCOyB8GUKp%2FVZ8Z52i7783JKc9%2B2hzTo7%2Bf6eeQpLk2IO1BBDtPsZMpmVC9D405L00MS7BkH%2BKxuLY%2FjJFze6VoZxOnOPmdO37kd9BEYW%2FkMLRp2oLu%2BljYsC3&X-Amz-Signature=60fa65ee87304621f6897e778a40aebecce1198c4a84c0075c76212ec42ad9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BW6KBE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FWm1N0XAm0uIBMScTOYOQwEvffPuuusnddrj0q2TOeQIhAPOUC%2FB%2BNxdJCaVzt%2BCM8zlGJSfCDJtTjTgArQ3tFV03KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNfRsGaI1mIgqFMwgq3AOb0NdeQIjDnfNcopLZD4N3VBHFKpV7lJBmZuPd183QBXqHXNrnyVtDJ3OieZkPZmM9N%2Fk2s6cWLPcAAog4U7EJXGKrrbaEhaR%2FEeFC57i9pLiX8vW6BowC5Dq1mQB6qiB6s7P9v0gaC7S1vP4%2BKRjAoEMNOadD0nZi8FMlzMHK42PLlOyfHfZbxHSM9NUuGBR5nkcJqL715ApTzj0TzyEoJbl%2F7dqd00XjHlSrWCQKU4oBp5FEpKPdS7DpXQ8%2FaJnqBgoD0HqXh%2FCXhRNHYbpGupU%2F26p0LRCxEPqQmC8LTQSPENaWz%2F%2BOgAXUCS3ItzbwdRSqvgcGh%2FBGlOEiW2uoex0YUqrb7MNMB3yOKvcdYbRrpOALrqsXq3fyioAWwtDBu0aOxkfjKEgTJz%2FKbh7NJco36%2BH4h7uKJ5vCTANwOHyWhKf1icqU6UE3p%2B0wBPM3tEhSna5Ou50Guew3%2BUpNiJpSkoL3MbBlGklZr9XK5XyGITXQwk2c9usqXuXuFknG16b7xBDGmWKF45ArNmdItW1KOb7Z1Ur%2BudrVpQVG8Ih6%2B7pbxyMByWz6DIMgtw2y6GRYZQCW9DUC7fwLcrnhlzRMn5aUK7QhISG%2Fk33FvgxOgoooJ%2BXJodIOfTDY35%2FCBjqkARSyVZxfUamwmFz0ts4exw4gO%2BKbc7AL2ZQ3F7QDTmelyz6HnN6tt0MDrIW3aKudiBy5cHbZxGBOwnB7ClvTRxWWFGjiSgoi8cYCOyB8GUKp%2FVZ8Z52i7783JKc9%2B2hzTo7%2Bf6eeQpLk2IO1BBDtPsZMpmVC9D405L00MS7BkH%2BKxuLY%2FjJFze6VoZxOnOPmdO37kd9BEYW%2FkMLRp2oLu%2BljYsC3&X-Amz-Signature=6099e8f38976c6f2dc72f34a4c09cbed8d95534876d10e2c716bde6b9273d080&X-Amz-SignedHeaders=host&x-id=GetObject)

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
