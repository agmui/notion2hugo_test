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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=168723416c4ca3f4dda6435c3c16e5c99db62d4ec199ab7979163588d969ca17&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=637f3a7d669ca3b407fc40f2e0bbcac28954b8ba584766512664030946ecac91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
