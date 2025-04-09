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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KTZMXL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD5wkT8u%2Bt2kH05vdv7D5mtoxrKNk7%2F6iHMejV1QbgXMAIgecnf0obmDeU0NB30f00ZKstYeMXEUQHDIpPYV41Cj2EqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1l6WpJN%2B2oz%2F9EUircA4hGxlbXmpj3Z1KWK3pHdUEJRPTx6LLaRY0su%2Fx%2FbsIUuXEq9inBu6IWT7NqIFSe%2BAyBD8vmJ1W8jZPBIsZKLtnzKxOkfFCK8A2i7lzcADnVkhn0M5aq4O2%2FD92HkCllMY45aZhbEakTbhv6k890SHY66FElm5hgzf3SNYjjYvHZ3BVKilHoYvjB%2BV5Ihw5709GqO5ZHZhqRHpRG%2FKlJQpxwrLZcTE%2BoPOX3P3x3kZzQBMDuzW3kYMuXU%2B7ANZP4IhjeKfW0%2Bf98wmsd79Z7ZxZlexWcUrrHjlK4LeeqVfkmHZxkshk8OTV%2BCpp7wbSvRf7D2NxbErY06gDsHhroPoLfSA0NejqkxHXKMeVJf%2B0dCRu%2B3qdWWd%2FgtPTEoDDEHYbVDfYzbGjSWKbtnKdvUlR7AQ0K5EfKWDLu8N4cHCo2a%2FagE%2FMTx2414EayD%2FyouB1Tvbvwd4kvJeqH0pE78xFDbkJKyXpU0dI9SvmXCWekXOXT7MCD4EJgyJYepaY4EFil%2F0QIqGYogUrxD9lvu9yiXUCs2j4MRXuWdD0fEU4M8ihSXv0ZZPSx7BDCIVPLyaWXeeGxIRXyN%2Fxl8%2FMOvXPdnyZOiCukq9YJtNIsE9bD91G28GgxI%2FC%2FvgqzMIjj278GOqUBgRkYJVilZ%2FvKX%2BOW%2FUDLXzKz9JpSehF2MgUsiL7qBqW8DoRc6FmAzlSdLj7LDkVhaRV4flJa5V6Ca2ETEjBfQI7MSrXCySURVIVQFGFJQFgZ%2FsbgoCZez2JiKTRtYJpkWJVgJVgZDkL9DmVVFuh1x7q9Aw%2F0ZoAforyMSIkITdduyUYHupt1YPePhIWgSc%2FHdbGrv2vHT%2FwIzLnz4uwarGC4UNs8&X-Amz-Signature=394af3e16b8607611ef5b03dd2d3ff25bd8ad738280c1123f2c1a4e52b210e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KTZMXL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD5wkT8u%2Bt2kH05vdv7D5mtoxrKNk7%2F6iHMejV1QbgXMAIgecnf0obmDeU0NB30f00ZKstYeMXEUQHDIpPYV41Cj2EqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1l6WpJN%2B2oz%2F9EUircA4hGxlbXmpj3Z1KWK3pHdUEJRPTx6LLaRY0su%2Fx%2FbsIUuXEq9inBu6IWT7NqIFSe%2BAyBD8vmJ1W8jZPBIsZKLtnzKxOkfFCK8A2i7lzcADnVkhn0M5aq4O2%2FD92HkCllMY45aZhbEakTbhv6k890SHY66FElm5hgzf3SNYjjYvHZ3BVKilHoYvjB%2BV5Ihw5709GqO5ZHZhqRHpRG%2FKlJQpxwrLZcTE%2BoPOX3P3x3kZzQBMDuzW3kYMuXU%2B7ANZP4IhjeKfW0%2Bf98wmsd79Z7ZxZlexWcUrrHjlK4LeeqVfkmHZxkshk8OTV%2BCpp7wbSvRf7D2NxbErY06gDsHhroPoLfSA0NejqkxHXKMeVJf%2B0dCRu%2B3qdWWd%2FgtPTEoDDEHYbVDfYzbGjSWKbtnKdvUlR7AQ0K5EfKWDLu8N4cHCo2a%2FagE%2FMTx2414EayD%2FyouB1Tvbvwd4kvJeqH0pE78xFDbkJKyXpU0dI9SvmXCWekXOXT7MCD4EJgyJYepaY4EFil%2F0QIqGYogUrxD9lvu9yiXUCs2j4MRXuWdD0fEU4M8ihSXv0ZZPSx7BDCIVPLyaWXeeGxIRXyN%2Fxl8%2FMOvXPdnyZOiCukq9YJtNIsE9bD91G28GgxI%2FC%2FvgqzMIjj278GOqUBgRkYJVilZ%2FvKX%2BOW%2FUDLXzKz9JpSehF2MgUsiL7qBqW8DoRc6FmAzlSdLj7LDkVhaRV4flJa5V6Ca2ETEjBfQI7MSrXCySURVIVQFGFJQFgZ%2FsbgoCZez2JiKTRtYJpkWJVgJVgZDkL9DmVVFuh1x7q9Aw%2F0ZoAforyMSIkITdduyUYHupt1YPePhIWgSc%2FHdbGrv2vHT%2FwIzLnz4uwarGC4UNs8&X-Amz-Signature=899a87aa2105c4f7afd54b83cda1531bdcdfa6a110389ac226c7f0fed5ad1cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
