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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIJUVTE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBV4F9Ft2F%2BXeV%2FcQ3vABSePsxXsgJKoVqT4RXw0WI%2FbAiAsPJ0hXI9JgKXTOlE6QuZ2RUPYx2lm7eKrc%2B69dtVyNSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4CKsremzZZpEUGkKtwDcJb3FBbTYTTglFzxhDGGVBMpRnlVyfyH0rXXd5B6jHRS2h%2BrkEbwVfw0L5DlM0c%2FCZaOa%2BFZtHyjyJjOfWZuV29Kil1%2BsnWSOzh%2FTNcB1Oczs6KdsSRXETvkuaERtaEYI6qg01Su5vN8GcdWxBYi6Ruvh0BYqWVgdn1xxioDVJq7OCRlYnS7KIWppLiX7Zg3pjA7eV8Dcu8QLh5OvK7tV%2FSZV4K2R6z6h8Nja%2BFcI80G1cvlY8gyKc%2BssPO%2F7TS8%2F0XoHKnxA6meUZvcQn%2B5SVmLAHcjOo1vBDQqF75NDnDomTRyPfRZhoCOxkc7kH0es04jIC%2Fgc%2BHdIknbaig3KRec6TdoZWRsySVtmJHpTtEuOCsbb3CsC4Jj4Fa7ulf6WmcbsVS0oMbJzQXRhaL3sKyDnRspG62Cx4jQI9JXKDs82dN3B%2FMG6NBhiO3Sw49eHZWatWknsJz1FyelVzV9YtSQelQxLDq6Ahs8umsE5nNqCvywzO72qV2MKPqujeeUDnfZNlRUB8gIU8ZK5dQ3TslCNQ2R07MPx84tR5dZSGCWSO8dChqLOsek9siT1OQ60z59DuUGTnFPJvXlTPDHeXOGHCKzY2kiMePz5r3cCVm2E4UPR2HogbMRVCIwrMOTwAY6pgHjxjpHXuqNcy7nA4eQ5wwygOWTWqDC7jIIN80U6yQxIvqS87qAyWLEckp2jIu1MgibJ5s2CUelda6CUgFKw97DuTijdOVtAqd2RVnJYbo%2BPaMZ8tgRnY%2Fd7%2FNoj4QncbwFgvYxpwN8QrFw9WO5a7rXGHN4Kc5rF5wknR15bHLPCqVkwe2j9txyVj6nAGK1muyDxf7tgE790rv7S4u1d15sEGi3Warv&X-Amz-Signature=addc2cac8ae2bd625513094378616dbdb569627478c9efc5eeb5718d24e92c98&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NIJUVTE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBV4F9Ft2F%2BXeV%2FcQ3vABSePsxXsgJKoVqT4RXw0WI%2FbAiAsPJ0hXI9JgKXTOlE6QuZ2RUPYx2lm7eKrc%2B69dtVyNSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4CKsremzZZpEUGkKtwDcJb3FBbTYTTglFzxhDGGVBMpRnlVyfyH0rXXd5B6jHRS2h%2BrkEbwVfw0L5DlM0c%2FCZaOa%2BFZtHyjyJjOfWZuV29Kil1%2BsnWSOzh%2FTNcB1Oczs6KdsSRXETvkuaERtaEYI6qg01Su5vN8GcdWxBYi6Ruvh0BYqWVgdn1xxioDVJq7OCRlYnS7KIWppLiX7Zg3pjA7eV8Dcu8QLh5OvK7tV%2FSZV4K2R6z6h8Nja%2BFcI80G1cvlY8gyKc%2BssPO%2F7TS8%2F0XoHKnxA6meUZvcQn%2B5SVmLAHcjOo1vBDQqF75NDnDomTRyPfRZhoCOxkc7kH0es04jIC%2Fgc%2BHdIknbaig3KRec6TdoZWRsySVtmJHpTtEuOCsbb3CsC4Jj4Fa7ulf6WmcbsVS0oMbJzQXRhaL3sKyDnRspG62Cx4jQI9JXKDs82dN3B%2FMG6NBhiO3Sw49eHZWatWknsJz1FyelVzV9YtSQelQxLDq6Ahs8umsE5nNqCvywzO72qV2MKPqujeeUDnfZNlRUB8gIU8ZK5dQ3TslCNQ2R07MPx84tR5dZSGCWSO8dChqLOsek9siT1OQ60z59DuUGTnFPJvXlTPDHeXOGHCKzY2kiMePz5r3cCVm2E4UPR2HogbMRVCIwrMOTwAY6pgHjxjpHXuqNcy7nA4eQ5wwygOWTWqDC7jIIN80U6yQxIvqS87qAyWLEckp2jIu1MgibJ5s2CUelda6CUgFKw97DuTijdOVtAqd2RVnJYbo%2BPaMZ8tgRnY%2Fd7%2FNoj4QncbwFgvYxpwN8QrFw9WO5a7rXGHN4Kc5rF5wknR15bHLPCqVkwe2j9txyVj6nAGK1muyDxf7tgE790rv7S4u1d15sEGi3Warv&X-Amz-Signature=e347d1221c122091d1eeb79b71f87f5b14cb605d816c24141a333539a27011a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
