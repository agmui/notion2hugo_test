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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNRFPNP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA%2FIgUzQK3gM636aaouAPxQfbp8lKzUl1G%2Bu7RKmsmHBAiAvnFxxeobWaeX22ofU68kMSzVHmHBIhkK0bLVBNHVTkSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMdRbvSdWHTXZu7DmSKtwDkrRgkQOomSZkyCPXZZ3MpDf5sxDczoQ5brMllXeSkEYGZJxDGgB8VIG%2BL6TGuQqbieeNmAogZH%2FFN3v2JIdoDD1%2FaPlX0TVvlJKIPETUioY1dDZRDLBxhgDRXxZaq0fYRN4zY8YSNxzHSx141NVIt7bQfW%2F79sUXCmnTSPZWwh2BlOjJi77D3zlMiitaQY7DJgIoFc%2FzzOCG9xeGUOWs5xKhhCC9gwNDfBgSGjfE7jIAqTFYOHvBjTi4JumNT%2FI5DXVrIAJLO%2Bu4mVe4u3iTJEWpd%2Fn776xQe9y%2FOpXcy6A2h2khd2zT%2Fhl%2FyS95lsGSdlU1GUQBNWJIyju1bWabukzpDiA%2B1oVcKfeBaMMYSvPrQ6R%2BppUWPtra9ZGhqcNWWLVMEFUvV3OdlYDZ3HRVPwwChrneZ2O0KL57rwivbHQlv1hlzZ50SzhNYv0NoJ%2BcMfLG98T%2BLxY3rANELKcHAPuDcRPMx5rGKkkiPQSpc5teBaI27yTs9Phc83gBah%2BaaFHxaQiacx5mQbSvPBHBBWi5fjVnyS%2FuaREvDuWFoB4w29xXU5%2BNkziIJNjEnwQVpDAiNvcsM2gg6zOOq5RHsuagdiaXKMQ%2B6V4k5N0hodXprqXzPYEVWjLjPZ0w%2FqrXwwY6pgHujsOVJHyG3BVJSx4PxHOYd2Ti3Q5cdzbiJO1S0C2ku4LkAcgKBrv6HESE3q20xwnRJLfph%2FakIM40wWPAnuSR8k1ZWSXhCmYJHQ6yfzJQoQkT8glfypFGAyw8A6dv3tJg8hTlUGDYEaxrwcnsXRjnXLM92B5P%2BJ2XeVcZAoe1ULlkq4giwjuA8QSrxi6VC%2BWVYZlO5IX8MA2IHS8ZcAeOl%2FAG3Ejy&X-Amz-Signature=2a777876bbefa0d637ad19cdc04ef88163c9774f5c6462f2db0e00b7f13afe4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNRFPNP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA%2FIgUzQK3gM636aaouAPxQfbp8lKzUl1G%2Bu7RKmsmHBAiAvnFxxeobWaeX22ofU68kMSzVHmHBIhkK0bLVBNHVTkSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMdRbvSdWHTXZu7DmSKtwDkrRgkQOomSZkyCPXZZ3MpDf5sxDczoQ5brMllXeSkEYGZJxDGgB8VIG%2BL6TGuQqbieeNmAogZH%2FFN3v2JIdoDD1%2FaPlX0TVvlJKIPETUioY1dDZRDLBxhgDRXxZaq0fYRN4zY8YSNxzHSx141NVIt7bQfW%2F79sUXCmnTSPZWwh2BlOjJi77D3zlMiitaQY7DJgIoFc%2FzzOCG9xeGUOWs5xKhhCC9gwNDfBgSGjfE7jIAqTFYOHvBjTi4JumNT%2FI5DXVrIAJLO%2Bu4mVe4u3iTJEWpd%2Fn776xQe9y%2FOpXcy6A2h2khd2zT%2Fhl%2FyS95lsGSdlU1GUQBNWJIyju1bWabukzpDiA%2B1oVcKfeBaMMYSvPrQ6R%2BppUWPtra9ZGhqcNWWLVMEFUvV3OdlYDZ3HRVPwwChrneZ2O0KL57rwivbHQlv1hlzZ50SzhNYv0NoJ%2BcMfLG98T%2BLxY3rANELKcHAPuDcRPMx5rGKkkiPQSpc5teBaI27yTs9Phc83gBah%2BaaFHxaQiacx5mQbSvPBHBBWi5fjVnyS%2FuaREvDuWFoB4w29xXU5%2BNkziIJNjEnwQVpDAiNvcsM2gg6zOOq5RHsuagdiaXKMQ%2B6V4k5N0hodXprqXzPYEVWjLjPZ0w%2FqrXwwY6pgHujsOVJHyG3BVJSx4PxHOYd2Ti3Q5cdzbiJO1S0C2ku4LkAcgKBrv6HESE3q20xwnRJLfph%2FakIM40wWPAnuSR8k1ZWSXhCmYJHQ6yfzJQoQkT8glfypFGAyw8A6dv3tJg8hTlUGDYEaxrwcnsXRjnXLM92B5P%2BJ2XeVcZAoe1ULlkq4giwjuA8QSrxi6VC%2BWVYZlO5IX8MA2IHS8ZcAeOl%2FAG3Ejy&X-Amz-Signature=0eaeb4cbc8a89a1506f6c5297c347cbcc058a40b8ab0aeeb05bff926e1c0a272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
