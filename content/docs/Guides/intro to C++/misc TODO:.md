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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TBRSUZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDayoB1Jh89HGDq8zIZWE3uEBNyQ3alV962uji1qNNOzAiATgXzPoOJAHtoZA%2BMaB1zf6MWnQ3viV0%2BDQ7ayK0sN%2Fir%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMEgQwZhX0nNV6FO%2B0KtwDF1wO%2FA2Er25SMPy1T43opy9Iq%2Fj%2BZYMyUOv3w2%2BqmkJBGuIplbnfaPf9LB9vSJwWApYmAExkAUKMQKUCIUwaKzDTZYB7ZRZeaulPpBROBMsZJeancsKTi%2BZjfe7SbcK2hQ3OmQ7HEG76pbNQGbhE5p7KySowkV7RtTDinIR3GqK1IYfpfDI4F0AwSKWxZlTgIcuJrntSSzYbCetsRhqDvrbgz9NZpmIPoQ1zjvysu0SzdgInoolY7xtJa569st1F0e1cXLVf%2B9UPN01xL9xzhKD7xEljbCKMN%2FGx2q31Ak741BMtbfbRLPQ3eNGp%2FbteK8VC6d1YVvZ5WtxvVJ9u67V3LfkXoM7U%2F4l4yB52Z3ogsK%2B6DMXxz288U06z%2F%2B4Unstr0PatrHH%2BfN2HsXPNwSJ09AsUiUiC6GJSxmoaxp84veqaXWQQjiYFYtqgeDtOWRuNug4DbncrWVaYpxBveoVHgZ7KlRl1%2BNlHOqc4QtVHA586FTOMmrtgJ7V0fFEnUx8yy3nS6b4PAEvRQ68gWp556ARZwHAOPKtGaMPRkfmoBfquChszGmkl1fTPP%2B9eJvNDOIhpqdsG7cg4wm1Ycv7aMCQf%2F7zUrmr4F5vVA6IwiEFAn6P9Mpr7Ypww5%2BDfwwY6pgFJoMqqe3k2MYIQTu48NE4m3o9cIKkZJbup0waeVaCIHo8AdERV43NFlNVkUWx1oqlC8zN4BPzRyQ4oXiuIQ47y8rnnvXVFwrj7ItZxGrQNY1d5ieI2QCTnxifUbuWnq13g%2B3XYyT0XryTte9zMsamCQuNPZTOiIPjwEP1lieOc8YuMMiJNhQwteUydZEL4gvZFYYjF%2BT34lHanicFPikX6E%2FrnTimG&X-Amz-Signature=f1dc67461abf2f41f10aa97422f35abc7688127d7cee77ca3c0be5847a08cc30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TBRSUZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDayoB1Jh89HGDq8zIZWE3uEBNyQ3alV962uji1qNNOzAiATgXzPoOJAHtoZA%2BMaB1zf6MWnQ3viV0%2BDQ7ayK0sN%2Fir%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMEgQwZhX0nNV6FO%2B0KtwDF1wO%2FA2Er25SMPy1T43opy9Iq%2Fj%2BZYMyUOv3w2%2BqmkJBGuIplbnfaPf9LB9vSJwWApYmAExkAUKMQKUCIUwaKzDTZYB7ZRZeaulPpBROBMsZJeancsKTi%2BZjfe7SbcK2hQ3OmQ7HEG76pbNQGbhE5p7KySowkV7RtTDinIR3GqK1IYfpfDI4F0AwSKWxZlTgIcuJrntSSzYbCetsRhqDvrbgz9NZpmIPoQ1zjvysu0SzdgInoolY7xtJa569st1F0e1cXLVf%2B9UPN01xL9xzhKD7xEljbCKMN%2FGx2q31Ak741BMtbfbRLPQ3eNGp%2FbteK8VC6d1YVvZ5WtxvVJ9u67V3LfkXoM7U%2F4l4yB52Z3ogsK%2B6DMXxz288U06z%2F%2B4Unstr0PatrHH%2BfN2HsXPNwSJ09AsUiUiC6GJSxmoaxp84veqaXWQQjiYFYtqgeDtOWRuNug4DbncrWVaYpxBveoVHgZ7KlRl1%2BNlHOqc4QtVHA586FTOMmrtgJ7V0fFEnUx8yy3nS6b4PAEvRQ68gWp556ARZwHAOPKtGaMPRkfmoBfquChszGmkl1fTPP%2B9eJvNDOIhpqdsG7cg4wm1Ycv7aMCQf%2F7zUrmr4F5vVA6IwiEFAn6P9Mpr7Ypww5%2BDfwwY6pgFJoMqqe3k2MYIQTu48NE4m3o9cIKkZJbup0waeVaCIHo8AdERV43NFlNVkUWx1oqlC8zN4BPzRyQ4oXiuIQ47y8rnnvXVFwrj7ItZxGrQNY1d5ieI2QCTnxifUbuWnq13g%2B3XYyT0XryTte9zMsamCQuNPZTOiIPjwEP1lieOc8YuMMiJNhQwteUydZEL4gvZFYYjF%2BT34lHanicFPikX6E%2FrnTimG&X-Amz-Signature=988dbdafcdfcc92012c55d3373e4aba95968486593a11074b3844bf23d7562db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
