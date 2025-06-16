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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNDHOTIY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE2DwOExBI9MHDan4Wrsz9Z4QP33zMzPjjvkyuEL21iDAiAN5v8l08jQd3qZqrfd7Me6t8zsNw82U8hT6h2z8kXityr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMIYdgHY4RBRcS%2FbApKtwDOkeMx4%2Bepc1Yrg8vXSTj8cZ1YO2Ul5YoZA6HaJYOjr9mcRmi4ipeU9UHyua4owz31G4JoVZUoiM7gvJWdgg6Mwx9Vqv4hAruuwJl%2BOJPLEH4qa5viCy7ZZWATgz%2BPNpMoat4WUBhbFFmzWmLZ2zrl7ERqGnC0GSkgzw0WANEVZ2F7zt3ZQdjC38ssuEgY9LAJGPhhhnGN2vtLSOAgVwPqD%2BYw6jLeG3i3nzwRZzJyY8YFqHG5FYVcFSgIWYQJMe9Yn8hRZXfG5Ln9hYHhyr%2FlqReblnwvf1qwGrJbmpBeLEtw2OM2b5ll0AwzlQuyYFFA7e0AsTQz2Nvs8N7he27092cwNJorSAG%2BOWtA61nm3UJwUWlIggK3lG4i6BfQhXq372m0PM6xonkh3Ypq58miEXmVcYrcyGgWu2vO0b479tZWeU4QcL7DOp5TnjQ0Tx4TgCeha2pCaqgz8n1JuLgFQXwfbHg0QTpnNMGoDq%2B51YSpBsnZ0N9nNad%2FR2nAJCJWPZ1PCN2d8RZ0krLjuYtj9ju31eiBOoHLoCWq5wwBFlVm1K4ymg0SmVeeiv%2Fy%2Fbs2MC9kkTh%2FRf3vlrRqoxW7%2BCl0jI34QRJiAKy6hHQIFbmPud%2FlRVJWcFfrakwu6C%2BwgY6pgGd4BwJK6jxNDic9uKGEvFkfsORsuoK0SeERSB%2BlPGTvCTxB70IgOc4rPt1yTXiAYYrNGl0p0GhvA6gr%2BOhiI%2BnPmFH%2B8StTDAWjcLbsNdo8Ixt6Taw1MI6lXgj0ou9435g%2BonDWImAlX%2F1BA7Wuu2IRPowkmsh4nP7zpqO1yjmH%2B%2F9lQ2MtCDsrR8Us4dnKTrbpT%2BNfWiGynNOO338xhNq3CxTjebo&X-Amz-Signature=fda28044d3a9685541c8d6bf4ea2b2bca12c04096ef924012f15e5b47c6a0136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNDHOTIY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE2DwOExBI9MHDan4Wrsz9Z4QP33zMzPjjvkyuEL21iDAiAN5v8l08jQd3qZqrfd7Me6t8zsNw82U8hT6h2z8kXityr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMIYdgHY4RBRcS%2FbApKtwDOkeMx4%2Bepc1Yrg8vXSTj8cZ1YO2Ul5YoZA6HaJYOjr9mcRmi4ipeU9UHyua4owz31G4JoVZUoiM7gvJWdgg6Mwx9Vqv4hAruuwJl%2BOJPLEH4qa5viCy7ZZWATgz%2BPNpMoat4WUBhbFFmzWmLZ2zrl7ERqGnC0GSkgzw0WANEVZ2F7zt3ZQdjC38ssuEgY9LAJGPhhhnGN2vtLSOAgVwPqD%2BYw6jLeG3i3nzwRZzJyY8YFqHG5FYVcFSgIWYQJMe9Yn8hRZXfG5Ln9hYHhyr%2FlqReblnwvf1qwGrJbmpBeLEtw2OM2b5ll0AwzlQuyYFFA7e0AsTQz2Nvs8N7he27092cwNJorSAG%2BOWtA61nm3UJwUWlIggK3lG4i6BfQhXq372m0PM6xonkh3Ypq58miEXmVcYrcyGgWu2vO0b479tZWeU4QcL7DOp5TnjQ0Tx4TgCeha2pCaqgz8n1JuLgFQXwfbHg0QTpnNMGoDq%2B51YSpBsnZ0N9nNad%2FR2nAJCJWPZ1PCN2d8RZ0krLjuYtj9ju31eiBOoHLoCWq5wwBFlVm1K4ymg0SmVeeiv%2Fy%2Fbs2MC9kkTh%2FRf3vlrRqoxW7%2BCl0jI34QRJiAKy6hHQIFbmPud%2FlRVJWcFfrakwu6C%2BwgY6pgGd4BwJK6jxNDic9uKGEvFkfsORsuoK0SeERSB%2BlPGTvCTxB70IgOc4rPt1yTXiAYYrNGl0p0GhvA6gr%2BOhiI%2BnPmFH%2B8StTDAWjcLbsNdo8Ixt6Taw1MI6lXgj0ou9435g%2BonDWImAlX%2F1BA7Wuu2IRPowkmsh4nP7zpqO1yjmH%2B%2F9lQ2MtCDsrR8Us4dnKTrbpT%2BNfWiGynNOO338xhNq3CxTjebo&X-Amz-Signature=7ed553286d12f8b772e6c546b7bb5c5eaa8d00d5f5a6c4b3e1753fa5e068904c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
