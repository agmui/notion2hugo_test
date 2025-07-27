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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHGKUCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBHyUJQp0IHFfffXKJV%2FZzxIavcamhtPuFl2%2Fr75WFvJAiAaJB5QZ5RXO6ylK7o%2FofvhocWol4gx%2FY2rpziARClmdCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMoyrRa2M3LdZzn6uRKtwD4ogIKkQbSdbecKhQWRKjp6mkDMzkVNg2BXjTt%2BaMAAmcM9%2FHJyGMH5WLNGrFk4UxEO3j22scLUS8jY6VkORkDprNyFBAfS%2B0DtaN5uhOxRGCB5BKUyFTyYFG89epkMXv%2BnV96J1wk2QOxiIDVWssP%2BPobutzJqKlQw1EZJtPID23y3UFmIK2pU6DGASFgJrSrVMHEeGhoRK1vJJLvgYzbE%2FMjZyPkp9FZDj3aMUNLRPlt8NxZeYwv7fbpfu3HZ91SRKEqkKTwcnUpXw4%2B2loF25iH7goLUX5G9JiBXYh1g5s3Ulw3O6BD1clK6OnulkpmtN33OgORGhOQisWYSOloOjfLuJT57IlLPggasHfoDRrrpPLIpM%2BP8jW85G1E5B3%2F2ZJxOZxt6BA1TKsnyEA0wkyPcmrqfnxKLm71ThuAQg3hzOHFNhHXt4uNq4XAadtUiMstR6y0bsPqUOFUN3OKNPErQ2mX5o6DIRAG9BeXGD0Fb1fjF9u6MjgcXTAyX0pax0SyocIQ7xAyeeSYTXwAky0KvEckG6o22Dy8cGVK4nP53RFFfigDovd0Yd7d2YpCWUgGYBTwiACwUjNkqsWfvRa7hnVo%2BZwqLRxkF1nYgFR6vEhkVHjUmiUE4ww5f%2BYxAY6pgEVlLS%2Boz%2BpEcXjYxIKknKxZs5oqT4Cy%2B5%2BahLN8NoU%2FOfTOjKONs5Zaze%2FwQ0fTnu5Owo7nUvCEnPsaZhauUIJU1sOQg%2B8zU2eDzjztHOlFI6G7onUb8vwLZNC6Vpy6m2anNiQd81g%2BXxK5%2B60WX2rWAbyXMlqdDOVadT6PD9EwcRjIPf8LP9orcbn%2BjH8mm8%2BykQp6sN76ZAg1jk6OOGiSFivpaI%2F&X-Amz-Signature=a4139622991a746d08760c6b7f6cf5a2b887fa4d154cf29a620cf0176d8082cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHGKUCW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBHyUJQp0IHFfffXKJV%2FZzxIavcamhtPuFl2%2Fr75WFvJAiAaJB5QZ5RXO6ylK7o%2FofvhocWol4gx%2FY2rpziARClmdCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMoyrRa2M3LdZzn6uRKtwD4ogIKkQbSdbecKhQWRKjp6mkDMzkVNg2BXjTt%2BaMAAmcM9%2FHJyGMH5WLNGrFk4UxEO3j22scLUS8jY6VkORkDprNyFBAfS%2B0DtaN5uhOxRGCB5BKUyFTyYFG89epkMXv%2BnV96J1wk2QOxiIDVWssP%2BPobutzJqKlQw1EZJtPID23y3UFmIK2pU6DGASFgJrSrVMHEeGhoRK1vJJLvgYzbE%2FMjZyPkp9FZDj3aMUNLRPlt8NxZeYwv7fbpfu3HZ91SRKEqkKTwcnUpXw4%2B2loF25iH7goLUX5G9JiBXYh1g5s3Ulw3O6BD1clK6OnulkpmtN33OgORGhOQisWYSOloOjfLuJT57IlLPggasHfoDRrrpPLIpM%2BP8jW85G1E5B3%2F2ZJxOZxt6BA1TKsnyEA0wkyPcmrqfnxKLm71ThuAQg3hzOHFNhHXt4uNq4XAadtUiMstR6y0bsPqUOFUN3OKNPErQ2mX5o6DIRAG9BeXGD0Fb1fjF9u6MjgcXTAyX0pax0SyocIQ7xAyeeSYTXwAky0KvEckG6o22Dy8cGVK4nP53RFFfigDovd0Yd7d2YpCWUgGYBTwiACwUjNkqsWfvRa7hnVo%2BZwqLRxkF1nYgFR6vEhkVHjUmiUE4ww5f%2BYxAY6pgEVlLS%2Boz%2BpEcXjYxIKknKxZs5oqT4Cy%2B5%2BahLN8NoU%2FOfTOjKONs5Zaze%2FwQ0fTnu5Owo7nUvCEnPsaZhauUIJU1sOQg%2B8zU2eDzjztHOlFI6G7onUb8vwLZNC6Vpy6m2anNiQd81g%2BXxK5%2B60WX2rWAbyXMlqdDOVadT6PD9EwcRjIPf8LP9orcbn%2BjH8mm8%2BykQp6sN76ZAg1jk6OOGiSFivpaI%2F&X-Amz-Signature=43357caf975d437414531b5673e1c0cbce3793075d1c4bb0a00c5308f00a5b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
