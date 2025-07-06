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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVQTQF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDq6X4RD6mjfbZlTVfrdsuoHjS5H1MZ%2FbIVO%2FaVNl9snQIgNddD2slf2fweauxALU7liv2yN5T%2BUzyoVLYJhS2iGUIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDODDu94oyhEscKVzgyrcA%2F6V%2Be2RA3tMSws6ytw8K3Z34vdq8%2BKQWv93WW5yrNHY%2FYotmy%2BpLXzWYHbUEyUmQcJhRaRT90zkE3qOHZJKgwYE8D9haPtdEn0qv%2FXvlvi%2FGdpBMK5q3lZs4ZLXb0jtOJI4qsO53%2B2w6UmcF8N8TahF7QQukcdaMQx%2B2OIx9IZqMFJeZjiTSxNBCTGk2zwQhExiviPDRSH0pEOp%2Bs%2BO46xmMmRY6X34xA42Y%2BroA5YEF1noGYrm6Ys9Q3q31%2Fn4nOpdHpOfOOFjmF7TNKqyBbqTw0zx%2BAxUAYdfELTNxwdmLB%2F8%2BvoLmxIJJEvMYCiIgbQ1Efc93IQNNecbN%2B2yoxHVOAtjTO%2FAMoL2FzNi4CqvIb0cU9eSpJIjHslA52vk1dhCT0G%2F1ShfJYsk1OB10iX1RBzEqQBa3fqQaqMp5qrTa5F18enUFqEPTwcnii6eiEi4W4kTeWfIQLv2BkPlHJHsmJx2NIt8IQnpVyFmtI2LFslBk4xqnsBUq7OaDJ3c3dCxOk%2B1c7QgPeLncEPwFXzejlFNy%2BxclVzQe6RevGVWRJ3qjbT%2B%2FscV0t0m%2F8OQBNqyayimvbv5O27ixAr%2BG6YYJyNNNqEg6ZM%2B0wJJiRGElQ2tv%2FN1MK59%2FVtLMKjoqsMGOqUBXhBVMnMslcYAWHK9mxIrERpGhtgXhMrfVaMSnfsp7vLhbmLFgyjKw0FsC23LCWBZ%2BxDJGx5Y4O5RXHkVTTyPIoDCovP2CKnsbQhl9cUHWTSU2INGNpP4M%2Bn7Q9w8ImotxyMVl36HDd0qASFl0CuVWbkCUw4on%2BR9dzrEkrmH2cc77cZ%2BgKiXGnK7T40S%2Fgw5GS9hY%2BN7vmwXqNTiMlsUgE%2B5v6bw&X-Amz-Signature=98350a193f869094e40fbf0258ea25ea375bb419e94230ca1fbc596a4fb995a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVQTQF5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDq6X4RD6mjfbZlTVfrdsuoHjS5H1MZ%2FbIVO%2FaVNl9snQIgNddD2slf2fweauxALU7liv2yN5T%2BUzyoVLYJhS2iGUIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDODDu94oyhEscKVzgyrcA%2F6V%2Be2RA3tMSws6ytw8K3Z34vdq8%2BKQWv93WW5yrNHY%2FYotmy%2BpLXzWYHbUEyUmQcJhRaRT90zkE3qOHZJKgwYE8D9haPtdEn0qv%2FXvlvi%2FGdpBMK5q3lZs4ZLXb0jtOJI4qsO53%2B2w6UmcF8N8TahF7QQukcdaMQx%2B2OIx9IZqMFJeZjiTSxNBCTGk2zwQhExiviPDRSH0pEOp%2Bs%2BO46xmMmRY6X34xA42Y%2BroA5YEF1noGYrm6Ys9Q3q31%2Fn4nOpdHpOfOOFjmF7TNKqyBbqTw0zx%2BAxUAYdfELTNxwdmLB%2F8%2BvoLmxIJJEvMYCiIgbQ1Efc93IQNNecbN%2B2yoxHVOAtjTO%2FAMoL2FzNi4CqvIb0cU9eSpJIjHslA52vk1dhCT0G%2F1ShfJYsk1OB10iX1RBzEqQBa3fqQaqMp5qrTa5F18enUFqEPTwcnii6eiEi4W4kTeWfIQLv2BkPlHJHsmJx2NIt8IQnpVyFmtI2LFslBk4xqnsBUq7OaDJ3c3dCxOk%2B1c7QgPeLncEPwFXzejlFNy%2BxclVzQe6RevGVWRJ3qjbT%2B%2FscV0t0m%2F8OQBNqyayimvbv5O27ixAr%2BG6YYJyNNNqEg6ZM%2B0wJJiRGElQ2tv%2FN1MK59%2FVtLMKjoqsMGOqUBXhBVMnMslcYAWHK9mxIrERpGhtgXhMrfVaMSnfsp7vLhbmLFgyjKw0FsC23LCWBZ%2BxDJGx5Y4O5RXHkVTTyPIoDCovP2CKnsbQhl9cUHWTSU2INGNpP4M%2Bn7Q9w8ImotxyMVl36HDd0qASFl0CuVWbkCUw4on%2BR9dzrEkrmH2cc77cZ%2BgKiXGnK7T40S%2Fgw5GS9hY%2BN7vmwXqNTiMlsUgE%2B5v6bw&X-Amz-Signature=1539702642bae1881218b038fa64f0902244b8f5538f3d79d7361dfb5667acef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
