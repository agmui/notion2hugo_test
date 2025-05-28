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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW46YRHC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9RuKCL3xzVMak0Io8%2Bno%2Fn2lZnb6fQJ56J486gyWxxgIgCoiBuOdNcxhLzRaXxEpDPHCfWv3h2Qc22FPmbNVm36Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN7swjBTnM2%2BswsI1ircA9PXPfUOQ3u1LaQQRmcGtGCmMhfR3Zi0YqskafJ%2FdbUDlwwtJyeuMvc1sqcecoeaIfFhGlxPcq30G5rzPxsSJ2vAfX8w95h3%2FSFg%2BFiDrx9M2ooiAzKvw6gllvKXPTfxZTcxf%2Bn8cnNWg63w%2Fb7TMi70Xb8orvYbn1x%2Ba1jA3xkqtPy0VkxKXslsEVyivvwxAVMXka0aZwzvDhDZ%2Fc2m3sze%2F4TKjE85EXZTelplyOqiEgqqOlqQFPySES94B6gRP4e5Lyo8K%2FI62KUXG%2Fwof%2BFHYa49%2B9%2BMzUEzDK6nMkEgAiB%2BGZGSg5aZHfhHYxO%2FIqZXit9niUsvNbuGjZ6Pws3lH0OnjT9m1B8nIidhuP0CETh4Kj9AknIpnaqm%2FITkZdt9WxmXiHYaE%2FyEXNEoF4EtszknggRLYsCs3Ci37MDPdI%2Bj05GPxTlNpjlJdRNv4u395z0N%2FR4PneENb7dia5ozjRS4MG4lRPSpkUhbm0iUj%2FGLpHsxUIvCI9Yh70iGWtdX36w2ownGmb5NQ8jGByua5NLh52qCo%2FjgoDEIqSnkXKxYPR%2FyORkJyFfcYI9sLji%2BvXcqlIqzmatLyOTHJ4zZTTid8MAWlfsLSq4hDa2Ueox7wD2kryK%2BPO6lMPHF3MEGOqUBIDVFGbq40TjnkPfhDOabf%2BRhZ%2BD8mSfYvKvgtiXPsV01uAmqLHiAgVCktDNpgG%2BS0MUNjEZvSvwLmnXAoJMWdIIhmCxGkd3IBziv%2B1tn%2FpxN0vt9vLN8apSJtpEiCkiZHSY%2FpqRYuGETPYoMqOKM9NNx7m4aNK%2ByjhUIMFXZyMD8V36%2B31mRTVn%2FtcxhvJjqhbw5rhQSGMcZGV4jKq%2BXy%2FFRH2wc&X-Amz-Signature=aad14eb0fe55eec253af129b42e7e2219ddc7ef4914e87e0c9072d8d03e7ecbf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW46YRHC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9RuKCL3xzVMak0Io8%2Bno%2Fn2lZnb6fQJ56J486gyWxxgIgCoiBuOdNcxhLzRaXxEpDPHCfWv3h2Qc22FPmbNVm36Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN7swjBTnM2%2BswsI1ircA9PXPfUOQ3u1LaQQRmcGtGCmMhfR3Zi0YqskafJ%2FdbUDlwwtJyeuMvc1sqcecoeaIfFhGlxPcq30G5rzPxsSJ2vAfX8w95h3%2FSFg%2BFiDrx9M2ooiAzKvw6gllvKXPTfxZTcxf%2Bn8cnNWg63w%2Fb7TMi70Xb8orvYbn1x%2Ba1jA3xkqtPy0VkxKXslsEVyivvwxAVMXka0aZwzvDhDZ%2Fc2m3sze%2F4TKjE85EXZTelplyOqiEgqqOlqQFPySES94B6gRP4e5Lyo8K%2FI62KUXG%2Fwof%2BFHYa49%2B9%2BMzUEzDK6nMkEgAiB%2BGZGSg5aZHfhHYxO%2FIqZXit9niUsvNbuGjZ6Pws3lH0OnjT9m1B8nIidhuP0CETh4Kj9AknIpnaqm%2FITkZdt9WxmXiHYaE%2FyEXNEoF4EtszknggRLYsCs3Ci37MDPdI%2Bj05GPxTlNpjlJdRNv4u395z0N%2FR4PneENb7dia5ozjRS4MG4lRPSpkUhbm0iUj%2FGLpHsxUIvCI9Yh70iGWtdX36w2ownGmb5NQ8jGByua5NLh52qCo%2FjgoDEIqSnkXKxYPR%2FyORkJyFfcYI9sLji%2BvXcqlIqzmatLyOTHJ4zZTTid8MAWlfsLSq4hDa2Ueox7wD2kryK%2BPO6lMPHF3MEGOqUBIDVFGbq40TjnkPfhDOabf%2BRhZ%2BD8mSfYvKvgtiXPsV01uAmqLHiAgVCktDNpgG%2BS0MUNjEZvSvwLmnXAoJMWdIIhmCxGkd3IBziv%2B1tn%2FpxN0vt9vLN8apSJtpEiCkiZHSY%2FpqRYuGETPYoMqOKM9NNx7m4aNK%2ByjhUIMFXZyMD8V36%2B31mRTVn%2FtcxhvJjqhbw5rhQSGMcZGV4jKq%2BXy%2FFRH2wc&X-Amz-Signature=ba2200c3ac539212fbcca2ee43157c6a372b508620408e7630cfca4a808998cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
