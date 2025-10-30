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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLAYAR%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDz4FT5jEUo6mFLCpqHhy4r9QMXZCbFSy%2F9pHLBX9%2FH5QIgH1zhUkxP%2BFPCJsNqYGvmw73S3ghfOAEDnx%2B7lUG1ky8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC83SQ%2BiED%2Bz%2BFPKSrcA7oZ0Q0Hfx7%2FUrfNPyykmAwAiLY1swcu3sjFYSYO8EEGMcKJ2cugDLtAVRQqszhuJmo9utnrOHYPk%2Bsg2E6s7LELchA%2B5No0F8C%2Fd99v6kao6n7x%2B6UT547JSmBwL0o4ljL4aNVFcz24yfmQxvbOf3jvQHH%2BJkx%2F68x2DtZ%2BWBpawMPYAZNL7erMtHeYWMBFSN46%2BT3cVLPPFFM3TsIP1sB25hppyWc0Vp%2F10KEuv4JXJYWngmZYFR3UTI567EYIkmx0QeNKAAgOVG10WDwSBmVlDo0TgokZ6qcOrpfTJyl7%2FFwsfUGGIPF%2FhPb65nOZ1V0EmaTOYHmQea%2FNY0qqyS4mzG8hpdWmErcxyVjkDZiu38WMTFES%2FJF2F7MuG8Bb%2BEhN85M7hXGNJrpn1q7Dn6qMtuRG%2F1YqOqKMV0Y39VOiOknUfAeB0s9qn1ly6DiMvAYzYvYAZ3P3c%2FpdIC7r%2F6EiVEgBhvXkzJNdy9kQ7e1IVsOt%2BiFSJ%2BFC%2B8DjHnWk6XeRvj5P%2BomXSX9FI5GzK2mmRrJ4qsF8b28jlDZb4mgqfYfEJnWym2OQVOz5yoekeMSGDODV2pMDnFXxTGwqdeY5%2BYGsCsv7HWjmjRUuB%2FzNyltfgu7%2BTFvo1RGfMKn2isgGOqUB2niTfrVx9pfYgtSmw4%2F4SORY%2BKiIibIvQR%2B2mzR5Fc7aISxHH%2BmWQozxQWYyZR1kEaR4Okr8rXHf18VzxgtHg0DhUaXF7WE7GcnHkkiMoSUCPoylLgxBDJfY7aUD%2BfDCDF4k5RrHfwc4mxp%2FvyuYggYyvzRblAizGfMbZ3W10iadBTKn7e2eIZUNPuC2prbF00pBSIUyQt5ISEk71y0msxS2Od2t&X-Amz-Signature=beb1c4f32cd60059bf6f5ee2ed520f65b90689b96b3eb8aa4b4963de43fb9ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLAYAR%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDz4FT5jEUo6mFLCpqHhy4r9QMXZCbFSy%2F9pHLBX9%2FH5QIgH1zhUkxP%2BFPCJsNqYGvmw73S3ghfOAEDnx%2B7lUG1ky8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC83SQ%2BiED%2Bz%2BFPKSrcA7oZ0Q0Hfx7%2FUrfNPyykmAwAiLY1swcu3sjFYSYO8EEGMcKJ2cugDLtAVRQqszhuJmo9utnrOHYPk%2Bsg2E6s7LELchA%2B5No0F8C%2Fd99v6kao6n7x%2B6UT547JSmBwL0o4ljL4aNVFcz24yfmQxvbOf3jvQHH%2BJkx%2F68x2DtZ%2BWBpawMPYAZNL7erMtHeYWMBFSN46%2BT3cVLPPFFM3TsIP1sB25hppyWc0Vp%2F10KEuv4JXJYWngmZYFR3UTI567EYIkmx0QeNKAAgOVG10WDwSBmVlDo0TgokZ6qcOrpfTJyl7%2FFwsfUGGIPF%2FhPb65nOZ1V0EmaTOYHmQea%2FNY0qqyS4mzG8hpdWmErcxyVjkDZiu38WMTFES%2FJF2F7MuG8Bb%2BEhN85M7hXGNJrpn1q7Dn6qMtuRG%2F1YqOqKMV0Y39VOiOknUfAeB0s9qn1ly6DiMvAYzYvYAZ3P3c%2FpdIC7r%2F6EiVEgBhvXkzJNdy9kQ7e1IVsOt%2BiFSJ%2BFC%2B8DjHnWk6XeRvj5P%2BomXSX9FI5GzK2mmRrJ4qsF8b28jlDZb4mgqfYfEJnWym2OQVOz5yoekeMSGDODV2pMDnFXxTGwqdeY5%2BYGsCsv7HWjmjRUuB%2FzNyltfgu7%2BTFvo1RGfMKn2isgGOqUB2niTfrVx9pfYgtSmw4%2F4SORY%2BKiIibIvQR%2B2mzR5Fc7aISxHH%2BmWQozxQWYyZR1kEaR4Okr8rXHf18VzxgtHg0DhUaXF7WE7GcnHkkiMoSUCPoylLgxBDJfY7aUD%2BfDCDF4k5RrHfwc4mxp%2FvyuYggYyvzRblAizGfMbZ3W10iadBTKn7e2eIZUNPuC2prbF00pBSIUyQt5ISEk71y0msxS2Od2t&X-Amz-Signature=291d66e86478753deecf54427aa0bc32777891b7c4e2af278a0cec2682c3d7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
