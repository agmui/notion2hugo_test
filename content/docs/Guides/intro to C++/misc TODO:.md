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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHJ3SFI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICju2r9z5kcSK50OT73M2MrYhdgZLclIk0DWHtL6ROzOAiEA0xkVNLfCGKSFY5pECX6Kl5cHDvakNw51PBOlbkdv6kAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDdiS7jhsR4kuVCxgircA7TfZZ2bVoTQZAgOGiX2jGKEwropI8uOavdQPM9uH1ek4Ts41A5T9MGGsQPpBHo2bOb0UiE6f%2BRvXkQF75ePfXdsc%2BPg4vGiPe7UjF7Mwga%2Ff%2FdqLGt93bJF7oIWG86bbFXP%2FGbU1smlSIDniWxGF5gDEErPeaELbKwgHJRSln4P55PDdxKZCBYhamqprMZDxGIF50ZENSV8TXsf7d1aGt8gVaXAmFf2FDT0KWNISehXym3XiqGeBet89we%2BNJ79E%2BwYXBmDKNdm4Pe6KRvsl3jluJGWK40CG3i%2BxPoRa3MsdJjV3%2BgbGE0Y9U%2BVHUg%2BiJ%2Btz6n8JTKkE7mQrmDMwQNPJKis2q%2FQfD49oTFwyCekIKZ8xD2X6a25mglw5PYJfrouGJCv3aQbVFthrK4i5ewr3z7wK7xCq6c3N7yvdNA4nRtXV5ii4dzvBEgGIRbaSBGy8%2FxutoTV7glnjFOSDtqRlt50pgdX7e6E%2BS5fe5aO1ZWpoxUpMC8KF4wr41rrjZ3kWT51kHjdSbTCeWrAXBtk2lY%2FvKQ5LhxDCNu9FbVo4J%2Bp19LWRNR%2B3XRz%2FqzAqpcyjDsx3ZPQbC2RMWkdKwOuJazeofTlc3LHumYUG%2B7dvqciaRzH4RYdXEh9MJrc3L4GOqUBkoryGTvYVP2jGC4Dmikh87dXV%2BjBrF0ljKKfiba0nUgp%2FQvXit6h9oWCMvldrdOrMz7vLbm8KwwEbQ%2BAcC3gVxLWbCurLmWsjzypFeDw8AOzNgWRQoHwPMdXt65haZuvi9YbO6ADCUFhhj5Ti6g3vzReZJfdwiF8ZuJZBoSb2SUX%2Bj%2BvKLhWVMs2cVKkfmWeTXObVlRUHN%2FvxcdYteAq96WMCg7N&X-Amz-Signature=014bf225e319301a70df05c1d28165a8fc78214bd30a8375e4c5b61b7c460da5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHJ3SFI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICju2r9z5kcSK50OT73M2MrYhdgZLclIk0DWHtL6ROzOAiEA0xkVNLfCGKSFY5pECX6Kl5cHDvakNw51PBOlbkdv6kAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDdiS7jhsR4kuVCxgircA7TfZZ2bVoTQZAgOGiX2jGKEwropI8uOavdQPM9uH1ek4Ts41A5T9MGGsQPpBHo2bOb0UiE6f%2BRvXkQF75ePfXdsc%2BPg4vGiPe7UjF7Mwga%2Ff%2FdqLGt93bJF7oIWG86bbFXP%2FGbU1smlSIDniWxGF5gDEErPeaELbKwgHJRSln4P55PDdxKZCBYhamqprMZDxGIF50ZENSV8TXsf7d1aGt8gVaXAmFf2FDT0KWNISehXym3XiqGeBet89we%2BNJ79E%2BwYXBmDKNdm4Pe6KRvsl3jluJGWK40CG3i%2BxPoRa3MsdJjV3%2BgbGE0Y9U%2BVHUg%2BiJ%2Btz6n8JTKkE7mQrmDMwQNPJKis2q%2FQfD49oTFwyCekIKZ8xD2X6a25mglw5PYJfrouGJCv3aQbVFthrK4i5ewr3z7wK7xCq6c3N7yvdNA4nRtXV5ii4dzvBEgGIRbaSBGy8%2FxutoTV7glnjFOSDtqRlt50pgdX7e6E%2BS5fe5aO1ZWpoxUpMC8KF4wr41rrjZ3kWT51kHjdSbTCeWrAXBtk2lY%2FvKQ5LhxDCNu9FbVo4J%2Bp19LWRNR%2B3XRz%2FqzAqpcyjDsx3ZPQbC2RMWkdKwOuJazeofTlc3LHumYUG%2B7dvqciaRzH4RYdXEh9MJrc3L4GOqUBkoryGTvYVP2jGC4Dmikh87dXV%2BjBrF0ljKKfiba0nUgp%2FQvXit6h9oWCMvldrdOrMz7vLbm8KwwEbQ%2BAcC3gVxLWbCurLmWsjzypFeDw8AOzNgWRQoHwPMdXt65haZuvi9YbO6ADCUFhhj5Ti6g3vzReZJfdwiF8ZuJZBoSb2SUX%2Bj%2BvKLhWVMs2cVKkfmWeTXObVlRUHN%2FvxcdYteAq96WMCg7N&X-Amz-Signature=d836fa9831a87db8c816988e4f784db79c6cde32f071ee473dad96655d942a44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
