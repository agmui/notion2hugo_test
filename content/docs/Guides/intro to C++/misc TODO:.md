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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIX3CRV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLQoLI1Te5IeGB%2FgenQN2Jm9iWbfcXqSmRxUDuSpVPhAiAUSGwdx7h2geBXRcao1V0LhT5Uqu7nxzrdcxGR7x2tRyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxE6ytNZTPGMyM%2Bv1KtwDN29iAsta0mij%2FbyC4mCufziIwBG0HR9eUl%2BmvyR6QsfUSYb4qAFSV2ig6wrZUMNK%2BGJ3%2FCT4T7iNDXT6zvDlPj8bL9pXVo97AUUNW90i3%2FZkh4Kep4DmfHyIUDTKw%2BLg040SOKOdxJ7c3VXbbWj11rCa0IP3S0ADlWCSkdyegsSGHCoksMTVNn%2F0J1bUcYRHPT8EcQLEpywbJs7LpueWyBxXnH2l0eZHJeZAuNzsuynhPkWt7rKzyIbXRvtBNW%2B00JY%2Fy%2FrlbRcA693sLis4nVA7AWR1GCDUd7OFAk47E4Dna1UFwZAGjNv0Usy6AjpY1fq%2B03OuS9G4P8kCWGjSKja4F5jtQ8TR2UqZBey%2FQr8zXQk%2FXaXRXjZ1FyFwKAhTA3%2BLBhg1zRm3t3%2FhqAAPiCUbDu8QqKI0Xm%2BzvZ5FjWEfgUkbmiA4%2BoWhx%2BiaNSzE%2BkdgUkVVZ1sEMpNopQpmuAMnCO9lXKaoyqRfzIQCkRmRqQdyAv%2BnxYXWqdFt5T8OZsyAS5z8ZaxIcLLRXjI4b6XKUKuT%2BwFjA7TsWE21TFnmy%2BKIq7%2FeGP4rNnVNaEG5d2fZkr%2BqDI1Uc5YrlAtqF%2FErQ8Js2SQoW5r7If6iqkUVEhmBEt%2B0fWLW8VgwhZKHvwY6pgFQBD3u9JUbaBa4D%2BEYl01JRrzF9W8iPz6ptzEQTjYfnpBZXgHKHs9dboHz%2BXlurVDsLfHhpbo4RzNKfuGfJR3Z%2FKY7B4fEscNfi9niD7pcWddJC%2B%2BafRkFKGZHFTXTOrf1KNiHFrQQiph0TSRLXHDSGpwnXhTNYVlpJPagz9UlH6ubFxiVhFWES9BMPyMU4OTg%2F8Px3yuyFFz%2FurQ5IedGSDyjmo0J&X-Amz-Signature=9185f740816f05363ba9f22a0486d270ab67ea66ca34df0f971fb3b81151afb6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIX3CRV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLQoLI1Te5IeGB%2FgenQN2Jm9iWbfcXqSmRxUDuSpVPhAiAUSGwdx7h2geBXRcao1V0LhT5Uqu7nxzrdcxGR7x2tRyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxE6ytNZTPGMyM%2Bv1KtwDN29iAsta0mij%2FbyC4mCufziIwBG0HR9eUl%2BmvyR6QsfUSYb4qAFSV2ig6wrZUMNK%2BGJ3%2FCT4T7iNDXT6zvDlPj8bL9pXVo97AUUNW90i3%2FZkh4Kep4DmfHyIUDTKw%2BLg040SOKOdxJ7c3VXbbWj11rCa0IP3S0ADlWCSkdyegsSGHCoksMTVNn%2F0J1bUcYRHPT8EcQLEpywbJs7LpueWyBxXnH2l0eZHJeZAuNzsuynhPkWt7rKzyIbXRvtBNW%2B00JY%2Fy%2FrlbRcA693sLis4nVA7AWR1GCDUd7OFAk47E4Dna1UFwZAGjNv0Usy6AjpY1fq%2B03OuS9G4P8kCWGjSKja4F5jtQ8TR2UqZBey%2FQr8zXQk%2FXaXRXjZ1FyFwKAhTA3%2BLBhg1zRm3t3%2FhqAAPiCUbDu8QqKI0Xm%2BzvZ5FjWEfgUkbmiA4%2BoWhx%2BiaNSzE%2BkdgUkVVZ1sEMpNopQpmuAMnCO9lXKaoyqRfzIQCkRmRqQdyAv%2BnxYXWqdFt5T8OZsyAS5z8ZaxIcLLRXjI4b6XKUKuT%2BwFjA7TsWE21TFnmy%2BKIq7%2FeGP4rNnVNaEG5d2fZkr%2BqDI1Uc5YrlAtqF%2FErQ8Js2SQoW5r7If6iqkUVEhmBEt%2B0fWLW8VgwhZKHvwY6pgFQBD3u9JUbaBa4D%2BEYl01JRrzF9W8iPz6ptzEQTjYfnpBZXgHKHs9dboHz%2BXlurVDsLfHhpbo4RzNKfuGfJR3Z%2FKY7B4fEscNfi9niD7pcWddJC%2B%2BafRkFKGZHFTXTOrf1KNiHFrQQiph0TSRLXHDSGpwnXhTNYVlpJPagz9UlH6ubFxiVhFWES9BMPyMU4OTg%2F8Px3yuyFFz%2FurQ5IedGSDyjmo0J&X-Amz-Signature=35c3fa32170c45c52535f9b85fa62ecc4cfc69a84073dd437326262c16ae2bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
