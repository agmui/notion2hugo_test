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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT3BAKMO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDfGct4vENj4u6qo%2FhdSh7bmvu2xA6vUmhOnd4MENZ7xgIgDa8b85MFno3Da8OfhJcmjEfSZVZ3Jtl%2FLlDvY%2B4LIx4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJj%2BrDiCZ8JeSBOlNyrcAzfiiRgiZA0f36Xd8Iucpuf4a2nXAVLUkUUavemhWo6lU4JjIpDWkyksD34aOieTz2hGkGp5fBtCraKDIEuKYhH4r2MLJpztwCoe7mlr2qmRBnWyVRGu1lJH3DpKdLtcqwmS041Mbs3jGqtYTr6Di%2FlKwkrTdI4fWP6dBQSnAwuwf01j3kLsMF4rUz3WT8CIrB1LGlmlAAoCR4OXihFPMlCcWm32leU3prCTLhxODLToqVI9xqDW5WxoOx1P3LfGvJ2yCugv5XPmx49rE1ipXriJudUyTF7yG5L39SwSWcqZsTanJilI%2BhW%2FzA6Nu5Ph%2BQ3Jx2zB3yk0lbpFodfTXK2K1L4fjY9pRyXxXMcT8otuwXk5lY6Cko7cSP6JipxvIQZ3LFZu2qio0K5v618ZlcvSIqZwA1uw8fhcbbGdrSketBd%2F9J9FZL%2FGEvS5vEu3EvFMQZhDyaT8z4dXzXIW7M5DxkdXXaF15sLFBT%2BZDiyPKuQkZfEsXirCg4y%2B6JwIW9MsKQmIQ8iDnsWv%2F9yklzBUhJFSdwPjRSOz9iZs6qHrsf20UfgCWH4Jq7LRUGxWokGFZqIM87MeLAasMfeKup%2Fp6jLwOs%2FaEN71dzFiqujEB5dia4MT5jSqZPx%2FMLS0isQGOqUBSMOaPbVNmZd2rUjGgVwt0520fw0UZXhLHvUAn0SFgLW%2Bu9Jd7I9dbBq0BMPj3VlyTxmxLqmfiJZ5d83BvDB4P9cfoUd4LoIIuIN2UMjzfYnoW4PCpKXSrxo5iA2YKIB0RiJlhnPdJmQ%2FHmmETkiMAudnZFE7oy9EsNdD6LZ3JSuvIpJWh8xVdTkSBghfSaadxKfKB9B8gGJyo3PvmIYZdOsCZKuL&X-Amz-Signature=9ab018c9d2b0c426e6a32849ebf473d28564cc333f9a9606359b10b07a2baf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT3BAKMO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDfGct4vENj4u6qo%2FhdSh7bmvu2xA6vUmhOnd4MENZ7xgIgDa8b85MFno3Da8OfhJcmjEfSZVZ3Jtl%2FLlDvY%2B4LIx4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJj%2BrDiCZ8JeSBOlNyrcAzfiiRgiZA0f36Xd8Iucpuf4a2nXAVLUkUUavemhWo6lU4JjIpDWkyksD34aOieTz2hGkGp5fBtCraKDIEuKYhH4r2MLJpztwCoe7mlr2qmRBnWyVRGu1lJH3DpKdLtcqwmS041Mbs3jGqtYTr6Di%2FlKwkrTdI4fWP6dBQSnAwuwf01j3kLsMF4rUz3WT8CIrB1LGlmlAAoCR4OXihFPMlCcWm32leU3prCTLhxODLToqVI9xqDW5WxoOx1P3LfGvJ2yCugv5XPmx49rE1ipXriJudUyTF7yG5L39SwSWcqZsTanJilI%2BhW%2FzA6Nu5Ph%2BQ3Jx2zB3yk0lbpFodfTXK2K1L4fjY9pRyXxXMcT8otuwXk5lY6Cko7cSP6JipxvIQZ3LFZu2qio0K5v618ZlcvSIqZwA1uw8fhcbbGdrSketBd%2F9J9FZL%2FGEvS5vEu3EvFMQZhDyaT8z4dXzXIW7M5DxkdXXaF15sLFBT%2BZDiyPKuQkZfEsXirCg4y%2B6JwIW9MsKQmIQ8iDnsWv%2F9yklzBUhJFSdwPjRSOz9iZs6qHrsf20UfgCWH4Jq7LRUGxWokGFZqIM87MeLAasMfeKup%2Fp6jLwOs%2FaEN71dzFiqujEB5dia4MT5jSqZPx%2FMLS0isQGOqUBSMOaPbVNmZd2rUjGgVwt0520fw0UZXhLHvUAn0SFgLW%2Bu9Jd7I9dbBq0BMPj3VlyTxmxLqmfiJZ5d83BvDB4P9cfoUd4LoIIuIN2UMjzfYnoW4PCpKXSrxo5iA2YKIB0RiJlhnPdJmQ%2FHmmETkiMAudnZFE7oy9EsNdD6LZ3JSuvIpJWh8xVdTkSBghfSaadxKfKB9B8gGJyo3PvmIYZdOsCZKuL&X-Amz-Signature=fd081716db141b3cf371ddb0b51a3c918c7c1f893d4c28a26570457295fccc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
