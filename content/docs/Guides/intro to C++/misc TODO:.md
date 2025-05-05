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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPG7FAZK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzZ84v5yqUsDZW%2B%2BurgCY4V5fknZ5x8GztQxlY4xsXDAiEAps%2F3I1YRNRnAkfxzz6ubtSvkpRb0H8qpABnSIFWLVREq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNlAGXbgm%2FUP2q%2F%2FqyrcA94O9JDzoYMTrHn%2FFtFyiMMGQM3zoKxc%2FLhjLMRBjCmjRnBaZkNTxLX2WW6395f0%2FY9Ldf5uhxx%2FJzoqONKIUz48bhTJVXdm816bGj5E%2FgPOcb5%2BqzgMJZgbRrYVg%2BjeWNHmLkHqdq7NyvbKIP41pfYwRcmrmTRQz%2B%2BTextmeo0DTi9x9CZ5sHodSLmqIZyur0mQWRQA6LudLwHI23Eu%2BhAF%2FLb%2FcSpfVEyTAumuk72eLRrDnSK538KRNX2D32lFz4kEQxq5tAMKfCBqh2cQzBxfcwcGQuCVyy4zbLER5UwmShveyAY4EqV%2FWHQPOXd1aFL1YY5PEoYvOM0HFLHG7SSrzakyT%2FVwPt9zUfLfKEIDnhcPDrzOJOJGIT7zRby9hFYZ34gpfrIQkfUNWT%2F4amgbjixpqNlmhEdtbPnsI0txH%2BTs%2FboJgDr3RqCAvYmDMMimq73RN3UMblR2QTXAMp0%2FJ92R3RbBmYTu3bRmd24SbmFsXq75ANFUFf1dioCTT6zs3AbRAhrF9JRoI2pj2empTUrS8dJN6kVZ9KOGOMxjot%2FgQXWQ4qs1sz4hd4HYaL4pO%2Ft9TSQXroG1FDNaxYJtViChWSu30Z3Gi0JkS8DgPrdva9jxL5n3NrjKMNOW4sAGOqUBt0LrMrFb1FHrffJWTI0NzyWHwQZWOUYR9rDk3LtYsrv44VfWXbytW9bxUE%2BRzDYtr4TW81vqVwbGkTDLYFkrpoGjL%2B%2BUOmfw3PN9g4LA9fT3gQFlJExeRg6MVIKx72fdLzC1mxGqY2v9E3FzPjmu8iq7NoqGtNgZfGXUpRTuWxTDAFacelWb0F2ODvGCEylbQMvl1s4P6jpjdxW3uDseB1h4939o&X-Amz-Signature=e7965a19248539553b9a6a0bd18028e3c6e50b884eb2e0374cccc91059b364b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPG7FAZK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzZ84v5yqUsDZW%2B%2BurgCY4V5fknZ5x8GztQxlY4xsXDAiEAps%2F3I1YRNRnAkfxzz6ubtSvkpRb0H8qpABnSIFWLVREq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNlAGXbgm%2FUP2q%2F%2FqyrcA94O9JDzoYMTrHn%2FFtFyiMMGQM3zoKxc%2FLhjLMRBjCmjRnBaZkNTxLX2WW6395f0%2FY9Ldf5uhxx%2FJzoqONKIUz48bhTJVXdm816bGj5E%2FgPOcb5%2BqzgMJZgbRrYVg%2BjeWNHmLkHqdq7NyvbKIP41pfYwRcmrmTRQz%2B%2BTextmeo0DTi9x9CZ5sHodSLmqIZyur0mQWRQA6LudLwHI23Eu%2BhAF%2FLb%2FcSpfVEyTAumuk72eLRrDnSK538KRNX2D32lFz4kEQxq5tAMKfCBqh2cQzBxfcwcGQuCVyy4zbLER5UwmShveyAY4EqV%2FWHQPOXd1aFL1YY5PEoYvOM0HFLHG7SSrzakyT%2FVwPt9zUfLfKEIDnhcPDrzOJOJGIT7zRby9hFYZ34gpfrIQkfUNWT%2F4amgbjixpqNlmhEdtbPnsI0txH%2BTs%2FboJgDr3RqCAvYmDMMimq73RN3UMblR2QTXAMp0%2FJ92R3RbBmYTu3bRmd24SbmFsXq75ANFUFf1dioCTT6zs3AbRAhrF9JRoI2pj2empTUrS8dJN6kVZ9KOGOMxjot%2FgQXWQ4qs1sz4hd4HYaL4pO%2Ft9TSQXroG1FDNaxYJtViChWSu30Z3Gi0JkS8DgPrdva9jxL5n3NrjKMNOW4sAGOqUBt0LrMrFb1FHrffJWTI0NzyWHwQZWOUYR9rDk3LtYsrv44VfWXbytW9bxUE%2BRzDYtr4TW81vqVwbGkTDLYFkrpoGjL%2B%2BUOmfw3PN9g4LA9fT3gQFlJExeRg6MVIKx72fdLzC1mxGqY2v9E3FzPjmu8iq7NoqGtNgZfGXUpRTuWxTDAFacelWb0F2ODvGCEylbQMvl1s4P6jpjdxW3uDseB1h4939o&X-Amz-Signature=753f97fad1aa53f083f0fe6ac17560735de1824969bcdf9e69e9ad1e6b23599d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
