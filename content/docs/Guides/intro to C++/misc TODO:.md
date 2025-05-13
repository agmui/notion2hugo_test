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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GV6IZHG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDy0FhEbx%2Fe0W0FaibKIUOyNimpWj5h3ShhIRXJ6dcYIgIhAI3TW2IuLQ1RSum6Bxk10JjtKdleO6T9WtEbG6Al61fPKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUSP1SOjhozM26%2FVkq3ANnbkU4DWke6JSWPaxM2iDJm7GkRDg3kB9uC%2Bx4KBMSog7hj2pO3U%2Bskk9FJjIXBEwJ0VeQNCsaUSt6%2B%2BoI17kZ4h%2FSl6JSQIn2Gm2X%2FHBdwcu6vSCiEHWBim0cyx7v7kkkiTKIAJgkBLeyZlxfPgYyjPyJt3d6L9TXcXsnvm7vXGm6x9kp%2Fc7fV8XwQZHeBUa5%2BL0KpA2StarhyYvuH8ZjMTS6xNTIfk3XMMh3gaPTUr%2F7PMMkSD4DMxcceQl52X08dWiUdvehWTTsRugBcOcwmkAlRA5lOF5M4CF4MZgY4mckn2d%2FT6miZRhKqV2gLn%2BN2aE%2FP4cc8MKZi88tWDT3ss9FQq6JNPYEcRChxbBoAd8rAYeNKF2MoYN3J7t098m27hTydwl%2Fa9NzAbEE%2B34skpg1m5r7TjWRkcZN2vfxC7tHMjq4T4ru7lvwj3I42zTrYtRLgNopYUq59lIDqXk9hTJ9VITP2DwSu9KZihup8kBRNRNmv1UW5ZahAeEKHU%2FCx8mlGXaWnsbovfs4N3T5NPxBT4ckYyZAR7HBWkUI1e4hoJrqpoCwNKIZVoZKzWnEsTDb7bAOsglEv5mcfwVw1pZm2YNcqYlFxyneyKhfsQe%2Bt9ozgM1bMe9i%2FDCyj4vBBjqkASIcEJbi9ZXjJzYZS9i%2B49G4sQZoRCu6pBTDtkznmVaiUaZxaP9okJvVueqAIgOG%2BNVUgACHlaK7wSbC7OzIn91Oq7LgCCLTjv1h6pUYEMmUEJL0rDi%2FOF%2FfZ4jl9iw%2BUZ33Cnpfqe%2FPGqBYoK%2BoZ8suvPt2YIS57WgLbcgyMvKi5OSfwZLFP%2ByDcIiEcIOWcphbH4%2B9%2BfgKe85%2B9ogqEkhQJva7&X-Amz-Signature=922b56f9cd6adc2e50a6c51f332f133b3bab45fffac35b75817cfb59f1669575&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GV6IZHG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDy0FhEbx%2Fe0W0FaibKIUOyNimpWj5h3ShhIRXJ6dcYIgIhAI3TW2IuLQ1RSum6Bxk10JjtKdleO6T9WtEbG6Al61fPKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUSP1SOjhozM26%2FVkq3ANnbkU4DWke6JSWPaxM2iDJm7GkRDg3kB9uC%2Bx4KBMSog7hj2pO3U%2Bskk9FJjIXBEwJ0VeQNCsaUSt6%2B%2BoI17kZ4h%2FSl6JSQIn2Gm2X%2FHBdwcu6vSCiEHWBim0cyx7v7kkkiTKIAJgkBLeyZlxfPgYyjPyJt3d6L9TXcXsnvm7vXGm6x9kp%2Fc7fV8XwQZHeBUa5%2BL0KpA2StarhyYvuH8ZjMTS6xNTIfk3XMMh3gaPTUr%2F7PMMkSD4DMxcceQl52X08dWiUdvehWTTsRugBcOcwmkAlRA5lOF5M4CF4MZgY4mckn2d%2FT6miZRhKqV2gLn%2BN2aE%2FP4cc8MKZi88tWDT3ss9FQq6JNPYEcRChxbBoAd8rAYeNKF2MoYN3J7t098m27hTydwl%2Fa9NzAbEE%2B34skpg1m5r7TjWRkcZN2vfxC7tHMjq4T4ru7lvwj3I42zTrYtRLgNopYUq59lIDqXk9hTJ9VITP2DwSu9KZihup8kBRNRNmv1UW5ZahAeEKHU%2FCx8mlGXaWnsbovfs4N3T5NPxBT4ckYyZAR7HBWkUI1e4hoJrqpoCwNKIZVoZKzWnEsTDb7bAOsglEv5mcfwVw1pZm2YNcqYlFxyneyKhfsQe%2Bt9ozgM1bMe9i%2FDCyj4vBBjqkASIcEJbi9ZXjJzYZS9i%2B49G4sQZoRCu6pBTDtkznmVaiUaZxaP9okJvVueqAIgOG%2BNVUgACHlaK7wSbC7OzIn91Oq7LgCCLTjv1h6pUYEMmUEJL0rDi%2FOF%2FfZ4jl9iw%2BUZ33Cnpfqe%2FPGqBYoK%2BoZ8suvPt2YIS57WgLbcgyMvKi5OSfwZLFP%2ByDcIiEcIOWcphbH4%2B9%2BfgKe85%2B9ogqEkhQJva7&X-Amz-Signature=f2286e459916403841152d248d08068512473f5abb22d469ac17d6f9020393ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
