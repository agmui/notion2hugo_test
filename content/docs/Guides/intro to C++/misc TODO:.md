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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NCI6CG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPcAF%2FFwqmvGEPKFcPDSU2pw4CFkURDpdAOt6juOnCcAiEA4wC7jl5p9LqZkc8FikaWGXgk2wLHTvKaiQ1sNDPxDfUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMjCBEIPC0SUWX3DtCrcA8Xt%2B%2BWVwhpqjprGdUYP4xmrw1BssPI1DWz6BSz4JGO08y0XZMe2j0f%2FybSjKrupMfrUcmV07cRscFNJj9uR2uXYC5kixLo6mbszIytETjP0%2BMDA5hdKR1B6iN50XnDeR3ObMbzAI0stl9OtLyP1fz1mZoEdz53eJdCHpYer6bgbRM9HRrYBDMOrVyj9QITOGHkzQZwSgs3mHVOaJMhR0e44mKnb2rYp80yqYgIz7WTPTmB%2FHnmssfV8BRv64TosDKahn9l4fuNlkWFZaZzvGeKBeANpi%2BXoc5t7o5G%2BOOvAwfQGJTPqwHOARQBwHeefxg6e7g3hVdAccDfZ0jsz47eRE0qZPvVlVmKjQqjC%2BX4l1uaITqrjoriXKfVrLhBxHk94h3qrC0nLoGTCX5dgXgcF860i816hFyX5dD5Q3Ucn%2Fa%2B5KWdyvs4SrKO7xxrHi1vMOjcFvMrpCOqvKha8ycjkQHrSIVkbeeMEDkHRhfoOyV9XiZ8HJQ%2F7dKhBbHNsS0p6fYTFJIt0l%2FpE%2BpTZAkCqEIX%2B%2F1dg5MfWV7tQhOMWJ1DHRP3xlYA2gsVnttt2sbH7Pb%2FOAETTAx%2BqXM8GnIjDAEolsDM4oqqQEGdR8UHUad4peboTKfdcvq%2BRMJSqtr0GOqUB8f4rWjfhXeg9bqYmZW4CrVInu7ZJ2YltDnRYbpYgqjAmCbeqvuwtoo%2Bolcs8r3SB2UJVry4P6BfmgJOOlIsP7cedziZRMqMnb8BkyaGwie005IHQg89T7nvF%2BPp78gqL9vzUVa7KN24FGMOiQaLVRiqU73QZtBWYo9Wj5n%2F1ucw5JOMzDsYWKaW80Ln%2BMo0ZdI1LPHvA9i983x5E7WiNBEPQaTjw&X-Amz-Signature=d70e78ef342db47fd21867b7b504e2abe93c37656068356e26533c322614a6df&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NCI6CG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPcAF%2FFwqmvGEPKFcPDSU2pw4CFkURDpdAOt6juOnCcAiEA4wC7jl5p9LqZkc8FikaWGXgk2wLHTvKaiQ1sNDPxDfUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMjCBEIPC0SUWX3DtCrcA8Xt%2B%2BWVwhpqjprGdUYP4xmrw1BssPI1DWz6BSz4JGO08y0XZMe2j0f%2FybSjKrupMfrUcmV07cRscFNJj9uR2uXYC5kixLo6mbszIytETjP0%2BMDA5hdKR1B6iN50XnDeR3ObMbzAI0stl9OtLyP1fz1mZoEdz53eJdCHpYer6bgbRM9HRrYBDMOrVyj9QITOGHkzQZwSgs3mHVOaJMhR0e44mKnb2rYp80yqYgIz7WTPTmB%2FHnmssfV8BRv64TosDKahn9l4fuNlkWFZaZzvGeKBeANpi%2BXoc5t7o5G%2BOOvAwfQGJTPqwHOARQBwHeefxg6e7g3hVdAccDfZ0jsz47eRE0qZPvVlVmKjQqjC%2BX4l1uaITqrjoriXKfVrLhBxHk94h3qrC0nLoGTCX5dgXgcF860i816hFyX5dD5Q3Ucn%2Fa%2B5KWdyvs4SrKO7xxrHi1vMOjcFvMrpCOqvKha8ycjkQHrSIVkbeeMEDkHRhfoOyV9XiZ8HJQ%2F7dKhBbHNsS0p6fYTFJIt0l%2FpE%2BpTZAkCqEIX%2B%2F1dg5MfWV7tQhOMWJ1DHRP3xlYA2gsVnttt2sbH7Pb%2FOAETTAx%2BqXM8GnIjDAEolsDM4oqqQEGdR8UHUad4peboTKfdcvq%2BRMJSqtr0GOqUB8f4rWjfhXeg9bqYmZW4CrVInu7ZJ2YltDnRYbpYgqjAmCbeqvuwtoo%2Bolcs8r3SB2UJVry4P6BfmgJOOlIsP7cedziZRMqMnb8BkyaGwie005IHQg89T7nvF%2BPp78gqL9vzUVa7KN24FGMOiQaLVRiqU73QZtBWYo9Wj5n%2F1ucw5JOMzDsYWKaW80Ln%2BMo0ZdI1LPHvA9i983x5E7WiNBEPQaTjw&X-Amz-Signature=bbd753b7b0423fadd9540c564aabc26673cda6370b4807da0428001174eaf929&X-Amz-SignedHeaders=host&x-id=GetObject)

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
