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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQTEPQY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbW8lP%2FYD5Iwc4rRcguHhVGeV6tFwzQ0oTiQ6w62CxWgIhANrFWU528JqE0iuGqMOoQh5MKcvo7b554qpDtNVc%2Fo%2BKKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyShkZ6Ms3f4ZKK6kcq3AMIUy7a8YSccRlHnp%2BXnlrFUS4l3pj9flns26mTRNm3MjCnD6lxQPaOWKc5tknfmJWSfjyU0lAGe6%2BRK29gMLH%2BR0XF81gZ5AVrWCKNDP%2FHwNk5Td5Ex8%2F3dhsRxaJS3BX%2F9MA9hH%2BcUioB60PHE10I9I7KlbNfWB6GSmi7DAZ8Ycwab1XhirVmW%2FmVojQLTJxwoG6ttcppELbPlds258KWnfxYRVoSxiVa%2BGBfd5VCbPREDrtZQQCTELTfnQSrMuW0ygAPifZvJTRKMIwyI0d%2FdlsSSQjvsa3vd6vHfKJacZ6guJF9z9YQDJNQcp6FBOUSn5RcLruNGirBHCrrs1Y6luVsiZ%2Bw3rzrQXpd6aQtn06SQvVAEDGvpuXH%2FFNi6j1qdoiEW%2BfDV491phwoUaEZTAGKcVMZ6ogz44O%2FwC8TJbOMcOr0ay0HyMfYzOUe%2Flz%2FwBjjrj9ZNDT2kIrAnrVSxIQ7o%2FDPxuXPX1b9OrwDSWA4QjM8XjzF3%2B1xvbvrSc%2F674e6pe4SD75yMSj9HKnx7Bl0gEb6Kxzy6ypWM%2FOqJ199n3d%2Fdl7oXmG%2FWI8x3%2FW3JhNoK2SfHv2kDNSMASA4SChNxhKgZT44frfx75vp3lOTNaQANvuYaXrYuDDVlbDBBjqkAYPxSzAUe0UTTWmFg8q7sf%2F9AjsimHI7V2WZ7GNn6RDO4dAmfd6TSWhJEAgVuvmMfviVsBuJTEsaiY4YUggi913WGNxGx%2BU7R72XmzrGDQbEVr1y7UbobBlr3UeFYnABZhoKsdu1%2FNTbsCkwjWSURRaVhMbXqYx7Y4LC0MVDBKaAR%2BFlDa9%2FanV6UST6kFY1pkT4SVbfhprJQooxMjKiBKBd4Ixs&X-Amz-Signature=dba1520311e04a819bf5cdc11bda16b5c10eb238cb7820e5bfe1dad57a5dc1f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQTEPQY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbW8lP%2FYD5Iwc4rRcguHhVGeV6tFwzQ0oTiQ6w62CxWgIhANrFWU528JqE0iuGqMOoQh5MKcvo7b554qpDtNVc%2Fo%2BKKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyShkZ6Ms3f4ZKK6kcq3AMIUy7a8YSccRlHnp%2BXnlrFUS4l3pj9flns26mTRNm3MjCnD6lxQPaOWKc5tknfmJWSfjyU0lAGe6%2BRK29gMLH%2BR0XF81gZ5AVrWCKNDP%2FHwNk5Td5Ex8%2F3dhsRxaJS3BX%2F9MA9hH%2BcUioB60PHE10I9I7KlbNfWB6GSmi7DAZ8Ycwab1XhirVmW%2FmVojQLTJxwoG6ttcppELbPlds258KWnfxYRVoSxiVa%2BGBfd5VCbPREDrtZQQCTELTfnQSrMuW0ygAPifZvJTRKMIwyI0d%2FdlsSSQjvsa3vd6vHfKJacZ6guJF9z9YQDJNQcp6FBOUSn5RcLruNGirBHCrrs1Y6luVsiZ%2Bw3rzrQXpd6aQtn06SQvVAEDGvpuXH%2FFNi6j1qdoiEW%2BfDV491phwoUaEZTAGKcVMZ6ogz44O%2FwC8TJbOMcOr0ay0HyMfYzOUe%2Flz%2FwBjjrj9ZNDT2kIrAnrVSxIQ7o%2FDPxuXPX1b9OrwDSWA4QjM8XjzF3%2B1xvbvrSc%2F674e6pe4SD75yMSj9HKnx7Bl0gEb6Kxzy6ypWM%2FOqJ199n3d%2Fdl7oXmG%2FWI8x3%2FW3JhNoK2SfHv2kDNSMASA4SChNxhKgZT44frfx75vp3lOTNaQANvuYaXrYuDDVlbDBBjqkAYPxSzAUe0UTTWmFg8q7sf%2F9AjsimHI7V2WZ7GNn6RDO4dAmfd6TSWhJEAgVuvmMfviVsBuJTEsaiY4YUggi913WGNxGx%2BU7R72XmzrGDQbEVr1y7UbobBlr3UeFYnABZhoKsdu1%2FNTbsCkwjWSURRaVhMbXqYx7Y4LC0MVDBKaAR%2BFlDa9%2FanV6UST6kFY1pkT4SVbfhprJQooxMjKiBKBd4Ixs&X-Amz-Signature=de5c857a552ee628e2c59fd7488b18baca82b931f29d934a9d5b058f5bff7bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
