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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHT3O2RW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd85c4ffp%2BZ%2BpIYjTKUWtoGsaWh2467i3XpyPgP7JFZwIhAP8nHas1OxMD0T18ZXiXz46fYBAeDzOORfvtT6Vv1M7vKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FnFoHNjx4G%2FYxMfAq3ANoxIjHGXiwxb3BLtmMomMqIT84%2BxJpcOEp9sTvzglPdSgUIxhkGATA8Twc2o14Tdt09TnKgEITs7WyovK48u8M5ENaER0JZ3P4eFkJu5eQasqYu30G%2FvQgDcWYpeDW1WDGcGQJjvltLxzOAGSPPkAvBShGhVrLKtxXq%2BwtqvAEy%2FqJVlnnbcDpuSzbsRV1rr3dIhYL80gnPkAWzVukuobScp7wB3DeAgH4y1uZNJAGGPsZNHNzSQn%2F%2F8QWLvk6cauxMQaqpjmIvQb9W7FNvziI5AzzTswMSwBVJB7JniCqROjPwAHIyzyO3JPbKcG6XogLPAIyI4a35JRZkRvnJFXC%2BhikEMq%2FdNgQQ7FAk%2F6zb5SiDP%2BBGXZFL0kG4pIMFvf00L6OZ9J6OymQa%2BS8ZRuiF53EM9umOjiOyMNwK8p4vL2k%2FkN%2BYkUq0mAEV178vHlgCys4rvQOqr63kIa8yKCrB9Z3CGAOIcep1cXNwi3saP0upOFX52u7Hr%2Fh4%2FUoeojkaPQ3Oei5fzl5daioN3Oj9r8uiDpZxwnA2FKZ89YD162SYNmYSiTyIKCxr5f2ZK7wnbxPQHDknJLADL9HLaXRP%2FCy59gDRlDUHjIf9YOq6vqEYtPoX9eqW9ViIjCDlpK%2BBjqkAQgY3fUYaKRnJJo5ntO7oRQFhQLYJ61%2FjOpaPLb25SilOfmgczDPm7HVG6RR85aOgX0y%2FNeK%2Bz9tS%2Bu1I7Ha9H2pIGUetUg82eJGRdeMfG7bHqHk9q0P%2FVeHmB0Pj92P4uvurOpPR20A%2BzE%2BZfxhRy7h%2BVsrqgKhpcffPjX2mpm6WDu6dizQidFpxfPXKWpqjsLVT8YaoPRZ2zJHxKmWRGMabvj%2B&X-Amz-Signature=6046a163db74aa4fbf3569beaf0c79916c4342d4db5bf63dc62e737ce3a136cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHT3O2RW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd85c4ffp%2BZ%2BpIYjTKUWtoGsaWh2467i3XpyPgP7JFZwIhAP8nHas1OxMD0T18ZXiXz46fYBAeDzOORfvtT6Vv1M7vKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FnFoHNjx4G%2FYxMfAq3ANoxIjHGXiwxb3BLtmMomMqIT84%2BxJpcOEp9sTvzglPdSgUIxhkGATA8Twc2o14Tdt09TnKgEITs7WyovK48u8M5ENaER0JZ3P4eFkJu5eQasqYu30G%2FvQgDcWYpeDW1WDGcGQJjvltLxzOAGSPPkAvBShGhVrLKtxXq%2BwtqvAEy%2FqJVlnnbcDpuSzbsRV1rr3dIhYL80gnPkAWzVukuobScp7wB3DeAgH4y1uZNJAGGPsZNHNzSQn%2F%2F8QWLvk6cauxMQaqpjmIvQb9W7FNvziI5AzzTswMSwBVJB7JniCqROjPwAHIyzyO3JPbKcG6XogLPAIyI4a35JRZkRvnJFXC%2BhikEMq%2FdNgQQ7FAk%2F6zb5SiDP%2BBGXZFL0kG4pIMFvf00L6OZ9J6OymQa%2BS8ZRuiF53EM9umOjiOyMNwK8p4vL2k%2FkN%2BYkUq0mAEV178vHlgCys4rvQOqr63kIa8yKCrB9Z3CGAOIcep1cXNwi3saP0upOFX52u7Hr%2Fh4%2FUoeojkaPQ3Oei5fzl5daioN3Oj9r8uiDpZxwnA2FKZ89YD162SYNmYSiTyIKCxr5f2ZK7wnbxPQHDknJLADL9HLaXRP%2FCy59gDRlDUHjIf9YOq6vqEYtPoX9eqW9ViIjCDlpK%2BBjqkAQgY3fUYaKRnJJo5ntO7oRQFhQLYJ61%2FjOpaPLb25SilOfmgczDPm7HVG6RR85aOgX0y%2FNeK%2Bz9tS%2Bu1I7Ha9H2pIGUetUg82eJGRdeMfG7bHqHk9q0P%2FVeHmB0Pj92P4uvurOpPR20A%2BzE%2BZfxhRy7h%2BVsrqgKhpcffPjX2mpm6WDu6dizQidFpxfPXKWpqjsLVT8YaoPRZ2zJHxKmWRGMabvj%2B&X-Amz-Signature=718fdd583b94bbfcfae3c5430124385389b41f5a2b8d906e97685fe6823d0f53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
