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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSS6QHL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL25LGxlvjPyoWqq69vGtWXii5tFTnyeFwMMHFHjSm6gIhALouegdbSW9NPfXHF%2BosFYP2C65aYyngYnjC4%2F%2B6x6EVKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjqqApmHbzb0v%2B7MIq3ANRtaXVcaspwpxJvO%2B5ngl62TvHrtNco7MWTIqxEB23%2FnI3rHxr5O%2Fjz2LED1gcAcDel11dl%2B5uk4jYzeiXE74ovR1CU3tOu0NlybCMgkpvfZ9EBvwK8xgiGwmQKoHVkvHWNJ%2BlzUcXyzO1Ai2rXiI1eNM%2B8c0yNx07BNwq6LcfE22A2zQSgTgX0x4IqbMnpknA%2B0jRrG1nULcqS1lI%2FNrV9pXH6%2F3TEeYpd4bYB%2FSuh3Fj254UvFTDWGH80KsEpZ32y4M3QPlGTOXG79fE3UmNG5Pxh2%2BDdK40N7XZpGQ%2FypxTavkdr5NcoVFPnj4z45f70A%2BwNu6WhH60zVFjVQNVn1SehfwUIl7rSs4scjN3f134NyNrElygR8WiTv8PRx1aFO7NSWHOYl4v%2F%2FDFOxSSMzH970k4p3mzqItkuuX6CDM2wT3u5P6m%2FyVyGAvBjxcPUKVBOc9fz%2Blok2l5uf4S4K%2FMHdisxS%2FJpwrFauXRnaAm0lbw4Zv2vvcz%2F4oGA75y5r%2BBWq%2FYemhql6L%2FD5ma%2BuqIDaA9Ihpra4MCPlKR6yYkQYfcny1VfSikr9h27CzWH3MHHu5V7iUHYHmMtl%2Fwmgz02rqGl4qkF9ue%2FRG9hHHNkti0yE0joPJsdDCBocjCBjqkATwWJ9WQEih9XLvRGKQXBGFBsOs%2FLfK2bCCPz0slL2%2B6LvYo%2F691FXUnGAUr2%2B7nt%2BHRppBj2s%2Flx7XeYmekZpCVuwNvie8KH67d9ebG2cCeCfXICbZtAGT7nl87o1HmN7i5Xd7as9uydBw%2FB98e68AANomwPwfRo3ls8Gw0Ov%2BjJa4PsskVnUCUUlVcFKJvLk7Klrrt1U01JErVif0F%2F3%2FwOVxM&X-Amz-Signature=bd718e944b7442495f75deb15761523e338c6e188ecd549c2b48856e729f07ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSS6QHL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL25LGxlvjPyoWqq69vGtWXii5tFTnyeFwMMHFHjSm6gIhALouegdbSW9NPfXHF%2BosFYP2C65aYyngYnjC4%2F%2B6x6EVKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjqqApmHbzb0v%2B7MIq3ANRtaXVcaspwpxJvO%2B5ngl62TvHrtNco7MWTIqxEB23%2FnI3rHxr5O%2Fjz2LED1gcAcDel11dl%2B5uk4jYzeiXE74ovR1CU3tOu0NlybCMgkpvfZ9EBvwK8xgiGwmQKoHVkvHWNJ%2BlzUcXyzO1Ai2rXiI1eNM%2B8c0yNx07BNwq6LcfE22A2zQSgTgX0x4IqbMnpknA%2B0jRrG1nULcqS1lI%2FNrV9pXH6%2F3TEeYpd4bYB%2FSuh3Fj254UvFTDWGH80KsEpZ32y4M3QPlGTOXG79fE3UmNG5Pxh2%2BDdK40N7XZpGQ%2FypxTavkdr5NcoVFPnj4z45f70A%2BwNu6WhH60zVFjVQNVn1SehfwUIl7rSs4scjN3f134NyNrElygR8WiTv8PRx1aFO7NSWHOYl4v%2F%2FDFOxSSMzH970k4p3mzqItkuuX6CDM2wT3u5P6m%2FyVyGAvBjxcPUKVBOc9fz%2Blok2l5uf4S4K%2FMHdisxS%2FJpwrFauXRnaAm0lbw4Zv2vvcz%2F4oGA75y5r%2BBWq%2FYemhql6L%2FD5ma%2BuqIDaA9Ihpra4MCPlKR6yYkQYfcny1VfSikr9h27CzWH3MHHu5V7iUHYHmMtl%2Fwmgz02rqGl4qkF9ue%2FRG9hHHNkti0yE0joPJsdDCBocjCBjqkATwWJ9WQEih9XLvRGKQXBGFBsOs%2FLfK2bCCPz0slL2%2B6LvYo%2F691FXUnGAUr2%2B7nt%2BHRppBj2s%2Flx7XeYmekZpCVuwNvie8KH67d9ebG2cCeCfXICbZtAGT7nl87o1HmN7i5Xd7as9uydBw%2FB98e68AANomwPwfRo3ls8Gw0Ov%2BjJa4PsskVnUCUUlVcFKJvLk7Klrrt1U01JErVif0F%2F3%2FwOVxM&X-Amz-Signature=4ddb1313a83761e825d131a57950f68da5bd598dba5a7f16d7986ebca22c12b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
