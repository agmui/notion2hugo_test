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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUQX7II%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHSVyn1fro9%2FcbT6xqUM1rFFGquQXF19Ave0Eq3J64RdAiEApuHKmgI4NVuTxbxkI2b5Wj9wOdA9L2HNvdj%2Bwd%2FtOcsq%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDKnMjuv1as7JteZUAyrcA2RL7XTZfQ5pLZv%2BttzZudtJInqk%2F2BLYQyGNIzWqcjoiGQ43198uwdPxc7QQ4LnzTwXtiXbwWAbu1dOTbPZYBKHK5oIoIkbwTc7YRSDj942r5ar70wDtG7MA9dm%2FmWbuw83DfLj422ZkUFCsEAXGC3ToarMAL9DT210YdIfDRKp2Yt74YrwVb%2ByaQXp7S2skiN6EUluxmWAXB8HKPOC7glN5vvQ0BiX30JAPU2BC5irCtkNXDOI%2BlE%2Bx1kJttKw%2FTCINEY%2F3hOaYon0e99hM2hz61SY797%2F5N7IfcMgos%2FR63faICmb%2FWyCoB%2FGPkPypeU%2BCWxfiRlcZLWLcQa5Eocb2fRYMCps5bwm6h%2BTwvaaryhvhE%2BO1iUiVoKKGQXEzqnGu0JMKDoqBzld%2FQmrRPB1Apz0xX2%2FGY%2FBB5XfHiMQe72K%2BGxNHQa3ffkvqg7Sux0NgAqPleSpuyZiWosfDX4ZtdNopkHrbwHxnP0u3bGt8L9SplK%2F4n1rkZ6pG4UG0Ix7fVzrMa3YO%2B3kW0CfgGX3uROEeU3ASISeh4QKAGFw9t7zY39SeU96%2F9iE%2FQ8DlA2n%2FzLg735Pe1wBTa%2B8QkiFsfm5N%2BTjceuo2H1k4g%2FdlpAfpG1FnNb0ldsFMNz64MoGOqUBERLC%2FjLsNcEyRKz3381o4CpNSeB3rBAQfjvmz13uk8CER5cUyDraOSiBpGuTa1%2BdgvleMByQMiUZReBinoB2cKIxl6JJC8gTfUigjtpb4vIGT5YMvNx3ZdKzoLsrceMZhlC2j3YHYsxybttzFcrSOUWV69GEds%2FOX4vKurhR4DB02CYJpu8u67o7ugcaNYZbBy5MA8QeVVF%2FU35%2F443sK9x3nfDk&X-Amz-Signature=816066c1c6eaece5af40a369feee133e670c1ff6fa5ce9198d8d6ded173deb09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUQX7II%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHSVyn1fro9%2FcbT6xqUM1rFFGquQXF19Ave0Eq3J64RdAiEApuHKmgI4NVuTxbxkI2b5Wj9wOdA9L2HNvdj%2Bwd%2FtOcsq%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDKnMjuv1as7JteZUAyrcA2RL7XTZfQ5pLZv%2BttzZudtJInqk%2F2BLYQyGNIzWqcjoiGQ43198uwdPxc7QQ4LnzTwXtiXbwWAbu1dOTbPZYBKHK5oIoIkbwTc7YRSDj942r5ar70wDtG7MA9dm%2FmWbuw83DfLj422ZkUFCsEAXGC3ToarMAL9DT210YdIfDRKp2Yt74YrwVb%2ByaQXp7S2skiN6EUluxmWAXB8HKPOC7glN5vvQ0BiX30JAPU2BC5irCtkNXDOI%2BlE%2Bx1kJttKw%2FTCINEY%2F3hOaYon0e99hM2hz61SY797%2F5N7IfcMgos%2FR63faICmb%2FWyCoB%2FGPkPypeU%2BCWxfiRlcZLWLcQa5Eocb2fRYMCps5bwm6h%2BTwvaaryhvhE%2BO1iUiVoKKGQXEzqnGu0JMKDoqBzld%2FQmrRPB1Apz0xX2%2FGY%2FBB5XfHiMQe72K%2BGxNHQa3ffkvqg7Sux0NgAqPleSpuyZiWosfDX4ZtdNopkHrbwHxnP0u3bGt8L9SplK%2F4n1rkZ6pG4UG0Ix7fVzrMa3YO%2B3kW0CfgGX3uROEeU3ASISeh4QKAGFw9t7zY39SeU96%2F9iE%2FQ8DlA2n%2FzLg735Pe1wBTa%2B8QkiFsfm5N%2BTjceuo2H1k4g%2FdlpAfpG1FnNb0ldsFMNz64MoGOqUBERLC%2FjLsNcEyRKz3381o4CpNSeB3rBAQfjvmz13uk8CER5cUyDraOSiBpGuTa1%2BdgvleMByQMiUZReBinoB2cKIxl6JJC8gTfUigjtpb4vIGT5YMvNx3ZdKzoLsrceMZhlC2j3YHYsxybttzFcrSOUWV69GEds%2FOX4vKurhR4DB02CYJpu8u67o7ugcaNYZbBy5MA8QeVVF%2FU35%2F443sK9x3nfDk&X-Amz-Signature=82fa4d93c14d2b87519d8461450c859f2d169420fa879466ebf6cc8d8c057dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
