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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFMCWTH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkh4uDckWtRRwXtpC%2FEt2uHhSsaOOlYeoYmAfnm5PHkAiBPsNnKdeZYa0%2BePoyQJfU7DH1SMW3fHyKhd6AOJtdZ7Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMndIF24lLwQ10%2FtPpKtwD7hMtqVDFCpYaOfuaRzeM9eEXJCYApUNA76h7SLqfj%2F3TX3mAJUmux%2FeAC0Yp15gqgW%2BYMTRE24V2uANmnWotItzSQR3BpmgrqcRJSFATaV8SvxJS%2F%2FT%2F5OvSOtdh86uZM%2Brcs0qAnjAsbmCRBE2Jt%2BnW%2BE5qdsYXZYyLc6xAuuEvRQE9jW0Rb19gcQ0%2BfagrvODI5rGzsr5qwSMA4QuGbSZOSSLorfW7AWQOBCtCCYpKhqkvozUk4xMd0imyf13Bm6eCqAtLL6J9fsZ9Yb1fDEvjcz1fvBsRrzVzFe5mh7yfvQJ0f%2FjyDLBsHt%2FP6FEgyPbLHS9Ae%2BXm0fB8PyTne7Hkn37SeaqjEfWHXf%2BeeNpNtD4gFVC2bc8pO9Uk4UpAlLtnoRv6fdFKaojI5g5B23iRDBqXLc%2FbUZoZJNkJMl9UplyZBS5Uj6fbXxjbBH6O9Lxlcu%2BuSGhTiGuvGF22Z1GkRDqbP2Idp8X8Kun4NxYga8AutHtZlOB%2Bbt65q8E%2FOwO36LgDGyq4gklMf0xEF%2F9wLhnpgULmTUx9xVjoQZiKxQHOOd%2BRXk5j%2FNuuIXhzKTOfXDYixCjWB9%2FkU0YsH1Rsw%2Fkrnce08CM5wo6uwKKLcwtwYpMTSqjANP0woMDivgY6pgEoMEtXObD0fWXSNlCMNlzemvzWJuq0xCsPoO2BNskDZvr5D4S1RsJZnl5EC5lTJW%2FKBaBzLA2u03WSsfnvvRES2Ptbaf6znqd%2B8lURVndu1GhRVbNd6CNYmI0I3%2B84SpesE%2FXqgP7fqp4OcOj%2BTu6OTBtqzfXEzooi7ioxXUSKmaO%2BBcviRk3Qd928MZ9aGuzk6GSUK3ExfBz5ZgBclQP6Bl4vyMc6&X-Amz-Signature=609e8543edf207063eab8e88992d78dc512e6ade4b80ade3de6e28dcd2c5b489&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFMCWTH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkh4uDckWtRRwXtpC%2FEt2uHhSsaOOlYeoYmAfnm5PHkAiBPsNnKdeZYa0%2BePoyQJfU7DH1SMW3fHyKhd6AOJtdZ7Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMndIF24lLwQ10%2FtPpKtwD7hMtqVDFCpYaOfuaRzeM9eEXJCYApUNA76h7SLqfj%2F3TX3mAJUmux%2FeAC0Yp15gqgW%2BYMTRE24V2uANmnWotItzSQR3BpmgrqcRJSFATaV8SvxJS%2F%2FT%2F5OvSOtdh86uZM%2Brcs0qAnjAsbmCRBE2Jt%2BnW%2BE5qdsYXZYyLc6xAuuEvRQE9jW0Rb19gcQ0%2BfagrvODI5rGzsr5qwSMA4QuGbSZOSSLorfW7AWQOBCtCCYpKhqkvozUk4xMd0imyf13Bm6eCqAtLL6J9fsZ9Yb1fDEvjcz1fvBsRrzVzFe5mh7yfvQJ0f%2FjyDLBsHt%2FP6FEgyPbLHS9Ae%2BXm0fB8PyTne7Hkn37SeaqjEfWHXf%2BeeNpNtD4gFVC2bc8pO9Uk4UpAlLtnoRv6fdFKaojI5g5B23iRDBqXLc%2FbUZoZJNkJMl9UplyZBS5Uj6fbXxjbBH6O9Lxlcu%2BuSGhTiGuvGF22Z1GkRDqbP2Idp8X8Kun4NxYga8AutHtZlOB%2Bbt65q8E%2FOwO36LgDGyq4gklMf0xEF%2F9wLhnpgULmTUx9xVjoQZiKxQHOOd%2BRXk5j%2FNuuIXhzKTOfXDYixCjWB9%2FkU0YsH1Rsw%2Fkrnce08CM5wo6uwKKLcwtwYpMTSqjANP0woMDivgY6pgEoMEtXObD0fWXSNlCMNlzemvzWJuq0xCsPoO2BNskDZvr5D4S1RsJZnl5EC5lTJW%2FKBaBzLA2u03WSsfnvvRES2Ptbaf6znqd%2B8lURVndu1GhRVbNd6CNYmI0I3%2B84SpesE%2FXqgP7fqp4OcOj%2BTu6OTBtqzfXEzooi7ioxXUSKmaO%2BBcviRk3Qd928MZ9aGuzk6GSUK3ExfBz5ZgBclQP6Bl4vyMc6&X-Amz-Signature=d6a0734252c8febae37e0d67a02a7ba48f61288458d93cf4ecc7b2736ad93321&X-Amz-SignedHeaders=host&x-id=GetObject)

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
