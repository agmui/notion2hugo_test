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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRU7PTPC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDz0YL1A3So1DXgxqYRoUCWyv9KdL8TQRQR13pa5hEUPwIgR8QNE%2FGonhhRrA85kna%2BoclTQxS4C39wlkOXXfr2QaMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEDhQTXSibwlX6W3vSrcA0oyyYssgbXoUjzAlzPTlw%2Bi%2FmoGWgZykt3GXA%2FRpQdxZhPugiC%2FymI6TLBuTKEH5aoNB3hlVNyJqyC2kI2T97gP1juY32Htrmp4zRzSWQxOgKCVfpwJtR2YLmgNlASUOoK1fC43jHs2W%2Fp7Ei%2Bm%2BGm8Rr4W3sx%2BSgZoFcH4D2LSoF9xCZUaG2AnCi1Ghnt6YLxgO1fpenlR3mIMx29%2B23E3gNVWOgTTLwNiKcFkXVEPGyNFmDwitJFWUryL7ZeGAOa6aIjFKmNtzw2WQj94yzAWH4Gb7DHPg8POYmNZNbahuUmLAa%2Bm4lLSwVy%2FpWjAmlFusDt5gGlO9a44q%2BznwY3XVpq%2FrMqp51TnN9zRR3gpxY02ztRdRUynQfK35zBihv1v%2Be8bnOTTQxRVz2CwbXohqE1DkOEEHjCcJFsPJOA7wmNKLvfKrwlYDRs4d6PM9H9G%2FPpEsK%2FNR%2BVkqaSj%2Bh%2FoDL3tHf7OB0Vc1lClseO6cgn%2BAYUryOwDIHspmmhlnWR3TXQ2w7Ku5W%2FcNXING9V%2B3zy4wzS%2BoZczJO2Jql3apOmF736yyy9XWvWWs%2FWNqZzk0Og0seH%2FL9Wgjxd8Vnfq%2F7Np%2BtIcFn9XTTW8PhMIeXfdSlEJV2EDJnLTMNvupcMGOqUBF4PH%2BWnYQJ3Il2x45Wo5CljtpC7eV5KHxMj4vN%2B4K5ZlLdeuAcsIuSoQzuEoOZcWwJk3SsWWe14GlJ8MJa4APFKWnRMMQrNYXk5nb%2FJRnVNxiIoLMisAhRFBVwvSet6oNwRXG%2FvgabySPVQzHXjZ9minuc5qesqY7NJ2qgCKcouta6JqlkQCqTwB%2BNBKTHEKGpMP42EfdtrYs%2FXU7GTqG2eTXo0C&X-Amz-Signature=d4b62f0805f38270c6deb22ea19f993e5d5216d4e0ab6ccfd44c9806c456192d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRU7PTPC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDz0YL1A3So1DXgxqYRoUCWyv9KdL8TQRQR13pa5hEUPwIgR8QNE%2FGonhhRrA85kna%2BoclTQxS4C39wlkOXXfr2QaMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEDhQTXSibwlX6W3vSrcA0oyyYssgbXoUjzAlzPTlw%2Bi%2FmoGWgZykt3GXA%2FRpQdxZhPugiC%2FymI6TLBuTKEH5aoNB3hlVNyJqyC2kI2T97gP1juY32Htrmp4zRzSWQxOgKCVfpwJtR2YLmgNlASUOoK1fC43jHs2W%2Fp7Ei%2Bm%2BGm8Rr4W3sx%2BSgZoFcH4D2LSoF9xCZUaG2AnCi1Ghnt6YLxgO1fpenlR3mIMx29%2B23E3gNVWOgTTLwNiKcFkXVEPGyNFmDwitJFWUryL7ZeGAOa6aIjFKmNtzw2WQj94yzAWH4Gb7DHPg8POYmNZNbahuUmLAa%2Bm4lLSwVy%2FpWjAmlFusDt5gGlO9a44q%2BznwY3XVpq%2FrMqp51TnN9zRR3gpxY02ztRdRUynQfK35zBihv1v%2Be8bnOTTQxRVz2CwbXohqE1DkOEEHjCcJFsPJOA7wmNKLvfKrwlYDRs4d6PM9H9G%2FPpEsK%2FNR%2BVkqaSj%2Bh%2FoDL3tHf7OB0Vc1lClseO6cgn%2BAYUryOwDIHspmmhlnWR3TXQ2w7Ku5W%2FcNXING9V%2B3zy4wzS%2BoZczJO2Jql3apOmF736yyy9XWvWWs%2FWNqZzk0Og0seH%2FL9Wgjxd8Vnfq%2F7Np%2BtIcFn9XTTW8PhMIeXfdSlEJV2EDJnLTMNvupcMGOqUBF4PH%2BWnYQJ3Il2x45Wo5CljtpC7eV5KHxMj4vN%2B4K5ZlLdeuAcsIuSoQzuEoOZcWwJk3SsWWe14GlJ8MJa4APFKWnRMMQrNYXk5nb%2FJRnVNxiIoLMisAhRFBVwvSet6oNwRXG%2FvgabySPVQzHXjZ9minuc5qesqY7NJ2qgCKcouta6JqlkQCqTwB%2BNBKTHEKGpMP42EfdtrYs%2FXU7GTqG2eTXo0C&X-Amz-Signature=0c75299b2d36b5a01dcff1be912d111416fdf158482943672ef7027893cae6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
