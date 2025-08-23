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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6F4VWG5%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw6N2ebdCQBJ9MdVsk2X6iZHgPP8%2FSztp%2FoLGfR5wHzAiEA7HzvDlv6c5U2d5FoeNqVeoaEmnu6rlby%2Fi1IxBsU3dcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIuCK8sZcag%2FG7n44CrcAw75vv5MNapRXrWrnLdfUGEolfajtcd1NQyrH4xz8O6Yyjio2ErXFVCTxCgR4RMWz9xn0kHvDGKH6mt%2FV3jnF%2Bf%2FH99Nq%2FF9P9AvYDkXstjfK0J%2FXnw8jvwRR2WfKIf5qJ9cEZZXKYJQZ7Zk13tW4b0cxasV0%2F9DYcTZv3iCOZNiVBPmwoMm1CzUwR0w%2FkSAGrFKYYK7FAHffsJeFP3WiGpHFiA2cDOcWx%2BqvSj9KjNNtx4aCHcF8aFG%2FaNxgeVyGZTGEp5h0Et2mDxH9YlbzqUB7%2FbkRrb4RsKTyRy0xB0DYWXEHateBsJzwSyiy6BR%2FWKBQzfjtkbWf8Gynx%2BFaDbeSyuMiNcZG3cpA2OOti4cNrAZqg3bmSeq%2FR%2FvWic1Q57m%2BfYQhF8Gq4NG7dOMo%2B3KhW%2BXJoPx7BSE3aEeRrJ5mwa67T0OIEOlXEaGcMjPSMtg9SDtqKzDUXBydnXK%2BmTLUMeUPhC4dMm5CfUvLKqQAhqduAHLYzXwDFSZCXlG1KDnlPXwMvYjqbeae4oDcI%2BYNd7xFy6uZVwnRZZfdHL%2BdL%2FqDe%2BnbHgP246bIKfqIL2dWP%2FkMn1esmZIVoZz3ohlU6A6VjC7LFqLXUFZuF%2F9NFXaqOUvsXyGnnXRMKSOpMUGOqUBeoRH%2Fa9GD9BqQhSkCsLjquoAu%2B1yE68B01amhJAKj5PA8iWrdvsfCJ9CSi717hKh%2F1Uxpj06KI6LpG0mWWnjR113FhvVN%2Bb1dla55NIfLXCMz%2BWn2lBzlBNk5KBVaozZ%2FbHpEy36P5ihTEQoLhI31kdPzdNqfvFyCOvGXSeU6Efu99fhC%2BHHsYpRTVnXCggLeED%2BcDV2oac8tuFE1useiYiDeMyl&X-Amz-Signature=c4cb3bdfbc96a7bb3ed30c23c0a292d0f25752ff2fd466238ca7821515e2a168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6F4VWG5%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw6N2ebdCQBJ9MdVsk2X6iZHgPP8%2FSztp%2FoLGfR5wHzAiEA7HzvDlv6c5U2d5FoeNqVeoaEmnu6rlby%2Fi1IxBsU3dcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIuCK8sZcag%2FG7n44CrcAw75vv5MNapRXrWrnLdfUGEolfajtcd1NQyrH4xz8O6Yyjio2ErXFVCTxCgR4RMWz9xn0kHvDGKH6mt%2FV3jnF%2Bf%2FH99Nq%2FF9P9AvYDkXstjfK0J%2FXnw8jvwRR2WfKIf5qJ9cEZZXKYJQZ7Zk13tW4b0cxasV0%2F9DYcTZv3iCOZNiVBPmwoMm1CzUwR0w%2FkSAGrFKYYK7FAHffsJeFP3WiGpHFiA2cDOcWx%2BqvSj9KjNNtx4aCHcF8aFG%2FaNxgeVyGZTGEp5h0Et2mDxH9YlbzqUB7%2FbkRrb4RsKTyRy0xB0DYWXEHateBsJzwSyiy6BR%2FWKBQzfjtkbWf8Gynx%2BFaDbeSyuMiNcZG3cpA2OOti4cNrAZqg3bmSeq%2FR%2FvWic1Q57m%2BfYQhF8Gq4NG7dOMo%2B3KhW%2BXJoPx7BSE3aEeRrJ5mwa67T0OIEOlXEaGcMjPSMtg9SDtqKzDUXBydnXK%2BmTLUMeUPhC4dMm5CfUvLKqQAhqduAHLYzXwDFSZCXlG1KDnlPXwMvYjqbeae4oDcI%2BYNd7xFy6uZVwnRZZfdHL%2BdL%2FqDe%2BnbHgP246bIKfqIL2dWP%2FkMn1esmZIVoZz3ohlU6A6VjC7LFqLXUFZuF%2F9NFXaqOUvsXyGnnXRMKSOpMUGOqUBeoRH%2Fa9GD9BqQhSkCsLjquoAu%2B1yE68B01amhJAKj5PA8iWrdvsfCJ9CSi717hKh%2F1Uxpj06KI6LpG0mWWnjR113FhvVN%2Bb1dla55NIfLXCMz%2BWn2lBzlBNk5KBVaozZ%2FbHpEy36P5ihTEQoLhI31kdPzdNqfvFyCOvGXSeU6Efu99fhC%2BHHsYpRTVnXCggLeED%2BcDV2oac8tuFE1useiYiDeMyl&X-Amz-Signature=da7eb1f771774df4314c430882ff2ccd59b6c9a6bc1c5928460cb564e79f8e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
