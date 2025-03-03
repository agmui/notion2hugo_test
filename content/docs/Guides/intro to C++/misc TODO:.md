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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAOZOBB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElD0x7rKYLMaVnGFXRL%2BdU8jkxoxdmvMez1UEcuEefgAiAm83RuPGwVoL3HLPeLuEfaQPW3OAXZq6RB0LncqqGbfSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1KY1xviW0MZRrlHKKtwDiK3QDVT6ckKjyUm2dL7ZBFYIvxD8YA2nbbVazb%2BTLHOw59sKpn3gQ9EqOHO2jKewQewNwUDaqrGE19qHwwhN%2BtRV4bUIsFE7bkmGi7sKEhxJw1PWNBg%2FqenDItU%2BoEB0ufQiNi6K%2F6h15MxKWksNbebrUKD3KH6jYtbjX%2FVOc9NLgZQ3CxZmUqqt0OE3%2Fe9ruxEcnTRQZxBGAm4VEgR5o21ygd%2BPR50zoLrN5hW5mf1n1CXNU%2FqrzFQHNxmC8KZ5jw3NhX1Jskk7pe6XaVN0uKB6eoNqeR5UG5VW2O0J5W%2BTjkM6Ae5LhjDmVJhOKG9Hbxq6LsxmXZs9o3R8beNM5enMDwNFaUUMPVh5gwQoJuMvcH5jFrOJnJClEB2nkutMNRSpcxo%2BK4dQllVi5sMgUx8vqJhr7cXq1kIjYSNbluQPVxxPXblLZruF9Z%2FAJPhw%2FHYeWT%2FkoeIfdrL3fzl97GtljuHJMaK45l9pgCL8EQH7jqB9wMVRPuAoVKzxfusIsTneDXlWMgiJ4KqTaOsRQHp7itLMyEe9Y5hLU2Zva3Shca2LHwOyO7ALxTG%2FDWL6d%2Ba%2ByDYutuZUWwXjaVWbzGCngEV0XLFebjgzsJHDO8pzM8tkkevvnsg8B4AwkP2VvgY6pgEUTBUVbmB5%2FjCV62Ugg2NBydWvUazN7VTUWQAGBx5JA%2BECm4U8pHGV%2BF5Ua8gZYxgAH1RuKZ8xaD7YuVVcJQjPxn%2Fjx6pAMedPIb2qn%2FX%2F2Eu2laPt3mKQIrhgeT%2FsPLEW5HwuASNmt1gVXYFEwVkA0qsVeYMo3VRKhqsCLLGR1FFe%2Fw8E%2F0uRm6sIekCUV%2BqLMgj5%2BCZ5f8Iqt1c4OPHH%2FEdTE%2B5K&X-Amz-Signature=cbddda7470bf61b7f28ce6ad0675a4079b4584744dcbf721960ad50da765f1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAOZOBB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElD0x7rKYLMaVnGFXRL%2BdU8jkxoxdmvMez1UEcuEefgAiAm83RuPGwVoL3HLPeLuEfaQPW3OAXZq6RB0LncqqGbfSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1KY1xviW0MZRrlHKKtwDiK3QDVT6ckKjyUm2dL7ZBFYIvxD8YA2nbbVazb%2BTLHOw59sKpn3gQ9EqOHO2jKewQewNwUDaqrGE19qHwwhN%2BtRV4bUIsFE7bkmGi7sKEhxJw1PWNBg%2FqenDItU%2BoEB0ufQiNi6K%2F6h15MxKWksNbebrUKD3KH6jYtbjX%2FVOc9NLgZQ3CxZmUqqt0OE3%2Fe9ruxEcnTRQZxBGAm4VEgR5o21ygd%2BPR50zoLrN5hW5mf1n1CXNU%2FqrzFQHNxmC8KZ5jw3NhX1Jskk7pe6XaVN0uKB6eoNqeR5UG5VW2O0J5W%2BTjkM6Ae5LhjDmVJhOKG9Hbxq6LsxmXZs9o3R8beNM5enMDwNFaUUMPVh5gwQoJuMvcH5jFrOJnJClEB2nkutMNRSpcxo%2BK4dQllVi5sMgUx8vqJhr7cXq1kIjYSNbluQPVxxPXblLZruF9Z%2FAJPhw%2FHYeWT%2FkoeIfdrL3fzl97GtljuHJMaK45l9pgCL8EQH7jqB9wMVRPuAoVKzxfusIsTneDXlWMgiJ4KqTaOsRQHp7itLMyEe9Y5hLU2Zva3Shca2LHwOyO7ALxTG%2FDWL6d%2Ba%2ByDYutuZUWwXjaVWbzGCngEV0XLFebjgzsJHDO8pzM8tkkevvnsg8B4AwkP2VvgY6pgEUTBUVbmB5%2FjCV62Ugg2NBydWvUazN7VTUWQAGBx5JA%2BECm4U8pHGV%2BF5Ua8gZYxgAH1RuKZ8xaD7YuVVcJQjPxn%2Fjx6pAMedPIb2qn%2FX%2F2Eu2laPt3mKQIrhgeT%2FsPLEW5HwuASNmt1gVXYFEwVkA0qsVeYMo3VRKhqsCLLGR1FFe%2Fw8E%2F0uRm6sIekCUV%2BqLMgj5%2BCZ5f8Iqt1c4OPHH%2FEdTE%2B5K&X-Amz-Signature=bae7027dda41dda4430481e2f14b18a92cf13925553ab1407d3afe9957425b52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
