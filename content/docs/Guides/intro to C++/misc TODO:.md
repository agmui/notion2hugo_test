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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5JGR23V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUYFKv0cBfOPWJtVvinSadPVOt%2BN80TOAvcX15L9N4wIhANf9J2piWEo9U6FHO5EHg20uLCXKzXoik1R1m0JMNpStKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzag%2BAugONxCb1me9cq3AORBBWZi9RthlO4ms%2Bx%2F%2FiN35geSmsXEW8%2Fm3bDacgyB95wRdfDniCGoeVXxyUyZHiCMCOgQcvitFp%2FThEsusepc53pCJ%2FwK7PTJwh6Zv3c4BHJWD7cWXZ%2BVR8nyIdP4F0p65chIQN19exJpbGBGSaJdzXAwpgOqXpL8nImnlbG3pn7%2BW8piLgfeJN%2FLOKZUzKKk57LfjhzhAqXzqpuc0rEGJfqTrVs%2B5eBfDcGTYxrDQVpVb3Rz%2BBOak6cwe1Rp%2BZ3r%2B7NLJh2W8IpOnN6J8Z9%2FsaAaSnop3F3T6vrIQBt%2Bc4UTvrCIzoz7KNLzSJ2WId7nspHBfwtb2cR%2BABVOMLDLuC4xzA7L0R9F9oZcYYrkNHjPZ46AxJwboPNqdxkzECtIB3UdtACtMO%2BBmawG0MrbtYkpLeUetwGhZ%2FAETjOM6Oo8pLdho4KmTseh%2FSpOPceEwRZ7MEoZYeVs6goVonnbYM8YJsGpdEMUf%2BNH5qu9u2PXqPiCGENQGpqyxpyr765a8FDG2r1I85zXoa%2Bwj3FpxDAqpw2yAIBdxoCLpZXjcOATAeW42Yw6qgErH0CkxHCEZVhv63tRoXr5awbQFpZRBHwI5tuD3Ap5mjQx%2FuwDQn9qEzz9upaiKxDVzC68KfEBjqkAWzz8My7RxtyyTj0nsFQrEaUkNhSJFsioyKAOPUzidArqTxH6b3s5ZdF%2FspArH1ir3bntUouUAQ8aJfPpl8FAFuStpvnGOky1pPpeOBMC4VA7bp6UdPp%2FCArG7FtDGoCOaYjIvexZ2Zc57YgslsZ9QDoO7winzxYf%2Faf6a6LFomMrE1bQj0YUX5O%2BEmjjWSoaFuNW2UtgLjWHm0Xb5lYN6SMZbHA&X-Amz-Signature=dd4086c09f22891ebb58a1005bb856cbb2bf1b0caa926839131884b66b0034e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5JGR23V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUYFKv0cBfOPWJtVvinSadPVOt%2BN80TOAvcX15L9N4wIhANf9J2piWEo9U6FHO5EHg20uLCXKzXoik1R1m0JMNpStKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzag%2BAugONxCb1me9cq3AORBBWZi9RthlO4ms%2Bx%2F%2FiN35geSmsXEW8%2Fm3bDacgyB95wRdfDniCGoeVXxyUyZHiCMCOgQcvitFp%2FThEsusepc53pCJ%2FwK7PTJwh6Zv3c4BHJWD7cWXZ%2BVR8nyIdP4F0p65chIQN19exJpbGBGSaJdzXAwpgOqXpL8nImnlbG3pn7%2BW8piLgfeJN%2FLOKZUzKKk57LfjhzhAqXzqpuc0rEGJfqTrVs%2B5eBfDcGTYxrDQVpVb3Rz%2BBOak6cwe1Rp%2BZ3r%2B7NLJh2W8IpOnN6J8Z9%2FsaAaSnop3F3T6vrIQBt%2Bc4UTvrCIzoz7KNLzSJ2WId7nspHBfwtb2cR%2BABVOMLDLuC4xzA7L0R9F9oZcYYrkNHjPZ46AxJwboPNqdxkzECtIB3UdtACtMO%2BBmawG0MrbtYkpLeUetwGhZ%2FAETjOM6Oo8pLdho4KmTseh%2FSpOPceEwRZ7MEoZYeVs6goVonnbYM8YJsGpdEMUf%2BNH5qu9u2PXqPiCGENQGpqyxpyr765a8FDG2r1I85zXoa%2Bwj3FpxDAqpw2yAIBdxoCLpZXjcOATAeW42Yw6qgErH0CkxHCEZVhv63tRoXr5awbQFpZRBHwI5tuD3Ap5mjQx%2FuwDQn9qEzz9upaiKxDVzC68KfEBjqkAWzz8My7RxtyyTj0nsFQrEaUkNhSJFsioyKAOPUzidArqTxH6b3s5ZdF%2FspArH1ir3bntUouUAQ8aJfPpl8FAFuStpvnGOky1pPpeOBMC4VA7bp6UdPp%2FCArG7FtDGoCOaYjIvexZ2Zc57YgslsZ9QDoO7winzxYf%2Faf6a6LFomMrE1bQj0YUX5O%2BEmjjWSoaFuNW2UtgLjWHm0Xb5lYN6SMZbHA&X-Amz-Signature=26eb9c0fce82d87fd6e827ebbca969662f8daaafa017c8fbd2fe4c0b9c866980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
