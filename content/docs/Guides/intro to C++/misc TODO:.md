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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB5TIF6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFBm7ysTIC3%2B8aiM7L1LRPfYL90pyHo6EvXe%2BxLOUNNHAiBlailqIEoOtlrGWHbhgbipx%2BnzvT0QVaO7jBICMI3paiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqbrioQEuPWTpcnXNKtwDkgYH93en%2FNwolGGciqpXCbCVMnBV1J33jJ1xMJ8GwwdSu8Cgn%2BsJWhlhYcQpsejAJgzrOh87vJWIpQHJilFcF1qi1xdsxIlkMx1LgLChQs1XRzwINYILQNCKcC%2Badum5S8BLyM%2BcLA7AW04qLvaqYm47bb2CoEHsjmbZMmdalgsGHlub6poLrPX97aYf1JSsFveM5IeMtbG3y7%2Fg7Ki7FW%2B5oCOKJBi7l7AT3dknyRyYvPKMI9qhRtQseNoB2UGARrEP7%2B1mmu9tGm29HTmWVFOzy%2FNWYSgHdggys7xbO%2FJ%2F4V%2BQFRp4LLtAzDZIrLQD%2Bn3UaIvY%2FvbNapyLvGvZIhLHeaQwN78cnV0%2FDbNg%2BFFTV8NaZWZ3xl9Frs7cik%2FUajrJvd8O4LFSdhEDF%2FEAeAZwe3WKuAVlKH8n7Mm436A64Q3Lv4G9E4vE7wbxWXo3r5gimt9%2FzqyqpJNj35g61zo%2BxYsOLlhFNC9ZTbXb0Mq7LBV66nelAYcYwYiXCUoSvjGGRdBOHklkAXzi7t2LiKq%2Fz6Lr7o3IcvMOaNnRYcF%2FB4a%2BihkQhSa9Muf2dEA4u5g223QMgpUUlVgpdfyWBpbr3O6r2DzB69GUdqr6pDGv1oduPSSYCFUyKgAwgcrpvwY6pgGuDHH4uWsfAWf3fM9fa8zMHweqjRrXwd%2ByPpeVcT8DAqN7sLAlkoSm%2B4acii1b6K2592DiI2yNrvnsm8zS3vghOULql8ocl0RfruGkAPmjDAAX5PocNTU3LmoCllmZP8WUiV2LvVjkvJdnEUs47kEjmD9RU94v3bdMyuaU0xOVZwED6%2FNt9wrgTngE0Kqr3%2FPYxnOLqRKeE0kLk9U%2B0R9KbxFrZdsG&X-Amz-Signature=2d0ade3065f28dcf55af3feb47b7fc7834321d6c8787c2cc7271778eeeb38912&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB5TIF6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFBm7ysTIC3%2B8aiM7L1LRPfYL90pyHo6EvXe%2BxLOUNNHAiBlailqIEoOtlrGWHbhgbipx%2BnzvT0QVaO7jBICMI3paiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqbrioQEuPWTpcnXNKtwDkgYH93en%2FNwolGGciqpXCbCVMnBV1J33jJ1xMJ8GwwdSu8Cgn%2BsJWhlhYcQpsejAJgzrOh87vJWIpQHJilFcF1qi1xdsxIlkMx1LgLChQs1XRzwINYILQNCKcC%2Badum5S8BLyM%2BcLA7AW04qLvaqYm47bb2CoEHsjmbZMmdalgsGHlub6poLrPX97aYf1JSsFveM5IeMtbG3y7%2Fg7Ki7FW%2B5oCOKJBi7l7AT3dknyRyYvPKMI9qhRtQseNoB2UGARrEP7%2B1mmu9tGm29HTmWVFOzy%2FNWYSgHdggys7xbO%2FJ%2F4V%2BQFRp4LLtAzDZIrLQD%2Bn3UaIvY%2FvbNapyLvGvZIhLHeaQwN78cnV0%2FDbNg%2BFFTV8NaZWZ3xl9Frs7cik%2FUajrJvd8O4LFSdhEDF%2FEAeAZwe3WKuAVlKH8n7Mm436A64Q3Lv4G9E4vE7wbxWXo3r5gimt9%2FzqyqpJNj35g61zo%2BxYsOLlhFNC9ZTbXb0Mq7LBV66nelAYcYwYiXCUoSvjGGRdBOHklkAXzi7t2LiKq%2Fz6Lr7o3IcvMOaNnRYcF%2FB4a%2BihkQhSa9Muf2dEA4u5g223QMgpUUlVgpdfyWBpbr3O6r2DzB69GUdqr6pDGv1oduPSSYCFUyKgAwgcrpvwY6pgGuDHH4uWsfAWf3fM9fa8zMHweqjRrXwd%2ByPpeVcT8DAqN7sLAlkoSm%2B4acii1b6K2592DiI2yNrvnsm8zS3vghOULql8ocl0RfruGkAPmjDAAX5PocNTU3LmoCllmZP8WUiV2LvVjkvJdnEUs47kEjmD9RU94v3bdMyuaU0xOVZwED6%2FNt9wrgTngE0Kqr3%2FPYxnOLqRKeE0kLk9U%2B0R9KbxFrZdsG&X-Amz-Signature=89ee8538adf205a2c9b36fcf8184d6a015cbc41d4b86934a85608eb286d5f0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
