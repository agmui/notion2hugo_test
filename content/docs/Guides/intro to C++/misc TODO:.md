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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SJYDZP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDqlt8MfWxIIxvd1SP4hHdkiyq3pPXDQOg5gvY9Iv0WeAiEA2k5vuYURcm9EtdqmiF6kJexBUq8SC1BNkwQt6s7WgiMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf3E%2FPiqguduRgIkSrcA5Fu%2F1KVzJw6cxLiT36ci%2FO32Fm%2B7x373wM0tIghoY4IfcDVoKuGEeGCKXq%2BEocGTjBYeEIbNmQXE94XTMAF2RUt9lDQnivm0O9AX9oBOFd8wYAP67ITjtrEEaI1pAUHeQLkiAx302kRmMN9K2GOvFPzDH9n5dCFBT8jFNtCwmzy5vLfNlkKmwAQigTaf3yPFdeVOICr4JMn7TjpyGbN1Bie3yaKeyYHZB%2F%2BUfqsYdCHyMiKYOnDPe1EIG13TGIe%2B0tBwOIgJpa8UTm3Svq9fIQVG%2FITpb9CgWyKDLq%2FJAK9Ct2X7Q1fGd%2FuTEz907ieae5hxrXUA42rQiCBppcsPYdFjkByVqYaj4nnIY7us5cRTL268szg8soIYWHr3Hu13DirZMJCrgrpyhlmAQq7U2Utw13NV%2Bcam2PPvmcLD0w3IsK6KoWeixo6IHIwjcR%2FPdB3sgReVb0wu5Xhrznrfg%2B2PbAC8A5qHqF7cynfOnKHK%2FOArFfPwtX5n7RAne9fNAZF1iSKGr2kd2ZsrkrLIiNowNrq%2BvC1PP%2BwGakL5ny4JyMKLc4THE%2B8tKNGhSH3rvQwLZci%2FFy2YPtRad5ISjexB%2BEv1KiBk5GUjYBiUerr8aGaWHOoTOs0YjS8MIPf18AGOqUBWs9z1N7suB35NCTGMohrz0%2BPkus9CG09H2Hs2LQviS9EX%2BIo8396abpyTBPrQaQ%2BindzV2%2BeMdC%2F%2Fts2RSYC1WL0cqfAdiknU%2FHSvjroUICnRPBFekZZ1LTI1fiO7UX0nsbkU1VrkuCwtGVvHq2zRY4AKwN6iUEeQ8yZygqLDu8BZrqNdy5Vh0DSd%2By8jJNuIlepLnxyKQ1SAIMDnNkEpbivkjwF&X-Amz-Signature=a1fd69e7f0b7bf1c0994a5d0e0521c84f8e9808f4d200052948ed849322c5d68&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SJYDZP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDqlt8MfWxIIxvd1SP4hHdkiyq3pPXDQOg5gvY9Iv0WeAiEA2k5vuYURcm9EtdqmiF6kJexBUq8SC1BNkwQt6s7WgiMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf3E%2FPiqguduRgIkSrcA5Fu%2F1KVzJw6cxLiT36ci%2FO32Fm%2B7x373wM0tIghoY4IfcDVoKuGEeGCKXq%2BEocGTjBYeEIbNmQXE94XTMAF2RUt9lDQnivm0O9AX9oBOFd8wYAP67ITjtrEEaI1pAUHeQLkiAx302kRmMN9K2GOvFPzDH9n5dCFBT8jFNtCwmzy5vLfNlkKmwAQigTaf3yPFdeVOICr4JMn7TjpyGbN1Bie3yaKeyYHZB%2F%2BUfqsYdCHyMiKYOnDPe1EIG13TGIe%2B0tBwOIgJpa8UTm3Svq9fIQVG%2FITpb9CgWyKDLq%2FJAK9Ct2X7Q1fGd%2FuTEz907ieae5hxrXUA42rQiCBppcsPYdFjkByVqYaj4nnIY7us5cRTL268szg8soIYWHr3Hu13DirZMJCrgrpyhlmAQq7U2Utw13NV%2Bcam2PPvmcLD0w3IsK6KoWeixo6IHIwjcR%2FPdB3sgReVb0wu5Xhrznrfg%2B2PbAC8A5qHqF7cynfOnKHK%2FOArFfPwtX5n7RAne9fNAZF1iSKGr2kd2ZsrkrLIiNowNrq%2BvC1PP%2BwGakL5ny4JyMKLc4THE%2B8tKNGhSH3rvQwLZci%2FFy2YPtRad5ISjexB%2BEv1KiBk5GUjYBiUerr8aGaWHOoTOs0YjS8MIPf18AGOqUBWs9z1N7suB35NCTGMohrz0%2BPkus9CG09H2Hs2LQviS9EX%2BIo8396abpyTBPrQaQ%2BindzV2%2BeMdC%2F%2Fts2RSYC1WL0cqfAdiknU%2FHSvjroUICnRPBFekZZ1LTI1fiO7UX0nsbkU1VrkuCwtGVvHq2zRY4AKwN6iUEeQ8yZygqLDu8BZrqNdy5Vh0DSd%2By8jJNuIlepLnxyKQ1SAIMDnNkEpbivkjwF&X-Amz-Signature=86e8b29e5a78aa62402b0dc223f127a971e585a0af1f1078204bf7f184ef10e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
