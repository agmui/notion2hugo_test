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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNK6Q2O%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKwMRVsiWzEkBzkMJLIxgLPijQqfXEXMSyOF4dUB6%2FwAiEAjMFAVR4LfI8w0RuRbBwfcmgUPWCC6fF1Hy%2B3%2BVgkLBgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkQMJM%2BZwYys%2BkQIircA1ZyCqxLgC7po6hd7TRal7b6Xa5WkUazx8x4K3uB5QOimXEA90ZmlT82Mb2UFiaTYQVrj3l9F%2F2M4nUQ19SyOOotS%2F3zlPOIdBVGOQsVRnZRrHmClhoDg0UzzSmvSWOHzFMW7pypvD8lzR7yXwWbGsuv29HWJDvzh5PK5K1TzIRUJMM6YRi%2BkNuWHYSlhtjJgtQnop5NFA5CVUtQNa1H6lByRs%2Bm57PiuOAhrppeWzfgS6%2FJDXhHAbFVDqZeOEzQwirUIruZ5lVm%2FCzp3t2eM1cXCNfdP2kQaVzBfFFSOIW0wnYB7EpyH%2BV0XiW6QpFvfLpmxPVUcBwjVEQaeUg0iwYsbi2q6Vkk0Nxg2CpKpvZR2k%2BMYY7PQ6XAxIBNa8Oe9cph94ciD0x9hQdevWw%2BBUKpMb3sSt%2BP%2BKImkPtTFFe5%2F0XyCVpi1mi8j4gWeANYS3t%2FTMSOILVGqX8ZxGzOZ3h60GUNEC62s0Yy4rVicoxvLtnm6g%2B8c2DVAZn9v70008jhjJcoq16PbUU5Tr85RNL%2F39VIk0M03fEkmkWPhhRTQRjxfWx1XHCHf%2Fpm7JDwDSUcRA%2FYj%2B4XGSCX9JIpdbjdCxTWVIRQDXyMBoyF1hC7B0xbVSLbZPLpLnwsMKaglL4GOqUBnvh1uGT7Zve4pS0fQxEuVCBgVwc0MFwBuny0Bo4bLpEK107t1C5IAMHfJH%2B8suEnci4mkEN8TeHs%2BJbPLxiV1NxzVlynXtCgrxsqMfr195u77wBucVCLgB07lj9EcRArzOvxj0DTdLqIMAyK%2Fi83Cx0nRvFpH8%2F9BEwtQOT8BYONYYtdVh4Ee%2FVJ%2FRxJGfKy9pnYvRnAC6mCL6QMWClm0n%2FrnTi%2F&X-Amz-Signature=5ff69f175867d33c03354d136875c191cfe4ff7569f2291436ce5d9b5818ac28&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNK6Q2O%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKwMRVsiWzEkBzkMJLIxgLPijQqfXEXMSyOF4dUB6%2FwAiEAjMFAVR4LfI8w0RuRbBwfcmgUPWCC6fF1Hy%2B3%2BVgkLBgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkQMJM%2BZwYys%2BkQIircA1ZyCqxLgC7po6hd7TRal7b6Xa5WkUazx8x4K3uB5QOimXEA90ZmlT82Mb2UFiaTYQVrj3l9F%2F2M4nUQ19SyOOotS%2F3zlPOIdBVGOQsVRnZRrHmClhoDg0UzzSmvSWOHzFMW7pypvD8lzR7yXwWbGsuv29HWJDvzh5PK5K1TzIRUJMM6YRi%2BkNuWHYSlhtjJgtQnop5NFA5CVUtQNa1H6lByRs%2Bm57PiuOAhrppeWzfgS6%2FJDXhHAbFVDqZeOEzQwirUIruZ5lVm%2FCzp3t2eM1cXCNfdP2kQaVzBfFFSOIW0wnYB7EpyH%2BV0XiW6QpFvfLpmxPVUcBwjVEQaeUg0iwYsbi2q6Vkk0Nxg2CpKpvZR2k%2BMYY7PQ6XAxIBNa8Oe9cph94ciD0x9hQdevWw%2BBUKpMb3sSt%2BP%2BKImkPtTFFe5%2F0XyCVpi1mi8j4gWeANYS3t%2FTMSOILVGqX8ZxGzOZ3h60GUNEC62s0Yy4rVicoxvLtnm6g%2B8c2DVAZn9v70008jhjJcoq16PbUU5Tr85RNL%2F39VIk0M03fEkmkWPhhRTQRjxfWx1XHCHf%2Fpm7JDwDSUcRA%2FYj%2B4XGSCX9JIpdbjdCxTWVIRQDXyMBoyF1hC7B0xbVSLbZPLpLnwsMKaglL4GOqUBnvh1uGT7Zve4pS0fQxEuVCBgVwc0MFwBuny0Bo4bLpEK107t1C5IAMHfJH%2B8suEnci4mkEN8TeHs%2BJbPLxiV1NxzVlynXtCgrxsqMfr195u77wBucVCLgB07lj9EcRArzOvxj0DTdLqIMAyK%2Fi83Cx0nRvFpH8%2F9BEwtQOT8BYONYYtdVh4Ee%2FVJ%2FRxJGfKy9pnYvRnAC6mCL6QMWClm0n%2FrnTi%2F&X-Amz-Signature=c89f4b181e6619b7fd296806e665303b1e0b231520bd39dd5d4267be54f3cb27&X-Amz-SignedHeaders=host&x-id=GetObject)

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
