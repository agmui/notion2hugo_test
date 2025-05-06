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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNR24GHW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOyttuvDEPSY3JTSNB8hgtMevSTFqxj1qREg8GoDrFxAiAlcnL8%2BcSog5UhV0cDSO2O63ncueBbOkK4dABv%2F1jplSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMWW8JnTBxeEQS34JiKtwDkCVCe0%2FKp1l30JumEF0bHgww5lW68CGjj%2FouRD8YR5wSvYixI%2Bk140KaEyBnXFtPOczp3iNXPMqyjGO5KQaPk%2FUJ3%2FNsanUGGZUyQYJ6kI1AMpCEgeUfaOCfK5UjLDc4D5jqnXJQihZqo2X1oBVWbsuF8nOu%2FltXYnUCLg7Jc00sWHWVTI%2FDl2zN4GYbJhB6bn%2Fk9xwsrGfmDm1XTlELxBkuevr7wMVtBqkc007XRwOnWhbcbLxw884iqbFBT0YL6jlkYzEZqUEEOxOxJldH4G8bTplD7fgzOjr5RBnVkLlRZjQOT8hkh9jvd2W0FQl4Oa4DasaqlJnIlTftM8AxSruhnI152P7S8rbTA3dUphCqMpmBk2pU47IYbad7dAW1KKIuELYCi6yVtH9QuMhZHBmsZRvcRQR%2FarYYk%2BHRMlIEy08xIxdpGCveYwlWZZ3uXWPC5CAPcLKAxXJS%2FYd4W%2BnlWeCHPt64SEsR7e1Zw4QA1e55u8ShO58GaMvjFgLyfIAZk27Rv%2Bk7f9ppZMdGfcIB2O6BmR%2Fcdri7PuCTuDtvaLPH0i8Y%2BVO9khRwYeeednpGQ8Tv%2F7tyKIRuiMHk6hLaQdIBIbJPk8kQoGCsPAJ4M9DYqhRGJVwwzWMwtpXqwAY6pgHcw2ik0S5LZeN3lmLRlM0eWVdBmJnQm8yLdTFNK0TW6sOu%2FDhasaoN%2BT8ddrxy0SDtzaUfg3vA60su6qVKegM%2Bx3y5USaf3V1JWfuoiCQqKXcgegXZ3ltY2qHjC3QRHCZIu4iNxEOK1wui0MnNoRD8B4GTO%2BI9QhoeqHzBnYY5PRGxfwjMIZiMukFTV2x2oqv%2B4bqnpgTmUxc%2BgjKKjMdzRJzDxe8r&X-Amz-Signature=cb9ac3ad7f29f69c6a6f256ca1037f83fc016d7bb7bf876069ec0f7f02756f67&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNR24GHW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOyttuvDEPSY3JTSNB8hgtMevSTFqxj1qREg8GoDrFxAiAlcnL8%2BcSog5UhV0cDSO2O63ncueBbOkK4dABv%2F1jplSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMWW8JnTBxeEQS34JiKtwDkCVCe0%2FKp1l30JumEF0bHgww5lW68CGjj%2FouRD8YR5wSvYixI%2Bk140KaEyBnXFtPOczp3iNXPMqyjGO5KQaPk%2FUJ3%2FNsanUGGZUyQYJ6kI1AMpCEgeUfaOCfK5UjLDc4D5jqnXJQihZqo2X1oBVWbsuF8nOu%2FltXYnUCLg7Jc00sWHWVTI%2FDl2zN4GYbJhB6bn%2Fk9xwsrGfmDm1XTlELxBkuevr7wMVtBqkc007XRwOnWhbcbLxw884iqbFBT0YL6jlkYzEZqUEEOxOxJldH4G8bTplD7fgzOjr5RBnVkLlRZjQOT8hkh9jvd2W0FQl4Oa4DasaqlJnIlTftM8AxSruhnI152P7S8rbTA3dUphCqMpmBk2pU47IYbad7dAW1KKIuELYCi6yVtH9QuMhZHBmsZRvcRQR%2FarYYk%2BHRMlIEy08xIxdpGCveYwlWZZ3uXWPC5CAPcLKAxXJS%2FYd4W%2BnlWeCHPt64SEsR7e1Zw4QA1e55u8ShO58GaMvjFgLyfIAZk27Rv%2Bk7f9ppZMdGfcIB2O6BmR%2Fcdri7PuCTuDtvaLPH0i8Y%2BVO9khRwYeeednpGQ8Tv%2F7tyKIRuiMHk6hLaQdIBIbJPk8kQoGCsPAJ4M9DYqhRGJVwwzWMwtpXqwAY6pgHcw2ik0S5LZeN3lmLRlM0eWVdBmJnQm8yLdTFNK0TW6sOu%2FDhasaoN%2BT8ddrxy0SDtzaUfg3vA60su6qVKegM%2Bx3y5USaf3V1JWfuoiCQqKXcgegXZ3ltY2qHjC3QRHCZIu4iNxEOK1wui0MnNoRD8B4GTO%2BI9QhoeqHzBnYY5PRGxfwjMIZiMukFTV2x2oqv%2B4bqnpgTmUxc%2BgjKKjMdzRJzDxe8r&X-Amz-Signature=3383a9072e401ac72207de34624a47fa489d500925396cfa1498aaa9af20f0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
