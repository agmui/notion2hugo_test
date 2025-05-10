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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH56JK5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxFyKX09aZnUW4hVMY1seitpeeO8jeGcbr%2Feig%2Bzs0mQIgZCUowyD17DCC%2Bxuc5q0mALwo1YPsRAdKWfFelVbfkAYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjpsuLI6%2Fuw2kpbtircA6CboSH%2FwmB6JnKRHL27UaBqbOZWnksIkjHlOi%2Bs3APWYZuiAuYbJ0SwxmphkbryckJN0iSwRI%2F6V3p5pHCWAdbI1N5UqviTCPCPnkgm2K2JYq859N5RJ6MwU%2Fbpe%2B7F0UT2PjYKc6gyaB76gTMmJjUWhQ3PpBOLnmMWWiyN8WPz6HfH9gUFnx1CmCXccVxSCJ0Y%2BpUuA8BhQ%2FB5i3TJ5m%2BeoSeEzjIKSskhAxRGjPOix4fKPPZa6NqGYYWXBNPVNlHgfY4dmuvN8e%2BlHNsXbm5vje7tSp0Lgqihi0zTfl0LS5PO4LVs5j76I4WS1wMLHMtYeV9cvtpRnrl8D8N2e33pM6yATTv9w7MPf2bjLARNGxji7s1%2FOeuQCA4HY5eHLIlRd5JnqxXZO9A92GcMX3m6kL4dN%2BDbeiY4aUcWYkAplAlxOVqUencJutGyPW5sccdqYlGZZjgIZQ1Iv9M0cV7lIvf5%2FU2XbE9TV%2FMvj20qirFO2hV1U%2FzRbedZuTWofP%2FnBxaupouB51NfANVqC9sJJt6uLFb6L3S3bqtXYUpPFSzFjjyYZP7epFNuActY5GH3Fa4zHiX50gORsjP1rJJtQNZOrDMNNyDm%2Bh9R1ADvkQde7FnGWoYxeI4fMNCw%2FcAGOqUBZBuz1jojlHROpQ1fncUnpeEz6DezHHGLGBHtokxs95Dx%2Fy475LRcH4kaqkfXgnRkJqXTN%2Fc%2B9Jfzbuqr%2B%2FLZv3AAjibPL5H7mgD8Zp6PtTR9DQNWhjOpI2S%2BiwmDIhLEe%2BBNUam52LV7HVFHZQLFtUzo2PYLn%2F4ukBa0CwrHbRClZhjLOjA1ETi0dME8hWR%2Fzc86no0PNX642Y8gZNhP%2FZsDSXjE&X-Amz-Signature=959e0085cb9edd3e6c74a213cda4cdbe60223d612d7081248822f2f0d4723987&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH56JK5J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxFyKX09aZnUW4hVMY1seitpeeO8jeGcbr%2Feig%2Bzs0mQIgZCUowyD17DCC%2Bxuc5q0mALwo1YPsRAdKWfFelVbfkAYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjpsuLI6%2Fuw2kpbtircA6CboSH%2FwmB6JnKRHL27UaBqbOZWnksIkjHlOi%2Bs3APWYZuiAuYbJ0SwxmphkbryckJN0iSwRI%2F6V3p5pHCWAdbI1N5UqviTCPCPnkgm2K2JYq859N5RJ6MwU%2Fbpe%2B7F0UT2PjYKc6gyaB76gTMmJjUWhQ3PpBOLnmMWWiyN8WPz6HfH9gUFnx1CmCXccVxSCJ0Y%2BpUuA8BhQ%2FB5i3TJ5m%2BeoSeEzjIKSskhAxRGjPOix4fKPPZa6NqGYYWXBNPVNlHgfY4dmuvN8e%2BlHNsXbm5vje7tSp0Lgqihi0zTfl0LS5PO4LVs5j76I4WS1wMLHMtYeV9cvtpRnrl8D8N2e33pM6yATTv9w7MPf2bjLARNGxji7s1%2FOeuQCA4HY5eHLIlRd5JnqxXZO9A92GcMX3m6kL4dN%2BDbeiY4aUcWYkAplAlxOVqUencJutGyPW5sccdqYlGZZjgIZQ1Iv9M0cV7lIvf5%2FU2XbE9TV%2FMvj20qirFO2hV1U%2FzRbedZuTWofP%2FnBxaupouB51NfANVqC9sJJt6uLFb6L3S3bqtXYUpPFSzFjjyYZP7epFNuActY5GH3Fa4zHiX50gORsjP1rJJtQNZOrDMNNyDm%2Bh9R1ADvkQde7FnGWoYxeI4fMNCw%2FcAGOqUBZBuz1jojlHROpQ1fncUnpeEz6DezHHGLGBHtokxs95Dx%2Fy475LRcH4kaqkfXgnRkJqXTN%2Fc%2B9Jfzbuqr%2B%2FLZv3AAjibPL5H7mgD8Zp6PtTR9DQNWhjOpI2S%2BiwmDIhLEe%2BBNUam52LV7HVFHZQLFtUzo2PYLn%2F4ukBa0CwrHbRClZhjLOjA1ETi0dME8hWR%2Fzc86no0PNX642Y8gZNhP%2FZsDSXjE&X-Amz-Signature=a5d6a9f2a87d4b792ccb782bcea2c63f6ec379ab6352b49c44461f51a772303d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
