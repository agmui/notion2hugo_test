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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDAP4UYF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvaZuSU%2FM4rFiWBX5PHT3VkkRCrlUQl64GdhBvA2%2FVpAiBTz77qqlAgGMIDs%2FYkuQ%2BjiPuHxEblMK7E8EbiIkANoir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMp72qp9Kax0gTAtKgKtwDVOlROjXh93ZPfmmiNN7Ljf2x3DlzS%2BbLVsION5ppQhLpkxlncazqfHfJOczSrztNsia%2Fk%2B4elGa6ieJrG4UshOVyuT4LffOi3LjsdoUNWSZjYqFOJPYybGAgFnWxn9LfsqT3Mfq2%2B4%2Bt8VCbX21HSQtpFOlfab1jLQ2Kvw7pAP7cF0K%2BcAAnJkhtS4Ea4b6Ar461nc%2BvfOq9SRgaMXa1LUTA%2FkYXGdkO5WbdJdCjtCjxPnS9HEdVfBBAZ3cSx9S%2FUZlevduZftuqI9JIq%2BXYkQs8nUBSXP4S%2FeJSayWPCgymib9GuxY76v6CB6GCoYTlIPNZjPOmiZ%2F3JtuzydqsP8dRx4%2FFgQHP4LwkNVM8vfjbl87YzKkhqDWyqiDvCt1%2F0DvERvQOGg3qwmNTUDv%2BWLKsxrbHxYaJbwo1OZ%2FdddoPhYedhg3sVFXb6D%2F90dncnr1i2%2BOrPxXep5Vq5OYvnjhWmJACjZtSEvHip58b0ZyR0qTIx0HpyNzce6aOJx92IWDRUrCzvBGLiL9yqs2pq2HsWyI%2Fwzo%2BBRU1Zlp37iwobGeGIDYwlraHfz9u0TQ4aKrwZS2awU1DQh%2Fv3JQUxDRUHV87bkSjz6hr4jwL3B6PRvhANCaalB4yG%2FIw%2FZCmvgY6pgGz9twhZ%2FHjNT%2Bo1qJafrPZ4L1JcqdwzFGLi7lOiCeKI6JtLt1cW%2BqYIhe76ws%2B%2FrEUAoXJj67mUw%2BT6UnfudMffBqAeAFwg%2F7wpnVIPxKNd0dYHjao4ABApnrgON2dPXm%2FtDrhjMc5cf5bHyvv7RWiGMNK8S4lmj8d8M4b3JareYaJangGB%2F2LQdqlDe%2B4duiNhvWcqIvISyWEAVMwNHYZ1pzsTIDo&X-Amz-Signature=88e180a5aa0c0c180354e43437ac98b102a3e9d1193cfb48f4789967b0954df7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDAP4UYF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvaZuSU%2FM4rFiWBX5PHT3VkkRCrlUQl64GdhBvA2%2FVpAiBTz77qqlAgGMIDs%2FYkuQ%2BjiPuHxEblMK7E8EbiIkANoir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMp72qp9Kax0gTAtKgKtwDVOlROjXh93ZPfmmiNN7Ljf2x3DlzS%2BbLVsION5ppQhLpkxlncazqfHfJOczSrztNsia%2Fk%2B4elGa6ieJrG4UshOVyuT4LffOi3LjsdoUNWSZjYqFOJPYybGAgFnWxn9LfsqT3Mfq2%2B4%2Bt8VCbX21HSQtpFOlfab1jLQ2Kvw7pAP7cF0K%2BcAAnJkhtS4Ea4b6Ar461nc%2BvfOq9SRgaMXa1LUTA%2FkYXGdkO5WbdJdCjtCjxPnS9HEdVfBBAZ3cSx9S%2FUZlevduZftuqI9JIq%2BXYkQs8nUBSXP4S%2FeJSayWPCgymib9GuxY76v6CB6GCoYTlIPNZjPOmiZ%2F3JtuzydqsP8dRx4%2FFgQHP4LwkNVM8vfjbl87YzKkhqDWyqiDvCt1%2F0DvERvQOGg3qwmNTUDv%2BWLKsxrbHxYaJbwo1OZ%2FdddoPhYedhg3sVFXb6D%2F90dncnr1i2%2BOrPxXep5Vq5OYvnjhWmJACjZtSEvHip58b0ZyR0qTIx0HpyNzce6aOJx92IWDRUrCzvBGLiL9yqs2pq2HsWyI%2Fwzo%2BBRU1Zlp37iwobGeGIDYwlraHfz9u0TQ4aKrwZS2awU1DQh%2Fv3JQUxDRUHV87bkSjz6hr4jwL3B6PRvhANCaalB4yG%2FIw%2FZCmvgY6pgGz9twhZ%2FHjNT%2Bo1qJafrPZ4L1JcqdwzFGLi7lOiCeKI6JtLt1cW%2BqYIhe76ws%2B%2FrEUAoXJj67mUw%2BT6UnfudMffBqAeAFwg%2F7wpnVIPxKNd0dYHjao4ABApnrgON2dPXm%2FtDrhjMc5cf5bHyvv7RWiGMNK8S4lmj8d8M4b3JareYaJangGB%2F2LQdqlDe%2B4duiNhvWcqIvISyWEAVMwNHYZ1pzsTIDo&X-Amz-Signature=144f226cbb850643b235f819675752b0699b556404c1aa1a4a5543ec0a045eff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
