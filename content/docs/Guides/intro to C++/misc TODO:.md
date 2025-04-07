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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ36EYTI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL9iECv4XKDvHHEB8Pg3MhhcdNSjijVaDsxXr8yogdIAiEA7xkJ1j3VbxVNM41wA5I4D4ODHuXBnsmWbWCOg5H8AWEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDCtPu%2F2auUSQZPYPSrcA9nJXZ2wXbuCX%2F1ZnkD7XmB2z9VLKK%2BRtslp1oPgab%2BBKrZCOhyusrWQiZ6v6fNFx6TKTUs8zPP5%2FBZJ5rxluEdXCKQpXwsU1g2tlL2yln7PAfsatcEKaeuanYnGRUSM1svtpvxdWoXrERSOskW2mUTd1RwF%2BA9q%2B8PO6%2FPBln45cWvtPjNMP1l5UmW0ohMfYxz6r05VszCJfWMNnhIXBxMkFqjOv5Erw2tvF8aNoG2mzjYuM0KC%2B3dStXrlEUAHO4eRYqS78rQsV0j0YDMvV9Oz1%2Fik2GJdcrqTiScaVrXNjiEsXn3VQQnH3E8llgZNd5vKS85EyUAw8zl62Quo0B9Y6pppkpdYv%2FQQgJx6qS%2BWqZoX0GUpom7h87c7ZSU%2FDn4nNCx%2B3RpLn03xx6Xwj3XceCXGAraC6um1osp5oJ%2BMgZ%2FqG%2Fc2ShAP7VzO%2B4FaQH7oNV0xCfMXlIGrDAW6D6zmw6lJXxjf70Bel%2FCkyW7%2BUhaFWeJWKN0Udl5MiPZchEnYpYjqkKLe5%2ByT%2Fno1YeNWfr6DZslylwo44v4ddUaEHdD4WCmrLV63gw2a8vQtDH0OjKmmETXMAhVibdxJ%2FQ9n2f3fDRUC1n6aSq6kJwVkao2njUtZ5jbM0vUcMLyE0b8GOqUBRY%2FPkpUEq%2FanK9QZD9gKdJ5r8wyO8CawJIGrIdvrtqusMcLSE4cidXA5tfHqxds8uwPDZnay79T50TsWKQvhJe%2BDW5qwyXvZK4cN8nfwPeeMo32UIw%2BMVatlvkitj4sS2JoQEeq%2B%2FMjt11mYaTPRagUn0ISC9yvXHUVQ3eALsedfWm28AQQXKxgx%2F2%2FgvEqF2dN6cAuwB%2BLsyrSWDtkgDKVOXNkh&X-Amz-Signature=ad07fd370d29f32b326a21ae1111657fcc6654bfe0ce7f066d2992a97ccbb0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ36EYTI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL9iECv4XKDvHHEB8Pg3MhhcdNSjijVaDsxXr8yogdIAiEA7xkJ1j3VbxVNM41wA5I4D4ODHuXBnsmWbWCOg5H8AWEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDCtPu%2F2auUSQZPYPSrcA9nJXZ2wXbuCX%2F1ZnkD7XmB2z9VLKK%2BRtslp1oPgab%2BBKrZCOhyusrWQiZ6v6fNFx6TKTUs8zPP5%2FBZJ5rxluEdXCKQpXwsU1g2tlL2yln7PAfsatcEKaeuanYnGRUSM1svtpvxdWoXrERSOskW2mUTd1RwF%2BA9q%2B8PO6%2FPBln45cWvtPjNMP1l5UmW0ohMfYxz6r05VszCJfWMNnhIXBxMkFqjOv5Erw2tvF8aNoG2mzjYuM0KC%2B3dStXrlEUAHO4eRYqS78rQsV0j0YDMvV9Oz1%2Fik2GJdcrqTiScaVrXNjiEsXn3VQQnH3E8llgZNd5vKS85EyUAw8zl62Quo0B9Y6pppkpdYv%2FQQgJx6qS%2BWqZoX0GUpom7h87c7ZSU%2FDn4nNCx%2B3RpLn03xx6Xwj3XceCXGAraC6um1osp5oJ%2BMgZ%2FqG%2Fc2ShAP7VzO%2B4FaQH7oNV0xCfMXlIGrDAW6D6zmw6lJXxjf70Bel%2FCkyW7%2BUhaFWeJWKN0Udl5MiPZchEnYpYjqkKLe5%2ByT%2Fno1YeNWfr6DZslylwo44v4ddUaEHdD4WCmrLV63gw2a8vQtDH0OjKmmETXMAhVibdxJ%2FQ9n2f3fDRUC1n6aSq6kJwVkao2njUtZ5jbM0vUcMLyE0b8GOqUBRY%2FPkpUEq%2FanK9QZD9gKdJ5r8wyO8CawJIGrIdvrtqusMcLSE4cidXA5tfHqxds8uwPDZnay79T50TsWKQvhJe%2BDW5qwyXvZK4cN8nfwPeeMo32UIw%2BMVatlvkitj4sS2JoQEeq%2B%2FMjt11mYaTPRagUn0ISC9yvXHUVQ3eALsedfWm28AQQXKxgx%2F2%2FgvEqF2dN6cAuwB%2BLsyrSWDtkgDKVOXNkh&X-Amz-Signature=e6e19fba3900766a8f34b0cef5811a48f7549fffaadcf87f4fb466e5f6801d34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
