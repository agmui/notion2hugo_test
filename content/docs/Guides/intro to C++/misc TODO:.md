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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22FHPDB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB2BMui0xEwa3X92GpGWO36mdXvGhOftMf1WQ9Tvwa6AIhAK2qtHwcculZ8mtreHDjmUNLwReNQIDVTeu7p9k%2BhYFeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoIhuNmbhmf1cOP%2BEq3AODVT9yuI7Q8C1jRM1IM0%2F9IvYxUs4HGDJMYXQUE8iOIJrCucycfkvqk%2FiGjFUmAU1Cs0cyvjn5UUkud3XMxYTZrmcKhpO54OSGH6zFRCquAaCPUXhVWeFPCVWuM38JQ5C00iVx0QdQgr91waY6moqDQjGaIgYVflyqmrOgqC7%2B2S3IS7jBI%2FE8Tcp0fKVJlbsLuBJlZkf2lFblaFfesSpMW01iV1%2FY1RGRPb0Q7tIjoCkOSR45QQHbNUV56QtJpPkvUSMMhcS56G07JXth%2FxKhFtqs7wu0XDSccqwj4OATNxF%2BLHf6d9z42nyXcMDP4%2BtaOvM9M8AdCzEieO5DpVFKu2b%2FlgXN4pSPgn3fwsvK6d%2BZKgAyvHAMWy%2FEKJmPgok6GQiSc5GknHQQdmhomurI%2BsdIhiqnP6%2FfnEKvC7KdPBWSfnaAG35L24gQlDKC8ogsbJnc09fLpFWPCzfK6lbQoS7dUwU6LNRb1UFtNg%2FdPg%2FkkTJ4TXrTixNz7mmfNdOgsQxf%2Fss%2F5O3GY979cYFHOzM2fRjIpeMmCR2PPS1kwmiTOp8HNvPfFV%2BY9fRP6rQlli5hTwBu2nV2uiKSva9Tv71pfyOokub43%2FhIvaBfhisdp4fhVWS%2FZjXsvTCg%2FoW%2FBjqkAccflW8GDs069WS%2FsI%2Fbp7TyZU8oTbJUEiDUf8blFSsbj0SQ9OMNR19o%2F%2FpwFmWfht1OV7W175rCjF%2BLxzWyussGllsp5dR7IcrRStHB%2FlC7OJgNfju2YnsFrKaJVpsauVAQVTuzdBX0Tz4bWPRGMkapEeXN0D66fOyTguWu%2BYOhuEeM0Boftf9Pfq%2FFyAA0Z0FZ0VJEZ6kOehnWULNquRsOtLzY&X-Amz-Signature=eb66755d07076ead8e6f471c5c62a29e0cd28b1e7a57310c42bb147a7a4a79c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22FHPDB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB2BMui0xEwa3X92GpGWO36mdXvGhOftMf1WQ9Tvwa6AIhAK2qtHwcculZ8mtreHDjmUNLwReNQIDVTeu7p9k%2BhYFeKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoIhuNmbhmf1cOP%2BEq3AODVT9yuI7Q8C1jRM1IM0%2F9IvYxUs4HGDJMYXQUE8iOIJrCucycfkvqk%2FiGjFUmAU1Cs0cyvjn5UUkud3XMxYTZrmcKhpO54OSGH6zFRCquAaCPUXhVWeFPCVWuM38JQ5C00iVx0QdQgr91waY6moqDQjGaIgYVflyqmrOgqC7%2B2S3IS7jBI%2FE8Tcp0fKVJlbsLuBJlZkf2lFblaFfesSpMW01iV1%2FY1RGRPb0Q7tIjoCkOSR45QQHbNUV56QtJpPkvUSMMhcS56G07JXth%2FxKhFtqs7wu0XDSccqwj4OATNxF%2BLHf6d9z42nyXcMDP4%2BtaOvM9M8AdCzEieO5DpVFKu2b%2FlgXN4pSPgn3fwsvK6d%2BZKgAyvHAMWy%2FEKJmPgok6GQiSc5GknHQQdmhomurI%2BsdIhiqnP6%2FfnEKvC7KdPBWSfnaAG35L24gQlDKC8ogsbJnc09fLpFWPCzfK6lbQoS7dUwU6LNRb1UFtNg%2FdPg%2FkkTJ4TXrTixNz7mmfNdOgsQxf%2Fss%2F5O3GY979cYFHOzM2fRjIpeMmCR2PPS1kwmiTOp8HNvPfFV%2BY9fRP6rQlli5hTwBu2nV2uiKSva9Tv71pfyOokub43%2FhIvaBfhisdp4fhVWS%2FZjXsvTCg%2FoW%2FBjqkAccflW8GDs069WS%2FsI%2Fbp7TyZU8oTbJUEiDUf8blFSsbj0SQ9OMNR19o%2F%2FpwFmWfht1OV7W175rCjF%2BLxzWyussGllsp5dR7IcrRStHB%2FlC7OJgNfju2YnsFrKaJVpsauVAQVTuzdBX0Tz4bWPRGMkapEeXN0D66fOyTguWu%2BYOhuEeM0Boftf9Pfq%2FFyAA0Z0FZ0VJEZ6kOehnWULNquRsOtLzY&X-Amz-Signature=00c28b93b94689ff3b19b304fd06dd2e9ea070620dca964cbc4e372c8e106958&X-Amz-SignedHeaders=host&x-id=GetObject)

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
