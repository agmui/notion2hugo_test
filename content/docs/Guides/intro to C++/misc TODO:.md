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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236D6QZB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhsu3jbSnv4W4RFIAxd6UTBzLMcNU5o7SE9xS3U9%2FBkAiEAyhxPAF8GWuvot1jJiZArsv9CKiyBWcqQin1WXJ6bbZYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGpdAmViIyf9564KBircA8ZacnoRIJ5x2Z5tU35jrZSOj4N32fevZ%2BZ%2FgryvDE5zN5n6tVSJEedhmAAykozCeQdbJphyMqBvssSs5adBTgGcUQaj01HUuhb4oOeLFo21lCHGDWw3Kv4tBpyHeuCt617fQ1FEW%2BcXGOPoiFYirQMlfY8zzCyBH4bwxQf4OoU8FAP2o%2BdEL5%2FZBaz%2BfJ15EyQ%2F8gPO3IrBVo7wK%2BZM8UtwEFO%2BzCtFsg7rPvsyuINIGLkAGlX8yRGZ9YBsqoPoOcykTi0WkGVSwwWx9K4l5nsLjXGykRa4%2Fg5fpyop2xQzf1TW1ZjfHGtYs35c%2FcOcKQTrWv3LVzAvrrIMLw7lu%2BwMZqcwJDs9JHEHJlK68ofADgHJxydV5F4y%2F5jduphEgJiW7J5Cps87WpIqVz0nW5Mqa3QNaMWHma1zdkDOCKfIAI7ZXPs2IATroelz%2BVw0BLTbo74pE8Lhmha3k0x%2BOh68n6Fo3RV7x%2BROd30nLNRvAGQS33Sv4S5ek4zcBdfjy3PHES2ict37E8nGyh3wEZ1Tf1za4AirvdCtzBRTpyQzcfJ7Ld3kLUJI7tqJR42ro3Rd4BJaBuqcAZzEdB6MXh99fmtFJCa7kVyw0L1i%2Bddfk%2BEdFperCeTR4SxMMPrpzL8GOqUBGL8AJF5zJB%2BQUTSegrXe7WcCHjdDwzrUI%2FP2QZgOscv9GjtWZA4lx%2Fzo9aNeO7X7ltarqP%2FhDGBsoOVdX7tMYT6DVHcR5nzIztcMSvBsnGwxxwk8yyQk7fX0Uh4ZCyyNawE7pRDbzcBIq%2Bxwr3bQskWP2LnFHs%2B7EtGB%2FjQ%2FnnzJUSiReMJIAB2e0qvYV8qwFgBhf8pob0GGEqzQ0O6rdKnysdF3&X-Amz-Signature=0135689c76c4282b5c6d571b19141e2bd3b003bdb3ba2e1344a4983ba7d810ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236D6QZB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhsu3jbSnv4W4RFIAxd6UTBzLMcNU5o7SE9xS3U9%2FBkAiEAyhxPAF8GWuvot1jJiZArsv9CKiyBWcqQin1WXJ6bbZYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGpdAmViIyf9564KBircA8ZacnoRIJ5x2Z5tU35jrZSOj4N32fevZ%2BZ%2FgryvDE5zN5n6tVSJEedhmAAykozCeQdbJphyMqBvssSs5adBTgGcUQaj01HUuhb4oOeLFo21lCHGDWw3Kv4tBpyHeuCt617fQ1FEW%2BcXGOPoiFYirQMlfY8zzCyBH4bwxQf4OoU8FAP2o%2BdEL5%2FZBaz%2BfJ15EyQ%2F8gPO3IrBVo7wK%2BZM8UtwEFO%2BzCtFsg7rPvsyuINIGLkAGlX8yRGZ9YBsqoPoOcykTi0WkGVSwwWx9K4l5nsLjXGykRa4%2Fg5fpyop2xQzf1TW1ZjfHGtYs35c%2FcOcKQTrWv3LVzAvrrIMLw7lu%2BwMZqcwJDs9JHEHJlK68ofADgHJxydV5F4y%2F5jduphEgJiW7J5Cps87WpIqVz0nW5Mqa3QNaMWHma1zdkDOCKfIAI7ZXPs2IATroelz%2BVw0BLTbo74pE8Lhmha3k0x%2BOh68n6Fo3RV7x%2BROd30nLNRvAGQS33Sv4S5ek4zcBdfjy3PHES2ict37E8nGyh3wEZ1Tf1za4AirvdCtzBRTpyQzcfJ7Ld3kLUJI7tqJR42ro3Rd4BJaBuqcAZzEdB6MXh99fmtFJCa7kVyw0L1i%2Bddfk%2BEdFperCeTR4SxMMPrpzL8GOqUBGL8AJF5zJB%2BQUTSegrXe7WcCHjdDwzrUI%2FP2QZgOscv9GjtWZA4lx%2Fzo9aNeO7X7ltarqP%2FhDGBsoOVdX7tMYT6DVHcR5nzIztcMSvBsnGwxxwk8yyQk7fX0Uh4ZCyyNawE7pRDbzcBIq%2Bxwr3bQskWP2LnFHs%2B7EtGB%2FjQ%2FnnzJUSiReMJIAB2e0qvYV8qwFgBhf8pob0GGEqzQ0O6rdKnysdF3&X-Amz-Signature=6830dd8305f046c0f5afff302bc4e22e793bddecf44f232e4b12638e1ceb65fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
