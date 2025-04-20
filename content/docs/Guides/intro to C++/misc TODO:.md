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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643FS6A6U%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEsHuWqOmQbj5aQxgL%2BfdA05IGBmMx958RvrApX231tkAiBZ5%2FnNfU7Kk6liIBvw66EU13ixshPdizCGNllXxuDrgyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnMIz9aNpmRzm5LQoKtwDlTdD2KdxI6OPCogHgk6hHO1q%2F9QYKiDWK320zu7PyClpzD%2FvQhXgsdtmzWvufjnsUMViJ6i5G3%2FrsmDCbD5rZdyEFkH%2BDkDQSL9CqSe3cMseRbKXo7k6QIpsv8tH5hntfarzuOR45sQVTVfgNWL8cJQ0e%2FlRFlqXkGw0nCNYgmTWuEIEpRlai1OTW90EH0gjOFFAlly6wZvBJVATDiqqHOHe47eleJ0BNFeaGaHjNuQBkRD3c%2FGCGqUKFeUVjXjIaJFrRJy3%2BRUvvgXXA%2BKaYT1hDanBoK7Rsaer7uuCZKL1zaGF3xihbi%2BS4tegjm32tylh8k0ER%2FIUccNCnJu6nq%2FTYMIktSDtyPPrJ%2BM1pYdZzMCU0sPpp09lrTSMpRFED1m6c2Igmj7qN29sxzXEYVADs%2BjyxAMA64eGaT%2Bq8EJTDomUJQDKYCrZXqxTBoyc4W9aY0GEcdv6eSHdosNMKyLGhV791tYf1JrZktIgVFOpNNuWgE4l6X%2FsYFxJljniaiJNx8t3%2FnLpfCACbBzHAIX9GE00J1xt8oOOux3VFSP7bYvGQvLNvKgF9%2B3jfkIptq4a4Tqf0odcVtIWYovkUnQ2HZ5ItR5TnYrnr2fXPHPxXcfVTHiIyL8eL6gwloKRwAY6pgFajedCJNu9jJwHmacyx%2FFdeGeo2Uv0OToADg8LXjcBJYaeAE2LgAx52i9%2BkJQARJLiXNaHc6CzQ0B1GgSkMSWaWvfVbDi50IDf7ulq2PDoSe6YRKsNRI6%2F1hHLvJl2fQ344%2BsyI2GEHFmu11D8sNf%2Fekf1Dw78pdA8Q0zz2oSV86ynBjV%2BzefU89USgwdIylhSpeKPRJ8VxGIVjNuPxxMJXdCTCrAf&X-Amz-Signature=7e4f194bf4507c3435e9687ac42dec2f97b2e75b74361df5e8fc744e3d2d1d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643FS6A6U%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEsHuWqOmQbj5aQxgL%2BfdA05IGBmMx958RvrApX231tkAiBZ5%2FnNfU7Kk6liIBvw66EU13ixshPdizCGNllXxuDrgyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnMIz9aNpmRzm5LQoKtwDlTdD2KdxI6OPCogHgk6hHO1q%2F9QYKiDWK320zu7PyClpzD%2FvQhXgsdtmzWvufjnsUMViJ6i5G3%2FrsmDCbD5rZdyEFkH%2BDkDQSL9CqSe3cMseRbKXo7k6QIpsv8tH5hntfarzuOR45sQVTVfgNWL8cJQ0e%2FlRFlqXkGw0nCNYgmTWuEIEpRlai1OTW90EH0gjOFFAlly6wZvBJVATDiqqHOHe47eleJ0BNFeaGaHjNuQBkRD3c%2FGCGqUKFeUVjXjIaJFrRJy3%2BRUvvgXXA%2BKaYT1hDanBoK7Rsaer7uuCZKL1zaGF3xihbi%2BS4tegjm32tylh8k0ER%2FIUccNCnJu6nq%2FTYMIktSDtyPPrJ%2BM1pYdZzMCU0sPpp09lrTSMpRFED1m6c2Igmj7qN29sxzXEYVADs%2BjyxAMA64eGaT%2Bq8EJTDomUJQDKYCrZXqxTBoyc4W9aY0GEcdv6eSHdosNMKyLGhV791tYf1JrZktIgVFOpNNuWgE4l6X%2FsYFxJljniaiJNx8t3%2FnLpfCACbBzHAIX9GE00J1xt8oOOux3VFSP7bYvGQvLNvKgF9%2B3jfkIptq4a4Tqf0odcVtIWYovkUnQ2HZ5ItR5TnYrnr2fXPHPxXcfVTHiIyL8eL6gwloKRwAY6pgFajedCJNu9jJwHmacyx%2FFdeGeo2Uv0OToADg8LXjcBJYaeAE2LgAx52i9%2BkJQARJLiXNaHc6CzQ0B1GgSkMSWaWvfVbDi50IDf7ulq2PDoSe6YRKsNRI6%2F1hHLvJl2fQ344%2BsyI2GEHFmu11D8sNf%2Fekf1Dw78pdA8Q0zz2oSV86ynBjV%2BzefU89USgwdIylhSpeKPRJ8VxGIVjNuPxxMJXdCTCrAf&X-Amz-Signature=1645b3eb07e0af4d346b90c65db33b96edfb13c4f5a386fe6949e707904fa4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
