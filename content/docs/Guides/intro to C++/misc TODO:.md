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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVIOBAK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrLb0T%2BC5eW%2FLxlJ5V9Z6l7OKFZ8iPJAqgylaI5MGjNAiBS6RgkXivWBFA6vxFNmNVmaS%2FKlSdLhjCFisq3PE7nsyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM4BZ6bgt%2BCPU9PBGCKtwDHyHd%2Bs%2BancGFzKoZc%2FpA5GBZxtpVArNYVd6ZhB46sV5JRjyEnqbhMQsDf5%2B8C4VcoY5AxYH%2BIOv%2FdAWKoxzcQvlJ3XExuOEnAMz%2F8GnVAwkHx9PNAAqPR0sS0oQ8lYB1zWhTvLaTDXuIDVXlYzfJJGtWDQ7exbnacgYEmeGJQH8QwPRLkLs%2Bwu59%2BUiZMQfpPZCoWHcXFrO%2B7OV0Ocn3T1Q3WoxNPEwI0BOMmf%2Byb2c72DU%2FK0wijXyqQj52zkvQUg%2Bt0aXoPqr9V3CqdzVFGh06VRgTi%2FFJAYDmn8szwlcAubaNyVB22TnXk9mlJUqDMmf%2FjAUo433RnhjsUX0skJOEkMcQgLCLA3ZrTlctzOzSV%2BvqSQg1%2FQ1ogkfDBzefrAIPblEyNF6fERdK%2Fq4emoDy1C31j8l7035rAx6rLrH%2FrQ8Bid9NSkPymbb8QlvC%2FVxX3yhbffPKHZvfomvxb1%2FdahL7WWDN9Ek56p15yAocLrqIeObmxRqy3HSKSgtPP5JBu1WVWasOpNiRcsSGBofqRCCYY6eR3zAH6EQWhzInpSxG1mT8ukXiUjt5XaSFwxEue01Fa225oJTuZKGwkKb66ZoTIXn76YqMb5TnTZ9l8v5CfUvOVCupObgwzKm0wAY6pgEF2na%2Fq%2BuJ%2BUEHTYYDj3vwWLl8jKVhD1f8K8MALMV4Qcv8QcoQNWmgA%2BkQxwdlH%2FWoyFfgvlbOWWSaEfMu%2FKb%2FC%2FT5Mf%2FrH87sfqLGiPW9QEMFhcX1MZGMahU08u9iDftOWAR7N33BkOxRk8mRiIocDitSwert1CCftl5V4mMBG5vIj217IBixBogRzMyLRTFcdP1a9iQCOU0JgT6sGk3nxv8yjYCd&X-Amz-Signature=f75b122ef8cb4dda773d0b69505ed253ccdabd3a807dac3415bd505087f554f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVIOBAK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrLb0T%2BC5eW%2FLxlJ5V9Z6l7OKFZ8iPJAqgylaI5MGjNAiBS6RgkXivWBFA6vxFNmNVmaS%2FKlSdLhjCFisq3PE7nsyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM4BZ6bgt%2BCPU9PBGCKtwDHyHd%2Bs%2BancGFzKoZc%2FpA5GBZxtpVArNYVd6ZhB46sV5JRjyEnqbhMQsDf5%2B8C4VcoY5AxYH%2BIOv%2FdAWKoxzcQvlJ3XExuOEnAMz%2F8GnVAwkHx9PNAAqPR0sS0oQ8lYB1zWhTvLaTDXuIDVXlYzfJJGtWDQ7exbnacgYEmeGJQH8QwPRLkLs%2Bwu59%2BUiZMQfpPZCoWHcXFrO%2B7OV0Ocn3T1Q3WoxNPEwI0BOMmf%2Byb2c72DU%2FK0wijXyqQj52zkvQUg%2Bt0aXoPqr9V3CqdzVFGh06VRgTi%2FFJAYDmn8szwlcAubaNyVB22TnXk9mlJUqDMmf%2FjAUo433RnhjsUX0skJOEkMcQgLCLA3ZrTlctzOzSV%2BvqSQg1%2FQ1ogkfDBzefrAIPblEyNF6fERdK%2Fq4emoDy1C31j8l7035rAx6rLrH%2FrQ8Bid9NSkPymbb8QlvC%2FVxX3yhbffPKHZvfomvxb1%2FdahL7WWDN9Ek56p15yAocLrqIeObmxRqy3HSKSgtPP5JBu1WVWasOpNiRcsSGBofqRCCYY6eR3zAH6EQWhzInpSxG1mT8ukXiUjt5XaSFwxEue01Fa225oJTuZKGwkKb66ZoTIXn76YqMb5TnTZ9l8v5CfUvOVCupObgwzKm0wAY6pgEF2na%2Fq%2BuJ%2BUEHTYYDj3vwWLl8jKVhD1f8K8MALMV4Qcv8QcoQNWmgA%2BkQxwdlH%2FWoyFfgvlbOWWSaEfMu%2FKb%2FC%2FT5Mf%2FrH87sfqLGiPW9QEMFhcX1MZGMahU08u9iDftOWAR7N33BkOxRk8mRiIocDitSwert1CCftl5V4mMBG5vIj217IBixBogRzMyLRTFcdP1a9iQCOU0JgT6sGk3nxv8yjYCd&X-Amz-Signature=2bd1da9ecd57c6bd715ce0eab658ffbc87414adfaa59cdaf9e9a327d9cc70461&X-Amz-SignedHeaders=host&x-id=GetObject)

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
