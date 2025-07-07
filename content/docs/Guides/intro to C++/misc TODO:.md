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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2QEVXZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDlTjPVyTw208Anq9CmgLMXVKedTbj9p2alPOcduUaVLgIgNCClxQJudqDrgsphJHX96wYFTjkqh8It186A0ojSodMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDyxaxBQZZNvB6zWZSrcA4bZbHLEwOZtrS4an4b%2FuT6RK4Ikf6miUQnPyIJsIKjd3phe3XOsQcQsdQDl%2BWdmP7QPyxDqShZzKHpTDRUcjcWmd28mvj8O%2B5GqMlczKqQSHc%2BUMrVC%2FB7vcqfQRbgOUy1aycsMOTuR1%2FxCLi8YcpOz5BKEixns2mJp%2F9x6I7HPK5a%2Bb2up9vnAguO1oxkteI6%2BWQJnN%2BliXtPY%2Fc8z2km%2FsJHMMZOJihXpwzJVlxsM3F6JBW63A%2FvqLYWi2PNTn6ISgeZP4OD1DxW1W5oeeFEznezC0c8jrgYzpskEKiWzUiQ54PTJxmroi3O8pfmhJNbOZPGNTv3m8h%2FCzdG%2BMHF0sZiJdKPaxCE58KF4ZCRYUsHfw%2BOMU8lBoNngL919Wj%2BERR4AypdWQbfsjUBhYF4OiUbs8QnX7cWWIsHPUARMtScvq2fRWFZjCdVsts%2FzAZQHKxkiEA9NblhuIqbvTyI1uWzG4uEioa%2BB3Ds5wFec9HyvvN%2BbNA1oNH3mb2L%2FgAGKh4xFEfCVldZk%2FFnjuuaMCoXSV243rRcGmbNgSwCzdML4omZtQunC2ZFE2A2xIQ5usSYB6ynlnKgsm22fWNMXeZvBv64KAgH5KXbzm6B4PV4YXl5NcTUpAAEBMN65rcMGOqUB2j403jdPwEuQwGJ4io4ym0relwSGNfW5uEUEbXP3P3gAd5hD%2BE6kXcMLnuH%2BM59Fd8ENqG9SVn562vO6xaVaODE9QPUoUEf38tU3T1WbC3tMuEaNStWCQBF90guqMAtdnS%2FQxKCaGB22G%2Fy21GzoXKXnfiqf3GEmmw%2F9eeVmA4j0GHZ%2BsYRNEhN%2FQHOfZsFX2sKesMQ%2BhNGr4XAQ2eNIvQ%2FseR7o&X-Amz-Signature=2eab0b6dcb1e5e49b3bc7e7bce35cbd3ed6fb5a7633e8d8b52c01f3a575f73d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2QEVXZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDlTjPVyTw208Anq9CmgLMXVKedTbj9p2alPOcduUaVLgIgNCClxQJudqDrgsphJHX96wYFTjkqh8It186A0ojSodMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDyxaxBQZZNvB6zWZSrcA4bZbHLEwOZtrS4an4b%2FuT6RK4Ikf6miUQnPyIJsIKjd3phe3XOsQcQsdQDl%2BWdmP7QPyxDqShZzKHpTDRUcjcWmd28mvj8O%2B5GqMlczKqQSHc%2BUMrVC%2FB7vcqfQRbgOUy1aycsMOTuR1%2FxCLi8YcpOz5BKEixns2mJp%2F9x6I7HPK5a%2Bb2up9vnAguO1oxkteI6%2BWQJnN%2BliXtPY%2Fc8z2km%2FsJHMMZOJihXpwzJVlxsM3F6JBW63A%2FvqLYWi2PNTn6ISgeZP4OD1DxW1W5oeeFEznezC0c8jrgYzpskEKiWzUiQ54PTJxmroi3O8pfmhJNbOZPGNTv3m8h%2FCzdG%2BMHF0sZiJdKPaxCE58KF4ZCRYUsHfw%2BOMU8lBoNngL919Wj%2BERR4AypdWQbfsjUBhYF4OiUbs8QnX7cWWIsHPUARMtScvq2fRWFZjCdVsts%2FzAZQHKxkiEA9NblhuIqbvTyI1uWzG4uEioa%2BB3Ds5wFec9HyvvN%2BbNA1oNH3mb2L%2FgAGKh4xFEfCVldZk%2FFnjuuaMCoXSV243rRcGmbNgSwCzdML4omZtQunC2ZFE2A2xIQ5usSYB6ynlnKgsm22fWNMXeZvBv64KAgH5KXbzm6B4PV4YXl5NcTUpAAEBMN65rcMGOqUB2j403jdPwEuQwGJ4io4ym0relwSGNfW5uEUEbXP3P3gAd5hD%2BE6kXcMLnuH%2BM59Fd8ENqG9SVn562vO6xaVaODE9QPUoUEf38tU3T1WbC3tMuEaNStWCQBF90guqMAtdnS%2FQxKCaGB22G%2Fy21GzoXKXnfiqf3GEmmw%2F9eeVmA4j0GHZ%2BsYRNEhN%2FQHOfZsFX2sKesMQ%2BhNGr4XAQ2eNIvQ%2FseR7o&X-Amz-Signature=ca6e2621e1c39ab8edb298715b70e64812d84e05ead07fecdc0673a762c5c5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
