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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SS5PT4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqCTIxQ8TFxu42oucSUtgYIAytxPB%2BdZXltxILoY3JfgIgSdFpqt15CF4WHmueK%2FP70D2TvJK5RX2QxPg0oqaHII4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5po5a9RTl%2F%2Bk88CircAx2DuQH2%2FcPGIf3pahdrBu9TQggh8t7UXjvKbDwXYzWHOH7TpHEUBozP3ehLnwiNsVSIO60EIpAl8b%2FSgewmaguvRnda1ndEbPj1A%2FogPr0HxvJypFexqtsBhDn%2FGj1gqPbrro11JBOY67xegVOyWruUHBc5GSu%2FM2gGlG%2FVdoT28NQPx290OMiRtnyka33hwhHRnGVuaq7EjD91G5hPzw4chpP09TfrVRmFCRQBR3csYOAhDHgDniaf7EQBdSuis8cBP6KkGo5wUNAJ3wT4RdwVBKJQ2%2FKWu8bPgC2Eor7Ysft79uRk0aJDJjhULp72BpKI78d8f8QLb64wXSCujx5DdorGcTsV7J06YGaLFR53wJvJXz1g%2F0z5CP%2BwsnWS3eXqSji8%2BVYNjjRC61L17K%2FVQ%2F2D3o7PgxzliBrTllYUoaTm1EGMdtUWp1uR4mlxQdxk%2BRFAYp5g2pO6Yj93zAuVvlefXN8agj37w6Hpb2h%2BO4JRh%2BJ3MJOWY8w70rOZdri%2BofUHt1tcEbTFrJC0vazVWwKq9dvemdVQINWKHMflDxP4iL6nqYDjTzBnafyntJCAo%2F3CmIZMzikWlHI8Yfw2eSszHWMqHjWYmBtgHtJdgU3P6vOQETdur6TdMP6c5cQGOqUBIew6RsPtHUqK7lix%2BWO6V10RT3J7wts7L%2BJcqcQNPoOAgEZXjM%2FLyHlw394bu3GyhjKSjDSstLIchFXQzc7rJC9S2uXsvhTZOYZw8FU0Pc%2F%2Br%2Buer5C4yolUN15poudLUzXuMWI1XnMc2IsqIoconTeORt7pTJaa%2BemyWe174cHG1TOE6a%2F8fPtUscgJFoEcKg02wa4OOPfWA80KJYww0qZTiWDb&X-Amz-Signature=17f952a3d90cd1cf786053e8618138354a0c932bc2c5bc8720c1335d67cf4fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SS5PT4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqCTIxQ8TFxu42oucSUtgYIAytxPB%2BdZXltxILoY3JfgIgSdFpqt15CF4WHmueK%2FP70D2TvJK5RX2QxPg0oqaHII4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5po5a9RTl%2F%2Bk88CircAx2DuQH2%2FcPGIf3pahdrBu9TQggh8t7UXjvKbDwXYzWHOH7TpHEUBozP3ehLnwiNsVSIO60EIpAl8b%2FSgewmaguvRnda1ndEbPj1A%2FogPr0HxvJypFexqtsBhDn%2FGj1gqPbrro11JBOY67xegVOyWruUHBc5GSu%2FM2gGlG%2FVdoT28NQPx290OMiRtnyka33hwhHRnGVuaq7EjD91G5hPzw4chpP09TfrVRmFCRQBR3csYOAhDHgDniaf7EQBdSuis8cBP6KkGo5wUNAJ3wT4RdwVBKJQ2%2FKWu8bPgC2Eor7Ysft79uRk0aJDJjhULp72BpKI78d8f8QLb64wXSCujx5DdorGcTsV7J06YGaLFR53wJvJXz1g%2F0z5CP%2BwsnWS3eXqSji8%2BVYNjjRC61L17K%2FVQ%2F2D3o7PgxzliBrTllYUoaTm1EGMdtUWp1uR4mlxQdxk%2BRFAYp5g2pO6Yj93zAuVvlefXN8agj37w6Hpb2h%2BO4JRh%2BJ3MJOWY8w70rOZdri%2BofUHt1tcEbTFrJC0vazVWwKq9dvemdVQINWKHMflDxP4iL6nqYDjTzBnafyntJCAo%2F3CmIZMzikWlHI8Yfw2eSszHWMqHjWYmBtgHtJdgU3P6vOQETdur6TdMP6c5cQGOqUBIew6RsPtHUqK7lix%2BWO6V10RT3J7wts7L%2BJcqcQNPoOAgEZXjM%2FLyHlw394bu3GyhjKSjDSstLIchFXQzc7rJC9S2uXsvhTZOYZw8FU0Pc%2F%2Br%2Buer5C4yolUN15poudLUzXuMWI1XnMc2IsqIoconTeORt7pTJaa%2BemyWe174cHG1TOE6a%2F8fPtUscgJFoEcKg02wa4OOPfWA80KJYww0qZTiWDb&X-Amz-Signature=806454962efe6eddf0d7e6c09c78ed526fb43bc40440f98227a78504b406d20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
