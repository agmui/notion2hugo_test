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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667565CXG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArGlEciDPHT7qcpZvP%2B1qmLKwPGiUmYEH3mo09xmXFWAiAyeR7aTN2RpIe26gEM01HbV9F%2BQN%2BkyMbWI7JjfAK1CCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMwxHBuOQfVKm5WTAgKtwD7K8e%2BSZ4VJZgML3qFQAEHPxHzOejrtlsnXRuGM3YfFBOPqzHRxb3F7RYzyaExR8MNYhdPS31LYMiGvpl6votnhNbidXs0jh2%2F3qWq%2BjhF3j0BzOCUSfAWeuO1aa76UEp51xo%2F6Ke3I86EQXOqzAhKzCHMRloRLx5gnxjYZhTYAaN%2B%2BuMzVw0VxUqMd08m6p7n%2F4ZdCAokEXVQZvMT9%2BdzDj%2Bdti%2FK%2BXsE%2FdNLPPJFxsh%2F7upZ0EMR9HYbPA%2F%2FjprwDAFNedj%2Ft56t5%2F%2Fw%2FPfFNjdaX6NzCk73MzdxWU%2BI3VnhUn9J9ckluhJvWa79c0krwGQvi4Rx6m1UqczHkmG04ggFzH22LSI1cZNNzZSGZvHzfVwEB%2BjBf5BCk1uM0Lj5mMdwvRFTblAd0yKKbh9wAvHiXUkf6TnlXYGzSBIIWqiyFtdEOagK1h6NHHaIFV3yNGeFBH7YewM%2FcDy6F1MyZErIIjpLc%2FD5EdT17JltlZ%2B32VZEbEvYyqVS55s0EUdUPP45coxkQnpDQI1Kj4ivQDtD9SQmONy1rQFtaGAVfnh7FzAc9n8JBGQDpGvYjLIQ%2BwH77vis2ru%2FEuBY%2F5rfFaw7y3uS6ouN5M9ZeHU61oQYo7IO8VG6vWh6hkw7MO5xAY6pgE29FvAyJU5%2F%2Fy7PL17bBus9FD%2BG7%2BTCHEDwaO5cicTmmn4TO98PLKaWHb8eZ0N5hTPMRvRM51MmDXMRMe6%2F1uhOUbr6uHU7fCs2%2FK2otBATAZSGCHhBnBmhD6spo1X4BDrg91R0kpVdFjCo1cDFQk0ZEpcXE4jXfGzi%2FN15Hb%2BL8EX7Uj3hU7ovaErGGFAXKgC06b1zbXaAag5f3U9oLbN%2Fmyx7E28&X-Amz-Signature=b48403d16cfcb398ed753a625a935ce6104befb665d7c298fdeb038c79211c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667565CXG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArGlEciDPHT7qcpZvP%2B1qmLKwPGiUmYEH3mo09xmXFWAiAyeR7aTN2RpIe26gEM01HbV9F%2BQN%2BkyMbWI7JjfAK1CCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMwxHBuOQfVKm5WTAgKtwD7K8e%2BSZ4VJZgML3qFQAEHPxHzOejrtlsnXRuGM3YfFBOPqzHRxb3F7RYzyaExR8MNYhdPS31LYMiGvpl6votnhNbidXs0jh2%2F3qWq%2BjhF3j0BzOCUSfAWeuO1aa76UEp51xo%2F6Ke3I86EQXOqzAhKzCHMRloRLx5gnxjYZhTYAaN%2B%2BuMzVw0VxUqMd08m6p7n%2F4ZdCAokEXVQZvMT9%2BdzDj%2Bdti%2FK%2BXsE%2FdNLPPJFxsh%2F7upZ0EMR9HYbPA%2F%2FjprwDAFNedj%2Ft56t5%2F%2Fw%2FPfFNjdaX6NzCk73MzdxWU%2BI3VnhUn9J9ckluhJvWa79c0krwGQvi4Rx6m1UqczHkmG04ggFzH22LSI1cZNNzZSGZvHzfVwEB%2BjBf5BCk1uM0Lj5mMdwvRFTblAd0yKKbh9wAvHiXUkf6TnlXYGzSBIIWqiyFtdEOagK1h6NHHaIFV3yNGeFBH7YewM%2FcDy6F1MyZErIIjpLc%2FD5EdT17JltlZ%2B32VZEbEvYyqVS55s0EUdUPP45coxkQnpDQI1Kj4ivQDtD9SQmONy1rQFtaGAVfnh7FzAc9n8JBGQDpGvYjLIQ%2BwH77vis2ru%2FEuBY%2F5rfFaw7y3uS6ouN5M9ZeHU61oQYo7IO8VG6vWh6hkw7MO5xAY6pgE29FvAyJU5%2F%2Fy7PL17bBus9FD%2BG7%2BTCHEDwaO5cicTmmn4TO98PLKaWHb8eZ0N5hTPMRvRM51MmDXMRMe6%2F1uhOUbr6uHU7fCs2%2FK2otBATAZSGCHhBnBmhD6spo1X4BDrg91R0kpVdFjCo1cDFQk0ZEpcXE4jXfGzi%2FN15Hb%2BL8EX7Uj3hU7ovaErGGFAXKgC06b1zbXaAag5f3U9oLbN%2Fmyx7E28&X-Amz-Signature=c347a87e997fe26794ebcca268c0906599df261ddd53e0445991af30ba1ca3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
