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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT7G3CK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmfYE38wPlceqFaUvJH5kZf46c8pRUWFXRf3q%2B2xCTFwIgNMzbtlg8%2ByjTkljRVWN1C5pko%2FadCloM945bLFr6Adsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFfbLZZZ7RZhwh3wESrcA1KmJ5Mgpg4xAG3ukFtRGI9e0O4beOs9I%2F46QNxCONArHc2%2FnDAWUvsp%2B%2FFkWhZWLQ3%2BXdLuYBR%2BueYXU8Q85tHbJiiN%2BvhmbOwp1bSMCbZ5sRXKwNIQ6b90%2BvTsg0VXuwrlFquGjgebd9gKnSqkzo3D5OKpllwLwKbvGutJJt7PzSiC3s8rBwbYOZJiUY6MFHcu7AR%2Bl03NaxfpW31izpzHPkZ6e8HAbDWXolafr6WePv5wVWhgm3lqjBuWOwOilL8Txw8P3h134voj88BjEtUyOtQMNk9pY60RX9tLHOKS2Ktfx0god%2BpQEeJI9jA6yDHxQpy%2FAm82pZfMZJapxvfczkz7Ej7uh8x3AwlrpfcfXbwgM%2BsG96aWKk6w7kMFeQaENO8B6cDgIyNbfsy0roOZd%2B1sZmd895Xp%2BAFj9cBl6ac8G9nj9LIQCXMxUT%2BNgdmdNiWiBOaeQclCq65UCG0s7rTAUU4Sov9IdrwuwqdD7oYHkGR1URfhH%2B%2FfO5ta%2FEgVkUOwPeA4RN9CBWfp4mjUE7HGjWPlja4iAqrsTp352Z0mma%2FkPHfQM1h3IuMi9MxENErdqF8tUQ7ZQIHbfna3ZEB08ZdDLAO9Kv1JDz7ug0Z2UEGpfJdNGMElMMzJ474GOqUB2Q30R%2BAIXDw3cbCz9V35NYgeFFf6vDF1TCLsVcfCFkhqjQMJpRpPxBItW1X5h8QkGI02%2BCrQevha%2BdlvYI%2FLEyxuCYkr5z0%2Fxwf8xT49JVfS6QPhZFDAkvqUYWOtwMXBE%2BBZZwkmUHY94tYEhpyioXwudFbxBsSL8hP%2BfLX9EtzmNt%2FJd6lM7UdIgu0qvDgxPkTQAR4LJ%2BNR5eQQ78%2FobA4%2FWtfQ&X-Amz-Signature=7297fd751313381d04826bfcf2baa521fc17b48bf39a3a5e12241b845a03fade&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT7G3CK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmfYE38wPlceqFaUvJH5kZf46c8pRUWFXRf3q%2B2xCTFwIgNMzbtlg8%2ByjTkljRVWN1C5pko%2FadCloM945bLFr6Adsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFfbLZZZ7RZhwh3wESrcA1KmJ5Mgpg4xAG3ukFtRGI9e0O4beOs9I%2F46QNxCONArHc2%2FnDAWUvsp%2B%2FFkWhZWLQ3%2BXdLuYBR%2BueYXU8Q85tHbJiiN%2BvhmbOwp1bSMCbZ5sRXKwNIQ6b90%2BvTsg0VXuwrlFquGjgebd9gKnSqkzo3D5OKpllwLwKbvGutJJt7PzSiC3s8rBwbYOZJiUY6MFHcu7AR%2Bl03NaxfpW31izpzHPkZ6e8HAbDWXolafr6WePv5wVWhgm3lqjBuWOwOilL8Txw8P3h134voj88BjEtUyOtQMNk9pY60RX9tLHOKS2Ktfx0god%2BpQEeJI9jA6yDHxQpy%2FAm82pZfMZJapxvfczkz7Ej7uh8x3AwlrpfcfXbwgM%2BsG96aWKk6w7kMFeQaENO8B6cDgIyNbfsy0roOZd%2B1sZmd895Xp%2BAFj9cBl6ac8G9nj9LIQCXMxUT%2BNgdmdNiWiBOaeQclCq65UCG0s7rTAUU4Sov9IdrwuwqdD7oYHkGR1URfhH%2B%2FfO5ta%2FEgVkUOwPeA4RN9CBWfp4mjUE7HGjWPlja4iAqrsTp352Z0mma%2FkPHfQM1h3IuMi9MxENErdqF8tUQ7ZQIHbfna3ZEB08ZdDLAO9Kv1JDz7ug0Z2UEGpfJdNGMElMMzJ474GOqUB2Q30R%2BAIXDw3cbCz9V35NYgeFFf6vDF1TCLsVcfCFkhqjQMJpRpPxBItW1X5h8QkGI02%2BCrQevha%2BdlvYI%2FLEyxuCYkr5z0%2Fxwf8xT49JVfS6QPhZFDAkvqUYWOtwMXBE%2BBZZwkmUHY94tYEhpyioXwudFbxBsSL8hP%2BfLX9EtzmNt%2FJd6lM7UdIgu0qvDgxPkTQAR4LJ%2BNR5eQQ78%2FobA4%2FWtfQ&X-Amz-Signature=f2634d2aab2a72d8b03fc2dd4a48deb5a879019250b11d8ad68ec5f6d47d13ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
