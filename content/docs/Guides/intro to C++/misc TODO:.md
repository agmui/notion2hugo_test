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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCPOYZZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxDjvuEYMo%2BafDBZgvDK9vPg%2BvOJNYpo8meKBANXe2JAiEAn4zvd8fp6KOg0UPFTcbxenP%2FnnnLztQ4axaAArH5erwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGYUb2L7eR04nRICrcAzHCwzhAStm28Fl7SWXLRtOgZcaKWcmFtr70gVmbUdbs0YopWdMCfo2V5tnZNMzK4t8v3Kc55rwcGNv2Kzn9RBH4qw3n2euzpVxvejLbt40qijzj13Um0Gpc7nnZ%2FEP8KdYv%2FhyuZByCeckKRgchECPanq5Y0dznqjus7w9wCA3nYQxHBukuCL6%2BKoK6FqR8lPVuK1phDroPpbyc7QoE%2FiddbaxB3C3Lu3Q9ESM6n76bd0KbyC9GKTTVraguizkGZbsZ7yhKfba3WBldn4gXWaH80gHiL5u0zhpJs1Kbiwib22R3exA6gQpRz9%2Fl5S9ofWazx4WKBcCpn5h9x%2FtMEpYUMqpht25%2Fs6rhabLG%2FPWJUGL3fzmc9cMFMjI8Xp4znMHOSxMaga%2B%2FarhMpaeiGQI1sLAan9g4xdSSu829DrlyDZ%2B03T1gHZaD%2B5NGJzym%2BleJZrK1wEoE6YlG0heMZAgX5A3%2B9GJJreH0j9iJjg%2F7f9dDWBxxY%2FXzysd%2Bgo5opiy5yC7QDJUuC4D8SFk8SXMAEZj318ZowK2Sf0sgevbDvRfvf5x6RGwMo4Rem0%2B%2F7p%2FBQvR%2FsBWxu4SQohgXUxCZk3Edkvu%2BfZ8aumsHfm7HFrSkXEEF1%2B3s6YXuMPbXtcMGOqUB7%2FfI8Ck52B5DbSlbBu2TKDpFH83AF82G6cyzJ7sqNVH2HCeW0qV4BH0qTytbhdwqZ6TYDN2a6Ygt1nAUuHB7eMsEetMDn0l3UNYKS01xFLO90jTsuMlnCIBnq9D8FDPvpJ%2BtyQvvEEZdjURI5rCAlIxbuQCnoUN13z9nHi6OQdijRi1Wneuyxes4VypHYiId9jBHe5l7VUN0tQTkJgE%2FPDO1P%2F1V&X-Amz-Signature=bc9cd82d2da4935894013a05af3ed0eddac7826c356386fdbc9752501f6b4484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCPOYZZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxDjvuEYMo%2BafDBZgvDK9vPg%2BvOJNYpo8meKBANXe2JAiEAn4zvd8fp6KOg0UPFTcbxenP%2FnnnLztQ4axaAArH5erwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGYUb2L7eR04nRICrcAzHCwzhAStm28Fl7SWXLRtOgZcaKWcmFtr70gVmbUdbs0YopWdMCfo2V5tnZNMzK4t8v3Kc55rwcGNv2Kzn9RBH4qw3n2euzpVxvejLbt40qijzj13Um0Gpc7nnZ%2FEP8KdYv%2FhyuZByCeckKRgchECPanq5Y0dznqjus7w9wCA3nYQxHBukuCL6%2BKoK6FqR8lPVuK1phDroPpbyc7QoE%2FiddbaxB3C3Lu3Q9ESM6n76bd0KbyC9GKTTVraguizkGZbsZ7yhKfba3WBldn4gXWaH80gHiL5u0zhpJs1Kbiwib22R3exA6gQpRz9%2Fl5S9ofWazx4WKBcCpn5h9x%2FtMEpYUMqpht25%2Fs6rhabLG%2FPWJUGL3fzmc9cMFMjI8Xp4znMHOSxMaga%2B%2FarhMpaeiGQI1sLAan9g4xdSSu829DrlyDZ%2B03T1gHZaD%2B5NGJzym%2BleJZrK1wEoE6YlG0heMZAgX5A3%2B9GJJreH0j9iJjg%2F7f9dDWBxxY%2FXzysd%2Bgo5opiy5yC7QDJUuC4D8SFk8SXMAEZj318ZowK2Sf0sgevbDvRfvf5x6RGwMo4Rem0%2B%2F7p%2FBQvR%2FsBWxu4SQohgXUxCZk3Edkvu%2BfZ8aumsHfm7HFrSkXEEF1%2B3s6YXuMPbXtcMGOqUB7%2FfI8Ck52B5DbSlbBu2TKDpFH83AF82G6cyzJ7sqNVH2HCeW0qV4BH0qTytbhdwqZ6TYDN2a6Ygt1nAUuHB7eMsEetMDn0l3UNYKS01xFLO90jTsuMlnCIBnq9D8FDPvpJ%2BtyQvvEEZdjURI5rCAlIxbuQCnoUN13z9nHi6OQdijRi1Wneuyxes4VypHYiId9jBHe5l7VUN0tQTkJgE%2FPDO1P%2F1V&X-Amz-Signature=1bde334a4076cca9fe2469f9ceb159f17cb9a3d55df1419bce710d65a171f2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
