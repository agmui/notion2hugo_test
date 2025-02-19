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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L4BXR3B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGQTCpMQ6usJYVNg6BhiojBmP2YA%2F4l0fNL8GTHJ%2BixaAiA4dzEW70UGmtsLvIecXIHPHOi4Yj%2FrmCHoICZAVfHfbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIW6Fny0JgzwmVYwWKtwDHAtDp99mD48TvM6BWebRn7q85ng9wdFQQF1SzXadYOJl%2BKEsXq1esh865olbffoC9j6POSJRzvGH4kTACduH05mTfQAFvP2hatU5%2F4LQuK5CzlRLSxlPT8HF9dRXAXvt6%2BUWceI%2FMRnPHpcH6fwuE%2FzktdsjeWytiRDy5fLKY%2BGYGWs1oU3hv%2B2pQa%2FIMqTbs%2BA7JWc6Wl12nrGCifIUAVRCo93Db9s40asjAJ5yRAi3aFqVR8NPqJUWvJaRaEhmuZkQTGJwkFjJbHgQdHv4j6Ek2OWsNgQ6YS7U5Rb%2B0mmizfqKKOfFhYqR0trq4SA%2FqnAgGax3Gulmrd91B1wyNz1c849pSSgTwg2uRBejJSbImloFdDYiLUheGJdb7DZc88%2B52tV3ZfJzix83tj7DEG1kM5Zjb3HAnfVwbUTP0JRq22WdorWhPR0DoEpKICZTWAx5b5XbfNuPtUSTp82OArVy3ZeCK3RJr8CTO5GblDvjusshpxjEvq6mgkgxF1GqHgCJZLd67pPWlJ1TuuJYt3Q6%2BfpKKIeEho1nPa7NNpXOIbQEIA4cnFO58hIbCd7NuIdCWd8hG5XOtpfZkLyifPNnS2X8BJDgbiHxADKwyFN6MmkeL54%2FPZ%2BBifkws5%2FWvQY6pgHYe%2Bqqjhu8azwTdEclyYDxR%2BfUCN67dKjmXo2ZEYil20qRzZOSod5CxYr65PLs69iC9job3oQf%2FKvG2rTq0vQUgMLcrZEicbxxVOHg0JMAAkdmFmLWAyBIUFME1f%2FrMPbALABjPmqp8iQPVROsm6jqZm8nBMRafWORX4cHIsnc5DcgvIaZCzUu1swEfGAIU1nwNk7ONOGAHHX0%2Fh14p%2BTWpWK8WUG1&X-Amz-Signature=7a9b9e2cba88dad3378b54bf40d807dc4adcdda9556cbde5a9968de4043c9ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L4BXR3B%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGQTCpMQ6usJYVNg6BhiojBmP2YA%2F4l0fNL8GTHJ%2BixaAiA4dzEW70UGmtsLvIecXIHPHOi4Yj%2FrmCHoICZAVfHfbyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIW6Fny0JgzwmVYwWKtwDHAtDp99mD48TvM6BWebRn7q85ng9wdFQQF1SzXadYOJl%2BKEsXq1esh865olbffoC9j6POSJRzvGH4kTACduH05mTfQAFvP2hatU5%2F4LQuK5CzlRLSxlPT8HF9dRXAXvt6%2BUWceI%2FMRnPHpcH6fwuE%2FzktdsjeWytiRDy5fLKY%2BGYGWs1oU3hv%2B2pQa%2FIMqTbs%2BA7JWc6Wl12nrGCifIUAVRCo93Db9s40asjAJ5yRAi3aFqVR8NPqJUWvJaRaEhmuZkQTGJwkFjJbHgQdHv4j6Ek2OWsNgQ6YS7U5Rb%2B0mmizfqKKOfFhYqR0trq4SA%2FqnAgGax3Gulmrd91B1wyNz1c849pSSgTwg2uRBejJSbImloFdDYiLUheGJdb7DZc88%2B52tV3ZfJzix83tj7DEG1kM5Zjb3HAnfVwbUTP0JRq22WdorWhPR0DoEpKICZTWAx5b5XbfNuPtUSTp82OArVy3ZeCK3RJr8CTO5GblDvjusshpxjEvq6mgkgxF1GqHgCJZLd67pPWlJ1TuuJYt3Q6%2BfpKKIeEho1nPa7NNpXOIbQEIA4cnFO58hIbCd7NuIdCWd8hG5XOtpfZkLyifPNnS2X8BJDgbiHxADKwyFN6MmkeL54%2FPZ%2BBifkws5%2FWvQY6pgHYe%2Bqqjhu8azwTdEclyYDxR%2BfUCN67dKjmXo2ZEYil20qRzZOSod5CxYr65PLs69iC9job3oQf%2FKvG2rTq0vQUgMLcrZEicbxxVOHg0JMAAkdmFmLWAyBIUFME1f%2FrMPbALABjPmqp8iQPVROsm6jqZm8nBMRafWORX4cHIsnc5DcgvIaZCzUu1swEfGAIU1nwNk7ONOGAHHX0%2Fh14p%2BTWpWK8WUG1&X-Amz-Signature=61e82630681cab0e2e66ebaa247861f9fd663fd41d1e520ad4b97d08335dbc13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
