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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUR73YP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7DEBrsfbX8OgKOvzWggQL2nbZoQvc%2Fcsdizu2mpD7yAiAbZtRTL4BS5Hfv0m9p9jo%2FK%2BAH7irjbffO9le%2BSeO6HyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7vcxGeQda89XV5V0KtwDGI5Wg839Xx3stgFsryVpbLb9uvRnUFWbqXUcNMe5n%2F%2FIy%2FhhuudGNRF5wkf2OY7eCHBDveWT%2F1z3FxZOPeEyiZNfkYhOyxaiwlI%2FrInhcB5o0r0wtiJqsi%2BCiIgZ%2FJQybWt%2BStBeHpD8m3tONqAx%2Bk%2BEWg7SrWRcYtLF36aqyZy8ITgGMkLwJbSDapE90fa6dCWwbdli6dZQFqh2V3YLKORWH6ARVco67Tbqy5tXzOBAx8nqkAZQ0DDEktdIbPCAEXSrz5ImNbiAHnxYtb9IyJh3hWyWSyqW5nmHMvrnPiqYvpDL8NbIjwM%2B3GD%2Bg%2FPltQwAy0J6Py9OErwbVJABgLe1tOB4mpOZWzKT3Vh0YuY22QUlpnSpbsyerUNYVIQbm%2FEmcYapQByN35f4A0L6buEwjSQoZcJjhmIw%2BtmlACP3lp7HbXhXhWh%2FEC1eBbbBnlBtoL5j0FnGwj93V0MTxWaDYgt%2FBRVcS6DFQO0lyudpYUthN1afFfEDz%2BoTzyU0n4kAUOzN3o32VKlrZwr%2BwDwei%2B3wUd9eVVi9IB7cIbEVFT%2B8GcS7cjQDNoz3IsOBDUwFbQweY42jQkQJF8KVkjkTMNTQZw%2BRq9Hb6N4fwPJuhPrf%2FcQ%2FbyDc4CIwn82pvQY6pgFpdWOdjEBTY1INZop0TToNgl3wWuvdmYdPGpP8IDLY6yRUapBCEIvNWgPwN02kUZxOtRDEkabm1DY1ZCIJh0i%2B5ndoquNc3csFiva3bE8tNm23Gdi1n2rvB8%2F%2FA2MvSBp4ySmfuEdLgEsKaahY8cSZknvz3PN5491Iz9MF2nX2xtWsF7jRYIutMxgmUUQ1J8hSQGOGERlmfKLGR2Wigjg%2BCEaIpve5&X-Amz-Signature=00a86fc96173b89936b59bf0c9f0dc85000c298711d3626ce795b7ceb01136e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUR73YP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7DEBrsfbX8OgKOvzWggQL2nbZoQvc%2Fcsdizu2mpD7yAiAbZtRTL4BS5Hfv0m9p9jo%2FK%2BAH7irjbffO9le%2BSeO6HyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7vcxGeQda89XV5V0KtwDGI5Wg839Xx3stgFsryVpbLb9uvRnUFWbqXUcNMe5n%2F%2FIy%2FhhuudGNRF5wkf2OY7eCHBDveWT%2F1z3FxZOPeEyiZNfkYhOyxaiwlI%2FrInhcB5o0r0wtiJqsi%2BCiIgZ%2FJQybWt%2BStBeHpD8m3tONqAx%2Bk%2BEWg7SrWRcYtLF36aqyZy8ITgGMkLwJbSDapE90fa6dCWwbdli6dZQFqh2V3YLKORWH6ARVco67Tbqy5tXzOBAx8nqkAZQ0DDEktdIbPCAEXSrz5ImNbiAHnxYtb9IyJh3hWyWSyqW5nmHMvrnPiqYvpDL8NbIjwM%2B3GD%2Bg%2FPltQwAy0J6Py9OErwbVJABgLe1tOB4mpOZWzKT3Vh0YuY22QUlpnSpbsyerUNYVIQbm%2FEmcYapQByN35f4A0L6buEwjSQoZcJjhmIw%2BtmlACP3lp7HbXhXhWh%2FEC1eBbbBnlBtoL5j0FnGwj93V0MTxWaDYgt%2FBRVcS6DFQO0lyudpYUthN1afFfEDz%2BoTzyU0n4kAUOzN3o32VKlrZwr%2BwDwei%2B3wUd9eVVi9IB7cIbEVFT%2B8GcS7cjQDNoz3IsOBDUwFbQweY42jQkQJF8KVkjkTMNTQZw%2BRq9Hb6N4fwPJuhPrf%2FcQ%2FbyDc4CIwn82pvQY6pgFpdWOdjEBTY1INZop0TToNgl3wWuvdmYdPGpP8IDLY6yRUapBCEIvNWgPwN02kUZxOtRDEkabm1DY1ZCIJh0i%2B5ndoquNc3csFiva3bE8tNm23Gdi1n2rvB8%2F%2FA2MvSBp4ySmfuEdLgEsKaahY8cSZknvz3PN5491Iz9MF2nX2xtWsF7jRYIutMxgmUUQ1J8hSQGOGERlmfKLGR2Wigjg%2BCEaIpve5&X-Amz-Signature=a6de7a8f9b6cf8e94c9f985130bd7c36c03e294971d5873cdbcf5395d57479bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
