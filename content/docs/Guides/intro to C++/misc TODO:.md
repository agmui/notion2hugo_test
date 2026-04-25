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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV5OT3Q%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCbHXneGzJbprKx5MEn3%2FYvosQTckbY6t1cfm2oeIsnAIhAI0LS4mFAUnK2Us0zkoiRtXJPr6EITPFOlacEaCgmCE6KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvjpggK5q8QgLU9eIq3AOtC28ChFrJpXUhovXRUzsnMGbXFcO%2BDXq2wsTNnNUO%2Fz5IhiT0ISI0psip619ZRL8BsUN0X4kZqXkWXExs%2BGfzbZM3DWjEa1VMeZokr09xlHFSq%2B5ZpuWoO%2BfqcAShppQPrSddIJFi6m%2BvUsfcVuhXgVUJQG24l0aLcDrh7HNc5kqeBrSoFVc%2B0pta8VKlmRJFCcu0DepaxPrtEj%2BNLV98ivr9D0ZZdjVPF0KT4Jg%2BDNV%2BJ8%2BSJzo%2FhXku6L3y35GVukZdsLThM5uj1lKvhOI7lpVe%2BSCjZqhviHz%2FBT3U0lAa8ViBdhzZqGQPWXrk4JCtA0fR8LyPJpgijC4buJvcvwkjLCXMBDz9DErYc29g%2F2xA97s9Y%2F1Gm8%2FTg6aRgvuUKfkdUW5HWXyziCDjmyaqL3tfxd26P89rdYDGrNtcFROEY0CM8YhnL9pMNPzg4os46PkpYXUDbw4pJZVWEFlJpwWYb2YIDksFJ34lZjXuEtUnUijWmLzIuCX2z3N2bjVZ10HbKijfPZwABF6xapi%2FJLXwX5%2BH06waJ0X03MXReIS2SlwIxxW2U1fIGUq%2FQSLpJqJTVFZe16lAk17lQZBe4yfDWyflLKWzm7ta9CA4gry8u7BTtS1Fo2T5tjCmurDPBjqkAXXeGIK7BJYqbmrsOHTwTgTnQh2AU6iCSwT4dFBlMtjRs6bUtHH90RxGRgE92C1I64nQdqr3voRlNSP8Zh0ogAXnEGoLiSiYlckvcdBKHCkW%2FS%2BxQXMdAp0tJyU%2FBiCMqij%2BenADzrhhIhfDIqJLwynTfcpYoZLmwoOfq8n%2FyxgAjaP310d6cD2tHuxseomMIJw5Efd1VW%2FW5ikeuHK7Co3pyFHZ&X-Amz-Signature=a12997a95ed19b7d93ea5c214fc1d02675c6e7efef12059080c738aa7a75ccec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV5OT3Q%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCbHXneGzJbprKx5MEn3%2FYvosQTckbY6t1cfm2oeIsnAIhAI0LS4mFAUnK2Us0zkoiRtXJPr6EITPFOlacEaCgmCE6KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvjpggK5q8QgLU9eIq3AOtC28ChFrJpXUhovXRUzsnMGbXFcO%2BDXq2wsTNnNUO%2Fz5IhiT0ISI0psip619ZRL8BsUN0X4kZqXkWXExs%2BGfzbZM3DWjEa1VMeZokr09xlHFSq%2B5ZpuWoO%2BfqcAShppQPrSddIJFi6m%2BvUsfcVuhXgVUJQG24l0aLcDrh7HNc5kqeBrSoFVc%2B0pta8VKlmRJFCcu0DepaxPrtEj%2BNLV98ivr9D0ZZdjVPF0KT4Jg%2BDNV%2BJ8%2BSJzo%2FhXku6L3y35GVukZdsLThM5uj1lKvhOI7lpVe%2BSCjZqhviHz%2FBT3U0lAa8ViBdhzZqGQPWXrk4JCtA0fR8LyPJpgijC4buJvcvwkjLCXMBDz9DErYc29g%2F2xA97s9Y%2F1Gm8%2FTg6aRgvuUKfkdUW5HWXyziCDjmyaqL3tfxd26P89rdYDGrNtcFROEY0CM8YhnL9pMNPzg4os46PkpYXUDbw4pJZVWEFlJpwWYb2YIDksFJ34lZjXuEtUnUijWmLzIuCX2z3N2bjVZ10HbKijfPZwABF6xapi%2FJLXwX5%2BH06waJ0X03MXReIS2SlwIxxW2U1fIGUq%2FQSLpJqJTVFZe16lAk17lQZBe4yfDWyflLKWzm7ta9CA4gry8u7BTtS1Fo2T5tjCmurDPBjqkAXXeGIK7BJYqbmrsOHTwTgTnQh2AU6iCSwT4dFBlMtjRs6bUtHH90RxGRgE92C1I64nQdqr3voRlNSP8Zh0ogAXnEGoLiSiYlckvcdBKHCkW%2FS%2BxQXMdAp0tJyU%2FBiCMqij%2BenADzrhhIhfDIqJLwynTfcpYoZLmwoOfq8n%2FyxgAjaP310d6cD2tHuxseomMIJw5Efd1VW%2FW5ikeuHK7Co3pyFHZ&X-Amz-Signature=850a89462d550df13a37ae5f7bf289cb0abb99d4c21a326adf273359f33c4173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
