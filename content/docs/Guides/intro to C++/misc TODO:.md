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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIL4F7EW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDffHu2D1UqUW%2Bx3dr0uauOst6wyCSEu8kQ9Yoj6%2F8XZAIgJeJ2B70loP0dcH2ex9G%2BOojYCp6TMIkaZF8BH1n5wuIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgMqfVcswrINqX0YircA2CmOCOcxkwE0l7Bd%2FItTK7BJDUBm1WO4epu2ffs5MBS46vUl6gzPUZZvd8qgEfOq7Al2yPcnaBbYWsbzgBr4WmQgCdLvq75Y4yVqoDQ9UCwZv9YvJpDqnnUrrxaDBTIPbRciYOXV%2BxmvzCVxN%2B32l4ky3BYDnYiSBLo6en5R%2BXcgEoPC%2FkIsMrd%2FR86knzun4FYvZpjp90mtIKonTDQ3Qf6Xfz7MjZ2QnLvp160e6ItUYL%2BZwjh%2FusV%2BveLR1BD%2BBQmO1J6kjgkVH8jgB%2BUMd9om1VN2SMBKIVDGm5I3hLHbQXTcB2U6wG3h5xW2PnS1LVZOr8qrOE2AkpaXFUXod5INi1yc%2BWvstr27hz66l6kSYeaURrCIJ%2BpU6RtWj0S0T8A28oiakc3DXYt6F3GspxbSF0iTYzAvQ7vVEzr9GkB8maGX4QALfsfS%2F5TswZMmZHvpGLADO2RJg6gP2ECrKW2D2msGbbGHDQPx0gDhRsH0xjgWEwkXsdZ2uyf58hdAWF52OOwA72uL54p6yl4la0%2BNb0MGgY8%2BhshiC1l%2BxGvJg5%2FaLWY2SGCjQtGUcY%2BRnvTeNtXplHLc2%2FoCe%2BT4CoF8OpG%2BczSXaDzX4AQedt5Xs6CD7edZ%2BSJo6TeMJihyMIGOqUBVs7vNB5Ids036VQnfanUHen%2Ff0T4jC6Rry%2Fs4tiDsmUD8KVgJRJdzag4ocLNl7SCYd7jZQA20jUoqEhGXzi0w29AIyBSzC2hFlPTUDxYw45B4o%2FCLwE5qbiXu20zx%2FA4gDaOzZOymrVIuSquJ6xfyrc7xAMUJrspvGDhB1gDTZiT7R3wz1rCm4qAu%2BhdxrSM4wRbKvlvDs%2BFwZ3hCUYaKaT3Z8Wl&X-Amz-Signature=c224400797aff23c0776bed542ec70e4bf491def43586d13790b83768d983384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIL4F7EW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDffHu2D1UqUW%2Bx3dr0uauOst6wyCSEu8kQ9Yoj6%2F8XZAIgJeJ2B70loP0dcH2ex9G%2BOojYCp6TMIkaZF8BH1n5wuIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgMqfVcswrINqX0YircA2CmOCOcxkwE0l7Bd%2FItTK7BJDUBm1WO4epu2ffs5MBS46vUl6gzPUZZvd8qgEfOq7Al2yPcnaBbYWsbzgBr4WmQgCdLvq75Y4yVqoDQ9UCwZv9YvJpDqnnUrrxaDBTIPbRciYOXV%2BxmvzCVxN%2B32l4ky3BYDnYiSBLo6en5R%2BXcgEoPC%2FkIsMrd%2FR86knzun4FYvZpjp90mtIKonTDQ3Qf6Xfz7MjZ2QnLvp160e6ItUYL%2BZwjh%2FusV%2BveLR1BD%2BBQmO1J6kjgkVH8jgB%2BUMd9om1VN2SMBKIVDGm5I3hLHbQXTcB2U6wG3h5xW2PnS1LVZOr8qrOE2AkpaXFUXod5INi1yc%2BWvstr27hz66l6kSYeaURrCIJ%2BpU6RtWj0S0T8A28oiakc3DXYt6F3GspxbSF0iTYzAvQ7vVEzr9GkB8maGX4QALfsfS%2F5TswZMmZHvpGLADO2RJg6gP2ECrKW2D2msGbbGHDQPx0gDhRsH0xjgWEwkXsdZ2uyf58hdAWF52OOwA72uL54p6yl4la0%2BNb0MGgY8%2BhshiC1l%2BxGvJg5%2FaLWY2SGCjQtGUcY%2BRnvTeNtXplHLc2%2FoCe%2BT4CoF8OpG%2BczSXaDzX4AQedt5Xs6CD7edZ%2BSJo6TeMJihyMIGOqUBVs7vNB5Ids036VQnfanUHen%2Ff0T4jC6Rry%2Fs4tiDsmUD8KVgJRJdzag4ocLNl7SCYd7jZQA20jUoqEhGXzi0w29AIyBSzC2hFlPTUDxYw45B4o%2FCLwE5qbiXu20zx%2FA4gDaOzZOymrVIuSquJ6xfyrc7xAMUJrspvGDhB1gDTZiT7R3wz1rCm4qAu%2BhdxrSM4wRbKvlvDs%2BFwZ3hCUYaKaT3Z8Wl&X-Amz-Signature=8a48d4e2a18430e1e03441c570f25e3c95f7629c1c8c09e558ca3a6e1ff8324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
