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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIR5RCJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBB4TsXJJt%2Bb0mtr67EG0dwuYmNSheK%2Bc3TkCZYhu1RTAiEArHg6jeoCF7RQ7F%2F78KeGzyrdi8O71SjXjNEj8Q9hAOIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIFFJLX3dUmL9n5circA212F8lJzl5Kro5V02EVYlREy%2FjkAAzqI7ScPvwBHOySgF5Y5Tocng%2BtDCSFeU7LtmWSsTQjnaEMl95oYHkBfTXs6GbViBdio7E71upbDs20oBj63f2sN5xVszSeez9FqxlnI3GbdHU0Wac9drdbcnlYPrlDq5SWPz55eUTbf9sLpktTmXWPUvn86GcwYemr1RA5s1MzQYUdSMonZaSB28JsRf%2FrcKDUZGKlldx0dhrPcbEb8GK2sNBxs%2BPzG5pa49ubjzdhwpqxU1v%2BNvLhM7%2B1tNtvp6knyutM0tUszyQB5rNWC4Iu7GZlApY7tzhkBDkcDKj7%2Fvw0mSJXaz%2FXH01M9T4%2BE2GJSBbe%2F9n2BJLKTnt%2FNQuhy2S38YIXqJRGOfMZypfVmoVXQAKj4qcWnUj0GALHFOWB7vHhwC2OiOOrp2zj%2FdycG3qGilWSTmeMUVilJtgBHJVwOV%2B2KPYsMz3aiduqAcsIjQRt2JvJdJFS7SnG8TdallsKRf6ReeL0dyRCz3Px5D42RDwO5vo9FtysLveAfxJGXoc9xk3Mvspr8I8dhD1dKdVXssU%2BszN78tykJJnq4nE7a5lkjwkU0Gbk%2BitsPp4ThvOHvdcxoykDnUXYaHwuJaXGcmuSMMuG1sAGOqUB6E%2BAxxyeJ6A9SouSMx9d1zoacBVWlvyHNHWqcw85VfQutOxNMfUxzP654cAdY0q2OmkcNyHs9F0tt6IHU5GhkmLePSNt1ykb5vMt%2ByZ7hBNeJe1Z%2BE6DTcnx9pw9q4qesYbyQ7zGjzv5YbZoN9dOkpOKPMH57WS4x3i3siOfWHpdoWhzv%2BkuGKXdYkgK9pBPQuoVkSoEa34FYykzADi3Oy21b6s2&X-Amz-Signature=86c5a3f5ad72dcbc453e5f61c680534766096e4a73ec5a4bb2b8b9faeb05103a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIR5RCJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBB4TsXJJt%2Bb0mtr67EG0dwuYmNSheK%2Bc3TkCZYhu1RTAiEArHg6jeoCF7RQ7F%2F78KeGzyrdi8O71SjXjNEj8Q9hAOIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIFFJLX3dUmL9n5circA212F8lJzl5Kro5V02EVYlREy%2FjkAAzqI7ScPvwBHOySgF5Y5Tocng%2BtDCSFeU7LtmWSsTQjnaEMl95oYHkBfTXs6GbViBdio7E71upbDs20oBj63f2sN5xVszSeez9FqxlnI3GbdHU0Wac9drdbcnlYPrlDq5SWPz55eUTbf9sLpktTmXWPUvn86GcwYemr1RA5s1MzQYUdSMonZaSB28JsRf%2FrcKDUZGKlldx0dhrPcbEb8GK2sNBxs%2BPzG5pa49ubjzdhwpqxU1v%2BNvLhM7%2B1tNtvp6knyutM0tUszyQB5rNWC4Iu7GZlApY7tzhkBDkcDKj7%2Fvw0mSJXaz%2FXH01M9T4%2BE2GJSBbe%2F9n2BJLKTnt%2FNQuhy2S38YIXqJRGOfMZypfVmoVXQAKj4qcWnUj0GALHFOWB7vHhwC2OiOOrp2zj%2FdycG3qGilWSTmeMUVilJtgBHJVwOV%2B2KPYsMz3aiduqAcsIjQRt2JvJdJFS7SnG8TdallsKRf6ReeL0dyRCz3Px5D42RDwO5vo9FtysLveAfxJGXoc9xk3Mvspr8I8dhD1dKdVXssU%2BszN78tykJJnq4nE7a5lkjwkU0Gbk%2BitsPp4ThvOHvdcxoykDnUXYaHwuJaXGcmuSMMuG1sAGOqUB6E%2BAxxyeJ6A9SouSMx9d1zoacBVWlvyHNHWqcw85VfQutOxNMfUxzP654cAdY0q2OmkcNyHs9F0tt6IHU5GhkmLePSNt1ykb5vMt%2ByZ7hBNeJe1Z%2BE6DTcnx9pw9q4qesYbyQ7zGjzv5YbZoN9dOkpOKPMH57WS4x3i3siOfWHpdoWhzv%2BkuGKXdYkgK9pBPQuoVkSoEa34FYykzADi3Oy21b6s2&X-Amz-Signature=06af5115bcdbe00d19f0f930d88f98a9c405f649c41a9a23da51cc17957be9be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
