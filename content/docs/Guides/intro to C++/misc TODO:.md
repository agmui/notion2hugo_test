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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDFGQPA7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGqQzr1OTQ6u8wsIl%2BaGAHoXHXDDV2Nr3%2Fo%2FiNx8SGhgIgAL9p9yV02rIddwfHWHsukOeiN8F5IMSP9%2F8sfvlS4wwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHjqAz8i0XqdCjZaiSrcA7LGh0%2BrvOGjv84I4sOallgWy7h8SvRNMR7agOpbzZ6bVamU6F7MkjM%2FsGHz51NZwZTMhqGViYxEi3ppdGf4F%2FxSKzeg0wbcHH1Mak0TSi%2BlYq4j50A87X3qgEUCyrJ0YwqBNzUQT977U6UTVtYp4WH946Z5PSyddjIvLwt3rP13Y%2BiGOX2AAj3i%2Be38aXupTRC0aVQUw%2F7NJ4gv7JsCuE5o%2FeKWnmM%2FR0eyPJN%2FNwf%2BP8drmhhHJscKuoNtQofCiwB96KmG38BMmlHhRgo3PFjJe0pFLJwikfsPXg1yZ7oUa0l2SrhdQJHPHV9JHvBm0Ru2Aoy1wc%2BREcxaeu%2FXlu%2BfkfiI93IX2TbrYgUFfbiW%2BtCKh587yvM8rppuzNCr9bc9lPoVU8uH1hvQrzSgLq7Gt1jss3VCbbvA%2FqYoSfa1lLgQ%2Bx4zFdQ%2BAaqQQhLhU4liYaExXRs79Ii0pCADw%2FYuiUi47AbaZPpleRTb1Ay%2BkgK40m43pecra13yUNNTwC4z6ND69NfNR5RVVD5z%2BAjc1O2KNH3qGnbtX62cyG5cERGyTG8lzrJwFaGyAQ8fJ%2FZ4%2B7%2BfhpEs%2BXSy65RcORcLSE1%2FvfBLoTs%2F%2BOKCKxK9gs0GBd8kMbGZKLgPMMOKusAGOqUBdpswC5fsm7tmVm2kfcNYmOq9eO5IWfzbJ%2Fe9c0cUTJQz5D27mSYL%2BClxzIUleXXvQ%2BogN6Q2oZupi9Epzvn5zOTzO3ybuQE%2BqQn4SmuDMfyZy7i4cXhNwVXORq%2B1pge3VUpp1aDdwK7Ide8%2FyATVUQcna4EbjJ51g6QXw3sjZfdzrhXpzieCqFNUb7Qhs2ivDOvEhg1EjclYT1gCb%2F9DNdiK6Puo&X-Amz-Signature=b11a6ca5237367d7d8529916e1764d008f4eb1808810351fbe02a338cabe5a85&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDFGQPA7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGqQzr1OTQ6u8wsIl%2BaGAHoXHXDDV2Nr3%2Fo%2FiNx8SGhgIgAL9p9yV02rIddwfHWHsukOeiN8F5IMSP9%2F8sfvlS4wwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHjqAz8i0XqdCjZaiSrcA7LGh0%2BrvOGjv84I4sOallgWy7h8SvRNMR7agOpbzZ6bVamU6F7MkjM%2FsGHz51NZwZTMhqGViYxEi3ppdGf4F%2FxSKzeg0wbcHH1Mak0TSi%2BlYq4j50A87X3qgEUCyrJ0YwqBNzUQT977U6UTVtYp4WH946Z5PSyddjIvLwt3rP13Y%2BiGOX2AAj3i%2Be38aXupTRC0aVQUw%2F7NJ4gv7JsCuE5o%2FeKWnmM%2FR0eyPJN%2FNwf%2BP8drmhhHJscKuoNtQofCiwB96KmG38BMmlHhRgo3PFjJe0pFLJwikfsPXg1yZ7oUa0l2SrhdQJHPHV9JHvBm0Ru2Aoy1wc%2BREcxaeu%2FXlu%2BfkfiI93IX2TbrYgUFfbiW%2BtCKh587yvM8rppuzNCr9bc9lPoVU8uH1hvQrzSgLq7Gt1jss3VCbbvA%2FqYoSfa1lLgQ%2Bx4zFdQ%2BAaqQQhLhU4liYaExXRs79Ii0pCADw%2FYuiUi47AbaZPpleRTb1Ay%2BkgK40m43pecra13yUNNTwC4z6ND69NfNR5RVVD5z%2BAjc1O2KNH3qGnbtX62cyG5cERGyTG8lzrJwFaGyAQ8fJ%2FZ4%2B7%2BfhpEs%2BXSy65RcORcLSE1%2FvfBLoTs%2F%2BOKCKxK9gs0GBd8kMbGZKLgPMMOKusAGOqUBdpswC5fsm7tmVm2kfcNYmOq9eO5IWfzbJ%2Fe9c0cUTJQz5D27mSYL%2BClxzIUleXXvQ%2BogN6Q2oZupi9Epzvn5zOTzO3ybuQE%2BqQn4SmuDMfyZy7i4cXhNwVXORq%2B1pge3VUpp1aDdwK7Ide8%2FyATVUQcna4EbjJ51g6QXw3sjZfdzrhXpzieCqFNUb7Qhs2ivDOvEhg1EjclYT1gCb%2F9DNdiK6Puo&X-Amz-Signature=e2c55026faea51acea9845f0625b312f3f6dcc12f6da02125726886e76585719&X-Amz-SignedHeaders=host&x-id=GetObject)

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
