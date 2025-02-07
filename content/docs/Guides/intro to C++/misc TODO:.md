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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCDMNF4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCGElN27WQ1pAIByxwL%2BE4yudVn6tgydYp5HAzBWpLWdQIhAMTOKayU%2BQ4k0IvWzZMNbLc%2BzmbBJdFQcvDLGIJVgSBRKv8DCHEQABoMNjM3NDIzMTgzODA1IgxGSvxEete4DF%2FAfhkq3APAZdlWMZK%2BOgr%2Bo4hxWJ%2BgfR4jLCgxHBghQO6cY%2F5FvS%2B4wcHUoS%2FYj7eoPzBmtg9bRvMTzmT7jEuhx7NojAvVN1Y3wWfFJ7W6JWpuFx5BrEOI67fUCWKoPXZqJddAgUbujtna3Q35a7cyFpTw1u%2F37tom2Zpo7BKwZuWZ9JvKvIg9Qp46ckNDM9I%2Blhjqmv4j%2Bip65mTMwviZLdKLi5IE84t5Mz3x29eJ%2BFSZb798bHuPzEJkA4eNXQ30bsiwDVB%2BZuup4GGgYmaU817%2BKFsIZaAwlYjb1DocddsDMiLYanZONRiV0aIP%2BkRXNFMscXOEgt98RfX2kAn%2B3fGRwe6gyu0PzkQFlmgHo0Bi6i8zzvbfStoZbmJ9MrYi8OocRA%2BMSdri6Rczn34CpZAALp21bXJd5%2FpswP2vs7%2B4yL2563BdcbVbswufjpIqI0TYbtQfPYrqkIoH4rdEE1VL8JpAr5AwMWFaJKXpO3p6FcNr6%2BOiHXYZ6Yd1WXk%2FeOYdvi48G0P%2BybIyOr8f7Eq0A3g0Kph5%2FeQ6hndGypfVlWvG1k0m7vKyFCvaUXHMBtPxM%2BCprsoIyQDe3eJJ0YEHZnOo9h8YKirbs3%2FJX6IqNIufv7CciPWBXHy64HKhpDCX%2B5a9BjqkAcfI0NL%2ByS83NIXc%2FN2Vi23bkSekSc69tcWMeAlnw0Bj1SVS8V82LbzYqJBwMAoOeM4I3iZ7ImUdXekq55lxCCBZncCUnarZHzBKjOQC89%2F1LwCThNtodO11piQDwbxlU5flAffJmstasgDNSceFeI7tEq%2B4zhlkxzeXGRWIgXqR9yJrsEm1wpAV31oowtm9NFGZCsyZDddp7hRlYEz89vx4dy%2Fa&X-Amz-Signature=65595c489368e85f55d5219e25130b6fb8607078c0aec035067aa67ee7cc949c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCDMNF4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCGElN27WQ1pAIByxwL%2BE4yudVn6tgydYp5HAzBWpLWdQIhAMTOKayU%2BQ4k0IvWzZMNbLc%2BzmbBJdFQcvDLGIJVgSBRKv8DCHEQABoMNjM3NDIzMTgzODA1IgxGSvxEete4DF%2FAfhkq3APAZdlWMZK%2BOgr%2Bo4hxWJ%2BgfR4jLCgxHBghQO6cY%2F5FvS%2B4wcHUoS%2FYj7eoPzBmtg9bRvMTzmT7jEuhx7NojAvVN1Y3wWfFJ7W6JWpuFx5BrEOI67fUCWKoPXZqJddAgUbujtna3Q35a7cyFpTw1u%2F37tom2Zpo7BKwZuWZ9JvKvIg9Qp46ckNDM9I%2Blhjqmv4j%2Bip65mTMwviZLdKLi5IE84t5Mz3x29eJ%2BFSZb798bHuPzEJkA4eNXQ30bsiwDVB%2BZuup4GGgYmaU817%2BKFsIZaAwlYjb1DocddsDMiLYanZONRiV0aIP%2BkRXNFMscXOEgt98RfX2kAn%2B3fGRwe6gyu0PzkQFlmgHo0Bi6i8zzvbfStoZbmJ9MrYi8OocRA%2BMSdri6Rczn34CpZAALp21bXJd5%2FpswP2vs7%2B4yL2563BdcbVbswufjpIqI0TYbtQfPYrqkIoH4rdEE1VL8JpAr5AwMWFaJKXpO3p6FcNr6%2BOiHXYZ6Yd1WXk%2FeOYdvi48G0P%2BybIyOr8f7Eq0A3g0Kph5%2FeQ6hndGypfVlWvG1k0m7vKyFCvaUXHMBtPxM%2BCprsoIyQDe3eJJ0YEHZnOo9h8YKirbs3%2FJX6IqNIufv7CciPWBXHy64HKhpDCX%2B5a9BjqkAcfI0NL%2ByS83NIXc%2FN2Vi23bkSekSc69tcWMeAlnw0Bj1SVS8V82LbzYqJBwMAoOeM4I3iZ7ImUdXekq55lxCCBZncCUnarZHzBKjOQC89%2F1LwCThNtodO11piQDwbxlU5flAffJmstasgDNSceFeI7tEq%2B4zhlkxzeXGRWIgXqR9yJrsEm1wpAV31oowtm9NFGZCsyZDddp7hRlYEz89vx4dy%2Fa&X-Amz-Signature=aac7aaec60885cadce6b06f5093275f34d631fba5282d063360dd46900c56d11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
