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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3LIRRL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB3bW%2BOmxnNmqq7bvOoY3gVPm%2By8Q24%2BjrDYwzJmarWeAiArvrIKJAFsmJgpDNA4ViN6Ws%2Fn2pg610WLt8spltOn3CqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJfZfQpfaNzlTJQJKtwDWYCT9z5NzIQZ%2Bw3GoaAr%2FOgOLW8%2BphEFrpX3gyl4I3CCCDePgsjXlj4DHXSO13CJR9681t1LoLHrzQBfiXsNrjPxboFFQEvUPA6KzH3IINoBm31AcQfLgfLqwg9XFqrtTH1OVXl9jSe5eyakhT5dyQF26RYxrLprs3t6xUT0b1eN6JeEUhtH7r7y35BKUR3C2h1fSYWHhc30yCn9CUGhZRlGiutX9anDqohxcQ3bN94M7baMI4tiuqnzas%2F9j1BFmZV28kpX51I7g1HiRPoewBoTYC8mQkomOH8YP29LdxhkVWnh7GoCBNhPDVizPE4pTOR537fuaF3nuwMw4knYqsxlm5jPNkhZNnlOrG5wofqscFxYSc8FcvRS7MA4aUclchlxlFPXr26pWsIS94LjMVgfZaXmTrIr%2F82PcIhzQZkppjSmUek8NprF9HZ1znMSvBDK4JwQoopspdssVs3kDalFFO7A488UnSnv0Gc3%2BUP%2FnPy22xblvCKShD6kzMgz7iTVHY1wUJU9%2BbHfUwT7K1iZxz7JGEBtT97sDhQaNfXJgr5FO5e0NV1X0TKE4TXxO%2F%2FBhakbkUCNGXHyAKNIqcJkSBrgBfbarffMaowDkwJHxtNXB9Z5AGL5%2FREw4%2Bz%2BwAY6pgEYTK3kKl5QhrGg0daVfFioVUC7repfF%2BymS5jFnx1z2ywbx%2Fd6%2FWl3uqGRGbC59TDbwgIU4EZ1hwobU9Sa1qr5AbdaT2FAbbGY1ueo39YTeBG1MiYsYJd%2FVLlgkcsnqdZE6w9BUMigNrS2u8HQiUeM9shFQYZ8Pm05YSVpTie8ZrdEUKbXtcgrG3FqxOjnfItllBnN%2BPZgyyIlLXB1AQo%2FKnx3vcii&X-Amz-Signature=104c0b8592fd4ffc1ba725e94590fe9332b142f4e16705e7603e2bf867600acc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3LIRRL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB3bW%2BOmxnNmqq7bvOoY3gVPm%2By8Q24%2BjrDYwzJmarWeAiArvrIKJAFsmJgpDNA4ViN6Ws%2Fn2pg610WLt8spltOn3CqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJfZfQpfaNzlTJQJKtwDWYCT9z5NzIQZ%2Bw3GoaAr%2FOgOLW8%2BphEFrpX3gyl4I3CCCDePgsjXlj4DHXSO13CJR9681t1LoLHrzQBfiXsNrjPxboFFQEvUPA6KzH3IINoBm31AcQfLgfLqwg9XFqrtTH1OVXl9jSe5eyakhT5dyQF26RYxrLprs3t6xUT0b1eN6JeEUhtH7r7y35BKUR3C2h1fSYWHhc30yCn9CUGhZRlGiutX9anDqohxcQ3bN94M7baMI4tiuqnzas%2F9j1BFmZV28kpX51I7g1HiRPoewBoTYC8mQkomOH8YP29LdxhkVWnh7GoCBNhPDVizPE4pTOR537fuaF3nuwMw4knYqsxlm5jPNkhZNnlOrG5wofqscFxYSc8FcvRS7MA4aUclchlxlFPXr26pWsIS94LjMVgfZaXmTrIr%2F82PcIhzQZkppjSmUek8NprF9HZ1znMSvBDK4JwQoopspdssVs3kDalFFO7A488UnSnv0Gc3%2BUP%2FnPy22xblvCKShD6kzMgz7iTVHY1wUJU9%2BbHfUwT7K1iZxz7JGEBtT97sDhQaNfXJgr5FO5e0NV1X0TKE4TXxO%2F%2FBhakbkUCNGXHyAKNIqcJkSBrgBfbarffMaowDkwJHxtNXB9Z5AGL5%2FREw4%2Bz%2BwAY6pgEYTK3kKl5QhrGg0daVfFioVUC7repfF%2BymS5jFnx1z2ywbx%2Fd6%2FWl3uqGRGbC59TDbwgIU4EZ1hwobU9Sa1qr5AbdaT2FAbbGY1ueo39YTeBG1MiYsYJd%2FVLlgkcsnqdZE6w9BUMigNrS2u8HQiUeM9shFQYZ8Pm05YSVpTie8ZrdEUKbXtcgrG3FqxOjnfItllBnN%2BPZgyyIlLXB1AQo%2FKnx3vcii&X-Amz-Signature=6f8788e5fe8988b6d2aec918996c541a9b9d3f4a3ba5324697259202e4bd06fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
