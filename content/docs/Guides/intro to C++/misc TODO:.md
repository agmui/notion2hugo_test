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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZ4GLLK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCKjYdDSPDQGcS2HF15sac7Rw9SfppLzckVWwNYqtzCLAIgU%2BUgHvnkTFfrfEIRBhrP4TkhCRmQosYV%2B5o74GmNBOQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbdSM8%2BLV0DZ0FfNCrcA4yhPW9Fo%2BEQJoBcwNKuml%2FA9ObJhnAOy16P6dGGrLE4Ry9u0krZJ2%2FwoGop%2FzmAGrnFiYKUuWH%2BzoC4LOivZ2cpUdDyESmsb%2BMnc07ShKdaHpX9Vgg09Y4Vh1zsxMh3EV5It0C5z0uMdvKe1DkTr1nyd7xc%2BnOWs7gfmoYGYLd6xwT8BBIJc%2B51%2F3UFcpmjjlZdXZfd%2Bgw1kNc0MW69x9h7S7cAqIe0N1pN%2BOAtPIH6s39Gv5xVE8TStYDWNJy4VBLucDl4GBy%2BBDHOFQYBEWVQ8TpB960ZRL0I8SiC39wOoBSL3NtDjtDcfjY8C%2F%2B8EekQwUDwmj7X7KVB0fOOVUeeUGGFaL9A3fo8HwOutc%2FEl%2BsyTpfGk5xwm0Fy4qBg55IOLxBX4sX8vVOxKDRawX6f%2F9K0hBHVAbBVdnyn%2FzP3MmkfZymH3nMLOz5OQzjruOOoUronCUT8BF8v724hckHCVO5OgxIdcR%2FFeMf3ixKLgQiZLUYwMdUFcHVfnV2x%2BP0odhp0tibh2%2BXXbnEVsOFydHhTo8v6JQHFjyuFcpVNFIt1eBhXWjr7U%2FRWQl47cAD2N2HlSqLujUK%2F1txEKOV2Dh84z%2BXM9JK30%2Bus5hqX4WpjgEXYNM1puGeJML6myMAGOqUBiBkrhlF9tDB50pYVXCYdfRqFi3edPiSrSlV%2FEJRn6ItuwjqKCM4%2BUf0CqV%2BjqoKVP6jcNblaVsq5yHq5tYAYCxASgsLR5vZX7W%2Bw5%2FfygLr8jJloOT3rFXSMdwplY0fFSKBPFdRWeYQQxGGz7ZqEYNfwazc9VLCzfRaHRBUOiQolXTArun4%2FZWeYkx42PvakUouTpZ3H%2Bv2uen2kMv8pDYVolm83&X-Amz-Signature=bdbcc25c9d1959b5e1aaf4e92cdc9f440993f9368e1c8e412ce76761e54f3419&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZ4GLLK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCKjYdDSPDQGcS2HF15sac7Rw9SfppLzckVWwNYqtzCLAIgU%2BUgHvnkTFfrfEIRBhrP4TkhCRmQosYV%2B5o74GmNBOQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbdSM8%2BLV0DZ0FfNCrcA4yhPW9Fo%2BEQJoBcwNKuml%2FA9ObJhnAOy16P6dGGrLE4Ry9u0krZJ2%2FwoGop%2FzmAGrnFiYKUuWH%2BzoC4LOivZ2cpUdDyESmsb%2BMnc07ShKdaHpX9Vgg09Y4Vh1zsxMh3EV5It0C5z0uMdvKe1DkTr1nyd7xc%2BnOWs7gfmoYGYLd6xwT8BBIJc%2B51%2F3UFcpmjjlZdXZfd%2Bgw1kNc0MW69x9h7S7cAqIe0N1pN%2BOAtPIH6s39Gv5xVE8TStYDWNJy4VBLucDl4GBy%2BBDHOFQYBEWVQ8TpB960ZRL0I8SiC39wOoBSL3NtDjtDcfjY8C%2F%2B8EekQwUDwmj7X7KVB0fOOVUeeUGGFaL9A3fo8HwOutc%2FEl%2BsyTpfGk5xwm0Fy4qBg55IOLxBX4sX8vVOxKDRawX6f%2F9K0hBHVAbBVdnyn%2FzP3MmkfZymH3nMLOz5OQzjruOOoUronCUT8BF8v724hckHCVO5OgxIdcR%2FFeMf3ixKLgQiZLUYwMdUFcHVfnV2x%2BP0odhp0tibh2%2BXXbnEVsOFydHhTo8v6JQHFjyuFcpVNFIt1eBhXWjr7U%2FRWQl47cAD2N2HlSqLujUK%2F1txEKOV2Dh84z%2BXM9JK30%2Bus5hqX4WpjgEXYNM1puGeJML6myMAGOqUBiBkrhlF9tDB50pYVXCYdfRqFi3edPiSrSlV%2FEJRn6ItuwjqKCM4%2BUf0CqV%2BjqoKVP6jcNblaVsq5yHq5tYAYCxASgsLR5vZX7W%2Bw5%2FfygLr8jJloOT3rFXSMdwplY0fFSKBPFdRWeYQQxGGz7ZqEYNfwazc9VLCzfRaHRBUOiQolXTArun4%2FZWeYkx42PvakUouTpZ3H%2Bv2uen2kMv8pDYVolm83&X-Amz-Signature=654b037d2df6a560bfc821742c25cc1d36f34b92818e34742b5335bd724adcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
