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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665Y6TQTO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRP4OWNEMHuFXYaGJJarMEQA24usfWN3zGHdq%2FheF5TQIgD9bgPwwUskAfEt4UyzxMS0oLnzgWkQnmBmiGOKdVLGwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMHfQYbU2vRl5pcvaCrcA58JDKGJp7NpgJtCR45995EpvlRqsLxN3AvoVzsGyNyLyZ%2FEs7OCeCaW%2FjYjzoyThDL9jo4dwaQT3vkIj9xnmVdMIJbycb5kYTqku89sC%2BdznJcOj4i1msRvbo8eTkBgDIPOxOxpdwfLKNd048mNXGiWwt5KeZQr2YmspZwLIQyxmGvYpeMXYE0CXRObHOsuaJPWNaTLTnqMsXwEkHx1SHI9WSdE4kqFidmgzZxGrtLxoA1zkpDYHMmlTbvxJxKCPhaTXhynUpHbGOuqXak26UqOvIAc34G8Z9MmA20Nbmc5I1VMN2wCiceuc0W99MNxdePFoNc9lBHLWWknUGkoPYbTu1k8uKXKg3A6mewrYsVTDVs2Dvg8M2Y9JgHw5m7pR2BFgg8Ev9dgg9Dt%2Bnhhmgx%2Bkqx0GQ37OipC6%2FK1hV2z1514X%2FcqhiQjfKVeqjLbCNeD0uunVA8%2Fk%2FC%2FukfXlgW08lpXZICCI9R9nA6zrlb9ziFzFB7N3HclN40h1MpG53kdv3nNumSh8guTLoZdPsj%2Fw4W6gEHa%2FZiyuQAb7n9do%2FKQSuIoM%2Fks1p4T8OVeoK0oHKDQCnEtKgwI5ix3fCEA2sRaoKe99dhVfqiGyWhiU9U8aSjn1gn2xV6WMLXQ7cAGOqUB2bQ2ck7hVq%2BW2LTzp6ekwABiUFJwu0XXi2HMH5h0iKiQG1NQ6U6ubUzUb7XgJgYpBcJ%2FEpTBOdEkaNMF7MReAMsfgpFvnuCrPVNunrhNr7JXNsfUaWKCW7kYDZDu7tdtx2l%2B0not9n%2BPb9sPHpcyGmgLhp0%2BBI7GI%2F6Sj9yY85wsVOG7udmQMRrcdTS9f1N3ovA%2FkTH1xBtA6G%2Bfe%2BemeoTLKo2x&X-Amz-Signature=523e28adb32586c4a6d3f8fd238ace5bf9b75148cc1138de017389fb927e216a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665Y6TQTO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRP4OWNEMHuFXYaGJJarMEQA24usfWN3zGHdq%2FheF5TQIgD9bgPwwUskAfEt4UyzxMS0oLnzgWkQnmBmiGOKdVLGwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMHfQYbU2vRl5pcvaCrcA58JDKGJp7NpgJtCR45995EpvlRqsLxN3AvoVzsGyNyLyZ%2FEs7OCeCaW%2FjYjzoyThDL9jo4dwaQT3vkIj9xnmVdMIJbycb5kYTqku89sC%2BdznJcOj4i1msRvbo8eTkBgDIPOxOxpdwfLKNd048mNXGiWwt5KeZQr2YmspZwLIQyxmGvYpeMXYE0CXRObHOsuaJPWNaTLTnqMsXwEkHx1SHI9WSdE4kqFidmgzZxGrtLxoA1zkpDYHMmlTbvxJxKCPhaTXhynUpHbGOuqXak26UqOvIAc34G8Z9MmA20Nbmc5I1VMN2wCiceuc0W99MNxdePFoNc9lBHLWWknUGkoPYbTu1k8uKXKg3A6mewrYsVTDVs2Dvg8M2Y9JgHw5m7pR2BFgg8Ev9dgg9Dt%2Bnhhmgx%2Bkqx0GQ37OipC6%2FK1hV2z1514X%2FcqhiQjfKVeqjLbCNeD0uunVA8%2Fk%2FC%2FukfXlgW08lpXZICCI9R9nA6zrlb9ziFzFB7N3HclN40h1MpG53kdv3nNumSh8guTLoZdPsj%2Fw4W6gEHa%2FZiyuQAb7n9do%2FKQSuIoM%2Fks1p4T8OVeoK0oHKDQCnEtKgwI5ix3fCEA2sRaoKe99dhVfqiGyWhiU9U8aSjn1gn2xV6WMLXQ7cAGOqUB2bQ2ck7hVq%2BW2LTzp6ekwABiUFJwu0XXi2HMH5h0iKiQG1NQ6U6ubUzUb7XgJgYpBcJ%2FEpTBOdEkaNMF7MReAMsfgpFvnuCrPVNunrhNr7JXNsfUaWKCW7kYDZDu7tdtx2l%2B0not9n%2BPb9sPHpcyGmgLhp0%2BBI7GI%2F6Sj9yY85wsVOG7udmQMRrcdTS9f1N3ovA%2FkTH1xBtA6G%2Bfe%2BemeoTLKo2x&X-Amz-Signature=556411bb6ea8b798499228f73f0cb2a7e1482203328421ad64b2cdc05fa2b8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
