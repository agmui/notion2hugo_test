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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CZ7N5Q%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDp6Q%2FIbfuewDdRJFZCmq%2F6WlWkZ1ucGogqfmuqwYIOTAiEAztYkmULD6MB9n8tZY62YttrkgsHK8%2B7lvELhr6JEO3Uq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMb7%2BAwzNkYa%2FpmepyrcAwlJIhkB363yCsRNo6Q2PwQuQwPIr2MOW%2B8U9df0ukpPy214ovArkAeVLg%2Bim%2FRPWRGu9NIb51tMl3FLOmcAhhWerbPX5%2Fi8%2FX6bm7r93G70SQuLYnAMHmRXtEbagP3PMPCELh0YAIQrGkTITsAm6v07YmRk6b%2FeglliILzOZSbv2Hwq1FdN7fJ%2Bbx3MmnTFsEGtTEyLiEpa9nU4jXv7bDT721oTI5DztnN%2Fzi2sR3Zwiph0sYRgyp1lnDwf9Ki%2B5Lzq5HZxRd5C9pZ29hTcM%2FFVwQamvvXcBbWmLXeuISsjUPvZgj96lvDJ78pZbxfM0tYV%2BR7hRNL0KBLglyl1wgqsnMDWzueD25q1rrifCsxFASk64H%2BOrpsNaOkTa7nErdGltCCWsTZvdqx1I5sgbhVV2JT04Hj5b%2FUVTHdXrkU7YYbykDdGCoZ6a3PgKEyngiIZRytfrAOv9OVMl4TgxQzODgMpmquIMp1W2f%2BB3u4NKAtNdLJTgsRSXNSVbxTKfSXMSceZErxeR0uiOnCfZcZQTyiWOxlRp4HFmdpOpGZT0PKJ%2FbezPiOos3MoXzeTPdODTh5SLYmCu01nevSRvcNf56TtWj%2BCbP%2Bu7SqSfMhxqFExtJj56Cnc8DxdMJPO%2BsEGOqUBY%2BlTDUVZ3%2BIX%2BwplQJZ4UHbNM3taivBvEzcViuCjRnKmUUeEqrcDHedi6dVEVpA7dWqJLKfGWTaIFFABPgP37ij84%2FzWXDW0t1dUOzRp1grfCwIoHXFUZL%2FTADcZk7Om2WkD8tEOYpfA%2FV3nPmKJd9KQUsjxk%2FMsGoqXnw0zWkFzrmsYDCQYo2YJ19jsadpkaZhNIk3796P%2BO0PEbNC3nNm7ZmN2&X-Amz-Signature=cb9eac7b35a5a5d26c8e5e2b42c934393f81235c314a93c7d4f630edcfd0018c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CZ7N5Q%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDp6Q%2FIbfuewDdRJFZCmq%2F6WlWkZ1ucGogqfmuqwYIOTAiEAztYkmULD6MB9n8tZY62YttrkgsHK8%2B7lvELhr6JEO3Uq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMb7%2BAwzNkYa%2FpmepyrcAwlJIhkB363yCsRNo6Q2PwQuQwPIr2MOW%2B8U9df0ukpPy214ovArkAeVLg%2Bim%2FRPWRGu9NIb51tMl3FLOmcAhhWerbPX5%2Fi8%2FX6bm7r93G70SQuLYnAMHmRXtEbagP3PMPCELh0YAIQrGkTITsAm6v07YmRk6b%2FeglliILzOZSbv2Hwq1FdN7fJ%2Bbx3MmnTFsEGtTEyLiEpa9nU4jXv7bDT721oTI5DztnN%2Fzi2sR3Zwiph0sYRgyp1lnDwf9Ki%2B5Lzq5HZxRd5C9pZ29hTcM%2FFVwQamvvXcBbWmLXeuISsjUPvZgj96lvDJ78pZbxfM0tYV%2BR7hRNL0KBLglyl1wgqsnMDWzueD25q1rrifCsxFASk64H%2BOrpsNaOkTa7nErdGltCCWsTZvdqx1I5sgbhVV2JT04Hj5b%2FUVTHdXrkU7YYbykDdGCoZ6a3PgKEyngiIZRytfrAOv9OVMl4TgxQzODgMpmquIMp1W2f%2BB3u4NKAtNdLJTgsRSXNSVbxTKfSXMSceZErxeR0uiOnCfZcZQTyiWOxlRp4HFmdpOpGZT0PKJ%2FbezPiOos3MoXzeTPdODTh5SLYmCu01nevSRvcNf56TtWj%2BCbP%2Bu7SqSfMhxqFExtJj56Cnc8DxdMJPO%2BsEGOqUBY%2BlTDUVZ3%2BIX%2BwplQJZ4UHbNM3taivBvEzcViuCjRnKmUUeEqrcDHedi6dVEVpA7dWqJLKfGWTaIFFABPgP37ij84%2FzWXDW0t1dUOzRp1grfCwIoHXFUZL%2FTADcZk7Om2WkD8tEOYpfA%2FV3nPmKJd9KQUsjxk%2FMsGoqXnw0zWkFzrmsYDCQYo2YJ19jsadpkaZhNIk3796P%2BO0PEbNC3nNm7ZmN2&X-Amz-Signature=32f9d8fea2bee87b68eb8ff348e7278c5fa8090c51c7d5aeed9c2bac831f31b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
