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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7SYKE6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnh%2FZ0dmia%2Bbf%2BmzOdDc3JsfTatHnzv80LuoInHZBTEwIgI%2BLkPov8vf20VRlsz4aER3H0b2K7JxgTiaLTPhRG870q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOtO0T7hjQdFSO8ijCrcA8VZbbbf2Nfh1%2BbtE%2FRBeAHOlYj3Q6Gj%2B9TlJUaLCVZHu8WuF2r0BaqmyGKF3lbuK0LsMZa2eVgJnfAr%2F65diaDXRt4NT3ROzoJF6O9Pc5CL%2B9O0IMEMI8tvgJn9u0qzZqcih8PLdgHWwrRuV0aDbto%2F%2FYqfWriQe3vZHDvneL3Ls%2FN3tYwIsEIzBar9Yk49Xw7XoXDo%2FsNW301nWf27LJ7vt48yrVyGgjhpr6Rl97OTm4qE45soVEpJrrGrDU1IVxdEbK0sI%2BOxwVPBkY%2FLDTM1I4bQKL6cFDW07CWSSUvN2%2FT8DOfgbYj9ZiSjS66pLpZjHna1Y1fQdXDMH2BldfPm%2FjPbjTrqfwfh%2Ba04W9sxpAWNECMuzCTnfJ9HR4X4x%2BSonxTjH99a99zcKrAdqHD%2Bgtp2talTIXKtVitVBslD8GbJTiIGL5z9jKXzZ3h0ReJwCwOS0lRtpfN64njMGV8OgFIBhV64mB7OIp1V0SwD4Paa4DkKUabT8BqrhIy8853lkY6jGmWN1250TP%2FSDjBWwVn1FOZy4mU8oZH2BvT3BSHgfs7Yf8SZ799sFbZpWezf%2BGUnI7%2F2j6pFCQVk99ektgahbEeJvYP7hIbzveekN1RtD%2BUz5ATeAKEmMM70y78GOqUBow86XVP8LfiUKWlrJSSdFUWBf8fBePMyurpQhLYSzt9PrZLOXxuNs%2FUn%2FjUcyz7gsYaz8YYXmbmESfM9eYf3E4nQ%2Fvg%2BicCSwfqCLlLZrPQ0nU2eZXQNZsWyjm%2FO%2Fi%2BiV0%2ByvJ2C2MuCAnNWvkucnefymsscZAN43LkEYubNSUaRzhhekgfXVFtdEXvnKKsvt0KuW46B5MrfphItDgrX5iOccH4L&X-Amz-Signature=e329695eb73495562047664b6526c79445523324adfe5f0cf3299592f8e14543&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7SYKE6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnh%2FZ0dmia%2Bbf%2BmzOdDc3JsfTatHnzv80LuoInHZBTEwIgI%2BLkPov8vf20VRlsz4aER3H0b2K7JxgTiaLTPhRG870q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOtO0T7hjQdFSO8ijCrcA8VZbbbf2Nfh1%2BbtE%2FRBeAHOlYj3Q6Gj%2B9TlJUaLCVZHu8WuF2r0BaqmyGKF3lbuK0LsMZa2eVgJnfAr%2F65diaDXRt4NT3ROzoJF6O9Pc5CL%2B9O0IMEMI8tvgJn9u0qzZqcih8PLdgHWwrRuV0aDbto%2F%2FYqfWriQe3vZHDvneL3Ls%2FN3tYwIsEIzBar9Yk49Xw7XoXDo%2FsNW301nWf27LJ7vt48yrVyGgjhpr6Rl97OTm4qE45soVEpJrrGrDU1IVxdEbK0sI%2BOxwVPBkY%2FLDTM1I4bQKL6cFDW07CWSSUvN2%2FT8DOfgbYj9ZiSjS66pLpZjHna1Y1fQdXDMH2BldfPm%2FjPbjTrqfwfh%2Ba04W9sxpAWNECMuzCTnfJ9HR4X4x%2BSonxTjH99a99zcKrAdqHD%2Bgtp2talTIXKtVitVBslD8GbJTiIGL5z9jKXzZ3h0ReJwCwOS0lRtpfN64njMGV8OgFIBhV64mB7OIp1V0SwD4Paa4DkKUabT8BqrhIy8853lkY6jGmWN1250TP%2FSDjBWwVn1FOZy4mU8oZH2BvT3BSHgfs7Yf8SZ799sFbZpWezf%2BGUnI7%2F2j6pFCQVk99ektgahbEeJvYP7hIbzveekN1RtD%2BUz5ATeAKEmMM70y78GOqUBow86XVP8LfiUKWlrJSSdFUWBf8fBePMyurpQhLYSzt9PrZLOXxuNs%2FUn%2FjUcyz7gsYaz8YYXmbmESfM9eYf3E4nQ%2Fvg%2BicCSwfqCLlLZrPQ0nU2eZXQNZsWyjm%2FO%2Fi%2BiV0%2ByvJ2C2MuCAnNWvkucnefymsscZAN43LkEYubNSUaRzhhekgfXVFtdEXvnKKsvt0KuW46B5MrfphItDgrX5iOccH4L&X-Amz-Signature=7015486338254356a1a40f9d60abed6c5bf087ff78047829beb1b112707e32b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
