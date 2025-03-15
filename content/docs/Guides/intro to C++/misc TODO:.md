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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YWJMJB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpkJFrlG8VK16GgUOXgJo4gVE%2F%2BrUjvweUGSTgdcAs5AiEAqNOB91XYlbCnROeLq5xroFpYRhEijwR%2FQWRo1FSyNqsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLTTX5L1wDpsydllNyrcA8loHEe%2BKyYDoer5fZK8rBL3bthJy9qg4lEaVXvsbbVtWpT%2FEmRYiOJzlwrJZIwQ6kUiqEJkJ2j3aEGbk6iHoh55mioeidA83UKx%2FwtLQVSaidAmN7zT5I55L5d1wgCDVQE6mSVOXYGmsP5ztnnQKv8v4mTccBMJZCfZ3jPK4T%2BPoXCnilQrSduyY0bZdiXklYzHxEDH8Sjvk9qSgOEFv%2Bs6oIczNPUfZq2r6qbzgrQKFbn765KMNOoc6evDojoaFZmhbwgxlc4QvIYZUvTxD0zDiRkCZYEGMswjbXlNCToOBfD9FqkZER5dYAXZBGX91uX30iyoYLoe7JFRQo8wEeWMQES4M3FtETrfoJUey0NN0OY%2B774hyewqfqBMyjxjE6pvbUZ4OQMSnEREweiii06DDL9nu0djUa6TMKpVLIFOEn3cKRO2%2Fcs3s98l19rIGhy%2F0nb%2B6y97DrcVUbBzosOtucwl%2FKEcVfJZBVJuY40QJtQxp4uiCrhU%2BWqnYh3ufWPYrc4T1Sac28UsL6WRnyF1g4c%2FtTa1N%2F8ai5Y%2FBdxfR1WUi7gdWdEGxhN2eqjYErAvukilvG4Oicy2IzNPRtm4ebpd%2BHzhJM2lQzc2QshkIU6kZuiufIFO%2FIWDMKPv1b4GOqUBnIO7JSCmMBmJEz1ZoIhHTYw7Bku8WW0vPDvOh9eFrmZ6A21RJLOO%2FWp6jSqOF0fqSAcd4lryjbRBAmXLBuzszS1Hxp2O%2FXHwooNO3n1J%2F6E6IfjWbouzXoj9FpqCDxcX4%2BQaGmFVcovBKBu%2BDmeA%2F%2FrMrLIVaRLJIBt82JGtljz28Mvov0hqGjw7spuftKeiYAM5ykvPWOcgnMG%2FlPk8s4zdvz%2Fw&X-Amz-Signature=65ee69a2261c0494759c8b7ad97aa1cb70e545bf4e24be4ab9bf8c7218192bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YWJMJB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpkJFrlG8VK16GgUOXgJo4gVE%2F%2BrUjvweUGSTgdcAs5AiEAqNOB91XYlbCnROeLq5xroFpYRhEijwR%2FQWRo1FSyNqsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLTTX5L1wDpsydllNyrcA8loHEe%2BKyYDoer5fZK8rBL3bthJy9qg4lEaVXvsbbVtWpT%2FEmRYiOJzlwrJZIwQ6kUiqEJkJ2j3aEGbk6iHoh55mioeidA83UKx%2FwtLQVSaidAmN7zT5I55L5d1wgCDVQE6mSVOXYGmsP5ztnnQKv8v4mTccBMJZCfZ3jPK4T%2BPoXCnilQrSduyY0bZdiXklYzHxEDH8Sjvk9qSgOEFv%2Bs6oIczNPUfZq2r6qbzgrQKFbn765KMNOoc6evDojoaFZmhbwgxlc4QvIYZUvTxD0zDiRkCZYEGMswjbXlNCToOBfD9FqkZER5dYAXZBGX91uX30iyoYLoe7JFRQo8wEeWMQES4M3FtETrfoJUey0NN0OY%2B774hyewqfqBMyjxjE6pvbUZ4OQMSnEREweiii06DDL9nu0djUa6TMKpVLIFOEn3cKRO2%2Fcs3s98l19rIGhy%2F0nb%2B6y97DrcVUbBzosOtucwl%2FKEcVfJZBVJuY40QJtQxp4uiCrhU%2BWqnYh3ufWPYrc4T1Sac28UsL6WRnyF1g4c%2FtTa1N%2F8ai5Y%2FBdxfR1WUi7gdWdEGxhN2eqjYErAvukilvG4Oicy2IzNPRtm4ebpd%2BHzhJM2lQzc2QshkIU6kZuiufIFO%2FIWDMKPv1b4GOqUBnIO7JSCmMBmJEz1ZoIhHTYw7Bku8WW0vPDvOh9eFrmZ6A21RJLOO%2FWp6jSqOF0fqSAcd4lryjbRBAmXLBuzszS1Hxp2O%2FXHwooNO3n1J%2F6E6IfjWbouzXoj9FpqCDxcX4%2BQaGmFVcovBKBu%2BDmeA%2F%2FrMrLIVaRLJIBt82JGtljz28Mvov0hqGjw7spuftKeiYAM5ykvPWOcgnMG%2FlPk8s4zdvz%2Fw&X-Amz-Signature=15a053af9f77398c6b47ca7c0714afcb8335589cf49610845b343175ccd55788&X-Amz-SignedHeaders=host&x-id=GetObject)

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
