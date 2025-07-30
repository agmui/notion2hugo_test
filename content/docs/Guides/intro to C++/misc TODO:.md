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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TKX2LOI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEadwr5tiL1gfXr9wL1eLyNLZPDh4EQoxsPwuiygMFtAiBVQwOZ4LkTuXatt%2B9V7VQgGOfkgkCCLdad7tMFJtlm4CqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfojweAOF5djRZfWcKtwDKGuS3vQoHE8gTCYA0cEtpkKqh%2BcdaWCReYAxjU7OZBrqrDKEIxxFi3GDaOydAZugzs4q4Nv%2BxeRRiSGjIELWceoJAHQOTDfytadIOEwQXz8qF2WROSceDQ3tpxO5OsDVzYeFFZrYDhwm4LX%2B1XAYB0ZSyh8VNadgUgXhjDDhnV%2FehE18B5Wi%2Fen5VcawlIm5R%2B0kwuqQomfiBNUbqLZKusn0bEPtYWsMhD39pAJaD3H1nubVulKSJO%2Bs26NA7hyBIzD%2B6OJh%2FM0lGp3Xh4MBDCiSbqP2iwF54Z%2FwXPZocQ9ON1qN9LNfeW7o8zSzrs4MzAhjG%2B8gGWGreC2YgBsxQVj468ZFvFVQCSgHdpx49%2Bu6hWs8q1Jk2bH789wPd%2BZB7WlXemC79k%2F80BHq%2F6gDmOrrsRJ47t%2FTqjHGM9xTmETp6PuE1dX3k55fy%2BhqYFHp1IqpTjaBigjwz6WvRESI2fDMSZMjxqm5Cktznm3YTZrDdO2dG7hn3t5nKoNgFA6DuSk5NS8DUtvZFMSmjrKDCupXUXbKjHkCyvHkGGUiwKteKW33XehHypCnnKqMIYvDr%2FChqRITCZ6n9wewm%2BPWoh8z2DBWkNsoIeYa1MjaIvd6pXDWV6HJA0vmwWAwm6OoxAY6pgHvcrJFswtbJCRP15kgqF1ZvOzapISZMcaAVoH25F2IniHjZgjQ8AA%2FGS6GLX020nLs8yxQPtdUsYARoaCV6raLj307IU9dYLz1KjaJLLu%2Fq6uFnajbaeV2P%2Bldws02Ix05LDrVHtIT5S3lGfzNKwnyaCMSfkQ%2B0BRyxSBNqmVR%2FEdy%2BaJ%2FDLi4rzMfFgosUIQLoVkQRHs3tc%2FDX0M5Li51RcEqYFM7&X-Amz-Signature=a9fa40f00987862077c1b6209be1f8b7e282d4f03df30940b5c9216fd4fa71c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TKX2LOI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEadwr5tiL1gfXr9wL1eLyNLZPDh4EQoxsPwuiygMFtAiBVQwOZ4LkTuXatt%2B9V7VQgGOfkgkCCLdad7tMFJtlm4CqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfojweAOF5djRZfWcKtwDKGuS3vQoHE8gTCYA0cEtpkKqh%2BcdaWCReYAxjU7OZBrqrDKEIxxFi3GDaOydAZugzs4q4Nv%2BxeRRiSGjIELWceoJAHQOTDfytadIOEwQXz8qF2WROSceDQ3tpxO5OsDVzYeFFZrYDhwm4LX%2B1XAYB0ZSyh8VNadgUgXhjDDhnV%2FehE18B5Wi%2Fen5VcawlIm5R%2B0kwuqQomfiBNUbqLZKusn0bEPtYWsMhD39pAJaD3H1nubVulKSJO%2Bs26NA7hyBIzD%2B6OJh%2FM0lGp3Xh4MBDCiSbqP2iwF54Z%2FwXPZocQ9ON1qN9LNfeW7o8zSzrs4MzAhjG%2B8gGWGreC2YgBsxQVj468ZFvFVQCSgHdpx49%2Bu6hWs8q1Jk2bH789wPd%2BZB7WlXemC79k%2F80BHq%2F6gDmOrrsRJ47t%2FTqjHGM9xTmETp6PuE1dX3k55fy%2BhqYFHp1IqpTjaBigjwz6WvRESI2fDMSZMjxqm5Cktznm3YTZrDdO2dG7hn3t5nKoNgFA6DuSk5NS8DUtvZFMSmjrKDCupXUXbKjHkCyvHkGGUiwKteKW33XehHypCnnKqMIYvDr%2FChqRITCZ6n9wewm%2BPWoh8z2DBWkNsoIeYa1MjaIvd6pXDWV6HJA0vmwWAwm6OoxAY6pgHvcrJFswtbJCRP15kgqF1ZvOzapISZMcaAVoH25F2IniHjZgjQ8AA%2FGS6GLX020nLs8yxQPtdUsYARoaCV6raLj307IU9dYLz1KjaJLLu%2Fq6uFnajbaeV2P%2Bldws02Ix05LDrVHtIT5S3lGfzNKwnyaCMSfkQ%2B0BRyxSBNqmVR%2FEdy%2BaJ%2FDLi4rzMfFgosUIQLoVkQRHs3tc%2FDX0M5Li51RcEqYFM7&X-Amz-Signature=e2077a87ef85f37f862218622d79229472cac36bdd827cbd852da79cf38a5d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
