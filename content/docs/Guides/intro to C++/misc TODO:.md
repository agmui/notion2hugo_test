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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6J6NVGR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDjjlGwoh%2BTZPncDC%2BqpmZ9i8tlbkzWPldmp9AGIId0QwIgKqXtYzJDLyZ0uC6o5qJLvWPqXtnltrliKbbAKTfYsu0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3iLqeEdie8M%2BmEwyrcA8G%2FNVg7Ve3Fv9hXMIR%2F638JVnB1npANy68sHBpASSCZElP6uKrFoXO16q%2FCByWG%2BNG%2FbB50jQ4wV6sYx2WFW%2F9T03%2BSGkbi4poPhCxGV6%2BHLeY9MvrUZ6KsKIMOxNDzH%2FXDVjTpxYCEN8XgrLztjrjrY0raIty4%2Bkxkk95xMkiIjFhciPWa%2B7qTJ%2FTYvvfATyas13HRodrLaB6A67WTBFwPOMT9brtLWQXSa7md9a32%2Fq9ccLraGWLY5PB8P%2BU6OQF8TSzwNMHza7OkBu%2BzGfoNvHbKF%2F%2F%2BlnCeqCNLmZu%2FKV4iC0UoRhDn20c9N%2B3uXq1ZgQZe0rztd62HuakLoFWxP7JWLsW0RiyziREVqlkWHyh8YNpCvVhX6pgUzgklsT93QYmiPIbujTb%2Fotr%2FhOCBGwO2omI8NpYAHNIL2N6RNNVvfG%2Bi%2FWByROfuDc7wSYqmLEyYvy8KvO%2FekklQ%2FpaaAEIihFlVXB56MHNWj0M3QluBffjcymSugI7gWDb1EsrJGveDffCxov4IPwOhJPmX05CT72RUrM7Yhl0Mqgo2N9VRcBnIuTqwjDYV3Q%2BI5B7y1aJdiq5V%2B7o8F5%2BUSulCcmj4RSihvi8C1nez2QA4K15rQspbhiEwI0ITMIb73sIGOqUBcErV5QKlFXX0YG%2B3jmMVd4q6VBxlvOyT16ou%2Ft18Va0EF2SkNAVd2fxC4FXUkWfX0n97MuwhlbM1BlSM4PwVg7Htt4cio3fkUKg%2BYQqcgDNMdvTp%2BH931r9b7NyJjGalErhFvjWwJyu4Dsn9oNIi0SAO9obSuVZYrnZiotIzUY7Ao%2BqhnqwKHmW7Wi9Geu6MqBqx3y%2FyfwARUaU2BkR8SF0sYCyD&X-Amz-Signature=00e8ad586bff2912cca2d45824a3cfe123962c3bef89e88fc4e5d02892caf66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6J6NVGR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDjjlGwoh%2BTZPncDC%2BqpmZ9i8tlbkzWPldmp9AGIId0QwIgKqXtYzJDLyZ0uC6o5qJLvWPqXtnltrliKbbAKTfYsu0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3iLqeEdie8M%2BmEwyrcA8G%2FNVg7Ve3Fv9hXMIR%2F638JVnB1npANy68sHBpASSCZElP6uKrFoXO16q%2FCByWG%2BNG%2FbB50jQ4wV6sYx2WFW%2F9T03%2BSGkbi4poPhCxGV6%2BHLeY9MvrUZ6KsKIMOxNDzH%2FXDVjTpxYCEN8XgrLztjrjrY0raIty4%2Bkxkk95xMkiIjFhciPWa%2B7qTJ%2FTYvvfATyas13HRodrLaB6A67WTBFwPOMT9brtLWQXSa7md9a32%2Fq9ccLraGWLY5PB8P%2BU6OQF8TSzwNMHza7OkBu%2BzGfoNvHbKF%2F%2F%2BlnCeqCNLmZu%2FKV4iC0UoRhDn20c9N%2B3uXq1ZgQZe0rztd62HuakLoFWxP7JWLsW0RiyziREVqlkWHyh8YNpCvVhX6pgUzgklsT93QYmiPIbujTb%2Fotr%2FhOCBGwO2omI8NpYAHNIL2N6RNNVvfG%2Bi%2FWByROfuDc7wSYqmLEyYvy8KvO%2FekklQ%2FpaaAEIihFlVXB56MHNWj0M3QluBffjcymSugI7gWDb1EsrJGveDffCxov4IPwOhJPmX05CT72RUrM7Yhl0Mqgo2N9VRcBnIuTqwjDYV3Q%2BI5B7y1aJdiq5V%2B7o8F5%2BUSulCcmj4RSihvi8C1nez2QA4K15rQspbhiEwI0ITMIb73sIGOqUBcErV5QKlFXX0YG%2B3jmMVd4q6VBxlvOyT16ou%2Ft18Va0EF2SkNAVd2fxC4FXUkWfX0n97MuwhlbM1BlSM4PwVg7Htt4cio3fkUKg%2BYQqcgDNMdvTp%2BH931r9b7NyJjGalErhFvjWwJyu4Dsn9oNIi0SAO9obSuVZYrnZiotIzUY7Ao%2BqhnqwKHmW7Wi9Geu6MqBqx3y%2FyfwARUaU2BkR8SF0sYCyD&X-Amz-Signature=0cd8b91fd1f1862e9763eb0687331f30c2d093932e45708a60b3b00d66f6cb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
