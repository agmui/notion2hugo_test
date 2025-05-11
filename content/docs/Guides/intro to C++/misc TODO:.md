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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZKZROTQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDhf%2BUfEvo7KP%2FBlBmmShEpoV4%2FOXtaCdZ6%2Blx6ogp5dAiAIvopCBbOaiXAW5TwZhdqA2BurQFipzCY9nuTQYQnyoyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYTI5US3iIS55%2BQjKtwDd4D6BwT9FQpXUm9FA7mgfXELvA%2FQvG83VeXPSsCMq54s6lxB55ooHkvtTfC0TRCkaSJ6M7NiZlK%2FDlsoHvQx0jTYJBT7zzna0vMaziYXPqo2RqP%2FzlRrRcck4%2BVWUPE1mnx2tDPLKs7vQun1SnG4LJrW8xVRynVWPnIIOx6TpKqhVQdd4naUYQnD65z1laR42OLKQUH%2F0Re965pJ%2Foap1GHwJqpZ16OMM%2FrQkxAT5%2FWlUBRGkk4zG73imm2FsU3IDwrc5dA%2BObO%2BxUDcd1yCDiT7GztnZ1sPhskt5hoz%2BEVjfr5MHURD29yzY%2FwDmA1W4QiyYvEd3NhQBmnm%2BFPPR8u4C7zQU2Lv8gXNKgsMJJXZLxZdlXq9%2BkSoPjPzHNNMQfLaRsOxKmn%2FXfhxSxs6KVZjvDsuUG65nh4t%2F6LrAilwrieoymWlhO0h0vmo1EwGbpwkPzBf1NZe5MvCKWPMWxXlVwsfIcc5MP2weGd87CgxjfU7DWhdp3uQGbFoEpvXr%2FGk5rnYu15SumCUPusQQy8JuOXBX%2FM2JXNFYTyzpAa29XpKoU8g0DyOAQl2nz7tuyATksqfsB%2F0wtW7Z9UsmKjvAG2arwTrQ5qnsQ3zi4TXbMOvOE44aQFJlw4wsaGDwQY6pgEO2%2F0Ctnf5l4K6Dq88LZ9OL4y6l0fOOO8ziR9u8G5Rx9Xx9OIpaMUjfgZy%2Fpz2fFHCTBYDoBXLQqhclyLFbnNf3z7opqPEYoaUBgseD47GS0h4Dy8fYmg9zBYFXgMaGsoSsWsr23CbGXOoogSdTFZsl1oP9DGSfNO%2BD3Tm4kHDdemUbJu3z0yaY%2BleloxtBTJr1xYiI0yFLEKjPsfQIFCv10Cw%2BzWV&X-Amz-Signature=d7a4ac177d62813f9234fbb6c27a4c4dc118584bd3afb30256257494d066380b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZKZROTQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDhf%2BUfEvo7KP%2FBlBmmShEpoV4%2FOXtaCdZ6%2Blx6ogp5dAiAIvopCBbOaiXAW5TwZhdqA2BurQFipzCY9nuTQYQnyoyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYTI5US3iIS55%2BQjKtwDd4D6BwT9FQpXUm9FA7mgfXELvA%2FQvG83VeXPSsCMq54s6lxB55ooHkvtTfC0TRCkaSJ6M7NiZlK%2FDlsoHvQx0jTYJBT7zzna0vMaziYXPqo2RqP%2FzlRrRcck4%2BVWUPE1mnx2tDPLKs7vQun1SnG4LJrW8xVRynVWPnIIOx6TpKqhVQdd4naUYQnD65z1laR42OLKQUH%2F0Re965pJ%2Foap1GHwJqpZ16OMM%2FrQkxAT5%2FWlUBRGkk4zG73imm2FsU3IDwrc5dA%2BObO%2BxUDcd1yCDiT7GztnZ1sPhskt5hoz%2BEVjfr5MHURD29yzY%2FwDmA1W4QiyYvEd3NhQBmnm%2BFPPR8u4C7zQU2Lv8gXNKgsMJJXZLxZdlXq9%2BkSoPjPzHNNMQfLaRsOxKmn%2FXfhxSxs6KVZjvDsuUG65nh4t%2F6LrAilwrieoymWlhO0h0vmo1EwGbpwkPzBf1NZe5MvCKWPMWxXlVwsfIcc5MP2weGd87CgxjfU7DWhdp3uQGbFoEpvXr%2FGk5rnYu15SumCUPusQQy8JuOXBX%2FM2JXNFYTyzpAa29XpKoU8g0DyOAQl2nz7tuyATksqfsB%2F0wtW7Z9UsmKjvAG2arwTrQ5qnsQ3zi4TXbMOvOE44aQFJlw4wsaGDwQY6pgEO2%2F0Ctnf5l4K6Dq88LZ9OL4y6l0fOOO8ziR9u8G5Rx9Xx9OIpaMUjfgZy%2Fpz2fFHCTBYDoBXLQqhclyLFbnNf3z7opqPEYoaUBgseD47GS0h4Dy8fYmg9zBYFXgMaGsoSsWsr23CbGXOoogSdTFZsl1oP9DGSfNO%2BD3Tm4kHDdemUbJu3z0yaY%2BleloxtBTJr1xYiI0yFLEKjPsfQIFCv10Cw%2BzWV&X-Amz-Signature=6bd00b3affc257030ad639e51651ca19fc0f2ab7da2bac43568507def44355e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
