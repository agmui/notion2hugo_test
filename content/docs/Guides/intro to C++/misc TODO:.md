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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WH47AQI%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCqpGrY%2FzQvn46begoZjiSBSuSdW9QdlUzkQiSh%2FwxV0gIgEJXzDVbekbPeSMYc1IzsB3M%2FRmI4gP6AdM0bbfIvrZ4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAavhHvvJl83Ra5qKSrcA9oGLKyPTO7qYJG3dgTXPeWjVFt7QbR%2FWlykTOVK3T9ds%2FsEx2MzAXyFuNuJrjOhBbWWn3tIHIG8fVZahOC2BhW476%2BMyX0x%2FNdKDEnlX9zL%2F75sh5Qo0KqUzaV5p3CN5dd0jjJvsT%2F59K8ZSLQ2KLHssZJe%2Bjn0%2BpEqhm%2FIuGi2VSFhBQFA6CHewnhoewFZ8UTOLz9XYq86ljle7P1%2FyAYpK9KMeTsQT3WHvW4Y7tKVqtx%2FGsFO4uMLKs6yTVLBsRTrfXzhRU%2BhuF%2FH%2BVgLBLI9MWz1XDxyg132A3%2F6h%2BOCh10c1M0mcwcCfvSWE73vvyJijOjtw8gbCc8IsXh6UWfjkneMnHsvI881PTDVyMvUsspIsd45DKfeloIqWAPXlv95pC1n8o%2F%2FvOp7qKlX3%2BMkv94PTngVM1kDICNGnyFsyNdVyugUSQybuvJ30I9vLglFeZK0%2FE9gddLoizU9zWLrNE95ONobBVERcBL19h%2BUlyMSw%2Bun2Jg62hBz95MSNabgbrt0QuyokV32abSd5Y3KOhsxuxXh1aktvFPDMwnc3%2BjTEHMwRP5Ntl7kw9vVuDbjSmA8MW6Xsze6oO%2B6Ss4qckSNPCHd7UVLxx%2Bso8W6IkJ%2BISHYRgWSBPo9MNufy8EGOqUBaVgZcczZbEa6ctg%2BdUVmiGw4peffCSXhdzJ24kctDlJ3iFbBTOybTZmqcpMYPcgq84iDFouQ1PWFayLQvV3h1hf5AswoS29QKYyFP2iDEutipG6GBIWIMy4So7OZDPbr1l%2BX45NKpXRUp%2BgsV1FQxvwDzlESwq5TxjNSTK0zgcAI72dBNW84ApQVbkdA0KOzf%2FCBc6l2AmBp9K%2FdPA20%2F%2Bzokw4k&X-Amz-Signature=d724602f6cda5dc2ada976fc40815995e195e1afb090db1914b82f2733392ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WH47AQI%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCqpGrY%2FzQvn46begoZjiSBSuSdW9QdlUzkQiSh%2FwxV0gIgEJXzDVbekbPeSMYc1IzsB3M%2FRmI4gP6AdM0bbfIvrZ4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAavhHvvJl83Ra5qKSrcA9oGLKyPTO7qYJG3dgTXPeWjVFt7QbR%2FWlykTOVK3T9ds%2FsEx2MzAXyFuNuJrjOhBbWWn3tIHIG8fVZahOC2BhW476%2BMyX0x%2FNdKDEnlX9zL%2F75sh5Qo0KqUzaV5p3CN5dd0jjJvsT%2F59K8ZSLQ2KLHssZJe%2Bjn0%2BpEqhm%2FIuGi2VSFhBQFA6CHewnhoewFZ8UTOLz9XYq86ljle7P1%2FyAYpK9KMeTsQT3WHvW4Y7tKVqtx%2FGsFO4uMLKs6yTVLBsRTrfXzhRU%2BhuF%2FH%2BVgLBLI9MWz1XDxyg132A3%2F6h%2BOCh10c1M0mcwcCfvSWE73vvyJijOjtw8gbCc8IsXh6UWfjkneMnHsvI881PTDVyMvUsspIsd45DKfeloIqWAPXlv95pC1n8o%2F%2FvOp7qKlX3%2BMkv94PTngVM1kDICNGnyFsyNdVyugUSQybuvJ30I9vLglFeZK0%2FE9gddLoizU9zWLrNE95ONobBVERcBL19h%2BUlyMSw%2Bun2Jg62hBz95MSNabgbrt0QuyokV32abSd5Y3KOhsxuxXh1aktvFPDMwnc3%2BjTEHMwRP5Ntl7kw9vVuDbjSmA8MW6Xsze6oO%2B6Ss4qckSNPCHd7UVLxx%2Bso8W6IkJ%2BISHYRgWSBPo9MNufy8EGOqUBaVgZcczZbEa6ctg%2BdUVmiGw4peffCSXhdzJ24kctDlJ3iFbBTOybTZmqcpMYPcgq84iDFouQ1PWFayLQvV3h1hf5AswoS29QKYyFP2iDEutipG6GBIWIMy4So7OZDPbr1l%2BX45NKpXRUp%2BgsV1FQxvwDzlESwq5TxjNSTK0zgcAI72dBNW84ApQVbkdA0KOzf%2FCBc6l2AmBp9K%2FdPA20%2F%2Bzokw4k&X-Amz-Signature=44eb3341272c028d8a816c165282acbfac58faa5298935bbb82b4bf2c2b0e4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
