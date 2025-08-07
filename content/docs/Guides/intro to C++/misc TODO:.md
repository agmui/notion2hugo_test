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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=7048f4581fb18e56902fcd7a0978cc40e5d89052010ba16c051269dddcbac732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QD5AIF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDDDbqeHH2SjJBbVxZm1fzFH9%2BrAh%2B1OKfoiq1F4BuUxAIgLuKgT9JoNrJKC29kRwXWrWZ28BzDPJodWX%2F4btZdC84qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1NhAj%2BRt7Mg1fd2SrcA84roaXpZK%2BxUAOTYFD5g9bobcmRkMbYx1KXhe0AMYJe7pT20w2Mnfh2Fb1R%2FJQ9fP%2Bu2KI4xbI14poSBFl145XqtnWtYc%2BOWo4zDc2W4xTNJ1E4ETkHVBHCDjFtld1o5qCYMrCEYUEX7YrzRrUk5eRbcrA4c1UnlKLsUvE1pQ7954xSibfuUcb0XBe8RSc%2FuzjXwBLytv22cJwvNXru359GK8j1DTPOGN0ftGX0lTwLcK0GldYhs6nwsJh99ZaiGXOyNCUPKNwtPMHpKhchofKSmXg8W1i0k3mAYEWpeEmYDV0wSSq2iIDL3kq5JwrsrvQya1W8fufta0JqxiAlSzB5lnFVNqNYC5gmdShfv%2B8XamMmeEY1LVWKtJ2lWIxg2N1rZqaQ7I5O3pfEqr4zboqbJInDndxySiK73ILfIjqYbORRq%2FC0rRdFPQ25%2Fb9dqNgYtRx%2B1dW8kbCT0o97aOZhzdkd0VZ7NBQscbfOspw6GYgwPq3nS7hWGzQxzW3vII8SEv2ggvYmd9isRiOZs6dJicTKAEhvOIl%2FpwrAW9fw7OPa7csleK7dGZFtwZG5HQgsoCCzifHliNtLCxaq8EJdx3j%2ByFpMZ39JVSRDILufNqgieGv1qTNZQYzqMLe10cQGOqUBKljAX3oyomoK5%2Bd0z7d8J10Kj6Nj7DnCsh3wZ5GN3DfaZP3GSI1hguMGx%2BWR6RC2gXwBk88BJ8ClicyXLv%2FnAcZAu1RPkvctn8OKR%2FOkos2uCp4IddX%2F7g%2BCJ2JRgVNPAdf3XrEzuTh2dHkwOHzM12Apfzbv53EXVMd8G7%2Bw6Q4WTiLHNGNPVk7QNP1OEGHAo7mHcbh2kCU3Jxbf91n%2FaqSyHzRi&X-Amz-Signature=038553b85ece96412a47f4a8cc3257e7453037d52ddf6fe2e0ecdbd218fcc0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
