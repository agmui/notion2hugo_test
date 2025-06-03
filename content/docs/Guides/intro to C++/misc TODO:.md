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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVR5XIUW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCLp6zLKLWBnn0N52KhtcPmv3kgqPTwqGxezeoiJwq9%2BgIhAKITuxDPtqO%2FLDjVbT0jzlxhV5w6S8hi3EP%2BFWtvsl3jKv8DCBYQABoMNjM3NDIzMTgzODA1IgzefeN90ncVF4tbzxoq3APzTFf3mYw1DM9n%2BDPw0t918dF6HgPxue5H97FrvDcPjQzGqyvzZUM2AivqBadj%2Bh7xcNjC6fXdEOPJHOmgUxZCdt5ILqv%2FDW91sdtBrKhchT8VXSRtRzVue3bvfeu481G6jwC7lurptMuUQF1B6dEokvH3njOE7EFZ5i1psbX%2Bn7GT9gl4bVjM2%2BY%2FCihJc8vonvoFXCbaiBnIE1pdBrpk7AGry7PgX9Fz2gUxUxOU3EfMKjaT2GxNHTzg%2FCMaFUxkYdb7RrqDl2qA6h9j93aouprQPYyZ8SeZVFNmC8sNXkrgyZ9kGw67VJUWXoLwpj%2BXHRTnFoIZABe7SD6aKmd0Ep0MPGhMM0EEe4VBSMrJGsyoUmj6sER0umNuvM5ntnSTyX5I8UmTZV5gL1A5%2FR6uNhKPkZ2kR8PFsOG%2BfmsjwN4RwlxrE7LTIG4NqU79lA6yIu1TIgMuj2EKLuG2aP9Q4eqatTn00biiwxRBeYAlqAbXLXT4YLt%2BUDi42bJC8l8sy6gTDYhmYLAR2p9e%2FcoG0diKTteVGBSDw8uUCaulGdkLOyMU6HxsjOta7Xdw5Ak6SBBBLGze7YYIJxItGlnNkDnAkL3r9ywJ%2F7KqRJnSkCyVL7ky94LIOKlHUjCc5%2FvBBjqkAd8pnLS%2BqSB%2Fs%2FkRw07OIGP732TZmItnoVQSWzkb%2FWfDdSTQzf4Kt%2BQNpmZWyKqZ24nxkvQVyIFx8H%2FznVAvpBk50p4vBGzCxdagUJYI3k6aHN%2FZjgcBL328%2FHaFd7I5aKNe4xeB%2BeU4zpdy1UzGbg3wvD8WES3kRbb1%2BRuRBEmDTndiZhZcU5l1JBxgBsLyvhxocwWacGFtse0AevmQ0G7q8yY5&X-Amz-Signature=b4529cdd01a89ebc5bce812d5ecfd3af118ebc0ea36414877e73656226a02b52&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVR5XIUW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCLp6zLKLWBnn0N52KhtcPmv3kgqPTwqGxezeoiJwq9%2BgIhAKITuxDPtqO%2FLDjVbT0jzlxhV5w6S8hi3EP%2BFWtvsl3jKv8DCBYQABoMNjM3NDIzMTgzODA1IgzefeN90ncVF4tbzxoq3APzTFf3mYw1DM9n%2BDPw0t918dF6HgPxue5H97FrvDcPjQzGqyvzZUM2AivqBadj%2Bh7xcNjC6fXdEOPJHOmgUxZCdt5ILqv%2FDW91sdtBrKhchT8VXSRtRzVue3bvfeu481G6jwC7lurptMuUQF1B6dEokvH3njOE7EFZ5i1psbX%2Bn7GT9gl4bVjM2%2BY%2FCihJc8vonvoFXCbaiBnIE1pdBrpk7AGry7PgX9Fz2gUxUxOU3EfMKjaT2GxNHTzg%2FCMaFUxkYdb7RrqDl2qA6h9j93aouprQPYyZ8SeZVFNmC8sNXkrgyZ9kGw67VJUWXoLwpj%2BXHRTnFoIZABe7SD6aKmd0Ep0MPGhMM0EEe4VBSMrJGsyoUmj6sER0umNuvM5ntnSTyX5I8UmTZV5gL1A5%2FR6uNhKPkZ2kR8PFsOG%2BfmsjwN4RwlxrE7LTIG4NqU79lA6yIu1TIgMuj2EKLuG2aP9Q4eqatTn00biiwxRBeYAlqAbXLXT4YLt%2BUDi42bJC8l8sy6gTDYhmYLAR2p9e%2FcoG0diKTteVGBSDw8uUCaulGdkLOyMU6HxsjOta7Xdw5Ak6SBBBLGze7YYIJxItGlnNkDnAkL3r9ywJ%2F7KqRJnSkCyVL7ky94LIOKlHUjCc5%2FvBBjqkAd8pnLS%2BqSB%2Fs%2FkRw07OIGP732TZmItnoVQSWzkb%2FWfDdSTQzf4Kt%2BQNpmZWyKqZ24nxkvQVyIFx8H%2FznVAvpBk50p4vBGzCxdagUJYI3k6aHN%2FZjgcBL328%2FHaFd7I5aKNe4xeB%2BeU4zpdy1UzGbg3wvD8WES3kRbb1%2BRuRBEmDTndiZhZcU5l1JBxgBsLyvhxocwWacGFtse0AevmQ0G7q8yY5&X-Amz-Signature=c0edf4ec37b7dfb0a6d37643b3620e5b4d5a6f8aaebb032cdc4418042107b940&X-Amz-SignedHeaders=host&x-id=GetObject)

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
