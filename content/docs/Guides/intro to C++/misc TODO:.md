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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7VF4GW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDA3%2FwFNMn8UXMj81um%2FDd%2FgUMTOSqDnNQJ3n8E6PaWogIhAPfghzhxLEqaoSseVkRjqs01zODxHwd8t419QlxMlo7gKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCBhXNkr1LLYc3CEYq3AM2TF7SAYEiBwxG3DjHG1TrlqY3fTcuR7usT%2F90cOxS7OlXEB7nzPmoosdITGui%2BOgb2b9jORdsh3QhCfCL01toomgCQCkZrnSuNR1kgHW2XNyPTZdJiSRPnu3fNllkRBOZsyXrccRLYH1JrfopHQBolsc6GSm7wNmwj6f8KQfol941dXzdviROFP0s0haJIQJ9aUE3qKdQoZtTENkMnKfVO648rpxsknX4uJScE8ikkROiAt30jNb8vtR7JEoWEdIkN%2FUaP%2FJqCMAJfonTw10P527xtZpentevOYG8KJOL5k5tPb%2FgyZCbjGMBI1HQHwKrEhpebcDZb4FfKQAvKxXQ2Z2pAV8oS0l9OArmOw4E2NTjghMVVPLUyfm4vk7kKfjzFTwL4GzaqX5ZNbrh5usnVeWcquo4%2FScMHR8PhgAutVWByP4YNSSH7NVJe%2B%2BCrYwCZr8qq9TgkY%2BHbTJoBw%2FT9%2FLxMbz%2F66KN1jOHKKIvJwn%2B3mOUKaYuYwN27%2Bshxk4dZlihUro2s82JgmNAOYcgj11qMwh9FCVmI5b1iDbdRRH0eKSV28j2aCnK6HMVTfoDToYxeY2Tr8HEZfhndsCWBBYjuCYxnEw3mugd%2FUyxnoQeVkr9TSxQf0DxKTCpr8u9BjqkAWgC1shWp6sv2F2QTFlFC%2BM7DWA%2B2EoiJrEQXQpiXURjLh5rzNLBzv8Tula5l%2F1xtxinMb0U2Ouv4bVQZCtGKrkA6f3PXBuNapJ43SWdvhbLwfH1g%2FCTss5VASQUXteO7VyVG0TxQ6R2y4VO%2BrlTTGxMffhzDrTp4%2Bsktxbry%2BQYS2G%2BvHO7i9%2F6rKltHhkQw3v1kuZb3MvdZIJ0EoQfZJ5JfrhP&X-Amz-Signature=8a1c2e8828b613e9745e68a8887af697c5b53d97b1e46f71f2bb9cc6b8a81657&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7VF4GW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDA3%2FwFNMn8UXMj81um%2FDd%2FgUMTOSqDnNQJ3n8E6PaWogIhAPfghzhxLEqaoSseVkRjqs01zODxHwd8t419QlxMlo7gKv8DCHAQABoMNjM3NDIzMTgzODA1IgyCBhXNkr1LLYc3CEYq3AM2TF7SAYEiBwxG3DjHG1TrlqY3fTcuR7usT%2F90cOxS7OlXEB7nzPmoosdITGui%2BOgb2b9jORdsh3QhCfCL01toomgCQCkZrnSuNR1kgHW2XNyPTZdJiSRPnu3fNllkRBOZsyXrccRLYH1JrfopHQBolsc6GSm7wNmwj6f8KQfol941dXzdviROFP0s0haJIQJ9aUE3qKdQoZtTENkMnKfVO648rpxsknX4uJScE8ikkROiAt30jNb8vtR7JEoWEdIkN%2FUaP%2FJqCMAJfonTw10P527xtZpentevOYG8KJOL5k5tPb%2FgyZCbjGMBI1HQHwKrEhpebcDZb4FfKQAvKxXQ2Z2pAV8oS0l9OArmOw4E2NTjghMVVPLUyfm4vk7kKfjzFTwL4GzaqX5ZNbrh5usnVeWcquo4%2FScMHR8PhgAutVWByP4YNSSH7NVJe%2B%2BCrYwCZr8qq9TgkY%2BHbTJoBw%2FT9%2FLxMbz%2F66KN1jOHKKIvJwn%2B3mOUKaYuYwN27%2Bshxk4dZlihUro2s82JgmNAOYcgj11qMwh9FCVmI5b1iDbdRRH0eKSV28j2aCnK6HMVTfoDToYxeY2Tr8HEZfhndsCWBBYjuCYxnEw3mugd%2FUyxnoQeVkr9TSxQf0DxKTCpr8u9BjqkAWgC1shWp6sv2F2QTFlFC%2BM7DWA%2B2EoiJrEQXQpiXURjLh5rzNLBzv8Tula5l%2F1xtxinMb0U2Ouv4bVQZCtGKrkA6f3PXBuNapJ43SWdvhbLwfH1g%2FCTss5VASQUXteO7VyVG0TxQ6R2y4VO%2BrlTTGxMffhzDrTp4%2Bsktxbry%2BQYS2G%2BvHO7i9%2F6rKltHhkQw3v1kuZb3MvdZIJ0EoQfZJ5JfrhP&X-Amz-Signature=1b149222b0f48114733942d9c742c1d81ad10d956c9c22a698ca8f6265dda2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
