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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB77ZQ4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXcNqr9%2Bw3EPLJprB8nXhsGbiNpRCPCJaCrTu%2BLiMzDAiEAxzrh3HLcT7S9Y%2BTxbbjzo8RNUXzASy0DDaKn4deaQDoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOq5Itx5C1mfQ%2BashyrcA%2Bqawzy9BJbbPIobHZ0h%2BHBwPC7n5y4A7%2F9ilLPbzkNAEURv7U%2Fawfjv5OVGr3Q2ul6d1synU1Jw%2Bz7sf1pWN3ZNrasUF23jLVBLdJHcEx4zu%2BPODZGSFyin%2B9OYaPggBrM%2BLpg9pI98Mi8Od0GN8fJCwLiRUDQpOEf%2F1rhRJ%2Fsd1aiVhVvGxeXd9dlFnVHjBxnC5e8jm0y97W6h0vqQw17jB1iZ3JBnfMx%2BRZymHAqJ1Smdte%2FU8hM0DKTWcNmSYlkbsv5A9yXYW0YcFT%2Bi8P8xBecT2bY4i9PcStOFnLsnF62V8vmAaDqV2YTITvpUC5uDKfYUDUvuUAPwAdrMmYymR9PIN%2FD%2FV7e%2F0FShUbAgSjTPtnZmw4Oblv9DQweP7umXmldonZ8Zxe0zs54qOEcLhatWpi2wREOHfUY4BxL1kQZPxHFn%2Bkz7mhx5z%2BHshRIHWZSRzPxIuUT55w0gSGsT4kzV2%2F7tFAfEdnmWkpisbEbyQia%2FBfKx8S7%2FU5oI7M6dbhvfcCuUUYqlnbW7eEl5E%2BQVuRw4mtpO174tjej9J%2B0FwmIgI5i0uogiix0zN%2FJabvCWnW5hA4xDdy4cnIrYytegPHsHGjZixnJPhfYeOyi%2BlOfA%2BWQKfTnbMMWo9L8GOqUBSNXrkFzkcIpB2nPyKGsAeKszXXLuGFCzJf4%2FaDxi3otCL8ZbYy%2FhVBnmPZRUiVocA%2BBXz3efyXsRarKFpMBQUHc03cLFqKPcRJXd4ZUSCQrXhIJQzHHzbcm1gBS1613AcGp8RHRgQHsqukbYOfQeezTjZrMj5eMeHr65Rkrg1zrsaIRtngfnh46UyYypvcydwWCh%2FDxKitFhvDGL%2FGqTTXkOH7zC&X-Amz-Signature=d1f6feb04150f47c48171bfb3e1c4fd6527df0369dd78920f82614d77cd11891&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB77ZQ4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXcNqr9%2Bw3EPLJprB8nXhsGbiNpRCPCJaCrTu%2BLiMzDAiEAxzrh3HLcT7S9Y%2BTxbbjzo8RNUXzASy0DDaKn4deaQDoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOq5Itx5C1mfQ%2BashyrcA%2Bqawzy9BJbbPIobHZ0h%2BHBwPC7n5y4A7%2F9ilLPbzkNAEURv7U%2Fawfjv5OVGr3Q2ul6d1synU1Jw%2Bz7sf1pWN3ZNrasUF23jLVBLdJHcEx4zu%2BPODZGSFyin%2B9OYaPggBrM%2BLpg9pI98Mi8Od0GN8fJCwLiRUDQpOEf%2F1rhRJ%2Fsd1aiVhVvGxeXd9dlFnVHjBxnC5e8jm0y97W6h0vqQw17jB1iZ3JBnfMx%2BRZymHAqJ1Smdte%2FU8hM0DKTWcNmSYlkbsv5A9yXYW0YcFT%2Bi8P8xBecT2bY4i9PcStOFnLsnF62V8vmAaDqV2YTITvpUC5uDKfYUDUvuUAPwAdrMmYymR9PIN%2FD%2FV7e%2F0FShUbAgSjTPtnZmw4Oblv9DQweP7umXmldonZ8Zxe0zs54qOEcLhatWpi2wREOHfUY4BxL1kQZPxHFn%2Bkz7mhx5z%2BHshRIHWZSRzPxIuUT55w0gSGsT4kzV2%2F7tFAfEdnmWkpisbEbyQia%2FBfKx8S7%2FU5oI7M6dbhvfcCuUUYqlnbW7eEl5E%2BQVuRw4mtpO174tjej9J%2B0FwmIgI5i0uogiix0zN%2FJabvCWnW5hA4xDdy4cnIrYytegPHsHGjZixnJPhfYeOyi%2BlOfA%2BWQKfTnbMMWo9L8GOqUBSNXrkFzkcIpB2nPyKGsAeKszXXLuGFCzJf4%2FaDxi3otCL8ZbYy%2FhVBnmPZRUiVocA%2BBXz3efyXsRarKFpMBQUHc03cLFqKPcRJXd4ZUSCQrXhIJQzHHzbcm1gBS1613AcGp8RHRgQHsqukbYOfQeezTjZrMj5eMeHr65Rkrg1zrsaIRtngfnh46UyYypvcydwWCh%2FDxKitFhvDGL%2FGqTTXkOH7zC&X-Amz-Signature=6a6cbe264093bc283bca3c76e2eb65eebfb2c15ddd3be8bbb2a8e73c86087772&X-Amz-SignedHeaders=host&x-id=GetObject)

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
