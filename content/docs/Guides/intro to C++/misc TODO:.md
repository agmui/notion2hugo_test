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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEVBK7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtwdfdy2hFWhLVihciFaPFknoUZCjEnjb1YkZP694bHAiEApXz%2F0dPQjz8H7Y2ttXzqzNKjPrB9SU53VB0hfvcs%2Fs4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1bOawtL6TuJFwxuircA8gB96l23xtO7fxGdrFtthYx5UPXc5CUEi3G56msadYFHEEQB1%2F41evnaLvR%2B%2BEFViAFtITRYS9ZRmHt8GYitRAGuUxXEIS09MnpWgWyd4T8TAzfwRsh6VD03TS8lNed2KG%2FKPECUj3V5U0%2B2E4vyB6qd00E39uELJreJNj2XduyXthlRKQKzljk2vlaE6nMBw4NghNuFGjHAgB4pWRlfQJUKgKLuWcSxM3krXB8oVFOcYdt9dEFe%2BE8l31EQawKz3w7%2FoULWQ1Cjabme6neN46gcYiQwNj%2BXV7sFpnH92fgzk4LH%2Fm8zfABp0MLq0tJYlfgzlsBsgaZRaUQxZSH5aNR5nHrBevBqJvXpOUgNw7acwDsyYB8kYWSPxKUtWax7gde8MHtJw2my4MltOz%2FEaL3CwIiD5GS8iURBnuab0L%2FflsCVYWfMf%2BKX9UCvOdYXxFG10SM1dGifL7g3qp%2B3Z4IKGKEH%2BWhNH01r2RQVcxISHi7Ueu2njHJEzg0mNmOu9UHiP9FqqbozkCvvs6epVCxCiwQvrNSXFpn7uaZLUpCfPZDSRUenfpGUUr9FxkOqwBnE%2BZBYfBW51R4sAQSy3eqQvBN51eYFcF5R9UKlWJ99NakSxyhAy5%2FH%2BTXMP%2BgnsIGOqUBYKCqRCThz9qxbgrNfGUBJWSXzuHtrr8NoBvK8D8qWkFkJQLWkIIUcPV7AGRQU0OG26nz5TloV6XN0Y1SqP1x4gws7ASWfnY4nUl7AxUlVIPzX6Av6NXDk%2BiH8KQBvvVsfbQZP%2BSNvZ5Qvwn0dR9%2FCE%2FCogiABjdGUTfzJe4AdUfj%2FGnsb2eZE5Pf8lygbGH%2BGlCgFXnMUeEveoKdyxitYuTqSHUw&X-Amz-Signature=6cf5d3ce16a9d933359ccfcef7535b82a818511d5bf0512084bb5d0d2f71778f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEVBK7Z%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtwdfdy2hFWhLVihciFaPFknoUZCjEnjb1YkZP694bHAiEApXz%2F0dPQjz8H7Y2ttXzqzNKjPrB9SU53VB0hfvcs%2Fs4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1bOawtL6TuJFwxuircA8gB96l23xtO7fxGdrFtthYx5UPXc5CUEi3G56msadYFHEEQB1%2F41evnaLvR%2B%2BEFViAFtITRYS9ZRmHt8GYitRAGuUxXEIS09MnpWgWyd4T8TAzfwRsh6VD03TS8lNed2KG%2FKPECUj3V5U0%2B2E4vyB6qd00E39uELJreJNj2XduyXthlRKQKzljk2vlaE6nMBw4NghNuFGjHAgB4pWRlfQJUKgKLuWcSxM3krXB8oVFOcYdt9dEFe%2BE8l31EQawKz3w7%2FoULWQ1Cjabme6neN46gcYiQwNj%2BXV7sFpnH92fgzk4LH%2Fm8zfABp0MLq0tJYlfgzlsBsgaZRaUQxZSH5aNR5nHrBevBqJvXpOUgNw7acwDsyYB8kYWSPxKUtWax7gde8MHtJw2my4MltOz%2FEaL3CwIiD5GS8iURBnuab0L%2FflsCVYWfMf%2BKX9UCvOdYXxFG10SM1dGifL7g3qp%2B3Z4IKGKEH%2BWhNH01r2RQVcxISHi7Ueu2njHJEzg0mNmOu9UHiP9FqqbozkCvvs6epVCxCiwQvrNSXFpn7uaZLUpCfPZDSRUenfpGUUr9FxkOqwBnE%2BZBYfBW51R4sAQSy3eqQvBN51eYFcF5R9UKlWJ99NakSxyhAy5%2FH%2BTXMP%2BgnsIGOqUBYKCqRCThz9qxbgrNfGUBJWSXzuHtrr8NoBvK8D8qWkFkJQLWkIIUcPV7AGRQU0OG26nz5TloV6XN0Y1SqP1x4gws7ASWfnY4nUl7AxUlVIPzX6Av6NXDk%2BiH8KQBvvVsfbQZP%2BSNvZ5Qvwn0dR9%2FCE%2FCogiABjdGUTfzJe4AdUfj%2FGnsb2eZE5Pf8lygbGH%2BGlCgFXnMUeEveoKdyxitYuTqSHUw&X-Amz-Signature=7c8fc12543e877a1bfe12f57bde2df0d11b3a3cade8da91bb6963e2a2b06d115&X-Amz-SignedHeaders=host&x-id=GetObject)

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
