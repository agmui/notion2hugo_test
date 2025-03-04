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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQEGEBU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwR5i5VLjzoQUUBh8Pc8Itddw4t0atZWEV49%2Bcteu2nAiEAwTBX1Y8Vj8mYQhoe1jiDiEB9VU7vVgdR%2BlSlTETOXVcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAansQTnuuCBZEzTWCrcA98WiSw2pBveSGXjHhBlOzCf7R9gtPCAA2eOMfCTw6uFgds1kx1iQmfOL%2BIcRfrcn5MpzZZawU%2BuSbrFh%2F3a%2F1NOckMny3dQqpNsZbwfY%2Bd2unytpOPvL3khGBc576D%2BIp79vEznnxKdE2hSxqP5JCQEXiqfnhynulWcklpPeA0GL1LYPcTjUNQxTWvwD8rKi4md5qHIerVhyFIa9z0cpXIeCPyK8PyZbM5EP5Z%2FzegKiX7CduIysr8a7nIW9xyFQLRnb7Jj06d8Ic5q%2FLsKJ1qS6AxqAWLdq3a8sM2XvQzosKB0MU7u0W7YusoVF7UNF6AlOcx93nipeBSFOJlmBIAsxaBs8jN5evJI3HJiy7Ux1fs9Q9j8smxTzb4LMVnaOUtanwIXzToE3y1uY%2Fb3mSFO8Zrl6Xm6de87FR%2FAoKV9bRBuWSpk7QysDAcS%2Fsjim3%2F4LI6ndau8%2F8FQ5Eqrkyc29fz7sjR6ctI%2Ffn7TXtI%2FC3YVjGziAv0qszI%2FmLEfp9preSG%2FbhdidVRCv2sYcnYXKE66qZqhm%2FeszCZJ7W%2BAcV9zv9AIZFn%2BBKSPfei9pB5cEA8nFFGBwWlDfBZTBeRNvq4Lbe8qCR%2FTXU6sfIIA%2BXxwgm7tZ2Zx2gffMOf4mL4GOqUBxRCXN%2Fl8vxDVQwAHJsMb9RKNlIDFaw9jGiFsZpvatyL9p5Zfi3nw3Dwm13FZQQ4UPYEv2KrDcDq6ZNllTMhEgBHLp3b9r7UPM%2B1%2BSHDNGQkD1DD4exzPkDv3FipJRveZgfQ38Xz6Fo6lt2u20gbTCcp8pBzZE1NQF23EwFfLgyBLet7H2Xp7AYHoYVrylM%2Fru%2FzxNHdNCZ%2BXIKrdHQP9As%2Bu9MYp&X-Amz-Signature=2324e211895aceeb81dae81820d2e196aed79afe9e43c46aec9499f7d55c2370&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQEGEBU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwR5i5VLjzoQUUBh8Pc8Itddw4t0atZWEV49%2Bcteu2nAiEAwTBX1Y8Vj8mYQhoe1jiDiEB9VU7vVgdR%2BlSlTETOXVcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAansQTnuuCBZEzTWCrcA98WiSw2pBveSGXjHhBlOzCf7R9gtPCAA2eOMfCTw6uFgds1kx1iQmfOL%2BIcRfrcn5MpzZZawU%2BuSbrFh%2F3a%2F1NOckMny3dQqpNsZbwfY%2Bd2unytpOPvL3khGBc576D%2BIp79vEznnxKdE2hSxqP5JCQEXiqfnhynulWcklpPeA0GL1LYPcTjUNQxTWvwD8rKi4md5qHIerVhyFIa9z0cpXIeCPyK8PyZbM5EP5Z%2FzegKiX7CduIysr8a7nIW9xyFQLRnb7Jj06d8Ic5q%2FLsKJ1qS6AxqAWLdq3a8sM2XvQzosKB0MU7u0W7YusoVF7UNF6AlOcx93nipeBSFOJlmBIAsxaBs8jN5evJI3HJiy7Ux1fs9Q9j8smxTzb4LMVnaOUtanwIXzToE3y1uY%2Fb3mSFO8Zrl6Xm6de87FR%2FAoKV9bRBuWSpk7QysDAcS%2Fsjim3%2F4LI6ndau8%2F8FQ5Eqrkyc29fz7sjR6ctI%2Ffn7TXtI%2FC3YVjGziAv0qszI%2FmLEfp9preSG%2FbhdidVRCv2sYcnYXKE66qZqhm%2FeszCZJ7W%2BAcV9zv9AIZFn%2BBKSPfei9pB5cEA8nFFGBwWlDfBZTBeRNvq4Lbe8qCR%2FTXU6sfIIA%2BXxwgm7tZ2Zx2gffMOf4mL4GOqUBxRCXN%2Fl8vxDVQwAHJsMb9RKNlIDFaw9jGiFsZpvatyL9p5Zfi3nw3Dwm13FZQQ4UPYEv2KrDcDq6ZNllTMhEgBHLp3b9r7UPM%2B1%2BSHDNGQkD1DD4exzPkDv3FipJRveZgfQ38Xz6Fo6lt2u20gbTCcp8pBzZE1NQF23EwFfLgyBLet7H2Xp7AYHoYVrylM%2Fru%2FzxNHdNCZ%2BXIKrdHQP9As%2Bu9MYp&X-Amz-Signature=50b40a209897e2550f691e1987f249d341c31133e8ccfb53a5de4b84a5b93340&X-Amz-SignedHeaders=host&x-id=GetObject)

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
