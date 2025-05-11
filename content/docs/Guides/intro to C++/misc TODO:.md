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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7B2MH6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDR4S1o5h82eeCkQdhKloFJwejLkZyxuPgnpkL8kmk8qQIgcRlA5nvSof2VQnruTaovGmv%2ByU1j3nIaUMMuS%2BfF2ngqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPZXif24DCbjmEHircAyZVSiNSgmZBdw6Hoba8OShkKaf%2FuqMV2NN1ctbYSXO0Owf3NFFklq7ZqyWxvz%2BQ0ykT0Nl3IzIAK0ZSS%2Fu1sgpi529mp64NT1HEJ470Zy3tDHU3RvcESCL%2FFOz%2BblQci3gymx9K%2BOD6f7MgP79W4yBi2cBkfP2UP60e%2B0N2m4%2FbAxMzCA5rBb3MnmOShAs%2Bb%2Ber2MxgwkNKxcvWRJhMynyO1JXoTzq6Nni3d816pcnicI1Y1e0WCmFX6F%2F%2BqgXO1At1eiJO0vQBNwkEJ7scc0mlj6kVJL4pgGOGw4zMZBUrKN3Vu0O4rdSt46oijRzG8ZfeREvb9b96j4kgGbTF3NJIFcQ12l6O1sJQlyV5G5ZDyUO8zgBY4QHfJP3o9GYjvw4IkS1xTMl97FxzdQR7FVzEG3SD0Yn0D2FiiZ8ZSAsI0nEHkpYi1skaRgaRKKinGJkc3hFM7g3f84NNJh%2BC3jLyim52%2BKgSIQdzuYyw07poIcjyb7GU9soeAZXWWCqL2gAXaeWjuJP9JZnkUuauV0jvhkS%2Bp7Ql9ceP4gMG9TWJVRvhmQh86IMENixlR46DfOvme%2BQA9VKP52Wq3xmpCxl1Ft9iK92wx0zYuQfYReECaIWqOpGsfAgpS7lcMPWhg8EGOqUBfq9ruOVe2h33PilK54GPMESbOjvB%2F5h3ty6XMb%2BLbq01QZ8lQVvcML5BeagQSHsKSqqunZdcIskLZiAdDXLhokz%2FPTmaabmcUNSmi0oVAA741l6QK99O6X%2BOI%2FNU%2BddcD16ywE8ts2%2FY02GmFg4SifvNOO%2FBo2U8wvDN6lfJe2HN0h0TPEdJDZr2IzrGcNSolwU1ngUpsZXghce7fAMO8tOoFckJ&X-Amz-Signature=db0c62b3ffb3365bf1d14b0527cd18948702bc71f843ff19a39bc58b5cfc7617&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7B2MH6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDR4S1o5h82eeCkQdhKloFJwejLkZyxuPgnpkL8kmk8qQIgcRlA5nvSof2VQnruTaovGmv%2ByU1j3nIaUMMuS%2BfF2ngqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcPZXif24DCbjmEHircAyZVSiNSgmZBdw6Hoba8OShkKaf%2FuqMV2NN1ctbYSXO0Owf3NFFklq7ZqyWxvz%2BQ0ykT0Nl3IzIAK0ZSS%2Fu1sgpi529mp64NT1HEJ470Zy3tDHU3RvcESCL%2FFOz%2BblQci3gymx9K%2BOD6f7MgP79W4yBi2cBkfP2UP60e%2B0N2m4%2FbAxMzCA5rBb3MnmOShAs%2Bb%2Ber2MxgwkNKxcvWRJhMynyO1JXoTzq6Nni3d816pcnicI1Y1e0WCmFX6F%2F%2BqgXO1At1eiJO0vQBNwkEJ7scc0mlj6kVJL4pgGOGw4zMZBUrKN3Vu0O4rdSt46oijRzG8ZfeREvb9b96j4kgGbTF3NJIFcQ12l6O1sJQlyV5G5ZDyUO8zgBY4QHfJP3o9GYjvw4IkS1xTMl97FxzdQR7FVzEG3SD0Yn0D2FiiZ8ZSAsI0nEHkpYi1skaRgaRKKinGJkc3hFM7g3f84NNJh%2BC3jLyim52%2BKgSIQdzuYyw07poIcjyb7GU9soeAZXWWCqL2gAXaeWjuJP9JZnkUuauV0jvhkS%2Bp7Ql9ceP4gMG9TWJVRvhmQh86IMENixlR46DfOvme%2BQA9VKP52Wq3xmpCxl1Ft9iK92wx0zYuQfYReECaIWqOpGsfAgpS7lcMPWhg8EGOqUBfq9ruOVe2h33PilK54GPMESbOjvB%2F5h3ty6XMb%2BLbq01QZ8lQVvcML5BeagQSHsKSqqunZdcIskLZiAdDXLhokz%2FPTmaabmcUNSmi0oVAA741l6QK99O6X%2BOI%2FNU%2BddcD16ywE8ts2%2FY02GmFg4SifvNOO%2FBo2U8wvDN6lfJe2HN0h0TPEdJDZr2IzrGcNSolwU1ngUpsZXghce7fAMO8tOoFckJ&X-Amz-Signature=1f8c74d7734e6201b6281091c04bda70c66dc06a13b0d97963a8a03bcb165db3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
