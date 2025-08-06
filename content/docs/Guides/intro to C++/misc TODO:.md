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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQRAQ6A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCl9D18lfh%2F%2Bd8NflWU3KEwhhWzkP1G7VCnGI%2FeuiXKlgIgb2%2FEHhmjGq9UCTF8ztfpg15oA12%2BPDqeGTRXI02FCiIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDE8s96WTNctMQzGOuyrcA7oU6AyQSbk0CyqyuGOdOn2U9R7cCkLrDV%2FxyoxM7dzIBh2nyHJB8ClW5uwUuKHTnqg8PleAMqpEdGo9MWzKuOcGIAl4AfZ%2FdXm7QiHG5K%2FT6TWFBy14XfwHjK0TXVDYQp0bMml%2BglTxiwGNUiMJnOpjLtzxZLig%2BmeQ6eC%2BNibGQiuaG9h1q46sBWED9Gw8n8%2Ff2mJ%2BFRLaT8V9hBwwWUqURI6ou6pSmx3qJMG9fdfX5ugggreT6teLr2M2JaCSOAAeugbOaNl2qMXXkmGNhqKU%2BlpwCc35YsEbdryVr%2FJBPBuBFJ2vjIwoY9ZbTcydBr8DA9OiORDa8%2BnCkvYHCcdBMw1p7P5uXCfIOc%2BqOiUsJabjQae%2Ff8zkw65ZSu33Bhki8sB9hY2lTWtwqubtHl%2BS%2Ftv2%2FVJxZdjI5jOBqLzGGdCp3hdLZDG34Aq9h0CwMI5YA%2BZrTEgnnqyTVZLin3M5%2F57VhTeus8pQK1rdNF9Gi7wAx64SyfioKbgYK3lI6jnBOu4xO1mKXbKC0u9nfcAvXwjKHl3sYNKIGHT8HWGFALmvmxixGzlUnHSxT1VomzZfBFl2cqMe6V90irZvW3JrCiOiSYR4QL7ycon2VESd5jrT1NOQW8d8LcPzMOzKy8QGOqUBfMw%2BJgp3Shg%2F3UVWcnPD3cnWngAnHteUb1Mryp2YGNgflSyclCgynZgNf3OsFWHIQnzD9U5lmlYPoXYOXDYrGW9%2BEPTe3ah35UurTQZvtmJE3RWLlLRMuNuFS0c%2FauUvgZqNnKiqTr0i8DBCm8AtFxuysab%2FsEYBRbvtTSRvYKQYCLkmWgtVEIz86frHbd1etv1vHE0RUEgje%2F79347ECTfE23Fw&X-Amz-Signature=9fa1c4e39386064cb6881386a7e7aea3b1ffd331ca8c360b65020800a954d3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQRAQ6A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCl9D18lfh%2F%2Bd8NflWU3KEwhhWzkP1G7VCnGI%2FeuiXKlgIgb2%2FEHhmjGq9UCTF8ztfpg15oA12%2BPDqeGTRXI02FCiIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDE8s96WTNctMQzGOuyrcA7oU6AyQSbk0CyqyuGOdOn2U9R7cCkLrDV%2FxyoxM7dzIBh2nyHJB8ClW5uwUuKHTnqg8PleAMqpEdGo9MWzKuOcGIAl4AfZ%2FdXm7QiHG5K%2FT6TWFBy14XfwHjK0TXVDYQp0bMml%2BglTxiwGNUiMJnOpjLtzxZLig%2BmeQ6eC%2BNibGQiuaG9h1q46sBWED9Gw8n8%2Ff2mJ%2BFRLaT8V9hBwwWUqURI6ou6pSmx3qJMG9fdfX5ugggreT6teLr2M2JaCSOAAeugbOaNl2qMXXkmGNhqKU%2BlpwCc35YsEbdryVr%2FJBPBuBFJ2vjIwoY9ZbTcydBr8DA9OiORDa8%2BnCkvYHCcdBMw1p7P5uXCfIOc%2BqOiUsJabjQae%2Ff8zkw65ZSu33Bhki8sB9hY2lTWtwqubtHl%2BS%2Ftv2%2FVJxZdjI5jOBqLzGGdCp3hdLZDG34Aq9h0CwMI5YA%2BZrTEgnnqyTVZLin3M5%2F57VhTeus8pQK1rdNF9Gi7wAx64SyfioKbgYK3lI6jnBOu4xO1mKXbKC0u9nfcAvXwjKHl3sYNKIGHT8HWGFALmvmxixGzlUnHSxT1VomzZfBFl2cqMe6V90irZvW3JrCiOiSYR4QL7ycon2VESd5jrT1NOQW8d8LcPzMOzKy8QGOqUBfMw%2BJgp3Shg%2F3UVWcnPD3cnWngAnHteUb1Mryp2YGNgflSyclCgynZgNf3OsFWHIQnzD9U5lmlYPoXYOXDYrGW9%2BEPTe3ah35UurTQZvtmJE3RWLlLRMuNuFS0c%2FauUvgZqNnKiqTr0i8DBCm8AtFxuysab%2FsEYBRbvtTSRvYKQYCLkmWgtVEIz86frHbd1etv1vHE0RUEgje%2F79347ECTfE23Fw&X-Amz-Signature=8021e36f67428cf9d8d13ba1c08923eb700f21d020f9aa34589689389a8d0337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
