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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O43CDT3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDydZ7pQdX1R16DjiRFUc%2FA1Himhj84d7Z3FOAIb493zAiAlkutmjWqnxY7Vu%2F77Rgs3dkp8YwS0IIDABJDqEDUAMSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMkAc29OucPN%2BqXMizKtwDNMTjM%2FL9WeCBmscDCyjO7yv%2FiMKFSuZpX4O1sS7L4dhQmJm3mMCOV8RyMnSTI1FlAOkUjetP3OQC2yb6CXCdBUMPNpI0Ss%2B0x%2F3RotPbk%2FsskI8DyZUmaDdgAIW070u2Tu6n0rqtBnsXKUGBrCq0U8pOPxy9HpfpS%2BM%2BpTnRXUuVNDi670fy3%2FR%2BRYhNIVsUH4rSut71PGqGDr68pBs00qLs8j9BkJ92PFjwMp6uPpYOr668%2F3AAbw8w%2FJ4QGeSAeBzI0Ic42Mxjt%2BzO9jyvS2XbzH%2FzX1KcfjPgrvQyG5aItZA5%2BVNfTeXNLWxaEpbmU5UoYan6No0HQFm%2FM7Pr6VlBPqcrpJHHMH3ruH%2B7iE9jH4%2BsbcIW3nLqSKpaxQ9fk0lnSBBvqw4TymfUEn7NrhPfgM533Woi7aJNbHQRUgn8w%2FKMgkChUS6ue0zsKFFAZg%2FlwcRBooe%2BGuYc%2FzPm%2BwZEIlW5eqa6l4GRL88qj%2FOs6N0ZrXfboYpaSAlrkvDx4yc017p1xn%2Bse3kYgNniaaXHBCu6nNVTVNEFAXfR0e1aTuCRrtVXA29D6kMehYBwm%2FrxKKYun0pG6lplRC%2FyRrPEjSkW5Dy9Nf%2BRPP%2BRWY8DqaxkVpkaywNUp2Yw%2FYHAvwY6pgFhracspkw1ZAI6V5CQu5YuKZt0tmTAO9lkubXtovLWZOjNzYVCtNRk%2FfcizBdI0tVstiHGc37QUws4XHjTIVJpFYaeiNhkALkc9oQ0bHcXj2eRtXfZmDp%2BWpBCFtA31pt3NguXEWDFc8UGL5%2FvS0H0RzfWlB9u2NyIGR8N%2Bw7%2B1k3z5QXlM04Pf%2BV0vWsSIusBXD%2Bkp%2FLC6dw30FDAHQJ5C4qs730H&X-Amz-Signature=2e31c30e66520351a317b69df80f6f73d79373157b92d0b91f85b655cdccc1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O43CDT3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDydZ7pQdX1R16DjiRFUc%2FA1Himhj84d7Z3FOAIb493zAiAlkutmjWqnxY7Vu%2F77Rgs3dkp8YwS0IIDABJDqEDUAMSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMkAc29OucPN%2BqXMizKtwDNMTjM%2FL9WeCBmscDCyjO7yv%2FiMKFSuZpX4O1sS7L4dhQmJm3mMCOV8RyMnSTI1FlAOkUjetP3OQC2yb6CXCdBUMPNpI0Ss%2B0x%2F3RotPbk%2FsskI8DyZUmaDdgAIW070u2Tu6n0rqtBnsXKUGBrCq0U8pOPxy9HpfpS%2BM%2BpTnRXUuVNDi670fy3%2FR%2BRYhNIVsUH4rSut71PGqGDr68pBs00qLs8j9BkJ92PFjwMp6uPpYOr668%2F3AAbw8w%2FJ4QGeSAeBzI0Ic42Mxjt%2BzO9jyvS2XbzH%2FzX1KcfjPgrvQyG5aItZA5%2BVNfTeXNLWxaEpbmU5UoYan6No0HQFm%2FM7Pr6VlBPqcrpJHHMH3ruH%2B7iE9jH4%2BsbcIW3nLqSKpaxQ9fk0lnSBBvqw4TymfUEn7NrhPfgM533Woi7aJNbHQRUgn8w%2FKMgkChUS6ue0zsKFFAZg%2FlwcRBooe%2BGuYc%2FzPm%2BwZEIlW5eqa6l4GRL88qj%2FOs6N0ZrXfboYpaSAlrkvDx4yc017p1xn%2Bse3kYgNniaaXHBCu6nNVTVNEFAXfR0e1aTuCRrtVXA29D6kMehYBwm%2FrxKKYun0pG6lplRC%2FyRrPEjSkW5Dy9Nf%2BRPP%2BRWY8DqaxkVpkaywNUp2Yw%2FYHAvwY6pgFhracspkw1ZAI6V5CQu5YuKZt0tmTAO9lkubXtovLWZOjNzYVCtNRk%2FfcizBdI0tVstiHGc37QUws4XHjTIVJpFYaeiNhkALkc9oQ0bHcXj2eRtXfZmDp%2BWpBCFtA31pt3NguXEWDFc8UGL5%2FvS0H0RzfWlB9u2NyIGR8N%2Bw7%2B1k3z5QXlM04Pf%2BV0vWsSIusBXD%2Bkp%2FLC6dw30FDAHQJ5C4qs730H&X-Amz-Signature=409d6021715572384c0cb18a5b116efb6259113f091b4ebc2ca75ef878d03c41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
