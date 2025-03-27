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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7U3WFQW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeKsFo9qKM%2Bzgd27cQ%2BT3j4%2Bk0rulbq%2BDrsS%2FkwPSMjwIhAPUTtGy0z%2B9tr%2BpNakL7%2FkUk0yBi%2FLoufJwqmE3IpTEiKv8DCEkQABoMNjM3NDIzMTgzODA1Igz8DeLCKN8GTIvTLcwq3AN8oaQtIdpXRj1uQo4zMxFy3vUrXdybTlO8QJ8uO5dnGrAGpdJmU%2Bq735jF2vtqRm4risijpIQchgpWav06j2CNUkeaG3xPDAxwYxq1qzgeg%2BWdSSj3%2BX%2Fxvk0X8iHr6VQSPX4Jpc%2BBnJ1QiaCBKbk7nLjMOWpwXKBBkZGQxYbRyNjX6jdsitWG%2BXlctco6SQdLQFKKZ406vP1MU1ApW7vCoyW42lkrlK6VsyGdK0YxfbbXcpd1A8LRhk4%2FjV9stOE8%2FRSHw2efiynHVZiWK%2BFrIA8cGWAQowcAz2JnfnrZgGaKBo9Tyya5R8Q6KqS6aiYsEGwqvdBj0I19CxgBf4NqpMSzWusG%2Bc1J%2F8C4%2B3GDejoTBtFSmlILo26%2Bdv9U4AQOSABtydCsuHe0BIGgD8YB%2BLhru1D9AtJ2%2BCrrsxmE4KUbdTCEw%2B33ECA6Wu6fj7%2BivKh3Pdc2W2SS%2FGtEtdj7Qtj8YvhPgfl%2BTcc0IvXNmifLOPBniPqu0BVEaf%2BXGxpyuyRUn0Vvp61w0rEY5r4NkpSERqUqtdspakV0mDTmglW81bhxg6o%2B0XO1B4BI25RaWGYIvtAsag%2F6nhbMXKuGy%2B4Zwn0TpWDQD%2FjFSZiF7fTITtQ6Q1tONceMGDDN65W%2FBjqkAfx%2BiNyfdz00X4IhsOQBwUIYy7DZlcCymM0NxC5OAhHGg8RNidWmhu%2BQTS7Uo5GhQYG2B7ov7uC12JwiDt4a4w6MT6NkD7ETs67B3fNc%2B66I8SKX72Y3Q8GBRl7SrjryFM4pA%2BzHmojSc91HU9v4IglcFpImlBZJg6oJvexonGVfWicsDjgTNkJ0uO1EpaLCbq%2FfrYGuOB4DNcEhtjJ8VW9lk%2BYn&X-Amz-Signature=bd8e5de72fc8e0ea7395d8c11421ed5386baea33074c6b58a9ffefc96e376987&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7U3WFQW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeKsFo9qKM%2Bzgd27cQ%2BT3j4%2Bk0rulbq%2BDrsS%2FkwPSMjwIhAPUTtGy0z%2B9tr%2BpNakL7%2FkUk0yBi%2FLoufJwqmE3IpTEiKv8DCEkQABoMNjM3NDIzMTgzODA1Igz8DeLCKN8GTIvTLcwq3AN8oaQtIdpXRj1uQo4zMxFy3vUrXdybTlO8QJ8uO5dnGrAGpdJmU%2Bq735jF2vtqRm4risijpIQchgpWav06j2CNUkeaG3xPDAxwYxq1qzgeg%2BWdSSj3%2BX%2Fxvk0X8iHr6VQSPX4Jpc%2BBnJ1QiaCBKbk7nLjMOWpwXKBBkZGQxYbRyNjX6jdsitWG%2BXlctco6SQdLQFKKZ406vP1MU1ApW7vCoyW42lkrlK6VsyGdK0YxfbbXcpd1A8LRhk4%2FjV9stOE8%2FRSHw2efiynHVZiWK%2BFrIA8cGWAQowcAz2JnfnrZgGaKBo9Tyya5R8Q6KqS6aiYsEGwqvdBj0I19CxgBf4NqpMSzWusG%2Bc1J%2F8C4%2B3GDejoTBtFSmlILo26%2Bdv9U4AQOSABtydCsuHe0BIGgD8YB%2BLhru1D9AtJ2%2BCrrsxmE4KUbdTCEw%2B33ECA6Wu6fj7%2BivKh3Pdc2W2SS%2FGtEtdj7Qtj8YvhPgfl%2BTcc0IvXNmifLOPBniPqu0BVEaf%2BXGxpyuyRUn0Vvp61w0rEY5r4NkpSERqUqtdspakV0mDTmglW81bhxg6o%2B0XO1B4BI25RaWGYIvtAsag%2F6nhbMXKuGy%2B4Zwn0TpWDQD%2FjFSZiF7fTITtQ6Q1tONceMGDDN65W%2FBjqkAfx%2BiNyfdz00X4IhsOQBwUIYy7DZlcCymM0NxC5OAhHGg8RNidWmhu%2BQTS7Uo5GhQYG2B7ov7uC12JwiDt4a4w6MT6NkD7ETs67B3fNc%2B66I8SKX72Y3Q8GBRl7SrjryFM4pA%2BzHmojSc91HU9v4IglcFpImlBZJg6oJvexonGVfWicsDjgTNkJ0uO1EpaLCbq%2FfrYGuOB4DNcEhtjJ8VW9lk%2BYn&X-Amz-Signature=b561b96d06e3695736b807a1a57d197c677889e36f677003e2a4a0a4b12cecd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
