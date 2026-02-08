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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEPPURF%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCshgVAOZU5rp0uAMr5F8Hn19AwF8UixgvRGi7IhmZrdgIhAJPZ4xPFZJk%2FzD03J6uFR1V%2BO1K69Vc%2B%2FFQWh4RLBCZaKv8DCGwQABoMNjM3NDIzMTgzODA1IgyMZsrrRF7JkXzYso0q3AODBh%2Bv%2FqB%2FyefIHb%2BXMVDBld8ON4%2BYvePTHxqSBEGZ6hkUhX7LFKZTk7ZEVha4qpzQ1Ce393TnQHhS2eq6bFeLR7JZjUj72SFSdpzvB%2FSQ4zE3tRmzCZglrUafWb0OFFOmyz2D%2BvOJpnTQ4FBZmQvdd5fq1rFudrVkDSRCkqq7v6yVIqm%2BPn7x9tkOwJQsT4CHdRetUq6fK%2BTm6r%2F2PvhHwQ%2BT3vtDZBQQE80GA7Vam0xKgS3oYjTse0E1atJDOr6sPq1Ng6zEnFFctt4ByC6PDE9XlOWgz4elKYs49OmiRUCqiJLmqrHplOoAOkV2teig3ObhYc%2F7UmwXlRhwAq6B7WcXMoasC7eL%2F84Allwfmrgb0MnLhuJ60RCRa%2F1cPMfjF79IhiH%2B4oNK5LJbg09zqT2LLnJeClYQgd9%2F5ATaUDYpnOnl20N9ZrCJa7EQ8x23QjEkNdIzqUCqaMBz%2BT%2BCyf7Jc3TcfxI8T%2FQGqoJ1sqMWqUCkssch1s3cu2UbQLk2X4JsKdsTa%2FOurscMrb2ut49qq9YQELAvv%2Bp1yagV2NXlXUhJAvp295jNLvz16PWt8ymNaPGepgeI35EvsSHHaxUVZmZnn1gHXiPSMc2mFO4DTC0uOtuA0rE%2B4TCQ6p%2FMBjqkAQNYeLPXYaW0CkoaLbh3DXi03eDJvOOnNq9f2DB6WexbMBnxk5OhjxONWcz15Nu%2FvH5ZDJvZFHP%2FttIe%2FYW5Jnc7c5IcTV%2F4SBszx4GPMn8w%2FHqR%2FLLY04N4XQgJ4%2BRAMgSZ8B7Y5FVYVFt4fx6nBBzX3gSyQwsPWGXAusbZaHhcl9R0GshmBvAWmR6de0jckXlqmw8d%2BXBvEOYHTm5m6io%2BVcpK&X-Amz-Signature=b4176a332b067e633daa96bcb73c83ffd3eb62aaeb4e7ffb014893dde6fb2900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEPPURF%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCshgVAOZU5rp0uAMr5F8Hn19AwF8UixgvRGi7IhmZrdgIhAJPZ4xPFZJk%2FzD03J6uFR1V%2BO1K69Vc%2B%2FFQWh4RLBCZaKv8DCGwQABoMNjM3NDIzMTgzODA1IgyMZsrrRF7JkXzYso0q3AODBh%2Bv%2FqB%2FyefIHb%2BXMVDBld8ON4%2BYvePTHxqSBEGZ6hkUhX7LFKZTk7ZEVha4qpzQ1Ce393TnQHhS2eq6bFeLR7JZjUj72SFSdpzvB%2FSQ4zE3tRmzCZglrUafWb0OFFOmyz2D%2BvOJpnTQ4FBZmQvdd5fq1rFudrVkDSRCkqq7v6yVIqm%2BPn7x9tkOwJQsT4CHdRetUq6fK%2BTm6r%2F2PvhHwQ%2BT3vtDZBQQE80GA7Vam0xKgS3oYjTse0E1atJDOr6sPq1Ng6zEnFFctt4ByC6PDE9XlOWgz4elKYs49OmiRUCqiJLmqrHplOoAOkV2teig3ObhYc%2F7UmwXlRhwAq6B7WcXMoasC7eL%2F84Allwfmrgb0MnLhuJ60RCRa%2F1cPMfjF79IhiH%2B4oNK5LJbg09zqT2LLnJeClYQgd9%2F5ATaUDYpnOnl20N9ZrCJa7EQ8x23QjEkNdIzqUCqaMBz%2BT%2BCyf7Jc3TcfxI8T%2FQGqoJ1sqMWqUCkssch1s3cu2UbQLk2X4JsKdsTa%2FOurscMrb2ut49qq9YQELAvv%2Bp1yagV2NXlXUhJAvp295jNLvz16PWt8ymNaPGepgeI35EvsSHHaxUVZmZnn1gHXiPSMc2mFO4DTC0uOtuA0rE%2B4TCQ6p%2FMBjqkAQNYeLPXYaW0CkoaLbh3DXi03eDJvOOnNq9f2DB6WexbMBnxk5OhjxONWcz15Nu%2FvH5ZDJvZFHP%2FttIe%2FYW5Jnc7c5IcTV%2F4SBszx4GPMn8w%2FHqR%2FLLY04N4XQgJ4%2BRAMgSZ8B7Y5FVYVFt4fx6nBBzX3gSyQwsPWGXAusbZaHhcl9R0GshmBvAWmR6de0jckXlqmw8d%2BXBvEOYHTm5m6io%2BVcpK&X-Amz-Signature=a798d80227a16e86f8191e6d8c4966298d7cba6935b4ba8e6cad3f4dd8b89466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
