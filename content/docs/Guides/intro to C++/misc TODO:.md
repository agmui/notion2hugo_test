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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K56WYW7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4D43b09tWb4olH3ctpu6%2B%2B0RBbp8l3l%2B%2FGq3esc6N1QIhAIfLRoXlQ8214W1TzEn4MsdQbjpvBJ3uonWvAmR%2BdnAyKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8CPqXgzwrZCcyMloq3APBv8GqYvxINs3FcB53Jkw7GfcMsqBRgTqK4ptZWNsLJ45CDSVnAiB3CE9ZqxODQj29Nikv%2FY9S1bEsC%2B1E%2BRoxVTMW5VZY7Cc0mCzoPxzezotqcRClKGJJZMQeaJL%2BIADtRFl427WvLO%2B9X%2B7YjdIyzhLJOmRZ%2BJJyNuLcHrKShyfgRc5E5jOOsksUnltddMPJ5ED5g0Va0nXtjNKE5yl8Sd5X6Je7j2Wa3EjMQ0J0SienEmbLryJFQ%2BMY9dPme5UUGaM%2FVqBniGJ6CRUEh%2Bn%2FAo7H%2BVUHan25TREdfLMgPAFiuLyUvC%2BOe%2BUmVKiQOzfgupJ%2Btu5mSN2%2BGyTIjflEUI40M02KIPGgYHw7plXyXjiKND9AG5anAMvnrCTQviqNpLns%2Bs15UbgB88NTTzg2YN%2B1Wv0JTA3YpehMIvLXcqgWf54ilUaJBeurzYAFbMVe%2FVKX%2BapS6nPaDfE%2BdKCG02izEm%2Bifdd1X2T%2FhPMTsLNwOBteXdl13qkVPjJc3mCfOvOqYGO4d3Du3BkWFxh%2BzzhhMNqb7x9nUVQ6MsEAq4Ct2pHBQ5NIWl1FrctUKHgUnsKqNzcig6caZkxclF8fzn5JZI2cPaNoSmVuJKfqshW0izSW1vUjU8xaAzD6rLDBBjqkAYpULeDrBK%2FCtoKlrd2Crl3wQ8E45Fz%2BzgcCQzzTIvcdSKPiFSrYWlz%2FAqzgN0%2F001zGm966VUJ1MZxcdTgSLNlKe%2BVMe4JROrUKhlgavXHLP%2FTXjsZVbqPR1%2BiYFba7xl48y1ad0ihOuLunovEr1t7cwUG2%2BGoRclll%2FHL3q6iFbIyRKk7WVJUbzQWymlEk5UCIopvG4sQwiLOp5VPghdAjNHIN&X-Amz-Signature=0c134e72568bbed6a4bf39724c8f1a9576f07b1406e9cbac216a5982b9e66331&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K56WYW7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4D43b09tWb4olH3ctpu6%2B%2B0RBbp8l3l%2B%2FGq3esc6N1QIhAIfLRoXlQ8214W1TzEn4MsdQbjpvBJ3uonWvAmR%2BdnAyKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8CPqXgzwrZCcyMloq3APBv8GqYvxINs3FcB53Jkw7GfcMsqBRgTqK4ptZWNsLJ45CDSVnAiB3CE9ZqxODQj29Nikv%2FY9S1bEsC%2B1E%2BRoxVTMW5VZY7Cc0mCzoPxzezotqcRClKGJJZMQeaJL%2BIADtRFl427WvLO%2B9X%2B7YjdIyzhLJOmRZ%2BJJyNuLcHrKShyfgRc5E5jOOsksUnltddMPJ5ED5g0Va0nXtjNKE5yl8Sd5X6Je7j2Wa3EjMQ0J0SienEmbLryJFQ%2BMY9dPme5UUGaM%2FVqBniGJ6CRUEh%2Bn%2FAo7H%2BVUHan25TREdfLMgPAFiuLyUvC%2BOe%2BUmVKiQOzfgupJ%2Btu5mSN2%2BGyTIjflEUI40M02KIPGgYHw7plXyXjiKND9AG5anAMvnrCTQviqNpLns%2Bs15UbgB88NTTzg2YN%2B1Wv0JTA3YpehMIvLXcqgWf54ilUaJBeurzYAFbMVe%2FVKX%2BapS6nPaDfE%2BdKCG02izEm%2Bifdd1X2T%2FhPMTsLNwOBteXdl13qkVPjJc3mCfOvOqYGO4d3Du3BkWFxh%2BzzhhMNqb7x9nUVQ6MsEAq4Ct2pHBQ5NIWl1FrctUKHgUnsKqNzcig6caZkxclF8fzn5JZI2cPaNoSmVuJKfqshW0izSW1vUjU8xaAzD6rLDBBjqkAYpULeDrBK%2FCtoKlrd2Crl3wQ8E45Fz%2BzgcCQzzTIvcdSKPiFSrYWlz%2FAqzgN0%2F001zGm966VUJ1MZxcdTgSLNlKe%2BVMe4JROrUKhlgavXHLP%2FTXjsZVbqPR1%2BiYFba7xl48y1ad0ihOuLunovEr1t7cwUG2%2BGoRclll%2FHL3q6iFbIyRKk7WVJUbzQWymlEk5UCIopvG4sQwiLOp5VPghdAjNHIN&X-Amz-Signature=1b83993c2c5afbd3a0d8f81234ccaecab0fbaa6a0901d86f208d70223baafe5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
