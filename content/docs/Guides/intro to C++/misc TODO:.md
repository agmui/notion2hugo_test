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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3OPM2G%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnjQwJwcwBshW6GjGHc9HbTQ4NGPPljia5TbgRqYrL3AiAI8oWr%2FuNAnFCWUFFGEigOaQKuJv3SB%2B%2B%2F5NUGpASxTCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM1mqlOS0j%2FcmdLXYjKtwDslxsriiyW9j5d1fhMk8RCeGUuT6KTP1%2FDbi8r3rNjiQleag2SG0aPUAkHMEb4jMbsDYxUbfyHyhK8kbjGtYpzMC5iRDGjYxT0Ee4o47IN0tBdzYdwDRpFgSfn6qLDtVvTm6r28Y9lIxtr0c15Nj4UwxoGEGjCyn8EGE%2F5s%2FCcf5CUUvx39qPGdo8p0QiiOY5d%2BKyMycR%2FZO24mT17xY5KdhwZG8u7ZaKBJqLtY1%2FEeOSiXckUZTDMjTty4dxDbWCjq90HJn5oxl%2FuYnoDQ8ayVl8%2F3BZ1aNuSVVCHnq7dE0frKBh0DJHu7FV%2BLCo9BVfswTx9%2FWGrVDGsVUuFzoTrCw%2Fectn%2F0Q4hCwO8qBhqMVS1%2BdVoD9rjIziA5JLOZQxDYdq74CYAQuVVwRiiuqyFgEoXN85IGcRTnVgEZCN3H6Wc2ZYSPuWtmxyvIzSR4aisY2%2BkID6a62z8Yxrza1mwG33xQxqC4oFK6mONTE92AYVnMXVDdNW3MqMcvGVzA%2FOkWXKX39OZ07hoSaR0dJBH8BxXxNLucbVgwhMqVaqdXmrwKB%2Bw4F%2F%2Bmv7mZnT8bdgkveamM3J1nm1OZc799P7d3zJrykRxc3xReA%2FvrhURNv5d3jF3t%2FRQZwmXsYw0ZGkwQY6pgH7bOW1EevoyjBGA5NMG0ux6BYZST7z1Jl%2FtHIC2261oJ3zAp1f%2BMYhF9U%2BiRZBTtZrtgI3K4KURG9dNT7s6awCdG5F4UN15v1TDhwkmc5U%2BiKUlmkgCrzEFRlwq59%2FoU0ku1K27Bhu3crhHdm%2B1abRYnFy7LqvJbg%2BRCv618wpkV28X6QA4vBgsH%2BfVJiAspf4aJgrPQrsGP77%2FAWHR%2Fsm534IQdAE&X-Amz-Signature=4ef42c26bb00c87d766dd59fa1287d578121e02202c0ee639f9484c35995349f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3OPM2G%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnjQwJwcwBshW6GjGHc9HbTQ4NGPPljia5TbgRqYrL3AiAI8oWr%2FuNAnFCWUFFGEigOaQKuJv3SB%2B%2B%2F5NUGpASxTCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM1mqlOS0j%2FcmdLXYjKtwDslxsriiyW9j5d1fhMk8RCeGUuT6KTP1%2FDbi8r3rNjiQleag2SG0aPUAkHMEb4jMbsDYxUbfyHyhK8kbjGtYpzMC5iRDGjYxT0Ee4o47IN0tBdzYdwDRpFgSfn6qLDtVvTm6r28Y9lIxtr0c15Nj4UwxoGEGjCyn8EGE%2F5s%2FCcf5CUUvx39qPGdo8p0QiiOY5d%2BKyMycR%2FZO24mT17xY5KdhwZG8u7ZaKBJqLtY1%2FEeOSiXckUZTDMjTty4dxDbWCjq90HJn5oxl%2FuYnoDQ8ayVl8%2F3BZ1aNuSVVCHnq7dE0frKBh0DJHu7FV%2BLCo9BVfswTx9%2FWGrVDGsVUuFzoTrCw%2Fectn%2F0Q4hCwO8qBhqMVS1%2BdVoD9rjIziA5JLOZQxDYdq74CYAQuVVwRiiuqyFgEoXN85IGcRTnVgEZCN3H6Wc2ZYSPuWtmxyvIzSR4aisY2%2BkID6a62z8Yxrza1mwG33xQxqC4oFK6mONTE92AYVnMXVDdNW3MqMcvGVzA%2FOkWXKX39OZ07hoSaR0dJBH8BxXxNLucbVgwhMqVaqdXmrwKB%2Bw4F%2F%2Bmv7mZnT8bdgkveamM3J1nm1OZc799P7d3zJrykRxc3xReA%2FvrhURNv5d3jF3t%2FRQZwmXsYw0ZGkwQY6pgH7bOW1EevoyjBGA5NMG0ux6BYZST7z1Jl%2FtHIC2261oJ3zAp1f%2BMYhF9U%2BiRZBTtZrtgI3K4KURG9dNT7s6awCdG5F4UN15v1TDhwkmc5U%2BiKUlmkgCrzEFRlwq59%2FoU0ku1K27Bhu3crhHdm%2B1abRYnFy7LqvJbg%2BRCv618wpkV28X6QA4vBgsH%2BfVJiAspf4aJgrPQrsGP77%2FAWHR%2Fsm534IQdAE&X-Amz-Signature=92d500da4167540129d75239c291b15889067db4dd319e362f57910824de0d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
