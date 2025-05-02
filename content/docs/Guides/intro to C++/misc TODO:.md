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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGK3EWJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGfWYpTSHuDs6C93iIzNf5g%2FK%2Fop7GkIWysq97823HtQAiAsxDyPr%2Bq79559pIaxPjSteF7CElxVNMMxBgDFtpmJ8iqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSSmV9IEsT3Ro%2FlZqKtwDC4P46b4Mr1Ih%2BXehO0aTxLvSkviisHRWvxe28TPF0OJAr3FXR3W%2B58VT6dA3IIcA%2F4NF9LbZsiqjhBqASWACtOyRX3yHzC3COlOSuhM2ouMOix7%2FJF07NCOkVBnuaDjX8wKU0poONQ1dj4oD7Y0m%2BoZncUg6IxjXyWlEevkf74Kr6rO%2Fce0wKhXhOPOzrBr5z3xCbiN7zpJ%2Bg%2FnswTnr1wsQO8WxgKkGLHl87%2BsnmK61ERb6LzZpQ%2F5Kt78Q3h2GJ0qZ5eWDJSgSZcs1Y7a8wXd8rImpAZrYcrM1BuTL%2F1DUud9DUmIX3AsmDQ6XfuMFZyxX6MU41wjf9zNPS2Lphia%2F13VCqwVM78j1MRXRLQzuvvCJxTtdNYc7sEkVh%2BDweMHbzNL2kigg3%2BxAzGgIVySKbpEt8CxOn8KA2ABXLINijjl3j1NvvWgj5lw0eGI9m1Cx61%2FUDsfbblb9egqPzJWMReTUOm1xy3wHMg%2Bm3uuWmeXiiz7t5af0t1KClL4%2FUJcoSr5B5fIS0KqP9ZeYdasncSgYvjOhbo%2FhVrxFCHP2AdBI70yNdJ3%2BBxMOU3cMF4Z6Qq7%2FcD0cF5E06139fFLvc5R0vYEoMx%2Bw5OChKDLxJcWuG4pHWMaB8RcwsqzTwAY6pgFuary%2Fh7oTG5CqbTkmvwF2%2B3J792OYj%2BJkDDp4Kt2RBgjEKqpAFYuPcTrJj4D7jT7htQrwITwDLyFrCeLNgIKOoxaggiWiLbxmjzlmx0eQA%2BMT5Zgp73dj%2FwBj4drDEKwYuFIIvUQA51zZDKjtDmmr5lwlzFtjM9W1bvZNWOG64vDemZHUj1o16UwwSQ4GNCs4ajyjRJcIknkdcAcbfvJw7cYPFupo&X-Amz-Signature=0b999893a5d70b18732eff53b559939e273c124040db97f609d42ff8fa31ff04&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGK3EWJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGfWYpTSHuDs6C93iIzNf5g%2FK%2Fop7GkIWysq97823HtQAiAsxDyPr%2Bq79559pIaxPjSteF7CElxVNMMxBgDFtpmJ8iqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSSmV9IEsT3Ro%2FlZqKtwDC4P46b4Mr1Ih%2BXehO0aTxLvSkviisHRWvxe28TPF0OJAr3FXR3W%2B58VT6dA3IIcA%2F4NF9LbZsiqjhBqASWACtOyRX3yHzC3COlOSuhM2ouMOix7%2FJF07NCOkVBnuaDjX8wKU0poONQ1dj4oD7Y0m%2BoZncUg6IxjXyWlEevkf74Kr6rO%2Fce0wKhXhOPOzrBr5z3xCbiN7zpJ%2Bg%2FnswTnr1wsQO8WxgKkGLHl87%2BsnmK61ERb6LzZpQ%2F5Kt78Q3h2GJ0qZ5eWDJSgSZcs1Y7a8wXd8rImpAZrYcrM1BuTL%2F1DUud9DUmIX3AsmDQ6XfuMFZyxX6MU41wjf9zNPS2Lphia%2F13VCqwVM78j1MRXRLQzuvvCJxTtdNYc7sEkVh%2BDweMHbzNL2kigg3%2BxAzGgIVySKbpEt8CxOn8KA2ABXLINijjl3j1NvvWgj5lw0eGI9m1Cx61%2FUDsfbblb9egqPzJWMReTUOm1xy3wHMg%2Bm3uuWmeXiiz7t5af0t1KClL4%2FUJcoSr5B5fIS0KqP9ZeYdasncSgYvjOhbo%2FhVrxFCHP2AdBI70yNdJ3%2BBxMOU3cMF4Z6Qq7%2FcD0cF5E06139fFLvc5R0vYEoMx%2Bw5OChKDLxJcWuG4pHWMaB8RcwsqzTwAY6pgFuary%2Fh7oTG5CqbTkmvwF2%2B3J792OYj%2BJkDDp4Kt2RBgjEKqpAFYuPcTrJj4D7jT7htQrwITwDLyFrCeLNgIKOoxaggiWiLbxmjzlmx0eQA%2BMT5Zgp73dj%2FwBj4drDEKwYuFIIvUQA51zZDKjtDmmr5lwlzFtjM9W1bvZNWOG64vDemZHUj1o16UwwSQ4GNCs4ajyjRJcIknkdcAcbfvJw7cYPFupo&X-Amz-Signature=120e8062904ca0962d902b88741bea2e27c7ae0d133ad2d16b821186fccdf251&X-Amz-SignedHeaders=host&x-id=GetObject)

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
