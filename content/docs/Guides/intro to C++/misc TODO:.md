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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6K2TSP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyQKXIVzSmx1DiCT7rLLnBmfiGzOT41vBlGyl%2BHKecfQIhAIemP%2BoT9lL%2FTkt377J%2FQwyBoPXsB0jsj6g8NBcsQZKEKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwESoUo18pMKbdKvM8q3AM45kgCnEUvzZshTOw3UC2C5%2FVo7fROQEQQZfXcmlZLS5eg972zz8Vd5bnb1TAmTWHFAUYcfZz0qq6i2lXNTdHK%2Fsqby9egVPxBDlX0xRdHsKpaUnoGZlaUscfBr75VCqNyr8FZQc7sZy7sUcoHEy9qAte8OF%2BLbEx1YMb%2BoZgOtS0neC6F%2B4Ifzlns1fTDy1RT6YysQ8hxNmrkKIWqdTLkFjZOp9tQV75snBG9dEfjZ6TTbfCBQANgHN5sJfGXYgQmw3p88LOm8jwzDV2RVhKQYXH8u6GE4ccKIEtAXaMi7wMw8aaQXiFysM1kMCvrJYwNDAl71bYSeGBzkvxSN6Smm%2BkMaVn7cyIkm%2BZX8%2FcFmYvy2FHBwF9tZFw8LpSCZvJwnvhb5%2F97O%2FMouT%2Bkc7Y7CXlVz7P%2FB5Y7pKjz%2BuH%2BVkZZoEhxdpEi8EhdF7YSM%2BJB99VD51zQzviSTMWhGfNU9LzTvluOVPd3P71TEH%2FVLkwQRkqBpykXo1K%2BTGhECeiPfvsZf2IYrRVcC7SJ%2F%2Bl4AkWXSzSReMxb82BBVT0pXN4BHV6s1RqljJbR5XegyuksYK45iMbdByV%2BTDzRtp1nxyZLY9xuQguAROCRLasdMOqngiFVMJKIWQNiCTDcxezDBjqkAbpkZ7Dfmwm8fFJlrJnEGNuwe%2BlT8wpdex%2F5hwzhHAnuM1koKiFye9W%2FF3YYNwAr9z3ebYIV1EvRiG5gxLYZcamUqPr6RiHUykZApmdddnQYWnB%2BtJP9lXxSmIcng6vNNT08Ep%2BKWuCrTkcTnFdcCB0Vz2rE74O4dFNFP%2FD4PcNkuzmttOdOvWgYfkJeAe57CxEZPtdkYzcK1AerypD3v1uyEouP&X-Amz-Signature=9dfb28d7ac4e17fb63778e153c84e9c08b158067703360ac7332f060854b6123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6K2TSP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyQKXIVzSmx1DiCT7rLLnBmfiGzOT41vBlGyl%2BHKecfQIhAIemP%2BoT9lL%2FTkt377J%2FQwyBoPXsB0jsj6g8NBcsQZKEKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwESoUo18pMKbdKvM8q3AM45kgCnEUvzZshTOw3UC2C5%2FVo7fROQEQQZfXcmlZLS5eg972zz8Vd5bnb1TAmTWHFAUYcfZz0qq6i2lXNTdHK%2Fsqby9egVPxBDlX0xRdHsKpaUnoGZlaUscfBr75VCqNyr8FZQc7sZy7sUcoHEy9qAte8OF%2BLbEx1YMb%2BoZgOtS0neC6F%2B4Ifzlns1fTDy1RT6YysQ8hxNmrkKIWqdTLkFjZOp9tQV75snBG9dEfjZ6TTbfCBQANgHN5sJfGXYgQmw3p88LOm8jwzDV2RVhKQYXH8u6GE4ccKIEtAXaMi7wMw8aaQXiFysM1kMCvrJYwNDAl71bYSeGBzkvxSN6Smm%2BkMaVn7cyIkm%2BZX8%2FcFmYvy2FHBwF9tZFw8LpSCZvJwnvhb5%2F97O%2FMouT%2Bkc7Y7CXlVz7P%2FB5Y7pKjz%2BuH%2BVkZZoEhxdpEi8EhdF7YSM%2BJB99VD51zQzviSTMWhGfNU9LzTvluOVPd3P71TEH%2FVLkwQRkqBpykXo1K%2BTGhECeiPfvsZf2IYrRVcC7SJ%2F%2Bl4AkWXSzSReMxb82BBVT0pXN4BHV6s1RqljJbR5XegyuksYK45iMbdByV%2BTDzRtp1nxyZLY9xuQguAROCRLasdMOqngiFVMJKIWQNiCTDcxezDBjqkAbpkZ7Dfmwm8fFJlrJnEGNuwe%2BlT8wpdex%2F5hwzhHAnuM1koKiFye9W%2FF3YYNwAr9z3ebYIV1EvRiG5gxLYZcamUqPr6RiHUykZApmdddnQYWnB%2BtJP9lXxSmIcng6vNNT08Ep%2BKWuCrTkcTnFdcCB0Vz2rE74O4dFNFP%2FD4PcNkuzmttOdOvWgYfkJeAe57CxEZPtdkYzcK1AerypD3v1uyEouP&X-Amz-Signature=0a34f8b6ca9f588069706075a13fe35ad6cf6d836bc18dde0050a3b5f26ea97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
