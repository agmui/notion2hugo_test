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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJXVJ5Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCICYiyscAbX9apM3fFf0Po8mm70EkwBtHpOefmvD5PbqhAiEArDjHJAkbfev7svwbKFjqEW9CXmmVTw9vh9ZIsz9yf5oqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6Us%2F2FWC5GcMvGbCrcAzRD337b9VTlWAKcFxwsCLZuu4JVYD5IB29JPeb1%2BCH8945qsopfDJb7%2Fg9JdW4zUvSGIO4j1XEDAb4%2B9VSY4DeGXL8aflvJkvJfQ6%2FmlRcVqVD1y9C%2BZbToz87W4Yl64oGLkLetMPxwKagdHvhnJdtUFj7g%2By0t1CKiZRnOM3CgWYL8HyFyZ1NFZziu5DYVftWqEtat2h2qk2psmsKTsyy%2Fw9s4LJIoXn1oaKMmSFIKiSVA6eOnndLGhrjb15I8rmNbwV9ptZz4bd%2FHEB50iOiJG6I1w31fdG%2FBu7ujDSKcsUr2m02SdeutDis9YJiwa5%2BwSGwixil9l2QYhuPqVpnFMf0llSOc7xqfddP9jIeK7DDKGvaWTkctkM5hmtF7RvwOwQKj7WkrhXKppzxvaMOaDQc0zzht2oL29DhCMbcapRN6gaOIaQA5AYuyNqxLThDifmaLOYLBbSEP89M3DS0aJIO1EhPys4%2BtaBJRYWSJaq0IbYPitlMCATdX8Cv0Qvl47B5abDk7gccGClDrheGTQZOifWAqfgifr8Fio1BKz%2BKqt0UAclgqK4z9XKBly7SLDhx4xzD47CfBegMYyb54hNnSTjbPQLCQmxWW%2Bzl6e8SH0%2BxNVK1E61pLMNfC9cEGOqUBgBUjROBgnul3P95UAQK8PCj7U1nUne%2BR54DSF%2F0HZ8H5rvlWNAs5RjNj5BomooSeG1y%2FEXLHi5ayqJ2OZXgaKITWMLn0JbFcVzmqQANg2b9D5%2B7hXlXNdELUojAATNC9Xo8Z8Rm8eFDDabnA3tCyqZlAFp%2FuvZnPwzj6kN%2F42SZx5WsiBwBn61VY419wBFAfb0ayIIv9QPjRM6AbUmjS%2Bs1jUJc9&X-Amz-Signature=fe8470b88b2018af2b38498f0f9fca6943d966d4a71ed863e890aff17ecc6975&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJXVJ5Z%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCICYiyscAbX9apM3fFf0Po8mm70EkwBtHpOefmvD5PbqhAiEArDjHJAkbfev7svwbKFjqEW9CXmmVTw9vh9ZIsz9yf5oqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6Us%2F2FWC5GcMvGbCrcAzRD337b9VTlWAKcFxwsCLZuu4JVYD5IB29JPeb1%2BCH8945qsopfDJb7%2Fg9JdW4zUvSGIO4j1XEDAb4%2B9VSY4DeGXL8aflvJkvJfQ6%2FmlRcVqVD1y9C%2BZbToz87W4Yl64oGLkLetMPxwKagdHvhnJdtUFj7g%2By0t1CKiZRnOM3CgWYL8HyFyZ1NFZziu5DYVftWqEtat2h2qk2psmsKTsyy%2Fw9s4LJIoXn1oaKMmSFIKiSVA6eOnndLGhrjb15I8rmNbwV9ptZz4bd%2FHEB50iOiJG6I1w31fdG%2FBu7ujDSKcsUr2m02SdeutDis9YJiwa5%2BwSGwixil9l2QYhuPqVpnFMf0llSOc7xqfddP9jIeK7DDKGvaWTkctkM5hmtF7RvwOwQKj7WkrhXKppzxvaMOaDQc0zzht2oL29DhCMbcapRN6gaOIaQA5AYuyNqxLThDifmaLOYLBbSEP89M3DS0aJIO1EhPys4%2BtaBJRYWSJaq0IbYPitlMCATdX8Cv0Qvl47B5abDk7gccGClDrheGTQZOifWAqfgifr8Fio1BKz%2BKqt0UAclgqK4z9XKBly7SLDhx4xzD47CfBegMYyb54hNnSTjbPQLCQmxWW%2Bzl6e8SH0%2BxNVK1E61pLMNfC9cEGOqUBgBUjROBgnul3P95UAQK8PCj7U1nUne%2BR54DSF%2F0HZ8H5rvlWNAs5RjNj5BomooSeG1y%2FEXLHi5ayqJ2OZXgaKITWMLn0JbFcVzmqQANg2b9D5%2B7hXlXNdELUojAATNC9Xo8Z8Rm8eFDDabnA3tCyqZlAFp%2FuvZnPwzj6kN%2F42SZx5WsiBwBn61VY419wBFAfb0ayIIv9QPjRM6AbUmjS%2Bs1jUJc9&X-Amz-Signature=4218de3609b774d21ddcea8cad9d8c6b5c40cfc81644d9fd4ac8c9dc86d7cc97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
