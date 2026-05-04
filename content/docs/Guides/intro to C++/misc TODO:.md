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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W43C5L4%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDmwf3CEC9zKfmxneMC9A8kWg4lESdAXy7MENk6jvaGwIgdbCmJmu%2F5tQheTj2n4oe%2BL5FPc787Uga91OOcc0aAC0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGat6QlOkcreFyAe6CrcA%2F5qwa5%2B7c3sAS4gonW39QIA1xj5eflo3EAa9fSzE9c8ZTUAZ%2F5yd%2FY%2FDR3p64nV5w5Z2I8wcVTTBFAtMhuHVCNzkZird5N5yqwJMKFWhE%2BgBLATk%2F82M0pDsr1%2FVTNSA1%2B8t9IvQFsAkEY1hCKOPsQbHBT7qOVMUtKtrQXcMOe1i9j2feqv%2BOppS6WsK3sRbK0iuidYTynGf8siRKXWoqkTim3vnTwAPrYR6%2Bb2MMQER%2FeLB59VddVZsF5Me5PaSJupZvNomij7DFHGG7bng83MLYwM6Oylw7nJP%2Ba1u4Ux93UWPesUesj8TIH4QqHa2Er%2BhRDliQ%2BnMxTfK%2FCEkT6h4kePEVSgPWJqYPRUoCNMlzAwA5Tr0KmkOGQqfrDos%2BlivXeptqBWJt%2FaMD4LwrvV0Q7KCCKGqrdsQAv2EJDvPqW04rJUzfVdn1ZdKo6XdqgdMh%2BpvMp8Orv4k0U1phrwnrFKjvx9EHpNnPLm3fXauTy0t%2BQ0ObSSeNZ3Z8cWnw7UJu9MOmIQXR9QFaShG5HOu%2Fm2lb8Mt67b1F6rm85jVdxFhLvuvYkGDgeo78mEf%2FU7idgh2j6bS%2BI%2FrXpk9%2BYChriui6c22OBaNiyWqV%2B4WZuLGrARq7%2FMI9d%2FMI35388GOqUBFrNCU8269J8KPSVcLzOUbJVvoSPIi%2BfuwidizlrtrQdbsEMlwk3JKpDIcxrTo4NTJBHcSZZqkTHXujlm6jUhYDTgp0iIEPshyZ9kkPiOaJZzMpYsF1mBCjHjf0VXjgyU8YBBUC50A4WKsSO0u5MPPHGcYDKpvaM4gUeSbemri6ps4zxW3GGcVn5YtX3Y%2BqPq1rMAXFHe87AJc7zz7S535Ul9UpFJ&X-Amz-Signature=539bf3aa2bd8552532a8c19d3bd4d809d7eb553cf8442af69bc5cf7f85398004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W43C5L4%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDmwf3CEC9zKfmxneMC9A8kWg4lESdAXy7MENk6jvaGwIgdbCmJmu%2F5tQheTj2n4oe%2BL5FPc787Uga91OOcc0aAC0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGat6QlOkcreFyAe6CrcA%2F5qwa5%2B7c3sAS4gonW39QIA1xj5eflo3EAa9fSzE9c8ZTUAZ%2F5yd%2FY%2FDR3p64nV5w5Z2I8wcVTTBFAtMhuHVCNzkZird5N5yqwJMKFWhE%2BgBLATk%2F82M0pDsr1%2FVTNSA1%2B8t9IvQFsAkEY1hCKOPsQbHBT7qOVMUtKtrQXcMOe1i9j2feqv%2BOppS6WsK3sRbK0iuidYTynGf8siRKXWoqkTim3vnTwAPrYR6%2Bb2MMQER%2FeLB59VddVZsF5Me5PaSJupZvNomij7DFHGG7bng83MLYwM6Oylw7nJP%2Ba1u4Ux93UWPesUesj8TIH4QqHa2Er%2BhRDliQ%2BnMxTfK%2FCEkT6h4kePEVSgPWJqYPRUoCNMlzAwA5Tr0KmkOGQqfrDos%2BlivXeptqBWJt%2FaMD4LwrvV0Q7KCCKGqrdsQAv2EJDvPqW04rJUzfVdn1ZdKo6XdqgdMh%2BpvMp8Orv4k0U1phrwnrFKjvx9EHpNnPLm3fXauTy0t%2BQ0ObSSeNZ3Z8cWnw7UJu9MOmIQXR9QFaShG5HOu%2Fm2lb8Mt67b1F6rm85jVdxFhLvuvYkGDgeo78mEf%2FU7idgh2j6bS%2BI%2FrXpk9%2BYChriui6c22OBaNiyWqV%2B4WZuLGrARq7%2FMI9d%2FMI35388GOqUBFrNCU8269J8KPSVcLzOUbJVvoSPIi%2BfuwidizlrtrQdbsEMlwk3JKpDIcxrTo4NTJBHcSZZqkTHXujlm6jUhYDTgp0iIEPshyZ9kkPiOaJZzMpYsF1mBCjHjf0VXjgyU8YBBUC50A4WKsSO0u5MPPHGcYDKpvaM4gUeSbemri6ps4zxW3GGcVn5YtX3Y%2BqPq1rMAXFHe87AJc7zz7S535Ul9UpFJ&X-Amz-Signature=b91056601be58870a3c42838d7cfe60cdc9cb7ab68a35138ec378dd1f40388be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
