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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJFDGKSS%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5tuWhvmL2Bi5CVaIIVYDBslPYeXeAYK%2F6KCdiQ9pw8AIgc7OCpdKFFt%2BLXUwuTRBaqC1eRQSCuw0rzFjm%2FKX8L6MqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWxcqw8WvZ4rGVHUCrcA5PNCbRz4r8MtpcW%2B59bq%2FHykPmWEFR6gbmnfgseF5ZXPnfFBl6o8OOEGlpy5i3NTJkZY6Q87IjpbXpuF4aUryLlF6o%2BAoqPCzVt%2B2q6b7xXakj2%2Bn0%2Ftk6It6Qu%2BK6eT0JQtRiidsIyjZe6n%2BIhH8WjIwQstU1A9yvYfkOI7cqOLEbo%2FyVLzNicWOm3VbgRmzcIimwk75hp2%2BsmF55D6MBYDBmOKMgKhG5NeEqm51oNDd4hLrgEg7nOvxM%2BWfHl9DHzVBH%2Fc%2BZWvGPM6GgJH1FUQ2CjY4SDIzfqCMXq7jrpTp57RoB0zeWqBCzx9zwl6e1bOfD7M5VYjZB6bLBkwtVLrMVZT3B%2BdsI6Tp5EOd7iBEE156kqdE2A6CZvNsnRWXIm%2BAgZ1cyW76jfCWcOAdbhxYwTdU8j%2BRznRzcpBlDwX6r4YtymYZ3doFe5bdSpUOSCQg13qqACJ84QjW5GiRDJkIjd4sz1hKX%2FWAmeP1zN%2FSAnqEZbanCLkGUzNGmso%2BdYfXdXIAfLaA7o3t8WiQ61uQ8lMRG2od2af54c5QiGydRCZ4mC0Lh8mv8gzxmrtTdXt4rU3rdOWYfP2I4%2F8mW8S%2BWFT1x7jchf7YEwHLSw4z9p2BRWpQa18MAFMMynlsUGOqUBj0NJfPORZTOhSYmAyvHjqWzoM82KRIFFKefUnK48VHdCuKCnXFbzpCZesBn7qic5HfkJA99A8xXyPuYiJ7FZvtulzj3yq8WU3LVTeAWNbY92cOnEHoF32sfMZ3JvB%2Bl1XuzMeLsWogXc8E%2F5Vvt0VUbPUkl9MUCEijD2ggDA71v2eIgnjOYA1zIFxFgOYjhmpUX44wffG5dAkUTzH7ha%2BwjSQn5z&X-Amz-Signature=901edb5a9badc0260b09fb00105d937fd811beb2a9d5f9129e62f05c910e5904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJFDGKSS%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5tuWhvmL2Bi5CVaIIVYDBslPYeXeAYK%2F6KCdiQ9pw8AIgc7OCpdKFFt%2BLXUwuTRBaqC1eRQSCuw0rzFjm%2FKX8L6MqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWxcqw8WvZ4rGVHUCrcA5PNCbRz4r8MtpcW%2B59bq%2FHykPmWEFR6gbmnfgseF5ZXPnfFBl6o8OOEGlpy5i3NTJkZY6Q87IjpbXpuF4aUryLlF6o%2BAoqPCzVt%2B2q6b7xXakj2%2Bn0%2Ftk6It6Qu%2BK6eT0JQtRiidsIyjZe6n%2BIhH8WjIwQstU1A9yvYfkOI7cqOLEbo%2FyVLzNicWOm3VbgRmzcIimwk75hp2%2BsmF55D6MBYDBmOKMgKhG5NeEqm51oNDd4hLrgEg7nOvxM%2BWfHl9DHzVBH%2Fc%2BZWvGPM6GgJH1FUQ2CjY4SDIzfqCMXq7jrpTp57RoB0zeWqBCzx9zwl6e1bOfD7M5VYjZB6bLBkwtVLrMVZT3B%2BdsI6Tp5EOd7iBEE156kqdE2A6CZvNsnRWXIm%2BAgZ1cyW76jfCWcOAdbhxYwTdU8j%2BRznRzcpBlDwX6r4YtymYZ3doFe5bdSpUOSCQg13qqACJ84QjW5GiRDJkIjd4sz1hKX%2FWAmeP1zN%2FSAnqEZbanCLkGUzNGmso%2BdYfXdXIAfLaA7o3t8WiQ61uQ8lMRG2od2af54c5QiGydRCZ4mC0Lh8mv8gzxmrtTdXt4rU3rdOWYfP2I4%2F8mW8S%2BWFT1x7jchf7YEwHLSw4z9p2BRWpQa18MAFMMynlsUGOqUBj0NJfPORZTOhSYmAyvHjqWzoM82KRIFFKefUnK48VHdCuKCnXFbzpCZesBn7qic5HfkJA99A8xXyPuYiJ7FZvtulzj3yq8WU3LVTeAWNbY92cOnEHoF32sfMZ3JvB%2Bl1XuzMeLsWogXc8E%2F5Vvt0VUbPUkl9MUCEijD2ggDA71v2eIgnjOYA1zIFxFgOYjhmpUX44wffG5dAkUTzH7ha%2BwjSQn5z&X-Amz-Signature=4d0ef0a2631219833f6ca42192a76e2268a895a754e75c3ccbf6f3b05f2d7bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
