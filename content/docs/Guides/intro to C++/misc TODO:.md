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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5XCNT5U%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMzIhG7q36aBIGTZFdFZcn4C5du6X5C67tH0VmyGoQ9AiEAk6jaxp%2BxqcP5pT3jYcpZrpV80lHiRAkP5V0pQY21zkEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDO2rQZkus5woZyI3nSrcA88Tfc5CZ6zylEuOlGObYIjjg6G%2FsizxD%2FcS97pOU8E06OWkhmJ29wSbAEuErvK5KnyZ%2BRdfvTZWi3LuIW4HzuZDfIQs6c0Y7j08ZAXxBcpK26vVskGVj8MducKrNoZpw%2Fhg%2BzoGG3TFKsuhw1oZzp9Li%2BcAHBe%2FhTgXtbZE%2FpEN5gRdboYlC3SqpsE5F4NncYYli6JnUJ7FrTJQPB2jW6k%2FUCm1siKtAgCJqK6n3KMmom0Xv5CBdFyuXvchAisYFjbWOQ%2FUsWnkkoqy2ysAYFPBF2p2ot%2B5u5cdFAPZirnlU4Lun4kQxgifQ2HfqAHceFycb0iConjZZbvVsAClYDRGgHt035NoWjz%2BbcM0TyffrhX8MX7647iVZVG%2BSDt2dvsnFUvdB7lHEqpZLIUWGVuKWyXViaeAWTGVj%2F3VPgejSGU04kRSjqw2%2BA1pcNsDk8H4QqcuuxUgWu50%2F8jIaRf66s3w44Kgqr%2BQhwgWAk6JoG%2BpcwQEQJJObyYgpWG1BPDVGg%2BAAP6ojJJxu6THY9zv21gwI8AqZUKQCTKTJcirDb6Dwr8l%2Fe2a6tJ27Qvk%2FWybN9zsBwUJuW3ujmvD0d7XFShDvVfitpZcFe%2F6H4Q808CUpWQS4o1yKh8RML20s8AGOqUBzFPc%2F%2F2f3821G1KpnK7aWoUHsaA4HGEtsipHGdXIsqSzX3EdOJY3RWC6t4dYItvvljdiZ%2BB%2Fvy3%2BTDqMmhhyNcgikx3lIPYDbkwhexWr50OaFntYUaJWyseNhEI93tDB5oGqSP%2FoQTF9s0E9iI2P1J5eb%2FxmbaD1CwttUpNV2filWHZ1tabnu8aIv0bBlO2FR2hVZRcUpOyKq5y%2FBDscQT9XKur9&X-Amz-Signature=59a3a37b6def94fbb84b5fa562884954d010c34436f22800bef5b89325af8890&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5XCNT5U%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMzIhG7q36aBIGTZFdFZcn4C5du6X5C67tH0VmyGoQ9AiEAk6jaxp%2BxqcP5pT3jYcpZrpV80lHiRAkP5V0pQY21zkEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDO2rQZkus5woZyI3nSrcA88Tfc5CZ6zylEuOlGObYIjjg6G%2FsizxD%2FcS97pOU8E06OWkhmJ29wSbAEuErvK5KnyZ%2BRdfvTZWi3LuIW4HzuZDfIQs6c0Y7j08ZAXxBcpK26vVskGVj8MducKrNoZpw%2Fhg%2BzoGG3TFKsuhw1oZzp9Li%2BcAHBe%2FhTgXtbZE%2FpEN5gRdboYlC3SqpsE5F4NncYYli6JnUJ7FrTJQPB2jW6k%2FUCm1siKtAgCJqK6n3KMmom0Xv5CBdFyuXvchAisYFjbWOQ%2FUsWnkkoqy2ysAYFPBF2p2ot%2B5u5cdFAPZirnlU4Lun4kQxgifQ2HfqAHceFycb0iConjZZbvVsAClYDRGgHt035NoWjz%2BbcM0TyffrhX8MX7647iVZVG%2BSDt2dvsnFUvdB7lHEqpZLIUWGVuKWyXViaeAWTGVj%2F3VPgejSGU04kRSjqw2%2BA1pcNsDk8H4QqcuuxUgWu50%2F8jIaRf66s3w44Kgqr%2BQhwgWAk6JoG%2BpcwQEQJJObyYgpWG1BPDVGg%2BAAP6ojJJxu6THY9zv21gwI8AqZUKQCTKTJcirDb6Dwr8l%2Fe2a6tJ27Qvk%2FWybN9zsBwUJuW3ujmvD0d7XFShDvVfitpZcFe%2F6H4Q808CUpWQS4o1yKh8RML20s8AGOqUBzFPc%2F%2F2f3821G1KpnK7aWoUHsaA4HGEtsipHGdXIsqSzX3EdOJY3RWC6t4dYItvvljdiZ%2BB%2Fvy3%2BTDqMmhhyNcgikx3lIPYDbkwhexWr50OaFntYUaJWyseNhEI93tDB5oGqSP%2FoQTF9s0E9iI2P1J5eb%2FxmbaD1CwttUpNV2filWHZ1tabnu8aIv0bBlO2FR2hVZRcUpOyKq5y%2FBDscQT9XKur9&X-Amz-Signature=041c33501287adad5ee5f5c50ee68c23a1115bfba42cfec01a280aa1a8e4bc4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
