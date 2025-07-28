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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3W3ZUN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGOsXgPx4sE%2B9ykMEH5s7O9SpYNCzmYvQ8FgD%2BClYu60AiEA1JWOCYWLPUwAYhNNR%2BPcvIicdGjWFKw4BpAPdvOIkpEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHah2t4ngwWmmpFu%2FCrcAy27sKypzDDbPeCs7%2BYuDtH4A1OacFrd9QzGYMgr9%2B8lvl1A2eEtQ1gS090jYPRhrxkve6oUL9t7IL6kYKTIqqgyUjWTsN6Vrdi%2B8cOaOlSnFp7J4FkQ98tyMdH1AEt0R5lfEOqIjuqT6Bgkc1c2VGbb8bfq4zBdAQSUtDmNaJ7lRTJg1kIhEa4TNd1%2BJiFexTHjbtC6%2F2fbU73X0EgsDtuCAY6bTUgxx%2FbT0vf%2BJ5KFy9HlYCj%2ByHrRtT5AYT%2FB0fDqAQAiYV%2FgCaH%2B2jYnt91WBBCK%2B8LG9i22D07IWHk9TCbMsRAfaSiUVjLV7qmHKe%2BhtKp63FCtYhwsIwIpJ3MJ7AqaFJn2jH97vPTSTKWuw%2F6bdg1piTOU9Daig0KLCKXIo8sO4HpsOmXeoA2QIRO7jLFycLhInuKxTiXcKHlHSotfOCdhAojcX60XO9mqbmq%2BI15gzaenvuaHuzwN10v6oSxbh7tWVCTCxMNDLAn3N%2FvUwLbatWMn7zKeoo3s2Vzc3RsU64Vu5RA2VOggVyqosB5zM9HREGytdj5ijfzbW60U54BV98%2BfYJdSjMoFLBOK5aEahuec%2BiL9wZTt1dVIzG9DXB5Q7%2BrzVojOAGxtcoS4WG6ztZQD%2FrB2MPOKn8QGOqUBaxVz8IvBri80eg5mOXkAAQ9M0v8oUM%2BBBmmD0819vnxGEJX6K1%2FGDVHe5%2BvhlZryIY8iSdwAoo51woc2DuBwZFFC%2FsuVh5MWfNqVDJO5TXM%2F3D%2FSOXbZuoc52cVW3X2BHu%2F8UZ%2FPdBvC7E4ApzHAbz5jRD5qJa1%2B1wb0hHHwd01Eg4WGm4AgUu3lDzgAuLrwj13HEP79d0Y7M%2BtRvjvUa6NYYhdd&X-Amz-Signature=8b726df769759ca3dc0f8251ed83b46b3319b9628168316010976781c862dfc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3W3ZUN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGOsXgPx4sE%2B9ykMEH5s7O9SpYNCzmYvQ8FgD%2BClYu60AiEA1JWOCYWLPUwAYhNNR%2BPcvIicdGjWFKw4BpAPdvOIkpEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHah2t4ngwWmmpFu%2FCrcAy27sKypzDDbPeCs7%2BYuDtH4A1OacFrd9QzGYMgr9%2B8lvl1A2eEtQ1gS090jYPRhrxkve6oUL9t7IL6kYKTIqqgyUjWTsN6Vrdi%2B8cOaOlSnFp7J4FkQ98tyMdH1AEt0R5lfEOqIjuqT6Bgkc1c2VGbb8bfq4zBdAQSUtDmNaJ7lRTJg1kIhEa4TNd1%2BJiFexTHjbtC6%2F2fbU73X0EgsDtuCAY6bTUgxx%2FbT0vf%2BJ5KFy9HlYCj%2ByHrRtT5AYT%2FB0fDqAQAiYV%2FgCaH%2B2jYnt91WBBCK%2B8LG9i22D07IWHk9TCbMsRAfaSiUVjLV7qmHKe%2BhtKp63FCtYhwsIwIpJ3MJ7AqaFJn2jH97vPTSTKWuw%2F6bdg1piTOU9Daig0KLCKXIo8sO4HpsOmXeoA2QIRO7jLFycLhInuKxTiXcKHlHSotfOCdhAojcX60XO9mqbmq%2BI15gzaenvuaHuzwN10v6oSxbh7tWVCTCxMNDLAn3N%2FvUwLbatWMn7zKeoo3s2Vzc3RsU64Vu5RA2VOggVyqosB5zM9HREGytdj5ijfzbW60U54BV98%2BfYJdSjMoFLBOK5aEahuec%2BiL9wZTt1dVIzG9DXB5Q7%2BrzVojOAGxtcoS4WG6ztZQD%2FrB2MPOKn8QGOqUBaxVz8IvBri80eg5mOXkAAQ9M0v8oUM%2BBBmmD0819vnxGEJX6K1%2FGDVHe5%2BvhlZryIY8iSdwAoo51woc2DuBwZFFC%2FsuVh5MWfNqVDJO5TXM%2F3D%2FSOXbZuoc52cVW3X2BHu%2F8UZ%2FPdBvC7E4ApzHAbz5jRD5qJa1%2B1wb0hHHwd01Eg4WGm4AgUu3lDzgAuLrwj13HEP79d0Y7M%2BtRvjvUa6NYYhdd&X-Amz-Signature=c19c6cfbad769b3b2aefc00b8e861b8b107cfd0ea572927cadc1c43d64ca7166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
