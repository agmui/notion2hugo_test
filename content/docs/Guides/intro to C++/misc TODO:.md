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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKOUK5I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPWDBHoyn153SgjLepra1WvJTXf2pxgJ9zGpTbpdabOAiB%2BMDg1jv6CNGG4zI1h%2BawpGqdhxn4HlYqTr8uTaM7vTSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM1MTHPL%2BLa9Dwgh6NKtwDorJNCj4fFODj3kTMPYN6Jo0GNLI89JnGFEgNIPgMwvUU0QjyQTXOXIoaCTIs45r52Ham3EhqSdl6SZhszqnszMzyj2JkHIqFoOXfsK7bryE1KiwSn3Ifiv2qTisJ3kUZ33lFvl7Of7uy0oUKxXGiwSeI7S8Mtq62RCcib2GBauTPIW9cw0bSgMv4GwXJDvdIlp%2FyEP42TMhKOm9lyQQr3MnHGkCT8mJ9m0IX5m%2FZlwlctWkyDhe6BD8xsUcjXgvsDCkMd0eDZWYsXa%2F1qk%2F2%2Fdibh73yjhUrG0IjJ28WPBfNzeihESdSe%2FbbxBvqJiSgZcS17mqNkc3uQjiuctbeHbnYPIlKMeWS5rVqLj%2BA3KW8kHB0nSgGZvP8KmoDRe%2F1V3%2FQSOjvB5TiFpOX3A7tRkj1TvWWb%2B1yK6Jm7R4wBp2bMRUKLxByYPl2SFQJmHOjrQXFiUiECa4PNGEmWIZ3%2BMv15hXIP%2FuDec%2BQw5K82QPRJbj60NqG9qdT%2Fdxi5PnVphgmmjhMpqkvPri%2BKENTxk1SfY2VtGCCRbkbl1Gv5gxf3nXEOK10WxgvZYvMRJKptI2CBB7YaOaIT0X1TI1VX%2F1UNEMe43vNYpcwv%2FRUHlQPGSYVQnb%2BYVtuwtQwt8mKwAY6pgGh7jD7NPGMveN%2FkOvwaBo76eFrf40lGA6Wo8gx4mjMum13Qb631zbSaJqB0RNO6WjGQNNar5Sir%2BeLUJdjs7JA4V1bfiBn9pUnhr2KgFO7vJmKGROsjayCnFdIU0aK8%2FudtjNQ3%2BiLyXGDZfiIZP2cokREs62BoFjGPCTz0D9mGBnXhoMK%2Fyac6R0ks8waDbmvr%2BXXou77JIhbqmSrgh0xkf%2BKa3GZ&X-Amz-Signature=8bed190cf8814de044a20673284481845f470541e7f25ffee3bf2dae40d61385&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKOUK5I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPWDBHoyn153SgjLepra1WvJTXf2pxgJ9zGpTbpdabOAiB%2BMDg1jv6CNGG4zI1h%2BawpGqdhxn4HlYqTr8uTaM7vTSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM1MTHPL%2BLa9Dwgh6NKtwDorJNCj4fFODj3kTMPYN6Jo0GNLI89JnGFEgNIPgMwvUU0QjyQTXOXIoaCTIs45r52Ham3EhqSdl6SZhszqnszMzyj2JkHIqFoOXfsK7bryE1KiwSn3Ifiv2qTisJ3kUZ33lFvl7Of7uy0oUKxXGiwSeI7S8Mtq62RCcib2GBauTPIW9cw0bSgMv4GwXJDvdIlp%2FyEP42TMhKOm9lyQQr3MnHGkCT8mJ9m0IX5m%2FZlwlctWkyDhe6BD8xsUcjXgvsDCkMd0eDZWYsXa%2F1qk%2F2%2Fdibh73yjhUrG0IjJ28WPBfNzeihESdSe%2FbbxBvqJiSgZcS17mqNkc3uQjiuctbeHbnYPIlKMeWS5rVqLj%2BA3KW8kHB0nSgGZvP8KmoDRe%2F1V3%2FQSOjvB5TiFpOX3A7tRkj1TvWWb%2B1yK6Jm7R4wBp2bMRUKLxByYPl2SFQJmHOjrQXFiUiECa4PNGEmWIZ3%2BMv15hXIP%2FuDec%2BQw5K82QPRJbj60NqG9qdT%2Fdxi5PnVphgmmjhMpqkvPri%2BKENTxk1SfY2VtGCCRbkbl1Gv5gxf3nXEOK10WxgvZYvMRJKptI2CBB7YaOaIT0X1TI1VX%2F1UNEMe43vNYpcwv%2FRUHlQPGSYVQnb%2BYVtuwtQwt8mKwAY6pgGh7jD7NPGMveN%2FkOvwaBo76eFrf40lGA6Wo8gx4mjMum13Qb631zbSaJqB0RNO6WjGQNNar5Sir%2BeLUJdjs7JA4V1bfiBn9pUnhr2KgFO7vJmKGROsjayCnFdIU0aK8%2FudtjNQ3%2BiLyXGDZfiIZP2cokREs62BoFjGPCTz0D9mGBnXhoMK%2Fyac6R0ks8waDbmvr%2BXXou77JIhbqmSrgh0xkf%2BKa3GZ&X-Amz-Signature=a17537da4b28f1af1f0760bb8791111a53364804de8a3842391df02ae94e6201&X-Amz-SignedHeaders=host&x-id=GetObject)

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
