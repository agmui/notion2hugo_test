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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFJNPF5%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCUGQHn93M2SrLKHl9hD5p9IfBLdd8E0dxCQHSwH4niEAIgP9%2FxIwZk6zX%2BE8z1nmiuTy4L9uFf4TfRRLxyGisPuR8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr7eDb9zR0S2wDolyrcA%2BLmRbA%2BGM3IoX0MKAOG947SPLxjIiUqkUEMwX6pRtMY63QB%2BQziUSgbDsMS%2BSVzOxgd%2Fpm6w6t%2FyCEHk4qE%2F7spsd%2BZOO2XsX0GN%2BOi8kDezruqgFjUsTOn574yBOTwamjchuRIn3g9q%2FUHnOpx8AnjiX%2B5UCkyR2IoISbZBWDXZ60wQNlvL4a7GmgAbKil9QrbpWKkVuP3CNS5vMQeVzMSBlFzfWnG9Fd70j80LEum4LiIJihNNJKKdbH9O6NRctjf7Roc6TJsCVzIhZnP7vDZE0MoxCobv%2F7c0iJY6h%2FmW5nLMPNRjaobMFApyG1CF5Os1oWumuCRJbaTVXetu4pf9%2Bw%2BtACSj6scQvfgEiFIhnDns%2BWXPsY7Rmqsxph7F0fYvPvfs0dw0IlTAch2gaTCEYLY4Zk6FK%2F4szUp%2B%2BRA%2BZnEe7mWzFZb8rvhyGNUsVtPyVitColTi%2B3rGGE3pIJa0FWfe84mnKcCrxVylAtsqbuhWUnNrPM6Rbt1LxleqVe6Wj49gJaIARZFImkvHhTPy%2B8p58IuE2SewQhnYnwikK7B9IW2KsbGU5opq%2BQ6RiDMmKBijeyIvaxA3p%2FCzeb6wwOOy9xnUk9tIqUGhtmbTa5KqDBkGGyRXYXyMMWu%2Br4GOqUB61zhvlTyIXrJJqqEcIItgfoJK22PunoTaa%2FdUj9XnBnvntZtp3%2FbWjI1wYeWEqEyaSQ04AdNfc2IzDnnx1FVLQounHFNgUr0oEH3VdI7okWNa%2BBWbU7FohWD%2BkVwq1yGN1Pj3ac2LA7ypC5QlTlfNVM46YnjUmxIu3sVdP%2BBboIHAem%2BbSSFB4YDePkIBLM4QSra%2BZVRRoQP50QNY99cPFd34Pqt&X-Amz-Signature=1a34cef367b98b1a325e6378dffc3bc81e5f70817f5c1e1ea9b94453f7511ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFJNPF5%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCUGQHn93M2SrLKHl9hD5p9IfBLdd8E0dxCQHSwH4niEAIgP9%2FxIwZk6zX%2BE8z1nmiuTy4L9uFf4TfRRLxyGisPuR8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr7eDb9zR0S2wDolyrcA%2BLmRbA%2BGM3IoX0MKAOG947SPLxjIiUqkUEMwX6pRtMY63QB%2BQziUSgbDsMS%2BSVzOxgd%2Fpm6w6t%2FyCEHk4qE%2F7spsd%2BZOO2XsX0GN%2BOi8kDezruqgFjUsTOn574yBOTwamjchuRIn3g9q%2FUHnOpx8AnjiX%2B5UCkyR2IoISbZBWDXZ60wQNlvL4a7GmgAbKil9QrbpWKkVuP3CNS5vMQeVzMSBlFzfWnG9Fd70j80LEum4LiIJihNNJKKdbH9O6NRctjf7Roc6TJsCVzIhZnP7vDZE0MoxCobv%2F7c0iJY6h%2FmW5nLMPNRjaobMFApyG1CF5Os1oWumuCRJbaTVXetu4pf9%2Bw%2BtACSj6scQvfgEiFIhnDns%2BWXPsY7Rmqsxph7F0fYvPvfs0dw0IlTAch2gaTCEYLY4Zk6FK%2F4szUp%2B%2BRA%2BZnEe7mWzFZb8rvhyGNUsVtPyVitColTi%2B3rGGE3pIJa0FWfe84mnKcCrxVylAtsqbuhWUnNrPM6Rbt1LxleqVe6Wj49gJaIARZFImkvHhTPy%2B8p58IuE2SewQhnYnwikK7B9IW2KsbGU5opq%2BQ6RiDMmKBijeyIvaxA3p%2FCzeb6wwOOy9xnUk9tIqUGhtmbTa5KqDBkGGyRXYXyMMWu%2Br4GOqUB61zhvlTyIXrJJqqEcIItgfoJK22PunoTaa%2FdUj9XnBnvntZtp3%2FbWjI1wYeWEqEyaSQ04AdNfc2IzDnnx1FVLQounHFNgUr0oEH3VdI7okWNa%2BBWbU7FohWD%2BkVwq1yGN1Pj3ac2LA7ypC5QlTlfNVM46YnjUmxIu3sVdP%2BBboIHAem%2BbSSFB4YDePkIBLM4QSra%2BZVRRoQP50QNY99cPFd34Pqt&X-Amz-Signature=bd8e8348168ca627c2e6aed46ceedc63a594a7662488303a24044c84b0f3eff5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
