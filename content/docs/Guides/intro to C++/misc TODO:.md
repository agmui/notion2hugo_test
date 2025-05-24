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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36RDREB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIFO0An5XvE6wQLObAbmZq8utAVR7JP1S%2BNyeafbVV0W0AiBUjVP8rgY72V7lyhT76tHUjfiO5hIIi2KoSnS1geVUjiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVHbBDcw9KrokNiKKtwDS5CrGG67sJComJZ1MalzemztHXdAM1PtEyfnP7%2F%2BGqr9gGBhJR3ZZ6rCsHzzi125Os2huU3DYZfx%2FzR7PCVnS6cDe6MJ589vM%2BBqV%2FtK%2BI%2B7QyLB0O1jXSkgrMu4LiMZNVl8cJMX04LR6te9wzV%2BoIYRJLYtYEykEzY8SPYpJkkC65itWMz1rU1aZNie%2BDm2017YoFNYeB4kt%2FPo0a98OxGwPeEm0J%2BvylTfPqkxWFAhjrYwACAXkyI%2FrRQABmu3oQ9xJavFrXSq0rq86VRoQZN7a5phFNkUGcn%2B2%2BVAzjZIcMVAzrHJ73FZF307i0UY9BVd2hQ6GIl7tzSyXwsf92oRqi3MIUt128heUUUSIOUhuo44R4sQJJpaJ%2Fv0ng%2BLJlEO4TC%2F1CrKD30KeDP3TbD3rjcS5LkY1tdpEGcsvenQ9aMaCU%2FdijWt0igPA6zLtM7ppDkV3GQGA1v%2FoI71HmEuadnxgkOdi1rqY5iO%2BKwI4cBBsQ67cWEQ2MkdflFq8Jdi3y5Y8sZ1QbiJFUWUHlmJFkav5q5FK%2FrghUHebC0aBefPzuYJyBUZvhJGk3jGHzA7Sf1%2B%2Bo1dIiZLXPltqmHshnuYiK3ktqbs8KywM%2FB2vwLfXD6ZFidyazUw16vFwQY6pgHOwVMsAeCQ%2FTFCdVEKrzWaPkmD%2FTF%2FMxU%2FacIC0qIrf6Lij3Jxpfkwlspmh8DPmUYsEJ3tfMeLp7j6qDG%2BBRRjsUhlGW7wUuzuMOyZrPSPC7utwLNKf2wnKh7NllAE7AlnskfELuB0dCADPnY99y1%2BHgfQPlq1KjuyBg1laim89jN6iV7aH6sX5yp89zcaOQceATNGqe4KrM0a1HkwIOUP82%2FaCC0h&X-Amz-Signature=18fdaa5931c820dde57bafa9ed76a0eeb55db7f93a97590995ec61c2e15e5139&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36RDREB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIFO0An5XvE6wQLObAbmZq8utAVR7JP1S%2BNyeafbVV0W0AiBUjVP8rgY72V7lyhT76tHUjfiO5hIIi2KoSnS1geVUjiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVHbBDcw9KrokNiKKtwDS5CrGG67sJComJZ1MalzemztHXdAM1PtEyfnP7%2F%2BGqr9gGBhJR3ZZ6rCsHzzi125Os2huU3DYZfx%2FzR7PCVnS6cDe6MJ589vM%2BBqV%2FtK%2BI%2B7QyLB0O1jXSkgrMu4LiMZNVl8cJMX04LR6te9wzV%2BoIYRJLYtYEykEzY8SPYpJkkC65itWMz1rU1aZNie%2BDm2017YoFNYeB4kt%2FPo0a98OxGwPeEm0J%2BvylTfPqkxWFAhjrYwACAXkyI%2FrRQABmu3oQ9xJavFrXSq0rq86VRoQZN7a5phFNkUGcn%2B2%2BVAzjZIcMVAzrHJ73FZF307i0UY9BVd2hQ6GIl7tzSyXwsf92oRqi3MIUt128heUUUSIOUhuo44R4sQJJpaJ%2Fv0ng%2BLJlEO4TC%2F1CrKD30KeDP3TbD3rjcS5LkY1tdpEGcsvenQ9aMaCU%2FdijWt0igPA6zLtM7ppDkV3GQGA1v%2FoI71HmEuadnxgkOdi1rqY5iO%2BKwI4cBBsQ67cWEQ2MkdflFq8Jdi3y5Y8sZ1QbiJFUWUHlmJFkav5q5FK%2FrghUHebC0aBefPzuYJyBUZvhJGk3jGHzA7Sf1%2B%2Bo1dIiZLXPltqmHshnuYiK3ktqbs8KywM%2FB2vwLfXD6ZFidyazUw16vFwQY6pgHOwVMsAeCQ%2FTFCdVEKrzWaPkmD%2FTF%2FMxU%2FacIC0qIrf6Lij3Jxpfkwlspmh8DPmUYsEJ3tfMeLp7j6qDG%2BBRRjsUhlGW7wUuzuMOyZrPSPC7utwLNKf2wnKh7NllAE7AlnskfELuB0dCADPnY99y1%2BHgfQPlq1KjuyBg1laim89jN6iV7aH6sX5yp89zcaOQceATNGqe4KrM0a1HkwIOUP82%2FaCC0h&X-Amz-Signature=9234b3d4727f0e45cfa601818a6cb2e4b07759d39c46fe1980e7a4b77d1e5e31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
