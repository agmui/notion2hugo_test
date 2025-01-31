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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33YMFYS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeIs7DA1XFPX1YYx6pdL3fpR0i1VWnx7csWOS6vos0QAiAkeBTNS5KGbmrm6ji5anK1JqdZa1kAE%2FTnOFMgqyqM5yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwnrNQB2WMniNzSnKtwDTpf0bRKe6pTuzz7S7cIi0fvvyGvIS1OrXijnFwrYU057r4nPdqyuVR0JFc5LrIAppT5S1FrpzMDvfVrvNFuy9QC4XflcUHzWoj%2Bf%2FSI664RYY%2FcdsX3YuNh6TWXG%2BzP5lJqVDe%2F2suIanEBeLeGjCW0ngNZ53VbHfSqQrYDPJOaU6SBtuMXMeYhro3kSGZkj9e4XWhpox93pLCjmrNRgEGR0ncS0aGBctrDy1OTp97qYDsIJ%2BbtgQE1WfIBXo0QFccqS7UQ5XqhmNWlbeXYSN1rwdBhErJwTVIy1X7P9rLsiS%2Fbm2Bus%2BgsrQokHLAZ5q06s%2F7eixwY9iYwS38ipAcbBS%2FPURC9CA5UXkEQRSfvJysLDr0ibZRN69X4Hk5JLRXgtN3N7ZuQJDOxTqVvvSdE7YiXcSnE6%2BGU214DbdWT1fFkbO4yhfZpNiZ88k1ChBbu5bs1ZBfKnD4TmhUuvVejg%2BbTXSAyd4CFiqf9L9ORlqQdhtcHKGxk8zWY4FaID85fh3B7OpHxogPaxTfGiGGQi2mbcDoG1RQusM0TkaNyOzcOi3T3uH72NREZgG3zkoZZljuyMT2q%2BB5sNm4hN8se4Fm2tRz4yJarmlCSJrRl7m8WCJmKS8y9z%2BaIwoaX0vAY6pgH3vrnmCHFfkFqCIv7WgRTnC1uhliQJCydQvextMso3ZcixF4BH2NIP0x%2FJCP40ATseJW3Sl7WD%2FcIKkNT1r6VT%2BiOCafe7Os4guf9T1qTKsyozPywPfcqRjDvhpBITnU%2BsWjd%2F5XZVakLPmLtZcwlBLyTWEAaNNOKiryun%2BKUZ8fsuu3tbFRDnM9dmTAmfyBhF8CfN3M7LHlYEymPMpxSTXLOHKEMR&X-Amz-Signature=781f86e95dbd2cb0f65d5331f7d0b48074198ae2f35df0896de3af181f0f5019&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33YMFYS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeIs7DA1XFPX1YYx6pdL3fpR0i1VWnx7csWOS6vos0QAiAkeBTNS5KGbmrm6ji5anK1JqdZa1kAE%2FTnOFMgqyqM5yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPwnrNQB2WMniNzSnKtwDTpf0bRKe6pTuzz7S7cIi0fvvyGvIS1OrXijnFwrYU057r4nPdqyuVR0JFc5LrIAppT5S1FrpzMDvfVrvNFuy9QC4XflcUHzWoj%2Bf%2FSI664RYY%2FcdsX3YuNh6TWXG%2BzP5lJqVDe%2F2suIanEBeLeGjCW0ngNZ53VbHfSqQrYDPJOaU6SBtuMXMeYhro3kSGZkj9e4XWhpox93pLCjmrNRgEGR0ncS0aGBctrDy1OTp97qYDsIJ%2BbtgQE1WfIBXo0QFccqS7UQ5XqhmNWlbeXYSN1rwdBhErJwTVIy1X7P9rLsiS%2Fbm2Bus%2BgsrQokHLAZ5q06s%2F7eixwY9iYwS38ipAcbBS%2FPURC9CA5UXkEQRSfvJysLDr0ibZRN69X4Hk5JLRXgtN3N7ZuQJDOxTqVvvSdE7YiXcSnE6%2BGU214DbdWT1fFkbO4yhfZpNiZ88k1ChBbu5bs1ZBfKnD4TmhUuvVejg%2BbTXSAyd4CFiqf9L9ORlqQdhtcHKGxk8zWY4FaID85fh3B7OpHxogPaxTfGiGGQi2mbcDoG1RQusM0TkaNyOzcOi3T3uH72NREZgG3zkoZZljuyMT2q%2BB5sNm4hN8se4Fm2tRz4yJarmlCSJrRl7m8WCJmKS8y9z%2BaIwoaX0vAY6pgH3vrnmCHFfkFqCIv7WgRTnC1uhliQJCydQvextMso3ZcixF4BH2NIP0x%2FJCP40ATseJW3Sl7WD%2FcIKkNT1r6VT%2BiOCafe7Os4guf9T1qTKsyozPywPfcqRjDvhpBITnU%2BsWjd%2F5XZVakLPmLtZcwlBLyTWEAaNNOKiryun%2BKUZ8fsuu3tbFRDnM9dmTAmfyBhF8CfN3M7LHlYEymPMpxSTXLOHKEMR&X-Amz-Signature=ca2d08e90671a2ec5a2528cb7b074cd03f696386eb1e4892630786e604bfce54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
