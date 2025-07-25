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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEL2SJP6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCpyFW3AVMu1bwoCTIR3U9pwLlglQuMWIlSPavsDJNMUwIgGbNs5fQ7bYSgZ%2FTDVhYiBjVcBeTByn4ZxtaTeFvnylEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCfTklahE7Z8ob9zEircA%2BXDqjykZ9lKoY7aJ4os%2FFQ9HCUgAwUj4JyuDtuo0PnrofQ1tHNhG%2B3GrlNz2V4aZD9j86neZ%2BXu76AolcFdOnPC%2B9jhmemHQ1fmCUwrqtVF2PzXWbtND19WORGa5lxD7A3rqpjan5jX8Z89mLWQ14nQLvMF9rmFpm1epnoq7xpLnQ87eVaUweX6B5DU40eNi2PUp%2BEsej5Lmzl4J%2FBWM75IEeJvxiNk%2BuW9XDRxQF6IJDi75jVmo%2F6qmRbrVhzOg3xXCcgD29Vkq3kFJTw%2B4JooPtfCngLBMDjYTSgvYOCxrzayIMkZe5%2BCG%2FOb9U3m7f5%2BnLuLJhohTVZPEcTxqsgKSKTrG8ZIwoHhZiM1AfUkS%2Fu8k2Zva3iFNBetgDo5QQy0CTJD0NinD2eqFpLUJO1d40BZTD3%2Fo%2BRpseDEPF21d8vkYJtVdT%2FuQfUeQUnTP6nGFbwfwl5CJnNRzvhj5XgOxtgpuOczF0fyHDgw9o1o8%2Flq7cXb4bxo9JaSqOk%2FEjlrU4lPGfq2a4Z27zxbJE79mjGcNrlKdh3X7dQhW9d60IYQhh%2BXp3%2BtXR%2Bid9iYc3IEi14YsgURl4WgdwmuVyTaV23nsf%2BzxtYgAKXUy8H4%2F5fMADxzN0TgV5t6MIeKi8QGOqUB%2FMCVuLohylUULKPmvzM73UpCRzPUlZ0QU4LQDjBykUYZHFexcRisLazJBzn47LB0IiB7s0fmB9WLFCKlN%2FPP2KXxlA6PTUHJDHQX81L3VplWn5ldZ2yC%2FZ0U2DEuHdRyp7hqnBQGqxvtpi7gb8L%2FLajOctgsyW1mHWqfX%2F0v7KUb6jSt0Ws63jMg07jisDq2B%2BCg7hVyP5QHWGFcjE%2B4YyIKA4Cj&X-Amz-Signature=fdef248f6b372967c520c71f232f368832c9dc2e84691756e69eb475f6d2030a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEL2SJP6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCpyFW3AVMu1bwoCTIR3U9pwLlglQuMWIlSPavsDJNMUwIgGbNs5fQ7bYSgZ%2FTDVhYiBjVcBeTByn4ZxtaTeFvnylEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCfTklahE7Z8ob9zEircA%2BXDqjykZ9lKoY7aJ4os%2FFQ9HCUgAwUj4JyuDtuo0PnrofQ1tHNhG%2B3GrlNz2V4aZD9j86neZ%2BXu76AolcFdOnPC%2B9jhmemHQ1fmCUwrqtVF2PzXWbtND19WORGa5lxD7A3rqpjan5jX8Z89mLWQ14nQLvMF9rmFpm1epnoq7xpLnQ87eVaUweX6B5DU40eNi2PUp%2BEsej5Lmzl4J%2FBWM75IEeJvxiNk%2BuW9XDRxQF6IJDi75jVmo%2F6qmRbrVhzOg3xXCcgD29Vkq3kFJTw%2B4JooPtfCngLBMDjYTSgvYOCxrzayIMkZe5%2BCG%2FOb9U3m7f5%2BnLuLJhohTVZPEcTxqsgKSKTrG8ZIwoHhZiM1AfUkS%2Fu8k2Zva3iFNBetgDo5QQy0CTJD0NinD2eqFpLUJO1d40BZTD3%2Fo%2BRpseDEPF21d8vkYJtVdT%2FuQfUeQUnTP6nGFbwfwl5CJnNRzvhj5XgOxtgpuOczF0fyHDgw9o1o8%2Flq7cXb4bxo9JaSqOk%2FEjlrU4lPGfq2a4Z27zxbJE79mjGcNrlKdh3X7dQhW9d60IYQhh%2BXp3%2BtXR%2Bid9iYc3IEi14YsgURl4WgdwmuVyTaV23nsf%2BzxtYgAKXUy8H4%2F5fMADxzN0TgV5t6MIeKi8QGOqUB%2FMCVuLohylUULKPmvzM73UpCRzPUlZ0QU4LQDjBykUYZHFexcRisLazJBzn47LB0IiB7s0fmB9WLFCKlN%2FPP2KXxlA6PTUHJDHQX81L3VplWn5ldZ2yC%2FZ0U2DEuHdRyp7hqnBQGqxvtpi7gb8L%2FLajOctgsyW1mHWqfX%2F0v7KUb6jSt0Ws63jMg07jisDq2B%2BCg7hVyP5QHWGFcjE%2B4YyIKA4Cj&X-Amz-Signature=e2d06695495247f3d862fb111cd0899fdae022f37c02966fb9fedf4180a6bc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
