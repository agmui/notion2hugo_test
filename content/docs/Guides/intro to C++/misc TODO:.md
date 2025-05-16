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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVPS3A5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4WQFsN7Uy9DSWyxUuqvlgxqelsiORKXgRRnUwAkpQ9AiB7xEcIx2DVXd9L80VbuK4x20Pod5eG7pOz9H2KZSku3ir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMO5%2BJRlyEfDw8k0GCKtwDg5l0TpyFqza%2Ft59Q8HP5b86fu1fV0oHiIDNJXavOwMLPaeyJmTMVy2pVsxCrxSlYo%2Bg1WFyKnMfDn37aSVwmUF7UkthVSGjV7yaIyre5jzSwNKgOuNd%2FrHkxfccYAPDkG%2BDCPvTFBeYCQiM3rJiSQRYTXM2Kp1uElMB1Lr2aN9f7CThhrosBBahr5tqNBrapK96pAY1XhyFhopcuO9G8D8hbbIW10c%2FagCNMNiLx%2FEyTS6pOXduBooWGJHdOhrkT0an6zs6nnWePnm22kOWV%2B%2B56T9RdBb5%2FGH9q3cP8%2BfmQ%2F9ujA%2FNj%2Fsik3gvxJVqlM6tO9ekxmG2QH%2B3jhR4WSgR9EvYiN9jhr3r283AhP0P4M%2FJow0AA4fxxLKuirwnF1wPbBNqCEJqFl7YV932lTSHgh2breo38XGCMLpbK17MwrV6X8vbjzBKFhD8uig3naRgj9s6H%2BRFYTYzqL7RHxB%2BtCEpWNav9f%2FTph1sUQDGBn0JDNyTrY17c1SdzWxybs3BJ6QBwbAvDpbE3wQOEUpDWf8SOjMzKnijKtWU%2FjXsaU%2FieFuyc69UpfZn3kzxyYj3WQ8%2FUYk%2FytwiA2%2Fff5DUnnbQBGAATgc3TeFk29RYNrx%2BObBGEUNvdtRUwrIGdwQY6pgFkQeFyPupz3KKMyFFa764obB2YCUUsDlQCyDuuLXnjR8fFn4Rb0sveHFtDrGjkkoDVcuWl15kC%2FUFXC4l9Gz%2FQBs3PyRTXLQfrnBPpwaFAYlEmfztH6u7ZUWvQ2LWZYm2LimBrnCtjmqPM53REtvxuV8%2FQU3BW3cbuQg5oMvBcBeEBCA56%2FM%2BW3QEh%2B1cbSqAu%2F2YYLzRWfJMTKgZvfDRj056TKCPg&X-Amz-Signature=aba2aacb840fca04e6fd9a264cacd66d9197229a9c5294bd5f31a0a260c8698c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVPS3A5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4WQFsN7Uy9DSWyxUuqvlgxqelsiORKXgRRnUwAkpQ9AiB7xEcIx2DVXd9L80VbuK4x20Pod5eG7pOz9H2KZSku3ir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMO5%2BJRlyEfDw8k0GCKtwDg5l0TpyFqza%2Ft59Q8HP5b86fu1fV0oHiIDNJXavOwMLPaeyJmTMVy2pVsxCrxSlYo%2Bg1WFyKnMfDn37aSVwmUF7UkthVSGjV7yaIyre5jzSwNKgOuNd%2FrHkxfccYAPDkG%2BDCPvTFBeYCQiM3rJiSQRYTXM2Kp1uElMB1Lr2aN9f7CThhrosBBahr5tqNBrapK96pAY1XhyFhopcuO9G8D8hbbIW10c%2FagCNMNiLx%2FEyTS6pOXduBooWGJHdOhrkT0an6zs6nnWePnm22kOWV%2B%2B56T9RdBb5%2FGH9q3cP8%2BfmQ%2F9ujA%2FNj%2Fsik3gvxJVqlM6tO9ekxmG2QH%2B3jhR4WSgR9EvYiN9jhr3r283AhP0P4M%2FJow0AA4fxxLKuirwnF1wPbBNqCEJqFl7YV932lTSHgh2breo38XGCMLpbK17MwrV6X8vbjzBKFhD8uig3naRgj9s6H%2BRFYTYzqL7RHxB%2BtCEpWNav9f%2FTph1sUQDGBn0JDNyTrY17c1SdzWxybs3BJ6QBwbAvDpbE3wQOEUpDWf8SOjMzKnijKtWU%2FjXsaU%2FieFuyc69UpfZn3kzxyYj3WQ8%2FUYk%2FytwiA2%2Fff5DUnnbQBGAATgc3TeFk29RYNrx%2BObBGEUNvdtRUwrIGdwQY6pgFkQeFyPupz3KKMyFFa764obB2YCUUsDlQCyDuuLXnjR8fFn4Rb0sveHFtDrGjkkoDVcuWl15kC%2FUFXC4l9Gz%2FQBs3PyRTXLQfrnBPpwaFAYlEmfztH6u7ZUWvQ2LWZYm2LimBrnCtjmqPM53REtvxuV8%2FQU3BW3cbuQg5oMvBcBeEBCA56%2FM%2BW3QEh%2B1cbSqAu%2F2YYLzRWfJMTKgZvfDRj056TKCPg&X-Amz-Signature=bd180eff82f31905204c5853d51bea086a13da2c63c9ad2e18ff48aa514ddca3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
