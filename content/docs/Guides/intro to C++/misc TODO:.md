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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656W7HVOZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBBr1hCTwlHm%2F%2BGopHQTkpDW2OJMslMOC%2B5WchRUOBwaAiBcyc3RTDOWUZEBtRrgKe7P6pTPWs1wTkEeVNBD8Xt5PyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BdRdMn3KwOqASXTVKtwDBJBcY96BWfquouMuJac0wZ%2BvUVPhEuS%2FwrTqsU2RD1tS0U1ifPFAI7wEs2Si9uVOAJjW1VnPvNhx4Mtu3oTeeyUbmmJhmLWPnfxgP26o9%2F7MXTH5fDa%2BMBV1b5tLbegMEv8tIivi42A3Z07%2BQ2Sy3ZR9LJJKE699oEzcHeMscJbg5ARFUBK6m6rtp5Jhchm9QLiGKVkRFy51v58MpTAyvKMjmKwb7%2FnY5pYxBsG7naqdFqx%2FmkAMZNKbOfh1SlPNxoAat9qxhmR4R9kCyX7xz4235wTrjcSo31%2F9jsciBitVYG9h8bg4gbpEXARL%2BjckM%2Fs0Gfa0xzFR4lNVzGRk9z9ktWGILYuAWlm2%2FQxD%2FKgSWLK3HDCVRhxHrq9OF%2FYYM61RqVSSwXXGrmQnk%2BURzeZSEZNRshS4zHK%2B0zWub%2FThv0lJvm0KIRoctpJQuWiDhaKe0zaCp%2BnOi000N1vByor1%2B9tMzlIjzIWtISEiT38iy0K3jDeOh6uzc4nDZgjyG2dLTzoXgd6gsf%2B604CKENQcM3sxKK4rKy5zLEjIT2aUT8cXCjXk%2FZHpLxlwozVvUJ5kDM1sYTJ6XWT2YtkYQDWNcM7DWyCPp3qEW6f4BaUZWJWAitEkV3nMfsQwlpqnwgY6pgH51wRkxOz5OQiwiZEhZXRErbYsh2YH0HSsF97eWDhV0S89GvNr49IUYXv9wGlfyYUDlclnAvENOaJcz92kj5VzioXz8YbvWWm4X9r92cRoSMgbyOP2xWtfMIkHffvPIHnqfxjBVZQ1pmF6NIDimpbATBVhVHyx7msu3jf3Y8kcw0B44qPtdz6Q4Qwdi02L9C3486Z0FJ5gbiJ%2F5F4Dl1jTgAdDPUao&X-Amz-Signature=dd419b5457630390fa75c4ea57606caa19caac7dd7960a2cbbcce65227a042a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656W7HVOZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBBr1hCTwlHm%2F%2BGopHQTkpDW2OJMslMOC%2B5WchRUOBwaAiBcyc3RTDOWUZEBtRrgKe7P6pTPWs1wTkEeVNBD8Xt5PyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BdRdMn3KwOqASXTVKtwDBJBcY96BWfquouMuJac0wZ%2BvUVPhEuS%2FwrTqsU2RD1tS0U1ifPFAI7wEs2Si9uVOAJjW1VnPvNhx4Mtu3oTeeyUbmmJhmLWPnfxgP26o9%2F7MXTH5fDa%2BMBV1b5tLbegMEv8tIivi42A3Z07%2BQ2Sy3ZR9LJJKE699oEzcHeMscJbg5ARFUBK6m6rtp5Jhchm9QLiGKVkRFy51v58MpTAyvKMjmKwb7%2FnY5pYxBsG7naqdFqx%2FmkAMZNKbOfh1SlPNxoAat9qxhmR4R9kCyX7xz4235wTrjcSo31%2F9jsciBitVYG9h8bg4gbpEXARL%2BjckM%2Fs0Gfa0xzFR4lNVzGRk9z9ktWGILYuAWlm2%2FQxD%2FKgSWLK3HDCVRhxHrq9OF%2FYYM61RqVSSwXXGrmQnk%2BURzeZSEZNRshS4zHK%2B0zWub%2FThv0lJvm0KIRoctpJQuWiDhaKe0zaCp%2BnOi000N1vByor1%2B9tMzlIjzIWtISEiT38iy0K3jDeOh6uzc4nDZgjyG2dLTzoXgd6gsf%2B604CKENQcM3sxKK4rKy5zLEjIT2aUT8cXCjXk%2FZHpLxlwozVvUJ5kDM1sYTJ6XWT2YtkYQDWNcM7DWyCPp3qEW6f4BaUZWJWAitEkV3nMfsQwlpqnwgY6pgH51wRkxOz5OQiwiZEhZXRErbYsh2YH0HSsF97eWDhV0S89GvNr49IUYXv9wGlfyYUDlclnAvENOaJcz92kj5VzioXz8YbvWWm4X9r92cRoSMgbyOP2xWtfMIkHffvPIHnqfxjBVZQ1pmF6NIDimpbATBVhVHyx7msu3jf3Y8kcw0B44qPtdz6Q4Qwdi02L9C3486Z0FJ5gbiJ%2F5F4Dl1jTgAdDPUao&X-Amz-Signature=bdb23c085a8d73152741f6a61348aa68da7f0deab494d8b420602505d9f23553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
