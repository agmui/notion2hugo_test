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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6KLG5C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbCSPEo2yaEBbbzoyfd5spBPLeY%2FB6eMr81%2FB7ABoGWAiEAqtYpcy1Zqj26AFcd%2Bd%2BN9dSG%2FHZUIh3Q9t3eJ%2F38SEUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC03NPiWZnuyxyK2qircA5Eaf9fNv5Q7ebTwy2keWK3Q80V8CMvrTEnCdp%2BL%2BZJI6oQG01snw6lMvKir6wUQqj0YEbPvUvxYET6t3VUyG3DGZPpAcNk18GO3qEI%2Foo9tQWlht1Ny%2BOBDCbr7fYB9hp%2BQigErdHrWk%2BLhWqaR5n6v5LZ48fdYEpJNcHqvbkP%2FQHjhpJzHA2veGyLsMYgec1UXax6w6JrkqeKSfb1H1b8kahbfDKJ9OxzFLhts%2BMCKk8QMj1Vq%2BtE7TL400kESzJ01StWA4YgOeTCMcboSXtSjqS4qKOesdKs8xogYA1fhUlwHIprjkoNG%2BkxFHTekx9PAkIm6x9BTC1TUmADlQmyTDttM1aJOxVTQMKkmolay8l2ZP4nxHma3o%2FKz13Nf1y7PtOccjts6i9z1jktGdImHMop%2B7zbum6QSgiUeF3q4Et0x2PSPbv8hzYF0NggoVuLeaAn1bnvV7sYwm%2Fn%2FQcbYMnxwJszyegXibEX1kIN8LaJWYiUHqg0alJwHUAO5KZ%2F%2Fd3gsENWnMABWA13x64AI5J%2BP7DpkZKs4e06%2BOCPCTx0NFFEhzai0CetqO8UyqqqVZDblp9A4W23D%2FlKMZ70iABlTfkcwOhbDOqYDuCTzK2aK%2FBqdU7s0hZwZMIytgb8GOqUB9ST9GbxpOC5STgkCJlx33yV6bjgGAXY56sWvVsTxIuWqEM2zQFqTOf7qqVrNoOPvujXVEHTHjBQvicpg2%2Bbr5wOglc6oMYmSN6ZT%2BIDBAwrdfNkdvIOSjTIwWy%2BAkjpSOcTBwln9jnIkRiLS9JULhmALDS52vONZTZ7SUtV88C3sn2zKY0QRwby1NF%2F7lUX5Sml3GSk%2F7j4xEPpMv%2BnYMUKfSSs0&X-Amz-Signature=2461c4129fe094e022bd1d54584adc77f7920b687f114c3a5d3a5ee18d6ce70f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6KLG5C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbCSPEo2yaEBbbzoyfd5spBPLeY%2FB6eMr81%2FB7ABoGWAiEAqtYpcy1Zqj26AFcd%2Bd%2BN9dSG%2FHZUIh3Q9t3eJ%2F38SEUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC03NPiWZnuyxyK2qircA5Eaf9fNv5Q7ebTwy2keWK3Q80V8CMvrTEnCdp%2BL%2BZJI6oQG01snw6lMvKir6wUQqj0YEbPvUvxYET6t3VUyG3DGZPpAcNk18GO3qEI%2Foo9tQWlht1Ny%2BOBDCbr7fYB9hp%2BQigErdHrWk%2BLhWqaR5n6v5LZ48fdYEpJNcHqvbkP%2FQHjhpJzHA2veGyLsMYgec1UXax6w6JrkqeKSfb1H1b8kahbfDKJ9OxzFLhts%2BMCKk8QMj1Vq%2BtE7TL400kESzJ01StWA4YgOeTCMcboSXtSjqS4qKOesdKs8xogYA1fhUlwHIprjkoNG%2BkxFHTekx9PAkIm6x9BTC1TUmADlQmyTDttM1aJOxVTQMKkmolay8l2ZP4nxHma3o%2FKz13Nf1y7PtOccjts6i9z1jktGdImHMop%2B7zbum6QSgiUeF3q4Et0x2PSPbv8hzYF0NggoVuLeaAn1bnvV7sYwm%2Fn%2FQcbYMnxwJszyegXibEX1kIN8LaJWYiUHqg0alJwHUAO5KZ%2F%2Fd3gsENWnMABWA13x64AI5J%2BP7DpkZKs4e06%2BOCPCTx0NFFEhzai0CetqO8UyqqqVZDblp9A4W23D%2FlKMZ70iABlTfkcwOhbDOqYDuCTzK2aK%2FBqdU7s0hZwZMIytgb8GOqUB9ST9GbxpOC5STgkCJlx33yV6bjgGAXY56sWvVsTxIuWqEM2zQFqTOf7qqVrNoOPvujXVEHTHjBQvicpg2%2Bbr5wOglc6oMYmSN6ZT%2BIDBAwrdfNkdvIOSjTIwWy%2BAkjpSOcTBwln9jnIkRiLS9JULhmALDS52vONZTZ7SUtV88C3sn2zKY0QRwby1NF%2F7lUX5Sml3GSk%2F7j4xEPpMv%2BnYMUKfSSs0&X-Amz-Signature=8e84f19b6eda4ef20daf6f1d753966d4ba6ea5c3071988a5903dc61c4918e93b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
