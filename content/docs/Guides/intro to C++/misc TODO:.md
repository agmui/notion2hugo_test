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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3JTF6L5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDk8jHtuEBP1t2a8ImNPamBejoU0nSdVz0zccuMrJUBPAIhAP5IwNMVNkfxIHgxr3v2jNbZnoyqNE%2BQgVYVv5yDLPvxKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz81yJ98qx7tymyahoq3ANVbzGK5Z%2B8wBucJuRcz61tx4wyefbFoVq0aDPszsJ4UCSEquh6tvXiDP7cJT599QqIhQK1L1NiLPCPl%2B1uPD0xs0y9%2BXHCrU7N1rDurtugtCFHpEdELEuwHBee6zMyBROv1si%2Bv5qkDc%2F%2FfI8fJ5Ad%2BFTNGUu6EFJLtlYaTkNEwg%2FzuaLMCwmfQCU29FArD8KQDroutdTINUpKqJGt2CA09MSs5FWPUwy4xRHFoWZBIirxTw0lp3SJKI6o4uSIwH60XbwjO5POv0cKuyoHhX4%2BatHwvXkV9G%2BuUoFJHNKafcyGKOkL0rRk3s2MvETTmrGXJhHEeZfHxnYo44z63mDucFnT%2F2bN2dJKfEkj7zlDcFw5W7s6SrdWiDCHmLRn%2FGwI1QhZ%2FtyhGAB9lno8GRsXdRd6ofekmmi9BvpPUA1QvbEFoaugpO%2BYKQiyeBQBdL33bldDdmO2vDIRJtt5CjDapbbsQAuMyPIUxP6ZFLSOZpMckN41YlCHRtK%2BJ1%2BP05lBKtOVnB2iSDIR4tWhmQPPkFKv9s3uoBz210b0PUSXu1VE5lrf4VSNV830Efs2DcEC39fkNjAE88I9TdglyJXu%2BsRigzbvFDQgeYQwV%2F8i4Ho60lap6sk%2FZS91fTD6r9u%2FBjqkAQa%2B0H2LaqBE6idWaNSvt4nmLrb0fDLaoJi82hVHfZY%2BxoBOKh6t%2BdYmeNkmmXlhHsOn%2Bj8wQwT2UK2ipzMTgPhLbOfptX5YY12oFZxmbbIuFtG0UvYD8H8xa891E4SdQ7aokxbpTMtHJS35KWXSQ%2Fb2EeLD8MnOa95bzEJHjHHLNUXatDzRLvkxk%2FjhXg5E%2B9sLLn8H9nnuDKEJdnkLdJKUmR3u&X-Amz-Signature=1bad9dfa3106fe343d8c8a2f8cf510e12aac069287f1d5e96c9cc0018407567e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3JTF6L5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDk8jHtuEBP1t2a8ImNPamBejoU0nSdVz0zccuMrJUBPAIhAP5IwNMVNkfxIHgxr3v2jNbZnoyqNE%2BQgVYVv5yDLPvxKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz81yJ98qx7tymyahoq3ANVbzGK5Z%2B8wBucJuRcz61tx4wyefbFoVq0aDPszsJ4UCSEquh6tvXiDP7cJT599QqIhQK1L1NiLPCPl%2B1uPD0xs0y9%2BXHCrU7N1rDurtugtCFHpEdELEuwHBee6zMyBROv1si%2Bv5qkDc%2F%2FfI8fJ5Ad%2BFTNGUu6EFJLtlYaTkNEwg%2FzuaLMCwmfQCU29FArD8KQDroutdTINUpKqJGt2CA09MSs5FWPUwy4xRHFoWZBIirxTw0lp3SJKI6o4uSIwH60XbwjO5POv0cKuyoHhX4%2BatHwvXkV9G%2BuUoFJHNKafcyGKOkL0rRk3s2MvETTmrGXJhHEeZfHxnYo44z63mDucFnT%2F2bN2dJKfEkj7zlDcFw5W7s6SrdWiDCHmLRn%2FGwI1QhZ%2FtyhGAB9lno8GRsXdRd6ofekmmi9BvpPUA1QvbEFoaugpO%2BYKQiyeBQBdL33bldDdmO2vDIRJtt5CjDapbbsQAuMyPIUxP6ZFLSOZpMckN41YlCHRtK%2BJ1%2BP05lBKtOVnB2iSDIR4tWhmQPPkFKv9s3uoBz210b0PUSXu1VE5lrf4VSNV830Efs2DcEC39fkNjAE88I9TdglyJXu%2BsRigzbvFDQgeYQwV%2F8i4Ho60lap6sk%2FZS91fTD6r9u%2FBjqkAQa%2B0H2LaqBE6idWaNSvt4nmLrb0fDLaoJi82hVHfZY%2BxoBOKh6t%2BdYmeNkmmXlhHsOn%2Bj8wQwT2UK2ipzMTgPhLbOfptX5YY12oFZxmbbIuFtG0UvYD8H8xa891E4SdQ7aokxbpTMtHJS35KWXSQ%2Fb2EeLD8MnOa95bzEJHjHHLNUXatDzRLvkxk%2FjhXg5E%2B9sLLn8H9nnuDKEJdnkLdJKUmR3u&X-Amz-Signature=59fc1731dd894b3984f2835bd7cb5c81d300313038eee3099b5b825f02fe9434&X-Amz-SignedHeaders=host&x-id=GetObject)

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
