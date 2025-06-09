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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQ4S665%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwL5ljaK%2BfgKUzB%2BcZJRs0B951fzT7kdUbeDqLJwA8EAiB6An0nb%2FwEQiiCTHRLwe5rBhyJgzXOfWJXcIe6xFyZ0yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi4Qv5C8mLvoH%2BGjcKtwDhJnx12LDkD4Cd5%2FZoecZWOExQFpwyP1lERYQ0qNYvD4f19%2FXcdD0z%2BylpZrzlIvz9conMRBRwmN%2BXPNVmZDplMcbLE3ok2DuKSI3M5k16SBmFswDgip37lqnsc5sNkbzfNTDAmlrhsew8kVLwWCXGJOeutZocyK4XY4Exa4lrc4UTM6nDuzqvFCdPLg4LlFLP%2FVoFOG2Tqjd8wuYtaaw4KASBS4%2FDWYJ%2BXrQ7O1x9saZTP27dkcohMrPxou3FQO81No1oduRyJChlxD6aLaPMJfxVEuulmlO%2BCVn6IxKBijutBsxwA5yv7vruyAx7fm3eacQmwG7iYOGJhkRAyMsGUHk25M1f%2FsFI5F0Fi1sx%2F10pY%2F2kuo7WzdtJOx3Z8xNVr79QWdVeTr3UdGV2mGDVjILE7R%2FUCgFb3sWB7yNqCZ5NhFkFWlHsxJ3%2Bozkre29dqZLTu6%2BFETWLQoTK8gWnX8i5sZucECjCKB1yA7tNYxbDcW9H8cTCne3SBpFsj5tH8KPu48c5FGpsrfQakdluLEF704aUdv4rrLGiV2qPN5MWBresz0aJpmgEpCz3%2BxIckDubP0%2BNZd%2BkAnHrDvqzGxPXpKMt%2BDZnB6b0gHB2NjaRdEP0SV1T8LHp48wqd2ZwgY6pgHCUbHsEsB3aGDuR9rPA%2BhqEDM%2FInJrGcid%2BbVmGpT2HTW4rc6W3Xd7qL6SzN64bvY4cWH1psCfM2t4CKoLLvOl%2FzTp%2BTR9dUfMkr2PLJsvVMBilwnIhVtdeZ3z6Ja%2FNQ%2BKEc0wMduHSxjTXdmdeqSfo4qkaXj090cK1hSFYoRlSj%2BL6mJVk3mmREx86wlRcrBeKA6hcCYvTNQA%2BMtZVO5j125DNYwz&X-Amz-Signature=51f787a7e21b6e391add454fe6413b84e6b47d93259f09191030727d2217764a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQ4S665%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwL5ljaK%2BfgKUzB%2BcZJRs0B951fzT7kdUbeDqLJwA8EAiB6An0nb%2FwEQiiCTHRLwe5rBhyJgzXOfWJXcIe6xFyZ0yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi4Qv5C8mLvoH%2BGjcKtwDhJnx12LDkD4Cd5%2FZoecZWOExQFpwyP1lERYQ0qNYvD4f19%2FXcdD0z%2BylpZrzlIvz9conMRBRwmN%2BXPNVmZDplMcbLE3ok2DuKSI3M5k16SBmFswDgip37lqnsc5sNkbzfNTDAmlrhsew8kVLwWCXGJOeutZocyK4XY4Exa4lrc4UTM6nDuzqvFCdPLg4LlFLP%2FVoFOG2Tqjd8wuYtaaw4KASBS4%2FDWYJ%2BXrQ7O1x9saZTP27dkcohMrPxou3FQO81No1oduRyJChlxD6aLaPMJfxVEuulmlO%2BCVn6IxKBijutBsxwA5yv7vruyAx7fm3eacQmwG7iYOGJhkRAyMsGUHk25M1f%2FsFI5F0Fi1sx%2F10pY%2F2kuo7WzdtJOx3Z8xNVr79QWdVeTr3UdGV2mGDVjILE7R%2FUCgFb3sWB7yNqCZ5NhFkFWlHsxJ3%2Bozkre29dqZLTu6%2BFETWLQoTK8gWnX8i5sZucECjCKB1yA7tNYxbDcW9H8cTCne3SBpFsj5tH8KPu48c5FGpsrfQakdluLEF704aUdv4rrLGiV2qPN5MWBresz0aJpmgEpCz3%2BxIckDubP0%2BNZd%2BkAnHrDvqzGxPXpKMt%2BDZnB6b0gHB2NjaRdEP0SV1T8LHp48wqd2ZwgY6pgHCUbHsEsB3aGDuR9rPA%2BhqEDM%2FInJrGcid%2BbVmGpT2HTW4rc6W3Xd7qL6SzN64bvY4cWH1psCfM2t4CKoLLvOl%2FzTp%2BTR9dUfMkr2PLJsvVMBilwnIhVtdeZ3z6Ja%2FNQ%2BKEc0wMduHSxjTXdmdeqSfo4qkaXj090cK1hSFYoRlSj%2BL6mJVk3mmREx86wlRcrBeKA6hcCYvTNQA%2BMtZVO5j125DNYwz&X-Amz-Signature=4d5cc2e92cafab0f63ec79c9d131a8f6ef95ff1fed6b0b5102ce8b478acc7d41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
