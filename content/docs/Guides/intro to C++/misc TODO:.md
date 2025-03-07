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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TWNEFC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkZyamyyjxW02j7YWAA5sqxKGsQ62cX59vnE9IbV2WiwIhAOwVJTEcsYDYLcvgO7it8tcaPI3lfSgKOBEScfC%2Be4DeKv8DCEMQABoMNjM3NDIzMTgzODA1Igyt%2Bm3Oiao%2BibOQN4gq3APM%2B%2Fna2ORfBKj4autuZr1WMKurstpeEr7gpvxJ%2Faryvb%2Fq%2FmgzLql6zeLhcaKSuMd7UcX7o1ECNqa%2BrF8hZEvaO7WIPoxrhhkBVi08aWv7vrG7gIYmToC2o8PNoqLlSnyhrYYKxqIxP9kxte1vyeoLS5u2UWb7da5vfCs%2F2M9C1UjY2Ya34u%2BMiiDGXJAVc3RBcIKXeFrvZBk6yRE%2F%2BxtU1FnEHyovXvCw0gIt83j7WmeRYaSYh69%2B361tKr8ja%2BY%2BSZE4sLNdI7q%2FGMX3w54uQYFwoqHaNdiF4SHzhqToyyZnZtL%2F355j9f0V4bMWF4uq1nekWcK7%2F%2BkZ1K%2FIT0WLNdT1X7F3eMdhKQ7E3K7egQWW5EhM9up7aKo7GtwK27jmeXcMZOD6DSmdxrbkOgJk9rgw5sT4KCgM9LvWExdwzKMDU1tJr8VQgAWHMEK7hWcnVhFjwvrlURk9ul2MDIWtzKUHDZ9fB0%2BgPGu76crrXkm9zkJZDoWnFcLMkxeb2d5QcFmNbaLJ4zNmR01fDjtUNF0qwCrhePDRfHUgndI%2BJZng%2BBrQSAL04ZUtBBb%2FlS3GFHZSPpk%2BiYYlP5fjTS2IzKIMijeRm0z2KT5zSxz%2BvuATF5rn63WGG9pHJzDah6u%2BBjqkAbgcokUu%2F1TjHQ2JIQGmeuv2WLjtoiYvWC35ukMxRrB8jkteYD3gERaPpktU1bWzXSACuJb9m9LJD5tk0Qt%2F1vZDa84%2BrhecUeVEy7%2F1QfClLHYw9yo0IjUYihMV%2Bb4XwWSuVDF1%2BMsyJLqftd010ZeITRJb4GcLqa8l%2B0HJrfSvtA%2BzXHWmz%2BFhdRDhpMGMvRsBjqBPvOWRMUiDPApWbY5K9t1q&X-Amz-Signature=2ce42b3e24d0f67120e7b737f50cefbf1f7558885ec9f51bc3d39210a6156ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TWNEFC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkZyamyyjxW02j7YWAA5sqxKGsQ62cX59vnE9IbV2WiwIhAOwVJTEcsYDYLcvgO7it8tcaPI3lfSgKOBEScfC%2Be4DeKv8DCEMQABoMNjM3NDIzMTgzODA1Igyt%2Bm3Oiao%2BibOQN4gq3APM%2B%2Fna2ORfBKj4autuZr1WMKurstpeEr7gpvxJ%2Faryvb%2Fq%2FmgzLql6zeLhcaKSuMd7UcX7o1ECNqa%2BrF8hZEvaO7WIPoxrhhkBVi08aWv7vrG7gIYmToC2o8PNoqLlSnyhrYYKxqIxP9kxte1vyeoLS5u2UWb7da5vfCs%2F2M9C1UjY2Ya34u%2BMiiDGXJAVc3RBcIKXeFrvZBk6yRE%2F%2BxtU1FnEHyovXvCw0gIt83j7WmeRYaSYh69%2B361tKr8ja%2BY%2BSZE4sLNdI7q%2FGMX3w54uQYFwoqHaNdiF4SHzhqToyyZnZtL%2F355j9f0V4bMWF4uq1nekWcK7%2F%2BkZ1K%2FIT0WLNdT1X7F3eMdhKQ7E3K7egQWW5EhM9up7aKo7GtwK27jmeXcMZOD6DSmdxrbkOgJk9rgw5sT4KCgM9LvWExdwzKMDU1tJr8VQgAWHMEK7hWcnVhFjwvrlURk9ul2MDIWtzKUHDZ9fB0%2BgPGu76crrXkm9zkJZDoWnFcLMkxeb2d5QcFmNbaLJ4zNmR01fDjtUNF0qwCrhePDRfHUgndI%2BJZng%2BBrQSAL04ZUtBBb%2FlS3GFHZSPpk%2BiYYlP5fjTS2IzKIMijeRm0z2KT5zSxz%2BvuATF5rn63WGG9pHJzDah6u%2BBjqkAbgcokUu%2F1TjHQ2JIQGmeuv2WLjtoiYvWC35ukMxRrB8jkteYD3gERaPpktU1bWzXSACuJb9m9LJD5tk0Qt%2F1vZDa84%2BrhecUeVEy7%2F1QfClLHYw9yo0IjUYihMV%2Bb4XwWSuVDF1%2BMsyJLqftd010ZeITRJb4GcLqa8l%2B0HJrfSvtA%2BzXHWmz%2BFhdRDhpMGMvRsBjqBPvOWRMUiDPApWbY5K9t1q&X-Amz-Signature=aaf50600168839f97f28e360fb797b88888684247645e99b3b1c1d75591401b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
