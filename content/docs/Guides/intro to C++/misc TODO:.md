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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEUB2XS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B5gD0NnY%2Bt2lR7CD7Uo8C6x7tAhyiZOsDHh19hMyziAiBLzk%2BpDQ87pE8iLJzWV%2BIYW8bxlII67AM%2B36fd9QoquCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjDj0lgr3fIrEZCwKtwDXqtQOCsbjjhlUZGYWZrr4Nwlq10iBJaJZ0vzd%2BWlzQaRsH2A2NaUa8Qj6XEWCA4RgiGomdtcG9aXwo4wkuhVx8ki1Dp9wk7br9hT4OdmOZdCrXp0naPDnvDavBAZTImIWl7lC%2Bo6MdU47LpQaXpc3EP%2BTmcnrY7o2dYQ7sTU0iXx3JgQZxg06vGj%2Bg2MxWqV9DKsBOQ3TOOIbSsiZOGaDiKy93KmmdKdk8NML3G73rWZ8epDSJS539FV6IVJWUYwvq5iooKK9fDNJ0UeivaNZ6%2F6wUFVXU4hE6OxoeQChCuADYc54k7zqNzW4oivCLpdR%2FSmzEiwjKLUA5VeeuScxG%2FgE1u30s8zQl4qofVFqzxqzJP22uSqBdubNpUEmqf28odx59qf6kaoaUfkqD502b7MAz3NgiZKiMJE80iKy2BWOXt4XHmduZ6qxOvhMxwpDarXfrBTX21%2FYztuZ5IUQvH%2FlHIV9jur8p4ndLn%2FB8ko0V%2FhemnksBma9ip1jvwXUE3ODMqsqpnMlHZrPWwHkyR6ou4w3wooCUbPAgrCHGyJm4Kb4fveHAKxlBBV5Pw6RyE6I%2Bfj1%2Fb7%2BP2i%2FOWfR%2BfsBL%2FB9HYQca4lLXO8buT%2BfbmoYR11C6EfLfAwyY2nxAY6pgH2TKf%2FvrfQ%2B9p5lh28EFNi74P2LTKOfrfvAJ5EubQ6Q03EU29a8GFAqi9vE8ai5eMaq2LLHrY56D6XaZcsLoGaHlJv25EQnLB6MaeXC9MVmEVNPCmznwZKe5IEYoppVN%2Ff9APxW%2BNgEjh6YtBwIJztF26QMjS6e42nYm2Hx%2BUTMafobUZ%2BNqSB7FT6fkXgjt2HXymz8%2FEAjfCd5HmhAnG4D5LLXV90&X-Amz-Signature=b561fc99f3a855642dcb5972cefc3acc79cf0bd1fd9a258c00e322907f659860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEUB2XS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B5gD0NnY%2Bt2lR7CD7Uo8C6x7tAhyiZOsDHh19hMyziAiBLzk%2BpDQ87pE8iLJzWV%2BIYW8bxlII67AM%2B36fd9QoquCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjDj0lgr3fIrEZCwKtwDXqtQOCsbjjhlUZGYWZrr4Nwlq10iBJaJZ0vzd%2BWlzQaRsH2A2NaUa8Qj6XEWCA4RgiGomdtcG9aXwo4wkuhVx8ki1Dp9wk7br9hT4OdmOZdCrXp0naPDnvDavBAZTImIWl7lC%2Bo6MdU47LpQaXpc3EP%2BTmcnrY7o2dYQ7sTU0iXx3JgQZxg06vGj%2Bg2MxWqV9DKsBOQ3TOOIbSsiZOGaDiKy93KmmdKdk8NML3G73rWZ8epDSJS539FV6IVJWUYwvq5iooKK9fDNJ0UeivaNZ6%2F6wUFVXU4hE6OxoeQChCuADYc54k7zqNzW4oivCLpdR%2FSmzEiwjKLUA5VeeuScxG%2FgE1u30s8zQl4qofVFqzxqzJP22uSqBdubNpUEmqf28odx59qf6kaoaUfkqD502b7MAz3NgiZKiMJE80iKy2BWOXt4XHmduZ6qxOvhMxwpDarXfrBTX21%2FYztuZ5IUQvH%2FlHIV9jur8p4ndLn%2FB8ko0V%2FhemnksBma9ip1jvwXUE3ODMqsqpnMlHZrPWwHkyR6ou4w3wooCUbPAgrCHGyJm4Kb4fveHAKxlBBV5Pw6RyE6I%2Bfj1%2Fb7%2BP2i%2FOWfR%2BfsBL%2FB9HYQca4lLXO8buT%2BfbmoYR11C6EfLfAwyY2nxAY6pgH2TKf%2FvrfQ%2B9p5lh28EFNi74P2LTKOfrfvAJ5EubQ6Q03EU29a8GFAqi9vE8ai5eMaq2LLHrY56D6XaZcsLoGaHlJv25EQnLB6MaeXC9MVmEVNPCmznwZKe5IEYoppVN%2Ff9APxW%2BNgEjh6YtBwIJztF26QMjS6e42nYm2Hx%2BUTMafobUZ%2BNqSB7FT6fkXgjt2HXymz8%2FEAjfCd5HmhAnG4D5LLXV90&X-Amz-Signature=1d23a19c30f760045bc3255aceed4fc1c21926b2adf816e3001620b3f62f86b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
