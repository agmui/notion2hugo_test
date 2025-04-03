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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24ZERLM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjPYgf%2BubQHSgq6Hp%2B7ARDpuLCKAy%2BQV3o6eU%2Fd1q8tAIhAJvnX78bYllKtwvywWt%2BqR9WYFhSojpaUK%2Fu3Uk%2F1%2BbvKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4d5Hw12Jv8pM%2FpDUq3APojrfbb5YFhXQymklA2LUvvKqNaSprNcGmbW6ilKsUzncDAi3glJA7zsGVoQvFkhBnga0MQr39VUHW0K4QPEveyxtzQBnyBGFFWEChd1jaaf2iwERSl8WsxPofhsCkZrVPZbGxJSwG2hE3cEYdioyB0lSxq2xjZ87hWxOZfguDb5mymMTFoQWXK5A1XJxVnJHwjxiDzX8Kqt3d%2Fr0wpv6IPtGzHVTD4Wj5pAIerqPaiZ18LTC7T4yakARHkxdoFHQIfLDrZMJZNbShqZT4KjByN42lvTImkxOd%2B9ewbSP1hdVZQOGsQ7JzZVfAmNzC5STNm9f7Rbl46phf2bufRsxuVPBdRexaNcxf%2FhFYldGBcps3UtoimjbkXydAwXP%2BxXuvKdG7zspqjUe%2FvDs6GxMQI05IY%2BWuguMeVkPWzxTcb23ObiUu%2FSVOjQv%2F1HzQhz51ZsvLBD3z%2B8seXcJpmOpCdmxW1US6lRSZi6UVTLB3d086jJe5B5Nau7r%2BPE%2B1wQFDLxz7Dyw4YeWmOh2BBIE7yrboIUxmAMUkmB3u5CLeXGgx8mbj%2FRTEVfb6JhXdsrcaYTiIIVYxCrzPWygaDriawUUBvLRdp9umusBAchK7PDyrLtNcPKEMa2rd3jCn6Lq%2FBjqkAcaozGNrieOVRD64hoCKCfdeTMba5R1Pl%2B0UK4Jn9kv06oBMEQJIxIXgj1QrJNJSi2CFw0XGu2MyDVs%2FhMFtpaQzvATSZU2Grv0r2VtpKyL0bIW1cNGcx2NqZKpt%2FnJVwZ%2FBG%2FDc2jtXE052LdcaLa2g1z%2BG%2BdhTITMy1K88BFUz5ycx9lL7d3JwzuPKEQL0o2fCfclPeDKCEJVDPlbYM%2FEpOE2T&X-Amz-Signature=9f4c31c4fb94645bc814c468b4f2540dfb5878707705f065dc566b140045ded3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24ZERLM%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjPYgf%2BubQHSgq6Hp%2B7ARDpuLCKAy%2BQV3o6eU%2Fd1q8tAIhAJvnX78bYllKtwvywWt%2BqR9WYFhSojpaUK%2Fu3Uk%2F1%2BbvKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4d5Hw12Jv8pM%2FpDUq3APojrfbb5YFhXQymklA2LUvvKqNaSprNcGmbW6ilKsUzncDAi3glJA7zsGVoQvFkhBnga0MQr39VUHW0K4QPEveyxtzQBnyBGFFWEChd1jaaf2iwERSl8WsxPofhsCkZrVPZbGxJSwG2hE3cEYdioyB0lSxq2xjZ87hWxOZfguDb5mymMTFoQWXK5A1XJxVnJHwjxiDzX8Kqt3d%2Fr0wpv6IPtGzHVTD4Wj5pAIerqPaiZ18LTC7T4yakARHkxdoFHQIfLDrZMJZNbShqZT4KjByN42lvTImkxOd%2B9ewbSP1hdVZQOGsQ7JzZVfAmNzC5STNm9f7Rbl46phf2bufRsxuVPBdRexaNcxf%2FhFYldGBcps3UtoimjbkXydAwXP%2BxXuvKdG7zspqjUe%2FvDs6GxMQI05IY%2BWuguMeVkPWzxTcb23ObiUu%2FSVOjQv%2F1HzQhz51ZsvLBD3z%2B8seXcJpmOpCdmxW1US6lRSZi6UVTLB3d086jJe5B5Nau7r%2BPE%2B1wQFDLxz7Dyw4YeWmOh2BBIE7yrboIUxmAMUkmB3u5CLeXGgx8mbj%2FRTEVfb6JhXdsrcaYTiIIVYxCrzPWygaDriawUUBvLRdp9umusBAchK7PDyrLtNcPKEMa2rd3jCn6Lq%2FBjqkAcaozGNrieOVRD64hoCKCfdeTMba5R1Pl%2B0UK4Jn9kv06oBMEQJIxIXgj1QrJNJSi2CFw0XGu2MyDVs%2FhMFtpaQzvATSZU2Grv0r2VtpKyL0bIW1cNGcx2NqZKpt%2FnJVwZ%2FBG%2FDc2jtXE052LdcaLa2g1z%2BG%2BdhTITMy1K88BFUz5ycx9lL7d3JwzuPKEQL0o2fCfclPeDKCEJVDPlbYM%2FEpOE2T&X-Amz-Signature=4ec1f515a791b2e28c39d102ce9a1b074d7d2d59c790e26b8cc4dbcd43a7cc53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
