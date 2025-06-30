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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6ZWBMM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWw4d0SCZl4O2CAE9nb266Y8qLxUKlt4EdOrjGiS6ceAiAsxj9hR4Su7VkpEkjc1VIjni1cnPPL%2Bfz%2BmvZAeHdw1CqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoah9ivrv1Jz7JGl6KtwDBELkqJXBVjxEUD5cy4%2F1UajqsIBXHK9Qfme1lyGpiXgIoGyKdlCfp2b6fNSb0NZCPXZhyTDHXnBBNNuaoG480N1E9nV2xOJI0sz7eEbnOxu%2FgbbZXRtrB%2FWk7FbsLSWJk32tvpUeVjgKj%2FO12%2F5YOoIdOc%2B%2BlY%2BJLjrW5EqnGr1gptbkgRH4ApHoPx6cAY4zpyupRDip9nV8ApUj9gpyXw%2F%2Fe9AMCa7RFdLtI%2Bjry%2FrB0afj8cdJESabjTj%2FJjjBPHjUQLg2nHhkqSZeQUFk29Hm2scBVYA%2FOPsqHfUzLOEpv9U%2FhOx4sE6K%2B%2BsH%2BQWZXZ9I6eKFemGhDiGHaEQ2R7VJR74GxTqjG51taxiL1lop%2BA8xBtwukv2MjscDqRXWCT%2FyxZ%2BM5ZhhTvgBdSYGXarYyIHEW%2BGBkiiGJt03Lzrrt19JCjOI2vAUcGdf1f64UtGZI%2Bl%2F1hIqt3HfZGyEbrjWSo%2B95n2m3VOMXqhlIGEnKzGYjELT40G25j4zPbfhABj0u1mykc5WKGPFmKXNd8M8fs66bCn9MTYz1eaxf4KrQn7bmB863YGKOSM4abYf5eiEvINGj9toBLNklh2ODDIy8Vzl85XRPl0sREscl6ojTF4Ccl79Ff01fzgw2pOKwwY6pgEaYXfbzn3KglFZABFIVOkrqw2PavkWDkEsbu%2F8k6sxMl%2FeHH7s46MK13dVu4Fdjzh3iFjK5BBNzhb%2BND1FFGnsNPIAA1T7rz3wHV1GkEP7jca0xTqq79D1l8id9uFeOCrF1LgEmW8w0m2sHXb9aDhzkmREP1Q%2Fwoiswkg5b1CGmT4vd7yvOo9qtfRhfmWloHS8FGrNA77Nu7rtyHhwqvD5TOtsQMO1&X-Amz-Signature=aec9e868d565dee3eceff2be6dcf8624f4e37e6a271938a293cc3ecf6de7ec9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK6ZWBMM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWw4d0SCZl4O2CAE9nb266Y8qLxUKlt4EdOrjGiS6ceAiAsxj9hR4Su7VkpEkjc1VIjni1cnPPL%2Bfz%2BmvZAeHdw1CqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoah9ivrv1Jz7JGl6KtwDBELkqJXBVjxEUD5cy4%2F1UajqsIBXHK9Qfme1lyGpiXgIoGyKdlCfp2b6fNSb0NZCPXZhyTDHXnBBNNuaoG480N1E9nV2xOJI0sz7eEbnOxu%2FgbbZXRtrB%2FWk7FbsLSWJk32tvpUeVjgKj%2FO12%2F5YOoIdOc%2B%2BlY%2BJLjrW5EqnGr1gptbkgRH4ApHoPx6cAY4zpyupRDip9nV8ApUj9gpyXw%2F%2Fe9AMCa7RFdLtI%2Bjry%2FrB0afj8cdJESabjTj%2FJjjBPHjUQLg2nHhkqSZeQUFk29Hm2scBVYA%2FOPsqHfUzLOEpv9U%2FhOx4sE6K%2B%2BsH%2BQWZXZ9I6eKFemGhDiGHaEQ2R7VJR74GxTqjG51taxiL1lop%2BA8xBtwukv2MjscDqRXWCT%2FyxZ%2BM5ZhhTvgBdSYGXarYyIHEW%2BGBkiiGJt03Lzrrt19JCjOI2vAUcGdf1f64UtGZI%2Bl%2F1hIqt3HfZGyEbrjWSo%2B95n2m3VOMXqhlIGEnKzGYjELT40G25j4zPbfhABj0u1mykc5WKGPFmKXNd8M8fs66bCn9MTYz1eaxf4KrQn7bmB863YGKOSM4abYf5eiEvINGj9toBLNklh2ODDIy8Vzl85XRPl0sREscl6ojTF4Ccl79Ff01fzgw2pOKwwY6pgEaYXfbzn3KglFZABFIVOkrqw2PavkWDkEsbu%2F8k6sxMl%2FeHH7s46MK13dVu4Fdjzh3iFjK5BBNzhb%2BND1FFGnsNPIAA1T7rz3wHV1GkEP7jca0xTqq79D1l8id9uFeOCrF1LgEmW8w0m2sHXb9aDhzkmREP1Q%2Fwoiswkg5b1CGmT4vd7yvOo9qtfRhfmWloHS8FGrNA77Nu7rtyHhwqvD5TOtsQMO1&X-Amz-Signature=6c91508b73803e2e145f437f24f737b892036f7906fec652598b803ffa6f39d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
