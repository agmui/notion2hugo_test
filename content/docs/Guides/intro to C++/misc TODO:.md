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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBVQQ25%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIB8aI%2F1Zg%2FOuos4FzIsQHf6F6dk4dtC4OqrGmQpJwZ5GAiEApeRI2ZNr8n%2BOZloHYWPfHjZGcdh0uYJewQ0pD%2BvLgH4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlUw6ejefRqwz%2Fj6ircAxzWfl%2FaJf1FcOuTJSfX3FiW1iF20P2elfSpIXiFW3JpKc2DZfYy7GSZVVc6MrimZygZw6VfdYVn9yITTiq1HOxJqt3OhK0Re15M7JXZKPdIFLYg6A31jh9nGgeaWRNxKk2y5akBN7un9i51X6GZzNu0PDtHCz4%2B7IUhCDnacfi8jKQwM84o%2FMY%2B65wxkYx%2FvxzNjPq8GE%2FJ5Mdedw49aG3gx%2FN0kQuXHLHE0%2FBb2xFADyQ42zshTaYzPmjLZZ%2BaGc8KsmDng6N0UojM98RC6pgK%2BNs3m46MaTI3by8baudD0DTfJesVZMwAHWP6mg%2F7bYuqs6BdJKyOxfrBJx32928TjKI%2Fd3KQIf1Ugb4oiQMZ1OnhOOPmGJfMT6DDg%2FxyxUF4LFrioCWULa%2FE0rjvcq9yTl%2FWs%2BDk0nTczXRrMa4EOvo05OoHkOFwRESJx5s7OeQ4yccTXo1M6%2F0P6WT7ecJraPiabaDPAXyDBUOItaVdhTcDHukuW6upUk2eBx9Nw8z76cBmrQttnqLYMwh74JF3Da%2BsCGzeWbsDjoAYLgnalpV2bEqoX2j5fEviby5vwcFxSbEB8oYmRvmRoW%2BV%2FP0s8eZoclAc1jUPqbzLzeu8yPJ15us7veBtMTDSMO%2B75rwGOqUB8JjR9FMmvoSIK9sLmRKbv9ucV3bPvIT76Q8SM%2FdsAixIoYqq2pQi5POc2FMgjf4MYjvXtdmgHaC3f0Kaxb8Go2wmgIcduFpiqGXKp%2FK5J8eftLNoysY1xsxji6Rja7CiqE%2BE%2BzydoEtVJommNs7YtGipIl0B%2Bq0ehQPJmTv6hw0JOw%2BPyRyxo6ZTIehGp%2FxEh4v2mbvC%2Bb%2Fwew8xKZ9esEJpQ7RY&X-Amz-Signature=48ef1ffc67129afb321c47c64671db07f3d6b334ef9f2707655c9265ee3af0af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBVQQ25%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIB8aI%2F1Zg%2FOuos4FzIsQHf6F6dk4dtC4OqrGmQpJwZ5GAiEApeRI2ZNr8n%2BOZloHYWPfHjZGcdh0uYJewQ0pD%2BvLgH4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlUw6ejefRqwz%2Fj6ircAxzWfl%2FaJf1FcOuTJSfX3FiW1iF20P2elfSpIXiFW3JpKc2DZfYy7GSZVVc6MrimZygZw6VfdYVn9yITTiq1HOxJqt3OhK0Re15M7JXZKPdIFLYg6A31jh9nGgeaWRNxKk2y5akBN7un9i51X6GZzNu0PDtHCz4%2B7IUhCDnacfi8jKQwM84o%2FMY%2B65wxkYx%2FvxzNjPq8GE%2FJ5Mdedw49aG3gx%2FN0kQuXHLHE0%2FBb2xFADyQ42zshTaYzPmjLZZ%2BaGc8KsmDng6N0UojM98RC6pgK%2BNs3m46MaTI3by8baudD0DTfJesVZMwAHWP6mg%2F7bYuqs6BdJKyOxfrBJx32928TjKI%2Fd3KQIf1Ugb4oiQMZ1OnhOOPmGJfMT6DDg%2FxyxUF4LFrioCWULa%2FE0rjvcq9yTl%2FWs%2BDk0nTczXRrMa4EOvo05OoHkOFwRESJx5s7OeQ4yccTXo1M6%2F0P6WT7ecJraPiabaDPAXyDBUOItaVdhTcDHukuW6upUk2eBx9Nw8z76cBmrQttnqLYMwh74JF3Da%2BsCGzeWbsDjoAYLgnalpV2bEqoX2j5fEviby5vwcFxSbEB8oYmRvmRoW%2BV%2FP0s8eZoclAc1jUPqbzLzeu8yPJ15us7veBtMTDSMO%2B75rwGOqUB8JjR9FMmvoSIK9sLmRKbv9ucV3bPvIT76Q8SM%2FdsAixIoYqq2pQi5POc2FMgjf4MYjvXtdmgHaC3f0Kaxb8Go2wmgIcduFpiqGXKp%2FK5J8eftLNoysY1xsxji6Rja7CiqE%2BE%2BzydoEtVJommNs7YtGipIl0B%2Bq0ehQPJmTv6hw0JOw%2BPyRyxo6ZTIehGp%2FxEh4v2mbvC%2Bb%2Fwew8xKZ9esEJpQ7RY&X-Amz-Signature=9d9164ce1cb66645181b313cf18fdf792b9c0d916cecf5c6d1fc40e053934a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
