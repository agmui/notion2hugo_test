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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBOQRPM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGXf0WtecmwI4VeSDS9TqqDwHqyAqxe5s%2BfxlwUP%2B7NrAiEAyclTF875VzcRwQJAZ6i4V9Om7EmRIa7lPklTau32gaQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKG%2FJY0sutd07weYpSrcA1OJK0Zkr6T521RKt4AOn22yIbfnGV2PGvHkJScjPeFPARLHQr%2FdLp7J71S%2FOtyfdhhQDDzlbjWenxYA9nushr8xyNWYGB1LPtCrsOa4DOkG13uINyKl0%2BAjAhj0ZusUBtH3x5cq%2FpZAoI3BE0CNo8Ib9RnFSdbfJF2HwqnlSZHlTvz9EvFd5VyLQOjT1wOw9XXy0TpTevBeDHAN0ufDrjJ4Ot20hTW8jyeSk73WGcGxb%2BPAovrTfEVcLiWHCoWqFbA6aC9ycxAYMyATBxrEg3snPdmUe8IEmUDvzsK4zy6KpfMxL6Au2wzASxX0k%2BY79TcqgfYHNuCjo7nRUh9OzE9CORi4tPnLYbjNKya0Gd1Ge9clm6SQGTHeXrk5TDw1O%2BmGuM8b7jKD2PuGZwmai%2F2pzfGS9oepFp6mQSPv4Td3n1WdS8fY4VoyNh0qkwILO%2BBJNl%2Bem84%2FtM1lLDRKDL8zEQAtSXwaImRC%2FfVk2mCN0ePZhhXjkSvq2cDgjexRV1o95eLUF3RWlR1So5Brg6jnkrG3KZuocdm3LCRboN7d5CmDwxaxyqybsxTXiox1rq9Uv71wmHmNaFomkDCveMarw0oqIDU6cqp0BDhj11aS08sYe9%2BcEp2YY1GcMMLC7cIGOqUBP1mq5fCBrzsnlT%2Fj5NmHVB%2BdaM3kyXiyfyHfVG3DavUAEPbGBT5D0iu3Sacv%2Fm5ePiWOSJPja1xgye2GP1r0aumMwHozOHFEisCIfJljgyRzrpNyJEgknl4dvBkF3WLsQwUH0LqjrjCPyjmz6qkpoWfTJuxT0RFIbQgQponXF0%2FvZXobbtrEKERW4qbjrO8IQk%2BNef%2B0StAzcMd0NhDjF%2BMIT%2BEp&X-Amz-Signature=2524f0fd45e97069b7f304a8e10ad6e28197a889c064a1d63a4b09aa20f2a58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KBOQRPM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGXf0WtecmwI4VeSDS9TqqDwHqyAqxe5s%2BfxlwUP%2B7NrAiEAyclTF875VzcRwQJAZ6i4V9Om7EmRIa7lPklTau32gaQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKG%2FJY0sutd07weYpSrcA1OJK0Zkr6T521RKt4AOn22yIbfnGV2PGvHkJScjPeFPARLHQr%2FdLp7J71S%2FOtyfdhhQDDzlbjWenxYA9nushr8xyNWYGB1LPtCrsOa4DOkG13uINyKl0%2BAjAhj0ZusUBtH3x5cq%2FpZAoI3BE0CNo8Ib9RnFSdbfJF2HwqnlSZHlTvz9EvFd5VyLQOjT1wOw9XXy0TpTevBeDHAN0ufDrjJ4Ot20hTW8jyeSk73WGcGxb%2BPAovrTfEVcLiWHCoWqFbA6aC9ycxAYMyATBxrEg3snPdmUe8IEmUDvzsK4zy6KpfMxL6Au2wzASxX0k%2BY79TcqgfYHNuCjo7nRUh9OzE9CORi4tPnLYbjNKya0Gd1Ge9clm6SQGTHeXrk5TDw1O%2BmGuM8b7jKD2PuGZwmai%2F2pzfGS9oepFp6mQSPv4Td3n1WdS8fY4VoyNh0qkwILO%2BBJNl%2Bem84%2FtM1lLDRKDL8zEQAtSXwaImRC%2FfVk2mCN0ePZhhXjkSvq2cDgjexRV1o95eLUF3RWlR1So5Brg6jnkrG3KZuocdm3LCRboN7d5CmDwxaxyqybsxTXiox1rq9Uv71wmHmNaFomkDCveMarw0oqIDU6cqp0BDhj11aS08sYe9%2BcEp2YY1GcMMLC7cIGOqUBP1mq5fCBrzsnlT%2Fj5NmHVB%2BdaM3kyXiyfyHfVG3DavUAEPbGBT5D0iu3Sacv%2Fm5ePiWOSJPja1xgye2GP1r0aumMwHozOHFEisCIfJljgyRzrpNyJEgknl4dvBkF3WLsQwUH0LqjrjCPyjmz6qkpoWfTJuxT0RFIbQgQponXF0%2FvZXobbtrEKERW4qbjrO8IQk%2BNef%2B0StAzcMd0NhDjF%2BMIT%2BEp&X-Amz-Signature=bfdcbb5e54661e2005e355d75b034705c0ea5c661682572a8eb52879419537a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
