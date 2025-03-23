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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5G5BYX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDZBfLaJIZxFyWCqdz6goh2bi6UEAayS0MzWoJmCgjprAiASjX1k8ZelG2MuoQln5RfLZZ3Jqc2cns1MGpPB0u69AyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXCZH%2F%2FU%2F14KnDZKtwDDIPO%2Bj7ftUf3izyTGS20wK%2Bu0teKfioCQZV7Kl3%2FMWns4DHUue8A%2FgrvlNmWGzS3ru2AsOnZ%2BhC%2BclARmc3IkVA%2FwepxEkXL7FyykpfzOR7yWp0b1pfiBzJX%2B%2BupTu1djbcWD5CtZU4M0fuy%2B2hpgMbYwVtKrQoPZ02QHLpVOBt7Ng9JEcNemlBbyXe%2FAZrmFF%2BMahXXLGLRPXk9f4Joi5NU327wn6b%2FFGbbWMbtMWgDmdS1stYagYzy7KBB9ZdLMK65qU6bUTlar2ed1Gn%2FEbbxqM8dOvqpawfj3qBE%2FLA1VQ6GWse8RrnW9X16CirxDQxesNeg%2F96XF94Qs3xIR8IFfoTgtP4PlaqVvIiD4L%2B%2BNOvIfv%2Fn%2FGeGZmZ%2BTwwUqQWrIdU6GDhCY5naijOTsg91Bb5jomkH4QQvmD5s%2BifmhzFFnDwkKOGrf84%2FZvOMlQEOmHGerq9RPx1gRlBkpA0FfMzOKGUOO2817ariAhADAPeeXSeR%2B8o86Qqm4PyCU1cAamj7q2KlyItgGxWrQmnbhJuG95YJjgiDWgKHchKCjEJeJlPoajRpabG%2BUtp8z0ltUsyScCzvXvtXASItj3Yz1gtSFuj8kHnWF8jsj84ChkhIIhAPYt0%2B%2B5Aw6OL9vgY6pgFrOx7llMjU0clGrEyCS94ayKrGY8rN6hnqfWeyXqK9C3aKuAmZQrfAvO2oPXJmlTv0rHhx5EUDfaAOLjkXbUOwGAlE7HEiC9%2B8R6lP9jedsTgpmIOm7XAsfd5fWaRuzQcOTS5LPKq1Exz6%2BYISAN8KKAWLqoj8RonRAsxhdcRKAJG2t44nKMNSihVWIW0JD1InKb9T2Roc0vBZndus74I645RPtptH&X-Amz-Signature=63ee7801f8d726b47cba2e295cde35f51722c7d1362a0f772e1f9dbc34161853&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5G5BYX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDZBfLaJIZxFyWCqdz6goh2bi6UEAayS0MzWoJmCgjprAiASjX1k8ZelG2MuoQln5RfLZZ3Jqc2cns1MGpPB0u69AyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXCZH%2F%2FU%2F14KnDZKtwDDIPO%2Bj7ftUf3izyTGS20wK%2Bu0teKfioCQZV7Kl3%2FMWns4DHUue8A%2FgrvlNmWGzS3ru2AsOnZ%2BhC%2BclARmc3IkVA%2FwepxEkXL7FyykpfzOR7yWp0b1pfiBzJX%2B%2BupTu1djbcWD5CtZU4M0fuy%2B2hpgMbYwVtKrQoPZ02QHLpVOBt7Ng9JEcNemlBbyXe%2FAZrmFF%2BMahXXLGLRPXk9f4Joi5NU327wn6b%2FFGbbWMbtMWgDmdS1stYagYzy7KBB9ZdLMK65qU6bUTlar2ed1Gn%2FEbbxqM8dOvqpawfj3qBE%2FLA1VQ6GWse8RrnW9X16CirxDQxesNeg%2F96XF94Qs3xIR8IFfoTgtP4PlaqVvIiD4L%2B%2BNOvIfv%2Fn%2FGeGZmZ%2BTwwUqQWrIdU6GDhCY5naijOTsg91Bb5jomkH4QQvmD5s%2BifmhzFFnDwkKOGrf84%2FZvOMlQEOmHGerq9RPx1gRlBkpA0FfMzOKGUOO2817ariAhADAPeeXSeR%2B8o86Qqm4PyCU1cAamj7q2KlyItgGxWrQmnbhJuG95YJjgiDWgKHchKCjEJeJlPoajRpabG%2BUtp8z0ltUsyScCzvXvtXASItj3Yz1gtSFuj8kHnWF8jsj84ChkhIIhAPYt0%2B%2B5Aw6OL9vgY6pgFrOx7llMjU0clGrEyCS94ayKrGY8rN6hnqfWeyXqK9C3aKuAmZQrfAvO2oPXJmlTv0rHhx5EUDfaAOLjkXbUOwGAlE7HEiC9%2B8R6lP9jedsTgpmIOm7XAsfd5fWaRuzQcOTS5LPKq1Exz6%2BYISAN8KKAWLqoj8RonRAsxhdcRKAJG2t44nKMNSihVWIW0JD1InKb9T2Roc0vBZndus74I645RPtptH&X-Amz-Signature=388aafe03db122ec6a56c03cbb3afd85316eb9c21ad76657436c97f8abe181b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
