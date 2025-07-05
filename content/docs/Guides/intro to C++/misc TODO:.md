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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDIPSHJB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHAFk2a4z4oPSxKH%2F4EUT09HlxnOHQQlWMcbCuxI%2BkNbAiBxAKfzwbK3sJjT6x14wvtry1S8p0OlaV%2B9rxrCh66dYyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMRH5ercW3sU2UaD%2BLKtwDWrbTVFBefkUfQ3DHRKJz72OeLLRNrL56grRl5yqVdOge%2BK9rXpLs5CZf355xObeXhdwTDJHfw2DeGzU8HnYZfTJ9frnYaE8lbzMHd46kpXzIybCiR%2BzI92HJk44YlUjh17cx%2B5DZZ8YoOVxKK8qjubJGlc4isvZCEEPSXFSwc0T7F83kHuNf9fGPfQSVWrKZYW6tj4eNHGfiOTJFHTIEwNq1rRHWlC%2FJnWPs7pSUDTx9%2Fi9TkS%2F%2BKkWQZx99X3C%2BNFmzNyC%2FBSENelRRNuKxomu6Hs1Dy%2FIC1JVx8B%2BYrnZKnQjjWRq9mMBgV7PCy42gmGPKYBOgO0Dby1whkuuekOA2FTRV8EXkDDTPIjZedDTD8sgXtxalpHT%2B%2BudsuIWtaSURozcd%2F%2BniKheHh5sAWe7pf64XVku9RxVcbjzcos3b2GKMUZ%2Bc0JoQIhnOtygjo2NsXBG2FgcLuBHwdEUv4guJO2WZwe%2Bp6yQes9NMBsvKeTIOiwrxyuaFvqPqwGunBM8ErDEo8xP6UTzlCaye3N1SQa95NtsutP9N9EJZ59MGIim5r8WymgG9g5GX6P9iG1ONNrPejhcqVwUftzYFx6W%2FbVRxpybSFJjvUzd%2BVbPE7E4KCUE5rGPEGB0wwIuiwwY6pgFsQqMeAmxcH1YscCRkWa11U6O7TslCx3Hwy547jqbPJRTyeZ3DFSuqNOM5T%2Bysc1u6HusYeju3QMM%2FOkcmW6OURjzPLlgGDpaYL8IUouqqHa4zz%2FJ70bFodlbVxdxzAad93kPWzo9li2s2EhL3nHSiykruzXNhvyw2LEZF92XCvLsRnPrsE6wrmzJEQ1ZsJoAThpc0qPxZ0yCdpZ48t0NkKFhXwxA%2B&X-Amz-Signature=97869b41a969514c9eb89e44a2ddd6a6d1cafe94315ea98ee7215050c0995be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDIPSHJB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHAFk2a4z4oPSxKH%2F4EUT09HlxnOHQQlWMcbCuxI%2BkNbAiBxAKfzwbK3sJjT6x14wvtry1S8p0OlaV%2B9rxrCh66dYyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMRH5ercW3sU2UaD%2BLKtwDWrbTVFBefkUfQ3DHRKJz72OeLLRNrL56grRl5yqVdOge%2BK9rXpLs5CZf355xObeXhdwTDJHfw2DeGzU8HnYZfTJ9frnYaE8lbzMHd46kpXzIybCiR%2BzI92HJk44YlUjh17cx%2B5DZZ8YoOVxKK8qjubJGlc4isvZCEEPSXFSwc0T7F83kHuNf9fGPfQSVWrKZYW6tj4eNHGfiOTJFHTIEwNq1rRHWlC%2FJnWPs7pSUDTx9%2Fi9TkS%2F%2BKkWQZx99X3C%2BNFmzNyC%2FBSENelRRNuKxomu6Hs1Dy%2FIC1JVx8B%2BYrnZKnQjjWRq9mMBgV7PCy42gmGPKYBOgO0Dby1whkuuekOA2FTRV8EXkDDTPIjZedDTD8sgXtxalpHT%2B%2BudsuIWtaSURozcd%2F%2BniKheHh5sAWe7pf64XVku9RxVcbjzcos3b2GKMUZ%2Bc0JoQIhnOtygjo2NsXBG2FgcLuBHwdEUv4guJO2WZwe%2Bp6yQes9NMBsvKeTIOiwrxyuaFvqPqwGunBM8ErDEo8xP6UTzlCaye3N1SQa95NtsutP9N9EJZ59MGIim5r8WymgG9g5GX6P9iG1ONNrPejhcqVwUftzYFx6W%2FbVRxpybSFJjvUzd%2BVbPE7E4KCUE5rGPEGB0wwIuiwwY6pgFsQqMeAmxcH1YscCRkWa11U6O7TslCx3Hwy547jqbPJRTyeZ3DFSuqNOM5T%2Bysc1u6HusYeju3QMM%2FOkcmW6OURjzPLlgGDpaYL8IUouqqHa4zz%2FJ70bFodlbVxdxzAad93kPWzo9li2s2EhL3nHSiykruzXNhvyw2LEZF92XCvLsRnPrsE6wrmzJEQ1ZsJoAThpc0qPxZ0yCdpZ48t0NkKFhXwxA%2B&X-Amz-Signature=c15926133d1e2fd3e27c2129404f8deaa069a2d6583d0c8b306c13e39960b166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
