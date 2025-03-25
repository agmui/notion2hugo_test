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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5HGG3Z%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KugthNGDdWlWl5AHApDriYv1T%2BoePl604cjRixda3AiBnt%2F4eMuu6ycK2oIfTrmH0fFNYht4dQ3avvNnM8bWuaCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMn0NBtl%2BTDhXoBssOKtwDBzkQ84w9k0YrVAMYn83u9yIVk4cb54vKp4cLdwiNWCZz%2BAuo5CUgQ%2FTiYuQx2vj7ALKy7PQAfl%2BLzrJXipXk7meace2SyWlbmM133rZisPSZnZs5RYMbYm%2BAHodsgpOCpX5p1GMANGhhljxugjIJc71kl2cV6YgiE7JN%2FmktYV2agolHx4oVtsSfQ6FfH1a27CM9cG9tomcF1GYcvyOnLZtRuG%2BH63cbZq4enULXPSLinYxzSJ7lG0lywZWTWEW2w0XLxRnjVd5JXYq%2F5Kl%2FkBUwj4EtGNfpvsi6t5ui2OOFUo%2FzqFxYyatpnGmWoaX1RQA3SeGYQwXH87oGH3ltJt52X8t0qQNfnsMjsGS8WvyzBSTctELUniZb0lANz1qYzDeSE31%2B53pl%2Bs5q7wvzDfJzmphfjPw2zYZT3WceHnwBLudoA1nwz5kjkgoiwIpvVuxQmkT%2Fg3OMmbpRynnLcS9oHp7DpeIA5Tie6m3p9ohCkVxTaNvLsTBLrY4Fz7glnd17OhO2mmjtZOMMS3t8JPpdXe9zUtSdy13pQt9pzvlCZUtL8h65v2y%2FfiSYv37Q35WEUo%2Be%2FeN7CWHcRXSFSiAtwTBmNXPPTKdm%2B0Rcv2%2FqHenFdWsGUZe2sogw98WKvwY6pgE%2Fd4nDU2%2BYcLWLybsKLGu%2BN0jolNVvlNy5oV78pqtnsx%2FBlqeOunxgTulJMwOGvQJpOL9ETjXx4%2BGavURinY%2FuOlC4F1WT6QUkNIAoR4JYFUD14qN6RISalxUBkyQZJBECJJiOTsRU4E2EKaZCt1C%2BOIE19JzHvByMHKoocM5vAgmVCVMaiB%2Ba0e9173QOUQM7RW56p%2FbkA9rrv4oST5%2Blnj%2BX8Ymy&X-Amz-Signature=a104a219d1fe6b2b05ffa469a7fd0b75cc86057f1c6c010860e7b0aafd7f5c81&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5HGG3Z%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4KugthNGDdWlWl5AHApDriYv1T%2BoePl604cjRixda3AiBnt%2F4eMuu6ycK2oIfTrmH0fFNYht4dQ3avvNnM8bWuaCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMn0NBtl%2BTDhXoBssOKtwDBzkQ84w9k0YrVAMYn83u9yIVk4cb54vKp4cLdwiNWCZz%2BAuo5CUgQ%2FTiYuQx2vj7ALKy7PQAfl%2BLzrJXipXk7meace2SyWlbmM133rZisPSZnZs5RYMbYm%2BAHodsgpOCpX5p1GMANGhhljxugjIJc71kl2cV6YgiE7JN%2FmktYV2agolHx4oVtsSfQ6FfH1a27CM9cG9tomcF1GYcvyOnLZtRuG%2BH63cbZq4enULXPSLinYxzSJ7lG0lywZWTWEW2w0XLxRnjVd5JXYq%2F5Kl%2FkBUwj4EtGNfpvsi6t5ui2OOFUo%2FzqFxYyatpnGmWoaX1RQA3SeGYQwXH87oGH3ltJt52X8t0qQNfnsMjsGS8WvyzBSTctELUniZb0lANz1qYzDeSE31%2B53pl%2Bs5q7wvzDfJzmphfjPw2zYZT3WceHnwBLudoA1nwz5kjkgoiwIpvVuxQmkT%2Fg3OMmbpRynnLcS9oHp7DpeIA5Tie6m3p9ohCkVxTaNvLsTBLrY4Fz7glnd17OhO2mmjtZOMMS3t8JPpdXe9zUtSdy13pQt9pzvlCZUtL8h65v2y%2FfiSYv37Q35WEUo%2Be%2FeN7CWHcRXSFSiAtwTBmNXPPTKdm%2B0Rcv2%2FqHenFdWsGUZe2sogw98WKvwY6pgE%2Fd4nDU2%2BYcLWLybsKLGu%2BN0jolNVvlNy5oV78pqtnsx%2FBlqeOunxgTulJMwOGvQJpOL9ETjXx4%2BGavURinY%2FuOlC4F1WT6QUkNIAoR4JYFUD14qN6RISalxUBkyQZJBECJJiOTsRU4E2EKaZCt1C%2BOIE19JzHvByMHKoocM5vAgmVCVMaiB%2Ba0e9173QOUQM7RW56p%2FbkA9rrv4oST5%2Blnj%2BX8Ymy&X-Amz-Signature=8f1273a80eab53f4732ebaa44be69192e0541f7f1fbef9699291951fa2d0318e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
