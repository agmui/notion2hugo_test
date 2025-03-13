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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBEC2AF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1DRKPqFY0ES4bQh1DHsaqZnpGIdsdelMZ0DOEjQOtlAiEAi8JraAxHL4mpDlFq%2FLByqTXfQDdu%2F4ah4toIedKSLwwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKn0R8HoUIn%2BBiJ6SrcA78rpo8eC3klRwFsKK0vyFotbkPRwvVVvZL5%2FSuIyeuvvuu4mFHH5imYIXxpVLk6vCSxpNO9ianHGTntFpUcYhA%2FJ1CpgZXiXseTzHq2pl7mJ8miTg7sr5UJDXBg%2FBHnMLGPDi9cVc1CX%2Bxl4VtEAvDvxbsA9MskuzV6cYtVcv2PF9TN7N47SOl8Xic5o95d1qjDNcJ0g4FN%2F4ind1%2BcK%2BtZ2b8AHVwnWB%2Be7ixtg%2FD5%2FJaG5XAuvRBhgQLuzL57bjj7%2Fsz1W63dM0mUCm2df6Hs9Mi7E9rORmpaXaRQ3tp822IokbbqqrRLt4%2F9g%2B4v38GyOpreE1MjA9PGjZgpVxAFVk%2BR%2B%2BYyiGo%2BRWrJavWAucasn44Jqxv5IXJm1mHIqCE6ZkQOSamPlFgXw0G97EWV7w39E74VvyEpFCki1syz5RAp0Vy5d5VU%2FwystsY1JdcHX4mTVbJdlIOKmW%2BRRspG00X3KES3LFFPHc0Nc3iXbJ05k5ChRk2tLv93x1W5avLFZzxpXJhtr1O1ny9ScCDJaaug98NWjTSaEjFjZcVxhGnk5ozJ%2BLnMN6IDjnVvqvDM6%2FhJf2XX8a15JXYWD83hKhmKfoleRTMCowHBZIXeUs0T6HiAfyN8p6FoMLi7y74GOqUBh9B9ZvubSQc2xQprXXo1ZLhruPEQBlaECjqUdz9t1oRDNB2fgbzVXpZB8fpDfObeamNXkn8X0L%2BJzYrTyRH%2FD9B4LcMEc0sAdPowvE9XF0SlARpRfxd5F0EhaSkSVa9f%2BojeA8XZ2%2BhZHqzQxt01FOv46tk5q%2FUiuBNaTVva%2F5dayv3LzXdYC1Y3XGUzvOj10UMzwKeGrKhjkcODaiqA06Y9WqbW&X-Amz-Signature=80fe6e8eddff1edc9dcc95b46fbc66790ce763779137f9b34444a72f370e0476&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBEC2AF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1DRKPqFY0ES4bQh1DHsaqZnpGIdsdelMZ0DOEjQOtlAiEAi8JraAxHL4mpDlFq%2FLByqTXfQDdu%2F4ah4toIedKSLwwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKn0R8HoUIn%2BBiJ6SrcA78rpo8eC3klRwFsKK0vyFotbkPRwvVVvZL5%2FSuIyeuvvuu4mFHH5imYIXxpVLk6vCSxpNO9ianHGTntFpUcYhA%2FJ1CpgZXiXseTzHq2pl7mJ8miTg7sr5UJDXBg%2FBHnMLGPDi9cVc1CX%2Bxl4VtEAvDvxbsA9MskuzV6cYtVcv2PF9TN7N47SOl8Xic5o95d1qjDNcJ0g4FN%2F4ind1%2BcK%2BtZ2b8AHVwnWB%2Be7ixtg%2FD5%2FJaG5XAuvRBhgQLuzL57bjj7%2Fsz1W63dM0mUCm2df6Hs9Mi7E9rORmpaXaRQ3tp822IokbbqqrRLt4%2F9g%2B4v38GyOpreE1MjA9PGjZgpVxAFVk%2BR%2B%2BYyiGo%2BRWrJavWAucasn44Jqxv5IXJm1mHIqCE6ZkQOSamPlFgXw0G97EWV7w39E74VvyEpFCki1syz5RAp0Vy5d5VU%2FwystsY1JdcHX4mTVbJdlIOKmW%2BRRspG00X3KES3LFFPHc0Nc3iXbJ05k5ChRk2tLv93x1W5avLFZzxpXJhtr1O1ny9ScCDJaaug98NWjTSaEjFjZcVxhGnk5ozJ%2BLnMN6IDjnVvqvDM6%2FhJf2XX8a15JXYWD83hKhmKfoleRTMCowHBZIXeUs0T6HiAfyN8p6FoMLi7y74GOqUBh9B9ZvubSQc2xQprXXo1ZLhruPEQBlaECjqUdz9t1oRDNB2fgbzVXpZB8fpDfObeamNXkn8X0L%2BJzYrTyRH%2FD9B4LcMEc0sAdPowvE9XF0SlARpRfxd5F0EhaSkSVa9f%2BojeA8XZ2%2BhZHqzQxt01FOv46tk5q%2FUiuBNaTVva%2F5dayv3LzXdYC1Y3XGUzvOj10UMzwKeGrKhjkcODaiqA06Y9WqbW&X-Amz-Signature=7915aa96dff2ac9afabe65abb7a3236cad7b0b575c32adcc0fba949afb7d4f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
