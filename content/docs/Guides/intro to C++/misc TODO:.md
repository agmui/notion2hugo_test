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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2TAY7W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICkXw%2BrOhcB6waZ6ZMxb89jXdZP7gFnmwry3aVT7pkLtAiEAvzVg96uSgz9Q29Nk9V1TRgfckOe1hSKKRcjS7OlDeKIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM5oMa6HboK35d8zyrcA3g1dUNQWKsfUyuMp1%2BkFuj6qZaBZkC053wlFoUXBWJcbd1qphoYqiDJ3Txpf2%2Fcdy7z%2FpZeUkjruJjfbX6KsxCv3GiuPcnugg603y5r9h2ybWSdUUL2%2BB8IcHZf5J77O5AIpVFR4dTikPYdG4pW3ZCi3tIMTnhMbLkQxm1LVl8FYhtGSkbyPjaxos5bZgF46hT3uSRo1Tx%2B5IR3LWVXuyV5BCw8y6Z2khOXkM8e2OcKRVWGAgq7TTfMu15V8YMGBGZEZPU0KOEdljMtGF1As6rRTa216s92z%2FaTeaG%2FZDprD3wnJa0Y00UdgL3YlvBGhhmRXJZjnm3PX12%2FQad9LZzuSD2lEwMyGqb2r9cJp%2FqfwuX%2BXD5OUJCIDoXULL1xSwLVXcdRr6%2BZav%2B79ZVQTtBoqh6csTI26FD2JhnfCxIe45GfvTcS6RpBO2ALwKAz%2BXBmieOJIwIpqgevC%2B6XCuvizgn1sZVw%2F0RVhM03hmBX3gEedwQW3SIaTY5O2iBfhS%2FVrxEdyE6oZfLPCwb2EapcXSdqQo73ROljRmpY2ik5l7r8s34s3A6b8xfaLIa8pMuOr5eiw7bPnVmdocDQJZG7n2yTQu6R6%2BI1JTve5X0YqUQ4FHwZep2UAA99MPqrz8AGOqUBN%2BKzzku83xcSMNH%2FrdQf1UDP2FefS3sZtMegwt6BIh%2BNGIkef%2FnRJl69y3%2FMx8ZtwWYvfRbLa6akd83MtLQExa1YBH18W7TLfUqZrk6A8YYIyL63S0Qn2hZxQqv8zNIpMuZJmir9nZwSsg6soOhVxQxEfdyyjILozdHIyEv0JpBUH9Vg0K11YWmYDTtmOMrpQvcUapYrH%2B4pdsoFPvIBdT%2Fu8R81&X-Amz-Signature=a09e68ef26bff752e9f844927c847e6b963faf77c207e1e2e8c604ee7f078df3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2TAY7W%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICkXw%2BrOhcB6waZ6ZMxb89jXdZP7gFnmwry3aVT7pkLtAiEAvzVg96uSgz9Q29Nk9V1TRgfckOe1hSKKRcjS7OlDeKIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM5oMa6HboK35d8zyrcA3g1dUNQWKsfUyuMp1%2BkFuj6qZaBZkC053wlFoUXBWJcbd1qphoYqiDJ3Txpf2%2Fcdy7z%2FpZeUkjruJjfbX6KsxCv3GiuPcnugg603y5r9h2ybWSdUUL2%2BB8IcHZf5J77O5AIpVFR4dTikPYdG4pW3ZCi3tIMTnhMbLkQxm1LVl8FYhtGSkbyPjaxos5bZgF46hT3uSRo1Tx%2B5IR3LWVXuyV5BCw8y6Z2khOXkM8e2OcKRVWGAgq7TTfMu15V8YMGBGZEZPU0KOEdljMtGF1As6rRTa216s92z%2FaTeaG%2FZDprD3wnJa0Y00UdgL3YlvBGhhmRXJZjnm3PX12%2FQad9LZzuSD2lEwMyGqb2r9cJp%2FqfwuX%2BXD5OUJCIDoXULL1xSwLVXcdRr6%2BZav%2B79ZVQTtBoqh6csTI26FD2JhnfCxIe45GfvTcS6RpBO2ALwKAz%2BXBmieOJIwIpqgevC%2B6XCuvizgn1sZVw%2F0RVhM03hmBX3gEedwQW3SIaTY5O2iBfhS%2FVrxEdyE6oZfLPCwb2EapcXSdqQo73ROljRmpY2ik5l7r8s34s3A6b8xfaLIa8pMuOr5eiw7bPnVmdocDQJZG7n2yTQu6R6%2BI1JTve5X0YqUQ4FHwZep2UAA99MPqrz8AGOqUBN%2BKzzku83xcSMNH%2FrdQf1UDP2FefS3sZtMegwt6BIh%2BNGIkef%2FnRJl69y3%2FMx8ZtwWYvfRbLa6akd83MtLQExa1YBH18W7TLfUqZrk6A8YYIyL63S0Qn2hZxQqv8zNIpMuZJmir9nZwSsg6soOhVxQxEfdyyjILozdHIyEv0JpBUH9Vg0K11YWmYDTtmOMrpQvcUapYrH%2B4pdsoFPvIBdT%2Fu8R81&X-Amz-Signature=7851f4595db248a86496c61b2b06ef03a071084bb5ed4a1ee1248bcbcd8c4496&X-Amz-SignedHeaders=host&x-id=GetObject)

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
