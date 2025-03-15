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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DILOO45%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxtO%2BaNCn0D39qaMLb4l45I2I%2FHSQMhk1NSqyPR0Jr0AiEA9kUFmZ0Pwt78BindXp9KqAfwBEMeN5S29VKUvLkRZTkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOPq89Wl%2FXE5llGF0SrcA3fcWXVw5nAnVtdgPp%2FSRvdRzApmuxWny5Yh4OYnSFX75ozwnhLowyGh6zhQH90qE6oswHRqgxNBO7g5%2FhWP2oYAeqX%2F%2BQRDXzpwSjWLc1wTDdfowo8WM%2FcYhd5X99Ti8iICwTnKI4C9W8awtqmZXMRS7ZyRLAe3npREpItUJa6rBLYyzHQmD1VZe46BLzC0BbdO7CPCkPs9imVCvg1xt%2FiPHrofpWaxEDNLamzpHnWfbqxivCCXDsr8FSycNGE0DZXT4ZL9MQi%2BNEkwCUhyEwoZ%2FIfGFU2Joh%2BxtIY0%2BMXcP5x%2B280h6KJ2PyzwQsnBaC8Fl%2B%2FA9dG%2BnaHqPquONIcBAmas1cNc92fDtjXE4DQmXGDSupgRmOJdUG9m0ER1oSd%2FftFbIrpSQeF5g9q88tYgjwQUTZ8oD8eXf96n2VSZucJttmh22tQtRiQtps8rs8YL2m1RAUs6hKKWuW5IEWUfzkxZnfFOLfLh7LhfZnjT6W4unLoa4RjMZeSUyNIgn%2FufdhQ%2FhYXd%2B72bjBRir%2FL94kCU1bBgXDNjP%2BQ18JiyY73JB0c09HDcNEQaRWNZ1AmxGXJaz3GitYlmcAmh5%2BGKYJOgygzceqcN3e4cFJ41M6Xvi6VIaxpz0zy7MN7h1L4GOqUBdDRiATVzxKLcSUXdmdPfqvC%2B0pKDCkxrVWh4G6ThvRZVgOy9t4M65uL1tjOWhiekUWtyNHbLNocea06VVPPvGZOsH%2FJ7Sjvt0l%2BEc8CctOAu4gzANmfiuSHZ9tTHJbULQo7TEb7HeD1VNtf27nEWpz8gjZA1BIK%2Bw%2BbyJPMmp1kupKtIhs8tHIv7uW860um9qlzve0gu26jjPvA4Vsgu0dbrDhqo&X-Amz-Signature=c044a4958ecae4621ccc14e09bbec3c11a40bb76b271afa07a11ac40337eb82f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DILOO45%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxtO%2BaNCn0D39qaMLb4l45I2I%2FHSQMhk1NSqyPR0Jr0AiEA9kUFmZ0Pwt78BindXp9KqAfwBEMeN5S29VKUvLkRZTkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOPq89Wl%2FXE5llGF0SrcA3fcWXVw5nAnVtdgPp%2FSRvdRzApmuxWny5Yh4OYnSFX75ozwnhLowyGh6zhQH90qE6oswHRqgxNBO7g5%2FhWP2oYAeqX%2F%2BQRDXzpwSjWLc1wTDdfowo8WM%2FcYhd5X99Ti8iICwTnKI4C9W8awtqmZXMRS7ZyRLAe3npREpItUJa6rBLYyzHQmD1VZe46BLzC0BbdO7CPCkPs9imVCvg1xt%2FiPHrofpWaxEDNLamzpHnWfbqxivCCXDsr8FSycNGE0DZXT4ZL9MQi%2BNEkwCUhyEwoZ%2FIfGFU2Joh%2BxtIY0%2BMXcP5x%2B280h6KJ2PyzwQsnBaC8Fl%2B%2FA9dG%2BnaHqPquONIcBAmas1cNc92fDtjXE4DQmXGDSupgRmOJdUG9m0ER1oSd%2FftFbIrpSQeF5g9q88tYgjwQUTZ8oD8eXf96n2VSZucJttmh22tQtRiQtps8rs8YL2m1RAUs6hKKWuW5IEWUfzkxZnfFOLfLh7LhfZnjT6W4unLoa4RjMZeSUyNIgn%2FufdhQ%2FhYXd%2B72bjBRir%2FL94kCU1bBgXDNjP%2BQ18JiyY73JB0c09HDcNEQaRWNZ1AmxGXJaz3GitYlmcAmh5%2BGKYJOgygzceqcN3e4cFJ41M6Xvi6VIaxpz0zy7MN7h1L4GOqUBdDRiATVzxKLcSUXdmdPfqvC%2B0pKDCkxrVWh4G6ThvRZVgOy9t4M65uL1tjOWhiekUWtyNHbLNocea06VVPPvGZOsH%2FJ7Sjvt0l%2BEc8CctOAu4gzANmfiuSHZ9tTHJbULQo7TEb7HeD1VNtf27nEWpz8gjZA1BIK%2Bw%2BbyJPMmp1kupKtIhs8tHIv7uW860um9qlzve0gu26jjPvA4Vsgu0dbrDhqo&X-Amz-Signature=2ccf081dec73f72054e0b820973ab4a4b266ce0db3af0354fa80c4d618f207be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
