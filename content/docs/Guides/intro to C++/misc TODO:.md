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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LJBRVY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8fIEkKikP2%2F%2BvYwOHcScCRilB1VIm0YdXqAyy1OFn3gIhAI1dDRZZN2yvN6Rr2yVi%2BzcvQ9qRqnhomKEamCzf4ianKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZrBOcYnSEf%2B1NlMQq3APme53AuByDU4VoeE%2FbWTq%2FY6KQ%2BJed7d55Q24nGVEpXGAxrJVIg8qrzredU30zq2PthI9RT1uByI5uziofJr5Qcit66MQ2CNKASjfqwklYDLhqCh6x0QkMSXsJNwjce3dlmnf9%2FbKVnFpIo7otyTTHpAMTK0vRcRqTztv%2BnIxFMbsIIyZ%2BBLfrN%2FyxF7TpGLTiGgUeJeDimppBciRcDifmMpMFiQlt867rd9HRq1RZfh%2FO1XEWO0eepYfZ1Z5vW7uBQqk%2FsvEJO36iwjgKIEU3LXZNEJC4nXjRz2wrWY71ZxRxoZF20qYHDuZquWgIeKqwwrFFqfojpMqaX%2Bm%2FW0KqOjF1C3cHvga%2FhaWa7Dlvd8E9ZsUme3xmjQIYYLjARsp516rqnY1Dv4i09qCM%2FNXd3YfdNHSsqauRzUeD9JEYC3yrzQERzx8yT4ribCJMvCMVybaDDrf5S7Xnl%2FvMZns2Ont4Bl0ddnuoAc3FW8S%2F3kjFX5kFGX8KW42J1sgcvDggQj1T6BItwTWW0nrsKQQW2Md2fouWR6zpGIXqeL6%2BNQDBp49IBfubTAdhqR4M8GqzzshuAFjeClfnKnTufMtNKjV2a5ghmEDJ6vYeLBr81Mxrwaj8f%2F4XZuJ1%2FjC5iqXEBjqkAcKwoYm6hNxPAn2GLMCH9pBVsgV%2BvXLXfx1o8Ewhbgo4d79kjVPZdavJgM2TOWlkwKHtxIq%2BK69E3jYwlGTxNVPgsw7%2Bnx5uhL5%2FJ3ndfmwMD%2FrKwAxcQ6CRXtjqGtrSPmAemY83XSTmI%2FnsX%2BSC8xLw3V4DJ55%2BIU5JoB2WPFWDHHOwHfcrtdX9%2F9zsyNOSvLdcVNHyjewlW8yvkfqzsjVEZslL&X-Amz-Signature=cf4c1b296339ee4a14fb22c99fe3fe0f57f05bba13db46b2955754e993880195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LJBRVY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8fIEkKikP2%2F%2BvYwOHcScCRilB1VIm0YdXqAyy1OFn3gIhAI1dDRZZN2yvN6Rr2yVi%2BzcvQ9qRqnhomKEamCzf4ianKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZrBOcYnSEf%2B1NlMQq3APme53AuByDU4VoeE%2FbWTq%2FY6KQ%2BJed7d55Q24nGVEpXGAxrJVIg8qrzredU30zq2PthI9RT1uByI5uziofJr5Qcit66MQ2CNKASjfqwklYDLhqCh6x0QkMSXsJNwjce3dlmnf9%2FbKVnFpIo7otyTTHpAMTK0vRcRqTztv%2BnIxFMbsIIyZ%2BBLfrN%2FyxF7TpGLTiGgUeJeDimppBciRcDifmMpMFiQlt867rd9HRq1RZfh%2FO1XEWO0eepYfZ1Z5vW7uBQqk%2FsvEJO36iwjgKIEU3LXZNEJC4nXjRz2wrWY71ZxRxoZF20qYHDuZquWgIeKqwwrFFqfojpMqaX%2Bm%2FW0KqOjF1C3cHvga%2FhaWa7Dlvd8E9ZsUme3xmjQIYYLjARsp516rqnY1Dv4i09qCM%2FNXd3YfdNHSsqauRzUeD9JEYC3yrzQERzx8yT4ribCJMvCMVybaDDrf5S7Xnl%2FvMZns2Ont4Bl0ddnuoAc3FW8S%2F3kjFX5kFGX8KW42J1sgcvDggQj1T6BItwTWW0nrsKQQW2Md2fouWR6zpGIXqeL6%2BNQDBp49IBfubTAdhqR4M8GqzzshuAFjeClfnKnTufMtNKjV2a5ghmEDJ6vYeLBr81Mxrwaj8f%2F4XZuJ1%2FjC5iqXEBjqkAcKwoYm6hNxPAn2GLMCH9pBVsgV%2BvXLXfx1o8Ewhbgo4d79kjVPZdavJgM2TOWlkwKHtxIq%2BK69E3jYwlGTxNVPgsw7%2Bnx5uhL5%2FJ3ndfmwMD%2FrKwAxcQ6CRXtjqGtrSPmAemY83XSTmI%2FnsX%2BSC8xLw3V4DJ55%2BIU5JoB2WPFWDHHOwHfcrtdX9%2F9zsyNOSvLdcVNHyjewlW8yvkfqzsjVEZslL&X-Amz-Signature=a0c5653651ad6783535696867832341f9b55786dc27302b6306f687756252df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
