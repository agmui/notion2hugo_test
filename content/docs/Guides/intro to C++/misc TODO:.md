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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYYGCGE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGkDq%2FK%2FG8clu%2B27yAcrj5iA1C0FdI%2BW7%2Fe6j5K7gGtMAiA0XXTp4P7tGucK9HJAilLynCSd1hXHu4s%2B7YSFWKW8%2Fyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMD5%2F%2BmrSTK2vxet0PKtwDAQIl6NnjEM0Ux9Jy00YGrvqT2ZkwIfw67XhZhGLgxE1d%2FRXFCWlTvCkrTQM0QblFdCzfge1Bz0Gf8BbZrdSaiFFZndFnRJ6fyLXEtxRwWLXW0rlYnGA2Cme5ufMQ1fS16pxB%2FqWXxJR0Q7aEliXMNRkDhsZCwqwjgQ%2FstmlO6h4Y8I2m4NGdpA8%2F5GvyqkaSJL48vwH3Y2zRShgiRG%2BMtPVZnPBs%2FjN9PGgHfG9Y7d8%2Fs9UTu5BJRn4gnQOgbsNRScitmewzw3fCRLtL0j35fRztORGV3RNwpOoP0mvUi3scN89U3g3knUTe9llHzhSznHSsFLoYSWeRhCK4FX0Q72KfDOLhoZD%2FywsMutFsXbMFVh%2FphH5smk3rZ%2F0CzshUr%2BtygVRdhi4uiK0caGs1DW5B9Rp3f%2Ft8t7Dd1L8kh9VqFVB0ppv7HRUCyqe%2FuQyi4RAvXIK67i0%2FXJpmPdE%2FSInSgkZEt0qzNWZ55P3w5p7PxxPrh9wm%2BoZJZXSDABF75QtC5N84XYdmwsrWyM%2FDSd%2Bh6prEh31i4Mwl0inZyzU9FdTz2WtNMLZZxxWHy93qHJ8onTlqqyVXRU6TR4xMjA0tzBTB1QzrRjNk8rXvtXE9BwL1UHRlGBdvs9sw1MqkwwY6pgGsmejACYCM4fXhEFswHMJd9hSy3Vc%2FIyzwawDEJ6U4574T5v8Yz40zXXr1PqVrMIa7IrEyW%2F24MorjnKY6HD6Tljx%2BClTkzXxnCfkB%2Fy6ak2PcAnmoXJo8HHOwScu7V4HKNI8rhBRYVGbIQK8Wp3R6QP2oAQEfWNt2je3uveV6VuFZQ3U5EJmxbRJpD2iORi74B6slPb5QhBRuyWxxccOPC6ZoUSHO&X-Amz-Signature=bd72e7466d89ecbbf27e968b5a63112f7f306a54b7f6bd59a61c76937e1889b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYYGCGE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGkDq%2FK%2FG8clu%2B27yAcrj5iA1C0FdI%2BW7%2Fe6j5K7gGtMAiA0XXTp4P7tGucK9HJAilLynCSd1hXHu4s%2B7YSFWKW8%2Fyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMD5%2F%2BmrSTK2vxet0PKtwDAQIl6NnjEM0Ux9Jy00YGrvqT2ZkwIfw67XhZhGLgxE1d%2FRXFCWlTvCkrTQM0QblFdCzfge1Bz0Gf8BbZrdSaiFFZndFnRJ6fyLXEtxRwWLXW0rlYnGA2Cme5ufMQ1fS16pxB%2FqWXxJR0Q7aEliXMNRkDhsZCwqwjgQ%2FstmlO6h4Y8I2m4NGdpA8%2F5GvyqkaSJL48vwH3Y2zRShgiRG%2BMtPVZnPBs%2FjN9PGgHfG9Y7d8%2Fs9UTu5BJRn4gnQOgbsNRScitmewzw3fCRLtL0j35fRztORGV3RNwpOoP0mvUi3scN89U3g3knUTe9llHzhSznHSsFLoYSWeRhCK4FX0Q72KfDOLhoZD%2FywsMutFsXbMFVh%2FphH5smk3rZ%2F0CzshUr%2BtygVRdhi4uiK0caGs1DW5B9Rp3f%2Ft8t7Dd1L8kh9VqFVB0ppv7HRUCyqe%2FuQyi4RAvXIK67i0%2FXJpmPdE%2FSInSgkZEt0qzNWZ55P3w5p7PxxPrh9wm%2BoZJZXSDABF75QtC5N84XYdmwsrWyM%2FDSd%2Bh6prEh31i4Mwl0inZyzU9FdTz2WtNMLZZxxWHy93qHJ8onTlqqyVXRU6TR4xMjA0tzBTB1QzrRjNk8rXvtXE9BwL1UHRlGBdvs9sw1MqkwwY6pgGsmejACYCM4fXhEFswHMJd9hSy3Vc%2FIyzwawDEJ6U4574T5v8Yz40zXXr1PqVrMIa7IrEyW%2F24MorjnKY6HD6Tljx%2BClTkzXxnCfkB%2Fy6ak2PcAnmoXJo8HHOwScu7V4HKNI8rhBRYVGbIQK8Wp3R6QP2oAQEfWNt2je3uveV6VuFZQ3U5EJmxbRJpD2iORi74B6slPb5QhBRuyWxxccOPC6ZoUSHO&X-Amz-Signature=00efe4c295122a917f93150c1c8a26518dbcca7ce1589777e7b45303d69d1400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
