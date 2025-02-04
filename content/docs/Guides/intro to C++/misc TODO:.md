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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIMUKEM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIArsvbhhYy1XF%2BN4DJ9q0%2FWhr24FLHmpe2BLI43kcmW7AiEAinZfO9Fbiy4lSDUPTZIVYTKrnnLAqHdysjxWi85PKwUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIwySeqgZ7Av9bwwoircA9Y1BwsNUu6QTHGM%2F%2Bg%2FObpsHpLxOgFGdgP1AO5D%2B0CKdFfpl7bGtYl5pbKypq6TCiOw57vCJLTmO%2BNgNf6JbSgiphDrVlkLV8fGN1YHaXKNniuOAxah7lTYpJGoNYoGKp07iLTFnAFmG7lXJDaC2NU1n6YhifSVrJnzaOlxnPu8Tide1Opeb%2BYlmdnpc2eRUp5lf7m1H%2BfZC1OFRXcfLjHhmW14wpUzX14QIy09RljFuKL5KzsaIcs%2FuPo5QbARTfGU4oM%2B5Bw5rPskgllhAyRiQW1TKvczQGmgOKGYMD%2FjCuIB3qKThCXQ44e84296HvjU9ZZoUPAoDEypR3eYgIeesP%2Frsx%2FAY4S%2BBmyUyfUeIoAWuYJX6zbcO7WR4H1ObcRG%2BDZwajaFDUYVbHZXmI01JfvEDMgfSIDTE%2BRnObrJOLLKgWohpMQOy3EWC8KSj0eIVgITWQ1wugHYX4ai6%2FbdOzI5vgz2WFMb8TpaajpMcCWAx88zN3Gn%2F%2FCxP58Qcm8cOBnbodibGyT64Bom6XuKdhcqiUZE4uqHuyAWC4nbCNibXiKKizxZIgWxXB2OT3Jzh6ImTkXZedUY12yMLd4Tfzy3vfBBJOJZfk2P2ZDVzBLqCXuht4xKnYT%2FMMbeib0GOqUBRZfX25g5mYDH7PosMGG8Mt8ZcxAmMEtgTaRXw1vwz%2BgpalQX3XTmLBUTqzabCEJbGMGGfl6%2Fc97EJDiecGgj42EtyrPaAd46OU8XG8FfDhdDdjPxNtgm0UWgU3nLpaJYLchTLQ8sW%2FXUyuo7nCTZ1Mim3ZHY4S0I7UhbLPCXiRfAIneOMRaz3XKQ8MNJ6N3cAAJu9Vfnl00WZKkcTm%2Bb6ppwud%2FP&X-Amz-Signature=a9e43844a09bf8193f51f3916e09300fa04e1ce546e0062e065e95fc1b4f99c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIMUKEM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIArsvbhhYy1XF%2BN4DJ9q0%2FWhr24FLHmpe2BLI43kcmW7AiEAinZfO9Fbiy4lSDUPTZIVYTKrnnLAqHdysjxWi85PKwUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIwySeqgZ7Av9bwwoircA9Y1BwsNUu6QTHGM%2F%2Bg%2FObpsHpLxOgFGdgP1AO5D%2B0CKdFfpl7bGtYl5pbKypq6TCiOw57vCJLTmO%2BNgNf6JbSgiphDrVlkLV8fGN1YHaXKNniuOAxah7lTYpJGoNYoGKp07iLTFnAFmG7lXJDaC2NU1n6YhifSVrJnzaOlxnPu8Tide1Opeb%2BYlmdnpc2eRUp5lf7m1H%2BfZC1OFRXcfLjHhmW14wpUzX14QIy09RljFuKL5KzsaIcs%2FuPo5QbARTfGU4oM%2B5Bw5rPskgllhAyRiQW1TKvczQGmgOKGYMD%2FjCuIB3qKThCXQ44e84296HvjU9ZZoUPAoDEypR3eYgIeesP%2Frsx%2FAY4S%2BBmyUyfUeIoAWuYJX6zbcO7WR4H1ObcRG%2BDZwajaFDUYVbHZXmI01JfvEDMgfSIDTE%2BRnObrJOLLKgWohpMQOy3EWC8KSj0eIVgITWQ1wugHYX4ai6%2FbdOzI5vgz2WFMb8TpaajpMcCWAx88zN3Gn%2F%2FCxP58Qcm8cOBnbodibGyT64Bom6XuKdhcqiUZE4uqHuyAWC4nbCNibXiKKizxZIgWxXB2OT3Jzh6ImTkXZedUY12yMLd4Tfzy3vfBBJOJZfk2P2ZDVzBLqCXuht4xKnYT%2FMMbeib0GOqUBRZfX25g5mYDH7PosMGG8Mt8ZcxAmMEtgTaRXw1vwz%2BgpalQX3XTmLBUTqzabCEJbGMGGfl6%2Fc97EJDiecGgj42EtyrPaAd46OU8XG8FfDhdDdjPxNtgm0UWgU3nLpaJYLchTLQ8sW%2FXUyuo7nCTZ1Mim3ZHY4S0I7UhbLPCXiRfAIneOMRaz3XKQ8MNJ6N3cAAJu9Vfnl00WZKkcTm%2Bb6ppwud%2FP&X-Amz-Signature=99d1e4f519b1f7b19a39c6799983922cd436778a618a5f8b0f93a65dfb82c4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
