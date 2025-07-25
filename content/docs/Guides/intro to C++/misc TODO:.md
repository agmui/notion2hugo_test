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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN73T2XI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDgCtw2bafNcZ6X2R3wuuQFSIH9SEtJVpB5rBUQnFDq7QIhAJqrJ%2BpC4DNTsFlYfA60%2B5wcTtJEx1DKBQy9n9W5wsOUKv8DCD0QABoMNjM3NDIzMTgzODA1Igz6aheFySr1knXhX8Eq3ANkjom%2F1u7C1leDi2ukif1Y5%2B7xiMCPpQDq1LQnWMlPPk47gadp2J0FOXfTaWwjRjT09S0%2FwHgnqMCjOajNVOvS%2BLMv2YYuQs0b%2BPCTqXZBSq5WEiQjCDanKvG0Hag65qzuo4lG1TSE591rlS81oJLxJGUjlnu4k8w8XgpeQ2lepGF2vdRWTFr81IIHXQfIHymAJWLpUm062gw3Dl%2BQlagWAy7Ytazm3bI%2FZrJugfJyF8hVFVyTqVxEvBRLP7bpD1m1yNCTkf1MxsVVi5oGA2RL4%2FY6ICBEXcgHBLkfiFXsyfYn%2FW0brcThP0Hb8%2FDWbk%2BIIxeQ6BKvq6M1FK7As6LQkN9Qdlm8tNL24rUppoEAY3hr1VT6iIuh77TjrAbzsCgt0I520zX26V8PWeH%2FUnNoU90Xmw%2Fm4gJNqxu1u%2F3UrmTsKTEx%2Fy%2BGQ7TE%2BrIES0074IhUPSbb9O5MSlVNQiJEJ2dkQBRavzZxoh5NSuAJrz6nHMryyhrbswb%2B5MDGI6kTf6%2Fv%2BWoSdKzkr41dsBos4OwhORsOsuMNOmyGhsOYz%2BpX%2BJNN%2FwMVCh%2FG8ztHFRKaLqPyIMfAEBK7WumiyXZfb9MJ0YmNUbKw8goNT7%2B1Tg0t9dnYaTxv5cUoaDDm94vEBjqkAT9lnToPzT8eEMTGxorkpaz7Xx%2FKqepiH%2BTgSRi%2FICF%2BKSvdfacQukB2IloFesiAuAOiBVBkXb9SvUNPgSAxNfIgiJzPh7YSQUb85L3IoMlz0y6UdOmAcs6CCfZLmJAUk5DO9hlrFUxY%2BHsnhtlVxqbdEuTHHV5UaZYZAl4nj6RSBHLUr7jDMoDVwVt%2F3xQWLhzYiMzaiXvEtKpN%2FH%2Bb3ZbWD%2FYg&X-Amz-Signature=ec23b2887cf933c1e83fe3099719d067c3ca2e4a210ba371e48cf776c695768a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN73T2XI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDgCtw2bafNcZ6X2R3wuuQFSIH9SEtJVpB5rBUQnFDq7QIhAJqrJ%2BpC4DNTsFlYfA60%2B5wcTtJEx1DKBQy9n9W5wsOUKv8DCD0QABoMNjM3NDIzMTgzODA1Igz6aheFySr1knXhX8Eq3ANkjom%2F1u7C1leDi2ukif1Y5%2B7xiMCPpQDq1LQnWMlPPk47gadp2J0FOXfTaWwjRjT09S0%2FwHgnqMCjOajNVOvS%2BLMv2YYuQs0b%2BPCTqXZBSq5WEiQjCDanKvG0Hag65qzuo4lG1TSE591rlS81oJLxJGUjlnu4k8w8XgpeQ2lepGF2vdRWTFr81IIHXQfIHymAJWLpUm062gw3Dl%2BQlagWAy7Ytazm3bI%2FZrJugfJyF8hVFVyTqVxEvBRLP7bpD1m1yNCTkf1MxsVVi5oGA2RL4%2FY6ICBEXcgHBLkfiFXsyfYn%2FW0brcThP0Hb8%2FDWbk%2BIIxeQ6BKvq6M1FK7As6LQkN9Qdlm8tNL24rUppoEAY3hr1VT6iIuh77TjrAbzsCgt0I520zX26V8PWeH%2FUnNoU90Xmw%2Fm4gJNqxu1u%2F3UrmTsKTEx%2Fy%2BGQ7TE%2BrIES0074IhUPSbb9O5MSlVNQiJEJ2dkQBRavzZxoh5NSuAJrz6nHMryyhrbswb%2B5MDGI6kTf6%2Fv%2BWoSdKzkr41dsBos4OwhORsOsuMNOmyGhsOYz%2BpX%2BJNN%2FwMVCh%2FG8ztHFRKaLqPyIMfAEBK7WumiyXZfb9MJ0YmNUbKw8goNT7%2B1Tg0t9dnYaTxv5cUoaDDm94vEBjqkAT9lnToPzT8eEMTGxorkpaz7Xx%2FKqepiH%2BTgSRi%2FICF%2BKSvdfacQukB2IloFesiAuAOiBVBkXb9SvUNPgSAxNfIgiJzPh7YSQUb85L3IoMlz0y6UdOmAcs6CCfZLmJAUk5DO9hlrFUxY%2BHsnhtlVxqbdEuTHHV5UaZYZAl4nj6RSBHLUr7jDMoDVwVt%2F3xQWLhzYiMzaiXvEtKpN%2FH%2Bb3ZbWD%2FYg&X-Amz-Signature=836a3b39ddb21d5456bb77424a9d8248a88504ed7d45e16d6b505c1ba526f1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
