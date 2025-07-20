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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3UDUYDD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4IeEh6IUjx7mLPHlNqV1kUYIQ9zkoma396oOxJguBwIhALUUfidfnsQUTxtaodiuukaMS6NZCkQ%2FlGbxsuq5i%2BaVKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwjj5ROpv0tSkWEnlwq3APYKMTe6uuDZHKlVMTkzqETVi1jAK2mVeF56gE55YD2O%2BD1FkkLQY012MPCgXN1gaVUt5qdm2vE0qewS4LY0ubSZ6aaXER0dAWOmdN2fU39z0hHwTXgcDTcXono9LqiDfyQk5%2BJfASyofFLQ8oe70rqaueFKci9N9O2JoEYEao14jxrPCyXClrbGf9sJSOwMs2jNSWXZqVHz6L8k%2Bux8IRvEcrf%2BbzIlCIS%2B%2FC0JFuSQr1X61OW9EhZkGU3j8wFrUcDNfsVRiKxjiEEo%2Bd9BPfRoAP0tsKOcA8R4vRxt1aZt23jFKMEQxXM13X1Ta1rNTepmxPXokmpiNdcJxgrB18zB5QsaSJy75NnkwSZDL2Y1LLE7IT8K%2FquPc%2FGxdbx7G7iT%2B8L7EgMMUXG2a2nqk7rcpv5s6xOIaiLCBlxn0TyEK31ncE6lnRHbHB0SvNcWOoKNywTgSpFcQQ1qSNQHn0X1DITz8QHFsO6pLkriz129QOv7eIeFCQ442fjUf6FH934%2FKEIHjd2JlaFBlmK2yvfAY4kSDD0vpj2Xl2u%2FGfAe3Xd%2FwzNfAyYV9pC5855Pq5BZBabOavFRcENkpHcLFl29rN0JKox2o3vF%2Bd%2Fc6SP3V3muNRwUa8rZlGIbDCt%2F%2FTDBjqkAQEYJOHjjG4ulm%2B3tyfX3JVF%2FauPYHeN6APrzSSYeCgNLucaHmRRuTX%2FGuEpIy%2BTVRBkvo%2BM4899g6jU6kIQAwHd4Ey9fU6BeWxGxb1ZRK00BfcrLw08jc1Hnm2Yw7RR4NQnVzMx2n5%2FmkV987gMnH%2FPygiNFr9SYZEPRTCPdA1n4MGEIaFS1c110U%2BKvE5iBZ6qlZlRAxEiIMXAuksE62u8Vfl%2F&X-Amz-Signature=53edefb21f517555f34dc42c5bf794c673d007fd24f5931884a82f3a66222f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3UDUYDD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4IeEh6IUjx7mLPHlNqV1kUYIQ9zkoma396oOxJguBwIhALUUfidfnsQUTxtaodiuukaMS6NZCkQ%2FlGbxsuq5i%2BaVKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwjj5ROpv0tSkWEnlwq3APYKMTe6uuDZHKlVMTkzqETVi1jAK2mVeF56gE55YD2O%2BD1FkkLQY012MPCgXN1gaVUt5qdm2vE0qewS4LY0ubSZ6aaXER0dAWOmdN2fU39z0hHwTXgcDTcXono9LqiDfyQk5%2BJfASyofFLQ8oe70rqaueFKci9N9O2JoEYEao14jxrPCyXClrbGf9sJSOwMs2jNSWXZqVHz6L8k%2Bux8IRvEcrf%2BbzIlCIS%2B%2FC0JFuSQr1X61OW9EhZkGU3j8wFrUcDNfsVRiKxjiEEo%2Bd9BPfRoAP0tsKOcA8R4vRxt1aZt23jFKMEQxXM13X1Ta1rNTepmxPXokmpiNdcJxgrB18zB5QsaSJy75NnkwSZDL2Y1LLE7IT8K%2FquPc%2FGxdbx7G7iT%2B8L7EgMMUXG2a2nqk7rcpv5s6xOIaiLCBlxn0TyEK31ncE6lnRHbHB0SvNcWOoKNywTgSpFcQQ1qSNQHn0X1DITz8QHFsO6pLkriz129QOv7eIeFCQ442fjUf6FH934%2FKEIHjd2JlaFBlmK2yvfAY4kSDD0vpj2Xl2u%2FGfAe3Xd%2FwzNfAyYV9pC5855Pq5BZBabOavFRcENkpHcLFl29rN0JKox2o3vF%2Bd%2Fc6SP3V3muNRwUa8rZlGIbDCt%2F%2FTDBjqkAQEYJOHjjG4ulm%2B3tyfX3JVF%2FauPYHeN6APrzSSYeCgNLucaHmRRuTX%2FGuEpIy%2BTVRBkvo%2BM4899g6jU6kIQAwHd4Ey9fU6BeWxGxb1ZRK00BfcrLw08jc1Hnm2Yw7RR4NQnVzMx2n5%2FmkV987gMnH%2FPygiNFr9SYZEPRTCPdA1n4MGEIaFS1c110U%2BKvE5iBZ6qlZlRAxEiIMXAuksE62u8Vfl%2F&X-Amz-Signature=2260a331615296943ace87581d41ec70de13a2bb06652548bd24b983d469b8dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
