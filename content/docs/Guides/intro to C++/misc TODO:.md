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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNT5EDDO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCID9F1ylC58lG%2BqTMiAG5ChGfXGbGQc%2FwkwuO5P1CcB4hAiEA8yCyze7p3DH3CzGj5%2FHWLmadmHQ7Bw0p1VUoMcuOUDIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXLVLOQ3HZ%2Bspo14CrcA6x5ZRsIvY%2Fcds2C0OOsM4rWFr4xaCwRTx%2BTCM6bmqzM%2FW5mSLaR6Nu6FxwVeSWeuCLnNZot1pbMioDcXxQDQTvJWfrkhZ65B3nuT8wa4VGtwzyWBmnV7Q7USIXrqw2WOawDKVexFuTGhQJFNg0nL25VOQLMCCJuVUFGFqEA2Oj8zWWOfrisH5DdGbLzD3009UtCFoVqwC7CHWvXlFEzJIATsZvPmo4LNS0b7hTLv%2BtqonzgiQ5IGRv1e9vyfWdP5LizhvP2ocvzOmCtwJAXLFxf1cR29e7KGICBPLu7FANaLu8hASyfz6Yd2H4SEVkCPJYJBVw01HCvXmheqlSj5%2FXaWjnbgfh%2Bc3XE7vUHeOAK0oXOjjxxmM0dD0xAdsoLiAH9jOyZfr%2BGNubHexC%2BYSXM5bOyAJ3OfCgT2KcIKKdEGcnvAcwQJSVJyDeKxKI2FxDi9qDdK0j7Zmpsh2GEDGLlXs7WgubLUg7QGjwarlgwX9H5cnh48vIIkhn8e%2BnHYA246ItK94PPaKEwxUcCqAgfZDMmRF4Yr8e6LcewHlk8YhnaDOC6NInPmphoCX8PnibbtecbtCoi2pNQ1fcp1PniIRTdoXzgffQ2%2B0BC9abcIMVu2xXqeRdg7bRqMKqQir4GOqUBWNZS9RVL4WcIx5IohZAQ1PRO0LcFwgUymjDk%2BadwtwDmEA0O3Knl77oEKwmaexqjjsNDfax9w7HuDq3LuXL6jjfxhlMcrT0XKZKlNjxp08CmPf5uF9PU7bfaSD59XD4WYqz59a1kvujWvAtKyiC%2FADVZxkyqy6bS6A7rbO5L2Xl%2Fw487hgTxcsq95x2oTQiwkDvZjpO%2FF93p7Q4RAM2igMb3PfIf&X-Amz-Signature=9e559f5fe06130b2af7c8bde0dd264800d945868ba8dea8feb01b6c8894cb322&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNT5EDDO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCID9F1ylC58lG%2BqTMiAG5ChGfXGbGQc%2FwkwuO5P1CcB4hAiEA8yCyze7p3DH3CzGj5%2FHWLmadmHQ7Bw0p1VUoMcuOUDIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXLVLOQ3HZ%2Bspo14CrcA6x5ZRsIvY%2Fcds2C0OOsM4rWFr4xaCwRTx%2BTCM6bmqzM%2FW5mSLaR6Nu6FxwVeSWeuCLnNZot1pbMioDcXxQDQTvJWfrkhZ65B3nuT8wa4VGtwzyWBmnV7Q7USIXrqw2WOawDKVexFuTGhQJFNg0nL25VOQLMCCJuVUFGFqEA2Oj8zWWOfrisH5DdGbLzD3009UtCFoVqwC7CHWvXlFEzJIATsZvPmo4LNS0b7hTLv%2BtqonzgiQ5IGRv1e9vyfWdP5LizhvP2ocvzOmCtwJAXLFxf1cR29e7KGICBPLu7FANaLu8hASyfz6Yd2H4SEVkCPJYJBVw01HCvXmheqlSj5%2FXaWjnbgfh%2Bc3XE7vUHeOAK0oXOjjxxmM0dD0xAdsoLiAH9jOyZfr%2BGNubHexC%2BYSXM5bOyAJ3OfCgT2KcIKKdEGcnvAcwQJSVJyDeKxKI2FxDi9qDdK0j7Zmpsh2GEDGLlXs7WgubLUg7QGjwarlgwX9H5cnh48vIIkhn8e%2BnHYA246ItK94PPaKEwxUcCqAgfZDMmRF4Yr8e6LcewHlk8YhnaDOC6NInPmphoCX8PnibbtecbtCoi2pNQ1fcp1PniIRTdoXzgffQ2%2B0BC9abcIMVu2xXqeRdg7bRqMKqQir4GOqUBWNZS9RVL4WcIx5IohZAQ1PRO0LcFwgUymjDk%2BadwtwDmEA0O3Knl77oEKwmaexqjjsNDfax9w7HuDq3LuXL6jjfxhlMcrT0XKZKlNjxp08CmPf5uF9PU7bfaSD59XD4WYqz59a1kvujWvAtKyiC%2FADVZxkyqy6bS6A7rbO5L2Xl%2Fw487hgTxcsq95x2oTQiwkDvZjpO%2FF93p7Q4RAM2igMb3PfIf&X-Amz-Signature=99d1814b950718152a7274225dcf4241a1dfa99c936a6cb79eed140c4158e2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
