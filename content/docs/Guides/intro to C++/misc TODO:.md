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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LFPMZQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwwHeC%2F2utGAHimX8A%2FPMNBEtfPcnUckWC%2FBF9U9TPMAiAAq9j2oz8nAtI1fAtWHqM9JXtFGwaa8TwIGk9ibglT%2BSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgbZuTT3iDtGwUTMUKtwDmcq8COqf%2FYodjCp%2F3SqCMfj257OjutBa1gRvj9d8YMNveGEAKrBBWhJS11BN5Es2Gs%2Fdor2tn%2BgIHIztZ78CdqarOaT3EZnhk%2Fs396eoBRXNyXxoMZn0D49F2G%2F8ef4W0zSq%2FwEMpSu2EiMd5SeRhL5hXowcjGMqIeDBhUF%2Fnab55FWVHli7TODaLSZ0rqnoJv3wUg3FF96QV6yL6wXB7W2ItHoWMrjXVucQlcTYor9B0xqyNZE30wrhhVjwXarCksdgKtzouvfMkYdnNopLDYtNfY4TgCmsnLeDgJgD%2BmkxPDkWP6%2Ba4n%2BP1iCtElcr2A8ZCpv%2FHyXCILTpJnHp9EEoHo4X29H%2BDxd4XHyuwjhkE%2FOW1cuZrCHbj6ikIr1ibX5Sw9D0We6L2ofLH09kWiG6raCprE7ELq2Kk1SiIoT0yyHh0DKfgKkZag6vPJlHBmruRwjjGvCZcbcBgVQl1sHptPL1uGuR3Vwfc7YnViYNOtzwtmcqaQiehdg4iMLSrRHEGyAe%2BzjpoKcRM4AvvLhn5CIHOGb9vhQIu8SSsvzNAvuZdmSMf38wbhXX%2FiJo4ul9oX%2F%2FPWxd%2FQxw39C0kMBPA%2Bt9eL9QRUOgF9dZYtSmTkKEBxaAEIlSI3gwu9jbvQY6pgE7LKfUdFjxZDKjDhds5rE0D7ALZ377qlEdGu7NVGU2qQ9KKH2qX1FuEIyFGoDxF1q4AJTDPFqtcETWPzn9K%2F6eMm1g25IbYSnwzfR1dRI%2FLMi56aJChNLejC6iTwDN%2BFJjblw%2BobGraDEenOkrUM1f1Rh4mfKSGzTn6fIWAJ4sLLa4HbS0XtbQGX%2BWo8dMkjBEyXSuCyXymdVOQsrmMDxCyyiPuau2&X-Amz-Signature=68ea42ec03fcfbb2d590776991296b46bbb84343119143b1f128f78a79e50903&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LFPMZQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwwHeC%2F2utGAHimX8A%2FPMNBEtfPcnUckWC%2FBF9U9TPMAiAAq9j2oz8nAtI1fAtWHqM9JXtFGwaa8TwIGk9ibglT%2BSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgbZuTT3iDtGwUTMUKtwDmcq8COqf%2FYodjCp%2F3SqCMfj257OjutBa1gRvj9d8YMNveGEAKrBBWhJS11BN5Es2Gs%2Fdor2tn%2BgIHIztZ78CdqarOaT3EZnhk%2Fs396eoBRXNyXxoMZn0D49F2G%2F8ef4W0zSq%2FwEMpSu2EiMd5SeRhL5hXowcjGMqIeDBhUF%2Fnab55FWVHli7TODaLSZ0rqnoJv3wUg3FF96QV6yL6wXB7W2ItHoWMrjXVucQlcTYor9B0xqyNZE30wrhhVjwXarCksdgKtzouvfMkYdnNopLDYtNfY4TgCmsnLeDgJgD%2BmkxPDkWP6%2Ba4n%2BP1iCtElcr2A8ZCpv%2FHyXCILTpJnHp9EEoHo4X29H%2BDxd4XHyuwjhkE%2FOW1cuZrCHbj6ikIr1ibX5Sw9D0We6L2ofLH09kWiG6raCprE7ELq2Kk1SiIoT0yyHh0DKfgKkZag6vPJlHBmruRwjjGvCZcbcBgVQl1sHptPL1uGuR3Vwfc7YnViYNOtzwtmcqaQiehdg4iMLSrRHEGyAe%2BzjpoKcRM4AvvLhn5CIHOGb9vhQIu8SSsvzNAvuZdmSMf38wbhXX%2FiJo4ul9oX%2F%2FPWxd%2FQxw39C0kMBPA%2Bt9eL9QRUOgF9dZYtSmTkKEBxaAEIlSI3gwu9jbvQY6pgE7LKfUdFjxZDKjDhds5rE0D7ALZ377qlEdGu7NVGU2qQ9KKH2qX1FuEIyFGoDxF1q4AJTDPFqtcETWPzn9K%2F6eMm1g25IbYSnwzfR1dRI%2FLMi56aJChNLejC6iTwDN%2BFJjblw%2BobGraDEenOkrUM1f1Rh4mfKSGzTn6fIWAJ4sLLa4HbS0XtbQGX%2BWo8dMkjBEyXSuCyXymdVOQsrmMDxCyyiPuau2&X-Amz-Signature=148e3144247e3264f9453a1177f163ad58c0a6790d580f6e7a88667471d1c5e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
