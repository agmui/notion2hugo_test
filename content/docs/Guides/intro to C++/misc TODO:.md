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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NMLCS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyAx7pLEl9fbdSUhwioF4UE2f5c9Hg3moiC3WJdXi37gIgKNiILCRu1GdQIT5MoXCtVIYGRhqTZZsARKAovq5uYg0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJJZQIhsvjS9f7PqOSrcA63aK%2BYlwHTVPkni1SqovZFE9pp%2FTlcEQQ1TRccaALfmt5wNU3o6wgEWIAvgCoceGumRJOBVRTPd2K4PlUw8UrxDQn%2FT1Vgn68jIjyILUFRIshUWucUfGxnPxRA0k6z4fvC1GgyqhsEYTxYAHYOKN2rOJwhxj%2F1lScNS4SzzKgZVZa8V1tz3yd8s6bgXkzrfm6zg72X8c%2Flx44HcpXOsGc1szgHg6GyZd70pgJ4ydFh%2FN0W2XwJ9wnSM2TUWt9OzPudyg2VWB8s%2F4PRalFTAaRvYnjjalUakjxNj25Y3NVlLYjeP7TFilJ6TcWCsjpLaoUHmRPZMQhYQMTYkiJtWiNl7tOgPtd%2Bk5XoE3Y04%2BcfRNwjEy5k3rvbj1sjy7kiJ84oTVoEuYNEvXL4u1QkE1e%2Fe2mHEasuBwiup31TNqhMj2b2lSf4PjPucjw93V0BhtmJbnisYacIEbs1Ir7vREwAkQyENEAncIPLJq0VQ3RjHxGF0m6vwvsYvSCy41Qqn%2BWPGPaCRtB3kehIlJOa4oYXhhoPKPKXGSl1Zlt4xFWuGa4ouwle0hU5LTd55fo6GWo8PpiguU6MOr8BUBEV2LGCctatNBKR7S7F888NF93HWflJh4fgounT9IZvwMNz6j8IGOqUBXFPnDFmJ18b2c6mtb%2BhLalTkrOyi209C8NAWFB9YkP%2BI5nMamZPQ%2BTAcFa3AqK6o49XSMXrIasnAUlDNwBiEdqe07H9Nny08XtTX3vSJCd8cYlm3Dg9gVCOQ0D0wl722WWao87FtV6EoZWZpOzN4zIMFqVMZMHAysKhuhFkNeJzmlinJ4sBfqLpD3tQyDqklTlVN5gmJPwH7NJ%2BsxyXQ4xRp23R7&X-Amz-Signature=622e0f41423a047229101dec0326720be45c05b973e8c55d116d0c8d02b18409&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3NMLCS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyAx7pLEl9fbdSUhwioF4UE2f5c9Hg3moiC3WJdXi37gIgKNiILCRu1GdQIT5MoXCtVIYGRhqTZZsARKAovq5uYg0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJJZQIhsvjS9f7PqOSrcA63aK%2BYlwHTVPkni1SqovZFE9pp%2FTlcEQQ1TRccaALfmt5wNU3o6wgEWIAvgCoceGumRJOBVRTPd2K4PlUw8UrxDQn%2FT1Vgn68jIjyILUFRIshUWucUfGxnPxRA0k6z4fvC1GgyqhsEYTxYAHYOKN2rOJwhxj%2F1lScNS4SzzKgZVZa8V1tz3yd8s6bgXkzrfm6zg72X8c%2Flx44HcpXOsGc1szgHg6GyZd70pgJ4ydFh%2FN0W2XwJ9wnSM2TUWt9OzPudyg2VWB8s%2F4PRalFTAaRvYnjjalUakjxNj25Y3NVlLYjeP7TFilJ6TcWCsjpLaoUHmRPZMQhYQMTYkiJtWiNl7tOgPtd%2Bk5XoE3Y04%2BcfRNwjEy5k3rvbj1sjy7kiJ84oTVoEuYNEvXL4u1QkE1e%2Fe2mHEasuBwiup31TNqhMj2b2lSf4PjPucjw93V0BhtmJbnisYacIEbs1Ir7vREwAkQyENEAncIPLJq0VQ3RjHxGF0m6vwvsYvSCy41Qqn%2BWPGPaCRtB3kehIlJOa4oYXhhoPKPKXGSl1Zlt4xFWuGa4ouwle0hU5LTd55fo6GWo8PpiguU6MOr8BUBEV2LGCctatNBKR7S7F888NF93HWflJh4fgounT9IZvwMNz6j8IGOqUBXFPnDFmJ18b2c6mtb%2BhLalTkrOyi209C8NAWFB9YkP%2BI5nMamZPQ%2BTAcFa3AqK6o49XSMXrIasnAUlDNwBiEdqe07H9Nny08XtTX3vSJCd8cYlm3Dg9gVCOQ0D0wl722WWao87FtV6EoZWZpOzN4zIMFqVMZMHAysKhuhFkNeJzmlinJ4sBfqLpD3tQyDqklTlVN5gmJPwH7NJ%2BsxyXQ4xRp23R7&X-Amz-Signature=2633791a5c0d4fd43bcff11c66bd32848d7bc25948856261ae3b8fa36ca08b15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
