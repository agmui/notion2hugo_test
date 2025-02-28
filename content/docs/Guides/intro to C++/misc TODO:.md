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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4JMUB4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCICZOk5TTOgTuheXmx%2BNx8wwvl9KlYFFcuZIZ4POlbIfwAiA1EEXy0ry9QMC8x%2F6V1HIKG%2ByFnDr9VY1f1iBp8%2BKYbiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphPNceKt%2FjIFd%2B%2B9KtwDGiQE6L%2FFtIjuPFW2Beii9nnn8uZPf5kPw5cDHOPh2aXZbpo1NM%2FNl%2F7ZM%2Bn3PBxmRGlewb6%2FAvn7sb9rEr42eybDiqqlW%2BrCv46d0esPWCmw5w0AhUF72Ta%2FHGYRVV0QiRV7phaHNjv52GrmTXWVGBNUapzZk%2FLtrEwH%2BHye9v59KmCmypZw7nQgxhNVKwz5q4P1eCjC0pRDs5K5fnoheQe3jkEsA7Yi6vZHpwJaTEK545Wcf9D8ltzoEGDEw5u8nM4qshIP5ss2OK%2BcZb3KRgX9H4qP%2FBH0gcBlcFbNWc%2FKQIif1BYgnC5bdG8Cpx4wvmJwVDR2zYgg5zWVWl9vEp4wHDak1gxXWlypoEZN8%2BW5knhjC9EjSj13Z%2BhTt8Jt27ATd1FFc64rtc9aJJC8FyzfmNT98y24GLLflmwzfFQiPdrcnlmKNnPTshpj1cs2jp6%2BPbDtYF7hRNKFDkDwpO6p84SDzE%2Fx8MOry5RBpnSN13JNR5GB0a5AaeAZiS6WXRTUqy3%2Bjaxy0j4%2BfUuvxiHeK0rcfrnQ0hgw8HoF5K4JpnkjUwUGoMddkUUwhtN7ytNa6%2F2q%2BIbrLSUz23kxqhR5iSu3yzfRAACBS0LjMVL3IZHUMrOVODIr%2BMAw3rSEvgY6pgGD%2BnnonJ%2Fh1YSLgQTbnx5TYGHOuu2YKrT2mq3dpcxsBtXRR9cTXXVKIIZQ6ZOpRcVckqK9en6EQhs%2FaNl0N6swqgCkJR%2FB%2F3ZLSn7UwvhNRoK2ziuJ7xPTPNQ21xiO%2BI6fQvPoH1sD%2FqujrxGExJBWK%2Ftla3vz3RPIDij4%2FDwq%2BhnQE3C8WQmBfTeSSUzIliIQnVLDEWeJQbxdsrHBFRmtbgkZ%2B%2Fvf&X-Amz-Signature=fe706451ce87bdca39fffdd762b807193f47b6ef9fe786e57d08a85ac958ce4a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4JMUB4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCICZOk5TTOgTuheXmx%2BNx8wwvl9KlYFFcuZIZ4POlbIfwAiA1EEXy0ry9QMC8x%2F6V1HIKG%2ByFnDr9VY1f1iBp8%2BKYbiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphPNceKt%2FjIFd%2B%2B9KtwDGiQE6L%2FFtIjuPFW2Beii9nnn8uZPf5kPw5cDHOPh2aXZbpo1NM%2FNl%2F7ZM%2Bn3PBxmRGlewb6%2FAvn7sb9rEr42eybDiqqlW%2BrCv46d0esPWCmw5w0AhUF72Ta%2FHGYRVV0QiRV7phaHNjv52GrmTXWVGBNUapzZk%2FLtrEwH%2BHye9v59KmCmypZw7nQgxhNVKwz5q4P1eCjC0pRDs5K5fnoheQe3jkEsA7Yi6vZHpwJaTEK545Wcf9D8ltzoEGDEw5u8nM4qshIP5ss2OK%2BcZb3KRgX9H4qP%2FBH0gcBlcFbNWc%2FKQIif1BYgnC5bdG8Cpx4wvmJwVDR2zYgg5zWVWl9vEp4wHDak1gxXWlypoEZN8%2BW5knhjC9EjSj13Z%2BhTt8Jt27ATd1FFc64rtc9aJJC8FyzfmNT98y24GLLflmwzfFQiPdrcnlmKNnPTshpj1cs2jp6%2BPbDtYF7hRNKFDkDwpO6p84SDzE%2Fx8MOry5RBpnSN13JNR5GB0a5AaeAZiS6WXRTUqy3%2Bjaxy0j4%2BfUuvxiHeK0rcfrnQ0hgw8HoF5K4JpnkjUwUGoMddkUUwhtN7ytNa6%2F2q%2BIbrLSUz23kxqhR5iSu3yzfRAACBS0LjMVL3IZHUMrOVODIr%2BMAw3rSEvgY6pgGD%2BnnonJ%2Fh1YSLgQTbnx5TYGHOuu2YKrT2mq3dpcxsBtXRR9cTXXVKIIZQ6ZOpRcVckqK9en6EQhs%2FaNl0N6swqgCkJR%2FB%2F3ZLSn7UwvhNRoK2ziuJ7xPTPNQ21xiO%2BI6fQvPoH1sD%2FqujrxGExJBWK%2Ftla3vz3RPIDij4%2FDwq%2BhnQE3C8WQmBfTeSSUzIliIQnVLDEWeJQbxdsrHBFRmtbgkZ%2B%2Fvf&X-Amz-Signature=d4dbaf10b51f91d79df8905ce96d8fadc17bcc7e5b13fa3f3e5c59b71ed318b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
