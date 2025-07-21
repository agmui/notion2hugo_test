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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBVEGET%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIWx9OlEhhNYgKL3sb5NU%2F8mZpQn1LINcAV2l0JhPElgIgZaI82kTN%2BqxWgYmg79eiFd%2BM3xgPeN6mIk5wkt7WUZkqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTXSxMtP31f545JVSrcA%2BggHKGTpJoJPN1SFCCXBX4IwsqtRHTSW0q5kD4vQ1Gs%2BgBayGmgYO6rRONVUSDdNv2EmU59FhOdiJMndVEIM%2Btw%2FdZezzWzEUsFncUGZ63uZsy9SNNnB6owjHXOfB9FqnRX9HO3yNh7UeN%2B4VvNIOybftYkO4AKfbMBZk366tTvebsogduxs%2F%2FltJ4YgeqjkayGpbAF1MTNF76ITZwh7vFf0C8KkvdJLGJ0zxBtsGw4Ift12PuzPF80v%2FKkMwyLx4%2FgDytsjaAIMqYY8AgwkgIDQout%2FV1HdwH5ctvpeQci5S9yAeUSJxb5yM0EzwCHEuefxSJOj%2BCRo4B0l%2F3ReLW40vHPR4dZmI89Eyr9Xs1sgbaXN%2BsEPHkJYKDzQiKspzI65Ua34N8Lz1ha60R949XJ3Wf7G8ixEVEFEG7wBqvvHP6L6AtiWnNrOIwMPtmVfUu%2FYqU4tCbi8RMAJq8wa38mT11y3JpHAhTzW1gyfMw3qpaeStVnc6qXIl0hiuRBj%2FEXYcY9y25%2BxrOyK5KlnppGJhGLAmkocweFCHHgemF6cVMWmOBL8cJNpDPqpMqQNfav0KHIllC0%2FL0CWNqlDmSfwfx%2B6Ae8pgqXTDsW01O8F6Z8TIKOn7PQgClmMMLE%2BcMGOqUBoWOz1HmYW2HspQfBt8OZCg1qZmLrOKkrkPk3IW1ruIRRaOhyayVxhrdcUP7qmO79Gt1MB5VUzRXogH4vqtPWmrJgJ11zHu7akOFF2npIyRPP6tPxzPq1sQRFzhmI556X6D4rDlGyQqHYzCgwXqGWpLCP48ZYeb7oW3ABxT9enIaBJs8dCab5e0%2FCea%2BTPEBS%2FvT1d2LdI0Y1FHKHJ7uiT4%2FBIAxa&X-Amz-Signature=6ea59aea3809aaccb23c48da950a781235c1397a71d0e1a5ff6f2419c084bccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBVEGET%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIWx9OlEhhNYgKL3sb5NU%2F8mZpQn1LINcAV2l0JhPElgIgZaI82kTN%2BqxWgYmg79eiFd%2BM3xgPeN6mIk5wkt7WUZkqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTXSxMtP31f545JVSrcA%2BggHKGTpJoJPN1SFCCXBX4IwsqtRHTSW0q5kD4vQ1Gs%2BgBayGmgYO6rRONVUSDdNv2EmU59FhOdiJMndVEIM%2Btw%2FdZezzWzEUsFncUGZ63uZsy9SNNnB6owjHXOfB9FqnRX9HO3yNh7UeN%2B4VvNIOybftYkO4AKfbMBZk366tTvebsogduxs%2F%2FltJ4YgeqjkayGpbAF1MTNF76ITZwh7vFf0C8KkvdJLGJ0zxBtsGw4Ift12PuzPF80v%2FKkMwyLx4%2FgDytsjaAIMqYY8AgwkgIDQout%2FV1HdwH5ctvpeQci5S9yAeUSJxb5yM0EzwCHEuefxSJOj%2BCRo4B0l%2F3ReLW40vHPR4dZmI89Eyr9Xs1sgbaXN%2BsEPHkJYKDzQiKspzI65Ua34N8Lz1ha60R949XJ3Wf7G8ixEVEFEG7wBqvvHP6L6AtiWnNrOIwMPtmVfUu%2FYqU4tCbi8RMAJq8wa38mT11y3JpHAhTzW1gyfMw3qpaeStVnc6qXIl0hiuRBj%2FEXYcY9y25%2BxrOyK5KlnppGJhGLAmkocweFCHHgemF6cVMWmOBL8cJNpDPqpMqQNfav0KHIllC0%2FL0CWNqlDmSfwfx%2B6Ae8pgqXTDsW01O8F6Z8TIKOn7PQgClmMMLE%2BcMGOqUBoWOz1HmYW2HspQfBt8OZCg1qZmLrOKkrkPk3IW1ruIRRaOhyayVxhrdcUP7qmO79Gt1MB5VUzRXogH4vqtPWmrJgJ11zHu7akOFF2npIyRPP6tPxzPq1sQRFzhmI556X6D4rDlGyQqHYzCgwXqGWpLCP48ZYeb7oW3ABxT9enIaBJs8dCab5e0%2FCea%2BTPEBS%2FvT1d2LdI0Y1FHKHJ7uiT4%2FBIAxa&X-Amz-Signature=6b3d8a8532a4d2f222be6527146876fe6942882513e85d09c8b1972f1d2b73ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
