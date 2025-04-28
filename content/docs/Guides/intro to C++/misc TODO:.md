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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMN2QWJJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3CVXhmZzpbED9B6CjgGNl5XSFSA2IOxeAZW82pVJyNAiEAkyhRBDKruHycqITvSTvdHCN5BIe7BjPYH2FIYTo0Xd8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFYJdtDytwx85huXJircA3Ooa7Ta51quSbqlJj29ISi55GT8zYpDzNWCjR6XRrOM16q7lk97krr1qyzsXFgq9sMA9Tx9Gz4B5NbvEG8I8LQUAYf071Sn9y7KC05lQDqE0ABbnfMWVpqHuvp4dwKoIa5wXBXiVwlIdnm0%2FlM1JunDZmcPCQDb2XlK1S4MMTRBnqXy5rsgpt5DCK48Jlc23w3ko9Zw81M8aV2UsgEYEqaw56aBbdHigLWd5D3hHQB9Y5HLjmBuVWZ6PhXlgCiwbrLaeTz0j9Q%2FGAAtjfVopAt62rdQa0%2BP%2FBjSFp09VjaPqsuSklFaD6ULX4bgdndfUsGkARCukWhYm5iEDmI2xqen8wmvCgk0ScegUvmMuE3jXcIdCwMd3JMrA7SfKEFvd0HJsDCLUeb9hbd1emc9PkImT6p8E73pQXRfm1YSL%2BPtp2MsigrSW1OI1CDMg1h3NhTc54AGMUeIv4nhSgpzP7AfUN%2B29pHoNAc84dwuak%2BD4fdhsRWX%2BURNUhptMV91HcWwqG5AuPtwyLhoY3mh0OvWE3LTGFIxpfJFtr7P2vTFQYDPM5n4NX7MsTAX2I2heLwje5hmXRSZsN5ni%2B9y7LCkZCDNgVvHnWZGJ4Cms%2BF30FkbT5quZlTIp0xJML7xvMAGOqUB8id3r17tmZs52tgZuKtumoVPFoGZwKPX7opUFah0toFYFtpPu1Syt9MnsmoLjsJHlPveSz25PeXtRAvNpG%2Bkb0mlexNqsXEEyF99m6lItcExrR5GSf5UhB0b0QyxdKUcbcUAZy4DOHCbzMwgbCY2Fm4Q8mt8IuO4Sk87xGUdXjxaIhxn1htsjprPSQi55SqW98koaBaWhD%2B0nB5pFmXi2XPDr8f0&X-Amz-Signature=0257d0fcaec3888dece5a9107c4b089df9a352bab7010d103462a06287c4cdf7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMN2QWJJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3CVXhmZzpbED9B6CjgGNl5XSFSA2IOxeAZW82pVJyNAiEAkyhRBDKruHycqITvSTvdHCN5BIe7BjPYH2FIYTo0Xd8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFYJdtDytwx85huXJircA3Ooa7Ta51quSbqlJj29ISi55GT8zYpDzNWCjR6XRrOM16q7lk97krr1qyzsXFgq9sMA9Tx9Gz4B5NbvEG8I8LQUAYf071Sn9y7KC05lQDqE0ABbnfMWVpqHuvp4dwKoIa5wXBXiVwlIdnm0%2FlM1JunDZmcPCQDb2XlK1S4MMTRBnqXy5rsgpt5DCK48Jlc23w3ko9Zw81M8aV2UsgEYEqaw56aBbdHigLWd5D3hHQB9Y5HLjmBuVWZ6PhXlgCiwbrLaeTz0j9Q%2FGAAtjfVopAt62rdQa0%2BP%2FBjSFp09VjaPqsuSklFaD6ULX4bgdndfUsGkARCukWhYm5iEDmI2xqen8wmvCgk0ScegUvmMuE3jXcIdCwMd3JMrA7SfKEFvd0HJsDCLUeb9hbd1emc9PkImT6p8E73pQXRfm1YSL%2BPtp2MsigrSW1OI1CDMg1h3NhTc54AGMUeIv4nhSgpzP7AfUN%2B29pHoNAc84dwuak%2BD4fdhsRWX%2BURNUhptMV91HcWwqG5AuPtwyLhoY3mh0OvWE3LTGFIxpfJFtr7P2vTFQYDPM5n4NX7MsTAX2I2heLwje5hmXRSZsN5ni%2B9y7LCkZCDNgVvHnWZGJ4Cms%2BF30FkbT5quZlTIp0xJML7xvMAGOqUB8id3r17tmZs52tgZuKtumoVPFoGZwKPX7opUFah0toFYFtpPu1Syt9MnsmoLjsJHlPveSz25PeXtRAvNpG%2Bkb0mlexNqsXEEyF99m6lItcExrR5GSf5UhB0b0QyxdKUcbcUAZy4DOHCbzMwgbCY2Fm4Q8mt8IuO4Sk87xGUdXjxaIhxn1htsjprPSQi55SqW98koaBaWhD%2B0nB5pFmXi2XPDr8f0&X-Amz-Signature=b4c8c78521c799d6cc6f49527ff0d9f7b6b28211d24b480b9da47ec0125383cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
