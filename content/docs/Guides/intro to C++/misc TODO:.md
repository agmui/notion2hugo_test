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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EXNYPV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqQvoYa%2Fw2hwqOe9YRJ3lGRjRNvoUortzqubDaGgMypAiEAg7qm10fBLPTj8IlIRsde4rG0cy8OTOP8IRP%2FP8ll9iMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDN6S0fKF%2FqUWmW7X3yrcA7Fp31j9twcDXnFx%2FPyoZXxKAYk8eFQvSTCHmxUbCir4dBW8K1vAW%2FFOfyz3YJJNGxGAt%2Foo3xyGbUV5mWCIBf6H3YoNRKSXCdwfh7fOFIpabMdgBiMbR5ikJetBbIECw9vU%2FvtgO4OvuAXEtY%2F2vwqyFPeESTK%2BYJxlyNV39caOw3rbh0S4tj8cydG5%2B5YbVHwQNt2jX8KaxJgsXN6vxRovVD%2FxodBI5xM2n7G4%2Fdqde0BkdL6SkOLl7gsho0U1e0amqmOcgjBViAjcv7CjYbNXr0nBEur82SDkbujNFOxl88ZritCEy2R%2F9icKJnALYNjj4vI6%2BHqL%2F%2B38wQPgvW5rZjBtWjcXnxbmCzIlhuIRiLWtMBsNqMbXr4zZ7u2%2Bb1bKZvqZDDpvIvD1bUiwjMQhKeLauz2gU7fMf7rmOIrcCJ2Cs2xAUZIcimX%2FqMw0i1gkvznMrrVm0fwoqNdQjq%2BxFm01FQmihg7Cod0dwjUmsv%2Bp%2Bb0p%2FvtDQz3foGH5ljsZ2iO8hhxoGFvyEkz8Vr1Rgrd0ElGdLa8dM7vf6vff74JHtVpjLBFDqX6GZev42GKFcVLMr8JJJptRqqTw0J6W8tLHI9jMmcNxpl9q0wcH0WF6clVnSpQwqpR5MMzZvsQGOqUBsD5%2BeNy4n2aF60TkfqxFW%2Fdn9RSFN%2F6rirl84lDKcO3LU2Pdyk84fpnFUZfEsmoEGe88yjFTjMBwx8hr7U60MuLscpLMrycy8z2gZ%2F%2BGdFgr7vADzgq%2BIB4Q0ViEkExqdUiyO%2BK2NVj5mwByuUqcRtwDHJZ3CsKmcW86LVPGcy5zENGcCB1qmEYXIlNgph1yRHN34HMVpG51WQytFOCW3yp7Z7Sn&X-Amz-Signature=dc1a0a02eaf46dd94dad9b8835401bb7fdf69b7f1e10b9685093498372c3fae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EXNYPV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqQvoYa%2Fw2hwqOe9YRJ3lGRjRNvoUortzqubDaGgMypAiEAg7qm10fBLPTj8IlIRsde4rG0cy8OTOP8IRP%2FP8ll9iMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDN6S0fKF%2FqUWmW7X3yrcA7Fp31j9twcDXnFx%2FPyoZXxKAYk8eFQvSTCHmxUbCir4dBW8K1vAW%2FFOfyz3YJJNGxGAt%2Foo3xyGbUV5mWCIBf6H3YoNRKSXCdwfh7fOFIpabMdgBiMbR5ikJetBbIECw9vU%2FvtgO4OvuAXEtY%2F2vwqyFPeESTK%2BYJxlyNV39caOw3rbh0S4tj8cydG5%2B5YbVHwQNt2jX8KaxJgsXN6vxRovVD%2FxodBI5xM2n7G4%2Fdqde0BkdL6SkOLl7gsho0U1e0amqmOcgjBViAjcv7CjYbNXr0nBEur82SDkbujNFOxl88ZritCEy2R%2F9icKJnALYNjj4vI6%2BHqL%2F%2B38wQPgvW5rZjBtWjcXnxbmCzIlhuIRiLWtMBsNqMbXr4zZ7u2%2Bb1bKZvqZDDpvIvD1bUiwjMQhKeLauz2gU7fMf7rmOIrcCJ2Cs2xAUZIcimX%2FqMw0i1gkvznMrrVm0fwoqNdQjq%2BxFm01FQmihg7Cod0dwjUmsv%2Bp%2Bb0p%2FvtDQz3foGH5ljsZ2iO8hhxoGFvyEkz8Vr1Rgrd0ElGdLa8dM7vf6vff74JHtVpjLBFDqX6GZev42GKFcVLMr8JJJptRqqTw0J6W8tLHI9jMmcNxpl9q0wcH0WF6clVnSpQwqpR5MMzZvsQGOqUBsD5%2BeNy4n2aF60TkfqxFW%2Fdn9RSFN%2F6rirl84lDKcO3LU2Pdyk84fpnFUZfEsmoEGe88yjFTjMBwx8hr7U60MuLscpLMrycy8z2gZ%2F%2BGdFgr7vADzgq%2BIB4Q0ViEkExqdUiyO%2BK2NVj5mwByuUqcRtwDHJZ3CsKmcW86LVPGcy5zENGcCB1qmEYXIlNgph1yRHN34HMVpG51WQytFOCW3yp7Z7Sn&X-Amz-Signature=8d271c8768129ee94e6804949cd8760a3afc5e851d559d17bb00c998eceed1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
