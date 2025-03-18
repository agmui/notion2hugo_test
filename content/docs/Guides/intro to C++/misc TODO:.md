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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKR3EID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCew%2FUjGJH26muGKf7M%2BZ4f%2FMFwkQSOlH1ycXxaBOfUxQIhAK7BF3w0364VYb8PZUhXgq%2FlzrhNyoMjhC0q7MdYHl2gKv8DCFEQABoMNjM3NDIzMTgzODA1IgwFmf3JstscU1Qems4q3AP%2FDgnBePYrP63WFryNr2UJKDba3gorGzGZ15Sk8WBXJ1xjtjzcn5J3mbmwsTaPOTkjp8BYD7kEDqxKjGq6Wi%2FpjMFRP8gijya5Usg%2FqaPR1MEz8sEMuheqDRf%2FZmiMMZ9ihk%2FtJwJYcS2nhk%2FIWOWE8T3OKnRYxsM%2FrUsE9ZhxASzkAiQB0Xb1g7ZzzLQUkGSbEdv6JL7r65SvsNnWO6CwO4sv9P7e9xtoBGYu0b7y5mwvKyR7gwPIQxudh%2B%2BzeM41zPScvSuQauBzZxwDWtNSG6opx3n%2BsoX8md2DUyG5BNzwiqYIruoBrNlGSvUYcRlX6qyatcHmuQi7F7efXbPgUBvwbR0jAEi%2BA%2F7fFrX3UkPVCBJ2m4A7zNAxADUOI0zeA84AKRNf7k2D%2BtPNosJxwBChNbjB99epCED0JunMGWxZsH%2FP1B%2BmFycrLEedSMgHDsOi4atH5KRDXkiQ5qTFoCKkwYsl9rFn%2F8Mq8sTE%2B3Nxqnh0IDn%2BbD24YCS8%2BbQYkj7l8F2ZGg8jCI8urEOUwGQx7paQt9uSRoCV5U0%2BPKvcd8iq0Fdprimj5Q1TIaN4FFq2NEce6A8PyOHGTnM1pX3GZ%2BDfNiHKnLoRtE9%2FYpysAD2xLnwCi7yTLzDH7OK%2BBjqkAcleGf%2BrbPzLUYcQd4g76oiwU2TMKEnR0RGhQ%2B8X0XmmgWtJpeTz4p6OfOAjhC7aOySY5DciilzVYwNf5kexW0zVhU59S7Ot5VRWWTly8r4KOVCPKuCNnJUMfrYjf16UseKgmBs9FO%2Bv3Al2ae%2FX49FckU3FrKZBIhHg%2BEj3E7jZ4QmGOfRiRfjDI6ARsEL1rcwdhCg%2BfaSUwykj354e94fDupWn&X-Amz-Signature=5b6afa49fb5fd5d4fb916a279982089406b8e139b3c8e59117293e77b0eaa458&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKR3EID%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCew%2FUjGJH26muGKf7M%2BZ4f%2FMFwkQSOlH1ycXxaBOfUxQIhAK7BF3w0364VYb8PZUhXgq%2FlzrhNyoMjhC0q7MdYHl2gKv8DCFEQABoMNjM3NDIzMTgzODA1IgwFmf3JstscU1Qems4q3AP%2FDgnBePYrP63WFryNr2UJKDba3gorGzGZ15Sk8WBXJ1xjtjzcn5J3mbmwsTaPOTkjp8BYD7kEDqxKjGq6Wi%2FpjMFRP8gijya5Usg%2FqaPR1MEz8sEMuheqDRf%2FZmiMMZ9ihk%2FtJwJYcS2nhk%2FIWOWE8T3OKnRYxsM%2FrUsE9ZhxASzkAiQB0Xb1g7ZzzLQUkGSbEdv6JL7r65SvsNnWO6CwO4sv9P7e9xtoBGYu0b7y5mwvKyR7gwPIQxudh%2B%2BzeM41zPScvSuQauBzZxwDWtNSG6opx3n%2BsoX8md2DUyG5BNzwiqYIruoBrNlGSvUYcRlX6qyatcHmuQi7F7efXbPgUBvwbR0jAEi%2BA%2F7fFrX3UkPVCBJ2m4A7zNAxADUOI0zeA84AKRNf7k2D%2BtPNosJxwBChNbjB99epCED0JunMGWxZsH%2FP1B%2BmFycrLEedSMgHDsOi4atH5KRDXkiQ5qTFoCKkwYsl9rFn%2F8Mq8sTE%2B3Nxqnh0IDn%2BbD24YCS8%2BbQYkj7l8F2ZGg8jCI8urEOUwGQx7paQt9uSRoCV5U0%2BPKvcd8iq0Fdprimj5Q1TIaN4FFq2NEce6A8PyOHGTnM1pX3GZ%2BDfNiHKnLoRtE9%2FYpysAD2xLnwCi7yTLzDH7OK%2BBjqkAcleGf%2BrbPzLUYcQd4g76oiwU2TMKEnR0RGhQ%2B8X0XmmgWtJpeTz4p6OfOAjhC7aOySY5DciilzVYwNf5kexW0zVhU59S7Ot5VRWWTly8r4KOVCPKuCNnJUMfrYjf16UseKgmBs9FO%2Bv3Al2ae%2FX49FckU3FrKZBIhHg%2BEj3E7jZ4QmGOfRiRfjDI6ARsEL1rcwdhCg%2BfaSUwykj354e94fDupWn&X-Amz-Signature=aa11b625b9e01b4249358838079e04e71e348afcca373b7c1af88b8eca9c2cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
