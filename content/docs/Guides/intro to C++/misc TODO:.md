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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTE734S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAxLqwQiNAme8E4mY%2Bj%2BaJknGHfNhTd4ALZXqqxSTPr0AiA1sgez1IwwacorMmlUZvE0LTXzRbpVvDsn6UdETdZaTyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnostyfreuNl7VUpKtwDb2Ry6CaBNpRJyyT9r3rFATO2VEWAa6NPuE%2F%2B8i4DQrgOq6%2BahdmH%2B%2FgSjKKlom53%2B7OAht%2F57krN4HFBlVql3Kl6bJ9%2BPg0SVOKtTNitu0zckXyCeUVUvsJax3Fvs0G6LgGqYkF8H7u%2BAOuWXR4syZn4niCey%2BrghvqMihZQbTP8FxIYbVB%2FoQW2EqaZk3NbGm2R9nKVfNUa5s4Mn8kRX8bDxDafYlbHv2FwqIoRy2HrIrE01DCTSnOhpn%2B4WjSxA54j%2FeYYUpR223FYpuz48raWJU7bg1t8mtVBOQedNpgQJT4gM4jWqbpH17ZjGBNxuCaf5pLq12U7Lrn67XDQqV7n9OhTU63CDMTdAvK29RB5B%2FiLdlIm3kT6uLungRg%2BhpuEBxAIUIEZfHHbj0wqwhjZ7VSAPxbxEoCK%2BRyyP4H%2BusNAsQNojuh13jDfAk28haLBbOA80DvF8QtwWY%2F7yS2tFoHcAxIvmZET8kudt5ldwDIG7LHBzZGqY%2BFsIciBLpFFHa3VySPw9DZlVQYmOLSvYu2FpTh8p102bj4L3o1rcLFWDkmRXbQfd1F%2B3kkdxqspISkTR%2BQjdYJ9oZs%2BX6R2gPZjN9DxIWYuA9CkAz9UjdTNjOCI8q6d%2FXswxLb8vgY6pgHUjtWFjdTwAJB1U6Fj9VRPUGHcWWPmakX9lThqtTrzScqmIT%2FK%2BVIVsSgbYasU%2FlpgLtpP6FIxcHkef8IVBV%2BVPYgK7oea71iLijYHyLuVTDyftyTIFjOW14E3szwA8Lo9NNxO5dYByTjB%2FhraSCqmR15%2Bq66m3zKO8Eg9cxNdTxve1KsiZhMbO04z8jOuwCEtgkvremSzxtYFZdMPb90uNY2Klcak&X-Amz-Signature=3ab3211bc5ae79906469ae65be19a60e82bcd72b1c7f2efbcc0d7f8fae8bee48&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTE734S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAxLqwQiNAme8E4mY%2Bj%2BaJknGHfNhTd4ALZXqqxSTPr0AiA1sgez1IwwacorMmlUZvE0LTXzRbpVvDsn6UdETdZaTyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnostyfreuNl7VUpKtwDb2Ry6CaBNpRJyyT9r3rFATO2VEWAa6NPuE%2F%2B8i4DQrgOq6%2BahdmH%2B%2FgSjKKlom53%2B7OAht%2F57krN4HFBlVql3Kl6bJ9%2BPg0SVOKtTNitu0zckXyCeUVUvsJax3Fvs0G6LgGqYkF8H7u%2BAOuWXR4syZn4niCey%2BrghvqMihZQbTP8FxIYbVB%2FoQW2EqaZk3NbGm2R9nKVfNUa5s4Mn8kRX8bDxDafYlbHv2FwqIoRy2HrIrE01DCTSnOhpn%2B4WjSxA54j%2FeYYUpR223FYpuz48raWJU7bg1t8mtVBOQedNpgQJT4gM4jWqbpH17ZjGBNxuCaf5pLq12U7Lrn67XDQqV7n9OhTU63CDMTdAvK29RB5B%2FiLdlIm3kT6uLungRg%2BhpuEBxAIUIEZfHHbj0wqwhjZ7VSAPxbxEoCK%2BRyyP4H%2BusNAsQNojuh13jDfAk28haLBbOA80DvF8QtwWY%2F7yS2tFoHcAxIvmZET8kudt5ldwDIG7LHBzZGqY%2BFsIciBLpFFHa3VySPw9DZlVQYmOLSvYu2FpTh8p102bj4L3o1rcLFWDkmRXbQfd1F%2B3kkdxqspISkTR%2BQjdYJ9oZs%2BX6R2gPZjN9DxIWYuA9CkAz9UjdTNjOCI8q6d%2FXswxLb8vgY6pgHUjtWFjdTwAJB1U6Fj9VRPUGHcWWPmakX9lThqtTrzScqmIT%2FK%2BVIVsSgbYasU%2FlpgLtpP6FIxcHkef8IVBV%2BVPYgK7oea71iLijYHyLuVTDyftyTIFjOW14E3szwA8Lo9NNxO5dYByTjB%2FhraSCqmR15%2Bq66m3zKO8Eg9cxNdTxve1KsiZhMbO04z8jOuwCEtgkvremSzxtYFZdMPb90uNY2Klcak&X-Amz-Signature=ba029615a4b8b40e89a5b4dd7c76b23cfcc8dda50a0e3dba6c9b5ff6464aabae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
