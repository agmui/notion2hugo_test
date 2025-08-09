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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHPNTX4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCtf%2FSlse6%2BrmcgO7SZdi%2FV4M4Z%2FxT8xfGIejshokmgigIgW5JSHuIQhUIk6s5Z%2FdXY5tpSg7o%2Bi6efeuz1btecRx4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY8hUgZUacaqb03ZSrcAwB7oU0yHfGuHOzep9IkLXUwCMcSLsKE57Uia6WcZJILMDglMq6WEeRBkP%2Bz%2FilCdbdB%2Fv5iUOj7VHSeH1uTt4ClXmJmr318ZjPoFp6AvmDRiOYXVmEkqTg5zVN5peqVylwYhF4RfABkXwjmiXbAUNGsvZCKl4Ph%2FyevxIy0qf%2Fxh7r6zeKa6gs64sbTl5yUEfbF14p3mgzBFHmkmMZsZYra30cSAXXysxU20NYKjQaFoTmF3X8V0QSB4ShtYUedcUD0%2FOlS87G4hlQC5tPOE7fTNcEA%2Fst4NJAQrfv61B1NUyApQeMIKvXlAd3kPqjQi%2FlxwcaSB1OlRWQaKm9wpY6mKbM4UixUQNy6IkdBqRp78sgfKrc2VrCU1M1rFTMGLtYowajIH0S0j41jxtgxLxyFpIwOG8A6oqIduWxm1gfHme2ElYPc4mKQcJKmqf4shuk6xICRgLuE6X3avBa%2FfgTor4MDCbL9QvOKi8v8HL8pGEIewRppfmzPi2i2mBaGYft6%2Bp8BNzvRVAGrItM6rodYXdQmroysgzCXLhGAO98GmdH4zUMJecxxukN67gGPE90kQXMmXneQnaGazm5I7QGGmZaNKv8UiZ7mZLz9WZ3jjr5L8yr2ycy%2FJYfPML7E28QGOqUBTVmpGj9NrfDv77gvaOvKC4WViPzOxaXRVE6nWBNEL2Es5t2NBg6HSR6TqTMoMUk7hHwIJZ7JZcFIAnLTKImlmwAHn4dG6jxvHZPnHTqQIFYsMapU9fMY9ch%2By4IvMViEmN2QlCfjrS82jcOxzEpq7JxeDTMgPb7NvDkUqPsgaFMXuTeNGeXMIm0OE0l7Pa4u4aF43BpPL7edWZljqbpmccwGbaL%2F&X-Amz-Signature=c3d1d97b86a70f41204a7309a68c372ee57ca53afe0aef7954f6b3d37e90dabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHPNTX4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCtf%2FSlse6%2BrmcgO7SZdi%2FV4M4Z%2FxT8xfGIejshokmgigIgW5JSHuIQhUIk6s5Z%2FdXY5tpSg7o%2Bi6efeuz1btecRx4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY8hUgZUacaqb03ZSrcAwB7oU0yHfGuHOzep9IkLXUwCMcSLsKE57Uia6WcZJILMDglMq6WEeRBkP%2Bz%2FilCdbdB%2Fv5iUOj7VHSeH1uTt4ClXmJmr318ZjPoFp6AvmDRiOYXVmEkqTg5zVN5peqVylwYhF4RfABkXwjmiXbAUNGsvZCKl4Ph%2FyevxIy0qf%2Fxh7r6zeKa6gs64sbTl5yUEfbF14p3mgzBFHmkmMZsZYra30cSAXXysxU20NYKjQaFoTmF3X8V0QSB4ShtYUedcUD0%2FOlS87G4hlQC5tPOE7fTNcEA%2Fst4NJAQrfv61B1NUyApQeMIKvXlAd3kPqjQi%2FlxwcaSB1OlRWQaKm9wpY6mKbM4UixUQNy6IkdBqRp78sgfKrc2VrCU1M1rFTMGLtYowajIH0S0j41jxtgxLxyFpIwOG8A6oqIduWxm1gfHme2ElYPc4mKQcJKmqf4shuk6xICRgLuE6X3avBa%2FfgTor4MDCbL9QvOKi8v8HL8pGEIewRppfmzPi2i2mBaGYft6%2Bp8BNzvRVAGrItM6rodYXdQmroysgzCXLhGAO98GmdH4zUMJecxxukN67gGPE90kQXMmXneQnaGazm5I7QGGmZaNKv8UiZ7mZLz9WZ3jjr5L8yr2ycy%2FJYfPML7E28QGOqUBTVmpGj9NrfDv77gvaOvKC4WViPzOxaXRVE6nWBNEL2Es5t2NBg6HSR6TqTMoMUk7hHwIJZ7JZcFIAnLTKImlmwAHn4dG6jxvHZPnHTqQIFYsMapU9fMY9ch%2By4IvMViEmN2QlCfjrS82jcOxzEpq7JxeDTMgPb7NvDkUqPsgaFMXuTeNGeXMIm0OE0l7Pa4u4aF43BpPL7edWZljqbpmccwGbaL%2F&X-Amz-Signature=a2fbf3ed2b7c1e7f084752a28e4dd1ed07da071c84d13d30292cb62cb4162942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
