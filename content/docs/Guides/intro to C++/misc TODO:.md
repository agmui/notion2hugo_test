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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJNWZTK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBYQy2ikHeTqZQV2oBuVMJ8yqktyUvhGO2Zc%2BviUk%2BQIgXO%2FLUpr7woRJUxt6qhndROeqQrNhWxhdSIQ%2FFAl84sAq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDGyWAfQ2IxdIzQl7ByrcA0wk2QnS9dmOrQHHh612lOxKSVPhhBHsfKHlyrxIknKiapWbVCjcXGTb0P%2F8giCfK3aKOxH909h8u%2BV6rAnJ9rXHJnTa27BrYgnpnzbAUdzWtTYDoC4LsdQgD9dQl4smrRvqv2bAXgugcfOGmT6yPejxHSOCTvJ2PZ6T%2BG4%2F6Fti9yZQIkpFZUOxJD6159zTDSQD8zvB%2FAhAWRg7aPukM2MAAIem9vJBM%2BXFYg3zBVreMGasjibpdqPITyy9RgLmA2RCv%2B1vyiH7UzxaYCkBQaqZdSwtTZtTzJBYFiR8EpTNKLtXovJioPtVa3Js8IQbEE0xxrcJvcVzfF5Zp82ks%2FG0c7K9VmtEfFQcfBWw2WEC4eFe6Ily9LrDFFQj3XUzYiuBd7QQstz8FJxYuGaOdHp86rBijlVTnvQVJhQmWT40ngFMbAw%2BWCq%2FOIu8MzO%2BbkRpuh5Htx%2BZoFhSuzfvmTPjweZNtg6T98KEg4%2FQu88%2Fdk6YI3qyAywWUjr3B8gfc72jlAuGj0DIHMwzSAUiEm4PnmgeZeWHeyBeZfXjS6gmvGb97ly3pY5aUIHg7swRAzXr2m6pLPhM72Q9znCiE6Y%2BM7dn9i6IDlIP8hgKqvmLCjF4nieEZRN9lpS%2BMKqvoL4GOqUBPCd69NYEeVIDGkwkfzj003t4qBjCgLWNYxyPEjrsoh9Hp3mtmO8nfTXQw2zYaganqGZ%2FAhHSN3%2BJY8QeOOmZcONz9x0Eu4LH%2BUhk85Qwhe2zainuL95jN1mYWUfXYcxoHEnEkq%2F81%2Fn6GbxWsWVV2vtUlM%2BHzRLGNFPBa264ax%2FIf%2BOUmiBMAKow5AcbUFCXo9MJG6PDttdxF2URH52Rx1ml%2FZjS&X-Amz-Signature=496089f4ded20d8b4acdf1e7f9b1402123b24bc5b3bbafe657ea89e4ece9f87a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJNWZTK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBYQy2ikHeTqZQV2oBuVMJ8yqktyUvhGO2Zc%2BviUk%2BQIgXO%2FLUpr7woRJUxt6qhndROeqQrNhWxhdSIQ%2FFAl84sAq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDGyWAfQ2IxdIzQl7ByrcA0wk2QnS9dmOrQHHh612lOxKSVPhhBHsfKHlyrxIknKiapWbVCjcXGTb0P%2F8giCfK3aKOxH909h8u%2BV6rAnJ9rXHJnTa27BrYgnpnzbAUdzWtTYDoC4LsdQgD9dQl4smrRvqv2bAXgugcfOGmT6yPejxHSOCTvJ2PZ6T%2BG4%2F6Fti9yZQIkpFZUOxJD6159zTDSQD8zvB%2FAhAWRg7aPukM2MAAIem9vJBM%2BXFYg3zBVreMGasjibpdqPITyy9RgLmA2RCv%2B1vyiH7UzxaYCkBQaqZdSwtTZtTzJBYFiR8EpTNKLtXovJioPtVa3Js8IQbEE0xxrcJvcVzfF5Zp82ks%2FG0c7K9VmtEfFQcfBWw2WEC4eFe6Ily9LrDFFQj3XUzYiuBd7QQstz8FJxYuGaOdHp86rBijlVTnvQVJhQmWT40ngFMbAw%2BWCq%2FOIu8MzO%2BbkRpuh5Htx%2BZoFhSuzfvmTPjweZNtg6T98KEg4%2FQu88%2Fdk6YI3qyAywWUjr3B8gfc72jlAuGj0DIHMwzSAUiEm4PnmgeZeWHeyBeZfXjS6gmvGb97ly3pY5aUIHg7swRAzXr2m6pLPhM72Q9znCiE6Y%2BM7dn9i6IDlIP8hgKqvmLCjF4nieEZRN9lpS%2BMKqvoL4GOqUBPCd69NYEeVIDGkwkfzj003t4qBjCgLWNYxyPEjrsoh9Hp3mtmO8nfTXQw2zYaganqGZ%2FAhHSN3%2BJY8QeOOmZcONz9x0Eu4LH%2BUhk85Qwhe2zainuL95jN1mYWUfXYcxoHEnEkq%2F81%2Fn6GbxWsWVV2vtUlM%2BHzRLGNFPBa264ax%2FIf%2BOUmiBMAKow5AcbUFCXo9MJG6PDttdxF2URH52Rx1ml%2FZjS&X-Amz-Signature=971cde6867ed0b2f6bc07624918d1c975b80cb9b80cce844120639cc3e64daa6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
