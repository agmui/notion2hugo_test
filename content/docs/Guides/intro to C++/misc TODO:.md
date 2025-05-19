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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMLLSUG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BwQjKb7pzkiu5KSYIrxgpsbMC9Jsg36AI4pXkqWHnAIgfaLMgO9bFK%2BT9w9QQoar%2FSWROMikry00c4PNmrPz7oYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBf1f4PlYXyMtvusyrcA%2Bcd8uxsU%2Fw2bLQoiqil0x7xBmK81vYfmyMxUYWVuqZs45jNxGqN5G%2BScTpiPr81s9vt7xetEy8%2FBR3KOOCvbcwcHlxLszU%2BtFwo3GO2nxbNj2ZhFM7KwkfK2dYFvQ7GnRx6CiJVRZRzuOFeaYt4L5qveH9KD%2B7QtQAqm5fwNCL264HeIW0ifdwvrYoOHtL%2BtROwy6Um084c3x01NlFq80mOFdS%2Bi6JO6o6O2bhBlBcCAjSfxmMrZIJE9d%2FA6XVmBMhOjQyxz3wDyYj8C4%2FXi%2BKlSpvXzwtDYmLqnmHzNM0Ws4VjmBmlqlk557f2CVfZQ%2FTf%2Frq2gkBQ28s3ZdyGoup1aUKZZgv3jmOlUY4kpZsTNzKgNjU4jm%2FIiomfxFHiJxqqSKy4zCfpkfXuiJfppImi8T6IWZEpsyEpkoJkj9q%2BZGUlqanMeXn79%2Fry3JgnEtZSA4wcrcw22AVozRjekDJZLe9hAS04fr1d83Vc9Dlu4mvtMfqT2sKp1i0npS9rk3MMMwQCb8FPkc2CPRMV0rZxYDe8k9S5uyVcwvN5M48ABRNBTLPWgV8Pu0Hg8vJm3PhGvfJHWPWIxjXD0B1uMxV0STBARvNhSsgIzquP9pNKH9P6R6BeO85Qesw%2FMMiurcEGOqUBALX9hBOPYZ9y%2BaYd4N36pORDzpatKHBMTvVpujo5ryEh%2Fkt18J1GJWtwsXOMzDLAVCq50noelrpA1HtXqi%2BY29FGNASS%2B6E14E8lv%2Fe3HBN2zrlMIMLLfSiOfwkG3g%2BnSH0vV0QDlOsVRlmKgAb0h41b5DLKLlxZiNOZdznMV%2FjeMW4prlLS0j5HqeYaT7RIHVCRA80ATGIjgD9WS6aPgFAgxJFH&X-Amz-Signature=657ba511cc1459fa12a7787482c475176b8c5e036290c26f1f90d9629d492a37&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMLLSUG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BwQjKb7pzkiu5KSYIrxgpsbMC9Jsg36AI4pXkqWHnAIgfaLMgO9bFK%2BT9w9QQoar%2FSWROMikry00c4PNmrPz7oYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBf1f4PlYXyMtvusyrcA%2Bcd8uxsU%2Fw2bLQoiqil0x7xBmK81vYfmyMxUYWVuqZs45jNxGqN5G%2BScTpiPr81s9vt7xetEy8%2FBR3KOOCvbcwcHlxLszU%2BtFwo3GO2nxbNj2ZhFM7KwkfK2dYFvQ7GnRx6CiJVRZRzuOFeaYt4L5qveH9KD%2B7QtQAqm5fwNCL264HeIW0ifdwvrYoOHtL%2BtROwy6Um084c3x01NlFq80mOFdS%2Bi6JO6o6O2bhBlBcCAjSfxmMrZIJE9d%2FA6XVmBMhOjQyxz3wDyYj8C4%2FXi%2BKlSpvXzwtDYmLqnmHzNM0Ws4VjmBmlqlk557f2CVfZQ%2FTf%2Frq2gkBQ28s3ZdyGoup1aUKZZgv3jmOlUY4kpZsTNzKgNjU4jm%2FIiomfxFHiJxqqSKy4zCfpkfXuiJfppImi8T6IWZEpsyEpkoJkj9q%2BZGUlqanMeXn79%2Fry3JgnEtZSA4wcrcw22AVozRjekDJZLe9hAS04fr1d83Vc9Dlu4mvtMfqT2sKp1i0npS9rk3MMMwQCb8FPkc2CPRMV0rZxYDe8k9S5uyVcwvN5M48ABRNBTLPWgV8Pu0Hg8vJm3PhGvfJHWPWIxjXD0B1uMxV0STBARvNhSsgIzquP9pNKH9P6R6BeO85Qesw%2FMMiurcEGOqUBALX9hBOPYZ9y%2BaYd4N36pORDzpatKHBMTvVpujo5ryEh%2Fkt18J1GJWtwsXOMzDLAVCq50noelrpA1HtXqi%2BY29FGNASS%2B6E14E8lv%2Fe3HBN2zrlMIMLLfSiOfwkG3g%2BnSH0vV0QDlOsVRlmKgAb0h41b5DLKLlxZiNOZdznMV%2FjeMW4prlLS0j5HqeYaT7RIHVCRA80ATGIjgD9WS6aPgFAgxJFH&X-Amz-Signature=b3ff4bf465c9200a890a2150f8d4c528b80b3fa4cec5e5e2eda8d1b751c914e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
