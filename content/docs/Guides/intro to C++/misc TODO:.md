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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVDM5Z3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHYXj%2B9PKR9D6iDNz4Qn9FIeiNq%2Bj0Oy8LWM0048NTPuAiAmpXNF6Sj6gJvvqX0iNr0dwM%2B8OfXSlr05y72SzV0rrCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMmQJM88wwGeIBKDmWKtwDmCdCcaFEzS0XfK2NeDeS9WiGEuIu3Oo3I3PICk9HAtAarF7HNMUFprTVxoKxKf1az6N4YwKMBOpWZgd5X5W7Yy6BWgFpFmObNjddJnjnnz%2FJDKMzR7gL38CBPBFx15PbSgB3e4KzsZ1kYBbdWIQhl6P2qM%2Fmj3kEPD4XH6p9tCVkN02SN5QZZBdRHb6n7EAY3jLr4MzGzX521K5f6myeEuVfjoYyv4osbHUpDq515hadUOFHouSsgk9aNeCTBjPwnneoelS0skaRYCSCIveTjzB9lQcOTaLVBb7YhuXppxkSevq785M4hzZBHJf2YKT%2BLLZo%2F7S%2F9GhOly%2FPI76tLVsm2Y%2FfMY8MIOIRndj94sFCBnvmQs5J84rbv6mivpp0%2FMVf2qMtQPl8QfU4e8RDruX44VUufFj7VHQVWUhcXVk%2Bhsv7rwBuZRbBuxQB6y51dxDx1Nwmtyhl2UZ2%2FSSjBjVbY5mlqyFFYjZCkUhBG4sR0c7Ngnp2LkTbNwSbSsEfezaF1MH0Hc%2FaUEj68B2Sw3UWt9SExC%2FwvCD35HAMKOUKvuhxERPjZXbsXzmxcIRPMqFvZzFW9siBIbyk5KryHmhIp31evsg%2FSESu3JySXFCBPfX9Tw5aiIg3AdowtM7DxAY6pgHl%2Bq%2BoNNI6Y0I%2FHMBJdlbUnxzHAXKU%2F16Q8IZuJsgPQM%2B45fmLbw9nIZ2dGJ5b0xzRc0UVjLJAlnEMaStpu6oBpM9L02gCev4HDtVuEy2jAWSSq%2F4kvd2cQvTAML4U8OElkS93YKFv6xwpjhhnLDwoKMjiQ2XO2iVbCNyDCTmVoks8ktK7hQZrqY8N%2BFGfVAVbqlf%2Bu3UJEWEL3NmYD%2BnGwWH2P2Yb&X-Amz-Signature=8a2dc15bb765cb25a7fcba2a3393b64ea2c14324439790e523441d6026a0c98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVDM5Z3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHYXj%2B9PKR9D6iDNz4Qn9FIeiNq%2Bj0Oy8LWM0048NTPuAiAmpXNF6Sj6gJvvqX0iNr0dwM%2B8OfXSlr05y72SzV0rrCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMmQJM88wwGeIBKDmWKtwDmCdCcaFEzS0XfK2NeDeS9WiGEuIu3Oo3I3PICk9HAtAarF7HNMUFprTVxoKxKf1az6N4YwKMBOpWZgd5X5W7Yy6BWgFpFmObNjddJnjnnz%2FJDKMzR7gL38CBPBFx15PbSgB3e4KzsZ1kYBbdWIQhl6P2qM%2Fmj3kEPD4XH6p9tCVkN02SN5QZZBdRHb6n7EAY3jLr4MzGzX521K5f6myeEuVfjoYyv4osbHUpDq515hadUOFHouSsgk9aNeCTBjPwnneoelS0skaRYCSCIveTjzB9lQcOTaLVBb7YhuXppxkSevq785M4hzZBHJf2YKT%2BLLZo%2F7S%2F9GhOly%2FPI76tLVsm2Y%2FfMY8MIOIRndj94sFCBnvmQs5J84rbv6mivpp0%2FMVf2qMtQPl8QfU4e8RDruX44VUufFj7VHQVWUhcXVk%2Bhsv7rwBuZRbBuxQB6y51dxDx1Nwmtyhl2UZ2%2FSSjBjVbY5mlqyFFYjZCkUhBG4sR0c7Ngnp2LkTbNwSbSsEfezaF1MH0Hc%2FaUEj68B2Sw3UWt9SExC%2FwvCD35HAMKOUKvuhxERPjZXbsXzmxcIRPMqFvZzFW9siBIbyk5KryHmhIp31evsg%2FSESu3JySXFCBPfX9Tw5aiIg3AdowtM7DxAY6pgHl%2Bq%2BoNNI6Y0I%2FHMBJdlbUnxzHAXKU%2F16Q8IZuJsgPQM%2B45fmLbw9nIZ2dGJ5b0xzRc0UVjLJAlnEMaStpu6oBpM9L02gCev4HDtVuEy2jAWSSq%2F4kvd2cQvTAML4U8OElkS93YKFv6xwpjhhnLDwoKMjiQ2XO2iVbCNyDCTmVoks8ktK7hQZrqY8N%2BFGfVAVbqlf%2Bu3UJEWEL3NmYD%2BnGwWH2P2Yb&X-Amz-Signature=c5294e5f4e6429fcf245a687a9b798e62f20c96c88e7570105bc43b95f7644d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
