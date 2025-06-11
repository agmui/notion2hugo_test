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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3X3YUN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLycuwXfA7BS0vykzPyXaMKcTqVKebIbb0SmayG2JOWAiEAi%2B34DGkCyrk3wVcHE6o%2BZjuNEAeOhymKVTERuXA4m4QqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfX5zBPCqSwoxlkECrcA5cT04tq1krHivPO%2FtQtuVl9AnmoweSDPcDbGawMu6qoaOME8KdEjFRP0CLbCpQaspi0cTiO2p7l1MU3mwVMKUJKOTSJpYcNzT0ClVDKjNhzOoVFwPnU29yDkjQ2s0TX3cr50P634H0G5lDYLeJ494%2FU8poqjJRL1teC3qvqzBp19nnT%2BW4nz%2FWHHxDJufO%2BU3uvTZMUQaz20RpqMKqL3DHg%2Fr9SS2msFs7c%2FGxMXHRS6W6Hnti2xu4dVieTU7rnwHd%2Fhj%2FNqwckg9dAysheuJbGT1PwfpOpHkNrmpT8lU62lOzsy%2BIyqVy2mG%2FqXcDcpwVqVB8Q6taDOnkgsNquUBMgRImZGRr%2BWprPLCh8bm8pW1M8QKuS94jmui7EbA0CO9qyZBbvR6DkBHHlU7LbUzeLoGaX%2FLL451w4s%2BvEeqCXfOEEW7iEGtHse4f9Gcyis2PKDNrSsMmJUtTdI4xrToKLM7xO3VB3c2i5w1XRAxw9vL4fu0dgu9zg0l%2F7j3vkAizdKU7SuZbaV9hbiCK7awvR7aM42mhy12dg0XinNkIuzsHIEGEKboiuURO2%2B8%2FwJ2hyIyq2AIzxC6cn0g0Tw8XGuwAX4azqSnTmPTlodvPBBekRUXoAkQNzNBQAMNnkosIGOqUBx04llX9xdITiC66JFWPad0wkpU8lIm4guPAVcUtWabXzVRS9h%2B3PCxSFh47eCgOcTeilRb4sQY60WQARRdk6d%2Bn8ONDRjaWWY8RWGGqUVfRAoiLg51UcWYvZZwGjW7OabCwOH3eL7TDRw8AAe%2B85Axm2ZcaToAy6u6eh0Ifyah2u9K4cYWQaRiVw2l%2FrL4%2FxL2CNYaG6O5RooaKpUOyEEM17gVn%2F&X-Amz-Signature=f65f7d551aa0db5940617628e254752d6c8445f4765c9013ac0e43efbc0f869b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3X3YUN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLycuwXfA7BS0vykzPyXaMKcTqVKebIbb0SmayG2JOWAiEAi%2B34DGkCyrk3wVcHE6o%2BZjuNEAeOhymKVTERuXA4m4QqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfX5zBPCqSwoxlkECrcA5cT04tq1krHivPO%2FtQtuVl9AnmoweSDPcDbGawMu6qoaOME8KdEjFRP0CLbCpQaspi0cTiO2p7l1MU3mwVMKUJKOTSJpYcNzT0ClVDKjNhzOoVFwPnU29yDkjQ2s0TX3cr50P634H0G5lDYLeJ494%2FU8poqjJRL1teC3qvqzBp19nnT%2BW4nz%2FWHHxDJufO%2BU3uvTZMUQaz20RpqMKqL3DHg%2Fr9SS2msFs7c%2FGxMXHRS6W6Hnti2xu4dVieTU7rnwHd%2Fhj%2FNqwckg9dAysheuJbGT1PwfpOpHkNrmpT8lU62lOzsy%2BIyqVy2mG%2FqXcDcpwVqVB8Q6taDOnkgsNquUBMgRImZGRr%2BWprPLCh8bm8pW1M8QKuS94jmui7EbA0CO9qyZBbvR6DkBHHlU7LbUzeLoGaX%2FLL451w4s%2BvEeqCXfOEEW7iEGtHse4f9Gcyis2PKDNrSsMmJUtTdI4xrToKLM7xO3VB3c2i5w1XRAxw9vL4fu0dgu9zg0l%2F7j3vkAizdKU7SuZbaV9hbiCK7awvR7aM42mhy12dg0XinNkIuzsHIEGEKboiuURO2%2B8%2FwJ2hyIyq2AIzxC6cn0g0Tw8XGuwAX4azqSnTmPTlodvPBBekRUXoAkQNzNBQAMNnkosIGOqUBx04llX9xdITiC66JFWPad0wkpU8lIm4guPAVcUtWabXzVRS9h%2B3PCxSFh47eCgOcTeilRb4sQY60WQARRdk6d%2Bn8ONDRjaWWY8RWGGqUVfRAoiLg51UcWYvZZwGjW7OabCwOH3eL7TDRw8AAe%2B85Axm2ZcaToAy6u6eh0Ifyah2u9K4cYWQaRiVw2l%2FrL4%2FxL2CNYaG6O5RooaKpUOyEEM17gVn%2F&X-Amz-Signature=2aa8845ebe5362d3f47da111b8a22118f173c17c191cad23d9bd2ba66c451d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
