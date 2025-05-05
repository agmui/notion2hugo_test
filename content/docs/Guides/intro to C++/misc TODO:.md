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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5G2ATXT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD1jOOyjmkLLAiQzB5nSqzXPLFBNe%2BSv4XWpug49PrO%2FgIhAPacS%2BpH35uApOfbUqoduj2X2Xj%2F26oLMX4SUZjJwLyCKv8DCCcQABoMNjM3NDIzMTgzODA1Igwmq7VzRgG996D%2BuKYq3AOM4KzcXjMkZba1KS4M6xkbq5hV3edwPvYEN9xnXwdtk7XKOeMQu9cfzU3K41tjPyoJHBW20wlBwu42k9TbZ%2BCDMHHJSXrY9rQB%2BXAJTLTEeyiBPmE6s8NWe2xPIEXe0hqgA%2FjS2ykCqkcldFUqSh6M62QTlgxQsmuw7SJselloplkFwwcntgjzHlBBzfOC3TddWYjXwNzpYUf9q0IJUqQV36pXPuvwFv7PZG2iseP5dIr3VDChltt6kTI32pOKyc9lWTdYEAhDnjFMc2ExaE3xtXDuc6mb4UdNMF1IkRF1KvhdoKrS65CapFG4%2BkZW%2FOnamVekWVoltypKPrl5ADzptkk%2Bf0Kw1zgnqfzx8FEGLDYVtOFmhV1nEFBICqCwpMUmxEoz4xteeK%2BDAWhU6GwpEj5w5L20QSEyZUHu09yA8EpUjHcqufHRzQcWlmHR6HFFuMKsELeKZShFkcfHFYtvhUDQQFLXvDjjh6mjiQSKV1Z6KWoZe2vaK7SYWPYlDwhcj%2F2pqe%2FUOYKWa1fUbDwqd6kPG67UW91mmppuEAONOq1dzamKReEK8vV2HDYffPImEBYqhOIlygr89TG44zwFlDGy2rWayVQiC6aEACAPGHCcApB1cckzJOHVzTDQquHABjqkAd%2FS35HuF6IHX1JSv%2BpyCtu8QnO0flP4kVeBBOmiphobSVKmc2%2FkoYszzW0V3Uyv4I5UuHO89q1kHK26dLsQlEEv3hybr9RD1KX%2BcQcIUectTaiLCC94ejuSCuUnwdptaY48O%2BT2RpfhvLWMecDQ82ugtGjAxNMIFjd1niWtAxlANrQKwjqAj01xyXKkAaE4AhzXbbHwxbTSWhY9u5t%2FKRI6qqXH&X-Amz-Signature=599bf22ca5d39bd3bbb55a4643eb54f285a35b1ab271577618295ebeeab66da6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5G2ATXT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD1jOOyjmkLLAiQzB5nSqzXPLFBNe%2BSv4XWpug49PrO%2FgIhAPacS%2BpH35uApOfbUqoduj2X2Xj%2F26oLMX4SUZjJwLyCKv8DCCcQABoMNjM3NDIzMTgzODA1Igwmq7VzRgG996D%2BuKYq3AOM4KzcXjMkZba1KS4M6xkbq5hV3edwPvYEN9xnXwdtk7XKOeMQu9cfzU3K41tjPyoJHBW20wlBwu42k9TbZ%2BCDMHHJSXrY9rQB%2BXAJTLTEeyiBPmE6s8NWe2xPIEXe0hqgA%2FjS2ykCqkcldFUqSh6M62QTlgxQsmuw7SJselloplkFwwcntgjzHlBBzfOC3TddWYjXwNzpYUf9q0IJUqQV36pXPuvwFv7PZG2iseP5dIr3VDChltt6kTI32pOKyc9lWTdYEAhDnjFMc2ExaE3xtXDuc6mb4UdNMF1IkRF1KvhdoKrS65CapFG4%2BkZW%2FOnamVekWVoltypKPrl5ADzptkk%2Bf0Kw1zgnqfzx8FEGLDYVtOFmhV1nEFBICqCwpMUmxEoz4xteeK%2BDAWhU6GwpEj5w5L20QSEyZUHu09yA8EpUjHcqufHRzQcWlmHR6HFFuMKsELeKZShFkcfHFYtvhUDQQFLXvDjjh6mjiQSKV1Z6KWoZe2vaK7SYWPYlDwhcj%2F2pqe%2FUOYKWa1fUbDwqd6kPG67UW91mmppuEAONOq1dzamKReEK8vV2HDYffPImEBYqhOIlygr89TG44zwFlDGy2rWayVQiC6aEACAPGHCcApB1cckzJOHVzTDQquHABjqkAd%2FS35HuF6IHX1JSv%2BpyCtu8QnO0flP4kVeBBOmiphobSVKmc2%2FkoYszzW0V3Uyv4I5UuHO89q1kHK26dLsQlEEv3hybr9RD1KX%2BcQcIUectTaiLCC94ejuSCuUnwdptaY48O%2BT2RpfhvLWMecDQ82ugtGjAxNMIFjd1niWtAxlANrQKwjqAj01xyXKkAaE4AhzXbbHwxbTSWhY9u5t%2FKRI6qqXH&X-Amz-Signature=070d887bf8b7cae3a5a283d80ac34c42618eb73cc3f8e7d8c86ed1ebc8ccff0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
