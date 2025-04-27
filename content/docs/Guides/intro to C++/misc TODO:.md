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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKFOHAA7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPKyjnjL120h2p8uTfi9Y991KEU4KNbFqF597S9aJ0FwIhAIEcfiWPjMFkufC4GPe8b2IKXgCbYHhr%2Fw7y2%2Falan9nKv8DCFoQABoMNjM3NDIzMTgzODA1IgwCUGQjMu9dGIzhG5oq3AMtKSHVE27whClZSW%2BlfS%2F8BXod7bSQH0%2BLFJ4pX%2B5eAd9sZ8X%2FyIBUWRe5TJt1KruqEwMNgAd2vhqwmqr970%2B5FSXYVfK%2F3t63ZuWOcy5uOeFL3CYD4FWT0%2FONGlGp1fdQnNHnLXrhMAbBsyY7Rr3mr8BLyS9Sk5tnol2yzYBPzYCptOHhp5PnCpOYZYbML22409II%2FmUD93Ai%2B8HUxi1KRE92%2Fj0%2FZyjX%2B8HVxm5U8woYJ4vOpFMuJMDa7lPk%2BQb9nhL2%2F%2BMhXzMjBwiyWNOiqq1C3xUYPYNmx1%2B91%2BXEB4cy1HI729YEK4%2B%2Fwh9F4PCECo5a2%2BsYbH%2FB8ws1zNTKWTo6m2xOo%2BRwu71%2FJXZv3MJjsxZo28NSV1fihkM6I7bgGoglZe1EfWMQ9SpXHSP4xMCDc9VovXGu2l0z1h8mbMvwSE%2Fi7FAuWu8fTrc7gNMPn1qOU%2Ba7QutVi62Bgj34umdsFbeOTOkmwE1nNodxj21sHW%2Fb3j0xUCP7%2Fx6n0WsABxLSCeCbpnvRpIK18aBaOAMMAsijeWPoRB1pzEqLpWledps94k34FP%2Bxqi6vV%2BEZKobARPI8%2Ft5CAOWIsfhodOIsl9J7dNQyIeV5u9GTDyjdu%2BjXOdxmKU%2B3hzCG57fABjqkAcReIRqAQW6PnFyl7L9Pt7ii9xceMPhXNWX9xDBvbm%2FcGNnpwPICi1ce8n9%2BfKEoXt7bxkWrWTq3WhzpblOEuPPQl02GsOmKRAitC3lAcOpzBI1NUl3bTY8ptaxEgLDGuRCzgoqg0%2BqJljMciLXBZlP2KBH6xAfT%2BoxkBpwvvJ2nJk%2FueAw1yECKqdQgW1EC%2FkqwAjAa%2BLbL0M%2BERqqp43Qg39lt&X-Amz-Signature=800c659750a496b591500bac27606b41f4397103ea4eeb87aa2d18b655df0e81&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKFOHAA7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPKyjnjL120h2p8uTfi9Y991KEU4KNbFqF597S9aJ0FwIhAIEcfiWPjMFkufC4GPe8b2IKXgCbYHhr%2Fw7y2%2Falan9nKv8DCFoQABoMNjM3NDIzMTgzODA1IgwCUGQjMu9dGIzhG5oq3AMtKSHVE27whClZSW%2BlfS%2F8BXod7bSQH0%2BLFJ4pX%2B5eAd9sZ8X%2FyIBUWRe5TJt1KruqEwMNgAd2vhqwmqr970%2B5FSXYVfK%2F3t63ZuWOcy5uOeFL3CYD4FWT0%2FONGlGp1fdQnNHnLXrhMAbBsyY7Rr3mr8BLyS9Sk5tnol2yzYBPzYCptOHhp5PnCpOYZYbML22409II%2FmUD93Ai%2B8HUxi1KRE92%2Fj0%2FZyjX%2B8HVxm5U8woYJ4vOpFMuJMDa7lPk%2BQb9nhL2%2F%2BMhXzMjBwiyWNOiqq1C3xUYPYNmx1%2B91%2BXEB4cy1HI729YEK4%2B%2Fwh9F4PCECo5a2%2BsYbH%2FB8ws1zNTKWTo6m2xOo%2BRwu71%2FJXZv3MJjsxZo28NSV1fihkM6I7bgGoglZe1EfWMQ9SpXHSP4xMCDc9VovXGu2l0z1h8mbMvwSE%2Fi7FAuWu8fTrc7gNMPn1qOU%2Ba7QutVi62Bgj34umdsFbeOTOkmwE1nNodxj21sHW%2Fb3j0xUCP7%2Fx6n0WsABxLSCeCbpnvRpIK18aBaOAMMAsijeWPoRB1pzEqLpWledps94k34FP%2Bxqi6vV%2BEZKobARPI8%2Ft5CAOWIsfhodOIsl9J7dNQyIeV5u9GTDyjdu%2BjXOdxmKU%2B3hzCG57fABjqkAcReIRqAQW6PnFyl7L9Pt7ii9xceMPhXNWX9xDBvbm%2FcGNnpwPICi1ce8n9%2BfKEoXt7bxkWrWTq3WhzpblOEuPPQl02GsOmKRAitC3lAcOpzBI1NUl3bTY8ptaxEgLDGuRCzgoqg0%2BqJljMciLXBZlP2KBH6xAfT%2BoxkBpwvvJ2nJk%2FueAw1yECKqdQgW1EC%2FkqwAjAa%2BLbL0M%2BERqqp43Qg39lt&X-Amz-Signature=9ea5218f8bfecc00812732b03d02cd191846a471cf933a1df0aa85a2266e9dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
