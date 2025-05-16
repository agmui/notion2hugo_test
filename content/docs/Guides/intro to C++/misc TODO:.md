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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQXQD7P%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeubLD%2BuhjXbuP2HS5GMqqnNa%2BtVKS%2Ft8NBpEoVBFPlwIhAPm5ou5IZK4c0xb6SQmRW0obpK1tOZW%2F3Ci%2BBU2impGXKv8DCEoQABoMNjM3NDIzMTgzODA1IgwN6Bf7DCzLh4YNTYUq3AMizhKiQsxLu3GKRRitIjnMnr%2FywwEEEDSyP%2BzrvSHIaKCVxJSpulB1mwXNosN8L%2FBZYu0GhGakLUcqhtKBoj3EYHINYmMsuphcqDz%2FjTcqWnuS71RIfDPlwyoVa0O2tnWNQOBFdeP9Yom%2FOmaHt%2FjihVfu67lmxMiN2%2BceSFuTZGdpkC37lDAetv7oICBk2zArJcDUEu05C4jK8xnXRBEOvnZpIJ9tWH6YOzBaTQLdi72gby0on619bVhv1je05lF%2FGA%2FjJjrDRt9H6JZnzKP6GyRfh2I00Jc9yfXuhkxdaOMkBgZzwsn4QzNbCQjtoFYD8Rm%2B4rSTtXZx09R%2BgrwA%2F6hfhEno0O8P7NBVE5u83kQHvNiQUD7my1fDtk0lltdh%2BZkTUefTvgfmi4xQkB1XRxGv5sbRAr9tukWiB1%2F7QYAMfKkr1UWHSz4XxHeQhJPuJFpWlc4wy8QraIi9XlEdsvBanMPX7dH49MMP5%2FsXfIQfHX09cDT0n49RPxBnAViBDPaF%2FW7SKzNR3vBGzzx6AyYw5GBsk8D1knpC9ATfa9MFvIAXSp28Qb6Q0eeBfa%2B9vfe%2FX335JtZ1fOwct94M9CK0fkF6qO49iZUpA%2Fkh7TIeWl9LrYN9eZ947DDGz53BBjqkARfnZU%2Bf2uiaHnKt9rhaxgvTfv9B1zuBG4DRnfnePsuGAJbu030hrrryCCWfE8vLGz9Ai625ekOz3xKTaN%2FDhxQFPrF75fM8raWCUrBQY5GUFwnR8r%2FBiIY9lZfT3bJqDdWTk%2BpZ8e972P5tYWzLVzcAm8xELo9GQdGT3DWZQqLL%2B41dVX4PvqpRbRCsMXJ1yG9yJlBJKQ7wBchLqIhbP78xQJsV&X-Amz-Signature=876319a54deafd35d9be51ef02683ab523da2ba2279ae32756f731dbf2571a33&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQXQD7P%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeubLD%2BuhjXbuP2HS5GMqqnNa%2BtVKS%2Ft8NBpEoVBFPlwIhAPm5ou5IZK4c0xb6SQmRW0obpK1tOZW%2F3Ci%2BBU2impGXKv8DCEoQABoMNjM3NDIzMTgzODA1IgwN6Bf7DCzLh4YNTYUq3AMizhKiQsxLu3GKRRitIjnMnr%2FywwEEEDSyP%2BzrvSHIaKCVxJSpulB1mwXNosN8L%2FBZYu0GhGakLUcqhtKBoj3EYHINYmMsuphcqDz%2FjTcqWnuS71RIfDPlwyoVa0O2tnWNQOBFdeP9Yom%2FOmaHt%2FjihVfu67lmxMiN2%2BceSFuTZGdpkC37lDAetv7oICBk2zArJcDUEu05C4jK8xnXRBEOvnZpIJ9tWH6YOzBaTQLdi72gby0on619bVhv1je05lF%2FGA%2FjJjrDRt9H6JZnzKP6GyRfh2I00Jc9yfXuhkxdaOMkBgZzwsn4QzNbCQjtoFYD8Rm%2B4rSTtXZx09R%2BgrwA%2F6hfhEno0O8P7NBVE5u83kQHvNiQUD7my1fDtk0lltdh%2BZkTUefTvgfmi4xQkB1XRxGv5sbRAr9tukWiB1%2F7QYAMfKkr1UWHSz4XxHeQhJPuJFpWlc4wy8QraIi9XlEdsvBanMPX7dH49MMP5%2FsXfIQfHX09cDT0n49RPxBnAViBDPaF%2FW7SKzNR3vBGzzx6AyYw5GBsk8D1knpC9ATfa9MFvIAXSp28Qb6Q0eeBfa%2B9vfe%2FX335JtZ1fOwct94M9CK0fkF6qO49iZUpA%2Fkh7TIeWl9LrYN9eZ947DDGz53BBjqkARfnZU%2Bf2uiaHnKt9rhaxgvTfv9B1zuBG4DRnfnePsuGAJbu030hrrryCCWfE8vLGz9Ai625ekOz3xKTaN%2FDhxQFPrF75fM8raWCUrBQY5GUFwnR8r%2FBiIY9lZfT3bJqDdWTk%2BpZ8e972P5tYWzLVzcAm8xELo9GQdGT3DWZQqLL%2B41dVX4PvqpRbRCsMXJ1yG9yJlBJKQ7wBchLqIhbP78xQJsV&X-Amz-Signature=a81e33a34998fa446902be19a89bf2b3910ef8ccc16233c11eb74e0ed337c764&X-Amz-SignedHeaders=host&x-id=GetObject)

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
