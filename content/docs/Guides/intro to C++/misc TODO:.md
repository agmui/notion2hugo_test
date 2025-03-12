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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FY2U3X%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDErLfwHVtMXzH1j0f5WLwBFgQFQFJOxSvY%2FII5EMdcmQIhALiBfRP8oHYdHzVj3wcARS1G%2Bs32wq9x0Z2uyMLUSAAcKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfSYAG5LvwkIjeRIoq3APvCP0xZVwtqB2VMms%2FO%2FwxjUMoFR0vPpN1zTUHy9CvgU9eqJy01ZTEgULuvpR1AzI24TiQsX1hjadY22gnAbfM5pqEnoIHVfTH80AcUPvBX1Q8CmYU%2BUcBFyI6frIpDuYMNGi0F%2FdRtfn3F3oAQxKNuWuovqzrWfCHJlCinqzTQKB8c36MHuS84nV6AOaeed1XYlkYyadzVUuDwG2LRloCXaVNLl%2BuEqhKg8YLXx4x5l%2Fr%2BSH%2B1B24j1Rfabd13g2LJdnoQMAx07h%2B0jDYQ35ciARjTvpiJ%2B%2B%2FsfTluBU3yyt%2FyoazmDr4%2BQ1M5e6RtmwGrwpmvqSYOKALgx8Mc6%2FGSUAh5ivjCznFs%2BvrT7mD7Mh3rgPbIR18%2FFhZO7dmhsPc9d8o82kda1GPA%2Bg%2Fp95jU%2BZjf059cQcysaqhNiweA9Foo1DFxcDjetcDv6cvgvIt%2BgwzfF9jXelYDQJ4O6P9b8CQFJcCK6x7td5YAescyU0EY4g6CeUQSD2MKblM7YIBPuDD80RAFp3n04pS7waB65trLel135XilLkKLlJ0gBQN3uY828Lb%2FZHKTtasnhdew2av%2B72vE6BWve3%2B98ykcitTeX80ZNf418jO08bt0xcBD%2BHXBV5%2BAR%2BVSTCe4Ma%2BBjqkAejAJpZgiNbTYbSTt71AHIaIhCTADpBONpcJSgHPZHuIqkUy5%2FSMM9KNI4%2BMYlDpjxmBluX46nOghclFXJ02IntoizTiWgbXNGs7hZHtZ7lPNnB8TfF2HObdE7TMaeElpJ9DRO%2B5Ft2SXQqq3M8m%2FxaSgaY%2Bw1x3N%2FHblrlctzZNptoj1noWGRTgLADs2DmFFDGJaywQ%2BNkmPuaRPiw5gFN2e9zH&X-Amz-Signature=870fd3b9b55812a48a2b6fb82a3d43c616f72c8acfe8fe4e3c99b0acd5dc0877&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FY2U3X%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDErLfwHVtMXzH1j0f5WLwBFgQFQFJOxSvY%2FII5EMdcmQIhALiBfRP8oHYdHzVj3wcARS1G%2Bs32wq9x0Z2uyMLUSAAcKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfSYAG5LvwkIjeRIoq3APvCP0xZVwtqB2VMms%2FO%2FwxjUMoFR0vPpN1zTUHy9CvgU9eqJy01ZTEgULuvpR1AzI24TiQsX1hjadY22gnAbfM5pqEnoIHVfTH80AcUPvBX1Q8CmYU%2BUcBFyI6frIpDuYMNGi0F%2FdRtfn3F3oAQxKNuWuovqzrWfCHJlCinqzTQKB8c36MHuS84nV6AOaeed1XYlkYyadzVUuDwG2LRloCXaVNLl%2BuEqhKg8YLXx4x5l%2Fr%2BSH%2B1B24j1Rfabd13g2LJdnoQMAx07h%2B0jDYQ35ciARjTvpiJ%2B%2B%2FsfTluBU3yyt%2FyoazmDr4%2BQ1M5e6RtmwGrwpmvqSYOKALgx8Mc6%2FGSUAh5ivjCznFs%2BvrT7mD7Mh3rgPbIR18%2FFhZO7dmhsPc9d8o82kda1GPA%2Bg%2Fp95jU%2BZjf059cQcysaqhNiweA9Foo1DFxcDjetcDv6cvgvIt%2BgwzfF9jXelYDQJ4O6P9b8CQFJcCK6x7td5YAescyU0EY4g6CeUQSD2MKblM7YIBPuDD80RAFp3n04pS7waB65trLel135XilLkKLlJ0gBQN3uY828Lb%2FZHKTtasnhdew2av%2B72vE6BWve3%2B98ykcitTeX80ZNf418jO08bt0xcBD%2BHXBV5%2BAR%2BVSTCe4Ma%2BBjqkAejAJpZgiNbTYbSTt71AHIaIhCTADpBONpcJSgHPZHuIqkUy5%2FSMM9KNI4%2BMYlDpjxmBluX46nOghclFXJ02IntoizTiWgbXNGs7hZHtZ7lPNnB8TfF2HObdE7TMaeElpJ9DRO%2B5Ft2SXQqq3M8m%2FxaSgaY%2Bw1x3N%2FHblrlctzZNptoj1noWGRTgLADs2DmFFDGJaywQ%2BNkmPuaRPiw5gFN2e9zH&X-Amz-Signature=f9360be34ac87a6d3f3136e0c4543921f6251b5855a1b7367a1b8e993416f9cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
