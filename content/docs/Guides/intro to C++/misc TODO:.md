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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF577LGG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh%2Fpz3%2B63nhZR2D4AhiH%2FZJMQRdNw8DjVfuEq2BKMCwIhAKhv4Vg8I67OhBNOkd2%2FfYp2clRr5S6lLGoo7%2FGlKYrvKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4W4oB1Av2khGALQMq3AOGSGOhQpHrjDCQFmRifAUw0scoDsf5bTi9X%2F4feqrzP6kmnpHXeOfpgZTdNPjAWjSrnoNIifHs%2F4LHuKfbDCVcf7xXEmP3yCwRp8J806utbK%2FuZgogmDkrMegUaV0UKJTwKZuCQBzZvc0XBYXBDPEm1omOoB6%2B%2ByHJWwm1tQKgpq4LZ22Pb7RzlbnGs6EhqPpAhxW8Npni0%2B26cXh1cwDBadXScWHl79LhQTa7oxvfJXMfC%2FSzZsnDkyqpxhJvWh0VHjCfjfVQc%2B7BIH6NIljxtiWMzMokJmtjmymiyYkiAPjQLacwm1M8GOSo2jRCSU4Wc7ajM9b9W4SHZjtdkravLnwJx3ZskXpNuKq3NyAU7wkUGGFoRVZ4dw1n6r2kvSXACN1HchXCmJteuAyz6sfj1SGuO0JsyDdcdjVtHvQkav4Qs2%2BgYIQjr302CgVjX4ecxtQyMUED5Pf6YHM9qhiruuMdWLILHfpDiLq0ernbQl4G9AeEIYft9Y5pMEwblB24o5SqJfmeeEmmAxJIn6G2inLKd6ij2vBDer9ZCMpteaoOJ%2FX5KFSf64Kd7ye9fZFrdGoDBpdnVvGkJWurcgbZEjLmg8QutVKN0UzwKApXHNUOxszQvVAPDF1fyDD47fTDBjqkAa7RySQGUPMqdPQIwyRWNidv8P%2BC6E5hA2IjdkUP9SNGto56pN%2FX7orcRls62wguUJU%2Fz112nHIivRJZWtrZoNnNrHSbGOv6w7o%2FQIYpY275aiTl5QJlgcPCByQsva0HQXFAgw4T2VFvSl7LI9W2ysOPT0v6cx4x4fp%2BQAl12EwjMPzmrTcGWvL3mFo36xSmWiCTSi6vXKpJiMuo4%2FRG1PXw1mS4&X-Amz-Signature=ee7ae3590c2494a3e8d980f30002141e2808c95e3f495c1a179c051745a438da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF577LGG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsh%2Fpz3%2B63nhZR2D4AhiH%2FZJMQRdNw8DjVfuEq2BKMCwIhAKhv4Vg8I67OhBNOkd2%2FfYp2clRr5S6lLGoo7%2FGlKYrvKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4W4oB1Av2khGALQMq3AOGSGOhQpHrjDCQFmRifAUw0scoDsf5bTi9X%2F4feqrzP6kmnpHXeOfpgZTdNPjAWjSrnoNIifHs%2F4LHuKfbDCVcf7xXEmP3yCwRp8J806utbK%2FuZgogmDkrMegUaV0UKJTwKZuCQBzZvc0XBYXBDPEm1omOoB6%2B%2ByHJWwm1tQKgpq4LZ22Pb7RzlbnGs6EhqPpAhxW8Npni0%2B26cXh1cwDBadXScWHl79LhQTa7oxvfJXMfC%2FSzZsnDkyqpxhJvWh0VHjCfjfVQc%2B7BIH6NIljxtiWMzMokJmtjmymiyYkiAPjQLacwm1M8GOSo2jRCSU4Wc7ajM9b9W4SHZjtdkravLnwJx3ZskXpNuKq3NyAU7wkUGGFoRVZ4dw1n6r2kvSXACN1HchXCmJteuAyz6sfj1SGuO0JsyDdcdjVtHvQkav4Qs2%2BgYIQjr302CgVjX4ecxtQyMUED5Pf6YHM9qhiruuMdWLILHfpDiLq0ernbQl4G9AeEIYft9Y5pMEwblB24o5SqJfmeeEmmAxJIn6G2inLKd6ij2vBDer9ZCMpteaoOJ%2FX5KFSf64Kd7ye9fZFrdGoDBpdnVvGkJWurcgbZEjLmg8QutVKN0UzwKApXHNUOxszQvVAPDF1fyDD47fTDBjqkAa7RySQGUPMqdPQIwyRWNidv8P%2BC6E5hA2IjdkUP9SNGto56pN%2FX7orcRls62wguUJU%2Fz112nHIivRJZWtrZoNnNrHSbGOv6w7o%2FQIYpY275aiTl5QJlgcPCByQsva0HQXFAgw4T2VFvSl7LI9W2ysOPT0v6cx4x4fp%2BQAl12EwjMPzmrTcGWvL3mFo36xSmWiCTSi6vXKpJiMuo4%2FRG1PXw1mS4&X-Amz-Signature=d17cc2c1bf958f362dd88491e60c3d7551c587d789048f95b461bfa07132f817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
