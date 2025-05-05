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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FCHG2T%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlJoVMWK9mEk8cTyce6yPbzv1gg7eE8yNUf9j6TIFvqAiA0tGClvUeThIes8PABRUMMjK72dPRBvDhBB3Nn5MZiuir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMEqmDKwTFd3Fa4UPgKtwDTGGa6ERh93u0Y8yfmjPGiEt4Q4N31wbv6QDtXvoc3dDNOXoW%2FRLKtwpgWal3FcpJfCUeWr9io0Be6MYv6wrk%2FxJE2%2FtMVrYR%2BiM7E58EfOvdvbB27k0qT4tqMhZAsg2pI1sOb884WgcRLBDl03iapejRFoqyxZzqmz6MV%2Bgg4a64mjuW3iLy2IIY%2BZHDqt6Ubhxro4COjlFaFrj2aKxgn1E7TYuM4QJ4f%2FzPU4C2DunmSUIY7dZ345etPgHPhIyqhZBSf0y%2BvI8%2BbbP9k03d5%2BLz7EGkEcrb6q1VsBZkUnhamq0CUoeCUubag7w6zhCXWOJAufHwwnEhLV8YtkY59yeB6U3SHdRSE2uJeb2KAV7fIYNKGNSPhzAmdl4pT%2B0GYwMLRn%2B1GO2ewyYaC6bz%2Bj1cOVgZacYaaCBr8eH6GCEmO2jcKejDgcJyUEt9vHxa5e%2B7nal6tHuDmUGvMq0TL3DwlOtFuX219IZeW02H6BfByptS1vqivdPTRcztX5YPckh%2FEl58psHCMM5t7uJzvsW0UUJtlKxYVLhw2PxqpZ%2FRuXQXv%2FL4VgxK4bTLbH0gkOpz%2BaiceseQQC9o70oH09AaJHhWcvf3OWR2YlaKdb3cqWAE2W55LfW9hMEwqLLkwAY6pgEUSKDlLTtRP8PW%2BfbqG5ko%2FhhmTdxPayrkT5toES2vBzpJg6xRpg3uLeYOwFsapOKOoN9%2FBHALhueYFhKaoENOju%2BHtf76FflUJS4DSAJuY9Q613WOwhwVoLGrt4YkAFmj%2BPdypzWOK0HnVdnRmxTONGjCaVhy0e5mJTDq%2BV8SaiQpf2jrLxcd5lSIb2h2Y4L08Hg%2BUgK8NeWhyi4Q0L87U6xnG7zD&X-Amz-Signature=6726dbf109f6993c683ad39e1df514fae9f11012a80f62efa57017ff66706ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FCHG2T%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlJoVMWK9mEk8cTyce6yPbzv1gg7eE8yNUf9j6TIFvqAiA0tGClvUeThIes8PABRUMMjK72dPRBvDhBB3Nn5MZiuir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMEqmDKwTFd3Fa4UPgKtwDTGGa6ERh93u0Y8yfmjPGiEt4Q4N31wbv6QDtXvoc3dDNOXoW%2FRLKtwpgWal3FcpJfCUeWr9io0Be6MYv6wrk%2FxJE2%2FtMVrYR%2BiM7E58EfOvdvbB27k0qT4tqMhZAsg2pI1sOb884WgcRLBDl03iapejRFoqyxZzqmz6MV%2Bgg4a64mjuW3iLy2IIY%2BZHDqt6Ubhxro4COjlFaFrj2aKxgn1E7TYuM4QJ4f%2FzPU4C2DunmSUIY7dZ345etPgHPhIyqhZBSf0y%2BvI8%2BbbP9k03d5%2BLz7EGkEcrb6q1VsBZkUnhamq0CUoeCUubag7w6zhCXWOJAufHwwnEhLV8YtkY59yeB6U3SHdRSE2uJeb2KAV7fIYNKGNSPhzAmdl4pT%2B0GYwMLRn%2B1GO2ewyYaC6bz%2Bj1cOVgZacYaaCBr8eH6GCEmO2jcKejDgcJyUEt9vHxa5e%2B7nal6tHuDmUGvMq0TL3DwlOtFuX219IZeW02H6BfByptS1vqivdPTRcztX5YPckh%2FEl58psHCMM5t7uJzvsW0UUJtlKxYVLhw2PxqpZ%2FRuXQXv%2FL4VgxK4bTLbH0gkOpz%2BaiceseQQC9o70oH09AaJHhWcvf3OWR2YlaKdb3cqWAE2W55LfW9hMEwqLLkwAY6pgEUSKDlLTtRP8PW%2BfbqG5ko%2FhhmTdxPayrkT5toES2vBzpJg6xRpg3uLeYOwFsapOKOoN9%2FBHALhueYFhKaoENOju%2BHtf76FflUJS4DSAJuY9Q613WOwhwVoLGrt4YkAFmj%2BPdypzWOK0HnVdnRmxTONGjCaVhy0e5mJTDq%2BV8SaiQpf2jrLxcd5lSIb2h2Y4L08Hg%2BUgK8NeWhyi4Q0L87U6xnG7zD&X-Amz-Signature=4a821e9e3636518525240638fae909773fd9ae2370ffaa5ee03de7d90466d818&X-Amz-SignedHeaders=host&x-id=GetObject)

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
