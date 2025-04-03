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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R2RD4GP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoKSeGzMn5KfL9%2BcPXd07iUR2eiwKVTFyKpVzkngtaEAiBtI0bMdWOGdk8%2F7mhhmXlzzoUWGC9TxXNV%2BivhzL353yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXXLXJDOfSvn%2BCyNKtwDyIs8mVWnUtQ%2FGaf5zdROAYt%2FIF6j5%2B0SiE6%2BZiAbMqNgIZdd%2B3%2Bx1sX%2BCsZv2u5qXMrQY9KrXhex8aCZBvzHIfXAfeffXedGYlCtGX7adHoV855KiFQjTTsH%2FBvh5IVR4T841O9pL3s63FKToy3NPzXDkB6IDDvWaeXgHEDJFgEjPYmYeUZ%2FUScxXT1dFaaqx8%2BrntVoHcKoalPVmIoh2hItW5dnfISgUuJcwk8VbXpp2dr13o9vhmyafGiES6Aq4HzOE%2Fb1YPunU5wjAImrdwfG9IE0%2BNrx6BdU1EYbtCLhBhV6izj1k9BjqvpMAKS50Jfyt9cKAONtDvtXB2RJ5ql7IRJe88%2FOzDaulOul98peBqQUNz07QCOzTXF4PEEoWYNCYe7xfFGCPegF0quBeaQ4L47H%2FoH6VowQHAC95GsGe5I72IMTC58AELs32C5U2iBogRPPbUhUr10XnezVyUANEqDNd4Mkkyh2ZvGFyzmfYyndZu3nEc5G5h%2F59Hw%2B15Ph%2FGlBjlrd59qPHySLh6g77fYQPY9Y2xh6rzq6XELv9GKCBGXIU42sNBM%2BI3WzIbuOwuuoMZxD%2F8eLP5nNV3u38iZ5W7RdfdvZbzb4TB1DYd8ov6ezJknw9XIw35y7vwY6pgGmuGtvQawhwwWnbE3jMPRoGAWSR3Dnz7nJmJnFlu%2FizALmwkJqRvXcBTlK%2BxNygDl9aXByDY%2BqnVmkcAuK7yOlvX8fcGNIPRYWD0JnJwZ7aDQ0fqY4czxwzQSlLrbXs3EcMQlP5wVpsZY6Y4jMq10iaw%2BZ2u%2BCy7N3wts9NVHPNWo7ChwRDCNoJWyKrDrhDKKnXFFG89zh1Yx7Hss5Hpz6%2B1fdKeFL&X-Amz-Signature=10f1ab6b6175d06f01be74dca0723ff4178cd2029a1a5a1424d373b89e6a481b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R2RD4GP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoKSeGzMn5KfL9%2BcPXd07iUR2eiwKVTFyKpVzkngtaEAiBtI0bMdWOGdk8%2F7mhhmXlzzoUWGC9TxXNV%2BivhzL353yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXXLXJDOfSvn%2BCyNKtwDyIs8mVWnUtQ%2FGaf5zdROAYt%2FIF6j5%2B0SiE6%2BZiAbMqNgIZdd%2B3%2Bx1sX%2BCsZv2u5qXMrQY9KrXhex8aCZBvzHIfXAfeffXedGYlCtGX7adHoV855KiFQjTTsH%2FBvh5IVR4T841O9pL3s63FKToy3NPzXDkB6IDDvWaeXgHEDJFgEjPYmYeUZ%2FUScxXT1dFaaqx8%2BrntVoHcKoalPVmIoh2hItW5dnfISgUuJcwk8VbXpp2dr13o9vhmyafGiES6Aq4HzOE%2Fb1YPunU5wjAImrdwfG9IE0%2BNrx6BdU1EYbtCLhBhV6izj1k9BjqvpMAKS50Jfyt9cKAONtDvtXB2RJ5ql7IRJe88%2FOzDaulOul98peBqQUNz07QCOzTXF4PEEoWYNCYe7xfFGCPegF0quBeaQ4L47H%2FoH6VowQHAC95GsGe5I72IMTC58AELs32C5U2iBogRPPbUhUr10XnezVyUANEqDNd4Mkkyh2ZvGFyzmfYyndZu3nEc5G5h%2F59Hw%2B15Ph%2FGlBjlrd59qPHySLh6g77fYQPY9Y2xh6rzq6XELv9GKCBGXIU42sNBM%2BI3WzIbuOwuuoMZxD%2F8eLP5nNV3u38iZ5W7RdfdvZbzb4TB1DYd8ov6ezJknw9XIw35y7vwY6pgGmuGtvQawhwwWnbE3jMPRoGAWSR3Dnz7nJmJnFlu%2FizALmwkJqRvXcBTlK%2BxNygDl9aXByDY%2BqnVmkcAuK7yOlvX8fcGNIPRYWD0JnJwZ7aDQ0fqY4czxwzQSlLrbXs3EcMQlP5wVpsZY6Y4jMq10iaw%2BZ2u%2BCy7N3wts9NVHPNWo7ChwRDCNoJWyKrDrhDKKnXFFG89zh1Yx7Hss5Hpz6%2B1fdKeFL&X-Amz-Signature=f4901af60d3de53ea9602b09ff1bad4a3821477ceb17e5ce415b1fd47fabecff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
