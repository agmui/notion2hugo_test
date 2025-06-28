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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5U4KJUN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp%2BeNz1Cut6LVoic7ryRjniDNBKA%2FfL%2FTimZSgzFuFpAiBR22Zkm%2BOLtAb%2Fh7meDrZeKagn0X7SzHa658QLJ%2BSVlSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOuPtwX0v3gL1E46bKtwDgW15tb7LiJp%2BMZDkXMr8mahpSIOkN1bJiIY3XOZ8Eysfiow3NkJV%2BFjtX46o2hppBgIRvAbzHMkehZz7yb7XaV9yMRFLwxr8Y%2BOkLHwfAYqekFJ2ahTqmFzANUSMIJglSM0477wtvUTu18XOc5aVHjqslgW6B7UwEoscTddBLSZA0ymdwbAGWUHI6dEwi%2FFA0bWPtESwrIku3aD90L6%2FASdh6dA5DZamciuYygqRMKKYnQ%2BHDMazUxNUov4BNb0ZCmDfZe8C2xrHNJ69dd4nV31tycnbH63Ej8Y%2B0SoQMSB4fhbK7d3vkiUTVJwYNtTtcGf%2FnSscQ1QEjSLdvXa4R0KvRdzijOWDGpKcuU68MR5zGU%2FE2%2FLNxatRbwstsx34dmQ8HybqWVzQQv4jP8zqVurtFxRNZ7UGf%2FOhyJkxy896YQR87H7u3esZn%2Fo6WwCSpzfXxNOsrV%2F5U2XMnw88NDOfksVxywry7mNkKLJiiwz1VJP22kMmtDkZtJ4KPtoqWO6dChiE%2FHYmqq4eaIVrgD67nzDa05jgEY6HfOjJZ7ttTxOWZEXpC1pRDjlb37NX3HK2Jpibc7q9e2FJGvWuhamWge%2B1R7o1O6PWjBWXuyu3ZJ5h%2F2ei0zypxmMw2o%2F%2FwgY6pgGGw3nCp0lW9wxn1m4nzPZY7fjpdb5FWRBHYxoLqm3Y%2FzhZRVkU4weRnoMFl44E2txe57d2YBNTHDWK6luB6fKt1Ivkkfnev2RG8Usta%2BiZste8CNde4Jr%2BtM9HtF%2FuFEwg5u2Jvr1lc0Yy3CQC3FIB58LGhFVEiRLUlzhISgmOLo%2FEnrIK7eqvKNa%2F91NJ62oUaPNvSDF4hWMhIh9Zwyt%2BGEeP70J9&X-Amz-Signature=140a8b98894aa1091b9d46fd6083814ca8bae91845941f0d68806c27c2c3e74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5U4KJUN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp%2BeNz1Cut6LVoic7ryRjniDNBKA%2FfL%2FTimZSgzFuFpAiBR22Zkm%2BOLtAb%2Fh7meDrZeKagn0X7SzHa658QLJ%2BSVlSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOuPtwX0v3gL1E46bKtwDgW15tb7LiJp%2BMZDkXMr8mahpSIOkN1bJiIY3XOZ8Eysfiow3NkJV%2BFjtX46o2hppBgIRvAbzHMkehZz7yb7XaV9yMRFLwxr8Y%2BOkLHwfAYqekFJ2ahTqmFzANUSMIJglSM0477wtvUTu18XOc5aVHjqslgW6B7UwEoscTddBLSZA0ymdwbAGWUHI6dEwi%2FFA0bWPtESwrIku3aD90L6%2FASdh6dA5DZamciuYygqRMKKYnQ%2BHDMazUxNUov4BNb0ZCmDfZe8C2xrHNJ69dd4nV31tycnbH63Ej8Y%2B0SoQMSB4fhbK7d3vkiUTVJwYNtTtcGf%2FnSscQ1QEjSLdvXa4R0KvRdzijOWDGpKcuU68MR5zGU%2FE2%2FLNxatRbwstsx34dmQ8HybqWVzQQv4jP8zqVurtFxRNZ7UGf%2FOhyJkxy896YQR87H7u3esZn%2Fo6WwCSpzfXxNOsrV%2F5U2XMnw88NDOfksVxywry7mNkKLJiiwz1VJP22kMmtDkZtJ4KPtoqWO6dChiE%2FHYmqq4eaIVrgD67nzDa05jgEY6HfOjJZ7ttTxOWZEXpC1pRDjlb37NX3HK2Jpibc7q9e2FJGvWuhamWge%2B1R7o1O6PWjBWXuyu3ZJ5h%2F2ei0zypxmMw2o%2F%2FwgY6pgGGw3nCp0lW9wxn1m4nzPZY7fjpdb5FWRBHYxoLqm3Y%2FzhZRVkU4weRnoMFl44E2txe57d2YBNTHDWK6luB6fKt1Ivkkfnev2RG8Usta%2BiZste8CNde4Jr%2BtM9HtF%2FuFEwg5u2Jvr1lc0Yy3CQC3FIB58LGhFVEiRLUlzhISgmOLo%2FEnrIK7eqvKNa%2F91NJ62oUaPNvSDF4hWMhIh9Zwyt%2BGEeP70J9&X-Amz-Signature=99f0bf79499497679e395ea7b760e456ae6f7c4a2a80c81d8d3db32d98791b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
