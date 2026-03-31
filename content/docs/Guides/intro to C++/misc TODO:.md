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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ST5TP6S%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCZyAfOjkoNC3AjSaPhKZuuXEJnyQwCt69eh4c2kllCkgIgdgV21Vv3KPEiqibIHWhnb5PMA47%2FKnrufOkO6WBjF5Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLRrMy9a5VeZeOvwGircA3n8Wlb2x6DKe9X066aDRowEUm6k%2BhXKJgO6gGg92vNnuZkQlVb18s4q5AbUf34jOMvaWf2mJS2VgJX2hrIX6GorcviYxnvNfdJG8KUnygvhxuwn8nxHM6ScSAe6vNzUmj%2Flnmc4oIBNDkZPNUNcP8czHqpuz%2BYR8zP3zaJXoLe0y%2BM0z6oZsexLat6L%2Bajrf5xs193uc3EEfl7GJgwc%2FZhTfSJnp%2FPuTB9kaGzOwL4yB2UvRfUdyMTAAkbFZchEf0mCGFaJ%2BY8AnroHPAPI2%2BJNaud3nsIWfoBEWKXH0NBfzrEQEtXwjVaG2bfexzCqIYWhPjJlaHphi%2FPEXjFtUSwL2MZn6v4l8064smU1T3gmROEaKWNJYuNHpL08OeG3%2F%2BwSeTlElqDW6lLdMdd2phmhVf08glFtKBO%2FBV0oO4b3eGU2PJx0W01JwCA7vIo4FXEEsRnp0D226WEcb2rXUW3AJSR1RPLB6ISQorK1pVWqwwraiHxFbVWp5K82R%2Boh%2BgF5F8%2BuzxPncW4D5BRJmj%2FYtnXWqsKBxq4hyBXPt60BhKqWusFlv5dLAcncOmhtwRv7CQ%2BUQVSfzdNOax8Wowub7u0OL2W79mPzLDIoeKMLkgjUe4AkcMXVFvYpMK68rM4GOqUB%2F1VTkl0Aomsip2LBI%2F2PYKgH54X87pXOkVC6K8IWXGkL65VaxR%2BdeplgAikIADFr0PT44QqduQlkQF1%2FQhVB9gU8aTaoBs%2F%2F0Sawid77EBgFc4xHRL%2Bj6xPy7O2e0oKzpqqtffon8oYDlwW5lksTbk%2BzRJdu2E6o2hhtBE%2FuzY1G%2BRPwsObbT%2B8Fmttr8D3JJGIuKLKzdidrdcvBwQdP1yC%2Bkuzz&X-Amz-Signature=1ce96615ae6cca4e13276844fde576dc8f25f4b30a3086beb0da1fd5689dec9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ST5TP6S%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCZyAfOjkoNC3AjSaPhKZuuXEJnyQwCt69eh4c2kllCkgIgdgV21Vv3KPEiqibIHWhnb5PMA47%2FKnrufOkO6WBjF5Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLRrMy9a5VeZeOvwGircA3n8Wlb2x6DKe9X066aDRowEUm6k%2BhXKJgO6gGg92vNnuZkQlVb18s4q5AbUf34jOMvaWf2mJS2VgJX2hrIX6GorcviYxnvNfdJG8KUnygvhxuwn8nxHM6ScSAe6vNzUmj%2Flnmc4oIBNDkZPNUNcP8czHqpuz%2BYR8zP3zaJXoLe0y%2BM0z6oZsexLat6L%2Bajrf5xs193uc3EEfl7GJgwc%2FZhTfSJnp%2FPuTB9kaGzOwL4yB2UvRfUdyMTAAkbFZchEf0mCGFaJ%2BY8AnroHPAPI2%2BJNaud3nsIWfoBEWKXH0NBfzrEQEtXwjVaG2bfexzCqIYWhPjJlaHphi%2FPEXjFtUSwL2MZn6v4l8064smU1T3gmROEaKWNJYuNHpL08OeG3%2F%2BwSeTlElqDW6lLdMdd2phmhVf08glFtKBO%2FBV0oO4b3eGU2PJx0W01JwCA7vIo4FXEEsRnp0D226WEcb2rXUW3AJSR1RPLB6ISQorK1pVWqwwraiHxFbVWp5K82R%2Boh%2BgF5F8%2BuzxPncW4D5BRJmj%2FYtnXWqsKBxq4hyBXPt60BhKqWusFlv5dLAcncOmhtwRv7CQ%2BUQVSfzdNOax8Wowub7u0OL2W79mPzLDIoeKMLkgjUe4AkcMXVFvYpMK68rM4GOqUB%2F1VTkl0Aomsip2LBI%2F2PYKgH54X87pXOkVC6K8IWXGkL65VaxR%2BdeplgAikIADFr0PT44QqduQlkQF1%2FQhVB9gU8aTaoBs%2F%2F0Sawid77EBgFc4xHRL%2Bj6xPy7O2e0oKzpqqtffon8oYDlwW5lksTbk%2BzRJdu2E6o2hhtBE%2FuzY1G%2BRPwsObbT%2B8Fmttr8D3JJGIuKLKzdidrdcvBwQdP1yC%2Bkuzz&X-Amz-Signature=b087257deab22adaea3c428efa1004d4577e31fda0efdaac9e297d857c224c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
