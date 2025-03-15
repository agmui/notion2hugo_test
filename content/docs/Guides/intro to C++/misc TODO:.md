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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBSJQEVQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD648Zr2ygjBORhgc6CW4PRfV4KDqzcpIzR%2FFO61lLQoQIgP%2Bj1xyCQReTdorbno5aCZuTa1fw6%2BRkPIp0cEK9Khrsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDKp98t%2FUE9u6uEsjHircA%2FCIpkFPWr3OfiX7xxLJO%2FYWbES%2BSs%2FCjjbiLZAFfHL3PgSMQU8YP5i0oaS3sJsTT%2B2UHLskX%2F%2B%2FlzF6ZvwXBYVoOCiH2vU4ciFJMoiXgjKZarF1lAhQHt5su%2BV5iI00xYYowkkDo1L3KnfWeu0lKjta6qa%2BRKGUJxQY%2BKUlSh6Rf379XR9wQ7zYlJCyo222DMEbwL0vrv2UeCB5ZfmRzgeNmVCoSUD%2BSWEgAcsLGEu1ziWguDfhUwrsIEKRSjg4GbkPT18wu4tRZNegNmT652Fbnx%2F%2BgS%2FxbnG9UIb4fsBDM5RU9dQyF%2FWYxBF2xKUX7QcAd2F7GkMSPVjMsyM8Hu29aql8Ulz6xXMwdRSM5kHFe0aUsY6%2BjgpGEdhPfXm5a%2BJEAXfZGG7ZocoooASyv6y6ZJ5Ue%2F7Js1JYNZ%2FkNeD2ex%2BIQciIcAxBolrdXyW%2FV48vcmh43wtsolBHdvgMCIVw%2BByupCVDyOopsFn9w%2FGmSaKX8DIrBGnD1ZWdtsE%2B2lkW86vsKEaCEzPl72ITuJC%2FkXP6A4FQB7shZFbPGIjd4jHf6kcIIfjrI3Ilexy7t0a8wKc1KE5QpmwPREvx6Iwy7ppU55TKhyL9G%2BYvqcTQsmk%2BswUj7kmUPchaMI7j174GOqUBF62zkDu%2Bv78xZd6Zwm1j93NtDIr%2BdxR4lJRUs2GmHATiJHQyBNev6HPPXzoQyTe8DPnWoifYVaVbZcOzKDXLAQCQY9tpXYM8hzU6sHWmn%2F%2FkNjN%2Bw21QWAF8eK8kazVg0WNOZ78kLeXAT7GAzeHp2f3XDAE9eGr%2B1gTEwjWXO0q18CWK22Pp%2F2zkBwr8KrAn%2B8atQxSLYUDYjM82eTX%2FFfJsqlnx&X-Amz-Signature=3fcf6f0eb6081064fd805ac106a30c68732c866acd38a993b73325b4f2a8cd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBSJQEVQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD648Zr2ygjBORhgc6CW4PRfV4KDqzcpIzR%2FFO61lLQoQIgP%2Bj1xyCQReTdorbno5aCZuTa1fw6%2BRkPIp0cEK9Khrsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDKp98t%2FUE9u6uEsjHircA%2FCIpkFPWr3OfiX7xxLJO%2FYWbES%2BSs%2FCjjbiLZAFfHL3PgSMQU8YP5i0oaS3sJsTT%2B2UHLskX%2F%2B%2FlzF6ZvwXBYVoOCiH2vU4ciFJMoiXgjKZarF1lAhQHt5su%2BV5iI00xYYowkkDo1L3KnfWeu0lKjta6qa%2BRKGUJxQY%2BKUlSh6Rf379XR9wQ7zYlJCyo222DMEbwL0vrv2UeCB5ZfmRzgeNmVCoSUD%2BSWEgAcsLGEu1ziWguDfhUwrsIEKRSjg4GbkPT18wu4tRZNegNmT652Fbnx%2F%2BgS%2FxbnG9UIb4fsBDM5RU9dQyF%2FWYxBF2xKUX7QcAd2F7GkMSPVjMsyM8Hu29aql8Ulz6xXMwdRSM5kHFe0aUsY6%2BjgpGEdhPfXm5a%2BJEAXfZGG7ZocoooASyv6y6ZJ5Ue%2F7Js1JYNZ%2FkNeD2ex%2BIQciIcAxBolrdXyW%2FV48vcmh43wtsolBHdvgMCIVw%2BByupCVDyOopsFn9w%2FGmSaKX8DIrBGnD1ZWdtsE%2B2lkW86vsKEaCEzPl72ITuJC%2FkXP6A4FQB7shZFbPGIjd4jHf6kcIIfjrI3Ilexy7t0a8wKc1KE5QpmwPREvx6Iwy7ppU55TKhyL9G%2BYvqcTQsmk%2BswUj7kmUPchaMI7j174GOqUBF62zkDu%2Bv78xZd6Zwm1j93NtDIr%2BdxR4lJRUs2GmHATiJHQyBNev6HPPXzoQyTe8DPnWoifYVaVbZcOzKDXLAQCQY9tpXYM8hzU6sHWmn%2F%2FkNjN%2Bw21QWAF8eK8kazVg0WNOZ78kLeXAT7GAzeHp2f3XDAE9eGr%2B1gTEwjWXO0q18CWK22Pp%2F2zkBwr8KrAn%2B8atQxSLYUDYjM82eTX%2FFfJsqlnx&X-Amz-Signature=4256677a029bc312fd9003bdad1eedcbce6f282420b543ed87c12c983dfa3cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
