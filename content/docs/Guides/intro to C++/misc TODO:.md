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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RDIZPHQ%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx7JV9K0i7BaD9zcmEynYjvYEDqqhPHhQ3UChKdP1DRgIgEjzLos581klMYSGqmLnDdhGSsgwD8JNNr8xHMQcXsiIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7%2BkILlzk%2B0U42NeyrcA4op%2BspAoaU4ZW33jMHx61b9sL5Lk4Bwd65VVH2Pc4d%2F8ufwwLAVjsBI3gauqbCz0wau12ue7LIQ48CXWFRG2V%2FLjI0P56GU%2FXvrJyiEd4G%2FPWRC3IYs1qiBxOmTYj3ljsM3vYW2293gXSSRKC3I25aGJsCwydYRdcZxzY6Xe4CCQlXT%2FRPUBf59JOrJ00SATiaFK5NlahlMRrj21SWYC8gJo3pRLDEJbcn1l%2F5LVmTj5LkfYRKr7dnszNuMWGmvRv1JnBTKsdZ%2FH%2BZrk%2FFCguRND6u07eKmiLKCV0D%2Bo9LEgHWrXMCFRFvyqywjzTSQp9HkA0xjbVH64CZ8WPx8rsidXkXb4D8wZfrdqsbbFZOj0b8ZIE3buybB8%2FEUX10ke6JZ02yCTQrjkL%2FSR6Bv1%2FAitN0eoAlZ%2BDMGwf6c%2F6OZuj2wUPt2DVR376ZpsprQ0eWMVlPPOfOn6VttJJDNWVKQioWzC%2B%2B8g96M2iqVrfA%2BIqQ6YsvZZ1bRNW08I6affUapr4ekmyUaEc2zTrxYzVl7w5l%2FyxEupsINCcmocCOMLBsSVMt010qEdukX95Lr7wATytS8qqiQX%2BY45k0P%2Fnh%2FGmw5Bnh5R5n4cAsqufkwkmFo9kDPOahf%2BRczMM%2FSk9EGOqUBznJkWRP%2FHxSEoc%2BWINM9wcsOHy%2B3hn1TMYLn7YiLDYyIg8JGnnbwX6l%2Ba82beG3TyEwFQW9wQ6jHOVQ23kjkc%2F65C1UvoHPlUjIe81VXo%2FZExRYNQOxhcmBAm1VHqgpZ8Q3zoz%2Bdua4n0au096%2FDdBlyvRO2rFQPcj6SX7eNzGAeLqsg9iza4mAfSDTMw8aSNi6Oj3dh10QaMvWexp6B8GKICA2M&X-Amz-Signature=57dc5577e4234fd9b6458b714eb7e84a2182a0cec7002f3fad8020fc1da0d1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RDIZPHQ%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx7JV9K0i7BaD9zcmEynYjvYEDqqhPHhQ3UChKdP1DRgIgEjzLos581klMYSGqmLnDdhGSsgwD8JNNr8xHMQcXsiIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7%2BkILlzk%2B0U42NeyrcA4op%2BspAoaU4ZW33jMHx61b9sL5Lk4Bwd65VVH2Pc4d%2F8ufwwLAVjsBI3gauqbCz0wau12ue7LIQ48CXWFRG2V%2FLjI0P56GU%2FXvrJyiEd4G%2FPWRC3IYs1qiBxOmTYj3ljsM3vYW2293gXSSRKC3I25aGJsCwydYRdcZxzY6Xe4CCQlXT%2FRPUBf59JOrJ00SATiaFK5NlahlMRrj21SWYC8gJo3pRLDEJbcn1l%2F5LVmTj5LkfYRKr7dnszNuMWGmvRv1JnBTKsdZ%2FH%2BZrk%2FFCguRND6u07eKmiLKCV0D%2Bo9LEgHWrXMCFRFvyqywjzTSQp9HkA0xjbVH64CZ8WPx8rsidXkXb4D8wZfrdqsbbFZOj0b8ZIE3buybB8%2FEUX10ke6JZ02yCTQrjkL%2FSR6Bv1%2FAitN0eoAlZ%2BDMGwf6c%2F6OZuj2wUPt2DVR376ZpsprQ0eWMVlPPOfOn6VttJJDNWVKQioWzC%2B%2B8g96M2iqVrfA%2BIqQ6YsvZZ1bRNW08I6affUapr4ekmyUaEc2zTrxYzVl7w5l%2FyxEupsINCcmocCOMLBsSVMt010qEdukX95Lr7wATytS8qqiQX%2BY45k0P%2Fnh%2FGmw5Bnh5R5n4cAsqufkwkmFo9kDPOahf%2BRczMM%2FSk9EGOqUBznJkWRP%2FHxSEoc%2BWINM9wcsOHy%2B3hn1TMYLn7YiLDYyIg8JGnnbwX6l%2Ba82beG3TyEwFQW9wQ6jHOVQ23kjkc%2F65C1UvoHPlUjIe81VXo%2FZExRYNQOxhcmBAm1VHqgpZ8Q3zoz%2Bdua4n0au096%2FDdBlyvRO2rFQPcj6SX7eNzGAeLqsg9iza4mAfSDTMw8aSNi6Oj3dh10QaMvWexp6B8GKICA2M&X-Amz-Signature=a552e6721080eaa0df71c89ddd770fb3445e7406baee029e708e52c760671d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
