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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32PMAKT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhOW0%2Ba35AwvJ2FP%2FovvB0GFRMn4P0vfO7FL8q7adZtAiEArhH7dSUmYNpVWAmr91SDi8rVXBIJLOslWjlsSPLXqg4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGEN3ICMUsF9SE0UjyrcA%2Bw%2BdfaG2Pud885aKAntzBvPAVnZo%2BLTsdPTA0F%2BQrLrJGn6i%2Fr5EddTFSCiMQ07PmHBggaubFCUP7BS1bchyKDzCzvCrZPEwBvITuD%2F9G4rPgA4DbwryE8Ugz52Vc2G2t3ZDWse2xbUyc9BR%2BpTjI8BtKCk4%2F0r94NzzZWiDSFbhQwfC3TsbX5dhxYZ0nA%2B1UtzD4KAjpYgfjGZWNrL44qZGLwiXbt7jJnQAm%2BhW0223J8kVLWUt9PZBc6evxqYZQxfouLJI7HbcHulw%2FiPJcToUJJbnR4Oj0U3fg3YwYaJxKtvvfB9D0YVTEBVURmiiM6DFlA4r33HiFuYp26%2Ft25tpRPji42yc1%2FMRThPnO53zTcXa4M1uRsDj%2BbrODrLPixr78Z64WqT%2BjxvcnZiMBtbEdm%2B0a%2FVd60e7rofZVGuk6iEgpJu8Xd8fggiTfPv3bOhx4O6ExCMVPhuBvABehU5l%2Fh4LWMFlDCJGHWjnnPA3oyJSVVFuh3iO1TTyqkr1Q%2FQ9EJDMwA%2FXQHv4loeC82QugiPXAxyib8rD4TS%2FFmsLuOwzdO4Qt1Qx%2FviP0QXZkf5h3Zd%2Biph7ce%2Fc52zrx6C9n7jNEI4G0Vai9Ij1LT0C4wSgB99nbEkvIxhML7Jtr0GOqUBc5MiBwhuYTLi86cBvE%2BYsPz8F7RmBZg1TygWMGCWxmeZdf31VHdER9AlDXIT%2FzBVcZgIOPF0dfqyD9ileFuWRZZtFlSG7kqw0J5RPRWrWGa12K4TIMy%2F7i15Ns3BBRKSCn6FhpswbX6ZuqJwwcKley9SfbhDeTUx5k1QzlIGTfppQ%2BON922g7UjCF3F1GQPHRyRZ%2BaSMpnuEWdUvEohY4GjsR%2FFL&X-Amz-Signature=5602ef71ead5a0d440e20e0e21548e4276cd42538f0d488deb0f88c28f61314e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32PMAKT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhOW0%2Ba35AwvJ2FP%2FovvB0GFRMn4P0vfO7FL8q7adZtAiEArhH7dSUmYNpVWAmr91SDi8rVXBIJLOslWjlsSPLXqg4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGEN3ICMUsF9SE0UjyrcA%2Bw%2BdfaG2Pud885aKAntzBvPAVnZo%2BLTsdPTA0F%2BQrLrJGn6i%2Fr5EddTFSCiMQ07PmHBggaubFCUP7BS1bchyKDzCzvCrZPEwBvITuD%2F9G4rPgA4DbwryE8Ugz52Vc2G2t3ZDWse2xbUyc9BR%2BpTjI8BtKCk4%2F0r94NzzZWiDSFbhQwfC3TsbX5dhxYZ0nA%2B1UtzD4KAjpYgfjGZWNrL44qZGLwiXbt7jJnQAm%2BhW0223J8kVLWUt9PZBc6evxqYZQxfouLJI7HbcHulw%2FiPJcToUJJbnR4Oj0U3fg3YwYaJxKtvvfB9D0YVTEBVURmiiM6DFlA4r33HiFuYp26%2Ft25tpRPji42yc1%2FMRThPnO53zTcXa4M1uRsDj%2BbrODrLPixr78Z64WqT%2BjxvcnZiMBtbEdm%2B0a%2FVd60e7rofZVGuk6iEgpJu8Xd8fggiTfPv3bOhx4O6ExCMVPhuBvABehU5l%2Fh4LWMFlDCJGHWjnnPA3oyJSVVFuh3iO1TTyqkr1Q%2FQ9EJDMwA%2FXQHv4loeC82QugiPXAxyib8rD4TS%2FFmsLuOwzdO4Qt1Qx%2FviP0QXZkf5h3Zd%2Biph7ce%2Fc52zrx6C9n7jNEI4G0Vai9Ij1LT0C4wSgB99nbEkvIxhML7Jtr0GOqUBc5MiBwhuYTLi86cBvE%2BYsPz8F7RmBZg1TygWMGCWxmeZdf31VHdER9AlDXIT%2FzBVcZgIOPF0dfqyD9ileFuWRZZtFlSG7kqw0J5RPRWrWGa12K4TIMy%2F7i15Ns3BBRKSCn6FhpswbX6ZuqJwwcKley9SfbhDeTUx5k1QzlIGTfppQ%2BON922g7UjCF3F1GQPHRyRZ%2BaSMpnuEWdUvEohY4GjsR%2FFL&X-Amz-Signature=519e0de8e30e631bbba74e3cfc8c4bb04a3b3d95c741a956dc5da5fd6793a323&X-Amz-SignedHeaders=host&x-id=GetObject)

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
