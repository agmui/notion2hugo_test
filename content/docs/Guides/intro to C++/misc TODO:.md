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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PF4BNIF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDzYkK4V0Ogu4lc0aB%2FKNh0vPxTbKs7dXg9OYrCns%2Ba%2BgIhAMyaKmvStleUr5xIPAD8wOyN7HOvjnkYvZn22mHp0gVAKv8DCCcQABoMNjM3NDIzMTgzODA1IgwfdlKIDms0psE1Vj4q3ANLwXHnKLvEfAmSDETJiUALy%2Bv5TvHGKqthOM%2F6SpqGE%2FYSisTgYzZiIXA%2FDRu4oD8zBxpBfWETaDyelrT06a8Kqy47wz%2FPlgeAjfzQiAa0HqtHgFqT2XnOwqnGHkYRk5zcW2vMCJ8Y1m4v%2Bz7c6JrAUfd584smGsL8krmB5B1PC6bn%2Bmhtnx53gj94inmZI%2FhJSRcrNziXQL%2BUPYoOhKBgbMC2Ue7S%2BrpFqbsGhMgd3FAEhsV9iCYGnJtGAjHmMi3Dy8%2F9oZdUlIpOPCgmLyXLRABPXwQ%2BKbz07O%2B3NmpNA3PfJPMEFV6535h2vN8NOTNp%2FPGkSyN9Il3exEDD3nV10vGzEUCKWcG6uoPE3LqnkDoPQVVl3wif17%2BOVnSfrFzxnEs6kMBqblx1C4%2BqD9LCnk%2FpIkDkYZ%2Fsjm5rESzUMah1w6JDTgri6sPy6Qs%2FhKtQFNGiKDhkkkjkrlgRXliqMM7p8T94QaXCiAnXM9sbSnWoNaoMdR2y4EQnonn62MbNjSbGYhmwiJHOL5SlKACUVrcZY1%2F7oMQ%2FGsdYAMU5G%2FdZ2E8W2G%2BrxTzyXY1nXQ4342W%2FiZaK32QkOOY6FldLvF%2FziSZu%2FaVrpMjN%2FD%2Bh8I3keVesxzD7UEXVkDC0hJbBBjqkAZdvM%2BAxMZYMhtUi8aMSa21PlO9CjjB1WSATxXyz%2Ft9o8P8zrWcch3hR%2BuER6w7gAv975frE5mr1RVncFByOFp6YJ1pDPxzNtqneyeQtj%2FBMjkwt5q3QwBpEUhXUrCUiKcaEzntbgjkZRRpnyjigHYlJrqDOIhSNSpyDN%2BQOVMvev3vQLOz%2BpTA3v1Nmo65WF5KVbSljSMNNZ%2BSDCBLiDOZ4guKt&X-Amz-Signature=9acb746bcd0fd1e17f197889ea1950501cb2491ccbf80b996aff01d5d00db1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PF4BNIF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDzYkK4V0Ogu4lc0aB%2FKNh0vPxTbKs7dXg9OYrCns%2Ba%2BgIhAMyaKmvStleUr5xIPAD8wOyN7HOvjnkYvZn22mHp0gVAKv8DCCcQABoMNjM3NDIzMTgzODA1IgwfdlKIDms0psE1Vj4q3ANLwXHnKLvEfAmSDETJiUALy%2Bv5TvHGKqthOM%2F6SpqGE%2FYSisTgYzZiIXA%2FDRu4oD8zBxpBfWETaDyelrT06a8Kqy47wz%2FPlgeAjfzQiAa0HqtHgFqT2XnOwqnGHkYRk5zcW2vMCJ8Y1m4v%2Bz7c6JrAUfd584smGsL8krmB5B1PC6bn%2Bmhtnx53gj94inmZI%2FhJSRcrNziXQL%2BUPYoOhKBgbMC2Ue7S%2BrpFqbsGhMgd3FAEhsV9iCYGnJtGAjHmMi3Dy8%2F9oZdUlIpOPCgmLyXLRABPXwQ%2BKbz07O%2B3NmpNA3PfJPMEFV6535h2vN8NOTNp%2FPGkSyN9Il3exEDD3nV10vGzEUCKWcG6uoPE3LqnkDoPQVVl3wif17%2BOVnSfrFzxnEs6kMBqblx1C4%2BqD9LCnk%2FpIkDkYZ%2Fsjm5rESzUMah1w6JDTgri6sPy6Qs%2FhKtQFNGiKDhkkkjkrlgRXliqMM7p8T94QaXCiAnXM9sbSnWoNaoMdR2y4EQnonn62MbNjSbGYhmwiJHOL5SlKACUVrcZY1%2F7oMQ%2FGsdYAMU5G%2FdZ2E8W2G%2BrxTzyXY1nXQ4342W%2FiZaK32QkOOY6FldLvF%2FziSZu%2FaVrpMjN%2FD%2Bh8I3keVesxzD7UEXVkDC0hJbBBjqkAZdvM%2BAxMZYMhtUi8aMSa21PlO9CjjB1WSATxXyz%2Ft9o8P8zrWcch3hR%2BuER6w7gAv975frE5mr1RVncFByOFp6YJ1pDPxzNtqneyeQtj%2FBMjkwt5q3QwBpEUhXUrCUiKcaEzntbgjkZRRpnyjigHYlJrqDOIhSNSpyDN%2BQOVMvev3vQLOz%2BpTA3v1Nmo65WF5KVbSljSMNNZ%2BSDCBLiDOZ4guKt&X-Amz-Signature=2b517355c81a4a8838150379d56993b816cd2c1745eedadea2ce33318811e18a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
