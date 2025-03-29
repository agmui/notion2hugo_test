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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=f12d19408e6c1c1f7dbfd71b3d53fc786cb738887bf407cfef53ed98b40608ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=ef8a25f289ff4382afda965f2f2a36e31b27328c0bfed1d8918e130230037a14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
