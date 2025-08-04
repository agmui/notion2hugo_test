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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZJ6GH5A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICEcczvROrT8V5q0OBTzQ%2FvK611WJeyZG%2BSRXwiLlRsBAiBAI42M%2BlKg%2BAMM%2BfjQSNEeKhIXks6qq7kL4a%2FWGtDwMCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMH0dhjrx6wLAD4w9eKtwDhVutBDPQPjK%2BdJJL%2BRQVGvsFVF2e1dVVRHVqgDiR79N0e8WNfIJCY14NdJDvkASgu6Lq9SRZglOYGIaGPwRY7x5pDJmBmF15%2FxDjZUZsWqZrP7XrhFzD3ieD%2FMLh4U%2BecoF3wE9tCCwe7k8V3xRH%2FddWWmL7f1KmU%2BGBRduKgKCWsg9uWUSNN7Ehkrx9ji%2BeRC7cV2coAGx0d7bg3qTlerV6PylfZD2vxXlLQjQSYRf%2FW%2B8YYRTik3lgV3zzkSXR2RcO08llDqucGsg8%2BcNQU6Tg%2F8hOD5Er%2BVU61ZK4ebP0IZ8x2ZSWSdY%2BXhE0C7b6vK1lM0TzfrPG%2BZWzCUESrAEfETGfgEEiT56G5YGokT%2FiLuiStkeukqZ57gMejAQUocpRNQUtpASqKJgQdVcGAaKJbZKWveDNBBG%2BAX8DojGG5VGmjfyD71pAwfFZkObieprWxAfmUbWByOQFM82ww9m1OkBL5UIkYVLswrZDygWjBu4sfgZuBPBSmu1%2BMnLn9TP87vge3my4IV7ermZlPOPyf1AkMd1F%2B9Z%2FlmXuOdWX2CdlwsnkgSDReoWf%2B268uA%2B%2FmatWEFibe4pLoRiadoQlKLQUx1UFhGEGySlRyvcFE1%2FoBkEH2mspmakw8I3BxAY6pgG%2BX1vxWnOvAzaa47viBy3xa3OG8m15td5FBPdEJksML0rE0M4w6ZCIzG1DKe7aNVaSzDfcCRtSd9EOCNoPK63ku94hR21C%2BOC57M9mXKMdCAnw6dMriLjm%2FkJUsp5xBkOtR6B8ConvxjlsxEbsnlMYn6k8Ai32zoCkMLh1uLNxsvmOKQBm9U6pGirfSprJQB6XKu8I%2Ft%2Bvxxx1xR47g6SnNok%2FcK%2BS&X-Amz-Signature=f7f89108d35ab28256fa7d6f4aed5be454bcdd52ee0220db4d0f234d2afa9173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZJ6GH5A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICEcczvROrT8V5q0OBTzQ%2FvK611WJeyZG%2BSRXwiLlRsBAiBAI42M%2BlKg%2BAMM%2BfjQSNEeKhIXks6qq7kL4a%2FWGtDwMCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMH0dhjrx6wLAD4w9eKtwDhVutBDPQPjK%2BdJJL%2BRQVGvsFVF2e1dVVRHVqgDiR79N0e8WNfIJCY14NdJDvkASgu6Lq9SRZglOYGIaGPwRY7x5pDJmBmF15%2FxDjZUZsWqZrP7XrhFzD3ieD%2FMLh4U%2BecoF3wE9tCCwe7k8V3xRH%2FddWWmL7f1KmU%2BGBRduKgKCWsg9uWUSNN7Ehkrx9ji%2BeRC7cV2coAGx0d7bg3qTlerV6PylfZD2vxXlLQjQSYRf%2FW%2B8YYRTik3lgV3zzkSXR2RcO08llDqucGsg8%2BcNQU6Tg%2F8hOD5Er%2BVU61ZK4ebP0IZ8x2ZSWSdY%2BXhE0C7b6vK1lM0TzfrPG%2BZWzCUESrAEfETGfgEEiT56G5YGokT%2FiLuiStkeukqZ57gMejAQUocpRNQUtpASqKJgQdVcGAaKJbZKWveDNBBG%2BAX8DojGG5VGmjfyD71pAwfFZkObieprWxAfmUbWByOQFM82ww9m1OkBL5UIkYVLswrZDygWjBu4sfgZuBPBSmu1%2BMnLn9TP87vge3my4IV7ermZlPOPyf1AkMd1F%2B9Z%2FlmXuOdWX2CdlwsnkgSDReoWf%2B268uA%2B%2FmatWEFibe4pLoRiadoQlKLQUx1UFhGEGySlRyvcFE1%2FoBkEH2mspmakw8I3BxAY6pgG%2BX1vxWnOvAzaa47viBy3xa3OG8m15td5FBPdEJksML0rE0M4w6ZCIzG1DKe7aNVaSzDfcCRtSd9EOCNoPK63ku94hR21C%2BOC57M9mXKMdCAnw6dMriLjm%2FkJUsp5xBkOtR6B8ConvxjlsxEbsnlMYn6k8Ai32zoCkMLh1uLNxsvmOKQBm9U6pGirfSprJQB6XKu8I%2Ft%2Bvxxx1xR47g6SnNok%2FcK%2BS&X-Amz-Signature=3af9d42016ef79abd44bcf8b8bbcee86a7f699e7e208e6bfda880a22d24e18c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
