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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLCUIH2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCubktDxdXrUShscVVRIy8yQ46f0M1sE5mIl3L%2FTAoMzwIgXcXiu3fH2%2FAFBLj6NL4MzsPKEC66qWp44a5gp7uKR0Mq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIWTp8ZkDmlM4JbH%2FircA9PFjcIDOmB1Yo83QyF9bNOpMs%2BXU7mGNbz3DFIvcztQ56e2XVVzmtEURp8wltIpUwjTcOTfD%2F8pfHerkDQBsQM39gjuYFdA1mpU4ZWEF9DaV8GSBPldcfbJm5aWn%2BREpfDZOH9Fa9UPFfk5boPlLgnpEoJeOwY54yY2t%2FxDHaKuEgsJd1TQwPwSJGlPi3QfE2Q6kRsOHorl8MwZhl2QL1r0oGGChlAIwEiDLZLR9R8e9Q3gwJU7TfXY9T97I6bs6g8DwgIgVdANA38VWG8%2Fg68DZc57qrf7wSKi2P%2FKxZYNj9Kb0ZvAAzizPBxuDW4SYpreJp2VzPcugU5ygbykMHyNDlNZ%2BxCnokPn5d2UW78fKLtkQfmA7QNzUEWOla1qzMhddSI6Lg3MpsH0noej2u0v2FPUY%2BpuAawoIKnwx5B7JK96PTbPkJTpHLcNlz3FSmGhL43Hs9UR9VSQZCTidA83aU%2F%2Fjk9T5d9nn44VJyUn0XHRuMRtBxvTZjUAEXoCKRgUIPDA3WvhZ2iIRYKLxmACRvx2M%2BYYhCraYXcaifXFM5zOhlffAr5KgyVrbjIl1JoTLk5LEqHLBMuW9U7SacntVY%2Bg1OyiRl7QLwuFkv8BwblYW5kItSSCa2ALMLWbv8AGOqUB9j%2BXivQ1wpl97NQJyjWNWdWHBthaEe44KJPbpuWv2VOVIqa%2Fbksd22O3w4rvFnCks8wm9dTW0%2F5%2FSiavBtK%2FeSjJwripqOOKXwWgd%2Fw%2Bh1M3vXmtABHg4AszhDn0UpDGRE4wfb6w33%2BwGn506HVvDOfYNbHFdbJpizs65jdX1p6oMZ4drykOAXnF3CkBr%2B%2B7OA%2Ft6QHVAMbYGGs3M9K4O0bDq8No&X-Amz-Signature=8d6fe9f8e750c3a2f8e510f38e11aeae731baaa9a46720634165da8a9095baa0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLCUIH2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCubktDxdXrUShscVVRIy8yQ46f0M1sE5mIl3L%2FTAoMzwIgXcXiu3fH2%2FAFBLj6NL4MzsPKEC66qWp44a5gp7uKR0Mq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIWTp8ZkDmlM4JbH%2FircA9PFjcIDOmB1Yo83QyF9bNOpMs%2BXU7mGNbz3DFIvcztQ56e2XVVzmtEURp8wltIpUwjTcOTfD%2F8pfHerkDQBsQM39gjuYFdA1mpU4ZWEF9DaV8GSBPldcfbJm5aWn%2BREpfDZOH9Fa9UPFfk5boPlLgnpEoJeOwY54yY2t%2FxDHaKuEgsJd1TQwPwSJGlPi3QfE2Q6kRsOHorl8MwZhl2QL1r0oGGChlAIwEiDLZLR9R8e9Q3gwJU7TfXY9T97I6bs6g8DwgIgVdANA38VWG8%2Fg68DZc57qrf7wSKi2P%2FKxZYNj9Kb0ZvAAzizPBxuDW4SYpreJp2VzPcugU5ygbykMHyNDlNZ%2BxCnokPn5d2UW78fKLtkQfmA7QNzUEWOla1qzMhddSI6Lg3MpsH0noej2u0v2FPUY%2BpuAawoIKnwx5B7JK96PTbPkJTpHLcNlz3FSmGhL43Hs9UR9VSQZCTidA83aU%2F%2Fjk9T5d9nn44VJyUn0XHRuMRtBxvTZjUAEXoCKRgUIPDA3WvhZ2iIRYKLxmACRvx2M%2BYYhCraYXcaifXFM5zOhlffAr5KgyVrbjIl1JoTLk5LEqHLBMuW9U7SacntVY%2Bg1OyiRl7QLwuFkv8BwblYW5kItSSCa2ALMLWbv8AGOqUB9j%2BXivQ1wpl97NQJyjWNWdWHBthaEe44KJPbpuWv2VOVIqa%2Fbksd22O3w4rvFnCks8wm9dTW0%2F5%2FSiavBtK%2FeSjJwripqOOKXwWgd%2Fw%2Bh1M3vXmtABHg4AszhDn0UpDGRE4wfb6w33%2BwGn506HVvDOfYNbHFdbJpizs65jdX1p6oMZ4drykOAXnF3CkBr%2B%2B7OA%2Ft6QHVAMbYGGs3M9K4O0bDq8No&X-Amz-Signature=71186d96ff669af39aa437c7a2b3a9911511e3aeb984af39c647a7b6e8b6b535&X-Amz-SignedHeaders=host&x-id=GetObject)

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
