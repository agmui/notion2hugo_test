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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTHISEY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCtEb71wXvIosXpRcOeDL2%2BbT8IwT%2Bvqj8%2Bo7SyAF25hwIgcFL6a2foZK4o9T5ARhfidTFKXzGoYn5Kpc1MgT7qwY8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPouSM4uT3ziPan3yrcA0qCdwh9tPqus1WLagD4avh3F8x5%2FspNYFIpnyN9V3pN7EX003hPrWS6IwwQwteL%2FShT9kZQuc9%2B2BqOhNMF3MX1lA%2FfiL%2BVWkF7MwRpIvzRtVK0CoUJpC8sHU4vt2N6fiFakmqhHUJvNhe4jPLbNGoIMmwIrAS5Vcko64nefDGHxH81o%2B6VbJlthUcdQ5M8GfghnuzSvLGyli7%2BzQYjsRLOd3nxsCPoOlGX%2Fp4oYOmu1B97NC9ihEwcSd%2BirIdNizxfD7FRPvERAwF%2BDX8%2FU0IiCc3OIDbMBN%2BV5j95ruHDBuaIttS3QpjONhYCJDkheTqZpS5SCcbzcrOACokFii39S68U8jLgNbc4F5LAjV47LEZdX575MIKBIzs6wgAuaeTu0%2FUCO9CyJIuP3vTg4mZHcJa3zR9RAwO0YR6Mh6dFwVC6HuFt2vAq08wBu90d6eTVNhQ98t29MwasQPoMImHVRH3NVXkNNQA3mWVI97YCmZN1ukag7TP4VT2Bvaa4abZ7RsZTEN2oviPrPXGekdOQwr9v0Jxc%2B3zCsh%2BQKE8xj38Jeu3dZs9zJ7lf8b2rD75YJu0Lub4AfhAXpERdyKvElHDdJNG%2BtEmg6dpCbvL9BFrMBM%2F3t9Prp8%2B6MJfwm70GOqUBDZxUwvU7dsVeqOQD6Lq9%2BIZu24fCUEacdbw9lGLxZIXdCsVpPsR4UKIzhJmksXRoHhpgNJLm9wt%2BZQjxwS7g1%2BAqSBm5jXHb57NQEQawSsJGBmgKliYDqaASaGFkmhRnnkd9iVfvGXMCTIUIGLMqgBxW7eyCmJ99CrZgpebwMjTp6D6WDFXKtw%2BXcXIqnFLXT7K%2BSvJLYnWZzO%2BhtO4OROSXulQi&X-Amz-Signature=f20fff0d20251839be9671bd3598f985d62be62280f8a8069c9d3345870c4767&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTHISEY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCtEb71wXvIosXpRcOeDL2%2BbT8IwT%2Bvqj8%2Bo7SyAF25hwIgcFL6a2foZK4o9T5ARhfidTFKXzGoYn5Kpc1MgT7qwY8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPouSM4uT3ziPan3yrcA0qCdwh9tPqus1WLagD4avh3F8x5%2FspNYFIpnyN9V3pN7EX003hPrWS6IwwQwteL%2FShT9kZQuc9%2B2BqOhNMF3MX1lA%2FfiL%2BVWkF7MwRpIvzRtVK0CoUJpC8sHU4vt2N6fiFakmqhHUJvNhe4jPLbNGoIMmwIrAS5Vcko64nefDGHxH81o%2B6VbJlthUcdQ5M8GfghnuzSvLGyli7%2BzQYjsRLOd3nxsCPoOlGX%2Fp4oYOmu1B97NC9ihEwcSd%2BirIdNizxfD7FRPvERAwF%2BDX8%2FU0IiCc3OIDbMBN%2BV5j95ruHDBuaIttS3QpjONhYCJDkheTqZpS5SCcbzcrOACokFii39S68U8jLgNbc4F5LAjV47LEZdX575MIKBIzs6wgAuaeTu0%2FUCO9CyJIuP3vTg4mZHcJa3zR9RAwO0YR6Mh6dFwVC6HuFt2vAq08wBu90d6eTVNhQ98t29MwasQPoMImHVRH3NVXkNNQA3mWVI97YCmZN1ukag7TP4VT2Bvaa4abZ7RsZTEN2oviPrPXGekdOQwr9v0Jxc%2B3zCsh%2BQKE8xj38Jeu3dZs9zJ7lf8b2rD75YJu0Lub4AfhAXpERdyKvElHDdJNG%2BtEmg6dpCbvL9BFrMBM%2F3t9Prp8%2B6MJfwm70GOqUBDZxUwvU7dsVeqOQD6Lq9%2BIZu24fCUEacdbw9lGLxZIXdCsVpPsR4UKIzhJmksXRoHhpgNJLm9wt%2BZQjxwS7g1%2BAqSBm5jXHb57NQEQawSsJGBmgKliYDqaASaGFkmhRnnkd9iVfvGXMCTIUIGLMqgBxW7eyCmJ99CrZgpebwMjTp6D6WDFXKtw%2BXcXIqnFLXT7K%2BSvJLYnWZzO%2BhtO4OROSXulQi&X-Amz-Signature=305d22d6edea76ff04e3c66a67cc0e0daba86cc552397cd700f3f3d070e180a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
