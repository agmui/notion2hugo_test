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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MNHN7G%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDMGHJfRY4l%2Fmp%2Bz23wnE%2FRi%2FmKy9zdP1BwfT2JDOWmuQIgU0ycX%2BINbDqfw6eKOyC9uATQxgLRpOUhYmRk%2BMNu1G8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2V5tUGExdz187ADircA0QKO0NNg7GLB11bfbORpROxBzJEcljphFATwHPffQLrRV%2F%2FFS9VAG1i%2FYAJcflZqZKSXg%2Bc0jKpfAcxQNytg1gJi7D%2FzU5R3mdWLUURurG5C9en3CjREFHTkS1meZf8f8Qhrly7O%2Bln7%2FIEet8Y43%2B7WJtnM%2FVN7eFamDwu3aJ3X6U2PWnU3r2u8U2J49IQrQtGF7Zb7b7769jbDbPDNr2rF4ri0lOqZ%2B%2BQi9J4EY%2F4WMNEo9UHAcPM%2FFz8%2BjOJaEWkcwN4VFc5PfSjEuyCgvMww3OzdkIJ7FNFq4u4BJ8XF%2FyRkowawkoAgDsvTVyfxhyej6prOC%2FAjsDC295m4uhnEf5mxGpHuwXTepdRnzowT9Y%2BNPvyxL%2BnRCa3XMh19nBXZeljCjA0qCa1nunh8VZ2P0rr7eueUrEqaKZMopBeObWReWqv1bbynJG0NMKjoFcZcgWE9MbLi%2FNDdm%2FQgacWl%2BRHUttLuZMNFh%2BMk3%2FmNyL%2FfOCaHk%2ByLgWTavWEs0m0B5Z6cJPx50ZuqysmTUhT5YQjuL%2FNLqDdGPSIAcutIiJJTzulg%2Fbz81G2LGH%2F62E8bBKRfpV37xKVv%2BiOLoOQKN9Mq3D6SEcBO92kyOw%2FgqxPPzwaRe4zcSrxML6HsL8GOqUB4Ie3fBqqVbmx%2BfJ29lsEWXB5D%2Fg%2BPT59UEf4R%2FOJ8gk0zVbw57gyuvRrMapWo6MVN68SZpThcTb22dQOCRSwpdaIIMQKDPbz2LiNLtmjR76yNFwfmiXLHO9XafejvLTELV%2FAeX9%2BqxelQCnQFRitlkN4Cjf8cPmswTWXxrIhW9Zl8puQoMmo5Uahmkvi%2Fs%2FnxCw789bVAFpD%2FHfpp5nWplSDL58V&X-Amz-Signature=3d03f32941911e46525fd6eba1b4d32531aaa3232850ba1470861c57a80a5756&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MNHN7G%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDMGHJfRY4l%2Fmp%2Bz23wnE%2FRi%2FmKy9zdP1BwfT2JDOWmuQIgU0ycX%2BINbDqfw6eKOyC9uATQxgLRpOUhYmRk%2BMNu1G8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2V5tUGExdz187ADircA0QKO0NNg7GLB11bfbORpROxBzJEcljphFATwHPffQLrRV%2F%2FFS9VAG1i%2FYAJcflZqZKSXg%2Bc0jKpfAcxQNytg1gJi7D%2FzU5R3mdWLUURurG5C9en3CjREFHTkS1meZf8f8Qhrly7O%2Bln7%2FIEet8Y43%2B7WJtnM%2FVN7eFamDwu3aJ3X6U2PWnU3r2u8U2J49IQrQtGF7Zb7b7769jbDbPDNr2rF4ri0lOqZ%2B%2BQi9J4EY%2F4WMNEo9UHAcPM%2FFz8%2BjOJaEWkcwN4VFc5PfSjEuyCgvMww3OzdkIJ7FNFq4u4BJ8XF%2FyRkowawkoAgDsvTVyfxhyej6prOC%2FAjsDC295m4uhnEf5mxGpHuwXTepdRnzowT9Y%2BNPvyxL%2BnRCa3XMh19nBXZeljCjA0qCa1nunh8VZ2P0rr7eueUrEqaKZMopBeObWReWqv1bbynJG0NMKjoFcZcgWE9MbLi%2FNDdm%2FQgacWl%2BRHUttLuZMNFh%2BMk3%2FmNyL%2FfOCaHk%2ByLgWTavWEs0m0B5Z6cJPx50ZuqysmTUhT5YQjuL%2FNLqDdGPSIAcutIiJJTzulg%2Fbz81G2LGH%2F62E8bBKRfpV37xKVv%2BiOLoOQKN9Mq3D6SEcBO92kyOw%2FgqxPPzwaRe4zcSrxML6HsL8GOqUB4Ie3fBqqVbmx%2BfJ29lsEWXB5D%2Fg%2BPT59UEf4R%2FOJ8gk0zVbw57gyuvRrMapWo6MVN68SZpThcTb22dQOCRSwpdaIIMQKDPbz2LiNLtmjR76yNFwfmiXLHO9XafejvLTELV%2FAeX9%2BqxelQCnQFRitlkN4Cjf8cPmswTWXxrIhW9Zl8puQoMmo5Uahmkvi%2Fs%2FnxCw789bVAFpD%2FHfpp5nWplSDL58V&X-Amz-Signature=eff87eb85e3aa07ad5cd336df5abbe2250fa05f2e3382b50ce2dc49e7b200b41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
