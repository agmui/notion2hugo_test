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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XC2CJ3I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF9crP1En2%2FzRROiJNV4JtFPEFi47Z7s5lWY6xa9Yrf2AiEAgtkV6YotQzzyJFvYjtL3brrgk2OUtYXVMOWOVsRTNwMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLY2Zn8HuzFXaeJzdSrcAxSPh5zmq3UHFzhDJkwAUOKaBc1Xj1zVOhyZWpINO7s3QaphkcjUMKUKl7Iucvkj3u5XgQevksTe5yLxDhccZ6vttX0%2BWK94zL2hwo4hSN5xW%2B5%2B2tcmMsDFAAjy2o3%2Fa72kQ6TJvC1wo26ti%2FDD6B9WHVsBRQUgK7tiT2lGqxYSRcx%2F00O5%2BMRaAtAnJQkryjECsj3AjSbQZHo5apq71kMjHlfZVObaD8whJGeJGN9Abi2f7g%2BRp73vfNq96YG%2Fx9dphhvTZLSrLwpsWcNXBhvcgUtfSqCcK1flrOI3EAq9NEgsS7o%2FeBAmZcmmJMd0OAhBWiPBcIjGvUtwNz2fjC5WRD8Y4RlzBZaS6dlxLTPp5coOnSlbepxHxPrgESlACvT1TjDPS5%2FowEadbD1noY%2FXJU0%2B3F03%2FYkAWMrXpeut6KF4ljHTLrhl3dwWapI5PYzVfrJ5nvi%2FjwCNflZ2Dhi1xn2l1RQ%2Bazpvckh9nWWr%2BibVRrS9zaqvN6%2FJ9HnfGVUaGEkzt%2FsQG%2FzwVSjd2ls7YE0wiu4yZPafAXvLzWQ9eazEHH3jdHzeAcJ1e84BRHFLzT8%2B8R2stU36n1iJFefNBIDBs%2Bo6mHkn6%2Bz5OlS%2FEKcFElkj2eJGhOUyMLSMmL0GOqUBlJCHK%2FHOMtPE5g0dVmEtC8yWhSjvoXVskJBCz8Sh2jTDi9RLFZOwY79NDRdUUq2iwreatZXxeI0h21BUui468mZnpuiLA3JcbgGbfEDGKFV%2B9CjZ6NhiXXqzvEDUWiQxNVYhR1b887hGfNVC8sj97H5z5wFtZJIXRkQJY6gK9XGH6THvea%2BxJxqJjQDIT95RxeUNtj67PftauDTx4DXyOlai1P4i&X-Amz-Signature=0eabe0df65e4909161fd6bf55a31553213c3c70e23db8836cf38f4988689b297&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XC2CJ3I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF9crP1En2%2FzRROiJNV4JtFPEFi47Z7s5lWY6xa9Yrf2AiEAgtkV6YotQzzyJFvYjtL3brrgk2OUtYXVMOWOVsRTNwMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLY2Zn8HuzFXaeJzdSrcAxSPh5zmq3UHFzhDJkwAUOKaBc1Xj1zVOhyZWpINO7s3QaphkcjUMKUKl7Iucvkj3u5XgQevksTe5yLxDhccZ6vttX0%2BWK94zL2hwo4hSN5xW%2B5%2B2tcmMsDFAAjy2o3%2Fa72kQ6TJvC1wo26ti%2FDD6B9WHVsBRQUgK7tiT2lGqxYSRcx%2F00O5%2BMRaAtAnJQkryjECsj3AjSbQZHo5apq71kMjHlfZVObaD8whJGeJGN9Abi2f7g%2BRp73vfNq96YG%2Fx9dphhvTZLSrLwpsWcNXBhvcgUtfSqCcK1flrOI3EAq9NEgsS7o%2FeBAmZcmmJMd0OAhBWiPBcIjGvUtwNz2fjC5WRD8Y4RlzBZaS6dlxLTPp5coOnSlbepxHxPrgESlACvT1TjDPS5%2FowEadbD1noY%2FXJU0%2B3F03%2FYkAWMrXpeut6KF4ljHTLrhl3dwWapI5PYzVfrJ5nvi%2FjwCNflZ2Dhi1xn2l1RQ%2Bazpvckh9nWWr%2BibVRrS9zaqvN6%2FJ9HnfGVUaGEkzt%2FsQG%2FzwVSjd2ls7YE0wiu4yZPafAXvLzWQ9eazEHH3jdHzeAcJ1e84BRHFLzT8%2B8R2stU36n1iJFefNBIDBs%2Bo6mHkn6%2Bz5OlS%2FEKcFElkj2eJGhOUyMLSMmL0GOqUBlJCHK%2FHOMtPE5g0dVmEtC8yWhSjvoXVskJBCz8Sh2jTDi9RLFZOwY79NDRdUUq2iwreatZXxeI0h21BUui468mZnpuiLA3JcbgGbfEDGKFV%2B9CjZ6NhiXXqzvEDUWiQxNVYhR1b887hGfNVC8sj97H5z5wFtZJIXRkQJY6gK9XGH6THvea%2BxJxqJjQDIT95RxeUNtj67PftauDTx4DXyOlai1P4i&X-Amz-Signature=429130f98fa6f626e30ac1b562a2505f291736f30ac6e0fb98bead6010782487&X-Amz-SignedHeaders=host&x-id=GetObject)

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
