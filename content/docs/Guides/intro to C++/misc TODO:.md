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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UGNH6O%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDg0b%2BBpidKcDToVrOl54r5MTxK70nmLNpE6SyX00QVLwIhAOsmyPX7kC%2FHwB%2BmfA475r%2BpL1OQCOQGrzmsVcjuAT%2BpKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJhwKk60nREWYYsm0q3APk8oVnVZPhiKRk4uw4BwjYFuouh8hXBTjIWPfza0uaQ%2BEEgHgaQ%2F8dho6G3VJKNwEJ2wNhNO5hv0KOBY5PE0a7Uvjr4sXK7An0J3XeMdEvs9Ewo39ysOr27qMjyk1ymdKeIEfVpfYaDIX6ZKmoCc1m3OAcJHf%2BFKKadyOErleSnT0z0DGxxWU9Crm17phZmMkJsk1sD56qlgOuopy7oe7Epn2EkhMrUn4Klt%2FSmUsGvUiCNqsvdfsvcSqZyJQGE6W1q8ekQll5mo%2FOFZKYUkxZLJubaBWbZt2H7Pbjn0U9BkkdV%2BHN53FJA1QbtHt2LWxX6Y8bzZ25EZ4QNX%2FHGZru7sm6BHsJuZOx0VOXu0qiYiheVroKeyG%2BKRDjV%2BCYLB9%2Fm5%2F9vrhlqU3neMabgR2%2BCoXfbZ%2BV%2FPmBCiSV0RSlAIqJD7BsOyW3rJFup%2BbXocCJQxYFB3D2bpBH9RCT8Pt6J7lkOTR4LM9543EYo39Lq7zMj4YMl5TGdSwgwSMZpWi2bInNgj5xDWrpHF7wwAtMKd8bTgBEX3q5vYXfwmzaJ6UoszjRRVVPa9hR312RlI5PLCJn7AEQWw720rtv5KaT5FmM0J3AjHBPrGY9I%2BcviPJVDwPVL8kLxvUqmzDm%2B%2Bm%2FBjqkAYHk6DDn3GavP3IW27I3xF0%2FHQX58Ce%2F8YszDHEfsO0j2Pqq4T4%2B7rULTH6kd7G3d1ayNn4%2BnFCsQswdKynoY4m0PqlBygMqcrrOX1%2FvzyblXS684L0cqyM3X4BbkpsO2lja5nm0a6zB5b1o4xrQkV6sI%2FQQo8%2BXgw6vx5Lk4%2BhPv9NtaF86xRnEXPq%2F%2FZG%2B0k%2Bfg6kGZUrLtujU6fupxEV1uw2i&X-Amz-Signature=1ee5829b96743ef354212f803c3011c56008c16ad68bfbeb30b2e084b78257f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UGNH6O%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDg0b%2BBpidKcDToVrOl54r5MTxK70nmLNpE6SyX00QVLwIhAOsmyPX7kC%2FHwB%2BmfA475r%2BpL1OQCOQGrzmsVcjuAT%2BpKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJhwKk60nREWYYsm0q3APk8oVnVZPhiKRk4uw4BwjYFuouh8hXBTjIWPfza0uaQ%2BEEgHgaQ%2F8dho6G3VJKNwEJ2wNhNO5hv0KOBY5PE0a7Uvjr4sXK7An0J3XeMdEvs9Ewo39ysOr27qMjyk1ymdKeIEfVpfYaDIX6ZKmoCc1m3OAcJHf%2BFKKadyOErleSnT0z0DGxxWU9Crm17phZmMkJsk1sD56qlgOuopy7oe7Epn2EkhMrUn4Klt%2FSmUsGvUiCNqsvdfsvcSqZyJQGE6W1q8ekQll5mo%2FOFZKYUkxZLJubaBWbZt2H7Pbjn0U9BkkdV%2BHN53FJA1QbtHt2LWxX6Y8bzZ25EZ4QNX%2FHGZru7sm6BHsJuZOx0VOXu0qiYiheVroKeyG%2BKRDjV%2BCYLB9%2Fm5%2F9vrhlqU3neMabgR2%2BCoXfbZ%2BV%2FPmBCiSV0RSlAIqJD7BsOyW3rJFup%2BbXocCJQxYFB3D2bpBH9RCT8Pt6J7lkOTR4LM9543EYo39Lq7zMj4YMl5TGdSwgwSMZpWi2bInNgj5xDWrpHF7wwAtMKd8bTgBEX3q5vYXfwmzaJ6UoszjRRVVPa9hR312RlI5PLCJn7AEQWw720rtv5KaT5FmM0J3AjHBPrGY9I%2BcviPJVDwPVL8kLxvUqmzDm%2B%2Bm%2FBjqkAYHk6DDn3GavP3IW27I3xF0%2FHQX58Ce%2F8YszDHEfsO0j2Pqq4T4%2B7rULTH6kd7G3d1ayNn4%2BnFCsQswdKynoY4m0PqlBygMqcrrOX1%2FvzyblXS684L0cqyM3X4BbkpsO2lja5nm0a6zB5b1o4xrQkV6sI%2FQQo8%2BXgw6vx5Lk4%2BhPv9NtaF86xRnEXPq%2F%2FZG%2B0k%2Bfg6kGZUrLtujU6fupxEV1uw2i&X-Amz-Signature=7436509d65e03ddd7d2a7253e2734f6d7216670f8ad67d623020f4480b0e074a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
