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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEUTZAQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCTEyzDnhTaWxbSRjkx1iWQ47%2BHu2qSWQn50z4KIq7dSAIgBNZGcqlP%2Bosvg5AeusVx%2BrjvOBFweKQqyONBWJG7xpMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWZOI1CmQ%2Bf7DsofSrcA7u344%2BFR%2FaV6Tw4APmBCD4PKyqk8WoBExB0iH9FAL0Qs%2BsUVGIxtijSRDoqLnqhMFy9dV0Iu%2B7X%2B2X%2FkVj7Rmc2KkC%2BiauXArHYs1bucjjg8vua%2FVE3pcXVRyQV6AIu8SHlVRKl%2FcVsPooYq8HFg0cFLRmVeH%2F5FCG9LvbL8KViZ28diXBzB17tfMf%2FTPtVGt5Y1iO4JxO6p5FIFX45M2nAq5LfF7MyywkqWRL%2BRcfMJRkarZBqzY2QFrQssLBdVTtu%2FCENtUIKNB1VvCZz0qAsBjobQsUFcR%2FXguQ01WoOko9gL9bYHThvg6IxihHijtlauBAXhjWliKQ9eKjrJZn8A5677SWBpvb2%2Fm7G66f2JoVpOEbwgLohYZnemhKBjq%2F%2FGSOZ3F0KJW3FuhqHcvEv9dTR5aqR4SsyVy%2Bd5nMN%2FZ9erVhn%2BZ6LuYF%2Fp4tqGslOUDLoBCayYWIE4RAIqjXATjKXBhXQEoLO4fkL9AHX2tQM3Wo6EMHhVa4ZtG%2BCLN4SWCAUu9CoKAMpfczH1Ay%2Fg%2Fmmu7m64qtALI3tst%2BlvQywN7o4x8Ly6LB5j8LdRyotMWOBGdvNs%2Bn1FXaLiMAdSr1K7TdNhf4lxjqQ8Q6Pu50AY6RQfLV6eqwfMKWUosAGOqUBhhJrw%2BILxDXwk0gs27ibgpauNrOmO%2BFf8UOkhMmJKHBaFSRoos0JQMW6yDVKzGKb3ZuJ6uqJQHnCL%2FPP4X%2Bokiy8gFOhBgy1tpFoa98BT%2Fu1mHgPsviRx4pVyYxT8R%2BEwGl2FXjnHrX2%2BGBYXV2IiRn4ZckBEWsnBYmNjQinnBY%2FAcn02tGWT7uabql35Luhu1FXnsAaApfMUM%2F%2Bu09YfEG3IxJv&X-Amz-Signature=6fde2a6c7d19618ca334d042d422130830d38a79dee15f4d795fa836ce7a50e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEUTZAQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCTEyzDnhTaWxbSRjkx1iWQ47%2BHu2qSWQn50z4KIq7dSAIgBNZGcqlP%2Bosvg5AeusVx%2BrjvOBFweKQqyONBWJG7xpMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWZOI1CmQ%2Bf7DsofSrcA7u344%2BFR%2FaV6Tw4APmBCD4PKyqk8WoBExB0iH9FAL0Qs%2BsUVGIxtijSRDoqLnqhMFy9dV0Iu%2B7X%2B2X%2FkVj7Rmc2KkC%2BiauXArHYs1bucjjg8vua%2FVE3pcXVRyQV6AIu8SHlVRKl%2FcVsPooYq8HFg0cFLRmVeH%2F5FCG9LvbL8KViZ28diXBzB17tfMf%2FTPtVGt5Y1iO4JxO6p5FIFX45M2nAq5LfF7MyywkqWRL%2BRcfMJRkarZBqzY2QFrQssLBdVTtu%2FCENtUIKNB1VvCZz0qAsBjobQsUFcR%2FXguQ01WoOko9gL9bYHThvg6IxihHijtlauBAXhjWliKQ9eKjrJZn8A5677SWBpvb2%2Fm7G66f2JoVpOEbwgLohYZnemhKBjq%2F%2FGSOZ3F0KJW3FuhqHcvEv9dTR5aqR4SsyVy%2Bd5nMN%2FZ9erVhn%2BZ6LuYF%2Fp4tqGslOUDLoBCayYWIE4RAIqjXATjKXBhXQEoLO4fkL9AHX2tQM3Wo6EMHhVa4ZtG%2BCLN4SWCAUu9CoKAMpfczH1Ay%2Fg%2Fmmu7m64qtALI3tst%2BlvQywN7o4x8Ly6LB5j8LdRyotMWOBGdvNs%2Bn1FXaLiMAdSr1K7TdNhf4lxjqQ8Q6Pu50AY6RQfLV6eqwfMKWUosAGOqUBhhJrw%2BILxDXwk0gs27ibgpauNrOmO%2BFf8UOkhMmJKHBaFSRoos0JQMW6yDVKzGKb3ZuJ6uqJQHnCL%2FPP4X%2Bokiy8gFOhBgy1tpFoa98BT%2Fu1mHgPsviRx4pVyYxT8R%2BEwGl2FXjnHrX2%2BGBYXV2IiRn4ZckBEWsnBYmNjQinnBY%2FAcn02tGWT7uabql35Luhu1FXnsAaApfMUM%2F%2Bu09YfEG3IxJv&X-Amz-Signature=f96743bebdb0ba2657d49bbd54787ff9569492ce29788f5746ae9d44a0da174f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
