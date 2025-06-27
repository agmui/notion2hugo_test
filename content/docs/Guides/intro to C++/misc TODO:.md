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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKEC6GD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwHCrxqY5K%2BkhsN%2BEThYq2U8R1e0IZY%2BkLBLlqd5Vd7wIgYGdJbWQsf9q7BYjAI8wW35AvCtt7jjH3n22g3RdIo28q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKF9Mv6Ni1%2FMxTxYOircA7oT%2B0LS9X0lVo%2B0U5pNXFqfPKYrTIzPwOVqsvO7G34n7BmF7Nryo%2FH3b7PsWEqZLpQkdbR9Mr0QhaetbRSvX9wD8ZKy84epAd5T62R%2BR9cn5ttOHdlvNY67utGDBWYrmlu%2BYjApByifjX%2FIgMZH5zHTRMKpjF%2BqvE7qacSWwcwQJzI0l5eTaajplwqeEBRKywzF9PL7DkDo%2BjdXb2dS1D0FApOH45HgCQhwwl7BWoKFyUpn0VCZD3oBE9077fWi3kORzuPbMk38APp1Xab6a0k1E481KtIps7JxYgJeAnw05q1inByFihIwuqV%2B7p8Gc9D%2FNfVANeFWleszp36WzCpvZnBKD8KVSAyUpbfWtqqLOHgbCL8g815gY1qlVVKYC8syL6mZxMCDzAKdkqtbwcXayZNmUFgwWkzDMuE5flhlK0T89ajEJyEQjmzGb4Zh7v4ocG2hPPOCUlyIpVpip6bhnio%2Ffh54IIjQKDbe8fF6liZeKlAzkEt4%2BxyYsWLWBM0fBlzCk7JEhqCmPmwOFU3EMXGL9ZFpnRCNcqSGm6J%2F9xwhzz0BPG5mx%2BVeXTrtFw9cuMuXszL2T2S6qFw6%2Fh87rt90MdKcBKgafCfc%2FYju9HSTNJAwmuwQlZDQMIbK%2B8IGOqUBhQd8hxLabKVgsyQ1NzC%2BHcbFWlq%2Fdj1%2BAcroBM9uA0yibtecGT3h%2Bjp%2FVWM0gxADA4zvwUg45iJsZNvoPEUmGpPozCEQ2zkSZUpQZENm4s471flV2XCrNXo7ZCWQJ1uRxDGRC7M0%2BO9AUzagz3Sp4illQTJmAAbiu6h7eWZjAl%2B%2FTYKoawyaJpwPxg0DdWEVyqbmoVDy6UdCUMEljZAWNo%2Bp0KLU&X-Amz-Signature=bff92ca0c024af485bfe7e1d2cae98bbdb8e337f31ec6c044bbbd14ae57b3a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKEC6GD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwHCrxqY5K%2BkhsN%2BEThYq2U8R1e0IZY%2BkLBLlqd5Vd7wIgYGdJbWQsf9q7BYjAI8wW35AvCtt7jjH3n22g3RdIo28q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKF9Mv6Ni1%2FMxTxYOircA7oT%2B0LS9X0lVo%2B0U5pNXFqfPKYrTIzPwOVqsvO7G34n7BmF7Nryo%2FH3b7PsWEqZLpQkdbR9Mr0QhaetbRSvX9wD8ZKy84epAd5T62R%2BR9cn5ttOHdlvNY67utGDBWYrmlu%2BYjApByifjX%2FIgMZH5zHTRMKpjF%2BqvE7qacSWwcwQJzI0l5eTaajplwqeEBRKywzF9PL7DkDo%2BjdXb2dS1D0FApOH45HgCQhwwl7BWoKFyUpn0VCZD3oBE9077fWi3kORzuPbMk38APp1Xab6a0k1E481KtIps7JxYgJeAnw05q1inByFihIwuqV%2B7p8Gc9D%2FNfVANeFWleszp36WzCpvZnBKD8KVSAyUpbfWtqqLOHgbCL8g815gY1qlVVKYC8syL6mZxMCDzAKdkqtbwcXayZNmUFgwWkzDMuE5flhlK0T89ajEJyEQjmzGb4Zh7v4ocG2hPPOCUlyIpVpip6bhnio%2Ffh54IIjQKDbe8fF6liZeKlAzkEt4%2BxyYsWLWBM0fBlzCk7JEhqCmPmwOFU3EMXGL9ZFpnRCNcqSGm6J%2F9xwhzz0BPG5mx%2BVeXTrtFw9cuMuXszL2T2S6qFw6%2Fh87rt90MdKcBKgafCfc%2FYju9HSTNJAwmuwQlZDQMIbK%2B8IGOqUBhQd8hxLabKVgsyQ1NzC%2BHcbFWlq%2Fdj1%2BAcroBM9uA0yibtecGT3h%2Bjp%2FVWM0gxADA4zvwUg45iJsZNvoPEUmGpPozCEQ2zkSZUpQZENm4s471flV2XCrNXo7ZCWQJ1uRxDGRC7M0%2BO9AUzagz3Sp4illQTJmAAbiu6h7eWZjAl%2B%2FTYKoawyaJpwPxg0DdWEVyqbmoVDy6UdCUMEljZAWNo%2Bp0KLU&X-Amz-Signature=72b152f67dff520c02ec943484452d35aa9eb66da442399fae83411133feec3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
