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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBFYAYF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFeUyqvOkNlofZeGRpST2j3F1yDKVluG0oRHZKhH8Ok2AiBshB7LDmxulhoiKskbe4CXPx66uC3%2FR56JY3N3M8EVLCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMrcuE%2B%2Bznh7V5Hjz7KtwDXf%2FGeChXjLEc3aT6yMX2EqvxaddP0FXufu0g2SCLZ9iKBIYrZK%2FiTqtNI1PSnC1Y8clv34dJHkOCe0HOpHozxBuNgGM4z%2BBt3svjEuMkSkEm7fCQWkukv0khrzmtoirxqA%2BRIFy0nXYa5AVD6ob79eFrEyFVDGG0SPMH15y41UU2AG0DMz75RfCN46GqZMtw1qTr%2Btl%2FE6XTPRIM1EpEkrc9iA9KXaSETdKkq%2F8kao4zGrSZL6NmwMyv5JQuOCqooDOdGvhdWnK%2BluvQnssT9d0so5LZrRptdHJDEuy6x%2Fk0t9mUV7DQs43B5%2BPhmUf3iPCaPpxDU58fMftzebohoR6LrJrN8sUl3dTKyN71ctPoTQfXE8E0J1d8PDjBlCqUXHGD5wSaxJoyzl%2BbyrQp9AlBrVJblPMpqTjwKz02P4k3KDurlBYy4WA9LHdWgpqdvBKKuQHDEzx4Vd6i4jczER0v0m3IeiGIqmLK7Z6mWmnoOJLE6tWnhmx8zKpbplM9TZJo%2B2IDzyJ8OlP%2FgjOBp%2Ba5pJ98BD3H0j6UpgFxM6xd30I7J9N4%2FQuOFpU%2BuZwuIOfS74VAfHVyLiK9AXg9G91pUKwDi373lowG8auPYRlZByq1z2IJ%2FT%2FLq%2Bsw2MrKvQY6pgHpXe1a5Me02YFyO7CR5xBR%2F3zGh70%2BStFdIwVoelBHXJHs5RYHBNvtijKbKhQvl7vlS2N2U2r3NY5%2FdbG4O%2FoBBngS%2FV2qW0etYX5%2Fq7RS6uG%2Fb7BocqYqrKkQTDGNnE1Lia1L%2BBeYhJnNqTqr4J73YwzirBEFi3%2ByhrVEHAG8afO59CJAqPpc5V6DUqAj%2Ba%2FrEPxxyQrusNS4F0asasnjZGuLDZd6&X-Amz-Signature=ab62a40088cec91b7471a428abe78b7b86b8493f5e1a36033ce7c8da6cad763e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBFYAYF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFeUyqvOkNlofZeGRpST2j3F1yDKVluG0oRHZKhH8Ok2AiBshB7LDmxulhoiKskbe4CXPx66uC3%2FR56JY3N3M8EVLCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMrcuE%2B%2Bznh7V5Hjz7KtwDXf%2FGeChXjLEc3aT6yMX2EqvxaddP0FXufu0g2SCLZ9iKBIYrZK%2FiTqtNI1PSnC1Y8clv34dJHkOCe0HOpHozxBuNgGM4z%2BBt3svjEuMkSkEm7fCQWkukv0khrzmtoirxqA%2BRIFy0nXYa5AVD6ob79eFrEyFVDGG0SPMH15y41UU2AG0DMz75RfCN46GqZMtw1qTr%2Btl%2FE6XTPRIM1EpEkrc9iA9KXaSETdKkq%2F8kao4zGrSZL6NmwMyv5JQuOCqooDOdGvhdWnK%2BluvQnssT9d0so5LZrRptdHJDEuy6x%2Fk0t9mUV7DQs43B5%2BPhmUf3iPCaPpxDU58fMftzebohoR6LrJrN8sUl3dTKyN71ctPoTQfXE8E0J1d8PDjBlCqUXHGD5wSaxJoyzl%2BbyrQp9AlBrVJblPMpqTjwKz02P4k3KDurlBYy4WA9LHdWgpqdvBKKuQHDEzx4Vd6i4jczER0v0m3IeiGIqmLK7Z6mWmnoOJLE6tWnhmx8zKpbplM9TZJo%2B2IDzyJ8OlP%2FgjOBp%2Ba5pJ98BD3H0j6UpgFxM6xd30I7J9N4%2FQuOFpU%2BuZwuIOfS74VAfHVyLiK9AXg9G91pUKwDi373lowG8auPYRlZByq1z2IJ%2FT%2FLq%2Bsw2MrKvQY6pgHpXe1a5Me02YFyO7CR5xBR%2F3zGh70%2BStFdIwVoelBHXJHs5RYHBNvtijKbKhQvl7vlS2N2U2r3NY5%2FdbG4O%2FoBBngS%2FV2qW0etYX5%2Fq7RS6uG%2Fb7BocqYqrKkQTDGNnE1Lia1L%2BBeYhJnNqTqr4J73YwzirBEFi3%2ByhrVEHAG8afO59CJAqPpc5V6DUqAj%2Ba%2FrEPxxyQrusNS4F0asasnjZGuLDZd6&X-Amz-Signature=de3dac3d5b87444f129051a3da5c3fbb9a831eefbc05a478e42b880c4781b5fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
