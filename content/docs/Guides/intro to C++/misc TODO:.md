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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJZTDGVF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICm37YwV0gmyaLfXe49D%2BBQynfgOMXAykq%2FD6KZv7CM9AiAUP6%2FGiLpBwaDYbEnSnuIRyGEgP%2BlAMaacVZlTt9ZrYCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3tjmvPtp4YEU5CMIKtwDTzKnYjZR03gWFl%2FI6oqSkZl9QaEyYSL2QQ2i1nZg1lGX%2BKxwd2vgnCFctmrMqBR27s7Ty7zZLpaeqO61pwOuyvOL54lyqZ2PlOvIz1rHHs4ZntY6uNzJ%2FFkLYJXeU9ZznQX78ktXFdXw8XUllzLfeD3KLi8cxkuEi0kzoSEjjTLXnRL%2BLAF8i75uvZNPdSewFAdrcXtREnQmfkh2%2FiI%2Fsqpj%2FIMa4LRwy8y%2FvOFCx8SUoROZ6HGy0990xSmVov0t%2BJPnQ%2FZlNS8Rwr4jxfD7lKCH%2BmrC45n%2FZPLDWL6CFJPqP2TPllE4D3XG42hLAjvllhGeGVESPnOzMvhIm0%2FyhvN3eV7T7ZkohWDI%2FShc9B%2BEgAmZBVuozg%2F067MgzqgwQZuX5MHd3btr3vlGE5ytqQkI5eOBk6GXfyVaYO9lxbFs3rwY1sFlcHdwGbkpTIjMassCrLCYhgDPVCL%2BF%2BBSm70qpM02K2uwKKc03MxDdCTpkpLSE8UBgQI8Ltp615QdpY6joDa0eIlwaEWh2VvkHGgnuAETsMHISk%2BdtYM%2Fel0QdE1fLGaUcjmLgyf6N7l9DikWrPcdQWc2PuDc1CIXKvgDd8Db1vQK48VOtPAuShX5UsDHLn3a%2BF9MQOIwiam0vgY6pgHzIAa0sirc7gOGS4dlk6KE1%2BxaXW1H%2Fv173xiTIRTuJYxIp54ysAJzhy8a%2B0GLuLK4%2Bh5MDQPbyj%2FIO4fUiJwKQyB8%2FOwnHRCw%2B5dm5YRdyjuMwnUO4LSoE0GpNC7wYkeUIQ0llZwyAcIyEH%2Bijp%2BwJKSp75SJ0ibCyJ0q6PFuhSsIgO4v1OJ5njT9eYdrXKfRdwrpVUwpUfWB5k6e26Lt7QTmhap%2F&X-Amz-Signature=36e982a2221b32ba4d9a5973504a9df2f1a292f35a08846f6378bdbacec33c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJZTDGVF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICm37YwV0gmyaLfXe49D%2BBQynfgOMXAykq%2FD6KZv7CM9AiAUP6%2FGiLpBwaDYbEnSnuIRyGEgP%2BlAMaacVZlTt9ZrYCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3tjmvPtp4YEU5CMIKtwDTzKnYjZR03gWFl%2FI6oqSkZl9QaEyYSL2QQ2i1nZg1lGX%2BKxwd2vgnCFctmrMqBR27s7Ty7zZLpaeqO61pwOuyvOL54lyqZ2PlOvIz1rHHs4ZntY6uNzJ%2FFkLYJXeU9ZznQX78ktXFdXw8XUllzLfeD3KLi8cxkuEi0kzoSEjjTLXnRL%2BLAF8i75uvZNPdSewFAdrcXtREnQmfkh2%2FiI%2Fsqpj%2FIMa4LRwy8y%2FvOFCx8SUoROZ6HGy0990xSmVov0t%2BJPnQ%2FZlNS8Rwr4jxfD7lKCH%2BmrC45n%2FZPLDWL6CFJPqP2TPllE4D3XG42hLAjvllhGeGVESPnOzMvhIm0%2FyhvN3eV7T7ZkohWDI%2FShc9B%2BEgAmZBVuozg%2F067MgzqgwQZuX5MHd3btr3vlGE5ytqQkI5eOBk6GXfyVaYO9lxbFs3rwY1sFlcHdwGbkpTIjMassCrLCYhgDPVCL%2BF%2BBSm70qpM02K2uwKKc03MxDdCTpkpLSE8UBgQI8Ltp615QdpY6joDa0eIlwaEWh2VvkHGgnuAETsMHISk%2BdtYM%2Fel0QdE1fLGaUcjmLgyf6N7l9DikWrPcdQWc2PuDc1CIXKvgDd8Db1vQK48VOtPAuShX5UsDHLn3a%2BF9MQOIwiam0vgY6pgHzIAa0sirc7gOGS4dlk6KE1%2BxaXW1H%2Fv173xiTIRTuJYxIp54ysAJzhy8a%2B0GLuLK4%2Bh5MDQPbyj%2FIO4fUiJwKQyB8%2FOwnHRCw%2B5dm5YRdyjuMwnUO4LSoE0GpNC7wYkeUIQ0llZwyAcIyEH%2Bijp%2BwJKSp75SJ0ibCyJ0q6PFuhSsIgO4v1OJ5njT9eYdrXKfRdwrpVUwpUfWB5k6e26Lt7QTmhap%2F&X-Amz-Signature=fca046f833396f7ef9f365dddebc4cbc83d4ee38e23c4f04fd07b5b905e67a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
