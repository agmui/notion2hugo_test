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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUWMIFK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoZ%2BZ%2FPpeTiFezpTjVWJAtuXt217LljrCOZ8%2FKHwNO8AiEAud8hQ%2BXbKBMuMpFm6hsEcUon%2FQl%2BUg4ZFVv3wfGIC5kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZkZibAhitzn3wMFSrcA8ptvzdUw1cLt%2FeENd8EcVtHR%2Bev9zKy8aAPoeiNPVdzO8tqJyoSbmFlJqX5KsRE5wAgMGx0UuWQJtw%2FroXqxla1n8hTS%2FIUnlZ0qMLyz0CgNIvCr51nSaIwQ7UxuB8RtCi%2FiGTeTXnYUny7E0KLyCXsBRqVmxpo88tG%2FZU5qsV5L8XKDP9lBuulqMZrLlGRzG4TZmj9%2BAaUqroZxNVrY1HtEpAvNSosqroPOeW12HWutl1OVWpV%2BW5ix2PhKwxFM4ZCuxdlNZRYWs%2Fam4kuWWpU4VlhFsNXe3USLIGGe%2BEGdSQ1kiKm8Yf3hJz6kmZ3Yrtq7u%2BtUvSrJVtiY9Yn%2F6wHCjCRaZqsfXdCl19OjTkoVmx0%2F%2BuOepCo1v8NXi35cQHUshwgGSLXGspHUaZFGW4rsDfUn%2BPewD7Bb7vjgqd6%2FVawOYnVxiL%2Bm2z92eALm2AjUnfif1pdi49IW2axq2S%2B%2BcJmfndaIj2TYV1BhwaNHqQt9F4RJgehQbcqlsozM2TjGxLgb%2BJdvsKMGTBxQnTbiLlYGKpEQBSPk7CBpEwAI42Lz%2FsuxNruX9O6%2Fo97hoHYEpMAq%2BD7A9oBqKo72%2BVKFpxHgr4xXH3j8RtbA0Wu0%2FkAthhwIlO6DIhbMI3278MGOqUBojZnWkSYKuDpjnnl%2BclhtCg0%2B1mTZ47QVSBH9CNKyHHM6VCeqhRZtu9EqYxDRzeS4x%2BWKF2vtKDnYDFUblkbE8cRgstVRgXxBtp8tWLez6I63Ej13HBiCI8ABsnX4rRiGlbAhOnPZ2A9QAZTL0PsmyWCedg9%2BJ7qtrhVGNJElwmhEeSIwhpTihTlRa2Xz9K6g2%2BMKNLpVm4ySvudbGflz0cSHQnC&X-Amz-Signature=27b5e9ff4ba6622a21fb8cd0ade43d446a791c4327250065bf25a04a8799f1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUWMIFK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoZ%2BZ%2FPpeTiFezpTjVWJAtuXt217LljrCOZ8%2FKHwNO8AiEAud8hQ%2BXbKBMuMpFm6hsEcUon%2FQl%2BUg4ZFVv3wfGIC5kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZkZibAhitzn3wMFSrcA8ptvzdUw1cLt%2FeENd8EcVtHR%2Bev9zKy8aAPoeiNPVdzO8tqJyoSbmFlJqX5KsRE5wAgMGx0UuWQJtw%2FroXqxla1n8hTS%2FIUnlZ0qMLyz0CgNIvCr51nSaIwQ7UxuB8RtCi%2FiGTeTXnYUny7E0KLyCXsBRqVmxpo88tG%2FZU5qsV5L8XKDP9lBuulqMZrLlGRzG4TZmj9%2BAaUqroZxNVrY1HtEpAvNSosqroPOeW12HWutl1OVWpV%2BW5ix2PhKwxFM4ZCuxdlNZRYWs%2Fam4kuWWpU4VlhFsNXe3USLIGGe%2BEGdSQ1kiKm8Yf3hJz6kmZ3Yrtq7u%2BtUvSrJVtiY9Yn%2F6wHCjCRaZqsfXdCl19OjTkoVmx0%2F%2BuOepCo1v8NXi35cQHUshwgGSLXGspHUaZFGW4rsDfUn%2BPewD7Bb7vjgqd6%2FVawOYnVxiL%2Bm2z92eALm2AjUnfif1pdi49IW2axq2S%2B%2BcJmfndaIj2TYV1BhwaNHqQt9F4RJgehQbcqlsozM2TjGxLgb%2BJdvsKMGTBxQnTbiLlYGKpEQBSPk7CBpEwAI42Lz%2FsuxNruX9O6%2Fo97hoHYEpMAq%2BD7A9oBqKo72%2BVKFpxHgr4xXH3j8RtbA0Wu0%2FkAthhwIlO6DIhbMI3278MGOqUBojZnWkSYKuDpjnnl%2BclhtCg0%2B1mTZ47QVSBH9CNKyHHM6VCeqhRZtu9EqYxDRzeS4x%2BWKF2vtKDnYDFUblkbE8cRgstVRgXxBtp8tWLez6I63Ej13HBiCI8ABsnX4rRiGlbAhOnPZ2A9QAZTL0PsmyWCedg9%2BJ7qtrhVGNJElwmhEeSIwhpTihTlRa2Xz9K6g2%2BMKNLpVm4ySvudbGflz0cSHQnC&X-Amz-Signature=a5041b5cada48cbe47c177259b526a0e9b54d10c48289a685f60d79bf5daa0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
