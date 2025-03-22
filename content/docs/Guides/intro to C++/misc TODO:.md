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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAKXEVJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBbBqlE4j0sqg0S%2B1z7Z9lWWIa8eLVfQf3GPM7NdOrGkAiEA4yF54Xiiu5I3iSyMBUkZKLqD9CB3jIC6X6XwIFGGp4IqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsDrEpms3Y5CATNHCrcAwQHjWIFhnyBBerL2QK4oXfOhrYgcbon798WjfWY08LMjZ71b2aVrSaYFaTOmp2w9vF8M53HJCaT7ksct4yYZU4p8AwCQa7agjJAyF3rAaU2fpIYK1vmkxLMcNZffLJ8E3Fuh9qTX47RKmlvv87S9bL7xDw90hrhx9QSMNnh85toTkCdQG0ZkJTJxkXFjot7FDZWsmgBxTRE44IUfMBIkuJcIrZcccVrldN0Wf91aADT7YOIE0z3FlXA%2Bczo3%2BE0737EQoQu4kPsfAzGy2gqcl9pB4aWY2EFQr33%2F3ZexCThaPt6e1eJMLGBNFNzJEV6owV3N2CgBqtQp7b3c2msuH4K3XIBxg3MrvWAxQ%2BSNkYdrpBLABpx7xIKc47Df6g8kzljk8zbp72rv7jQ45nl6h47PLH4hcHptW5cvXdP83goQxVq2gNA%2FvuOYBR15q5MGM%2BVGg96GSxHytJZmB0QjxqsZFyp8gBNcYVpPhICVB7OyOdelY%2FfBLnE%2FG223c3F0qrC5KFF6gC%2BLZ54nJSFFRC4x14eZfCLcbryHXHFvkPxOp6v3%2FmAubrSP2%2BI9VYOUQXCOsZESfyouMFBjyuApWBPC2mnJ%2BoP%2Bum4gbTjbsmm0tWXVVjuC0hDA9jmMLS7%2BL4GOqUBjfa4Sr6q43OipjqVVAzGdNQcUy4sfOhO3Af%2FTjVd5AXcxke6xCKyJT64ln8%2FHpEc%2BLpN%2FJ5aVvLT0Gm4MvdJb%2FOmOYD6wpNNZcEI6QKnPI%2BPETo5XaVUBnl0VRhrYg%2FZUBDNKuPRO%2BiG7ewbrHt0JZ8EDf7DwJKoI3RD8PnjZlAZ%2F%2FlT7toI1%2BJcBpSFhtX%2FWt%2F2Z5%2F1MIg4WUwRgqSEtvYfica3&X-Amz-Signature=903540f063b0982164c9883f4c58630871ff1b90c58cc9eee6e6535292942c61&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAKXEVJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBbBqlE4j0sqg0S%2B1z7Z9lWWIa8eLVfQf3GPM7NdOrGkAiEA4yF54Xiiu5I3iSyMBUkZKLqD9CB3jIC6X6XwIFGGp4IqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsDrEpms3Y5CATNHCrcAwQHjWIFhnyBBerL2QK4oXfOhrYgcbon798WjfWY08LMjZ71b2aVrSaYFaTOmp2w9vF8M53HJCaT7ksct4yYZU4p8AwCQa7agjJAyF3rAaU2fpIYK1vmkxLMcNZffLJ8E3Fuh9qTX47RKmlvv87S9bL7xDw90hrhx9QSMNnh85toTkCdQG0ZkJTJxkXFjot7FDZWsmgBxTRE44IUfMBIkuJcIrZcccVrldN0Wf91aADT7YOIE0z3FlXA%2Bczo3%2BE0737EQoQu4kPsfAzGy2gqcl9pB4aWY2EFQr33%2F3ZexCThaPt6e1eJMLGBNFNzJEV6owV3N2CgBqtQp7b3c2msuH4K3XIBxg3MrvWAxQ%2BSNkYdrpBLABpx7xIKc47Df6g8kzljk8zbp72rv7jQ45nl6h47PLH4hcHptW5cvXdP83goQxVq2gNA%2FvuOYBR15q5MGM%2BVGg96GSxHytJZmB0QjxqsZFyp8gBNcYVpPhICVB7OyOdelY%2FfBLnE%2FG223c3F0qrC5KFF6gC%2BLZ54nJSFFRC4x14eZfCLcbryHXHFvkPxOp6v3%2FmAubrSP2%2BI9VYOUQXCOsZESfyouMFBjyuApWBPC2mnJ%2BoP%2Bum4gbTjbsmm0tWXVVjuC0hDA9jmMLS7%2BL4GOqUBjfa4Sr6q43OipjqVVAzGdNQcUy4sfOhO3Af%2FTjVd5AXcxke6xCKyJT64ln8%2FHpEc%2BLpN%2FJ5aVvLT0Gm4MvdJb%2FOmOYD6wpNNZcEI6QKnPI%2BPETo5XaVUBnl0VRhrYg%2FZUBDNKuPRO%2BiG7ewbrHt0JZ8EDf7DwJKoI3RD8PnjZlAZ%2F%2FlT7toI1%2BJcBpSFhtX%2FWt%2F2Z5%2F1MIg4WUwRgqSEtvYfica3&X-Amz-Signature=0df14700f913e91276d41e90c3c6a0751006ac0787ef08f7fae7e5f282978dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
