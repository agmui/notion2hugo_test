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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP62CKHO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF8QUzFFb5pZ9R3H%2FCpJLB9HtvO0xsZIOxKlmw9zQxmAiBPNcMN3CGEQNsmRjLXKM2OoNIzZ2CGXP%2FE6b6UzLySTCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMBaYO%2ByOzv0EEg9ZYKtwDHJeyuGpMclY9eRPoMPk07E4QKUi5R1ZET7Gpd2bIa9ZopnqbFhqhQI%2BTApNjWsfFeGVpT%2B%2F9euqa1FcPfu0GNX70XqluLRxZNXR8CGMDs5dItNGaMzkLhalpLRj%2FBLjYsQ%2BpII%2BblZ21i2BjXNyMexZHMsmXuCrxjrgHOlXs2XEvZvxJjusUKH5HsVzkk3E3BxIvSmMKffXuVLTmip6SyVvF9mMOXTCjxGkUaOSKjp9TjVlPyeU29PL0VsofvMyIJ87qBXLtduQ7Ra3LcJOdkR%2B75W1SMmAgiFOdsm0P2YZ%2F1Aww3tV4m5uLHQSJc662r%2FPptgDubHrFRSvdDH%2Fl7TGwRsU6P%2FOJwL%2FZBulemrS2nLb3iYLh%2BYjkPwnVaFLIH7bGfNbRh68szrLc1IFyE3epn7VUxT2uPX2nB2jLUElwPv%2FyFRiTKSjmC7lEO1bTx%2B7OZA3ZY0HaPjobu5KafGewvIJN1nCXur4j6KufZLkkzylF31Fj%2BhyBDM6BkaIw8OYD%2Fr90tSgmVtVyWZAiqX3mQDdfjuetllauI59QWT%2F0kLsR2gKu8Kli38Uoeo4a4c%2BkRaK8ijUnP4ZbFtUAZG5flY6mkShtwgM4%2Fmd0xQQRHCZm4HGhPJRExMUwgu7AvwY6pgGGQi4LgrByLhxkLibck4zqDPwMvPlXpKTt9E99a5N9l74FYwdr7Cok5yiDEI1zA%2F%2FSvTqejisZuhKIjcr0Q7ZSm2tA18Ui02XxVsqnaOFaK4SuCztMZRNryVD3BDi9bCBjruT9vvfjwYF4bZJJbG3%2F6B8%2Ffu3HPof8rpwVd7CNtC81VmSv9eVJ4j77S81jJbv%2Bba1YmPLGKZ8MnAdBa0syUEF5MOsr&X-Amz-Signature=24f8915248bc983c1fa7f04507f31788bcf75fa9359e7c892f09a0559d2e07d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP62CKHO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF8QUzFFb5pZ9R3H%2FCpJLB9HtvO0xsZIOxKlmw9zQxmAiBPNcMN3CGEQNsmRjLXKM2OoNIzZ2CGXP%2FE6b6UzLySTCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMBaYO%2ByOzv0EEg9ZYKtwDHJeyuGpMclY9eRPoMPk07E4QKUi5R1ZET7Gpd2bIa9ZopnqbFhqhQI%2BTApNjWsfFeGVpT%2B%2F9euqa1FcPfu0GNX70XqluLRxZNXR8CGMDs5dItNGaMzkLhalpLRj%2FBLjYsQ%2BpII%2BblZ21i2BjXNyMexZHMsmXuCrxjrgHOlXs2XEvZvxJjusUKH5HsVzkk3E3BxIvSmMKffXuVLTmip6SyVvF9mMOXTCjxGkUaOSKjp9TjVlPyeU29PL0VsofvMyIJ87qBXLtduQ7Ra3LcJOdkR%2B75W1SMmAgiFOdsm0P2YZ%2F1Aww3tV4m5uLHQSJc662r%2FPptgDubHrFRSvdDH%2Fl7TGwRsU6P%2FOJwL%2FZBulemrS2nLb3iYLh%2BYjkPwnVaFLIH7bGfNbRh68szrLc1IFyE3epn7VUxT2uPX2nB2jLUElwPv%2FyFRiTKSjmC7lEO1bTx%2B7OZA3ZY0HaPjobu5KafGewvIJN1nCXur4j6KufZLkkzylF31Fj%2BhyBDM6BkaIw8OYD%2Fr90tSgmVtVyWZAiqX3mQDdfjuetllauI59QWT%2F0kLsR2gKu8Kli38Uoeo4a4c%2BkRaK8ijUnP4ZbFtUAZG5flY6mkShtwgM4%2Fmd0xQQRHCZm4HGhPJRExMUwgu7AvwY6pgGGQi4LgrByLhxkLibck4zqDPwMvPlXpKTt9E99a5N9l74FYwdr7Cok5yiDEI1zA%2F%2FSvTqejisZuhKIjcr0Q7ZSm2tA18Ui02XxVsqnaOFaK4SuCztMZRNryVD3BDi9bCBjruT9vvfjwYF4bZJJbG3%2F6B8%2Ffu3HPof8rpwVd7CNtC81VmSv9eVJ4j77S81jJbv%2Bba1YmPLGKZ8MnAdBa0syUEF5MOsr&X-Amz-Signature=13951ad09d152bf0042ebb465efcf9a7d15fe74c590c3757730ed09b254844a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
