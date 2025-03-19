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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N7GKNW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIno80%2Fv7bCgsO5FID9iT4x82OxqXrVLcJdKJ%2FpHWPTQIgKMcs3FeJv9QqQVZKPflbHyZ5sYirmwHFJLgiF7H99Rgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDK7Q2Ux1LWnzHQZg4CrcA3jtSBYnQHadmXSJttKqT88tYhf0NoZEUOD5DPbYOWYR7r9g8u%2Bgge1PHH0pYWoEVnUkpNj%2FT0Ov%2F5Um4%2B0DJfcH%2B20jl%2BYU%2BBLZtK03XWJm%2FJcqya%2BeCf5BkEDxIGIJS%2BZ%2BkOMh4HGkRyRYa3pKIVtcJI%2B%2BU3GKwIynHdsHAJj3awBU6bR6qO9a0sCpzUigoB7abX1pZT3avCH1vaRbEqYOKlT5%2FZtvUB62MuXwsw2FneV1vDBYRFaXssjhspvfvcGWCYQWmocVur9UyVZJoX%2BWPxMwUL0h2SBjkEm7ZF1MJQ7QC3oh6F05AtKaVgtUWI2FTuXDgHx1xaVZbJD3t2pbgUI52e2gfj8wQ8YVSYGCFnkGLgr93b61dIPmTA%2Bly0eEyxGnENOrJtaQhw9wvIjWz9A%2B8ROPfZLGjFjnC0h7lZ4YSU7r%2FUttVdZz90uX4EZ5iMEa2TNfzMi1SlL5i8jIn6tzZb8odsior8mw3zIyncMxAOKGOakQ9N2a%2FNzr5RhgkEdzPacCR%2B52lq96GjoLOuRkz8vLMfXizHJc0avaHW8rXRRwvFlwgYXFclA6zvgqCi5hLrEEdxb28MZ%2B6lLh29Z0nEMC2%2BTbRpwT0GTEgoPbf%2FwecB%2FLda3yMPy7674GOqUB4vy08UkgaexVVUBby6dsFuIaWSlclAP28FfUeC%2FUmTb%2FXCkz%2Bm3qtDD0c%2BQn5P6aBSj58KaRnf0OTNScZTGroFu4k5J4HWsZpcO3DuAFQtklT%2B3xbes4%2F1T%2BQu%2B5Q6R8r9%2FdMVidyYGwXLAln%2BaJjJLHY07AY5Xo6Uoooq6gfwevrLr%2F3L%2BC2Nq%2F88kYQTvYQgrKpx80%2BdWapZJDcOc0k9ZfandS&X-Amz-Signature=2c8ce26c158776500e703e9904e23d090b4e7a2824ced55c2bf182e150dca3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N7GKNW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIno80%2Fv7bCgsO5FID9iT4x82OxqXrVLcJdKJ%2FpHWPTQIgKMcs3FeJv9QqQVZKPflbHyZ5sYirmwHFJLgiF7H99Rgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDK7Q2Ux1LWnzHQZg4CrcA3jtSBYnQHadmXSJttKqT88tYhf0NoZEUOD5DPbYOWYR7r9g8u%2Bgge1PHH0pYWoEVnUkpNj%2FT0Ov%2F5Um4%2B0DJfcH%2B20jl%2BYU%2BBLZtK03XWJm%2FJcqya%2BeCf5BkEDxIGIJS%2BZ%2BkOMh4HGkRyRYa3pKIVtcJI%2B%2BU3GKwIynHdsHAJj3awBU6bR6qO9a0sCpzUigoB7abX1pZT3avCH1vaRbEqYOKlT5%2FZtvUB62MuXwsw2FneV1vDBYRFaXssjhspvfvcGWCYQWmocVur9UyVZJoX%2BWPxMwUL0h2SBjkEm7ZF1MJQ7QC3oh6F05AtKaVgtUWI2FTuXDgHx1xaVZbJD3t2pbgUI52e2gfj8wQ8YVSYGCFnkGLgr93b61dIPmTA%2Bly0eEyxGnENOrJtaQhw9wvIjWz9A%2B8ROPfZLGjFjnC0h7lZ4YSU7r%2FUttVdZz90uX4EZ5iMEa2TNfzMi1SlL5i8jIn6tzZb8odsior8mw3zIyncMxAOKGOakQ9N2a%2FNzr5RhgkEdzPacCR%2B52lq96GjoLOuRkz8vLMfXizHJc0avaHW8rXRRwvFlwgYXFclA6zvgqCi5hLrEEdxb28MZ%2B6lLh29Z0nEMC2%2BTbRpwT0GTEgoPbf%2FwecB%2FLda3yMPy7674GOqUB4vy08UkgaexVVUBby6dsFuIaWSlclAP28FfUeC%2FUmTb%2FXCkz%2Bm3qtDD0c%2BQn5P6aBSj58KaRnf0OTNScZTGroFu4k5J4HWsZpcO3DuAFQtklT%2B3xbes4%2F1T%2BQu%2B5Q6R8r9%2FdMVidyYGwXLAln%2BaJjJLHY07AY5Xo6Uoooq6gfwevrLr%2F3L%2BC2Nq%2F88kYQTvYQgrKpx80%2BdWapZJDcOc0k9ZfandS&X-Amz-Signature=350aaac17d12f8e1d91b26ccaac10b6a8b3c8e30d27d31041145d63ebd45553f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
