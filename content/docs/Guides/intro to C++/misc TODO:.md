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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQ5S4VI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG8iTirki4GLADY4aBM3rWyUYGc91qoUZJCtMhOI2d%2BAiAvMPRHIu%2BJ2XtEnvgSSF3LJ4njOhyEcpdYKomWabpcgSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMbpwiJXBhSmww21iPKtwDbA54yqcoiIO%2Buk5AFsMxZXClLi9IX%2FkIL0m8x0l5NRRPMDAMDDOQU91d6x91F0Y%2FklgpilrK%2BLR0r9wgIo%2FDB72Q8PwDnEmLayuS%2BA2BQlJO56D906lA8eiD%2B7X6QY7oHl6IOZRwGUnCFwIul%2Fx70UUA95jI1%2Bi7Zsy53tNk9DKALip5XDcF%2FKkMBxbtmcxHpcCcdmm4GBaQCtNPK6R66EeG2MjGxiHnB2BUwESXGUaZRqynlgFroN%2FsMtESE6ii5nA%2FwfM8KNTS2SnlmElSZLoQfJ5gGavMBs6RAltLWaJxtDt5wPGvSDHqnUIROmiwTkNJdpYdvVq8waN0ngKf0uvqcPn6oGDR85uT2NkhkAMg7WlNbxLIGENfCN80et3UKaxrvs6lVFM2iZk0p5qxjG9ZHJh0fkJmVeIqWEvOn2BayBdAoHB4soHb%2FqT8vIGHgub7jMCLoV9a15cjCCqixuH76MYjVeliz7eL7ySz2qOOTWjlw5ISMOCOB39lbAjwl%2BE%2Fm5WJiTA%2FUAelgEDgjFRw2tlJjlEX27kS%2BW6SENdg7ECCSoNWefSmDMyPpRsmJVrPF2D%2FhioTPLyCARulbSo%2BuU05H%2Fru1j7TAW56%2BhQSbvBgPlrfVS3TXfUwgL7yvQY6pgH68Wfp1N2dfcbWc7UtuCGjuk8LDtTmPowUQNPbkdVSidvKjv%2BQxos879zRjNd2qU1kYuBZDEDz%2FSTNJuxUrIOSp4PCPKtwR%2F66g1ZIZsROOD%2B35BtrzDBIuvl0NsM9m6p2%2FeHtha8aRDh4hQsV2dkmNVtjVAdbK9GaYUE5dbZr9xdQPPlY3TVTmPzA6z%2BxQlDOFyCjFiMfG6WfwfajD8%2FUtLZqb0va&X-Amz-Signature=49026c27079f59b5cab135657bf28dbd80e9bd8572fce19ae68ea77ac02af863&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQ5S4VI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG8iTirki4GLADY4aBM3rWyUYGc91qoUZJCtMhOI2d%2BAiAvMPRHIu%2BJ2XtEnvgSSF3LJ4njOhyEcpdYKomWabpcgSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMbpwiJXBhSmww21iPKtwDbA54yqcoiIO%2Buk5AFsMxZXClLi9IX%2FkIL0m8x0l5NRRPMDAMDDOQU91d6x91F0Y%2FklgpilrK%2BLR0r9wgIo%2FDB72Q8PwDnEmLayuS%2BA2BQlJO56D906lA8eiD%2B7X6QY7oHl6IOZRwGUnCFwIul%2Fx70UUA95jI1%2Bi7Zsy53tNk9DKALip5XDcF%2FKkMBxbtmcxHpcCcdmm4GBaQCtNPK6R66EeG2MjGxiHnB2BUwESXGUaZRqynlgFroN%2FsMtESE6ii5nA%2FwfM8KNTS2SnlmElSZLoQfJ5gGavMBs6RAltLWaJxtDt5wPGvSDHqnUIROmiwTkNJdpYdvVq8waN0ngKf0uvqcPn6oGDR85uT2NkhkAMg7WlNbxLIGENfCN80et3UKaxrvs6lVFM2iZk0p5qxjG9ZHJh0fkJmVeIqWEvOn2BayBdAoHB4soHb%2FqT8vIGHgub7jMCLoV9a15cjCCqixuH76MYjVeliz7eL7ySz2qOOTWjlw5ISMOCOB39lbAjwl%2BE%2Fm5WJiTA%2FUAelgEDgjFRw2tlJjlEX27kS%2BW6SENdg7ECCSoNWefSmDMyPpRsmJVrPF2D%2FhioTPLyCARulbSo%2BuU05H%2Fru1j7TAW56%2BhQSbvBgPlrfVS3TXfUwgL7yvQY6pgH68Wfp1N2dfcbWc7UtuCGjuk8LDtTmPowUQNPbkdVSidvKjv%2BQxos879zRjNd2qU1kYuBZDEDz%2FSTNJuxUrIOSp4PCPKtwR%2F66g1ZIZsROOD%2B35BtrzDBIuvl0NsM9m6p2%2FeHtha8aRDh4hQsV2dkmNVtjVAdbK9GaYUE5dbZr9xdQPPlY3TVTmPzA6z%2BxQlDOFyCjFiMfG6WfwfajD8%2FUtLZqb0va&X-Amz-Signature=e20cacae6fb0cad44bc0e1376bcab167b86a52db341c036d8549b55b3be37be2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
