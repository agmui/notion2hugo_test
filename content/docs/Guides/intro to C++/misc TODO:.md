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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KO7TCFK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8lKjCfteDHf%2BG72rIACuOnRJUUjtnWWK4wP%2F6UsounAiB3YkR6wjslSHocMbuzDhqmjyyRyqkxAuNpSfhXgqgaUSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMshbQxzg%2BLQOqFf0MKtwDl0qEDTwg34VpTF4ZBnabOnnhvNuq0eXzHYcoPLKRR6B%2BdAhBv%2FsStgne9yabrS9wycfx2ZNEkfENUQwW6vSMgeMj4TaG6A2tL5Z8ZfQwWNfkU%2BmBjZULVwuza2c96hCZ4VuKwdGS46sVIkVRjIb5aCa2OW0trMdYqfAaktmzbBdPokz9UPqqjUXadWp2iqz3UkPuoguhNISoSoyq7iEbDVvBve%2FGmD12926xmb82mjtIE8Oy0gungsKvwo4JN4VI3p3%2FurQo2NJbEvW4iWTomlqCZZEcRudIDlwIyv4K8gqRtLcWJ%2FTeZuUoEFbNbrCf1Q%2Bom3APTH86uuvPkg2%2Btw%2FQVV6BCjijzNkROAqUPSVLE7HKdiflrBq0QGgOghKtBop7JoDaukAB3GoQIkTFJ1yY0QrAzSzCzShY%2Bcy%2BgH4rfArqIhcel%2BzCYMXsi%2BsmjBtvpKifk2UyHQBL4ADQHwoWDz7AF5tF2U%2FzRTR6r1s6jvbve1KVpRSvjNzYBD3fXUmwnG8CgfvymcwHOTtqaQrldATZ9Iaa366V7vmyuNwvK2WMLzUPo%2F%2Filj1uP0KmB1xmO1ZQaYGX7exgYfK16s9qVhIDqh%2FNtzYhD4CwmQYajlYCXlfog0Kk2sIwgu22wAY6pgFyx%2BDNWn07i9V3neev9saDHyy%2BOJf%2Bw004e6pRkcqFx0BB%2FtYEUTnzl%2BBtCEjNrdyC1Lf14VMfFIq7J3p3VpgPLFsUSuvXwgH1oji2j6PNHp%2FKueOzTeoZjwHE0BG8QdBTQclPsk%2FBOR%2BM3zY2r57wrtH4BcKdWKo1yIn4pih%2FeLX9FCYbfBmbb436WEDcE%2BqOumY57ZcARE9SQQFY25IwY2EMaJPW&X-Amz-Signature=310ec4b02f0c82923a7c9f4f96bb4ab63b654c5924b600e13ded71982fe2fcac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KO7TCFK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8lKjCfteDHf%2BG72rIACuOnRJUUjtnWWK4wP%2F6UsounAiB3YkR6wjslSHocMbuzDhqmjyyRyqkxAuNpSfhXgqgaUSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMshbQxzg%2BLQOqFf0MKtwDl0qEDTwg34VpTF4ZBnabOnnhvNuq0eXzHYcoPLKRR6B%2BdAhBv%2FsStgne9yabrS9wycfx2ZNEkfENUQwW6vSMgeMj4TaG6A2tL5Z8ZfQwWNfkU%2BmBjZULVwuza2c96hCZ4VuKwdGS46sVIkVRjIb5aCa2OW0trMdYqfAaktmzbBdPokz9UPqqjUXadWp2iqz3UkPuoguhNISoSoyq7iEbDVvBve%2FGmD12926xmb82mjtIE8Oy0gungsKvwo4JN4VI3p3%2FurQo2NJbEvW4iWTomlqCZZEcRudIDlwIyv4K8gqRtLcWJ%2FTeZuUoEFbNbrCf1Q%2Bom3APTH86uuvPkg2%2Btw%2FQVV6BCjijzNkROAqUPSVLE7HKdiflrBq0QGgOghKtBop7JoDaukAB3GoQIkTFJ1yY0QrAzSzCzShY%2Bcy%2BgH4rfArqIhcel%2BzCYMXsi%2BsmjBtvpKifk2UyHQBL4ADQHwoWDz7AF5tF2U%2FzRTR6r1s6jvbve1KVpRSvjNzYBD3fXUmwnG8CgfvymcwHOTtqaQrldATZ9Iaa366V7vmyuNwvK2WMLzUPo%2F%2Filj1uP0KmB1xmO1ZQaYGX7exgYfK16s9qVhIDqh%2FNtzYhD4CwmQYajlYCXlfog0Kk2sIwgu22wAY6pgFyx%2BDNWn07i9V3neev9saDHyy%2BOJf%2Bw004e6pRkcqFx0BB%2FtYEUTnzl%2BBtCEjNrdyC1Lf14VMfFIq7J3p3VpgPLFsUSuvXwgH1oji2j6PNHp%2FKueOzTeoZjwHE0BG8QdBTQclPsk%2FBOR%2BM3zY2r57wrtH4BcKdWKo1yIn4pih%2FeLX9FCYbfBmbb436WEDcE%2BqOumY57ZcARE9SQQFY25IwY2EMaJPW&X-Amz-Signature=8ece159886064210741ccd8393a9d62eda173226cdd00e4cc83b882b02a7cd22&X-Amz-SignedHeaders=host&x-id=GetObject)

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
