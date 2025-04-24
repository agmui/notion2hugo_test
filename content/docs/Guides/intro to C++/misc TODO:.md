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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEIJQGD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCq94E9MU%2F2kh2eIQgzyKYaqqwqsv%2BNR8o%2FJz5dl44VdAIgX9xNllvbzTu7TPjcjlhav2ZN4JVzRlls%2BAAS79a%2BXYQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM61%2FR6u6Ik%2F0xY0ZyrcAz6D0pSZbDQycbZF1cKpYPb3KJHRfTihXkO0NAXliTDRM6F3sawKQ4as72sTmH%2B3uLmGGooNDrv9xMBtazwx5hlq0y0q4qkNCo1pUJH%2BMvysXk%2BYOdqAAwzNsp1mKmo%2FCPAS6ESNDHJHog29SkNU8hhcRLT20%2B36OdehHCI0r4gQil7ps2w%2FphmGoDBIz%2FG1hSV%2BCyECKBnj7V0nFy7tQonXocfnyJ2fP6gJlkC%2B4PijTohpr6OvUvgrO90XUnpzTCFPiZjnyGr%2F5wAHkBiWy%2B9zTCxfzBuzo%2Bj7T2tsQy6OURGiw3QY%2FzXw%2Fuo8wdYFpnOWwZ23FnuskR2ILNUWXXwxLpAKHHz4m1Z2980D9NqkZ6npHMyEwboYnQwGy%2BqCChQl0wtsN3Y7PTh0Ubbtd779m%2BhcypLGB3Z%2Bp5%2BawfTrNxlBG9N%2F%2B3rV3hYgvTkhlpFR28prLPkjdYA7on872cSLEbElM1jh26XS%2B2p%2Fok10%2FMtgKe4dXUf3q2wJND%2B5ostY4NdylwUGwuuKPhz3cmkhkEyOKug7Gol10Z2jjjlkwmCvlNVzk3d3O2AFqypz2PZtxaffB%2Bb4Cd9IvnD8TisgejfO2mDwFYkEun6ptz5nV20AvZnsSKssOjfQMKzMpsAGOqUBhrrJGdH%2F1QzFL9mC%2FJ5mxxSBXRvaJJKxX%2FswsjF9M5texzsyGU2P2YbVPLWnh3fG7OpOCUndxTVcR1ZEOhD2g3wEE1zOv8IIbUJLUCQceNFiVsINS1sNlEiYTdpeu9PjgZngBUNITDq0Pw2oC2DrhSj6LCXIq5G%2BjH89M%2BAGo4NqgR%2FknV0yn2oi6vU0%2FN5Agodb9dMgTamSWjyXwhZoaOUs6E6V&X-Amz-Signature=9d0c6f70fa00f5f9bc7b081682fbf526dae807998c8dc3ce66693486aa944987&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEIJQGD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCq94E9MU%2F2kh2eIQgzyKYaqqwqsv%2BNR8o%2FJz5dl44VdAIgX9xNllvbzTu7TPjcjlhav2ZN4JVzRlls%2BAAS79a%2BXYQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM61%2FR6u6Ik%2F0xY0ZyrcAz6D0pSZbDQycbZF1cKpYPb3KJHRfTihXkO0NAXliTDRM6F3sawKQ4as72sTmH%2B3uLmGGooNDrv9xMBtazwx5hlq0y0q4qkNCo1pUJH%2BMvysXk%2BYOdqAAwzNsp1mKmo%2FCPAS6ESNDHJHog29SkNU8hhcRLT20%2B36OdehHCI0r4gQil7ps2w%2FphmGoDBIz%2FG1hSV%2BCyECKBnj7V0nFy7tQonXocfnyJ2fP6gJlkC%2B4PijTohpr6OvUvgrO90XUnpzTCFPiZjnyGr%2F5wAHkBiWy%2B9zTCxfzBuzo%2Bj7T2tsQy6OURGiw3QY%2FzXw%2Fuo8wdYFpnOWwZ23FnuskR2ILNUWXXwxLpAKHHz4m1Z2980D9NqkZ6npHMyEwboYnQwGy%2BqCChQl0wtsN3Y7PTh0Ubbtd779m%2BhcypLGB3Z%2Bp5%2BawfTrNxlBG9N%2F%2B3rV3hYgvTkhlpFR28prLPkjdYA7on872cSLEbElM1jh26XS%2B2p%2Fok10%2FMtgKe4dXUf3q2wJND%2B5ostY4NdylwUGwuuKPhz3cmkhkEyOKug7Gol10Z2jjjlkwmCvlNVzk3d3O2AFqypz2PZtxaffB%2Bb4Cd9IvnD8TisgejfO2mDwFYkEun6ptz5nV20AvZnsSKssOjfQMKzMpsAGOqUBhrrJGdH%2F1QzFL9mC%2FJ5mxxSBXRvaJJKxX%2FswsjF9M5texzsyGU2P2YbVPLWnh3fG7OpOCUndxTVcR1ZEOhD2g3wEE1zOv8IIbUJLUCQceNFiVsINS1sNlEiYTdpeu9PjgZngBUNITDq0Pw2oC2DrhSj6LCXIq5G%2BjH89M%2BAGo4NqgR%2FknV0yn2oi6vU0%2FN5Agodb9dMgTamSWjyXwhZoaOUs6E6V&X-Amz-Signature=d1c80f763437820d373edfa8acad6752f3dc49cb6f573eb82770284a8cbf8b11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
