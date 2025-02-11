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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK3AD45%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B7elox2lJC5WNX%2Fff97Pn%2BKD%2F893fWck%2BgbHLwopq1gIgVUCG6gSCOEuG1cI47pxvBY1inOUfPomvDehVu6sG8fUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8rLY0SNlF9fobAGyrcA4%2FiF%2Be1AL6Dn6wukeI2258oS3O%2FkYnR4TEk%2F8GjCQWw8ud5xXfOVZyoeYHzvcfXYG09ZCst%2BgjrPjVOn9RsrMKWcJ1%2BNgp4nWIa9QJez%2BfVoKftNCVymwW28gbKU7EhsYpFe6ode7soQ5KUbmT1gZn8eVrhqV6xpz5U4UKoZ60EZs3ND6JLlR2F%2BBOV1C%2FC3wxebdG4vPfv0i0dpzhjnOLVDi7Ug3cYa626kS10RXxH0qXNyYpQDSmKrJwjIuvgQt1HfDZ5wf3B9gmoFtsgueb7BhLMUTAap%2B7PoaavQkl8AZE3igsjegnieMM3f7ixTeRZG0F94MRDgKiS%2BXycP0ZyGMDc2h%2BOC5Yz3J3cQ2O9qPKaqwHnrd212qRZNuJHyE0DvDnpNEwb3ESYIO5Xnia4IXek3bMZPrnpwgABhBk3SqaVDHw4IhnXRGuTWwvg%2BW976fzt1z5%2Bs%2BsV74v6WfEKDwFckNv0e0xd279gbA6bt0nJxUpgVD2isQpN1Uddk9lJoV0BWD9Fv4TfThOKUjJFsEHxHz1c0Hxz7UoYmXWYz0n2fU9jvQuYgy5KL3bSKTPS%2BcV675g%2BIzVxNrA6FWwWLfkrR7IS3Jz%2BS%2B1vprRQQIv%2BM1Y5wylUTevJMPb3rb0GOqUB0cnkKivXWicSSsyapajYrSJeWEZkDMa1CDpRz%2F%2F0XGJlRwM8%2B4KkirYjThFw65Wh89anXo3dpVWwVBCnwClYV4rtwySkX390eKVDSpjZMPalblxj1PgURrtSIOzKDcQ9vOkMsp67q5uO73b3ZXAqvEuctxaK%2FU9h29Dr2yn9vkQzEYePVj5j78Bf7Nn1HWDNG57QElR5kAw0hxIE7rWWB4YyoWgw&X-Amz-Signature=7664510a29972335106a990a8afacd840b648726e14ff5385da0c277a63cac4c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK3AD45%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B7elox2lJC5WNX%2Fff97Pn%2BKD%2F893fWck%2BgbHLwopq1gIgVUCG6gSCOEuG1cI47pxvBY1inOUfPomvDehVu6sG8fUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8rLY0SNlF9fobAGyrcA4%2FiF%2Be1AL6Dn6wukeI2258oS3O%2FkYnR4TEk%2F8GjCQWw8ud5xXfOVZyoeYHzvcfXYG09ZCst%2BgjrPjVOn9RsrMKWcJ1%2BNgp4nWIa9QJez%2BfVoKftNCVymwW28gbKU7EhsYpFe6ode7soQ5KUbmT1gZn8eVrhqV6xpz5U4UKoZ60EZs3ND6JLlR2F%2BBOV1C%2FC3wxebdG4vPfv0i0dpzhjnOLVDi7Ug3cYa626kS10RXxH0qXNyYpQDSmKrJwjIuvgQt1HfDZ5wf3B9gmoFtsgueb7BhLMUTAap%2B7PoaavQkl8AZE3igsjegnieMM3f7ixTeRZG0F94MRDgKiS%2BXycP0ZyGMDc2h%2BOC5Yz3J3cQ2O9qPKaqwHnrd212qRZNuJHyE0DvDnpNEwb3ESYIO5Xnia4IXek3bMZPrnpwgABhBk3SqaVDHw4IhnXRGuTWwvg%2BW976fzt1z5%2Bs%2BsV74v6WfEKDwFckNv0e0xd279gbA6bt0nJxUpgVD2isQpN1Uddk9lJoV0BWD9Fv4TfThOKUjJFsEHxHz1c0Hxz7UoYmXWYz0n2fU9jvQuYgy5KL3bSKTPS%2BcV675g%2BIzVxNrA6FWwWLfkrR7IS3Jz%2BS%2B1vprRQQIv%2BM1Y5wylUTevJMPb3rb0GOqUB0cnkKivXWicSSsyapajYrSJeWEZkDMa1CDpRz%2F%2F0XGJlRwM8%2B4KkirYjThFw65Wh89anXo3dpVWwVBCnwClYV4rtwySkX390eKVDSpjZMPalblxj1PgURrtSIOzKDcQ9vOkMsp67q5uO73b3ZXAqvEuctxaK%2FU9h29Dr2yn9vkQzEYePVj5j78Bf7Nn1HWDNG57QElR5kAw0hxIE7rWWB4YyoWgw&X-Amz-Signature=ffdb148e17275b0c5bc863ab3283b0ca10024ddd15260ee5167c6938bf75eb81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
