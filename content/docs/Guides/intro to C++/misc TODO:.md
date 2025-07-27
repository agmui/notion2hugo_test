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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HFAA5B6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIC3%2BLd2goQRVjL709myQRFxEDJyrYLxmiqP%2FaueoII0wAiEAuMkxcpgUJwZ70X0nfLQQaO8yIba3hG2yx44yPySZf6Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEGF8fPnPhT%2BR2ZjcSrcAyP%2BsC3Phz1%2FwYhLzAOkAnQqID2M6B0Ul%2BO4KuYRa2TlsnIjWXhwwvpKap2U2pcSRfiJGW2SagsEbfPhjUTElQOq9tQatp%2BI4YOwYCptj4plQcNhTfmtNhLszXgcrJ9W5yg44pjv2BJCWsyVlZlRTVyCLphnEFXdE0y7RPsjIzKe3%2BQum79UhNMtTQW9Pecx06W%2BYM3earMDOWxBomgorlU5CgFU1B9mxm6Vg52QFDKdDMCCYr90ZucObtlZOzKZg098RAUBTjmjNoS1UBuaBOl4cIWsXkbgi1pfeFbV1tdHFqg8v72MEzGBZQr9wKb9RldpR0IY2PBB4yygG6Fw%2BbIzHFfbo16ET5iUH9t%2B6Dj93LXhb6L5QTThcfYe%2FVPN95O5pF7SKUkGLdTUc4o7TiJbkgXgSnM29XPFBaX1FiTPPwowggyCVIuND%2BxwWFus9cub7S1B82XlLKpyz%2B%2BayWGg7TgjGIzGjNe5n3dzb%2BBHlHzm%2BOm0A0Rw24ph%2Fq4Dc6LQcb6Q%2BqP1oUtyaje82wegyuYu6JQzb0l1lwGKW3GQ4yJPLwYzLc0Yu2gz5o14NrF7MaLRz5UtWUQjUZhMtu26Pk1gkqqSeRm8covrCdsjezl3aI698eHAcQtAMKD7mMQGOqUBfyHhD3JABH7H1VBeu9JOAKUi9UMuPFaltYImovtmj4pQ%2FBTJpa8WDP2oJpWRJnSukBBTWxXgx4sJTdO2hV43D5ievltj32JIeH3p%2BMPIHGgk3TVd7nDBnxKsX1FTO5htYO7jwWSBIT5dMvFNu0MSDPazwQxwtkP1B7YYzDqrhIeoHe9qXXy0wzhWr4s7mV75fXkeCqX5H3BP8J02IFU1zP4DvveG&X-Amz-Signature=5ab0f0cbfcd937ecc591e35569221558be66409ba3ef64622d46b7166b5d295c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HFAA5B6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIC3%2BLd2goQRVjL709myQRFxEDJyrYLxmiqP%2FaueoII0wAiEAuMkxcpgUJwZ70X0nfLQQaO8yIba3hG2yx44yPySZf6Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEGF8fPnPhT%2BR2ZjcSrcAyP%2BsC3Phz1%2FwYhLzAOkAnQqID2M6B0Ul%2BO4KuYRa2TlsnIjWXhwwvpKap2U2pcSRfiJGW2SagsEbfPhjUTElQOq9tQatp%2BI4YOwYCptj4plQcNhTfmtNhLszXgcrJ9W5yg44pjv2BJCWsyVlZlRTVyCLphnEFXdE0y7RPsjIzKe3%2BQum79UhNMtTQW9Pecx06W%2BYM3earMDOWxBomgorlU5CgFU1B9mxm6Vg52QFDKdDMCCYr90ZucObtlZOzKZg098RAUBTjmjNoS1UBuaBOl4cIWsXkbgi1pfeFbV1tdHFqg8v72MEzGBZQr9wKb9RldpR0IY2PBB4yygG6Fw%2BbIzHFfbo16ET5iUH9t%2B6Dj93LXhb6L5QTThcfYe%2FVPN95O5pF7SKUkGLdTUc4o7TiJbkgXgSnM29XPFBaX1FiTPPwowggyCVIuND%2BxwWFus9cub7S1B82XlLKpyz%2B%2BayWGg7TgjGIzGjNe5n3dzb%2BBHlHzm%2BOm0A0Rw24ph%2Fq4Dc6LQcb6Q%2BqP1oUtyaje82wegyuYu6JQzb0l1lwGKW3GQ4yJPLwYzLc0Yu2gz5o14NrF7MaLRz5UtWUQjUZhMtu26Pk1gkqqSeRm8covrCdsjezl3aI698eHAcQtAMKD7mMQGOqUBfyHhD3JABH7H1VBeu9JOAKUi9UMuPFaltYImovtmj4pQ%2FBTJpa8WDP2oJpWRJnSukBBTWxXgx4sJTdO2hV43D5ievltj32JIeH3p%2BMPIHGgk3TVd7nDBnxKsX1FTO5htYO7jwWSBIT5dMvFNu0MSDPazwQxwtkP1B7YYzDqrhIeoHe9qXXy0wzhWr4s7mV75fXkeCqX5H3BP8J02IFU1zP4DvveG&X-Amz-Signature=bb44bdda4646c77015c765f73aeabad5c098ea803aef85d2084e8d19dd34169b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
