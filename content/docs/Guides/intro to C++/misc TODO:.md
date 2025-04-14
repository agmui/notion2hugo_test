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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBUMINX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbvP6RlDkhUATCEWryWFPhz%2FuZpY1rQdbGJVpWJ5YyRQIhALJaH%2FkDm9TP%2F7jhmub3VVEPGVi0PPXs%2FTYisYEwb1qhKv8DCBYQABoMNjM3NDIzMTgzODA1Igxsep4hN%2BTX0U0tajcq3AOlv%2FtvBAYoDK9owDp82QkUoGQgVezuI3AAmH129Z5BzJPzMciuyu%2FuViUmIw1ezlc5%2FdfFyCxybAdhsDHCaPISrUoTCFODUE8ea4qenWsytmzpW7Bley21NROd35srb2doVUI9OHC4BEGTfVp4R0UJBMjOx0%2FuXj22EEbtCMh9flQVewtI8RJLPmNcHrqLlByN%2F%2FccZFxn1qp3tFBYVLelf6C0GkmaXmt7cGYOIy50t2wwEVlSmCu%2Fe30xSzO1CO%2FPwnHvperWUf0Tis3cg%2F%2FN8fI8%2BSgffUfcSz%2B%2FX5gRQ%2FSl3%2FmEfZuloLB8zsO66UH9U1xFyJcghg%2FGJsiZi%2Bj%2Fkfh7bPAvlhT%2BeY%2F%2BKd1SWhkN8gXHx4cBMZV8ojNOJJwVEeKXx5ywxs48RqKuqJKlDTWDnYV3Ty6ddgFVRbF227Z8onOpTqYIxCyhaFMyYIn7a9e8G%2B0F%2BrBWNKtJ4e%2BUrS3tWhbmqfhQMJkXAB%2FiawsSRtKF5%2BqVrg9acotWEcOvJQMVi45AqXRZWTDeyIy4H6HbBRkfzWqrXRlce4DDwiel1WDkox16k99AzJC2ln8u7p%2FqHCvj%2BLEPSEkb270lc4RBMd0VgQcobjW50JYyHOqDgBgyayb4W%2BuijzC3jvS%2FBjqkAaFQh5jFbESIipGDvQO7cDsGHJVAvcinF6PZ9mo699hFUlM1fi6uRo3CDEyFmDZYfRqLJVFPHU4t1mSs5N1Vjuy0dABwgZd4B8%2FYiXCE2MMAdXdkgIrMJPL%2BuE9t9TmvfJjQzdSBk4tNrsPs4E7ZwB0SoaDc7IHFa%2BRvW6eq9h5W%2Bt3YCw5UF1cCGsDWGFDABVRNOVKU8ctOOg%2BX7P61FZcCv6Pt&X-Amz-Signature=d56f19c7a703fb093ff8ac104b348c7952e0fc8b37bab6ca31f9897cb22c6faa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBUMINX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbvP6RlDkhUATCEWryWFPhz%2FuZpY1rQdbGJVpWJ5YyRQIhALJaH%2FkDm9TP%2F7jhmub3VVEPGVi0PPXs%2FTYisYEwb1qhKv8DCBYQABoMNjM3NDIzMTgzODA1Igxsep4hN%2BTX0U0tajcq3AOlv%2FtvBAYoDK9owDp82QkUoGQgVezuI3AAmH129Z5BzJPzMciuyu%2FuViUmIw1ezlc5%2FdfFyCxybAdhsDHCaPISrUoTCFODUE8ea4qenWsytmzpW7Bley21NROd35srb2doVUI9OHC4BEGTfVp4R0UJBMjOx0%2FuXj22EEbtCMh9flQVewtI8RJLPmNcHrqLlByN%2F%2FccZFxn1qp3tFBYVLelf6C0GkmaXmt7cGYOIy50t2wwEVlSmCu%2Fe30xSzO1CO%2FPwnHvperWUf0Tis3cg%2F%2FN8fI8%2BSgffUfcSz%2B%2FX5gRQ%2FSl3%2FmEfZuloLB8zsO66UH9U1xFyJcghg%2FGJsiZi%2Bj%2Fkfh7bPAvlhT%2BeY%2F%2BKd1SWhkN8gXHx4cBMZV8ojNOJJwVEeKXx5ywxs48RqKuqJKlDTWDnYV3Ty6ddgFVRbF227Z8onOpTqYIxCyhaFMyYIn7a9e8G%2B0F%2BrBWNKtJ4e%2BUrS3tWhbmqfhQMJkXAB%2FiawsSRtKF5%2BqVrg9acotWEcOvJQMVi45AqXRZWTDeyIy4H6HbBRkfzWqrXRlce4DDwiel1WDkox16k99AzJC2ln8u7p%2FqHCvj%2BLEPSEkb270lc4RBMd0VgQcobjW50JYyHOqDgBgyayb4W%2BuijzC3jvS%2FBjqkAaFQh5jFbESIipGDvQO7cDsGHJVAvcinF6PZ9mo699hFUlM1fi6uRo3CDEyFmDZYfRqLJVFPHU4t1mSs5N1Vjuy0dABwgZd4B8%2FYiXCE2MMAdXdkgIrMJPL%2BuE9t9TmvfJjQzdSBk4tNrsPs4E7ZwB0SoaDc7IHFa%2BRvW6eq9h5W%2Bt3YCw5UF1cCGsDWGFDABVRNOVKU8ctOOg%2BX7P61FZcCv6Pt&X-Amz-Signature=4ac32eb51b4866016317ba57db18c680abfb9468747f6847eb4c95bb3c9d75f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
