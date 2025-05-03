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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4NOW3Q%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDs%2BSDRz719swj8I2plXKPb6TWZTprUmI8kIXYlige3VQIhAMaOUo11jWWxIvgXfi3photSXN%2FqkT20KkxMOimiwiMTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzlQPBTrChu5DYiIq3APd3tdtbe0LDuHO%2FX1neSr4NkRhItYlJqhRZER0NmUnEja5NHwzHl%2FPPhL%2F9yjlyEOSOtI5lICBtgJ844e2lQXKXb%2FUFvsyfln82ZIg9faLlTh1JVhVuWFCQBjgXMUrfKOGTCTm%2FannD1I%2Bb8SXhNRLvbH3Acmrb1YGOzrzQadjYugmJx4K1j5gjw%2By1wFkykoC%2Fs4a7PVv%2FM5Dmi0rAoT5RMlik5GrdzikPkE1lM7iYsaMnCgwsokQLbo2Mya3nBfL4cU9Dz4eogG5ZucCF1sv2X8GAXH2OlgLMX7z7jheQCqG9Dvkc7MspV9%2BVAunnSZ8q%2FYLMqW0Re%2BoAdpHA7v6LHuRK3RZkSl68JQRz1xmxKQ3Uq1FM5DpgQArPomk9b%2BuYbtTwrbEBFeD%2BhicN6cukUIgm6VJPXvDNbBIzjlBToRJotfgzS8xHMsF7DUkCjgEHR64pgOE8CiDz%2BJr3ot7BHGwxz58DLGvUTmJqd7BmOezIJlqFiSjzlmc64TUS2bB7KtVYSe%2BRPjZyuj0lt9CzoS52kaaRgDpx7ob4PL03KF9FTiD022TwsyD2FEQoNHNCfG8eiBT0TL1%2B4QM9brMMqmZJBjEfEqdnc7RP45Q%2FLIzg2VWfMAdJf9WejCE39fABjqkAUH6az4ljyHleJWJDPjsD5h0nrYyfSXyy7ZLjHo3eVKWL7yGTA9BIOsC4paBFa24UBDYFvepzluFqS1HPmgoX2j%2Bzo6uv3%2Bv1YkLyeNpmG5nszWB9hISMtjjY82k5DNwnAJDoft19MegKisO6s2qBVCGghu8LTwcQH3ZURVPFl%2FVlc2xeGUFN5LPkyCQrHs9Tbs6R0Uo4HyaCCQ%2FDjVa%2BcEjRBci&X-Amz-Signature=19b4c74790cc8a6c65642712a1299cbc39a8358de416d3ab458be650e347dbee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4NOW3Q%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDs%2BSDRz719swj8I2plXKPb6TWZTprUmI8kIXYlige3VQIhAMaOUo11jWWxIvgXfi3photSXN%2FqkT20KkxMOimiwiMTKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhzlQPBTrChu5DYiIq3APd3tdtbe0LDuHO%2FX1neSr4NkRhItYlJqhRZER0NmUnEja5NHwzHl%2FPPhL%2F9yjlyEOSOtI5lICBtgJ844e2lQXKXb%2FUFvsyfln82ZIg9faLlTh1JVhVuWFCQBjgXMUrfKOGTCTm%2FannD1I%2Bb8SXhNRLvbH3Acmrb1YGOzrzQadjYugmJx4K1j5gjw%2By1wFkykoC%2Fs4a7PVv%2FM5Dmi0rAoT5RMlik5GrdzikPkE1lM7iYsaMnCgwsokQLbo2Mya3nBfL4cU9Dz4eogG5ZucCF1sv2X8GAXH2OlgLMX7z7jheQCqG9Dvkc7MspV9%2BVAunnSZ8q%2FYLMqW0Re%2BoAdpHA7v6LHuRK3RZkSl68JQRz1xmxKQ3Uq1FM5DpgQArPomk9b%2BuYbtTwrbEBFeD%2BhicN6cukUIgm6VJPXvDNbBIzjlBToRJotfgzS8xHMsF7DUkCjgEHR64pgOE8CiDz%2BJr3ot7BHGwxz58DLGvUTmJqd7BmOezIJlqFiSjzlmc64TUS2bB7KtVYSe%2BRPjZyuj0lt9CzoS52kaaRgDpx7ob4PL03KF9FTiD022TwsyD2FEQoNHNCfG8eiBT0TL1%2B4QM9brMMqmZJBjEfEqdnc7RP45Q%2FLIzg2VWfMAdJf9WejCE39fABjqkAUH6az4ljyHleJWJDPjsD5h0nrYyfSXyy7ZLjHo3eVKWL7yGTA9BIOsC4paBFa24UBDYFvepzluFqS1HPmgoX2j%2Bzo6uv3%2Bv1YkLyeNpmG5nszWB9hISMtjjY82k5DNwnAJDoft19MegKisO6s2qBVCGghu8LTwcQH3ZURVPFl%2FVlc2xeGUFN5LPkyCQrHs9Tbs6R0Uo4HyaCCQ%2FDjVa%2BcEjRBci&X-Amz-Signature=16bba6667f537d53525c86df7c1ec4214fe4caaf31704887186a3fefadb7c5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
