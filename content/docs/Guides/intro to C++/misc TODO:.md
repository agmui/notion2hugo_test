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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5Q5BDJ5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWWjCUOxVG8frk5EPZGrNBSoFJkwD8Q9W4X1U8FjN7OgIgdqxKDCeO0ec2LjkfdQKSBNWZ%2FyPDnjbaZQIk85SK1U4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJcODrJU7uiYF1bLircA1xc93TlRayoVe4zJO3kL1gMa7jYcJZmYjco68RIXMkZGQ81Y7EDoJ0YjUx4ozpufMOYM0%2Bf2nFjotKmzlmsKRSxpO2m10N9Piw3AlB%2BlAwpGTvSUWqsHlv1Sb%2ByXrhvr1gjbRxCuAxpteXe7pwpF%2B2kVfS3gOgNEpIKaq%2B5i53QO4fP6%2FlIHD9BrS7NapOUzvRZIciuwtNFscJ6%2FpoFxZQCVyOeFRW9zp9Fcp0rNPSyvCCAi2nKkTGr9OY%2FLXSBQ22%2FsotSFjzU0%2FK6B5Ahuvh07%2BxUUsX3mfasccHYbxaI54KTEnEsJBP4l6jBwPaqSe9h71ZuwE4WotajYrZ2i0pTrZh7Evnuft1zvXeCFU3tqZi49k6YIyEE4lI47Avty50Dd66Qv5PcfaRhNz%2Ft4g9Cv1GGjA7pPchcoCFn2iPvHdCCv99rEbq2W%2F6JFJ7KmQb0oSGEjiHFrfcZqJTkVWnebYJw5rHWfR84hd6d9jZYoEwQPH4Jwf%2BXzD2%2BDNkpBMzCcE6rHAqnS0YIh3h1uqoyABmBpGohsBJj4nHk5jO1N21IDbj%2BF%2BvdWYUVkiYTy2g4%2Bt8pR9KMkio2wptWUJ%2B2y9Oc4zQMfLopXpuosOy9WG53MwNmNkgkh59GMJ%2F6s8QGOqUBSDcWDn1L2qxFY9wZcx5pAMMFPxMRVbRdXr8dHVn%2FMPZ3e4QW4%2BeiRCtvVO40r1PI8%2FG9i1tR6aUG0nA%2FsO7vjIN3AZf%2FtD6wW9vMAox9njXnA%2FtOzVsoLdTSOVQnDrf4%2FuGKOMv7fi5T3ICysZuskyMQ5dwxihm6bY5dovnyUGntJQglrYb4QYNTI%2FGhjzVGT81bEz3XA4%2FKkKWmu5%2Bft%2Fnzyv5C&X-Amz-Signature=9e446d2d438655470372c58d44bf98ea617848c9cf42321825922a4844c3b077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5Q5BDJ5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWWjCUOxVG8frk5EPZGrNBSoFJkwD8Q9W4X1U8FjN7OgIgdqxKDCeO0ec2LjkfdQKSBNWZ%2FyPDnjbaZQIk85SK1U4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJcODrJU7uiYF1bLircA1xc93TlRayoVe4zJO3kL1gMa7jYcJZmYjco68RIXMkZGQ81Y7EDoJ0YjUx4ozpufMOYM0%2Bf2nFjotKmzlmsKRSxpO2m10N9Piw3AlB%2BlAwpGTvSUWqsHlv1Sb%2ByXrhvr1gjbRxCuAxpteXe7pwpF%2B2kVfS3gOgNEpIKaq%2B5i53QO4fP6%2FlIHD9BrS7NapOUzvRZIciuwtNFscJ6%2FpoFxZQCVyOeFRW9zp9Fcp0rNPSyvCCAi2nKkTGr9OY%2FLXSBQ22%2FsotSFjzU0%2FK6B5Ahuvh07%2BxUUsX3mfasccHYbxaI54KTEnEsJBP4l6jBwPaqSe9h71ZuwE4WotajYrZ2i0pTrZh7Evnuft1zvXeCFU3tqZi49k6YIyEE4lI47Avty50Dd66Qv5PcfaRhNz%2Ft4g9Cv1GGjA7pPchcoCFn2iPvHdCCv99rEbq2W%2F6JFJ7KmQb0oSGEjiHFrfcZqJTkVWnebYJw5rHWfR84hd6d9jZYoEwQPH4Jwf%2BXzD2%2BDNkpBMzCcE6rHAqnS0YIh3h1uqoyABmBpGohsBJj4nHk5jO1N21IDbj%2BF%2BvdWYUVkiYTy2g4%2Bt8pR9KMkio2wptWUJ%2B2y9Oc4zQMfLopXpuosOy9WG53MwNmNkgkh59GMJ%2F6s8QGOqUBSDcWDn1L2qxFY9wZcx5pAMMFPxMRVbRdXr8dHVn%2FMPZ3e4QW4%2BeiRCtvVO40r1PI8%2FG9i1tR6aUG0nA%2FsO7vjIN3AZf%2FtD6wW9vMAox9njXnA%2FtOzVsoLdTSOVQnDrf4%2FuGKOMv7fi5T3ICysZuskyMQ5dwxihm6bY5dovnyUGntJQglrYb4QYNTI%2FGhjzVGT81bEz3XA4%2FKkKWmu5%2Bft%2Fnzyv5C&X-Amz-Signature=e24c8c8be145de5f33c671856a042ffc4105b612b21c3bfc93395032a996716e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
