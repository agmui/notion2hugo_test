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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SAP2VF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Rwq2DWGb6socQdTXmziQHkRvMhoJLs2bXwr38VA%2FQgIhAJ7rtfyY2fki3L4kk6PltgiMZ1OQshICoHhtv9h6NBNkKv8DCGwQABoMNjM3NDIzMTgzODA1IgyxsnyPgEoFUASkqG8q3ANTCLsk%2BiRiHE2na84RqAep6v0C9oRTNNHl4vkGrJNRtwniVkn6kJdpKCbCxw0uzhl1icIdfLpVnd%2FKA4uTahSYyZSaeEO%2BiNtarHewPwwtCAVPlZZ0UilXcPBLYu%2BkXW3WXMpw3Z1iUO8qNYqwEfrz4%2FhuhdtXISkx%2FV9OD5Kkgms7Uz72uycVO97zPR172QuvUee%2FBGiVrryv3hzi80Gxg9jRcrc7GK4ojYrIccL%2BUk%2BAe15RyZ9CdrUnWwtd842AR7DPe%2F2wWMDZBpU4kkhkPw6hM4oqNiIKLFDEO9LuZa0XzceaRSM6o1PPjbvjxZ%2BlZzL5MRZzE%2Ff3TAXUVcxFoVlEhl7vqbdkZPSbZsyW1W1%2BobncczI7rd0byhay2c21ugDInFWFEyn9g8c0KWBLqQILGUU7FoludWYqgL9HEt5HKKMkl3jiovNncsVJ0VqW%2FFihrTEWaVIrQPdNH38D%2Bg8eHTUUvKiIlL8BHYMfcvKiDQMU0qisFu6Zj0zBPmBrH0yJ9zk1lksHFTLVgzOei4bSX4JmajYpqY1ATIX7gD1Sgaf21HBZwJRfz7wkXbDfSh0ezTQy5wwy%2Fkd2vynlj5XB0rkw2JXldwwoCWh4Jb9MSv9MaAh2hbJREzD%2FntK%2FBjqkAUT3eHG5CyIsP8AVJA6nG8GU2b45m7q5k7VOBhFkbQJ5o%2FJCWqC1Waxl18SExW3UQ3bXFxRxI%2BHmyl1R9CqZg3RX6mHLqotsKE0j%2BEOWjTwY1eTK2aUjplY%2F7u6kZqzu7OfBQRCJWuPwDKSMA1lpikHtv1YBOUrVy216vVsBhbnkDZgju1W5k5nnkmDNoGyTLVGw1xQd54Cdk5Y8Vsd9BoOrqBkH&X-Amz-Signature=996f3277a51a55c59ace439f1c282f44d9d1e770ed71e1e21caa3d6ce64e7eec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SAP2VF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Rwq2DWGb6socQdTXmziQHkRvMhoJLs2bXwr38VA%2FQgIhAJ7rtfyY2fki3L4kk6PltgiMZ1OQshICoHhtv9h6NBNkKv8DCGwQABoMNjM3NDIzMTgzODA1IgyxsnyPgEoFUASkqG8q3ANTCLsk%2BiRiHE2na84RqAep6v0C9oRTNNHl4vkGrJNRtwniVkn6kJdpKCbCxw0uzhl1icIdfLpVnd%2FKA4uTahSYyZSaeEO%2BiNtarHewPwwtCAVPlZZ0UilXcPBLYu%2BkXW3WXMpw3Z1iUO8qNYqwEfrz4%2FhuhdtXISkx%2FV9OD5Kkgms7Uz72uycVO97zPR172QuvUee%2FBGiVrryv3hzi80Gxg9jRcrc7GK4ojYrIccL%2BUk%2BAe15RyZ9CdrUnWwtd842AR7DPe%2F2wWMDZBpU4kkhkPw6hM4oqNiIKLFDEO9LuZa0XzceaRSM6o1PPjbvjxZ%2BlZzL5MRZzE%2Ff3TAXUVcxFoVlEhl7vqbdkZPSbZsyW1W1%2BobncczI7rd0byhay2c21ugDInFWFEyn9g8c0KWBLqQILGUU7FoludWYqgL9HEt5HKKMkl3jiovNncsVJ0VqW%2FFihrTEWaVIrQPdNH38D%2Bg8eHTUUvKiIlL8BHYMfcvKiDQMU0qisFu6Zj0zBPmBrH0yJ9zk1lksHFTLVgzOei4bSX4JmajYpqY1ATIX7gD1Sgaf21HBZwJRfz7wkXbDfSh0ezTQy5wwy%2Fkd2vynlj5XB0rkw2JXldwwoCWh4Jb9MSv9MaAh2hbJREzD%2FntK%2FBjqkAUT3eHG5CyIsP8AVJA6nG8GU2b45m7q5k7VOBhFkbQJ5o%2FJCWqC1Waxl18SExW3UQ3bXFxRxI%2BHmyl1R9CqZg3RX6mHLqotsKE0j%2BEOWjTwY1eTK2aUjplY%2F7u6kZqzu7OfBQRCJWuPwDKSMA1lpikHtv1YBOUrVy216vVsBhbnkDZgju1W5k5nnkmDNoGyTLVGw1xQd54Cdk5Y8Vsd9BoOrqBkH&X-Amz-Signature=aa38d57e122a4206db7864458cac130a00339f738320f1c9e5c7dd4c55e47224&X-Amz-SignedHeaders=host&x-id=GetObject)

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
