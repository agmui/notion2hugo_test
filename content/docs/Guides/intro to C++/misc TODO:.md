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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUTVSNO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC5v8DivT9d3Xtp9HVaF3QCC6Iu2LbY1OIVmLt2L%2BUScgIgBYKwRxpKYlCKIV6HZoBRkhaJE2nqS8XMx0obuwVqUCIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL10pTQLAcx8uVqT8ircA%2BBcKdhMIPochTjnQS6Ri%2B2J26BQVeSpVmC%2BQYuQMQOQwF13RhH9af8Mus9iyukK7td3OlJstIuw5YYa9WzfqNx%2FOW3tgWFPyhTlSmGa51xlyzmKcjYVg7JeLZDvCV%2F1ltxA%2FKLII2XaoxsMGt5jQIySQOTQcUXZaaJha2QwfZFOJVxkrsN7Ehzdm3SiNlGqwj%2ByXFeIY0d8u5NQ28MI2uo2bmK7GKtmdMwqDJ8jp6rAee%2BqJhFrIjdDfSfUNk0FmWRIQRtHfELeqOHIlnp1RdBzkfyBg9ptuFsQ2fHWxTwXafMc1Q4EfA73AZjodpur5%2FNSXLyfkSDRGOvCUQ0KpaZDxQT3KOJGfXOUjIDzkzKfxnbzcIPj0Y1dEvCHLC6sjJTMZ%2FMrltrh3%2FKNFfhUWc02jqtTUpKH%2BtgAEkYholJY3%2Bw8Fb7DlvujHe6ep7ai8ywAB8PIuq3vYfNt1k3S%2FnuG727FqFEooPTiDzL26C92QfaWrQgGJ6dnHzml7UMcDBDuieMR9r%2FnHpBeUu8oIXgA%2FooxPj2XvHSs6urJKeVaRr66EVZuIvurzIh8MMFcTmSNMJSd5UlgAOsXC7TorzUoKCpyvRh%2BK71d5Cp7Y57eP85eaHnylvikRLDlMIOI0sQGOqUB%2FKhK8nBTtQeV0M8gKkh9XG1WmUThQfjuOJu6ZM4ePHGtGE7kOn83sONQMiuoq282p%2BHolV%2FrX%2F063sJUZXAfGnoCSOxFDAowpa9J1T9Y554B2l7WuAf46s40mJNkve%2BCV5u%2FUCM10MTY7Ne3g2gJJnqoeZHG33CwBzeZoYq8fkoln5sSTPWibGYfGtLRBE5TYA3wBZ17F91i2xbUvHJUmEVAZ795&X-Amz-Signature=a1683cdef8455d6bd9b2a069a0e87a97fa36569e11d0fa64fc91500aa1f0f865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUTVSNO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQC5v8DivT9d3Xtp9HVaF3QCC6Iu2LbY1OIVmLt2L%2BUScgIgBYKwRxpKYlCKIV6HZoBRkhaJE2nqS8XMx0obuwVqUCIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL10pTQLAcx8uVqT8ircA%2BBcKdhMIPochTjnQS6Ri%2B2J26BQVeSpVmC%2BQYuQMQOQwF13RhH9af8Mus9iyukK7td3OlJstIuw5YYa9WzfqNx%2FOW3tgWFPyhTlSmGa51xlyzmKcjYVg7JeLZDvCV%2F1ltxA%2FKLII2XaoxsMGt5jQIySQOTQcUXZaaJha2QwfZFOJVxkrsN7Ehzdm3SiNlGqwj%2ByXFeIY0d8u5NQ28MI2uo2bmK7GKtmdMwqDJ8jp6rAee%2BqJhFrIjdDfSfUNk0FmWRIQRtHfELeqOHIlnp1RdBzkfyBg9ptuFsQ2fHWxTwXafMc1Q4EfA73AZjodpur5%2FNSXLyfkSDRGOvCUQ0KpaZDxQT3KOJGfXOUjIDzkzKfxnbzcIPj0Y1dEvCHLC6sjJTMZ%2FMrltrh3%2FKNFfhUWc02jqtTUpKH%2BtgAEkYholJY3%2Bw8Fb7DlvujHe6ep7ai8ywAB8PIuq3vYfNt1k3S%2FnuG727FqFEooPTiDzL26C92QfaWrQgGJ6dnHzml7UMcDBDuieMR9r%2FnHpBeUu8oIXgA%2FooxPj2XvHSs6urJKeVaRr66EVZuIvurzIh8MMFcTmSNMJSd5UlgAOsXC7TorzUoKCpyvRh%2BK71d5Cp7Y57eP85eaHnylvikRLDlMIOI0sQGOqUB%2FKhK8nBTtQeV0M8gKkh9XG1WmUThQfjuOJu6ZM4ePHGtGE7kOn83sONQMiuoq282p%2BHolV%2FrX%2F063sJUZXAfGnoCSOxFDAowpa9J1T9Y554B2l7WuAf46s40mJNkve%2BCV5u%2FUCM10MTY7Ne3g2gJJnqoeZHG33CwBzeZoYq8fkoln5sSTPWibGYfGtLRBE5TYA3wBZ17F91i2xbUvHJUmEVAZ795&X-Amz-Signature=7ef34397993c0dd85c7ef1e47ddba3a0d3ce72e53c4c45ef8001e56d38708b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
