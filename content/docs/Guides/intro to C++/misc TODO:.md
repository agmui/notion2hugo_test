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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GS3MAR5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw4zrI4E5LTJTOBdfPVKVo7vTcbg0J04deU0bnV1fjyAiEAwiAVRSxYVnLW%2BCygUjWp751gcYDynblCJy6jKxrCeNoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFYL9dxPb%2BzN%2BeFcdyrcAxzj%2Bre%2BYM%2B8FxHTe3EoIa8%2FVxlbckPfZZyCoBKEcDphxW5H6Qn7F7Wua3GiF9MPGqQGjplIqHkPzTPmNlBu7TOcTXJ2Ujg%2FxJ8imHfIADVz06b9YeW2FdSg9E6naeh6h4aN9GYupAsJuqWR7Y8q1WJyqLNYybliQPEqhHcdA728OGIrRTnRPDbwHlZ1fYUCJV8mytqs40gq3Kg6oIAJyj2SZozeuIDnhfb7Uz3j62n1lCxDZr7YrgfetkeiJ6TcrAcTTqaJNoPgAMLBwFcYTZBQ1yA46v6a%2FNbY%2BuOoMmtl%2FDyqJn8bitTyAWGKOYNhL3B6AHzlt9sq6NrOvBVy34IZWyrCmCYgAr7Y%2FA3z1olijHgeNkg6GPYgf%2BbS99ZIcG%2F5m0xOeMjwCmf9dlfkJrzgW85ZVfQ8bP1Efq7ZKdh2VXK5Y5QYg8%2BVJBKuW4XaF7SQG1%2Bmk8KuA%2BWLdYjQd%2Bh3pSxHpjMaRtlIduDyM9BFmcWT3lL6uutW8U4%2FtuC5DN93zHoiZ7eTsTm58Sesatf8QUScHhbx972ubbmZUqTuuT3NDrMYVvzIt%2Brloe5BPe%2F4%2BRm4MktcDYhORqkhQo%2BmdD6mYJkAGz36G%2BpqqzEhVPwl6buzNVjXSHnyMK74mb8GOqUBid0Rn2B95sd3srRGOYyqL0WXrUerdrD499jXnXJzaTyk2La4gAH%2FxLw9BA6ch8Wmfgoa2bfbD8ej0pt0uAZhamVgADRawDzmhY3nyOJv5LrWlLMmd8o4f094EHoZ90ISm0pONoj8LkoF9%2BakHuTri5QvMYuCWTxEBzSJfdbYSoEAA%2BQWgfyQTu9VgJOxTYI7aXgBMFre4A6F11oWx0aFpCPuNL8X&X-Amz-Signature=4a461de2fa31e8f312268d0e1b41c3edfa2eb251dcf29827f526df135a2abae6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GS3MAR5%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw4zrI4E5LTJTOBdfPVKVo7vTcbg0J04deU0bnV1fjyAiEAwiAVRSxYVnLW%2BCygUjWp751gcYDynblCJy6jKxrCeNoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFYL9dxPb%2BzN%2BeFcdyrcAxzj%2Bre%2BYM%2B8FxHTe3EoIa8%2FVxlbckPfZZyCoBKEcDphxW5H6Qn7F7Wua3GiF9MPGqQGjplIqHkPzTPmNlBu7TOcTXJ2Ujg%2FxJ8imHfIADVz06b9YeW2FdSg9E6naeh6h4aN9GYupAsJuqWR7Y8q1WJyqLNYybliQPEqhHcdA728OGIrRTnRPDbwHlZ1fYUCJV8mytqs40gq3Kg6oIAJyj2SZozeuIDnhfb7Uz3j62n1lCxDZr7YrgfetkeiJ6TcrAcTTqaJNoPgAMLBwFcYTZBQ1yA46v6a%2FNbY%2BuOoMmtl%2FDyqJn8bitTyAWGKOYNhL3B6AHzlt9sq6NrOvBVy34IZWyrCmCYgAr7Y%2FA3z1olijHgeNkg6GPYgf%2BbS99ZIcG%2F5m0xOeMjwCmf9dlfkJrzgW85ZVfQ8bP1Efq7ZKdh2VXK5Y5QYg8%2BVJBKuW4XaF7SQG1%2Bmk8KuA%2BWLdYjQd%2Bh3pSxHpjMaRtlIduDyM9BFmcWT3lL6uutW8U4%2FtuC5DN93zHoiZ7eTsTm58Sesatf8QUScHhbx972ubbmZUqTuuT3NDrMYVvzIt%2Brloe5BPe%2F4%2BRm4MktcDYhORqkhQo%2BmdD6mYJkAGz36G%2BpqqzEhVPwl6buzNVjXSHnyMK74mb8GOqUBid0Rn2B95sd3srRGOYyqL0WXrUerdrD499jXnXJzaTyk2La4gAH%2FxLw9BA6ch8Wmfgoa2bfbD8ej0pt0uAZhamVgADRawDzmhY3nyOJv5LrWlLMmd8o4f094EHoZ90ISm0pONoj8LkoF9%2BakHuTri5QvMYuCWTxEBzSJfdbYSoEAA%2BQWgfyQTu9VgJOxTYI7aXgBMFre4A6F11oWx0aFpCPuNL8X&X-Amz-Signature=9e656a89c0291065c442cabdf93b301d530987e0d07c12428b608475326a4804&X-Amz-SignedHeaders=host&x-id=GetObject)

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
