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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDZPWZH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICtN0u34LXbyH5gStIja1LK1TR8CLtQogiYNYqUpYXsjAiEAr8T1yrEjvccqeb0uDffJxAmeXr0eXPLjAJaED1KeBQIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND2z43GVxixUWAU5SrcA6lKzPVAMEX18gYeJZsoLPRIjaPRcwMs3vR4pc%2B4YpKKGShxEBdi%2BoF3TZsOnxP59y3N1vPVHVfGiSNp3lDVIN6pPJG%2Fhsl%2FbVKSAzpgO2gvjiUJujUSKxijs3ehAKExb35U1tfcNaHOLkBatttUGhGXXfozu0Kb89mgVRBy3kWUDR6qwak5cxDWVNOj%2BJVCsL4XVDj5HiyR3pJHtyBYUnzRsZ2GvSLGd05jMJGZM5ntlgiHWDDT7A38TYMbz%2FNuT8kv%2BRBz88HvftlxupF%2Bq%2BLgYxb5fuWIxdyNRq6%2BL5r%2B3HmnaTYbreDQxmtn4RzEef4MROo19eMad23IhjCxfbz2z%2FaxySuC5tMWneWqcXZjQ872uApiMmcWRIKnfoRi%2BkIsxU6VF568mB2JN2hofN6xxqp0odgn%2Bxwl%2BPA%2BxAYmoe%2F9CxTJF8v9b0xflwEzw%2F3UOvi%2BGA9wOSj9pcrvN2FczkDB0BNY2N%2FbMj4h33i5thv7wZA8zG4Yx8KVZlSme4JAS599G11Ph0oKs1YHDEyJ4JkQWZsZk56ARyjJ5LzA1iZswkss3P7yGLglmqeaFNdFgXR%2Bt2f1f65XwvNW%2FfKki69Cxi3nmcts0Aio8EZURbxBFK2xSM5JlzA4MJr40b0GOqUBMLsQR%2BfEwXS7qzipB8kfyNdyhbacxDBStXawY48Hjz%2FMLWPYfnoP2Jd%2Fin4S1HOr7d6TWjuU3yh5V8ScVLFKywTewnvebhGAH33du67Gw%2FCuQLWnFpJgGMRA1uS3GzEefOFMT6hPBE4maud1nbCqtPhgdEbBy1maRtNodj2AVysPpyVjT%2B%2BLOdHi8GrOM6ipxgnZjLS8JTh1x4cCpGHOkekEfsBl&X-Amz-Signature=9e91b9358bbf5a41ef2ea0a35322480d496dbebbbb8388e5d18df5e2bf1b54c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDZPWZH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICtN0u34LXbyH5gStIja1LK1TR8CLtQogiYNYqUpYXsjAiEAr8T1yrEjvccqeb0uDffJxAmeXr0eXPLjAJaED1KeBQIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND2z43GVxixUWAU5SrcA6lKzPVAMEX18gYeJZsoLPRIjaPRcwMs3vR4pc%2B4YpKKGShxEBdi%2BoF3TZsOnxP59y3N1vPVHVfGiSNp3lDVIN6pPJG%2Fhsl%2FbVKSAzpgO2gvjiUJujUSKxijs3ehAKExb35U1tfcNaHOLkBatttUGhGXXfozu0Kb89mgVRBy3kWUDR6qwak5cxDWVNOj%2BJVCsL4XVDj5HiyR3pJHtyBYUnzRsZ2GvSLGd05jMJGZM5ntlgiHWDDT7A38TYMbz%2FNuT8kv%2BRBz88HvftlxupF%2Bq%2BLgYxb5fuWIxdyNRq6%2BL5r%2B3HmnaTYbreDQxmtn4RzEef4MROo19eMad23IhjCxfbz2z%2FaxySuC5tMWneWqcXZjQ872uApiMmcWRIKnfoRi%2BkIsxU6VF568mB2JN2hofN6xxqp0odgn%2Bxwl%2BPA%2BxAYmoe%2F9CxTJF8v9b0xflwEzw%2F3UOvi%2BGA9wOSj9pcrvN2FczkDB0BNY2N%2FbMj4h33i5thv7wZA8zG4Yx8KVZlSme4JAS599G11Ph0oKs1YHDEyJ4JkQWZsZk56ARyjJ5LzA1iZswkss3P7yGLglmqeaFNdFgXR%2Bt2f1f65XwvNW%2FfKki69Cxi3nmcts0Aio8EZURbxBFK2xSM5JlzA4MJr40b0GOqUBMLsQR%2BfEwXS7qzipB8kfyNdyhbacxDBStXawY48Hjz%2FMLWPYfnoP2Jd%2Fin4S1HOr7d6TWjuU3yh5V8ScVLFKywTewnvebhGAH33du67Gw%2FCuQLWnFpJgGMRA1uS3GzEefOFMT6hPBE4maud1nbCqtPhgdEbBy1maRtNodj2AVysPpyVjT%2B%2BLOdHi8GrOM6ipxgnZjLS8JTh1x4cCpGHOkekEfsBl&X-Amz-Signature=a03431735fd4f62a83da72689d8341801942eabf91a8563f2e7e0b54ad67839b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
