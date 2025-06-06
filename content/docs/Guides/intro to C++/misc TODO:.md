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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHAPNRV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyPXwxDrxTXRgn4wyy1TiYBlTdYTIvgu2uXIN0IR%2FWlAiA%2FjQpvVepBlWe8wC3sgHamkiw%2B7w0qHn%2FqXhem1CUzWCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMcdKOXUdyLyd7WbikKtwDI%2BXsqyrOsJfKqfIE3D1gLUEsrYUPVc%2B3W5fgg2pKVxZrGqtrRtJR9gwoNqGyyZtq%2F4LVmZRgfKMrFM4eJvZI9JT2NrKKljHfVwtmh%2FVFLIFTFbjMIwCI%2B8qet9rlH9PcHFhgfTtLRuo3CdU9ylEHnv%2B9clVL1Ck84PC10e0N3dloeym8AJm2yUgtfabWEgCj3pFOmWC2A7cJognPWlZXoKwsMJgVxrGh6bwIUbHblkqqfhiUqkoApACF2s3ZWX8kSvrTEfTtVxDu%2FLsA5bKDnzaejR050rgKp5NLgroAiAaCyCoNPs9y6zqwVwKS1epZ2wpZ5W1tEILFHfD99tmq5CtEsXRd0ws7nMVHckKZgc3X%2B%2BfWFlJv0H37YDZu3u%2B10EQ5C%2BgcX4flE7Ko9nDWjfQleRGaPwVOQyMaBzRutjhLN%2BY06hQzv%2BTyAsx9bxWodanC7zST7YvMRPWwNP16vWcWu14cUWGR57qqrNHdsvsuMe%2F%2BmGKMGpPKsKyASA5OTBYzdszkws5WYLRT4OHmzUA3XfbNVHndvM2ESGQxHESahJgV5QAbvYtH9fQQ9LL3ng88z0jAU710mIxmB8vMtJY1ArGawIkET2v%2FxLlXYWsT5vakeANaFZIayWAwm%2FGLwgY6pgHreL3mGLMuoT0OT4uzM3OGSdCjZTDy7%2FTQ89a2mCapd%2BFraPKRxVSIgw1Qbs%2F9LbOUKGh04ZY9F9bYAaLEBmM6sMQ7caHYycCGuCpTrIlHUcN%2B%2F%2FC16nzYY7Jn0gov8uSURNPO%2BCCV8fnvxENxVdzYDxuhP5v6VrbpAQobIyJQI8Bi1TT7ZMvjfxVinJbhqNfehDIbolfwIEIniU6Ief6HNdqEq98R&X-Amz-Signature=a0b9a4c5ac64d112cdb51f3d493513edcae827c38d7ed2aabd7dfe6ece1b4913&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHAPNRV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyPXwxDrxTXRgn4wyy1TiYBlTdYTIvgu2uXIN0IR%2FWlAiA%2FjQpvVepBlWe8wC3sgHamkiw%2B7w0qHn%2FqXhem1CUzWCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMcdKOXUdyLyd7WbikKtwDI%2BXsqyrOsJfKqfIE3D1gLUEsrYUPVc%2B3W5fgg2pKVxZrGqtrRtJR9gwoNqGyyZtq%2F4LVmZRgfKMrFM4eJvZI9JT2NrKKljHfVwtmh%2FVFLIFTFbjMIwCI%2B8qet9rlH9PcHFhgfTtLRuo3CdU9ylEHnv%2B9clVL1Ck84PC10e0N3dloeym8AJm2yUgtfabWEgCj3pFOmWC2A7cJognPWlZXoKwsMJgVxrGh6bwIUbHblkqqfhiUqkoApACF2s3ZWX8kSvrTEfTtVxDu%2FLsA5bKDnzaejR050rgKp5NLgroAiAaCyCoNPs9y6zqwVwKS1epZ2wpZ5W1tEILFHfD99tmq5CtEsXRd0ws7nMVHckKZgc3X%2B%2BfWFlJv0H37YDZu3u%2B10EQ5C%2BgcX4flE7Ko9nDWjfQleRGaPwVOQyMaBzRutjhLN%2BY06hQzv%2BTyAsx9bxWodanC7zST7YvMRPWwNP16vWcWu14cUWGR57qqrNHdsvsuMe%2F%2BmGKMGpPKsKyASA5OTBYzdszkws5WYLRT4OHmzUA3XfbNVHndvM2ESGQxHESahJgV5QAbvYtH9fQQ9LL3ng88z0jAU710mIxmB8vMtJY1ArGawIkET2v%2FxLlXYWsT5vakeANaFZIayWAwm%2FGLwgY6pgHreL3mGLMuoT0OT4uzM3OGSdCjZTDy7%2FTQ89a2mCapd%2BFraPKRxVSIgw1Qbs%2F9LbOUKGh04ZY9F9bYAaLEBmM6sMQ7caHYycCGuCpTrIlHUcN%2B%2F%2FC16nzYY7Jn0gov8uSURNPO%2BCCV8fnvxENxVdzYDxuhP5v6VrbpAQobIyJQI8Bi1TT7ZMvjfxVinJbhqNfehDIbolfwIEIniU6Ief6HNdqEq98R&X-Amz-Signature=052d5f7c37624adb4b6a8dd97f066bce61c2378c547b6d3c4f641401f01685f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
