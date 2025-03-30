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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCZK5R6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAaTpdbbbj4LaXgeF43Bl%2FhrA2r49hDoN%2FnzzozazZZ7AiEA04nG%2FZt%2B%2BUabF5GeqA%2FtO93UbHi1%2FkjdL%2FOa0GdUb7gqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrtBYwVFK8vBg5UvSrcA5d3IPQdJYbVY8CF7ghAZDorjnOs1H5qYPLLFCEmI0PyF%2FkNd1bApDcZ7q6haacrhawWWLfZNNvDPBQehbcU4DcPX8%2BL7a8ma%2BCiaDDRaw3MGoJmNMW1i3YHdDhSNa8aEjDPpCAhiHaU2mcLLIIVGo%2FDrVMymlKDaPU%2B8DwsPjzR3KCZFSzPiD56o4RYgpHjvVXPJD%2BirclFvRKq1o81JD%2F8JHg7rst79r3tiH%2FJMyeRS6rg1kD5mtSvEWqGjsyXrHe4ndN4zl7RsEHab9oRPHE2b2AhvIcqm8%2Fz9EQeUv2XoWOtfx5n2cyyeRr%2BhivtqEHE1acvxWqH3bcx5t6KSTllPJefmp%2FKupa1rcGrIGrhuHbn20JOSuqDJY0LmW81VJY5Mity0DxA6PpdlARHIik7DU2vDJVV8lEzni2Xy9mrWU23mHJEpPse2o1ebajhAqb67bZ1HysNjWy2ia4ar10zPkAj5rvajzy1znIgI%2FU7beTI4gGX%2Bli4ahQbSamW2%2BtnSy6LI68QemmYQMmGiS%2FRkxr9oWJqNUrVQZ3n1RHENPu362Mf%2Fkw8n7T4yi52ff8JOYPGpQ0zlOmg1BKKoUlhZgu73IaoWvm5vnLmi%2Bz3AK%2FkRQ54WjAAoSNLMMTqor8GOqUBVWGiQfmz3IyJmM%2FD%2Bi50%2FV9NC6e0gPBxoYdKUo2bElXH7k6sDavuOo9LzLdcCMNjrcvxBircGn6Il5mHiNrxtfem5FLjL5PDxhBDCB9w58gL0XW8qGyu5WOA%2BWyxJIKaulw0RpZTvzFwF7bk5DRJNg5NMiLQXAfX0EkuwY3kTIObSKEn9D2LhMTyjTAIhZAzoi4ObLpDndaTnoA7iuVsWicuESGT&X-Amz-Signature=56c4d967fcca96e664a76ff942163410a5c4aa7a0b3da2aa9b2420318f9006e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCZK5R6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAaTpdbbbj4LaXgeF43Bl%2FhrA2r49hDoN%2FnzzozazZZ7AiEA04nG%2FZt%2B%2BUabF5GeqA%2FtO93UbHi1%2FkjdL%2FOa0GdUb7gqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrtBYwVFK8vBg5UvSrcA5d3IPQdJYbVY8CF7ghAZDorjnOs1H5qYPLLFCEmI0PyF%2FkNd1bApDcZ7q6haacrhawWWLfZNNvDPBQehbcU4DcPX8%2BL7a8ma%2BCiaDDRaw3MGoJmNMW1i3YHdDhSNa8aEjDPpCAhiHaU2mcLLIIVGo%2FDrVMymlKDaPU%2B8DwsPjzR3KCZFSzPiD56o4RYgpHjvVXPJD%2BirclFvRKq1o81JD%2F8JHg7rst79r3tiH%2FJMyeRS6rg1kD5mtSvEWqGjsyXrHe4ndN4zl7RsEHab9oRPHE2b2AhvIcqm8%2Fz9EQeUv2XoWOtfx5n2cyyeRr%2BhivtqEHE1acvxWqH3bcx5t6KSTllPJefmp%2FKupa1rcGrIGrhuHbn20JOSuqDJY0LmW81VJY5Mity0DxA6PpdlARHIik7DU2vDJVV8lEzni2Xy9mrWU23mHJEpPse2o1ebajhAqb67bZ1HysNjWy2ia4ar10zPkAj5rvajzy1znIgI%2FU7beTI4gGX%2Bli4ahQbSamW2%2BtnSy6LI68QemmYQMmGiS%2FRkxr9oWJqNUrVQZ3n1RHENPu362Mf%2Fkw8n7T4yi52ff8JOYPGpQ0zlOmg1BKKoUlhZgu73IaoWvm5vnLmi%2Bz3AK%2FkRQ54WjAAoSNLMMTqor8GOqUBVWGiQfmz3IyJmM%2FD%2Bi50%2FV9NC6e0gPBxoYdKUo2bElXH7k6sDavuOo9LzLdcCMNjrcvxBircGn6Il5mHiNrxtfem5FLjL5PDxhBDCB9w58gL0XW8qGyu5WOA%2BWyxJIKaulw0RpZTvzFwF7bk5DRJNg5NMiLQXAfX0EkuwY3kTIObSKEn9D2LhMTyjTAIhZAzoi4ObLpDndaTnoA7iuVsWicuESGT&X-Amz-Signature=bd57e0872d7d3b5ddf4da1a8b734a22b1d434e492a6f6609d17fa815b205a360&X-Amz-SignedHeaders=host&x-id=GetObject)

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
