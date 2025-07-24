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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJ6SMEP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCKsmhI%2Fs6UPttzLCkU3lN5RngO2ZgNRVhfyDdTQgL5XgIhAN6IOOGOlldNouiEkUvspFmbvokEU0TBSo%2BlsbYpqHWuKv8DCCoQABoMNjM3NDIzMTgzODA1Igwi07wZvH1d1RmZx%2B4q3AOUcU1gqupTFC0UO0JiHL7BQFoGFWPuz6zK5f3esUTIt6WxdVHvnMGrTJKewyQV9c8MHSmyrVxHAlaXzbKh1nfMyWIZpavbWeMpfQP7w27jyMu9MsyeFj0cpsa4Ib5bKsLH59HmNOW%2F01mI4UeB2UK9RUPEgxIObPwyc7Bi0%2FPrB41RPvu6BjS5bTVMWpSsMSP8rpLfxGBAhyTVGjHyZyvvdnd%2FezxvOkjDgfml9WdsVfvPbEXUWB1ha0Cecl0NYpnmCVzgA1d3Ablq54nDZtPcwLk6LaueOvbtZRBuIO%2BSq1XnXEOYbPdhgfZlPnDZ1%2BGnRIvOyAXZXl3OYypBLygPLrhZuV8HrF%2Ba1FjlDYTOmLfwlEQAq7UwXMaPvVlSWyzEO3WY1kbGuawk6LiTQd0XLaPu0k94QGxuvxskUpkzjxHl2fM9m12ig5f9v%2BkNF5ltokckjeTHKhzgkNrDtFoukkcEh4XJzQOQmm0yXUZrbj%2BD8aQDJrnmFoVwQzR8xy2krd%2FHs5KtJ2dyTabgvyFppj0uryK3LenVWlonY0e2KrFLpWC7O9Th6DCsKlXZvuA4dovXWmlB4w01QCd1NHse8YvkRWEcZZfdXo%2Bbi712CNHnZnBH6JUO6U4wijDs6ofEBjqkATKz78CT4NbVrBrMW4NX%2BgnhJ%2BF%2BIaBgVc5q0R6KLTx4OIAdd%2FBzS%2BqFjKpU1y6yMAqgH1tBJDxaaZYLloa97SsFzXDQfvWIEuaX8t1JbSBQMdzne06xy4FiXDW1YST1OxdqRI1q66UGmp82rN4Es7mohJNMRpVjBsgcBeqqxxpAv9vZe5vMNameGX99KEXFo5PH1gFRBQd9%2BiiRV5FykkMXzcDC&X-Amz-Signature=b57b85394e09bef04649b6435c01607011adf11d096a86c16317cb535b9b21f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJ6SMEP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCKsmhI%2Fs6UPttzLCkU3lN5RngO2ZgNRVhfyDdTQgL5XgIhAN6IOOGOlldNouiEkUvspFmbvokEU0TBSo%2BlsbYpqHWuKv8DCCoQABoMNjM3NDIzMTgzODA1Igwi07wZvH1d1RmZx%2B4q3AOUcU1gqupTFC0UO0JiHL7BQFoGFWPuz6zK5f3esUTIt6WxdVHvnMGrTJKewyQV9c8MHSmyrVxHAlaXzbKh1nfMyWIZpavbWeMpfQP7w27jyMu9MsyeFj0cpsa4Ib5bKsLH59HmNOW%2F01mI4UeB2UK9RUPEgxIObPwyc7Bi0%2FPrB41RPvu6BjS5bTVMWpSsMSP8rpLfxGBAhyTVGjHyZyvvdnd%2FezxvOkjDgfml9WdsVfvPbEXUWB1ha0Cecl0NYpnmCVzgA1d3Ablq54nDZtPcwLk6LaueOvbtZRBuIO%2BSq1XnXEOYbPdhgfZlPnDZ1%2BGnRIvOyAXZXl3OYypBLygPLrhZuV8HrF%2Ba1FjlDYTOmLfwlEQAq7UwXMaPvVlSWyzEO3WY1kbGuawk6LiTQd0XLaPu0k94QGxuvxskUpkzjxHl2fM9m12ig5f9v%2BkNF5ltokckjeTHKhzgkNrDtFoukkcEh4XJzQOQmm0yXUZrbj%2BD8aQDJrnmFoVwQzR8xy2krd%2FHs5KtJ2dyTabgvyFppj0uryK3LenVWlonY0e2KrFLpWC7O9Th6DCsKlXZvuA4dovXWmlB4w01QCd1NHse8YvkRWEcZZfdXo%2Bbi712CNHnZnBH6JUO6U4wijDs6ofEBjqkATKz78CT4NbVrBrMW4NX%2BgnhJ%2BF%2BIaBgVc5q0R6KLTx4OIAdd%2FBzS%2BqFjKpU1y6yMAqgH1tBJDxaaZYLloa97SsFzXDQfvWIEuaX8t1JbSBQMdzne06xy4FiXDW1YST1OxdqRI1q66UGmp82rN4Es7mohJNMRpVjBsgcBeqqxxpAv9vZe5vMNameGX99KEXFo5PH1gFRBQd9%2BiiRV5FykkMXzcDC&X-Amz-Signature=2bfd6739c4d102986c759e730a33dd01dea19d16473be4281d3e3a84d4103ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
