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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7HKYU76%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQC7bhcK%2B0WRH7IwgTsmpGu3ccFR0TbAKY7Tt01jXEyBOgIgKqBnJKEcI1V%2FNVWmqNFhGtI7y1df6Aq3pV4KJoVnK3kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQp1kqadeHrLWz%2F4SrcA3gjQv100%2Bb4WTN%2FFnsuvU%2FMSXs23ck0GuHuzzg7f7iKApeqpbHGx%2BpzuRxvnfGuU%2FwRsmCctpiwaIyv7ps8AQveNYRPFmk%2FtuAbYtweyKF40bMO5M3QzNE3vjgu%2BzO%2FMggEBfc6KYsImXuXSXCUzW0HghPYwqDJ9nkECMeuZjZZbrPNUWuVOpnQB%2BDH%2BMp7UHOy0B9IVv4xmbLxtkdqbm3Sr7An9GIDKIXetniNrkVz2w5iVY0C8BNv4U%2Bjh2NxluLsWFIlXrkFiLkxxIYIvuMEWLf5X3EDg5khKfMQcOiXLoZrLFB953sN8NpZvWXNT%2BwC77Hi%2BV2JEaKlkoUzB8laCjG0w%2BL%2Bno%2FREhd7uem7mQSbvme%2FIk9qRFHs9rOHYzyoPsIM2Jp7lNwor1iAQT2R2%2BLMCaQsyKkrkJz%2BqwRtXhsuRbZ7jLeNbukc2pwEAeeNNcyuUUSie4TmOn5QXxrLb%2B6NsVGBNHvVrh5PVbTUlEHpQN8D7C%2BYOAFwGvVoqmmdPKug%2BQrU3VO12bw64OLmVz3Iazwuz6D3zTm%2BwEmhbXDwgAgvfOWQMcaK9eFVxZDIvV550jTUxLwT8%2FeA8qde%2BYe5qfyI0GQ4hoyxuta7y4Mk3Lena9BoOt9vMM%2BKy8sGOqUB0j1MN96i9OkewqyATlYjOUsvcwpqLi8WcKBloJvTnaoS38k5EvAGk4r6GKTP%2B176Rds3B%2FpvRd3VeGL7rgYrYFEnJP3r3uwdue3%2BzVylCZIvnhKV2f6oZ5UXuJA7i1mQ6Qnjow%2BvniPi07VWVjE%2BwTqoF6CGr6RJGZ%2FTx9XH1IE6wlVlH2f5xNrHruzNNTXAILyk7nnQlViagR%2F%2FWa56hlaSLBmp&X-Amz-Signature=03414ecf3c95bf0522e95cb5de799a06228b95e08fe3eeb289e2ceb1c10f6828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7HKYU76%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQC7bhcK%2B0WRH7IwgTsmpGu3ccFR0TbAKY7Tt01jXEyBOgIgKqBnJKEcI1V%2FNVWmqNFhGtI7y1df6Aq3pV4KJoVnK3kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQp1kqadeHrLWz%2F4SrcA3gjQv100%2Bb4WTN%2FFnsuvU%2FMSXs23ck0GuHuzzg7f7iKApeqpbHGx%2BpzuRxvnfGuU%2FwRsmCctpiwaIyv7ps8AQveNYRPFmk%2FtuAbYtweyKF40bMO5M3QzNE3vjgu%2BzO%2FMggEBfc6KYsImXuXSXCUzW0HghPYwqDJ9nkECMeuZjZZbrPNUWuVOpnQB%2BDH%2BMp7UHOy0B9IVv4xmbLxtkdqbm3Sr7An9GIDKIXetniNrkVz2w5iVY0C8BNv4U%2Bjh2NxluLsWFIlXrkFiLkxxIYIvuMEWLf5X3EDg5khKfMQcOiXLoZrLFB953sN8NpZvWXNT%2BwC77Hi%2BV2JEaKlkoUzB8laCjG0w%2BL%2Bno%2FREhd7uem7mQSbvme%2FIk9qRFHs9rOHYzyoPsIM2Jp7lNwor1iAQT2R2%2BLMCaQsyKkrkJz%2BqwRtXhsuRbZ7jLeNbukc2pwEAeeNNcyuUUSie4TmOn5QXxrLb%2B6NsVGBNHvVrh5PVbTUlEHpQN8D7C%2BYOAFwGvVoqmmdPKug%2BQrU3VO12bw64OLmVz3Iazwuz6D3zTm%2BwEmhbXDwgAgvfOWQMcaK9eFVxZDIvV550jTUxLwT8%2FeA8qde%2BYe5qfyI0GQ4hoyxuta7y4Mk3Lena9BoOt9vMM%2BKy8sGOqUB0j1MN96i9OkewqyATlYjOUsvcwpqLi8WcKBloJvTnaoS38k5EvAGk4r6GKTP%2B176Rds3B%2FpvRd3VeGL7rgYrYFEnJP3r3uwdue3%2BzVylCZIvnhKV2f6oZ5UXuJA7i1mQ6Qnjow%2BvniPi07VWVjE%2BwTqoF6CGr6RJGZ%2FTx9XH1IE6wlVlH2f5xNrHruzNNTXAILyk7nnQlViagR%2F%2FWa56hlaSLBmp&X-Amz-Signature=e2bf243f40c519185e9f06cb857c23109aac429e43331444e62325d897cd78dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
