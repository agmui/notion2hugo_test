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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFY7L6O%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFYeutTgfERgzeW5Q6RpTTWMnnNP7aVGMCFCLj8B830CAiEA4rF6b2NcKeGMTSz7ctM3eLW0GAUqwLXLxYOHlvSf3WEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA9lBgNKnMmutsvxiyrcA5QVuIGQTaQkKzWVhphJkPTiBzqbBDNZFKRgb96onJqDIbdHm8n6ucUfwwv6XSkNMyCW%2FYHHOD1GEZ%2FcTOVx8uBPh6qy3MttPT9jjUg9tC6apVwCVJMARZRdcuMbRwWmksf4k99FxL7gvTRssmV6aILwJMO11uA0jAzsOpV6vBstgCoKr4aKKHl2qcDMDTcH4DztuPMKn8cHAB%2BTW0AcMMEs3OqIESjUxPeszftKdq61vBu9tqB5UQ%2FJ3yeenUOueKSRaprEpYfYkgmF68vKgS%2F0s7n9F2QdIQ07UuCRJw6ycoz8v9wQQQ7%2BZ%2F%2Fr0ZFoFR6fqfaIhT1F%2F09g7jZknFnGd84zrIx7ePYMqD%2F0aD8a6OfR8xXJZJuzZH%2FFqoyvleNuRYi%2Bgf3buTE%2FdcYXQDXzF1YvBNCSHochDgp0nsqeMhrxVugUftZNuJjxUA1RNFC39KQxHaBYYuqeTpDLjSYJBfL06UgpzoAHO8oqdlM8otgOQHWl75FiCttNu0bv7ayh4Mo1b9v7XkJhbeq4%2Fk4hzPZ4HYPmOkdHrgrGh4OgKoZborg4n9x9Q4YRH7mEIxlaRJh7ne7mkvmP7GmiWZqCs%2FyzSiIUY05xtcTGKxsDDfzKji300S7MC4XPMMqf%2BMIGOqUB%2FXvD2IPo8QT5zq3n3WnGxnc18JqAGp4ADYBmfa6UymKLILBWfNn4Z23kjmsnJSaiid0KEyOM4bc3o55fNhUZWjUq%2B5TMflLeiFzY7WGJmya9yLglC6%2Fm2Z0y4llkwQ6ZhkEvmgZoP%2BeU0PrT7JmflTllF7CSuNXpdpZhFRN338v2c%2BX0vG6gmw4yB0z7H46lnoG9fg5Irf9le7fM%2BJb7EUesX%2FRM&X-Amz-Signature=b0027a03ff4d5a9cfc1e88b0e0051a34e3789535a046c47c40590c5c22013a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFY7L6O%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFYeutTgfERgzeW5Q6RpTTWMnnNP7aVGMCFCLj8B830CAiEA4rF6b2NcKeGMTSz7ctM3eLW0GAUqwLXLxYOHlvSf3WEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA9lBgNKnMmutsvxiyrcA5QVuIGQTaQkKzWVhphJkPTiBzqbBDNZFKRgb96onJqDIbdHm8n6ucUfwwv6XSkNMyCW%2FYHHOD1GEZ%2FcTOVx8uBPh6qy3MttPT9jjUg9tC6apVwCVJMARZRdcuMbRwWmksf4k99FxL7gvTRssmV6aILwJMO11uA0jAzsOpV6vBstgCoKr4aKKHl2qcDMDTcH4DztuPMKn8cHAB%2BTW0AcMMEs3OqIESjUxPeszftKdq61vBu9tqB5UQ%2FJ3yeenUOueKSRaprEpYfYkgmF68vKgS%2F0s7n9F2QdIQ07UuCRJw6ycoz8v9wQQQ7%2BZ%2F%2Fr0ZFoFR6fqfaIhT1F%2F09g7jZknFnGd84zrIx7ePYMqD%2F0aD8a6OfR8xXJZJuzZH%2FFqoyvleNuRYi%2Bgf3buTE%2FdcYXQDXzF1YvBNCSHochDgp0nsqeMhrxVugUftZNuJjxUA1RNFC39KQxHaBYYuqeTpDLjSYJBfL06UgpzoAHO8oqdlM8otgOQHWl75FiCttNu0bv7ayh4Mo1b9v7XkJhbeq4%2Fk4hzPZ4HYPmOkdHrgrGh4OgKoZborg4n9x9Q4YRH7mEIxlaRJh7ne7mkvmP7GmiWZqCs%2FyzSiIUY05xtcTGKxsDDfzKji300S7MC4XPMMqf%2BMIGOqUB%2FXvD2IPo8QT5zq3n3WnGxnc18JqAGp4ADYBmfa6UymKLILBWfNn4Z23kjmsnJSaiid0KEyOM4bc3o55fNhUZWjUq%2B5TMflLeiFzY7WGJmya9yLglC6%2Fm2Z0y4llkwQ6ZhkEvmgZoP%2BeU0PrT7JmflTllF7CSuNXpdpZhFRN338v2c%2BX0vG6gmw4yB0z7H46lnoG9fg5Irf9le7fM%2BJb7EUesX%2FRM&X-Amz-Signature=b0e4179c68df6d7f508c436a322886b739476a1d947f6ce72a490ac7bd7dab59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
