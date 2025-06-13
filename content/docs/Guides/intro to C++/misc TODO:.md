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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QIUJSRI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIEnxMau2RWOaVLkJ13%2BTY0jI4DUNiVBu4v%2F8Rb3qMJr5AiAemUDIV%2Bc%2Bjpl%2BDYtFIFqIlkvC%2BXxxWQiqvh5i6im03Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMS7d%2BcShSv7kuge7fKtwDNFK4vAKVCoBzPLMW1JxnDS0Ci1yQNjRK0GS1MBWds2H9PyYtoaxWvpMiCWFYJ6UVDlfpEyCVjjRPnVMIJibeDnc%2FfHWQvzx0RvkmSP68u0%2BiBKDTR%2F2QcnfKLW75Fn0h%2Bnv8JEUZ2chjD3qnBZmT2p6wdple3w0SpUxqmvRtAtVg1UeeLE1NQGOCrqWHFcFGxRUNoaXQlhrWqqbEl%2BwyhR39A8J3qUHcW0ZXIYPVDb%2F6yDz1H82EXlKjxC6lyM%2BEnfB3KtafPSQs7hAqeAhDujzxgWJ%2F9JqV7FU2jJR1KjegGv%2FlpQCWGKylHP2Ru0um70QIK1zIx4ekD5w5zGXyVOHrQl3iDQZuNX8hdGyZzqTD8g9Cfx2VWWJYu9BNFkzP4v8Wt4nVd9u7XfQDdQUTtuw1kH2%2FVjps3Chl18lHVus9QMqn3Bpc7mLnlmxy%2FTU7gGSVmrf4i6K9kXFRC%2BURPeVJjWsE1UjxTLEsTXQJKuhuJ%2FrfX2g394M5lu0waZYCHJiiPqsIlGlaX8iLFmg5ZmlqSsOmOgJiQ94RQwJ0yQXoe4CZoaRBE%2F1eCpK6yJpgmF2RD5PoUzroxlCBRrZ1%2Fj%2FxNPfm%2FEY42dDI98KdFSUeP%2FBVxMNLgSBoqFgwhpavwgY6pgEK%2Bp%2BIwz1P05RiyemXSxZ7wKPQj%2B9fYgXUOhLOKbYyb7gQK5kkdOIJLv81H9xlr65MqgJRK6KEEYqjvBJAmQFuiahbiClWLCbjeGnzRfkYWMojxbqD7dkoiVsZkz2b1WahpCF8FTOPF4ai8%2BL5PzdUlp458cr2yYTlJgL3gmwdLFb6Zdf4OCzAYWncIMio0wJt4nEvlCbxqjDMle8iXBeiYUiuNPi3&X-Amz-Signature=3a5fd194b40354eb69dbd6b12240f7b6bf1ddb4dd7254ad7f268d45408a4e175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QIUJSRI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIEnxMau2RWOaVLkJ13%2BTY0jI4DUNiVBu4v%2F8Rb3qMJr5AiAemUDIV%2Bc%2Bjpl%2BDYtFIFqIlkvC%2BXxxWQiqvh5i6im03Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMS7d%2BcShSv7kuge7fKtwDNFK4vAKVCoBzPLMW1JxnDS0Ci1yQNjRK0GS1MBWds2H9PyYtoaxWvpMiCWFYJ6UVDlfpEyCVjjRPnVMIJibeDnc%2FfHWQvzx0RvkmSP68u0%2BiBKDTR%2F2QcnfKLW75Fn0h%2Bnv8JEUZ2chjD3qnBZmT2p6wdple3w0SpUxqmvRtAtVg1UeeLE1NQGOCrqWHFcFGxRUNoaXQlhrWqqbEl%2BwyhR39A8J3qUHcW0ZXIYPVDb%2F6yDz1H82EXlKjxC6lyM%2BEnfB3KtafPSQs7hAqeAhDujzxgWJ%2F9JqV7FU2jJR1KjegGv%2FlpQCWGKylHP2Ru0um70QIK1zIx4ekD5w5zGXyVOHrQl3iDQZuNX8hdGyZzqTD8g9Cfx2VWWJYu9BNFkzP4v8Wt4nVd9u7XfQDdQUTtuw1kH2%2FVjps3Chl18lHVus9QMqn3Bpc7mLnlmxy%2FTU7gGSVmrf4i6K9kXFRC%2BURPeVJjWsE1UjxTLEsTXQJKuhuJ%2FrfX2g394M5lu0waZYCHJiiPqsIlGlaX8iLFmg5ZmlqSsOmOgJiQ94RQwJ0yQXoe4CZoaRBE%2F1eCpK6yJpgmF2RD5PoUzroxlCBRrZ1%2Fj%2FxNPfm%2FEY42dDI98KdFSUeP%2FBVxMNLgSBoqFgwhpavwgY6pgEK%2Bp%2BIwz1P05RiyemXSxZ7wKPQj%2B9fYgXUOhLOKbYyb7gQK5kkdOIJLv81H9xlr65MqgJRK6KEEYqjvBJAmQFuiahbiClWLCbjeGnzRfkYWMojxbqD7dkoiVsZkz2b1WahpCF8FTOPF4ai8%2BL5PzdUlp458cr2yYTlJgL3gmwdLFb6Zdf4OCzAYWncIMio0wJt4nEvlCbxqjDMle8iXBeiYUiuNPi3&X-Amz-Signature=14b3f45d8a04c0e4d78fb26a6a5259957ab8453c0b27be9b5ce14e6ba73c305f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
