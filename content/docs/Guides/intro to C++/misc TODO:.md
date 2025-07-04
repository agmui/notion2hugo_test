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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSQDDY6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDjdIbCvJmYvy8%2B642Eryf%2FCIBwNMZehBelB5me8UGOSAiAH5EGH1pjwEOYoyYcSjBmCDHxXRTQy%2FLaKQyXZ00UXSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMnD%2FTh5VH99Sku0D4KtwDQqms%2B2CVXkSVIF1elxUQqse8JmLfA%2BCBxgVzgPpStcNquvDYKV4B4d53ABwHjgNrNNMEWh9ex0ZejXBHiwr5zle%2BlE1undjEpI%2FREhD64622baM1MKJztqe8ZNP5JdJ0EqsKe3fxBYJ4l2ONpzP%2FhifqU0xvHjGfiB%2FtPNdgH4w8X8FJ1y2%2FPXhC%2Bb3sTtp5mSEN8DJMwXLNWJm2nlfZVh7DQrvXfsMINjL19j5wr8PRijrqccLOqv%2FnDHzGhyUoguRQF8vFy%2BIHl50gSqRqJPc%2FNdr2hKVhJWWpD639BrT2ap1ZU6vS0N5aBs82SOVHH9GGcbVITaPKEIV%2BoNMoLR1wwfCeTblrLQFMJ45%2FYWBO6sohZ7snZJ%2F2X%2BGrl4nW7HV7HBROBzDHtuZ12TegR6qgpMmqoFX4pv9E4ljpK4R%2BxhFw2jbGEXaghiSr7iVp9%2FIi54lq6NgBaJk02FoGIErRP1xXx8KHEILbhvFBe4bGgyS8NeJXWfInM9fg0DN2H2%2BFUR76m2M1N%2BUGrGSkc2ulEe1erW60GDR9E9eGzMqJmMVeaKdQFvGDNvJNIC6L93ACh%2FIROdJPrO6NkOGcpo2hdJoU1%2B58MX1FDzL%2BY2hEGh69qsCs5Wdjl40wtpyfwwY6pgFK9dskXI%2BOFVWPE4X3doeE3jFvVPHWSWVpddgWQ6VcnjXnktbaItuPgu1%2Fp%2FcdVF0TpeXKoDouU7FcsUAX4jXTtMAHltPcVsZ%2BWjqOetkJQZlK61lcRwysFdsPIxxctmRwbKvH3%2FeKRQkb5mcdBih4RTX9Dpk37eMeXHC7uW57vqhPXTmeJS%2BJu0Cs94vSYGivHVUhTEFA0k%2FLPnkEhl2OsXtBoI7K&X-Amz-Signature=74f2a1a2b67d8c07a00ee47974a76b2a2b1a63817e904f565d8648798b5ea70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSQDDY6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDjdIbCvJmYvy8%2B642Eryf%2FCIBwNMZehBelB5me8UGOSAiAH5EGH1pjwEOYoyYcSjBmCDHxXRTQy%2FLaKQyXZ00UXSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMnD%2FTh5VH99Sku0D4KtwDQqms%2B2CVXkSVIF1elxUQqse8JmLfA%2BCBxgVzgPpStcNquvDYKV4B4d53ABwHjgNrNNMEWh9ex0ZejXBHiwr5zle%2BlE1undjEpI%2FREhD64622baM1MKJztqe8ZNP5JdJ0EqsKe3fxBYJ4l2ONpzP%2FhifqU0xvHjGfiB%2FtPNdgH4w8X8FJ1y2%2FPXhC%2Bb3sTtp5mSEN8DJMwXLNWJm2nlfZVh7DQrvXfsMINjL19j5wr8PRijrqccLOqv%2FnDHzGhyUoguRQF8vFy%2BIHl50gSqRqJPc%2FNdr2hKVhJWWpD639BrT2ap1ZU6vS0N5aBs82SOVHH9GGcbVITaPKEIV%2BoNMoLR1wwfCeTblrLQFMJ45%2FYWBO6sohZ7snZJ%2F2X%2BGrl4nW7HV7HBROBzDHtuZ12TegR6qgpMmqoFX4pv9E4ljpK4R%2BxhFw2jbGEXaghiSr7iVp9%2FIi54lq6NgBaJk02FoGIErRP1xXx8KHEILbhvFBe4bGgyS8NeJXWfInM9fg0DN2H2%2BFUR76m2M1N%2BUGrGSkc2ulEe1erW60GDR9E9eGzMqJmMVeaKdQFvGDNvJNIC6L93ACh%2FIROdJPrO6NkOGcpo2hdJoU1%2B58MX1FDzL%2BY2hEGh69qsCs5Wdjl40wtpyfwwY6pgFK9dskXI%2BOFVWPE4X3doeE3jFvVPHWSWVpddgWQ6VcnjXnktbaItuPgu1%2Fp%2FcdVF0TpeXKoDouU7FcsUAX4jXTtMAHltPcVsZ%2BWjqOetkJQZlK61lcRwysFdsPIxxctmRwbKvH3%2FeKRQkb5mcdBih4RTX9Dpk37eMeXHC7uW57vqhPXTmeJS%2BJu0Cs94vSYGivHVUhTEFA0k%2FLPnkEhl2OsXtBoI7K&X-Amz-Signature=12d40c0af86f647bfd3831ea1b6bba75275d623e4109e6f385c1c6519fa11a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
