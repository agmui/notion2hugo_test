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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIPA6LI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCID3I5lVSlbTjeoXn91LP6nQk854a%2FR3iRFb0u0dcxQklAiEAuTp8uJDhuaswVxEMHNtlrftKZvcw%2Fll7w9x%2BFhlWQPEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEWqdI1AX5H4OFARyrcA2EH%2BqS7n7%2BOc8YfthSdowXbToaEzL103yosTPDjIOLYfIxM%2FbZUZLMyZxIvYr91NWNL5AxuwNdZatncQxNs3Qn4IoknPi%2BvPV6YLq6qm8zDjRuwoPrqpd0HAHmYdWx%2FBCOd4DIm0GGW06f1HokxTzWzIFaTkWopCokaz%2F0wRjYlWv2f%2FLtzAIJEl5xDtRdg%2FpkwgmyQ3fbbkXTnv3MLLUe127CExmRwNxQteu4RttceqVIPedLLvE7UAhnsuQiu%2FUxGAqgPyk1ldaftL9hO2ih6RutARF1YpcfrXS43K%2B%2FviwHWna7ekJyyh9AFGaC7RdZqrpVR7YjscDY%2Bl7ORBfpAOYbWa91ofxiyJfEZFBTjM1D5tdzrx23eTsuqO1%2Fks0L2TrGrJD%2Biumqcp6oW%2Bt%2BGlod4eNaudu1rTvojEeIc0PQduicYkhO7%2BRaAkWN7VdJaohd4G3sjn5nPMQ8lEuLtwuSQunlaYz3uDSIiqI%2FlBRqIa%2Ftbyx0TJ3iJqoyn68Sg0Mse60EqqHdQcNbKOgRZ7FC3KZe4%2BG1Fd435Zopalln3HA0iMRHjLCJvLw1zStlEuWxz56byI2Vcoxn6bSk1xLTtn7vmHHaEJknVPEuHJH9r5%2FiGiK6Ah8VuMJ7i98EGOqUB%2F6BWMDYpwISpLGZm%2BMuPBy%2BbHk8XtYr1xLGJpiSGC%2B48VcPpdoawRiWZAQCXsYtvmVmAbpaOKatCk%2BdIQ%2FspiGH3EZmA%2FvqbY7btACupFL4bqDXibxyAVPQ59hLxg5NxbCFnjLEM8UFVxHFonqfv2d418%2BjR8M8DBZPlb7gg1ChEor6O2i0XOUxW32yGnIFmAZLTmzI7XdPIyBbSmpsv9hpxPalv&X-Amz-Signature=5c70e56b4c4e18998cd7045a42b474f5c1a65d6074b5ee41820ad2fa3f2495fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIPA6LI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCID3I5lVSlbTjeoXn91LP6nQk854a%2FR3iRFb0u0dcxQklAiEAuTp8uJDhuaswVxEMHNtlrftKZvcw%2Fll7w9x%2BFhlWQPEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEWqdI1AX5H4OFARyrcA2EH%2BqS7n7%2BOc8YfthSdowXbToaEzL103yosTPDjIOLYfIxM%2FbZUZLMyZxIvYr91NWNL5AxuwNdZatncQxNs3Qn4IoknPi%2BvPV6YLq6qm8zDjRuwoPrqpd0HAHmYdWx%2FBCOd4DIm0GGW06f1HokxTzWzIFaTkWopCokaz%2F0wRjYlWv2f%2FLtzAIJEl5xDtRdg%2FpkwgmyQ3fbbkXTnv3MLLUe127CExmRwNxQteu4RttceqVIPedLLvE7UAhnsuQiu%2FUxGAqgPyk1ldaftL9hO2ih6RutARF1YpcfrXS43K%2B%2FviwHWna7ekJyyh9AFGaC7RdZqrpVR7YjscDY%2Bl7ORBfpAOYbWa91ofxiyJfEZFBTjM1D5tdzrx23eTsuqO1%2Fks0L2TrGrJD%2Biumqcp6oW%2Bt%2BGlod4eNaudu1rTvojEeIc0PQduicYkhO7%2BRaAkWN7VdJaohd4G3sjn5nPMQ8lEuLtwuSQunlaYz3uDSIiqI%2FlBRqIa%2Ftbyx0TJ3iJqoyn68Sg0Mse60EqqHdQcNbKOgRZ7FC3KZe4%2BG1Fd435Zopalln3HA0iMRHjLCJvLw1zStlEuWxz56byI2Vcoxn6bSk1xLTtn7vmHHaEJknVPEuHJH9r5%2FiGiK6Ah8VuMJ7i98EGOqUB%2F6BWMDYpwISpLGZm%2BMuPBy%2BbHk8XtYr1xLGJpiSGC%2B48VcPpdoawRiWZAQCXsYtvmVmAbpaOKatCk%2BdIQ%2FspiGH3EZmA%2FvqbY7btACupFL4bqDXibxyAVPQ59hLxg5NxbCFnjLEM8UFVxHFonqfv2d418%2BjR8M8DBZPlb7gg1ChEor6O2i0XOUxW32yGnIFmAZLTmzI7XdPIyBbSmpsv9hpxPalv&X-Amz-Signature=6caaf05db8a2db5c6d510f17ca419638d08e326959a10d6f8d4276be7acbb318&X-Amz-SignedHeaders=host&x-id=GetObject)

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
