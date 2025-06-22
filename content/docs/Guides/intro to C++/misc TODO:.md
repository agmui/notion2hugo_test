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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMIFNTH6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7IJkI7gjL9xwtgUNvR%2FdGfCTs6r421X0lcbHV05IXnwIgb2vdZhpsBHo7ARiHgs3v4xgjZfI2UWaSEai3RIDfN50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGjIngBlUWjopLw%2BSrcAw4xT4bWfvQ1sdhGpJqA%2Bf06%2FPSpxTGoaXog%2BXhshZNrfRB8F26uifA0GwKD%2BqhIpsOL1Pz1krizjC3fbZvL2iy%2BcCrxriWcWwud5GqAc5dDoFvKqDIpUez2rhmxaMRfQ5nBFWXBbvQMozgFdYcK8vxLZfFd4oVXYwA7Q4P3vWiiTpfixUZIpXJo%2BurBu15MXAB1lzZHeTBhj9nCIWydRPWwMsryIhBmBxXmtPGkd2KoG6NLJqrsOvq1Oedn3KT2VZ1HYLY5XhoO55AtPa4%2FN4c3onyhqrIuwcROzbVdRaImnyl%2BXKQc1Byx%2FNnPyIXFgxpGEvI1fDsUpOTA1Cdnzuxt8XSmXLTGp5wJJWlpsjXwIseLhD%2FO179TkZ2HK78EbdxMGP6CJq%2F3JKW7qPubKa7jQmy7DixOtgBcnrID8ION4fPgKKrkkysoRQjRHw%2BeDt22C8WL%2F7m15x7DRZfNbCAuLXCeiBmUhXCRzuJOJnZ%2FeFtNIAaw9TdRWUaJxI014cLoVZO3NVfx0D6CiKeq%2Fz2JlXPKMtsA0aVyarC5WqGReoQBkBHpVC0GQJaiXU%2BiDCYHh6ZidkxWr%2Bfn3Vqr1FEc%2BVZ6JcNL5RG%2BsuBY5Y4lXyR%2Fh5U63mV3EvpAMLWH3cIGOqUB59u6bGC5UQI%2B15zLOzvo41eXRe6B%2FWtSGFW98jFGO859sw38KfVM6SrT1QPB63xTwk9WPyX4eynnfSn4udjHoq2OCGxVeqNuGlPMC3KIBNySVxzf3Zz1CwAWPffmxyhgZ3DzKjVuWH8LKb8jSonHNeboph9hNj7wcS59s6BJXni9kl%2BoHSL5k4WLQd%2BkgV4KmRkQiHqr3SniFbm2WrBrcdWkPJuH&X-Amz-Signature=aa621194ebb49715da99d43c3b13c712f7b22c000d6e8482f963608aaf535e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMIFNTH6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7IJkI7gjL9xwtgUNvR%2FdGfCTs6r421X0lcbHV05IXnwIgb2vdZhpsBHo7ARiHgs3v4xgjZfI2UWaSEai3RIDfN50qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGjIngBlUWjopLw%2BSrcAw4xT4bWfvQ1sdhGpJqA%2Bf06%2FPSpxTGoaXog%2BXhshZNrfRB8F26uifA0GwKD%2BqhIpsOL1Pz1krizjC3fbZvL2iy%2BcCrxriWcWwud5GqAc5dDoFvKqDIpUez2rhmxaMRfQ5nBFWXBbvQMozgFdYcK8vxLZfFd4oVXYwA7Q4P3vWiiTpfixUZIpXJo%2BurBu15MXAB1lzZHeTBhj9nCIWydRPWwMsryIhBmBxXmtPGkd2KoG6NLJqrsOvq1Oedn3KT2VZ1HYLY5XhoO55AtPa4%2FN4c3onyhqrIuwcROzbVdRaImnyl%2BXKQc1Byx%2FNnPyIXFgxpGEvI1fDsUpOTA1Cdnzuxt8XSmXLTGp5wJJWlpsjXwIseLhD%2FO179TkZ2HK78EbdxMGP6CJq%2F3JKW7qPubKa7jQmy7DixOtgBcnrID8ION4fPgKKrkkysoRQjRHw%2BeDt22C8WL%2F7m15x7DRZfNbCAuLXCeiBmUhXCRzuJOJnZ%2FeFtNIAaw9TdRWUaJxI014cLoVZO3NVfx0D6CiKeq%2Fz2JlXPKMtsA0aVyarC5WqGReoQBkBHpVC0GQJaiXU%2BiDCYHh6ZidkxWr%2Bfn3Vqr1FEc%2BVZ6JcNL5RG%2BsuBY5Y4lXyR%2Fh5U63mV3EvpAMLWH3cIGOqUB59u6bGC5UQI%2B15zLOzvo41eXRe6B%2FWtSGFW98jFGO859sw38KfVM6SrT1QPB63xTwk9WPyX4eynnfSn4udjHoq2OCGxVeqNuGlPMC3KIBNySVxzf3Zz1CwAWPffmxyhgZ3DzKjVuWH8LKb8jSonHNeboph9hNj7wcS59s6BJXni9kl%2BoHSL5k4WLQd%2BkgV4KmRkQiHqr3SniFbm2WrBrcdWkPJuH&X-Amz-Signature=471653c8ea036bc44c62b27162da3025969610807a9d8c80d6b3162105bca895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
