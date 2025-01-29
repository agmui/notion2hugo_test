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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BKODZUF%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHBsBFnnDLoM4G9j3TsXYe0NOY9JWmNqkVxHjzgxa362AiEAg4yEMM6qHlsg8qpZ%2BSiuIAsXu4qZjngpeN3E5KPui4MqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBA9%2BNfEpwIZrFMuircAyXnjqVme1bWDWbR1C6ySyzv1ZDNeSjZ6M5EuGUjLANeJObDkr3D9cRaYr3tPcNP32ymFkJUqgUSWPVUz%2FhFUzbb0D9LFqgOOfHgpiIJEMZWt8qK94ZXt6ljy5%2BxbDWFNvEXaUF%2FrC78IAhARy%2BZxiKrTMSzZlVcdbm5n3xEtCG44GUuSw9DWHtZtIU73WIALkVLl4zFPTlYxG3L0wQQQ7MIOw0%2B9EwpWwLAEqxq%2BV7jqFxKmpPExrl6REZGXUf9CBwrQwoDmATWgK7e8qWn9KRLHb1xR9mIN6srMHQGUjOL%2FAhd1M2rmO7GHou%2BQL6vQXgglTYiodv1c4QsQ4EA3zwwOKQ7l0%2F7iUPwLCoEYMsJi8fXZ6%2BLOcwze%2FeXqyLoc7KyUVjyj62ztUSdK%2FxqiACli9GkeXlvKrJm2rQx16ihAXeexahQeoBx9GO2%2FiDmXeJs4kMim471wBSozeI40tTVQJFxKW1pk6sPJrDlbYpUp6Xg2TTrsVrJsgQfLpUoFQ%2Fp5CIh5RleMnrWutkldVpcNm%2FHN0%2BPmJpXPF4%2Bd1sX2d9Nz6OwrJYmPtGi7BoUx2w1zZS6oMq6qn9N6PQ9TJGJQridcm5rM3%2F87Wq0Bzo4KnfYwrVvYRYI%2Fz7tMJ2h5rwGOqUBThkz%2Fjak2NSQP%2F0mSx7DZ1828%2Fuj93LFfXrzHtla1xfbH8DcS%2BxhFjPuAxEeaqoNENGLnTulPcpcZMzo41E2bex0Z6l9RapAuOSB7d5JfeYn7AVXDXtABw00A73s%2FwIHPnv787tivdLO%2BikfcK3kHLXlHuo2t14mOo0C5XURfrQ%2BewKkwEoJJlcXO4wzq5Wtfde7EzCLddfIXwSnWSWdrevCExLD&X-Amz-Signature=a2c63c3725f2730cc21e63bcb745a9fc4e2c487cc95d317b55f34d266f9919c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BKODZUF%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHBsBFnnDLoM4G9j3TsXYe0NOY9JWmNqkVxHjzgxa362AiEAg4yEMM6qHlsg8qpZ%2BSiuIAsXu4qZjngpeN3E5KPui4MqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBA9%2BNfEpwIZrFMuircAyXnjqVme1bWDWbR1C6ySyzv1ZDNeSjZ6M5EuGUjLANeJObDkr3D9cRaYr3tPcNP32ymFkJUqgUSWPVUz%2FhFUzbb0D9LFqgOOfHgpiIJEMZWt8qK94ZXt6ljy5%2BxbDWFNvEXaUF%2FrC78IAhARy%2BZxiKrTMSzZlVcdbm5n3xEtCG44GUuSw9DWHtZtIU73WIALkVLl4zFPTlYxG3L0wQQQ7MIOw0%2B9EwpWwLAEqxq%2BV7jqFxKmpPExrl6REZGXUf9CBwrQwoDmATWgK7e8qWn9KRLHb1xR9mIN6srMHQGUjOL%2FAhd1M2rmO7GHou%2BQL6vQXgglTYiodv1c4QsQ4EA3zwwOKQ7l0%2F7iUPwLCoEYMsJi8fXZ6%2BLOcwze%2FeXqyLoc7KyUVjyj62ztUSdK%2FxqiACli9GkeXlvKrJm2rQx16ihAXeexahQeoBx9GO2%2FiDmXeJs4kMim471wBSozeI40tTVQJFxKW1pk6sPJrDlbYpUp6Xg2TTrsVrJsgQfLpUoFQ%2Fp5CIh5RleMnrWutkldVpcNm%2FHN0%2BPmJpXPF4%2Bd1sX2d9Nz6OwrJYmPtGi7BoUx2w1zZS6oMq6qn9N6PQ9TJGJQridcm5rM3%2F87Wq0Bzo4KnfYwrVvYRYI%2Fz7tMJ2h5rwGOqUBThkz%2Fjak2NSQP%2F0mSx7DZ1828%2Fuj93LFfXrzHtla1xfbH8DcS%2BxhFjPuAxEeaqoNENGLnTulPcpcZMzo41E2bex0Z6l9RapAuOSB7d5JfeYn7AVXDXtABw00A73s%2FwIHPnv787tivdLO%2BikfcK3kHLXlHuo2t14mOo0C5XURfrQ%2BewKkwEoJJlcXO4wzq5Wtfde7EzCLddfIXwSnWSWdrevCExLD&X-Amz-Signature=e58db204d2fd39acde6daf6596e21f03865dc9f93470af52de8eb69442f07816&X-Amz-SignedHeaders=host&x-id=GetObject)

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
