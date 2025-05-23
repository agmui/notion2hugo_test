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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYALT3FR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCFP8O0Y2Ifm4c7%2BxS3Y5s0HzEfJwrbokbOHViLGvkUMAIhAIYDDKlwdIemzwBtC1AU0v1CgKOuevbnGAZ2cdvCa%2FnMKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHgTLHu8eFuDHPnykq3ANSWyjHE5LZGBlqpDU%2BJr96vHJuoi1zqhmc4lE8blkiDPqCfAI9pLdyOPlX4ggAo%2Btif2lDG%2BVQ31NwOo9%2FSLy%2F6UEVZnj3NDLJOy00zxDt1kF3MKBVV4c11FTkLwtByWs9GeXrIp%2BDgwbFbIfdAVA5w1pyZla0dpA9NWLJzDI%2BUQ8JHMOJHCedQSGC0pjEjskEwP%2Bt8xe%2Bu0thW4G0mwXEao%2FqA8QSK1MabInJL0ji27sVJ0PVq%2FUDpedVf4Br%2BD0rJl47kXonIKUEP2z6kGpQ1gIYMaZykgAEyW4158xMJEVeZn%2F3prv7i%2FwtkRZzDxkj3JTXu%2B7xlN%2FeJZOo6dJ9vqf17SdSVLRnTYMtJfaxA5hF%2FGd4%2BlEmkBBoQB7tWom0qCJD5nu1hlcDPwiVjxiSxr3IYC2z8LiLVLYDgVujVSiC6NHqLhvTxRiIKRTkMT3bc1n1P6Sl05ucLf8AEdXCrpY1UV9rDvbnwXs1F7rB3kA6HYZNaxpd6ei18gwaI1kmiS9fj4g2MGRYiRBh2fBvni70%2BhOD5iV%2FFi5%2FNW%2BWfrcsWn80Y6JFYNAG49N2yQJniGYHwiLAoDGKSSiFzMZv77ZdsoiECwhH7n782DALBjWnnm%2BYNtGJqQtVHTDl78PBBjqkATzd6j%2Fu%2F%2F6X76p6gnTUYXqyEq2wdE011Io5FK1yyutVv10EF9VuLV78FiDIj5zYcy%2F4L2%2BEcAlNyzXZbcb67RoAnGdCEtUKVN1YjwZepBS01dP6HwhDUxxGPhOWi2Dn2bcTSbBVgmqiQwyJo5onHAa7DhKsSgZEdD0GWVQeX%2FeF%2Bn3EKicGt1eyM0MB8yCMpZ11oaYRJaDviZCF2YJncOD8aUFg&X-Amz-Signature=b297006971537d00cc5d30877f6627967c5a77663d525cff09ba5425620e9f20&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYALT3FR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCFP8O0Y2Ifm4c7%2BxS3Y5s0HzEfJwrbokbOHViLGvkUMAIhAIYDDKlwdIemzwBtC1AU0v1CgKOuevbnGAZ2cdvCa%2FnMKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHgTLHu8eFuDHPnykq3ANSWyjHE5LZGBlqpDU%2BJr96vHJuoi1zqhmc4lE8blkiDPqCfAI9pLdyOPlX4ggAo%2Btif2lDG%2BVQ31NwOo9%2FSLy%2F6UEVZnj3NDLJOy00zxDt1kF3MKBVV4c11FTkLwtByWs9GeXrIp%2BDgwbFbIfdAVA5w1pyZla0dpA9NWLJzDI%2BUQ8JHMOJHCedQSGC0pjEjskEwP%2Bt8xe%2Bu0thW4G0mwXEao%2FqA8QSK1MabInJL0ji27sVJ0PVq%2FUDpedVf4Br%2BD0rJl47kXonIKUEP2z6kGpQ1gIYMaZykgAEyW4158xMJEVeZn%2F3prv7i%2FwtkRZzDxkj3JTXu%2B7xlN%2FeJZOo6dJ9vqf17SdSVLRnTYMtJfaxA5hF%2FGd4%2BlEmkBBoQB7tWom0qCJD5nu1hlcDPwiVjxiSxr3IYC2z8LiLVLYDgVujVSiC6NHqLhvTxRiIKRTkMT3bc1n1P6Sl05ucLf8AEdXCrpY1UV9rDvbnwXs1F7rB3kA6HYZNaxpd6ei18gwaI1kmiS9fj4g2MGRYiRBh2fBvni70%2BhOD5iV%2FFi5%2FNW%2BWfrcsWn80Y6JFYNAG49N2yQJniGYHwiLAoDGKSSiFzMZv77ZdsoiECwhH7n782DALBjWnnm%2BYNtGJqQtVHTDl78PBBjqkATzd6j%2Fu%2F%2F6X76p6gnTUYXqyEq2wdE011Io5FK1yyutVv10EF9VuLV78FiDIj5zYcy%2F4L2%2BEcAlNyzXZbcb67RoAnGdCEtUKVN1YjwZepBS01dP6HwhDUxxGPhOWi2Dn2bcTSbBVgmqiQwyJo5onHAa7DhKsSgZEdD0GWVQeX%2FeF%2Bn3EKicGt1eyM0MB8yCMpZ11oaYRJaDviZCF2YJncOD8aUFg&X-Amz-Signature=ab8b9f4ba06c77c9df5553a0b7563d7c23f465c1319224f10ef1913ace4855af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
