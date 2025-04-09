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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E3VF5T6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDwzU8Ez1G2pyH%2F9VTyxpoTxVqYEnH1YVz8g1rA7o9kaQIhAN%2FJR617%2BRE%2FhMSq5FSRoBKGCXqvNlaqR6nOlqaFa2oFKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTYN73deJl%2BmVx8z0q3APe1uFM8xN4wdhj8%2F7tAvKTywFccGjBdmF%2FEzDHEg6fWgtA%2FjhgTboy7aCxUX1tLxxcpEz4TGXQF5RoqM4x7I1cEYeEuB6FfDsR5cJ5%2BPzYMUWmoIkJEJl5LkNq2NcmyyBH5D6BK3aEYRK5g4Sa2qODg2ZnSFlZ7z9tuH2C%2FGxHTM4fNZpXRLd6My1tz1Xw0HlbD1elcWusk1oUfdQXUZREfA3Hpf5jLHdulTl07X%2FiI%2FxCnAYaOIALrzBkdjZpyJNmH2Qv1ZD%2Fobc%2FX6Hxl%2B2bTHbKE%2FlKCDVQvzroHFaBl9qNwC8mze7tRldkntme92awKYiFb2zvSpRxXXGRzO7uujm%2FYXqPaEPjHZXLEidMAXIiGX6%2BykGK7L6ALjTQa9i14hfeiZA5Bq7vfgfJyEfSHxm5yQLu6nMarTU9Wtnc1jtA3NAQB7N4nNEm74IZBuGxLdaQcdl5zIEnLFWL6qfzloQtKGLIQfN9pA%2BXriFzuaJ5yS5KyunYZEvP9GptZEZewJ0IMoMjX9K%2FgjNwcKQF%2BlrMqoABe%2FclnAvmZHzL8mlVeR6RW1kFAtPsUPhTTZJLL0SuZfK7tFRNwGVLL9BMeQgK2jxHKWJgf8kBdJxhsUWliYftzrSEs8g7ODCv%2B9i%2FBjqkAUdv4oxVrpd%2F8%2Fyzm4ZhqP722Or0P%2FW0OcMj9Ldi3hfSJLgWKcdFx%2FmeJbolwIQ6mX6xw9ru5EzCVltbmQpx9%2Fwcd6QZuCvJWOuauUJEI5jCS5COIdLVB6U99XD6gF64Kkn56nMzGx%2BvZoF6wjH18xAwtOQ5yJEV38W%2BB3mVfb5EoC%2F%2FIQA5xDmdyAj9lEHco2S5SjC8ZmEM5RWD2gjeZnqDpD0F&X-Amz-Signature=b5ff92fa58706c39c04a8fc84f1265d8e8be1f4f8b8270421eb774e58cfed44e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E3VF5T6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDwzU8Ez1G2pyH%2F9VTyxpoTxVqYEnH1YVz8g1rA7o9kaQIhAN%2FJR617%2BRE%2FhMSq5FSRoBKGCXqvNlaqR6nOlqaFa2oFKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTYN73deJl%2BmVx8z0q3APe1uFM8xN4wdhj8%2F7tAvKTywFccGjBdmF%2FEzDHEg6fWgtA%2FjhgTboy7aCxUX1tLxxcpEz4TGXQF5RoqM4x7I1cEYeEuB6FfDsR5cJ5%2BPzYMUWmoIkJEJl5LkNq2NcmyyBH5D6BK3aEYRK5g4Sa2qODg2ZnSFlZ7z9tuH2C%2FGxHTM4fNZpXRLd6My1tz1Xw0HlbD1elcWusk1oUfdQXUZREfA3Hpf5jLHdulTl07X%2FiI%2FxCnAYaOIALrzBkdjZpyJNmH2Qv1ZD%2Fobc%2FX6Hxl%2B2bTHbKE%2FlKCDVQvzroHFaBl9qNwC8mze7tRldkntme92awKYiFb2zvSpRxXXGRzO7uujm%2FYXqPaEPjHZXLEidMAXIiGX6%2BykGK7L6ALjTQa9i14hfeiZA5Bq7vfgfJyEfSHxm5yQLu6nMarTU9Wtnc1jtA3NAQB7N4nNEm74IZBuGxLdaQcdl5zIEnLFWL6qfzloQtKGLIQfN9pA%2BXriFzuaJ5yS5KyunYZEvP9GptZEZewJ0IMoMjX9K%2FgjNwcKQF%2BlrMqoABe%2FclnAvmZHzL8mlVeR6RW1kFAtPsUPhTTZJLL0SuZfK7tFRNwGVLL9BMeQgK2jxHKWJgf8kBdJxhsUWliYftzrSEs8g7ODCv%2B9i%2FBjqkAUdv4oxVrpd%2F8%2Fyzm4ZhqP722Or0P%2FW0OcMj9Ldi3hfSJLgWKcdFx%2FmeJbolwIQ6mX6xw9ru5EzCVltbmQpx9%2Fwcd6QZuCvJWOuauUJEI5jCS5COIdLVB6U99XD6gF64Kkn56nMzGx%2BvZoF6wjH18xAwtOQ5yJEV38W%2BB3mVfb5EoC%2F%2FIQA5xDmdyAj9lEHco2S5SjC8ZmEM5RWD2gjeZnqDpD0F&X-Amz-Signature=5b9ad405d8a5e028e6a3a102cf6cee8f60c0a261afecfc7a28127ad31ee1a38d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
