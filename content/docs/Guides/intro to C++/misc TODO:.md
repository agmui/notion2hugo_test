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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4O7H5GI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCnAh5VHCgAT0LVgtKiKpfalh3OZtJKqaymAQ6ruHYSoAIgOpHBiqHlTYYHUr5YoKYYaO8WvDGuDZRwmFNG9EGIts4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBHnkr%2FuwfTgR1mkgSrcA%2FJyX3%2BmgRJ4jyYfo57LGuUZMxMQ03iT9K5I%2F%2F92hc5q3Cg0BfUyr3m3WJP81%2FtdIgUgrXDkK7THMVRfMsmyNslHqvnkedPB5KuRa1yQFko0PpVZDRm0rg12djxedlLfjcwoXrp%2Fth9XXUb5%2BjOuC958VDAfjMk2RWIFdxOEs9jyWv6px59HPQ8U5xqvglU6XJazbBhHMm9JynLlDUPQMp41FdOyh8WR9P4fULDw3vQDmIj6jvRW9CQr74tIrPjzPw07moxcL3B%2FozoghVyX7uPCu7yjDauR62fgM%2BAgf%2BBTVfezmB1L%2FYqw6RuqBnI5jKgBe4dDaK7RA5kUCs74Zyz8RnAkWi1IyjfyKpGgViZtecNgiOjkvLnqGjrdTNA24obpF7a5gBlW2ePkcZBCUVqxsWfIrtLwMIgQ4Btw%2BYU9ZTmqSh2IkZ%2Bu2sqOp7%2FL5z%2BxPrQbTax5W%2BzC5vPpsMWL6z%2Bv2hdLfjReL6ECRXwq3buICBgXInUbLIiTu87RIUDgldUcZhR2%2Fjo2APfXOo9KPeW4hpRF3UppVdo02ipZrdauDM1DtelZQsbFLKMo%2BxTw%2Bz1QwqJylkYCCt8EIiHLJwjYLlPRjk0zt04YPs3Sfbl%2FmhHxNHPGMDGuMI2C6r4GOqUBKKqJqXiPeY2xOZpV%2FhCVfQO5%2B%2Bjad%2FIQqQaDR8g4uO0hStLFCaegFxNVDm8T59xTbMIkXDHFohyxf5gGmWf4vw%2B%2BPWTIfurEWJy3cpGBX%2B9yUwBwZJtddX7Uo1WtzPTGi7E65HLwVd3yggFgT66i8DrPGEXKVXlnIaN%2BM%2FgrnTFBzlChnpLnf2CAuKnZw9l%2BBKfuY7MQpc8At7ZjgJGLZxXPVWmQ&X-Amz-Signature=f20c321c6f2d0aa5bd239717af5a4618889bce6887639881b038e1d6955eb855&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4O7H5GI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCnAh5VHCgAT0LVgtKiKpfalh3OZtJKqaymAQ6ruHYSoAIgOpHBiqHlTYYHUr5YoKYYaO8WvDGuDZRwmFNG9EGIts4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBHnkr%2FuwfTgR1mkgSrcA%2FJyX3%2BmgRJ4jyYfo57LGuUZMxMQ03iT9K5I%2F%2F92hc5q3Cg0BfUyr3m3WJP81%2FtdIgUgrXDkK7THMVRfMsmyNslHqvnkedPB5KuRa1yQFko0PpVZDRm0rg12djxedlLfjcwoXrp%2Fth9XXUb5%2BjOuC958VDAfjMk2RWIFdxOEs9jyWv6px59HPQ8U5xqvglU6XJazbBhHMm9JynLlDUPQMp41FdOyh8WR9P4fULDw3vQDmIj6jvRW9CQr74tIrPjzPw07moxcL3B%2FozoghVyX7uPCu7yjDauR62fgM%2BAgf%2BBTVfezmB1L%2FYqw6RuqBnI5jKgBe4dDaK7RA5kUCs74Zyz8RnAkWi1IyjfyKpGgViZtecNgiOjkvLnqGjrdTNA24obpF7a5gBlW2ePkcZBCUVqxsWfIrtLwMIgQ4Btw%2BYU9ZTmqSh2IkZ%2Bu2sqOp7%2FL5z%2BxPrQbTax5W%2BzC5vPpsMWL6z%2Bv2hdLfjReL6ECRXwq3buICBgXInUbLIiTu87RIUDgldUcZhR2%2Fjo2APfXOo9KPeW4hpRF3UppVdo02ipZrdauDM1DtelZQsbFLKMo%2BxTw%2Bz1QwqJylkYCCt8EIiHLJwjYLlPRjk0zt04YPs3Sfbl%2FmhHxNHPGMDGuMI2C6r4GOqUBKKqJqXiPeY2xOZpV%2FhCVfQO5%2B%2Bjad%2FIQqQaDR8g4uO0hStLFCaegFxNVDm8T59xTbMIkXDHFohyxf5gGmWf4vw%2B%2BPWTIfurEWJy3cpGBX%2B9yUwBwZJtddX7Uo1WtzPTGi7E65HLwVd3yggFgT66i8DrPGEXKVXlnIaN%2BM%2FgrnTFBzlChnpLnf2CAuKnZw9l%2BBKfuY7MQpc8At7ZjgJGLZxXPVWmQ&X-Amz-Signature=7737fff85d2e8cf43472ead68d508049ff8a3f0f28cf5044206e1b51e9bb4814&X-Amz-SignedHeaders=host&x-id=GetObject)

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
