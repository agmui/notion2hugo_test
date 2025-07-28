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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO76G4P4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA%2FgTFPUErXeOYFqmYGxNtngLvLd012PT9XzkQ%2FhCuy0AiBn6qFcRLsnnovl7WmbIzgyIcPshPVZP%2Fz3X2ehW7EARSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhviFZv2x9bt%2FmNBKtwDqjJMd2CkSJJLfOiEz2ySRVx7D4FCk4eo6YQnEuGEzhXUAshLHjpFEinDbrz3CVNDGCyd8nzwkjrpTL%2B5g4Wc1bnNhDxHyW3%2FTZk1BHengxS3DGjsBylIopxK1%2B3qK887RA5uh4AKs0R5J64J%2FEqD1KBJe8zzi6zbgQfHuKnrlmy0kOXsSEQ%2Fr8oIlq%2BCnls5T4c%2BrOM9Xhe%2BbIMHU7E2WjuuVK04pTVg36YuRg5oz58ZJ5PMB2PAwJq%2BJoy%2FisYyLISUHPwyGx9FgXM2Vsl2dFxV9nlEEOtOORFeIXMhZB%2BWUeFHW3DkjSZOcgq6n83%2Bj7poj4NKQjPiEL0v6oeUIq7BfcFHp7EyhJcFtTJ691M%2Fw2jk6tVo%2BAZfdVP%2FqiIDGWAuhMMR2bW6EAj24i6zSZ8thIaL0%2FxuRRcXRtFcVKOj0mAwPgF5YR8%2F6iP86AfGrrMSiUxvhh2aX3SzcyQJAcc1kWJBM6lSiOPNK2jObMQsR%2F31VUqMq0ZGl7he2Tk7FYO5QDHB%2FnxCVUva5K%2BmmbRu%2Fw194Xlr6I9m%2Fnyr%2B%2Bl20Z1EdPZM2sV%2B8gw5xZFMW8ZJRDiScDAhmoaI5xRoTt87Bx5QcYMg8ICdAZIEuLjAmkQxxGjqqCEwpOIw%2B7OdxAY6pgE6aLDrUSMsLOUpUq2BwRf4KihMrpL13uUxwB3%2BVfkMRMuyf1TxQHUBYrNzTG4MOxYK7avjxY3vKq6XHOLZ4j3NpB%2BMCWeO5qWKIHkBZlsWGXbtHHWYmmjYJle25%2BDhnrQJ78jKPK%2BvgglgHzIkv%2BWl1VZe88dEveD3AaVDmTvs0%2BUXewYNfk8SBmPCGQIsbkG93rmn%2BZmg2Qzo9%2FUabyW5Sgegkf4a&X-Amz-Signature=c9a73e6f7254c963f00eed34ed859ff3d1a2bfeb31a826bda288f6989770af34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO76G4P4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA%2FgTFPUErXeOYFqmYGxNtngLvLd012PT9XzkQ%2FhCuy0AiBn6qFcRLsnnovl7WmbIzgyIcPshPVZP%2Fz3X2ehW7EARSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhviFZv2x9bt%2FmNBKtwDqjJMd2CkSJJLfOiEz2ySRVx7D4FCk4eo6YQnEuGEzhXUAshLHjpFEinDbrz3CVNDGCyd8nzwkjrpTL%2B5g4Wc1bnNhDxHyW3%2FTZk1BHengxS3DGjsBylIopxK1%2B3qK887RA5uh4AKs0R5J64J%2FEqD1KBJe8zzi6zbgQfHuKnrlmy0kOXsSEQ%2Fr8oIlq%2BCnls5T4c%2BrOM9Xhe%2BbIMHU7E2WjuuVK04pTVg36YuRg5oz58ZJ5PMB2PAwJq%2BJoy%2FisYyLISUHPwyGx9FgXM2Vsl2dFxV9nlEEOtOORFeIXMhZB%2BWUeFHW3DkjSZOcgq6n83%2Bj7poj4NKQjPiEL0v6oeUIq7BfcFHp7EyhJcFtTJ691M%2Fw2jk6tVo%2BAZfdVP%2FqiIDGWAuhMMR2bW6EAj24i6zSZ8thIaL0%2FxuRRcXRtFcVKOj0mAwPgF5YR8%2F6iP86AfGrrMSiUxvhh2aX3SzcyQJAcc1kWJBM6lSiOPNK2jObMQsR%2F31VUqMq0ZGl7he2Tk7FYO5QDHB%2FnxCVUva5K%2BmmbRu%2Fw194Xlr6I9m%2Fnyr%2B%2Bl20Z1EdPZM2sV%2B8gw5xZFMW8ZJRDiScDAhmoaI5xRoTt87Bx5QcYMg8ICdAZIEuLjAmkQxxGjqqCEwpOIw%2B7OdxAY6pgE6aLDrUSMsLOUpUq2BwRf4KihMrpL13uUxwB3%2BVfkMRMuyf1TxQHUBYrNzTG4MOxYK7avjxY3vKq6XHOLZ4j3NpB%2BMCWeO5qWKIHkBZlsWGXbtHHWYmmjYJle25%2BDhnrQJ78jKPK%2BvgglgHzIkv%2BWl1VZe88dEveD3AaVDmTvs0%2BUXewYNfk8SBmPCGQIsbkG93rmn%2BZmg2Qzo9%2FUabyW5Sgegkf4a&X-Amz-Signature=5ff6c283d5e1c2d2c73c0906e1570239f6565e4e18cba65d7086c7f9c714eccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
