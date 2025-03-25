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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U36O6WVE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc8V3HQx5%2BEst5tlYlLZihAYpamh%2FpFZWqCOtEdC409wIgHj64iXwevSyTbZVck%2Btvk2mo5dGVGBEelUSUqZ5WsZEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLRRZJ%2BHZRWkThdNGCrcA4PDJACB7tdEKZVc1SD4uUg8A3A%2FM4s80UVbIO7UvTK7EuAX99oUh7tYYskYjJayp2TgSjPc2BP6WtmhTHzlYOg4m8DJHmqZDYjrQVlR6IQ%2BXVk5n0o0lAqNYTaIMUyEywuZ4vyYu4gjp1uNMTII%2FhlThVxS%2BDtPVd1I8FQYyp%2Bmai%2FcZ868o5dmNiPgGUrC8k8bXoXeVTM9r%2FqP5Ux1%2BimpYUoDDDEaisVFpbAmzN%2FTAuIoNRjt3Fu3WanbV9uYrxK%2FC2KOK5d%2BPf5JpAQDzpNV8BHrGNfMuPEEd3jpmKtYIrSYv6ys4Ml7iD1UkIymBm39s%2F1unYN9ZPnLG72lEuefwEH5yKNBevHimEGrfqaT24GZNgipHGnESDkpDSaxXYxbvC9UNFQGgoz7GTdgnaXemtVv785SWytfm2BT%2BSgBmbrTg8otI%2FkInCHK%2BYBYEu6tvrzFFij3VbD0rFMmdZ2RIA0kFELRBuWNP1jwGB2Qqxf2tE6oTn%2BWbIKbHz7En44silmfp47vapqvS7xq9cWeneGj6IluFKun4voYyTqKZwPVL9v%2Bj3GIQQZlRoVHCvjU4zfb49uEKaDDNyag7oggHdME6pquv5QTWR%2BYui3FEokIFwcx%2FA5EzDNyMNnFi78GOqUBbet5rn2wnmxXUguDB1WqtUe3Yg0Bo76%2FB0JffN0pWBoXud8jXNAbfkEacsqyz6IIwPmfc92IGJTlTBxXHiVgN%2F5RrTf1k4EVGyRO87sFeICCBI4JE4OgUhKHipUwb%2BR%2Bz5kILJGhebnEhJWfMw0Rza6qJlbpdCs2OnkqUU8ULoFpIg0ocHMY5mvk2fmDC%2BNtV61VUtSoATI26R0sdlvYckQBtVPp&X-Amz-Signature=7c70375c68294f956e8c42f865c7b983eac4a650fbd07ebdd52113084aa55bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U36O6WVE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc8V3HQx5%2BEst5tlYlLZihAYpamh%2FpFZWqCOtEdC409wIgHj64iXwevSyTbZVck%2Btvk2mo5dGVGBEelUSUqZ5WsZEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLRRZJ%2BHZRWkThdNGCrcA4PDJACB7tdEKZVc1SD4uUg8A3A%2FM4s80UVbIO7UvTK7EuAX99oUh7tYYskYjJayp2TgSjPc2BP6WtmhTHzlYOg4m8DJHmqZDYjrQVlR6IQ%2BXVk5n0o0lAqNYTaIMUyEywuZ4vyYu4gjp1uNMTII%2FhlThVxS%2BDtPVd1I8FQYyp%2Bmai%2FcZ868o5dmNiPgGUrC8k8bXoXeVTM9r%2FqP5Ux1%2BimpYUoDDDEaisVFpbAmzN%2FTAuIoNRjt3Fu3WanbV9uYrxK%2FC2KOK5d%2BPf5JpAQDzpNV8BHrGNfMuPEEd3jpmKtYIrSYv6ys4Ml7iD1UkIymBm39s%2F1unYN9ZPnLG72lEuefwEH5yKNBevHimEGrfqaT24GZNgipHGnESDkpDSaxXYxbvC9UNFQGgoz7GTdgnaXemtVv785SWytfm2BT%2BSgBmbrTg8otI%2FkInCHK%2BYBYEu6tvrzFFij3VbD0rFMmdZ2RIA0kFELRBuWNP1jwGB2Qqxf2tE6oTn%2BWbIKbHz7En44silmfp47vapqvS7xq9cWeneGj6IluFKun4voYyTqKZwPVL9v%2Bj3GIQQZlRoVHCvjU4zfb49uEKaDDNyag7oggHdME6pquv5QTWR%2BYui3FEokIFwcx%2FA5EzDNyMNnFi78GOqUBbet5rn2wnmxXUguDB1WqtUe3Yg0Bo76%2FB0JffN0pWBoXud8jXNAbfkEacsqyz6IIwPmfc92IGJTlTBxXHiVgN%2F5RrTf1k4EVGyRO87sFeICCBI4JE4OgUhKHipUwb%2BR%2Bz5kILJGhebnEhJWfMw0Rza6qJlbpdCs2OnkqUU8ULoFpIg0ocHMY5mvk2fmDC%2BNtV61VUtSoATI26R0sdlvYckQBtVPp&X-Amz-Signature=c92ef01f35e8ad1eb96dd142c71c96ce4355d677718855d47f028f66e45c512a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
