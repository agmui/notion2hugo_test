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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJHCJI2G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEONbDgtoKog08P69HNPnAsTaKxMKsROLysKPvF7deEEAiEA7ltaeUfEQRDsuDzJtD8zjTPu8MFUtOmhnLfJLfVkDfAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbWbXTlbeog%2BHhV6SrcA%2FWvurrode89A%2FFGSm76w5p4P3JvYpZj7YqREFa6e7DsaUqFR3f86wF7p9wg0b7Rrg3UnJcXre9b2OuXjzuNow0A3BrJHm2rawJ7aqivOAqlV1k6tZ%2FZnBtu7NSyUq8%2F9lXt79x9C9oaEzd6sH6dnTikKp6J6jkkTEZU0SsjQeFZRk3qU9WfJeeoy31w%2FXKaIskEH83HpqXgHfl7F6ilKKjagRpvDnYB%2FyTIwlIub2L%2BNVyckQxQ9U76CPgOS%2FQcU636a8MpP4JJpT4jXfP7NE4UIo1LgV3%2Bzw3bqQPzJsdqSEeb92lKrAbmwxzMptn8eahhQ8teI0Dsnw7aa%2FROYLPu6ScOIidkNb6g1LDJiDmY0A5b5uGlfnuPZL80NQYQy6WccHBmMjYs%2Frxg5oxVQg7EPfQehKo%2FVKVJtkST58bUtcppxo4052s4HeBMySH3aCyVEyYkgzO0Th8GUNUhhaNXE6ivQKi1UB9j7QXKzsBs975NosBAFrYs3Zt4WdkuYE0cZzeXdrlz%2BDZBCeEymIR2%2FQhpcrzvI7yI8USxBGDgT63zD4bIZdNl3BmRAo0PslAvmShnozMj%2BWAgfCD%2Ft1AFU9nyJ%2BfmD6%2Fjmx18qnZqtKIvdcp1O3h4IVBIMLP76b8GOqUBd4enABeQeGKe%2FHq9MQUJH2F%2BsGDFmJ1Cnsr4tfk47BrpC9aGpQNjDyi1qEviWEtKHwqkHaf9UgPhvh3P6Gnyh8%2BqCsdCH749U%2FctOrCDNT3TZDLIbTa6H7Az6aynD5bPcHQRQJY%2BPp3oJxaplhD4VCrZ%2Fh2hkFuv%2FRf8cN7hBitCrWZUW61ck9O2c5i5%2F09yJfUyJT2Qg7hupoByWpTdkSeSg1tD&X-Amz-Signature=5577b9733d1a6166c4ecc7d12fc16e1cfa1907d55516443330e70b90055816aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJHCJI2G%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEONbDgtoKog08P69HNPnAsTaKxMKsROLysKPvF7deEEAiEA7ltaeUfEQRDsuDzJtD8zjTPu8MFUtOmhnLfJLfVkDfAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbWbXTlbeog%2BHhV6SrcA%2FWvurrode89A%2FFGSm76w5p4P3JvYpZj7YqREFa6e7DsaUqFR3f86wF7p9wg0b7Rrg3UnJcXre9b2OuXjzuNow0A3BrJHm2rawJ7aqivOAqlV1k6tZ%2FZnBtu7NSyUq8%2F9lXt79x9C9oaEzd6sH6dnTikKp6J6jkkTEZU0SsjQeFZRk3qU9WfJeeoy31w%2FXKaIskEH83HpqXgHfl7F6ilKKjagRpvDnYB%2FyTIwlIub2L%2BNVyckQxQ9U76CPgOS%2FQcU636a8MpP4JJpT4jXfP7NE4UIo1LgV3%2Bzw3bqQPzJsdqSEeb92lKrAbmwxzMptn8eahhQ8teI0Dsnw7aa%2FROYLPu6ScOIidkNb6g1LDJiDmY0A5b5uGlfnuPZL80NQYQy6WccHBmMjYs%2Frxg5oxVQg7EPfQehKo%2FVKVJtkST58bUtcppxo4052s4HeBMySH3aCyVEyYkgzO0Th8GUNUhhaNXE6ivQKi1UB9j7QXKzsBs975NosBAFrYs3Zt4WdkuYE0cZzeXdrlz%2BDZBCeEymIR2%2FQhpcrzvI7yI8USxBGDgT63zD4bIZdNl3BmRAo0PslAvmShnozMj%2BWAgfCD%2Ft1AFU9nyJ%2BfmD6%2Fjmx18qnZqtKIvdcp1O3h4IVBIMLP76b8GOqUBd4enABeQeGKe%2FHq9MQUJH2F%2BsGDFmJ1Cnsr4tfk47BrpC9aGpQNjDyi1qEviWEtKHwqkHaf9UgPhvh3P6Gnyh8%2BqCsdCH749U%2FctOrCDNT3TZDLIbTa6H7Az6aynD5bPcHQRQJY%2BPp3oJxaplhD4VCrZ%2Fh2hkFuv%2FRf8cN7hBitCrWZUW61ck9O2c5i5%2F09yJfUyJT2Qg7hupoByWpTdkSeSg1tD&X-Amz-Signature=0745a1e176c5b5387c4a20949e97b4a37ec95ac9f56413e188642bdeb54c911a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
