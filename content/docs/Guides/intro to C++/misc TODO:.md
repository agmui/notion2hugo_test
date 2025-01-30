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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL4RHTR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9u2P2sSABsmDBTu21WrbsGhNJxIsAqdr5HjJ4mAUvzAiEAn3UUOWnVHJmlhJ3TWT61U6GjA%2FymdgTX%2B1W0f%2FyK%2FGIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRCzAfiz29FmSaPircA6UqyImfQ%2FVOOw6bwKUIqJUtmCQ1N%2BQzUUbMxsql4lRmfEcDyxnmo8wF9yOc7xui5ObPjpPti29c%2Bl3TMfHD6t%2B6igRy2AIA3kwtVWa1a0VcHPGcRXu9rlc1RvfeiW5hi5qtb25C97MdeCfUOxI%2BkvYdIqW79gehcS3CyAxU%2Br2kUt2YvR0EZWrZYUY%2FEa2XjCBqv%2FP3eiTJVq2FO%2F%2BcjQXaMtdMKVE9lQtQzHztrwKb6kiwJ6RZ0uGUQ3mWDWkb8II%2B%2Fjxa91qmfLnTR%2BfUwezGc3jUPt%2BG21o8ypK1VPC7yaJVihn7aI838sZmoztgOAB09ghTCujs6l3E6JYfSJRP%2FT4CAiEfDxbxw7%2BfmmgcXZP%2FAZnqmrhgJRt21GV5INkpa8baKZz4bIW6A2Q2mpm4pInrRJDOt4qprWWIaIq6TTnHAuRDC1DO3FTaLRgblG3rMT2Kai5JhHa%2BPU72SQQTNk4HndHHKoEeSDfSIx66aCfRxwobgX4kZAR%2BFwSCohh671Vqu%2FaKpM1J4RLTE8eQWNV1JG2O%2F1CUwgoOfaz9ebLHcuet1VM58y1lQVixa3R535%2Fxjx9pYGMBctzEsrlsud1O%2B1bh2XoK7bEr6ODPKu119GfrCGpyX7vHMPz77bwGOqUB047QPaDdHO4GTRGhG4xhNXL3Gh%2BkRQGB34kfV1155AxXzT3NcHe2dncwmkiF0neHodbxNwjvMETck6No3esY5SuOozsyzM70JZJpi8pwgoqrZzZOcNymeJd1bHwoOGa3nNDe84MlJ5Q48LuXb93gKaPUFRQ5vUrAk47NnBhghOVp%2F32iOwTVaNt1FTlD2QaGAuqTXKziHXx9HXRDR%2B0jm2X9mA70&X-Amz-Signature=21e74a6619803573b63d4be3d4e867f336bef27db7543a98c91480499d17aca8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL4RHTR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9u2P2sSABsmDBTu21WrbsGhNJxIsAqdr5HjJ4mAUvzAiEAn3UUOWnVHJmlhJ3TWT61U6GjA%2FymdgTX%2B1W0f%2FyK%2FGIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFRCzAfiz29FmSaPircA6UqyImfQ%2FVOOw6bwKUIqJUtmCQ1N%2BQzUUbMxsql4lRmfEcDyxnmo8wF9yOc7xui5ObPjpPti29c%2Bl3TMfHD6t%2B6igRy2AIA3kwtVWa1a0VcHPGcRXu9rlc1RvfeiW5hi5qtb25C97MdeCfUOxI%2BkvYdIqW79gehcS3CyAxU%2Br2kUt2YvR0EZWrZYUY%2FEa2XjCBqv%2FP3eiTJVq2FO%2F%2BcjQXaMtdMKVE9lQtQzHztrwKb6kiwJ6RZ0uGUQ3mWDWkb8II%2B%2Fjxa91qmfLnTR%2BfUwezGc3jUPt%2BG21o8ypK1VPC7yaJVihn7aI838sZmoztgOAB09ghTCujs6l3E6JYfSJRP%2FT4CAiEfDxbxw7%2BfmmgcXZP%2FAZnqmrhgJRt21GV5INkpa8baKZz4bIW6A2Q2mpm4pInrRJDOt4qprWWIaIq6TTnHAuRDC1DO3FTaLRgblG3rMT2Kai5JhHa%2BPU72SQQTNk4HndHHKoEeSDfSIx66aCfRxwobgX4kZAR%2BFwSCohh671Vqu%2FaKpM1J4RLTE8eQWNV1JG2O%2F1CUwgoOfaz9ebLHcuet1VM58y1lQVixa3R535%2Fxjx9pYGMBctzEsrlsud1O%2B1bh2XoK7bEr6ODPKu119GfrCGpyX7vHMPz77bwGOqUB047QPaDdHO4GTRGhG4xhNXL3Gh%2BkRQGB34kfV1155AxXzT3NcHe2dncwmkiF0neHodbxNwjvMETck6No3esY5SuOozsyzM70JZJpi8pwgoqrZzZOcNymeJd1bHwoOGa3nNDe84MlJ5Q48LuXb93gKaPUFRQ5vUrAk47NnBhghOVp%2F32iOwTVaNt1FTlD2QaGAuqTXKziHXx9HXRDR%2B0jm2X9mA70&X-Amz-Signature=ab36f34f7ad219ecf4343b548e9e59c0d7d7daf2a30ce6eef9362e9a607d6932&X-Amz-SignedHeaders=host&x-id=GetObject)

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
