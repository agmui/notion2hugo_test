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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDPWWDS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHx0Bd8En6%2FDLt4pOjWl%2BePDeQk904Dc%2FbuFUafTwyUzAiAP4BFXMbngZi2P3udufWeOIXSVv%2BkR0QCa5A9aoDB8CSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FiMWv5bsTDeDamD3KtwD3cjsTnXnUGj9BBKhYBwTiBvikx5Q7mTPzza0VM6VaPezfmfUsSKuXNyV736gYGmCIVxd8pfxS%2FRisijjXs5uZwWb9kCF21aGuR%2FotRQzFZqxaqNswLv1R0cECqAtJ6fF5JFPSqkktARGrVfZg0kL9sOW1mf0rXwx5SJxErAIUi7jrYR88ZNyEXAaduBLHQP7GHUW6b3WD4kdXFk3FIcJD9R413Hlm1C8yZx5b3XkbH971qgPHuJrdSKyOQS26jveiEj8bFgoAMpQerzwOfSPHNjtqbrdj1MA71hvdsor2av7e3Ns5jlMqy14hr1s%2BvmGyvdcsydKBQwTG1eu1AWbM5UWKCSchMtTTLSb5G9PPFe6gCPAgXkGXYqCRSOuyIQkkWUA%2FTduxG3qmUTC0Y8Ig7kPSyJ0Q9MtP1XbrkF5AiA7VxMuGzEmXy9gL5YQsFHjcYSBmNDeGvuTZ2JIHwry7ZViwbezRz1Bbqh5n9F%2BsojCKbuz0r2NmKHBSWlALlvnKOSlmQvLUZQ3eNTiPdhJIDqmMIB9HegVX7HoY2wixgGSurbLh4bAtOif5CNGijUV%2BqtkO9sL9gFeenTSQriM7XnSafwcs9liurwm9TA56dzsypt7Ht6evOWTc4gw%2FemUwAY6pgGGp4X7h4xLBKaAlHMJ6uEm7Svn9AeN3TWqE2WRp6QeeTnZROT7E8KYxQAeyJeEDVoiONMol8g1Vujjx040Zli4FuOem9juBO3xpTqunBlNbeuuZ%2FZJ8NDO%2BeHesApVz24BqdGj5N%2BbQD2kRpKnrhRB554BJ%2BQnDf7aZyjG1dckxia0a9qh7cNlahUi3L6YEwE4aJv7HoD%2FnfsPVhZX9FVodEaKslfO&X-Amz-Signature=63585ce0c8be04fb8add4f90078355e56ca0e1856d6634fcf965dee9f1aef1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDPWWDS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHx0Bd8En6%2FDLt4pOjWl%2BePDeQk904Dc%2FbuFUafTwyUzAiAP4BFXMbngZi2P3udufWeOIXSVv%2BkR0QCa5A9aoDB8CSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FiMWv5bsTDeDamD3KtwD3cjsTnXnUGj9BBKhYBwTiBvikx5Q7mTPzza0VM6VaPezfmfUsSKuXNyV736gYGmCIVxd8pfxS%2FRisijjXs5uZwWb9kCF21aGuR%2FotRQzFZqxaqNswLv1R0cECqAtJ6fF5JFPSqkktARGrVfZg0kL9sOW1mf0rXwx5SJxErAIUi7jrYR88ZNyEXAaduBLHQP7GHUW6b3WD4kdXFk3FIcJD9R413Hlm1C8yZx5b3XkbH971qgPHuJrdSKyOQS26jveiEj8bFgoAMpQerzwOfSPHNjtqbrdj1MA71hvdsor2av7e3Ns5jlMqy14hr1s%2BvmGyvdcsydKBQwTG1eu1AWbM5UWKCSchMtTTLSb5G9PPFe6gCPAgXkGXYqCRSOuyIQkkWUA%2FTduxG3qmUTC0Y8Ig7kPSyJ0Q9MtP1XbrkF5AiA7VxMuGzEmXy9gL5YQsFHjcYSBmNDeGvuTZ2JIHwry7ZViwbezRz1Bbqh5n9F%2BsojCKbuz0r2NmKHBSWlALlvnKOSlmQvLUZQ3eNTiPdhJIDqmMIB9HegVX7HoY2wixgGSurbLh4bAtOif5CNGijUV%2BqtkO9sL9gFeenTSQriM7XnSafwcs9liurwm9TA56dzsypt7Ht6evOWTc4gw%2FemUwAY6pgGGp4X7h4xLBKaAlHMJ6uEm7Svn9AeN3TWqE2WRp6QeeTnZROT7E8KYxQAeyJeEDVoiONMol8g1Vujjx040Zli4FuOem9juBO3xpTqunBlNbeuuZ%2FZJ8NDO%2BeHesApVz24BqdGj5N%2BbQD2kRpKnrhRB554BJ%2BQnDf7aZyjG1dckxia0a9qh7cNlahUi3L6YEwE4aJv7HoD%2FnfsPVhZX9FVodEaKslfO&X-Amz-Signature=2c16f1ea28bfd8cb69fbeebf4a3aa5a64a1f11a3d69f1dd69502d7c707e98ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
