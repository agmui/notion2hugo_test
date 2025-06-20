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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNWKD5Z%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPJJZvZZmvfMZqE0shrFVTANxhVu6qlI7iSg5u7tqIcQIgTw3YDu12zbuCb9zdgP5Enq4TKdAU2Mj5SNAh0NX57xkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMl%2BGNUY8borU8WDCrcA%2FGD6SYc4az%2FlULAfvjD3p%2FALxr2cBDKUGul8dZQo9DCpMeIbl625pAVxSV79H8JYyS2S%2BVNZG5qu5tnKTopT8WDSF4ttkHXCu5U0mvxKAXn9Bsv3TJF6%2F4%2B4Liji1%2BQdfMJp5fZ3UXbb0NzfrOBK1AbOxAG%2FCkP8dzeBFgGziowup0UzZdL5u2da%2F5jsSGdZSWK5DEe4%2BYT71dvK25J7kU%2Bp2Eh54AmaS6fe2Jns2lvMG0NZNecR1CyDEDgDfUQB4hOWkoLO0ZEM%2F%2Fmu3hgeQDojJFvMWGR9VNdWlemyW%2BlOLuVPWgNTOnV1%2F7hftWpRajMHySFLYgdMT%2B60vgdkZbpopIDjKS7Lptpd7jWl%2FJkoH5K2xCBfb%2BJnce2IGXf0yLNLvgctKRSvNJuA4tPFrl93Nnp0b22QlcxhyAsRPhjI%2BjZETVJEo6uwdyXa7uXVhzNgfA1ccyo0VzgIwfhywVI6%2B7U5lk452XZNFbxkNPyUbnuHHP8RqEhiaWO2A7INW2ByoR%2Bt6qgwPEf8Rs4hN20svVNvMZTGebeDKoj69%2BZnsKPf4xkKApwQxs%2BVDEF%2FW98rCE%2BdoFYWiOklKAaoBI4QoRd%2FXwIUzlMoJoNIu6K0MD61Qr%2BwptD55L8MP6x1sIGOqUB%2B4ZRrG1iNIUyBi0veyz8fKFxN3F0Bk5Smgs%2BCY%2FzFpX0DRCl3H448Fi7PlNaXbScUUTaWUa%2FuxCjeLqbHC7QcWa55Veh8Ryjnuf6ySlIjQmstKhZiXvO58Qc7x5yhVtWKt4D8bvKZVwZzVPRFH%2BfXmmGW1aIRV2MO6%2BSDX9MrPeoeAY7Komt%2BXnPYbAY9dyeIpwAU9qI5iqitN4Pu%2BME9hDqh5n4&X-Amz-Signature=5020641b46ef2ea789bd6215cace4a571e8de8476e38d1607f611d31e8a0c1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNWKD5Z%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPJJZvZZmvfMZqE0shrFVTANxhVu6qlI7iSg5u7tqIcQIgTw3YDu12zbuCb9zdgP5Enq4TKdAU2Mj5SNAh0NX57xkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMl%2BGNUY8borU8WDCrcA%2FGD6SYc4az%2FlULAfvjD3p%2FALxr2cBDKUGul8dZQo9DCpMeIbl625pAVxSV79H8JYyS2S%2BVNZG5qu5tnKTopT8WDSF4ttkHXCu5U0mvxKAXn9Bsv3TJF6%2F4%2B4Liji1%2BQdfMJp5fZ3UXbb0NzfrOBK1AbOxAG%2FCkP8dzeBFgGziowup0UzZdL5u2da%2F5jsSGdZSWK5DEe4%2BYT71dvK25J7kU%2Bp2Eh54AmaS6fe2Jns2lvMG0NZNecR1CyDEDgDfUQB4hOWkoLO0ZEM%2F%2Fmu3hgeQDojJFvMWGR9VNdWlemyW%2BlOLuVPWgNTOnV1%2F7hftWpRajMHySFLYgdMT%2B60vgdkZbpopIDjKS7Lptpd7jWl%2FJkoH5K2xCBfb%2BJnce2IGXf0yLNLvgctKRSvNJuA4tPFrl93Nnp0b22QlcxhyAsRPhjI%2BjZETVJEo6uwdyXa7uXVhzNgfA1ccyo0VzgIwfhywVI6%2B7U5lk452XZNFbxkNPyUbnuHHP8RqEhiaWO2A7INW2ByoR%2Bt6qgwPEf8Rs4hN20svVNvMZTGebeDKoj69%2BZnsKPf4xkKApwQxs%2BVDEF%2FW98rCE%2BdoFYWiOklKAaoBI4QoRd%2FXwIUzlMoJoNIu6K0MD61Qr%2BwptD55L8MP6x1sIGOqUB%2B4ZRrG1iNIUyBi0veyz8fKFxN3F0Bk5Smgs%2BCY%2FzFpX0DRCl3H448Fi7PlNaXbScUUTaWUa%2FuxCjeLqbHC7QcWa55Veh8Ryjnuf6ySlIjQmstKhZiXvO58Qc7x5yhVtWKt4D8bvKZVwZzVPRFH%2BfXmmGW1aIRV2MO6%2BSDX9MrPeoeAY7Komt%2BXnPYbAY9dyeIpwAU9qI5iqitN4Pu%2BME9hDqh5n4&X-Amz-Signature=4d4593056b3550d3e9a82eb38db8d1416fd04b6ada160f97fa2e5478cced623e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
