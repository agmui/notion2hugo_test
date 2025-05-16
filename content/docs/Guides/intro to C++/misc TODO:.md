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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAOKBQR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM8teFUTdCBpSc%2Bzh2Rg%2B4QSTayCyePh6yyfYyYcmsUAIhAJBBotMxsAe0g9GFMoLG2PfauWRaOPGz9%2BjGb27oPGjIKv8DCDkQABoMNjM3NDIzMTgzODA1Igx8UK2XuU0VuQnZ%2FRMq3AMEkjnqj3kXW6GoqneDYCY3JigHzgLj6S0aj4ZKzAaVJtBNtouVVvkmmIh5evQrQVSr5oJUAwPOB0YWyJXX3lV54Ds%2FrKcS6JqFkIJk6GnzQwYdjpS3I9oVJORKoRQHscXOuejT7u5vkdLwVZ9sL1CyfGXewB3BkZxZw0zcTSG7R5%2BAlH2IesLkEV4ACvKCTBAWcMt33bZMVYclmtXX0LvmESTXtqELkuo5geq8K9EpR4Q2WItPhpNueyfG4U1Y0UdY0D026vFlBQrpViKmtSKjxKJDRFPMQQxVhI%2BRvKVTBP084oozqohA8FFgZEa5dgcURS%2BPN0UkqiSZJ1TF3fFTqaET23O5sgQzBZSqo4t0iNBqGKON0M85KVH9DdakdEx1OXYuWKtvxb6LVynXn3%2FaA5X1Fzy1n4%2FDT9VLTOcilPtcMzlR2COlISxB6kNaLqi8qhdecqo1HvKpdfA8Gd%2B3MmsmbddMw5AvOTCa83rlHH4i6h3esZvbNH0CiOlumdzCCLI7M4L9eQS167%2FlaIBFnt9QsW6Rw%2F4uN3FVSAAuBEgzXBDWXnPOX2O3I0gJqb8HQJPxj1WLc9B3rUwImIYq6mU6BMD7hx7e37r2cn53zjDuVM%2FcCnTn%2FQZtEzCA%2FpnBBjqkAZ76R65KAqWvQkH3k%2FXS6flO9wD4W%2BcF9jOJKBNXWDwvJNuWSrelrycl%2BifrDvW7qE0grqzBc%2FfS2nfairJTHcyatIhexJBiokypRcyMEdq4mcyWPpmbxI5IAZWqp%2BkTaEgbdSZ8r1VuiGCajQyfVmgpClheenFToIBMBIOPwmGB5gwtyL6QUwWkdCXbnYZ0gWbN0UX%2BzGk8KuJRDmPjMvmASvoC&X-Amz-Signature=98d3ca6883d11f72d71d43ff3cf821910382deabd372cc9fcc2a83684159d529&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAOKBQR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM8teFUTdCBpSc%2Bzh2Rg%2B4QSTayCyePh6yyfYyYcmsUAIhAJBBotMxsAe0g9GFMoLG2PfauWRaOPGz9%2BjGb27oPGjIKv8DCDkQABoMNjM3NDIzMTgzODA1Igx8UK2XuU0VuQnZ%2FRMq3AMEkjnqj3kXW6GoqneDYCY3JigHzgLj6S0aj4ZKzAaVJtBNtouVVvkmmIh5evQrQVSr5oJUAwPOB0YWyJXX3lV54Ds%2FrKcS6JqFkIJk6GnzQwYdjpS3I9oVJORKoRQHscXOuejT7u5vkdLwVZ9sL1CyfGXewB3BkZxZw0zcTSG7R5%2BAlH2IesLkEV4ACvKCTBAWcMt33bZMVYclmtXX0LvmESTXtqELkuo5geq8K9EpR4Q2WItPhpNueyfG4U1Y0UdY0D026vFlBQrpViKmtSKjxKJDRFPMQQxVhI%2BRvKVTBP084oozqohA8FFgZEa5dgcURS%2BPN0UkqiSZJ1TF3fFTqaET23O5sgQzBZSqo4t0iNBqGKON0M85KVH9DdakdEx1OXYuWKtvxb6LVynXn3%2FaA5X1Fzy1n4%2FDT9VLTOcilPtcMzlR2COlISxB6kNaLqi8qhdecqo1HvKpdfA8Gd%2B3MmsmbddMw5AvOTCa83rlHH4i6h3esZvbNH0CiOlumdzCCLI7M4L9eQS167%2FlaIBFnt9QsW6Rw%2F4uN3FVSAAuBEgzXBDWXnPOX2O3I0gJqb8HQJPxj1WLc9B3rUwImIYq6mU6BMD7hx7e37r2cn53zjDuVM%2FcCnTn%2FQZtEzCA%2FpnBBjqkAZ76R65KAqWvQkH3k%2FXS6flO9wD4W%2BcF9jOJKBNXWDwvJNuWSrelrycl%2BifrDvW7qE0grqzBc%2FfS2nfairJTHcyatIhexJBiokypRcyMEdq4mcyWPpmbxI5IAZWqp%2BkTaEgbdSZ8r1VuiGCajQyfVmgpClheenFToIBMBIOPwmGB5gwtyL6QUwWkdCXbnYZ0gWbN0UX%2BzGk8KuJRDmPjMvmASvoC&X-Amz-Signature=24ee4bc65f9613b4575e5d258916085373eb549251840f9e7f767a02eaa0687e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
