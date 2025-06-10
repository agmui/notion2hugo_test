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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TPAMQK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhEdDg%2FUX3sHoHlxMWgsXxtVy%2F2VaaXj7uHEaNQHwb1AiB8tz2ciRlfcrpJcQe1rjH5PaljrxzhUtrAMQadeCNkOyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG6fmw%2FVpePm1gEkDKtwDkp4NzcFNMfXs4pFy8m9fLCXRu0yzNUPCTqHsaJW8ELo9HCpGe65uJOhyTyCOic7vHa0R2x%2FGkOiHJJ9TgIXoozfsfsBGJZ%2BxevGlLqtBneaJTdoliZszuyDeRI143QjUAdvq%2Fp%2Bu0RfumA1Nsvh%2F91%2BM3ykUHe%2FNyjl67IXwo8wlulNVgMbvgKZzPUh7B%2FsoniH2J6%2F05xfhmt4OWzVofVJCoE2iFMrQdqxh5egJ04hTLIG8R2kLghSAmuwa%2FQz%2FH8bcbCX%2BiPD2Op%2FWHnuej%2BG%2BtwvbPN%2BBM6YHdhCgcmWFr3333cfFRyw9E4qHbfBp%2BsIP%2BDo%2FaEziuBTvtTkrwBo9PlNUcAcnaoL4jsGjnKiW1i%2FRaZ5jt%2FJX7gyKO%2FeD7H2FM%2FQ47g11wLQ%2BYHKjQTGM9JHP%2BseL88U5k2579hPi%2BK%2B6cG11BrB8HdTlKmAoExydxAU5MtBlfBAPli8JbzpAIjYN0XISu%2FtWVNHHC4J6v9IAWPABl99VpWdPmwpD9fkBuNu0tdBTXyyeaz6RkpDuY0GrtmQeXEkdoBFzivfkOGyKkkhChX6IaJi68CGMl15N%2FP6dNmsFSqctJcjR3FLVGJbj1EhE8UIiA9JH0wG8%2FbuVslbHV3tVM9gwj7%2BgwgY6pgFATG1tg3IoRrCiFRXarCQX8rm8%2FW%2BFBpi852GOlfF%2FR5TxO1oLDhOQKXL6963dctGV79oHyfn8LBeyHsnW0qGIdW%2FYxs4DI8AEqsuA466rDVTDCu7QthbnajsHZy3A4SXEWTBSUqYAvBDqBmgmmOy%2FEMCHPgKS8AG4W4Yo3M3JGoy%2BM3lIQIrJ9OlWCHqgb6HKPAjLF8NNlv3RRe8sMI0JyMDsfUDk&X-Amz-Signature=54769993db9a90b0ae32db11cadc25bbe860055a78199e89c75ecbc527fd1be9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TPAMQK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhEdDg%2FUX3sHoHlxMWgsXxtVy%2F2VaaXj7uHEaNQHwb1AiB8tz2ciRlfcrpJcQe1rjH5PaljrxzhUtrAMQadeCNkOyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG6fmw%2FVpePm1gEkDKtwDkp4NzcFNMfXs4pFy8m9fLCXRu0yzNUPCTqHsaJW8ELo9HCpGe65uJOhyTyCOic7vHa0R2x%2FGkOiHJJ9TgIXoozfsfsBGJZ%2BxevGlLqtBneaJTdoliZszuyDeRI143QjUAdvq%2Fp%2Bu0RfumA1Nsvh%2F91%2BM3ykUHe%2FNyjl67IXwo8wlulNVgMbvgKZzPUh7B%2FsoniH2J6%2F05xfhmt4OWzVofVJCoE2iFMrQdqxh5egJ04hTLIG8R2kLghSAmuwa%2FQz%2FH8bcbCX%2BiPD2Op%2FWHnuej%2BG%2BtwvbPN%2BBM6YHdhCgcmWFr3333cfFRyw9E4qHbfBp%2BsIP%2BDo%2FaEziuBTvtTkrwBo9PlNUcAcnaoL4jsGjnKiW1i%2FRaZ5jt%2FJX7gyKO%2FeD7H2FM%2FQ47g11wLQ%2BYHKjQTGM9JHP%2BseL88U5k2579hPi%2BK%2B6cG11BrB8HdTlKmAoExydxAU5MtBlfBAPli8JbzpAIjYN0XISu%2FtWVNHHC4J6v9IAWPABl99VpWdPmwpD9fkBuNu0tdBTXyyeaz6RkpDuY0GrtmQeXEkdoBFzivfkOGyKkkhChX6IaJi68CGMl15N%2FP6dNmsFSqctJcjR3FLVGJbj1EhE8UIiA9JH0wG8%2FbuVslbHV3tVM9gwj7%2BgwgY6pgFATG1tg3IoRrCiFRXarCQX8rm8%2FW%2BFBpi852GOlfF%2FR5TxO1oLDhOQKXL6963dctGV79oHyfn8LBeyHsnW0qGIdW%2FYxs4DI8AEqsuA466rDVTDCu7QthbnajsHZy3A4SXEWTBSUqYAvBDqBmgmmOy%2FEMCHPgKS8AG4W4Yo3M3JGoy%2BM3lIQIrJ9OlWCHqgb6HKPAjLF8NNlv3RRe8sMI0JyMDsfUDk&X-Amz-Signature=8e292ee40009c725d3ad00c311b5e19035f8828d939ef331aa3e80f3f4f650f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
