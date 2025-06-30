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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5C6YXW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiz0OgUtUSaMFVE%2BZIBkQgDC%2FJCyTzeXA7iN6yqXjXCAiBqe9pbpbw1Y4uX9hrZ8biAPhS6dvA8Dm4yEhhTXK6hoiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLOO9%2FYjSHgGExiGKtwD2x4yX7O8tOzVMYMoLz2Eaeg6AVM9foCFwjxrwZ3F6WJehfYN9Xj%2B5DtbTESGIWvT1wF6NgYvSsrVezO%2FOMnMaEm21WpQZq%2Fd62%2BNhoah20u07h9%2FWeR6Jum%2BkgzsStn%2BzSCy4hFw%2Bb3jwHnS7P4x%2FzFneNzltxUVTw%2Bok6M7p2d2Oypr7tHvA%2Fkcx%2BkyMQPXO71ZZ4mJcn5A6RMk6qAfU1A%2BqJy63IAREtITpXr25POWdITRg32b0CeZRnCAdDomkaggLS8G7iJoGDhCq0CqqUoh8NdLZTeM3k5ASTePfKbxD8Yq8Bdsqs%2Bwmshl1f0%2BZ9wara3w36R69vje4bB0%2BaQOwg0yZUrJKH1gEenoOywyWhKxOlmPmzZ0Sm8TsZ%2FpISrH0EfsB7oP3iap0Et%2B4uEpZaqd3rHRRdvlSPzNOJQpo1OtqjYAu4h6YxydsMlcDXKDN3qRXh90qomaTZad83tioOVkXS0gUghYcp7IG6jS%2FUfdM%2FiPloRvJVW5r0JmnzxZthitllucJuKgyQQceMYf9EkWCLJkK0wRhHtTDnTSxVIbMvF%2BNMaV0LqEDZzxwFyZ7dJE2FAQcHxwdAMv6B69KDzLGs4Up1KwM94JKCU%2BG69V194ofZw02LcwmL6HwwY6pgGurLUghRNMtFwYyY%2B2FLHTGOGBOMim%2FcAKQ6jKk9uT7vuYpZ6zmIeCFt%2BWHXVWJypE8uerPTT5Rs09T7u9wps3wS8J%2F4tJFan41PXocO3qkpXYuCppBDsLdMv8UeEQfUCKmuiypa2W0G3tgxEf5SUp%2BKf8XBgDiUY9wKe25zg5xuG%2BduYzwvy%2BYK%2FV2RM%2BBlhTMdVvO%2FwQRtS9Pv8RDo%2Boa1wjX1E9&X-Amz-Signature=315044686cd567115318b6e0f4aedbd3b489381b0b506f6faaf28a4f2123754e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5C6YXW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiz0OgUtUSaMFVE%2BZIBkQgDC%2FJCyTzeXA7iN6yqXjXCAiBqe9pbpbw1Y4uX9hrZ8biAPhS6dvA8Dm4yEhhTXK6hoiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLOO9%2FYjSHgGExiGKtwD2x4yX7O8tOzVMYMoLz2Eaeg6AVM9foCFwjxrwZ3F6WJehfYN9Xj%2B5DtbTESGIWvT1wF6NgYvSsrVezO%2FOMnMaEm21WpQZq%2Fd62%2BNhoah20u07h9%2FWeR6Jum%2BkgzsStn%2BzSCy4hFw%2Bb3jwHnS7P4x%2FzFneNzltxUVTw%2Bok6M7p2d2Oypr7tHvA%2Fkcx%2BkyMQPXO71ZZ4mJcn5A6RMk6qAfU1A%2BqJy63IAREtITpXr25POWdITRg32b0CeZRnCAdDomkaggLS8G7iJoGDhCq0CqqUoh8NdLZTeM3k5ASTePfKbxD8Yq8Bdsqs%2Bwmshl1f0%2BZ9wara3w36R69vje4bB0%2BaQOwg0yZUrJKH1gEenoOywyWhKxOlmPmzZ0Sm8TsZ%2FpISrH0EfsB7oP3iap0Et%2B4uEpZaqd3rHRRdvlSPzNOJQpo1OtqjYAu4h6YxydsMlcDXKDN3qRXh90qomaTZad83tioOVkXS0gUghYcp7IG6jS%2FUfdM%2FiPloRvJVW5r0JmnzxZthitllucJuKgyQQceMYf9EkWCLJkK0wRhHtTDnTSxVIbMvF%2BNMaV0LqEDZzxwFyZ7dJE2FAQcHxwdAMv6B69KDzLGs4Up1KwM94JKCU%2BG69V194ofZw02LcwmL6HwwY6pgGurLUghRNMtFwYyY%2B2FLHTGOGBOMim%2FcAKQ6jKk9uT7vuYpZ6zmIeCFt%2BWHXVWJypE8uerPTT5Rs09T7u9wps3wS8J%2F4tJFan41PXocO3qkpXYuCppBDsLdMv8UeEQfUCKmuiypa2W0G3tgxEf5SUp%2BKf8XBgDiUY9wKe25zg5xuG%2BduYzwvy%2BYK%2FV2RM%2BBlhTMdVvO%2FwQRtS9Pv8RDo%2Boa1wjX1E9&X-Amz-Signature=3a9569b7ed3942a17c5d835a4fdcb9f4b4905cae2acf515db9250a7dfc592072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
