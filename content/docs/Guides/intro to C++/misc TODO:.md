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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVTGTIV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIC59Xmy1tjRKwnFkXFg1Vh2g%2B16eMBpMaDmjRSfWDZhMAiEAqGwvW9q9%2BhxOoNvjBisTv64T%2Fp2rWL2jTJVzMdA4SmcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCwSRzEeAjjcgMUAircA6JfFMBXLTbZy3pxc4hoN9sHa%2B2u%2BgxgQQrC6IPotRr7mEndFj22SsDHjlH5U3OwZTskeQ1H0SquSRXoIhIUHoLDed9l27Q6s1CX%2FNWvxM6aZXSV2rhPSKZr84sACDK0uDwQKkubK4biPp%2BW7XgF47VvVkx2aeqIkjj%2BP27uW6o71rsGKIZPqCcBtuLWJm9X39iTe0MuUm0uBJan52SPXHgdqYF27sjytYOnMMGlWrREu0iQO9mQANlTVn%2Ff76SkU0oyaUahc6qWWTBenHHpGPyJwP1WImztUtHAJxmLw%2FlzI0D61%2Bqo9m9lqz%2Fbnqq0WHrQQjmfz78%2FkO%2BIlGIzn9zbY%2BKoC2vPigsu2xH9KbH4L4kV7m06uWBz%2BDA0aDELngdPzZn%2BK3N%2FxxMn4XQRRIa%2FbPiiiawkndVag9bN%2Fuc%2F8M%2FRvdLkFUqSFCQIyb6Mpdd0LhLv4qoWtbxVWf9iLloUMWL2KJL6UrV4OdKd0zYHAMA%2F9kP2YyWXs5vwACw8p%2F7xgpy4eAFZDi2PLhY07kecxsW6XUjexdKzaP%2Fhj0RV%2BxFMBPKbK%2FaGAKW6zc9Yg5ZOrhqTFIM4zQwFICJDNXuIWPZ0F3BtyogZBF3hvZF1gN%2FGSqS6Mk422KWVMNKHnb0GOqUBnRgJcyPB2O1Va9aBkOSau5RTEvE3QGBBBg%2FfqvdtMk5B0%2B7ecpSVfkuRSm6WbbDd6cDBr8k5opSsI73w0EDKXFdu6l1bKLToISLE7aTh%2B1cnsjWHCRTklzC9w8ZA6PeLLDHlUd4ypLVBFoEBwDiAY39%2F%2FcrK%2BptWJNZ1GhR7tG6F4PfEETLvDSfAF%2BpwPC%2BdBHpqAPkbrBbI11lajxfDLle2KcX0&X-Amz-Signature=e6b30e32f3f6c93af80acac31e0cf17c807a44de90416127eb9a1eddfc48fc57&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVTGTIV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIC59Xmy1tjRKwnFkXFg1Vh2g%2B16eMBpMaDmjRSfWDZhMAiEAqGwvW9q9%2BhxOoNvjBisTv64T%2Fp2rWL2jTJVzMdA4SmcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCwSRzEeAjjcgMUAircA6JfFMBXLTbZy3pxc4hoN9sHa%2B2u%2BgxgQQrC6IPotRr7mEndFj22SsDHjlH5U3OwZTskeQ1H0SquSRXoIhIUHoLDed9l27Q6s1CX%2FNWvxM6aZXSV2rhPSKZr84sACDK0uDwQKkubK4biPp%2BW7XgF47VvVkx2aeqIkjj%2BP27uW6o71rsGKIZPqCcBtuLWJm9X39iTe0MuUm0uBJan52SPXHgdqYF27sjytYOnMMGlWrREu0iQO9mQANlTVn%2Ff76SkU0oyaUahc6qWWTBenHHpGPyJwP1WImztUtHAJxmLw%2FlzI0D61%2Bqo9m9lqz%2Fbnqq0WHrQQjmfz78%2FkO%2BIlGIzn9zbY%2BKoC2vPigsu2xH9KbH4L4kV7m06uWBz%2BDA0aDELngdPzZn%2BK3N%2FxxMn4XQRRIa%2FbPiiiawkndVag9bN%2Fuc%2F8M%2FRvdLkFUqSFCQIyb6Mpdd0LhLv4qoWtbxVWf9iLloUMWL2KJL6UrV4OdKd0zYHAMA%2F9kP2YyWXs5vwACw8p%2F7xgpy4eAFZDi2PLhY07kecxsW6XUjexdKzaP%2Fhj0RV%2BxFMBPKbK%2FaGAKW6zc9Yg5ZOrhqTFIM4zQwFICJDNXuIWPZ0F3BtyogZBF3hvZF1gN%2FGSqS6Mk422KWVMNKHnb0GOqUBnRgJcyPB2O1Va9aBkOSau5RTEvE3QGBBBg%2FfqvdtMk5B0%2B7ecpSVfkuRSm6WbbDd6cDBr8k5opSsI73w0EDKXFdu6l1bKLToISLE7aTh%2B1cnsjWHCRTklzC9w8ZA6PeLLDHlUd4ypLVBFoEBwDiAY39%2F%2FcrK%2BptWJNZ1GhR7tG6F4PfEETLvDSfAF%2BpwPC%2BdBHpqAPkbrBbI11lajxfDLle2KcX0&X-Amz-Signature=710ebec1438e09fb39c9497488dd4a2cdf5c0843a5b30e66865fa8a0a41dcb70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
