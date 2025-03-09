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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXQUSAYG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBLLzeucNBmrMdyvZXw6ZUnprqj8FLcaiU%2FKH98Hq6P7AiEAyVr7pLWDOG02JXx%2FDj9weySRzlF%2BDyo14kCRw62byKwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKpjZFhXiS102iowmyrcA9waoO%2BDVe%2FF%2FP%2F4rnsruJUFoNKFdoCw7p%2BXB3bqaTPyYUGItSC2lrV9jEVlMAs7V%2F3ZqjaVZFg%2Fxt5Eu8UajgzYmrtH8BOBBY1BqSruHWlDDIURn9JypFRb%2B6NBm5ao%2B8OzcFVISw8smlcoXSebv2X1OdF0IMdAeymKzzNtrUnIhzecToFCj7CKlytWCrJI06nUUlSlerXFys%2Bh%2FPC2wl68q%2FkAeohr%2BSRV2Jrwz7qGoKdI8p6Ue23cOTqfYm2PpCA%2Fpztl%2Bv%2BMmZ0y%2F1%2FFvyyoeFjEwlEEYit7clCH7TZL54ZexCV%2B1bF5YRKOnT%2BxQm0nRG6y%2BuqPyNTAX66AjsIozYORPkhNi4awBu%2FdRox0yIkvygl7xY4x09Fitgw4GVUnPHpwV6B%2F4l%2B62Mu2mIVul5sWb5cmnfX88FEbAH5RB2gRHovzr6c9tfR0Aqvqoin5WI2d3vHXHhss5UNQglcLZFPgs1%2BjLDmxLqrt6lYFprD0Yr2onwUEwFqFw%2FJwjuxzSAW0g2YNoPLap4YBs7z0FgOEtE4vSKgQOP86LrJUhfcQ7N1wWAgNI2QLosSO2duJIbe1coRgDp8FP62EtJfdNudMOnvE9lnlJ%2Bgw%2FcASs7m4O5Lq1cepq7pqMLPgt74GOqUBthzkaTtV3tJL7dOXJQ8Ak%2B7gJCM%2B6fVJNaoO7l673VZk27npFZ4d%2FNPiVmb06D4g2mukL7BwhzOTkiCGNeoD%2Bo9O4%2Fo0PLflE%2FratkXQQw%2B6IU%2F9C7qFxC1gkUqNPTGt6iJ6rRsSAkHH%2FdcjjwBpJzMcQUpng67LC8nnotpjL3fpJZ9ykQGV5A%2BLpjPZDWJ3vgMFrLaSS6ppQzM5yZgAC1flU9YD&X-Amz-Signature=b63ab8738995baf34269e9812100b2d511ea5fc82931ba00d44f519e64ff7609&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXQUSAYG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBLLzeucNBmrMdyvZXw6ZUnprqj8FLcaiU%2FKH98Hq6P7AiEAyVr7pLWDOG02JXx%2FDj9weySRzlF%2BDyo14kCRw62byKwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKpjZFhXiS102iowmyrcA9waoO%2BDVe%2FF%2FP%2F4rnsruJUFoNKFdoCw7p%2BXB3bqaTPyYUGItSC2lrV9jEVlMAs7V%2F3ZqjaVZFg%2Fxt5Eu8UajgzYmrtH8BOBBY1BqSruHWlDDIURn9JypFRb%2B6NBm5ao%2B8OzcFVISw8smlcoXSebv2X1OdF0IMdAeymKzzNtrUnIhzecToFCj7CKlytWCrJI06nUUlSlerXFys%2Bh%2FPC2wl68q%2FkAeohr%2BSRV2Jrwz7qGoKdI8p6Ue23cOTqfYm2PpCA%2Fpztl%2Bv%2BMmZ0y%2F1%2FFvyyoeFjEwlEEYit7clCH7TZL54ZexCV%2B1bF5YRKOnT%2BxQm0nRG6y%2BuqPyNTAX66AjsIozYORPkhNi4awBu%2FdRox0yIkvygl7xY4x09Fitgw4GVUnPHpwV6B%2F4l%2B62Mu2mIVul5sWb5cmnfX88FEbAH5RB2gRHovzr6c9tfR0Aqvqoin5WI2d3vHXHhss5UNQglcLZFPgs1%2BjLDmxLqrt6lYFprD0Yr2onwUEwFqFw%2FJwjuxzSAW0g2YNoPLap4YBs7z0FgOEtE4vSKgQOP86LrJUhfcQ7N1wWAgNI2QLosSO2duJIbe1coRgDp8FP62EtJfdNudMOnvE9lnlJ%2Bgw%2FcASs7m4O5Lq1cepq7pqMLPgt74GOqUBthzkaTtV3tJL7dOXJQ8Ak%2B7gJCM%2B6fVJNaoO7l673VZk27npFZ4d%2FNPiVmb06D4g2mukL7BwhzOTkiCGNeoD%2Bo9O4%2Fo0PLflE%2FratkXQQw%2B6IU%2F9C7qFxC1gkUqNPTGt6iJ6rRsSAkHH%2FdcjjwBpJzMcQUpng67LC8nnotpjL3fpJZ9ykQGV5A%2BLpjPZDWJ3vgMFrLaSS6ppQzM5yZgAC1flU9YD&X-Amz-Signature=c54e3ef42f4a3706eea693a4072bc423f148d1a4bc351018546b4012c555fa55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
