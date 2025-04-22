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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGTC7SMZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC3Ols9bjq%2BNjCyM6O1x4Sj9GRFGNzTYb4hPg6wnH71ZQIhAJErgd%2FFS3SJRuHzUPIstYg29V9IzBLYGYDb%2FyfmpxeGKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTKjXF8bvyBe4Ju0Eq3APvVdC7hIZnzAc7Ruqg0%2Bu7sfxha84JHH0UnIwdWZH5gDAemJETavubYd3Zzq6AQY54c3VQyRoDpqs7nxcrZVbSDpG2EGvE%2FLwSPOO8gHku6c9qbEWWCb0%2FYvWQgpnfcN9wfgtUfgEkPwfE1146PtMGkU%2FR0CKcRWeLCdZjUqQ88t9dSO5%2B2Sig7nT3C0Ym%2FXpjYLyv2BL59Mt5%2BFF1EF3jFIhmFT7ogCRfA2lNdzxsPiGvDA0T8CAdhy%2BL14%2B76750RNwjani8LY97mYU6h2VPo7QMkQX6vqk8NsOcuUE477RlWpeNQi112yrp3KYTS%2FlvXcbE9t12UrzElGMRw8HLJ3jNzKjX5hW%2Br5yZRKVkRlgh2yYcwN6pwQDcb22BINZzYk0PAF%2F3ONUQww%2FCb8gfG2V%2FNtuPkleKJCj2tdV%2BUCs8SKB2NS52fHRE2pprY51kNSRPe%2BH1qfZQdrSe%2FENZOOlWTBXJ%2FZELOhDdHUyMlQ0XdmYjT8fxLFsviHmD2CqjG5pHGb4pLgNtVGB%2BR4QOAqzn9efM20%2BhSIkegZoPD6e%2F2ecBvHiP0K4bDV4nfdXdnLuQJ2MTHpPKeYoc5hDLt0GK3aiL8IIEBV3zIhAPyaS2%2FSqjRgD%2FukP3RDCRi53ABjqkAX%2FMjEh3jqFZCQRLDpIgbwW6f8W7OAK3srtaKjvKqTptCH0X33GtQhzBXb5Yiwzh2o3HQ2PdXchLWCp2eZtFJdHVUlusLRehWIMq4kqpaceBqcI5SPpwJbALaliYThIjO2OCGoUcLWzv4L%2Ff1NC3HJHU5TbEgNLxB0VglO9h%2BDOezkiRqyaAN4pdwT8ec5vzewCcG24u2JfL8%2FKDeJ9vjSStiKqB&X-Amz-Signature=2ea3a12a28a818ac8e7baa3112c3059f261a220dd860ede7618dd23e06d794df&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGTC7SMZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC3Ols9bjq%2BNjCyM6O1x4Sj9GRFGNzTYb4hPg6wnH71ZQIhAJErgd%2FFS3SJRuHzUPIstYg29V9IzBLYGYDb%2FyfmpxeGKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTKjXF8bvyBe4Ju0Eq3APvVdC7hIZnzAc7Ruqg0%2Bu7sfxha84JHH0UnIwdWZH5gDAemJETavubYd3Zzq6AQY54c3VQyRoDpqs7nxcrZVbSDpG2EGvE%2FLwSPOO8gHku6c9qbEWWCb0%2FYvWQgpnfcN9wfgtUfgEkPwfE1146PtMGkU%2FR0CKcRWeLCdZjUqQ88t9dSO5%2B2Sig7nT3C0Ym%2FXpjYLyv2BL59Mt5%2BFF1EF3jFIhmFT7ogCRfA2lNdzxsPiGvDA0T8CAdhy%2BL14%2B76750RNwjani8LY97mYU6h2VPo7QMkQX6vqk8NsOcuUE477RlWpeNQi112yrp3KYTS%2FlvXcbE9t12UrzElGMRw8HLJ3jNzKjX5hW%2Br5yZRKVkRlgh2yYcwN6pwQDcb22BINZzYk0PAF%2F3ONUQww%2FCb8gfG2V%2FNtuPkleKJCj2tdV%2BUCs8SKB2NS52fHRE2pprY51kNSRPe%2BH1qfZQdrSe%2FENZOOlWTBXJ%2FZELOhDdHUyMlQ0XdmYjT8fxLFsviHmD2CqjG5pHGb4pLgNtVGB%2BR4QOAqzn9efM20%2BhSIkegZoPD6e%2F2ecBvHiP0K4bDV4nfdXdnLuQJ2MTHpPKeYoc5hDLt0GK3aiL8IIEBV3zIhAPyaS2%2FSqjRgD%2FukP3RDCRi53ABjqkAX%2FMjEh3jqFZCQRLDpIgbwW6f8W7OAK3srtaKjvKqTptCH0X33GtQhzBXb5Yiwzh2o3HQ2PdXchLWCp2eZtFJdHVUlusLRehWIMq4kqpaceBqcI5SPpwJbALaliYThIjO2OCGoUcLWzv4L%2Ff1NC3HJHU5TbEgNLxB0VglO9h%2BDOezkiRqyaAN4pdwT8ec5vzewCcG24u2JfL8%2FKDeJ9vjSStiKqB&X-Amz-Signature=cc7813fab0eb36b841fe7456b9414b111eebd01b980d383268581e2f292d6217&X-Amz-SignedHeaders=host&x-id=GetObject)

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
