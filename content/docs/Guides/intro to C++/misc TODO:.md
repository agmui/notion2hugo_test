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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDE25URZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEylADcrZOIezCqD1n1wjPkviCUZ7Jk%2BbDwwmWtQ6cQgIgcTEMVtegXz96Lhf7AZKxcd%2F%2FAhctzFX6MDod4THR9CEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy5JUL3jPnkoMjNiyrcA4z%2BZM3OOaYKM%2BFi4Pb%2BHN%2FmOnKJ5V6dPL9dfKPohgJ67%2F%2FUfCs8K3TqWDQxtH%2BhPpv1zKjFDLhBnAZSA0eKS%2BGlrFOR5uWxCz9yvVhEhw0tkiphgsUcFFODONYFaOeWhbzPs%2BUXYYFsVKmVyIz1YBDCYzFuQ8ycTec4saIBXgB1cwr6S9Ck9L%2BmALbVl9ZVMNIRvYPI03KBapUrcrOrMHSPlXk4f%2FbGee%2BywUFgWhyOHn4uihidekTWVKoJM5HsXOv8AivJLHuIwSePQzXmH7iB%2FniwxiTqchOpy%2FBceZACuFAtz%2BFQNec%2BdAbtWbdzJt2c3tlyIgVQm9R7rQCiUIV5%2FI%2FIAM4O8rLJD5KRehhSyRvEE27idmEkxhuODlnKvjYllDUh2UEWtPRUAL5VWZewLieMN9fCLcmcH6QMpNYGvWD5eHYKw06OjysT4WwC9sLeuWscUhqC2nX3E8lxeXZVN55SF7KAmTU%2Bh%2FKqhyRT2D4DJ1hBf4rYZmZqAVcy0hwT2Sg0W%2BGnUq2OsSL5kloc0xErwxEvJg361WaP0PpFT3uJEWW3OFadjvnj2VKpmjRAYEdEuBI8DrXh0olryJFPS9hluSm%2BPJXJKzQVtzSjEX%2BFpLeDI%2B%2BOx%2F7%2FMLDNhMMGOqUB5SQj%2BGC1F43htObyyPZs1ziKm4vDYyMAlosjzL6%2BO421xgQdi2GJhwlAHRBLNYZmG55LqgJ5Zu5tOJN3miax9NFbrEAVaZfPsyWJLQ%2FX0UTOY2gr8uFalDFBaqb9bqpL7bHuyiBY3dGt3IEf6W4JkdDpJAEA51d8zKYEVgyCTzh9Up%2BycgxicJZZ8ngT6Yd7nwQelpOlIwGb9VOWRH8rvyQR4kqt&X-Amz-Signature=07ae61dfcb8f10e738b63f8fe8b0d48fa7a1663456ca3f48931ff2b331a33462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDE25URZ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEylADcrZOIezCqD1n1wjPkviCUZ7Jk%2BbDwwmWtQ6cQgIgcTEMVtegXz96Lhf7AZKxcd%2F%2FAhctzFX6MDod4THR9CEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy5JUL3jPnkoMjNiyrcA4z%2BZM3OOaYKM%2BFi4Pb%2BHN%2FmOnKJ5V6dPL9dfKPohgJ67%2F%2FUfCs8K3TqWDQxtH%2BhPpv1zKjFDLhBnAZSA0eKS%2BGlrFOR5uWxCz9yvVhEhw0tkiphgsUcFFODONYFaOeWhbzPs%2BUXYYFsVKmVyIz1YBDCYzFuQ8ycTec4saIBXgB1cwr6S9Ck9L%2BmALbVl9ZVMNIRvYPI03KBapUrcrOrMHSPlXk4f%2FbGee%2BywUFgWhyOHn4uihidekTWVKoJM5HsXOv8AivJLHuIwSePQzXmH7iB%2FniwxiTqchOpy%2FBceZACuFAtz%2BFQNec%2BdAbtWbdzJt2c3tlyIgVQm9R7rQCiUIV5%2FI%2FIAM4O8rLJD5KRehhSyRvEE27idmEkxhuODlnKvjYllDUh2UEWtPRUAL5VWZewLieMN9fCLcmcH6QMpNYGvWD5eHYKw06OjysT4WwC9sLeuWscUhqC2nX3E8lxeXZVN55SF7KAmTU%2Bh%2FKqhyRT2D4DJ1hBf4rYZmZqAVcy0hwT2Sg0W%2BGnUq2OsSL5kloc0xErwxEvJg361WaP0PpFT3uJEWW3OFadjvnj2VKpmjRAYEdEuBI8DrXh0olryJFPS9hluSm%2BPJXJKzQVtzSjEX%2BFpLeDI%2B%2BOx%2F7%2FMLDNhMMGOqUB5SQj%2BGC1F43htObyyPZs1ziKm4vDYyMAlosjzL6%2BO421xgQdi2GJhwlAHRBLNYZmG55LqgJ5Zu5tOJN3miax9NFbrEAVaZfPsyWJLQ%2FX0UTOY2gr8uFalDFBaqb9bqpL7bHuyiBY3dGt3IEf6W4JkdDpJAEA51d8zKYEVgyCTzh9Up%2BycgxicJZZ8ngT6Yd7nwQelpOlIwGb9VOWRH8rvyQR4kqt&X-Amz-Signature=74758676150d870b654fc667fd128e1ae342a246194c9196361bd75783754673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
