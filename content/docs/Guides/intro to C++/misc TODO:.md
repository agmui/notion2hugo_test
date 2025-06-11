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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIDBISX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFrTAPYdMVMf6qs3y6QusXafe6q%2BoMhiz9kpOZVjkwafAiEAiCNQuSz%2B0NOdTOQCCzDVnPvjz%2BOjNaux1hHJNOdyq5AqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMELiimLBJcV1CzqdircA7DfDXjwXmUALpoM2Yen08ptH5KCXMjkHasOtNumqznvLOc2Zix3StiF9%2BKrp%2BBcDzjDSqgW3uBOHUlZoCEja%2FpCJrJIuFv2v38oQSEqfh65N2yW3RGGaf3SZDrvloq3xAblCP97nq%2F%2B9sXDs5lvQ4SGg9204WChS90BSlYP9DoxwwTQu7JiBBgx9JdN0EkVQibIj%2FkOUwsNPoDhfzRDIudaiYY3Ms5zP9uTnIX1a5dGZfCyxirR97Qjls8SR4G3ofCxQA0S5v7FGz8FHblVT2EdmHvZrrxTciUOdKPQ8waN4%2Bay9QZMs9%2BEft88nVb6YDkvcEDlho8eNn0t7iPYnU73e44oaoEigzTsSG1ZdETOEd18AHIr4gEjZQ5psP2SWsg0DsJa3AQdkVa0Flh%2FIsu1c4tv6qNwX5C7h5Yf%2BqriVrJ%2F2kL67Fu5A%2B7M86RZh8PCdOyOB%2Bwdklxow6fFtF94%2Fzro68fSSzAk%2F7hwZa654IXvGAJUWxFuoktKylc8898rzFExgQszB%2BnxQKo0BWwmLnX2LsYoSQdVofPvVRsF2eb7Zsq6ftZorL8%2BNTmdEpiYQ2kl5x2BU6nTSZ%2FgtHB31HIJ6xKCNj83M83n77nAdCn4LKGhxjMp0O%2B6MJ%2FIp8IGOqUBHx8Hpug7whOIoI9oSkmWX46zwLOwFTWnfYPAOmU%2BJCoTAmKKUjpm7Rj2TRKPAFXg8XJ%2B3d7JbOsPekC8xlr8bVDZRbYJJXym31%2F3iEQIBZIpZA8BRG%2FffWh5LmSbDosd%2BsPP55dOTDDxYqbXyOwfTETan%2Fnn3bV76yUz9Df5KiP%2B0%2FHrM2cq8IkCCbT378Yu4D4mNDo1%2BXA6dE6xaxqRLQo8qb%2FC&X-Amz-Signature=e50fe9d16ee7d1721cd785480e920f64801366698cd3f7edf40372091646f313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIDBISX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFrTAPYdMVMf6qs3y6QusXafe6q%2BoMhiz9kpOZVjkwafAiEAiCNQuSz%2B0NOdTOQCCzDVnPvjz%2BOjNaux1hHJNOdyq5AqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMELiimLBJcV1CzqdircA7DfDXjwXmUALpoM2Yen08ptH5KCXMjkHasOtNumqznvLOc2Zix3StiF9%2BKrp%2BBcDzjDSqgW3uBOHUlZoCEja%2FpCJrJIuFv2v38oQSEqfh65N2yW3RGGaf3SZDrvloq3xAblCP97nq%2F%2B9sXDs5lvQ4SGg9204WChS90BSlYP9DoxwwTQu7JiBBgx9JdN0EkVQibIj%2FkOUwsNPoDhfzRDIudaiYY3Ms5zP9uTnIX1a5dGZfCyxirR97Qjls8SR4G3ofCxQA0S5v7FGz8FHblVT2EdmHvZrrxTciUOdKPQ8waN4%2Bay9QZMs9%2BEft88nVb6YDkvcEDlho8eNn0t7iPYnU73e44oaoEigzTsSG1ZdETOEd18AHIr4gEjZQ5psP2SWsg0DsJa3AQdkVa0Flh%2FIsu1c4tv6qNwX5C7h5Yf%2BqriVrJ%2F2kL67Fu5A%2B7M86RZh8PCdOyOB%2Bwdklxow6fFtF94%2Fzro68fSSzAk%2F7hwZa654IXvGAJUWxFuoktKylc8898rzFExgQszB%2BnxQKo0BWwmLnX2LsYoSQdVofPvVRsF2eb7Zsq6ftZorL8%2BNTmdEpiYQ2kl5x2BU6nTSZ%2FgtHB31HIJ6xKCNj83M83n77nAdCn4LKGhxjMp0O%2B6MJ%2FIp8IGOqUBHx8Hpug7whOIoI9oSkmWX46zwLOwFTWnfYPAOmU%2BJCoTAmKKUjpm7Rj2TRKPAFXg8XJ%2B3d7JbOsPekC8xlr8bVDZRbYJJXym31%2F3iEQIBZIpZA8BRG%2FffWh5LmSbDosd%2BsPP55dOTDDxYqbXyOwfTETan%2Fnn3bV76yUz9Df5KiP%2B0%2FHrM2cq8IkCCbT378Yu4D4mNDo1%2BXA6dE6xaxqRLQo8qb%2FC&X-Amz-Signature=b52afcd9ce5b111a8ee5e67d878a7fb55226dc5f20befa0e69d35b73c1ffecc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
