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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6UHSG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDf8CJNxmCfHGt23oE36AVlBa%2FXavdb%2BbAUfGzCNlPAcAIhAOWi6CA27w%2FcIjEuwl%2Fq3BmDvsOocCxLMUOq8xaQ5dySKv8DCHAQABoMNjM3NDIzMTgzODA1IgxHfbFnO1x30wu6ydAq3AMyY%2FKLC4ovAPdo2pY1Si8spi20tdV5YjQdWThCnDcgqYwVcBibKenW%2BdcBXlIWi3RObesh%2FMHuG5Pyp8cr0aBSbUYH9Brl7LDDhab7hf0ze3PJLs0jOmbG1q%2B3HSgv2MbGRlMbWMCNYKqa87q5IHtmFmbL%2BDtocba6953mvbAu6YTlLgBsJM5qdtp89nT7Jm5BmmoMa%2FBQfeMpzwHYpcxX4fOGViXeF7xyJ9n4iOYtjhUknwdK8G55v%2FE3rjp7WFCdEnR7US%2FIXgI1SD5zd2JLLx%2Fifs5HeJNch3E9kk7iWCa2sGZJtgDjPYa6eTJnQPlXx7UJa0x0SCY5n4dd3w9GwuNlVNZtkcLr1gv79K1r2g6zhJ9OMnETPgS%2BrSpaToQbLH2YoAJ1cDHNz3pRV998zNi5nFN8EctnTaBIXFbwuCEb47V%2Bl%2By4wt4pqjq7ZVpEh54NTl68Xtee5jjrrTPcWyEqcKr8aQAlv2ewtG3e4ZdCcI1n%2F2%2B9Ysj5wbCWr1iLYgMTK9syXyG7Amg%2F0XGlqvx2jNFwyUgYruoLojQz0BnU%2FJiFGgg6whA31rI3tl6R3G7M7Vfai%2FWl7jgzt6BOvm5NxsACBtTgQWF351Xhasm7ZKaL5u3Ru9PmaTCn67S%2BBjqkAazKxZx1JSmWVWwpGGwWGpKpgST56gA1V1YrZn153MH0S4cgt%2FvcmW%2BN6ErmKS%2Fd8hey7rlWHq8%2FEfFPlm3n44nF1HOEqwakYcoSQegMtJkpaKc7cejMTJsxf9vzmME1YAMxYae%2Fgql3T%2FNbU0vuu95512S7OSKOdlI5YSLc8WsWNQDaEGcDZ9IASLiW9vpErwfIBH1R9AY8TwjrdFpkwlJ0R1t7&X-Amz-Signature=6224109804c2fe7c5f82ff699f4ebad36b16bab38980159219cfcc2506a6a77a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH6UHSG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDf8CJNxmCfHGt23oE36AVlBa%2FXavdb%2BbAUfGzCNlPAcAIhAOWi6CA27w%2FcIjEuwl%2Fq3BmDvsOocCxLMUOq8xaQ5dySKv8DCHAQABoMNjM3NDIzMTgzODA1IgxHfbFnO1x30wu6ydAq3AMyY%2FKLC4ovAPdo2pY1Si8spi20tdV5YjQdWThCnDcgqYwVcBibKenW%2BdcBXlIWi3RObesh%2FMHuG5Pyp8cr0aBSbUYH9Brl7LDDhab7hf0ze3PJLs0jOmbG1q%2B3HSgv2MbGRlMbWMCNYKqa87q5IHtmFmbL%2BDtocba6953mvbAu6YTlLgBsJM5qdtp89nT7Jm5BmmoMa%2FBQfeMpzwHYpcxX4fOGViXeF7xyJ9n4iOYtjhUknwdK8G55v%2FE3rjp7WFCdEnR7US%2FIXgI1SD5zd2JLLx%2Fifs5HeJNch3E9kk7iWCa2sGZJtgDjPYa6eTJnQPlXx7UJa0x0SCY5n4dd3w9GwuNlVNZtkcLr1gv79K1r2g6zhJ9OMnETPgS%2BrSpaToQbLH2YoAJ1cDHNz3pRV998zNi5nFN8EctnTaBIXFbwuCEb47V%2Bl%2By4wt4pqjq7ZVpEh54NTl68Xtee5jjrrTPcWyEqcKr8aQAlv2ewtG3e4ZdCcI1n%2F2%2B9Ysj5wbCWr1iLYgMTK9syXyG7Amg%2F0XGlqvx2jNFwyUgYruoLojQz0BnU%2FJiFGgg6whA31rI3tl6R3G7M7Vfai%2FWl7jgzt6BOvm5NxsACBtTgQWF351Xhasm7ZKaL5u3Ru9PmaTCn67S%2BBjqkAazKxZx1JSmWVWwpGGwWGpKpgST56gA1V1YrZn153MH0S4cgt%2FvcmW%2BN6ErmKS%2Fd8hey7rlWHq8%2FEfFPlm3n44nF1HOEqwakYcoSQegMtJkpaKc7cejMTJsxf9vzmME1YAMxYae%2Fgql3T%2FNbU0vuu95512S7OSKOdlI5YSLc8WsWNQDaEGcDZ9IASLiW9vpErwfIBH1R9AY8TwjrdFpkwlJ0R1t7&X-Amz-Signature=da7878cbbc352ee7e202232f7619310461998b6808e1504967e8d0beb1cb0073&X-Amz-SignedHeaders=host&x-id=GetObject)

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
