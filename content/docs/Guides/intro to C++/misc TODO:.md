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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5OD3O3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbrTmj9mm0PubrItghjzRpFPIcAgiUGtX9299dbQ9qhgIgNGgjsojPxURxqFaMFzTf19lqYPeG5DksCwmxS%2FB9clEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFsX%2FOsmI56f4A6oSrcA0nInGVdWerDYbrBp4mYg0klVdLMb5Qug37VclasLkVyH0V9%2BNyM6JMDZDOXnJVnfq5Kc6cQvCBwZBMu6YMT8hTV2dA8Ot1WlgFaAv5xQHpqYwVDSa4dj5Q37Bx6wWrA7wVOghbmcf%2BFyr9VbgFxCHaEmlhtnhWXKnZHkdfnGsKWCQedt7YTHCoTVr09A4M7sdS7lsKghC%2F9vjylpnaufp%2Bkd0FZbHWwJVbsDHMlptHTTlEFQwHYOBAWcY7DrIcwKiuyyh3fnsvrbIwiY8guFnlltEaJxlae8s4vKX%2BB1%2B7Lw7uv6vJQ68dAMNtZ5Qx7pwMRbeHza%2FMD5cMBVktLCx3XZOzIOJJApyTJ5JlZlIwwSY5oE0%2BcsZ9ZoemqITBrc9D4AD%2F%2F5XSybtnJo773VNJnzwZIs0j%2Bkx4TvCiY30OiytafefipnX3pQLTRb7qyWupghx24WxiS8nYlLqI1IyxaQxU99u03gavTq0Ez%2BrRdM%2Fstx%2F7%2B%2FQCYZcVtCIqmygDdVP5mAq4fZmqC89HV5uTckNg%2BSIwKXDEw%2Fe4j8eUYEEB2WMLqu8uCLjeb6F%2FlktWgsRZ1qtULktdyxUpmAsfXbU7BTmHROa2hHBD7ZlL6PWpRif6PTxlm5%2F7dMLL%2F%2FMIGOqUBTEWOrDHfb3LzcV4Vlmi%2FcSQvPv7g%2BR4c%2FYMf%2FmUC%2FBLDkDgw4c7jjbqcbhL3%2FAg5y6QMxeNOd7V1YWoWBK2jbFLeUVdMtyutyXoDQJH%2F%2BAxs%2FcWBtnwp9M42pwo3YWSsGbKYOqaeEsyFcQvur9LjMjyDtb9jL%2BjG3UzB8Q2NRLuwUIUxGWUsQQsqQlf5UvJ1cKWP5Uchq5SMKTA0uYzVY1Y%2F%2B%2Bzu&X-Amz-Signature=f3b018389cf3535469ac44718b0b7491911d187957f198741c11052cd92d0c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5OD3O3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbrTmj9mm0PubrItghjzRpFPIcAgiUGtX9299dbQ9qhgIgNGgjsojPxURxqFaMFzTf19lqYPeG5DksCwmxS%2FB9clEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFsX%2FOsmI56f4A6oSrcA0nInGVdWerDYbrBp4mYg0klVdLMb5Qug37VclasLkVyH0V9%2BNyM6JMDZDOXnJVnfq5Kc6cQvCBwZBMu6YMT8hTV2dA8Ot1WlgFaAv5xQHpqYwVDSa4dj5Q37Bx6wWrA7wVOghbmcf%2BFyr9VbgFxCHaEmlhtnhWXKnZHkdfnGsKWCQedt7YTHCoTVr09A4M7sdS7lsKghC%2F9vjylpnaufp%2Bkd0FZbHWwJVbsDHMlptHTTlEFQwHYOBAWcY7DrIcwKiuyyh3fnsvrbIwiY8guFnlltEaJxlae8s4vKX%2BB1%2B7Lw7uv6vJQ68dAMNtZ5Qx7pwMRbeHza%2FMD5cMBVktLCx3XZOzIOJJApyTJ5JlZlIwwSY5oE0%2BcsZ9ZoemqITBrc9D4AD%2F%2F5XSybtnJo773VNJnzwZIs0j%2Bkx4TvCiY30OiytafefipnX3pQLTRb7qyWupghx24WxiS8nYlLqI1IyxaQxU99u03gavTq0Ez%2BrRdM%2Fstx%2F7%2B%2FQCYZcVtCIqmygDdVP5mAq4fZmqC89HV5uTckNg%2BSIwKXDEw%2Fe4j8eUYEEB2WMLqu8uCLjeb6F%2FlktWgsRZ1qtULktdyxUpmAsfXbU7BTmHROa2hHBD7ZlL6PWpRif6PTxlm5%2F7dMLL%2F%2FMIGOqUBTEWOrDHfb3LzcV4Vlmi%2FcSQvPv7g%2BR4c%2FYMf%2FmUC%2FBLDkDgw4c7jjbqcbhL3%2FAg5y6QMxeNOd7V1YWoWBK2jbFLeUVdMtyutyXoDQJH%2F%2BAxs%2FcWBtnwp9M42pwo3YWSsGbKYOqaeEsyFcQvur9LjMjyDtb9jL%2BjG3UzB8Q2NRLuwUIUxGWUsQQsqQlf5UvJ1cKWP5Uchq5SMKTA0uYzVY1Y%2F%2B%2Bzu&X-Amz-Signature=7ad59555866cef7f3afb92405d139ac6e53712c4097f607206fa9a8f5d005af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
