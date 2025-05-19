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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLGKROF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgUZMDJUcTMdCBEjriFmxsFgBYzViopSsSwRIZd3sX8wIhAMY8XIUYpCiUBuPfYyj9EwI0AgtJUyxDoQGo0eOHjLPjKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD8W9DADRrjUSIENgq3AOJIu%2FnZF0pIbU%2BsQcLWFK4g1iObymBIlAxkurhgK74evTaRXNfRFSWXa1QDQ4mlRzWePJI7ZyoFsV%2FuerL6jTyrwrK02hTZbVwKsK8AydiXAJpBhw10TviP9C8IAHxyBWRU03xRhu4jp0%2Fc1k1Y5qhk9tnIn26wwG5cOBxzSnaTWUk7e8d5h%2FpfA%2F3Gm8vU77zD0rUmZHcNQV%2BZedxrKW6IYsmVMNZVVqnExPmfSNuN9QydWP6r%2BXje5823I7YHdBd1lGalPSHqiOGo1uFqyVqZD39UDRGlXAcdYFQfPg3IsbjmJL%2B%2BphnQXLr7YxBN%2FGT%2FDlJNIHn9DYF39FiXDfneZP1r3twKl6FW3zEI%2FnLuXWIBOFFChf8%2Fp7xOKpNBxngWxuBPu3%2FP%2FUM6cglrn1KLzWdVyOW6PyULUfVSk%2F08bvteVjwiANPc6aXw7haA7Am%2B72Nu%2Bp0Xt9D4%2Br7zSaE6q14mvLzZk71SeoKe05bqOvd%2FvJm%2BaxB0es06ee1D6JFqaw9viZjCvhJsfixMhuvIl0kday33xl1OGvpPLo1OPzlQkuhSFv7kTmLrqP5Q9963fN4oV4QrY1RjcCqr7rjgOi0fRHUtje9x7WvfMVW3UdwgT8UbcyJ4GymPjCRsazBBjqkAdchLfi1Fmr5qVIQh7d7qt%2FmakBmRC9gOmh3RRRrIsNEGY8zpfcvxp7pUqBk0Q7T%2BRaTW%2BuBOtbtp4wCsSmfAYEd3KrwOv5WQ0wy4M%2FwwiIiVSwSuMi7V7u7PJKcMzS4CVvsNq1lgLSX1rtMYKga%2Fig3DDvQ6mTkNaPiuB1zEo%2FGeBOSM2TrrQZYlgYS%2BnLpZcQSPaFpw2KLasynLMfPutyD4HMt&X-Amz-Signature=df27dc5d9b80a1fc796a56f8693def84a9c12bbe83694fbf005a4f3724d09ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQLGKROF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgUZMDJUcTMdCBEjriFmxsFgBYzViopSsSwRIZd3sX8wIhAMY8XIUYpCiUBuPfYyj9EwI0AgtJUyxDoQGo0eOHjLPjKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD8W9DADRrjUSIENgq3AOJIu%2FnZF0pIbU%2BsQcLWFK4g1iObymBIlAxkurhgK74evTaRXNfRFSWXa1QDQ4mlRzWePJI7ZyoFsV%2FuerL6jTyrwrK02hTZbVwKsK8AydiXAJpBhw10TviP9C8IAHxyBWRU03xRhu4jp0%2Fc1k1Y5qhk9tnIn26wwG5cOBxzSnaTWUk7e8d5h%2FpfA%2F3Gm8vU77zD0rUmZHcNQV%2BZedxrKW6IYsmVMNZVVqnExPmfSNuN9QydWP6r%2BXje5823I7YHdBd1lGalPSHqiOGo1uFqyVqZD39UDRGlXAcdYFQfPg3IsbjmJL%2B%2BphnQXLr7YxBN%2FGT%2FDlJNIHn9DYF39FiXDfneZP1r3twKl6FW3zEI%2FnLuXWIBOFFChf8%2Fp7xOKpNBxngWxuBPu3%2FP%2FUM6cglrn1KLzWdVyOW6PyULUfVSk%2F08bvteVjwiANPc6aXw7haA7Am%2B72Nu%2Bp0Xt9D4%2Br7zSaE6q14mvLzZk71SeoKe05bqOvd%2FvJm%2BaxB0es06ee1D6JFqaw9viZjCvhJsfixMhuvIl0kday33xl1OGvpPLo1OPzlQkuhSFv7kTmLrqP5Q9963fN4oV4QrY1RjcCqr7rjgOi0fRHUtje9x7WvfMVW3UdwgT8UbcyJ4GymPjCRsazBBjqkAdchLfi1Fmr5qVIQh7d7qt%2FmakBmRC9gOmh3RRRrIsNEGY8zpfcvxp7pUqBk0Q7T%2BRaTW%2BuBOtbtp4wCsSmfAYEd3KrwOv5WQ0wy4M%2FwwiIiVSwSuMi7V7u7PJKcMzS4CVvsNq1lgLSX1rtMYKga%2Fig3DDvQ6mTkNaPiuB1zEo%2FGeBOSM2TrrQZYlgYS%2BnLpZcQSPaFpw2KLasynLMfPutyD4HMt&X-Amz-Signature=621890a6ad8c4e977506faa7a7ff2af50707fdbf624cc0c7501413edf2026e21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
