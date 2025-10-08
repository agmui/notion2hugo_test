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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJGRIGT%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID%2FjJ4gKBptjESeRGoo0%2FScd82XLjnB8bVkVTehP0Sm4AiAmI9ow6bj34%2FhFga7Sr73ax98QEArL9eFIWBcSy64LhCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnK7tmMzFsMYlm47VKtwDYdqCBT7oAm%2BeHZR0ljssMIdsgrwJAjq%2By7rsI6IptJrFzoCDSRlEwI3Q1kckpLwAeD42y47c%2FMEaAqze4Ohk%2F9wd%2Fns7grLA2rUdiaIiRNjqBlny0kiippdK8BlyVuJ3DFTEnuviJLuB9uFyLuPd%2FCA4K%2Buf30g0e0bzatPqGPH14UhfZD7YaPv%2Bi7hfgxKnNmRFVbMcMlymgxMIVLaW5Li5gY6Pg29%2BOx4lX5o%2FSS2pSxLeeb68uvTYIvSSQxfyrCctT6HwVgwZiH%2FZ6G3q0pga09NF5Pix%2FTPz2sOTIPszQ%2F0o%2BTuDPuuWpo8RijYW81mqc9PMs63DwK7s9BQFdwBSIgmq4OHux6ErHR1Wjg%2F5QrLzGAXyGoNge0xLSVh1YEfBJrw8ft3LUx8QPgh4cQ%2FBVR%2Fz7Jy48ZRx9H6nNUFPfiGmKclQhK3D2WXfKbk82tRxLL8%2FlGi2HiOSmrGLOkciGueZwK%2BFvK7NypRx9p2%2BbVaqPfOGL9IAQbuQb3mYV5C2adCynMLbacRJ0x1KDYfD45JFYwjnpVofNfnsVA2G6pthJI%2BrOWZivayvNeXYkzy84ALuuwOn3Be2ZMmcmoQme0aSqXvevNE7AkRb0j45w9Ra%2FvPOQEiyg4Yw0ueWxwY6pgFYPytg7lgoC4uTO5Ar4rloZh78vENncD9kQQrFrRQoIyor890Q4pXF3%2BRKuIFUbEf2MLXaWfdXvo2vC%2BfXTjUplQqKUB2m150yKgIOg7X0hzXrg2GVXDd3kzA49pTAtkidQCgn0h1sx53hSWF7%2BU0Fn6twCUyitIPsyaY0MaOEffeXQWSOX2eVjl45YVhrFbYAfFrJkmsv68z9%2FJOjGglPRFUNEHwZ&X-Amz-Signature=8999b11876d3f5482135e33e89294149d1f4db012d7e18b6a3e7a8a51ff71eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJGRIGT%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID%2FjJ4gKBptjESeRGoo0%2FScd82XLjnB8bVkVTehP0Sm4AiAmI9ow6bj34%2FhFga7Sr73ax98QEArL9eFIWBcSy64LhCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnK7tmMzFsMYlm47VKtwDYdqCBT7oAm%2BeHZR0ljssMIdsgrwJAjq%2By7rsI6IptJrFzoCDSRlEwI3Q1kckpLwAeD42y47c%2FMEaAqze4Ohk%2F9wd%2Fns7grLA2rUdiaIiRNjqBlny0kiippdK8BlyVuJ3DFTEnuviJLuB9uFyLuPd%2FCA4K%2Buf30g0e0bzatPqGPH14UhfZD7YaPv%2Bi7hfgxKnNmRFVbMcMlymgxMIVLaW5Li5gY6Pg29%2BOx4lX5o%2FSS2pSxLeeb68uvTYIvSSQxfyrCctT6HwVgwZiH%2FZ6G3q0pga09NF5Pix%2FTPz2sOTIPszQ%2F0o%2BTuDPuuWpo8RijYW81mqc9PMs63DwK7s9BQFdwBSIgmq4OHux6ErHR1Wjg%2F5QrLzGAXyGoNge0xLSVh1YEfBJrw8ft3LUx8QPgh4cQ%2FBVR%2Fz7Jy48ZRx9H6nNUFPfiGmKclQhK3D2WXfKbk82tRxLL8%2FlGi2HiOSmrGLOkciGueZwK%2BFvK7NypRx9p2%2BbVaqPfOGL9IAQbuQb3mYV5C2adCynMLbacRJ0x1KDYfD45JFYwjnpVofNfnsVA2G6pthJI%2BrOWZivayvNeXYkzy84ALuuwOn3Be2ZMmcmoQme0aSqXvevNE7AkRb0j45w9Ra%2FvPOQEiyg4Yw0ueWxwY6pgFYPytg7lgoC4uTO5Ar4rloZh78vENncD9kQQrFrRQoIyor890Q4pXF3%2BRKuIFUbEf2MLXaWfdXvo2vC%2BfXTjUplQqKUB2m150yKgIOg7X0hzXrg2GVXDd3kzA49pTAtkidQCgn0h1sx53hSWF7%2BU0Fn6twCUyitIPsyaY0MaOEffeXQWSOX2eVjl45YVhrFbYAfFrJkmsv68z9%2FJOjGglPRFUNEHwZ&X-Amz-Signature=566d27126870716f762e81d6775d644048d5b47d8cd0ebc4410557e8ff63a168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
