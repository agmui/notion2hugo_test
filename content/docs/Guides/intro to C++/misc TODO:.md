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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLBHOZQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3XbS8DThz8ScKErpRxsBWegus44nUXslgfMLrOI7zAwIhAPmGid6L774NUMWWjEeEa2g%2Fr%2FS%2FiJTtzaZFcYFDqa%2F%2FKv8DCEoQABoMNjM3NDIzMTgzODA1Igz3W7CJoT2bu7VV0Voq3APZQ7boG1yELaiUamG7RtBuDjzKMAL2Z654fqHAUGElxMk8ua01GF5BPKC74GrM6rcDO1XOC9%2BDWZiRhmJEKTWR5hNxL8QNUXk1IEumULd7FUPjm%2Fu%2BTCg7DTldaNYbD6hM%2FBZCljT%2FWVhCdB7O3oebYADBgsOKAYZnKshSQ%2BWOopEdEhxBZMMZYjMp6iy2YSlSqXrEQuiBA27GWOLFHeI5GbOi8n8IY01q34NU6y9q1u%2FHsYkTFutusjvgAsoOzH98p%2FOAbRCca9nQFEsA4xK0HZAO7mesfhG4v7LW3rRN%2BE9HfmVDGGgQtjp9pyIyjYNA7cuJHnguwixmY6ip103OMm2OuZIF5n03YIXJFPW2X%2BwcuMC6MTUNxUzZQ8kTNEjp04YIAZ63esMgf85QltlLNKQLN0K4tXAsVbZFuqS7dAx%2BttnxRY6DyPqbWNutVnfDWZ%2BKgYVfrUeaEyk347wNqsXOkigRH5SLKRUspXISC9QNzMQwsSoQN3ZEpLGeFj1hB4wMrVPxLtgmMbbql7V8LiZSnoDBYufptLCEGVFdB6lQvnTUhHWHnFuY3PEv6b5YfnLNvIUnW1ySOrHCdQXzf1x4FMvUrHYEd9HikvmqMzpd1pQameQW%2FzKUGDD0u469BjqkASO668oV03qTI%2B6J5Hlp8JUUOgOVtr4ZZqi21sBgO4sP5pq0XFskCm%2F3B4yLNn9cFwGlvp75dC%2FQfcJR%2Fwm6C%2Bm0UnnFAIhjyzWtfNN%2B8kZOKWP%2BB4iBxT9tRdbh72Ynx9o%2BYLTmY%2B5bQJiCnRAcdBEXa1sPUbAOI6TPjvdvsW3rJcWLbz%2F0CwstujhKV74YeL9PP05d%2FWst8V%2B22FdynCQ8jrmi&X-Amz-Signature=d874e7e4e5c9940b2efc5dd8d806c89959eedad57d5ef1992cec102fdc3a8d57&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLBHOZQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3XbS8DThz8ScKErpRxsBWegus44nUXslgfMLrOI7zAwIhAPmGid6L774NUMWWjEeEa2g%2Fr%2FS%2FiJTtzaZFcYFDqa%2F%2FKv8DCEoQABoMNjM3NDIzMTgzODA1Igz3W7CJoT2bu7VV0Voq3APZQ7boG1yELaiUamG7RtBuDjzKMAL2Z654fqHAUGElxMk8ua01GF5BPKC74GrM6rcDO1XOC9%2BDWZiRhmJEKTWR5hNxL8QNUXk1IEumULd7FUPjm%2Fu%2BTCg7DTldaNYbD6hM%2FBZCljT%2FWVhCdB7O3oebYADBgsOKAYZnKshSQ%2BWOopEdEhxBZMMZYjMp6iy2YSlSqXrEQuiBA27GWOLFHeI5GbOi8n8IY01q34NU6y9q1u%2FHsYkTFutusjvgAsoOzH98p%2FOAbRCca9nQFEsA4xK0HZAO7mesfhG4v7LW3rRN%2BE9HfmVDGGgQtjp9pyIyjYNA7cuJHnguwixmY6ip103OMm2OuZIF5n03YIXJFPW2X%2BwcuMC6MTUNxUzZQ8kTNEjp04YIAZ63esMgf85QltlLNKQLN0K4tXAsVbZFuqS7dAx%2BttnxRY6DyPqbWNutVnfDWZ%2BKgYVfrUeaEyk347wNqsXOkigRH5SLKRUspXISC9QNzMQwsSoQN3ZEpLGeFj1hB4wMrVPxLtgmMbbql7V8LiZSnoDBYufptLCEGVFdB6lQvnTUhHWHnFuY3PEv6b5YfnLNvIUnW1ySOrHCdQXzf1x4FMvUrHYEd9HikvmqMzpd1pQameQW%2FzKUGDD0u469BjqkASO668oV03qTI%2B6J5Hlp8JUUOgOVtr4ZZqi21sBgO4sP5pq0XFskCm%2F3B4yLNn9cFwGlvp75dC%2FQfcJR%2Fwm6C%2Bm0UnnFAIhjyzWtfNN%2B8kZOKWP%2BB4iBxT9tRdbh72Ynx9o%2BYLTmY%2B5bQJiCnRAcdBEXa1sPUbAOI6TPjvdvsW3rJcWLbz%2F0CwstujhKV74YeL9PP05d%2FWst8V%2B22FdynCQ8jrmi&X-Amz-Signature=bee42d61b1ab252e21b5297586a87594525cd478ba57d692945999a79722ba55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
