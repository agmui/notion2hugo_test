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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZMACOK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDpmQS8bLVWkH0FvmMpfPEect9OI42NAMibK%2BXcKNnFIAiEAsTZWamM%2FWC49xXvj2RxqXSOvjREToW4Q1PDnzf1ZDbUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDL5evrYQynijwk%2BEzircAwHMUH75FSCr45tOrgMcIUqrg53yCdmL4E1ilV0249legF%2FMkGNPhdu5DRLNbSMa8XagUu%2F9tgi%2BP8SxSzbtIfX0Iagd0lCtI9ntWQk4shY5ST47a00pgZHi1dcNBksoyL2Q5le4Sm6D03gebqnSpto5u9A7yNcrwYPeA1xtpv%2B0xgXpUwhiFysLQ%2B1krqIqQRYitQ6e9bhdPhKjfHbE8oD3cCN9B%2F1TBTTB8rV%2BdVZZYxPgTndTQKaGdIScWY3aJefmbEhy3htmDpsS%2FDXOFRVN3riLYHaFsJBUKEAKAd4C4RN0pMnFSqj%2B7HGDSu%2FKMzMM4rYQIvNy8CoSHUkFTYtEGnfJ3OMdZ1zvkvxZ93qBSRwPztnFBzbMIQj7W41iggFxq2cYyrPEQ6bbxnRGCkTlN16Cj3ujKAIrLFciKT2y6u%2BAt01UtfGTRmIKnWRCEh%2BUww%2BWQBmlfEMCEevQiBj80SX1F5hsDjQnwzPowD8uf9YC7MFKD3aWBjkYolL3UN3yC37D7%2BzuGZ%2FyFNF52C1Ibqpb7Bv%2BulXQiwUAeghMxpruMHhxTA9mSkwxUPlNFUcYPeEr%2Bikleft%2BEf5FNGp3pRjKoZuiwox%2Bb%2BWlSV9x1VKJ3S9uxke%2Bw7auMMKmwsQGOqUBB7CEYOnLbgjzc2uWNkaCnTADhhNj%2Bw9gxui8pUwWE2WndXm729m5GsxwpLbucbaBfTJPPtwAMjqfuDpbaSqyCke%2FhhXmDOI7UU292L8sld0NxqGGjGVUqdlq9Kr0ctwZpdC0OveYPlY8lWgl2I4xfpvckP17Dn1kPqV%2BadUYS1uZCDHO23Mu37N7CkXmiVoO1PQW6eKu%2BvKG3XTWyV8Vs03HsZiQ&X-Amz-Signature=bd319056ef6173869d57345a9e1861294aec68b9a110d3a51595d45bfdd7a191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZMACOK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDpmQS8bLVWkH0FvmMpfPEect9OI42NAMibK%2BXcKNnFIAiEAsTZWamM%2FWC49xXvj2RxqXSOvjREToW4Q1PDnzf1ZDbUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDL5evrYQynijwk%2BEzircAwHMUH75FSCr45tOrgMcIUqrg53yCdmL4E1ilV0249legF%2FMkGNPhdu5DRLNbSMa8XagUu%2F9tgi%2BP8SxSzbtIfX0Iagd0lCtI9ntWQk4shY5ST47a00pgZHi1dcNBksoyL2Q5le4Sm6D03gebqnSpto5u9A7yNcrwYPeA1xtpv%2B0xgXpUwhiFysLQ%2B1krqIqQRYitQ6e9bhdPhKjfHbE8oD3cCN9B%2F1TBTTB8rV%2BdVZZYxPgTndTQKaGdIScWY3aJefmbEhy3htmDpsS%2FDXOFRVN3riLYHaFsJBUKEAKAd4C4RN0pMnFSqj%2B7HGDSu%2FKMzMM4rYQIvNy8CoSHUkFTYtEGnfJ3OMdZ1zvkvxZ93qBSRwPztnFBzbMIQj7W41iggFxq2cYyrPEQ6bbxnRGCkTlN16Cj3ujKAIrLFciKT2y6u%2BAt01UtfGTRmIKnWRCEh%2BUww%2BWQBmlfEMCEevQiBj80SX1F5hsDjQnwzPowD8uf9YC7MFKD3aWBjkYolL3UN3yC37D7%2BzuGZ%2FyFNF52C1Ibqpb7Bv%2BulXQiwUAeghMxpruMHhxTA9mSkwxUPlNFUcYPeEr%2Bikleft%2BEf5FNGp3pRjKoZuiwox%2Bb%2BWlSV9x1VKJ3S9uxke%2Bw7auMMKmwsQGOqUBB7CEYOnLbgjzc2uWNkaCnTADhhNj%2Bw9gxui8pUwWE2WndXm729m5GsxwpLbucbaBfTJPPtwAMjqfuDpbaSqyCke%2FhhXmDOI7UU292L8sld0NxqGGjGVUqdlq9Kr0ctwZpdC0OveYPlY8lWgl2I4xfpvckP17Dn1kPqV%2BadUYS1uZCDHO23Mu37N7CkXmiVoO1PQW6eKu%2BvKG3XTWyV8Vs03HsZiQ&X-Amz-Signature=b7019694776ce898181037335277c7cb3731d6ecad1ddc9d14b93c9119b236f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
