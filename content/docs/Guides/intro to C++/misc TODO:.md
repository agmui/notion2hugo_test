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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QH6OZXQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPu6m2hcii2MNk0%2BM7y8CBMXIjufvetVrg7yWayRrV8gIgB6XRVnj7CteYEso3nrXLyjjOqJQwcT9%2B7z3tVMOoaj8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLd2aFp3BIcaqEXg1ircA6auQt1qeZkFmaJ2%2FFWPqQyM9HeKqg%2BY%2B6%2FssQJQhuqbuWbVgBogtTeCVNlWlRrcjL6BhF8NbiTmBsTtJM9SjSKe5MRebdh22ksN8DIzyGz%2Bcr%2B%2FVnG4JLUu%2FOoaY5xghb3OR9YmX2hyMn7deCkNodxI%2BtQ6%2BW8uVaHhkY4i%2FdpDBWx1KUxF2dDNjlhPld9uBFnV63W2O5Moo3iY4A0VJ%2B1iqIeOXQDc0Gbpc9KF%2F9CPdNlwd8MKBQPwZDToWHUDBjw8puyOjngIj8ze3Ug2Bm2QG0iOaDn%2Fh7sIZ4g7W%2BKOQT%2F90jm7FNyB%2BA3DDZ57%2BFokP%2FCIhMjhfWckuzGXaflxTWAlsiaf8RKJ7GpvIpkDh4CQOJMXwqTnNGQI9d%2FPjBsZX6zKdMbbhtwPIiYfsIlul5toY8o2Vtl17MqR9WcwYNrLmdma7d02OokOyJvosldrqRGAbYxy2XYXe%2BrVbAHjJxQ7e7SXctk0nXGmDxj2Bz7XdpYl99Uvio%2BMsepQAChB%2BEC5JO2HelUJ8ObJN8aS2QFGuU1o5QhqawZLf3AayI7vOORb3l6zGuyXe0lK8wuP6MhpU6m9wXA%2BJJTby2%2FdSqP8%2F%2Bq2WMByIQ4foRFNiQ2avE9pktSqA89oMIHlisAGOqUBGz1nVSloe8KPpoPrpEowtJsGHLLuFTxhV99%2Bux6vBStsWlToNnSEerNI9r5ackWMHoq0S8kQTl9XlgMVEGtYOn4VPr%2Fc0hVxYH7cxSRV0YJojLV6HsyThfXL4rs5mhHd7T2SDfYZlDq3iB8flvWx%2Fv28z%2BbpzwL%2FAcGn%2Bl1rfp8x07XAqcyiKMKg8vxVQtjw89Y%2BeUQSUMzL4SDe7fcajUO589SG&X-Amz-Signature=465e9db6b7f1456920352b07381becd7c131970cb74318b91bef6c7d1cf056d9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QH6OZXQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPu6m2hcii2MNk0%2BM7y8CBMXIjufvetVrg7yWayRrV8gIgB6XRVnj7CteYEso3nrXLyjjOqJQwcT9%2B7z3tVMOoaj8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLd2aFp3BIcaqEXg1ircA6auQt1qeZkFmaJ2%2FFWPqQyM9HeKqg%2BY%2B6%2FssQJQhuqbuWbVgBogtTeCVNlWlRrcjL6BhF8NbiTmBsTtJM9SjSKe5MRebdh22ksN8DIzyGz%2Bcr%2B%2FVnG4JLUu%2FOoaY5xghb3OR9YmX2hyMn7deCkNodxI%2BtQ6%2BW8uVaHhkY4i%2FdpDBWx1KUxF2dDNjlhPld9uBFnV63W2O5Moo3iY4A0VJ%2B1iqIeOXQDc0Gbpc9KF%2F9CPdNlwd8MKBQPwZDToWHUDBjw8puyOjngIj8ze3Ug2Bm2QG0iOaDn%2Fh7sIZ4g7W%2BKOQT%2F90jm7FNyB%2BA3DDZ57%2BFokP%2FCIhMjhfWckuzGXaflxTWAlsiaf8RKJ7GpvIpkDh4CQOJMXwqTnNGQI9d%2FPjBsZX6zKdMbbhtwPIiYfsIlul5toY8o2Vtl17MqR9WcwYNrLmdma7d02OokOyJvosldrqRGAbYxy2XYXe%2BrVbAHjJxQ7e7SXctk0nXGmDxj2Bz7XdpYl99Uvio%2BMsepQAChB%2BEC5JO2HelUJ8ObJN8aS2QFGuU1o5QhqawZLf3AayI7vOORb3l6zGuyXe0lK8wuP6MhpU6m9wXA%2BJJTby2%2FdSqP8%2F%2Bq2WMByIQ4foRFNiQ2avE9pktSqA89oMIHlisAGOqUBGz1nVSloe8KPpoPrpEowtJsGHLLuFTxhV99%2Bux6vBStsWlToNnSEerNI9r5ackWMHoq0S8kQTl9XlgMVEGtYOn4VPr%2Fc0hVxYH7cxSRV0YJojLV6HsyThfXL4rs5mhHd7T2SDfYZlDq3iB8flvWx%2Fv28z%2BbpzwL%2FAcGn%2Bl1rfp8x07XAqcyiKMKg8vxVQtjw89Y%2BeUQSUMzL4SDe7fcajUO589SG&X-Amz-Signature=2e49b29a8cdb60883d120e4f52fb3c6d9b8c9ee6e2d1cb9bd78d6d22ba8e0120&X-Amz-SignedHeaders=host&x-id=GetObject)

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
