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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJY7Y5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp4w7Sff4DoxFWqh%2FbeNGDvTw4PIe%2F57LuWI6wLypwKAiBd18OtLGitDmWycSEFkuwcl4d1RIpXXswmnS3omN%2FyDyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV4fiEUHVxYBA8CoXKtwD%2ByLZsAe3%2FCSf4EPw0n8Oa9xZVjclleqWJn0PllC093nx2lSfpgC7JKqYVScQmNLrfSJN48kDmrHfq8R0Aqd42f3hUaDDIWva4n9lBbiiGaHIqN7U72o86SSWGV2%2BgY8F3kUvXAa4F5wUfNRHYwCWAqmcA0Mh3ruY51onVAXQufSq57cnADKqNVEKA1%2FddifePK%2BH4qQIYD0SZMaW4poYjEjQYm%2Fr2BdEb%2B9048qQgkty6wtZHBf6n%2B03JD96G73V8DUZhZ%2F4NUqm3yf37wGw4vWY5mg6tjWJPYaQKPiZ0TmVqcK5NhlR6UY8dbBsKlylDwv8iCG7YTrkTYZUV4DX4FyVVbQ%2BAPq%2BJIeQ90d48B61auATaKm8GJ0NLHEDTWE%2BvDBHWc3uSG8wFgqBAzkwy2rg3CDvK%2B7ZqhOImK6jXmhWfVjuEfh11E6nJLVFw7CEvQqn%2Fs3pEqLJECOailpBv9ryUmMjAq1eChLm5MEYzTlxD7z4joFVuCceQ9mpp9XAV4jfoQdzPTkGvqq9ipq%2FwTcQ09RrYbU9c5OhpNzvXBCivU%2Fq5AspRzSn3x3H4g3uaDFKfySs%2BJn%2B1s9wEMxBb7JxYtu%2FdIFwjc3JZKT7aSyfdowbLx56KejEydcw1oLkwQY6pgGBXywIcHp9L1mVyVcDAMNCWMgK8GMjdi4O6ln2DbadrHUjvoI223zUsOIhHdJ57Gv8FJ73%2FKkrmTIg8xWc31a%2Fg8ABSDG2PhycXDGb%2FJFrPRbC%2FOb4SCs2C3gIy3REUWgULf%2BdSOygv5778YJsjmJDR8pXC%2FqoiDx7pX0pdWAOlu6AW0N7Clj%2FIcIwxU%2Fp%2FJebzpxP6rd1Udt4qKgB1ShNQURzK6St&X-Amz-Signature=bec3110bd46413172ade00a8f944fe8a789ebb7d548e7be0187995bf587cf7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJY7Y5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp4w7Sff4DoxFWqh%2FbeNGDvTw4PIe%2F57LuWI6wLypwKAiBd18OtLGitDmWycSEFkuwcl4d1RIpXXswmnS3omN%2FyDyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV4fiEUHVxYBA8CoXKtwD%2ByLZsAe3%2FCSf4EPw0n8Oa9xZVjclleqWJn0PllC093nx2lSfpgC7JKqYVScQmNLrfSJN48kDmrHfq8R0Aqd42f3hUaDDIWva4n9lBbiiGaHIqN7U72o86SSWGV2%2BgY8F3kUvXAa4F5wUfNRHYwCWAqmcA0Mh3ruY51onVAXQufSq57cnADKqNVEKA1%2FddifePK%2BH4qQIYD0SZMaW4poYjEjQYm%2Fr2BdEb%2B9048qQgkty6wtZHBf6n%2B03JD96G73V8DUZhZ%2F4NUqm3yf37wGw4vWY5mg6tjWJPYaQKPiZ0TmVqcK5NhlR6UY8dbBsKlylDwv8iCG7YTrkTYZUV4DX4FyVVbQ%2BAPq%2BJIeQ90d48B61auATaKm8GJ0NLHEDTWE%2BvDBHWc3uSG8wFgqBAzkwy2rg3CDvK%2B7ZqhOImK6jXmhWfVjuEfh11E6nJLVFw7CEvQqn%2Fs3pEqLJECOailpBv9ryUmMjAq1eChLm5MEYzTlxD7z4joFVuCceQ9mpp9XAV4jfoQdzPTkGvqq9ipq%2FwTcQ09RrYbU9c5OhpNzvXBCivU%2Fq5AspRzSn3x3H4g3uaDFKfySs%2BJn%2B1s9wEMxBb7JxYtu%2FdIFwjc3JZKT7aSyfdowbLx56KejEydcw1oLkwQY6pgGBXywIcHp9L1mVyVcDAMNCWMgK8GMjdi4O6ln2DbadrHUjvoI223zUsOIhHdJ57Gv8FJ73%2FKkrmTIg8xWc31a%2Fg8ABSDG2PhycXDGb%2FJFrPRbC%2FOb4SCs2C3gIy3REUWgULf%2BdSOygv5778YJsjmJDR8pXC%2FqoiDx7pX0pdWAOlu6AW0N7Clj%2FIcIwxU%2Fp%2FJebzpxP6rd1Udt4qKgB1ShNQURzK6St&X-Amz-Signature=0b220a993dafb9fefcae5419959f0ba9c780f9119492f2547d7d9ae90facd5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
