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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPL7WQP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICnaJBOqfpSrwg%2BW2M%2FU4muX%2BvE1ajX0eOY%2BRuxTg3FgAiEAgP2a8CScmMlUFRWYHEtDKyXZ1JAYsiPQ4rsfhLqfXiYq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbT1RcD5szuGUT2sircA1G%2FP%2BRgQcICAVj%2FO%2BFFffmhGoKKN1dwGfcOZwnL8lck9HMflxvveyovPZ8z7ygswQUjVVz02o4w36T0%2B198pjdy7LT%2FczYAc5bhZC4tGmmcmEk04aNmxrQd4X5wHwWdmoPKb92%2B7QPLlt4NYkSE1t27GRp4blyROXX%2Bcvv1mNpsw21rMqi0m7GxM%2FEYh1Ir%2BsgcthIshpO9fm7%2FxF%2FPAiLhR%2FGAt8q2deYAAXCNmjne1WXJgGqFw6xPR%2FGgtGIYtqNjaDYXiHLo3dTgPgfpETCkSfbt97iFS0DcUxAuXN9Oz8z263DzQUdAoqSqj5EyKeEUiGvrhlkz9Oe%2FXV%2FJfvCI3B2CviaRsEu1FB%2FzxvW7IlsjHVyltbJ9nvtbWcGhOWglds4XEvRvvgWiFxmUqWZfvcmo%2FBVdvGrJW1hsz214i5smoC6TiY5lS2JSTiTrFDJDIL8cZcZ9EURDxG6Omm82caiHqOElbLVWTCtFYNYqBttDDXPuhcDEnUiwTVwigdDFkDDrWqL1Y27DXgNYYPrGg%2BlCwrVgp8W8icmQtMfqG5GElktqWtWkTENfnJxtWpLLdap%2BUk5K%2FoYFCgAJOSimXCelMMQoBZ0n5%2FJpRqg9%2BzZUJqoFQew9yjKVMO%2BI%2F8EGOqUBw3ak1r0IrD04%2B4SPLTLnBDVxxwjyf84tVgkW%2BH%2Bk%2FagWdgokbKXtuywA0kxZuNT0zp4NBqZgFO0FWy282UcQMg54FMPsKXS1IMFkrFT9vylnSkF%2B6HcDRwUFwIahWyxdjYB863OU7h2Gq5JXiTmpKnoA7dxA498LlUXkNctV8mkSr%2Faj%2BwgZ%2Fy8GeqVZP%2FRBkKK1tRaAlw2rd45mfwIaUtMJsz0q&X-Amz-Signature=dbadd2ae58de7d150525c4b424fd300ae56af581099513e1d4c49828b46c0c38&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPL7WQP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICnaJBOqfpSrwg%2BW2M%2FU4muX%2BvE1ajX0eOY%2BRuxTg3FgAiEAgP2a8CScmMlUFRWYHEtDKyXZ1JAYsiPQ4rsfhLqfXiYq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbT1RcD5szuGUT2sircA1G%2FP%2BRgQcICAVj%2FO%2BFFffmhGoKKN1dwGfcOZwnL8lck9HMflxvveyovPZ8z7ygswQUjVVz02o4w36T0%2B198pjdy7LT%2FczYAc5bhZC4tGmmcmEk04aNmxrQd4X5wHwWdmoPKb92%2B7QPLlt4NYkSE1t27GRp4blyROXX%2Bcvv1mNpsw21rMqi0m7GxM%2FEYh1Ir%2BsgcthIshpO9fm7%2FxF%2FPAiLhR%2FGAt8q2deYAAXCNmjne1WXJgGqFw6xPR%2FGgtGIYtqNjaDYXiHLo3dTgPgfpETCkSfbt97iFS0DcUxAuXN9Oz8z263DzQUdAoqSqj5EyKeEUiGvrhlkz9Oe%2FXV%2FJfvCI3B2CviaRsEu1FB%2FzxvW7IlsjHVyltbJ9nvtbWcGhOWglds4XEvRvvgWiFxmUqWZfvcmo%2FBVdvGrJW1hsz214i5smoC6TiY5lS2JSTiTrFDJDIL8cZcZ9EURDxG6Omm82caiHqOElbLVWTCtFYNYqBttDDXPuhcDEnUiwTVwigdDFkDDrWqL1Y27DXgNYYPrGg%2BlCwrVgp8W8icmQtMfqG5GElktqWtWkTENfnJxtWpLLdap%2BUk5K%2FoYFCgAJOSimXCelMMQoBZ0n5%2FJpRqg9%2BzZUJqoFQew9yjKVMO%2BI%2F8EGOqUBw3ak1r0IrD04%2B4SPLTLnBDVxxwjyf84tVgkW%2BH%2Bk%2FagWdgokbKXtuywA0kxZuNT0zp4NBqZgFO0FWy282UcQMg54FMPsKXS1IMFkrFT9vylnSkF%2B6HcDRwUFwIahWyxdjYB863OU7h2Gq5JXiTmpKnoA7dxA498LlUXkNctV8mkSr%2Faj%2BwgZ%2Fy8GeqVZP%2FRBkKK1tRaAlw2rd45mfwIaUtMJsz0q&X-Amz-Signature=c0b94206a5cbe5cde4abc7dd9300027d6c70df37634e279bcbfb1c4f1efc4a38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
