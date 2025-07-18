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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGYRIA6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDTVR8crzcWCohzjSglZXoqH%2BcpHtLjK%2F7AR0ZLRovmMAiAh%2BphYkmkA7VNXseYxj5hYxzKAQWTJa7q4ELjraXc%2B%2ByqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6CoetwESWJnQ6rxlKtwDXWbJqtEaCkIiVMHvXx%2BctKPdp%2FpBqtQOdGeUnNvz8T5tFAjerb3ABOTCoXRGMXrxmbU6LhjJzo5mmbcfjb37i6akqyW2Es9pQUc%2B8iexcKpdAeA9iJEIA0GGpMpWIOp0CSKGRxzT7df%2B0O1qE9T0uTI%2FfCZ9MmAFCtbRHaK2rkCHKqLPLbOHYA6Wf92pnlEBBqzzpQUgQqUuGXrjRdPuGVT6mMCPZTMHcIHTvdNkozwS%2FKe8WWdMcB5blYhNfj5mJhhK9zO%2FABwXUqJjFRVi31VYxguFcebdttSlLYdRcScg%2BB8nleNdVlP2VRpvZXasHJv9gEwhmPf9uKxvJ9ObvDKHpEQepMy8SFEIpX6fhsMwzdwHnkkGVquLQQEDWsQjrm4H1FZmYgorQ2EA00nT7coZ0Faw9hGlIhqLz9j4SOA9J1LqS%2FEIXMjiUAWBp0vn6XllzdZ80GyEdPoWfzglAx443T%2FdMncyVerTJaMmJYgIrap3QemF1n4VxRXCgJRxypkknluOtJr%2Bgs3BEqXhjEiuocqviCskQV2L%2FnLbVgUNQl4YEQE1TZ0MhtXj0hnaf5v91Pwxx2gggqDXbtrRgr4FukSah0QAt38DC9kmUo%2Fzl6fmfZkYFjXdJaww2c%2FowwY6pgGyL83VMZILfnkH8DzPP07rvY%2B1erh5AdH9GIpvzJSdl37VIf9zCyNF303tjgTm4P%2Bu%2FhNdUTPkkqc5V8btrvtc9iSz%2FfyuKQahrAFjvkmDhL1gSouStO9yNlq2KH%2BZcNaKSCwl4OtKsUjs0jJb%2FQwDIytXi3UFVyjz5AmWR1o%2FGu3sxKqU3ilEpv3MIlsAARABBSICkd6hEOj6R6UigRpFCvaq4XnP&X-Amz-Signature=e72746b1c177316f4eed4e142f19333786c7e0a29b11002c3e133c9bcc349b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGYRIA6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDTVR8crzcWCohzjSglZXoqH%2BcpHtLjK%2F7AR0ZLRovmMAiAh%2BphYkmkA7VNXseYxj5hYxzKAQWTJa7q4ELjraXc%2B%2ByqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6CoetwESWJnQ6rxlKtwDXWbJqtEaCkIiVMHvXx%2BctKPdp%2FpBqtQOdGeUnNvz8T5tFAjerb3ABOTCoXRGMXrxmbU6LhjJzo5mmbcfjb37i6akqyW2Es9pQUc%2B8iexcKpdAeA9iJEIA0GGpMpWIOp0CSKGRxzT7df%2B0O1qE9T0uTI%2FfCZ9MmAFCtbRHaK2rkCHKqLPLbOHYA6Wf92pnlEBBqzzpQUgQqUuGXrjRdPuGVT6mMCPZTMHcIHTvdNkozwS%2FKe8WWdMcB5blYhNfj5mJhhK9zO%2FABwXUqJjFRVi31VYxguFcebdttSlLYdRcScg%2BB8nleNdVlP2VRpvZXasHJv9gEwhmPf9uKxvJ9ObvDKHpEQepMy8SFEIpX6fhsMwzdwHnkkGVquLQQEDWsQjrm4H1FZmYgorQ2EA00nT7coZ0Faw9hGlIhqLz9j4SOA9J1LqS%2FEIXMjiUAWBp0vn6XllzdZ80GyEdPoWfzglAx443T%2FdMncyVerTJaMmJYgIrap3QemF1n4VxRXCgJRxypkknluOtJr%2Bgs3BEqXhjEiuocqviCskQV2L%2FnLbVgUNQl4YEQE1TZ0MhtXj0hnaf5v91Pwxx2gggqDXbtrRgr4FukSah0QAt38DC9kmUo%2Fzl6fmfZkYFjXdJaww2c%2FowwY6pgGyL83VMZILfnkH8DzPP07rvY%2B1erh5AdH9GIpvzJSdl37VIf9zCyNF303tjgTm4P%2Bu%2FhNdUTPkkqc5V8btrvtc9iSz%2FfyuKQahrAFjvkmDhL1gSouStO9yNlq2KH%2BZcNaKSCwl4OtKsUjs0jJb%2FQwDIytXi3UFVyjz5AmWR1o%2FGu3sxKqU3ilEpv3MIlsAARABBSICkd6hEOj6R6UigRpFCvaq4XnP&X-Amz-Signature=21529331f2c1ea80bb0017a8f5ee7248e3c8ff1984703f665a9ad404febfbe9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
