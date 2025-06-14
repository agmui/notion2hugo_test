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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6CWV2D%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDvqWffweCpJxZHhOcjotfQu%2Fg1xV6xh6NWA8CnVotTeQIgclALo47tMcKatLRJN%2BUad1yURbhT80spqzpmS2jn7uMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPWZvXvIHIVh6vKKDyrcA4woTe3PME7XeRSnayZaygCoAryHrlK1KHMhkRLxE7GvhaAdGbw9l%2Fuszk8vI3JBa4hsDjqTxb%2FEQJgd2vsvwzgaSyBh%2F152Rhj9%2BI71jxV4S49atRD619bE6oqgiZ%2FTVNJMy7aESEuBXLPZuSgJeU9fGwp%2FnzwBpefbOKzvBqp4gK2zAlU62nvnPPCx9Lvv23Zkf5ewlSM4phDid7ot8XQXp8xauS2H9E7JoTA3BTiEP2z%2Bt5KBzys%2FnuU7vMC%2FquhUBJCRSQqQbPw8LUAgZzE6SxpLAZ%2FIk2n1TYpyq8oOk5PHTJK8O5ciCwBOjDzTIOH%2BgOKeJS2tJ43BiEZcy9r3kQ27rBvdJStO4qlBDMEM31z36JrtXcemxzUzn%2BLLVMEWycP6nVUo8KMVfi96KRrSXF6BIJjyFgCVTGKUy3Ua2GKnBiM%2Bb5wMnzCZv6qbyFpzj4AZEEozDoLRVeYasSJf19xDVVQUOeLe7BDXVzbmWNbxBQOYH63IJEFUQQinFiThaD5QSne%2BGW7tvFmI2xnn7oq6PoNKgm8rwcuPr0MzvIRI4Aaa4daZPSvr%2F0lRVvgEgX5s4ToMWVYKTBK2meKqt7DF6RLKL8O6kTth9KoSIUX8IVSzsPJQ2XXLMJ%2B7tsIGOqUB%2BA8U63MeRLFkSGDJpKvJC1nCOPYjzN%2F%2FYb2BSkE94Jn9rhA0Z0%2B5FUubUZjdd5Uv%2FC%2BK9dLR8%2BEPG4TdewVzhOUNpwPKLY34jVc7s3BxoQLx5hIe%2BpCLKimhnRlkcLmQPMhjFVtOvvS4%2FXdedabQKeAKwnFDdVzL%2B6asFwRdSNsBAjnKvV79EJE8TjL1siwRnwqBKaeiJ%2Bsa6d6sZPuyM%2FubaBLr&X-Amz-Signature=89c7493880a923847021fbf90959913fc04b5daef88dde2a0a22270fe2b8fc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6CWV2D%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDvqWffweCpJxZHhOcjotfQu%2Fg1xV6xh6NWA8CnVotTeQIgclALo47tMcKatLRJN%2BUad1yURbhT80spqzpmS2jn7uMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPWZvXvIHIVh6vKKDyrcA4woTe3PME7XeRSnayZaygCoAryHrlK1KHMhkRLxE7GvhaAdGbw9l%2Fuszk8vI3JBa4hsDjqTxb%2FEQJgd2vsvwzgaSyBh%2F152Rhj9%2BI71jxV4S49atRD619bE6oqgiZ%2FTVNJMy7aESEuBXLPZuSgJeU9fGwp%2FnzwBpefbOKzvBqp4gK2zAlU62nvnPPCx9Lvv23Zkf5ewlSM4phDid7ot8XQXp8xauS2H9E7JoTA3BTiEP2z%2Bt5KBzys%2FnuU7vMC%2FquhUBJCRSQqQbPw8LUAgZzE6SxpLAZ%2FIk2n1TYpyq8oOk5PHTJK8O5ciCwBOjDzTIOH%2BgOKeJS2tJ43BiEZcy9r3kQ27rBvdJStO4qlBDMEM31z36JrtXcemxzUzn%2BLLVMEWycP6nVUo8KMVfi96KRrSXF6BIJjyFgCVTGKUy3Ua2GKnBiM%2Bb5wMnzCZv6qbyFpzj4AZEEozDoLRVeYasSJf19xDVVQUOeLe7BDXVzbmWNbxBQOYH63IJEFUQQinFiThaD5QSne%2BGW7tvFmI2xnn7oq6PoNKgm8rwcuPr0MzvIRI4Aaa4daZPSvr%2F0lRVvgEgX5s4ToMWVYKTBK2meKqt7DF6RLKL8O6kTth9KoSIUX8IVSzsPJQ2XXLMJ%2B7tsIGOqUB%2BA8U63MeRLFkSGDJpKvJC1nCOPYjzN%2F%2FYb2BSkE94Jn9rhA0Z0%2B5FUubUZjdd5Uv%2FC%2BK9dLR8%2BEPG4TdewVzhOUNpwPKLY34jVc7s3BxoQLx5hIe%2BpCLKimhnRlkcLmQPMhjFVtOvvS4%2FXdedabQKeAKwnFDdVzL%2B6asFwRdSNsBAjnKvV79EJE8TjL1siwRnwqBKaeiJ%2Bsa6d6sZPuyM%2FubaBLr&X-Amz-Signature=218732efbaedf6cfffe68a9fa435f3147ae38869afdd9a857ff7457645b59b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
