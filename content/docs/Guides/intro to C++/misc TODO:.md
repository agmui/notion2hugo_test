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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXYZNHS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDAfE09Hx0A7t5bVd0xbbBzea2ZPvIkcsdd3ufz%2F%2B8hNQIgHXEQu8pMGj09r8FIBnHcjcn0PKyqrbsnyv3ik9IS7a0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOmwOGgzPkmSOT6aMircA2d%2F5dMjjpIPuZgRo4SQJPs5jfHwu2shbu4tGnIK71fIhOpZ6qQG6FDy%2F8YLiR%2Fv%2Fwj7jsTkBepMlYBVyQ1E6d76ztmm5xIh%2BuRbemtUtwotBUgeqe0PymF%2BPql0Ck3eMOuHgsaFaVxZcB32DXhVVpz0czYQnCFU9C9rmHy1Wv%2BWrVJDULum%2BQEK4%2B9w22NHx4Rdvj6jXNktCv3dzC7BCSF8d8%2FSOy%2BljMVKDZGIbRBjZOBgYzW6INxAxuCdslaw0PK19L2%2Bhk7WTj5Vgypob%2B2RCD52cBG1f3MY%2BnaPFMZ%2FnYi5q7StJKlhuvKpzHo2KD8na%2Fr57szsIJRCAfbqOcmqfyHMbHXS5myRn%2F%2FuygvF3%2FMIlJERDiVmt8l0Y2URrFfjg3XwUiZdYO7sc2SsjkHJ%2FU3t18OiXjyoYoRnk25WoluqaYe818%2BiXmdEodgzlXUPTkvKSm5lQok2ZB6q7m91XH5tY7I32BvqJ4JZIyne0RZw%2BT%2FvYOrlJB2Qhdn0ImH4R5m6JwXwIS7mlvP6mD5xPC%2BdKkLx15tHfxUdkGhQl0UUfbyzl1CpymQMxzpxsMvzUUMrQOf22SckW1K8b%2Fzkq%2FRNeCt%2FTvQ9w%2Fv7KS3nqrXjiTaLceBbNLe3MOXYh8IGOqUBtQ8%2F8k8qmIpQtQt5fWyO5yIIG%2FqSDIo9tKie6CWLwqozljGq%2BXR63THPwuSDKBSIn%2FPISVQILU80M41%2FGcac17EotHRjs7OMvZfNK%2FBOZio%2BFrn3T9ogX5mZafQZe9wnqp3ghi2rTvlJyUWKmu0OLO%2FZAGnOSwfqqo%2FnO4%2BYANN0ahrn0anFdYFEbINu2Dn0PpTdgs%2FeHMuRtoDtdqY1HnB%2FV03t&X-Amz-Signature=e7fcf6e5b283d921ee61ec91aec1a6d77d7b6b7e134cc379f29815e585a36cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXYZNHS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDAfE09Hx0A7t5bVd0xbbBzea2ZPvIkcsdd3ufz%2F%2B8hNQIgHXEQu8pMGj09r8FIBnHcjcn0PKyqrbsnyv3ik9IS7a0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOmwOGgzPkmSOT6aMircA2d%2F5dMjjpIPuZgRo4SQJPs5jfHwu2shbu4tGnIK71fIhOpZ6qQG6FDy%2F8YLiR%2Fv%2Fwj7jsTkBepMlYBVyQ1E6d76ztmm5xIh%2BuRbemtUtwotBUgeqe0PymF%2BPql0Ck3eMOuHgsaFaVxZcB32DXhVVpz0czYQnCFU9C9rmHy1Wv%2BWrVJDULum%2BQEK4%2B9w22NHx4Rdvj6jXNktCv3dzC7BCSF8d8%2FSOy%2BljMVKDZGIbRBjZOBgYzW6INxAxuCdslaw0PK19L2%2Bhk7WTj5Vgypob%2B2RCD52cBG1f3MY%2BnaPFMZ%2FnYi5q7StJKlhuvKpzHo2KD8na%2Fr57szsIJRCAfbqOcmqfyHMbHXS5myRn%2F%2FuygvF3%2FMIlJERDiVmt8l0Y2URrFfjg3XwUiZdYO7sc2SsjkHJ%2FU3t18OiXjyoYoRnk25WoluqaYe818%2BiXmdEodgzlXUPTkvKSm5lQok2ZB6q7m91XH5tY7I32BvqJ4JZIyne0RZw%2BT%2FvYOrlJB2Qhdn0ImH4R5m6JwXwIS7mlvP6mD5xPC%2BdKkLx15tHfxUdkGhQl0UUfbyzl1CpymQMxzpxsMvzUUMrQOf22SckW1K8b%2Fzkq%2FRNeCt%2FTvQ9w%2Fv7KS3nqrXjiTaLceBbNLe3MOXYh8IGOqUBtQ8%2F8k8qmIpQtQt5fWyO5yIIG%2FqSDIo9tKie6CWLwqozljGq%2BXR63THPwuSDKBSIn%2FPISVQILU80M41%2FGcac17EotHRjs7OMvZfNK%2FBOZio%2BFrn3T9ogX5mZafQZe9wnqp3ghi2rTvlJyUWKmu0OLO%2FZAGnOSwfqqo%2FnO4%2BYANN0ahrn0anFdYFEbINu2Dn0PpTdgs%2FeHMuRtoDtdqY1HnB%2FV03t&X-Amz-Signature=6a765059d71fd6b43c4c0459bfc70b4896f3eac9eb4d2e2c1ac15228ac2e2aac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
