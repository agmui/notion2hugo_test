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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IDOEI6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDGX8XCJRl%2BsNWj3PtFXeqjJ%2BYAyySA%2FIsAZbGYvH34UwIhAO9NUlrnPfOohtPb5hlMs6KDj3ojPgD6PG66C2RhEnz9KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBsujoQL%2FJM%2FXPBkq3AOxE7XdhGY6oATSKX7e0qMlmDeOpz2NSusFEFkuNDVDR%2BFa3OWA1U3ijHcqIEHgdZHfceH6BBL2T%2BSU4Tz9grk90kE0OGsCtYNA7NX5WyRboTUAz8CB%2BrN2kA5%2BiTbvgHk0VelYy4Z4izAYp3%2BcD109kzAuzCroLxot4MHtBl1dLwuYx0qtzep0LeuYndg6X%2B4q2jvKSJG1RHp6t%2F4Q96kwsw93wDaCGn249YD%2Fp4yna15Sc3CLI9J3Ke271Gg9jVcQWziqO4vUCN%2FaOD3GepPKh6xFe5QTl4MVsVL5qmARegV2rzeVX52i47gdni%2Be6IANGeapAJZsg1kBE4QefxzHhG6O1r8fhkzOikt45jRcv1XkMlg3K8ictWnSyHzjAMPyt0FDKZdF6QbZawGemUFUZz7yl1ezkwImQCkCVRLFfE5CZrs%2BtEqHIz2txeFzrUQwB%2BbnfJSvWlyshPyERnDSrpgNbw9VfS0Z%2FVKC%2Bfzl0rJXPOXKNour%2B9vNwdGOB2%2BtGfVPelBNuMgcEDWFtQ2FgHnQT7OLbCg2b%2BakRddR8l1uwL%2FMnZ5GuqBx9teqCz6uLO3NYH7itHPcZ1fWH%2BjzRBu8Li7lRbWJQ%2B4NDoz7HbdFxaix%2F7Xgeiq7xTDVjdjABjqkAQZ%2FfrYLZsF8tsPp8KC9v%2Fux0QowRQLwrzuEUEpsPD0qqInsfLMC5l9xdbY1n6y1aUzc6Xb62uIazA%2FZ5iyYqN9ER36%2FE9KAgfhiV7uh2DileNN6PfrkCI7s%2FHCqnQax3MaRwmXktU%2B5i3UIRXRtGp20gNa%2BmgXc0pK%2BnQY2FodL547A5Z%2BpBqRYCV5DRe6bhO%2FbwgjtfxgGp5B%2FXYTT5HZaOYTD&X-Amz-Signature=adb264e17cd805f2de5ab9c89b256d4426f7c2b9a1f9164ac08f95b0796ea735&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IDOEI6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDGX8XCJRl%2BsNWj3PtFXeqjJ%2BYAyySA%2FIsAZbGYvH34UwIhAO9NUlrnPfOohtPb5hlMs6KDj3ojPgD6PG66C2RhEnz9KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBsujoQL%2FJM%2FXPBkq3AOxE7XdhGY6oATSKX7e0qMlmDeOpz2NSusFEFkuNDVDR%2BFa3OWA1U3ijHcqIEHgdZHfceH6BBL2T%2BSU4Tz9grk90kE0OGsCtYNA7NX5WyRboTUAz8CB%2BrN2kA5%2BiTbvgHk0VelYy4Z4izAYp3%2BcD109kzAuzCroLxot4MHtBl1dLwuYx0qtzep0LeuYndg6X%2B4q2jvKSJG1RHp6t%2F4Q96kwsw93wDaCGn249YD%2Fp4yna15Sc3CLI9J3Ke271Gg9jVcQWziqO4vUCN%2FaOD3GepPKh6xFe5QTl4MVsVL5qmARegV2rzeVX52i47gdni%2Be6IANGeapAJZsg1kBE4QefxzHhG6O1r8fhkzOikt45jRcv1XkMlg3K8ictWnSyHzjAMPyt0FDKZdF6QbZawGemUFUZz7yl1ezkwImQCkCVRLFfE5CZrs%2BtEqHIz2txeFzrUQwB%2BbnfJSvWlyshPyERnDSrpgNbw9VfS0Z%2FVKC%2Bfzl0rJXPOXKNour%2B9vNwdGOB2%2BtGfVPelBNuMgcEDWFtQ2FgHnQT7OLbCg2b%2BakRddR8l1uwL%2FMnZ5GuqBx9teqCz6uLO3NYH7itHPcZ1fWH%2BjzRBu8Li7lRbWJQ%2B4NDoz7HbdFxaix%2F7Xgeiq7xTDVjdjABjqkAQZ%2FfrYLZsF8tsPp8KC9v%2Fux0QowRQLwrzuEUEpsPD0qqInsfLMC5l9xdbY1n6y1aUzc6Xb62uIazA%2FZ5iyYqN9ER36%2FE9KAgfhiV7uh2DileNN6PfrkCI7s%2FHCqnQax3MaRwmXktU%2B5i3UIRXRtGp20gNa%2BmgXc0pK%2BnQY2FodL547A5Z%2BpBqRYCV5DRe6bhO%2FbwgjtfxgGp5B%2FXYTT5HZaOYTD&X-Amz-Signature=cbdeed58144e3ac46d11b8a267717459eb884d718a350a87b4e67f2f358b6104&X-Amz-SignedHeaders=host&x-id=GetObject)

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
