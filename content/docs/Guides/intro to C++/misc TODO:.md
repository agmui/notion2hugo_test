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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDHJPOBO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCiTRhsp0qh2oR6gArW73XSt0PWRbfXv0PJdYdCMw2QJwIgG%2FxQrMH7f%2BD3Gdwz%2Bne8A05gV1LSbJ6ucXU5%2FvYuaFUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZK%2F2%2FlKgU3349CsircAy%2F9xv8Qz7PIj9P9znr0fUKfqNlC%2ByQaokTDcXdtGvCwuIvRrSNRXruqF34eJREWiabqnDdvhokay3GycomTEtoSZBaNTyb9lmWAkOjtizp5AubXb1kJ6L8%2F5JRGjGlPzjvAnPXQvicD2Wo1uw59DLSP%2F9YKV364jUjTTAHGSQ2dMW70F2fZsklYB54W3KLBf2vDEkk8q%2F4ROrYVRWVNtkncxJm5cjTrPTr7aWv%2Be9wm1Ehh914gmwXwLdXK76ZPyRAYYDwOUUwza1A4NwButbyQyKppiQrrcIbPB4CXRQKZ4rbF7hjUMQo9UjMi8yyFkWdL0q0vGADD3gIu233kScFr8oAayDl5ei1eMkqFUdqr61skGSs9fHDQEod6PNdoIgFjKZu5BKJcpK2BqBMFAJw57WvwBp%2BDfizpe8D6Z%2BTQpYNBjiHaF4oULkXp6ypCYHDlRtaMISMOQwQJAhV%2BOP32l8gBoYPfrhwU3MVIu38EzhorexPgU9ILewWYMlA9JL6f2RxGlLeLpjZwN55seobwg71ANNBcfPD2eZd8hKRH2oLz6nOETbOBGg4u%2Bc0BAJocQrrom1B1Di%2BXGRMmNcqUN68fMfrxzUBG1v%2FJNXpIiM9kcmj5qqcpUXuYMMqHucEGOqUBvWx%2BQFFdOv%2FaIl19quQx%2FYHG%2Fi%2B18MiVGs4HySxQ0xUnotJI%2BXYExtQJXN7WHCxqM%2B9eZ1yx4k5FPCEy3ivEi8RI75FUOuWmOc52rCnAEEx%2BY0s94yNcwl5y2DBFgxEyR%2F4kWS6AHKaf4NHVeiZ%2FmGUJwqvkTgifrsponrNDbO%2FpYJ89nSydFMzi1w2HzdGVYu%2B698lmhcsliC4JZAgULsucImh%2B&X-Amz-Signature=61eaf4f75fd08ece359c84af70ac7e2d59e1c3380390f67a517db685b6d614a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDHJPOBO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCiTRhsp0qh2oR6gArW73XSt0PWRbfXv0PJdYdCMw2QJwIgG%2FxQrMH7f%2BD3Gdwz%2Bne8A05gV1LSbJ6ucXU5%2FvYuaFUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZK%2F2%2FlKgU3349CsircAy%2F9xv8Qz7PIj9P9znr0fUKfqNlC%2ByQaokTDcXdtGvCwuIvRrSNRXruqF34eJREWiabqnDdvhokay3GycomTEtoSZBaNTyb9lmWAkOjtizp5AubXb1kJ6L8%2F5JRGjGlPzjvAnPXQvicD2Wo1uw59DLSP%2F9YKV364jUjTTAHGSQ2dMW70F2fZsklYB54W3KLBf2vDEkk8q%2F4ROrYVRWVNtkncxJm5cjTrPTr7aWv%2Be9wm1Ehh914gmwXwLdXK76ZPyRAYYDwOUUwza1A4NwButbyQyKppiQrrcIbPB4CXRQKZ4rbF7hjUMQo9UjMi8yyFkWdL0q0vGADD3gIu233kScFr8oAayDl5ei1eMkqFUdqr61skGSs9fHDQEod6PNdoIgFjKZu5BKJcpK2BqBMFAJw57WvwBp%2BDfizpe8D6Z%2BTQpYNBjiHaF4oULkXp6ypCYHDlRtaMISMOQwQJAhV%2BOP32l8gBoYPfrhwU3MVIu38EzhorexPgU9ILewWYMlA9JL6f2RxGlLeLpjZwN55seobwg71ANNBcfPD2eZd8hKRH2oLz6nOETbOBGg4u%2Bc0BAJocQrrom1B1Di%2BXGRMmNcqUN68fMfrxzUBG1v%2FJNXpIiM9kcmj5qqcpUXuYMMqHucEGOqUBvWx%2BQFFdOv%2FaIl19quQx%2FYHG%2Fi%2B18MiVGs4HySxQ0xUnotJI%2BXYExtQJXN7WHCxqM%2B9eZ1yx4k5FPCEy3ivEi8RI75FUOuWmOc52rCnAEEx%2BY0s94yNcwl5y2DBFgxEyR%2F4kWS6AHKaf4NHVeiZ%2FmGUJwqvkTgifrsponrNDbO%2FpYJ89nSydFMzi1w2HzdGVYu%2B698lmhcsliC4JZAgULsucImh%2B&X-Amz-Signature=c95a097423f4e5022606ca0b9279d52c759f1e1578a9936be78b1ba2c9716a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
