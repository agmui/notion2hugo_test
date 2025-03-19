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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RML5NJW7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIES%2Bicc5sx64XV8bj7%2FjU6PKvTw9IXsizJR3QYvk4mdIAiBlj9hYF6kfUQh%2FbWHyqO6SkG7L8qUfLhmCWVFMJCe1eyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCPMfZHFrChgEKKdrKtwDGzKrnrwQdcadKZDnAxMx0TDDITqjjRHwYqIp95d8whUgvaXjK91msfiKvUfTQ3oQn8N3h7kBfAWp0ec%2BidKmBOa1p7eertbCgeq%2FBV6bchZjSl2B%2BLcZoxrvdZX65aMy9jenp0cTYSmpCTVK13p6ypjJJyW755P2i3OJfLs9DStrx7N%2Bl1JfUcCkmxNxHQPQ9cEToXV9ZxvWwKfg6NDWUvwRWWDDL0ljiVt9cNfUlisAnjEFc%2FxmKUynhoTTBt7%2B0On5hzzony2qz15m5rw%2BqP8SYGgjcksg1WYwYhDpS06v9Sx1pI2D%2FN%2BJWtfE4orBGQgH5ShtqtSH3sUip3y%2FdRTiw%2BBza%2Fi%2FAPmUII6U4pds1r4jIWdvg9L4XwQuyhFKo1y%2BLb0AmvRMEG52claAJefkBqokfLNsGyupTJbQO0OC6CclkUsqD3wKTCN2FjKsa2JsZXha7VRjdYJa6fQRxHiBcJASNywRveiFfAv4H0ACy63jEoF74n%2BIntwsaPjyw2cA0KeMbR0BGgeo6HFCkFc1da3avvqIPXu%2FCMbzIHaV8cs4hGNbTJsTVNz%2FuXCLXcm9VwFn8J8h8actMx7oCFtIEJqKYJR9k5bzF7BeZ9rCvPNdJ%2BR%2F%2B3diqKIw5f3ovgY6pgFYxQsuTxN5C4StlbLmZrs7ZvyuBiuzGwqxg8t3BuaLK8pHjS77xFFwETho2PHjPDCvTOaU6mg1wEN31XiFWCXrx1FXrg6exhA43dZGHCgiUfgMZSUAOCFtFodMWvM0%2FQ4S6%2BPxBTKOhMqDOWQBcotYbmo%2F0rlGIlFU0AYf0sY0lHnIRQcltsy0pv1t4e5%2FjIl93SopQQ9oo7beYMmNF9pgZKSVSVb%2F&X-Amz-Signature=928b8f6a4e15b51bf66de23a041be1ec1b8211cbab8ed8cf0e0dea860094758e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RML5NJW7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIES%2Bicc5sx64XV8bj7%2FjU6PKvTw9IXsizJR3QYvk4mdIAiBlj9hYF6kfUQh%2FbWHyqO6SkG7L8qUfLhmCWVFMJCe1eyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCPMfZHFrChgEKKdrKtwDGzKrnrwQdcadKZDnAxMx0TDDITqjjRHwYqIp95d8whUgvaXjK91msfiKvUfTQ3oQn8N3h7kBfAWp0ec%2BidKmBOa1p7eertbCgeq%2FBV6bchZjSl2B%2BLcZoxrvdZX65aMy9jenp0cTYSmpCTVK13p6ypjJJyW755P2i3OJfLs9DStrx7N%2Bl1JfUcCkmxNxHQPQ9cEToXV9ZxvWwKfg6NDWUvwRWWDDL0ljiVt9cNfUlisAnjEFc%2FxmKUynhoTTBt7%2B0On5hzzony2qz15m5rw%2BqP8SYGgjcksg1WYwYhDpS06v9Sx1pI2D%2FN%2BJWtfE4orBGQgH5ShtqtSH3sUip3y%2FdRTiw%2BBza%2Fi%2FAPmUII6U4pds1r4jIWdvg9L4XwQuyhFKo1y%2BLb0AmvRMEG52claAJefkBqokfLNsGyupTJbQO0OC6CclkUsqD3wKTCN2FjKsa2JsZXha7VRjdYJa6fQRxHiBcJASNywRveiFfAv4H0ACy63jEoF74n%2BIntwsaPjyw2cA0KeMbR0BGgeo6HFCkFc1da3avvqIPXu%2FCMbzIHaV8cs4hGNbTJsTVNz%2FuXCLXcm9VwFn8J8h8actMx7oCFtIEJqKYJR9k5bzF7BeZ9rCvPNdJ%2BR%2F%2B3diqKIw5f3ovgY6pgFYxQsuTxN5C4StlbLmZrs7ZvyuBiuzGwqxg8t3BuaLK8pHjS77xFFwETho2PHjPDCvTOaU6mg1wEN31XiFWCXrx1FXrg6exhA43dZGHCgiUfgMZSUAOCFtFodMWvM0%2FQ4S6%2BPxBTKOhMqDOWQBcotYbmo%2F0rlGIlFU0AYf0sY0lHnIRQcltsy0pv1t4e5%2FjIl93SopQQ9oo7beYMmNF9pgZKSVSVb%2F&X-Amz-Signature=41b372e2c4e17006c9e354b2dcfe648de8d91128de0173cb3f9eab5d871b8b19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
