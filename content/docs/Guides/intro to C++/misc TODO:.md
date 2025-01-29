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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLITIR3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALa1SR89Ugra%2BzQWetKWfbiUBGXh%2Fh%2Ff433Shrc5GeLAiBg61i5q7QQ5j4xBhNNfZPfWBvTwVeGRtEk6CP%2FXTvpZSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvupK8DUTkzQDba%2F0KtwDETXgzUwv0SvtlBc1xWYOs6fa%2BxAnscRs%2FC6%2Bk%2F8dX5BDuYCTib%2BamtfjJsQsDuKZH66ZycboHZZAnr0RzhBfoj%2BrYDIUXH5yrvUv4EXnbrFW6lG3VMs%2Fr5LIsDank22%2BhTn3GROHbjd8SX5nuh5WFf455bTxa8fMPPRYgkkMSi1QRkaR%2BEVDz3QEXfRl1NntEPq3%2B2mVgF6fy9JZUUi2MqkLxu2JRlMMYDGYfivyn1BBjoXXLBFuLQX6Ki5dRjhlX2tx0h%2BsQKzdRXAIABNz%2FzrTpEgSxjcp0GBZHg9JA2DHy2GWpr%2BA26EdsCrpJop2PRXlwfdaYWEf6nMspn%2F6Wb9G%2BmAjN4m3Data%2FogL7EQmec%2BvPbLOpp5GPiGTRIxmbKozr1v50uceoewkQDf%2B6epYsvULlBj0DQMb7OZjXzXR1oFw9BeCukn%2FutJ6RW%2F8l7TJTe77FHfnRVmsx4WBdGgsRrEvryCbfm%2FnFEVbhmW%2BxxnlGTd%2F2L7hqZJnJG58SqZ%2FH%2B51GVX%2BwgV0DEyxbtq3MinSfHhhslPiEJYxwaIy%2FUGiPhtojRRWYQjVjTtY2tKf7LnhzL7FXo6LzSw6w47DOrrxALcxUkfgoz2IpwZvnT3FdOd38SbQ9B8w2YXpvAY6pgHYtTJcnPcyVuQPmE6ImChK4ebpakWoqCjpSuoOXZ4s3KyzE0b5eA7ssYAowZBgcaOwbM7njUloh2wRY%2FShvYW6s%2BPtFgcn6ENmxq%2Bo9TmNOzqilzZ7YnpBpK3X4TSKs8bLOtT7bIpgTI34o6ib62md9yz55xl0%2BphaOFIHfy%2FDpf0XOetC57FJo024ozlOISa0GTHhrTU57E67xVQ4gSXraty65J5K&X-Amz-Signature=300d871cba89d9e06d9277bce9275a132f083f8f3d9c3ee20f5e5fc35319f81c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLITIR3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALa1SR89Ugra%2BzQWetKWfbiUBGXh%2Fh%2Ff433Shrc5GeLAiBg61i5q7QQ5j4xBhNNfZPfWBvTwVeGRtEk6CP%2FXTvpZSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvupK8DUTkzQDba%2F0KtwDETXgzUwv0SvtlBc1xWYOs6fa%2BxAnscRs%2FC6%2Bk%2F8dX5BDuYCTib%2BamtfjJsQsDuKZH66ZycboHZZAnr0RzhBfoj%2BrYDIUXH5yrvUv4EXnbrFW6lG3VMs%2Fr5LIsDank22%2BhTn3GROHbjd8SX5nuh5WFf455bTxa8fMPPRYgkkMSi1QRkaR%2BEVDz3QEXfRl1NntEPq3%2B2mVgF6fy9JZUUi2MqkLxu2JRlMMYDGYfivyn1BBjoXXLBFuLQX6Ki5dRjhlX2tx0h%2BsQKzdRXAIABNz%2FzrTpEgSxjcp0GBZHg9JA2DHy2GWpr%2BA26EdsCrpJop2PRXlwfdaYWEf6nMspn%2F6Wb9G%2BmAjN4m3Data%2FogL7EQmec%2BvPbLOpp5GPiGTRIxmbKozr1v50uceoewkQDf%2B6epYsvULlBj0DQMb7OZjXzXR1oFw9BeCukn%2FutJ6RW%2F8l7TJTe77FHfnRVmsx4WBdGgsRrEvryCbfm%2FnFEVbhmW%2BxxnlGTd%2F2L7hqZJnJG58SqZ%2FH%2B51GVX%2BwgV0DEyxbtq3MinSfHhhslPiEJYxwaIy%2FUGiPhtojRRWYQjVjTtY2tKf7LnhzL7FXo6LzSw6w47DOrrxALcxUkfgoz2IpwZvnT3FdOd38SbQ9B8w2YXpvAY6pgHYtTJcnPcyVuQPmE6ImChK4ebpakWoqCjpSuoOXZ4s3KyzE0b5eA7ssYAowZBgcaOwbM7njUloh2wRY%2FShvYW6s%2BPtFgcn6ENmxq%2Bo9TmNOzqilzZ7YnpBpK3X4TSKs8bLOtT7bIpgTI34o6ib62md9yz55xl0%2BphaOFIHfy%2FDpf0XOetC57FJo024ozlOISa0GTHhrTU57E67xVQ4gSXraty65J5K&X-Amz-Signature=f6a6864c01b43e5e7b6cef06f2da672b8b6e7ec3b38e01268500f61bcc415ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
