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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4JYJKD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEqDZxUFTRn4Eirx5klmrNGQ40tlykc7GcY9xlYNuWusAiB3HpxFimcf48zRt0kvx%2F71nG6IGDqKABK2CEPFK2%2BDoCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMLWa1cU5n7PvjdTDZKtwDfvry%2FWtNlSdEWxuDSNsM6LHzAzXtMytW1Q%2Bl6Vm7EFR5RajXzdsB%2BDVF2cEBqnI%2FA%2BZcT2lOpEwmSmIbCt1%2F4kW%2FlirCYoSAJ7NyEVsAXmx0xarbrFuKrJILDLo6kzf9cQ52gpX51tYSoSM8zQPepAJzuFvZhkfJc%2BVf9f1%2FLE%2BThMu3i0XvgzuC3y6McX%2FYbFZebMr2l4FDqclixu6hLSZ4siizATKvMl%2FNd4T3Kls2HzG1CpKdQid0LE2RSiwJy2QvmR3cgcsdx9aaQV65jWBJsEOjX%2Bs0%2BVcWJTXIuDeapPIUjO5ms43x%2BdPTvpVXODaz2t4rx0q755pUusOkxR%2FWS7JmuVdycFuzG2m5WKdh5i%2Bo3VUqVeU595TET4E5pDlXZ6RXD8KY0p%2FHASylCqNIsPMw9wiylUy%2FW86B9OpA%2FS2fIvW28D7QWdPkOabQKVHmvG5rarpr4cYStz8%2FT1AMxGQVgBsUwtAc%2FSOWITdfiwyr5pmena995JDT3wQzvN8a7RoJGBu%2B2YzDgWDdy2CrJOdg47mYlS%2FBLX0U0citqxJaBiIbViVMWA78aaEAk%2BVRh2Ny9phkPhXumqa9w0Z1YFx3er%2BzHajGKay4A389WdLoE5217cZJXJIw68jAwgY6pgEuUc6EDN%2FNUtN0Z0pK4g8%2F47Qe2AGU9Ufyxnjz1I6DCXT1kbrr749uMb5o%2BTmIwNyvJhAo7PuxqJNEGpCQghvJpSnY40B6%2Fkr36xTNGD8CzC7IEk9IVx3%2FWL4vCtAFHLCKSao6yZtyIk2sfvOKWmlLJV8r7kRvH0eBsvcXIFS75OJzrc6azvM%2FcAJJf9y7dYDy8SIJGuyObcI3m3T2pxVJjI3LOGdJ&X-Amz-Signature=a8838c04d0270c0716205a7d52520ca262b9cba154875215b6cb37b3f61adcc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4JYJKD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEqDZxUFTRn4Eirx5klmrNGQ40tlykc7GcY9xlYNuWusAiB3HpxFimcf48zRt0kvx%2F71nG6IGDqKABK2CEPFK2%2BDoCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMLWa1cU5n7PvjdTDZKtwDfvry%2FWtNlSdEWxuDSNsM6LHzAzXtMytW1Q%2Bl6Vm7EFR5RajXzdsB%2BDVF2cEBqnI%2FA%2BZcT2lOpEwmSmIbCt1%2F4kW%2FlirCYoSAJ7NyEVsAXmx0xarbrFuKrJILDLo6kzf9cQ52gpX51tYSoSM8zQPepAJzuFvZhkfJc%2BVf9f1%2FLE%2BThMu3i0XvgzuC3y6McX%2FYbFZebMr2l4FDqclixu6hLSZ4siizATKvMl%2FNd4T3Kls2HzG1CpKdQid0LE2RSiwJy2QvmR3cgcsdx9aaQV65jWBJsEOjX%2Bs0%2BVcWJTXIuDeapPIUjO5ms43x%2BdPTvpVXODaz2t4rx0q755pUusOkxR%2FWS7JmuVdycFuzG2m5WKdh5i%2Bo3VUqVeU595TET4E5pDlXZ6RXD8KY0p%2FHASylCqNIsPMw9wiylUy%2FW86B9OpA%2FS2fIvW28D7QWdPkOabQKVHmvG5rarpr4cYStz8%2FT1AMxGQVgBsUwtAc%2FSOWITdfiwyr5pmena995JDT3wQzvN8a7RoJGBu%2B2YzDgWDdy2CrJOdg47mYlS%2FBLX0U0citqxJaBiIbViVMWA78aaEAk%2BVRh2Ny9phkPhXumqa9w0Z1YFx3er%2BzHajGKay4A389WdLoE5217cZJXJIw68jAwgY6pgEuUc6EDN%2FNUtN0Z0pK4g8%2F47Qe2AGU9Ufyxnjz1I6DCXT1kbrr749uMb5o%2BTmIwNyvJhAo7PuxqJNEGpCQghvJpSnY40B6%2Fkr36xTNGD8CzC7IEk9IVx3%2FWL4vCtAFHLCKSao6yZtyIk2sfvOKWmlLJV8r7kRvH0eBsvcXIFS75OJzrc6azvM%2FcAJJf9y7dYDy8SIJGuyObcI3m3T2pxVJjI3LOGdJ&X-Amz-Signature=3aec9cad7d9128da656e49e9da1044b0b6018dc2e55e5fed4ee61d57b06a5f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
