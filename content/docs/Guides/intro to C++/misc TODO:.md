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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSPBTSQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGbfwT6mK5EAmiXOJ6JRzY%2BPqGivO051XKl61renm8oEAiBSn%2BQE9vehmUk9eSGacZaq7R323ZChji%2Bz%2BqLrI3sHFiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdxTGrdbZS4I3jC2KtwDbDOKATNK6u63xJTJztNNo%2BpLiRCIyOV2Wpc%2BX3MtYSWQ%2BQmpM%2BpJeUQiveKeVM6jYHrW8Rf6Vzh%2B2DuFBu34kJm8ODDHKzcykNqpwfXDY1NJlSIH5dHiRF%2FVf%2FQ4JlAn8AYXl3UFei%2F8UsYHmdtuB6Hx7HkIuNPERtouf5olFTStZL2ZrncQR%2BeeYGNmD%2BaLYfkM%2BYis095dmas6oB0rfBeuc91QOs3uP5Y116YQDRicxDbN23eGd65nq2t0FbyxPMkgxhkWAjT14GzPBQmFTxL7mEhLI8aM%2B56%2BmicQg9JVQbNO4UfZSUWUEyspIt0C0q0J0NJBavbAQf%2FBbLcFIPY15lUlsdwzK7kZuekQixnEA7WibyKx9xTpRAd%2BhyFrR%2BQhPKP50zQoN3lXWtquDYG8%2Bbkfj5shRI%2B0yzNwlZjFefbD%2Fj%2F95nv6lj8emryBdjIkYuawqBeka%2Bl4dSQY4cB2mcovb6htbvDEeDx%2BQ3htBLG%2BuGeKnbggRKjbCFsVPMljDhE1McbfMjYTjeBWXD6wfAhrQ7eco6eJgRB5NsoKQSVo8kGeZl5okGHLvZ%2BxjNQ5jiX4iwpxgj%2B7M8TcYOx%2BU9rakBrrRE6Maqchx95RDgh9dMVUhz9OPxQwj42xvwY6pgFvTo6k0a83fuVuqpVgYzl%2FKO623SY9iUrBO5TytNMtXbDR%2Bk9ZruVNieJ%2Bh1f%2FZTPCHWIhjh%2Fj1jTjYvqJd%2FIDpB009yCa9%2FT%2FOlQ6Ic0zorxzjrGHOjjuvDgez6VxQ7VlUY2N2aRlZlcyyiEowtFlcoKdtQqj3rgMc6t8jtJ6I3mju0eAPyDCQ74Er4BHfi1hY8bW9IDQh08%2Blo8m%2Fzv4Emra%2F8n4&X-Amz-Signature=3634ddae61fcd1cda3c1f3f1d4f923cbae8b12f080026444bd21c25176f67900&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSPBTSQ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGbfwT6mK5EAmiXOJ6JRzY%2BPqGivO051XKl61renm8oEAiBSn%2BQE9vehmUk9eSGacZaq7R323ZChji%2Bz%2BqLrI3sHFiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdxTGrdbZS4I3jC2KtwDbDOKATNK6u63xJTJztNNo%2BpLiRCIyOV2Wpc%2BX3MtYSWQ%2BQmpM%2BpJeUQiveKeVM6jYHrW8Rf6Vzh%2B2DuFBu34kJm8ODDHKzcykNqpwfXDY1NJlSIH5dHiRF%2FVf%2FQ4JlAn8AYXl3UFei%2F8UsYHmdtuB6Hx7HkIuNPERtouf5olFTStZL2ZrncQR%2BeeYGNmD%2BaLYfkM%2BYis095dmas6oB0rfBeuc91QOs3uP5Y116YQDRicxDbN23eGd65nq2t0FbyxPMkgxhkWAjT14GzPBQmFTxL7mEhLI8aM%2B56%2BmicQg9JVQbNO4UfZSUWUEyspIt0C0q0J0NJBavbAQf%2FBbLcFIPY15lUlsdwzK7kZuekQixnEA7WibyKx9xTpRAd%2BhyFrR%2BQhPKP50zQoN3lXWtquDYG8%2Bbkfj5shRI%2B0yzNwlZjFefbD%2Fj%2F95nv6lj8emryBdjIkYuawqBeka%2Bl4dSQY4cB2mcovb6htbvDEeDx%2BQ3htBLG%2BuGeKnbggRKjbCFsVPMljDhE1McbfMjYTjeBWXD6wfAhrQ7eco6eJgRB5NsoKQSVo8kGeZl5okGHLvZ%2BxjNQ5jiX4iwpxgj%2B7M8TcYOx%2BU9rakBrrRE6Maqchx95RDgh9dMVUhz9OPxQwj42xvwY6pgFvTo6k0a83fuVuqpVgYzl%2FKO623SY9iUrBO5TytNMtXbDR%2Bk9ZruVNieJ%2Bh1f%2FZTPCHWIhjh%2Fj1jTjYvqJd%2FIDpB009yCa9%2FT%2FOlQ6Ic0zorxzjrGHOjjuvDgez6VxQ7VlUY2N2aRlZlcyyiEowtFlcoKdtQqj3rgMc6t8jtJ6I3mju0eAPyDCQ74Er4BHfi1hY8bW9IDQh08%2Blo8m%2Fzv4Emra%2F8n4&X-Amz-Signature=4c898018595be3a551c8c987f2085a731f8412e77a61238639e83faba2dfd41d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
