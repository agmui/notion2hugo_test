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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMT6UE5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCA7pnXNOazW7WaNJp1cfFIJgBCewvzxfkhM9B%2F%2B%2FBMhAIgdXVzQFQLuuj8u0FOPPTJ%2Bw2hFetaH9SagYP%2FrR%2FyPacqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWVPAmRydWIfVzJJircA%2Fva0mkg5CpI4jdXhAO6Y7n8AYABLNhWHmJLP5FLI0S6KMbrKH5s3DpUA9xvPLPePW2O6hQTulaOGGI7qDG3VQxRYgyuXORiW%2FcNosnqtKaA%2BaMwg0493SbYyEBt9lfPjSXoDOgddKkqolsom%2B7inpia1hI5t%2BDY1DGCZ%2F8Yyi98EqyCwGiR7ZGFfrKj4ML4dzPvz1Vpjqwf82RUZhNV3jQf4aKad5uoRTvS1TVf5V89hd%2B%2Bfp2hIuA%2B9b5njxEmaUtfGpDBDCBCo8jBXMjyuu6wxhfpAFSucDu8KPOfk2wb4zAh6Bqb9VfSXpNjf9jLUo8%2BBd%2FIMDrvo%2Bzu7vBW2gEZShQALBLNfMYxoDHAxWMHJc6SUx%2FgS972uu7khps90li1leSevqN3tXzXv%2FGHefhvZDyc6%2B6Jf7NPYcA2dfsp5IFUb%2FgKGEvwiwc7vRtfpdykMoWIzl13%2F1%2BVkhYzdkhTXGyKiHHCkQje4F10BfhsXyofiAIYE%2BtjeTui%2BzhxDVAbui0%2ByypbJyLtWPlN6A%2FDd3eQmrWiCoFVCZjLTY%2FcBxekp2Gmxfg%2BXI1Ksuue8I0%2F9n3xozyU%2BBg7e9%2FfJKgECxV4IU33RcFsZqzIKS64QoMREdgNOa1qUe4HMI%2FAuMEGOqUBJxe1oh03ziZx9A7mmC8ziGuSY1wJxH%2F6Juf2%2BIK%2BQXvHIgw4Z2HVcF8QY2XKi%2BbRL3c%2FX7EVyysWY21d%2BPpE%2B%2FF1lbVlUOwO2hVcAueG6t5M4hnc6MSwLo5cSx3hksjN8i2ZAcXzC53raqWSHSyutqmNAHbM6teNrY409mjQnuBNYXFYDVyFHW2aBLIQnWI0WsJsBEt4yXvAlHdfDIgqiX7K9fD9&X-Amz-Signature=18aaa5d091636f9dd083b8ab2f8cdc3fc5eb6828bba53fb8f7ad1108ec0e7878&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMT6UE5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCA7pnXNOazW7WaNJp1cfFIJgBCewvzxfkhM9B%2F%2B%2FBMhAIgdXVzQFQLuuj8u0FOPPTJ%2Bw2hFetaH9SagYP%2FrR%2FyPacqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWVPAmRydWIfVzJJircA%2Fva0mkg5CpI4jdXhAO6Y7n8AYABLNhWHmJLP5FLI0S6KMbrKH5s3DpUA9xvPLPePW2O6hQTulaOGGI7qDG3VQxRYgyuXORiW%2FcNosnqtKaA%2BaMwg0493SbYyEBt9lfPjSXoDOgddKkqolsom%2B7inpia1hI5t%2BDY1DGCZ%2F8Yyi98EqyCwGiR7ZGFfrKj4ML4dzPvz1Vpjqwf82RUZhNV3jQf4aKad5uoRTvS1TVf5V89hd%2B%2Bfp2hIuA%2B9b5njxEmaUtfGpDBDCBCo8jBXMjyuu6wxhfpAFSucDu8KPOfk2wb4zAh6Bqb9VfSXpNjf9jLUo8%2BBd%2FIMDrvo%2Bzu7vBW2gEZShQALBLNfMYxoDHAxWMHJc6SUx%2FgS972uu7khps90li1leSevqN3tXzXv%2FGHefhvZDyc6%2B6Jf7NPYcA2dfsp5IFUb%2FgKGEvwiwc7vRtfpdykMoWIzl13%2F1%2BVkhYzdkhTXGyKiHHCkQje4F10BfhsXyofiAIYE%2BtjeTui%2BzhxDVAbui0%2ByypbJyLtWPlN6A%2FDd3eQmrWiCoFVCZjLTY%2FcBxekp2Gmxfg%2BXI1Ksuue8I0%2F9n3xozyU%2BBg7e9%2FfJKgECxV4IU33RcFsZqzIKS64QoMREdgNOa1qUe4HMI%2FAuMEGOqUBJxe1oh03ziZx9A7mmC8ziGuSY1wJxH%2F6Juf2%2BIK%2BQXvHIgw4Z2HVcF8QY2XKi%2BbRL3c%2FX7EVyysWY21d%2BPpE%2B%2FF1lbVlUOwO2hVcAueG6t5M4hnc6MSwLo5cSx3hksjN8i2ZAcXzC53raqWSHSyutqmNAHbM6teNrY409mjQnuBNYXFYDVyFHW2aBLIQnWI0WsJsBEt4yXvAlHdfDIgqiX7K9fD9&X-Amz-Signature=69f3dbeb8c8cf24c631fd20b33f4f80736c8dbe5583f684084c47346cb78a47e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
