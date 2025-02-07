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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CUSGVI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHvs0La7DZTM7GtjDhqSAi7ryYoFwOYhGwTtrfIBHRiNAiBOV7bCM2VhoKbLftuR5mgMTDwqugJ%2Bue7biJzOEaw99ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMS%2FiKMQuoV7Z8lAByKtwDkdCXpghfw%2F0el8aBC9TI%2BSdOJHmqAYwwwdJSclt7TbsBkbjrsmTBw8MdNIFx03F6fVshOw5FrSXjOBr4GGY8R3%2B0Bz57Pv1dbzOVPIVRc7vUJFve%2FNdax1NoUn6qTGacTkQQicjny6y8h7A2Obcb95bF%2B%2F%2BBqEWeCcOx7SHbqDfUnpE%2BqOU2DYhihkygEapjhP8b5%2FpqFfGHAZpbEUYMATl5sdO3gMAdWyBUAwe%2BUSGmnc6%2FnGo9SPwb9Qy2UDko5y1LwNhXAXbFGfVd7xXGzIja8uIbke4T1i6xn%2BZn4YcKhu3cH9tLOHzCCJtpKNR%2BcaHEpLVRHOPY8bJODizSYkeAj9t2uvr4H%2F0I7jVpi4gzv%2BuAipygzmEHpnSe%2B%2BKGmF1xXqjW%2Fvmvmq3PCDAlKv9hjA3ss9%2BTeCzrfR16NKwPtqPJER8jgqbA65KRDmeNq%2BG99Qekb9H0AwzCmiAQgPLDBYelvyiTUcVxltmqIfpZMdX5LflpKk6m5IOAmwjlJDe7NmcigEQwmc%2FK7nqNrUdOfP1v4M4yGhUJTqZFCGzrL2zeedL4A353NDUnGEPIp30sGaknNIYIRsANxhrfcD0H1LIdTfVxduJoK7s9JQAiBMVDIVYVr3II%2BrQw6P%2BZvQY6pgEtoEJvOMflfYpLuYIkxd2M77fW5i2Ua%2B%2F5ehAg9mTcDI3KqgI%2B5Y4NZUEPLGubkkFUAaHGlxmxtBnQDwfhaoBHajvjAbKowVy21LXsnuSGRRTLGZqTZ4kyxEtC6xVZQj5uqD7x3WbgJJcGD4KCJhU9TDC0%2B6huLTLXl%2BnmexUq%2BhKJEGHeClo3%2Fa9wbjYtgz89IAisXRfGMxNHkkKeDBSwnsZ6op7M&X-Amz-Signature=9eaf8c160525554a10348087940854b2a1012f95b7a08a0d6d521367cf19b775&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CUSGVI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHvs0La7DZTM7GtjDhqSAi7ryYoFwOYhGwTtrfIBHRiNAiBOV7bCM2VhoKbLftuR5mgMTDwqugJ%2Bue7biJzOEaw99ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMS%2FiKMQuoV7Z8lAByKtwDkdCXpghfw%2F0el8aBC9TI%2BSdOJHmqAYwwwdJSclt7TbsBkbjrsmTBw8MdNIFx03F6fVshOw5FrSXjOBr4GGY8R3%2B0Bz57Pv1dbzOVPIVRc7vUJFve%2FNdax1NoUn6qTGacTkQQicjny6y8h7A2Obcb95bF%2B%2F%2BBqEWeCcOx7SHbqDfUnpE%2BqOU2DYhihkygEapjhP8b5%2FpqFfGHAZpbEUYMATl5sdO3gMAdWyBUAwe%2BUSGmnc6%2FnGo9SPwb9Qy2UDko5y1LwNhXAXbFGfVd7xXGzIja8uIbke4T1i6xn%2BZn4YcKhu3cH9tLOHzCCJtpKNR%2BcaHEpLVRHOPY8bJODizSYkeAj9t2uvr4H%2F0I7jVpi4gzv%2BuAipygzmEHpnSe%2B%2BKGmF1xXqjW%2Fvmvmq3PCDAlKv9hjA3ss9%2BTeCzrfR16NKwPtqPJER8jgqbA65KRDmeNq%2BG99Qekb9H0AwzCmiAQgPLDBYelvyiTUcVxltmqIfpZMdX5LflpKk6m5IOAmwjlJDe7NmcigEQwmc%2FK7nqNrUdOfP1v4M4yGhUJTqZFCGzrL2zeedL4A353NDUnGEPIp30sGaknNIYIRsANxhrfcD0H1LIdTfVxduJoK7s9JQAiBMVDIVYVr3II%2BrQw6P%2BZvQY6pgEtoEJvOMflfYpLuYIkxd2M77fW5i2Ua%2B%2F5ehAg9mTcDI3KqgI%2B5Y4NZUEPLGubkkFUAaHGlxmxtBnQDwfhaoBHajvjAbKowVy21LXsnuSGRRTLGZqTZ4kyxEtC6xVZQj5uqD7x3WbgJJcGD4KCJhU9TDC0%2B6huLTLXl%2BnmexUq%2BhKJEGHeClo3%2Fa9wbjYtgz89IAisXRfGMxNHkkKeDBSwnsZ6op7M&X-Amz-Signature=7f836cadf5f6584229eef65a8b4a5c0f77b05eb04c2012f27e31dd9d802b880e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
