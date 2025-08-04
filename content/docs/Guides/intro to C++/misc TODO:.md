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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LN625X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJ%2FrPcmh9Ke8T2IdEvELRwUS%2FwEQTk3R2oOyuhP7d8cgIhANwgH0vEM0%2Fvek61HxsJLSuCNGcpRvP%2BlixmS50ApCBQKv8DCFAQABoMNjM3NDIzMTgzODA1IgzD8hYD47We5XtuVNEq3AO%2BZg7HTjW8lV1FwkasViVS8ChYiOLN%2F4XyvLhKcG%2B48hA8GDyJ%2BbyBXCcNc0eW%2Fi8cfOtxjh9vYLoYFJqZy4GwcAlVDOCqPk1K8dA21glso9h4FPMAqfyINBz3Up2lku1cvdfjaeB9a5ghDcL4TBrEzFBAvBASbWiOHm7uy1ezuZ0NTpmyt6xN1GiulmOyCQbDdKxA7RtDn3szW8NedbbWp02mGIOeCR%2FoNR8gI2p4vJWVPXqP3%2FsFUfrByGFS1SXW5%2BWW4g%2BbgoQ3CbX1310nwZvBFBbOp92dTK8kuGgTs6bH4nTxU5J0u1q5oEb9SzF5KGEqeQ2WXcrmEfLPguZE%2Fp4I7zdwnDkKdCDwFjFnBZfFTmPyj7LiiYcbncVQVDE3tEsoYiUKVCoCtH04oboZhzJqN6QTwXzuJRU1tGKkkiJsqY%2F6PPt3PmAFPi09DOrpuPDEiyNkxhDPLIkzvZpCunFqi4JgNq34S2cg4u%2F0KcmIx2srQfBsfvMuNYtPmd37ZmFhaRg4DE%2FefSWZ%2B7qfY%2FiX6bUzV7WkYCqYsD3vKi9eE2VonpI5%2BQDEnUCrs963QgHkWoBY%2FaK2TjrLAjmGDSySuRwjT%2FQGAIVz6bEsMDPpgpbry0X2Dh1ThzDB9MTEBjqkAasBohFZ5TZIZ2%2BUtaysR%2FqLcT9qGeRJetGUbgAVnmrikeGgfRO8LGntnGLmeeP6VPY0%2Fat88oG6Qe2LnMcZ3xX2Aj5oglfPEpHmdMgx%2BAKXznnTJTLQ7z%2BREnQCUPHyM%2Bq%2FwqTtWuxIWf%2BZNXLsTWqNScQlmbHxnj7ynaRCCKO9E8%2BpEp1wZe%2FcaNnHjWnS3ohW76m7aNU4jRLbGpycgMunQwP2&X-Amz-Signature=2d8f617346b2948af9d96a0e143582be3279d265db2f3d7a162553b635de8bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LN625X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJ%2FrPcmh9Ke8T2IdEvELRwUS%2FwEQTk3R2oOyuhP7d8cgIhANwgH0vEM0%2Fvek61HxsJLSuCNGcpRvP%2BlixmS50ApCBQKv8DCFAQABoMNjM3NDIzMTgzODA1IgzD8hYD47We5XtuVNEq3AO%2BZg7HTjW8lV1FwkasViVS8ChYiOLN%2F4XyvLhKcG%2B48hA8GDyJ%2BbyBXCcNc0eW%2Fi8cfOtxjh9vYLoYFJqZy4GwcAlVDOCqPk1K8dA21glso9h4FPMAqfyINBz3Up2lku1cvdfjaeB9a5ghDcL4TBrEzFBAvBASbWiOHm7uy1ezuZ0NTpmyt6xN1GiulmOyCQbDdKxA7RtDn3szW8NedbbWp02mGIOeCR%2FoNR8gI2p4vJWVPXqP3%2FsFUfrByGFS1SXW5%2BWW4g%2BbgoQ3CbX1310nwZvBFBbOp92dTK8kuGgTs6bH4nTxU5J0u1q5oEb9SzF5KGEqeQ2WXcrmEfLPguZE%2Fp4I7zdwnDkKdCDwFjFnBZfFTmPyj7LiiYcbncVQVDE3tEsoYiUKVCoCtH04oboZhzJqN6QTwXzuJRU1tGKkkiJsqY%2F6PPt3PmAFPi09DOrpuPDEiyNkxhDPLIkzvZpCunFqi4JgNq34S2cg4u%2F0KcmIx2srQfBsfvMuNYtPmd37ZmFhaRg4DE%2FefSWZ%2B7qfY%2FiX6bUzV7WkYCqYsD3vKi9eE2VonpI5%2BQDEnUCrs963QgHkWoBY%2FaK2TjrLAjmGDSySuRwjT%2FQGAIVz6bEsMDPpgpbry0X2Dh1ThzDB9MTEBjqkAasBohFZ5TZIZ2%2BUtaysR%2FqLcT9qGeRJetGUbgAVnmrikeGgfRO8LGntnGLmeeP6VPY0%2Fat88oG6Qe2LnMcZ3xX2Aj5oglfPEpHmdMgx%2BAKXznnTJTLQ7z%2BREnQCUPHyM%2Bq%2FwqTtWuxIWf%2BZNXLsTWqNScQlmbHxnj7ynaRCCKO9E8%2BpEp1wZe%2FcaNnHjWnS3ohW76m7aNU4jRLbGpycgMunQwP2&X-Amz-Signature=ee71edaaf6543292f1e78cebc424cc5dfd2fc3eb10de662b75daefd170637504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
