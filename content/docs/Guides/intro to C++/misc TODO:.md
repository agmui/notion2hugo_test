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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZFQEFA%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJFMEMCICowDnaGm%2F6JILnWq9m%2BPTrMivbk7oAj0auNDriQQZPcAh9YoeQj7BMa9ApPRrN9hWrvLzANc1yCJbZivJqSU%2FijKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWw3lQsPFLAkhQGz4q3AM1eW4wCA%2FowRGD3IRjY5NIwJrKoc0gihmLjtwKx8TauHs8yzv%2BZXoa%2BeembDEqvXlvfDt1o66P9JcANhWlnv%2BbWsi8NxtldAfRankB2k0sJsLnlSqd5qMMGeV5KT08i4dLRlvXbLSWH%2BaBOMaPWXYhuZjEC8Faj3eNwSKj%2BwwMaggUFijQNOJT52hw1xU92X0m6Qz7%2FhsDUnm%2FjZV0TCfWEINWHF5BoAWP%2F97%2B18OXEPGgEnJJGgOyNxrilLIC5JfcXuctv0PGXQOl48znODql9I0QIN1zSNGfdlGxdYKg5V9C4%2F6jPVRs9tjQHC65CLDmv6%2FtWTd1jE9CCRQQI6zZTRme%2FXDEz6hcDZsplhZ1GvOGKCJntGpFONtq8Ih7KanLARdmDJNP6JgMjtUWWHWJmPgfMRC5KWtuFizu2%2BRg9j5oAVUzcmbhkmA3pxC7JHal5u6PZxmnnHaMVQCnJiYqmuMv2mbwUDhte4EWxLBwZ5gHXaxQ0j0gco8JvphT9EN%2Bw74f1HXVpaCtgDhO6Xlk3%2B1HSF64beO2yP8iC6aItN%2FqNUDOyXwEb9eczxd62hVwKSuDdBeiS7jni3OfHRiQJDTg1trynGQl8xAp7EwuJd9yiZvH78pg6JMgtjCvzYTFBjqnAcJuOmcOp6xrhw5RjYaLFKnm917matdVQuTwfHF4K8%2FRBcuZSk6RczEhT5kkkorMYZKf1cSpnJP16b6wds9AyxdHJb%2FgoUCMTC0pQdwXz%2B616d2Bq1rlC8m8MVEWsOTlhvTsxzXTzTYxbhME5DklVwKCKa%2B4OCLqgWqhsTr8SwsZBNGcG922UCdzz9JgfsuZ4ecnfZeYc8HViXOHq265hCkSMsJ0NiVM&X-Amz-Signature=4c10867ba3814c3d0b8dbddff2724c4b27219d60b9c6ce95adad71d1ff8f102b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZFQEFA%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJFMEMCICowDnaGm%2F6JILnWq9m%2BPTrMivbk7oAj0auNDriQQZPcAh9YoeQj7BMa9ApPRrN9hWrvLzANc1yCJbZivJqSU%2FijKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWw3lQsPFLAkhQGz4q3AM1eW4wCA%2FowRGD3IRjY5NIwJrKoc0gihmLjtwKx8TauHs8yzv%2BZXoa%2BeembDEqvXlvfDt1o66P9JcANhWlnv%2BbWsi8NxtldAfRankB2k0sJsLnlSqd5qMMGeV5KT08i4dLRlvXbLSWH%2BaBOMaPWXYhuZjEC8Faj3eNwSKj%2BwwMaggUFijQNOJT52hw1xU92X0m6Qz7%2FhsDUnm%2FjZV0TCfWEINWHF5BoAWP%2F97%2B18OXEPGgEnJJGgOyNxrilLIC5JfcXuctv0PGXQOl48znODql9I0QIN1zSNGfdlGxdYKg5V9C4%2F6jPVRs9tjQHC65CLDmv6%2FtWTd1jE9CCRQQI6zZTRme%2FXDEz6hcDZsplhZ1GvOGKCJntGpFONtq8Ih7KanLARdmDJNP6JgMjtUWWHWJmPgfMRC5KWtuFizu2%2BRg9j5oAVUzcmbhkmA3pxC7JHal5u6PZxmnnHaMVQCnJiYqmuMv2mbwUDhte4EWxLBwZ5gHXaxQ0j0gco8JvphT9EN%2Bw74f1HXVpaCtgDhO6Xlk3%2B1HSF64beO2yP8iC6aItN%2FqNUDOyXwEb9eczxd62hVwKSuDdBeiS7jni3OfHRiQJDTg1trynGQl8xAp7EwuJd9yiZvH78pg6JMgtjCvzYTFBjqnAcJuOmcOp6xrhw5RjYaLFKnm917matdVQuTwfHF4K8%2FRBcuZSk6RczEhT5kkkorMYZKf1cSpnJP16b6wds9AyxdHJb%2FgoUCMTC0pQdwXz%2B616d2Bq1rlC8m8MVEWsOTlhvTsxzXTzTYxbhME5DklVwKCKa%2B4OCLqgWqhsTr8SwsZBNGcG922UCdzz9JgfsuZ4ecnfZeYc8HViXOHq265hCkSMsJ0NiVM&X-Amz-Signature=9cbe319d215f72640bd4923cbb88ea67c59a3f3cc8bac1e8f8a3b8178df41ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
