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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWDI3O5%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDlYy71jgJIIUjgYWzglPj%2B9q2IMiLZhos64z9UlL4W0gIgTDesTcaild9fM%2FNYTtnM9L0tTmppfIoVP9%2Fed7bHpRcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLDcZegAKV4rK7MnGCrcA3ZbVrvsgOzexDEFdP%2Fgql%2BcWSFnC2vsC2z789d0uaBsOx5YvJEeEd5RuLmqCdoQpvdbSQXNjjTB5BZgbB2UMGPOHQEbQTVa4GL%2Bhth7cxCzIwT663AD1lUAIBkIIYK0P%2BJnqWf%2FRiH%2F44dP3ZlxMWAJwlQ%2FjbBRYLd%2B0%2Fx40tKE2fuDIzMzLd8TdYds0%2FhNd1t3eSbxJkp9iIXjXYL1l8W%2BugffV1ga4s4iHItQ1hcaV4ofW9QCsYJ9GN%2FfJ9qS37%2Bo0JRuVdHK1ADMLs%2BnMJQgWsM7xuYobfn1Y4fWH8rGw8YW%2F3msdzLqYMXuO6c2GU0w4a%2BZ%2F6%2FBHIjUHp%2BwQTcYtMcGa5gVXEQmOMveHEQqG%2Brl4c83O5osDHDgST%2B04MS1zmoZhbkmVGxlFaAOOmtXlHGfs0A1tmufL42YSkGL7eL5OZx%2BbyBg3WlcreE28CPMYBnlfWmGfF1UqkpiCTtBNegrnq6TwxAzDvPaRIVbFLpttIBzIEifaQV9NH0Zf21nh09Y4abrKxXjy7e1QpU1TTO5sBI1qfOe9Pn2QGXpWxvENKICgXPPc45nCsBo1FkaosmCulFr6NkZyXzinVx%2FHTdZVl7fsAkzeW6R8PaHffVPbIYE80lF%2BbrxMMXa%2FMkGOqUBWWVPq9dFUZhvpMo6PYTTOEAdmMKx9zU3jbS9QZjm5C8lGH7OFLmIONUVeUfJUAG1gdEXjbULvcY83a43%2BC3YRK323i7NS8qewqYcG2eqmD0WzNGS26FdnYvsPgS4iiG3TTnd%2BtQZMXjtPr%2Berstx25miTnprR%2FLfg75PXqkQUCGJbPHZidz9oY6Ai4dCCJHVP%2FoOHw0k5sTqBx3TzAbv%2B80T%2BrEP&X-Amz-Signature=3b0d5d217c7d30b933dbf8d87be575efe7756272d46b6df8aa59ab128ebe26d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWDI3O5%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDlYy71jgJIIUjgYWzglPj%2B9q2IMiLZhos64z9UlL4W0gIgTDesTcaild9fM%2FNYTtnM9L0tTmppfIoVP9%2Fed7bHpRcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLDcZegAKV4rK7MnGCrcA3ZbVrvsgOzexDEFdP%2Fgql%2BcWSFnC2vsC2z789d0uaBsOx5YvJEeEd5RuLmqCdoQpvdbSQXNjjTB5BZgbB2UMGPOHQEbQTVa4GL%2Bhth7cxCzIwT663AD1lUAIBkIIYK0P%2BJnqWf%2FRiH%2F44dP3ZlxMWAJwlQ%2FjbBRYLd%2B0%2Fx40tKE2fuDIzMzLd8TdYds0%2FhNd1t3eSbxJkp9iIXjXYL1l8W%2BugffV1ga4s4iHItQ1hcaV4ofW9QCsYJ9GN%2FfJ9qS37%2Bo0JRuVdHK1ADMLs%2BnMJQgWsM7xuYobfn1Y4fWH8rGw8YW%2F3msdzLqYMXuO6c2GU0w4a%2BZ%2F6%2FBHIjUHp%2BwQTcYtMcGa5gVXEQmOMveHEQqG%2Brl4c83O5osDHDgST%2B04MS1zmoZhbkmVGxlFaAOOmtXlHGfs0A1tmufL42YSkGL7eL5OZx%2BbyBg3WlcreE28CPMYBnlfWmGfF1UqkpiCTtBNegrnq6TwxAzDvPaRIVbFLpttIBzIEifaQV9NH0Zf21nh09Y4abrKxXjy7e1QpU1TTO5sBI1qfOe9Pn2QGXpWxvENKICgXPPc45nCsBo1FkaosmCulFr6NkZyXzinVx%2FHTdZVl7fsAkzeW6R8PaHffVPbIYE80lF%2BbrxMMXa%2FMkGOqUBWWVPq9dFUZhvpMo6PYTTOEAdmMKx9zU3jbS9QZjm5C8lGH7OFLmIONUVeUfJUAG1gdEXjbULvcY83a43%2BC3YRK323i7NS8qewqYcG2eqmD0WzNGS26FdnYvsPgS4iiG3TTnd%2BtQZMXjtPr%2Berstx25miTnprR%2FLfg75PXqkQUCGJbPHZidz9oY6Ai4dCCJHVP%2FoOHw0k5sTqBx3TzAbv%2B80T%2BrEP&X-Amz-Signature=35b5f34d2ca83deff83bd2982bf62a4e314944c119932bb2b66a5a470a19b09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
