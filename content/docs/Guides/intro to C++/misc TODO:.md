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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4S23XHE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHey1yGRyfe8h8K0B7O9fS5w%2BpnNepsshUHa0cMTm8GSAiAdGUx2ndZNGrjsEUgftaN79XcKt3zBdEBWBo%2FtvHsqAyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2IE13SW2OMfZ1vEKtwDUFxPLlgbrv8TdMZDVZewPi1toeYRdSuqjhguuIi4p5CMK0%2Fyu5tahyZYZ%2Fg3Q3WylbqUkCIrknsLKXVmGG7YtoSv0fxQBd%2BJVyCfLJugA3EGEO%2FEA%2BMyf2y9YHPigRV36CjjcdXE6QoEZUTWxXfrU1R109XtUkMD%2B5gsrIUcuqaAW4wrQ%2BZfBzPbQ%2F92ThKyv56azTIqm0YIxsOiCWXkg3uFbXBe69ju95ZIa3Jon%2Btxvg7dR76XO33XJq7Wq9GDMb%2BFYju%2BnBZpOnoZqe0Be3vFhKjJQgUN2hoRVCwEVG8n5afoh74%2F1zlUAGtIxnFNbgdIn6apmjP8ihXmNF93piXMDPOWCqTta4hHSpLdjHs6nWMxyL2%2FkuOhuQqKXogQQ1zNa4wlgNNfggZfEVAetpspEYVwUuwgCd6WXR2QazOzBzkQ9tXzMc02H%2BbTsMGMggAXfEGg%2BKU0hUDL9N67%2FcTm8rgp4JOPIQuBcF14yBM7nP8AdxdXUSzH7Te5HbuBIRaE0fhXmq3%2FTNuJw3F9njYGSMKDgAInNv22AzrDwjmP1O5VyjX4Teh9Tqo3CYRwr%2FQ0HE6J4R4kGG18NxP8t2%2FVBwkFb0tpnVnNJkr0h4SLdkPe6KUh%2BEBP8Z8w4tPnvwY6pgETt1M9%2Bzrod3EKeZ3Uk81CJhdUqKvdyi4UR1AOWZBndTOUesCdjNFMB2XJmrYCGQoIqXfxSFl9QyLFSswTId9JSHpmrFWmgTPgECTVIwpaEaA9Z2HRm2jycgMXjOq4riFyqpTih2EoLTr7ZUi0LsHsBvfJN8bWUnnjaoF0D%2F%2FQhqfFwQmt1mYsKd4zNXsBeyElDg8utdr%2BrU%2F9nUBSDA0akW2R5wB5&X-Amz-Signature=d8db9bd97d3f191ff1711ba72aea57e508706b0257b65fe396480dc3643ab654&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4S23XHE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHey1yGRyfe8h8K0B7O9fS5w%2BpnNepsshUHa0cMTm8GSAiAdGUx2ndZNGrjsEUgftaN79XcKt3zBdEBWBo%2FtvHsqAyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx2IE13SW2OMfZ1vEKtwDUFxPLlgbrv8TdMZDVZewPi1toeYRdSuqjhguuIi4p5CMK0%2Fyu5tahyZYZ%2Fg3Q3WylbqUkCIrknsLKXVmGG7YtoSv0fxQBd%2BJVyCfLJugA3EGEO%2FEA%2BMyf2y9YHPigRV36CjjcdXE6QoEZUTWxXfrU1R109XtUkMD%2B5gsrIUcuqaAW4wrQ%2BZfBzPbQ%2F92ThKyv56azTIqm0YIxsOiCWXkg3uFbXBe69ju95ZIa3Jon%2Btxvg7dR76XO33XJq7Wq9GDMb%2BFYju%2BnBZpOnoZqe0Be3vFhKjJQgUN2hoRVCwEVG8n5afoh74%2F1zlUAGtIxnFNbgdIn6apmjP8ihXmNF93piXMDPOWCqTta4hHSpLdjHs6nWMxyL2%2FkuOhuQqKXogQQ1zNa4wlgNNfggZfEVAetpspEYVwUuwgCd6WXR2QazOzBzkQ9tXzMc02H%2BbTsMGMggAXfEGg%2BKU0hUDL9N67%2FcTm8rgp4JOPIQuBcF14yBM7nP8AdxdXUSzH7Te5HbuBIRaE0fhXmq3%2FTNuJw3F9njYGSMKDgAInNv22AzrDwjmP1O5VyjX4Teh9Tqo3CYRwr%2FQ0HE6J4R4kGG18NxP8t2%2FVBwkFb0tpnVnNJkr0h4SLdkPe6KUh%2BEBP8Z8w4tPnvwY6pgETt1M9%2Bzrod3EKeZ3Uk81CJhdUqKvdyi4UR1AOWZBndTOUesCdjNFMB2XJmrYCGQoIqXfxSFl9QyLFSswTId9JSHpmrFWmgTPgECTVIwpaEaA9Z2HRm2jycgMXjOq4riFyqpTih2EoLTr7ZUi0LsHsBvfJN8bWUnnjaoF0D%2F%2FQhqfFwQmt1mYsKd4zNXsBeyElDg8utdr%2BrU%2F9nUBSDA0akW2R5wB5&X-Amz-Signature=82d0f437cc6fa3e1c68c0d4e7cc0ad5be40a552d46d7020d0463a87722933baa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
