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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HYEQAOS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtBFMUyowenMGyBzPBCmmrJy0LqwjqzwTNBrZPEoly1AiAizzIuOed3FrHdUIaSd5S8P0fV1Vg9Wx2K7CgUbKbioyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqbhsXm8bMPy%2BCTwKtwD6%2FEKOEbSZN0nshiBpIKDwakCSy%2FMojC6%2FS8qLwFVSgbm9moLJCADYyft080Qz7ZsdgP6EiWdccIT5tiYxMknQtPNrGNJi4wIrRocLzGI74ur61c0PwAAW7o%2FycCh4yQFGO8xcjxDId%2BtCkGwOWog33yFbPKa3KgtodHU1XTL9AIbmAIq%2Bk7bQvWsprUsFBRXsSaA3OrxSSdnHFVSjsqv2Jvm9t60HIyqtJGtdj4IF1er6A14KltoXEr9dxv59lDYfIOAd%2FOKdXq2IoKeuRUVxjNfZwo39pMB3UKE%2FdqU3OcAYlQnXiFFPAMxxhPtkXmPUYHU2u5kMPnXypPn3VR31WdUhIBKR4WhmQdJ2j997Dg%2Frx8SuP2mB4jwhIt0hRAYCILYOU1WfJPi3cb1cmAwgTy1%2B85EzjlX4k3LhcJAl5KkJpuv1u2TVpWLuyPZcfquVkpWiEzYY5LOiTLxA9N95J8yx9lssSi59%2Bud3JVwpngTFHMftX4c2GRJwMoABYby58bnx0mV%2BOrTbbGumY5JuOdt0qsk4L145MTYSv0YtoNHYFphDJDDOdn3Us%2BrI9%2BbnM1uECHSkiRmzQ4nnPld%2FxcpwSwZkieqxre55n43qnVWNTqX6nRhYn3z7zMwpYTrwQY6pgFiEY7LOl0tGxYC4s7120TZog3%2BN0rWSaUED3c5mvqJbOWewbi5EN8FbfTGnLPf2W9TySLr14tQ%2F4s3dbYPNpMYdVSDxDTfDesFUxeH4VLz9e1VOQZNli0mDmuZCU7lktTKha94HNFIgbTCQNUMaEGntRRlXwY0yKZ5bMpIELQdjEPiXYlmk7Ca25m8xTW09Wj1yN5MmLEeLBTEwU0KdHbDuDDrAJP5&X-Amz-Signature=b79685f08b3f0425e610a9d5e009cc3851a20ba1e855f588867b239ff72bb915&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HYEQAOS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtBFMUyowenMGyBzPBCmmrJy0LqwjqzwTNBrZPEoly1AiAizzIuOed3FrHdUIaSd5S8P0fV1Vg9Wx2K7CgUbKbioyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqbhsXm8bMPy%2BCTwKtwD6%2FEKOEbSZN0nshiBpIKDwakCSy%2FMojC6%2FS8qLwFVSgbm9moLJCADYyft080Qz7ZsdgP6EiWdccIT5tiYxMknQtPNrGNJi4wIrRocLzGI74ur61c0PwAAW7o%2FycCh4yQFGO8xcjxDId%2BtCkGwOWog33yFbPKa3KgtodHU1XTL9AIbmAIq%2Bk7bQvWsprUsFBRXsSaA3OrxSSdnHFVSjsqv2Jvm9t60HIyqtJGtdj4IF1er6A14KltoXEr9dxv59lDYfIOAd%2FOKdXq2IoKeuRUVxjNfZwo39pMB3UKE%2FdqU3OcAYlQnXiFFPAMxxhPtkXmPUYHU2u5kMPnXypPn3VR31WdUhIBKR4WhmQdJ2j997Dg%2Frx8SuP2mB4jwhIt0hRAYCILYOU1WfJPi3cb1cmAwgTy1%2B85EzjlX4k3LhcJAl5KkJpuv1u2TVpWLuyPZcfquVkpWiEzYY5LOiTLxA9N95J8yx9lssSi59%2Bud3JVwpngTFHMftX4c2GRJwMoABYby58bnx0mV%2BOrTbbGumY5JuOdt0qsk4L145MTYSv0YtoNHYFphDJDDOdn3Us%2BrI9%2BbnM1uECHSkiRmzQ4nnPld%2FxcpwSwZkieqxre55n43qnVWNTqX6nRhYn3z7zMwpYTrwQY6pgFiEY7LOl0tGxYC4s7120TZog3%2BN0rWSaUED3c5mvqJbOWewbi5EN8FbfTGnLPf2W9TySLr14tQ%2F4s3dbYPNpMYdVSDxDTfDesFUxeH4VLz9e1VOQZNli0mDmuZCU7lktTKha94HNFIgbTCQNUMaEGntRRlXwY0yKZ5bMpIELQdjEPiXYlmk7Ca25m8xTW09Wj1yN5MmLEeLBTEwU0KdHbDuDDrAJP5&X-Amz-Signature=aaf1d8f43d4d5546593c4c80a8ed9dae3895e8071cd88af797282836cf5e76eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
