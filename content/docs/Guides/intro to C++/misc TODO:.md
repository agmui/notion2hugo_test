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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBXS6ZR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTlHg8VkDZBwQlVe8LEHx1wAeB3vPgX7mxtxlGRXD90AiBOECGKQCO65NaN%2FIpCZO%2BUW1joFscmnXeIaQ89TR%2Be1ir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMf3MLEqGrZc%2B64Av6KtwDTavy5G1QEOUmvVYIdM87pajWFYUnWIofh5c%2FGfgP2cM2hnppogH0enmYRd9lKzzj3lUppl2s4tOV%2Fif%2Blg5%2F3aMGUhbNLJsQpxXqfdYFKugEeS9H83XqIEYluOmu3y7g7QL6tmhrOgckFU3pbN52eYCNLxIS2vFI4hltIvP%2B9zNBUbfPeaRjp%2BF7bP2ei9Lw76ACQcsdVfyIAoRURid%2Fu0LRR21qV91PZnR2zPKBOukl8aJb90Fznn9RrHBL6WTT6JG48KzXa2o6faI7ZJtPHuv4kgIrn7T6C6SGyIilGzpkok5T6x0fYMyrgignWrHhj9TRoiLmjyDoDTIcjTU13t5B7USzk7B7ZOFKGp5Jh90%2BMssLECgXvlhV2DHVuFk0iJoV3JE7B%2FQnsCAFEEDiIAXG%2BWjLoSn9M6ln3pHj4RxC1B8l86EV4jGdhDzqQ%2B0P%2Bdsx64ZmzN4Ftq%2B1%2BVumpkvGC9Yfvm7ElJcy0yKklc9tr8JsQe0BEcdhD3GuPtyZsBRga2vHrHHIm%2BpHwOzlzBchADzfZdvgPw%2BY%2FQtfbzXNpsWA18PhsYnYGCxI2QzZr%2BR3Gvcj4%2Bz1XTvEyujfCjX5014RMzmOD%2FNAS0eMTXc8fS%2FYguj410YQePsw4LzZwQY6pgHwuhEMtzLPKfIJW6pFoMTFjr6N20ePnFxs%2BJu%2BufW%2Fn%2FKZhxq7KWyOHRmOZc%2BHhOZR24x5AzT3wNXUlaRBkYKUhcLQKfKVAEiw1f0z13z3YkGL9oxtmIAXt%2BTIqNt2l9waIBABloiR6YCW%2FY5JtiDqJicE3NUX8tkdsSKn4%2Bkb6Q%2BPiOBs040q8HwQ6kTOlj0PmETB7ko3YhhjLPdR5Xyr3eWiKE9i&X-Amz-Signature=dc8ed79ef257c2b5191e1e3d6d9f50b454cffdfe607241fcc5c6c3f60e347e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBXS6ZR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTlHg8VkDZBwQlVe8LEHx1wAeB3vPgX7mxtxlGRXD90AiBOECGKQCO65NaN%2FIpCZO%2BUW1joFscmnXeIaQ89TR%2Be1ir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMf3MLEqGrZc%2B64Av6KtwDTavy5G1QEOUmvVYIdM87pajWFYUnWIofh5c%2FGfgP2cM2hnppogH0enmYRd9lKzzj3lUppl2s4tOV%2Fif%2Blg5%2F3aMGUhbNLJsQpxXqfdYFKugEeS9H83XqIEYluOmu3y7g7QL6tmhrOgckFU3pbN52eYCNLxIS2vFI4hltIvP%2B9zNBUbfPeaRjp%2BF7bP2ei9Lw76ACQcsdVfyIAoRURid%2Fu0LRR21qV91PZnR2zPKBOukl8aJb90Fznn9RrHBL6WTT6JG48KzXa2o6faI7ZJtPHuv4kgIrn7T6C6SGyIilGzpkok5T6x0fYMyrgignWrHhj9TRoiLmjyDoDTIcjTU13t5B7USzk7B7ZOFKGp5Jh90%2BMssLECgXvlhV2DHVuFk0iJoV3JE7B%2FQnsCAFEEDiIAXG%2BWjLoSn9M6ln3pHj4RxC1B8l86EV4jGdhDzqQ%2B0P%2Bdsx64ZmzN4Ftq%2B1%2BVumpkvGC9Yfvm7ElJcy0yKklc9tr8JsQe0BEcdhD3GuPtyZsBRga2vHrHHIm%2BpHwOzlzBchADzfZdvgPw%2BY%2FQtfbzXNpsWA18PhsYnYGCxI2QzZr%2BR3Gvcj4%2Bz1XTvEyujfCjX5014RMzmOD%2FNAS0eMTXc8fS%2FYguj410YQePsw4LzZwQY6pgHwuhEMtzLPKfIJW6pFoMTFjr6N20ePnFxs%2BJu%2BufW%2Fn%2FKZhxq7KWyOHRmOZc%2BHhOZR24x5AzT3wNXUlaRBkYKUhcLQKfKVAEiw1f0z13z3YkGL9oxtmIAXt%2BTIqNt2l9waIBABloiR6YCW%2FY5JtiDqJicE3NUX8tkdsSKn4%2Bkb6Q%2BPiOBs040q8HwQ6kTOlj0PmETB7ko3YhhjLPdR5Xyr3eWiKE9i&X-Amz-Signature=9efccf08cad4a0056138a76d283279c2c8e76d70081d1394e0d4b000a07d29b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
