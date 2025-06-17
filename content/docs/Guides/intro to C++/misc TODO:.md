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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UL5NHJT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdll%2BJ9KJqwxhKsLmLD788QOXhjSfMEVyAN0ZsQWOAAgIgV%2F0GR%2BRThUC8L5gUXc20F71B%2BhIKpb2xD4LtL4Lu4dsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGL9MK9rLxU4YbqGmircA1J4NGGvMh4k0QCbA3ZXrKl%2BMRrbQDuXHWU%2BBHe3FMoJAFlj%2FWqFjJ4DM8Gzq%2BQrWTgkXX2qEJse%2B%2F4ZmpwPWOJDqoDB%2BIlLJWC2tmzho5co6UJL6YvrUnuSRJYwe3XN9MaMaECVn5xyGMOz90gB58nye%2B3yZVp8vKD2UyU7evyPuKp1rnWR2e7VzGzz9%2BeoqSMyZ9qAsdNKEPMEv4Vutg%2BdVjqwU3%2Ba5WA2Oj6uArUlsYsCFuDcK%2FFWCKlo8IvAnoRXScTtzZGOxQY1FZP%2BM1G3FrqQqcRqJ%2FyQVm4I5gTCsxwKkddU27phxkGiB5qye26qdqTPP%2FD8fdpXZRMbIPuPAcjyZ5f7a6f3ckIphyTEzS8cbBvoKyp2BMu133NkfwoNvcWnVZ0e6YcDG9QpO%2FeKFyqGQvIdb6pHjub9OPTsvUPfTvPcSBibRZLfWvgS7oB7yUDxpkDZ7l%2FxEyqbecpt6%2F8tF2cggxCGWituxGOBI1IcPkdbDpqQQcyOU%2BFadOFe3g3kkvaHk7nRe7qeNNYBG2AUu1heX0WopRfxDJ2XLvMUXzlMYtW3UkOAOi1nTn5I%2FIiHtht4K6n5uAI%2BaAOcmu%2F3LK7L59sVHHFCnXSv4S7xI6zLS2gLNj5qMP6%2FxMIGOqUBicmPOtV9MSkElTMj2nhq8TKFmNQOaM%2FYwvFPehaRCRNlh5C0XPymzXqIW6GO2cFoCBG82gWdc%2FtWrdhKTT9vE%2BoNtk%2FhbPaLlzmb6tOomGfNVy%2FNn5JAwFWkhn%2F1T3LeNlIoLRHRhWetKNyYbz3yd2qpuFvtypAYW4wKwpuUg9k7sXAhKax%2Fh5RDtFY95eDwvgb0Is%2B%2Fy7zKuA%2B9RoyMl2tttryu&X-Amz-Signature=804a34ab82c397906b1404ee686aa9ba42ae4d9f62b31e060aca45825a23bd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UL5NHJT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdll%2BJ9KJqwxhKsLmLD788QOXhjSfMEVyAN0ZsQWOAAgIgV%2F0GR%2BRThUC8L5gUXc20F71B%2BhIKpb2xD4LtL4Lu4dsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGL9MK9rLxU4YbqGmircA1J4NGGvMh4k0QCbA3ZXrKl%2BMRrbQDuXHWU%2BBHe3FMoJAFlj%2FWqFjJ4DM8Gzq%2BQrWTgkXX2qEJse%2B%2F4ZmpwPWOJDqoDB%2BIlLJWC2tmzho5co6UJL6YvrUnuSRJYwe3XN9MaMaECVn5xyGMOz90gB58nye%2B3yZVp8vKD2UyU7evyPuKp1rnWR2e7VzGzz9%2BeoqSMyZ9qAsdNKEPMEv4Vutg%2BdVjqwU3%2Ba5WA2Oj6uArUlsYsCFuDcK%2FFWCKlo8IvAnoRXScTtzZGOxQY1FZP%2BM1G3FrqQqcRqJ%2FyQVm4I5gTCsxwKkddU27phxkGiB5qye26qdqTPP%2FD8fdpXZRMbIPuPAcjyZ5f7a6f3ckIphyTEzS8cbBvoKyp2BMu133NkfwoNvcWnVZ0e6YcDG9QpO%2FeKFyqGQvIdb6pHjub9OPTsvUPfTvPcSBibRZLfWvgS7oB7yUDxpkDZ7l%2FxEyqbecpt6%2F8tF2cggxCGWituxGOBI1IcPkdbDpqQQcyOU%2BFadOFe3g3kkvaHk7nRe7qeNNYBG2AUu1heX0WopRfxDJ2XLvMUXzlMYtW3UkOAOi1nTn5I%2FIiHtht4K6n5uAI%2BaAOcmu%2F3LK7L59sVHHFCnXSv4S7xI6zLS2gLNj5qMP6%2FxMIGOqUBicmPOtV9MSkElTMj2nhq8TKFmNQOaM%2FYwvFPehaRCRNlh5C0XPymzXqIW6GO2cFoCBG82gWdc%2FtWrdhKTT9vE%2BoNtk%2FhbPaLlzmb6tOomGfNVy%2FNn5JAwFWkhn%2F1T3LeNlIoLRHRhWetKNyYbz3yd2qpuFvtypAYW4wKwpuUg9k7sXAhKax%2Fh5RDtFY95eDwvgb0Is%2B%2Fy7zKuA%2B9RoyMl2tttryu&X-Amz-Signature=6a6d5a73deb0f87274303b75f48db4379860b135cc018c8ff496fe732595192b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
