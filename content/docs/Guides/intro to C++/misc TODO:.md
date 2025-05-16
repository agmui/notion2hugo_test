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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGTFHQO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWy1xOPhK3vJOHKCNWpp7NviBycpgiBXMXxVAmdLlKwIhAJHHPM2Hy600C41XSWKh4o%2BspJgX1QQ4Prpwuimt3AEqKv8DCFAQABoMNjM3NDIzMTgzODA1IgxHauf0d6pIbXxOjgsq3ANhSHGX7DrYnuK8YjEemfCNHtPsj2GExrMBnYoNZ9oyKaLbmZVrF2UrrxpF2884q9lMiNsu4%2FMoHPhWxclO%2Bekm6eBWaGJ%2BN74cobhUTMqax5ubS2OPxE3rZjqs%2Bk53AbzVFZbtQFODYoSl2TS0cm7XNxUNOR60zDwIpZyj4ubGn%2BYues2vTgupHwxp8czHiUQpPxRDMM3UgvcK43VnQhjQY6uOXDQxq0lksxcL5ML5PbOr6F2yp8O62zVqqkLXsoGUGs54h9jdtD%2BQO%2FmREWokUC7%2BtF22wkcyQjOC1vDHSF9KdapdFZ%2BnhRwZdu1TjI2ok5I23Y0dsDShVH%2BysrorteErpZqkCkMKpr9dDrPk7ObuMu98WH4eatNG9FqOlbLDJqfH87m8rAwuLOXWdaRmEG%2By%2FhV7UZDmiUNS28ygH%2Bduf6kOdD4H9kigb0grhpheIg2Joi0bWEC%2BkQ4H0GbL7KDcpL%2BJd7%2F%2F7tdqXcwCtpGGnxZS%2BkAB2BwHjhpgS6F1eWka09ovFPBhv9m7hIAPlZty%2FYixqg%2FxKhwRDe4g44SS6XLPzGccPhuwhJql5bHK0xr94OSgYh5TEK141%2BljBijaNb9%2BoF%2Btk7s6VqIwP2XdR1fzpsyJIS7EJTDz%2BJ7BBjqkAY1TrqKgr77RUGvQqQm%2F1987ZQLJS84IM%2BwN1kKg2ggTbGCcBaRJpyCQl6Hu1qBzijf1mQ3AFnLN%2BXzoG0Myi6XWCeuU7Qm8qhRAPrzzXc2KyvAmv0rBPk0%2Fw5rt0OvN8PhWz3RWmsXORcPI090%2BXs7jja7tRFvcxDcmOlu0%2Bxrd0omEolBAg2lqfo8fuYrJtilXGwkZwMuYyqd%2F9NDYwKzW8Z%2Fb&X-Amz-Signature=451a1db0156a772a08c0bad0ba57e3b741ea5b703df158c9351330c3352cff91&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGTFHQO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWy1xOPhK3vJOHKCNWpp7NviBycpgiBXMXxVAmdLlKwIhAJHHPM2Hy600C41XSWKh4o%2BspJgX1QQ4Prpwuimt3AEqKv8DCFAQABoMNjM3NDIzMTgzODA1IgxHauf0d6pIbXxOjgsq3ANhSHGX7DrYnuK8YjEemfCNHtPsj2GExrMBnYoNZ9oyKaLbmZVrF2UrrxpF2884q9lMiNsu4%2FMoHPhWxclO%2Bekm6eBWaGJ%2BN74cobhUTMqax5ubS2OPxE3rZjqs%2Bk53AbzVFZbtQFODYoSl2TS0cm7XNxUNOR60zDwIpZyj4ubGn%2BYues2vTgupHwxp8czHiUQpPxRDMM3UgvcK43VnQhjQY6uOXDQxq0lksxcL5ML5PbOr6F2yp8O62zVqqkLXsoGUGs54h9jdtD%2BQO%2FmREWokUC7%2BtF22wkcyQjOC1vDHSF9KdapdFZ%2BnhRwZdu1TjI2ok5I23Y0dsDShVH%2BysrorteErpZqkCkMKpr9dDrPk7ObuMu98WH4eatNG9FqOlbLDJqfH87m8rAwuLOXWdaRmEG%2By%2FhV7UZDmiUNS28ygH%2Bduf6kOdD4H9kigb0grhpheIg2Joi0bWEC%2BkQ4H0GbL7KDcpL%2BJd7%2F%2F7tdqXcwCtpGGnxZS%2BkAB2BwHjhpgS6F1eWka09ovFPBhv9m7hIAPlZty%2FYixqg%2FxKhwRDe4g44SS6XLPzGccPhuwhJql5bHK0xr94OSgYh5TEK141%2BljBijaNb9%2BoF%2Btk7s6VqIwP2XdR1fzpsyJIS7EJTDz%2BJ7BBjqkAY1TrqKgr77RUGvQqQm%2F1987ZQLJS84IM%2BwN1kKg2ggTbGCcBaRJpyCQl6Hu1qBzijf1mQ3AFnLN%2BXzoG0Myi6XWCeuU7Qm8qhRAPrzzXc2KyvAmv0rBPk0%2Fw5rt0OvN8PhWz3RWmsXORcPI090%2BXs7jja7tRFvcxDcmOlu0%2Bxrd0omEolBAg2lqfo8fuYrJtilXGwkZwMuYyqd%2F9NDYwKzW8Z%2Fb&X-Amz-Signature=e305e43515385b29adaf80ee2d987b63cd84559d95b7d0fce7f78dba718940b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
