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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUTDMD7G%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdAUY5G0SvaxzcLYV7e7IZVirwp%2Bd%2BJsBSRWUZFVwdRwIgAQwUuisrDUiU21SaeASaHG8jZmEUwltTYTQ4g%2F0m%2Bg4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEKzmmGKvZb0GPFa5SrcAxe2rSvEDZ57Z28lU7NQ4QEFWPW65gAsOX0XFkXl5xJxkOr4qLFCpD46O%2Bm1fh%2BxfpWfz7UNcppBCF7%2FbLVX242SuKlEv52k6nhIfuJjKL7rZj80o9wdcgodvyGxhb83TPQ8wZnoSp9xigZsR37%2FgKe%2FZBvFQWzXIz3tqvA60Wt6XBemjfYgsYrMAXnXVZO72Av1VlVdzuIgg0FZ%2BvCW2BwySN4ou40nlM82TSKr1hWP0ujeNgBWsgsrDQdc8zBy%2B0Fefj4eKZIIiAiyBVIz4Y5olFZ4o1imaVgudxOr0mSZYHLHBx2ba8jdaCrX6tklsKLPiN5bqAwdLE4Zh3Jiu5nLqU7%2F%2Frlx86FsMsj4wntx%2BE6O7oJ5Y9KLWKvw7DI50syhH55DbT9D86dsea1ew3b2BoiRmXIpKD72b76CEZ%2BVs4BBrksCbyBfAVlB2%2Bv5us%2Bq6155DMhRQeJO0Dpixwk3sZik0hc8cse9mOZu2nroUwVUJKzXy%2BNQ7sSkVvGgfUOwmsdr%2BGNl0VKRwckdpXigAPpwdxg92D8f%2BrQs12vuA%2BR9CLTEu6YQTuEA%2BXBlK1JnkKpxWXRwGA8hHtO%2FgT35GbRu%2BRgbegXM2iiYV4BJ4VRxNMU9C265%2B%2BglMJjOib8GOqUB8VUys%2FyDIKY7ti0V3x5JoNFNWFszOhHpGivgglZ91BGi9hSzRJ5Y6jXtKlYS3EIghzeg48k5QfI5JNdw%2BbPKng%2Bi82MP%2F5inwnnX9LK72RtxKR%2BSbtf7Y9BEnTpJ4qF7rTYvz5diyEjqkw0n%2FpoxmXGATyH2c5iW%2F3uMrPMA0mQuKjahyHv6N37hRiXhErpnioJl8csSJar%2BeT7marOsNpaAePJb&X-Amz-Signature=d36787e4a83dcf129912e94d4da79121e51c05be8ace64ea125c27cf3d7256f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUTDMD7G%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdAUY5G0SvaxzcLYV7e7IZVirwp%2Bd%2BJsBSRWUZFVwdRwIgAQwUuisrDUiU21SaeASaHG8jZmEUwltTYTQ4g%2F0m%2Bg4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEKzmmGKvZb0GPFa5SrcAxe2rSvEDZ57Z28lU7NQ4QEFWPW65gAsOX0XFkXl5xJxkOr4qLFCpD46O%2Bm1fh%2BxfpWfz7UNcppBCF7%2FbLVX242SuKlEv52k6nhIfuJjKL7rZj80o9wdcgodvyGxhb83TPQ8wZnoSp9xigZsR37%2FgKe%2FZBvFQWzXIz3tqvA60Wt6XBemjfYgsYrMAXnXVZO72Av1VlVdzuIgg0FZ%2BvCW2BwySN4ou40nlM82TSKr1hWP0ujeNgBWsgsrDQdc8zBy%2B0Fefj4eKZIIiAiyBVIz4Y5olFZ4o1imaVgudxOr0mSZYHLHBx2ba8jdaCrX6tklsKLPiN5bqAwdLE4Zh3Jiu5nLqU7%2F%2Frlx86FsMsj4wntx%2BE6O7oJ5Y9KLWKvw7DI50syhH55DbT9D86dsea1ew3b2BoiRmXIpKD72b76CEZ%2BVs4BBrksCbyBfAVlB2%2Bv5us%2Bq6155DMhRQeJO0Dpixwk3sZik0hc8cse9mOZu2nroUwVUJKzXy%2BNQ7sSkVvGgfUOwmsdr%2BGNl0VKRwckdpXigAPpwdxg92D8f%2BrQs12vuA%2BR9CLTEu6YQTuEA%2BXBlK1JnkKpxWXRwGA8hHtO%2FgT35GbRu%2BRgbegXM2iiYV4BJ4VRxNMU9C265%2B%2BglMJjOib8GOqUB8VUys%2FyDIKY7ti0V3x5JoNFNWFszOhHpGivgglZ91BGi9hSzRJ5Y6jXtKlYS3EIghzeg48k5QfI5JNdw%2BbPKng%2Bi82MP%2F5inwnnX9LK72RtxKR%2BSbtf7Y9BEnTpJ4qF7rTYvz5diyEjqkw0n%2FpoxmXGATyH2c5iW%2F3uMrPMA0mQuKjahyHv6N37hRiXhErpnioJl8csSJar%2BeT7marOsNpaAePJb&X-Amz-Signature=6fa01e4e9a4868579e53aa82718dd4605a0dadf8f43fec0b88d05aa375686756&X-Amz-SignedHeaders=host&x-id=GetObject)

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
