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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNYTFOK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGNqZCjGvIlhf4kTYmWKQDDFPZL1ybeGoskPHib4ngW4AiEAxveGbe77J03nc3KJ6eZE13rSHXUtUIs417DxtaoP2KAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJsUXgjOSrNeAhLklircA%2BSVLWRpKRdsCnW6d5Sw92U5RToyOZ99orHyDPgXKh9PHhu50yrrGiBPsY1fHj4a3zZXcYxh%2FbEdTcDRNaZqjBnblLnzB3feohDUbdEuY5SDTcUR0PMzjEJOsFGC1sgV4ToEZu5r6Fqx11FzAmSbPEnpkX4tQrS7NLY8KsQTy2vz0P00Eib3c744b5%2BcJ6UTsuvarYqO8gi8IB7u8twGU3b6WeJ2K6aPTENTI%2Fnc2WmWbK81B2RUUVmu6xrC6au8%2FrW2YNpg2Y1goiRkAIZ9cQq8Z6luTnzCFzjjz9bx4zOkSjHy%2BQhyxgXNIb7vsrEfjEW%2B3cq9SLYBtnfjryKxHsyQn7Vg0US4oLdT9JWXpEjZYfTUS%2Fs6%2FkbGEblXAlQiG%2FvCMawQ%2F%2B%2FNTqgVHxK7bROmiQNgtjKBxtaGex%2F7YRXz5y7LpmmNWRd%2BtmtfJSosCJRBVNnmG7PsYjX7ppZ0uUTvgNwS6IKh4IWJOIKQhRFx0PhTNZ7EuLIhNCyBsjjo9a8n0vWEWYQhDMJmUmqSKq%2FzZDgPPqThdMsAVpYZ%2Fvek56B4%2FFsaxvrK29hNZbLCXBRlp6aE9o8umt9l8vTCuOZP9jQswbiwNUilqWtxDzEBXSLO7691Ty34pHfJMN3Usr4GOqUBKhENWH9xFqFV0ZDXG7k2Q%2FNWfnysV02a5iuTBQkH8SqQ3ut3EqHUHPrRcmbvyi6R3JgWfqMX1uLQ8X%2BEBp2LiulUqT0ghVCfuXj9W0LO0fqaVqbHUFjkWAr2TkifWzlcI0fUXUpnCWK9R7Aagf42K7jHVr947%2BOsBFJQCh6c62tI6%2BSveBZoSDiAqRzpQluGGAKP9Eobk4hgAWJwnfxBWZFFQpFT&X-Amz-Signature=62c9c680d810c3bdd079c39e248b21f106f767b2c08d3a154c2f9f6ca083537e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNYTFOK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGNqZCjGvIlhf4kTYmWKQDDFPZL1ybeGoskPHib4ngW4AiEAxveGbe77J03nc3KJ6eZE13rSHXUtUIs417DxtaoP2KAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJsUXgjOSrNeAhLklircA%2BSVLWRpKRdsCnW6d5Sw92U5RToyOZ99orHyDPgXKh9PHhu50yrrGiBPsY1fHj4a3zZXcYxh%2FbEdTcDRNaZqjBnblLnzB3feohDUbdEuY5SDTcUR0PMzjEJOsFGC1sgV4ToEZu5r6Fqx11FzAmSbPEnpkX4tQrS7NLY8KsQTy2vz0P00Eib3c744b5%2BcJ6UTsuvarYqO8gi8IB7u8twGU3b6WeJ2K6aPTENTI%2Fnc2WmWbK81B2RUUVmu6xrC6au8%2FrW2YNpg2Y1goiRkAIZ9cQq8Z6luTnzCFzjjz9bx4zOkSjHy%2BQhyxgXNIb7vsrEfjEW%2B3cq9SLYBtnfjryKxHsyQn7Vg0US4oLdT9JWXpEjZYfTUS%2Fs6%2FkbGEblXAlQiG%2FvCMawQ%2F%2B%2FNTqgVHxK7bROmiQNgtjKBxtaGex%2F7YRXz5y7LpmmNWRd%2BtmtfJSosCJRBVNnmG7PsYjX7ppZ0uUTvgNwS6IKh4IWJOIKQhRFx0PhTNZ7EuLIhNCyBsjjo9a8n0vWEWYQhDMJmUmqSKq%2FzZDgPPqThdMsAVpYZ%2Fvek56B4%2FFsaxvrK29hNZbLCXBRlp6aE9o8umt9l8vTCuOZP9jQswbiwNUilqWtxDzEBXSLO7691Ty34pHfJMN3Usr4GOqUBKhENWH9xFqFV0ZDXG7k2Q%2FNWfnysV02a5iuTBQkH8SqQ3ut3EqHUHPrRcmbvyi6R3JgWfqMX1uLQ8X%2BEBp2LiulUqT0ghVCfuXj9W0LO0fqaVqbHUFjkWAr2TkifWzlcI0fUXUpnCWK9R7Aagf42K7jHVr947%2BOsBFJQCh6c62tI6%2BSveBZoSDiAqRzpQluGGAKP9Eobk4hgAWJwnfxBWZFFQpFT&X-Amz-Signature=0e454ffddca75198c951dbcbafddd14278ca1eeaa6c97f2821aea185244004c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
