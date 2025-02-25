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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLRAMB%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDcEGLTgjbQ3Shh4Z9PEE3TQNVr%2FR5f2ONRhyZ5ZCo0EgIgP3obD%2FxlZW3XTDf47kKwa%2FxcMxm%2Ft%2BBfeSicsbTUBbIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNkM2vdpMZ9e0DuoHyrcA9GBK%2B%2FlALhkXrEIte%2FTOobrHdjK5WhSwg57np2%2FO%2BAxIuEWwtctaSvuiRodVHvs%2FiYcrpKcLEDsbn0WcAcGsRfPJx3Pj%2FTMigzEOAi6NLi5Jwyx3xI3bm7d7HPSvwwWBx5tN9VztT0dtXEUvztiqihk7xUSVTzZoUWTRPRP7YePmkhb2oy%2FQmK%2B5GrOzT68TDMIUhxS2gLg3Qo3RGXiWciz%2F%2B0yDnRSxzBbcafuWIG9xhirJtswP%2FMrSXeT13TsT2T%2BNHx4sSx2GnArDTxML%2F3DZ%2BcQawsi5EuuG7rDRK3OpClChGZT1UHaehAnJdDUXaeIPdzHQAx52p4c3w%2BoJkQJTJ3q5YJsqkN8%2B%2FzLppvHx2lOYul3%2FY3eNStQxlfUzcz%2BbLAut5mSALAAnP4v%2B9UbkNp9tBsqLc0jG6NM2D7TqYsmGs5S9vTjdQdQlMN7YpGs3HH0Q3dGID7KOs3wGoYE6723dg9wpORI8e4jXhb2cKc1YF4xy1rL7e3y%2BC53A29WftblVx2UmYdYa3C7UCatNqtUe7sCR3faQKXQerr0Oj7WWBTJ4O1eLmnkIh2Y1ybxcVjVpKKkLpvqyj0BhGrTTRBlNb%2FyPDv%2FifebCpgoo%2BSY8Zj%2B%2Fb%2BkcXDdMIiD9L0GOqUBssfhJIhLOpJrJ7NKPcc6cErb8m3u0p%2B9lVNon8j4AWreIL1Sd7BM0fCr95EaaUFHcOtjLVxACvVuwodD3Jn4ykch2LaeiyN5bGF9Z5qjM1lE%2BbhUjizIL34ZNOAOt4VS6qbk0O6nWzUrRu8bb8sZvWtGAYBu%2B29FAkvQDx%2BSw9qBGYFAf%2FePQHglRi6xWGyyoeZ0vUKEUQs2ZxRhHqdCEl%2BTa3h6&X-Amz-Signature=c7175cbcf3100ceff3eaae98d99ecd321e50776aae8b8181b55416299d8055d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLRAMB%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDcEGLTgjbQ3Shh4Z9PEE3TQNVr%2FR5f2ONRhyZ5ZCo0EgIgP3obD%2FxlZW3XTDf47kKwa%2FxcMxm%2Ft%2BBfeSicsbTUBbIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNkM2vdpMZ9e0DuoHyrcA9GBK%2B%2FlALhkXrEIte%2FTOobrHdjK5WhSwg57np2%2FO%2BAxIuEWwtctaSvuiRodVHvs%2FiYcrpKcLEDsbn0WcAcGsRfPJx3Pj%2FTMigzEOAi6NLi5Jwyx3xI3bm7d7HPSvwwWBx5tN9VztT0dtXEUvztiqihk7xUSVTzZoUWTRPRP7YePmkhb2oy%2FQmK%2B5GrOzT68TDMIUhxS2gLg3Qo3RGXiWciz%2F%2B0yDnRSxzBbcafuWIG9xhirJtswP%2FMrSXeT13TsT2T%2BNHx4sSx2GnArDTxML%2F3DZ%2BcQawsi5EuuG7rDRK3OpClChGZT1UHaehAnJdDUXaeIPdzHQAx52p4c3w%2BoJkQJTJ3q5YJsqkN8%2B%2FzLppvHx2lOYul3%2FY3eNStQxlfUzcz%2BbLAut5mSALAAnP4v%2B9UbkNp9tBsqLc0jG6NM2D7TqYsmGs5S9vTjdQdQlMN7YpGs3HH0Q3dGID7KOs3wGoYE6723dg9wpORI8e4jXhb2cKc1YF4xy1rL7e3y%2BC53A29WftblVx2UmYdYa3C7UCatNqtUe7sCR3faQKXQerr0Oj7WWBTJ4O1eLmnkIh2Y1ybxcVjVpKKkLpvqyj0BhGrTTRBlNb%2FyPDv%2FifebCpgoo%2BSY8Zj%2B%2Fb%2BkcXDdMIiD9L0GOqUBssfhJIhLOpJrJ7NKPcc6cErb8m3u0p%2B9lVNon8j4AWreIL1Sd7BM0fCr95EaaUFHcOtjLVxACvVuwodD3Jn4ykch2LaeiyN5bGF9Z5qjM1lE%2BbhUjizIL34ZNOAOt4VS6qbk0O6nWzUrRu8bb8sZvWtGAYBu%2B29FAkvQDx%2BSw9qBGYFAf%2FePQHglRi6xWGyyoeZ0vUKEUQs2ZxRhHqdCEl%2BTa3h6&X-Amz-Signature=46eb630f5d945e1a857c2d5685f8f4a75b75d8117fd05549c38ef19277bb0d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
