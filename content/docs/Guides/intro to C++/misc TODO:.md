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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMN3AQOL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvk9IRLn30wUqnsFo4mngI4ZOQrs9loW%2FO4%2Bxk%2BQ6VJAiAbu4fIKpYQFbWcj5Fkt%2BG4OHbG%2BAtm49hHH4oC7KjA3Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMt1%2FE9kO7apee1KRsKtwDgB9YnNNKgEOJ5Kex2HiwMhlyuEi9r%2Fls0R%2FsaEmUemTIwC6GJOFa4iDuLz3yDu7tTgBY40Gr0H1BUE000ZDf5f7CzzlYTbDoF5AfX0Ni0ogl8Slpz0AYbG4eb%2ByGhnDLLckpHtbas8lxOtN4k3KXcXO4YIzhKQQRt3TLa82avxoLcxbWRftFvvZr%2FDZqzsRCwUfa1QtBD4AEzc3KimnJtQgwGUACyKnoqPdv9gm0EKsFwg9GJkzwfpgM7zqkO8SoinFB7nTCOjI7zNGIfrY1sJVywBbN%2FWp6NQsoqhlF6SkmmSttxlKBJS0hEZJ213CqzT8U1M6Yk1mJnsbfKyJtRuGnWJCvU6%2FwWfM7%2BLa1Ka%2B6%2Fq9MB7NbdYdVEtm6N96u0kWbtVVXhGbJxYFqPzArjLMdKkOCuqkbS3UXqlwBg9JnfiC4x%2FsQJ0DGSyc%2F2Mj4qT2djD7uQk5H1rYMSFRNW%2B9Ya2NeYahF1n2tL5QbDhr1js9HsKU7kDRH9dMttkxMR55uAe%2FLYBVQxnQMED1%2BkLZIuRh9RtTqzFqEJDBcosFFcDyafqqVnB0lZuL%2F3bSPfPDZcJEK4V9uWMC%2BKaRZVgoYFOdhMzaUZKaXrh0yQlisGi0rwczPxRJejM0w7tucwQY6pgFdzIndzvXtqCKg0Qomce%2BpG6SWJeYYjilco3tCejydS8%2FpkMYihKLCrVGHqq5QW3H%2B6MQt%2BabE9%2BmUV%2Fu7cDMR%2B838NMvHUGk4%2FbEz1PHyEx6350jc%2BO6fHtKwczlWMyOyTk1BDeUecYmS0Um00GDDCLc4MLDePjQ1EbjaxpeJoVUNjthsNEm9sWJUvZd6Fi%2B5ZBz9UXNYUoX0D%2BQlA1EftwXmp%2B%2Bf&X-Amz-Signature=7c8529355a9537409f6c0cbd1e2c75e64e2d4739e78125268a52aec6ace35422&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMN3AQOL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvk9IRLn30wUqnsFo4mngI4ZOQrs9loW%2FO4%2Bxk%2BQ6VJAiAbu4fIKpYQFbWcj5Fkt%2BG4OHbG%2BAtm49hHH4oC7KjA3Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMt1%2FE9kO7apee1KRsKtwDgB9YnNNKgEOJ5Kex2HiwMhlyuEi9r%2Fls0R%2FsaEmUemTIwC6GJOFa4iDuLz3yDu7tTgBY40Gr0H1BUE000ZDf5f7CzzlYTbDoF5AfX0Ni0ogl8Slpz0AYbG4eb%2ByGhnDLLckpHtbas8lxOtN4k3KXcXO4YIzhKQQRt3TLa82avxoLcxbWRftFvvZr%2FDZqzsRCwUfa1QtBD4AEzc3KimnJtQgwGUACyKnoqPdv9gm0EKsFwg9GJkzwfpgM7zqkO8SoinFB7nTCOjI7zNGIfrY1sJVywBbN%2FWp6NQsoqhlF6SkmmSttxlKBJS0hEZJ213CqzT8U1M6Yk1mJnsbfKyJtRuGnWJCvU6%2FwWfM7%2BLa1Ka%2B6%2Fq9MB7NbdYdVEtm6N96u0kWbtVVXhGbJxYFqPzArjLMdKkOCuqkbS3UXqlwBg9JnfiC4x%2FsQJ0DGSyc%2F2Mj4qT2djD7uQk5H1rYMSFRNW%2B9Ya2NeYahF1n2tL5QbDhr1js9HsKU7kDRH9dMttkxMR55uAe%2FLYBVQxnQMED1%2BkLZIuRh9RtTqzFqEJDBcosFFcDyafqqVnB0lZuL%2F3bSPfPDZcJEK4V9uWMC%2BKaRZVgoYFOdhMzaUZKaXrh0yQlisGi0rwczPxRJejM0w7tucwQY6pgFdzIndzvXtqCKg0Qomce%2BpG6SWJeYYjilco3tCejydS8%2FpkMYihKLCrVGHqq5QW3H%2B6MQt%2BabE9%2BmUV%2Fu7cDMR%2B838NMvHUGk4%2FbEz1PHyEx6350jc%2BO6fHtKwczlWMyOyTk1BDeUecYmS0Um00GDDCLc4MLDePjQ1EbjaxpeJoVUNjthsNEm9sWJUvZd6Fi%2B5ZBz9UXNYUoX0D%2BQlA1EftwXmp%2B%2Bf&X-Amz-Signature=bdc1baaf176735fc42aa4d820a0d74006774d2158581d7dce040b118f6de6f15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
