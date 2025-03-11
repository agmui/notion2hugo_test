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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DYVI43%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHXa1RHRbUU96A0Z2VnC63BN6HmUbT9m8AhKxzTtBZBqAiEAtcRugOmtpOQ01S8OywnAuvVdyzFwIM%2FLobrg2AdRBzsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlZma%2F9mOH7aINlsyrcA3DcPbZiVJMBTUR5qZc%2FlY4uekE%2BKFfFAXcZxSgu%2FRTi2ANM6UKDiYu4i8Mwi%2Fps7zI8C%2FdHFKuAOZIAtiWEYeWEsaRupu4vuyRLQj0hPgraTP008puK4tUxzVomoiVjrfURLFZQIN0DUFhBFchoQGycNln5EewnrZ1Ki16nqeeRYnZr3ovxRQ5lDBg8Lz18GX6wOUpYDqaukGlZbMBS61YFlsG65Ug69Zvxu6v4Sb8GU7Vu2YRuDh6z5Cb32OUe%2FH7Jqtre9yTK3OQOOk7kD9BKxuFv5aaflUh4jmx4NtXR0ZtoCEO1ft7dsejOw6NxJUP9B%2FeWAwFxA3yx67Wy8uMGsq3VD0xXixJHyTqhaxc2J3djsO49zEsb4OjPjd9VYfxv3A9%2FPKzLdNtb2M3nT5EUA9DFVsdbQHw1qMucvaFM4L2onDe5pb5hCreDRE5s%2Fkz37ma3jqjYzS2becx2ZLB2dfHQBC1QrXnDq%2Fa7qC%2BbfgzfPOAu1iBxe7UEQmOAjNLBIXVVD4ooZUm2g3iU9OeBa2NldjvpQ3PohURUS6My%2B0mHnSdho4Jh3nyW6qIJzpBQxNk2v14uEq2OI3WRCnfZywQAKncvcxoMOuK6xofPhRn0kzQi6Y5o3eURMIXQvr4GOqUBHwkDM5G2rPe8NpMIkS5CszPpI9E4%2B8nMg0FZoYaxCDxu2dvFMNGG30uuHYmLIym4%2B%2Bosk2gTXscQ%2BoLFLB4yfqeYG7kvUjtQd0UuexUYMVDHvLpeXzFl%2FK3LpwYbRfRkASTqgg8UCIisLw6V3lLLMjv%2B3VhTpE7IKiDCKpCeKmRQmL70kOsgx8pxaikBlnfXkNlaj9vx0fnIYI3pQlgvyIU2vGJl&X-Amz-Signature=056d9b76b569ab96c1209d0a8f1779174b2a10a24c84b0bffeafc214f4cbc60c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DYVI43%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHXa1RHRbUU96A0Z2VnC63BN6HmUbT9m8AhKxzTtBZBqAiEAtcRugOmtpOQ01S8OywnAuvVdyzFwIM%2FLobrg2AdRBzsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlZma%2F9mOH7aINlsyrcA3DcPbZiVJMBTUR5qZc%2FlY4uekE%2BKFfFAXcZxSgu%2FRTi2ANM6UKDiYu4i8Mwi%2Fps7zI8C%2FdHFKuAOZIAtiWEYeWEsaRupu4vuyRLQj0hPgraTP008puK4tUxzVomoiVjrfURLFZQIN0DUFhBFchoQGycNln5EewnrZ1Ki16nqeeRYnZr3ovxRQ5lDBg8Lz18GX6wOUpYDqaukGlZbMBS61YFlsG65Ug69Zvxu6v4Sb8GU7Vu2YRuDh6z5Cb32OUe%2FH7Jqtre9yTK3OQOOk7kD9BKxuFv5aaflUh4jmx4NtXR0ZtoCEO1ft7dsejOw6NxJUP9B%2FeWAwFxA3yx67Wy8uMGsq3VD0xXixJHyTqhaxc2J3djsO49zEsb4OjPjd9VYfxv3A9%2FPKzLdNtb2M3nT5EUA9DFVsdbQHw1qMucvaFM4L2onDe5pb5hCreDRE5s%2Fkz37ma3jqjYzS2becx2ZLB2dfHQBC1QrXnDq%2Fa7qC%2BbfgzfPOAu1iBxe7UEQmOAjNLBIXVVD4ooZUm2g3iU9OeBa2NldjvpQ3PohURUS6My%2B0mHnSdho4Jh3nyW6qIJzpBQxNk2v14uEq2OI3WRCnfZywQAKncvcxoMOuK6xofPhRn0kzQi6Y5o3eURMIXQvr4GOqUBHwkDM5G2rPe8NpMIkS5CszPpI9E4%2B8nMg0FZoYaxCDxu2dvFMNGG30uuHYmLIym4%2B%2Bosk2gTXscQ%2BoLFLB4yfqeYG7kvUjtQd0UuexUYMVDHvLpeXzFl%2FK3LpwYbRfRkASTqgg8UCIisLw6V3lLLMjv%2B3VhTpE7IKiDCKpCeKmRQmL70kOsgx8pxaikBlnfXkNlaj9vx0fnIYI3pQlgvyIU2vGJl&X-Amz-Signature=cfd3dec468095ae8ea64be180fdf9a1eba3f171c275a5dbb8a42696d2004dfd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
