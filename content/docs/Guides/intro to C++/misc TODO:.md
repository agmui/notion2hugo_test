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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76EF3KQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD42cCGbFupiaISyoEHybJAIW4IdDSzXghRO3U0Yk%2FtxAIhAOwvdn%2B06mGr2%2F14hGfk5VxgFW27Hqh3Kpi94HulyTX6Kv8DCGMQABoMNjM3NDIzMTgzODA1IgxE1imZGBSOgnSiBMAq3APllVeYB32wHsm0XKWHbVQN%2BHrHfd1knHnEMLnP%2BV0HTliYkUvbLvNXHJGQ8mSV9vYs5GC52fDffC6024cmLRITRtUhvpuGJgsqaFBZUFHI5gn5HmCtKBOs9W95gug1GZJi5t5rbB5ZfkYmxCJw3YnUsAQzdvfXCNEOC3R0pUvPd7Cw5L0NOk33l3X459RKGVLrfK%2F9PpIijea%2FOHAKdBiBHPt3jlAoGaPXns%2Bh8TRwNE%2Bo1XxIpa%2BEuTFAwtRFqMgi%2BD5ieSgq8J61590LRT6s4fi0xN1eldih0SLlD8NGEOQEEYN7nTBNM6v79I%2BNnub9KzJKAwR2rbWZnS7rTSD8q9m8cODTJNME6%2BcKafXQERbulo5pPvTUKMyBus%2BqiVGOJlZv6veB487jOPfWEB2o6XKDUU0LLSeFHDtHR7qRjCOw3hzh%2BTmnGRAheO2vJExkSYtCxckbEIWAD1SQVumLmsBVV%2By6N1XkQ%2FOUnIjZmrzbZJsypcWPM4KBbxMOJSjy%2F6HyS2oKsFxxCCnoQ%2BglI9guw8DsxobYCQD1GbGPwLjBzKPX1cQHlGaR%2F1WbC2HFeGp%2FHhkIYhKz4fQLrUK0QMGtV10dmjpg8My%2BTgognQdRf9Ekfxmn2NLK2DDco%2F29BjqkATg%2FKNs6k55KTaOXr%2FOldDXfoZCG%2B26Gw2KIX37l00T7yZe4CSYhqGP4gGM54EW6zeJKjxNpFEjQq6XwR50LLcd%2FYdV8MSZPtEQwlSoug4lLS%2FqfvLc5wUz1Gom16wFIJSDWfwC3ifywprzpYE5jyUFynfVJfI91ZEWBuuuKFhSv7LuVBEPqPvSCo6wf7zx4rbZm4ctLLecXeUw1vfX%2FxGlBOBQd&X-Amz-Signature=b43bb3e5614a4ab21757d10336937ac588cba7f14e6d796effcd9438434438e2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76EF3KQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD42cCGbFupiaISyoEHybJAIW4IdDSzXghRO3U0Yk%2FtxAIhAOwvdn%2B06mGr2%2F14hGfk5VxgFW27Hqh3Kpi94HulyTX6Kv8DCGMQABoMNjM3NDIzMTgzODA1IgxE1imZGBSOgnSiBMAq3APllVeYB32wHsm0XKWHbVQN%2BHrHfd1knHnEMLnP%2BV0HTliYkUvbLvNXHJGQ8mSV9vYs5GC52fDffC6024cmLRITRtUhvpuGJgsqaFBZUFHI5gn5HmCtKBOs9W95gug1GZJi5t5rbB5ZfkYmxCJw3YnUsAQzdvfXCNEOC3R0pUvPd7Cw5L0NOk33l3X459RKGVLrfK%2F9PpIijea%2FOHAKdBiBHPt3jlAoGaPXns%2Bh8TRwNE%2Bo1XxIpa%2BEuTFAwtRFqMgi%2BD5ieSgq8J61590LRT6s4fi0xN1eldih0SLlD8NGEOQEEYN7nTBNM6v79I%2BNnub9KzJKAwR2rbWZnS7rTSD8q9m8cODTJNME6%2BcKafXQERbulo5pPvTUKMyBus%2BqiVGOJlZv6veB487jOPfWEB2o6XKDUU0LLSeFHDtHR7qRjCOw3hzh%2BTmnGRAheO2vJExkSYtCxckbEIWAD1SQVumLmsBVV%2By6N1XkQ%2FOUnIjZmrzbZJsypcWPM4KBbxMOJSjy%2F6HyS2oKsFxxCCnoQ%2BglI9guw8DsxobYCQD1GbGPwLjBzKPX1cQHlGaR%2F1WbC2HFeGp%2FHhkIYhKz4fQLrUK0QMGtV10dmjpg8My%2BTgognQdRf9Ekfxmn2NLK2DDco%2F29BjqkATg%2FKNs6k55KTaOXr%2FOldDXfoZCG%2B26Gw2KIX37l00T7yZe4CSYhqGP4gGM54EW6zeJKjxNpFEjQq6XwR50LLcd%2FYdV8MSZPtEQwlSoug4lLS%2FqfvLc5wUz1Gom16wFIJSDWfwC3ifywprzpYE5jyUFynfVJfI91ZEWBuuuKFhSv7LuVBEPqPvSCo6wf7zx4rbZm4ctLLecXeUw1vfX%2FxGlBOBQd&X-Amz-Signature=07b085adac40aadd3db69b522aec2ca7c34a205d91f6205149b37948d09fd4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
