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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WENMUA7R%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY5Ajd6l0wMMre2IPKn6Pxynl2fbA4cx4U2wyLPiBJ%2BAiA8pwsxIQ2k6LDkOCxGWsNpDVV%2Bq1QCN1J%2FR05gKLSsBSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYf0nOmguk%2BsSSdQSKtwDNXKsY4Or3MMxsQiJRLtvl5On98%2BmjBB8kpr55xl0TR4Xy4RN1M51Fky%2BxKDkrxSkj%2BlzYkpS4Ub2GYCvQyAcTFRmoVGXIgSlmhuVojVa5OWaLM9Idlj%2BoOQB1f0EdVsPLH6sGrI212VSlAJfP2aUO97WeKOHydMyMzgwH2LYZmNyLdvNfm2bFqLTRqGHAKdAkunf5xej297ogbIkSPYU0qR1MDt4rGG75mEpafqg20YS8pQ%2F2o3lI1I7G0uxf0%2FwGD%2BjUKtWOdStGCbPxMRKLxzbLdd3RaiaIytZqcinXudSBG%2FwSyA%2FrGaJGi4Bb6LbCIvIgNemsQY4YI9MYJDr%2F8aw0nJdZGDuSpOYNST1W7CyrIt4hXq%2FwRHjV6lzv%2BKpwbrJyK34Zv%2Bb5iFX%2FKqlBpIU3pXRibJzW4L6pAUibcnSNKVuE1cC0wyJuVsiWJs9avvjrKP9Vvl7CMY5qyDj9uKnCYGrKmD8aFoISUxjow1Gru4uP6GdN9WNjq036pmfWUR51F0RJMvBHDoh5nCu9Kr8C8E1hbReMSDsw3A0azWesd%2FWlNoUzT5ZWzEf3jrLvw5tP9skrBg3lsdHolytAROok3Nv%2Fj784ICo0SI2ySsMncQFE%2BAbwMFA9agw1qPsvAY6pgEAaFdwndfe6Ly5MU8OX88Slx4P5pXWc0q6t52Ar6v90qXNdnYCUDvP7Iyg4KemZo7FS7HAupb9ZR8VAoR53QhKIxfc6GbY%2Bz2BzAA9EZMdCiNkKKFYj6AW51CILSpCFQf0il51790V21f6ji%2BSLxXWBphGzAInkxW5C2rUnSX%2BdPeLoRK5bNZhqD7wfJacQXMUSp17MoeRrVd0dtrlJnSBfdF0pD0c&X-Amz-Signature=42e72c2571b41b12b563de017ab06c71dc1d03574677162d799bf53f866e5797&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WENMUA7R%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY5Ajd6l0wMMre2IPKn6Pxynl2fbA4cx4U2wyLPiBJ%2BAiA8pwsxIQ2k6LDkOCxGWsNpDVV%2Bq1QCN1J%2FR05gKLSsBSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYf0nOmguk%2BsSSdQSKtwDNXKsY4Or3MMxsQiJRLtvl5On98%2BmjBB8kpr55xl0TR4Xy4RN1M51Fky%2BxKDkrxSkj%2BlzYkpS4Ub2GYCvQyAcTFRmoVGXIgSlmhuVojVa5OWaLM9Idlj%2BoOQB1f0EdVsPLH6sGrI212VSlAJfP2aUO97WeKOHydMyMzgwH2LYZmNyLdvNfm2bFqLTRqGHAKdAkunf5xej297ogbIkSPYU0qR1MDt4rGG75mEpafqg20YS8pQ%2F2o3lI1I7G0uxf0%2FwGD%2BjUKtWOdStGCbPxMRKLxzbLdd3RaiaIytZqcinXudSBG%2FwSyA%2FrGaJGi4Bb6LbCIvIgNemsQY4YI9MYJDr%2F8aw0nJdZGDuSpOYNST1W7CyrIt4hXq%2FwRHjV6lzv%2BKpwbrJyK34Zv%2Bb5iFX%2FKqlBpIU3pXRibJzW4L6pAUibcnSNKVuE1cC0wyJuVsiWJs9avvjrKP9Vvl7CMY5qyDj9uKnCYGrKmD8aFoISUxjow1Gru4uP6GdN9WNjq036pmfWUR51F0RJMvBHDoh5nCu9Kr8C8E1hbReMSDsw3A0azWesd%2FWlNoUzT5ZWzEf3jrLvw5tP9skrBg3lsdHolytAROok3Nv%2Fj784ICo0SI2ySsMncQFE%2BAbwMFA9agw1qPsvAY6pgEAaFdwndfe6Ly5MU8OX88Slx4P5pXWc0q6t52Ar6v90qXNdnYCUDvP7Iyg4KemZo7FS7HAupb9ZR8VAoR53QhKIxfc6GbY%2Bz2BzAA9EZMdCiNkKKFYj6AW51CILSpCFQf0il51790V21f6ji%2BSLxXWBphGzAInkxW5C2rUnSX%2BdPeLoRK5bNZhqD7wfJacQXMUSp17MoeRrVd0dtrlJnSBfdF0pD0c&X-Amz-Signature=150a6a22795594f8c5b54cc5eb531063115d14c8b230318b47c3d61a251c4b38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
