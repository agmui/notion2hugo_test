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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOU5NSRY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPKiDNC6q%2BUxkVIX74R8Z7qtbtbn7GY4Y6SVmONFRNZwIge4UZ0mInmGTaIOVaDd3XRaF6EHf8VxaBdWY3zcsVfasqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLunaee6WLboAIWeUCrcA14olVzrpMOQkBbXyW56pdMx4xQec3ZdBkXXocPte4CAAWMiQMlxFq%2FCLt3Bg9lWaT26sd4%2FFq3utgbaIDXZUYGJD4tWfq6skx9RB%2F4K1%2BGa3lVRXyrd3zt7rIs0I%2FgmdADjNdOUUz1hDvEIFypUCAatqLT%2Bre1YlFM6%2BdyGjpTJ3HOSfF9wNCBL13SFG2xmK47K1T7lrr6%2FwfMg09ovBPUNrJakIR1IM%2BtDGj8BBE0yEEm5Nzmg80vYMLvHPdo7ePty280JEQRb8y5oHNJDsq3ijz%2BwQnYUFIkTQxomxhDX5xwceabCSVtZmwWwkX41LwRlvHTPpfUAFl6K%2FnjMKapWWanDZHhSR%2BdTWFTErHrbzbv2kVKCKdl%2F96DvLgvYr%2BY7KscNVGh0A5ulq%2BFQhZEWaohlivk1JquDVBvcgXoeW2vIL1b0JODPXb5TCiudAz%2Bm%2Flcbj%2FJUhCeKd0UWXtSfHIaNUL93GOVSl1zoKR8g%2B0wVpBcZg0KUThyM7M0Tl7EuYquePcKXRkKX%2FlhZ6OM%2FiKMA9GAdH%2BHRCifBeZYYNqT1Yst8reyRXEA2bYrqcqZwHeE8QxEVMlHf0u6536a45KsvCPm%2FO%2FxtPI5WvNXQUNPr3avuAfs71D2CMMjSuMMGOqUBx16Jx8VDgCIJJrGS83O1xnwCg8y7%2BdHWdMNlxn6wLSZf9Jhczw95t4cE0kt%2BWY2vRUZ2XEXveNaLdTohk363gm8lDDKJqT57wZ3s59%2B7WT%2Bx3wQTTagFLUU0wZ6Iay%2BcqCV5E%2FYrpPusyaRvWcQ3gCi%2FnWT1%2FXB5M2chmYQyD%2BQ49c%2FtzBxAqtGfXiRzGhwk7TbEMyn1janpOOkLmXtyTGbQWkdy&X-Amz-Signature=f9b958c9ded4bf34ea503103c3429cb038deaee8601411fd9706b46859d3c0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOU5NSRY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPKiDNC6q%2BUxkVIX74R8Z7qtbtbn7GY4Y6SVmONFRNZwIge4UZ0mInmGTaIOVaDd3XRaF6EHf8VxaBdWY3zcsVfasqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLunaee6WLboAIWeUCrcA14olVzrpMOQkBbXyW56pdMx4xQec3ZdBkXXocPte4CAAWMiQMlxFq%2FCLt3Bg9lWaT26sd4%2FFq3utgbaIDXZUYGJD4tWfq6skx9RB%2F4K1%2BGa3lVRXyrd3zt7rIs0I%2FgmdADjNdOUUz1hDvEIFypUCAatqLT%2Bre1YlFM6%2BdyGjpTJ3HOSfF9wNCBL13SFG2xmK47K1T7lrr6%2FwfMg09ovBPUNrJakIR1IM%2BtDGj8BBE0yEEm5Nzmg80vYMLvHPdo7ePty280JEQRb8y5oHNJDsq3ijz%2BwQnYUFIkTQxomxhDX5xwceabCSVtZmwWwkX41LwRlvHTPpfUAFl6K%2FnjMKapWWanDZHhSR%2BdTWFTErHrbzbv2kVKCKdl%2F96DvLgvYr%2BY7KscNVGh0A5ulq%2BFQhZEWaohlivk1JquDVBvcgXoeW2vIL1b0JODPXb5TCiudAz%2Bm%2Flcbj%2FJUhCeKd0UWXtSfHIaNUL93GOVSl1zoKR8g%2B0wVpBcZg0KUThyM7M0Tl7EuYquePcKXRkKX%2FlhZ6OM%2FiKMA9GAdH%2BHRCifBeZYYNqT1Yst8reyRXEA2bYrqcqZwHeE8QxEVMlHf0u6536a45KsvCPm%2FO%2FxtPI5WvNXQUNPr3avuAfs71D2CMMjSuMMGOqUBx16Jx8VDgCIJJrGS83O1xnwCg8y7%2BdHWdMNlxn6wLSZf9Jhczw95t4cE0kt%2BWY2vRUZ2XEXveNaLdTohk363gm8lDDKJqT57wZ3s59%2B7WT%2Bx3wQTTagFLUU0wZ6Iay%2BcqCV5E%2FYrpPusyaRvWcQ3gCi%2FnWT1%2FXB5M2chmYQyD%2BQ49c%2FtzBxAqtGfXiRzGhwk7TbEMyn1janpOOkLmXtyTGbQWkdy&X-Amz-Signature=93bb618b35c47adc2e45ba6c7050704f0c70c1f3c8d7b256f21f00ab27ad615a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
