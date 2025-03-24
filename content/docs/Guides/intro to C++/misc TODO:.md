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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWITCVNO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0mQQa4MaT4eu1J4QFAM5jag7YyGGnQvE2Yf37aIL5bAiAJksRKV6CSV16RLCZaNk00AWFn5QbHoF%2Fepd4uaZ5LKSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSbu49QscYfk5F%2BKQKtwDRkQNOcdX0YhhBirQ%2FMWV82tzMiVgKConVlocqr1Jc%2BWCum61wWGh%2BSW7lSZPOWUYwAzhBHy4IXVxMC231XLThZ15KXo%2FcmE9pbWwWYRiIghmFdJBojvBGUUPzMf36HmF36lCwOHYtaQ5XhX8803wI9b6to9NTa2%2B1%2ByIJtCmf%2BJ%2F0mxjbtyg0vmSRzYjqQcKs1uvMAPLs2wroSknBI%2Bm6HG8zEmdfx6b2supUgndlntojRNOLrWSisOXpXD77%2BUl9nkF0zQ%2FGM%2B2cvdatri%2FFTbZPosw%2BdNOzl5jIOudZzpsxazGXZ%2BAl7VuvSWlW0SHq2ALeUyTRpipWcWNriIyrJiMvyGHah6L%2BcmOjZ2pQu3BqPHcW9EE02lj47UZr4tCU61vXN3%2F2IgcfT%2BjtwA5g%2F5gMv4BRGe5qEeTBHyK%2FXaERnSrs1nlB1z31jjh0KK8KE%2BGgKHwWc%2B7OfxX0n5yjMJTcIaBVc%2FAZNhhBbc94MoTr6s20pmm9z%2F%2BOHhgb0zwLZTo7KsUoRZ5j4BZHVUxO6t%2B9U8SJ4sYl%2Ffgea7ydqMV29pE4gFrHAVvX1rzV9EKRDcgx0wi3dXrbDOVYlpCuRlIEC70Jg6EhQ%2FhaC76rwJDtdba7inzvEzN2Mwwxv2FvwY6pgE8P7sgTjZrw3h4vWLf0fakdMRUhrwbw4MiItbnBvr5rwXo4CW52ieCF0ZB3QwXusAYZo6ksdJLjQjtj6AH71kDi%2Flf3eIDigIj6bvSS9wBPMRP52Vue4qkkdLqrUP9kwVevk5HA32M36ugMfCPWrsi14dRzbFHVuouxrKyaEtetvrWV82FJ7xA%2Byh3ysPHlxdMI2xaZQAHE8brsPv1%2Bzq%2FAuae%2Fm1T&X-Amz-Signature=b637c7024edbeac1267d4c57efa252a80817127f2330e7ef267193784f39e264&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWITCVNO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0mQQa4MaT4eu1J4QFAM5jag7YyGGnQvE2Yf37aIL5bAiAJksRKV6CSV16RLCZaNk00AWFn5QbHoF%2Fepd4uaZ5LKSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSbu49QscYfk5F%2BKQKtwDRkQNOcdX0YhhBirQ%2FMWV82tzMiVgKConVlocqr1Jc%2BWCum61wWGh%2BSW7lSZPOWUYwAzhBHy4IXVxMC231XLThZ15KXo%2FcmE9pbWwWYRiIghmFdJBojvBGUUPzMf36HmF36lCwOHYtaQ5XhX8803wI9b6to9NTa2%2B1%2ByIJtCmf%2BJ%2F0mxjbtyg0vmSRzYjqQcKs1uvMAPLs2wroSknBI%2Bm6HG8zEmdfx6b2supUgndlntojRNOLrWSisOXpXD77%2BUl9nkF0zQ%2FGM%2B2cvdatri%2FFTbZPosw%2BdNOzl5jIOudZzpsxazGXZ%2BAl7VuvSWlW0SHq2ALeUyTRpipWcWNriIyrJiMvyGHah6L%2BcmOjZ2pQu3BqPHcW9EE02lj47UZr4tCU61vXN3%2F2IgcfT%2BjtwA5g%2F5gMv4BRGe5qEeTBHyK%2FXaERnSrs1nlB1z31jjh0KK8KE%2BGgKHwWc%2B7OfxX0n5yjMJTcIaBVc%2FAZNhhBbc94MoTr6s20pmm9z%2F%2BOHhgb0zwLZTo7KsUoRZ5j4BZHVUxO6t%2B9U8SJ4sYl%2Ffgea7ydqMV29pE4gFrHAVvX1rzV9EKRDcgx0wi3dXrbDOVYlpCuRlIEC70Jg6EhQ%2FhaC76rwJDtdba7inzvEzN2Mwwxv2FvwY6pgE8P7sgTjZrw3h4vWLf0fakdMRUhrwbw4MiItbnBvr5rwXo4CW52ieCF0ZB3QwXusAYZo6ksdJLjQjtj6AH71kDi%2Flf3eIDigIj6bvSS9wBPMRP52Vue4qkkdLqrUP9kwVevk5HA32M36ugMfCPWrsi14dRzbFHVuouxrKyaEtetvrWV82FJ7xA%2Byh3ysPHlxdMI2xaZQAHE8brsPv1%2Bzq%2FAuae%2Fm1T&X-Amz-Signature=67045d2f38cf1828a7fc808315749b722f3514215a2931042e1a95d80cafec25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
