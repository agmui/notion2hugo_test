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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2I7BU7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDo630FiYWzDzhUMk0ogWAXDH5a2jvwlu3alqJ8TUOEAiAzs%2BZY8yrhFHHbUiTTL30jSV2s%2FIygZ8%2FYvMsciszZhyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNgH1h7LaX3CvjKgKtwD9K9Wk3pkpt2chm4ZcWWO88KH3dSLsRJAl3ZEZWVEUywgiiyRsjZC8Ht%2FKIgTQu2wLecs92ib6QMp8A0Bslx92wVV40kg9d3mewKL53xd8rBbz%2FOTR5CK1Ny%2F4Y9FqpzaZFfxd099VCHoDO%2FeASIyTPnnQ63tu5buY9r1%2FoJIbQbe2XbhFTWPZwpeIlrqLt0qfWBJXi9O81O2MhChHlzpcEXfsBbDAdspb7JmleETfEWcE5jRmF29To7iKhl5Zy7YqNyop00ixqkNv0zUZhX6yviq6roYpRNld8WQZRVFFY%2Bla%2FBTxfWGo3HxpFclF%2Bt9bCn8OS7L0BXJzBbXp3Le1zx0ZJZ6Zuz4FAa04oDRAb3rJJxVTfPj2bfXw4ayOTwqtV4rtirEG8Eh42SVN%2BrIPsGCJm2uRSkDm4u%2FyBgzl5NuqUt0cF2c19sLKoaVxv7FwTH6b1b2H75RN0hsi92M3Bdp6TGcI381%2BnrXosCH5UqBRPP42%2F%2FXD2N14nyQOY%2B%2FdfTHYvnSP%2BqFlIgC%2F8PewZKFU5rVtdyyWZTVoqQNxTNXtyk%2F%2BoCIFvgNRtsKodQgKaS%2Ftl0S3XhkU5kkP0bb995TU1sDfIICynfUX637rtaBitEOug9yOMOUZCEwgsL4vAY6pgEvSxYDcyxanHh%2Bvq6IMp0jsJWjtWNg3yHkUYEnIA0%2FhuSNvt8OZJ%2FkdrNcPuHD9ASkNB5FAnTglFUUt0H14KDVCuQ5qo7M0ug1RKLL5PVs3p3of0UDB7uzBvbtIecK0MwTJtmHkXR5uZ3TuIOV7e93VcLAxYqStw1nUsa0vhdyW3R6jlEoFe2fKYvmVYzVdNuxKGfwfdciJsmGmyGm1nUQp8qaJdBg&X-Amz-Signature=eafdff17a4a9ddde49899f304ef026cd52385a27cb89b0ec956375c3ec78f6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2I7BU7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDo630FiYWzDzhUMk0ogWAXDH5a2jvwlu3alqJ8TUOEAiAzs%2BZY8yrhFHHbUiTTL30jSV2s%2FIygZ8%2FYvMsciszZhyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNgH1h7LaX3CvjKgKtwD9K9Wk3pkpt2chm4ZcWWO88KH3dSLsRJAl3ZEZWVEUywgiiyRsjZC8Ht%2FKIgTQu2wLecs92ib6QMp8A0Bslx92wVV40kg9d3mewKL53xd8rBbz%2FOTR5CK1Ny%2F4Y9FqpzaZFfxd099VCHoDO%2FeASIyTPnnQ63tu5buY9r1%2FoJIbQbe2XbhFTWPZwpeIlrqLt0qfWBJXi9O81O2MhChHlzpcEXfsBbDAdspb7JmleETfEWcE5jRmF29To7iKhl5Zy7YqNyop00ixqkNv0zUZhX6yviq6roYpRNld8WQZRVFFY%2Bla%2FBTxfWGo3HxpFclF%2Bt9bCn8OS7L0BXJzBbXp3Le1zx0ZJZ6Zuz4FAa04oDRAb3rJJxVTfPj2bfXw4ayOTwqtV4rtirEG8Eh42SVN%2BrIPsGCJm2uRSkDm4u%2FyBgzl5NuqUt0cF2c19sLKoaVxv7FwTH6b1b2H75RN0hsi92M3Bdp6TGcI381%2BnrXosCH5UqBRPP42%2F%2FXD2N14nyQOY%2B%2FdfTHYvnSP%2BqFlIgC%2F8PewZKFU5rVtdyyWZTVoqQNxTNXtyk%2F%2BoCIFvgNRtsKodQgKaS%2Ftl0S3XhkU5kkP0bb995TU1sDfIICynfUX637rtaBitEOug9yOMOUZCEwgsL4vAY6pgEvSxYDcyxanHh%2Bvq6IMp0jsJWjtWNg3yHkUYEnIA0%2FhuSNvt8OZJ%2FkdrNcPuHD9ASkNB5FAnTglFUUt0H14KDVCuQ5qo7M0ug1RKLL5PVs3p3of0UDB7uzBvbtIecK0MwTJtmHkXR5uZ3TuIOV7e93VcLAxYqStw1nUsa0vhdyW3R6jlEoFe2fKYvmVYzVdNuxKGfwfdciJsmGmyGm1nUQp8qaJdBg&X-Amz-Signature=c6772dd507d5d534a401ee4e4c82ad0af633893c90afef3f60dd5a0d8033034d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
