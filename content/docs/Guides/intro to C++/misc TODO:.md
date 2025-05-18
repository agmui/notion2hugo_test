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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6UT6U2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTv5VZtRFRhDV%2BaxNJRzw3Ty5y7YXOkFAxZwMyrI5RwIgCGQnNa4PF8V1Aif4DsP1FWzek1sYpYuEkzV4Y%2FM9Bz8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJJ8lwjO9sfJjAynOircA7v6AOQGIc5lFtqntXVIcjitizU4bnL74zaz%2B60v24Qq3NbgmkN5IZcSQJrW2uDYY4n5v7K4OwrI8Q2y3VzPtmhfZ62nv9zvZCTiYDNNxBBuyFKyopw5lkC57cCODArIrRizKDSqs1LL9eXwyogZ9NYaGQ0FRhJMnJnKvXzJzmb%2BO4BLr2PQ7RRuXbW5iBJ%2B0mvEike4KvxFxRrIAk3m4t8E8Sap%2B0Yc7spHsW%2FueUe2UGdK3e%2FchV0rCU%2BAPzBhYerxfpU8xJs8yqzY8FD1sUUsDUjMevYjy8b7a81VzSZEixb8TN3bTBtRUrf4Z6tDZEYidd1a2Mzk5f9zM5BYwgh6ce8fM3RAsGtCRW%2BKm12ijOEVzQk5qhy20egrNRP6bziMaWfLP50%2BJJhPdlxrxBmI%2FGzAqaFedW%2Bl13JDv7DN0V9e0CYricABoGOT88pt8tzBQp1v2%2BbndmHZPCCf2KAZHYwYQ46O6JDwzldQVcdSDhVbJfGPvbEJw3NroZPk1nC0VUQcuq6YDLS3oqm28K7YNf4k7MsbnuAwAooK6o7uCa%2FzwJSGFTlqglyiGEWml%2BCihk%2FuE6e7uq1Yo5MjP78UI2oKZmOX03v5Zvgp8kcrViSg%2Bcf9Wd8N0rX7MMT9pcEGOqUBsaGVmzMXWYfmqiR8G692R0D0XOx2Dpe6krrbcsZnJPu9anj3RnFxT08u8ghzwweI3mU1vk7ms6mMMysunG%2Fr4hSUIFEE9h2OGoEIIckfSRH%2FDsaTRHgMpdiLQznAv4wSsKMjv29TLBmqqTgmXr5Xfx9DcSDEybYqMJcrCMHfQKZ2DhcJdlMwZYcoF9xapy4slHbOUAlNqb95QGSF97ZRSrjwxCXz&X-Amz-Signature=25532e2204228d27140b2072fdf410d245d6f1b0b7816ba9c4f9ff04e432ba00&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6UT6U2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTv5VZtRFRhDV%2BaxNJRzw3Ty5y7YXOkFAxZwMyrI5RwIgCGQnNa4PF8V1Aif4DsP1FWzek1sYpYuEkzV4Y%2FM9Bz8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJJ8lwjO9sfJjAynOircA7v6AOQGIc5lFtqntXVIcjitizU4bnL74zaz%2B60v24Qq3NbgmkN5IZcSQJrW2uDYY4n5v7K4OwrI8Q2y3VzPtmhfZ62nv9zvZCTiYDNNxBBuyFKyopw5lkC57cCODArIrRizKDSqs1LL9eXwyogZ9NYaGQ0FRhJMnJnKvXzJzmb%2BO4BLr2PQ7RRuXbW5iBJ%2B0mvEike4KvxFxRrIAk3m4t8E8Sap%2B0Yc7spHsW%2FueUe2UGdK3e%2FchV0rCU%2BAPzBhYerxfpU8xJs8yqzY8FD1sUUsDUjMevYjy8b7a81VzSZEixb8TN3bTBtRUrf4Z6tDZEYidd1a2Mzk5f9zM5BYwgh6ce8fM3RAsGtCRW%2BKm12ijOEVzQk5qhy20egrNRP6bziMaWfLP50%2BJJhPdlxrxBmI%2FGzAqaFedW%2Bl13JDv7DN0V9e0CYricABoGOT88pt8tzBQp1v2%2BbndmHZPCCf2KAZHYwYQ46O6JDwzldQVcdSDhVbJfGPvbEJw3NroZPk1nC0VUQcuq6YDLS3oqm28K7YNf4k7MsbnuAwAooK6o7uCa%2FzwJSGFTlqglyiGEWml%2BCihk%2FuE6e7uq1Yo5MjP78UI2oKZmOX03v5Zvgp8kcrViSg%2Bcf9Wd8N0rX7MMT9pcEGOqUBsaGVmzMXWYfmqiR8G692R0D0XOx2Dpe6krrbcsZnJPu9anj3RnFxT08u8ghzwweI3mU1vk7ms6mMMysunG%2Fr4hSUIFEE9h2OGoEIIckfSRH%2FDsaTRHgMpdiLQznAv4wSsKMjv29TLBmqqTgmXr5Xfx9DcSDEybYqMJcrCMHfQKZ2DhcJdlMwZYcoF9xapy4slHbOUAlNqb95QGSF97ZRSrjwxCXz&X-Amz-Signature=ee64f6dd12f529fc18a63e20a52c9232d0d25027d0b8a6d4f9b169b9b2decee2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
