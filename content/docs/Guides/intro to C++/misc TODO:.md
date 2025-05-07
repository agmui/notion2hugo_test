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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCX4OOSE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUS6QUY2unc0HJzy5covsP%2FkThhnIwGqVV3O%2B1yoFgDwIhAIQsCR33l1RuGyazg5nPUoxYr0GsShADo0%2Bd7RWeYgu6Kv8DCFAQABoMNjM3NDIzMTgzODA1IgyGAwGrzvsWJ6mK4usq3AOSktOnR%2FasH6kGeW8FwvNQPiPO7sbFjlyFyHHTk0PerpHm16WejYQDdKY1tTgrJ6SA32r%2FE9v%2B%2FjSotInnXqWCK1bWHalObORps4aQC92X5yJfmFEeUs7LJ3yH5TuO%2BeabogZGus83N%2BTN2bsfYjq9hmcxmiopEXOrT7IeepQrk%2BKQQLZDFGq83ay3Y73lMibiLb%2FOMUFGuUa7Iqu9iEX0JTwwsMKOsJHIHDjlUQWzF4z7WGuJnJ3TOMAWRdiIjYjahjLDtXMNjcdZinZp2ZLOpMBJD%2BQy%2F5wr%2Bht4KVt7rSxOGfmAcrJhY5XNbuGxAOEz4t6Ol%2Bb0eim5IAraE9Jj1bGZPYPlOfH8xAjYZ16eDKRzb%2BYmu7duT8E%2B4hHiGAy%2BRJTECCCKm84RZZx0Umt2mk8AI52jW8%2Bh6eCLa8fH3I1wfA3oI5C0Z2lpZY5%2FmASN0CM6QmH7R4pf8nNvi43kwhq5HvaqIikC%2BnzGrR8DNKsFIr0K%2F9K9SAnLT8PRr7e7EsgDjBSTnbcLCp%2BsGJsEFPIcwdEkCo4Pizdbw4eXeOTpiCEqv%2FPFXCn8zS7J91amCp3Je4HhVAc8feeBiAAX7R%2FP9ugkoQUE4Yaclqd1bQnWfj2feNQpJemf8jCBr%2BrABjqkAYZJ8pzmGYd35iYKpe5NjSaOhtF%2BR6Vij9zSE3ptI5lEmZx6BdnDucKFtQ%2FWZTVBnlcR2LuPCi1QIS4wTqk3hY9moxjyY0Zms3NtsEmjZVzWJXhi68cSkJ2A8R0IDx0n7AUK%2BKCOvexw9WgropYLwrPW6P9nMWCSQBJ7P9kouGHtlapEyVf8SIX7iNvoap4r%2BLa5WlewKMvgy8Dv7jVR57qSCP48&X-Amz-Signature=44d4fa3d61234dd543b5c0de3fc2bd0a2100186c2730f9c76ecfc8d21c3d07c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCX4OOSE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUS6QUY2unc0HJzy5covsP%2FkThhnIwGqVV3O%2B1yoFgDwIhAIQsCR33l1RuGyazg5nPUoxYr0GsShADo0%2Bd7RWeYgu6Kv8DCFAQABoMNjM3NDIzMTgzODA1IgyGAwGrzvsWJ6mK4usq3AOSktOnR%2FasH6kGeW8FwvNQPiPO7sbFjlyFyHHTk0PerpHm16WejYQDdKY1tTgrJ6SA32r%2FE9v%2B%2FjSotInnXqWCK1bWHalObORps4aQC92X5yJfmFEeUs7LJ3yH5TuO%2BeabogZGus83N%2BTN2bsfYjq9hmcxmiopEXOrT7IeepQrk%2BKQQLZDFGq83ay3Y73lMibiLb%2FOMUFGuUa7Iqu9iEX0JTwwsMKOsJHIHDjlUQWzF4z7WGuJnJ3TOMAWRdiIjYjahjLDtXMNjcdZinZp2ZLOpMBJD%2BQy%2F5wr%2Bht4KVt7rSxOGfmAcrJhY5XNbuGxAOEz4t6Ol%2Bb0eim5IAraE9Jj1bGZPYPlOfH8xAjYZ16eDKRzb%2BYmu7duT8E%2B4hHiGAy%2BRJTECCCKm84RZZx0Umt2mk8AI52jW8%2Bh6eCLa8fH3I1wfA3oI5C0Z2lpZY5%2FmASN0CM6QmH7R4pf8nNvi43kwhq5HvaqIikC%2BnzGrR8DNKsFIr0K%2F9K9SAnLT8PRr7e7EsgDjBSTnbcLCp%2BsGJsEFPIcwdEkCo4Pizdbw4eXeOTpiCEqv%2FPFXCn8zS7J91amCp3Je4HhVAc8feeBiAAX7R%2FP9ugkoQUE4Yaclqd1bQnWfj2feNQpJemf8jCBr%2BrABjqkAYZJ8pzmGYd35iYKpe5NjSaOhtF%2BR6Vij9zSE3ptI5lEmZx6BdnDucKFtQ%2FWZTVBnlcR2LuPCi1QIS4wTqk3hY9moxjyY0Zms3NtsEmjZVzWJXhi68cSkJ2A8R0IDx0n7AUK%2BKCOvexw9WgropYLwrPW6P9nMWCSQBJ7P9kouGHtlapEyVf8SIX7iNvoap4r%2BLa5WlewKMvgy8Dv7jVR57qSCP48&X-Amz-Signature=44bb71f5f17ccc5dcd3b6363eb2664c9a5f44a7518485d2a3f65b35170f61044&X-Amz-SignedHeaders=host&x-id=GetObject)

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
