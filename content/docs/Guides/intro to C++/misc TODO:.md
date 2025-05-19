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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYCHC5L4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyQwZfOhaH0RyK3wkdxA0%2FIZq0IHKPKO5EqEngPYmNwIhAP5LrqdS81kEzCULyTjMldoZfCmu4kLwesFjTydYHNaWKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ6ygsCgIzLFUuMuMq3ANdpPt1uNo8r8AM19nQOjGqYYL30ojyg370m6rmueXG8Bl7c0DnfO6nO7xwkyoApOBQNLjBC5UgbTE52F%2F%2BAxG7ixrwqYMgdNH9D%2Bw8K8ZZv6jX7KvXIO0IFx5wZWvRBga5JKjHqlGm4RilCis%2BccL1%2BiCJaC9otdb2FmhLKK2nRyGME6icoozeZA5HqbICtUVv%2BzYom%2BxCqCTBZsFhLgsVpP%2F%2FD%2Fk1Ci4h%2Bwr2pef0rcTpRNS%2FQ%2F9KODb06ZWU3YD1zmvRu3OvuLyTELHzSizp4kvKFlYs8WuUlNzl8Lhl5NX0QgiCPVsqYisZOPxi3%2F7LmRRf8%2BekJW8%2B6a2PCakP4Qt%2BEgPrEL%2B1p2sh0fYaWZ83GMzT%2F0fDcMv5E7R41EKeBZ0LZV9w5f%2F%2FcPICdvEclQx%2F8UUkJ6mWhejR2VQK3SvJQ9vePth1lOINmuhfa%2FfMzWlBCdHpkr1CS%2FLcVg8YIRAN7AMj44P%2F7VQk1OjCilW0V4hfLyvnCWEJbM3AqgqvE5XWPN1w3bjYGLQ9%2Fzd%2Fubahf9JTS9wIXf54P2kIiNEzBe%2BTD0H6DTNLQRA4mlUrVDyBcp0Dp9kk1wSPXLEyDdonwIlBCNGnJGYG4J5JHKdsIT16tV5SYcNLkDD9367BBjqkARQcaBeqq9QP%2BgcKTjfD1WYiLqSRg%2Feskpi65%2FU%2B5pHA%2FnF9Nl51erxQF53nQFqUxu40oIMOB8Td7IB47CeyE5ny%2F5lbN7oswhXCqA6sJv5nh6TjRYsfmKpLYGbBZOSRi%2FkdT0jzGfbbOGtkT0Ugo%2FlIJCbBv8eyG7ecI4g0fsRLKXL0200m3d3JkL%2B11hsvJXlGX3RcS3uRgDBwjF4W7fGMen%2F1&X-Amz-Signature=4a77721017703366be4b203746b56ae4d702b519c24f809ac3369bb5df46ece9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYCHC5L4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMyQwZfOhaH0RyK3wkdxA0%2FIZq0IHKPKO5EqEngPYmNwIhAP5LrqdS81kEzCULyTjMldoZfCmu4kLwesFjTydYHNaWKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ6ygsCgIzLFUuMuMq3ANdpPt1uNo8r8AM19nQOjGqYYL30ojyg370m6rmueXG8Bl7c0DnfO6nO7xwkyoApOBQNLjBC5UgbTE52F%2F%2BAxG7ixrwqYMgdNH9D%2Bw8K8ZZv6jX7KvXIO0IFx5wZWvRBga5JKjHqlGm4RilCis%2BccL1%2BiCJaC9otdb2FmhLKK2nRyGME6icoozeZA5HqbICtUVv%2BzYom%2BxCqCTBZsFhLgsVpP%2F%2FD%2Fk1Ci4h%2Bwr2pef0rcTpRNS%2FQ%2F9KODb06ZWU3YD1zmvRu3OvuLyTELHzSizp4kvKFlYs8WuUlNzl8Lhl5NX0QgiCPVsqYisZOPxi3%2F7LmRRf8%2BekJW8%2B6a2PCakP4Qt%2BEgPrEL%2B1p2sh0fYaWZ83GMzT%2F0fDcMv5E7R41EKeBZ0LZV9w5f%2F%2FcPICdvEclQx%2F8UUkJ6mWhejR2VQK3SvJQ9vePth1lOINmuhfa%2FfMzWlBCdHpkr1CS%2FLcVg8YIRAN7AMj44P%2F7VQk1OjCilW0V4hfLyvnCWEJbM3AqgqvE5XWPN1w3bjYGLQ9%2Fzd%2Fubahf9JTS9wIXf54P2kIiNEzBe%2BTD0H6DTNLQRA4mlUrVDyBcp0Dp9kk1wSPXLEyDdonwIlBCNGnJGYG4J5JHKdsIT16tV5SYcNLkDD9367BBjqkARQcaBeqq9QP%2BgcKTjfD1WYiLqSRg%2Feskpi65%2FU%2B5pHA%2FnF9Nl51erxQF53nQFqUxu40oIMOB8Td7IB47CeyE5ny%2F5lbN7oswhXCqA6sJv5nh6TjRYsfmKpLYGbBZOSRi%2FkdT0jzGfbbOGtkT0Ugo%2FlIJCbBv8eyG7ecI4g0fsRLKXL0200m3d3JkL%2B11hsvJXlGX3RcS3uRgDBwjF4W7fGMen%2F1&X-Amz-Signature=34c36cc7018663b341ac2e977df7bc62e71152079a290211bfbc463b5611e077&X-Amz-SignedHeaders=host&x-id=GetObject)

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
