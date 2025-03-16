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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPUV53NR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oUp%2B1JL8NXqY1e%2Fz69jZQDx1EuIR3GeWmf%2BnFjSMCAiEAnqvmncvp9MU10bjCDNEuwgBqgN6HSh816L25rvayyNQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPRGUgcZPTaJjYOt4CrcAyiIBkQ%2BbwEcyWYlQPUAsSq8%2F3XSP%2FGZfJLXGLSiKsNm%2Bu1b3i5QlWUxmnQkC4TE7vz%2BpWiHmJvL9BKPVNv3zbImqs574Mva3cpTzADkaxKz4p%2FiZWmbGbX6BAV1uWabDFljwzEBR7ua2GFOoFOC%2FF%2Fhc3aaZlV1eZOP%2BhxO8EwaVuCK4mTirvyokERauq6QxWrIeb%2FphcINcD7UcB1aRXNBy0qznqwoDYFPdw%2BfD6%2F0Igwt6w0A8agXOJHxMv341RuFw9y%2Bwaaj5t2BHOmK401bzbVUpDUzlN%2B%2Fa21qvSzZWSi4PNuH28JmS9KzTLFjtGotDpjEoLX4LyrnHnlj4kgz1CxU8HWI7G1fqkaest3CFlKEJM%2BfWYAa%2F%2BKE6jf2aPPkJ7LL1v%2FVOWQAs%2B1pw5jIrBkhovM5kgS2wnQPJQZ6FQ4BI%2FX9qL3OoVG96xyiuBuTUwO4OKbakPYrGvNQaPkOV%2BW%2BOHNXDSMMLLZNKvWPf130aYto8gJcQszmW4Vg9Ob3Z2fvKmoUIXiA6Y%2BOBSjz1VTYfLGEXmOA8iplAphuEBhQZjzZUqEnhfvYIW6z5m8%2B6lK47bPbNf6dBzaVxWIVrA8lyZmyu7xZtXrOajzW7oy57CF2x5fxd%2BOYMLjY2r4GOqUBUqa2SAsj2ElRGnXWwhhymG0%2FUF6K7kmYDSFZe7cT3F3yhyzWd6gryLYd74FfZtQmOo2d3wLh7zrDftZBcTLdS3GaZ3e6qkqE8tMESP%2FEvqCYez%2BrbJrT68hgYDTWXFqFeIY%2BACacscFVYNxpGwtHrJPtE6TkFkP7WboKAXB2t8W60BktUKiH0uyjcwsbkkRP%2BCtZrkyowbjka0aHfM5BpCObJl8C&X-Amz-Signature=6225e58239d799e153c1772bed60fb44c6595dd5c3ba24d420a488d7faf3bb0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPUV53NR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oUp%2B1JL8NXqY1e%2Fz69jZQDx1EuIR3GeWmf%2BnFjSMCAiEAnqvmncvp9MU10bjCDNEuwgBqgN6HSh816L25rvayyNQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPRGUgcZPTaJjYOt4CrcAyiIBkQ%2BbwEcyWYlQPUAsSq8%2F3XSP%2FGZfJLXGLSiKsNm%2Bu1b3i5QlWUxmnQkC4TE7vz%2BpWiHmJvL9BKPVNv3zbImqs574Mva3cpTzADkaxKz4p%2FiZWmbGbX6BAV1uWabDFljwzEBR7ua2GFOoFOC%2FF%2Fhc3aaZlV1eZOP%2BhxO8EwaVuCK4mTirvyokERauq6QxWrIeb%2FphcINcD7UcB1aRXNBy0qznqwoDYFPdw%2BfD6%2F0Igwt6w0A8agXOJHxMv341RuFw9y%2Bwaaj5t2BHOmK401bzbVUpDUzlN%2B%2Fa21qvSzZWSi4PNuH28JmS9KzTLFjtGotDpjEoLX4LyrnHnlj4kgz1CxU8HWI7G1fqkaest3CFlKEJM%2BfWYAa%2F%2BKE6jf2aPPkJ7LL1v%2FVOWQAs%2B1pw5jIrBkhovM5kgS2wnQPJQZ6FQ4BI%2FX9qL3OoVG96xyiuBuTUwO4OKbakPYrGvNQaPkOV%2BW%2BOHNXDSMMLLZNKvWPf130aYto8gJcQszmW4Vg9Ob3Z2fvKmoUIXiA6Y%2BOBSjz1VTYfLGEXmOA8iplAphuEBhQZjzZUqEnhfvYIW6z5m8%2B6lK47bPbNf6dBzaVxWIVrA8lyZmyu7xZtXrOajzW7oy57CF2x5fxd%2BOYMLjY2r4GOqUBUqa2SAsj2ElRGnXWwhhymG0%2FUF6K7kmYDSFZe7cT3F3yhyzWd6gryLYd74FfZtQmOo2d3wLh7zrDftZBcTLdS3GaZ3e6qkqE8tMESP%2FEvqCYez%2BrbJrT68hgYDTWXFqFeIY%2BACacscFVYNxpGwtHrJPtE6TkFkP7WboKAXB2t8W60BktUKiH0uyjcwsbkkRP%2BCtZrkyowbjka0aHfM5BpCObJl8C&X-Amz-Signature=de3ecf024d74556ef129d1e5eaf88873acc3ff1a3c30660c9e3d8c99dd6a0e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
