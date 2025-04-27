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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2FQNO6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUUS4ebOBAjvO3gFWGbT2CFDkHBy0b1bhIce2K2G0csgIgN4OkHpuwoD%2FjFHTIfU8MRU8S%2FZ%2B3tfTxSb8EuN1Smwgq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDH6Vp8KCLYNN7swLpircA%2FrmJgw557pjqxt%2BN42eopx53xbtYJZlHBzXLIJ62a6%2Fux30%2FmMtaGO2V831K6H8HSFrLMzvSdP4mqzivE96jUlbE1ZPxBLrDdm1M58f4P4NtncVgGnR2nWrHtal7rZ5H8RtfdqdibyLD5%2FV081shuF%2Ftbrkdep5E3NtKHM86qZZ6EEn%2B8PS%2FV8khdZGWqQcTyMoCCjz9J7DoHgZtNmz1Cpg1kPhBDxTOXptQBNzjXU42hYMi%2BUpnl20pVsRu%2BqPdMBecNTP1SfEseT4jEIriVLOF2Fn4w9RDDarnMFi5%2BSqHq6Iv5lJR1HOryyOs6lYKFGHUncUT569z%2F9nXBl5kaFk6%2BZkS3Sqt5075EO0osjgHcp6NzF5%2FBdbGY2Fc%2FHQeID65wA0GvOUuiEVUgoXGzW9zCjq1GXcotQjDOZh8NC5JOxj506zzkycmu5rqw02TioMqFwitkVfF2iJd8vvXBQocTUGy4eOZcbsvDEz%2Bgd6IkrlB%2Fd4bc4ki3NZuaozR63ykjp0C9VfB%2BXofQJGaw9WRYXvBKDGLqrAIVcZzYo49O0tSNflTPOfSZtoXkbjf7HusZqPiTZMRE2%2F2LL0vYPtnrfopLNX8mDwScsFMr6dP3BCGbLP2fjondAEMI%2FxucAGOqUBOhwR4B515XvWIDUWR8FebdLIn0K2NH3fRCbh3b3301o2NfG11fnCrX1mIBGCISuVFs9QP6hW5MOyKU0pFlatHBvR%2FjnhOV3lsgAXoykebtRaTmMALf5vP7VGXD3oIUty2My20neRAGeIbjsPE7VhEzQVG5emdgEEWUiAbHhANq2KS%2Fd8%2BdcaCW%2F6j4iZZJNsn28%2FCTbD6YFvo0rZJZqCjGIgDlDl&X-Amz-Signature=087a460fac736cbcc820c4b0d14a55bb02fc4a9af39371750c44c7f5a2634199&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2FQNO6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUUS4ebOBAjvO3gFWGbT2CFDkHBy0b1bhIce2K2G0csgIgN4OkHpuwoD%2FjFHTIfU8MRU8S%2FZ%2B3tfTxSb8EuN1Smwgq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDH6Vp8KCLYNN7swLpircA%2FrmJgw557pjqxt%2BN42eopx53xbtYJZlHBzXLIJ62a6%2Fux30%2FmMtaGO2V831K6H8HSFrLMzvSdP4mqzivE96jUlbE1ZPxBLrDdm1M58f4P4NtncVgGnR2nWrHtal7rZ5H8RtfdqdibyLD5%2FV081shuF%2Ftbrkdep5E3NtKHM86qZZ6EEn%2B8PS%2FV8khdZGWqQcTyMoCCjz9J7DoHgZtNmz1Cpg1kPhBDxTOXptQBNzjXU42hYMi%2BUpnl20pVsRu%2BqPdMBecNTP1SfEseT4jEIriVLOF2Fn4w9RDDarnMFi5%2BSqHq6Iv5lJR1HOryyOs6lYKFGHUncUT569z%2F9nXBl5kaFk6%2BZkS3Sqt5075EO0osjgHcp6NzF5%2FBdbGY2Fc%2FHQeID65wA0GvOUuiEVUgoXGzW9zCjq1GXcotQjDOZh8NC5JOxj506zzkycmu5rqw02TioMqFwitkVfF2iJd8vvXBQocTUGy4eOZcbsvDEz%2Bgd6IkrlB%2Fd4bc4ki3NZuaozR63ykjp0C9VfB%2BXofQJGaw9WRYXvBKDGLqrAIVcZzYo49O0tSNflTPOfSZtoXkbjf7HusZqPiTZMRE2%2F2LL0vYPtnrfopLNX8mDwScsFMr6dP3BCGbLP2fjondAEMI%2FxucAGOqUBOhwR4B515XvWIDUWR8FebdLIn0K2NH3fRCbh3b3301o2NfG11fnCrX1mIBGCISuVFs9QP6hW5MOyKU0pFlatHBvR%2FjnhOV3lsgAXoykebtRaTmMALf5vP7VGXD3oIUty2My20neRAGeIbjsPE7VhEzQVG5emdgEEWUiAbHhANq2KS%2Fd8%2BdcaCW%2F6j4iZZJNsn28%2FCTbD6YFvo0rZJZqCjGIgDlDl&X-Amz-Signature=b3e1ba724fe8452b806518bd2f5cb48fd1721ebb25f3039d5e45e03f751032e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
