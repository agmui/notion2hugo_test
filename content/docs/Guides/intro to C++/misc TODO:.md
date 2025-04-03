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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6JO2CR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC59WSX8tCZrDkKtUay4GzoHtA0ZPaz56ayFiXHdbSdDwIgJ6XaH%2B3iRqAr2DLXi%2BIw%2B3QXwCVXj0VndFIaqH77GD4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqCuHtIdO0RdltXLSrcA6IdLioJwRdsJjNd%2BZ2ZBCukIhL8usajJus50edyh6oHnOcfWZLUoZeOyK%2BjerJKG3dJWBo%2Baq5nbEicFKSFoSbCGl%2BSQebYZG1vmdxHsV3z34M159appzyRuoVvfm3z%2FBZTlJYTH9vIBluWDQd1wRxeBNaoDUmAoB%2FTqZHyCumrjz2OynqzBPCZUPaoq4DVXbZ7bwBwjs%2BiDnWeGd1G7npoF%2FbgFpt5Gnykh4%2F3KpVHRH4gh08%2BGxtLvvpnaPcnQV04zhFXcL07UWLhe%2BeevMzX%2B3VNgsjw7GCHOOY9GkBCKf8D8qXRZzU1m2zK9A%2BJlbvG%2F7Afefyq90NKba9dPuWcsWa81xlfiiZ3DJId3pO%2BXejl9RS7BkeJ3uRn7XeWM6afI%2BNkrH0lC20lpzyWO1JC1a4fyhXlaCGqPaNocpgYAF8lnW75IdnSzA5%2BzNCL8nhuLDnmpUdwP778D2iU8lxX5lTZiwaOZi5f9vd6nW%2FQOYrRyoFw4X1grqRF4xZDevTUkRJ%2FXwfSh8QHMvxFqSPqsVluBXf6PHSGySsHfWzOHkJo31QtLoDyyREBvzbiTxF7OcZPdWRVjHBwaZoVQ4L480c9oglThdVEHacHYNpogZ4IljMTBxFe3GhUMNj7t78GOqUBOcgy02YeT5eIeOC%2Bea1Z%2Fxy2fjnU5xrJA%2BOqmr%2BvWuMrEd%2BAaRakCtQXqh2bOk18oTml%2BAOKzGJ1C1l36eJhd%2F5J5IBFBnaswf3MX1B4WaQ4Vrj6Ua2qAZ2p4pMNbFE2znjwHXSuGTGGPa1H2lQAZ9ZlffMvSBpkbnBSON9CnwDU%2FV3GZ%2BO%2BRnC00aKGwEr5ULditO6kmiyxk1ph6B2EXUcl35%2BD&X-Amz-Signature=c0ad9a52a4372fd66c8b1161bfbd0766154b5a3a298026ac24bcbdfa11256883&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6JO2CR%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC59WSX8tCZrDkKtUay4GzoHtA0ZPaz56ayFiXHdbSdDwIgJ6XaH%2B3iRqAr2DLXi%2BIw%2B3QXwCVXj0VndFIaqH77GD4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqCuHtIdO0RdltXLSrcA6IdLioJwRdsJjNd%2BZ2ZBCukIhL8usajJus50edyh6oHnOcfWZLUoZeOyK%2BjerJKG3dJWBo%2Baq5nbEicFKSFoSbCGl%2BSQebYZG1vmdxHsV3z34M159appzyRuoVvfm3z%2FBZTlJYTH9vIBluWDQd1wRxeBNaoDUmAoB%2FTqZHyCumrjz2OynqzBPCZUPaoq4DVXbZ7bwBwjs%2BiDnWeGd1G7npoF%2FbgFpt5Gnykh4%2F3KpVHRH4gh08%2BGxtLvvpnaPcnQV04zhFXcL07UWLhe%2BeevMzX%2B3VNgsjw7GCHOOY9GkBCKf8D8qXRZzU1m2zK9A%2BJlbvG%2F7Afefyq90NKba9dPuWcsWa81xlfiiZ3DJId3pO%2BXejl9RS7BkeJ3uRn7XeWM6afI%2BNkrH0lC20lpzyWO1JC1a4fyhXlaCGqPaNocpgYAF8lnW75IdnSzA5%2BzNCL8nhuLDnmpUdwP778D2iU8lxX5lTZiwaOZi5f9vd6nW%2FQOYrRyoFw4X1grqRF4xZDevTUkRJ%2FXwfSh8QHMvxFqSPqsVluBXf6PHSGySsHfWzOHkJo31QtLoDyyREBvzbiTxF7OcZPdWRVjHBwaZoVQ4L480c9oglThdVEHacHYNpogZ4IljMTBxFe3GhUMNj7t78GOqUBOcgy02YeT5eIeOC%2Bea1Z%2Fxy2fjnU5xrJA%2BOqmr%2BvWuMrEd%2BAaRakCtQXqh2bOk18oTml%2BAOKzGJ1C1l36eJhd%2F5J5IBFBnaswf3MX1B4WaQ4Vrj6Ua2qAZ2p4pMNbFE2znjwHXSuGTGGPa1H2lQAZ9ZlffMvSBpkbnBSON9CnwDU%2FV3GZ%2BO%2BRnC00aKGwEr5ULditO6kmiyxk1ph6B2EXUcl35%2BD&X-Amz-Signature=b7e2e193ad0cad28f50b7ecb04e674e3bcf38902d5241c09e9d17a0053cd6673&X-Amz-SignedHeaders=host&x-id=GetObject)

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
