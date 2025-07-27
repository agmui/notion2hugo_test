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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA4U2ZZ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAwrS%2FfPhmnDbHJeDVtvGro0BF6hZZ8QlOwOnJXE7FLkAiEA2s6LztkpKryVMQ9CFNY%2Ff0Rr8nFBfWkhUSblMQtjTDMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDB98RMBFCN%2BtTdde9SrcA5GhO%2B3fR9uXX7Ha08jxUGjGr6r%2B0goYPoYHoQz4c6uFg28A5u0ZjOZiA92En%2BY4wRZ94FpVc6ThEwGOC82VPiFWW%2BrZ9OBVyihLii6CvvZox3zuEb1Yuz2h96MzRn25B6EhfaO3nTQXH3DlsjyAVuw7ZJMHHuMAqlG1ksASjYiQWNLqVV9PtMd%2FYFyDPHdoGUbrCiFXbxOmrJCmaj9XrzzsMDwPGAjs0kZbK8SyS5fzVBOQk05181fJMSAtrQCPTk%2Ft0Y%2FKfPYzDLvFS7cHd0CSZScotu%2FVBc%2FA%2BsRom5C6YiAxZWqksYJ0BZ3FEeO5CHh7lo2Xbywwnx7CalNj%2FWNmsUcayxKr%2BjbxC3LTPduTZyx6ERdQht63o8LjeJcAhjaL9UVSW9bjzUCZj0zsBHfhpjLQYcR4de06xop7GWypPbyG9Kc3P5PM4nEVn%2B22Gj06hJnL0QDVUfF52lRxwRPPFsBpa3OoO1nD3lHyHHKyOYTV5xiqdZx2Xeqroa%2FMpgVsPCoFbpqPqhzA2JvNUOX0CzPNg1lxjqhbLSBBqHYzXtpYoYiZDk0nRNQ35i5VcNcy2gf8Q9KH09JrlLLJlLTiGNAaibzfolZt0u6nhTZtlv8%2BA6c2%2FI4QmP6VMPPhl8QGOqUB0snmH%2BUJuYiretocBxTYFXNq0AC8fXwr0uMnuaNLePFr288gbZK7xiZLncOTkNUioiKojhX8LeoHk3oWpryyj4640CXsV5NFCQheD2uYWQykao979vIKYb4JAnsGNcRkwnwIblFX1TKcUYzb%2B1biz0abmt%2FPaORw0vIUqzpyaGYryVJnALOexz69%2B%2BRBqkY0eiSUr5Y%2BVPfOf6zgJYZ9o5n93v6p&X-Amz-Signature=5e78161670fd29c423179bd9019ee087a6b0a52955127cefa053d92ddd264add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA4U2ZZ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAwrS%2FfPhmnDbHJeDVtvGro0BF6hZZ8QlOwOnJXE7FLkAiEA2s6LztkpKryVMQ9CFNY%2Ff0Rr8nFBfWkhUSblMQtjTDMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDB98RMBFCN%2BtTdde9SrcA5GhO%2B3fR9uXX7Ha08jxUGjGr6r%2B0goYPoYHoQz4c6uFg28A5u0ZjOZiA92En%2BY4wRZ94FpVc6ThEwGOC82VPiFWW%2BrZ9OBVyihLii6CvvZox3zuEb1Yuz2h96MzRn25B6EhfaO3nTQXH3DlsjyAVuw7ZJMHHuMAqlG1ksASjYiQWNLqVV9PtMd%2FYFyDPHdoGUbrCiFXbxOmrJCmaj9XrzzsMDwPGAjs0kZbK8SyS5fzVBOQk05181fJMSAtrQCPTk%2Ft0Y%2FKfPYzDLvFS7cHd0CSZScotu%2FVBc%2FA%2BsRom5C6YiAxZWqksYJ0BZ3FEeO5CHh7lo2Xbywwnx7CalNj%2FWNmsUcayxKr%2BjbxC3LTPduTZyx6ERdQht63o8LjeJcAhjaL9UVSW9bjzUCZj0zsBHfhpjLQYcR4de06xop7GWypPbyG9Kc3P5PM4nEVn%2B22Gj06hJnL0QDVUfF52lRxwRPPFsBpa3OoO1nD3lHyHHKyOYTV5xiqdZx2Xeqroa%2FMpgVsPCoFbpqPqhzA2JvNUOX0CzPNg1lxjqhbLSBBqHYzXtpYoYiZDk0nRNQ35i5VcNcy2gf8Q9KH09JrlLLJlLTiGNAaibzfolZt0u6nhTZtlv8%2BA6c2%2FI4QmP6VMPPhl8QGOqUB0snmH%2BUJuYiretocBxTYFXNq0AC8fXwr0uMnuaNLePFr288gbZK7xiZLncOTkNUioiKojhX8LeoHk3oWpryyj4640CXsV5NFCQheD2uYWQykao979vIKYb4JAnsGNcRkwnwIblFX1TKcUYzb%2B1biz0abmt%2FPaORw0vIUqzpyaGYryVJnALOexz69%2B%2BRBqkY0eiSUr5Y%2BVPfOf6zgJYZ9o5n93v6p&X-Amz-Signature=3fd6525574d8b0b615bfacd85771ad09dcf7daaa611d9c1cfb889eaa84be2e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
