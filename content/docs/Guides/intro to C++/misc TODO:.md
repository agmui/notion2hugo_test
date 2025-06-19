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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WISCULF6%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F6dOjGMtjIgFOqkgUfia7CgG9HqBXf389reZqCAbyYAiEA%2FwTFrVq%2By1VwOmG%2BNwOIMcaQE6PTeaK5I%2FZZauJmszkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx5eE%2B%2FmVmqlKpKTSrcAydOBoTHq%2BONdnmW41sta0dkw8wlMUDUHXKaf6Gmjx%2FZByazy52OztRCro%2Bah%2BXyNifb%2FXa3R3OsGv9hICOWDOyl20fcxXcRPuS7DNCpDbAz510x57dV2lUz%2BxLU%2BDyUhXLBFCcfNO37sAzD9EH2qsgL9ip4iqkHwDki2YUUQGusOSGJUBKJHDUO8Mmn1JySqCySCfhbwn0WE62r9jiH5Uzv1YATbvmGtFItARvjF3D5Q0vMi%2BpCLIy2TLPfiBedyMNpXY3dIfjaaCnzzhhyUiJsi%2BtWTgSoJ9%2B7Yjz67bfTQnD9h5rWOn1PxIeskbe5IstH3eT18%2FRCYR%2FbgkDr540l0hTSiXqVggTE33mo0qgLMTli6TdC9stg2HNvzuSFV6C3yVYUukY9iM%2FytvuNxY66V2ADv9EfI5R%2BTlULJdGRz9Lnep1xZ9sxLRo5qureVeG58oNCtlPPjYYLFmBHICbkR%2BPsHvLgMGvfrGy6pkyu3YqUA89YrtWOCCBP1tjdOpltipnbkBg%2BqJgz856qqcuJ4YJwj%2F2Bq1%2Flf6c2XQAgwNR38B%2FUooyuDKrLXVnAAjsfJw3UbNja8J0%2FM2OX464e4XHnsiCA6YTxfYIUpiv%2Bed5j1JAtb5m88IUOMOfd0MIGOqUBIONkME4M0zs6TYyNzl7d9bSIfR092ZFsHHdclG9jJ35uAfNr1x5ghnGJqOdX3s33ev8AkuiGYN0VmvjG2VsVGBaZflBbtnVTVYTHEAPpckJhTum39jbVoDEMbfBLmqYxvJDEiKkNpyQIglJnLg977H3daVTb3EVzlB%2BLMMvzXZBEAwnjMAKE80UBYgSt%2BFtqlqc7HxRlVv%2FuNaNyZHZ9tpPMGBKy&X-Amz-Signature=182650b0773660815cf775fab1424a6fa795007d79115c51981cb0f0b71f8d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WISCULF6%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F6dOjGMtjIgFOqkgUfia7CgG9HqBXf389reZqCAbyYAiEA%2FwTFrVq%2By1VwOmG%2BNwOIMcaQE6PTeaK5I%2FZZauJmszkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMx5eE%2B%2FmVmqlKpKTSrcAydOBoTHq%2BONdnmW41sta0dkw8wlMUDUHXKaf6Gmjx%2FZByazy52OztRCro%2Bah%2BXyNifb%2FXa3R3OsGv9hICOWDOyl20fcxXcRPuS7DNCpDbAz510x57dV2lUz%2BxLU%2BDyUhXLBFCcfNO37sAzD9EH2qsgL9ip4iqkHwDki2YUUQGusOSGJUBKJHDUO8Mmn1JySqCySCfhbwn0WE62r9jiH5Uzv1YATbvmGtFItARvjF3D5Q0vMi%2BpCLIy2TLPfiBedyMNpXY3dIfjaaCnzzhhyUiJsi%2BtWTgSoJ9%2B7Yjz67bfTQnD9h5rWOn1PxIeskbe5IstH3eT18%2FRCYR%2FbgkDr540l0hTSiXqVggTE33mo0qgLMTli6TdC9stg2HNvzuSFV6C3yVYUukY9iM%2FytvuNxY66V2ADv9EfI5R%2BTlULJdGRz9Lnep1xZ9sxLRo5qureVeG58oNCtlPPjYYLFmBHICbkR%2BPsHvLgMGvfrGy6pkyu3YqUA89YrtWOCCBP1tjdOpltipnbkBg%2BqJgz856qqcuJ4YJwj%2F2Bq1%2Flf6c2XQAgwNR38B%2FUooyuDKrLXVnAAjsfJw3UbNja8J0%2FM2OX464e4XHnsiCA6YTxfYIUpiv%2Bed5j1JAtb5m88IUOMOfd0MIGOqUBIONkME4M0zs6TYyNzl7d9bSIfR092ZFsHHdclG9jJ35uAfNr1x5ghnGJqOdX3s33ev8AkuiGYN0VmvjG2VsVGBaZflBbtnVTVYTHEAPpckJhTum39jbVoDEMbfBLmqYxvJDEiKkNpyQIglJnLg977H3daVTb3EVzlB%2BLMMvzXZBEAwnjMAKE80UBYgSt%2BFtqlqc7HxRlVv%2FuNaNyZHZ9tpPMGBKy&X-Amz-Signature=4e17a373e4aeeb160b39ac07397e4a07e7f8a8436801a30b02dc3d3319b8b373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
