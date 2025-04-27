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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZQFONT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN8RR89Fp5F04lcKHfHOZ4VkMCpMLLFnBWpJVM2yNhGAiB3v%2F1s5X7lHrlDPQXUz4szk7e26hTyBgJI6wIMtsSHYir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMOkIyMnIvBzLYhIc6KtwDNZHuk8e8nhyp%2Fm3qD7Ft6cF7urT6Qyb%2Fc5qPMBre8c01pQwYW8deEF5yd3TY7N4gjEgb0XlxWMLHv1hzzCMC0VUzL2sJyffiojg83uVxrJp2o8gq11UxRCDFJpA5%2BG3wUqX3w7SFNad0y02qUD7xxMAetMl5ZVvR0egmVG2Qkh9wfKewtJjynBNTpZpKVDpSlDA7r4YlS%2BF%2FL%2Fw5Us20K6DDcCDQZqkFordIDAuB0GsYoftAPk%2FCOxTKvXdxTjTBxTjrb72P8idPkIHWSnx72bl4k%2BU6divAxRj6V1l7%2Bj8VcFJZoNmntRy0JusNAQ6vuIx2SvF5F%2ByptF0lWJLkiqs1KqPOvVA0fA7g0sNmTzE9UTr9AV5RQjijOf4anCjkGZgCtic2n%2ByN4rlq94zSSz%2FsqFFnRoAXgorHOtFVY3kkQOqpwQ9DNxgjo2jwz6b%2FZkRwsp5u8FCMi%2F3hGeRS3oXwWR6n4yKgLnzz01VPBFbCSF0YYoc6xdBihlx5C4ULR5T3n3qGoYokNhbL4mti9CO101PQjojDflDVpUrOw%2FNkHBqyuFN6Hcfr%2BDB4I2%2FHzmvt14tpyO2%2FKjkJUJdvOA6EmAO5eFYviruLFRoMbNDtvMDEfdikdilrbFwwpLC5wAY6pgE1JS6MQhY1huEziBqM9e6ShxEsNDa8gY%2Ftwo3asbC0GdxptOsqjUk8ctgCDXG3bBXWfswrlBmK33%2BLWuuczl4rf02NyvyxIjOfLbdlczp13ujeB8ToJkkQF1Oi550UjkoYF45QK%2F1P%2FWFXKAqp5ZP%2F0b95fPaUb7O%2Bepm7Iiad1gsv83Crl8vzsM0nsNzVLA8fkk8qY2jawjV0m%2BjKaLpIIKYWs4YV&X-Amz-Signature=bf2fe9d5d3eca6489b4c6adf2682a529b00d35c7ea5c47e8f30abb1c7821a74b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZQFONT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN8RR89Fp5F04lcKHfHOZ4VkMCpMLLFnBWpJVM2yNhGAiB3v%2F1s5X7lHrlDPQXUz4szk7e26hTyBgJI6wIMtsSHYir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMOkIyMnIvBzLYhIc6KtwDNZHuk8e8nhyp%2Fm3qD7Ft6cF7urT6Qyb%2Fc5qPMBre8c01pQwYW8deEF5yd3TY7N4gjEgb0XlxWMLHv1hzzCMC0VUzL2sJyffiojg83uVxrJp2o8gq11UxRCDFJpA5%2BG3wUqX3w7SFNad0y02qUD7xxMAetMl5ZVvR0egmVG2Qkh9wfKewtJjynBNTpZpKVDpSlDA7r4YlS%2BF%2FL%2Fw5Us20K6DDcCDQZqkFordIDAuB0GsYoftAPk%2FCOxTKvXdxTjTBxTjrb72P8idPkIHWSnx72bl4k%2BU6divAxRj6V1l7%2Bj8VcFJZoNmntRy0JusNAQ6vuIx2SvF5F%2ByptF0lWJLkiqs1KqPOvVA0fA7g0sNmTzE9UTr9AV5RQjijOf4anCjkGZgCtic2n%2ByN4rlq94zSSz%2FsqFFnRoAXgorHOtFVY3kkQOqpwQ9DNxgjo2jwz6b%2FZkRwsp5u8FCMi%2F3hGeRS3oXwWR6n4yKgLnzz01VPBFbCSF0YYoc6xdBihlx5C4ULR5T3n3qGoYokNhbL4mti9CO101PQjojDflDVpUrOw%2FNkHBqyuFN6Hcfr%2BDB4I2%2FHzmvt14tpyO2%2FKjkJUJdvOA6EmAO5eFYviruLFRoMbNDtvMDEfdikdilrbFwwpLC5wAY6pgE1JS6MQhY1huEziBqM9e6ShxEsNDa8gY%2Ftwo3asbC0GdxptOsqjUk8ctgCDXG3bBXWfswrlBmK33%2BLWuuczl4rf02NyvyxIjOfLbdlczp13ujeB8ToJkkQF1Oi550UjkoYF45QK%2F1P%2FWFXKAqp5ZP%2F0b95fPaUb7O%2Bepm7Iiad1gsv83Crl8vzsM0nsNzVLA8fkk8qY2jawjV0m%2BjKaLpIIKYWs4YV&X-Amz-Signature=bbc59dc31b6d7d603a0311dbfd6a73ebfa756e29b79b8e44fb6ff8eccdd288e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
