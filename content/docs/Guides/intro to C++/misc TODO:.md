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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=86af7e08cda548df364d8034bf4a6774f9f1c8491cf984bf41c61eb77537aa6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=a70568643dce045d6946f623912c8b39494842d61dd42aaa19e72e5c4634faf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
