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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTIL4UW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnIAAGxxQmaijtjDwJwFWp0Bi4Z8JTqKaCRiby%2B1SGfAiEArKKeX3IRGn3CIuLbJe0UCpdBBumXfKtXF%2BdLd9ND%2Bi0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcLcmKCMMIIgMxGTSrcAzJLSHVy63eZXj8E6FPndOO0qeFrQmddUaIBKApviJcqinxZ97YRgniEU%2Fr6tZBFj%2FycDjqlRmsKfpsZBxcHykNBp1P55JJxtRVNwi%2FvernQ5WfG3TU4FLcuUhwvPCO8q%2BvCO5hrYhfJ8qyg9K4L2sajoA7R9ywIyT1bm5U06kn3UPxtrAjMPgBX8WsOE%2BRc%2BRggMT5hbl%2BPqWy%2Bnda33dWGFpTNnyg%2F96QyLhVgWip%2FGmsgXTjMDLPWwBrRihtgAgZwkXo408AbKJoyLiGN%2FJc3tUzN5EbJeAaRmMbMQlWGOKjMfwQbvJDnTDCoZ75VHTmoA8ZEquVceSvgtxaY7E78%2FL%2FmH6WDwE1BrRN7CKmDvyTC%2Bzsn%2BEoWU25fQklEcykqL8v9rELRFUzoBLTU4bjiB8PP5KY56JvtgVU%2F9P1olBQGbJHXhA%2F6Ix7CKxV5tUw%2FPfpe3L593lQME6crzPdZmRVs2qdzgJs6GtPwhSNeh0JglR3b4vFTvicV8WY0S1%2BFxZjEYUy2ERbIgGFHwW4tdLhDEPJsGBGAkkjMEoinb9J8iW2HwOytDhCdN06KNMh8RrG%2BsJEws%2B5aymUIMi5dewzQnDJ%2FcTNMI1ScBtbRmCB4xCwfOwMX05p9MJicscQGOqUB9qw2LIaKJHHFnM7VlTPUkgN4%2BLFtmv4TvvlEw1V1LlsLgfnq5yasxOikJZXz%2BW2v9ztJI3zxJS%2FGZnzqvfnMFQFA%2BU4HFx1NuYo1YleGHlEFNe3SDuJy9sJlJZBOiS8EqUfFbLRfG2lWA5Io88RbuxcoE6x4y55fyhOOcssyaTU2c9HbLTq6alRterzwBOPKab1Nq4MpJN%2FWz7MV%2BKjW4nHba9be&X-Amz-Signature=56d9800d45a1d715ea18c21ed70e480dc7e70112c45d9dae78a7f237c5b6aa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTIL4UW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnIAAGxxQmaijtjDwJwFWp0Bi4Z8JTqKaCRiby%2B1SGfAiEArKKeX3IRGn3CIuLbJe0UCpdBBumXfKtXF%2BdLd9ND%2Bi0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcLcmKCMMIIgMxGTSrcAzJLSHVy63eZXj8E6FPndOO0qeFrQmddUaIBKApviJcqinxZ97YRgniEU%2Fr6tZBFj%2FycDjqlRmsKfpsZBxcHykNBp1P55JJxtRVNwi%2FvernQ5WfG3TU4FLcuUhwvPCO8q%2BvCO5hrYhfJ8qyg9K4L2sajoA7R9ywIyT1bm5U06kn3UPxtrAjMPgBX8WsOE%2BRc%2BRggMT5hbl%2BPqWy%2Bnda33dWGFpTNnyg%2F96QyLhVgWip%2FGmsgXTjMDLPWwBrRihtgAgZwkXo408AbKJoyLiGN%2FJc3tUzN5EbJeAaRmMbMQlWGOKjMfwQbvJDnTDCoZ75VHTmoA8ZEquVceSvgtxaY7E78%2FL%2FmH6WDwE1BrRN7CKmDvyTC%2Bzsn%2BEoWU25fQklEcykqL8v9rELRFUzoBLTU4bjiB8PP5KY56JvtgVU%2F9P1olBQGbJHXhA%2F6Ix7CKxV5tUw%2FPfpe3L593lQME6crzPdZmRVs2qdzgJs6GtPwhSNeh0JglR3b4vFTvicV8WY0S1%2BFxZjEYUy2ERbIgGFHwW4tdLhDEPJsGBGAkkjMEoinb9J8iW2HwOytDhCdN06KNMh8RrG%2BsJEws%2B5aymUIMi5dewzQnDJ%2FcTNMI1ScBtbRmCB4xCwfOwMX05p9MJicscQGOqUB9qw2LIaKJHHFnM7VlTPUkgN4%2BLFtmv4TvvlEw1V1LlsLgfnq5yasxOikJZXz%2BW2v9ztJI3zxJS%2FGZnzqvfnMFQFA%2BU4HFx1NuYo1YleGHlEFNe3SDuJy9sJlJZBOiS8EqUfFbLRfG2lWA5Io88RbuxcoE6x4y55fyhOOcssyaTU2c9HbLTq6alRterzwBOPKab1Nq4MpJN%2FWz7MV%2BKjW4nHba9be&X-Amz-Signature=394a32ddd4c8c6ee35ce8012fb1e1b751e598269a89f5338cadcf450f061347f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
