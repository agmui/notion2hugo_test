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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI5GOOT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9r%2BgAyJfkKqohUKmEZXIYd9Jx2sA9wE1LJUhaa2PhbAiBzv2RPCMvxwMzSyD8fuaUNBpuNhB3jXhsxm%2B4pNalu%2FSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMa300U9xr%2BS5I8NNCKtwDOGPtCYGMxaBPLhHgVaMulF0UXPDHQuI6RC9jJcV0CdVP1oHJ%2FmYKcfXygltC7jrgofyn%2Bw3y0wLXDPbo6OlXQRuJunEXewny%2FB2cGNZMZ1YDp3uMzwKBXC%2F1E6VnvGK5JAmgzO4b95rkcEmi6G3%2F6BtBv5EGwbDljq1fHZFQnQYGRABxolmyKvPRWKDEBjuHyy4F8F01FzVfkNVL6Lxk6qpeNTMQMI1UQLfcSX%2BWXWunh1aCNsDgDJTNEpCfCjcPiEZF52zT5xMgtPU6cFdZmExM6KMk1nmxT%2BjJbgCpY07iSmbqSJemrYuPeVgwGaaWrFAaQm76ycdx1zYhNz0jzENhShg7hVb2dmqDAyupWb5NjxS%2FVMov8xLUKPoLfEOBSlayXf5Sy73OelWFPDteXpyq%2B%2FZH3hbgRLhyXHgYWVWZtoSNHXcKuJJUrGcLzFn%2BZi8l0UJtyjtZIOJRfqWgaP7d4v703c3%2FcjRqEEB3wSKFG49R%2BAQP3HmrvCCy0AZArdPVlwTqDPbAPzIS89t%2BQYu64vuecF9SjaGPRB9Q48OLi7CD0r96btpfRQ4YP9EkCY3izr2Qjh3S7jHSN7YpHFKgndJnP61iDhQaovvWcMNwx5dfSvunPfo0nZowhO3fvgY6pgGnUaUguBFJVqkJl%2BKFOtd548q1%2FxLRFmPOZBzyA%2FZ2W7emnhV83r0qXnovD7kXsBJyJU3rX2boJXIkrRhaN6d0TDy2CcRY%2BoY7TarKLGhwNZZwrDL38iAnRchn1Wiri7Ov%2F1Ne0jU2O57%2FomZsKQIGPQTUmCGGK3p7WNOCKmDCsASuo6dzZq9d0YNv5HCRba%2Fb2NYqkSxF4qFJ9zjGdn5Re57TVR%2Bc&X-Amz-Signature=1ab685204cdf170f89ef06206ae98c4f24c44cd8213708e6313faee8bc3794a4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI5GOOT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9r%2BgAyJfkKqohUKmEZXIYd9Jx2sA9wE1LJUhaa2PhbAiBzv2RPCMvxwMzSyD8fuaUNBpuNhB3jXhsxm%2B4pNalu%2FSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMa300U9xr%2BS5I8NNCKtwDOGPtCYGMxaBPLhHgVaMulF0UXPDHQuI6RC9jJcV0CdVP1oHJ%2FmYKcfXygltC7jrgofyn%2Bw3y0wLXDPbo6OlXQRuJunEXewny%2FB2cGNZMZ1YDp3uMzwKBXC%2F1E6VnvGK5JAmgzO4b95rkcEmi6G3%2F6BtBv5EGwbDljq1fHZFQnQYGRABxolmyKvPRWKDEBjuHyy4F8F01FzVfkNVL6Lxk6qpeNTMQMI1UQLfcSX%2BWXWunh1aCNsDgDJTNEpCfCjcPiEZF52zT5xMgtPU6cFdZmExM6KMk1nmxT%2BjJbgCpY07iSmbqSJemrYuPeVgwGaaWrFAaQm76ycdx1zYhNz0jzENhShg7hVb2dmqDAyupWb5NjxS%2FVMov8xLUKPoLfEOBSlayXf5Sy73OelWFPDteXpyq%2B%2FZH3hbgRLhyXHgYWVWZtoSNHXcKuJJUrGcLzFn%2BZi8l0UJtyjtZIOJRfqWgaP7d4v703c3%2FcjRqEEB3wSKFG49R%2BAQP3HmrvCCy0AZArdPVlwTqDPbAPzIS89t%2BQYu64vuecF9SjaGPRB9Q48OLi7CD0r96btpfRQ4YP9EkCY3izr2Qjh3S7jHSN7YpHFKgndJnP61iDhQaovvWcMNwx5dfSvunPfo0nZowhO3fvgY6pgGnUaUguBFJVqkJl%2BKFOtd548q1%2FxLRFmPOZBzyA%2FZ2W7emnhV83r0qXnovD7kXsBJyJU3rX2boJXIkrRhaN6d0TDy2CcRY%2BoY7TarKLGhwNZZwrDL38iAnRchn1Wiri7Ov%2F1Ne0jU2O57%2FomZsKQIGPQTUmCGGK3p7WNOCKmDCsASuo6dzZq9d0YNv5HCRba%2Fb2NYqkSxF4qFJ9zjGdn5Re57TVR%2Bc&X-Amz-Signature=3d0eb0f4e99b7e0d0551b5747dcb372ee8116950521db14eb5e7d679732510b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
