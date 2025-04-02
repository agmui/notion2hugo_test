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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOK66SAY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCID6fuQNaovJaqzKTiha2KZcO%2FVohtxN2mxgMuMAFe1HXAiBEGDAZBxsViWct0uIBI%2FfdHP108W3W2c8n%2FU8pmtehHCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQvb6kIyfBGKblj1KtwD42uM4%2FQFDf4keP80eHhhX8roeIgwtMI5Ldvdbt92kvemdLj5tHJpyrNFo4B0JZHruetntRzcLp63uT0T5vmTPLJgG%2F35dqccHQeGgVivoFSDZJ69Mcw6X6FBFlmJGWcEJBiRxuzTPhWOrRcX1IpTrH4xqNNcffzepR5fOdXzM5pLubdqGxYRWeDhc9KXtTe9NIIeGShYbWRKw0vCodInL%2BNQSqkH3jnDpvDi2dr4NHTTiQC%2FWHvCP6ROIfqmUKEH82lpNAC1wfI1EA3ZDK6EjwtjaHx9GuJL39AyHIapovNk%2FMH%2BQkcOmAatMnnuBpIDrN%2FHLkhgjDHkxzWgg%2FleCmgTkylQ%2B4wVfKfsNX8tqUMcquIEy1igauPk0%2BdrTouswLIZsJFSxPFyHn7ocGPSCQYJOHuh8tzDhd%2B4EPpDUAbKf0bBQ1HXMya20ICxpVayo5iHlUX4o207pCHfGJkX0KsOr4ZWgS%2Bk%2FLEDK5BmVCS%2Fxwk3ryje5AZzP5oJhk4HXFiTEb3Kwg%2FcYay0WbQ4HmJTZVOpEim6H9cY7Sk8BH%2Fky8CLLiFFfgl0eKa5ZMe0USayT0CwOpuXZpyZdGF7MEm7NJ%2Fk3gWhMpl%2BOwC4EWlv1R3VtdgxKuPIn78w78%2BzvwY6pgH1FvulcpvjuPLBTm6CoeoDaiuIgb1B2o1vHcyQZFZkMC9y%2BgzbeuYH9QzirfvTrownnXelMIKaCGcrvdwsfrN8z7zQOKMYjgZ9yLl6WzUrUSUtE%2FCPTCmFs3HpxpSFAPab98GbsoukdQYgHvJz%2B1cFEn6d1CEJ9gMIkgdnJJKikojduWvR5GsQcOcMmv3fXBr1MUc8%2FpPi5OuTX%2Fr4N0bjaPH1yzlL&X-Amz-Signature=669b544843e174ee2439b57e3165a532064d9a8436be11ffb88658949f961cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOK66SAY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCID6fuQNaovJaqzKTiha2KZcO%2FVohtxN2mxgMuMAFe1HXAiBEGDAZBxsViWct0uIBI%2FfdHP108W3W2c8n%2FU8pmtehHCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQvb6kIyfBGKblj1KtwD42uM4%2FQFDf4keP80eHhhX8roeIgwtMI5Ldvdbt92kvemdLj5tHJpyrNFo4B0JZHruetntRzcLp63uT0T5vmTPLJgG%2F35dqccHQeGgVivoFSDZJ69Mcw6X6FBFlmJGWcEJBiRxuzTPhWOrRcX1IpTrH4xqNNcffzepR5fOdXzM5pLubdqGxYRWeDhc9KXtTe9NIIeGShYbWRKw0vCodInL%2BNQSqkH3jnDpvDi2dr4NHTTiQC%2FWHvCP6ROIfqmUKEH82lpNAC1wfI1EA3ZDK6EjwtjaHx9GuJL39AyHIapovNk%2FMH%2BQkcOmAatMnnuBpIDrN%2FHLkhgjDHkxzWgg%2FleCmgTkylQ%2B4wVfKfsNX8tqUMcquIEy1igauPk0%2BdrTouswLIZsJFSxPFyHn7ocGPSCQYJOHuh8tzDhd%2B4EPpDUAbKf0bBQ1HXMya20ICxpVayo5iHlUX4o207pCHfGJkX0KsOr4ZWgS%2Bk%2FLEDK5BmVCS%2Fxwk3ryje5AZzP5oJhk4HXFiTEb3Kwg%2FcYay0WbQ4HmJTZVOpEim6H9cY7Sk8BH%2Fky8CLLiFFfgl0eKa5ZMe0USayT0CwOpuXZpyZdGF7MEm7NJ%2Fk3gWhMpl%2BOwC4EWlv1R3VtdgxKuPIn78w78%2BzvwY6pgH1FvulcpvjuPLBTm6CoeoDaiuIgb1B2o1vHcyQZFZkMC9y%2BgzbeuYH9QzirfvTrownnXelMIKaCGcrvdwsfrN8z7zQOKMYjgZ9yLl6WzUrUSUtE%2FCPTCmFs3HpxpSFAPab98GbsoukdQYgHvJz%2B1cFEn6d1CEJ9gMIkgdnJJKikojduWvR5GsQcOcMmv3fXBr1MUc8%2FpPi5OuTX%2Fr4N0bjaPH1yzlL&X-Amz-Signature=47bfc7cc205972c870203aca29a68326808039a7034cd064a03b43c12a92ea63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
