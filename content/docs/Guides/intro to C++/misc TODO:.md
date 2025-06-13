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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OY6AM5C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDXOTAVMmrvfK3QR7qJjl%2Fesii%2B9w%2F1%2F3yg6GcftMZPTQIhAJeiVzdiCsQtnjPpWczxljThX%2FfSJCaFpyu%2BUvEDjUT9KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy13VJ0o4vFtXap4Dcq3APv29%2FkmIpIUUFApgMLIiMPLjgBPhuqGxHHJU0UnM22nB5a8HN9uTotiydxHD6wgrytCuf265HtL9wvDMyWIBKf%2FNd%2FPxu5StCzFU1nudxa364AVmqMtecVDjRmn4VTYlCmkQ6CNNXO6kKBoODGLs9PCDjUXU%2FbWvJ2SlVAy3qMF8pdZDAZB%2F5a6zLdQY%2BzQyFhv7nmKEiLFYdAftoX2LihUjpf0C8NQUm3WALpIkazpdNwV2VfDlaWo1SzVYTzVSuxxVMciMDFpBaX6DBX5yglLIf9AOrv7zXLSfyHRkba0OxLh8kr3KyCbLbXoYTbXnd337NBXkPcGDrlPmovkoF%2F%2F8t6iat3kLj%2FcOtR1hwseWS%2BnJgAvppBH7oqC85nCmLcGsOgjxFZnuoV9QfUCmSiexWJF0sORc8YEcGeSV1J4Lmfrf6dkMMVkus6XRqYCHKiXs2MwelIZAyHS8EFsd5GIi773W9%2BO6H8th1hGXDIc%2FkDP5oBNGy%2FaHmFnugRj4H3QLTjxlD8YMDOMtObikIFaAQcYJKmOBnwIrkHMOWcSBLq%2FJgxV1TGa%2FTHXiDURixo7D91%2FVHGUjhJ9m8PDu9hqq8ae%2FUO4ICSywiaVKIUCFXvuLIqFMWb4j62UTDb0a7CBjqkAQVcDMXoFTRMRc5fwtYBHdv%2F%2BBXSWXJ3Q%2BjMXW6OEdSK0S7TV0dIoEmrR6qnPIU5KeaXxCOz28jPeEffQyI9CFD3sDb88HJKUjcZMEWgBn7XfglqVROZ3Z8k996Bu3wCvdj22Ck7xx8jeeNJ%2FhCpINH7j1wjZukSH5wRSNnCuKXg9MTis3Tpwa5C7L5YADu%2Bnvia0K4vtZ%2ByGWRWpSl7DlgD61By&X-Amz-Signature=62c3fbc89da70106ccafc42282dc8fc0a53e63ae5e3ab5f87bbe7d76595d10ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OY6AM5C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDXOTAVMmrvfK3QR7qJjl%2Fesii%2B9w%2F1%2F3yg6GcftMZPTQIhAJeiVzdiCsQtnjPpWczxljThX%2FfSJCaFpyu%2BUvEDjUT9KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy13VJ0o4vFtXap4Dcq3APv29%2FkmIpIUUFApgMLIiMPLjgBPhuqGxHHJU0UnM22nB5a8HN9uTotiydxHD6wgrytCuf265HtL9wvDMyWIBKf%2FNd%2FPxu5StCzFU1nudxa364AVmqMtecVDjRmn4VTYlCmkQ6CNNXO6kKBoODGLs9PCDjUXU%2FbWvJ2SlVAy3qMF8pdZDAZB%2F5a6zLdQY%2BzQyFhv7nmKEiLFYdAftoX2LihUjpf0C8NQUm3WALpIkazpdNwV2VfDlaWo1SzVYTzVSuxxVMciMDFpBaX6DBX5yglLIf9AOrv7zXLSfyHRkba0OxLh8kr3KyCbLbXoYTbXnd337NBXkPcGDrlPmovkoF%2F%2F8t6iat3kLj%2FcOtR1hwseWS%2BnJgAvppBH7oqC85nCmLcGsOgjxFZnuoV9QfUCmSiexWJF0sORc8YEcGeSV1J4Lmfrf6dkMMVkus6XRqYCHKiXs2MwelIZAyHS8EFsd5GIi773W9%2BO6H8th1hGXDIc%2FkDP5oBNGy%2FaHmFnugRj4H3QLTjxlD8YMDOMtObikIFaAQcYJKmOBnwIrkHMOWcSBLq%2FJgxV1TGa%2FTHXiDURixo7D91%2FVHGUjhJ9m8PDu9hqq8ae%2FUO4ICSywiaVKIUCFXvuLIqFMWb4j62UTDb0a7CBjqkAQVcDMXoFTRMRc5fwtYBHdv%2F%2BBXSWXJ3Q%2BjMXW6OEdSK0S7TV0dIoEmrR6qnPIU5KeaXxCOz28jPeEffQyI9CFD3sDb88HJKUjcZMEWgBn7XfglqVROZ3Z8k996Bu3wCvdj22Ck7xx8jeeNJ%2FhCpINH7j1wjZukSH5wRSNnCuKXg9MTis3Tpwa5C7L5YADu%2Bnvia0K4vtZ%2ByGWRWpSl7DlgD61By&X-Amz-Signature=227726b6907a3779cd652a01f899c0cf714b93e321bb036f930a8f27736e8961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
