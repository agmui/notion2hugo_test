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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFZI4KJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCCvoMP2DsTDDe%2B2P4j%2B5j9%2BZul6ikWEvlflZy2UZZjwAIgPH5ukrobxlBjFdAxV779ETHzAuB1ipNi1X%2FN63pk3jYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEhdW72HQpswGYuj3yrcA2aBv1hffbC%2FCAQ2OiLbTR330H1X9seTGrjQOIR6%2FhctVFS9bLSDQPTcl5bKHnI19%2BtwzIAuoIfyiId%2FIsJZBxmxxGnfuP8B8YIYeRgeU2tNPKrNtQGDoRq4ezUSE%2BFc%2Fq1v3iXolMMtJWZphhjSGs1R9hE8vciXu9Z3ldErheyw0nsIk4nwVsNo08PS73eWvC33BYrevaUeZV5XJDStr08cjfkZDwBClxnb0HxLVZFmjiSxEdaxRUtJJjCS%2BW4gzRV8fUh6p5xR7naG5qWVQWWhUE9XDShtFzUBHV7wAP4pRpeZza6yVOJtS%2FKvm7kGGSGxJBR9QEAXCjtjg9KY1sXvzmO9n3IPAH%2Fg12c4LW6a108YatTLN8ZJv8g5pShZzjmwWw2xfwWeTUlembPN9YcuArBJz0Y0tZI3BmYjBf%2FgrRZMtTrGsQ1odW9fjvPFfxZX8U2YWcOj9LhDV5U9P08oYJZH6cU6Gu08YegnrLqxh%2FL3VFekI3ZK4Q7ywlRZxVZRcBzDkoGjZftlJr9ZYS836ZfDy9dvwdDxG6T2SPAtLly0UahrZJzKejBTHb%2BxbZhA52xYOenVzAsZMmV37jutmpwo8oYLJd5H8FjzGGo%2FYWqoN%2FCCbYkiSA%2B3MOW6lsQGOqUBPSuMN5SLF2FW8TGj7eIWhYrXovVPCQYS8cCw4W29u8%2BHezjX%2FAq6oQ7WjOSvsRawpDMgGtJ8BFyl%2FikyfrhrTkRF3t49%2BhdRGAyeLBJUO57HKVSz97l6QtkiZctUdd0QAH2S9DTVEzov8cl7A2P3NuLwpvXsCFuahlVLybP6j2%2ByCAh%2BZmxk500wH8w7K136AK9ZVhvJMonr2VXAHsbIzJU%2BMKrx&X-Amz-Signature=4cae7462e72cc17ae46f70cbe504a44fd36d74bdae1cc02601a2f58c0020911b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFZI4KJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCCvoMP2DsTDDe%2B2P4j%2B5j9%2BZul6ikWEvlflZy2UZZjwAIgPH5ukrobxlBjFdAxV779ETHzAuB1ipNi1X%2FN63pk3jYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEhdW72HQpswGYuj3yrcA2aBv1hffbC%2FCAQ2OiLbTR330H1X9seTGrjQOIR6%2FhctVFS9bLSDQPTcl5bKHnI19%2BtwzIAuoIfyiId%2FIsJZBxmxxGnfuP8B8YIYeRgeU2tNPKrNtQGDoRq4ezUSE%2BFc%2Fq1v3iXolMMtJWZphhjSGs1R9hE8vciXu9Z3ldErheyw0nsIk4nwVsNo08PS73eWvC33BYrevaUeZV5XJDStr08cjfkZDwBClxnb0HxLVZFmjiSxEdaxRUtJJjCS%2BW4gzRV8fUh6p5xR7naG5qWVQWWhUE9XDShtFzUBHV7wAP4pRpeZza6yVOJtS%2FKvm7kGGSGxJBR9QEAXCjtjg9KY1sXvzmO9n3IPAH%2Fg12c4LW6a108YatTLN8ZJv8g5pShZzjmwWw2xfwWeTUlembPN9YcuArBJz0Y0tZI3BmYjBf%2FgrRZMtTrGsQ1odW9fjvPFfxZX8U2YWcOj9LhDV5U9P08oYJZH6cU6Gu08YegnrLqxh%2FL3VFekI3ZK4Q7ywlRZxVZRcBzDkoGjZftlJr9ZYS836ZfDy9dvwdDxG6T2SPAtLly0UahrZJzKejBTHb%2BxbZhA52xYOenVzAsZMmV37jutmpwo8oYLJd5H8FjzGGo%2FYWqoN%2FCCbYkiSA%2B3MOW6lsQGOqUBPSuMN5SLF2FW8TGj7eIWhYrXovVPCQYS8cCw4W29u8%2BHezjX%2FAq6oQ7WjOSvsRawpDMgGtJ8BFyl%2FikyfrhrTkRF3t49%2BhdRGAyeLBJUO57HKVSz97l6QtkiZctUdd0QAH2S9DTVEzov8cl7A2P3NuLwpvXsCFuahlVLybP6j2%2ByCAh%2BZmxk500wH8w7K136AK9ZVhvJMonr2VXAHsbIzJU%2BMKrx&X-Amz-Signature=ca0b9e965f7b6e1ddbb4547167b58fb47f95d06b91f7001f6d1de2941fdacd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
