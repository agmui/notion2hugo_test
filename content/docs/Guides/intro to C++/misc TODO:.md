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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JANTQ4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDs2JiEvlkeSUxRHIhvbAMQn1Ajik4%2BI5Fgm6Tt3kVpsAiB4e4HwrpxxWR3%2FA42cpS%2F4TUtB2PJ4b6%2FZqmI9FdfUzSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXkTACBtx2yiSy9dvKtwDckfGfPURZ6NQw3ll4njOOJ4yv3EwXw58cW%2FwRRMjpeeIULPvLNbiPwy%2Fglx%2BsL5yJ%2BxgUKVU6v3EVcJU%2BdgxeyYkPe8U413sZjVHR7pebDfA7pAR1wBB%2Fab2ngvVoE3GXMOWL3yr%2BkuzDDB4POE9v3PFSX12YdOr45rWq2tGupYFajKOs8AuHW3rnj0rTO59a0soB00bxUMgNPhSR8bk9rvDw96pEbAoijXWmKG70Sy0btxkVhTDK33XcKfcrgzvVWExagPgqBV5YSCezWChTErMx4X2jmhBs33iqTC%2F7VCbRwlO2M%2FsgCx83EnvckY%2FNo6mCJLPBlulG8biKxIhvUM4FJuQ0mJzFOY%2B04rlR9LOg3CfzoPBZJLGKe%2F3N8FsfR9TRZBpYj0YaoquzDEVEhxctGnbAgeGADDHxS4Cre7e1LYW3A0eSDZgookES1wJTjWEaqFqtaAjD1PuaRQCfojNplbpoqQNjmQx0j8FUNbU096ozKz99ZNruEOnqrFaqtO5vPXO2pJ4%2BHtYn0g4vUXeV1Uk3OyEElOmMiuaTFR5N9mYdBRsAHC7Hu7o8ECwqH%2FgGvFlTWyjfHDdXPnNGVy42eVCAlDCvIOxDVkQmYC8ROcPY7VqSNHnG%2FEwmdiPvgY6pgHXG6aHyF6rUa3bkIumTwB7S4hEJ4GQhjbihOtzNHbXBikGib4f83rqAZOHRLgIM8vAa%2BZLDquDeDPid9DPK%2Bx79cG7LWWi5sVGgh16RPu%2Bg9cFJYmhyKx1AOticdg4Xb%2FvyfPAjE3k1RY99quHOF9D4uCbWe60%2BqrdaqNzQZBVVWlFZtHHd20zvxf3lh3d7f1zeopnWTTRRAod2fUSlW4fR4wBYhvl&X-Amz-Signature=5038afc338685e8a1ddd4c70421b8a0a16787f5098d9cea4937ca7676ba2b5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JANTQ4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDs2JiEvlkeSUxRHIhvbAMQn1Ajik4%2BI5Fgm6Tt3kVpsAiB4e4HwrpxxWR3%2FA42cpS%2F4TUtB2PJ4b6%2FZqmI9FdfUzSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXkTACBtx2yiSy9dvKtwDckfGfPURZ6NQw3ll4njOOJ4yv3EwXw58cW%2FwRRMjpeeIULPvLNbiPwy%2Fglx%2BsL5yJ%2BxgUKVU6v3EVcJU%2BdgxeyYkPe8U413sZjVHR7pebDfA7pAR1wBB%2Fab2ngvVoE3GXMOWL3yr%2BkuzDDB4POE9v3PFSX12YdOr45rWq2tGupYFajKOs8AuHW3rnj0rTO59a0soB00bxUMgNPhSR8bk9rvDw96pEbAoijXWmKG70Sy0btxkVhTDK33XcKfcrgzvVWExagPgqBV5YSCezWChTErMx4X2jmhBs33iqTC%2F7VCbRwlO2M%2FsgCx83EnvckY%2FNo6mCJLPBlulG8biKxIhvUM4FJuQ0mJzFOY%2B04rlR9LOg3CfzoPBZJLGKe%2F3N8FsfR9TRZBpYj0YaoquzDEVEhxctGnbAgeGADDHxS4Cre7e1LYW3A0eSDZgookES1wJTjWEaqFqtaAjD1PuaRQCfojNplbpoqQNjmQx0j8FUNbU096ozKz99ZNruEOnqrFaqtO5vPXO2pJ4%2BHtYn0g4vUXeV1Uk3OyEElOmMiuaTFR5N9mYdBRsAHC7Hu7o8ECwqH%2FgGvFlTWyjfHDdXPnNGVy42eVCAlDCvIOxDVkQmYC8ROcPY7VqSNHnG%2FEwmdiPvgY6pgHXG6aHyF6rUa3bkIumTwB7S4hEJ4GQhjbihOtzNHbXBikGib4f83rqAZOHRLgIM8vAa%2BZLDquDeDPid9DPK%2Bx79cG7LWWi5sVGgh16RPu%2Bg9cFJYmhyKx1AOticdg4Xb%2FvyfPAjE3k1RY99quHOF9D4uCbWe60%2BqrdaqNzQZBVVWlFZtHHd20zvxf3lh3d7f1zeopnWTTRRAod2fUSlW4fR4wBYhvl&X-Amz-Signature=d7a8711736724e0d855d4896d72209c3aafb3b56f5bd74fd4444d3643341f995&X-Amz-SignedHeaders=host&x-id=GetObject)

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
