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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MWKOIR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIByD4pZWIBOcvxX2CPGYvRkGEYqrWeHSldkDVX4mzYPaAiEA8KBnUG3ZUfsS7DUof6%2F%2BIvqHdDL41%2F3T5GgzHPk%2Bpgwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJelxJuxj0Vmin05mCrcA9sdcw%2BV3fp7l%2FSgEbDCCvKYYOtUut5L%2Bu6VAsZ6ND6jeSPgtTIi8DzAqZ%2Fu8b%2BbMCLbsc%2Fj24XggWHdfFGXl5uwNjIo4yPZVSkq13hRBNSShEeUNB9Iy%2BczgcIsIv2M8pLJeUS6YjRcU5DtroNS26OkHKtL%2B%2Bj%2BJ4LzofzbzGDzx%2BT%2BWQ11CCQgLicyvED%2BwYUD8YIU7H9TtZtJIxSkdDYv%2FurZ5LQMQ6tXylEsDmrpLWPe8r6xdluthwAOWicP0TGPBJKwwPvaMCyJTBibgy6cGqb7BTPSpcMjiTOq2O962Jq%2FjRrcbUYq%2FrcgdHKi7L0b%2FE4cZBC%2FWojOJ8xuvWq7sEYdV079i64h6jFFOtcr4o2k%2BWojo9WJQOWw1ef3kNDZFOr3PTvvGJBoXg63weCruKkKL75O9dKT018BY55MCCwGJMquq%2FVXipck1a6rRiZjcseCcmGFZztQfPz6%2BfJa09PIoWXBcazf905fsKjvkNO3LlOcYHB1N6QynIWyPzcHnL58X%2BibcTsjSa2mL0p7WmKboLnbe7FJv%2F4AOfB8ZrOmtZsI62qZpyyjoaPjdq4UWzCuMD4K5RKVUSrT%2BTzQXgmaO566Tht%2BExT2QNYlEi8PdzXWc4UhZW4oMMmqzsEGOqUBTCFEG%2F66mh5ohHWqQH2bjYgNmwtS%2BoREqMoPax3mas%2FFNWlz0D9NZlAmSM22HDceQfqremjnO0fu%2F5ZxdIvOFhLY%2F2rRJeWXE2AqQ8eha%2FDGpNuxnGQfSmxwipSJ2vvzofr3dJYS2W%2BWQLlpnE9pj57ptSiBF%2FaKEX9N3745kYIj7d4uXiF6q7Knq1eaPIqf4q0hVBAtXwd0b2kkZv0nKL%2FMDyqG&X-Amz-Signature=53668d9745948a20ec592b515948ca093febbb6490480e6d937c57b9456eebab&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MWKOIR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIByD4pZWIBOcvxX2CPGYvRkGEYqrWeHSldkDVX4mzYPaAiEA8KBnUG3ZUfsS7DUof6%2F%2BIvqHdDL41%2F3T5GgzHPk%2Bpgwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJelxJuxj0Vmin05mCrcA9sdcw%2BV3fp7l%2FSgEbDCCvKYYOtUut5L%2Bu6VAsZ6ND6jeSPgtTIi8DzAqZ%2Fu8b%2BbMCLbsc%2Fj24XggWHdfFGXl5uwNjIo4yPZVSkq13hRBNSShEeUNB9Iy%2BczgcIsIv2M8pLJeUS6YjRcU5DtroNS26OkHKtL%2B%2Bj%2BJ4LzofzbzGDzx%2BT%2BWQ11CCQgLicyvED%2BwYUD8YIU7H9TtZtJIxSkdDYv%2FurZ5LQMQ6tXylEsDmrpLWPe8r6xdluthwAOWicP0TGPBJKwwPvaMCyJTBibgy6cGqb7BTPSpcMjiTOq2O962Jq%2FjRrcbUYq%2FrcgdHKi7L0b%2FE4cZBC%2FWojOJ8xuvWq7sEYdV079i64h6jFFOtcr4o2k%2BWojo9WJQOWw1ef3kNDZFOr3PTvvGJBoXg63weCruKkKL75O9dKT018BY55MCCwGJMquq%2FVXipck1a6rRiZjcseCcmGFZztQfPz6%2BfJa09PIoWXBcazf905fsKjvkNO3LlOcYHB1N6QynIWyPzcHnL58X%2BibcTsjSa2mL0p7WmKboLnbe7FJv%2F4AOfB8ZrOmtZsI62qZpyyjoaPjdq4UWzCuMD4K5RKVUSrT%2BTzQXgmaO566Tht%2BExT2QNYlEi8PdzXWc4UhZW4oMMmqzsEGOqUBTCFEG%2F66mh5ohHWqQH2bjYgNmwtS%2BoREqMoPax3mas%2FFNWlz0D9NZlAmSM22HDceQfqremjnO0fu%2F5ZxdIvOFhLY%2F2rRJeWXE2AqQ8eha%2FDGpNuxnGQfSmxwipSJ2vvzofr3dJYS2W%2BWQLlpnE9pj57ptSiBF%2FaKEX9N3745kYIj7d4uXiF6q7Knq1eaPIqf4q0hVBAtXwd0b2kkZv0nKL%2FMDyqG&X-Amz-Signature=25f6bcee211c9b07f09a4895a280505d93abc294387c94030de3f38ba9c47aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
