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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZAGAU5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC879Jliyh%2BlsqpiyZaTl5r8reuOngNH78x5bHGAVNmIgIhAIcPvE66eVYssDvuxfCNjk7WPArRKYQMu3YmKZZRjz0eKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHfiy6iV%2Buo0NhYvMq3AMdWk2rb1dNWO822Rtni6p7pdIkYtH6GCDvlJPxUUDixT54juAuCRJAFuqjzGMjOMykDwAPNsrq18PsZySuDKtlqATeTvr3u4BVQJPrVW6rETG6AfDl4I4bGg84jXfYXuTcTx2FR3vuCYEkt%2BDEU9neLnKdR5C9Gmt97J9062Fkzz5v3ABtBSA0jsovpcXoZxJjqCGjbmrwEo2%2BlXlR%2B1%2BGYOfh71e9VILpSqUW6PqUqHbRx8QPxiE37EKludpvxz8CXLgKXSXswM7uJLG6JLRPdM6EPOEIbWVlqf%2Fs5%2B40ywVGj%2F44lTjE9Gm%2F8YhqUkAV6oANIdI3qtjfVhmf2qLwI5Pxaq3c1dxwQwjvKo6kQrcASO7%2FrrLIc8TAcicRsGJn%2BLiw%2FhZtVT6gdq925SWwlWdvU2MjgsJ53PP%2B6KdarjVqQMuZ4N4KAQty7l6KFD%2Bs9nzqNr%2FJ0S8yhhGcGUhRGBtQQIIDLuop8X8hkN8PURgZDlGvaAVc13Oc7SBdyjep%2FEiuWHvdkQi8wQKp13sXGEfDbXHlIT1KpInEedW0riG7%2FmZD2iESiR5Juosdg8rb9%2BQ7%2FTA4N0R2D9LQGOtOdrSX10wWWqvZGBlUftsTZZ4MrXB%2BMYFL0yZB%2FTC9t6y9BjqkAXHNeV97jfalHemnVyGVg1rJ4d9Anv9mbdw27G1GcQqN2d94MRLFxEwRmYgZEaK%2FS2jypOMGLsvTxrnMXPxX4N08dLOT1fsqOwFJmWe7ssncOBtrCSZoDN%2Blyk3BbDz4Glc1RHD7eHfW307q%2B%2BR2xFuR4uaH1nzjMHWtOxnDG1GHTLAce5ELwd%2Bs36gRqFS3EBwBQmfNK7TGD2NgigTALNcs6jQO&X-Amz-Signature=f28377e2793a433192c720e89ae3688af02c76f15c890b2a7de7111a64489e40&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZAGAU5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC879Jliyh%2BlsqpiyZaTl5r8reuOngNH78x5bHGAVNmIgIhAIcPvE66eVYssDvuxfCNjk7WPArRKYQMu3YmKZZRjz0eKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHfiy6iV%2Buo0NhYvMq3AMdWk2rb1dNWO822Rtni6p7pdIkYtH6GCDvlJPxUUDixT54juAuCRJAFuqjzGMjOMykDwAPNsrq18PsZySuDKtlqATeTvr3u4BVQJPrVW6rETG6AfDl4I4bGg84jXfYXuTcTx2FR3vuCYEkt%2BDEU9neLnKdR5C9Gmt97J9062Fkzz5v3ABtBSA0jsovpcXoZxJjqCGjbmrwEo2%2BlXlR%2B1%2BGYOfh71e9VILpSqUW6PqUqHbRx8QPxiE37EKludpvxz8CXLgKXSXswM7uJLG6JLRPdM6EPOEIbWVlqf%2Fs5%2B40ywVGj%2F44lTjE9Gm%2F8YhqUkAV6oANIdI3qtjfVhmf2qLwI5Pxaq3c1dxwQwjvKo6kQrcASO7%2FrrLIc8TAcicRsGJn%2BLiw%2FhZtVT6gdq925SWwlWdvU2MjgsJ53PP%2B6KdarjVqQMuZ4N4KAQty7l6KFD%2Bs9nzqNr%2FJ0S8yhhGcGUhRGBtQQIIDLuop8X8hkN8PURgZDlGvaAVc13Oc7SBdyjep%2FEiuWHvdkQi8wQKp13sXGEfDbXHlIT1KpInEedW0riG7%2FmZD2iESiR5Juosdg8rb9%2BQ7%2FTA4N0R2D9LQGOtOdrSX10wWWqvZGBlUftsTZZ4MrXB%2BMYFL0yZB%2FTC9t6y9BjqkAXHNeV97jfalHemnVyGVg1rJ4d9Anv9mbdw27G1GcQqN2d94MRLFxEwRmYgZEaK%2FS2jypOMGLsvTxrnMXPxX4N08dLOT1fsqOwFJmWe7ssncOBtrCSZoDN%2Blyk3BbDz4Glc1RHD7eHfW307q%2B%2BR2xFuR4uaH1nzjMHWtOxnDG1GHTLAce5ELwd%2Bs36gRqFS3EBwBQmfNK7TGD2NgigTALNcs6jQO&X-Amz-Signature=070f89a954e33700a4d08eb04f53ab2495540de6d661c56225a9e93442936c84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
