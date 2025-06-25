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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDAVYGUO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDn9wMoocFl4nxyk3NWdC73UtdyU6vM8fYh3BRZ8z5v3AIhAKBJjFNAolSuOGLzpXsKP%2BMomLtZq543X37OKI%2Bwt04bKv8DCD8QABoMNjM3NDIzMTgzODA1Igyknog5sLLyel%2BRdQMq3ANjZ7oTgxMMVdN8YYw5vpVoz8QIPE14gZ%2F0tSCi8u8PM1bpnFl2U3DngbkmCa7IAyW17RelTzaqAEbdLcNgNVgYHCuZv%2BI7%2Bq0jU1SXinNUJqOBQhA%2FgNikYavcU%2BApB5aCQ02sVDaMoPRFHmZdgIRkCFl4JFyL615hERtd2Pj1tAzGxz5mrRFr9IjOh%2BFsmchCc7YVtEmhTqiGkrjg4cDYw2mh68SmLP348Uyu5XebHcefHo5Z5Ph8EEVaz1fVkxSlhmZniDz0xG60HAfoQUiz3zAVVzwycMdTbcpURGJGKun%2BiFLLbuy7NL%2F7jeZDO6%2BKCSi4SN5A14NvK%2B8GniHuh0iVdBIDrc%2BIn0AUa6axHMRzmnHOBHDHhR8nEWhMkKdX5Amvi4MSfUjs%2FQ0yEB%2FIl5onVhysqj7HpswAKJAt31HxBFSCSWztG6rLB0iMafxDIK9OLv9YUHZ6BoS3ULml38jTKwPegVoHbFqghfe%2BbHlmb23CIBczoUVDpuAu1SzqFE6y51biBG9SYeqqe%2BGo6NApmPn4V1opp%2FWWyNGjfQzXsTuH%2BTAh0Mrx8aKx670b20YNprnSOYV%2FxR1Xhoh6Bl8VDn1KtS1TVmtM%2FM%2FTQEQirGMuhUmXTw5swzDVpe7CBjqkAe1rvmS8HTEKXcsW%2BItLzWFVIhhnYihtE%2BKizP5EfAOAMVADO%2FQOL8SOSnnaxDuR7i8dDwarDO8h9Ip2jdCUuV%2B1Ka59Frwk2dWkimZ3Q%2BbWzoKoGbo7WoAG5v%2FvbfTfVQSMJHsByGU0ELr5QdD40%2B48nI0pxXQ3oMx3UjUdJ45sMX1zx4BNaKLclcihMHzG7Z2sP6ptEwCw%2FaIfKjBpOv1Ty%2F%2BC&X-Amz-Signature=922f21d57182ff383dc385f72ce6052adb1ccfec68f9bacb13de8a97f0ae492f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDAVYGUO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDn9wMoocFl4nxyk3NWdC73UtdyU6vM8fYh3BRZ8z5v3AIhAKBJjFNAolSuOGLzpXsKP%2BMomLtZq543X37OKI%2Bwt04bKv8DCD8QABoMNjM3NDIzMTgzODA1Igyknog5sLLyel%2BRdQMq3ANjZ7oTgxMMVdN8YYw5vpVoz8QIPE14gZ%2F0tSCi8u8PM1bpnFl2U3DngbkmCa7IAyW17RelTzaqAEbdLcNgNVgYHCuZv%2BI7%2Bq0jU1SXinNUJqOBQhA%2FgNikYavcU%2BApB5aCQ02sVDaMoPRFHmZdgIRkCFl4JFyL615hERtd2Pj1tAzGxz5mrRFr9IjOh%2BFsmchCc7YVtEmhTqiGkrjg4cDYw2mh68SmLP348Uyu5XebHcefHo5Z5Ph8EEVaz1fVkxSlhmZniDz0xG60HAfoQUiz3zAVVzwycMdTbcpURGJGKun%2BiFLLbuy7NL%2F7jeZDO6%2BKCSi4SN5A14NvK%2B8GniHuh0iVdBIDrc%2BIn0AUa6axHMRzmnHOBHDHhR8nEWhMkKdX5Amvi4MSfUjs%2FQ0yEB%2FIl5onVhysqj7HpswAKJAt31HxBFSCSWztG6rLB0iMafxDIK9OLv9YUHZ6BoS3ULml38jTKwPegVoHbFqghfe%2BbHlmb23CIBczoUVDpuAu1SzqFE6y51biBG9SYeqqe%2BGo6NApmPn4V1opp%2FWWyNGjfQzXsTuH%2BTAh0Mrx8aKx670b20YNprnSOYV%2FxR1Xhoh6Bl8VDn1KtS1TVmtM%2FM%2FTQEQirGMuhUmXTw5swzDVpe7CBjqkAe1rvmS8HTEKXcsW%2BItLzWFVIhhnYihtE%2BKizP5EfAOAMVADO%2FQOL8SOSnnaxDuR7i8dDwarDO8h9Ip2jdCUuV%2B1Ka59Frwk2dWkimZ3Q%2BbWzoKoGbo7WoAG5v%2FvbfTfVQSMJHsByGU0ELr5QdD40%2B48nI0pxXQ3oMx3UjUdJ45sMX1zx4BNaKLclcihMHzG7Z2sP6ptEwCw%2FaIfKjBpOv1Ty%2F%2BC&X-Amz-Signature=c18d46cf2682de67e8b31228c7d5f74417e2305a855dc908c3cc83e9b7aedd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
