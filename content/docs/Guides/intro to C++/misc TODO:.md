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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBFV2OG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB7ycDxKO%2BKkuz7XJGVE0plK4IdLctFz4rkR6cwJ1vQlAiEA8CT9qYcAmcdmtkzJG%2BMEiJb4Ytmb0A30%2BlAXcPrpmAoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBral3D7%2Fe3UKtE8QyrcA%2F9IGasY%2FWSRsPTBw%2FWAh49MO%2F%2F6ojglNomr8EQBObgB9ZqIq8s6jm5DP3N5uLEaW7%2F%2BXelznDsEqbwmifPp87I1afpB25TUMGFWTHTdz93Vch9wd6BZylqJQaPFRV7mKMnHklIm0bMdEdzaE6HpOkGBT8MougH8coc1joSwUR6iqcTmGGXrjMbKCT5TGcaIYlK4G6tKas5IG%2F1diOI58yVBQa8fg8is5ShoKOqY0Qu1YqoCMN%2FWVJm6TOVRAmm8BNN%2FUdSX38waeLwfVV2gMaJ9AvYMMWN1LXEjGjyxXnPkLdFaolCoTJZonH248Bak1IVo5W8V3brkLAO%2BjUUqKG4mLqI7KBZPFMaZ6yspahygDkoEA3bzBR4LDu92vFsL4SEf%2BhBkOkEJMCsJ2LrXw%2BM0NSVN%2Fke1lqaStRk5tUS1qFZ%2BqoixJEE7tEI9TL2bDbN%2Fk4TqaIJqQcwAGIabgJQcW9nhcTFZeN9z%2BJBCo%2BGNr48jk5yh9Cgw1A9TuDxWT3td%2FbkUYGTsvh5ZVn4p5GyjEXMNGUsgmxlM6VEwsRrMBSDYt4n2GAB2CDyN1WFpS8PVpg1j74fMq86TlUjgUm9ZgmbfbjYkCF65DtsOCEtnfmjNgFQuiFSkccSNMO7958MGOqUB5CUDKpU2CVmrJjLlWCUhy8OPZoJBLSbEqXzbpCFecSkfx31%2BAWdDCcSnQFAL6r0xcuNY8BvTNEv%2BegvXi6SLhOwPxsYmuin09CM6%2FqgqRK2S%2B2QRMSzs53pl%2BVRDYSBigNrQHrFldnGLzvW70CrTvk492KPfc7QAF6PLZowLuy9a0d%2BUSYbcy0%2F80RwlEfDAWDbityeWQHBspG2fu%2BZm4JNbqQem&X-Amz-Signature=222957949b1d295aafb96d800e7a09b317f6e4e0842d924fc848de5ad00276af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBFV2OG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB7ycDxKO%2BKkuz7XJGVE0plK4IdLctFz4rkR6cwJ1vQlAiEA8CT9qYcAmcdmtkzJG%2BMEiJb4Ytmb0A30%2BlAXcPrpmAoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBral3D7%2Fe3UKtE8QyrcA%2F9IGasY%2FWSRsPTBw%2FWAh49MO%2F%2F6ojglNomr8EQBObgB9ZqIq8s6jm5DP3N5uLEaW7%2F%2BXelznDsEqbwmifPp87I1afpB25TUMGFWTHTdz93Vch9wd6BZylqJQaPFRV7mKMnHklIm0bMdEdzaE6HpOkGBT8MougH8coc1joSwUR6iqcTmGGXrjMbKCT5TGcaIYlK4G6tKas5IG%2F1diOI58yVBQa8fg8is5ShoKOqY0Qu1YqoCMN%2FWVJm6TOVRAmm8BNN%2FUdSX38waeLwfVV2gMaJ9AvYMMWN1LXEjGjyxXnPkLdFaolCoTJZonH248Bak1IVo5W8V3brkLAO%2BjUUqKG4mLqI7KBZPFMaZ6yspahygDkoEA3bzBR4LDu92vFsL4SEf%2BhBkOkEJMCsJ2LrXw%2BM0NSVN%2Fke1lqaStRk5tUS1qFZ%2BqoixJEE7tEI9TL2bDbN%2Fk4TqaIJqQcwAGIabgJQcW9nhcTFZeN9z%2BJBCo%2BGNr48jk5yh9Cgw1A9TuDxWT3td%2FbkUYGTsvh5ZVn4p5GyjEXMNGUsgmxlM6VEwsRrMBSDYt4n2GAB2CDyN1WFpS8PVpg1j74fMq86TlUjgUm9ZgmbfbjYkCF65DtsOCEtnfmjNgFQuiFSkccSNMO7958MGOqUB5CUDKpU2CVmrJjLlWCUhy8OPZoJBLSbEqXzbpCFecSkfx31%2BAWdDCcSnQFAL6r0xcuNY8BvTNEv%2BegvXi6SLhOwPxsYmuin09CM6%2FqgqRK2S%2B2QRMSzs53pl%2BVRDYSBigNrQHrFldnGLzvW70CrTvk492KPfc7QAF6PLZowLuy9a0d%2BUSYbcy0%2F80RwlEfDAWDbityeWQHBspG2fu%2BZm4JNbqQem&X-Amz-Signature=d01e45f4042c9ce52a4da6c30afc57f9c5095675b67ee64473ec4d6897f7901e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
