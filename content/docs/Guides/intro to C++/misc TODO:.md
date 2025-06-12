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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDE6NDPB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIAJzVbzT9ULz5VEWecSkAk15v%2FOjgSoQU7diDb%2F3epz6AiAKdGnZMyUF7wsW4g1YPC6p28u7uNeXufX1fQRZ1lJv9SqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNNew7mVfYw4a22seKtwDgL4trm0PAen9Og0wmvYRqpeKaI2XRu2XlDHmlKsx1MhXZlFjngthNlYIaM3pULG4V8OT%2B2pY06ijGohLc6fUeUcWW%2FnPkBPUieFT5uvOZB0CaGT0E%2FO969puyznI4cZzJ4d0txLazX25ZOruy9T7422%2FmVT%2BNojH4xjJFGTQ33rBfl5fxwbeXmEAO6dA57Ax96ynGRvzOyVWX8YIpv7utBSZdER8ZXuxOZS5QAZWGBLUQc5A1tmitwV9QT7XPn%2B0gGdmWNGBKFTPrZNNKZfkHS6kbJh%2FotBj4UmgqFdSV3%2B6E4s%2FjS%2B6aakuEqV8LTZSRvkFH7sIP3zJuLI0%2FN5xaToogjcon9fsWcqOs99aTznleuVU%2F7OTKnV%2FwHHXZVqzl9ZRKngUnFWS42eZXybLLta3JFfdcFvtjTPiwet9XbXCIRGbb8L9gYPP5%2FDQiz8yxwQl8frfsDHi%2FxK3ienP8aPrrviVy8CjzwGE4ry8HMpWJnnYcsGOmAcTvmkJqcGOiK4VVGBAfNo9aJU3XM1RMMlb6f9tK9cQf1HQuemKFSL67vHwZggjMzoy49GgXS6w3jLsmdnzQs8K2q5T2u2a9POc%2FrI5E72Dv8faC%2BEacuJ15f%2BOfIo5hIJ6Q%2FkwnLurwgY6pgFOqY4k9mEXzMECkAFcrxvYU7aSJFngSP4edg2AQYLDetlZTO%2B3O8V027hRneiwHXPYw0snkBJGWAo2Aa9hwca%2BOHET8Qu59GsxcbWqqgappnkJc6GAWBpG6JLeDpQi1F3rb%2Br6a7uCZBi1UeH%2FfYPK2CTF0BHN2e5%2B7x06vphadURt40kZyGWosbtiYegApyiWVwFtrUU2JDgpEeljSx%2BCN2VdXDBV&X-Amz-Signature=c3d3252a58418946681fc460850da76cbb083b99df473453c8aa2cf4914bc4eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDE6NDPB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIAJzVbzT9ULz5VEWecSkAk15v%2FOjgSoQU7diDb%2F3epz6AiAKdGnZMyUF7wsW4g1YPC6p28u7uNeXufX1fQRZ1lJv9SqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNNew7mVfYw4a22seKtwDgL4trm0PAen9Og0wmvYRqpeKaI2XRu2XlDHmlKsx1MhXZlFjngthNlYIaM3pULG4V8OT%2B2pY06ijGohLc6fUeUcWW%2FnPkBPUieFT5uvOZB0CaGT0E%2FO969puyznI4cZzJ4d0txLazX25ZOruy9T7422%2FmVT%2BNojH4xjJFGTQ33rBfl5fxwbeXmEAO6dA57Ax96ynGRvzOyVWX8YIpv7utBSZdER8ZXuxOZS5QAZWGBLUQc5A1tmitwV9QT7XPn%2B0gGdmWNGBKFTPrZNNKZfkHS6kbJh%2FotBj4UmgqFdSV3%2B6E4s%2FjS%2B6aakuEqV8LTZSRvkFH7sIP3zJuLI0%2FN5xaToogjcon9fsWcqOs99aTznleuVU%2F7OTKnV%2FwHHXZVqzl9ZRKngUnFWS42eZXybLLta3JFfdcFvtjTPiwet9XbXCIRGbb8L9gYPP5%2FDQiz8yxwQl8frfsDHi%2FxK3ienP8aPrrviVy8CjzwGE4ry8HMpWJnnYcsGOmAcTvmkJqcGOiK4VVGBAfNo9aJU3XM1RMMlb6f9tK9cQf1HQuemKFSL67vHwZggjMzoy49GgXS6w3jLsmdnzQs8K2q5T2u2a9POc%2FrI5E72Dv8faC%2BEacuJ15f%2BOfIo5hIJ6Q%2FkwnLurwgY6pgFOqY4k9mEXzMECkAFcrxvYU7aSJFngSP4edg2AQYLDetlZTO%2B3O8V027hRneiwHXPYw0snkBJGWAo2Aa9hwca%2BOHET8Qu59GsxcbWqqgappnkJc6GAWBpG6JLeDpQi1F3rb%2Br6a7uCZBi1UeH%2FfYPK2CTF0BHN2e5%2B7x06vphadURt40kZyGWosbtiYegApyiWVwFtrUU2JDgpEeljSx%2BCN2VdXDBV&X-Amz-Signature=e6c67480a979964fd5c27e28050fc861d7f0d0eff069af9e89d3d0c2fb586ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
