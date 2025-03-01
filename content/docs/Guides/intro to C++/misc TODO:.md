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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SWI2RYR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD8BbZhracJF%2Fd5pQUWzTm3CA8JiUyopD%2B1ATj9j%2BHHfgIhALOhZ69OTsOKZqb3wPTqa37KogbjKbnVu9KRgX%2FuGqy6KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw8JZ1hpmpj5VC%2BMsq3AOQXnFcqm93nuMNkGohEmw1FxjiqlHJ2eUNrqpJYR6MkASAtkZuIorrtqVvHFzIN06XOxjDEBK0WBDpViLQ%2FV986p6BexLAQaDqkWNcBnp2qn9KDjXwTIrvIVXJQohXHz0jraAtgWwjZCT61%2F3NmFd4WyRsy47Hho7pg%2FMomLJKSpzarKHo%2Fvbo01TM13XlM%2FeRVLZZjlzMzJeH3CXEyLSY2UaFjNWVUYFleal8WJFsRckHO8kw8avJmrvIn1JyWVZqKvsMM61TD6nQ5fYjxQLrKnBhpZtrMxApTTrE%2FJu8It0WE5kGIzFPy0SsCxJ%2BXogBq1nnlz%2FTBOfYDoNEOwxS0rINsGRp8NG4%2Bk6f%2Fz9XIIWV9c6fKdZjYctw0FGJpEH%2BmkjrYi2UGdXIUa21B8rFflpsDQsfTId6%2BaOH%2BDQ6Uy3xoB3F%2FQHd4JyU9%2FuLyCf1RUW5v5yIZOTMJJtKisnPqsT6kGrk41QY0fPrRgYYzXG%2BL9fBT%2B622BWlQxJvJ3AzQMGG7dl9eAmPVyKlIrwrkW8Y%2BSw2EC4obpmO5bkcyDwLhbB8QZ85vAoahOYxcHWdEjTjt4SKwMhKbNpm0O1lMrT%2BWeP2HOftCcOIFZbFdmwB31Wj%2FaE9F9lvMDDHkIq%2BBjqkAa5WQeGqHiVPbNtTOUWpbXlIB0vz0B6ge70bfsoClqEn4WkICWYfw7IPj2Xe%2BGG3sgzCOyT4GpeWFWa8NCQzDBcA4YbxLzk6JwGXk%2FKcK5RmhIv5BVVG6lQYCcAYKS4eJU6bqFpvmu1I4GW98mKholZ6lZUYR0ALp7%2BUY%2B8pBUxOzIiMVX2qZSHpWZUgCjl3UrJQ4HZlA5gzEpNoScDkMMJQZtWC&X-Amz-Signature=6e29222bc0f3370be0dac5ba4a582ed10ff4a871d06f7a21e522a084eb3327bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SWI2RYR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD8BbZhracJF%2Fd5pQUWzTm3CA8JiUyopD%2B1ATj9j%2BHHfgIhALOhZ69OTsOKZqb3wPTqa37KogbjKbnVu9KRgX%2FuGqy6KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw8JZ1hpmpj5VC%2BMsq3AOQXnFcqm93nuMNkGohEmw1FxjiqlHJ2eUNrqpJYR6MkASAtkZuIorrtqVvHFzIN06XOxjDEBK0WBDpViLQ%2FV986p6BexLAQaDqkWNcBnp2qn9KDjXwTIrvIVXJQohXHz0jraAtgWwjZCT61%2F3NmFd4WyRsy47Hho7pg%2FMomLJKSpzarKHo%2Fvbo01TM13XlM%2FeRVLZZjlzMzJeH3CXEyLSY2UaFjNWVUYFleal8WJFsRckHO8kw8avJmrvIn1JyWVZqKvsMM61TD6nQ5fYjxQLrKnBhpZtrMxApTTrE%2FJu8It0WE5kGIzFPy0SsCxJ%2BXogBq1nnlz%2FTBOfYDoNEOwxS0rINsGRp8NG4%2Bk6f%2Fz9XIIWV9c6fKdZjYctw0FGJpEH%2BmkjrYi2UGdXIUa21B8rFflpsDQsfTId6%2BaOH%2BDQ6Uy3xoB3F%2FQHd4JyU9%2FuLyCf1RUW5v5yIZOTMJJtKisnPqsT6kGrk41QY0fPrRgYYzXG%2BL9fBT%2B622BWlQxJvJ3AzQMGG7dl9eAmPVyKlIrwrkW8Y%2BSw2EC4obpmO5bkcyDwLhbB8QZ85vAoahOYxcHWdEjTjt4SKwMhKbNpm0O1lMrT%2BWeP2HOftCcOIFZbFdmwB31Wj%2FaE9F9lvMDDHkIq%2BBjqkAa5WQeGqHiVPbNtTOUWpbXlIB0vz0B6ge70bfsoClqEn4WkICWYfw7IPj2Xe%2BGG3sgzCOyT4GpeWFWa8NCQzDBcA4YbxLzk6JwGXk%2FKcK5RmhIv5BVVG6lQYCcAYKS4eJU6bqFpvmu1I4GW98mKholZ6lZUYR0ALp7%2BUY%2B8pBUxOzIiMVX2qZSHpWZUgCjl3UrJQ4HZlA5gzEpNoScDkMMJQZtWC&X-Amz-Signature=a06ba39c80ba3ee797a3f9f72186ff5ce203f56e64e8dc374ceebe45a0d6895c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
