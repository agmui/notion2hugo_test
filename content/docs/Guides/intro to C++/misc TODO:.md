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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6B4ABP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDtLIUr9Tu8vZ3DXe3n4qu%2Bozt3Rd8a%2FzJiEUGBsVqqpwIgZxj%2FDxX9ZxKER00pS6UERTecp4VCPsOXF6YzO8C1SX8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrXX6ea40lB8WopCircAxkMjMKfEMcjgrbHVwscM61EQ8vgfy2UPRrfcA7fPM2R4f1kzZX9EF84rPA15Ec6NyzCrzjNMfyW8tD4KSLTzmlVA2dmzGPI35MdToFRLeVI8UoXVRFcSbiepZQ5i74EyJrm0uTmTI6t%2FLUmaPO8JeQNrp7G2U6nOTdt5z8zfaG%2B5b7%2Fk6O%2BZZnrmb7cbE61zxgAlpGC%2FxAke4MzywdY%2BFdTA%2FDkStM0uieD6IIW5SmCOzKtT6KEU12%2F2%2Fwrz%2BBseG4NoBI6xVH6dL5Djkzs5W80TGVjQCLwAWoVVvT2XCT3qE9Ff3aSNC%2BNlbcvQjt2ykEgfm%2Fjhf1dzM%2F%2FpEyrVs5e5kzc72qHWjZmsNyar4nyO1blPhSIbqL8ZviJ1TC2J0zXVM5NBf1tnjZJvBvKSKWwDWrQVBFl8LXb4SWIZ7sZ8WUFtjYnvgysxEp5zicmh8DpjA3JUSZit2wkHR88jlkXPrcBUgwcfsie7tHamvdjDzxBVicq%2B3ctUh5HEDxNWKjFNe3MCwKp9vfH25Jghu8iaxNRxqZiTWFy%2FkSStKmy6%2FZqCEh7XdYsjNp2%2FD4DpNofg7rSvxuzzBabTkadELYA7PA45wu5zw2%2FzG7L5e6JwSbcYy8AMSMbB5bBMPTusr8GOqUBHJlQVhftOSzgJoAiutBXQpXDXwRwtlzaRGgy7I9Ck9SVc8JVQTOh%2BgMhgd7mkwz%2F9vBsOyO5DFd7pwB%2B99RPcWYmeutF1GsQxveYB9Xi1UY8sE%2B25jtLxYUpmaaR790qYPW9C6AdUfIXKiRKWtaY5qo%2FBZj1msp%2F0BWJOCqL9ULSi%2BEMAIyKN42ygE5KPH9cValjbHYAEMRLXDGe6zg%2BrKgTSemI&X-Amz-Signature=48f0e7aa8f3dcd85b4facc9eb570fec0649cd4fbe9f7dff03c44f72d9cd167b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6B4ABP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDtLIUr9Tu8vZ3DXe3n4qu%2Bozt3Rd8a%2FzJiEUGBsVqqpwIgZxj%2FDxX9ZxKER00pS6UERTecp4VCPsOXF6YzO8C1SX8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrXX6ea40lB8WopCircAxkMjMKfEMcjgrbHVwscM61EQ8vgfy2UPRrfcA7fPM2R4f1kzZX9EF84rPA15Ec6NyzCrzjNMfyW8tD4KSLTzmlVA2dmzGPI35MdToFRLeVI8UoXVRFcSbiepZQ5i74EyJrm0uTmTI6t%2FLUmaPO8JeQNrp7G2U6nOTdt5z8zfaG%2B5b7%2Fk6O%2BZZnrmb7cbE61zxgAlpGC%2FxAke4MzywdY%2BFdTA%2FDkStM0uieD6IIW5SmCOzKtT6KEU12%2F2%2Fwrz%2BBseG4NoBI6xVH6dL5Djkzs5W80TGVjQCLwAWoVVvT2XCT3qE9Ff3aSNC%2BNlbcvQjt2ykEgfm%2Fjhf1dzM%2F%2FpEyrVs5e5kzc72qHWjZmsNyar4nyO1blPhSIbqL8ZviJ1TC2J0zXVM5NBf1tnjZJvBvKSKWwDWrQVBFl8LXb4SWIZ7sZ8WUFtjYnvgysxEp5zicmh8DpjA3JUSZit2wkHR88jlkXPrcBUgwcfsie7tHamvdjDzxBVicq%2B3ctUh5HEDxNWKjFNe3MCwKp9vfH25Jghu8iaxNRxqZiTWFy%2FkSStKmy6%2FZqCEh7XdYsjNp2%2FD4DpNofg7rSvxuzzBabTkadELYA7PA45wu5zw2%2FzG7L5e6JwSbcYy8AMSMbB5bBMPTusr8GOqUBHJlQVhftOSzgJoAiutBXQpXDXwRwtlzaRGgy7I9Ck9SVc8JVQTOh%2BgMhgd7mkwz%2F9vBsOyO5DFd7pwB%2B99RPcWYmeutF1GsQxveYB9Xi1UY8sE%2B25jtLxYUpmaaR790qYPW9C6AdUfIXKiRKWtaY5qo%2FBZj1msp%2F0BWJOCqL9ULSi%2BEMAIyKN42ygE5KPH9cValjbHYAEMRLXDGe6zg%2BrKgTSemI&X-Amz-Signature=bc06a87c7faf0226d044c979efefa209d7a005a8695ffef8d0c37d7fd13e41f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
