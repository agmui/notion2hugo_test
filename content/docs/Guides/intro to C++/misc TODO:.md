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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKYUMW5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICvCEMNhblvQanO%2FW3Rm%2Bu6xka8VlvpWL4yyOxOwWeDzAiAd1glHkoPMCszkE2z6tvGPNdMwxuN8CcLcVm3F7UDRXiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTeCEXrkHNRCXCzZPKtwD1BH5pxuB72uCo%2BoiL9FNR9GsVNMmICxxWIS5vK8qrwBMI%2B9%2FQENhGagGeDrLSWH6zYTS6eER0ySgq2yXSXiPM8t%2BAN%2BFKb%2BQmJONu1JhuFnQ2NO1X6Yupi0%2Fksjw9aG1qlZGWlV2%2FaO3XjlgoGCXnRMGmW8nt6QGp7XOsCLjDJ%2FBxJypUMPkQ%2FBu6018wY9gjbzd4d2opkHxeHE%2B6cwyMfNmpLn13R5fMrUroAIRtNJwYb2Yiipd842x7z4bQ24g1EJWh%2BPW1Z9Z1X82tTVwcbTwzBEn18i4W2vTbyBEBYV6MQCIGHLI7n78%2FqNoOMyEqZr9aQqyYkiiVx2HvEKk6urGvdY29ElfRBVuF1gOpbVDv5BU8QmiENwp7SWQWLI1%2BdjsOeVw1ZS0Z3%2BcyhWacqAT%2FL1aR71uPmDyYDnSR%2FOxUNf3IdD3xH24ISu83La5Ke53G8o5ytBPb6eKvSBw5jmu0ly2h8LJIuVB13sU6g%2FttQxq15hOmypD52DQrJRRsj6mnngqBAlcjsQ7If33tM1AxIYMbiTMlXM66Sv3ZJBup3FVKyx%2FY3dBVfxIP46nQggmwUv5gTFI6yvoAIGQ2cyvvsg9byHHRyPedqCguT%2FwBwHFWMBXh80cSQgwnZrawAY6pgGR7uqEdxizmqWuwBabPYXaz2qZtwXRaDZYaPps284rl7jhV%2FMMCj3DtB%2BoWA52M8zEJ0YwqUTe4oX91ohdaV8QlPeP9xiD3N%2FxfgRn7QtWFivghh13%2FkyQ%2Bd%2FssCKL43zUljGY7TvDjWyywQXhViyi5%2FplceByy1c6qeR5DXO%2FkjOmZjYxkB2OLu2m5XLUqq%2BzWSYRougMcfC7ISudvl41ckFthedG&X-Amz-Signature=b48e42b78af1bdb8c69007e8b3fc01b397c77f00d84bf8aebb988dcd28b917b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKYUMW5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICvCEMNhblvQanO%2FW3Rm%2Bu6xka8VlvpWL4yyOxOwWeDzAiAd1glHkoPMCszkE2z6tvGPNdMwxuN8CcLcVm3F7UDRXiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTeCEXrkHNRCXCzZPKtwD1BH5pxuB72uCo%2BoiL9FNR9GsVNMmICxxWIS5vK8qrwBMI%2B9%2FQENhGagGeDrLSWH6zYTS6eER0ySgq2yXSXiPM8t%2BAN%2BFKb%2BQmJONu1JhuFnQ2NO1X6Yupi0%2Fksjw9aG1qlZGWlV2%2FaO3XjlgoGCXnRMGmW8nt6QGp7XOsCLjDJ%2FBxJypUMPkQ%2FBu6018wY9gjbzd4d2opkHxeHE%2B6cwyMfNmpLn13R5fMrUroAIRtNJwYb2Yiipd842x7z4bQ24g1EJWh%2BPW1Z9Z1X82tTVwcbTwzBEn18i4W2vTbyBEBYV6MQCIGHLI7n78%2FqNoOMyEqZr9aQqyYkiiVx2HvEKk6urGvdY29ElfRBVuF1gOpbVDv5BU8QmiENwp7SWQWLI1%2BdjsOeVw1ZS0Z3%2BcyhWacqAT%2FL1aR71uPmDyYDnSR%2FOxUNf3IdD3xH24ISu83La5Ke53G8o5ytBPb6eKvSBw5jmu0ly2h8LJIuVB13sU6g%2FttQxq15hOmypD52DQrJRRsj6mnngqBAlcjsQ7If33tM1AxIYMbiTMlXM66Sv3ZJBup3FVKyx%2FY3dBVfxIP46nQggmwUv5gTFI6yvoAIGQ2cyvvsg9byHHRyPedqCguT%2FwBwHFWMBXh80cSQgwnZrawAY6pgGR7uqEdxizmqWuwBabPYXaz2qZtwXRaDZYaPps284rl7jhV%2FMMCj3DtB%2BoWA52M8zEJ0YwqUTe4oX91ohdaV8QlPeP9xiD3N%2FxfgRn7QtWFivghh13%2FkyQ%2Bd%2FssCKL43zUljGY7TvDjWyywQXhViyi5%2FplceByy1c6qeR5DXO%2FkjOmZjYxkB2OLu2m5XLUqq%2BzWSYRougMcfC7ISudvl41ckFthedG&X-Amz-Signature=8056f8486f030da1a80c59ad4f9f61f1785c9773ff0d0a8cc81bb4565d006122&X-Amz-SignedHeaders=host&x-id=GetObject)

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
