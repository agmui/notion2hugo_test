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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBR423W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGWd4hjRJHMsAPcjhJLIPjBFMBb4fW9cz4N1qxJMSYUxAiABJNgjk4x%2FczusqtTC%2Fvr848AIPGKZ5JZw%2Fn069yHR2CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ37LbUniCRxWkS%2FhKtwDPmq0da8dxbFMIDPKilVqBTHwMFhBf6wDBD25ap4nfrQ6beJNhrzkfquORytMvSUGjREoN%2Fqd56L0h7aCKt6AW15QAbe2GLfvUWWjXm0oq6jmqRFOxQ3fa6fJhRvKfn6l0bAuMh64LWoQoYAeVIVaasRcLzAdCyHPvAXcZnUkqyr5yXqq4AZ5B7Se%2BgbhMNgCRWW2NEsIbPI5r0qcwsFmOg5GnoWzTWjsiei5EeqeaPVNrZDDQEyup6M58fOBgLNlmOwbVCr5TDpMdk5Y5yOMSrZyoNtcmvuBYeBJqlq6k5a9nJ2YWv6BW4ca1OVYwyZWyYBGNH0bD%2FakJ2kH%2BZE41CKXMYUa2wrbpKQVnvYwMFrfBBJK8tOQI84iqKYWas7MTEdBRYCMuPE%2F6AIKUDE1k5SiKLZc2tTmAK9m%2BRDydmroAjF6TyVCjSXsBdl4UhIWjhgYQP3MUise4RfzefAyOhmwcOIZQXaI2fDwc%2BI52n36CQq3sKgfgtGb7IcCPCwpySePUN0hWymSHv5JRNBsQt6GIcALSJSrSudN%2Fe1K2x4ZHLTtTC6VcQJ4xPm8tHkRl6zxqSMBcDR4beoaoUBZXhEn8sMJIDOoQZK%2FAMzHGPCeZgELu6Ybka9FuOMwtLiQwQY6pgGM0PO2c7%2BZ0Moi%2B%2FXw8V0kYG9xNQipYaKLKdYI3528XfO%2BId5QDf4%2BlvTPDBBsmYL4SXPrhp3F0zHSpmIfwq5fK6CC%2B2Prm3T8bfbFEcQRZV2Cu%2FjLKMcqrEEGrek4%2FsX5sX5PO4A%2BFkTSQOz1xHND8ouImFCgUU981k8TZ5EplHnA74OmzsFBUjs162xLt1NXiiQKR0Q2l%2B6XtedNUQDc3UglMhxm&X-Amz-Signature=e6f1b2f753033929350efa49cdcbd211cdf8655a0d2a9c1e648a2eca6dbf2e04&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBR423W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGWd4hjRJHMsAPcjhJLIPjBFMBb4fW9cz4N1qxJMSYUxAiABJNgjk4x%2FczusqtTC%2Fvr848AIPGKZ5JZw%2Fn069yHR2CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ37LbUniCRxWkS%2FhKtwDPmq0da8dxbFMIDPKilVqBTHwMFhBf6wDBD25ap4nfrQ6beJNhrzkfquORytMvSUGjREoN%2Fqd56L0h7aCKt6AW15QAbe2GLfvUWWjXm0oq6jmqRFOxQ3fa6fJhRvKfn6l0bAuMh64LWoQoYAeVIVaasRcLzAdCyHPvAXcZnUkqyr5yXqq4AZ5B7Se%2BgbhMNgCRWW2NEsIbPI5r0qcwsFmOg5GnoWzTWjsiei5EeqeaPVNrZDDQEyup6M58fOBgLNlmOwbVCr5TDpMdk5Y5yOMSrZyoNtcmvuBYeBJqlq6k5a9nJ2YWv6BW4ca1OVYwyZWyYBGNH0bD%2FakJ2kH%2BZE41CKXMYUa2wrbpKQVnvYwMFrfBBJK8tOQI84iqKYWas7MTEdBRYCMuPE%2F6AIKUDE1k5SiKLZc2tTmAK9m%2BRDydmroAjF6TyVCjSXsBdl4UhIWjhgYQP3MUise4RfzefAyOhmwcOIZQXaI2fDwc%2BI52n36CQq3sKgfgtGb7IcCPCwpySePUN0hWymSHv5JRNBsQt6GIcALSJSrSudN%2Fe1K2x4ZHLTtTC6VcQJ4xPm8tHkRl6zxqSMBcDR4beoaoUBZXhEn8sMJIDOoQZK%2FAMzHGPCeZgELu6Ybka9FuOMwtLiQwQY6pgGM0PO2c7%2BZ0Moi%2B%2FXw8V0kYG9xNQipYaKLKdYI3528XfO%2BId5QDf4%2BlvTPDBBsmYL4SXPrhp3F0zHSpmIfwq5fK6CC%2B2Prm3T8bfbFEcQRZV2Cu%2FjLKMcqrEEGrek4%2FsX5sX5PO4A%2BFkTSQOz1xHND8ouImFCgUU981k8TZ5EplHnA74OmzsFBUjs162xLt1NXiiQKR0Q2l%2B6XtedNUQDc3UglMhxm&X-Amz-Signature=bdd48b2e81003f64453234686a6fb80fc71493c38f5e86d9860f18494b6ee953&X-Amz-SignedHeaders=host&x-id=GetObject)

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
