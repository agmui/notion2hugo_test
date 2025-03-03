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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLUSSXN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU9Htadk%2Ftxns3gsIF8zmc8dk5JzQbkO8JO7fGgokYZgIgGegeFoIDyKs17erE%2FnnpP%2Fw9kUPIrEGAD9TxrauUN1gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmWWFD7wX%2BR%2FyJkBCrcAwH579%2Fv%2B%2B9OQuhAyTf9Ga6%2Br6UrgGMYA7u59JT4lRCn2MbIcpIwdQz5y1o%2Fkj5%2BwcZhF%2B%2ByGyvkKoB4gc%2BOVhNpOmMXzL%2FE6dAGeydHLJR8bR%2BPV2ddlXnfVytHkTZ%2FyGSfc8wD9XXDX%2BD2NvMBbnw27Ce6kdA21Xf5Z27JrfbIFh4CcydAOpAMxgr8tbtODI1tDJTNkCxO8pZsDQ3%2F9ubLrhC9m9KBkixpN6hxTMt3qQDXxiKYOeW9ji3bCU8nGJN0mfexCjG0xRp1n6ncZPoyze%2BsCcFYwk7s4mOumFqgahRfQHda2VB7Eaec5p%2B1D2uiNNDPFE6tEdMEuAn52fYHD92y2B5H3RU9ZzyIxK0V4ItXWxdV45geyix4YB7GeupxQv%2Fg038Sret78zia%2BuMWtEdyMgKctSda5xtIfSuoaoTkzjk%2BZGqnTqYg7iNo81fJdbJEuQ7yIuKPMuopyz1hxbOARInu5M%2F9mdBDa5qZkkNzUt3FhOCX54zsbujhxKD0h34S3FLgegarBAmy97S9HLo2U3YJB0KGGSLUf8x7aqHnYEurzSneil0sHGBGuvjdYtkqy0gwKmeyU5ZH813P8OjUakRZle%2FORUeRE9zTaSiVPsJQIxq7SAUdMKu7lr4GOqUB3nb8c45mLoAD%2FXrx2dTpl4h5K7bMXuZcOrF4nFoQAPgvnSlNGNfVUyM%2F9VBAw%2FfueslEefZIun3YwtpTe2d60OnmpT6Zvo3ne8Kjr0UGeNvAwupTjCLod5CcKR8c78JZY2z%2FCvZjud0u0lpGrcxOCYkT%2FhwF3qrCf1wbcxOqwdpGYvIbf7v9mQ1Vc6Thw5Ya3dGpweJIB8V8dyEzamxe%2Fz5VVE5v&X-Amz-Signature=c4ae3768906341086f810417ec995f4850e2c981882d6cab3102dbe888965bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLUSSXN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU9Htadk%2Ftxns3gsIF8zmc8dk5JzQbkO8JO7fGgokYZgIgGegeFoIDyKs17erE%2FnnpP%2Fw9kUPIrEGAD9TxrauUN1gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmWWFD7wX%2BR%2FyJkBCrcAwH579%2Fv%2B%2B9OQuhAyTf9Ga6%2Br6UrgGMYA7u59JT4lRCn2MbIcpIwdQz5y1o%2Fkj5%2BwcZhF%2B%2ByGyvkKoB4gc%2BOVhNpOmMXzL%2FE6dAGeydHLJR8bR%2BPV2ddlXnfVytHkTZ%2FyGSfc8wD9XXDX%2BD2NvMBbnw27Ce6kdA21Xf5Z27JrfbIFh4CcydAOpAMxgr8tbtODI1tDJTNkCxO8pZsDQ3%2F9ubLrhC9m9KBkixpN6hxTMt3qQDXxiKYOeW9ji3bCU8nGJN0mfexCjG0xRp1n6ncZPoyze%2BsCcFYwk7s4mOumFqgahRfQHda2VB7Eaec5p%2B1D2uiNNDPFE6tEdMEuAn52fYHD92y2B5H3RU9ZzyIxK0V4ItXWxdV45geyix4YB7GeupxQv%2Fg038Sret78zia%2BuMWtEdyMgKctSda5xtIfSuoaoTkzjk%2BZGqnTqYg7iNo81fJdbJEuQ7yIuKPMuopyz1hxbOARInu5M%2F9mdBDa5qZkkNzUt3FhOCX54zsbujhxKD0h34S3FLgegarBAmy97S9HLo2U3YJB0KGGSLUf8x7aqHnYEurzSneil0sHGBGuvjdYtkqy0gwKmeyU5ZH813P8OjUakRZle%2FORUeRE9zTaSiVPsJQIxq7SAUdMKu7lr4GOqUB3nb8c45mLoAD%2FXrx2dTpl4h5K7bMXuZcOrF4nFoQAPgvnSlNGNfVUyM%2F9VBAw%2FfueslEefZIun3YwtpTe2d60OnmpT6Zvo3ne8Kjr0UGeNvAwupTjCLod5CcKR8c78JZY2z%2FCvZjud0u0lpGrcxOCYkT%2FhwF3qrCf1wbcxOqwdpGYvIbf7v9mQ1Vc6Thw5Ya3dGpweJIB8V8dyEzamxe%2Fz5VVE5v&X-Amz-Signature=394891e4c8a2ca6e9e355554a1498d02895a268c524224f34e6fa1edb0488786&X-Amz-SignedHeaders=host&x-id=GetObject)

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
