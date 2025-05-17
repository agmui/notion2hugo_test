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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNW3TOZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd0%2FWLjY2suzQklqw8sUmSajXHxrYm0eTxvpVFmv2rngIhAMbdl6PH4TkodmAZu9MLWJIioz5NaQaZ6cJR4zhkePAVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzT98foyuo%2FLVeQqgsq3AMf38toxo7LqKykW6WBvwwX0OuPOwXP7j9VQU9NyR%2BbZBjt13Gar%2FqA%2BQY751wLFb%2FjprrpbHlB2r9P6w5R7wML94QhwK9gs1j2zP3hFpUSPb8EhspEhJiNq8YE5rlNCW%2BBMuy0PM2Hd8tGQdrIBuX4zTYab6lAwbUnGMn7PPdEju0YNfFO4vkkkV%2FqhR6UsCYMr5sZa1GOypH3d3UCNawvs2c9%2F3tsKE9e9XJ9KP6ARnIZp8bPo12usIlQnnFnBOkA%2FiDDP7mCraqsfXMaMeJMEl%2BPfsWcWVj9EfCbcaNGkRGIUPZUAANQlIljMFhGv%2Blm0rkC5uCbXmeMXbyAfY8414N6aAOdroMRRoJcWLQq4GOC8d%2BSPExi0cLGQ2YS33Y3LaeUKKCZ0KwHBdhV0Uxs8xb%2Fyu9UMEcV3X%2FUcNdlobQwKAmPAVRF2E3YgPeAUy1FkXJqeEUKlk0mpcEO9Y01YuLSZ7A%2FxTdXfP2WAnW%2FR5nauLpOs3CveCuoHADcjMySUx7MTw1mlYI6CG0wWHjCVG9HGm3o7ogZXZgjuTXI7uiTW8GF5s0cGjrE3jU1e4NV8g3TsBnv0V5KsawTf6Y5Ll7nps%2BDvGb8jH2bsC%2BsvacatycHOYNux4oWRzCQq6DBBjqkAdUzdyGdCbm61SssSjMDxAlyrRnKTT8u2T0U5TdvIRj3p1vZMzSbQGUYkFTPk7QYX182%2B%2FfD3RQ5b4oofTYB1b2Gr%2BF7QxsBcAnnIzqRq%2FTpA%2FoZ4VzqOjMJZxZKF0YFOABhqoxgnqD0pEkVT4detqiFB9kb0dYKaqgPU4o0QEgaCP%2Fm8eb%2BRe%2FM0hVIStKJA%2F7JkmW7CaXmToWIg3L6Om%2FQazka&X-Amz-Signature=b4f19094fa663c4f681fa061a1c3eb7003182f2a222428fc6d64ac1848814ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNW3TOZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd0%2FWLjY2suzQklqw8sUmSajXHxrYm0eTxvpVFmv2rngIhAMbdl6PH4TkodmAZu9MLWJIioz5NaQaZ6cJR4zhkePAVKv8DCFYQABoMNjM3NDIzMTgzODA1IgzT98foyuo%2FLVeQqgsq3AMf38toxo7LqKykW6WBvwwX0OuPOwXP7j9VQU9NyR%2BbZBjt13Gar%2FqA%2BQY751wLFb%2FjprrpbHlB2r9P6w5R7wML94QhwK9gs1j2zP3hFpUSPb8EhspEhJiNq8YE5rlNCW%2BBMuy0PM2Hd8tGQdrIBuX4zTYab6lAwbUnGMn7PPdEju0YNfFO4vkkkV%2FqhR6UsCYMr5sZa1GOypH3d3UCNawvs2c9%2F3tsKE9e9XJ9KP6ARnIZp8bPo12usIlQnnFnBOkA%2FiDDP7mCraqsfXMaMeJMEl%2BPfsWcWVj9EfCbcaNGkRGIUPZUAANQlIljMFhGv%2Blm0rkC5uCbXmeMXbyAfY8414N6aAOdroMRRoJcWLQq4GOC8d%2BSPExi0cLGQ2YS33Y3LaeUKKCZ0KwHBdhV0Uxs8xb%2Fyu9UMEcV3X%2FUcNdlobQwKAmPAVRF2E3YgPeAUy1FkXJqeEUKlk0mpcEO9Y01YuLSZ7A%2FxTdXfP2WAnW%2FR5nauLpOs3CveCuoHADcjMySUx7MTw1mlYI6CG0wWHjCVG9HGm3o7ogZXZgjuTXI7uiTW8GF5s0cGjrE3jU1e4NV8g3TsBnv0V5KsawTf6Y5Ll7nps%2BDvGb8jH2bsC%2BsvacatycHOYNux4oWRzCQq6DBBjqkAdUzdyGdCbm61SssSjMDxAlyrRnKTT8u2T0U5TdvIRj3p1vZMzSbQGUYkFTPk7QYX182%2B%2FfD3RQ5b4oofTYB1b2Gr%2BF7QxsBcAnnIzqRq%2FTpA%2FoZ4VzqOjMJZxZKF0YFOABhqoxgnqD0pEkVT4detqiFB9kb0dYKaqgPU4o0QEgaCP%2Fm8eb%2BRe%2FM0hVIStKJA%2F7JkmW7CaXmToWIg3L6Om%2FQazka&X-Amz-Signature=1981638ea6dc99ca714529348e6b88915e4fbd10f2f605320c0982027c283a09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
