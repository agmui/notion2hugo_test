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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZW5N4QQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI95BW60OSqyoZQ3WbXqz98y2ungCfQqNCSepAtk6HjAIhANyreUxtnrwulHV%2FOGqrRpquWTFGrxQzxfBM18uOX%2BdiKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTNthbwCsB9BRcbMoq3APZfCmk0T0N3AzfB0ahqukd5sKtW0wFVSQk4STruKflqpEufNmUDh3QGeMMjyNgBWucuU9m%2BacDVmux1kviLa1N56gS8A4F33QavIPBZaF8OPdcZtxjtqP7PuSCji%2BvvCEq8c02tNT%2BFgnmTBPjHv%2BCVAVjpq%2Bse30fQ8VI5QjGaoQ3EDHkaTqW4M6IhhrQ24Wm2J69S7s0gsqDb1H5BHwkb4y2QfEijUuu12mJCfHmpQjmpugBYfwrDPCo4fzISWqd%2BTSdiauOFfBb%2BY7lbAWj1GGlV%2FO2512le1Vc5mtnYkqBdY9ISMRAg2fSOkkL20J%2BbSPba3GIsmANf%2FOe2ccQChP0lQspXYoHJqRjGpVCKdd7XBZp%2FuMPyuo6YwBo5fzEFmuS1a4Gxp7k6%2BAGpeXhGyXAVaoocEXflEp9KdoSxseuSIN9gVKUhaQiLhtmLDRvkdeZfFc5qFQjWDz%2FK1ak8aE4f%2B%2BAZ8ALtazvTMbotA%2FRlNw1mvgVc4v23F4FCTRF%2BlvJF8QtpnGPZ0jF3d395JOhw1Bwmsf65chMF9SM3Td3zGs4GfyEwDLkfkyuRkPn5nDzA1zspl16X4%2FUSkDWJYW%2FlDoosGMQD2cRBLuS6Vm%2Flh7LbRYiss9b8zCJme%2FIBjqkAQaO4wuHTGaTw5tKck0F4KdoAfO5nuhSUP%2BodcNNsWjprJILZPL1JZQbmlYfX%2FT1A5t0X4TEnVRgclm4HDByKwy%2BCBc6qW4a7foAxB8jYTUZ%2BnU1eOG4PmHYnEPtr65iQO6AKprvXcbFRY9Ij2EZHCduvnk87kLQY7%2FH8fc7szos67aLIJfy%2BzAoa5M6mYJWphdSWracAo%2Bic3SeP53kVYoRIc6K&X-Amz-Signature=9802296f6a7939e331e595ba10ef36736b78db86f784bcfac15ea7a128f05d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZW5N4QQ%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI95BW60OSqyoZQ3WbXqz98y2ungCfQqNCSepAtk6HjAIhANyreUxtnrwulHV%2FOGqrRpquWTFGrxQzxfBM18uOX%2BdiKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTNthbwCsB9BRcbMoq3APZfCmk0T0N3AzfB0ahqukd5sKtW0wFVSQk4STruKflqpEufNmUDh3QGeMMjyNgBWucuU9m%2BacDVmux1kviLa1N56gS8A4F33QavIPBZaF8OPdcZtxjtqP7PuSCji%2BvvCEq8c02tNT%2BFgnmTBPjHv%2BCVAVjpq%2Bse30fQ8VI5QjGaoQ3EDHkaTqW4M6IhhrQ24Wm2J69S7s0gsqDb1H5BHwkb4y2QfEijUuu12mJCfHmpQjmpugBYfwrDPCo4fzISWqd%2BTSdiauOFfBb%2BY7lbAWj1GGlV%2FO2512le1Vc5mtnYkqBdY9ISMRAg2fSOkkL20J%2BbSPba3GIsmANf%2FOe2ccQChP0lQspXYoHJqRjGpVCKdd7XBZp%2FuMPyuo6YwBo5fzEFmuS1a4Gxp7k6%2BAGpeXhGyXAVaoocEXflEp9KdoSxseuSIN9gVKUhaQiLhtmLDRvkdeZfFc5qFQjWDz%2FK1ak8aE4f%2B%2BAZ8ALtazvTMbotA%2FRlNw1mvgVc4v23F4FCTRF%2BlvJF8QtpnGPZ0jF3d395JOhw1Bwmsf65chMF9SM3Td3zGs4GfyEwDLkfkyuRkPn5nDzA1zspl16X4%2FUSkDWJYW%2FlDoosGMQD2cRBLuS6Vm%2Flh7LbRYiss9b8zCJme%2FIBjqkAQaO4wuHTGaTw5tKck0F4KdoAfO5nuhSUP%2BodcNNsWjprJILZPL1JZQbmlYfX%2FT1A5t0X4TEnVRgclm4HDByKwy%2BCBc6qW4a7foAxB8jYTUZ%2BnU1eOG4PmHYnEPtr65iQO6AKprvXcbFRY9Ij2EZHCduvnk87kLQY7%2FH8fc7szos67aLIJfy%2BzAoa5M6mYJWphdSWracAo%2Bic3SeP53kVYoRIc6K&X-Amz-Signature=0054766dd976168413e0fb96696af89c53bbc3a7c458de5adc66b4d6374eb291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
