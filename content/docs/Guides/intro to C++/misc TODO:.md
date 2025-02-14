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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GCUX2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDDX2dDKYgb0gfXM0bue%2B%2FZnv7pSUq6k98bfir2ZIjpqAIhAICYYsWWfjYG3IfeFyzXmUMmPZjNO8r6Ivz98d%2FnJG3PKv8DCDgQABoMNjM3NDIzMTgzODA1Igy5MXCab%2FcLLzE%2F5FQq3AM%2FFJYD2Yyg26OUDXDMJ%2BkEpq2ZuUcYiNZN5UWYIrnC9CLgo9La14cMuhd7eYZNtGnVZxMrqebGPOBWRRZNvCsCnJJ%2BpPg8Ve84q6SM%2FBg1EkiKJo6LyA1lR1NHh5hjw%2BM%2FKwym5Adm%2FFIrBgNV71XFrnT77kTnnTEKj%2FNG1DJ4sOE8mwnMgPvIRLY9%2BLox1NFCawWG2JIcIr1E%2BrCe5R0u%2BRaYZ4FNpJbeO3TRZn6KR0UFArlr%2FoyEa6avf1NzPsh1bK3E5UE7nd1461mNCbMS2vxz7ZbkCL78ubsKDQnSXmy8o1qmrkxOyX%2BtmdhoAZE7t6axYq0oBMp8GIyaCYpirO6FJ6L96AJChqYkqfGIiXaen%2F1I8epKg8TO6zAW1jbdiDp%2BT6X6S96GmlOOv42kTaFrLzpvaDYSjwM%2Bdhh4rvK0uBwB%2F3Ctnc2xOeM1OWokeYm4PLm2RYEYtzakxOnWXpyCpTEFltuhdfPHfo2SJZRLXy4Ve%2F5K0SDGCwbARgmd8EBlpeLIidTanWTOjUmjg2QDBejFrOfDxZSrgEuEZaewfcZqhHEptSK%2Bsc7QDe0VuaQ9vJTSeWxbcnIqJATL%2BBfeLWG900oY7V4KQOPdunXYVq%2BZNjqZHoCxqjCVlb%2B9BjqkAcS9G48LHfm%2BBBLKgZKFj2OlrBUSEr9yESXU1OG2HUnyU73PTCB6H9rwm0lk5gGLho7uxqOUFplLqzHLiV7O60fLgSYn3DAdnuS0%2FLHal0ZveswOeI89kQ7Lgk8R8WUPfREbMwg%2BJKBt92CcBDdExNNitRGoSrcZqElUGqHNXdwHEeVnZ%2FhFumy8Fb87MLSyHPJAZsXiXwebxhvAEhvzaC4Wwm2r&X-Amz-Signature=62b1e482fa20724e07ed99c3281acb93b11d2688c69236d1b17d09ae4180a1aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GCUX2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDDX2dDKYgb0gfXM0bue%2B%2FZnv7pSUq6k98bfir2ZIjpqAIhAICYYsWWfjYG3IfeFyzXmUMmPZjNO8r6Ivz98d%2FnJG3PKv8DCDgQABoMNjM3NDIzMTgzODA1Igy5MXCab%2FcLLzE%2F5FQq3AM%2FFJYD2Yyg26OUDXDMJ%2BkEpq2ZuUcYiNZN5UWYIrnC9CLgo9La14cMuhd7eYZNtGnVZxMrqebGPOBWRRZNvCsCnJJ%2BpPg8Ve84q6SM%2FBg1EkiKJo6LyA1lR1NHh5hjw%2BM%2FKwym5Adm%2FFIrBgNV71XFrnT77kTnnTEKj%2FNG1DJ4sOE8mwnMgPvIRLY9%2BLox1NFCawWG2JIcIr1E%2BrCe5R0u%2BRaYZ4FNpJbeO3TRZn6KR0UFArlr%2FoyEa6avf1NzPsh1bK3E5UE7nd1461mNCbMS2vxz7ZbkCL78ubsKDQnSXmy8o1qmrkxOyX%2BtmdhoAZE7t6axYq0oBMp8GIyaCYpirO6FJ6L96AJChqYkqfGIiXaen%2F1I8epKg8TO6zAW1jbdiDp%2BT6X6S96GmlOOv42kTaFrLzpvaDYSjwM%2Bdhh4rvK0uBwB%2F3Ctnc2xOeM1OWokeYm4PLm2RYEYtzakxOnWXpyCpTEFltuhdfPHfo2SJZRLXy4Ve%2F5K0SDGCwbARgmd8EBlpeLIidTanWTOjUmjg2QDBejFrOfDxZSrgEuEZaewfcZqhHEptSK%2Bsc7QDe0VuaQ9vJTSeWxbcnIqJATL%2BBfeLWG900oY7V4KQOPdunXYVq%2BZNjqZHoCxqjCVlb%2B9BjqkAcS9G48LHfm%2BBBLKgZKFj2OlrBUSEr9yESXU1OG2HUnyU73PTCB6H9rwm0lk5gGLho7uxqOUFplLqzHLiV7O60fLgSYn3DAdnuS0%2FLHal0ZveswOeI89kQ7Lgk8R8WUPfREbMwg%2BJKBt92CcBDdExNNitRGoSrcZqElUGqHNXdwHEeVnZ%2FhFumy8Fb87MLSyHPJAZsXiXwebxhvAEhvzaC4Wwm2r&X-Amz-Signature=ccde8bf6f2e39ecbd2b29d75eb196276747dbe84bf190ce55418de51ea159e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
