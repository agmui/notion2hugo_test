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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=070c87c94472dac73cb3096b571c2fff0f93e056b0c2cbcb286e6239d5bb73d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRQ5PQY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSZEKR4sVKHYQK1VdhO42OT5ndbA7CrFyvThQuKPmaOwIhAJq4LHVjfLwSrYYwdoNkFflfSLS4XRmq825tgRj%2FwWQNKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEPT8zMsg5T4MYWUwq3AN8Nzf8gviyLzTtieRridnV%2FY%2BvlHX9QsK7AedNlk6SeYAS5%2FgoHqGdabjmgwHCZP1IGWEe18UfHwbp0cU2VgwjWVDXznN9N9bk2SZhw%2FPDtIhJ95oCtK5depawzsNk%2BBNAnIsxLRcAm1OzFLiVdYU2er9ppoKOwXRivDHTKpjtIqe0WtsQBZlxPx1jA3nlxP6fKUZGQ4FAvIPLPtl33GOeScZ7ld%2FwF0f84Q7FcWdJxFSVd1k%2F655hdaVQFNxkn95197cSP2vpZMrTWyP526f6tGiPrZJbYtJeSAd0GjiQOh7ZXdz5JrbK7RnpGhpf%2BNreHN%2BB0yIax8QnQt161tL4D%2BEGthf33FeFls9FavSW7gesuEeH0AlPC1TQ2N%2BQaOYv%2FppVidX6T361YljaJRjmhyp3ixiIp%2BOnRozpZa4HpDkpXjy4xZrXQbQpGKEf52flE7qupIU%2F43dbV1g6HFd4Pu9FTu%2FSoJby9E06FR7kmz%2BXei12nn7HOLIANbjD1GpVLWbbO775CqGdhx9cj%2F%2BPUVO79TOnLoSjlRAQInKu3MRIy4VwA4O7bWRDdmVJxcI1n0aHLWRfv1bTzaZTgefUYqCJFzR7bt4A6Y1OTSTFntBISO31yhcqbTmhvTCAkNvCBjqkAQCJW7cLNyiRQonjayNPRFSAmaDTbomo7FmgJ9jTyIKlfVPipFkwKQ4Zoz%2FwKfpKr0LBcsXIJ17KRQuic%2FtB%2Fmcfjdxl%2Fscj30X8PNNOJI9Xc59YYZlxURW%2BWqvYMG4gCrGcco83p6BTew3sheFTxyDinAbLN6POVDofC%2BEdw1O8qp8fGHDuGaWrTDVgN9pfRH%2Bd9JahVg1MDBuRKH8MsD1csKuS&X-Amz-Signature=2249034f00c82eaa7784149f94a3760078c6cc5e1f1c0f92e691a0678392e742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
