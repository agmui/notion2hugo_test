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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFEWTIL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVcxjWT%2FxlUeeOp8So8M20pW%2B0jI%2BW%2Fjmj8AxdsofsvwIgU8InphRVc1n77XlfOL0su1cqAmtAgLJFiisvty%2FHYXcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkopJEMM3UMiqZQjCrcA8sojcfkfOHqyuZtQHBRH%2BqPH2Kr8SXXNAsYc7BiggA1O3zar6sEQW77p7TdVr7p6YIbc6A1GqNXCcfNw8n7f7XcJzrAtPl9MNfMX%2Byslns9XQ%2FpxZATk35jfocCBfDAHQ7e2okmj%2FwzN6QtzJMsGOunmjC3abrSLeqhiSf45ojM42PsFYYrFMhuemT%2FTGzj9G8vd%2FWNpRvgFUlKNfWL2qvBUR3Fr4fbSMfN6nhNhNh4HiT1bMaUVrKsDvtRanv0SCakjojTtPzykzyX2t66MK882tDLd%2FeLWlbhrZnQbFyYqjQb0V47BmGl4JfEti6Gyb4pI6%2FiscCyHbw6WA7soGJHAECHubWxOh%2B8dVap6e%2FDP%2B7aGDQAfQ5hnv0ddHVFKKtBIsXRv9cDCvdoFFpcWXWPhwBCwz37wrCIWtWQaz%2B8SlzN4iOEU5ZrRThRGjYJcaO7vaOscL5TAhUYHTy%2FAtOVIo9fHoThNkfFCqEOR5y2mNp9%2BwaZ3d9xF6Y1IJ2rTfL8qK3zJIqYsQZ4PS5HpUUYCzPRYjYYL%2B8DrHWPleRcfOSG6z82Ja5ro66sdeN7brFWltJZzPKmJNzPsvMYrEOrqLgrydUTI%2BuqDZev9%2B%2BLM6JJfv5Fd6ZK3r86MJitsr0GOqUBe6ht70DC5IAzMg6OprLyCRQzSjfZLHOGlE3e9NNzT4TSfdW3mL0C81wgxwGgkFvATaao8ecSLll%2B4gw4bG8YPSzGjpGQhFSA%2B3bDMIVYd08GyE%2BOlmimY8hAWgCi1DfYEZGsWwNkwYZ2Yz%2Ffq1fFiNbNzCADs6MV1Of3e3RSTUvQH7MLAGJ8bOtuwMMjGPtjMIxoTnszOeMbGp2TFxMrnJKyTMpO&X-Amz-Signature=b5da0e0ec2c9dbbf879fd29f0ab3b2c085595c9735bdd2c87626489785ca6f95&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFEWTIL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVcxjWT%2FxlUeeOp8So8M20pW%2B0jI%2BW%2Fjmj8AxdsofsvwIgU8InphRVc1n77XlfOL0su1cqAmtAgLJFiisvty%2FHYXcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkopJEMM3UMiqZQjCrcA8sojcfkfOHqyuZtQHBRH%2BqPH2Kr8SXXNAsYc7BiggA1O3zar6sEQW77p7TdVr7p6YIbc6A1GqNXCcfNw8n7f7XcJzrAtPl9MNfMX%2Byslns9XQ%2FpxZATk35jfocCBfDAHQ7e2okmj%2FwzN6QtzJMsGOunmjC3abrSLeqhiSf45ojM42PsFYYrFMhuemT%2FTGzj9G8vd%2FWNpRvgFUlKNfWL2qvBUR3Fr4fbSMfN6nhNhNh4HiT1bMaUVrKsDvtRanv0SCakjojTtPzykzyX2t66MK882tDLd%2FeLWlbhrZnQbFyYqjQb0V47BmGl4JfEti6Gyb4pI6%2FiscCyHbw6WA7soGJHAECHubWxOh%2B8dVap6e%2FDP%2B7aGDQAfQ5hnv0ddHVFKKtBIsXRv9cDCvdoFFpcWXWPhwBCwz37wrCIWtWQaz%2B8SlzN4iOEU5ZrRThRGjYJcaO7vaOscL5TAhUYHTy%2FAtOVIo9fHoThNkfFCqEOR5y2mNp9%2BwaZ3d9xF6Y1IJ2rTfL8qK3zJIqYsQZ4PS5HpUUYCzPRYjYYL%2B8DrHWPleRcfOSG6z82Ja5ro66sdeN7brFWltJZzPKmJNzPsvMYrEOrqLgrydUTI%2BuqDZev9%2B%2BLM6JJfv5Fd6ZK3r86MJitsr0GOqUBe6ht70DC5IAzMg6OprLyCRQzSjfZLHOGlE3e9NNzT4TSfdW3mL0C81wgxwGgkFvATaao8ecSLll%2B4gw4bG8YPSzGjpGQhFSA%2B3bDMIVYd08GyE%2BOlmimY8hAWgCi1DfYEZGsWwNkwYZ2Yz%2Ffq1fFiNbNzCADs6MV1Of3e3RSTUvQH7MLAGJ8bOtuwMMjGPtjMIxoTnszOeMbGp2TFxMrnJKyTMpO&X-Amz-Signature=7899f6456086c256fee2e68fcfb046743f92b599046fdb2f4500ea39841880e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
