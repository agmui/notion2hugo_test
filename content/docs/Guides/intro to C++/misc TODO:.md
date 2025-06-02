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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=06f2127ece3b6806ca0f9ce80ff6383830d844f43af740ba2d930e0a1accfcf7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMTOGUV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCMFnljLyAIEU%2Fv4%2BzbuVR1wfJs0%2FIDnleFzMTYQ87h4wIgGh8jLszUmQGh1vTdh9x7vUtoLONHqhGToS6%2BXBIP%2FUkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjE1GkCl0WS3tHeMyrcA0qpHY1970CtnbhZngU59%2Bxn9j3zJHq2NNoiJXP%2BTNIoG%2BR9nXF%2BWo09AZBW5P88LGjNEQF%2FYPkqGbx66KnbxO4iWRL8i33GjHF0WJ0t2tHSUMei45UP5yXy4ayFwtNjm2u%2FbgKxjlU7LOQ238bHcXYGwvnFRZxKl%2FkFSLBMJMjgieppAzxp%2FEEqjizNsxI8lZb%2F9ZeeYxfoND0ZeSywW41n%2BfsRbdJs6z9A5bdkCLpmT%2FMq99ofUFKSRFUcqmscz6GchUrXf58qyndhmOrA6lGOuKpOaoCbu11BgEoUsQbyLUPU8Hf2WPRf1QKjwGh77FTuAGt6smYIw6hVC9CvK4E%2Bf4Q5WpVM83x5bAWWLoArTXP9OWqVS966rka6bTWnFtV6JneWSsTHWSnYXTcrWMypHodvGmdR5HCZB%2B4Ac7WNiQXf8DSUD3aGPtG06QVg9UbdVGCmUj%2F4RI6lG%2BNQH0qTgovqG6YCjWY8ZW0dTmClU7UfepnZ7ZTkUls4Kq2naRIrs1nPhhODyuH5KrIiZ80yBwGQ46qYGGKwMUA%2FfurUqfC9Al8IsHzBQIsCscaxu9vLiWFaPcr9JXD696p%2Fy6JSlGhmGgXmdjr3UHpK%2FRfQWHFnrHsV%2BV81t%2F2hMJaT%2BMEGOqUBIiV9teN326%2FzsliTIZ2JxeFDLjMtquQeRt5a7YlPiWR%2BpDKoQFBSPHV2tHj02FLB6qPLcti5lNBnDUDpq4mPg30V9eT0CFNgqFEbNFTqym6r7nIS7gpmsQOLCABZanbagBKxoIxCiaQh2LvL8c8eiSmcAIe8EuEsK35fXZicEISWJLFOoYscJ0EPycfjfFtrGrh9MslJFoqjDupB7F%2Fmgbv5v5Cy&X-Amz-Signature=1317619e2a78c7846a34e7fcbf42cfa765f6f924a5d82902ca6c7aa2c95443bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
