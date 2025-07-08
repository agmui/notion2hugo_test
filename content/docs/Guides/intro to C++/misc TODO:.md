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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPTWWWL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDci8g6yOrwa9G1Rc4DKIhihzPT6VBucb7I4g%2FldRwy5AIgKli4lWHqRo%2Fp8sXfP3vxe9o4Hhfgt0hiIbCVUlYMzVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsTS8EmzMONIsviLCrcA7L5Fjv6lUiYGY%2BzB5sjjrnSpQMaHVCg%2FqqhTj3qyGFzZivvTrfXUeOavDxATz1ljo6ezLJAHk7b1ib9r6U5xs86BuS4cPZL39Zr7uCEe7%2Bm%2Bj%2Brylv3rB7qkdayfhj%2BjeeGaHXUJBugkDLYs0d5fho2Ah8ksQzYXwPIRcTRAiT0AgG86B21CNfQcAgSV2uiAHio%2FxcT8KWhmmVLMZFktXcTKYixQZNNlfAMfhxPdu1CHrIpBjVtWEz9MSdUL%2FCXzXh8%2B2NZrxsZpQT1IZsUEGyHoY2gDBZXxwhilMEeasAeT67OJH4bE95OxPor%2Fnchz1wr4Ag%2BZOfL51sUc4KilSMzdh2z3QQoBP%2BwQtlz4Qj%2BY%2B%2FniEuARV7Gzx2pdbVscvB0dCLDbh8l%2FjmhRDgeTZcqsbD02jTIG%2Bnd%2FfXTzbsmAIZC5r91xIv%2Bn3%2BJvpS%2BcK%2Bs9jRCn1TMO%2BrMJ9bYC22EwV1xPhBvSpSUe%2FtiwrPsE9TjvYdRtR5u0aiB%2BWQfpblrMfXFdheNDBlHBtMutVMpdJT1qcoOnfzD1eOaVXvlLEdB%2BpK8%2Fla2ESnqZTxWEcck%2B28KD5en82Lo%2BB7eFOxORM6GsQuPDSfUb7vmYxN8OvcpatDr1hPF3Jq2MM6ttcMGOqUB8ZwxJdLqCUL4GtMvY3KS4CTper%2BzFzv4hINQaHv8VK24xM%2FrGKMArvz%2FXGlSdszNmLGprdHSuPkHQOIk9wTXFqwSjujqzsmKOz8B7zBkoBzj2m2Mxu56ykc548ORsa3IRUhtPQk%2FAYiH%2F2dc20d%2FmcoCraXbxUHvntRtxdxzma%2BhPhYZcUytGRvMx78Dw4DcXLYhfuI%2BzS3nsjtYna%2FdQJIhxewA&X-Amz-Signature=ea068e1c953ed79df5b56298d2eaf4235da2211fa62102761b9bcee19e5be38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPTWWWL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDci8g6yOrwa9G1Rc4DKIhihzPT6VBucb7I4g%2FldRwy5AIgKli4lWHqRo%2Fp8sXfP3vxe9o4Hhfgt0hiIbCVUlYMzVMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsTS8EmzMONIsviLCrcA7L5Fjv6lUiYGY%2BzB5sjjrnSpQMaHVCg%2FqqhTj3qyGFzZivvTrfXUeOavDxATz1ljo6ezLJAHk7b1ib9r6U5xs86BuS4cPZL39Zr7uCEe7%2Bm%2Bj%2Brylv3rB7qkdayfhj%2BjeeGaHXUJBugkDLYs0d5fho2Ah8ksQzYXwPIRcTRAiT0AgG86B21CNfQcAgSV2uiAHio%2FxcT8KWhmmVLMZFktXcTKYixQZNNlfAMfhxPdu1CHrIpBjVtWEz9MSdUL%2FCXzXh8%2B2NZrxsZpQT1IZsUEGyHoY2gDBZXxwhilMEeasAeT67OJH4bE95OxPor%2Fnchz1wr4Ag%2BZOfL51sUc4KilSMzdh2z3QQoBP%2BwQtlz4Qj%2BY%2B%2FniEuARV7Gzx2pdbVscvB0dCLDbh8l%2FjmhRDgeTZcqsbD02jTIG%2Bnd%2FfXTzbsmAIZC5r91xIv%2Bn3%2BJvpS%2BcK%2Bs9jRCn1TMO%2BrMJ9bYC22EwV1xPhBvSpSUe%2FtiwrPsE9TjvYdRtR5u0aiB%2BWQfpblrMfXFdheNDBlHBtMutVMpdJT1qcoOnfzD1eOaVXvlLEdB%2BpK8%2Fla2ESnqZTxWEcck%2B28KD5en82Lo%2BB7eFOxORM6GsQuPDSfUb7vmYxN8OvcpatDr1hPF3Jq2MM6ttcMGOqUB8ZwxJdLqCUL4GtMvY3KS4CTper%2BzFzv4hINQaHv8VK24xM%2FrGKMArvz%2FXGlSdszNmLGprdHSuPkHQOIk9wTXFqwSjujqzsmKOz8B7zBkoBzj2m2Mxu56ykc548ORsa3IRUhtPQk%2FAYiH%2F2dc20d%2FmcoCraXbxUHvntRtxdxzma%2BhPhYZcUytGRvMx78Dw4DcXLYhfuI%2BzS3nsjtYna%2FdQJIhxewA&X-Amz-Signature=c52236b82294f096f1581ed794597b2fd4dbb42fe9ad952f9fca62795ea365cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
