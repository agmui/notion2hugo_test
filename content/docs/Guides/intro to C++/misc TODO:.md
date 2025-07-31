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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAADWHC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZSgVe8kT2mv9A%2B%2FmNse5QI8UVrOSnOgU1vyeTMZrWvQIgcANcVtR3z5mU9MHTgksIqqB9nVFdX7gcIUoHbC87QW0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhaslWg8%2FhkkDHLyrcAykt%2FOuOOpPVmv8ZqSi0gQ8vSnc1en7CBYT0R900rw3rt22BliUlTZsfc9ZhFvXt0eYZC1L6QvvVncwciNGhy2e0Rsn%2B978n9LWb0d4sHM61I3cq51JWbWro1n%2FLN4LCpQXccWLM67v9LoWHe%2Bj%2F2vlWifClyLjMqrtki3GIyjwSUoQk7E3CiCcPi46QfiG3fuVaZ%2BHbIymWM7eO9hanSUaW6uITnJzz9v2BT86A%2FLewyI2rsdSXPGiUMIwjUUt12oVIWQPr7nZJmGaAsejSFo12TWIBK3Cx2SQQT1sYcAgPt6ypGEZzIdlPpHn9Mr8xUa%2F5%2BrV%2BgMCaBedVTPHvjPHcwvx8WJt5TGCROXAARedt0161qAdHIVrFTZVWD3cOdcB9obPPDmAo091abUF%2BuLXThpE%2Fqb1OVwU6nD2%2Bk9q61tT3UV%2BQo78AUxlcH2P9AJQhqDwtfZrhxz6xAx5mnV5J6yMMR16%2BVsnRUf5923eqie8vt9tm11hWBm0cqdgnhqM%2F1LGSFV0vLv2Sky35nT4ma8R1DFgZX0YfkFt8OB4ZiiR%2Bs6TJC50muC9m7nSVQFtFohqcJ0uWdxHEfMJlpC594s%2BGaX4WCOnpbxzbbLg18jJnx1ol5I1IPgWSMNyiqsQGOqUBJ9rboGtGy43%2FpN15TzERy%2FrlcIJzzAuVZJxgZrnYUEjLKeZIKErEpNvM8Sb%2BjqC6ZonDDdYITcC1xY11dTTxuZJ9BrdGSOJe3IWF9o4SFWoeMhEkGvpn%2BomLZSCaqdqnLxnzabsVToL3Ri4n%2BSvmPjK95C9lXgfd%2F9UMMSAChoke8fTmO2fjZ1cNqs%2FWfuJsV2b%2FVCZ6SK9SRv81nZE3hyP%2BJZLq&X-Amz-Signature=ac54f9e01aa9b05f92fe9a8a330b4bf36e6ef533d5450823b2baf8536c3f3693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAADWHC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZSgVe8kT2mv9A%2B%2FmNse5QI8UVrOSnOgU1vyeTMZrWvQIgcANcVtR3z5mU9MHTgksIqqB9nVFdX7gcIUoHbC87QW0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhaslWg8%2FhkkDHLyrcAykt%2FOuOOpPVmv8ZqSi0gQ8vSnc1en7CBYT0R900rw3rt22BliUlTZsfc9ZhFvXt0eYZC1L6QvvVncwciNGhy2e0Rsn%2B978n9LWb0d4sHM61I3cq51JWbWro1n%2FLN4LCpQXccWLM67v9LoWHe%2Bj%2F2vlWifClyLjMqrtki3GIyjwSUoQk7E3CiCcPi46QfiG3fuVaZ%2BHbIymWM7eO9hanSUaW6uITnJzz9v2BT86A%2FLewyI2rsdSXPGiUMIwjUUt12oVIWQPr7nZJmGaAsejSFo12TWIBK3Cx2SQQT1sYcAgPt6ypGEZzIdlPpHn9Mr8xUa%2F5%2BrV%2BgMCaBedVTPHvjPHcwvx8WJt5TGCROXAARedt0161qAdHIVrFTZVWD3cOdcB9obPPDmAo091abUF%2BuLXThpE%2Fqb1OVwU6nD2%2Bk9q61tT3UV%2BQo78AUxlcH2P9AJQhqDwtfZrhxz6xAx5mnV5J6yMMR16%2BVsnRUf5923eqie8vt9tm11hWBm0cqdgnhqM%2F1LGSFV0vLv2Sky35nT4ma8R1DFgZX0YfkFt8OB4ZiiR%2Bs6TJC50muC9m7nSVQFtFohqcJ0uWdxHEfMJlpC594s%2BGaX4WCOnpbxzbbLg18jJnx1ol5I1IPgWSMNyiqsQGOqUBJ9rboGtGy43%2FpN15TzERy%2FrlcIJzzAuVZJxgZrnYUEjLKeZIKErEpNvM8Sb%2BjqC6ZonDDdYITcC1xY11dTTxuZJ9BrdGSOJe3IWF9o4SFWoeMhEkGvpn%2BomLZSCaqdqnLxnzabsVToL3Ri4n%2BSvmPjK95C9lXgfd%2F9UMMSAChoke8fTmO2fjZ1cNqs%2FWfuJsV2b%2FVCZ6SK9SRv81nZE3hyP%2BJZLq&X-Amz-Signature=a7201113ad4a116ed01c7c9ead1143781a5dcf894108c0862a6af418f5b367af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
