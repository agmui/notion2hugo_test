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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZC47COF%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQOA%2BGVnEAKMoc1%2B1GmDbkBkwtjmJsG2fWyxry3pqpvAiEA2JLErY7GNYZPn8eNWQ8SO9rVt%2FQSEQ7HVSkE4mQw09sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJcm%2BxjTZCp0OUjJCrcA7RPsGRLSZ7IYreL7yWy29Z%2BhmhAoIRk8do0lZUzWWkDi9I%2FGHKzdYFzJTMpTzWcOytX2sGDMrdytP5aXXRa4RatHviAn8BNn6FdysB2%2BIhlc1V7Q0XVgNkrDRqmTYALNmgAqkv%2FGY%2BbRcSahi27gAdjQrq1sHW3rcXgeol2BCQ2%2BMpqMFVyQEKtCZuaImmqLMdHBpPM1OpQj8NHuK%2B6gQl6%2Bq63TUClHh%2Bd3ftKS3tXtStKsSxEbGwnUKVov7uwGERSlCgXdrFvmGIqYrhOy06zgGlfAYtI1d4oKMy30J%2BhWGYLE9UKwenREtOPD%2FQZAgfWvuvELGQKku1JX6V71wAlUIGzswz4G%2FnSH7wFXDar6Jf61Pf0%2Bh6gatakPmBBr0Y2LKqqzECP4HvpBwDkvPn%2FG801jnoMMUlGjrMs2G6uqAFArQnc7%2BsVoZ9tDO3HgZ2QyJm7Wie%2Fv0SXvziXUDQs2nB2NFN%2BeXGRRrBsZ3XRMh2jiBzLpfFRoRmTolcXvDw5nQEUvkUAdhv%2FwuIEGc3D7uixry66U60qZhpmwi%2FlkM8rzMzA3Ri%2FTP7uErvJatp5dNRYyaBghkzDwVafyHjK1Ff45bq31hhMDT6JV8BPwkJGMo9aFssrxSa9MICR2M0GOqUBdovYTMjvQbWoyQnQAZb7Ey0rkq%2FvpmcD4C%2FBIopCCd4MkSO3wknzDazJ5RX%2F2S5SocNmcFV9ZfAu7ffncSeQdM6pn1erdq8nHh9HvOO%2FI1fCl%2BhJ6WedjSHwMTfM%2BAByCnTN4VVuIniGLSLB%2FzQjYzklQD4PpqlcmvTvRhlPyXyWAO9DeAX8%2BHM9MWsZC65oRD9IDsFNsPNUF7C7vNERUBkdMFIy&X-Amz-Signature=4b6f36a1ad165750f9abf9e40203e90eac752d3ddcff7a4f636abdd2c019bce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZC47COF%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQOA%2BGVnEAKMoc1%2B1GmDbkBkwtjmJsG2fWyxry3pqpvAiEA2JLErY7GNYZPn8eNWQ8SO9rVt%2FQSEQ7HVSkE4mQw09sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJcm%2BxjTZCp0OUjJCrcA7RPsGRLSZ7IYreL7yWy29Z%2BhmhAoIRk8do0lZUzWWkDi9I%2FGHKzdYFzJTMpTzWcOytX2sGDMrdytP5aXXRa4RatHviAn8BNn6FdysB2%2BIhlc1V7Q0XVgNkrDRqmTYALNmgAqkv%2FGY%2BbRcSahi27gAdjQrq1sHW3rcXgeol2BCQ2%2BMpqMFVyQEKtCZuaImmqLMdHBpPM1OpQj8NHuK%2B6gQl6%2Bq63TUClHh%2Bd3ftKS3tXtStKsSxEbGwnUKVov7uwGERSlCgXdrFvmGIqYrhOy06zgGlfAYtI1d4oKMy30J%2BhWGYLE9UKwenREtOPD%2FQZAgfWvuvELGQKku1JX6V71wAlUIGzswz4G%2FnSH7wFXDar6Jf61Pf0%2Bh6gatakPmBBr0Y2LKqqzECP4HvpBwDkvPn%2FG801jnoMMUlGjrMs2G6uqAFArQnc7%2BsVoZ9tDO3HgZ2QyJm7Wie%2Fv0SXvziXUDQs2nB2NFN%2BeXGRRrBsZ3XRMh2jiBzLpfFRoRmTolcXvDw5nQEUvkUAdhv%2FwuIEGc3D7uixry66U60qZhpmwi%2FlkM8rzMzA3Ri%2FTP7uErvJatp5dNRYyaBghkzDwVafyHjK1Ff45bq31hhMDT6JV8BPwkJGMo9aFssrxSa9MICR2M0GOqUBdovYTMjvQbWoyQnQAZb7Ey0rkq%2FvpmcD4C%2FBIopCCd4MkSO3wknzDazJ5RX%2F2S5SocNmcFV9ZfAu7ffncSeQdM6pn1erdq8nHh9HvOO%2FI1fCl%2BhJ6WedjSHwMTfM%2BAByCnTN4VVuIniGLSLB%2FzQjYzklQD4PpqlcmvTvRhlPyXyWAO9DeAX8%2BHM9MWsZC65oRD9IDsFNsPNUF7C7vNERUBkdMFIy&X-Amz-Signature=8de710dc6c6edb364281e6e4c39414f35127a92a8f083745885e7e57e177419f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
