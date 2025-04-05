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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTKYVD4G%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ355hqLfx%2FNAx%2FeiZ7aiNgBpg7gujQCsLPZj6192jzQIhAI2WatMFc0yw9WRIQ%2BzAubOKyzvUJA6GFNpy6JDXyaSoKv8DCCkQABoMNjM3NDIzMTgzODA1IgyLsIf1xhhnErQgSYQq3AOfqgBKIQVpKuFAlwj0vj63ZRdcbERcyoxTb6bflK%2BCeYIStZP1e%2B5THzmVHXCjUlnqoplexDiWWsQWmTHCkvBLcPY5iKvfJy8xBqcwuBtVUV1HowKIBBM3ilOCzGpijlqFhaS36j46gdsz%2FKoAy9kPiF24inSWMVkF6zab2xRMt5P%2Bm1F5lSQ%2BogHVyslcVC46%2FbVUq%2BUMUr23%2Bp1pzEnF9dKNsJsWhaDdbLOiVMEVQbundhWdf%2F2k9BNfsrDMIKWzOYWciK577%2BhToqyITrIW5GTy2xwoZhHtWiH5AuBXEvic8fqK0g%2B9P73%2BQ%2B6LTCWUFJPnPUMWxiG8QVBzaPtuc982vVAm9uCeb4kr4gWFtmakhJqiOVR37Sm3q8zqOPBBiWg2AM%2Bsjh0fYSaKrQHg50Ouo%2BDzdFFrKJZlrAILRL2Jfv5M0OmsrXYcFMhwaSdroBycIt6GACIVIva%2F%2BbsJuJ8rylrcOXmDlvB7ZZazLxpGXT8aas25lvtzpnc9hgUAv%2BeDwHkCbU%2Fjz%2B%2BA3OeBcaetB5whOrWe7IaLRDp3fi%2Fy2OhqIhbh5J%2BBDObBYnrtMcRICMuqMInktgsxODiHI%2FI37l%2BXfRAHhTtpqbPddVntseNeq%2BLchLefQjCCvMO%2FBjqkAVlZBKQ1Rk30Q4AIHCs9Swh4culVUZKWbOWtCyO%2Fgo2q1%2BRf9Sx0vl6ywEfCeR7amghFtFOS2d5kz5tV1tbwfd2PAA58pU8kGfvnsfWKg3PPt85kMXMPraYheu8kE80E18WVf731Ev59fCbHJwrODdRcvlv3TSzSazaXahAXFqIOV6K2vDg1ga5ilTC0M2gM7oE0myU9DFj%2BQSt4W8irpU67G9gc&X-Amz-Signature=3375e77f1f68dfd8106cb303b44eb4f770ea3584f5010b73ff3b41b858b2b782&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTKYVD4G%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ355hqLfx%2FNAx%2FeiZ7aiNgBpg7gujQCsLPZj6192jzQIhAI2WatMFc0yw9WRIQ%2BzAubOKyzvUJA6GFNpy6JDXyaSoKv8DCCkQABoMNjM3NDIzMTgzODA1IgyLsIf1xhhnErQgSYQq3AOfqgBKIQVpKuFAlwj0vj63ZRdcbERcyoxTb6bflK%2BCeYIStZP1e%2B5THzmVHXCjUlnqoplexDiWWsQWmTHCkvBLcPY5iKvfJy8xBqcwuBtVUV1HowKIBBM3ilOCzGpijlqFhaS36j46gdsz%2FKoAy9kPiF24inSWMVkF6zab2xRMt5P%2Bm1F5lSQ%2BogHVyslcVC46%2FbVUq%2BUMUr23%2Bp1pzEnF9dKNsJsWhaDdbLOiVMEVQbundhWdf%2F2k9BNfsrDMIKWzOYWciK577%2BhToqyITrIW5GTy2xwoZhHtWiH5AuBXEvic8fqK0g%2B9P73%2BQ%2B6LTCWUFJPnPUMWxiG8QVBzaPtuc982vVAm9uCeb4kr4gWFtmakhJqiOVR37Sm3q8zqOPBBiWg2AM%2Bsjh0fYSaKrQHg50Ouo%2BDzdFFrKJZlrAILRL2Jfv5M0OmsrXYcFMhwaSdroBycIt6GACIVIva%2F%2BbsJuJ8rylrcOXmDlvB7ZZazLxpGXT8aas25lvtzpnc9hgUAv%2BeDwHkCbU%2Fjz%2B%2BA3OeBcaetB5whOrWe7IaLRDp3fi%2Fy2OhqIhbh5J%2BBDObBYnrtMcRICMuqMInktgsxODiHI%2FI37l%2BXfRAHhTtpqbPddVntseNeq%2BLchLefQjCCvMO%2FBjqkAVlZBKQ1Rk30Q4AIHCs9Swh4culVUZKWbOWtCyO%2Fgo2q1%2BRf9Sx0vl6ywEfCeR7amghFtFOS2d5kz5tV1tbwfd2PAA58pU8kGfvnsfWKg3PPt85kMXMPraYheu8kE80E18WVf731Ev59fCbHJwrODdRcvlv3TSzSazaXahAXFqIOV6K2vDg1ga5ilTC0M2gM7oE0myU9DFj%2BQSt4W8irpU67G9gc&X-Amz-Signature=16c40f2c0902f576d4d1207fe46b2720cd373456311e9265baf5a9590edfc7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
