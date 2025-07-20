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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC77SJF4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67ayKcj4rWFvKR0J%2BJckTwjpIHQ5ED9pFQ8%2F2mRyCxQIhAJkta2joJ%2FE6UEnWRnAaQGhi8AN4imF6%2FkqG7wGJ%2BK5iKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWx2Lk3Pfm6RH%2Fkq4q3AMWYTo6S%2BuusoFkAg028qscWcy0ll80Bm%2F0hrXtmKoc4d8pCftshq%2FKzLKe3%2F%2FQlCErDIqLguSN1Zg%2FmS9CRvpgpnafOyfmwM6KQELHIhPwGE3mj2uWyngVm%2B6pvXgPUwn8zB3b5gWLSA5WjDdb7vzq8cxVgtTvNNiEZf%2BPUmCZyn9WtcHljSGqVnBPbelontsMqdHvVNtU0pWui9eDgszuL7uhnoJfadyB9omkHfOMAQISdR4JTywIr9UWWdJhEp8vphJAhgcHVRtIffus8o6pvRH8PwmymJ0XGOamxmZZr8UU8aSKmVJm%2B19%2FEN7cBIWU4PkvPJufsEwpv31eq5bHzdAhSrwkl16pdgVKzb%2FQuJ%2F%2BPoUl6YjST8C57TE6vNxCs2MMwasuRKOsR5wkb6RGmMEK7PA00NLKntIjTJtE0XK%2Bnx2tPoFyp5tmWO%2F6F4uTBcgW%2BiJ%2BHdw8nIfSiEsf9Q0evQZMRDZVcyzAlmS20FA8MAysvIqTHypCIuoBK4D3QeoadJFrV0VOqMHlsZ1jNLbppRFTJzZsxNYi%2BimUdbqxEbROyh4kDmA5V0mntR%2FHwBs%2BPrh9PsQD4PdwWUKgLoph5FbQaBKW4rMbMOxrm%2FSK5O5XR%2BEBb6Q9tzDOm%2FHDBjqkAUTODaws0YXS9%2BAINuKsuCILbmIAAHbGPlKG4plcH6BbdNNQT6oR3KeA5dNWlPzg0%2BaaceppgJY4uq1Yqe7t1S9bnwFoxhO1QR7zxuqjUYH5WK23nuAqQe1b1NIMcqQS1QQCX65UtdPKQoQzCi3Ew8KRbyvy3JxQZY46aiYyX3ch8rpdzu9urSQuWNcCHyI%2BNNuZpNv%2BkqPq4%2Fk377%2FoROmWyn7y&X-Amz-Signature=4eb7718608d4d6d4809de4690370eb71305e95a799600695b80a765ed3a0c56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC77SJF4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67ayKcj4rWFvKR0J%2BJckTwjpIHQ5ED9pFQ8%2F2mRyCxQIhAJkta2joJ%2FE6UEnWRnAaQGhi8AN4imF6%2FkqG7wGJ%2BK5iKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWx2Lk3Pfm6RH%2Fkq4q3AMWYTo6S%2BuusoFkAg028qscWcy0ll80Bm%2F0hrXtmKoc4d8pCftshq%2FKzLKe3%2F%2FQlCErDIqLguSN1Zg%2FmS9CRvpgpnafOyfmwM6KQELHIhPwGE3mj2uWyngVm%2B6pvXgPUwn8zB3b5gWLSA5WjDdb7vzq8cxVgtTvNNiEZf%2BPUmCZyn9WtcHljSGqVnBPbelontsMqdHvVNtU0pWui9eDgszuL7uhnoJfadyB9omkHfOMAQISdR4JTywIr9UWWdJhEp8vphJAhgcHVRtIffus8o6pvRH8PwmymJ0XGOamxmZZr8UU8aSKmVJm%2B19%2FEN7cBIWU4PkvPJufsEwpv31eq5bHzdAhSrwkl16pdgVKzb%2FQuJ%2F%2BPoUl6YjST8C57TE6vNxCs2MMwasuRKOsR5wkb6RGmMEK7PA00NLKntIjTJtE0XK%2Bnx2tPoFyp5tmWO%2F6F4uTBcgW%2BiJ%2BHdw8nIfSiEsf9Q0evQZMRDZVcyzAlmS20FA8MAysvIqTHypCIuoBK4D3QeoadJFrV0VOqMHlsZ1jNLbppRFTJzZsxNYi%2BimUdbqxEbROyh4kDmA5V0mntR%2FHwBs%2BPrh9PsQD4PdwWUKgLoph5FbQaBKW4rMbMOxrm%2FSK5O5XR%2BEBb6Q9tzDOm%2FHDBjqkAUTODaws0YXS9%2BAINuKsuCILbmIAAHbGPlKG4plcH6BbdNNQT6oR3KeA5dNWlPzg0%2BaaceppgJY4uq1Yqe7t1S9bnwFoxhO1QR7zxuqjUYH5WK23nuAqQe1b1NIMcqQS1QQCX65UtdPKQoQzCi3Ew8KRbyvy3JxQZY46aiYyX3ch8rpdzu9urSQuWNcCHyI%2BNNuZpNv%2BkqPq4%2Fk377%2FoROmWyn7y&X-Amz-Signature=3ad2486161ca56cd8d220e54fde9606335757a95f0e4926eb03ebb40603fd658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
