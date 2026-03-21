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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAXO5PB%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGPFvj8%2BLBK2EFGMgow4FEao7fG0qcE4FFI9GvKYbtjyAiEA5Z%2BQBaeuNHTnBXiZZlIj0XKc6CKW%2FRrkFp%2BD742bT6Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAWzwYbK%2BjZta4%2F6byrcAxWcDlFetIHlhIdRStYb0WLTu9HTR3uTlwOborHoDiYWp%2Bl19eoWbfC2ZkVaqshUcROl9q7zMr6o8kQHnKpwikX4v4Zpk0u4aVlf45i%2FguGmypLnsEfBoHNktWCmPVLohg5xbMAy16kvoU252YgdRlA2wX9OvYUYaA%2BuldEcxuPyZO%2B1idy6NOvhsJOB%2BSZz%2BPhUmZBH%2FGOfoCVdJFrSCxAGfLPtsfz2bMgfKIIx%2Fxmr0ML7adAYI%2FRCZww3DfpNj%2BTcygWIl%2B%2Bz1UDn7cAj56S00owWs15oGbKu19oEG1RZ3ShfdZmkVySDLXRTGxQqBgRor90MTuIg44ye2HKtVrfoaAhbrwJoGcEFTmWQGBo1TXms45h63mZyEUPps2dWsP8AGz7NW0NhyKMIy%2BEB%2FCwGzX19aJ%2FgtUZNpPE8w7XL6JVSVMw0enuxDsBxvNGg5YT2YlaBjgWYFNn091QFWsNFOdyDM27JfrTLun2ZeuyW56P1rbtexYYT1ax4BNTUrxCGqXEyy1NuCNjQ3GSkws76YabwwQuR7KAzchgQWb3Dh4YW%2B95Hi%2FLJcrWMOdS6ykd%2FzPxnksaHTsIjn8QJ%2BeG6IL40XjwaJDoo%2ByzQJ3%2FDpiTGzxOXiJjs5Ko8MOWx980GOqUBMBbwEiJX1iNmIXfDEIeF4S5Bu2%2B6pkdLGE94%2FSRj2wWDAG0bqUw9wy71Z9bfXxi73tclz8Mg8kDgPYd5I8Q3%2BFY8xSIbYJyOkWMUOn2G6J5YSPtH3oItT%2FLu5oucENmxLEeLRTui7WG1kmhG2gwTJYRt6rYenZHx3rmthwQ977j6CRsej2VNkLNAjhDbT4erOGwJWd8XJ6LyGVgEgoBXj8tvx4yd&X-Amz-Signature=497ef8f92e2c93ca40de1bb7779591eaa4faa5ec7c9e45e6ac5864ecff452a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAXO5PB%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGPFvj8%2BLBK2EFGMgow4FEao7fG0qcE4FFI9GvKYbtjyAiEA5Z%2BQBaeuNHTnBXiZZlIj0XKc6CKW%2FRrkFp%2BD742bT6Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAWzwYbK%2BjZta4%2F6byrcAxWcDlFetIHlhIdRStYb0WLTu9HTR3uTlwOborHoDiYWp%2Bl19eoWbfC2ZkVaqshUcROl9q7zMr6o8kQHnKpwikX4v4Zpk0u4aVlf45i%2FguGmypLnsEfBoHNktWCmPVLohg5xbMAy16kvoU252YgdRlA2wX9OvYUYaA%2BuldEcxuPyZO%2B1idy6NOvhsJOB%2BSZz%2BPhUmZBH%2FGOfoCVdJFrSCxAGfLPtsfz2bMgfKIIx%2Fxmr0ML7adAYI%2FRCZww3DfpNj%2BTcygWIl%2B%2Bz1UDn7cAj56S00owWs15oGbKu19oEG1RZ3ShfdZmkVySDLXRTGxQqBgRor90MTuIg44ye2HKtVrfoaAhbrwJoGcEFTmWQGBo1TXms45h63mZyEUPps2dWsP8AGz7NW0NhyKMIy%2BEB%2FCwGzX19aJ%2FgtUZNpPE8w7XL6JVSVMw0enuxDsBxvNGg5YT2YlaBjgWYFNn091QFWsNFOdyDM27JfrTLun2ZeuyW56P1rbtexYYT1ax4BNTUrxCGqXEyy1NuCNjQ3GSkws76YabwwQuR7KAzchgQWb3Dh4YW%2B95Hi%2FLJcrWMOdS6ykd%2FzPxnksaHTsIjn8QJ%2BeG6IL40XjwaJDoo%2ByzQJ3%2FDpiTGzxOXiJjs5Ko8MOWx980GOqUBMBbwEiJX1iNmIXfDEIeF4S5Bu2%2B6pkdLGE94%2FSRj2wWDAG0bqUw9wy71Z9bfXxi73tclz8Mg8kDgPYd5I8Q3%2BFY8xSIbYJyOkWMUOn2G6J5YSPtH3oItT%2FLu5oucENmxLEeLRTui7WG1kmhG2gwTJYRt6rYenZHx3rmthwQ977j6CRsej2VNkLNAjhDbT4erOGwJWd8XJ6LyGVgEgoBXj8tvx4yd&X-Amz-Signature=f07b8dbd3597cfa3237185a6254eb204058f90bfba474290ca209889bfc1c2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
