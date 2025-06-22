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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBBRWG7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8C5UWaMPTQEwsMwO0DZTWFd%2F%2BLWY2pWzwU2uBXRTkYAiEAxh1%2FGYOKvcmO5l7M%2BPgQa5fPGBJyECeDRjHIkLrwSG0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3vULunHXJekLwRCSrcAxc5wm9wYT41BhJf2h9Q4W%2F2jPy0XhERmX6xCK%2Bs0IP0puFiINNp3599mHCN%2B25tcY8XnvbGm1d4vYHEpYyVNVSAPF58hK43zArg%2FCINUy34sWo7dz7nbUZHfCd4U6k65uX%2FkP0ALcoldsxhpBA0jnW%2Fee0mxYXdXIPoXqGl4XVhk1oETVN0nPs0n19netMLpJvWFtK6w4XYGeN1KuMLYxRrF5duEoI1kTs8Q6geLCHT3FYxWs%2F%2Bcn5GAD7jC4JlF8jqYrH67mL3ENrx0zLfEf%2BvTzo0yjp1x96lfkLx%2B8kEqYXjokB17CXm7Nbd3qM0lL2y1CbWf9tcbYVuyfWZ04qaLWUiV4OBn0rBkh0KkozCngLZEUAesFICxp8baOJyF7nTNHbNLPckZN5sE3%2FZOfVzgtPUM4vbyrw7poLjoLNotszg4pBwOB30mbqs1blLWotKUylF7Cd9d1VsO9R1YQLCmx0u80pvnQLsSffHQk%2Fj02zm%2FW7zzFR4HdaLEFg35DidlHt6BZiaNVBaIWu3acj%2F2zZoxF42TwY360%2BHUYUlWTe%2BxcutGH0idg589R6JDX3EFTMV8TuZQglDSnKZhUN6sv4zscVWWISoKkpCpd4gE%2Bz2laj7R8iL%2FIZnMOq43sIGOqUBY9JOZpekRZ15hfk6kDfvtF1znXHko1iqpb3WaZtGq9vumiqCUSb%2BhQ7Icv6ytHFDceuB%2BkOpan5hA2yfd1ogvKSbWHJYzgve382BrkBEn38xSFPFVRS26xXDd0qx4g6OFYCvbKaPtgnXnfGo3ILrXYx5YcpwpbFVsHa8Jw84adr%2BeKM%2FV2wDZ2loBJCDWYBdceC2IMcnkuLHcLySM6Xsw8OO2v8K&X-Amz-Signature=4f5a0272dc065cbce02c05172e84cb0e65b995e5a991cd9002f9d683e8273c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBBRWG7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8C5UWaMPTQEwsMwO0DZTWFd%2F%2BLWY2pWzwU2uBXRTkYAiEAxh1%2FGYOKvcmO5l7M%2BPgQa5fPGBJyECeDRjHIkLrwSG0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3vULunHXJekLwRCSrcAxc5wm9wYT41BhJf2h9Q4W%2F2jPy0XhERmX6xCK%2Bs0IP0puFiINNp3599mHCN%2B25tcY8XnvbGm1d4vYHEpYyVNVSAPF58hK43zArg%2FCINUy34sWo7dz7nbUZHfCd4U6k65uX%2FkP0ALcoldsxhpBA0jnW%2Fee0mxYXdXIPoXqGl4XVhk1oETVN0nPs0n19netMLpJvWFtK6w4XYGeN1KuMLYxRrF5duEoI1kTs8Q6geLCHT3FYxWs%2F%2Bcn5GAD7jC4JlF8jqYrH67mL3ENrx0zLfEf%2BvTzo0yjp1x96lfkLx%2B8kEqYXjokB17CXm7Nbd3qM0lL2y1CbWf9tcbYVuyfWZ04qaLWUiV4OBn0rBkh0KkozCngLZEUAesFICxp8baOJyF7nTNHbNLPckZN5sE3%2FZOfVzgtPUM4vbyrw7poLjoLNotszg4pBwOB30mbqs1blLWotKUylF7Cd9d1VsO9R1YQLCmx0u80pvnQLsSffHQk%2Fj02zm%2FW7zzFR4HdaLEFg35DidlHt6BZiaNVBaIWu3acj%2F2zZoxF42TwY360%2BHUYUlWTe%2BxcutGH0idg589R6JDX3EFTMV8TuZQglDSnKZhUN6sv4zscVWWISoKkpCpd4gE%2Bz2laj7R8iL%2FIZnMOq43sIGOqUBY9JOZpekRZ15hfk6kDfvtF1znXHko1iqpb3WaZtGq9vumiqCUSb%2BhQ7Icv6ytHFDceuB%2BkOpan5hA2yfd1ogvKSbWHJYzgve382BrkBEn38xSFPFVRS26xXDd0qx4g6OFYCvbKaPtgnXnfGo3ILrXYx5YcpwpbFVsHa8Jw84adr%2BeKM%2FV2wDZ2loBJCDWYBdceC2IMcnkuLHcLySM6Xsw8OO2v8K&X-Amz-Signature=565481a74d458568eece0b73333ac2e27a2c0e8d3702b8101195086ea151fd86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
