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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDBSMFS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNwslUcHubj7oV7akh7A6UwV9A0LmgKa4V04o9u4uoqAiEAn7j0XxpY%2BYHaItCR0jyjuubae%2Fsa6lYUMh7QSYbS%2F8gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX7agOLu%2Bs036S8fircA1goqrAXCuwBOILHfI5KRN%2F2r3HC3mIzniT15Vg4dEATck3hj2StgRUbqQKrC1Qw93EVBzARrYR1Pv5BLe3d2m6bgdryPIzPSYVmOkP1OBaRZjbx4Z7%2BciaV42BuXOQdEoKPW%2BwWiooor4CPIO1d2YGXI1KH2bnOyieAiW4xFFkTvH45u%2FFEWhKmRBRy6F2u6jyFPeAIOn28wlPlyuSXyNH%2FxCgD7gppfoYDpWV58dtzW7IFEgJFtJL4cJhCI7efSXwOl7LBhIKUIo7fhoDzROxaTlAb8yJbqeIuJHi6H7hQtYZ8Q4P%2B1FIMtX5%2FXiUEODCd8fzqgmhqNektGlWbgtNnewKErMjDNrvEeYW7xBUwH%2BvzqWddry1eICJ0v9%2BNTUtdFjM1ALTU2jAJg2MAzsG123S0DwslUNKQHwFmF%2FJjm2uJ9e5IlLjZHk34Ubi6an8QPwpS%2BqlMImuyqg9hfTyTVO9vtezF0eiWB4sn4lz41Lov7mLEZ1ZJW6UH8TE2dfVK4h1F2JYSMfkU%2Bxxj7tJKu%2BRTne5CBUkn3WL2MWBNeLEIJHZR3BBIpHZGJf%2BWz2EgIq%2BJ98He6qjLtqK0FHQq%2F%2FgxWArbDgQH%2FF5cbLgUysaF%2FjlS6Ud5ff7eMMP2kL4GOqUBwzNvNR4WAh2zbB1SN6emZupGvWwCfG7f5XsAppzx64MkZDLJ4au1Czkzr260Ua2uqooI1hU%2Fpl3AnNQGlr2Q7JO%2BIJz0V34yogPfOg6LNUenNHLoF%2Be2n3jtg%2BFk7xaG%2BDxHSKIlE5qNnZ4uLnHcGZDhCGMgMWAPgACl%2BF%2Fx4IDa1Wb9pAQsEfVhfv%2Fj3Rmx7d7M%2FE2HmZChtyz6%2BOrtct4PmiTh&X-Amz-Signature=4d6e092fa5e9a2ccc23064705cdf45762731ebd88ccfad339f22894de5c01972&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDBSMFS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNwslUcHubj7oV7akh7A6UwV9A0LmgKa4V04o9u4uoqAiEAn7j0XxpY%2BYHaItCR0jyjuubae%2Fsa6lYUMh7QSYbS%2F8gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX7agOLu%2Bs036S8fircA1goqrAXCuwBOILHfI5KRN%2F2r3HC3mIzniT15Vg4dEATck3hj2StgRUbqQKrC1Qw93EVBzARrYR1Pv5BLe3d2m6bgdryPIzPSYVmOkP1OBaRZjbx4Z7%2BciaV42BuXOQdEoKPW%2BwWiooor4CPIO1d2YGXI1KH2bnOyieAiW4xFFkTvH45u%2FFEWhKmRBRy6F2u6jyFPeAIOn28wlPlyuSXyNH%2FxCgD7gppfoYDpWV58dtzW7IFEgJFtJL4cJhCI7efSXwOl7LBhIKUIo7fhoDzROxaTlAb8yJbqeIuJHi6H7hQtYZ8Q4P%2B1FIMtX5%2FXiUEODCd8fzqgmhqNektGlWbgtNnewKErMjDNrvEeYW7xBUwH%2BvzqWddry1eICJ0v9%2BNTUtdFjM1ALTU2jAJg2MAzsG123S0DwslUNKQHwFmF%2FJjm2uJ9e5IlLjZHk34Ubi6an8QPwpS%2BqlMImuyqg9hfTyTVO9vtezF0eiWB4sn4lz41Lov7mLEZ1ZJW6UH8TE2dfVK4h1F2JYSMfkU%2Bxxj7tJKu%2BRTne5CBUkn3WL2MWBNeLEIJHZR3BBIpHZGJf%2BWz2EgIq%2BJ98He6qjLtqK0FHQq%2F%2FgxWArbDgQH%2FF5cbLgUysaF%2FjlS6Ud5ff7eMMP2kL4GOqUBwzNvNR4WAh2zbB1SN6emZupGvWwCfG7f5XsAppzx64MkZDLJ4au1Czkzr260Ua2uqooI1hU%2Fpl3AnNQGlr2Q7JO%2BIJz0V34yogPfOg6LNUenNHLoF%2Be2n3jtg%2BFk7xaG%2BDxHSKIlE5qNnZ4uLnHcGZDhCGMgMWAPgACl%2BF%2Fx4IDa1Wb9pAQsEfVhfv%2Fj3Rmx7d7M%2FE2HmZChtyz6%2BOrtct4PmiTh&X-Amz-Signature=a70f8232a78043a3037ecfe196cc8e87ba23b7ac0a5d17b902dafedc4e9787a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
