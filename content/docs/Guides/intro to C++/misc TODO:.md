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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHLRVEN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU4UPjvErImIdu0lwOFVU6d6mM0lOUEomQUpWHqtbUIAiAiMoXyewnyjNA8YX%2Fp7762DZGNAfBROXVDyPQAZbIYTSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29Dad0rOaLFYHV4WKtwD%2BUlax%2B%2Bv2ZrhlNus%2BTZtLKlY1QlRu%2BncNCnBvwe9XuRo4JuV57Z%2FFgutimb1HQgFBlsica7CqFvHwE%2BnUxa8pZfGPc8mFwc2gX%2F%2FElulM1OMkMAvP17Ia7P8PgqilmMuVP0UqDyBvwLrIlupGKE3tLy04Ursn27hHysDNrIUUTYJ78I9KJh7NFR%2Bul%2F8snFXIaSJgQgMInTPI4rE8LNgNi%2BUQJBhw45HFMUF7IsAXSUt%2FkxKB7K2yt88dZMY83p2%2BJVkdhxCti40hboP00ywulk1nOi7kox9zLp7sfDC3DH1R3Kj7faEN5s%2BavYissQ9IFT7MlmwAV3uhDb6LPoTfeTU2RlUAyjljP8AtW3SIuX1JyZ7PPSKQKVLIRNRKSyKAhIjVHfbFBXbT8oI7WfzFA1KBVnBY3e3sD7TU0UeVHl2kc%2FONPxj3a%2BdzUK0NsL7%2B6JieNqiPUlLmyNIOcmS5pd1IH4rCOOsLVfOuvy8ZlF8CE0Et4bCtaBSAuLKK9DqQQpw4zjGXiVM0hU5JFto6CKSxJVVeGPwMtki3yVf%2FkFWH%2BCEBVooHjUUtFf%2BcS9G4qqAWcXqhBOC9cp0DgfSn2bEIqgK0lDHV0fzSwH8zVvo428fjewZeMJMOU4wwfGAvwY6pgEHj80GPS1XYL379KYUoZtCtCHiAYyAAsgZjOqIGH8IqsPvgcjV5LV5UxNokcnC5K9VNc9UCkSy%2FBeqsO21nPLwzqjlNVNqBiovyfUGtqOlWrFf%2Fcxs1H0h9bu1aj63SLU%2BSYmp84lf8lfxAbHeiB%2B0vJBH9IisDUA0VXAO8gTbpizoRjUh8P3OiPyaxVsAJyLn7H1dsCpaCzljZgvnNZ%2BmMN0OMjqU&X-Amz-Signature=ab0a0040f7c9f81cb5ea96b75126cfd06140d0b216868bced87cf34614a171c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHLRVEN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBU4UPjvErImIdu0lwOFVU6d6mM0lOUEomQUpWHqtbUIAiAiMoXyewnyjNA8YX%2Fp7762DZGNAfBROXVDyPQAZbIYTSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29Dad0rOaLFYHV4WKtwD%2BUlax%2B%2Bv2ZrhlNus%2BTZtLKlY1QlRu%2BncNCnBvwe9XuRo4JuV57Z%2FFgutimb1HQgFBlsica7CqFvHwE%2BnUxa8pZfGPc8mFwc2gX%2F%2FElulM1OMkMAvP17Ia7P8PgqilmMuVP0UqDyBvwLrIlupGKE3tLy04Ursn27hHysDNrIUUTYJ78I9KJh7NFR%2Bul%2F8snFXIaSJgQgMInTPI4rE8LNgNi%2BUQJBhw45HFMUF7IsAXSUt%2FkxKB7K2yt88dZMY83p2%2BJVkdhxCti40hboP00ywulk1nOi7kox9zLp7sfDC3DH1R3Kj7faEN5s%2BavYissQ9IFT7MlmwAV3uhDb6LPoTfeTU2RlUAyjljP8AtW3SIuX1JyZ7PPSKQKVLIRNRKSyKAhIjVHfbFBXbT8oI7WfzFA1KBVnBY3e3sD7TU0UeVHl2kc%2FONPxj3a%2BdzUK0NsL7%2B6JieNqiPUlLmyNIOcmS5pd1IH4rCOOsLVfOuvy8ZlF8CE0Et4bCtaBSAuLKK9DqQQpw4zjGXiVM0hU5JFto6CKSxJVVeGPwMtki3yVf%2FkFWH%2BCEBVooHjUUtFf%2BcS9G4qqAWcXqhBOC9cp0DgfSn2bEIqgK0lDHV0fzSwH8zVvo428fjewZeMJMOU4wwfGAvwY6pgEHj80GPS1XYL379KYUoZtCtCHiAYyAAsgZjOqIGH8IqsPvgcjV5LV5UxNokcnC5K9VNc9UCkSy%2FBeqsO21nPLwzqjlNVNqBiovyfUGtqOlWrFf%2Fcxs1H0h9bu1aj63SLU%2BSYmp84lf8lfxAbHeiB%2B0vJBH9IisDUA0VXAO8gTbpizoRjUh8P3OiPyaxVsAJyLn7H1dsCpaCzljZgvnNZ%2BmMN0OMjqU&X-Amz-Signature=76b2a61db5bc99b04a058c0a34f87a364442c624600e2bd546262eafd33704de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
