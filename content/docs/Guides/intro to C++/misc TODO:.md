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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNH3RU6%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICL6VuZAHc2tDagqf3E3plEshxpTevtX8NfepUT5s%2BicAiEA9XRmZ0WbVYQDeXElzA7N%2Be26%2Bw4Agm9g0lX8peXZWesqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPElBqEaEDlB8jXiQircA6%2BErRQSBQzr%2FalaFfRhfISRhm0tIAvsu%2F3lMrkaEYCiug06h3fH7KI%2Ff%2FZRs2cwHJelJNTnsBNGAfip8BUqyBC2Jfy0H19wTTfG2cQvA1eiuHmDwchLc43xxMi6dZeEpUdNLcn5hiCjJKlRTz9N5IwT2Tdp%2F%2FO8VhNN7mNN37gEXzmFD%2B4cLFOzvupHZc3ili68oC%2BRDqK0gLxKoyuCjvJBqSdiZV%2Fp3ecOmO%2BWBfCGhbrf1e3CkKKhuSMb7gQCYJRYn4fu5Iq80RcheennxFrD2qkRBXWj%2F8qDDp001UhiMoyT2kX9zzAE1AArDYZ9PZP6Shqw4xMqt%2BENgw7z5qOTSX4v9pVEljyQ70FpmjYVkyrG06maQws%2F1hm7SyOfi6ha1oirkEwzMb%2FV%2F2KwaxNa0CYsTstJKWbLXTq72PTLs3yc%2B0w28ghqAgfRNmObEYLnF9fJOccl458fwCx3SxbQXtSMPOBebMxt2YOsgS890DnWROXCXdNDZpVBQLlXsWvHcTfXiC6%2Bx9L0o4Tbfq9ggGiqExaFJMxAmNsh0tWtkzfU2b%2F8RUQxJwNGuGh1zIA%2FjLZ%2FRIuDoU0zhpNU1OQco5Ae3EFWu8qTkXa1EytimYD%2BN8Td%2B%2BF8w%2BjPMIyg378GOqUBbdM4JnmlM1GIsvOVQw2%2BdLRr6qol2lGgRfGd4Q52frz1Pxg4PfhKBA4eFlCa16v%2F3RkJ1MpYC%2FW6jHLO4CcTtJhRf4PHP9%2BpklYnrUAk4Pi4nocVtvTU6xBaL2tovxeVGEzVexTtThWGGgOHEiHY4lW3JB%2B6RCBIoXIooJ%2Bqp4zdabfSdOZINj24dSPMGwQMpwIYCMq7xNQ4orTj9nA8iLRRj%2BrZ&X-Amz-Signature=f313b2dad99ed63b3004ba42053e304ae29c4b28a9968c45fadc1f387cc4ac46&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNH3RU6%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICL6VuZAHc2tDagqf3E3plEshxpTevtX8NfepUT5s%2BicAiEA9XRmZ0WbVYQDeXElzA7N%2Be26%2Bw4Agm9g0lX8peXZWesqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPElBqEaEDlB8jXiQircA6%2BErRQSBQzr%2FalaFfRhfISRhm0tIAvsu%2F3lMrkaEYCiug06h3fH7KI%2Ff%2FZRs2cwHJelJNTnsBNGAfip8BUqyBC2Jfy0H19wTTfG2cQvA1eiuHmDwchLc43xxMi6dZeEpUdNLcn5hiCjJKlRTz9N5IwT2Tdp%2F%2FO8VhNN7mNN37gEXzmFD%2B4cLFOzvupHZc3ili68oC%2BRDqK0gLxKoyuCjvJBqSdiZV%2Fp3ecOmO%2BWBfCGhbrf1e3CkKKhuSMb7gQCYJRYn4fu5Iq80RcheennxFrD2qkRBXWj%2F8qDDp001UhiMoyT2kX9zzAE1AArDYZ9PZP6Shqw4xMqt%2BENgw7z5qOTSX4v9pVEljyQ70FpmjYVkyrG06maQws%2F1hm7SyOfi6ha1oirkEwzMb%2FV%2F2KwaxNa0CYsTstJKWbLXTq72PTLs3yc%2B0w28ghqAgfRNmObEYLnF9fJOccl458fwCx3SxbQXtSMPOBebMxt2YOsgS890DnWROXCXdNDZpVBQLlXsWvHcTfXiC6%2Bx9L0o4Tbfq9ggGiqExaFJMxAmNsh0tWtkzfU2b%2F8RUQxJwNGuGh1zIA%2FjLZ%2FRIuDoU0zhpNU1OQco5Ae3EFWu8qTkXa1EytimYD%2BN8Td%2B%2BF8w%2BjPMIyg378GOqUBbdM4JnmlM1GIsvOVQw2%2BdLRr6qol2lGgRfGd4Q52frz1Pxg4PfhKBA4eFlCa16v%2F3RkJ1MpYC%2FW6jHLO4CcTtJhRf4PHP9%2BpklYnrUAk4Pi4nocVtvTU6xBaL2tovxeVGEzVexTtThWGGgOHEiHY4lW3JB%2B6RCBIoXIooJ%2Bqp4zdabfSdOZINj24dSPMGwQMpwIYCMq7xNQ4orTj9nA8iLRRj%2BrZ&X-Amz-Signature=761b94aa4c25b467f15c01cccdccb569053d8270737c3be2accc21c7880e4b97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
