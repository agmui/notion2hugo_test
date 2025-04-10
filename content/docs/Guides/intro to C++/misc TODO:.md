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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37ZBAN7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0yTioBAL7%2B31SK8eA7HEIDKnkDWHdhCK5VtQ90K1VAQIgbluZQ4xxY8QENWIXXupJgBrlaF8PWHSPZBmvcra9MEYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJD8ottpfSJPhD11XSrcAxERzhY4JOjAyfEcnY9g%2F1Mor%2F6cEkp%2FHNk1fFqWkQ0xFJKikByRwf6VmX%2Fjpgyt2OmSzS%2Bx8bXDzBToVUfKPAYM6unAZeSQOtj7fpY2hbRGsBovprjpexyuTanIQv0yDuUTqq6aZTH5nMt2b%2FBN5NJQu8O1tUiNv1ESQ2%2BeGS48Cojo5bZtEBdu0F2VedK3wVQBS7JKUS3Hms3Ab7AU6KUCsR%2F7fHLZSVKTrv%2BnwCvwkkXIkpoO5ar%2Fcwwj9FwvHs1QI6gRQV4xEn2CpTeJmDQyYfY25xtC3pQ%2Fpnge9LTcEjJWfcc5xrQ0e%2BkDhaNw1O8ztoYoHzJuZgH2kAzbHR2NT8XRy0%2BiGU25dhli7oqr7zb8GIlQSHvET%2FnhiQPebrZmZKsr9FTUZv8OmxmCAapqea5RB%2BGI0WrcP7KfGkG6Y2PjIVMo8eWtgSEWaiPEQLULOg4vGiW2zX3hRsbhPS%2F4tga4Lppse0FrY9nPxJBIj%2FwKlWl3b9IlzNYrgYQuxilP1nK%2Fp6dzXraA3RZj57pj1DvJCH9axRL6qZiM4ZadnUWunJWFzxBs54AaiR2b0KnD3vYCgwve8RJbkFT%2F1mh7tgLpspvuQT0TmK0FttIALeVC8D6N7Yqm6qk9MIih4L8GOqUBiAKDfULuQYrwsAqAywT7ob%2BNyddGQPQsWiLjlxPNESaia52MEeAG0G7iOCFjlBYBxeCz%2B9QeZsJDRaHj11GrDe36Y71%2Fu1%2BRQc7OzFkyToSTWctaTgFWDvJJbqG2dHc%2F8HIUKjwDSesLPT4W6RNGKaTO%2FmyoUcfZOkdOzTSyFymTMT6hvl36Kt98CQHSwym%2Bi505W5s5O3Z4tul%2B7DVGbeMkpV%2F2&X-Amz-Signature=2792d51a6fa5b678563661f35fdff08df15dc45902e79aaacb782b450ddb4b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37ZBAN7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0yTioBAL7%2B31SK8eA7HEIDKnkDWHdhCK5VtQ90K1VAQIgbluZQ4xxY8QENWIXXupJgBrlaF8PWHSPZBmvcra9MEYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJD8ottpfSJPhD11XSrcAxERzhY4JOjAyfEcnY9g%2F1Mor%2F6cEkp%2FHNk1fFqWkQ0xFJKikByRwf6VmX%2Fjpgyt2OmSzS%2Bx8bXDzBToVUfKPAYM6unAZeSQOtj7fpY2hbRGsBovprjpexyuTanIQv0yDuUTqq6aZTH5nMt2b%2FBN5NJQu8O1tUiNv1ESQ2%2BeGS48Cojo5bZtEBdu0F2VedK3wVQBS7JKUS3Hms3Ab7AU6KUCsR%2F7fHLZSVKTrv%2BnwCvwkkXIkpoO5ar%2Fcwwj9FwvHs1QI6gRQV4xEn2CpTeJmDQyYfY25xtC3pQ%2Fpnge9LTcEjJWfcc5xrQ0e%2BkDhaNw1O8ztoYoHzJuZgH2kAzbHR2NT8XRy0%2BiGU25dhli7oqr7zb8GIlQSHvET%2FnhiQPebrZmZKsr9FTUZv8OmxmCAapqea5RB%2BGI0WrcP7KfGkG6Y2PjIVMo8eWtgSEWaiPEQLULOg4vGiW2zX3hRsbhPS%2F4tga4Lppse0FrY9nPxJBIj%2FwKlWl3b9IlzNYrgYQuxilP1nK%2Fp6dzXraA3RZj57pj1DvJCH9axRL6qZiM4ZadnUWunJWFzxBs54AaiR2b0KnD3vYCgwve8RJbkFT%2F1mh7tgLpspvuQT0TmK0FttIALeVC8D6N7Yqm6qk9MIih4L8GOqUBiAKDfULuQYrwsAqAywT7ob%2BNyddGQPQsWiLjlxPNESaia52MEeAG0G7iOCFjlBYBxeCz%2B9QeZsJDRaHj11GrDe36Y71%2Fu1%2BRQc7OzFkyToSTWctaTgFWDvJJbqG2dHc%2F8HIUKjwDSesLPT4W6RNGKaTO%2FmyoUcfZOkdOzTSyFymTMT6hvl36Kt98CQHSwym%2Bi505W5s5O3Z4tul%2B7DVGbeMkpV%2F2&X-Amz-Signature=b959a386ad8703676b973c2d943d33520e5946c8cffd49c6a4f5fd8f91e5f20a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
