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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WDCOFW%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIAsRHaZ%2Bu9FbvA7Wsa0tKCuRo74%2FqtuKzMMpeKKVNsXfAiEAwCB5UVq%2BCNAkXL3n9kaG2SJGxb8neO9Vv8TW9BiaUbYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7cMF5LcsmJtzfrOSrcAyx4wiwfAj4vS4GfII8nKmq370czbTa9fObNybAFCnzvhCK7mDzqqG5aKye0uqk26Yxoln%2FQnmr9%2B7zS6QOxi16J7H9w5HiahH39Y7chO%2BVVzRV5N4bVc6ZjMNMl6yB4OoYX%2FRcZPYkhuSZSPZP1wyM66rpPBvDKRJyiLP00rucZHDLNJkxj6U8MhfwTlA4JFpW5Wu%2BSCCQNchtJ4Aqy8coS9zC%2BmhSjiVXmNogz0SS5ouQBR2J0rmTSKnal%2BpUiZ0s0xbL7j%2FbnPynF%2FHHiRYUxW7lioUhRGgvwH8btU9cwiVZ0nRxW5BYbH46G2GkHzqMn4HtgOkffhfaOHwYAiPUi9ZUhhjQB%2FdZhYjeTK%2FiVTXx8rPsLq19TFC0meRGyC7AtsRhiFNpxDtsbP%2BDkFGczSojTGlTDbbbFMhahn6DiOPRPo1xjoM0xa%2BIhjpWRluU14pHLv4%2Bo9PqKpsOO1f%2Fa9upG4b3oEeEM4iDLi6%2FaDlATRvBKeSrg7dLHtLk9C3k723%2Bop4Q%2BvWoIjcPwPqS%2FUqUmonttXBmdIAihsLhkDqlv6fi29y3ZmFrbLukPL6fFZs4SKKkmEGJuw02%2BzKGkf3pajtvtUDmzJ6cLgIF3dv30vA3%2BGDSeH7vIMKymqNEGOqUBTSROFXldrQramo1FRYIsSn2lFNzqvgR8jV8P90o7OqazMKpDt3E5c2WVWOFB5txik%2FxVdZYN75JAGYcKnH0S2kGYJPIzGTByCnKdUvPe7Mru0AvAhLQx3pGPeUREedLWisevZX031Z98LfhehxUr1LHdLg%2BXkT6z2zIg58wC2WcqQ2Y2pabnq1GpoYel3ommxjk3yzq1XpDHgvTII00%2F1GM6LrHu&X-Amz-Signature=42e18fbf65e606454ea483afe96c3436159adfa029f1d5cb22289ba18bb418b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WDCOFW%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIAsRHaZ%2Bu9FbvA7Wsa0tKCuRo74%2FqtuKzMMpeKKVNsXfAiEAwCB5UVq%2BCNAkXL3n9kaG2SJGxb8neO9Vv8TW9BiaUbYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7cMF5LcsmJtzfrOSrcAyx4wiwfAj4vS4GfII8nKmq370czbTa9fObNybAFCnzvhCK7mDzqqG5aKye0uqk26Yxoln%2FQnmr9%2B7zS6QOxi16J7H9w5HiahH39Y7chO%2BVVzRV5N4bVc6ZjMNMl6yB4OoYX%2FRcZPYkhuSZSPZP1wyM66rpPBvDKRJyiLP00rucZHDLNJkxj6U8MhfwTlA4JFpW5Wu%2BSCCQNchtJ4Aqy8coS9zC%2BmhSjiVXmNogz0SS5ouQBR2J0rmTSKnal%2BpUiZ0s0xbL7j%2FbnPynF%2FHHiRYUxW7lioUhRGgvwH8btU9cwiVZ0nRxW5BYbH46G2GkHzqMn4HtgOkffhfaOHwYAiPUi9ZUhhjQB%2FdZhYjeTK%2FiVTXx8rPsLq19TFC0meRGyC7AtsRhiFNpxDtsbP%2BDkFGczSojTGlTDbbbFMhahn6DiOPRPo1xjoM0xa%2BIhjpWRluU14pHLv4%2Bo9PqKpsOO1f%2Fa9upG4b3oEeEM4iDLi6%2FaDlATRvBKeSrg7dLHtLk9C3k723%2Bop4Q%2BvWoIjcPwPqS%2FUqUmonttXBmdIAihsLhkDqlv6fi29y3ZmFrbLukPL6fFZs4SKKkmEGJuw02%2BzKGkf3pajtvtUDmzJ6cLgIF3dv30vA3%2BGDSeH7vIMKymqNEGOqUBTSROFXldrQramo1FRYIsSn2lFNzqvgR8jV8P90o7OqazMKpDt3E5c2WVWOFB5txik%2FxVdZYN75JAGYcKnH0S2kGYJPIzGTByCnKdUvPe7Mru0AvAhLQx3pGPeUREedLWisevZX031Z98LfhehxUr1LHdLg%2BXkT6z2zIg58wC2WcqQ2Y2pabnq1GpoYel3ommxjk3yzq1XpDHgvTII00%2F1GM6LrHu&X-Amz-Signature=291a34fb056aebef01f4d6352cb6786a33a334c20963511585db7ff549f7e7e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
