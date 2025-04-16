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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVUYE72%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi7i6ujf8g4Z%2BwtHP02zjAycR9VuphJ7Ho%2BxxStpZvAAiEAo40ddIyK9811aym1XDsFQ2vuNV%2BnLBNdj7muIIogHckq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIKR3fX3bVvXqF3nXyrcA4hJBnFBqCfZvpw6uahO32ebVDZ0g4yDVmGiu7sj3OzC%2FO%2Fvx6XfGIAjDhdO0CJ5VXWg%2FWY6nwzy%2BREm0HHHTgtfQc5d3rI18253vh7op6DqPnruNBTpHaPfXB15D4DXp%2BS5Xy4TYqPj%2FPrK2%2F10fHmuVvHwptuwcC8KjylCheJ21fUC3wkF%2FEnMQbh99iHuICHVzsvmsYmxRXvzHb%2FG0cacYFGVqR7aXJHaZyPYbwKkd6C83B%2Bx1IfL2l%2FQicT6oXNH2BL0K3ztSK0Ujk2cstFw993z%2FCuO8rxC0l%2FuNKhC2ZNLG4kzmlYhr8LEZEN7ArE4oVuF42emoU0rJzXXQQQcI0NuSYcaOo5EcqTpa7PxwYh91iB5T%2FqOIT72HfC%2Btxjbaip2O8J8i6UeU%2Fz0KDPMIz9IE%2F1u0CArwJB0ef5iV238pKWc3F%2FJRiK2RqJuAFCF%2FR6dsybMnCkRqwZ2frZfgxziKWid3N3lBLvH1XQOtWoOvho7P0tzC2VLntphwdWiWZbyeVHsm6xqT13%2FIdlWhCnGXNmQ1dEmnDvRQsIDTfltkTpdoPpm8%2B0NFPQe%2FpvND%2BIWzR04BaxqZ4vQ28aLEaOBtgLhtF6epLLO7prpWAt%2BDLWUBYhwniD1MMvZ%2Fb8GOqUBRqtn16HgY4ZmmbO7ofWg5ixk4V%2BxIh5%2Bux%2Fvq0ToucuJ%2B93FA3TPzEE8enz9TGXVoV6V%2FYOPOL3KZhXGWzJfVL3x41DLBEYoi8uabDEEpQTixLux7lkdryDNs0esmOXCJK1p0DbekfL%2FBvZV5eAN9JV%2BmEQwpTP0bk%2FT8qMaR%2FIwYQ0KdbGFsyVLGUrQu4d%2BjIXlKKdiUvokDwxyCsQODiD3RKJx&X-Amz-Signature=82e6aa7dcaeba9987a603bcfeb97d101ecd724b747ebaccb395934a02c010c95&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVUYE72%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi7i6ujf8g4Z%2BwtHP02zjAycR9VuphJ7Ho%2BxxStpZvAAiEAo40ddIyK9811aym1XDsFQ2vuNV%2BnLBNdj7muIIogHckq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIKR3fX3bVvXqF3nXyrcA4hJBnFBqCfZvpw6uahO32ebVDZ0g4yDVmGiu7sj3OzC%2FO%2Fvx6XfGIAjDhdO0CJ5VXWg%2FWY6nwzy%2BREm0HHHTgtfQc5d3rI18253vh7op6DqPnruNBTpHaPfXB15D4DXp%2BS5Xy4TYqPj%2FPrK2%2F10fHmuVvHwptuwcC8KjylCheJ21fUC3wkF%2FEnMQbh99iHuICHVzsvmsYmxRXvzHb%2FG0cacYFGVqR7aXJHaZyPYbwKkd6C83B%2Bx1IfL2l%2FQicT6oXNH2BL0K3ztSK0Ujk2cstFw993z%2FCuO8rxC0l%2FuNKhC2ZNLG4kzmlYhr8LEZEN7ArE4oVuF42emoU0rJzXXQQQcI0NuSYcaOo5EcqTpa7PxwYh91iB5T%2FqOIT72HfC%2Btxjbaip2O8J8i6UeU%2Fz0KDPMIz9IE%2F1u0CArwJB0ef5iV238pKWc3F%2FJRiK2RqJuAFCF%2FR6dsybMnCkRqwZ2frZfgxziKWid3N3lBLvH1XQOtWoOvho7P0tzC2VLntphwdWiWZbyeVHsm6xqT13%2FIdlWhCnGXNmQ1dEmnDvRQsIDTfltkTpdoPpm8%2B0NFPQe%2FpvND%2BIWzR04BaxqZ4vQ28aLEaOBtgLhtF6epLLO7prpWAt%2BDLWUBYhwniD1MMvZ%2Fb8GOqUBRqtn16HgY4ZmmbO7ofWg5ixk4V%2BxIh5%2Bux%2Fvq0ToucuJ%2B93FA3TPzEE8enz9TGXVoV6V%2FYOPOL3KZhXGWzJfVL3x41DLBEYoi8uabDEEpQTixLux7lkdryDNs0esmOXCJK1p0DbekfL%2FBvZV5eAN9JV%2BmEQwpTP0bk%2FT8qMaR%2FIwYQ0KdbGFsyVLGUrQu4d%2BjIXlKKdiUvokDwxyCsQODiD3RKJx&X-Amz-Signature=e071b7582eb485559645a27cc3087eb0b0abd99209e85507a046dd0a9482f177&X-Amz-SignedHeaders=host&x-id=GetObject)

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
