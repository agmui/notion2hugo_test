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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV4FN7S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BWwVLkn2xgZGQ1nAjFZxbXNawzHc3xdTE7BmPBiqlVAiEArn3Fk%2BlPilLzyNKkiRl2Sa1wYzzJve3%2FgMNIwFiSnGUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDK95xrdzkSbDqCklESrcA1c31Q7HfhbSslfZ18JmR7yEEBFTjs5vSmUFzkG6IQxcXi9jfnICEpvYjgXxgOfr6m8Rd9yOoTn3vnik3CUFx15%2BDDLuSrGzXmQ%2FwQtAi1A0Cpo%2FgnZ8Rmem%2BSazzuDg%2F6i7mgvCiZQfD1nHak93noHjCHwRfnyey11Fs01YT6%2FkOPePbHo9SxHraTJLtFheymFxDReqXDAsIw59Od%2Ba2S5BQFQ2Q8m3%2FqWcuKwKOi7ef877c9j1seOuwOLHjudZ1Km1nCn2NcghjJgKJ7MUpfbnSsdeXg811XbfR%2ByAfedsXratIg%2F7ifAlPwqtACwcElOQ2KRcSuv8m0QBElD5U8ABs8ajs7sS1xg908%2B18HuukHnl6c26Rdo5ntwx%2BG7Qcz9qzyYq0p9nVfUyZRE6OSSY8NUDCERG%2F%2FE6ZUCoj3GhPMfEF11GmspgnSH5aaiQfJ4l%2Fr9iENsQ8NUgue6h8JdeIIROQWQiMKOs5dEzbkqJBCF491%2BBj89zH7VkVa%2BSrlj5DLS7KiuRJnZnywX%2FDs1pB%2Fdtxu99j48KRuWkW2b3yJ97G24q7Gsz4aYuiqHWvpNcbt45qAFqOOI2lKZ5EadJKuy99uoZSnxH1ZQbc%2FBMdnqduPFYw6r0AL7PMKTSvcQGOqUBJnitakEsLF6PluoLVhTXV31lfUvQ3qCK%2Fe2PRwHG2oiYHTtn32NIJqNmbM5m177iOL0eHu%2BQbbRLNvzFAvbYGRt5pd6dYlaxj4qpjFITJW8SEaMd6cB07AICkEUoq8q%2BJYuc3aBFM%2FrGAcAzQ6v1q2a0Cx4sFy25aplVQGEtasLVrNMdBO52eZ6yr9NafVuO4ix533xhYd1ydM928IsT5viKnn5l&X-Amz-Signature=3e512d223951b3aa2b37254b44a7a6c1aafad0903aedac0a9df0c629926176e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBV4FN7S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BWwVLkn2xgZGQ1nAjFZxbXNawzHc3xdTE7BmPBiqlVAiEArn3Fk%2BlPilLzyNKkiRl2Sa1wYzzJve3%2FgMNIwFiSnGUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDK95xrdzkSbDqCklESrcA1c31Q7HfhbSslfZ18JmR7yEEBFTjs5vSmUFzkG6IQxcXi9jfnICEpvYjgXxgOfr6m8Rd9yOoTn3vnik3CUFx15%2BDDLuSrGzXmQ%2FwQtAi1A0Cpo%2FgnZ8Rmem%2BSazzuDg%2F6i7mgvCiZQfD1nHak93noHjCHwRfnyey11Fs01YT6%2FkOPePbHo9SxHraTJLtFheymFxDReqXDAsIw59Od%2Ba2S5BQFQ2Q8m3%2FqWcuKwKOi7ef877c9j1seOuwOLHjudZ1Km1nCn2NcghjJgKJ7MUpfbnSsdeXg811XbfR%2ByAfedsXratIg%2F7ifAlPwqtACwcElOQ2KRcSuv8m0QBElD5U8ABs8ajs7sS1xg908%2B18HuukHnl6c26Rdo5ntwx%2BG7Qcz9qzyYq0p9nVfUyZRE6OSSY8NUDCERG%2F%2FE6ZUCoj3GhPMfEF11GmspgnSH5aaiQfJ4l%2Fr9iENsQ8NUgue6h8JdeIIROQWQiMKOs5dEzbkqJBCF491%2BBj89zH7VkVa%2BSrlj5DLS7KiuRJnZnywX%2FDs1pB%2Fdtxu99j48KRuWkW2b3yJ97G24q7Gsz4aYuiqHWvpNcbt45qAFqOOI2lKZ5EadJKuy99uoZSnxH1ZQbc%2FBMdnqduPFYw6r0AL7PMKTSvcQGOqUBJnitakEsLF6PluoLVhTXV31lfUvQ3qCK%2Fe2PRwHG2oiYHTtn32NIJqNmbM5m177iOL0eHu%2BQbbRLNvzFAvbYGRt5pd6dYlaxj4qpjFITJW8SEaMd6cB07AICkEUoq8q%2BJYuc3aBFM%2FrGAcAzQ6v1q2a0Cx4sFy25aplVQGEtasLVrNMdBO52eZ6yr9NafVuO4ix533xhYd1ydM928IsT5viKnn5l&X-Amz-Signature=c2fd1d8440e5ace65d19e8de35fc4d55bca5dd6bcb13642ee766a7f399298d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
