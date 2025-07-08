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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGMS55D%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCosOrmjVpwCl4uK4qmmAQHtg6o8paaz6hiitcse%2BNJ1gIhAOKbNPu0n1l%2BuO5fjy28JRCRhuMUoCziXZd7miq70y5IKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZNPht1WyY5KjMX14q3APdsEeVgBSz1P6tPq4n5%2F1xTTVWnNK5vE%2Fql3WjPZGv%2BgzoMWuGNzetgXJ%2BPGxytD1t6bniGFvVCPJUsHScCa7tmytcvfP%2BQDsp6hBVuljGn591jbARdXHgRRv5a%2BJkZMogExGvTY4xwQeI2FURIlyPRw4ePo6YnUoWIERfAfTqCSBMh9V6SyWGiBsktf6ePsDItf3%2F7y8zXib28YV3aj66qQZOzXbhropl4%2BQvmjOXvamAqFcokgswrwpZszGEqa6NnRfGDBEP0NMewZ3pdSth3re4sj%2BPFhglBsoYrE3rWje%2FOCo4td0LFOlVLXSjGicjX7SQA5xtIsw%2FXsg98u4UukkBphg8dqd9puUkWPuhY5sWiCgCLyKRmdeDtTvwSHhiM1DYnBzhwUPBqrZ0HK9hhg7OUz0AaAzCEPwbA5n21%2FhDz4uwadvpPdG9GHNoMKdh0jpIXDt7pp9gBRcsJT6ugqVmlw2nYpoGnsOYxNeZJICbEVpN6v3q%2Bd6v46FtMYkbu5ZM1fF7XdD79iUWfIdQOUW5tI6FeqQBRp%2BThPsFMlLflErKewo%2BRvyCLvTS7D2jrgnVs6cR%2BgLj0R9hEOph0hTrmddevMP8b4V6zEC9q2ix7Zq3FQKEyso8czCtg7bDBjqkAZ2FZgGhnoHhrsCZnqdcDrxaMWjfQVm%2FL0U6RLAyQ5Q4wFaPvxRmDKzQFZwGjtURXnRNYc3dQCxB%2FANRQvOTAJ3g9aAeMY8qXfvw2X%2BQO0bDb7baP8bsfigHQVz5DEeKr079krvVNCouOU87F%2FT42NvP%2BgzQU9hSMBv97iiLP66NJo9UvFAVapwqbSKg8FeX8DeWJBfuI9L%2BNt5m9uenFUnfFeEg&X-Amz-Signature=40f00d2640171c87427cc6d252f302a76a75c1bc7f1236235e4e1b875cf2e4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGMS55D%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCosOrmjVpwCl4uK4qmmAQHtg6o8paaz6hiitcse%2BNJ1gIhAOKbNPu0n1l%2BuO5fjy28JRCRhuMUoCziXZd7miq70y5IKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZNPht1WyY5KjMX14q3APdsEeVgBSz1P6tPq4n5%2F1xTTVWnNK5vE%2Fql3WjPZGv%2BgzoMWuGNzetgXJ%2BPGxytD1t6bniGFvVCPJUsHScCa7tmytcvfP%2BQDsp6hBVuljGn591jbARdXHgRRv5a%2BJkZMogExGvTY4xwQeI2FURIlyPRw4ePo6YnUoWIERfAfTqCSBMh9V6SyWGiBsktf6ePsDItf3%2F7y8zXib28YV3aj66qQZOzXbhropl4%2BQvmjOXvamAqFcokgswrwpZszGEqa6NnRfGDBEP0NMewZ3pdSth3re4sj%2BPFhglBsoYrE3rWje%2FOCo4td0LFOlVLXSjGicjX7SQA5xtIsw%2FXsg98u4UukkBphg8dqd9puUkWPuhY5sWiCgCLyKRmdeDtTvwSHhiM1DYnBzhwUPBqrZ0HK9hhg7OUz0AaAzCEPwbA5n21%2FhDz4uwadvpPdG9GHNoMKdh0jpIXDt7pp9gBRcsJT6ugqVmlw2nYpoGnsOYxNeZJICbEVpN6v3q%2Bd6v46FtMYkbu5ZM1fF7XdD79iUWfIdQOUW5tI6FeqQBRp%2BThPsFMlLflErKewo%2BRvyCLvTS7D2jrgnVs6cR%2BgLj0R9hEOph0hTrmddevMP8b4V6zEC9q2ix7Zq3FQKEyso8czCtg7bDBjqkAZ2FZgGhnoHhrsCZnqdcDrxaMWjfQVm%2FL0U6RLAyQ5Q4wFaPvxRmDKzQFZwGjtURXnRNYc3dQCxB%2FANRQvOTAJ3g9aAeMY8qXfvw2X%2BQO0bDb7baP8bsfigHQVz5DEeKr079krvVNCouOU87F%2FT42NvP%2BgzQU9hSMBv97iiLP66NJo9UvFAVapwqbSKg8FeX8DeWJBfuI9L%2BNt5m9uenFUnfFeEg&X-Amz-Signature=ea3781eaa4b7e083fad7eb4ea25cf46bd0c0e1d596e214024896dabdcaab3814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
