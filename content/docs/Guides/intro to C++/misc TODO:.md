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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALWGROG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDhTXJ%2FimYkMdgm%2FR5%2BYRReE5i9f3j2hsflUynfX3i2FgIhAJKZ2B2FvqFvir18lTFTPTS0C1gPU7i%2Fx8v49Y1iHtIMKv8DCBIQABoMNjM3NDIzMTgzODA1IgyeGvlPz6U5BHC78rAq3AOh%2FN17Oner0aavoNb3y567dKgnw%2BhZNnF7%2FAVmxVnFPH9gspKNxnIpygbMgR7Djrz0WgXMclqlsqHmlt9dbIgODkngSlvmqTbpN9T00UZg%2Fyisc6xDeWRVS4IS76saAVYht3fSiAiu%2Blo3SD76WBaPPceFGpJ9w2dmKFfoXSHP%2Fg6SPlGeOzOgjcdKl6zBQHVaxt0%2B8Y8HS%2B1MC5HrSVRfxoBRz7t7e5PrzGvmqY81YRrmCbCAZbTmp1Thn2GjUtcYwIrh1bt00RbxEOgauT1XzdzmUS3GvAZm6LGVMfXZK2A%2FfoDiEvPeUxOeD41nQ914SSV5StXPxNVxClQZ6T4j1CFLP9nYSkFeGo4%2BEfEORqmdgX0QIBahlr0NylQHHpkKrrb9R3jOmZC%2BevfXdaYffzGyIGuM%2FegSRwdvceOdhLPuGGMU0OPH1DbuLw1FYBYd3UJCd9rBZQJQsKM8gS2J2X2v2P7uabxDF93ZKRWDDsuhqX0k%2BCGNUELxtjhNIZxHalTRkt1iUtUYUozsngACojAtNl8g5Wn5C%2Bz0%2FplFwN6kSlltCMWLeVJ0AMALJDGKpA4lKJSvxgY51L0Or20Iz9eDZQrYxK1qc5lJibD1K6CICZwrDE9JwEII4TD0%2BvrBBjqkAaJQIBtEQiGF9IjtMQUo6JXKjG3fR9Fj36eNRHBdIznAeGoUsG53SAZ5G6pkcOJ0IapQTiwboBmUihNWvkbJRJoeqsXo6J%2Fj6TadsOsVKS%2Bq7brIp4iSDmzvqtfiPYW3kw%2BtwBBAx5630c7a1gheJ%2FUlr%2BRXeSWG9cj2kGp82MzhLwmDmXW9rYzcnjFyt%2BU3ii0638IyRb8upvq1zLLpoJbLbLpz&X-Amz-Signature=5c8853028917fd2a624c006df55f8a79b47501dab219e438177152d1536b2da6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALWGROG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDhTXJ%2FimYkMdgm%2FR5%2BYRReE5i9f3j2hsflUynfX3i2FgIhAJKZ2B2FvqFvir18lTFTPTS0C1gPU7i%2Fx8v49Y1iHtIMKv8DCBIQABoMNjM3NDIzMTgzODA1IgyeGvlPz6U5BHC78rAq3AOh%2FN17Oner0aavoNb3y567dKgnw%2BhZNnF7%2FAVmxVnFPH9gspKNxnIpygbMgR7Djrz0WgXMclqlsqHmlt9dbIgODkngSlvmqTbpN9T00UZg%2Fyisc6xDeWRVS4IS76saAVYht3fSiAiu%2Blo3SD76WBaPPceFGpJ9w2dmKFfoXSHP%2Fg6SPlGeOzOgjcdKl6zBQHVaxt0%2B8Y8HS%2B1MC5HrSVRfxoBRz7t7e5PrzGvmqY81YRrmCbCAZbTmp1Thn2GjUtcYwIrh1bt00RbxEOgauT1XzdzmUS3GvAZm6LGVMfXZK2A%2FfoDiEvPeUxOeD41nQ914SSV5StXPxNVxClQZ6T4j1CFLP9nYSkFeGo4%2BEfEORqmdgX0QIBahlr0NylQHHpkKrrb9R3jOmZC%2BevfXdaYffzGyIGuM%2FegSRwdvceOdhLPuGGMU0OPH1DbuLw1FYBYd3UJCd9rBZQJQsKM8gS2J2X2v2P7uabxDF93ZKRWDDsuhqX0k%2BCGNUELxtjhNIZxHalTRkt1iUtUYUozsngACojAtNl8g5Wn5C%2Bz0%2FplFwN6kSlltCMWLeVJ0AMALJDGKpA4lKJSvxgY51L0Or20Iz9eDZQrYxK1qc5lJibD1K6CICZwrDE9JwEII4TD0%2BvrBBjqkAaJQIBtEQiGF9IjtMQUo6JXKjG3fR9Fj36eNRHBdIznAeGoUsG53SAZ5G6pkcOJ0IapQTiwboBmUihNWvkbJRJoeqsXo6J%2Fj6TadsOsVKS%2Bq7brIp4iSDmzvqtfiPYW3kw%2BtwBBAx5630c7a1gheJ%2FUlr%2BRXeSWG9cj2kGp82MzhLwmDmXW9rYzcnjFyt%2BU3ii0638IyRb8upvq1zLLpoJbLbLpz&X-Amz-Signature=374067ebca72899e3af82a5ad8b216e211170063d4dc3ed82bc6839a5677e6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
