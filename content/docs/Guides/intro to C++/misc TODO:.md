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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXCETIZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQym9Hya2S340XVmLEnQO3DzRgW%2BIYgIQMzViBAJDNsQIhAOqZ9cvZI4B%2Fuc%2BXE%2BWjc3jt4xeYA3T6X7Oz7eI5mH5vKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG1RnGpTvkWfEUsTUq3APOjpQpzMWzXwRIYcsKje6zYVWGw1bSanvK3GTS1Ho%2FMU0z737Xb6%2B756VmLvYX0c6tSKZsQ4MtzGOi75i7tY2SNjWtNdeJwKcaHtDh7uxm1C6rbQi30ErwOrKZ6LqTZklRUP0ZYgLKGbqhRI1sTNa8cCABC%2FA0cPRj%2B%2F%2BDVS4LYp47SVD6rsoG%2Fy00BtbctAc4PnilCSIne2QcYJR%2FnYaRqgkGlYV0hYhrc2QzMRET0zpgp3%2B1hw82atdfy2%2FRoAAxNmj8PdMiJvCSQPD%2F8n5M6DxKMHhTrHKusZ0Q53ajLE3LG3%2FzuOrW6Jdd0%2BkbFrZHEx%2FI%2FVNNX7KOxkU5EDj89ru7GaDiCmKx8OMOda%2Fa1%2Fq%2F5pnHvnrGo%2BtYwSM4UgYWHxw1xYi0Ci9LgEvoHZlLBJHofHRfHIUwmX47%2F48ajA%2Fbh%2BTmz0T2Sg7rh8fhiV8TuDRffI5cqBd3Rl0G53womW0DTUoSjVqtBIIbONiQBsyXeCjCByukSrsAA2053PEkLm57EXYFoYCQX3zl6bGgcWlWDcaAcljaXXuPG0tzHPM%2FxZkolHo%2Fnm3gCZEnU6nAm3iKi8qlxWKQCsV5zU3olOiUyL24p%2BmNnxg%2BNZYGoUsPer%2BOf6kvY9%2F8VjCx%2BqW9BjqkARHkuZLj3hid1CaFREpZ7sl66WweSDV4tUjLTQF1rD323TcO4AMUyxf65ch43ZI5imWD6IairgNLVL2ABz6ppB10rUwXSyZNVxX4KH0aStFUbQqfYK9NBd8HK860nZY2BGxh8BH1Q3zZG4o2Oz6udLVQalWr8OH88Q4coO%2F8g3bDNNdBpcGNEdc2clTC0WFW5P4rYb2bVjRxTTHjWDvf20a33SKp&X-Amz-Signature=0309ca626f7ac343fac522da7e7607f1892fff57974e10a160834cddc630498c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXCETIZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQym9Hya2S340XVmLEnQO3DzRgW%2BIYgIQMzViBAJDNsQIhAOqZ9cvZI4B%2Fuc%2BXE%2BWjc3jt4xeYA3T6X7Oz7eI5mH5vKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG1RnGpTvkWfEUsTUq3APOjpQpzMWzXwRIYcsKje6zYVWGw1bSanvK3GTS1Ho%2FMU0z737Xb6%2B756VmLvYX0c6tSKZsQ4MtzGOi75i7tY2SNjWtNdeJwKcaHtDh7uxm1C6rbQi30ErwOrKZ6LqTZklRUP0ZYgLKGbqhRI1sTNa8cCABC%2FA0cPRj%2B%2F%2BDVS4LYp47SVD6rsoG%2Fy00BtbctAc4PnilCSIne2QcYJR%2FnYaRqgkGlYV0hYhrc2QzMRET0zpgp3%2B1hw82atdfy2%2FRoAAxNmj8PdMiJvCSQPD%2F8n5M6DxKMHhTrHKusZ0Q53ajLE3LG3%2FzuOrW6Jdd0%2BkbFrZHEx%2FI%2FVNNX7KOxkU5EDj89ru7GaDiCmKx8OMOda%2Fa1%2Fq%2F5pnHvnrGo%2BtYwSM4UgYWHxw1xYi0Ci9LgEvoHZlLBJHofHRfHIUwmX47%2F48ajA%2Fbh%2BTmz0T2Sg7rh8fhiV8TuDRffI5cqBd3Rl0G53womW0DTUoSjVqtBIIbONiQBsyXeCjCByukSrsAA2053PEkLm57EXYFoYCQX3zl6bGgcWlWDcaAcljaXXuPG0tzHPM%2FxZkolHo%2Fnm3gCZEnU6nAm3iKi8qlxWKQCsV5zU3olOiUyL24p%2BmNnxg%2BNZYGoUsPer%2BOf6kvY9%2F8VjCx%2BqW9BjqkARHkuZLj3hid1CaFREpZ7sl66WweSDV4tUjLTQF1rD323TcO4AMUyxf65ch43ZI5imWD6IairgNLVL2ABz6ppB10rUwXSyZNVxX4KH0aStFUbQqfYK9NBd8HK860nZY2BGxh8BH1Q3zZG4o2Oz6udLVQalWr8OH88Q4coO%2F8g3bDNNdBpcGNEdc2clTC0WFW5P4rYb2bVjRxTTHjWDvf20a33SKp&X-Amz-Signature=88fe26f20cc48a2c69770a3bbb7cef2275113d68b73d3d7c7c42150344e3b190&X-Amz-SignedHeaders=host&x-id=GetObject)

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
