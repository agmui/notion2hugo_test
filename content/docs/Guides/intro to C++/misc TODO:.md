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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPC3OPG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2BeEEFVzpb0NvpVw%2BjVVkKmXsY%2B5EXCIKkpiZrE%2FPxAIgVhm0%2BE%2B1Cuwx4XYa7VEVGLduO44Acubb7GOxLr7YWd8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOwTQQa26JdjyyA4yrcA5cSd9uWGytUoweEhu4F8UfT%2F5wWp0crW2ak9rj0niUnzQ82%2FRY61fEA6uLCWmQFjD3qThOiJx7%2FGppqmCASveeZwrsK5%2BH%2FUULORfktruHghFF5QGFnS765WxOo3%2FAVYnBD4Cc9bFX0Fi5UPfANQy3%2BZcD%2FMy%2FJze%2Bwca3pGHQdjIQbKdWRMxxtZ6v2SvoBaruped5jVYZynDCCn%2Ff69TuRELequzsPxzZjBxwGlznMczdHVu1UGLadENw141aTzvloW9h2h%2B9WnT8M5MGkIfQRkcNwBHf8pMA4nuZI9cQbBDK0EwYhEf2TiI99xgPd5W96z5ArY5tFjz3hthD30IT8KvK5EnCXCGek3AReq9nrvstNhuIJvV0Lxaz6A%2F1QGsmTpxtiZedQzdRRncEH1TSJGW9JkyMrkkRXpCzjaMEf8u6pP7%2B19jWecN4lykRQurx76CyWreORFUkjaQkJABT1DqQtPUM2QIpRU6D5mp2QKIq%2FdrQyw60qHVu1Mw1mpAzdScf88hiupTrE152s%2FjfOyO4lsdD%2BgYgmVM52LR%2BwLJ6DXFhpWkiM776NXY4mutO4vWNyjaxtpZ33R4BbG35TaO4aT232HV8p8pXxA5OoP7Y3eFNQGXaixHybMOyWzL4GOqUBbyy8w4gllS%2Bg7w%2FMwUwXvwct7fO79ajcLT%2BDDHQc4OkbKt9EsFgQ%2Bsh9VT6v4J%2FxqYoI7F7NqP1yex2SBSmipPJ7hXFNOyxX9tP7WzK670NrM%2F4zmS%2FFkbyveEZIRURG2YAw6SP4mhd2qMtC%2B8dgvcByEM2sbKm3qKpIui8mTBJqN%2F%2BEQVK7zoGcLHp3em8q2meqgJ58yGgUG5quroC%2FRWSyhUG5&X-Amz-Signature=88d1f8a76334593851dd79258cd3a1626b7ec06a2d3c4d37e25bd35cb9c000ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPC3OPG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2BeEEFVzpb0NvpVw%2BjVVkKmXsY%2B5EXCIKkpiZrE%2FPxAIgVhm0%2BE%2B1Cuwx4XYa7VEVGLduO44Acubb7GOxLr7YWd8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOwTQQa26JdjyyA4yrcA5cSd9uWGytUoweEhu4F8UfT%2F5wWp0crW2ak9rj0niUnzQ82%2FRY61fEA6uLCWmQFjD3qThOiJx7%2FGppqmCASveeZwrsK5%2BH%2FUULORfktruHghFF5QGFnS765WxOo3%2FAVYnBD4Cc9bFX0Fi5UPfANQy3%2BZcD%2FMy%2FJze%2Bwca3pGHQdjIQbKdWRMxxtZ6v2SvoBaruped5jVYZynDCCn%2Ff69TuRELequzsPxzZjBxwGlznMczdHVu1UGLadENw141aTzvloW9h2h%2B9WnT8M5MGkIfQRkcNwBHf8pMA4nuZI9cQbBDK0EwYhEf2TiI99xgPd5W96z5ArY5tFjz3hthD30IT8KvK5EnCXCGek3AReq9nrvstNhuIJvV0Lxaz6A%2F1QGsmTpxtiZedQzdRRncEH1TSJGW9JkyMrkkRXpCzjaMEf8u6pP7%2B19jWecN4lykRQurx76CyWreORFUkjaQkJABT1DqQtPUM2QIpRU6D5mp2QKIq%2FdrQyw60qHVu1Mw1mpAzdScf88hiupTrE152s%2FjfOyO4lsdD%2BgYgmVM52LR%2BwLJ6DXFhpWkiM776NXY4mutO4vWNyjaxtpZ33R4BbG35TaO4aT232HV8p8pXxA5OoP7Y3eFNQGXaixHybMOyWzL4GOqUBbyy8w4gllS%2Bg7w%2FMwUwXvwct7fO79ajcLT%2BDDHQc4OkbKt9EsFgQ%2Bsh9VT6v4J%2FxqYoI7F7NqP1yex2SBSmipPJ7hXFNOyxX9tP7WzK670NrM%2F4zmS%2FFkbyveEZIRURG2YAw6SP4mhd2qMtC%2B8dgvcByEM2sbKm3qKpIui8mTBJqN%2F%2BEQVK7zoGcLHp3em8q2meqgJ58yGgUG5quroC%2FRWSyhUG5&X-Amz-Signature=080d89cc40e0201c8507942e997cf8114f476baa89c33df5c155bdc82770c62e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
