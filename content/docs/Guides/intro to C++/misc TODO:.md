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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVNVOYP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDr1zV9mkgQLrF95GVPvzPlds7Kx%2B8gaHq7dlHKtqVK2AiEA9NDKZTB5uJZ28MSwTkMgIg03PcGB4syQYZYVGIod0Vwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDH8c7yUmH6Q5P15SKCrcAwxaFaVpnmuYU54EXgrE2qZsy3XgiYI%2FHHuRNZbkFg%2FNTWOyPNbSlR%2FZQhnCSzvaqUvq1dD9d3R5pC4B0U6B2n57plgCh%2B2iyasP%2BoSwgez1TVgfPoLbk%2BFxeI9LiDJEqYRJMb2kqGfb8l988BoYeoelc5g984otClKSX9WEc2M6g57q8bm09i9U2KjsHLl1tSaH6NUj%2FYIROEt3HU2enru6be1PNtYjW6ynnHsTC6LfI5AG6QlRPWb%2FfEdDcMy2i9wXOHxAUfhHgIaUlyoTFQjwa9zCF%2B3nTBiTXwLDVN9kgGhIPksoX0%2FvoqkGY%2FYKCAAdiHn27an1o5yF7PI7QbskVKuAy4VTKhL%2BfTf7XbFNIPcdakFOhERSaMF%2BR81sJvgQ9N8TGntDEHo7amZkhzfSHnndZ3OXCfECrBhLHMUobRpS5IgWVttG3RXeeIehGYI1RfW%2Bv7duq8kyFxFFiDDLNegexp%2Fv7GSa2OWiMjHIRI8FtVcErzRtq4z0oQ0e4cqLMh3Ik2NoWqqZEYfrHYyTCSm2QF1XssQJeYZIc1H2hY0ogxrGKn1W7QA1krJy3AAj3PIQcmPnIgkWd1vN%2BmukEqg6Kq0AV9b7M%2F%2BMU8CPAWz%2Bz%2BtNAE4LHJhBMIumzr0GOqUBIL78smtfZKiT3NrASQwYzQDIvx%2FfZqp0xx3hhpwdLasuSQyLfDgB0ZPJY%2BljuYye%2FT1rOy%2FA%2FrhGUol%2Fujiz3rAR6vdrBmY4RQSp1E2fHsIsZiQmtoeSOtywJJd09Qlqm1fQeVfgDx4%2BWem97%2FohE9BII6nIj0IC2qQmeLfKmf0UK6VfUAJjx6CowPa84s42ihyMyUgmL37dzg8vwDkEESobzUqH&X-Amz-Signature=a990c0fc23f8157b8756541de4c220b82ee3906409f189ec76f609d2c55bcf9f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVNVOYP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDr1zV9mkgQLrF95GVPvzPlds7Kx%2B8gaHq7dlHKtqVK2AiEA9NDKZTB5uJZ28MSwTkMgIg03PcGB4syQYZYVGIod0Vwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDH8c7yUmH6Q5P15SKCrcAwxaFaVpnmuYU54EXgrE2qZsy3XgiYI%2FHHuRNZbkFg%2FNTWOyPNbSlR%2FZQhnCSzvaqUvq1dD9d3R5pC4B0U6B2n57plgCh%2B2iyasP%2BoSwgez1TVgfPoLbk%2BFxeI9LiDJEqYRJMb2kqGfb8l988BoYeoelc5g984otClKSX9WEc2M6g57q8bm09i9U2KjsHLl1tSaH6NUj%2FYIROEt3HU2enru6be1PNtYjW6ynnHsTC6LfI5AG6QlRPWb%2FfEdDcMy2i9wXOHxAUfhHgIaUlyoTFQjwa9zCF%2B3nTBiTXwLDVN9kgGhIPksoX0%2FvoqkGY%2FYKCAAdiHn27an1o5yF7PI7QbskVKuAy4VTKhL%2BfTf7XbFNIPcdakFOhERSaMF%2BR81sJvgQ9N8TGntDEHo7amZkhzfSHnndZ3OXCfECrBhLHMUobRpS5IgWVttG3RXeeIehGYI1RfW%2Bv7duq8kyFxFFiDDLNegexp%2Fv7GSa2OWiMjHIRI8FtVcErzRtq4z0oQ0e4cqLMh3Ik2NoWqqZEYfrHYyTCSm2QF1XssQJeYZIc1H2hY0ogxrGKn1W7QA1krJy3AAj3PIQcmPnIgkWd1vN%2BmukEqg6Kq0AV9b7M%2F%2BMU8CPAWz%2Bz%2BtNAE4LHJhBMIumzr0GOqUBIL78smtfZKiT3NrASQwYzQDIvx%2FfZqp0xx3hhpwdLasuSQyLfDgB0ZPJY%2BljuYye%2FT1rOy%2FA%2FrhGUol%2Fujiz3rAR6vdrBmY4RQSp1E2fHsIsZiQmtoeSOtywJJd09Qlqm1fQeVfgDx4%2BWem97%2FohE9BII6nIj0IC2qQmeLfKmf0UK6VfUAJjx6CowPa84s42ihyMyUgmL37dzg8vwDkEESobzUqH&X-Amz-Signature=5ae2651a4030f4cdefa7ea4f67d2400cef45bcb25259e272db89ffe0313ceaba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
