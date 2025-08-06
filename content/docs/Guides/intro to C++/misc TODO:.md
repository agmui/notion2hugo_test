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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCHR6M4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC40ycSTTbqeW9i7kTNs0x%2FwpnOo%2BdkUKttuzsFOFuX4QIhAMoVCndQopF5SweF1Vi9OL4VfQkF5IAG4Oi8xvRq73rqKv8DCHMQABoMNjM3NDIzMTgzODA1Igy9mAwXsqYFMtWAQVoq3AP3FK190ObxxAk%2BKv0WTfumx1%2FqndNW1LtsB8eMVLNBWrF6wXnmaNMnUiraMvATo9CTnPOCGGeKBoizEbkAH87LEm%2F1xXzedRkwtqke0x0DwsU0aTKbrXMZxIcEW17JpYjTFsr0tuYPGGoXnLyfWwex%2FKPRsFmP%2BtGhPEHVEdK%2F%2B68DU824Wq8SLmgwWyuxQM2qQI%2BHsxGqq6aRX8KxQZ0ThFzScB%2B6k%2BVkkkohvJFWwPZfY7ykHzwiX%2BBuUUzJvkQfstsLNXDsc3Fx0kNDoyRNolO1GuWQ%2FjW%2FoqAuwnaWU8oNsvwRL5KeEyU0E8Ox69rVxQ6m5KWNKpzCEHiAnQUqBY9T5yXcLh%2Fy7WnnW8%2FyfQTpnPojekP6zL2UbnRZxNQiFM%2B6askxZwpPVh4ngfyfUJgyNLYpUtiAOt8LVkY8C7GMAeO5ZXkwsmjuBD2KDgkrHKUfzjijdx5vU1bG5WCmZVqIoZ6ugE1JD8HGR1OsYGwgGne56HL0dITZ7qVzUyeMfqRfJZkmYfcGTcQVp%2FkcyQGtpsX4FFj7U1DFmaZd8SWktnP2qx39ObbtxVjT7gjDyIfdiOrjL2YABGHjzBpx2AXbgkKo3YzwkYL95DciXM%2FRCVkrm%2BAxkZ9TFDCsz8zEBjqkAenEOsdAz4%2FryqbqlR6%2FSOqY9PQagq5sYOTsbJixOETmIeMyPZetMH8v2wNk2IJEEpAODfMNljKLADhdV4dDWPk7h%2FwRXUWfU%2Fbzt%2BAzveDCKinbpaIKh2%2FaMfcf1Zl1w2TaKFZY45kpFX2f8TYTqVaaH%2BJ21zhOo93%2B6XmRot0l5xu5%2Fg99fsMLzVM3XlUEpq9RNC3Qhumm1F3xi%2FeqzVAmWjGr&X-Amz-Signature=5a8199db8fcd85c6ccaddcb6ce2ff390d8175d4f060e0d57a66c02b78c6aa4eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCHR6M4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC40ycSTTbqeW9i7kTNs0x%2FwpnOo%2BdkUKttuzsFOFuX4QIhAMoVCndQopF5SweF1Vi9OL4VfQkF5IAG4Oi8xvRq73rqKv8DCHMQABoMNjM3NDIzMTgzODA1Igy9mAwXsqYFMtWAQVoq3AP3FK190ObxxAk%2BKv0WTfumx1%2FqndNW1LtsB8eMVLNBWrF6wXnmaNMnUiraMvATo9CTnPOCGGeKBoizEbkAH87LEm%2F1xXzedRkwtqke0x0DwsU0aTKbrXMZxIcEW17JpYjTFsr0tuYPGGoXnLyfWwex%2FKPRsFmP%2BtGhPEHVEdK%2F%2B68DU824Wq8SLmgwWyuxQM2qQI%2BHsxGqq6aRX8KxQZ0ThFzScB%2B6k%2BVkkkohvJFWwPZfY7ykHzwiX%2BBuUUzJvkQfstsLNXDsc3Fx0kNDoyRNolO1GuWQ%2FjW%2FoqAuwnaWU8oNsvwRL5KeEyU0E8Ox69rVxQ6m5KWNKpzCEHiAnQUqBY9T5yXcLh%2Fy7WnnW8%2FyfQTpnPojekP6zL2UbnRZxNQiFM%2B6askxZwpPVh4ngfyfUJgyNLYpUtiAOt8LVkY8C7GMAeO5ZXkwsmjuBD2KDgkrHKUfzjijdx5vU1bG5WCmZVqIoZ6ugE1JD8HGR1OsYGwgGne56HL0dITZ7qVzUyeMfqRfJZkmYfcGTcQVp%2FkcyQGtpsX4FFj7U1DFmaZd8SWktnP2qx39ObbtxVjT7gjDyIfdiOrjL2YABGHjzBpx2AXbgkKo3YzwkYL95DciXM%2FRCVkrm%2BAxkZ9TFDCsz8zEBjqkAenEOsdAz4%2FryqbqlR6%2FSOqY9PQagq5sYOTsbJixOETmIeMyPZetMH8v2wNk2IJEEpAODfMNljKLADhdV4dDWPk7h%2FwRXUWfU%2Fbzt%2BAzveDCKinbpaIKh2%2FaMfcf1Zl1w2TaKFZY45kpFX2f8TYTqVaaH%2BJ21zhOo93%2B6XmRot0l5xu5%2Fg99fsMLzVM3XlUEpq9RNC3Qhumm1F3xi%2FeqzVAmWjGr&X-Amz-Signature=6a103378651c1b13214dbb23decd6696f020335f27f2ac68492c1c8ef5ce0d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
