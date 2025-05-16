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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37UXMGS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t0xQ2i2O3s%2FuHAGM93xjSthI7D0ONkv6dIs6o9L5PQIhAISCFpLI89cAUDsn04QR5NzhghkCdf4W3MJezD7kC%2BF0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgxRE0XdU%2BUWm%2FviCwwq3APVZobFCAwixM62eFV3jQGpuvOyOIkFH74jW%2FWcY8wN7Iz1bHddrYx0%2FkyI4SA88lrb8ZRcG3VBWLLCCyOLNxMAwilPDPykI2sOexp1rL3M9ul8xmG6fFEg6bXrpIMsZGIneb7c5%2F4FR2YzFZO%2BMDG6qH5NbVhAfPiBR%2BEBQemqXO7kkBTEzIHvanWA%2BDC7WuPtYnxRztj%2FE%2F8W0sQ8PatFaSCw6qte9o4sa%2FHIXyyyxq1QNsxpyGgs%2FMvcf6DARprpjCnB0NRyRV5%2BRQf3rz6OWf5RBk4fID09gGv5lAzd3OoGqsvglFEZyeRCpfrhqhqAe2kApVObK%2B9gtYE0J%2BzLRaJ9wcIcc7N29lb1l3dI9KAiQdQrpmEELT11MpX4X4Hsr9sjYcaPlE8A8UpMm8x72TMk6Bk8Tv%2F5aaZ13L3VW0QFjK44a1w0oye4XvVVXIcExFPQqZsH7FxC%2ByYLMrN3R5uPddXOV3qo7HqA8%2B0H0FpelOGQeMyL9X2IqLGcchOCKcb%2BAHhc%2Bp%2F6CsC%2F2MaZY%2BbdgV%2Bcc116ivKrfWFwH0%2FDjulRYugzRVk4Rld6%2F%2B%2F6g6WkRHjdDWXVW2l%2F8PtChQLT%2FDiFAbV2iYZfx3L2CiBLGurqwBrE8kFEbzD2j57BBjqkATydChQVYV7iH6PnRfkAyco6XdDYuxAUWiHoX7O1vofTNnWXkMwap%2BiQu0GQwUE3SM7IXHlQv6sXoEFGR1jCvRJU9Uaekgw7B4mIPqrJCytWfoNi1cJumG9ybzYGdDbUN9UAv0a5ZxzmSA5TGWlXITwOIT%2Fo1Amx6FL9MxMXgKb6kLqmo9xbaxvtRsAr51DmeKx%2FK%2FytRcIq5yootX5FcbRe1PtY&X-Amz-Signature=ee4355a190b6ace19e40f84640c9a9fef857f0fcc080482406f57fda10295626&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37UXMGS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t0xQ2i2O3s%2FuHAGM93xjSthI7D0ONkv6dIs6o9L5PQIhAISCFpLI89cAUDsn04QR5NzhghkCdf4W3MJezD7kC%2BF0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgxRE0XdU%2BUWm%2FviCwwq3APVZobFCAwixM62eFV3jQGpuvOyOIkFH74jW%2FWcY8wN7Iz1bHddrYx0%2FkyI4SA88lrb8ZRcG3VBWLLCCyOLNxMAwilPDPykI2sOexp1rL3M9ul8xmG6fFEg6bXrpIMsZGIneb7c5%2F4FR2YzFZO%2BMDG6qH5NbVhAfPiBR%2BEBQemqXO7kkBTEzIHvanWA%2BDC7WuPtYnxRztj%2FE%2F8W0sQ8PatFaSCw6qte9o4sa%2FHIXyyyxq1QNsxpyGgs%2FMvcf6DARprpjCnB0NRyRV5%2BRQf3rz6OWf5RBk4fID09gGv5lAzd3OoGqsvglFEZyeRCpfrhqhqAe2kApVObK%2B9gtYE0J%2BzLRaJ9wcIcc7N29lb1l3dI9KAiQdQrpmEELT11MpX4X4Hsr9sjYcaPlE8A8UpMm8x72TMk6Bk8Tv%2F5aaZ13L3VW0QFjK44a1w0oye4XvVVXIcExFPQqZsH7FxC%2ByYLMrN3R5uPddXOV3qo7HqA8%2B0H0FpelOGQeMyL9X2IqLGcchOCKcb%2BAHhc%2Bp%2F6CsC%2F2MaZY%2BbdgV%2Bcc116ivKrfWFwH0%2FDjulRYugzRVk4Rld6%2F%2B%2F6g6WkRHjdDWXVW2l%2F8PtChQLT%2FDiFAbV2iYZfx3L2CiBLGurqwBrE8kFEbzD2j57BBjqkATydChQVYV7iH6PnRfkAyco6XdDYuxAUWiHoX7O1vofTNnWXkMwap%2BiQu0GQwUE3SM7IXHlQv6sXoEFGR1jCvRJU9Uaekgw7B4mIPqrJCytWfoNi1cJumG9ybzYGdDbUN9UAv0a5ZxzmSA5TGWlXITwOIT%2Fo1Amx6FL9MxMXgKb6kLqmo9xbaxvtRsAr51DmeKx%2FK%2FytRcIq5yootX5FcbRe1PtY&X-Amz-Signature=d018d77266baa09242423430eb9a1aec9d06abdf3a04ebd7da45aeb2d1f52f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
