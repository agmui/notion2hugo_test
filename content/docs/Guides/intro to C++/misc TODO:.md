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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRX3SKR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdoYt1rsZI2KqkOD1VytJh9APK3x2KnAh3uIlCq0HPTgIgO%2FC%2BTFVv1bTgI6p9mJB97RrFFoUu68IQqv0iKLKsLh8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt3Ne2XIDUzxvRuSSrcA2yxrQoaSlX9rVugJxd06JSy2Xebt98t5fU2rBtICUX864YdmFt4eN1wyMj7m3nLNPrDwGnRSICP4%2BZtk7ic4xaQYesI3GzZRKnLgs9JvI3w5uDl%2F0FIi13yB9aBgCCjGnCQfktoUd9YY%2FYdQTlElNqrjYhYstIvp3nHnctO0DzWzdvM5odLGscDVWk9dWkgc0eyQvscMwDjnyCqFk3ki4THVWxnLmkOdTgR3dwXVvsohwxpxWA3MVqM0mtKYJ5OzjgCy4vD8shlOQdG2RN9FEJludd%2BJmNlPNzMqlg%2F6JnBRhVmlpTTdqR8Nd7zTMsZWDs%2BLR5fs6Ufbl%2BdJK5QPuC9xsgxdtUXaheIlAxvWrWqhdb3o7%2FyU6awYjevNh1kAfJ1FzK1SLzvYBPQg8hS4CMlDYaHtpm7t6wJmCuCZM8EuMc5ZjRIGa4wTtEELGgWVFGdFgABRVzvmUH%2FNwlxMOnQEO9j2VvYq%2Bgc%2B8nGlaZHVahtvb%2BUmxhejeBAuogmaVMwWfRlHvXHGcJY2qevtCSLz0amhANy21lv1PNWwAL7%2Bm8g3kpmmXy%2BAZMiNax7z5PbR5FqeR%2BclKZEF2uYhg%2FPx1TGgAVyO5ckfNMif%2FUfgBCqYth55ECsFYkmMP6D68EGOqUBtKeBXmmg63qR5LeSsavkaC0Kml%2B4xw%2BIjN8jkfKyb%2FX9zculCdPmPjG9P2fNpDaOqZmcts7ZjxH6tpgP4iFBNmErSlDoMg78UmcaL4Q%2BIk6rLx242eAhAnnbBzZHuZAYhrT7zFSNeH7zEO2MhIYrknA27o6MumGJfCvCQeaTkrm%2Frdm%2BmVJkp%2BDcFAXToJy93Pvf20i8268M3k246OlEFe%2BX%2FJXs&X-Amz-Signature=13052ea1c14330480808abf33213edaae09d67c3e29fb54f514c11439bce40a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRX3SKR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdoYt1rsZI2KqkOD1VytJh9APK3x2KnAh3uIlCq0HPTgIgO%2FC%2BTFVv1bTgI6p9mJB97RrFFoUu68IQqv0iKLKsLh8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt3Ne2XIDUzxvRuSSrcA2yxrQoaSlX9rVugJxd06JSy2Xebt98t5fU2rBtICUX864YdmFt4eN1wyMj7m3nLNPrDwGnRSICP4%2BZtk7ic4xaQYesI3GzZRKnLgs9JvI3w5uDl%2F0FIi13yB9aBgCCjGnCQfktoUd9YY%2FYdQTlElNqrjYhYstIvp3nHnctO0DzWzdvM5odLGscDVWk9dWkgc0eyQvscMwDjnyCqFk3ki4THVWxnLmkOdTgR3dwXVvsohwxpxWA3MVqM0mtKYJ5OzjgCy4vD8shlOQdG2RN9FEJludd%2BJmNlPNzMqlg%2F6JnBRhVmlpTTdqR8Nd7zTMsZWDs%2BLR5fs6Ufbl%2BdJK5QPuC9xsgxdtUXaheIlAxvWrWqhdb3o7%2FyU6awYjevNh1kAfJ1FzK1SLzvYBPQg8hS4CMlDYaHtpm7t6wJmCuCZM8EuMc5ZjRIGa4wTtEELGgWVFGdFgABRVzvmUH%2FNwlxMOnQEO9j2VvYq%2Bgc%2B8nGlaZHVahtvb%2BUmxhejeBAuogmaVMwWfRlHvXHGcJY2qevtCSLz0amhANy21lv1PNWwAL7%2Bm8g3kpmmXy%2BAZMiNax7z5PbR5FqeR%2BclKZEF2uYhg%2FPx1TGgAVyO5ckfNMif%2FUfgBCqYth55ECsFYkmMP6D68EGOqUBtKeBXmmg63qR5LeSsavkaC0Kml%2B4xw%2BIjN8jkfKyb%2FX9zculCdPmPjG9P2fNpDaOqZmcts7ZjxH6tpgP4iFBNmErSlDoMg78UmcaL4Q%2BIk6rLx242eAhAnnbBzZHuZAYhrT7zFSNeH7zEO2MhIYrknA27o6MumGJfCvCQeaTkrm%2Frdm%2BmVJkp%2BDcFAXToJy93Pvf20i8268M3k246OlEFe%2BX%2FJXs&X-Amz-Signature=b4aabc1018378fff46a5423948d5204b734903c6ed3b0f588e7dde0842512f51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
