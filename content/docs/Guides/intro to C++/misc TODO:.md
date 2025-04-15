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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYNH3BZD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6wfMedh1xnTkWmIghqeLbL25OgSihwAyKG198Q7p%2FnAiBXNjjkM5NxweSDwpCi%2Bb5eLFG%2FiO8ryFirWPr%2B6Q9dnCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMNi9bt28NHgz28cYiKtwDlqexcCCcIZNyWjbs55%2BDBmcmTjCExRZkXum0cUPzlwJ0xJj9GBKUx3Kd5g5IZu6lZbMEJgAX2w7THaX2%2FKGbfwU2NUd2rVsf09h0Nbf%2FPAQRCe%2FDsRVB4QG7Ns26NIO%2FFa%2BTf%2Fj7xI1cqbaVeg0VYFpNiawi4AEIGSkCVDq7r6%2Fj5oZ22yyAX69VRu4WM2rq%2BcHP6ZN3USWlYXk1G50Yb22NI0BBSu9L76yK3zi4qjpQi1M7Rukoot4qVDVdV%2FdwGa302Uv8I4GCrF7uqn9xNxCTJ%2Fgt%2Bz6%2BydohZxorzLNBwZYuLEWrfgMFzwQ10xsERE29Z4GaqczjfsnJtvQ3s4T%2BQFImDUHxcwI6ogYU84L6PmlE5rdljwUpGa8183nYOH%2FLMSWOTtNWX5YMhQ6Yji%2FTlF6kgwhNYQx7WE3Hy3T2ROLL%2Fdd5CkPQMblwXWCFhU7JQkjBFuB%2FxXy%2FmdJ1DfcA1vrSAaDCTr0Zc7AXJFf5R0XcWYa2l8qNSY9GEtPILLWFUxDHpjjL1kF%2FOKe%2B3NMcP%2FewI6FngzcrLeVUC%2BFuGG22t%2FDQvDj5eAJ9i0inkxYNWPurKr%2FMGopuNHZ5VM0qnjp6nq1vWyx57TkAuBlM6lHdjr7fzay5ltgw%2F9X6vwY6pgG4RmOhTa7EmXeioNLKKLz%2BvoGuzhoVmFV5N%2Bb%2B2xBjceuCO5RmnRPzKxnrcxH1QNHhMJt8cgK2ER4LfqVl7u111tQYJXUc8m5zRbpURLAzRbi16jsOzM64lnPzyb2qzvWFGfaxMvFtk98ugiKX8EtG06QfCRwMTEGX6I2Li5jRZGHN74%2F%2FqmWHs1zaWmBpYCtaT%2BRbm%2FCwhyOWz6SLoYdrWIniNSvS&X-Amz-Signature=95dcdf18857fa90057c67bb75bcd7f2f0da6f33ed0b5ca33da954fcc1b82f847&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYNH3BZD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6wfMedh1xnTkWmIghqeLbL25OgSihwAyKG198Q7p%2FnAiBXNjjkM5NxweSDwpCi%2Bb5eLFG%2FiO8ryFirWPr%2B6Q9dnCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMNi9bt28NHgz28cYiKtwDlqexcCCcIZNyWjbs55%2BDBmcmTjCExRZkXum0cUPzlwJ0xJj9GBKUx3Kd5g5IZu6lZbMEJgAX2w7THaX2%2FKGbfwU2NUd2rVsf09h0Nbf%2FPAQRCe%2FDsRVB4QG7Ns26NIO%2FFa%2BTf%2Fj7xI1cqbaVeg0VYFpNiawi4AEIGSkCVDq7r6%2Fj5oZ22yyAX69VRu4WM2rq%2BcHP6ZN3USWlYXk1G50Yb22NI0BBSu9L76yK3zi4qjpQi1M7Rukoot4qVDVdV%2FdwGa302Uv8I4GCrF7uqn9xNxCTJ%2Fgt%2Bz6%2BydohZxorzLNBwZYuLEWrfgMFzwQ10xsERE29Z4GaqczjfsnJtvQ3s4T%2BQFImDUHxcwI6ogYU84L6PmlE5rdljwUpGa8183nYOH%2FLMSWOTtNWX5YMhQ6Yji%2FTlF6kgwhNYQx7WE3Hy3T2ROLL%2Fdd5CkPQMblwXWCFhU7JQkjBFuB%2FxXy%2FmdJ1DfcA1vrSAaDCTr0Zc7AXJFf5R0XcWYa2l8qNSY9GEtPILLWFUxDHpjjL1kF%2FOKe%2B3NMcP%2FewI6FngzcrLeVUC%2BFuGG22t%2FDQvDj5eAJ9i0inkxYNWPurKr%2FMGopuNHZ5VM0qnjp6nq1vWyx57TkAuBlM6lHdjr7fzay5ltgw%2F9X6vwY6pgG4RmOhTa7EmXeioNLKKLz%2BvoGuzhoVmFV5N%2Bb%2B2xBjceuCO5RmnRPzKxnrcxH1QNHhMJt8cgK2ER4LfqVl7u111tQYJXUc8m5zRbpURLAzRbi16jsOzM64lnPzyb2qzvWFGfaxMvFtk98ugiKX8EtG06QfCRwMTEGX6I2Li5jRZGHN74%2F%2FqmWHs1zaWmBpYCtaT%2BRbm%2FCwhyOWz6SLoYdrWIniNSvS&X-Amz-Signature=cf75b18f19924936b0c84a5b166b21d5d657a226d85663ef7e5059379b97ef2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
