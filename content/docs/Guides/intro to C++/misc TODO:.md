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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGZFDES%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIH0vmxCZ0TH0IdcsuhhDDxS%2FVP7THITZsAUFR20lD09rAiEA9mbunvcyrWWhrEdlR5NGGsD5MEc9%2BUU8hUFH8SCn5Uoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ1LcTuh5jk%2FUVxFRCrcAzqxIc7rPswlej1PrQ78q%2BxuIN55izd6HRLQxKGqD9XSmwGwR%2FNT6pPVsNOPS%2BzrcNw%2ByNHyhzrbHs%2FB268uINFT7CtB3f8Wz1s7xURs01Yo32kdkbFOcuA4XEDmonoLO7i%2BD1VNfCiIdbmPAtS50R9ksYwr%2BDuTuUgrBjp4ISZSNPKOfEAffIr4ra6DDZWq4oKFGjc1yd%2BhwoAS%2FxHSSKphFoRr6b6RxB%2FSWmeL%2BQBboeDxhxbqoQwlMO7d12y3bMuxO8daVbM8jVk6jTpgQU3ABojATazbAJMn8J3mirR%2BJAIv5Gc2WrCqYGzrefaM%2F4wovuchCHb89qCcdOS0WgK4%2Bjobre8d0qJHppM9xn8lr10A3FivZkahO8hfLCMgl31pgse2RpO8nKOB38IC3yy19mQSeuhoJLVnaEnE491RxWReNl26IPT2gSxref1eDSTT%2FALubW%2FQfHtJ5kj8axxwGYPQ%2BKRZtjHav1xCTnGrkAS3tXNNxXhBimeJbt7APTKgwe5Mo2y0hy0hiKsNDhB4A7AF%2FHwovQ%2BTgjvotkk0MdwzunSqgBg7o%2FIk77ei4Q9hRSYxP%2FmCOJDkSC866pS9KaYSWob8u4WZBmHyCOAs6m1%2BpqXY2RwL3mbiMM%2FhmL0GOqUBYISLqxEGlkva8VC%2BWHSzL6qCkI05YfdDiPr3%2FTaFRYuZX1Elvn9cvVVOuvIDfj0TI00M2mVjKFVKcR%2FR%2F%2FuF3WcgDqq%2BJMRCPOk096G3wYMcpJrDcEL8E%2BPxygad8b7YZlX1uih9eJbmtzhJbZV%2B9ncxEakBpKdF52%2Fjmq%2F9slYOw4LQK6M%2BGyuCzgINygwgu111wWNQNDov3ZMwSCx%2B8HLL%2BBrd&X-Amz-Signature=c394c23cecb4b751d7428ac0c6f0d35a955e9f1b0be6dc75778c6235f6a90447&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGZFDES%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIH0vmxCZ0TH0IdcsuhhDDxS%2FVP7THITZsAUFR20lD09rAiEA9mbunvcyrWWhrEdlR5NGGsD5MEc9%2BUU8hUFH8SCn5Uoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ1LcTuh5jk%2FUVxFRCrcAzqxIc7rPswlej1PrQ78q%2BxuIN55izd6HRLQxKGqD9XSmwGwR%2FNT6pPVsNOPS%2BzrcNw%2ByNHyhzrbHs%2FB268uINFT7CtB3f8Wz1s7xURs01Yo32kdkbFOcuA4XEDmonoLO7i%2BD1VNfCiIdbmPAtS50R9ksYwr%2BDuTuUgrBjp4ISZSNPKOfEAffIr4ra6DDZWq4oKFGjc1yd%2BhwoAS%2FxHSSKphFoRr6b6RxB%2FSWmeL%2BQBboeDxhxbqoQwlMO7d12y3bMuxO8daVbM8jVk6jTpgQU3ABojATazbAJMn8J3mirR%2BJAIv5Gc2WrCqYGzrefaM%2F4wovuchCHb89qCcdOS0WgK4%2Bjobre8d0qJHppM9xn8lr10A3FivZkahO8hfLCMgl31pgse2RpO8nKOB38IC3yy19mQSeuhoJLVnaEnE491RxWReNl26IPT2gSxref1eDSTT%2FALubW%2FQfHtJ5kj8axxwGYPQ%2BKRZtjHav1xCTnGrkAS3tXNNxXhBimeJbt7APTKgwe5Mo2y0hy0hiKsNDhB4A7AF%2FHwovQ%2BTgjvotkk0MdwzunSqgBg7o%2FIk77ei4Q9hRSYxP%2FmCOJDkSC866pS9KaYSWob8u4WZBmHyCOAs6m1%2BpqXY2RwL3mbiMM%2FhmL0GOqUBYISLqxEGlkva8VC%2BWHSzL6qCkI05YfdDiPr3%2FTaFRYuZX1Elvn9cvVVOuvIDfj0TI00M2mVjKFVKcR%2FR%2F%2FuF3WcgDqq%2BJMRCPOk096G3wYMcpJrDcEL8E%2BPxygad8b7YZlX1uih9eJbmtzhJbZV%2B9ncxEakBpKdF52%2Fjmq%2F9slYOw4LQK6M%2BGyuCzgINygwgu111wWNQNDov3ZMwSCx%2B8HLL%2BBrd&X-Amz-Signature=f042c8f041caa7fb4c0dc4a06babf41cc624c418ec1c939efcd9734e88895c06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
