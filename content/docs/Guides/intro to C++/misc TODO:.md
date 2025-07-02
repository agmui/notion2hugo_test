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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YEVA7C%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBA2zZVKRepj2LNF6k29%2Fz%2BlTttyuxg0BLO9P37gn84gIgBxNKPfmyNbN3QMCGGB0DHkI05TqVkjRifJ%2BttC5ZhqYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsi6MfD5EeGlgAwAircAxsyrZTPT2xk0SX%2B4t1NU975h63Z8AcRtgpdlMiTB6%2BqELa4G8wvLQhuTNZPEPYjfe9tPlbLt3G3Ya6WP9V14oSHLcVyy43MyjIbaTxVQkzy%2F3jzHAGoHxMEaKLNDEf231gPveObL1yQifxkwRAfqkQelB7NTz3jz9%2B1RNoMOoSm5pVPST3s%2Bl9hQ0jv6aLQSktVNmxzJnFqOx%2BX8jEuwNOVOHAyCgLvNko4wD48aD5OZFPko5YDJepNi9CMGXNd2wrWhMLatXBy4kBu%2FK1Wqxu%2BUIxkxidMxf8BsiMUo0u1yPSY7ny9iuHWPeCHhYjWtplHKKFzQO1Y7sy1XZIqSwOPJzRBhB2oyR60m%2BkhV79lF2QylG4jE0rHpn1oyF4iXjWcv%2BRQKY4YuYn2U6AyxtiXIPZSzn9IO9wZqZJS3A84qhspyMy2vjyUSljtFGqOeOaBQN8vTk9MH7%2F1Nsgoajl73t3EirU3g4pZoehPu1wHArvuTFAfq8F4C%2F%2BBnobih8yexp6O5V6TocCjuG9A12rj5qjSvzAS%2FsWizQEVlsr1ci%2B%2BxewtZUiJMJK5YLC70ERV6JNTSF%2FW6kXuA9kLELrbHcVZ62YgE225TB%2BqPd9jsKM%2B4%2F1i97oE3lsdMOidksMGOqUBWmlzTpJDNqlt7lLATltLOt5UykKeHksyGK55WccKd8RN0iebPV8u6NVuP0XZWbtgArI3CWdCjdLNVy%2BmOQye8nQGEcfoX1sXC3iOUDcYEFrK49KhOwYUecQ70dztuDK1Ah0L4WZG4ZItRB8x1MaL32yCtaF13pzVkWfvAJRWgi0SdqXWa7%2BMQy0eqjpXCSL1nKwna8qqTHJyEpoxyJ4YTE4AKnl5&X-Amz-Signature=77f389f24c34c48ddcd9a5d7b56008a14f6106eefa0a4e6d0e1d9b66d290c8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YEVA7C%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBA2zZVKRepj2LNF6k29%2Fz%2BlTttyuxg0BLO9P37gn84gIgBxNKPfmyNbN3QMCGGB0DHkI05TqVkjRifJ%2BttC5ZhqYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsi6MfD5EeGlgAwAircAxsyrZTPT2xk0SX%2B4t1NU975h63Z8AcRtgpdlMiTB6%2BqELa4G8wvLQhuTNZPEPYjfe9tPlbLt3G3Ya6WP9V14oSHLcVyy43MyjIbaTxVQkzy%2F3jzHAGoHxMEaKLNDEf231gPveObL1yQifxkwRAfqkQelB7NTz3jz9%2B1RNoMOoSm5pVPST3s%2Bl9hQ0jv6aLQSktVNmxzJnFqOx%2BX8jEuwNOVOHAyCgLvNko4wD48aD5OZFPko5YDJepNi9CMGXNd2wrWhMLatXBy4kBu%2FK1Wqxu%2BUIxkxidMxf8BsiMUo0u1yPSY7ny9iuHWPeCHhYjWtplHKKFzQO1Y7sy1XZIqSwOPJzRBhB2oyR60m%2BkhV79lF2QylG4jE0rHpn1oyF4iXjWcv%2BRQKY4YuYn2U6AyxtiXIPZSzn9IO9wZqZJS3A84qhspyMy2vjyUSljtFGqOeOaBQN8vTk9MH7%2F1Nsgoajl73t3EirU3g4pZoehPu1wHArvuTFAfq8F4C%2F%2BBnobih8yexp6O5V6TocCjuG9A12rj5qjSvzAS%2FsWizQEVlsr1ci%2B%2BxewtZUiJMJK5YLC70ERV6JNTSF%2FW6kXuA9kLELrbHcVZ62YgE225TB%2BqPd9jsKM%2B4%2F1i97oE3lsdMOidksMGOqUBWmlzTpJDNqlt7lLATltLOt5UykKeHksyGK55WccKd8RN0iebPV8u6NVuP0XZWbtgArI3CWdCjdLNVy%2BmOQye8nQGEcfoX1sXC3iOUDcYEFrK49KhOwYUecQ70dztuDK1Ah0L4WZG4ZItRB8x1MaL32yCtaF13pzVkWfvAJRWgi0SdqXWa7%2BMQy0eqjpXCSL1nKwna8qqTHJyEpoxyJ4YTE4AKnl5&X-Amz-Signature=1926edc2aeae4aa8f711cdc7968fa0dfc294b782382a9eeae06461759e0e64c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
