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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYOSU4PJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDnAPjiQ%2FR7d6RixtvTBrE0nk%2B1igqYoejgPy%2BDyjT1HwIhAMJYrV5U2fF6O1vI9MFnaKCYGiYyijz2OPKxQLCGuNGgKv8DCGQQABoMNjM3NDIzMTgzODA1IgzP9A32OlguZIxxsHcq3APiTJ1RJBjFugQq7lW7pJWLf9LnZSHqdtKv5LodzHgfMZgnERdb%2F7LdyjvNIb%2FBdZOsXAH%2BKVtR9ay5zBSOrFYLIOseF0IPwv10kTsLoUeIVY6IKFUl9xygLqkk5TT20iYNL3gOVFFcdQ%2FsyeU2naOGj3WSzidFJbN8Jafbzq2cze2KIDq4Ehksrd1ZCtG4%2FXwxdEV9DvnBnwWSmSMmog1oJmJUEDD0VhueM79PH0ZMrNjWCuKV49zw2zWvKjQ%2BDujv4CsnjCaxCWp%2BXD5JNydgfCdgJ2efRISG%2B3gQNyctUs%2BjCLbdzXufYXabGjCS5KsY5yyNItnI%2B42o4u48Zw31YAgTDi0l9tPa0%2FcNieXdSPGEHm0fOG%2F6fcDpRDr8WJ2EQmic0wA1vXWDVOFHZJYyEKPv9ttR2g2wv9DMjEEMKIkgEJMkaNQLFmlD1uy%2BvEvd5cPu6eht8bLVSCgzaSYLgyRuUQR4SoLAU5oMP37GvrqcoWbqYEkd7v%2FUX6S02ynnLifMhnnzZp2G35rVMXYKLbFPXwbuTUknjgHJi%2BKbuVhpj6RMI%2FhFYm7BqYiLa3Ihy4o1HqCC3jMdrQbSyfaa0zndSNnk4Ow7eHKYa2YDYq97nqj022ieDhFjgzC64N%2FDBjqkAUYTfUKPHDbc0MXm0JH3u8C3S51KDe9UX%2F%2FHosvlJxK39vJH0hq2%2BUTj9OwPNM5sBF6tCfuV8QfW7YRTez47lsyqtQZGM1LesS4OBzllkQ7rBV3uTbzFc0hJwKxaH13MnDzS90JmXh8DCgaXl9ya0bCE5sZotaacwgbq1cWFpebgXWZERQ2elBA0Vwn2hRwz9t3V22aQMFK4Shn7sTJPn%2Bfcmlzs&X-Amz-Signature=ea38198677fba220c841f63cf9916a38e190980492f8bf0822463f28bc9efe31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYOSU4PJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDnAPjiQ%2FR7d6RixtvTBrE0nk%2B1igqYoejgPy%2BDyjT1HwIhAMJYrV5U2fF6O1vI9MFnaKCYGiYyijz2OPKxQLCGuNGgKv8DCGQQABoMNjM3NDIzMTgzODA1IgzP9A32OlguZIxxsHcq3APiTJ1RJBjFugQq7lW7pJWLf9LnZSHqdtKv5LodzHgfMZgnERdb%2F7LdyjvNIb%2FBdZOsXAH%2BKVtR9ay5zBSOrFYLIOseF0IPwv10kTsLoUeIVY6IKFUl9xygLqkk5TT20iYNL3gOVFFcdQ%2FsyeU2naOGj3WSzidFJbN8Jafbzq2cze2KIDq4Ehksrd1ZCtG4%2FXwxdEV9DvnBnwWSmSMmog1oJmJUEDD0VhueM79PH0ZMrNjWCuKV49zw2zWvKjQ%2BDujv4CsnjCaxCWp%2BXD5JNydgfCdgJ2efRISG%2B3gQNyctUs%2BjCLbdzXufYXabGjCS5KsY5yyNItnI%2B42o4u48Zw31YAgTDi0l9tPa0%2FcNieXdSPGEHm0fOG%2F6fcDpRDr8WJ2EQmic0wA1vXWDVOFHZJYyEKPv9ttR2g2wv9DMjEEMKIkgEJMkaNQLFmlD1uy%2BvEvd5cPu6eht8bLVSCgzaSYLgyRuUQR4SoLAU5oMP37GvrqcoWbqYEkd7v%2FUX6S02ynnLifMhnnzZp2G35rVMXYKLbFPXwbuTUknjgHJi%2BKbuVhpj6RMI%2FhFYm7BqYiLa3Ihy4o1HqCC3jMdrQbSyfaa0zndSNnk4Ow7eHKYa2YDYq97nqj022ieDhFjgzC64N%2FDBjqkAUYTfUKPHDbc0MXm0JH3u8C3S51KDe9UX%2F%2FHosvlJxK39vJH0hq2%2BUTj9OwPNM5sBF6tCfuV8QfW7YRTez47lsyqtQZGM1LesS4OBzllkQ7rBV3uTbzFc0hJwKxaH13MnDzS90JmXh8DCgaXl9ya0bCE5sZotaacwgbq1cWFpebgXWZERQ2elBA0Vwn2hRwz9t3V22aQMFK4Shn7sTJPn%2Bfcmlzs&X-Amz-Signature=91a5c13a66d9521d9730a75f2f04d209a1199aea8cbf27368bcc43217e159b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
