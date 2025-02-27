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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRIF7AHT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGorBCPqWoEn9jJt9kacbGdQLDKdgtNFWalm9WUR2S8fAiAqKieLGbi1%2FNiZoNG79pOkWrrAGQZmDUib6vsi2fN%2BKyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDbSf8ndzpxgnmafHKtwDu2I6fTJHDg8p%2By0DJ7Z8DsMxvIEnJdEdmsA5LeTCA6XHUFDHABQSnup8QcBGbt7y4c0gnCnAlKyU5S%2FWeWbMPmEgs6LL5Ztq7pVccnag7NjFiWUkVROT6Bg95nub6jvjNJ1M9K9FZ%2BVeITKjIJ0T%2F4RlNo4IpaxQ10k5%2B2%2FDFqSPRiETZJZ8vhXhrIFUGWD%2BbLXsTlTiD%2BFOesakPXVmBm0cpdKZ4S4Lcm4TJVgjZ4C%2BPUkDAamz4aTtep%2BDFBXhvpIil84fvlDReDaHrBgtagk9oFIa%2BSGMzRu5L2zur%2FB88SCUXTjJdb9CN4JEJ9SDmgclcAd1CbG0wOriInZQt7z6qABgxKlFmEaGS9d7Oz92mhJbA%2F7wTcXjQrvyKGjpKSadpJTS2ZQYd2KrRXZ2kyffgMmVLS3iE6Tip0Vps67rIGjlHfgNhRymuolpkslja2OFpK5ZZIFHdBv1kvk6GplKnvAyTsdJwtTA47OR%2FTkAwFUgzpldtBGZ51cSzB6Y07KiidipzCCEyWh4XcFz%2BJEsoDLkm4%2FwydYox5GiHKvld1tTwhC65vAHkO5gcLOxKz66Ct6b1Vh9XjwpcILU%2B4Gk%2BO4yDNHQZhtbC5d1ZIPHg1Y7UdHV9R9L1MUw8%2FCCvgY6pgE3Df84qr5EwA67Nok8RpFNeaBM98Rly8PYceilqkflHOr2Lx%2FV9MaYycCNqCLshqzdwNxElCGPJRhgOLKiNaJ7ue7leN0fvT2H854oQf1AB1CMNKiQo6BgFjLF8Qzbz%2F9nAmqGMz4KBDxlwDbT5dkHcBB5aSMEP0dAuLxD%2F6d%2BTn89YPljKi9XWVzY%2BwSdMWEDX8t8%2FBafympt7wSw67iw%2F5dhYdSD&X-Amz-Signature=3d6f034d08a8d75585d91272378feab289d0ec8f9c727a8690ffb99b4b21291f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRIF7AHT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGorBCPqWoEn9jJt9kacbGdQLDKdgtNFWalm9WUR2S8fAiAqKieLGbi1%2FNiZoNG79pOkWrrAGQZmDUib6vsi2fN%2BKyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDbSf8ndzpxgnmafHKtwDu2I6fTJHDg8p%2By0DJ7Z8DsMxvIEnJdEdmsA5LeTCA6XHUFDHABQSnup8QcBGbt7y4c0gnCnAlKyU5S%2FWeWbMPmEgs6LL5Ztq7pVccnag7NjFiWUkVROT6Bg95nub6jvjNJ1M9K9FZ%2BVeITKjIJ0T%2F4RlNo4IpaxQ10k5%2B2%2FDFqSPRiETZJZ8vhXhrIFUGWD%2BbLXsTlTiD%2BFOesakPXVmBm0cpdKZ4S4Lcm4TJVgjZ4C%2BPUkDAamz4aTtep%2BDFBXhvpIil84fvlDReDaHrBgtagk9oFIa%2BSGMzRu5L2zur%2FB88SCUXTjJdb9CN4JEJ9SDmgclcAd1CbG0wOriInZQt7z6qABgxKlFmEaGS9d7Oz92mhJbA%2F7wTcXjQrvyKGjpKSadpJTS2ZQYd2KrRXZ2kyffgMmVLS3iE6Tip0Vps67rIGjlHfgNhRymuolpkslja2OFpK5ZZIFHdBv1kvk6GplKnvAyTsdJwtTA47OR%2FTkAwFUgzpldtBGZ51cSzB6Y07KiidipzCCEyWh4XcFz%2BJEsoDLkm4%2FwydYox5GiHKvld1tTwhC65vAHkO5gcLOxKz66Ct6b1Vh9XjwpcILU%2B4Gk%2BO4yDNHQZhtbC5d1ZIPHg1Y7UdHV9R9L1MUw8%2FCCvgY6pgE3Df84qr5EwA67Nok8RpFNeaBM98Rly8PYceilqkflHOr2Lx%2FV9MaYycCNqCLshqzdwNxElCGPJRhgOLKiNaJ7ue7leN0fvT2H854oQf1AB1CMNKiQo6BgFjLF8Qzbz%2F9nAmqGMz4KBDxlwDbT5dkHcBB5aSMEP0dAuLxD%2F6d%2BTn89YPljKi9XWVzY%2BwSdMWEDX8t8%2FBafympt7wSw67iw%2F5dhYdSD&X-Amz-Signature=2043b4387a277a2ade37e792747ccbdf32af1c476cb9864943505fc9ec60f6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
