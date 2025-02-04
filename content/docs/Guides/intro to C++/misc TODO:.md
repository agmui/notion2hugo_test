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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCZ26D5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCnAvytoqVuy2N4eS747reIQ%2FJHdUcSTVpVG%2BiFJc%2BxgwIhANuB5J8vMFSnnvEslt%2BwGoN8KPQM0F2TiB5hWxQCCT6WKv8DCDIQABoMNjM3NDIzMTgzODA1IgxBXP%2FVYX5N9u%2Bzb6Uq3APsP1FD%2FubPvJhXmwDfUkuQ1Dt6jyQMILqUWdcSZ6QToia8Q5OXZMshR%2FYuJSh6hzm3ji72wd0z8CcuFJYuIVTCnHk9vxtqqr8H68rVg43BDpHI0x0ALCRRLcpQQPPwE18pwHl7nRqWx7GYE09Mx8QyDkglMRoTFnVKOwMsNvmX3XhDxNiqbkwH6%2BY14DJHnvkVBp9SXiazeUgTLokpjjy%2Bwg%2FKpRsF953ktir9W%2BPyyCRArrS3tetBTorYt1fCvlxajJ6qz8wz2gXAOZSjs%2BbXmgHN%2BgJP5kMm5UoqNw2jz8%2FE2n3t%2F827yObGoHlhGlcH7c9u8ragZkJFMtW2%2FDj6ylQqBJJWlDR3BI1jFxMl0fXaCthIyx%2Bzc3S0hF6C2kXXFVEWKso5z5AI6ePH0HHvLxaRQkEj4%2FIZTT0tXOzNMlIOAIlDepPra9WP6IeyNEPOYlFN0esCsfVXyLFoBBzxM%2FfB%2B6kPdCvey8E7HhTCFZUPa%2BA1Gsr4jF2Ma9F33mV0a2GTr9zG8uOx7K4sFjmotolhSQeDsq9jUjYWL4LfE%2F7WHldGFXlGiAW6A0Hv7%2BFZKvNcvg5POKLEUVBXtuSmNuqmci%2FKYSm1nZvzJ9gjVobxbdjGp3h5lO7rrTDphYm9BjqkATkjIUl2MJVzCRHuYpoyFqPidWKdY7nK7zlziSjWMRvORo0eh5pet5HJWnjq%2BEa1CZ8Hi9eRuyUycXALDYLvfJLe80WmrQS5cU%2Fa%2FYW5Pk5vGahpBESLkov5HMUunYdSKs9loZNTE%2B9x1skSNQniEFOphUz1mkEMc8vbUJrlWW8%2F3HwSQlb4N17P6uCBuIIu5JXtREM3wanwerhJJ%2Fa19BIRmsfC&X-Amz-Signature=6dcadb8efb200aa2817879f30fdacef4a9ea13085535f85bc0604623e63f0bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCZ26D5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCnAvytoqVuy2N4eS747reIQ%2FJHdUcSTVpVG%2BiFJc%2BxgwIhANuB5J8vMFSnnvEslt%2BwGoN8KPQM0F2TiB5hWxQCCT6WKv8DCDIQABoMNjM3NDIzMTgzODA1IgxBXP%2FVYX5N9u%2Bzb6Uq3APsP1FD%2FubPvJhXmwDfUkuQ1Dt6jyQMILqUWdcSZ6QToia8Q5OXZMshR%2FYuJSh6hzm3ji72wd0z8CcuFJYuIVTCnHk9vxtqqr8H68rVg43BDpHI0x0ALCRRLcpQQPPwE18pwHl7nRqWx7GYE09Mx8QyDkglMRoTFnVKOwMsNvmX3XhDxNiqbkwH6%2BY14DJHnvkVBp9SXiazeUgTLokpjjy%2Bwg%2FKpRsF953ktir9W%2BPyyCRArrS3tetBTorYt1fCvlxajJ6qz8wz2gXAOZSjs%2BbXmgHN%2BgJP5kMm5UoqNw2jz8%2FE2n3t%2F827yObGoHlhGlcH7c9u8ragZkJFMtW2%2FDj6ylQqBJJWlDR3BI1jFxMl0fXaCthIyx%2Bzc3S0hF6C2kXXFVEWKso5z5AI6ePH0HHvLxaRQkEj4%2FIZTT0tXOzNMlIOAIlDepPra9WP6IeyNEPOYlFN0esCsfVXyLFoBBzxM%2FfB%2B6kPdCvey8E7HhTCFZUPa%2BA1Gsr4jF2Ma9F33mV0a2GTr9zG8uOx7K4sFjmotolhSQeDsq9jUjYWL4LfE%2F7WHldGFXlGiAW6A0Hv7%2BFZKvNcvg5POKLEUVBXtuSmNuqmci%2FKYSm1nZvzJ9gjVobxbdjGp3h5lO7rrTDphYm9BjqkATkjIUl2MJVzCRHuYpoyFqPidWKdY7nK7zlziSjWMRvORo0eh5pet5HJWnjq%2BEa1CZ8Hi9eRuyUycXALDYLvfJLe80WmrQS5cU%2Fa%2FYW5Pk5vGahpBESLkov5HMUunYdSKs9loZNTE%2B9x1skSNQniEFOphUz1mkEMc8vbUJrlWW8%2F3HwSQlb4N17P6uCBuIIu5JXtREM3wanwerhJJ%2Fa19BIRmsfC&X-Amz-Signature=94bc5a71991f23470ee58ea1f67b9ba345827ea8789d1685d1d2f25c4cd1c08e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
