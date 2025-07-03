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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI2ULNCS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDp%2FiemXM1tp4EDP7JT4MBWppI5GNMTbeDxfTY49ctTrwIgNep0q3rEQRt%2Bl9TvRSeubQK9ZeBgFPeJuvyWyVOjujQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHhJXGp20qsq5GaNPyrcA0OQsVHnaQdjmzeB9NltLGAhoTC%2BuHAmboHaI%2BgrHp3uY0%2FyqJCiNZ92wkWhOvroExDmFKsI8QIlvZP4h2bh10uGag9NswQewC9LfbvG6qj477qZ%2Bj3T9mYqre7ItjVpazjSwHJ1WIAeYbKf9MpoOUkpHKsIoGTOrbUAKHjZQTSHkXqrekGoVvBtptrCu7n3JGerjNRXzyyd4OdjdT8uyCk8SS91ctOvYAI%2BsZCyzCFP%2FXrp5b1AOzo17v2aD%2Fg53Dz8q8YgQkmdMuPvOmPfGPSaqU1T9ulDVUVjHuUTa9o8obyTH%2F9Vk4bDmm8p3DewN2kl7Sxssg1iGnUtjzNB6MgH68PcpUumzgbVTXkwmgJb8YgleEmgv8NAAyd8vn4wqx2QSnNdlEkXu0np2RZwCchQgw7YP5%2Bc9t7CnzBbjPpaweJaInnetR8Fax6k9ZOBrKU8jBodMIK8NMc%2BKGchUG8o%2B%2B%2FlHLFG7T9t6iWvS5zGeZ6Ki5YgSdCcmBzDca50vgWArcV6Sf2jZ1cvW%2BDu6LypKiOGwkUIpzqSvRQ17hHBFW%2Bavr%2FKvVz8oZrqWdVbj7zloNkd%2B7mtaRE7mScz5Vbd6W6R0nbTNRm8zNp5A4By2qeFbY1iCD9KF9CPMNKOnMMGOqUBF4Bc1ewd7mWkv0683xblI8kiwSFSpqe%2FeBcuVBYz1xOgBITsxsmgENlhsUx4EdtHAvgd4ooc5ZnnH5%2FJTFzDoC9BDaDQn%2FMhoz4x6hOL8Rx5KCRGjQsCTyXsrlvAyiVGuyzCYRbpK97s9i3YkXtrxZXd8wEDSgea3NvNL0KUZhF91ITr10iR%2FwXh8ioPwCcKFSQlX4yluhXbAvt%2BihtvnANWlcsT&X-Amz-Signature=0c0f515c0854d7d1e2a4ea93ea0415555101b4919373e23ad4b62323ff5081a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI2ULNCS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDp%2FiemXM1tp4EDP7JT4MBWppI5GNMTbeDxfTY49ctTrwIgNep0q3rEQRt%2Bl9TvRSeubQK9ZeBgFPeJuvyWyVOjujQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHhJXGp20qsq5GaNPyrcA0OQsVHnaQdjmzeB9NltLGAhoTC%2BuHAmboHaI%2BgrHp3uY0%2FyqJCiNZ92wkWhOvroExDmFKsI8QIlvZP4h2bh10uGag9NswQewC9LfbvG6qj477qZ%2Bj3T9mYqre7ItjVpazjSwHJ1WIAeYbKf9MpoOUkpHKsIoGTOrbUAKHjZQTSHkXqrekGoVvBtptrCu7n3JGerjNRXzyyd4OdjdT8uyCk8SS91ctOvYAI%2BsZCyzCFP%2FXrp5b1AOzo17v2aD%2Fg53Dz8q8YgQkmdMuPvOmPfGPSaqU1T9ulDVUVjHuUTa9o8obyTH%2F9Vk4bDmm8p3DewN2kl7Sxssg1iGnUtjzNB6MgH68PcpUumzgbVTXkwmgJb8YgleEmgv8NAAyd8vn4wqx2QSnNdlEkXu0np2RZwCchQgw7YP5%2Bc9t7CnzBbjPpaweJaInnetR8Fax6k9ZOBrKU8jBodMIK8NMc%2BKGchUG8o%2B%2B%2FlHLFG7T9t6iWvS5zGeZ6Ki5YgSdCcmBzDca50vgWArcV6Sf2jZ1cvW%2BDu6LypKiOGwkUIpzqSvRQ17hHBFW%2Bavr%2FKvVz8oZrqWdVbj7zloNkd%2B7mtaRE7mScz5Vbd6W6R0nbTNRm8zNp5A4By2qeFbY1iCD9KF9CPMNKOnMMGOqUBF4Bc1ewd7mWkv0683xblI8kiwSFSpqe%2FeBcuVBYz1xOgBITsxsmgENlhsUx4EdtHAvgd4ooc5ZnnH5%2FJTFzDoC9BDaDQn%2FMhoz4x6hOL8Rx5KCRGjQsCTyXsrlvAyiVGuyzCYRbpK97s9i3YkXtrxZXd8wEDSgea3NvNL0KUZhF91ITr10iR%2FwXh8ioPwCcKFSQlX4yluhXbAvt%2BihtvnANWlcsT&X-Amz-Signature=152cf794ebd05abcc5a21dc081575ad9ecade2ffc3becd31927c097aa0e38bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
