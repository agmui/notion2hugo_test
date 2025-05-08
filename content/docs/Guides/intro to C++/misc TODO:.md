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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUSZ5VR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADCMN50SxNMONArMxr6Ou3cfD8%2BorJcywn4mgH4iwsKAiBLAcVuY7owHvlWW1AGdQgZQ0VIHYh94X%2BkDMMP%2FpyX2ir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMzpUZQdrHT5%2FfGJ%2BLKtwDItKLjoErnklsNiaK62SBG3FOu%2BSeqsX2GFlG0t3h2jb739lKgb1lMbMFOQaDBrMxr4XnFcuUiGaVqFwwXq7oXljFYkc5rQK6wmhoN3Lv4BjXpGPfo9DkMMYeVLTxogfGrDv1UbRoUd4BGWZYgYTbfioMDBFizVuQwll%2F8p5%2F%2BynsJYpMl6Un%2BvkF7t1lQQUJLT5rm3kbuXBeNM1ybMh1%2BH%2FQ5QN4IlkJ5DEzp7iuHJPdbg1lBd9Abar%2B6OBcJWwlmXvvcIRNarea7XjovxWzSbIJDsOYjiaJbENTNFlkHhLrzLqMtycrJ1VzvFZZglaVsFPnLIR7P%2Fg3OOI59qcWxEHbTmBfjwyoGB7VwqH7Ymb61JlvLuyJM9ixkbKSuqfcCom5mBxoATokpEHhgrCSF%2FxTZGu%2BcIykPZ0HFoMt4wBaGpca18uMd1S96kIqS6XW6OvHS55vRFyteMQ0qetUYnk7FODAHIxMK2jr2hRACBRu9g5B0UBzNPx0wmCsGrjJeQEfumCgwkRkQBTSiRt9K0hmbe%2BHaOUchVic0eoCzYUhwmKg2iEAP96Ab8os5cDBTizS6Bpvu9u7WaOatfI25bcjmxMHWs50VP4rNzaqc4t3MlFYxzCQfKp5kWwwlu3wwAY6pgHbQUYZVl2X5xzjhj69mNsB%2Bkk4a47ANeVi2yVD3yQ5RuY5nCBTHXJ6EJ%2B3kEfLDE5hGwE76EqaE5GhaYoUomgDK8CEFtgYfJ9y3Nq6af2PDoIIYQi4i7C9SLusil9rTusXs3j7Kg%2BW85qPb25B9P0uxvjV5QGR5PCwKKHhXBIun93vV73KYlZJ3WHWyf2ApV1VN98JqBk96DmETf1rN71eX7Gnqodk&X-Amz-Signature=67bcf6d61382b79ff2fe244945ca803522d3130c4ffcaa903a3717793512024f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUSZ5VR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADCMN50SxNMONArMxr6Ou3cfD8%2BorJcywn4mgH4iwsKAiBLAcVuY7owHvlWW1AGdQgZQ0VIHYh94X%2BkDMMP%2FpyX2ir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMzpUZQdrHT5%2FfGJ%2BLKtwDItKLjoErnklsNiaK62SBG3FOu%2BSeqsX2GFlG0t3h2jb739lKgb1lMbMFOQaDBrMxr4XnFcuUiGaVqFwwXq7oXljFYkc5rQK6wmhoN3Lv4BjXpGPfo9DkMMYeVLTxogfGrDv1UbRoUd4BGWZYgYTbfioMDBFizVuQwll%2F8p5%2F%2BynsJYpMl6Un%2BvkF7t1lQQUJLT5rm3kbuXBeNM1ybMh1%2BH%2FQ5QN4IlkJ5DEzp7iuHJPdbg1lBd9Abar%2B6OBcJWwlmXvvcIRNarea7XjovxWzSbIJDsOYjiaJbENTNFlkHhLrzLqMtycrJ1VzvFZZglaVsFPnLIR7P%2Fg3OOI59qcWxEHbTmBfjwyoGB7VwqH7Ymb61JlvLuyJM9ixkbKSuqfcCom5mBxoATokpEHhgrCSF%2FxTZGu%2BcIykPZ0HFoMt4wBaGpca18uMd1S96kIqS6XW6OvHS55vRFyteMQ0qetUYnk7FODAHIxMK2jr2hRACBRu9g5B0UBzNPx0wmCsGrjJeQEfumCgwkRkQBTSiRt9K0hmbe%2BHaOUchVic0eoCzYUhwmKg2iEAP96Ab8os5cDBTizS6Bpvu9u7WaOatfI25bcjmxMHWs50VP4rNzaqc4t3MlFYxzCQfKp5kWwwlu3wwAY6pgHbQUYZVl2X5xzjhj69mNsB%2Bkk4a47ANeVi2yVD3yQ5RuY5nCBTHXJ6EJ%2B3kEfLDE5hGwE76EqaE5GhaYoUomgDK8CEFtgYfJ9y3Nq6af2PDoIIYQi4i7C9SLusil9rTusXs3j7Kg%2BW85qPb25B9P0uxvjV5QGR5PCwKKHhXBIun93vV73KYlZJ3WHWyf2ApV1VN98JqBk96DmETf1rN71eX7Gnqodk&X-Amz-Signature=f3b3e3ba8c1e27c1df0bfcfee56c88c37f9fd1cd7879f57ee63b69c3c0ebfc38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
