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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRHHN67%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrDD5UPHi16fx%2B4BU3DqOdHEu3L9ouaB1sMEj696yTBAIgAkK%2FF2r%2FUVV5B1MsLhCuxv1x%2BYPZT%2Fj5JIKAJR3P%2BoYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkZW9VVZxKmpugFrCrcAxXRfhzCI6uWx5rd4cwokStUU2ch6%2FSK6tmITHjE3LW%2B50ZdnGT0WjIJWW0kk5jyxHhIqlTxs0PUbAk5zb9a01gjDQiuSZLXz%2BQbymOp5aINK085252oKKSbi%2BEKqDVLApNfNkCHTvb3mCmb%2BJxb8FQ5tLei7r3510ObxgsPMXxe8ww%2FjIImmeuE717Pa1DPxQ5iQHFUKk89S6pXzsfaQu%2FsmuX66UeVu%2BMtj7BOzMVpje%2BZ3qKr4htXEMOGPIkokT6YDsOPFTaW53WjuVuW4ZPgv5NwjKdcH%2BHVkC0cysN1f760jsVsQwi88Ed%2BTZMu8u51k7G9T%2BZmhDODMs6z6Sn7cMK1Ljvwv6R7HLx6Uvi%2B1r8zHhG3R16gJUw270rYr4C3Wq3cF7G4WJSIH2mQRo95GTchPAx%2Frif5U%2FSdywqdlQjZuVnuwXDrj8kbmvFU6wg7wmP8JNxw8Gq6Iygf7MloAhdoa8Iixj%2FxXDOWixTHqvl%2BcpXrhpkkLHkTGwEnrznW0JQ2kQxLe8OZWC%2Blrmj2qRxgAqal2yTQc16i6cX7qu2WdcXBjYr8dqmyMU8zpSUI8qSjvaSyUFve1K6RNV5CTXOkKFBW1Jqwl9wnrWSSI%2BnrEdiZBXe8px8nMJav2MIGOqUBZLEgsHpFS6A4kV0Myd5BsfgS8BC0pz7fypAywkRR5EAGLF4B1ZqjrOhsBqROE4%2BTw%2FTzHqk%2BrbTtrCw%2BJ7YWH5y5NBTCul%2Fn1qKQ1qktHTyJ%2F6SR1qNL%2FO%2FpJBCIULTKwIzk3f6Iv7NwtNZuIWJcfMGzmOWMZ5pw3HGzSljHubGRc4d45epg2JzOSewEBtmWNdj0jm7ajSsL8edfz0CoxKX1IW4q&X-Amz-Signature=d54d3ee083c3e9f872c8c340cf95e3b689b042ff66c5964ad4acea37990fe5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRHHN67%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrDD5UPHi16fx%2B4BU3DqOdHEu3L9ouaB1sMEj696yTBAIgAkK%2FF2r%2FUVV5B1MsLhCuxv1x%2BYPZT%2Fj5JIKAJR3P%2BoYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkZW9VVZxKmpugFrCrcAxXRfhzCI6uWx5rd4cwokStUU2ch6%2FSK6tmITHjE3LW%2B50ZdnGT0WjIJWW0kk5jyxHhIqlTxs0PUbAk5zb9a01gjDQiuSZLXz%2BQbymOp5aINK085252oKKSbi%2BEKqDVLApNfNkCHTvb3mCmb%2BJxb8FQ5tLei7r3510ObxgsPMXxe8ww%2FjIImmeuE717Pa1DPxQ5iQHFUKk89S6pXzsfaQu%2FsmuX66UeVu%2BMtj7BOzMVpje%2BZ3qKr4htXEMOGPIkokT6YDsOPFTaW53WjuVuW4ZPgv5NwjKdcH%2BHVkC0cysN1f760jsVsQwi88Ed%2BTZMu8u51k7G9T%2BZmhDODMs6z6Sn7cMK1Ljvwv6R7HLx6Uvi%2B1r8zHhG3R16gJUw270rYr4C3Wq3cF7G4WJSIH2mQRo95GTchPAx%2Frif5U%2FSdywqdlQjZuVnuwXDrj8kbmvFU6wg7wmP8JNxw8Gq6Iygf7MloAhdoa8Iixj%2FxXDOWixTHqvl%2BcpXrhpkkLHkTGwEnrznW0JQ2kQxLe8OZWC%2Blrmj2qRxgAqal2yTQc16i6cX7qu2WdcXBjYr8dqmyMU8zpSUI8qSjvaSyUFve1K6RNV5CTXOkKFBW1Jqwl9wnrWSSI%2BnrEdiZBXe8px8nMJav2MIGOqUBZLEgsHpFS6A4kV0Myd5BsfgS8BC0pz7fypAywkRR5EAGLF4B1ZqjrOhsBqROE4%2BTw%2FTzHqk%2BrbTtrCw%2BJ7YWH5y5NBTCul%2Fn1qKQ1qktHTyJ%2F6SR1qNL%2FO%2FpJBCIULTKwIzk3f6Iv7NwtNZuIWJcfMGzmOWMZ5pw3HGzSljHubGRc4d45epg2JzOSewEBtmWNdj0jm7ajSsL8edfz0CoxKX1IW4q&X-Amz-Signature=801848718cf85ee101b3304d34c669875c556df27ddfc167d8c8097a2b8f0b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
