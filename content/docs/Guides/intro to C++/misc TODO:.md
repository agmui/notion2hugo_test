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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4O4XTQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIXZ%2BvlCtCcMk%2FgWYoL%2BeEk3HROtCqySsZQknZKUnqggIhANZ7aQD8veG9S93Q6zGCcE9kGc7jHn2%2BxmL2v3VX%2B32zKv8DCCIQABoMNjM3NDIzMTgzODA1IgyGkyS%2FkUFE3U2B72wq3AOy3gkUord%2BwitH4sjTBh1DK25%2B6e94zw%2FzofCa8ha6yfBQZBYTJfma454QvnnerZpjkqEkqCXpx0Mq3S0KRyyTT5pYlsBsNCybwFFJXqNutWJcrU1P5WPRMnx70A4fI5qJ99CI%2FNTjFRXlEH5jc9TXnGJi1rBbFsyre%2BwgexMU5s6p7vHQy8FMcXON6HQR9Ejy7bt6VaNFpB%2BHhvrVu0Cu%2FQlo7JJOwCd%2FFVWPPRZ9GLuZEi7RPvx7ZO8wiii4yQ4pGEScfwO7ZhWKBm%2B1iqTqvUCs%2BYMFmb5VIuGC4lyKzviSZ7xW89pCd11MBKqWmONlLjR%2BtNKcGabuoJyPXv5FsKw%2BkvIqM73jN4ZsIzgUofA%2BIDdJT2DoFpC9Ej5atxkK3W5PlHl51mHQgStSdoaQ360w5ORRXz1zCeayk0U0H0TzM9LLouFrovbqhBZeMgW8iSr%2BceP4a1Z7DaRQZF7sxrPXhb8UpgI0CfJHNVI1sLPuxijP1uDt8315Bv8hMfLdkEBZX6Yc5zn8PuT62VDNPeKMVytYF4OnR1zjZhInCVPHTNJ9dNCsBsZOw653mJ03lR27ZzyuEmTKfZI2tEB0SkRwC36OUiRhb5kwLpFTbNIJikWwhTkemH4MvTD%2Fp7q9BjqkARpWa4PjRUZd75m8FSlzCTlg%2Ba%2F%2BE9f3xwzCbzcePRmGA%2FjFQBaA37VgDx4STXj2sdBz05WRLztOQyta7ElXVCun1141eYOvO1mxFqECoPIeSLrY47d3zhcKaKrti3%2Bly2cLG2WVPenRa%2FmQDI%2Bok4XEMAlE0ofdBDUg4Hx9GQUI2fptErHNfsnN%2BnzJfHLhjWtby9ws6fpRUP6vQJEbnCWqUcok&X-Amz-Signature=24dd6a252c7e5141e53857853fd381e569b4d1630c2cae112f2fd3878b57b42f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4O4XTQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIXZ%2BvlCtCcMk%2FgWYoL%2BeEk3HROtCqySsZQknZKUnqggIhANZ7aQD8veG9S93Q6zGCcE9kGc7jHn2%2BxmL2v3VX%2B32zKv8DCCIQABoMNjM3NDIzMTgzODA1IgyGkyS%2FkUFE3U2B72wq3AOy3gkUord%2BwitH4sjTBh1DK25%2B6e94zw%2FzofCa8ha6yfBQZBYTJfma454QvnnerZpjkqEkqCXpx0Mq3S0KRyyTT5pYlsBsNCybwFFJXqNutWJcrU1P5WPRMnx70A4fI5qJ99CI%2FNTjFRXlEH5jc9TXnGJi1rBbFsyre%2BwgexMU5s6p7vHQy8FMcXON6HQR9Ejy7bt6VaNFpB%2BHhvrVu0Cu%2FQlo7JJOwCd%2FFVWPPRZ9GLuZEi7RPvx7ZO8wiii4yQ4pGEScfwO7ZhWKBm%2B1iqTqvUCs%2BYMFmb5VIuGC4lyKzviSZ7xW89pCd11MBKqWmONlLjR%2BtNKcGabuoJyPXv5FsKw%2BkvIqM73jN4ZsIzgUofA%2BIDdJT2DoFpC9Ej5atxkK3W5PlHl51mHQgStSdoaQ360w5ORRXz1zCeayk0U0H0TzM9LLouFrovbqhBZeMgW8iSr%2BceP4a1Z7DaRQZF7sxrPXhb8UpgI0CfJHNVI1sLPuxijP1uDt8315Bv8hMfLdkEBZX6Yc5zn8PuT62VDNPeKMVytYF4OnR1zjZhInCVPHTNJ9dNCsBsZOw653mJ03lR27ZzyuEmTKfZI2tEB0SkRwC36OUiRhb5kwLpFTbNIJikWwhTkemH4MvTD%2Fp7q9BjqkARpWa4PjRUZd75m8FSlzCTlg%2Ba%2F%2BE9f3xwzCbzcePRmGA%2FjFQBaA37VgDx4STXj2sdBz05WRLztOQyta7ElXVCun1141eYOvO1mxFqECoPIeSLrY47d3zhcKaKrti3%2Bly2cLG2WVPenRa%2FmQDI%2Bok4XEMAlE0ofdBDUg4Hx9GQUI2fptErHNfsnN%2BnzJfHLhjWtby9ws6fpRUP6vQJEbnCWqUcok&X-Amz-Signature=147b49cb0ff4144b8cc641f5ffce0f232625e910cfc9ed7ec95aa98e0aadaf3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
