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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQQVKR7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxK8YlohJ%2BYuj5DkO5wivTzsAPQFcgkANrfII4%2BlPAFAiA5jfOKiPbeWB%2BMIpc72rZhWBOL6p6xVklN%2FUGMjD7j4CqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlw5Yk6SYFkSJU3jGKtwDDMMs592foNQUa%2FRuBUTe3r6VQNiaPx40Hz1LWHuNZqXA7ehv2rRck57MYWiqY%2B7ww2CbtgoLvHJY2IAzYYdTV61IWu3arp%2BcbVCjez22M%2FvvaEyQCt38TwTj8%2BdqUd4zkXHM76bcYlGMCK9QRphr0eHqEvnVijxfA17xKcaXPOpypJI7m85SHIF880GWdbvWqFKQcKe%2F%2FZ8VKFI%2FiuZ7v%2Fpp07bwZCRArHgvMpmUgA3eirGlHdWdFEURSXu0AaJeevhSs2TEnCU2wo1W%2F06iJLHoCdVvaIFX2FQjk8zWEmMWni6ddsnWFEYrhB3%2FZSTgQGoxdZNRm%2BKKi8Z5DPN5JkGyYeigwYlZn6l8z7L3vBiyDmbGpL5TXpVJbNeJ0WrczwTPKBV3HgP3hLCiF%2FKhGHSiZtiavtJelakHVCcR5Tr0Ge%2B0Mnc6bmcyw6WKyWMZnMbmyS366F15%2FlrrHzlrhJJqotL1KsGAQWr0kjX3ohtPC4uEwoYqP%2BtuqBu3VPYa4wXwi%2F2oZE2KcocRT0%2F%2FgGIhNfVcB7rOhS749bWXMtJC89ye5WCO%2BLuDmEHTAU7XsxZ%2FVZesenYu8fNQr3u2bXn56DqhLSDqOAmQHDMP5LxkB7lra9jgNCubFBMw1q2uvQY6pgFP8CABGsG5PXTLGQ5bAOEIK2v76qxxpgLjThmTnrLTUkEjRumZxDEp812YM6JsfGfNNc6AFLDZmG9isAwEoM%2F%2B4OX4ALCClXhe%2BDa5pBEE2bPtduwyLharZ90RQFdDHKYJGYWP6VZLkvxZ5iVsOZMM%2BJLjVgO8x2L2xUfNcLP247d%2BdcBPhoZ4jcTCDj2QznDJuNEtPVU%2BLn7WQhIRS7y7L9IpAQ0z&X-Amz-Signature=50d2f916a057238338eec3b22c81f3f20b7d4090c5a8b4831b540f1d6b67d9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQQVKR7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxK8YlohJ%2BYuj5DkO5wivTzsAPQFcgkANrfII4%2BlPAFAiA5jfOKiPbeWB%2BMIpc72rZhWBOL6p6xVklN%2FUGMjD7j4CqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlw5Yk6SYFkSJU3jGKtwDDMMs592foNQUa%2FRuBUTe3r6VQNiaPx40Hz1LWHuNZqXA7ehv2rRck57MYWiqY%2B7ww2CbtgoLvHJY2IAzYYdTV61IWu3arp%2BcbVCjez22M%2FvvaEyQCt38TwTj8%2BdqUd4zkXHM76bcYlGMCK9QRphr0eHqEvnVijxfA17xKcaXPOpypJI7m85SHIF880GWdbvWqFKQcKe%2F%2FZ8VKFI%2FiuZ7v%2Fpp07bwZCRArHgvMpmUgA3eirGlHdWdFEURSXu0AaJeevhSs2TEnCU2wo1W%2F06iJLHoCdVvaIFX2FQjk8zWEmMWni6ddsnWFEYrhB3%2FZSTgQGoxdZNRm%2BKKi8Z5DPN5JkGyYeigwYlZn6l8z7L3vBiyDmbGpL5TXpVJbNeJ0WrczwTPKBV3HgP3hLCiF%2FKhGHSiZtiavtJelakHVCcR5Tr0Ge%2B0Mnc6bmcyw6WKyWMZnMbmyS366F15%2FlrrHzlrhJJqotL1KsGAQWr0kjX3ohtPC4uEwoYqP%2BtuqBu3VPYa4wXwi%2F2oZE2KcocRT0%2F%2FgGIhNfVcB7rOhS749bWXMtJC89ye5WCO%2BLuDmEHTAU7XsxZ%2FVZesenYu8fNQr3u2bXn56DqhLSDqOAmQHDMP5LxkB7lra9jgNCubFBMw1q2uvQY6pgFP8CABGsG5PXTLGQ5bAOEIK2v76qxxpgLjThmTnrLTUkEjRumZxDEp812YM6JsfGfNNc6AFLDZmG9isAwEoM%2F%2B4OX4ALCClXhe%2BDa5pBEE2bPtduwyLharZ90RQFdDHKYJGYWP6VZLkvxZ5iVsOZMM%2BJLjVgO8x2L2xUfNcLP247d%2BdcBPhoZ4jcTCDj2QznDJuNEtPVU%2BLn7WQhIRS7y7L9IpAQ0z&X-Amz-Signature=1648da24bd813409998d08ae524d955626fa20a8b782b69b50855adbbee15e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
