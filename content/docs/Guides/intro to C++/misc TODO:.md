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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAR5K2P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOeEq07Wiqzj1cqNp9j9QCIK07Vk1z4T6uKmgDRQzSqAIgWiyVEwTLWDTrVTVJoKESm2TTjQBADdyD37tqIVJkp%2BQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLsTOS2BpW%2Bwmf8C2yrcA2vSD1WFgM2JkEuRHw4vLHW1%2Fu%2FZ8tBzjP2ppnvIPDpkvFDk5VsGcyyQ1DUxOAv7QnFHujpB1yPMz0XY%2BQXcmf5%2FZIoSmBc7aMS8xE0UQNg2dQRMPMch3CO56rIDFD4rslINWpKefpk4hw8DOjfZwHGUfBTUk5Y7Ljm0mV4%2FZ5m5lUB%2BxFK2jXI1QNw4a3p417J3TLdKd9CjwlACpk3kV%2BQq1gYsIwvFphIXjvs4lvxlW2jHuKqTNjB3jQIl0xsuDJ00umku1pE5S1q87c4toq5iLJMzxjMg%2FE8%2FyU4TsNq9Rl8CRmT%2BZDczPEQer8yoDDxra1l51SIV90qHBJXtTi2TCRr8qe%2BXm0LkeSvQgFbbHlOhnedcXYQZCr5q%2FPF3lPnxCsj0HodR%2Bf%2BQN1OM4ZvFxNYNgw6ld6FHPITrzoyG76%2Fy6oGtvA3JQXP7POjNriynnK1CEdETMkds3xWBsrYRns2d%2BUmZnfOpXqT8ArDyzBfP8DDPXS4u7oYK6HEGcBJuY0L5FIkcB7%2BKxMJ0NDTstH3hoLm0kW7mBLxY3irS0pMUYCsyIzpwl5iaSjGGx1yAP2PzwhxQjUt3K2UgaY%2FaOVAhv3Sepf7IFIZlup8vLePJLbylkxsADDxVMLbWvsAGOqUBMHe%2BK8WxZ9xEIHsukA8xreI2KCbbgyNwOLwVTeOIzhHlZmJjc7ltilMrKorafwGEhM371IaYcoGBh7KlR0yf2Nx1OxU2pWHlMX57KIGrLt10J6rZz869YzdCXw0kf9Op9QXvrk25Aby6OaEtkImVcHyXL90NJxQQ7cKYtZoRAaU3cdLpvUb3nbC5raWO0SJ9apdMm2FTprZcvGw06jfFhcQtO9iL&X-Amz-Signature=9af2b07996455fd4b60c7b5085512dfd4e086352bd4f3a9f87c508a282b555aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAR5K2P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOeEq07Wiqzj1cqNp9j9QCIK07Vk1z4T6uKmgDRQzSqAIgWiyVEwTLWDTrVTVJoKESm2TTjQBADdyD37tqIVJkp%2BQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLsTOS2BpW%2Bwmf8C2yrcA2vSD1WFgM2JkEuRHw4vLHW1%2Fu%2FZ8tBzjP2ppnvIPDpkvFDk5VsGcyyQ1DUxOAv7QnFHujpB1yPMz0XY%2BQXcmf5%2FZIoSmBc7aMS8xE0UQNg2dQRMPMch3CO56rIDFD4rslINWpKefpk4hw8DOjfZwHGUfBTUk5Y7Ljm0mV4%2FZ5m5lUB%2BxFK2jXI1QNw4a3p417J3TLdKd9CjwlACpk3kV%2BQq1gYsIwvFphIXjvs4lvxlW2jHuKqTNjB3jQIl0xsuDJ00umku1pE5S1q87c4toq5iLJMzxjMg%2FE8%2FyU4TsNq9Rl8CRmT%2BZDczPEQer8yoDDxra1l51SIV90qHBJXtTi2TCRr8qe%2BXm0LkeSvQgFbbHlOhnedcXYQZCr5q%2FPF3lPnxCsj0HodR%2Bf%2BQN1OM4ZvFxNYNgw6ld6FHPITrzoyG76%2Fy6oGtvA3JQXP7POjNriynnK1CEdETMkds3xWBsrYRns2d%2BUmZnfOpXqT8ArDyzBfP8DDPXS4u7oYK6HEGcBJuY0L5FIkcB7%2BKxMJ0NDTstH3hoLm0kW7mBLxY3irS0pMUYCsyIzpwl5iaSjGGx1yAP2PzwhxQjUt3K2UgaY%2FaOVAhv3Sepf7IFIZlup8vLePJLbylkxsADDxVMLbWvsAGOqUBMHe%2BK8WxZ9xEIHsukA8xreI2KCbbgyNwOLwVTeOIzhHlZmJjc7ltilMrKorafwGEhM371IaYcoGBh7KlR0yf2Nx1OxU2pWHlMX57KIGrLt10J6rZz869YzdCXw0kf9Op9QXvrk25Aby6OaEtkImVcHyXL90NJxQQ7cKYtZoRAaU3cdLpvUb3nbC5raWO0SJ9apdMm2FTprZcvGw06jfFhcQtO9iL&X-Amz-Signature=24e0deacc55cffecab5917bfa32a73c529a08deb2a082f0425e4adb7251dbe49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
