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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAWZBAD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDf0%2Fm%2BLQ6QCa9rPDGBPOBCbgI5zEdwG9absiwNUxLYtAiEA1Uuu8F6q%2F%2FhpBoPpMq6UylpxtWbGQZ9ecUGHEozDakcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEQK9BgYco8a7mf5SrcAxxcy9a%2Fec4zLO60fdzYHQyMLOB0a3oeR8p64q29z7Mx1IHppW%2FUn8pNaw8dnhtG4nZf1bHkycafl2ptKHcH5aPWcWqCeKeltfy%2FBSEIQb7x5cYO9l6V5J2fCTnosm2X1vIuBzBhLcbVJaajMWJ36acoEwPE8tOk1L%2BZLFJnDqRFsrJINMqV1UbT%2BnNoFmgC6pZ0bRbrULzxCrVfMh4UzZ74PWJldchBFPWWQC%2BKNFNZKDkoA4z5MFcqvhkelke2KoP8SXJ%2F%2BH2bL9QEloxw9tRk1XhNEmyU9n%2FdGevTyEGF%2F7lUJ5Ww2PeZn5TzosBtz76TG6h19RYoYYzqx2QYqU55l9%2F7%2FgiOZTHC6vYFaqWgu1w%2B%2B7%2FiUpN4xS3rOu86cTWjUTquZj8s1dAYbUeNvpDbhSC9w8vMP%2BSBbwl%2FLIE0RqL4DEPDJzUfpNf9KX0t5y%2F7UHuvvfZoXT6K6GCeNyQTXsbllaO5fCH08fwTrn94qq0U34WqNEOeMY%2FjX2toGzvaToKsu3d0jVaYiBYrRr18FTRISIOu6SDG1CnY7P1X5usAZ2uUm39LjVC7FsoLZWasKpgnlNEtRYRC3fzmZwXGBIMU%2BECChLn12QSzPq2IS5IJezz5UAQz%2BI5kMMrH4cIGOqUBnrRdbsrDNDi3jeVFPFil%2BuAPfiXyGg0mCpJvZkoR%2B7B8%2BHhZlM72fbY5FLtpgcINuArtl2l3PD59poq5LLyzrh65pt5deFVQ52QvKkGaDdXGDF%2B%2BuOWvjmVK%2FL7MPA7u2TljzEMptDSlggpFfS75vBBKnFwbGCQcsUmiS0efDBayJ4xa%2Fa6cDbQECV7ksmgNqfemuj7BnNgNb6foK5rH%2BWFX%2FBrc&X-Amz-Signature=278cd5689364915f6b489041816bca6f64490f4fb5e649acc2e2d611313f07fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAWZBAD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDf0%2Fm%2BLQ6QCa9rPDGBPOBCbgI5zEdwG9absiwNUxLYtAiEA1Uuu8F6q%2F%2FhpBoPpMq6UylpxtWbGQZ9ecUGHEozDakcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEQK9BgYco8a7mf5SrcAxxcy9a%2Fec4zLO60fdzYHQyMLOB0a3oeR8p64q29z7Mx1IHppW%2FUn8pNaw8dnhtG4nZf1bHkycafl2ptKHcH5aPWcWqCeKeltfy%2FBSEIQb7x5cYO9l6V5J2fCTnosm2X1vIuBzBhLcbVJaajMWJ36acoEwPE8tOk1L%2BZLFJnDqRFsrJINMqV1UbT%2BnNoFmgC6pZ0bRbrULzxCrVfMh4UzZ74PWJldchBFPWWQC%2BKNFNZKDkoA4z5MFcqvhkelke2KoP8SXJ%2F%2BH2bL9QEloxw9tRk1XhNEmyU9n%2FdGevTyEGF%2F7lUJ5Ww2PeZn5TzosBtz76TG6h19RYoYYzqx2QYqU55l9%2F7%2FgiOZTHC6vYFaqWgu1w%2B%2B7%2FiUpN4xS3rOu86cTWjUTquZj8s1dAYbUeNvpDbhSC9w8vMP%2BSBbwl%2FLIE0RqL4DEPDJzUfpNf9KX0t5y%2F7UHuvvfZoXT6K6GCeNyQTXsbllaO5fCH08fwTrn94qq0U34WqNEOeMY%2FjX2toGzvaToKsu3d0jVaYiBYrRr18FTRISIOu6SDG1CnY7P1X5usAZ2uUm39LjVC7FsoLZWasKpgnlNEtRYRC3fzmZwXGBIMU%2BECChLn12QSzPq2IS5IJezz5UAQz%2BI5kMMrH4cIGOqUBnrRdbsrDNDi3jeVFPFil%2BuAPfiXyGg0mCpJvZkoR%2B7B8%2BHhZlM72fbY5FLtpgcINuArtl2l3PD59poq5LLyzrh65pt5deFVQ52QvKkGaDdXGDF%2B%2BuOWvjmVK%2FL7MPA7u2TljzEMptDSlggpFfS75vBBKnFwbGCQcsUmiS0efDBayJ4xa%2Fa6cDbQECV7ksmgNqfemuj7BnNgNb6foK5rH%2BWFX%2FBrc&X-Amz-Signature=93ffe1ef38c9d58f9da498f29db3280856684945c378c181d7ec9a4f0df02399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
