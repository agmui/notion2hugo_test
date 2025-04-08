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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BE7NIOF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeFc9jMb0m%2BBMx1ilhERn1F3FeyhZ5v29TI8sTeiXrUAiEAiDrUsl%2FeRY3TCrv54msEf%2BrPG1eXzPM9QjUoCc4CGywq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH%2Fbf0TkA5CqRN4cVyrcA2aAMfQRMsTvKJ9wcAAnnPzFTGyMieq1GuQLT0pG2t%2BOR%2FZXQZ995s%2BnDLuxtvDebdEFPebYb30Jjuyt7a4pP4TGvGdffC8uqC4DfAk%2BiF5nG4%2FMcn7qc88lBKFoIow3fOMC%2FZw%2B5DkiZ7%2B%2BKPk2f60763twB9QldDGq0UoO6cdl%2FgjxeO3xHF02pqFkMBGlRXvndRSYhkshiKRiA5v9cPDEzA2H8BUO7h6Ryn%2BjxPS%2BtNBJMjuDNDnY5d9j7s2cJHMQHSQXAYba23lzoQvPI3sVqfB6C6fvoQYfbz8hjozpDv03VC9gkkp6cZFJzJaTVrVQi9POzTRkrdQ6dVrS5JZGirW3ceDNyZfD9KcypBLhy440r%2BcQ%2FeII471x5FSRnZyaGKH5ND%2Brzo3uOGc4h%2BKVj6gh7SXmuY9iLPxDNwQBr4PEFqWxxShRuUznQ94CDjtDtJZhxOxPMV1WWh05vQ6iKI3uL0cE3z3D%2B6yq%2B6wnDX9%2FqGjnRhSAgVSdHGihRuGBrKm3VI%2FDbpR8bjfjrK1V2a7nqvoXoOD7NeLF%2B9d9aHtcCJuQVoFbI3lKPmhz0r1x9KRPmAc4j3VQqVTh7sAkAskhw95Adxa7pgjWMegYqk8QH%2F5y1ZFWtuoFMPC91L8GOqUBUR1z5czgHti5JQCNql2TK7MlOSRUfNb9F550MROkhI%2BXQ5kxTDKh2ZhcKBRXRxhaQwl3iBY8HGNXcOnrIb8bm5LY5Sc9xJ3oIjvJk5lEvXjvzYmzIe5UA5p4Lo5PYy9y6CSj%2BGu4KbP7NB1bTIH8%2BozLiKgsOaYzF9778DZdMVne1xt5fPItXbCSxynpGQ5X9339ABk4%2FxduTRF%2BMMVwL%2FipqP1c&X-Amz-Signature=68fc1a533463692c31496ffc15d607d2d3e588cdb0685f2ecaabdf6d23df625c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BE7NIOF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeFc9jMb0m%2BBMx1ilhERn1F3FeyhZ5v29TI8sTeiXrUAiEAiDrUsl%2FeRY3TCrv54msEf%2BrPG1eXzPM9QjUoCc4CGywq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH%2Fbf0TkA5CqRN4cVyrcA2aAMfQRMsTvKJ9wcAAnnPzFTGyMieq1GuQLT0pG2t%2BOR%2FZXQZ995s%2BnDLuxtvDebdEFPebYb30Jjuyt7a4pP4TGvGdffC8uqC4DfAk%2BiF5nG4%2FMcn7qc88lBKFoIow3fOMC%2FZw%2B5DkiZ7%2B%2BKPk2f60763twB9QldDGq0UoO6cdl%2FgjxeO3xHF02pqFkMBGlRXvndRSYhkshiKRiA5v9cPDEzA2H8BUO7h6Ryn%2BjxPS%2BtNBJMjuDNDnY5d9j7s2cJHMQHSQXAYba23lzoQvPI3sVqfB6C6fvoQYfbz8hjozpDv03VC9gkkp6cZFJzJaTVrVQi9POzTRkrdQ6dVrS5JZGirW3ceDNyZfD9KcypBLhy440r%2BcQ%2FeII471x5FSRnZyaGKH5ND%2Brzo3uOGc4h%2BKVj6gh7SXmuY9iLPxDNwQBr4PEFqWxxShRuUznQ94CDjtDtJZhxOxPMV1WWh05vQ6iKI3uL0cE3z3D%2B6yq%2B6wnDX9%2FqGjnRhSAgVSdHGihRuGBrKm3VI%2FDbpR8bjfjrK1V2a7nqvoXoOD7NeLF%2B9d9aHtcCJuQVoFbI3lKPmhz0r1x9KRPmAc4j3VQqVTh7sAkAskhw95Adxa7pgjWMegYqk8QH%2F5y1ZFWtuoFMPC91L8GOqUBUR1z5czgHti5JQCNql2TK7MlOSRUfNb9F550MROkhI%2BXQ5kxTDKh2ZhcKBRXRxhaQwl3iBY8HGNXcOnrIb8bm5LY5Sc9xJ3oIjvJk5lEvXjvzYmzIe5UA5p4Lo5PYy9y6CSj%2BGu4KbP7NB1bTIH8%2BozLiKgsOaYzF9778DZdMVne1xt5fPItXbCSxynpGQ5X9339ABk4%2FxduTRF%2BMMVwL%2FipqP1c&X-Amz-Signature=e7f3ea01ad12d1e63467e0d6e497a5488aa14f1eb053e28403e6a1231ea12ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
