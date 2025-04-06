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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7RXLL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkVRimUacXz5Dh6g2IAwNZz0va4YUZx%2F%2BVuy2d9LnQsAiEA9U44ES7ZP44Fx4GpZ0UhZP6PkZ%2Fpz1dOt05TyKy1O%2Fsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLDJG76q5cP4MAFOoyrcA7HPUx2vkT9IJHlyrJFxNqzjWNlU7Q3l3ElwSmlRuyrGP2xt%2FlP5gVkXPjG99js%2B5NOiRywtuB%2Bi3G1a3bkBiC3QqbPUlj8Huyjo39dvexris77J3kvqK5Qct8X25yBT9ojITnmk%2FQYUBTInZ4ju1UmoBwSFFr6ZCNO8DtkZR%2F1R03k0spw%2BSo%2FFelB83wfdSRusLtJCrGZbV%2Byjv2zFpfjHRIXfXDNf9suoTHAPmWo0esWJUF%2B88Wsajb7FLIDucoiSRDSJEtqqR%2B4h2ysMi75valaCyhkSpjqLLltmvqY470PTGv%2FjwCUueT4z0jMjhvry%2BiZHDlkLGStsVXWCgfnMAT%2FzC3WY9zL65aonvIvA4yVGYJV6Ek8z41UfW5RbWrv3Uf6SjwrKguMIuESOooN8LnHycsVElGQo1g03HSYsy%2B9ncxTnfOoQtdNHJ%2BrZBZd98uDO3ZeuViBM59KR%2BC8Cq5NGzziG7KymZtnfPSv4nXBc1RXesIZx4r1geiSSzUxvpEh8TvHH%2F0bihrS6Eg775nGMzDLThwNFVbf0mJi9yfGIOM4P6MMhNYN7L2yhp%2FxFryHjXLBI8j1UUe%2B4%2BZ7saFzhzGLLYbMTPemcucB2c6NdpcaipKcDyHrPMP%2F0y78GOqUB%2Fxh%2BCYW0aThlOMPlx4P2hcTFGvGuhEkFhnhQ2GKtWzb0bF%2FKQvZyh5MEsRgf4M%2B4FsEHcF5%2BEEYnoX8iJdXXql1nJA5sEeuS278LPongYfV2ZWuSYqQxZp0Tvly9Th9BVFvgMX9lzWfuO9a3j7Aa5MDWjdqrQirDzA3ButDS7nwXX8ibiDWjKiZ7XTZqbJKzEebTO%2FKUZIGZ2N3S5kkCErbzg063&X-Amz-Signature=4f7b6ff8334ca8334fd62c02c8d6d91488e8cd51acc374684b99fceabb226235&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGC7RXLL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkVRimUacXz5Dh6g2IAwNZz0va4YUZx%2F%2BVuy2d9LnQsAiEA9U44ES7ZP44Fx4GpZ0UhZP6PkZ%2Fpz1dOt05TyKy1O%2Fsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLDJG76q5cP4MAFOoyrcA7HPUx2vkT9IJHlyrJFxNqzjWNlU7Q3l3ElwSmlRuyrGP2xt%2FlP5gVkXPjG99js%2B5NOiRywtuB%2Bi3G1a3bkBiC3QqbPUlj8Huyjo39dvexris77J3kvqK5Qct8X25yBT9ojITnmk%2FQYUBTInZ4ju1UmoBwSFFr6ZCNO8DtkZR%2F1R03k0spw%2BSo%2FFelB83wfdSRusLtJCrGZbV%2Byjv2zFpfjHRIXfXDNf9suoTHAPmWo0esWJUF%2B88Wsajb7FLIDucoiSRDSJEtqqR%2B4h2ysMi75valaCyhkSpjqLLltmvqY470PTGv%2FjwCUueT4z0jMjhvry%2BiZHDlkLGStsVXWCgfnMAT%2FzC3WY9zL65aonvIvA4yVGYJV6Ek8z41UfW5RbWrv3Uf6SjwrKguMIuESOooN8LnHycsVElGQo1g03HSYsy%2B9ncxTnfOoQtdNHJ%2BrZBZd98uDO3ZeuViBM59KR%2BC8Cq5NGzziG7KymZtnfPSv4nXBc1RXesIZx4r1geiSSzUxvpEh8TvHH%2F0bihrS6Eg775nGMzDLThwNFVbf0mJi9yfGIOM4P6MMhNYN7L2yhp%2FxFryHjXLBI8j1UUe%2B4%2BZ7saFzhzGLLYbMTPemcucB2c6NdpcaipKcDyHrPMP%2F0y78GOqUB%2Fxh%2BCYW0aThlOMPlx4P2hcTFGvGuhEkFhnhQ2GKtWzb0bF%2FKQvZyh5MEsRgf4M%2B4FsEHcF5%2BEEYnoX8iJdXXql1nJA5sEeuS278LPongYfV2ZWuSYqQxZp0Tvly9Th9BVFvgMX9lzWfuO9a3j7Aa5MDWjdqrQirDzA3ButDS7nwXX8ibiDWjKiZ7XTZqbJKzEebTO%2FKUZIGZ2N3S5kkCErbzg063&X-Amz-Signature=351da1866cbd28e8567e9c9ed0ea84892a6effa01e1b26af2226a1479cc432a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
