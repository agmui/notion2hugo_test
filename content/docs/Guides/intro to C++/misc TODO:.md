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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPWAWHW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVKSz%2F1mm25yGa4Pd3CkdFn8f5AkexCDftiz7IQ8GV9AIgO0EL3Nm9mStXU54nIEYIJsPVWfVk9Ay%2BDlMqXhGOxLAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIhOC2UI90BVGLAOmCrcA7KfA0Th%2BtnqjVkfApqs9veZRbAw4yuK5yqxIPg5Tk0WK1wO2pIdwJs%2F3mJ9WFv9v7B8EuDFbfqDF9mUEYbSTCcpp2yUs9CEmn%2FLuvhDHW9m3QxL%2BwYTGAtlRkWi6EG1xEuwANVJ%2FiR7Buk%2BfrNrl7KuTpQgsnhg%2Bmu8%2Bj3veo3Hk3owEvlWNd3MO%2BjhZCziHAQK87wBsCr4O98LU9yX2PraRhxHyHBOs6dgCvepH6F4af7FmRx%2BDs5WdFalJTFWL8WKuzAx5JHnhpOWHuQcVDYD0avfGaUb2DtvgIGL3%2BEnWhwYgYSIniBJTJqimgPbEekPTz%2BG0xZFNvi%2FdZ5k6MwphYc4SGaMgfYgY1%2F516UifxI7r9086%2BOElziPprPGiWC0Q5y0T2jotjkjeefMHqBSyND%2B8Z1Kt1A%2BQ2ESkTKvleFIXu2WdtTznMQmdf2USmSPrh10USPmVX1Wl1xnQWgquujVGRwS9EjEQJ6FaXoa60TIiSQYJJRC1mW14bMV9k9ksK17Gg6OeFhbUbZpHCacC7hAektajzsrd7J89IuOF6YZe2CAV8025jgESjnIm6utZJ6ax6gjjV7%2FMor1SRbqaBa8gGffcgri8%2BRbkx4dXkla70jglFJdlbxOMN7nqMEGOqUB4zIfQUFoAsGIM7yBw1RWB4RKrBOTfCNKDLXnLwQ%2F7mvd2P9nkaMVhGap%2FlnsjT%2BW2GO0Bgv%2FgAg12K5VNzBppDzgrXEY4zszMdcwdIgM1AMRqqygrw0H5ufDWv29vmYpYJuVVhxWUlfE4KGLw%2Fqe%2BIxN1aaR9gmn6wmxpCCxo3UhsBWCE%2FKx5soDfCkgJ6hFN8ZKgN2fVP6DN7Xs06bOw9tS12pm&X-Amz-Signature=a87f2e6f9977d430b50c70c6e1160d20ce883bbc70f980b456f4d7f258578ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPWAWHW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVKSz%2F1mm25yGa4Pd3CkdFn8f5AkexCDftiz7IQ8GV9AIgO0EL3Nm9mStXU54nIEYIJsPVWfVk9Ay%2BDlMqXhGOxLAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIhOC2UI90BVGLAOmCrcA7KfA0Th%2BtnqjVkfApqs9veZRbAw4yuK5yqxIPg5Tk0WK1wO2pIdwJs%2F3mJ9WFv9v7B8EuDFbfqDF9mUEYbSTCcpp2yUs9CEmn%2FLuvhDHW9m3QxL%2BwYTGAtlRkWi6EG1xEuwANVJ%2FiR7Buk%2BfrNrl7KuTpQgsnhg%2Bmu8%2Bj3veo3Hk3owEvlWNd3MO%2BjhZCziHAQK87wBsCr4O98LU9yX2PraRhxHyHBOs6dgCvepH6F4af7FmRx%2BDs5WdFalJTFWL8WKuzAx5JHnhpOWHuQcVDYD0avfGaUb2DtvgIGL3%2BEnWhwYgYSIniBJTJqimgPbEekPTz%2BG0xZFNvi%2FdZ5k6MwphYc4SGaMgfYgY1%2F516UifxI7r9086%2BOElziPprPGiWC0Q5y0T2jotjkjeefMHqBSyND%2B8Z1Kt1A%2BQ2ESkTKvleFIXu2WdtTznMQmdf2USmSPrh10USPmVX1Wl1xnQWgquujVGRwS9EjEQJ6FaXoa60TIiSQYJJRC1mW14bMV9k9ksK17Gg6OeFhbUbZpHCacC7hAektajzsrd7J89IuOF6YZe2CAV8025jgESjnIm6utZJ6ax6gjjV7%2FMor1SRbqaBa8gGffcgri8%2BRbkx4dXkla70jglFJdlbxOMN7nqMEGOqUB4zIfQUFoAsGIM7yBw1RWB4RKrBOTfCNKDLXnLwQ%2F7mvd2P9nkaMVhGap%2FlnsjT%2BW2GO0Bgv%2FgAg12K5VNzBppDzgrXEY4zszMdcwdIgM1AMRqqygrw0H5ufDWv29vmYpYJuVVhxWUlfE4KGLw%2Fqe%2BIxN1aaR9gmn6wmxpCCxo3UhsBWCE%2FKx5soDfCkgJ6hFN8ZKgN2fVP6DN7Xs06bOw9tS12pm&X-Amz-Signature=07e95ab3e53058aa846566b9fc89c563640f5bbc8e68a3cd137ae8e066a82a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
