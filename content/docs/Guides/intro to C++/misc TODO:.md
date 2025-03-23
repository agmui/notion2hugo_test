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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNHX2LV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrtoHqAZ82lZoWb0mnjxYfZofJq%2BV1R0SveVLfSQtibQIgDpnr3ck42u230Sfz%2FKU9X0WJygxOkepz6TjF7oDDkY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFa87fIQQsa2TakkSircA2pHZeo6Dn00DqqpfDMmlHuQyxXydJAn1uDHJN1UjgWGGluRBEkPFwWIX5gItylZm5UCr3U%2BgUUFCvcKXZ643av%2F5c2104erBRXvGwZMGy21O0G8Jgz7K5utW0FUmkJp21s63rM8RcS2%2FIKkUFimms%2B6RasKtIuEUgIx93fhtEmWPuXYtuuPcv1c0mO3%2FYI7iVNGANsvJ7NXZEOAWsmBoDIolAbd3%2Fz1%2FCSgAQ%2FZ3Xl2ZqtOMMLVz5GQ15LnUr1j%2Bjwd0tc05oE10%2FbACN3S28tg0oFc%2Fc4rTRipJaErtz70IjYStzB5GjigqjwlGs5cvq2C3fqM5W80rkhVQmppXWVnc4jrgvqNK1YMa54yHnOmbCkuSxQofPZrOWL5yEECDnUzcEvYI2OaDQbwvBY4Van43WZ8pBVNdMfMkckdswqkRUKRJ8%2FDTAV7w%2B79xX0XnWCJ41FSY%2FV5n0fJm%2BAPpW%2FIJc5PhYLYxcIhHboGYqOiN5NOR0%2FujZdRJm9jqboN39lsst8FPFINOxF05WSM9%2FuXZf03NqSU2dKdikVeK%2BVihb1VTi5s5fRcYBOxAdkLZGKGqBneaoIllDhCd5BMo%2FUyNT79g0Rvy9pqhGYvPzvnBAHPT8q0INdufpn6MN3M%2F74GOqUBdP6eHiXBpiAjNOFHn2zMMB7h9OkWxVLuv5MM8TMVK5z9T8TEfCwZRGm%2BHqnT%2FtBXWxJx3jiqq7TbvV7PJvx8rQhoHpwvKRYEznd0vEfgshwIdu9C7zumS6ns4JQ%2F9rPa%2F9Qj8AdY56jzZuHGrDzQEJwLgGJW%2F9PImvIo49ovnPqHdYjmeoySTfeznjvpbZpHls4FwvnvXLicrLTned1YgGNgzYW1&X-Amz-Signature=12eacc84c021e6bf580adcb0aa58c8b3a592a98c94708f90072d8eaea3fe72fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNHX2LV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDrtoHqAZ82lZoWb0mnjxYfZofJq%2BV1R0SveVLfSQtibQIgDpnr3ck42u230Sfz%2FKU9X0WJygxOkepz6TjF7oDDkY0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFa87fIQQsa2TakkSircA2pHZeo6Dn00DqqpfDMmlHuQyxXydJAn1uDHJN1UjgWGGluRBEkPFwWIX5gItylZm5UCr3U%2BgUUFCvcKXZ643av%2F5c2104erBRXvGwZMGy21O0G8Jgz7K5utW0FUmkJp21s63rM8RcS2%2FIKkUFimms%2B6RasKtIuEUgIx93fhtEmWPuXYtuuPcv1c0mO3%2FYI7iVNGANsvJ7NXZEOAWsmBoDIolAbd3%2Fz1%2FCSgAQ%2FZ3Xl2ZqtOMMLVz5GQ15LnUr1j%2Bjwd0tc05oE10%2FbACN3S28tg0oFc%2Fc4rTRipJaErtz70IjYStzB5GjigqjwlGs5cvq2C3fqM5W80rkhVQmppXWVnc4jrgvqNK1YMa54yHnOmbCkuSxQofPZrOWL5yEECDnUzcEvYI2OaDQbwvBY4Van43WZ8pBVNdMfMkckdswqkRUKRJ8%2FDTAV7w%2B79xX0XnWCJ41FSY%2FV5n0fJm%2BAPpW%2FIJc5PhYLYxcIhHboGYqOiN5NOR0%2FujZdRJm9jqboN39lsst8FPFINOxF05WSM9%2FuXZf03NqSU2dKdikVeK%2BVihb1VTi5s5fRcYBOxAdkLZGKGqBneaoIllDhCd5BMo%2FUyNT79g0Rvy9pqhGYvPzvnBAHPT8q0INdufpn6MN3M%2F74GOqUBdP6eHiXBpiAjNOFHn2zMMB7h9OkWxVLuv5MM8TMVK5z9T8TEfCwZRGm%2BHqnT%2FtBXWxJx3jiqq7TbvV7PJvx8rQhoHpwvKRYEznd0vEfgshwIdu9C7zumS6ns4JQ%2F9rPa%2F9Qj8AdY56jzZuHGrDzQEJwLgGJW%2F9PImvIo49ovnPqHdYjmeoySTfeznjvpbZpHls4FwvnvXLicrLTned1YgGNgzYW1&X-Amz-Signature=631d13194faac24779dce98f42c7d146066c963b4ac0cf229dfbada551d78d18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
