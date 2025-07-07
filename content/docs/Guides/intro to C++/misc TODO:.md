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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZB2ZAN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGVEIMycGWYS8pefVfzFAX43CKGw3TSGBiUDY2n9OcemAiAfPBIq5QcQ6k9Y4KOy%2FPAkORqX5osSOn4vMHaXPmKzNCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMr5EdhBCXTXzGa5z3KtwDyhxZDyj5PWK%2Fr2B7wRpPreZ7BfBsGyIj33vsWg11xqjWrpYzI%2BAPK%2FXcv6bC7pXgD0jkCxNo%2BpDnMWLvwg6kg2B9yuF%2FJ2tgNM%2BaEESGM6zG%2FVVngpPjzMMhyKaP4HtM5rHK8FIvKGZAFHW8Gln007xipFJ15NZb%2BJfXOp9xTs1nvcZiv8TRilJ1%2FdiMhbizV1AsNxmUt7atlxn%2FPcxiPbDG0phUUaxQDQHSEtl%2FHPKd2lQOQ31YgbOTfVmGDvDMLw%2BPW9xdw6BjTDULwPBpvOWCqIT6VUF%2FqnbFdTEq0%2BSPTyaYWJHPf6lmIOoH3ldoqSa%2FrC6Aop1eVxBk1A8Bh%2BSxS0gAyCGtD4R%2FLxVzcy2fEhxOVB8khCyyJ8lM0ijc8%2FHJWg2n65mFkVLKvs02MhQ45iGW76XyXDOhHBWLnqx8bdp6sbfk2rAp7zgy%2FVncGcmj7kq2UCh8bbnVhzZRJkoIoy7%2FRVjjBiaKUV0QGfelQKx3%2F%2BaSocrNwUQqVpWqEpzh%2BnzFg1lU0uu6TtIYsAzJP9I5Js0msHDaDkUvwQWiw9tmtuV4GR2%2B2%2FV024qUtrjiVjWr2m0pHFxADVSr%2F4cNlOH%2BXnEhiicbTXI3X8EJOGqQW6Rw7SrRJ0cwvZiswwY6pgHMwCXrbLqUNGpKwjh%2BD15yJxNNIe0a4ltB72qpsGlU1GliOMLb6y4SO8cE55D63Id4aQwLgtpJLLCmT2RAAEJQxXB7RjPTZAElFsQEkIZSdxsVKwY%2FUXyKvdNc6whW70Zk8q1ovYEkp0seM8LrpVCxec%2FK8niTrF9alg4aBmtKISqdrN%2F4ktiKM6ZaiwdMkDKghZ4036t54d%2FuiH0bd87GfRXhk%2Fq9&X-Amz-Signature=4897f1165c7b9dd32c17d2fbc17c0ed396be498500f2bba6c3533bb612141bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZB2ZAN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGVEIMycGWYS8pefVfzFAX43CKGw3TSGBiUDY2n9OcemAiAfPBIq5QcQ6k9Y4KOy%2FPAkORqX5osSOn4vMHaXPmKzNCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMr5EdhBCXTXzGa5z3KtwDyhxZDyj5PWK%2Fr2B7wRpPreZ7BfBsGyIj33vsWg11xqjWrpYzI%2BAPK%2FXcv6bC7pXgD0jkCxNo%2BpDnMWLvwg6kg2B9yuF%2FJ2tgNM%2BaEESGM6zG%2FVVngpPjzMMhyKaP4HtM5rHK8FIvKGZAFHW8Gln007xipFJ15NZb%2BJfXOp9xTs1nvcZiv8TRilJ1%2FdiMhbizV1AsNxmUt7atlxn%2FPcxiPbDG0phUUaxQDQHSEtl%2FHPKd2lQOQ31YgbOTfVmGDvDMLw%2BPW9xdw6BjTDULwPBpvOWCqIT6VUF%2FqnbFdTEq0%2BSPTyaYWJHPf6lmIOoH3ldoqSa%2FrC6Aop1eVxBk1A8Bh%2BSxS0gAyCGtD4R%2FLxVzcy2fEhxOVB8khCyyJ8lM0ijc8%2FHJWg2n65mFkVLKvs02MhQ45iGW76XyXDOhHBWLnqx8bdp6sbfk2rAp7zgy%2FVncGcmj7kq2UCh8bbnVhzZRJkoIoy7%2FRVjjBiaKUV0QGfelQKx3%2F%2BaSocrNwUQqVpWqEpzh%2BnzFg1lU0uu6TtIYsAzJP9I5Js0msHDaDkUvwQWiw9tmtuV4GR2%2B2%2FV024qUtrjiVjWr2m0pHFxADVSr%2F4cNlOH%2BXnEhiicbTXI3X8EJOGqQW6Rw7SrRJ0cwvZiswwY6pgHMwCXrbLqUNGpKwjh%2BD15yJxNNIe0a4ltB72qpsGlU1GliOMLb6y4SO8cE55D63Id4aQwLgtpJLLCmT2RAAEJQxXB7RjPTZAElFsQEkIZSdxsVKwY%2FUXyKvdNc6whW70Zk8q1ovYEkp0seM8LrpVCxec%2FK8niTrF9alg4aBmtKISqdrN%2F4ktiKM6ZaiwdMkDKghZ4036t54d%2FuiH0bd87GfRXhk%2Fq9&X-Amz-Signature=f23c2269daaa4e26fb76a5e3d4442afbabe8e8cec330416ed65d33cf26dab39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
