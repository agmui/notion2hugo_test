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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFR67MW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbadYH1mcVKMwvYRgSUYFgmhx82w2UwmOzpUBXsBDtvgIhAOgbjB6EUUZrPzCFcKzeFJHykNAPFCKfRGO%2BYX49qyAJKv8DCCsQABoMNjM3NDIzMTgzODA1Igz2Qfg%2FsDvBmV5L07cq3APVEVEdioXziYiZtfsFf%2FkZsJsBKo0UZieGZmyoWkgLathmdJjcCyAGRSYVijGj9gURsVpmxS2E0tuACCTf0C4UJt1T2wLROC%2FTdlEt7hlaX9zpafS8PHwltg1pCXJMpHKTquYWvTRx93dPJ%2BYLGFdORLUMM%2F1ebEp8LsJeWyQCalw2ediNdyf%2Fsm38xRTEl%2B1WDnAbyjurwZbpceIdNPeGQxyKSm%2F%2F7g10ll5NJKuEJjq0d7IvgymZEnlJe0xT%2FkWNp9juXIU%2F%2F20bePTy6MliNfC1gCfo4gUym3PPUJMT61cZ4%2Bxt4ZitqNir4yMl0TK33kVNtl%2F%2BB5u26vcfOqawjcMZ1hJQMm61fyfYvkJObR81mMCl%2FSwRq0er64X%2FaYu1IovmGcCh0tdfglF3OmTgc%2FPSvhDZBRwAHexTmBsCfJE%2BS%2FnD9QazYM8ECmwM8c2LUmAX5O8b7pcrwBRtrkfddM%2FXLGs5BrvOisAQheTny%2FqaDu1LPUaZvAKb%2FHiGWFhmIJX5AsCrXX9EUvMbLVeDEvBmDRn7AsLraVCbgfHyixceNOaj4sgj7ZXOr1i5XVTPfOzf%2Fyke6kqNvuA1Db6TK5jFObFkFKq0ihnEYhQ4NWIHvQGlqNLVh7W0kTCcxvHEBjqkAZ79CHnvDmdHcjr7779GjNhGIkPA%2FKkZuXTFFpItuj8k4uwL%2FKA6WfaMLgFKNVhEYhY8HIAHMUPmtvXdgYD21lNUL40HdPpyIZc15ss759ZqW2%2BLSfZj8w%2FfPb5pj0Ta44i%2BrCg%2F9rPLwZkzXVbiIwMTvG3CzB6mtQwJYaYeqCljnkCkPSVlmgRSsGAN%2FxiTo9fqeokhIhEc883h2OlicxqWAkyb&X-Amz-Signature=5b485b2881331e1bc44b3d7e90243f8e3cb864fda550197853c85816460e2df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFR67MW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbadYH1mcVKMwvYRgSUYFgmhx82w2UwmOzpUBXsBDtvgIhAOgbjB6EUUZrPzCFcKzeFJHykNAPFCKfRGO%2BYX49qyAJKv8DCCsQABoMNjM3NDIzMTgzODA1Igz2Qfg%2FsDvBmV5L07cq3APVEVEdioXziYiZtfsFf%2FkZsJsBKo0UZieGZmyoWkgLathmdJjcCyAGRSYVijGj9gURsVpmxS2E0tuACCTf0C4UJt1T2wLROC%2FTdlEt7hlaX9zpafS8PHwltg1pCXJMpHKTquYWvTRx93dPJ%2BYLGFdORLUMM%2F1ebEp8LsJeWyQCalw2ediNdyf%2Fsm38xRTEl%2B1WDnAbyjurwZbpceIdNPeGQxyKSm%2F%2F7g10ll5NJKuEJjq0d7IvgymZEnlJe0xT%2FkWNp9juXIU%2F%2F20bePTy6MliNfC1gCfo4gUym3PPUJMT61cZ4%2Bxt4ZitqNir4yMl0TK33kVNtl%2F%2BB5u26vcfOqawjcMZ1hJQMm61fyfYvkJObR81mMCl%2FSwRq0er64X%2FaYu1IovmGcCh0tdfglF3OmTgc%2FPSvhDZBRwAHexTmBsCfJE%2BS%2FnD9QazYM8ECmwM8c2LUmAX5O8b7pcrwBRtrkfddM%2FXLGs5BrvOisAQheTny%2FqaDu1LPUaZvAKb%2FHiGWFhmIJX5AsCrXX9EUvMbLVeDEvBmDRn7AsLraVCbgfHyixceNOaj4sgj7ZXOr1i5XVTPfOzf%2Fyke6kqNvuA1Db6TK5jFObFkFKq0ihnEYhQ4NWIHvQGlqNLVh7W0kTCcxvHEBjqkAZ79CHnvDmdHcjr7779GjNhGIkPA%2FKkZuXTFFpItuj8k4uwL%2FKA6WfaMLgFKNVhEYhY8HIAHMUPmtvXdgYD21lNUL40HdPpyIZc15ss759ZqW2%2BLSfZj8w%2FfPb5pj0Ta44i%2BrCg%2F9rPLwZkzXVbiIwMTvG3CzB6mtQwJYaYeqCljnkCkPSVlmgRSsGAN%2FxiTo9fqeokhIhEc883h2OlicxqWAkyb&X-Amz-Signature=661f50c5adfe9981983fbe0454149d6eae8b2301ce7e407e91665c4eb6c3ff00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
