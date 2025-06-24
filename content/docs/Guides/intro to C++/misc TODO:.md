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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ANAFT6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBUX9N2pc0e1qZ%2BbcuMsGMX6KpweVX1TJcrpe6ogmOmFAiAOOI%2Buu8bA9AncF8m%2BV68kvr1zMVCmy6nbICAkt78dGSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMcDxvwTgOk58ziOUTKtwDNuJ5Nmeg%2BLb5Q6UhVR1H1pa8NWX9gKjhVkvDtvbWYu2u7MQo38WyNkece7YqdYirREBcc9gx%2Bwj1nNM9WTNilrVyFm041kH%2Bbcg9RpdAbse0qyN33L6vezchnEQlmpcZJJHwcDlLasbj0Y22fL3YFsm1CA%2FwFTq1IBvWVadTJzYDunzTWrvjQIcFI%2Fh0c1DWP1UTHDJ4wXNTI%2BPz8gQwfHKVOWX4DEj%2FCweVriYdhZGZ4nOkSuIqkc%2BfC4Lxr6RgRLXEBUrFRJF6aZrmeVpHBhbo1WB2NLKt%2F%2BjrxuU45%2Fs3s2ZLf2%2FNSw0JRdSxT7IyRnHtR9KnGUX%2BC0JTZ3lMY5D2Hq3HVA8jzTjS2%2FL9WcghMIjT0KBl13iZv58o4h2FsLfxIwiLVaSx1wLgYRUpz4Q4hRBK%2BSdyQpCja7PEkvoWMB6NJfh6Ubj%2BDb0Ihpg91piLsxY1gcaYMo9l%2F1y4%2BbplPfB3HEEZdYYz3SYNa9MZ19CtMvxhfuqfj%2Be9jMRVb2EStOe3HCbADNo9InDqKyKSch%2F8zDCJGeumeBsYvFOhdL3pm%2BS7wag%2FZwtVlFz3cu996I6dlXG3tzzeYX%2FXTuaf1REQi%2Bmr9GCQ8USs6W%2B4B291jMZa%2BpT%2BUZUw0bLpwgY6pgF%2FZDMgX1XCbyVeBk2Y6ToAUCbwNW7qsiRDW8VKOqiB399cQOrHbt6p%2BCt6vGZ5XgRhamLWZigbprDC0dM5Kdijp1ku454ErN%2F%2Fygi8%2Fgndwov2AMv5iV7d9vlgULH%2B%2F%2BfzKJoHTnaJoCDbFIxdeOSA5BgMKwrUzNOUek4%2FsaqlzzGnTXaT1fpD2Be6L1A5AJtRDQnG5DgYZvdI%2FpROzp336P7kkszb&X-Amz-Signature=f047a9f0f74cc14babfe0aedfb3ed9e1e48120c92717d3c35a7ca71bd17e574b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ANAFT6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBUX9N2pc0e1qZ%2BbcuMsGMX6KpweVX1TJcrpe6ogmOmFAiAOOI%2Buu8bA9AncF8m%2BV68kvr1zMVCmy6nbICAkt78dGSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMcDxvwTgOk58ziOUTKtwDNuJ5Nmeg%2BLb5Q6UhVR1H1pa8NWX9gKjhVkvDtvbWYu2u7MQo38WyNkece7YqdYirREBcc9gx%2Bwj1nNM9WTNilrVyFm041kH%2Bbcg9RpdAbse0qyN33L6vezchnEQlmpcZJJHwcDlLasbj0Y22fL3YFsm1CA%2FwFTq1IBvWVadTJzYDunzTWrvjQIcFI%2Fh0c1DWP1UTHDJ4wXNTI%2BPz8gQwfHKVOWX4DEj%2FCweVriYdhZGZ4nOkSuIqkc%2BfC4Lxr6RgRLXEBUrFRJF6aZrmeVpHBhbo1WB2NLKt%2F%2BjrxuU45%2Fs3s2ZLf2%2FNSw0JRdSxT7IyRnHtR9KnGUX%2BC0JTZ3lMY5D2Hq3HVA8jzTjS2%2FL9WcghMIjT0KBl13iZv58o4h2FsLfxIwiLVaSx1wLgYRUpz4Q4hRBK%2BSdyQpCja7PEkvoWMB6NJfh6Ubj%2BDb0Ihpg91piLsxY1gcaYMo9l%2F1y4%2BbplPfB3HEEZdYYz3SYNa9MZ19CtMvxhfuqfj%2Be9jMRVb2EStOe3HCbADNo9InDqKyKSch%2F8zDCJGeumeBsYvFOhdL3pm%2BS7wag%2FZwtVlFz3cu996I6dlXG3tzzeYX%2FXTuaf1REQi%2Bmr9GCQ8USs6W%2B4B291jMZa%2BpT%2BUZUw0bLpwgY6pgF%2FZDMgX1XCbyVeBk2Y6ToAUCbwNW7qsiRDW8VKOqiB399cQOrHbt6p%2BCt6vGZ5XgRhamLWZigbprDC0dM5Kdijp1ku454ErN%2F%2Fygi8%2Fgndwov2AMv5iV7d9vlgULH%2B%2F%2BfzKJoHTnaJoCDbFIxdeOSA5BgMKwrUzNOUek4%2FsaqlzzGnTXaT1fpD2Be6L1A5AJtRDQnG5DgYZvdI%2FpROzp336P7kkszb&X-Amz-Signature=4c3fb68228da10a53f5ba710ec93474b477b78fc410875df39f9e96fdbb96b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
