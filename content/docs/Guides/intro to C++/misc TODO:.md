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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPERFNG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYoGNHh%2B5JO9VSvR7M4T1bUirZ%2BlsivZpdUu%2FwhpB5lAiEAowrmvxui6fw1xMOVMfg39Jq9WTl2TqaMBq1RPznKnYgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnUXqC8LiD%2FRaMiLSrcAwxkh9jVi4hj4btw%2FTu%2FCzURZMIRp9OSXKihnYyRk%2B2PbzIwj2HLKRRnUFbDxiUva2Zt5r1gltivtH%2Bvjh0NRGuQdP3d4yjL0xH3r2WM86CYxvtdVnDqk3EqUMazlSOW%2FoZnKz8QC5oKNlSazQFObFvFy2TSViC4gaBfGklXu8j4Vx2QV0Ckvd1m7AHLLMV8wJtDfQxmXn5Q82%2FS6HZGeeJq2GqfOuQZtXzgNRumRkEBl62P%2FZmRpJEiYRZ%2Fzhq7BN97a4QV2RP40smPF75Z%2Bzv8htZvohYrPS%2FE7XGVTOK%2BSo5nKHhijr2c4Vj0UH0bjN%2Ba3iYVoD2CffcqtUe2%2FnBE5cT2iw6povxzjCqJ%2BzGUbiPPS6n18UthckgHy4MlObGPXapqYyVI%2FmWh7V7uSIMwnBdDRd%2BTRsHm2NK6Ejb3lFWNEjLpQqP0ZlR%2B8R%2Fk4aCOiN%2FE7clakQLE2HXfWQqiOYCm8ZzQyEKYnex6WpF4KbeHfmLFJFBzmsqqs1i8mQsTQf9MBEPuTj7HSXO3w1tjpQzn67eTZzbYsEmisZnZ%2BM8PfbizZng0GZ3W61UIBUUE9eV1Zto1HN%2BS1Fvf6AtmsEW0mJcTMjMyjDGnt7ybh%2Baa1rR6iN9v%2FNQ%2FMPyTlcMGOqUB7iBx22OYLgPMo9d4gz2ujW4wfHoOXAMfuKRML2vMSCrufHFIK9t9zoMLXEryUcoL%2F6lJCOuBY01R3WmF7BW3dj9nGxX78YRFG71%2BjhGXwq36j%2FsVqqSE7SdEdVG9aX02pqNLnpUIxtj5CwLorXTEfYlGFfgv7bq9y7WYZYRLgVQbC8BK9OH%2FUa99BwEGe8D56WECYl%2BdLm62wQebcUK8XOt9K%2FrU&X-Amz-Signature=ba77fca8986f2325e0065fe952383f22fc8543b8abdd6c2c7a4c176a49031480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPERFNG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYoGNHh%2B5JO9VSvR7M4T1bUirZ%2BlsivZpdUu%2FwhpB5lAiEAowrmvxui6fw1xMOVMfg39Jq9WTl2TqaMBq1RPznKnYgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnUXqC8LiD%2FRaMiLSrcAwxkh9jVi4hj4btw%2FTu%2FCzURZMIRp9OSXKihnYyRk%2B2PbzIwj2HLKRRnUFbDxiUva2Zt5r1gltivtH%2Bvjh0NRGuQdP3d4yjL0xH3r2WM86CYxvtdVnDqk3EqUMazlSOW%2FoZnKz8QC5oKNlSazQFObFvFy2TSViC4gaBfGklXu8j4Vx2QV0Ckvd1m7AHLLMV8wJtDfQxmXn5Q82%2FS6HZGeeJq2GqfOuQZtXzgNRumRkEBl62P%2FZmRpJEiYRZ%2Fzhq7BN97a4QV2RP40smPF75Z%2Bzv8htZvohYrPS%2FE7XGVTOK%2BSo5nKHhijr2c4Vj0UH0bjN%2Ba3iYVoD2CffcqtUe2%2FnBE5cT2iw6povxzjCqJ%2BzGUbiPPS6n18UthckgHy4MlObGPXapqYyVI%2FmWh7V7uSIMwnBdDRd%2BTRsHm2NK6Ejb3lFWNEjLpQqP0ZlR%2B8R%2Fk4aCOiN%2FE7clakQLE2HXfWQqiOYCm8ZzQyEKYnex6WpF4KbeHfmLFJFBzmsqqs1i8mQsTQf9MBEPuTj7HSXO3w1tjpQzn67eTZzbYsEmisZnZ%2BM8PfbizZng0GZ3W61UIBUUE9eV1Zto1HN%2BS1Fvf6AtmsEW0mJcTMjMyjDGnt7ybh%2Baa1rR6iN9v%2FNQ%2FMPyTlcMGOqUB7iBx22OYLgPMo9d4gz2ujW4wfHoOXAMfuKRML2vMSCrufHFIK9t9zoMLXEryUcoL%2F6lJCOuBY01R3WmF7BW3dj9nGxX78YRFG71%2BjhGXwq36j%2FsVqqSE7SdEdVG9aX02pqNLnpUIxtj5CwLorXTEfYlGFfgv7bq9y7WYZYRLgVQbC8BK9OH%2FUa99BwEGe8D56WECYl%2BdLm62wQebcUK8XOt9K%2FrU&X-Amz-Signature=d613afa327f3b2d5b9c859a5707d436c44bdca95778af27b559ed8c9c6c7fec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
