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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6IESEP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFQftRNa15wG53vqRrwsFWxsLYyjqcnX6OQlVtgY%2BsmAIhANcjmsiJTgOgPa9f0f8zlPLhGPXc0h63K8AiQv%2BTV091KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2Bsc5%2B16KnHdEdiEq3APIB1sJtsBk4j9J0f5PUzfXkT1DDqiOR13KnXPslN4sdozqt%2FFqjmcZ%2F91Bd7RRM2pRnYQhkGWoEG6AX3cEbuTlPubiDcFq0UDVr5kcSQoVbt7Z3EEGCCEHAqxwPfmr%2FeGOFc2i3wrtzQmmOsNmREKEligf%2F%2B1Pk8NQcuC9fAFEdHc3bsODQDGgjgXcrlAYwc20d8Hm%2BdFkFKnENeuK8Pkkwf00wcEDNAL53oFTy2vE%2FTpUwP9GtPKJCpjvdqLNUqmtDyIBITE7pzOGYSwVev6QyoqdwZjBWPNlYeu5GqlEO3Q7384kjBIpBMbUMzbuMq1lBmY0C%2BQMUm%2FibUHshMFSmTS8IUHDYW%2BJ%2FyyVCamqnrNJZpZeV9LbbH1b%2FGbP%2BUCenZEJtIs%2BDb4RCGa0ap%2B62V0%2BQll5cijo2CTDhGIyDf5XMhnGTxezU3auVX%2B1eAhkq622pygATKJUp9gsUpfeSNt7wcRHGChhEn8Gwgglh9mumngxBecrb%2BwSG9oAzTWcrn4DId36rpd2mRpKcSvy48QGqzae7BniiWc4uzYm7kxiqJhHqinAfVIXqnQVvlaGrxxAccNeB7Wp73AKWjsu9zdiKnB0yjXpX1hr8S5AgtH6oJXudTXhmbZ1AzCo0tfCBjqkAd9oma68crLIfVW1I4wdx7ykit%2F2boO%2BTppbypjiVbgEUz6ojckOjjHOzuZMNjGvb8vb5ANAgee1MjPnEzTAygiDmzw9iwscj08e1K0wwyROFFjbWs6b7nt4nUgofxwiR%2F2axseTUxvp%2Fs887B0maImSTL%2FBw1TlWjzWqFEq4WBt4EIZV6VzUwc%2FTC%2FkE97RSB1UwYcW%2B0smsNZzkXAnD3l60ocE&X-Amz-Signature=b654053669e28d3d5e1e5295822344f14916b5fe767dc13d0eb27cff4ec8149f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6IESEP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFQftRNa15wG53vqRrwsFWxsLYyjqcnX6OQlVtgY%2BsmAIhANcjmsiJTgOgPa9f0f8zlPLhGPXc0h63K8AiQv%2BTV091KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2Bsc5%2B16KnHdEdiEq3APIB1sJtsBk4j9J0f5PUzfXkT1DDqiOR13KnXPslN4sdozqt%2FFqjmcZ%2F91Bd7RRM2pRnYQhkGWoEG6AX3cEbuTlPubiDcFq0UDVr5kcSQoVbt7Z3EEGCCEHAqxwPfmr%2FeGOFc2i3wrtzQmmOsNmREKEligf%2F%2B1Pk8NQcuC9fAFEdHc3bsODQDGgjgXcrlAYwc20d8Hm%2BdFkFKnENeuK8Pkkwf00wcEDNAL53oFTy2vE%2FTpUwP9GtPKJCpjvdqLNUqmtDyIBITE7pzOGYSwVev6QyoqdwZjBWPNlYeu5GqlEO3Q7384kjBIpBMbUMzbuMq1lBmY0C%2BQMUm%2FibUHshMFSmTS8IUHDYW%2BJ%2FyyVCamqnrNJZpZeV9LbbH1b%2FGbP%2BUCenZEJtIs%2BDb4RCGa0ap%2B62V0%2BQll5cijo2CTDhGIyDf5XMhnGTxezU3auVX%2B1eAhkq622pygATKJUp9gsUpfeSNt7wcRHGChhEn8Gwgglh9mumngxBecrb%2BwSG9oAzTWcrn4DId36rpd2mRpKcSvy48QGqzae7BniiWc4uzYm7kxiqJhHqinAfVIXqnQVvlaGrxxAccNeB7Wp73AKWjsu9zdiKnB0yjXpX1hr8S5AgtH6oJXudTXhmbZ1AzCo0tfCBjqkAd9oma68crLIfVW1I4wdx7ykit%2F2boO%2BTppbypjiVbgEUz6ojckOjjHOzuZMNjGvb8vb5ANAgee1MjPnEzTAygiDmzw9iwscj08e1K0wwyROFFjbWs6b7nt4nUgofxwiR%2F2axseTUxvp%2Fs887B0maImSTL%2FBw1TlWjzWqFEq4WBt4EIZV6VzUwc%2FTC%2FkE97RSB1UwYcW%2B0smsNZzkXAnD3l60ocE&X-Amz-Signature=943fe14a432cfe4cdfe990a78603f0f7fffe0cdd428791c95e4319440101c061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
