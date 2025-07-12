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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVK56GR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMTb%2BoyoHduBLTk77qN%2FEhzkJG2EUF3aBWKj3A9esdhAiBGUcpFOXlyYHeSGfwkb8xRjfHXMOLRed0h%2FFv4CiC2fSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcbTpwqmKc3a9%2BA%2FpKtwDpbph1QqtcYtq3xSPmdJlzl5rEvsE2FytpgH%2FHI0mZPxLNCkc8XYITiGoyAthHLZDgHwouve0fQ8gx5wmljyi91B91i8FUPtKZH8CquVeYRmoyxYVVaU2Yk6GfaLD5H4%2BjdjsVXXpnDwJNXDiJX5zzxH0OWaeJwOpsvxTo9Ebqgh4g9jRdJrHNyrGrHay3lv7GXm7kY%2FO8aiiLYZEaCfl1PkDojj0ExYGrWpTUUIqKsMHjwjEF%2FNNixIyrlA%2BcjYFPeTgHZB9UiWUNO2FJ%2FQMBqMarRv409qCMGgjABnYtMXC1DuYjlRz97N8uEs%2FWzS51xm68gW987G8NzjxZAtSmOc5Rey14%2Fw4vm0wsqwuTGLybdxgOSXVmPbnU85mseBQTWkDZXRjrvl%2B5CsLwrO3tlic01ZAwN8brts2Db4FcJ1IY94yQJzmfpExKsS5MBSF7zxa7lgblbXiMGPo9a9dqSDg%2BKgA5KbEKPwqxtT9QTQNNG3bj2QhaTA4zrteSAWN%2B0ivE6qxrwFW6UEGayP6u%2BHfI0qdh7tedgnQujygS%2FMqaHO9ltWd9Xa%2FyUHTuqWob6R6CrBRZ7D4arBTxC%2BAflLFWmrFQR74%2FVkVzqqZyK3A%2BYgtdnUxjekhyDIwhv3IwwY6pgGpPDGnQqP5eupM4RUP%2BczUhRjKFip2XU8y9id50vUT%2FdsF094nwAjEDVam87RKpRJeW3OqbCpsb1B0%2BtbNOz0a9M2%2BpkrWZ6qAsVEia5SPOSUT15CQ%2Bs7%2FPPf63290NrtYKo0I6Q0CbsMXXV5sSvfnJwufqhV4WqdgZgPv8P5JHAryP8uXOLRmzRq7sNf%2BmdzN7DN1pfMLbrviKy0irO5amP2hYf5V&X-Amz-Signature=a1bc913f7dae9c86876927a5b3be7c0c1aa6a92d8e78db1ef26e33a84ace2cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVK56GR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMTb%2BoyoHduBLTk77qN%2FEhzkJG2EUF3aBWKj3A9esdhAiBGUcpFOXlyYHeSGfwkb8xRjfHXMOLRed0h%2FFv4CiC2fSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcbTpwqmKc3a9%2BA%2FpKtwDpbph1QqtcYtq3xSPmdJlzl5rEvsE2FytpgH%2FHI0mZPxLNCkc8XYITiGoyAthHLZDgHwouve0fQ8gx5wmljyi91B91i8FUPtKZH8CquVeYRmoyxYVVaU2Yk6GfaLD5H4%2BjdjsVXXpnDwJNXDiJX5zzxH0OWaeJwOpsvxTo9Ebqgh4g9jRdJrHNyrGrHay3lv7GXm7kY%2FO8aiiLYZEaCfl1PkDojj0ExYGrWpTUUIqKsMHjwjEF%2FNNixIyrlA%2BcjYFPeTgHZB9UiWUNO2FJ%2FQMBqMarRv409qCMGgjABnYtMXC1DuYjlRz97N8uEs%2FWzS51xm68gW987G8NzjxZAtSmOc5Rey14%2Fw4vm0wsqwuTGLybdxgOSXVmPbnU85mseBQTWkDZXRjrvl%2B5CsLwrO3tlic01ZAwN8brts2Db4FcJ1IY94yQJzmfpExKsS5MBSF7zxa7lgblbXiMGPo9a9dqSDg%2BKgA5KbEKPwqxtT9QTQNNG3bj2QhaTA4zrteSAWN%2B0ivE6qxrwFW6UEGayP6u%2BHfI0qdh7tedgnQujygS%2FMqaHO9ltWd9Xa%2FyUHTuqWob6R6CrBRZ7D4arBTxC%2BAflLFWmrFQR74%2FVkVzqqZyK3A%2BYgtdnUxjekhyDIwhv3IwwY6pgGpPDGnQqP5eupM4RUP%2BczUhRjKFip2XU8y9id50vUT%2FdsF094nwAjEDVam87RKpRJeW3OqbCpsb1B0%2BtbNOz0a9M2%2BpkrWZ6qAsVEia5SPOSUT15CQ%2Bs7%2FPPf63290NrtYKo0I6Q0CbsMXXV5sSvfnJwufqhV4WqdgZgPv8P5JHAryP8uXOLRmzRq7sNf%2BmdzN7DN1pfMLbrviKy0irO5amP2hYf5V&X-Amz-Signature=962c5aa83d19a892eeb335b0062a498726beaa0d7ea07e5c0ef582d6323fd99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
