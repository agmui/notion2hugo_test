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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKD7XFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDW585La8puMAqRCis4ZCSt6YOHGR7wY4J1goXTi7KHNAiAQZ3C3hu8q8UINAMKxkYmr3wOprSE6YVRjDW3dAx8ieir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMM6MH7jb%2FI3aaJvJ9KtwDmLnH14aZ0Y06%2FP%2FqbWVbZpIYPSjHpWFqf5w4L9tpEvVE9FFHnTuxsnK%2Fzw%2F%2B9vEVheJXheIiflOgbGUFxEU2tqgdBCAv6zaENP9Sb%2F3umXoRY6hSpytj2a3JLOxY%2BvL1yPg6ApfDeS9q2aBLHARTbWGlzwc68z0piQqCK5vBZHS6aNbVB4cfiNN3DzraMKWbi%2FZK6vI9TA1kGjTW1MBw8sgmF2grPHyYkWw%2BaOEkJNNGA5dPiMxGxQG9W6Y1OHruGbTROlTSq4LEqN4pe7fSONUoEixvrvXUeV99VJNjgV%2FZDRI1nvj4zp0xmloI4fVXZoOyUbkJX7EYEcOKrTprA4TnnEqgyvvFFRBPZkr7IKiTIJZnpckxOS1yWQImLjHC0urNWtvOoGbEx1UK1QVf8K6JMKWAlJK8O6%2BGAkYCS5zs8IJwc%2FhL9LIl%2F8UlPPNgE1rEHXpf8%2FDdU%2BamHx8z46Kguult9PBzLSe7zZ4%2FcPpmpOTYcbGGMTmbgYwJjnzjOF003mPoVqxHPhUMYfPq33X4ysxkNLgK2ndZ8%2FohUl0faRcDU%2BZ0%2FFN721cm9FSMuOhfRGBTo6Xs8z7eecxBvNpd4TT5cG6Dx7aqonoHW9ZK91ZKjN%2By5MufNmQwlsSfwwY6pgF26dRHP2Nod1UQUN7NooHt8ELTQJwBwMRQSoCdPs1I3EgbHbgxxU852cOAruPtoh0DeFVoi71QPraXbtAlEc2jwxzKKqFwajE6kWUqTrwpB9SHjx2YMZURioWOMaw%2BZbDfYUhNSxadl6WZe%2BvAFcnMnkvE53WRT9X7uH3ke0z2jQkzAm8yG8oSAoBDV64cZaKkraHxdISCjzpe62qIWrDnRt21MVtW&X-Amz-Signature=8b717d92ac084ae52da74e2ff49113ea654f5771b4c08e6cee835aa578638e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKD7XFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDW585La8puMAqRCis4ZCSt6YOHGR7wY4J1goXTi7KHNAiAQZ3C3hu8q8UINAMKxkYmr3wOprSE6YVRjDW3dAx8ieir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMM6MH7jb%2FI3aaJvJ9KtwDmLnH14aZ0Y06%2FP%2FqbWVbZpIYPSjHpWFqf5w4L9tpEvVE9FFHnTuxsnK%2Fzw%2F%2B9vEVheJXheIiflOgbGUFxEU2tqgdBCAv6zaENP9Sb%2F3umXoRY6hSpytj2a3JLOxY%2BvL1yPg6ApfDeS9q2aBLHARTbWGlzwc68z0piQqCK5vBZHS6aNbVB4cfiNN3DzraMKWbi%2FZK6vI9TA1kGjTW1MBw8sgmF2grPHyYkWw%2BaOEkJNNGA5dPiMxGxQG9W6Y1OHruGbTROlTSq4LEqN4pe7fSONUoEixvrvXUeV99VJNjgV%2FZDRI1nvj4zp0xmloI4fVXZoOyUbkJX7EYEcOKrTprA4TnnEqgyvvFFRBPZkr7IKiTIJZnpckxOS1yWQImLjHC0urNWtvOoGbEx1UK1QVf8K6JMKWAlJK8O6%2BGAkYCS5zs8IJwc%2FhL9LIl%2F8UlPPNgE1rEHXpf8%2FDdU%2BamHx8z46Kguult9PBzLSe7zZ4%2FcPpmpOTYcbGGMTmbgYwJjnzjOF003mPoVqxHPhUMYfPq33X4ysxkNLgK2ndZ8%2FohUl0faRcDU%2BZ0%2FFN721cm9FSMuOhfRGBTo6Xs8z7eecxBvNpd4TT5cG6Dx7aqonoHW9ZK91ZKjN%2By5MufNmQwlsSfwwY6pgF26dRHP2Nod1UQUN7NooHt8ELTQJwBwMRQSoCdPs1I3EgbHbgxxU852cOAruPtoh0DeFVoi71QPraXbtAlEc2jwxzKKqFwajE6kWUqTrwpB9SHjx2YMZURioWOMaw%2BZbDfYUhNSxadl6WZe%2BvAFcnMnkvE53WRT9X7uH3ke0z2jQkzAm8yG8oSAoBDV64cZaKkraHxdISCjzpe62qIWrDnRt21MVtW&X-Amz-Signature=e8dc8e4cc86a01ddf803d46aa352f702ffec762680560a50e444df5d2ae6690e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
