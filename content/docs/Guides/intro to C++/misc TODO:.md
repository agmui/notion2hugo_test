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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD4ESRJL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUQIZ3IJ8N9cRHoxtWRA0phf3lj7r2HtYSIU3sCX82AAiEAzKS1VhuAnxifa2ln5WCEOYTW%2Fpe8C2UYEuEjl8uMdDIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDENT7ADlo%2Bk9qikSrcA5FmahHf8utSslp3XGdo6I1y5QDrwx6CM4Lm79m56KKWpZ4IAgP66QTIxpYDYRm3nBX1081h3LFh9gjhkKyDvvTFrWyAD%2FHDIAcC%2FUWjLQ3fWiE33e61OEyR%2BMcONF5mHi1pQfZoaEtwwWl9HrRSwCk3EOMgBesZ0EIoyyn28caGjIm9wEL8Q3Ok8n4FgFcHU%2BYzLhgMQFv4ofpvtwznqmXcPKkUCBOYJ1tn%2FkwP6x3Xp217fMFh%2F4qXO4r03Yt76ExWAKsDvUVFOoLvUj4u%2FYYke9S1O98TiBQCwxDPvvDzxboX9MaGDpSKNYfTZglMKwdLIrBsLmvpZq2WR6fZUnKjSPSBAY9d2zcqPURqGtj4sNxUNrbKFGexuk32YzUE8VAjPTqJmz9nDKtpKXgycGt0fG1O9DM6u60VdgbRqLpli2BzVJJRqJh6%2BC%2B0uRLhrAQ%2BTPvzhGYNeaMm76Ffi%2Bt7pzeDkDNMA66o8aZrWMdaC3WVuoCiV6khmzIww%2FIZvNxD9y%2FEARtdoKdlpJXODN60xAhewwO22cHduFF9IeNAs73S%2BNAz946qRi8n3WgAJv6FKfGroOzPAs%2BTqFliy9tFYzvnT5op1jrZwgjUOMmjL4NKVcTFSnf2pwphMPC6%2FbwGOqUBl0LqMyVPz8doDJft0qWQ1mt5BOv6EKmpf%2FKppPW74s5LjCsHdeU6GRfDdLcdYBzdZH29u8qV7rp4ZWmd4UqXU2ifPGFmRT56gqn4wVO06QH5UJU%2B9%2BnSgqkCyh7DpXS1BmCDSPmqxXok03znLdQ57bBpjtpBoUduE03HcLh27PDLjYYUJldp6%2Fb%2FQUF9gTrxnW%2B5o0%2FVdJr32WsQBuOqZW5%2FD3dx&X-Amz-Signature=f3e3c5885aba77a72f8347865fdf4b95694840dc4876b970c974928575d15295&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD4ESRJL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUQIZ3IJ8N9cRHoxtWRA0phf3lj7r2HtYSIU3sCX82AAiEAzKS1VhuAnxifa2ln5WCEOYTW%2Fpe8C2UYEuEjl8uMdDIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDENT7ADlo%2Bk9qikSrcA5FmahHf8utSslp3XGdo6I1y5QDrwx6CM4Lm79m56KKWpZ4IAgP66QTIxpYDYRm3nBX1081h3LFh9gjhkKyDvvTFrWyAD%2FHDIAcC%2FUWjLQ3fWiE33e61OEyR%2BMcONF5mHi1pQfZoaEtwwWl9HrRSwCk3EOMgBesZ0EIoyyn28caGjIm9wEL8Q3Ok8n4FgFcHU%2BYzLhgMQFv4ofpvtwznqmXcPKkUCBOYJ1tn%2FkwP6x3Xp217fMFh%2F4qXO4r03Yt76ExWAKsDvUVFOoLvUj4u%2FYYke9S1O98TiBQCwxDPvvDzxboX9MaGDpSKNYfTZglMKwdLIrBsLmvpZq2WR6fZUnKjSPSBAY9d2zcqPURqGtj4sNxUNrbKFGexuk32YzUE8VAjPTqJmz9nDKtpKXgycGt0fG1O9DM6u60VdgbRqLpli2BzVJJRqJh6%2BC%2B0uRLhrAQ%2BTPvzhGYNeaMm76Ffi%2Bt7pzeDkDNMA66o8aZrWMdaC3WVuoCiV6khmzIww%2FIZvNxD9y%2FEARtdoKdlpJXODN60xAhewwO22cHduFF9IeNAs73S%2BNAz946qRi8n3WgAJv6FKfGroOzPAs%2BTqFliy9tFYzvnT5op1jrZwgjUOMmjL4NKVcTFSnf2pwphMPC6%2FbwGOqUBl0LqMyVPz8doDJft0qWQ1mt5BOv6EKmpf%2FKppPW74s5LjCsHdeU6GRfDdLcdYBzdZH29u8qV7rp4ZWmd4UqXU2ifPGFmRT56gqn4wVO06QH5UJU%2B9%2BnSgqkCyh7DpXS1BmCDSPmqxXok03znLdQ57bBpjtpBoUduE03HcLh27PDLjYYUJldp6%2Fb%2FQUF9gTrxnW%2B5o0%2FVdJr32WsQBuOqZW5%2FD3dx&X-Amz-Signature=305353e5450a28a2d44e43400695dfd444123a692d9bf598627079a2584d1792&X-Amz-SignedHeaders=host&x-id=GetObject)

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
