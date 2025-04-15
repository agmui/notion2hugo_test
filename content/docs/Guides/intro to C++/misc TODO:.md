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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFUDTJPA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJiQB94XXSXzOg5f%2BP8S0KoUBYOuvs8fHDjLMOfshxQIhAKHcwmLxnQgLRDnbutMjJwsE4K5FDUJJOPhwxC74aKe5Kv8DCC0QABoMNjM3NDIzMTgzODA1Igy9qO28zpQz53oulFcq3AON3VU7kvs6qF09lMJlmQB5UCvuukQMJYZsoM8688ne53zAF8zXwE1fLAaFMZshhIxzqJXDDJ7KvPMI6nULADrJzw%2Fzm6v6LV2fytnbcQyFepR1M3NPHiZUdL6Hh%2FqsFRWu8VmICaXutdu5GVZ19jq%2FKYbLBKPwG2rTwTIUACSuTT6dcDtcoLtfvSNWxsMNdLj%2Fb7LspI9zQl3LzserUtcbxgygRxBD4abBLfP47%2BEYki%2BRQ1XHEQcEjs4nB4sm18sLh33OHaa9t2ipXa%2FmQH0uTMuxiioKNZTfcIow5xJdTBr6rght6sY9%2B7CCuUNAfD4lN31KEgt5heZMdTErQzxBWGtLEru%2ByxXaBkszmeb%2FlyzvcmkZQw7vjR2lfNxb4sClS%2BHVT6%2FBdQQ9otJVo4rTOMtT%2FUMGPk6onND7XSajy%2B2DXqcx7uOh8pc0zHOfQFbL%2FMcV70Ym9nEqNrVY8ZqwyPs15y7X%2BSDoftLu4j%2Fp6DXhbEfK6rFouSRrD3T1sgCuEb5tx%2BPRkmltPrLwBinUcufKM%2Fq5y4KMJeK9W3U6ZfMwKJ0oOYCOsNa%2FSW5VRm2uYswnj9Injx2svY8dw1pmoNmHSig1Q0NzzxSJKgZ%2FKlfiht7W9eHy%2Ft9WFzD8ivm%2FBjqkAZjvB5%2BrUSf0AcThSikR5jaTJG10VXx1DnUqJ7yX5eS%2B%2BjPUoPioYzH%2BQZ6wqm67iWjAiu2c65osmQAL%2FHv3xlVj36SVFohcoTagvXmwfpPxew9GOBO8rBtsZpdm6H29SPwd%2FVYp%2FA1ka%2BwUV3wYwcAQQv8NVcgYU60sATpKRtzhSTTiyezbEmrPZiyaji%2BU89l%2BEFIdlOCSZKNJ1uIfo%2FhkLSbV&X-Amz-Signature=f814c7e0532d1da9bcbd462e2e3dfe928d71be82bf95bf8745c2783b37cf1f10&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFUDTJPA%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkJiQB94XXSXzOg5f%2BP8S0KoUBYOuvs8fHDjLMOfshxQIhAKHcwmLxnQgLRDnbutMjJwsE4K5FDUJJOPhwxC74aKe5Kv8DCC0QABoMNjM3NDIzMTgzODA1Igy9qO28zpQz53oulFcq3AON3VU7kvs6qF09lMJlmQB5UCvuukQMJYZsoM8688ne53zAF8zXwE1fLAaFMZshhIxzqJXDDJ7KvPMI6nULADrJzw%2Fzm6v6LV2fytnbcQyFepR1M3NPHiZUdL6Hh%2FqsFRWu8VmICaXutdu5GVZ19jq%2FKYbLBKPwG2rTwTIUACSuTT6dcDtcoLtfvSNWxsMNdLj%2Fb7LspI9zQl3LzserUtcbxgygRxBD4abBLfP47%2BEYki%2BRQ1XHEQcEjs4nB4sm18sLh33OHaa9t2ipXa%2FmQH0uTMuxiioKNZTfcIow5xJdTBr6rght6sY9%2B7CCuUNAfD4lN31KEgt5heZMdTErQzxBWGtLEru%2ByxXaBkszmeb%2FlyzvcmkZQw7vjR2lfNxb4sClS%2BHVT6%2FBdQQ9otJVo4rTOMtT%2FUMGPk6onND7XSajy%2B2DXqcx7uOh8pc0zHOfQFbL%2FMcV70Ym9nEqNrVY8ZqwyPs15y7X%2BSDoftLu4j%2Fp6DXhbEfK6rFouSRrD3T1sgCuEb5tx%2BPRkmltPrLwBinUcufKM%2Fq5y4KMJeK9W3U6ZfMwKJ0oOYCOsNa%2FSW5VRm2uYswnj9Injx2svY8dw1pmoNmHSig1Q0NzzxSJKgZ%2FKlfiht7W9eHy%2Ft9WFzD8ivm%2FBjqkAZjvB5%2BrUSf0AcThSikR5jaTJG10VXx1DnUqJ7yX5eS%2B%2BjPUoPioYzH%2BQZ6wqm67iWjAiu2c65osmQAL%2FHv3xlVj36SVFohcoTagvXmwfpPxew9GOBO8rBtsZpdm6H29SPwd%2FVYp%2FA1ka%2BwUV3wYwcAQQv8NVcgYU60sATpKRtzhSTTiyezbEmrPZiyaji%2BU89l%2BEFIdlOCSZKNJ1uIfo%2FhkLSbV&X-Amz-Signature=00cbe68cfd9764bec375b04b475760fadef90c8941d0b3c1caffe3ca720b4880&X-Amz-SignedHeaders=host&x-id=GetObject)

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
