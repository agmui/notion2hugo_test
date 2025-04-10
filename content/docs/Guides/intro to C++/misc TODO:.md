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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JNWVIS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC%2FmhIyFkwylJX4gsTJe%2FXNWH%2BlMCBfHkyYov4MEAvX2QIgeCDNAwL%2FZ1wZXG6QU5YXUwjS3MUa7GjHVgN1FrGQCbcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNVbEBMMyQ6ehqM%2FyrcAxPE8E3JmvB3b%2Fjanj7j4TtUB8Mj%2BG488wCcL52X2q157yXq3ZIJSMV8fZwHkx7m9KY38KZn%2B%2Bc9ZJHZt2NxzktakHRXiiLPH%2BSSsEY%2BLWclBUrxAuh3EasqAGfGyO%2BzsARhq0dgret%2B6wYIN7GKXiTGl9yXjYw9G%2FUHrSvnrvxBCUCLk3G4vd9Skw6kDdLu64VQvZ9UtVFzTw3PYRqUKYIFI5DVnZe3jd3scz3TKZjWN8uEUaoGm1Cgdw6pONkTdY%2F2i1vdsMr8WO%2Bf22Qbo0HiZrZAlQilc4H7%2BJ0EVTdgsgk6m7XYD2QzsFg7zLpS9NOziya9NfJeNE4vJKgv%2BzL1obb%2BwtwXDr6LPdjW8CdbmQJ2UsjabuQY7ZH1y2Qtfvo78pIfRLEMxg%2BK27O8nLKS4bLvDymuP%2F1frZgmJaNpLIsPn73BnXlBrlAS0cLwKI%2Bv4I9dps3eQ%2B5IdJIAQE%2FQim2OkCyJKhRZDETPwaIpCnbcurq00GxfqdaJ%2BUwDoWWbNL1MYlkTYBj%2B%2BfpUyqMHFXYVDPJODBaPAWrUebcRlqi4UaMd1X3spyr0ZKEhHf9PZXWO8bQN7frdcODEM%2F95OL0maPpQCEOM5JEupK02HUq%2BEIms9oBDerQeMOi4378GOqUBf3BmrrSXNriNIveU%2FtC0ePsGByhNhnSAVEO2rGr%2BEu1EWYnwJMvIhBWTOWMc%2Bcwspo8dKZ1jGBVefReORhF8SOXbYfoGtpqOeVJSCh4AMkT9zZV%2Bu1w723jj%2BlpBKv1VJQKMI7Ms%2FkadB8bjh3BNT2vGQ8pC9JDVuYxyXbphzOgJZhF3Wlwu0psnqfKeyXLfpY%2BxjB5t8Ma6ze0DqEux7Peoaz%2By&X-Amz-Signature=fb0a515522c2ea538d0bc7a13b9e3b945c76fab37ead278ca21ff9c7d75c8a69&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JNWVIS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC%2FmhIyFkwylJX4gsTJe%2FXNWH%2BlMCBfHkyYov4MEAvX2QIgeCDNAwL%2FZ1wZXG6QU5YXUwjS3MUa7GjHVgN1FrGQCbcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNVbEBMMyQ6ehqM%2FyrcAxPE8E3JmvB3b%2Fjanj7j4TtUB8Mj%2BG488wCcL52X2q157yXq3ZIJSMV8fZwHkx7m9KY38KZn%2B%2Bc9ZJHZt2NxzktakHRXiiLPH%2BSSsEY%2BLWclBUrxAuh3EasqAGfGyO%2BzsARhq0dgret%2B6wYIN7GKXiTGl9yXjYw9G%2FUHrSvnrvxBCUCLk3G4vd9Skw6kDdLu64VQvZ9UtVFzTw3PYRqUKYIFI5DVnZe3jd3scz3TKZjWN8uEUaoGm1Cgdw6pONkTdY%2F2i1vdsMr8WO%2Bf22Qbo0HiZrZAlQilc4H7%2BJ0EVTdgsgk6m7XYD2QzsFg7zLpS9NOziya9NfJeNE4vJKgv%2BzL1obb%2BwtwXDr6LPdjW8CdbmQJ2UsjabuQY7ZH1y2Qtfvo78pIfRLEMxg%2BK27O8nLKS4bLvDymuP%2F1frZgmJaNpLIsPn73BnXlBrlAS0cLwKI%2Bv4I9dps3eQ%2B5IdJIAQE%2FQim2OkCyJKhRZDETPwaIpCnbcurq00GxfqdaJ%2BUwDoWWbNL1MYlkTYBj%2B%2BfpUyqMHFXYVDPJODBaPAWrUebcRlqi4UaMd1X3spyr0ZKEhHf9PZXWO8bQN7frdcODEM%2F95OL0maPpQCEOM5JEupK02HUq%2BEIms9oBDerQeMOi4378GOqUBf3BmrrSXNriNIveU%2FtC0ePsGByhNhnSAVEO2rGr%2BEu1EWYnwJMvIhBWTOWMc%2Bcwspo8dKZ1jGBVefReORhF8SOXbYfoGtpqOeVJSCh4AMkT9zZV%2Bu1w723jj%2BlpBKv1VJQKMI7Ms%2FkadB8bjh3BNT2vGQ8pC9JDVuYxyXbphzOgJZhF3Wlwu0psnqfKeyXLfpY%2BxjB5t8Ma6ze0DqEux7Peoaz%2By&X-Amz-Signature=e33f42bf6b1efe2a6f108746ae6a3af401fd6c35a8aac1a58aeadbc05baaf954&X-Amz-SignedHeaders=host&x-id=GetObject)

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
