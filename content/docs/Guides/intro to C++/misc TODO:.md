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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNBEKEG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEDQLrRhKeWf9%2BkZS5zMLapftAUzHJQ%2BLZl3YoWh9I%2F6AiEA3F4msuyzcdpTDYu5i1Bn9EZxFtkp1I6hHUb14L3jwiIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl6jz%2F%2ByuLt55q0uSrcA4I12FOtDaSMaLxpEvQghcbgKMvm9tzPBbiRP8QsEz5CBtrYZ5vrt7XHXfMRUjoIAE%2BCUmk3EUn0nOwFJ%2BBLzPf4WGX75H932Ok2XXzNc2%2BbKdzi%2BMXWk7KGeJem%2FmgDM7gNRldOCN0VJFR4%2Bz5WmTq2TGhiJCnbmcVBu%2FFgwyqQLBlFf9OmkwzzLvRzUnyaKJQmndMnEaz8MbM%2B%2FoSelwSZ%2Bn%2FAuxw3GtbA2ETkIxotBcSmrQXGWXLLCkEv0x5FBdc0OXT8anIpwF%2BKgE66GRzntsJ1gQo%2FziPZ%2FuPYPuyEsaoQldedjKS5pSgr1tZ93L9PwL36iINuLz5LGZyS4wQQqDES1e4WIGb%2BHhwHOwwUkfPBvezIBamueyK%2FkfByV%2Fy2FN%2BDWyZTgKF5J661iEjM700VNgPXGe437x1dH5xHDItDewloO2Gw1ox1SqeGU4f4ZyfZQ7NmJ76hlr6%2B3IY2aPQhMipk8t2WIz5licUWRVPwoRerT%2FOLkHf%2B9Q8MvXI8JJ5oxJQ3CewymDVYOCLJeASI4DJHI6Ky2lmTQrNr01JIVKzjAwF9i0HTNPkDPhacv7cK1FQq%2BZEgIupmgfLX7ZRbqXpAVyeE7RIga4U9JYxHeKnrR1YtiYxRMLDalcAGOqUBLDMh%2B5xG341H5%2FJ4nHSY%2FhABT1TZBNOkjZmPKv86iAVx2FxI0m0q60CaaAea1ZNIZUp5qbSda9SkQ9Y61RvDd8Tb96aRTkuNEn6DOh2BEi%2BmbYBgRmA%2Fxvf%2B8%2BN%2B7tj5cq1rJMEvjNcaeJCH77EBHa5sZdZmvDzrO2HhjtClCFHl5r4Wl%2BKeaS6%2BQecV1tamJyA%2Bdb0YmRuTBVGVA4RWE9id%2BuA8&X-Amz-Signature=de96f64bb73238d0f67930b1f3be34c3b0522f5909576fa7b212168a94b68709&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNBEKEG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEDQLrRhKeWf9%2BkZS5zMLapftAUzHJQ%2BLZl3YoWh9I%2F6AiEA3F4msuyzcdpTDYu5i1Bn9EZxFtkp1I6hHUb14L3jwiIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl6jz%2F%2ByuLt55q0uSrcA4I12FOtDaSMaLxpEvQghcbgKMvm9tzPBbiRP8QsEz5CBtrYZ5vrt7XHXfMRUjoIAE%2BCUmk3EUn0nOwFJ%2BBLzPf4WGX75H932Ok2XXzNc2%2BbKdzi%2BMXWk7KGeJem%2FmgDM7gNRldOCN0VJFR4%2Bz5WmTq2TGhiJCnbmcVBu%2FFgwyqQLBlFf9OmkwzzLvRzUnyaKJQmndMnEaz8MbM%2B%2FoSelwSZ%2Bn%2FAuxw3GtbA2ETkIxotBcSmrQXGWXLLCkEv0x5FBdc0OXT8anIpwF%2BKgE66GRzntsJ1gQo%2FziPZ%2FuPYPuyEsaoQldedjKS5pSgr1tZ93L9PwL36iINuLz5LGZyS4wQQqDES1e4WIGb%2BHhwHOwwUkfPBvezIBamueyK%2FkfByV%2Fy2FN%2BDWyZTgKF5J661iEjM700VNgPXGe437x1dH5xHDItDewloO2Gw1ox1SqeGU4f4ZyfZQ7NmJ76hlr6%2B3IY2aPQhMipk8t2WIz5licUWRVPwoRerT%2FOLkHf%2B9Q8MvXI8JJ5oxJQ3CewymDVYOCLJeASI4DJHI6Ky2lmTQrNr01JIVKzjAwF9i0HTNPkDPhacv7cK1FQq%2BZEgIupmgfLX7ZRbqXpAVyeE7RIga4U9JYxHeKnrR1YtiYxRMLDalcAGOqUBLDMh%2B5xG341H5%2FJ4nHSY%2FhABT1TZBNOkjZmPKv86iAVx2FxI0m0q60CaaAea1ZNIZUp5qbSda9SkQ9Y61RvDd8Tb96aRTkuNEn6DOh2BEi%2BmbYBgRmA%2Fxvf%2B8%2BN%2B7tj5cq1rJMEvjNcaeJCH77EBHa5sZdZmvDzrO2HhjtClCFHl5r4Wl%2BKeaS6%2BQecV1tamJyA%2Bdb0YmRuTBVGVA4RWE9id%2BuA8&X-Amz-Signature=20347e3041301e70e3e62a4a6dd1113867fd27e06390a0f52fca871103a89a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
