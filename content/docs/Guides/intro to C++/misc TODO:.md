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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN54MTU2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFg5bEVBx1cgx6gerwCKJUL7rnp8DMLchovGfhe%2Fopg1AiBmwxPyPQtBrNja2KW1ghUjqnuN8HxTJLywXfIg1e42%2FSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMoNae29FfN7RnaII0KtwDnc3GppCWn3GcI1JlKqOe8A42kIfkI2YmmbMhFjLE125Mc%2Fv7261OUoMjeuVTz%2F%2FLCQ6fzKPmL5tEZT5wAm5CZ7OtCt8vo2pSaupNQ0BA5RClwXPGsw%2BaNqnjYvaCMj8ePKTFAK1iEyAklfanjT44qQCVBbdHHtojFxBCqfdG6hWfKZHwyJ12HtW3bbI1SXUAR1XbXcqhQxiqeZCRLTJfp9O%2FUneGnVzSDAYw7CZTHciZGdaUqmKR1pJPBFMoEGQ9JVVD98cKs2w047KjMudA%2BCWEGgkfWLsqedfAmlOD7gPLhS08JEHzWlKVC%2BA%2Fe%2BEd4Lvk0fn37Q%2FyYzrMoWJcr%2BkpGNmCOF9GVREzNgCWagmPsLBIKxEorSAIiMk7cq8Kz%2Fap4W8uPWq1qIa%2F5HOZc5EWZdg3LOyex%2BqNL%2BvWXhjrG097hPM4itO%2FZFdlo5n61Pj7YmkFInOBk6VJKAdbh1YogDdDVdQSQciExXUlh8BBW3JNLJxDHZe718xq62iu7LuRs2DjM8sbBoOKdj7bvEzQf8%2BKlxLJQOwyevKUTDMnOJ2kbZYtz%2FhbgtgcP1B6mqdyYaAozFBJKC%2Fgv%2BwZdhqQyewjwrAKMeNAVjx33s%2BnqkWt8XB4vqNsiOgwibOxvgY6pgGT00uF6izONacdl%2B6MCaslnMa%2BgQfuHdlzGKFF8JdTWrVmHVG1h300L%2Bn8dVNKKUPClb58n%2F13mbT7LhUZDESWh3CHqM6fHEPe4mUi3gExcnB3mQAnpvmPv%2BUANwXzjKonNdBnlE1rHGSJVmBF5MC1pisNf8GvlJTjtb50J1UcRUvrbONqE0Q%2FJdBGsYvT%2BtuckQv9H7JZx2z53xtnmMjAzG45spVi&X-Amz-Signature=175a11bcd3b20a473ea1dccf9b4bdb5e411af7538e4180344fc9e1bb5ba3b677&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN54MTU2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFg5bEVBx1cgx6gerwCKJUL7rnp8DMLchovGfhe%2Fopg1AiBmwxPyPQtBrNja2KW1ghUjqnuN8HxTJLywXfIg1e42%2FSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMoNae29FfN7RnaII0KtwDnc3GppCWn3GcI1JlKqOe8A42kIfkI2YmmbMhFjLE125Mc%2Fv7261OUoMjeuVTz%2F%2FLCQ6fzKPmL5tEZT5wAm5CZ7OtCt8vo2pSaupNQ0BA5RClwXPGsw%2BaNqnjYvaCMj8ePKTFAK1iEyAklfanjT44qQCVBbdHHtojFxBCqfdG6hWfKZHwyJ12HtW3bbI1SXUAR1XbXcqhQxiqeZCRLTJfp9O%2FUneGnVzSDAYw7CZTHciZGdaUqmKR1pJPBFMoEGQ9JVVD98cKs2w047KjMudA%2BCWEGgkfWLsqedfAmlOD7gPLhS08JEHzWlKVC%2BA%2Fe%2BEd4Lvk0fn37Q%2FyYzrMoWJcr%2BkpGNmCOF9GVREzNgCWagmPsLBIKxEorSAIiMk7cq8Kz%2Fap4W8uPWq1qIa%2F5HOZc5EWZdg3LOyex%2BqNL%2BvWXhjrG097hPM4itO%2FZFdlo5n61Pj7YmkFInOBk6VJKAdbh1YogDdDVdQSQciExXUlh8BBW3JNLJxDHZe718xq62iu7LuRs2DjM8sbBoOKdj7bvEzQf8%2BKlxLJQOwyevKUTDMnOJ2kbZYtz%2FhbgtgcP1B6mqdyYaAozFBJKC%2Fgv%2BwZdhqQyewjwrAKMeNAVjx33s%2BnqkWt8XB4vqNsiOgwibOxvgY6pgGT00uF6izONacdl%2B6MCaslnMa%2BgQfuHdlzGKFF8JdTWrVmHVG1h300L%2Bn8dVNKKUPClb58n%2F13mbT7LhUZDESWh3CHqM6fHEPe4mUi3gExcnB3mQAnpvmPv%2BUANwXzjKonNdBnlE1rHGSJVmBF5MC1pisNf8GvlJTjtb50J1UcRUvrbONqE0Q%2FJdBGsYvT%2BtuckQv9H7JZx2z53xtnmMjAzG45spVi&X-Amz-Signature=1cd150767b64e547ffd15a0ee06a9efad0a527253420500fd8954898276e5b30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
