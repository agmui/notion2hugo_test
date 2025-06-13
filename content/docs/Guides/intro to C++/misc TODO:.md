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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMZJ7ZOB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIB0Df%2BOmqsA39UpxG526MntFh1VvgYIChiGLLC6X81mwAiEAzwRL9jr87kIGpBnuPMlFriTWtQITq0S0IA1N0ulgmngqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOT4neh%2BjVsUJZWWlSrcA8u4nubsyEHNF6YAV6fYqGmnN0wFFFeGgALr7oNC0ayrmJqEgbCNP11GphDZaIkbX%2B5Hz1g5poQWP3yw6yJ3f9D%2FBfH1YBhGErXuF%2Fb3O%2FxkwSA8vCbBTD%2FRIhzVzHVJ7KLJkSrp%2BlbQXk4iq7Iyjzmd%2BWGFtHihl3AxfaNj4uIMjqooNd27BgTxiGSX1boqyEcIc0J4dLR%2FZ9ZanZVg4fAf6z4EGL52CQDqQoMt4EQKBM6PpK9YeHQ%2B0Ndpw3bOVTb9apziPcziKX3JAMPu1GKpJrBSkJBj6rWQDCvc2V%2BAxwEgkbScx5AkkjSgbjRzW9VNS1JUS6ZPuiH6vMNR8vOwAVHgzg5JBL0kQYpVlS4HGGX0nwdvPqI6cDln9adHDdd4JFai4yKJijDnf0%2BVUXYu0vDT9Ei5VFDikoHrZjCZUII2tBgMZgRfnheQbEQ7HhEXmDaFlum3lOqP8hEm2Q%2BYs68giyBbPfxNqnmO01CAP6TDHgXtM4OiMc1GlQa2SXSAojIiuo4JFrBtwZKgJcVikjifNfZ8ds3rjCOekTblEwG6s%2FzPexdNd5UIf2BFclUMHog%2FhOJB1cLu%2BXp9Ysw8tL%2By2ttulMqwOA5bA%2B5YY26lxpMYTX3XfLcZMMLVrsIGOqUBOIamRmBGj1LR5%2FCiJRJYy72yjaGmCdhlvqcLq9Z0NuCUHvrGoiJoT60r4lnUAee3lRqLL19aIcj4WQidazCa%2Bd%2F5AMK886N0gjvF%2BeN60K%2FyepMhZ27Q%2BdIwonfDkx5p2iCvtF2PMH1vk6NxBKlZAm1kxTm2d6W0xrhI1VXPxozl3pLhTxicN0kUr2OoEt0rK%2FjoE0jO9Dy9iml9s6XiH87hy1ud&X-Amz-Signature=020e9c9333f7c1d990f2753fcae9b9b9baaa648a28d62e0438cb50113029d54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMZJ7ZOB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIB0Df%2BOmqsA39UpxG526MntFh1VvgYIChiGLLC6X81mwAiEAzwRL9jr87kIGpBnuPMlFriTWtQITq0S0IA1N0ulgmngqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOT4neh%2BjVsUJZWWlSrcA8u4nubsyEHNF6YAV6fYqGmnN0wFFFeGgALr7oNC0ayrmJqEgbCNP11GphDZaIkbX%2B5Hz1g5poQWP3yw6yJ3f9D%2FBfH1YBhGErXuF%2Fb3O%2FxkwSA8vCbBTD%2FRIhzVzHVJ7KLJkSrp%2BlbQXk4iq7Iyjzmd%2BWGFtHihl3AxfaNj4uIMjqooNd27BgTxiGSX1boqyEcIc0J4dLR%2FZ9ZanZVg4fAf6z4EGL52CQDqQoMt4EQKBM6PpK9YeHQ%2B0Ndpw3bOVTb9apziPcziKX3JAMPu1GKpJrBSkJBj6rWQDCvc2V%2BAxwEgkbScx5AkkjSgbjRzW9VNS1JUS6ZPuiH6vMNR8vOwAVHgzg5JBL0kQYpVlS4HGGX0nwdvPqI6cDln9adHDdd4JFai4yKJijDnf0%2BVUXYu0vDT9Ei5VFDikoHrZjCZUII2tBgMZgRfnheQbEQ7HhEXmDaFlum3lOqP8hEm2Q%2BYs68giyBbPfxNqnmO01CAP6TDHgXtM4OiMc1GlQa2SXSAojIiuo4JFrBtwZKgJcVikjifNfZ8ds3rjCOekTblEwG6s%2FzPexdNd5UIf2BFclUMHog%2FhOJB1cLu%2BXp9Ysw8tL%2By2ttulMqwOA5bA%2B5YY26lxpMYTX3XfLcZMMLVrsIGOqUBOIamRmBGj1LR5%2FCiJRJYy72yjaGmCdhlvqcLq9Z0NuCUHvrGoiJoT60r4lnUAee3lRqLL19aIcj4WQidazCa%2Bd%2F5AMK886N0gjvF%2BeN60K%2FyepMhZ27Q%2BdIwonfDkx5p2iCvtF2PMH1vk6NxBKlZAm1kxTm2d6W0xrhI1VXPxozl3pLhTxicN0kUr2OoEt0rK%2FjoE0jO9Dy9iml9s6XiH87hy1ud&X-Amz-Signature=a6dd2b1068f1e12ae9eb5b7884ed262f5dcd9c974f985d082ab6463fc33913fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
