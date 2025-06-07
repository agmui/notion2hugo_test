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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZZALDI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5B7lVucvCwFMif%2FoBtvph5qv86zUDyOlFdlAaNp4LgIhAKGF4IOcmLcfF9xCYF%2FmZNESsSI9pUp9yUVp4BDctjIaKv8DCGsQABoMNjM3NDIzMTgzODA1Igwru6EwKFs%2BMrEqlF0q3AP0I24rNIjStfwlYSp17ExA5oEJ003gYl391cm0SUA8mh%2Bo%2FXfAosrovGxvvH%2BBcfhBADhEd8aEb%2BeaZExZGT8CyUJccO6JPtjej4R%2FwnGQUgBZI2zfTLyqzZH2y7bDsxThKPRPch5SgtIMlgDOh5fvRdElbtU5OvZ8k9YJ4ZZ4lGDeu1og9WNvW80FUmMexYt6ZKuyvAEhdQ7fiQnr9BrDMLdNOka0h1As8A6VvW4iYfFIDrqV4fD9%2BqiiF4oihRByuDsnWQuvfVuu5M4QbowcQGK5gVeIUhh9CyxMApPdrrnnXUot129CUd0bDXGjifJujrCmZoGGp1UY7nLj%2BVCJNbhDTNE1hUi%2F%2BbmNCS3QfWuGlhplbwoOFdi55Cx5BoAAR74nh%2Fvk09PsippbhzeGmw%2BJbrTvdP6xWlQ3Fhl5F5hnszzS%2BTj5ZC%2BUY3uSS2pcSfbu3QhzHy492R1lj60Ci8rHy%2BjIqL3HdEA%2FkbcpRj951%2FTewmZkgO7jiYd28PsKAbtsiSm1o25yD%2FDqQOYENMqWmEnujGFuMP0fRpiuu%2BBhRWFEVFGTxWxWglU%2BdQBE0TlHS16vqXGzKdUQGOHmPvWclP5lN0NXPrxms3v9PgQrC%2BPbe1ObMT9LCzDJwI7CBjqkAdVn0hIZWPalxIZkfmL0QnvL5kgeRcc2wOFGeJzEWJ9ZVbe9D%2FtolV0Pzib2LAqF3LUa8YuHWYnPdt97lbJvNkWnglkWcxU03uNGHhTaXAzDCJAHxSiykhu9CjRL%2FQTsGoEUI6p9CPv5pbhgSPf5IOLZRKm05BAPOFnZQrCUDtC6O4E787bRBO%2BR4NW%2F5f6Jlrx1jQxzbRBeqAvK78%2FY9dCCr5zX&X-Amz-Signature=082c36aaae3d3e1688450564bae11a822870ac043168c5883b6c2c110993a6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZZALDI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv5B7lVucvCwFMif%2FoBtvph5qv86zUDyOlFdlAaNp4LgIhAKGF4IOcmLcfF9xCYF%2FmZNESsSI9pUp9yUVp4BDctjIaKv8DCGsQABoMNjM3NDIzMTgzODA1Igwru6EwKFs%2BMrEqlF0q3AP0I24rNIjStfwlYSp17ExA5oEJ003gYl391cm0SUA8mh%2Bo%2FXfAosrovGxvvH%2BBcfhBADhEd8aEb%2BeaZExZGT8CyUJccO6JPtjej4R%2FwnGQUgBZI2zfTLyqzZH2y7bDsxThKPRPch5SgtIMlgDOh5fvRdElbtU5OvZ8k9YJ4ZZ4lGDeu1og9WNvW80FUmMexYt6ZKuyvAEhdQ7fiQnr9BrDMLdNOka0h1As8A6VvW4iYfFIDrqV4fD9%2BqiiF4oihRByuDsnWQuvfVuu5M4QbowcQGK5gVeIUhh9CyxMApPdrrnnXUot129CUd0bDXGjifJujrCmZoGGp1UY7nLj%2BVCJNbhDTNE1hUi%2F%2BbmNCS3QfWuGlhplbwoOFdi55Cx5BoAAR74nh%2Fvk09PsippbhzeGmw%2BJbrTvdP6xWlQ3Fhl5F5hnszzS%2BTj5ZC%2BUY3uSS2pcSfbu3QhzHy492R1lj60Ci8rHy%2BjIqL3HdEA%2FkbcpRj951%2FTewmZkgO7jiYd28PsKAbtsiSm1o25yD%2FDqQOYENMqWmEnujGFuMP0fRpiuu%2BBhRWFEVFGTxWxWglU%2BdQBE0TlHS16vqXGzKdUQGOHmPvWclP5lN0NXPrxms3v9PgQrC%2BPbe1ObMT9LCzDJwI7CBjqkAdVn0hIZWPalxIZkfmL0QnvL5kgeRcc2wOFGeJzEWJ9ZVbe9D%2FtolV0Pzib2LAqF3LUa8YuHWYnPdt97lbJvNkWnglkWcxU03uNGHhTaXAzDCJAHxSiykhu9CjRL%2FQTsGoEUI6p9CPv5pbhgSPf5IOLZRKm05BAPOFnZQrCUDtC6O4E787bRBO%2BR4NW%2F5f6Jlrx1jQxzbRBeqAvK78%2FY9dCCr5zX&X-Amz-Signature=198d016b45e437d199f71fc56f4f5c3c92738e239ef3e882a1602be1847dfe19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
