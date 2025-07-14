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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WILS5HZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAqK0G7BqfIWvORzgQFX7NAnhh0kTbkZt52ryJxA%2F92cAiAsqqAUNns%2FXkat7jMhsn%2B%2FRBhdRPBwcN6OIA4sAoOIRSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMEiHGkWJTIrMYBsm1KtwDTFUDTm3wv%2FPX6FIlTr%2FKk%2FrHLApJyEMT51VpAaIHJWc2fghWInGqZG5TbKJDEDpMHZUDLLjiE6vro3AdC6BXt2SlyMfRX0%2FEZecl2gYafTps5m%2BIpPjlEMLYviezEm3D3WYDD9BnAexiBkBylHzFKOSk7aDqg6P30gFgbfNW7LE9KGt9RP%2BUrhRNrE3di8INxRLDe3aENwU8vzfvPdqou1NMRQ1QLKQDlzB0u4zmAzY1b4DnvQCMn9yIFrQbqwPhoC%2BBfj%2BXaAvpGrj5akEBkSwIMmUQG5TKWIihDuaHAuGr3lPkkfIrfVzkbdukhkiBsChQOQu2MSOi%2Bs5NCPCHqFhOgjrRVwBC35sBqw1GycKtGuONsD7JneWQbXMUZesw0fmbwN9%2B9EXLC%2B%2B%2BuKSIPn0RpYimL7lYqm1Gi8wrTcFwaMEA5WRWPZfO5w5OZWjqIstez1v6p%2BJ7wPZRxr5Z6qk%2Fm0gc4u1U%2FSQ%2F20hMzkDtcMF1MZvwv8UfYJS%2BWyCiCx2XIqHg8O838Qyu0oFGYA5yLSafBQ1fzGEL%2B0ODFyOQmRjmY6CTcGe8wD3I0jNCKCIApnUrxq5clxPCIu58rk32REOZs3QHge%2BA0Seg9RwYwdMtEdSjPkOzwSww6IjTwwY6pgF36xMsjH7%2B9hpRK5c0E5e5A0fxC4qYiESh8fyybGDQqrLXT3rjaUV1F2xuQxlQKVZ3SsIyk2eqSwjbuY5stQipTW5jqHevzXrwFvs9Y4P4z%2BFGT5SxMkFLAhNLa7LDCqNj7Of3DVCowYvk4s3%2FiJKtmBQxUCSG67I5qD0flP7OpdHNC%2BUNjeL8uniQx3VmXDUv4QOx8SEUtxvB8hJ9n39hvSWpmuXS&X-Amz-Signature=d629716866b0e54fed517aa7eee16b2274ef3b791ccdce3748c8485bd33a4e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WILS5HZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAqK0G7BqfIWvORzgQFX7NAnhh0kTbkZt52ryJxA%2F92cAiAsqqAUNns%2FXkat7jMhsn%2B%2FRBhdRPBwcN6OIA4sAoOIRSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMEiHGkWJTIrMYBsm1KtwDTFUDTm3wv%2FPX6FIlTr%2FKk%2FrHLApJyEMT51VpAaIHJWc2fghWInGqZG5TbKJDEDpMHZUDLLjiE6vro3AdC6BXt2SlyMfRX0%2FEZecl2gYafTps5m%2BIpPjlEMLYviezEm3D3WYDD9BnAexiBkBylHzFKOSk7aDqg6P30gFgbfNW7LE9KGt9RP%2BUrhRNrE3di8INxRLDe3aENwU8vzfvPdqou1NMRQ1QLKQDlzB0u4zmAzY1b4DnvQCMn9yIFrQbqwPhoC%2BBfj%2BXaAvpGrj5akEBkSwIMmUQG5TKWIihDuaHAuGr3lPkkfIrfVzkbdukhkiBsChQOQu2MSOi%2Bs5NCPCHqFhOgjrRVwBC35sBqw1GycKtGuONsD7JneWQbXMUZesw0fmbwN9%2B9EXLC%2B%2B%2BuKSIPn0RpYimL7lYqm1Gi8wrTcFwaMEA5WRWPZfO5w5OZWjqIstez1v6p%2BJ7wPZRxr5Z6qk%2Fm0gc4u1U%2FSQ%2F20hMzkDtcMF1MZvwv8UfYJS%2BWyCiCx2XIqHg8O838Qyu0oFGYA5yLSafBQ1fzGEL%2B0ODFyOQmRjmY6CTcGe8wD3I0jNCKCIApnUrxq5clxPCIu58rk32REOZs3QHge%2BA0Seg9RwYwdMtEdSjPkOzwSww6IjTwwY6pgF36xMsjH7%2B9hpRK5c0E5e5A0fxC4qYiESh8fyybGDQqrLXT3rjaUV1F2xuQxlQKVZ3SsIyk2eqSwjbuY5stQipTW5jqHevzXrwFvs9Y4P4z%2BFGT5SxMkFLAhNLa7LDCqNj7Of3DVCowYvk4s3%2FiJKtmBQxUCSG67I5qD0flP7OpdHNC%2BUNjeL8uniQx3VmXDUv4QOx8SEUtxvB8hJ9n39hvSWpmuXS&X-Amz-Signature=9ccb5d5fa59cccc01dcffbde98f4f5ab2a701df67c876a4c944cbbdd7bb28228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
