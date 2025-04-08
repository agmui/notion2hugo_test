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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NZF6SE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDe64PXHUPW8Yb7xToccfhfWHQkmxfaE9CFHbskGsFk2AiBSIkIl0o3A1P%2FzG1wPCjB084X9oWGQNF%2FaxULhtw8YAir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMQjiZ3VYCzLOlpij%2FKtwDf4I57WpUWi%2FcINYAwXlP%2F2HUCnTgK3tR9gTBArbDJ5vk1w0pxYBDnOKJSLrmRrTwCgmFANhTBV3SPkXMao4EqaU%2BxaaAPi37veKC3zw1Ci193ZybcaxyvZK7S%2FixLxsIym4Cou6lFdTxB7dmKLMgloOqnB8%2FdE6k6L2bQYbxQdzWX%2FCDQ7%2B7m%2FRjeRq4fBapcpt5Orugbs78l5aGS3NlOzI8R0m%2FbyRkS4MsYWHkc2M8PXaIRpVzpKc2QoCSbaFpwyjvl1SQPYECMO6HcOLveL0zYTaEUv2t2pEuVzdDzPRnW%2Fh50rDto1JjqoCZIoIVd5FCgM8TQv%2BHulutp%2FwRbjWRGhwziDVmLXZgM%2FxDz%2Fp8NaGViBdnz2NvlKw9cy8X1J%2FP322Tb7w0YY4IRc3teiOwQxfkmMMEtozKqWCp9tr5pfInFxPToOp5PLtBzsnD4rpHz1%2BPgUBB6pa1FJFxdZz4dtpiq4Ea96s%2FXAjNnXyHVx9S33z%2BIGRI%2BMjJpaIE6UK%2BIB7wnzqUJksrFuWmLMAS3jjYMRY427EQXkt5oxv8mmaVRdwhuyHnDFNxZYIdtpIzoz3aOE1WV4FRJmdTuk8kWSKu8PhMPX3PBR6VYLQNgKk1N9%2BD3mFmbmcw5LrVvwY6pgHJZFdFUFsy5Tyui7D1e%2F3PJ3L8FolQSi7xa1L1hVuflPLe8KaYczrU45zR5MYSpAuSmd1WsBoCdrvZMUqagsJxyl7DxbCdL2yrjNTng%2FBmuveOTnjMMjprBcQ2ZdNhVJgwq%2Bi6g53ZRx4M%2B4HTfJeIDuxhnKKTiw0FKB9WI49NxKNIm%2FFaPis1uMJQlKrh4rp5fC78fRFUcnEhOE0PJbQfkrB%2FJ1RV&X-Amz-Signature=a250518c60bd52ed08859078483042ecfa6bc0c1b143572277171addf7c0f36f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NZF6SE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDe64PXHUPW8Yb7xToccfhfWHQkmxfaE9CFHbskGsFk2AiBSIkIl0o3A1P%2FzG1wPCjB084X9oWGQNF%2FaxULhtw8YAir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMQjiZ3VYCzLOlpij%2FKtwDf4I57WpUWi%2FcINYAwXlP%2F2HUCnTgK3tR9gTBArbDJ5vk1w0pxYBDnOKJSLrmRrTwCgmFANhTBV3SPkXMao4EqaU%2BxaaAPi37veKC3zw1Ci193ZybcaxyvZK7S%2FixLxsIym4Cou6lFdTxB7dmKLMgloOqnB8%2FdE6k6L2bQYbxQdzWX%2FCDQ7%2B7m%2FRjeRq4fBapcpt5Orugbs78l5aGS3NlOzI8R0m%2FbyRkS4MsYWHkc2M8PXaIRpVzpKc2QoCSbaFpwyjvl1SQPYECMO6HcOLveL0zYTaEUv2t2pEuVzdDzPRnW%2Fh50rDto1JjqoCZIoIVd5FCgM8TQv%2BHulutp%2FwRbjWRGhwziDVmLXZgM%2FxDz%2Fp8NaGViBdnz2NvlKw9cy8X1J%2FP322Tb7w0YY4IRc3teiOwQxfkmMMEtozKqWCp9tr5pfInFxPToOp5PLtBzsnD4rpHz1%2BPgUBB6pa1FJFxdZz4dtpiq4Ea96s%2FXAjNnXyHVx9S33z%2BIGRI%2BMjJpaIE6UK%2BIB7wnzqUJksrFuWmLMAS3jjYMRY427EQXkt5oxv8mmaVRdwhuyHnDFNxZYIdtpIzoz3aOE1WV4FRJmdTuk8kWSKu8PhMPX3PBR6VYLQNgKk1N9%2BD3mFmbmcw5LrVvwY6pgHJZFdFUFsy5Tyui7D1e%2F3PJ3L8FolQSi7xa1L1hVuflPLe8KaYczrU45zR5MYSpAuSmd1WsBoCdrvZMUqagsJxyl7DxbCdL2yrjNTng%2FBmuveOTnjMMjprBcQ2ZdNhVJgwq%2Bi6g53ZRx4M%2B4HTfJeIDuxhnKKTiw0FKB9WI49NxKNIm%2FFaPis1uMJQlKrh4rp5fC78fRFUcnEhOE0PJbQfkrB%2FJ1RV&X-Amz-Signature=c5522e84ec60cb9f49fb8d45ddb35cc4b3e73fc5e4996b3ac2c13ce276103539&X-Amz-SignedHeaders=host&x-id=GetObject)

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
