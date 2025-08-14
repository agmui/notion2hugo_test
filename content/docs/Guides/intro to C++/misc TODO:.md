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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKYZ3HJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICAGvxh8SM0SWIX6H1RdbdgZMaO0JquGjWcIq8oIWG4rAiEAoyS3cI9rMa6nLyruj1%2BYT9EqAI2Gv9JvC4b2KY6jzqwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBeIc%2FXtByUUEv6oYCrcAzgrHnbCzE7g4aeex2Qa4bzoIwMOpw3lwVBDJRNjsLedS3XCOZVub6c4szt%2FnqX0zrw6HoLSevUUo3bR9%2BOvGoi76B1UnPA7npunzXzlfBV3v4BK7tOa1Ei7rbiqntrJMAqoPzg7GKEOVeCAp5qJbEmsqHLy9FXwSOHYR3HCrNClExqm7fAC5DhfhH0mNBv4z6RWgZ5kS%2BAfH4KikrZU42V8C7XGkJVoRs3BPjX9aTqd0vfe6PqpuUEZE5N1Rtc5OyHIXi%2FrIUJi7HK7YbCjSMEJZ8LwLSJMVbacRiHoRNR612U%2FkanAV6ieptm8MiplBF35SsyivLtpjBDuW%2Bb2Ac1NmSkRoazQV3QI%2FZfGfsfnY38kUkfTOLZ1ZIF%2Bop8uFgziY1P58ot06Vo7UTka53MhUFzsymw1OUSPFTB%2F%2BtKxu6K4Mbn6UHbyzw78l8fKlukjjaTT0X1UP7MJ9C7fROoI1Id22VhbS5Lorb6%2FeY6x6IScRTeqX2jCSE2NvcWuJY%2BEH3HfLjBizjNnTUZ68WjeIlxveyMSj6%2BrBAK1E5bPmmCD%2BJeeAYmZmwAFhxJ%2BtvRynXb60oOgf9zIL5cywQBH1xv9Xd9PHZ9EduqzO0EI2YvwhS9T%2FU0BNVcdMLDC%2BMQGOqUB3NZFgscBZu8igfnDaGCh7GGbTwdc7HbOEaCkt5Cshe8zbwX5Ah0zPFDQK9G93gCHKhIONZxJ5XXRN2rU4tRrUnWY1kPXUCKkx%2BorOiLHAIYhhwJfHxYfIefk9uLZ3HREAmfrYsaoHF0EKIjr%2Bg07hZcfeOH2heB6dW8MgaBUyk9WpqEtC%2BA321nuQ32eZlMEBiVOQj6U%2FbYRYalENPZSBduIbnMA&X-Amz-Signature=1b46916b372449cb40fd0805b8f1d702e52162936cac10fb28ff6b91ee0d6ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKYZ3HJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICAGvxh8SM0SWIX6H1RdbdgZMaO0JquGjWcIq8oIWG4rAiEAoyS3cI9rMa6nLyruj1%2BYT9EqAI2Gv9JvC4b2KY6jzqwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBeIc%2FXtByUUEv6oYCrcAzgrHnbCzE7g4aeex2Qa4bzoIwMOpw3lwVBDJRNjsLedS3XCOZVub6c4szt%2FnqX0zrw6HoLSevUUo3bR9%2BOvGoi76B1UnPA7npunzXzlfBV3v4BK7tOa1Ei7rbiqntrJMAqoPzg7GKEOVeCAp5qJbEmsqHLy9FXwSOHYR3HCrNClExqm7fAC5DhfhH0mNBv4z6RWgZ5kS%2BAfH4KikrZU42V8C7XGkJVoRs3BPjX9aTqd0vfe6PqpuUEZE5N1Rtc5OyHIXi%2FrIUJi7HK7YbCjSMEJZ8LwLSJMVbacRiHoRNR612U%2FkanAV6ieptm8MiplBF35SsyivLtpjBDuW%2Bb2Ac1NmSkRoazQV3QI%2FZfGfsfnY38kUkfTOLZ1ZIF%2Bop8uFgziY1P58ot06Vo7UTka53MhUFzsymw1OUSPFTB%2F%2BtKxu6K4Mbn6UHbyzw78l8fKlukjjaTT0X1UP7MJ9C7fROoI1Id22VhbS5Lorb6%2FeY6x6IScRTeqX2jCSE2NvcWuJY%2BEH3HfLjBizjNnTUZ68WjeIlxveyMSj6%2BrBAK1E5bPmmCD%2BJeeAYmZmwAFhxJ%2BtvRynXb60oOgf9zIL5cywQBH1xv9Xd9PHZ9EduqzO0EI2YvwhS9T%2FU0BNVcdMLDC%2BMQGOqUB3NZFgscBZu8igfnDaGCh7GGbTwdc7HbOEaCkt5Cshe8zbwX5Ah0zPFDQK9G93gCHKhIONZxJ5XXRN2rU4tRrUnWY1kPXUCKkx%2BorOiLHAIYhhwJfHxYfIefk9uLZ3HREAmfrYsaoHF0EKIjr%2Bg07hZcfeOH2heB6dW8MgaBUyk9WpqEtC%2BA321nuQ32eZlMEBiVOQj6U%2FbYRYalENPZSBduIbnMA&X-Amz-Signature=1dbaef7d9b8dff80f3cb733c1aa3e4135b365c1ada62813c272613ddcec5b721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
