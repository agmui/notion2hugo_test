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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2M7YWTL%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9kfWsfLublrTxe%2BU1mlvvTF282sM731UwtLRxxGlJ7gIhAP%2F1gKALiMza%2Fw6Qa3Vbt7IRa61Dv%2FaGLFRQscLS38xdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNxphMgQoDdv6zIm0q3AMuohUWhzeiQHE4XX5tYXaqnBsBcuALPHsO2umYlhvBNbrJ074LfbYT9ZhR4M0rVNFcHP%2FytmZpWSoH98u%2F7%2Bzh3LkFIbsoferkAS3vbhyT%2FVUUoyuGAB9G78DhIXgBDtgwav%2BTcujVQMSTBe1C6VvM2brNXfV63LwxNtK6f3xMEYpN%2Fzjq0KUC0ow5MfnLuK9tTq44KvBlEigMBAeRpG%2BTSGaUdXcR7eoMsftewyr56WeqO3bOPLhrZIuPcaSuyTQVm1OcPHsSsHhbxEnbe6LnxMhL96gSKDjeyKwyTVbc%2BHqL%2BPE98%2Fnoz3XZbvsipwBxzIjzvgEniSQ8ve3OvyGH%2BJ1IFGba53AbBV%2BjQYYskounB7zxmOmXajAbzdR6efB6vC0VuL96RkZpBlaUub50%2BMLSErl6%2FUev9aPzk4zSsM%2Bs06kT3mT5o9wKeSzvUbTHCDC%2B%2BbotM7GQ19%2B20Fv%2FqEYWGe77am%2FRwPsLWS%2BqLdrYiXC4mZofKNR%2FUjaefRV2CLyNvt5CJHr3iCtV85idG1WP9Yg8g%2F31CS4t5RQejmDl9Uj0%2FMsuI%2FV3LdTncW9%2F5Vbb3%2FnlWU5fqbqiHnIr2BmowtM6QgDEGTtVveClmuuHuXhLt%2FRwS9WmsDD2v5jRBjqkAfN1HVzejlEPRLpcxNLfn8fCfHCqQbcE5p4oxB3sr6cn4GIBM9k%2BUB%2F%2BEjKm6QQCeBV%2BSpzjKYa5w0A5whOdF0GQg0VFcm4MAeHeO7Yio8veFGud%2F%2B7e6vrV7aTHM1wLAwnaCV33i8HVdIGd9SBjB5bciR7Yd4HAjlrB3Q4XjR87xCUGT8Nd4ZNSZ%2BmdzS9LdvlMJ2LzPI7%2F2IaG7rFlDy%2BLBvm%2F&X-Amz-Signature=a72e53c78346381e9862eeadc64409b1df745ec3f74b3d53168adfab0102211e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2M7YWTL%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9kfWsfLublrTxe%2BU1mlvvTF282sM731UwtLRxxGlJ7gIhAP%2F1gKALiMza%2Fw6Qa3Vbt7IRa61Dv%2FaGLFRQscLS38xdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNxphMgQoDdv6zIm0q3AMuohUWhzeiQHE4XX5tYXaqnBsBcuALPHsO2umYlhvBNbrJ074LfbYT9ZhR4M0rVNFcHP%2FytmZpWSoH98u%2F7%2Bzh3LkFIbsoferkAS3vbhyT%2FVUUoyuGAB9G78DhIXgBDtgwav%2BTcujVQMSTBe1C6VvM2brNXfV63LwxNtK6f3xMEYpN%2Fzjq0KUC0ow5MfnLuK9tTq44KvBlEigMBAeRpG%2BTSGaUdXcR7eoMsftewyr56WeqO3bOPLhrZIuPcaSuyTQVm1OcPHsSsHhbxEnbe6LnxMhL96gSKDjeyKwyTVbc%2BHqL%2BPE98%2Fnoz3XZbvsipwBxzIjzvgEniSQ8ve3OvyGH%2BJ1IFGba53AbBV%2BjQYYskounB7zxmOmXajAbzdR6efB6vC0VuL96RkZpBlaUub50%2BMLSErl6%2FUev9aPzk4zSsM%2Bs06kT3mT5o9wKeSzvUbTHCDC%2B%2BbotM7GQ19%2B20Fv%2FqEYWGe77am%2FRwPsLWS%2BqLdrYiXC4mZofKNR%2FUjaefRV2CLyNvt5CJHr3iCtV85idG1WP9Yg8g%2F31CS4t5RQejmDl9Uj0%2FMsuI%2FV3LdTncW9%2F5Vbb3%2FnlWU5fqbqiHnIr2BmowtM6QgDEGTtVveClmuuHuXhLt%2FRwS9WmsDD2v5jRBjqkAfN1HVzejlEPRLpcxNLfn8fCfHCqQbcE5p4oxB3sr6cn4GIBM9k%2BUB%2F%2BEjKm6QQCeBV%2BSpzjKYa5w0A5whOdF0GQg0VFcm4MAeHeO7Yio8veFGud%2F%2B7e6vrV7aTHM1wLAwnaCV33i8HVdIGd9SBjB5bciR7Yd4HAjlrB3Q4XjR87xCUGT8Nd4ZNSZ%2BmdzS9LdvlMJ2LzPI7%2F2IaG7rFlDy%2BLBvm%2F&X-Amz-Signature=f6ed5917fbb90a2e8f20dce8bb0ec638f3d1d17e0bf6f36879e887b2669e3054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
