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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDRDN2IR%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCQIicrpIQiG%2FuHf3ippNevYGD1VRXu6CkXZFhKr5fhCQIhAJeTXVaUpWxSRS2abGgfYdkAzcCpUz41asYTA6mN1ajMKv8DCAQQABoMNjM3NDIzMTgzODA1IgzoGIbJnX0UoXayB7wq3ANnYMY1pHPeMeXHef0k65rM6RAdro%2FstAhoPMdw85Z15TfQPJ5kLDhqINbLpyq%2FwoFyMENCZ8gM6zvI0HTchDJ4w3vjdGI%2B9DLjKnkOb8RQGTDU7zg0QLSbLln3HUt3JOpycp8x6ygEkAbfWz%2BOLB%2BvX27xuSxdqfej6nrsX20Ken2OC2NwD2IVCY4vfWiXFvqFmmKX00m72AlJmC%2BYp5gVEUtkh1sBDOqgu8q%2FT0OU98vn3AAeC3JdtjyRtnGDG7MZ6c7eFXrysGbQy40RNdXIfsbsE61ABdc5LjoEnG3A4DypA78L1x5GxSaT4NEpl8c%2BDtHUI%2FGwgQKvu4BRYJmsxICy0B5GtvtvqgSwdQrKqG2ncm6B1a3RqILrxdEJglYMoA1l8qA26fyC%2BFJhMmJ21cSQxtTomxuRy7a624a51ODD9Wr0%2FiuwQhlVQ3Sx8cObUJdcHUl2h1%2FEFARmi8t01V5Ijk1dhIwdzUJYtR1SZk%2BJKowL05qqaui1if6VLoGhiZjnqE5vK1YXEvkp07HFwFAss6g8Ixyo1aKaNIpvYJrYuAHx4Nlx4Kr5sho8Mx%2F1db8eFRiG4i41b4SYz1d41rjoZRh2LVfpfyMpfuOt4fp4rTn%2FDSWp4ZLJJTDKvJzSBjqkAWZx1LGTbJgEwjFJQU2ypVjDfW8%2B3oxd5qSq07J%2BRtXVw6nUc0F3HX3YDfoY1IWjHJDq5uawBkr3XEiE%2BHD5EHub%2FneDDKerjP%2BMy1z88%2B8NlwXaX5S1KLXef0c0BP8UVFWO7iVIPMXytDLd3TK7RsZm3hqA%2Fexv1i1oI1w3NWbh6Bs8YjI9q6loWRjwe1I5z6nmE6IeL5mcNe6N2YJZCzqRPfVL&X-Amz-Signature=792f5df38c5753c2e9a267426323d75ddcbce9cfb67ad9d49718e021ebc87645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDRDN2IR%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCQIicrpIQiG%2FuHf3ippNevYGD1VRXu6CkXZFhKr5fhCQIhAJeTXVaUpWxSRS2abGgfYdkAzcCpUz41asYTA6mN1ajMKv8DCAQQABoMNjM3NDIzMTgzODA1IgzoGIbJnX0UoXayB7wq3ANnYMY1pHPeMeXHef0k65rM6RAdro%2FstAhoPMdw85Z15TfQPJ5kLDhqINbLpyq%2FwoFyMENCZ8gM6zvI0HTchDJ4w3vjdGI%2B9DLjKnkOb8RQGTDU7zg0QLSbLln3HUt3JOpycp8x6ygEkAbfWz%2BOLB%2BvX27xuSxdqfej6nrsX20Ken2OC2NwD2IVCY4vfWiXFvqFmmKX00m72AlJmC%2BYp5gVEUtkh1sBDOqgu8q%2FT0OU98vn3AAeC3JdtjyRtnGDG7MZ6c7eFXrysGbQy40RNdXIfsbsE61ABdc5LjoEnG3A4DypA78L1x5GxSaT4NEpl8c%2BDtHUI%2FGwgQKvu4BRYJmsxICy0B5GtvtvqgSwdQrKqG2ncm6B1a3RqILrxdEJglYMoA1l8qA26fyC%2BFJhMmJ21cSQxtTomxuRy7a624a51ODD9Wr0%2FiuwQhlVQ3Sx8cObUJdcHUl2h1%2FEFARmi8t01V5Ijk1dhIwdzUJYtR1SZk%2BJKowL05qqaui1if6VLoGhiZjnqE5vK1YXEvkp07HFwFAss6g8Ixyo1aKaNIpvYJrYuAHx4Nlx4Kr5sho8Mx%2F1db8eFRiG4i41b4SYz1d41rjoZRh2LVfpfyMpfuOt4fp4rTn%2FDSWp4ZLJJTDKvJzSBjqkAWZx1LGTbJgEwjFJQU2ypVjDfW8%2B3oxd5qSq07J%2BRtXVw6nUc0F3HX3YDfoY1IWjHJDq5uawBkr3XEiE%2BHD5EHub%2FneDDKerjP%2BMy1z88%2B8NlwXaX5S1KLXef0c0BP8UVFWO7iVIPMXytDLd3TK7RsZm3hqA%2Fexv1i1oI1w3NWbh6Bs8YjI9q6loWRjwe1I5z6nmE6IeL5mcNe6N2YJZCzqRPfVL&X-Amz-Signature=2f6afcb628c6dd841aa6aadac3cbf7d1057602eef41ef27e08e7ed0da2623af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
