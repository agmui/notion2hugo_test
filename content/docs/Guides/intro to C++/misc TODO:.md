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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E42NT2X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHovsDiVCnml9Ji2k6CZGRt9a2mj8WDSeSYjv9e5Aze6AiEAronQiQD1VjNuMTxe0CqPkbikTtiVNP2D1bCS28iCZCUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFjFJwuKnrSO3104SrcAxUI9jcOHXINBfdgkdsrDnobIswoYnMp%2Fma8Y3So%2BTdGwAh830IZmcmZ00E%2F9cIgqQ%2FiXiZuQU6rlIuOX26H%2FGDfYcUi0C5zy2GCXEqDdvOUg5vVwmb%2F9OZiczkZh9t23ib3MJBkCNhzVBTta46gmuALwj918uVHDS4aN71%2BMoRecZxXbrT4Jgeho6outhCcMdR7JToAAV2H%2FwWlT%2BRqF8fiPMY%2B0fyTNd3XapUsRu%2Fuy%2FAqvbSz04myRysdeNwwBt7moxsIquonKne7TD4zs1oEi8cWmSHMK2eHQ5Uso7sX6qj3Y9N10oJ0PMqyWir9tITO59m1jAozd5kMJBttwOq0yxnxsNMPxv9yEaiUCIvvk2KeWyNNijeIKZvpXF9vYanEmPr56E%2FlXSPWAsbNYOOWkfSJTuegER78DLROjn6bHr%2BcPng7iRgFs38SOBzs98spQo1IY%2BiBAlsZgKpdk4PZHWn7beP%2FaoDZTop8WXyYCLCzYlZaPmws8SUJKlCezW8TWXW%2BoxPIwFfqUY6sqkRRoLtV%2BdYkeUvHmqQSPrZwbunDuOTrz%2FqDsG%2FyeG%2BrMcOjMWRfuX2KpDxrzTlho99EFvlSp3uTFZUHuRqgdRQif1PKqEOwarUUbfE8MLqBr8QGOqUBpS22TCiN19UJXOpx3aivPo6%2F0taJBunzzf3RMBgAgCosxMcQVQpOZInsxZb%2BoIBXatISUZ37Cyzh3KugAhPNBfBWKDWuYRIlBcq6%2BEF7vgHpP7xNYcOi0tEc9bsJVFReu38Wq8f8ierXWHQJWNhXgjqdpDTBEn%2FwPGpmRJJStPIKHexnghdoe3YnnJhp82dBhZOJ%2FnMfrWMCV3LJXVqWm22mbuTi&X-Amz-Signature=ceaebff70f98f1898ece1096e5b9cd19849364252fdb18e8e440175f68e8c9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E42NT2X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHovsDiVCnml9Ji2k6CZGRt9a2mj8WDSeSYjv9e5Aze6AiEAronQiQD1VjNuMTxe0CqPkbikTtiVNP2D1bCS28iCZCUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFjFJwuKnrSO3104SrcAxUI9jcOHXINBfdgkdsrDnobIswoYnMp%2Fma8Y3So%2BTdGwAh830IZmcmZ00E%2F9cIgqQ%2FiXiZuQU6rlIuOX26H%2FGDfYcUi0C5zy2GCXEqDdvOUg5vVwmb%2F9OZiczkZh9t23ib3MJBkCNhzVBTta46gmuALwj918uVHDS4aN71%2BMoRecZxXbrT4Jgeho6outhCcMdR7JToAAV2H%2FwWlT%2BRqF8fiPMY%2B0fyTNd3XapUsRu%2Fuy%2FAqvbSz04myRysdeNwwBt7moxsIquonKne7TD4zs1oEi8cWmSHMK2eHQ5Uso7sX6qj3Y9N10oJ0PMqyWir9tITO59m1jAozd5kMJBttwOq0yxnxsNMPxv9yEaiUCIvvk2KeWyNNijeIKZvpXF9vYanEmPr56E%2FlXSPWAsbNYOOWkfSJTuegER78DLROjn6bHr%2BcPng7iRgFs38SOBzs98spQo1IY%2BiBAlsZgKpdk4PZHWn7beP%2FaoDZTop8WXyYCLCzYlZaPmws8SUJKlCezW8TWXW%2BoxPIwFfqUY6sqkRRoLtV%2BdYkeUvHmqQSPrZwbunDuOTrz%2FqDsG%2FyeG%2BrMcOjMWRfuX2KpDxrzTlho99EFvlSp3uTFZUHuRqgdRQif1PKqEOwarUUbfE8MLqBr8QGOqUBpS22TCiN19UJXOpx3aivPo6%2F0taJBunzzf3RMBgAgCosxMcQVQpOZInsxZb%2BoIBXatISUZ37Cyzh3KugAhPNBfBWKDWuYRIlBcq6%2BEF7vgHpP7xNYcOi0tEc9bsJVFReu38Wq8f8ierXWHQJWNhXgjqdpDTBEn%2FwPGpmRJJStPIKHexnghdoe3YnnJhp82dBhZOJ%2FnMfrWMCV3LJXVqWm22mbuTi&X-Amz-Signature=2935f89c85cfec6d528b174974c76803ebf203002c421fb537dd8d5f644af49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
