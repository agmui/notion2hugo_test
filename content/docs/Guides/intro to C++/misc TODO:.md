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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4BC2ZIM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiCti2hv35C%2B%2B6xI0H45RsMrvv1osUoRGMZ8t%2F2cRsrQIgR9KdovYOigrH59gFAvdhua0k9mXjApsGJWQkV9Q%2BLTUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVAZNwYAly7SraLNircA1%2BG8LBBTMfzLa7RSfAWYl5ghdE2rrXFxLD3xQstC3LgsanPtm78gVJjoC8bW5Bk9XGPIGY39jGbWn5l57RdkMmXSDTBOybYGLULqputaw7kCX%2B9h0QXQt7bZsZTIiHeqQ4IOdhm2UpE1mTdqDsslGUeJhqsHnRFDkZ%2FmBUnBZje1rtZ5tdiS7Ibd2uHIuw2B%2FnFYMSols455aSZCmbCo5EccOEG1upKKQA74lYJMQhnGU%2FrNgQtgPbnSxcNe1A6rEaTwbOe34lBVCuYthLNVUxJxlOvfkw%2BfNt50H9J6vFTX0DcKtRrN3gjmPwbCG0HzeMEI2DMhHtYRnVknQ%2FgDmyncmnaGqQyWpT3LHi%2BOTgUAIvi9jaNL6WjHiXaNmUvihjIE%2FSLko4Do5koUJfflxcgBV0N7%2Fisq9owLlHXoTm3DOUHSJQyDxs4dXT2bOAD6zt7VfdtzGpc5G78IphkYo%2FkuRBxEcgf88j4aBS9B9P0fXx%2F4EWW%2BVEMQDs96brpJEhxLfc5VGxSGJ2PRAZTo%2BasFEDWRWiSx%2BaQk6fYfsCmWWv6LYbIAgH%2BArmRXKWbycGnDylsmVjO%2FRRRMfggvcQTjd%2BV9%2Bq%2Bynw5DrUv52YEBCpiu%2F%2FOa5oyKJXEMJ%2Bd470GOqUB6jNEDe679HFf%2FAbblsaUgAyO48u5bs4DRdUHvEta%2FaVnH3Jnk3Cir03vSCdRs0pAsqIl3572kZgnhcTFxlBSGfSfXrbAGgrsrfqJw6vX2TnNSPojrmTKiyAbZ9AWeYZjQLSLvGd70WxhTm7mC7tUTwBetkj8%2Fr4ZO4tMdl6Td%2BX4783qGEaOv8htTaoERoAvN6EPoq9%2FsjRMXT62y3QFGEMFoKmT&X-Amz-Signature=95c7fcbbbe460693a91e854d698151f6ae624594530889e591c9041605fdc164&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4BC2ZIM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiCti2hv35C%2B%2B6xI0H45RsMrvv1osUoRGMZ8t%2F2cRsrQIgR9KdovYOigrH59gFAvdhua0k9mXjApsGJWQkV9Q%2BLTUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVAZNwYAly7SraLNircA1%2BG8LBBTMfzLa7RSfAWYl5ghdE2rrXFxLD3xQstC3LgsanPtm78gVJjoC8bW5Bk9XGPIGY39jGbWn5l57RdkMmXSDTBOybYGLULqputaw7kCX%2B9h0QXQt7bZsZTIiHeqQ4IOdhm2UpE1mTdqDsslGUeJhqsHnRFDkZ%2FmBUnBZje1rtZ5tdiS7Ibd2uHIuw2B%2FnFYMSols455aSZCmbCo5EccOEG1upKKQA74lYJMQhnGU%2FrNgQtgPbnSxcNe1A6rEaTwbOe34lBVCuYthLNVUxJxlOvfkw%2BfNt50H9J6vFTX0DcKtRrN3gjmPwbCG0HzeMEI2DMhHtYRnVknQ%2FgDmyncmnaGqQyWpT3LHi%2BOTgUAIvi9jaNL6WjHiXaNmUvihjIE%2FSLko4Do5koUJfflxcgBV0N7%2Fisq9owLlHXoTm3DOUHSJQyDxs4dXT2bOAD6zt7VfdtzGpc5G78IphkYo%2FkuRBxEcgf88j4aBS9B9P0fXx%2F4EWW%2BVEMQDs96brpJEhxLfc5VGxSGJ2PRAZTo%2BasFEDWRWiSx%2BaQk6fYfsCmWWv6LYbIAgH%2BArmRXKWbycGnDylsmVjO%2FRRRMfggvcQTjd%2BV9%2Bq%2Bynw5DrUv52YEBCpiu%2F%2FOa5oyKJXEMJ%2Bd470GOqUB6jNEDe679HFf%2FAbblsaUgAyO48u5bs4DRdUHvEta%2FaVnH3Jnk3Cir03vSCdRs0pAsqIl3572kZgnhcTFxlBSGfSfXrbAGgrsrfqJw6vX2TnNSPojrmTKiyAbZ9AWeYZjQLSLvGd70WxhTm7mC7tUTwBetkj8%2Fr4ZO4tMdl6Td%2BX4783qGEaOv8htTaoERoAvN6EPoq9%2FsjRMXT62y3QFGEMFoKmT&X-Amz-Signature=351fdee930b5ecdc6d0309082bb4e776fb69ac3b1494ada49748a8aad550e57e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
