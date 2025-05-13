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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5M5LI6G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIF%2BKmNyq%2BlYAV7cxuR24qa3ptPZ5v%2B63%2BNP0HoBGu1nIAiEApLywxszuqHOj4ZVybsG014wM%2F9gbPcLdRZuyoyiVbdEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BQTIyqz8kHUgKTDCrcA6K%2BTALEG6YqHdB9vS69g7QtOuAaLPTpJUDLiBBzWbW8WA4hQbvpJwQWDPxwJVt8Aqtpily80d6D99P9iLtThAjm7V1DMdkVhKTJ9h7vXr4K40p7I3W8puRNvFvLmA1hneqiO61fpx7d02AWYEE8k8eDU1OzaSAltZE%2BUXvZnjmPsQsdH9nBX1ebaafzQkuE8mHwcbdneHfAlk6PzFXTdH7mID9i6nNLq4gfVh7Yr3vWZJnsaTE4RJBKa9Uci7RvBPWU%2Bqc1%2Ff1P9yK8DjsFI77cJnL8NPzuY61f1mIr4Qj6wAzybFj3DGhru94rsWE%2BTD8WqAta3%2BfhfN1WfCW6H3FCuEqwbj%2FUhgECeubOW0vT5hn7ZOf0JAxPzJXih3P95jVgWU07h%2FdauzEgRH05HEOCPsBtUCETmQAgb2ChoCd2zXTWlXQwwgKWjUeM%2FWMTVHxncaCCKcOh0SlwvPVW3HTZH%2FjmOm4ZDGBtH8lXxISrN3%2Fhk8GlakVWD9GwXjw%2B13PyvE4FUyPQcHGdtyeKlVLNDFnKvuBaqT14EQEyUv2LkjZPXkvEH68%2Bv8MRipe9P%2F097jITlcu9Bb3Jyy3SmDv7MzyfN%2BomXhFedH44YbQHzl6SWRHbSzBF9ALnMI%2B8i8EGOqUBODspNlkvb%2F08BGjtDbIFZz2rKkbeG0rH61hB1%2FpWZtfr4hN9fkssnLoZv07LtcqMUjHHPSetYdRMGYDGrz578Geo6KgH3VfP5hw257CArO7LcyH3YDkduHJF1nu1cnb%2BT2mw%2FJfUXp7olMIdH9a9l9qj9YCXYVYtFs4RIJcHVNnr1qOYxpU75mQnYVXz%2BsFhZp7fcRlLshRyd6jrE9f42w0NMOMT&X-Amz-Signature=791f61c16a4b1774609a92be0a5b4bf64903173e9de6a445e74f39c41978f1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5M5LI6G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIF%2BKmNyq%2BlYAV7cxuR24qa3ptPZ5v%2B63%2BNP0HoBGu1nIAiEApLywxszuqHOj4ZVybsG014wM%2F9gbPcLdRZuyoyiVbdEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BQTIyqz8kHUgKTDCrcA6K%2BTALEG6YqHdB9vS69g7QtOuAaLPTpJUDLiBBzWbW8WA4hQbvpJwQWDPxwJVt8Aqtpily80d6D99P9iLtThAjm7V1DMdkVhKTJ9h7vXr4K40p7I3W8puRNvFvLmA1hneqiO61fpx7d02AWYEE8k8eDU1OzaSAltZE%2BUXvZnjmPsQsdH9nBX1ebaafzQkuE8mHwcbdneHfAlk6PzFXTdH7mID9i6nNLq4gfVh7Yr3vWZJnsaTE4RJBKa9Uci7RvBPWU%2Bqc1%2Ff1P9yK8DjsFI77cJnL8NPzuY61f1mIr4Qj6wAzybFj3DGhru94rsWE%2BTD8WqAta3%2BfhfN1WfCW6H3FCuEqwbj%2FUhgECeubOW0vT5hn7ZOf0JAxPzJXih3P95jVgWU07h%2FdauzEgRH05HEOCPsBtUCETmQAgb2ChoCd2zXTWlXQwwgKWjUeM%2FWMTVHxncaCCKcOh0SlwvPVW3HTZH%2FjmOm4ZDGBtH8lXxISrN3%2Fhk8GlakVWD9GwXjw%2B13PyvE4FUyPQcHGdtyeKlVLNDFnKvuBaqT14EQEyUv2LkjZPXkvEH68%2Bv8MRipe9P%2F097jITlcu9Bb3Jyy3SmDv7MzyfN%2BomXhFedH44YbQHzl6SWRHbSzBF9ALnMI%2B8i8EGOqUBODspNlkvb%2F08BGjtDbIFZz2rKkbeG0rH61hB1%2FpWZtfr4hN9fkssnLoZv07LtcqMUjHHPSetYdRMGYDGrz578Geo6KgH3VfP5hw257CArO7LcyH3YDkduHJF1nu1cnb%2BT2mw%2FJfUXp7olMIdH9a9l9qj9YCXYVYtFs4RIJcHVNnr1qOYxpU75mQnYVXz%2BsFhZp7fcRlLshRyd6jrE9f42w0NMOMT&X-Amz-Signature=ffa37b7643416758f03283732bbe134c1dbba72ee4a8579472477b914dc3376f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
