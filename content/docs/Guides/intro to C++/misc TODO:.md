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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJVHJP7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIQCyOmWttv0d62ia1CV2pzsZvQ%2BrQdVpmJ2PMJK%2FF0MpAAIfbTEljmFp6m1xfglNR9YJpCp1M0mokeoi1oB1JUSY8Cr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMsVU0ak3OvaCfNLq%2BKtwDv5r8peaDre0VobGJNqcbITSKkNhBofvE3otzN1u22J9ake7WngonqCiqipRMPb66wg1FzIHFjrkXboB9pksA%2BQoL2U9jAvAFUkJiTIliX738SnmCFrw8%2B6vU7SD3KCnW6HzYKdjS4TsJz5BTaPv59Qux5NB1EnxijTJbtv2vC7IvO6cHm9GqECg7rWwb0u0v04rHGweKSk0b4lEbGUlvQkwZUCmP44uhUN1PJmAs1SB0O2HXlC2aUOSclROY0fEiKUheU0TLd5sljtcLhxxlyd4XY2h2gQxaSv2zVpbpCKJQtSdErAGmeEtZtu5LE2Omc02cxO3vWFYZ9Wln43s6%2B2bbC%2F6rHgHU6xkZwAFZLsq5gpQHQcCp19hczgqqGiaSweQg69tDX0mx6rmLRr3PflkQrSvqiR%2FLjwGPRXwvCXDxCf2qq2RHWAMPLqh%2Ba8012i4zO0QzbgFjPan%2BcDw3LiTQp6i522mPsNPrSd4SXdvkAAgRuXK3g06qgkESAj8R6eGiKrfecl79u%2F5gu8etxjKqVHxWWvNqvvQ4RKN6AoxlouVwJ3kiiOg8Hk3Um9bdAcGxTQ7312ONIZ8ciw%2BRhX%2BVX4h3eTn%2FNuGNllrbbqEqKb9RNyLeXyj8C6swtr2zwgY6pgEeD7hlv8dMSgmBzthsagwpphzqu5IWUg%2Be%2FPSj%2FOSahvB5gIvLVR%2FLwnb0si1JjF474nk7BoU0QLVBVsXOnkT3xH8cYC7jdQZPXRELnKlyWnKXveIDyUTk9g6kgMxcOAkbLUNHS7hYC8hDLluijlTfzXdZFP0QgBsmNjpDTZfv%2F8J0p5VwLP9ZqfEX75uV08YLbU%2F5zXhxuyUo7P1yNcIk4Ah5OYU1&X-Amz-Signature=744c421854a8302d70e42311b3fb482e710145857e3224691ae2c4bc1db7f9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJVHJP7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIQCyOmWttv0d62ia1CV2pzsZvQ%2BrQdVpmJ2PMJK%2FF0MpAAIfbTEljmFp6m1xfglNR9YJpCp1M0mokeoi1oB1JUSY8Cr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMsVU0ak3OvaCfNLq%2BKtwDv5r8peaDre0VobGJNqcbITSKkNhBofvE3otzN1u22J9ake7WngonqCiqipRMPb66wg1FzIHFjrkXboB9pksA%2BQoL2U9jAvAFUkJiTIliX738SnmCFrw8%2B6vU7SD3KCnW6HzYKdjS4TsJz5BTaPv59Qux5NB1EnxijTJbtv2vC7IvO6cHm9GqECg7rWwb0u0v04rHGweKSk0b4lEbGUlvQkwZUCmP44uhUN1PJmAs1SB0O2HXlC2aUOSclROY0fEiKUheU0TLd5sljtcLhxxlyd4XY2h2gQxaSv2zVpbpCKJQtSdErAGmeEtZtu5LE2Omc02cxO3vWFYZ9Wln43s6%2B2bbC%2F6rHgHU6xkZwAFZLsq5gpQHQcCp19hczgqqGiaSweQg69tDX0mx6rmLRr3PflkQrSvqiR%2FLjwGPRXwvCXDxCf2qq2RHWAMPLqh%2Ba8012i4zO0QzbgFjPan%2BcDw3LiTQp6i522mPsNPrSd4SXdvkAAgRuXK3g06qgkESAj8R6eGiKrfecl79u%2F5gu8etxjKqVHxWWvNqvvQ4RKN6AoxlouVwJ3kiiOg8Hk3Um9bdAcGxTQ7312ONIZ8ciw%2BRhX%2BVX4h3eTn%2FNuGNllrbbqEqKb9RNyLeXyj8C6swtr2zwgY6pgEeD7hlv8dMSgmBzthsagwpphzqu5IWUg%2Be%2FPSj%2FOSahvB5gIvLVR%2FLwnb0si1JjF474nk7BoU0QLVBVsXOnkT3xH8cYC7jdQZPXRELnKlyWnKXveIDyUTk9g6kgMxcOAkbLUNHS7hYC8hDLluijlTfzXdZFP0QgBsmNjpDTZfv%2F8J0p5VwLP9ZqfEX75uV08YLbU%2F5zXhxuyUo7P1yNcIk4Ah5OYU1&X-Amz-Signature=295e8f2920f93bdf3f8ee56c091c753d933f79210c3ef79805f7e8f158035eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
