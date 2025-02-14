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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LKQ44J7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDT1k1f0GnNfKJaZoMEQKWsWLxsgJxOyGNSX7lPbIcmcAiBaI%2F8G0DCLV%2BYWCOMT%2B0N2YWPG9QXS8%2B89a6zRxjpi9Sr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMkNKVMCOCTJnG1m3NKtwDs8Sy%2B3gZJkc8DibE4rE5J%2FeZ5DeiOo2KYVuTAvsTPvn%2F2K5hA3Stp0deC401%2Fa%2BFho6WInOsaufC10kT9n8vPnDoC8tXt3csfk9CLV5An6va5le6nYrmjS1ZZzNBNCPLxyWFW8pb8BvG%2BWKKYciQ7U9D2SlqkmDaVAJuEjg0wWmsQLWobJLAHgR%2FiDxmJDQn2cvLVNQuHaASFStl0NAKCXInK0biNUK3nvGE4KcY6BG9rc0dJAvRBDyHSeDW4lfxkDxMcmv0Rud75ZemsdjiQrflCgs%2Fjcjo2MqzpFyAyd6swkISTVq%2BwYHI3lc4XpWW71bOZTkeYuo%2BKkjsd0obiXqOrE705fPd1i9ckZdG7TvfpsZQcmwoB%2BJVd0Q27ZQIY5TaqIt1p0nalNburi%2FzGDDuv8Ou3pRmQ%2FxL%2BX4d%2Fmv9t53a7as6GJAbTfjJJLqdZmgiZSVp97gYDiIiDzlNGE21n9tdeZgELIQ%2FVugD8vlKxwjTfRWsm7keJvc%2FY7kvR81ieEdrrt2LAIvLzdbOf7y1%2Fpkz%2FmjDGYqzJgXNLC1ho1xoatc7gYhysLw2tqp7MWfMpGl%2FXOJzeX3XNxh4hAVaT1F85AdeWJQ7L%2FlaJjA12YAU9lS9Bi1Zm%2Bkwiuq7vQY6pgG0%2FeHZYsQ4%2BrA5Y2z8g7QVzUzJExekpJSKm0%2FDshgJGO7XwhBSQqLpwpsSkXe%2FizsBVk%2BYIOLGJlS5uvmVWG%2F%2BGcFmbz3pg7g5yWqchjPV5v%2FCn5dtJWUmYK6qGsKh9iYHKRMsZqhSNPXfU7BZaoI6LEhnuvrVt4wkyFi%2FyrNFIb%2BnNn33mV%2BODCeYW1WS%2FupJZkBT%2FRW5Z0rzifuMbAP%2FoL4P%2BaVo&X-Amz-Signature=47bf11d8b943c37340cb6bb6ccd991f882f654825275994b754c5666b276d230&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LKQ44J7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDT1k1f0GnNfKJaZoMEQKWsWLxsgJxOyGNSX7lPbIcmcAiBaI%2F8G0DCLV%2BYWCOMT%2B0N2YWPG9QXS8%2B89a6zRxjpi9Sr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMkNKVMCOCTJnG1m3NKtwDs8Sy%2B3gZJkc8DibE4rE5J%2FeZ5DeiOo2KYVuTAvsTPvn%2F2K5hA3Stp0deC401%2Fa%2BFho6WInOsaufC10kT9n8vPnDoC8tXt3csfk9CLV5An6va5le6nYrmjS1ZZzNBNCPLxyWFW8pb8BvG%2BWKKYciQ7U9D2SlqkmDaVAJuEjg0wWmsQLWobJLAHgR%2FiDxmJDQn2cvLVNQuHaASFStl0NAKCXInK0biNUK3nvGE4KcY6BG9rc0dJAvRBDyHSeDW4lfxkDxMcmv0Rud75ZemsdjiQrflCgs%2Fjcjo2MqzpFyAyd6swkISTVq%2BwYHI3lc4XpWW71bOZTkeYuo%2BKkjsd0obiXqOrE705fPd1i9ckZdG7TvfpsZQcmwoB%2BJVd0Q27ZQIY5TaqIt1p0nalNburi%2FzGDDuv8Ou3pRmQ%2FxL%2BX4d%2Fmv9t53a7as6GJAbTfjJJLqdZmgiZSVp97gYDiIiDzlNGE21n9tdeZgELIQ%2FVugD8vlKxwjTfRWsm7keJvc%2FY7kvR81ieEdrrt2LAIvLzdbOf7y1%2Fpkz%2FmjDGYqzJgXNLC1ho1xoatc7gYhysLw2tqp7MWfMpGl%2FXOJzeX3XNxh4hAVaT1F85AdeWJQ7L%2FlaJjA12YAU9lS9Bi1Zm%2Bkwiuq7vQY6pgG0%2FeHZYsQ4%2BrA5Y2z8g7QVzUzJExekpJSKm0%2FDshgJGO7XwhBSQqLpwpsSkXe%2FizsBVk%2BYIOLGJlS5uvmVWG%2F%2BGcFmbz3pg7g5yWqchjPV5v%2FCn5dtJWUmYK6qGsKh9iYHKRMsZqhSNPXfU7BZaoI6LEhnuvrVt4wkyFi%2FyrNFIb%2BnNn33mV%2BODCeYW1WS%2FupJZkBT%2FRW5Z0rzifuMbAP%2FoL4P%2BaVo&X-Amz-Signature=f569514eeb853a596df9f1d9dd7b2da995062ac70dc4ff8cd650ba447376810d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
