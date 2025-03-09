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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKQYXIB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFRFcMGHlhhIg%2FqDgxo0%2Bzckjmgfh22HSVtDLZQBoOKEAiEAppferjR4iotF18fX%2BhSXAi3C1GKj5AkyXVQEqEC9RMgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEVyz5bM1fRSiyeyASrcA2v%2F2CScyITzRu1yBgqbpnthJInJ2AfXSiddxWYeNWNFj9g6flfp%2F59pZBHFPYedeLOIzc4nNkBr3Pbd%2FZ9tV3nPH9QH31myAYBaoV64D%2FRYoBy%2FrTodIxQkfZg968uycY%2BM7WU5No%2F1NrvTMN%2FD3%2Fdzx3u6G9X4JEx0nZumfc1AeBLstAWW8alj1WXEQumilILyVZhI8ue0P7bamg3tyHQbfZcTD1ntE3rtSgDwqod9WEPUp9j5D38SdnZbyAQZjILiuvZNlcXcgyqL1V8ECkn3iFB5G5lspCAXHsCZDO%2BZ95tVEu8hVi3ojOmNDgydRljHeJXhjB5knHXGJr9RGP9m0WSJXiVtVy%2B74xYzIyNBKJO0Jc7RFzqE4eUMzTHeclmkgckoNFjD92wTE8ENMbz75EBmh6g6yx0Bwo%2FhT3YKx1eqTOOYvfaw4NZgwg1wSyBvs1eoULSq%2FLXo0H8Cii%2BpufxoSddOei146gdETEOut0uSRKFT3IJClq4QxqXWjzE917HPJp%2FfQN5Xg1xbx3M9DnaVzqCX1YY%2B6w6lhrRcXd9GGxo7rIMCIWUueg130rH%2F5lf4DJOpC6juGSX8i%2B%2BNz9OZwXV4MI7zNdVZSJCHCAGLpvtbISZB04TeMInLs74GOqUBIeW%2BI35oKv9bPmJU6lMS2V6YJ%2Bivek1c9MwNH9%2FqhqBY6gB%2F0BvJ7icWibYOlnRro3UqdzN%2BGC3Vf7PvWs5F%2BmI8zFKB2W8hsezqkzyM1pPAr1cFiLaj7ALVKiwsdE9vBDscZXVUUYtfSNCSXPZTbwxKD6ux8TaxjmGCrh5nEJCMu5qie%2FNU18LX6Zd68w5nXlyLQwy7sxmF90vzHGRMR88mYCxQ&X-Amz-Signature=63974113a35155567ba10ea13c845d94d9ab7f1a0662be4e12b5a6c7837b46d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKQYXIB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFRFcMGHlhhIg%2FqDgxo0%2Bzckjmgfh22HSVtDLZQBoOKEAiEAppferjR4iotF18fX%2BhSXAi3C1GKj5AkyXVQEqEC9RMgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEVyz5bM1fRSiyeyASrcA2v%2F2CScyITzRu1yBgqbpnthJInJ2AfXSiddxWYeNWNFj9g6flfp%2F59pZBHFPYedeLOIzc4nNkBr3Pbd%2FZ9tV3nPH9QH31myAYBaoV64D%2FRYoBy%2FrTodIxQkfZg968uycY%2BM7WU5No%2F1NrvTMN%2FD3%2Fdzx3u6G9X4JEx0nZumfc1AeBLstAWW8alj1WXEQumilILyVZhI8ue0P7bamg3tyHQbfZcTD1ntE3rtSgDwqod9WEPUp9j5D38SdnZbyAQZjILiuvZNlcXcgyqL1V8ECkn3iFB5G5lspCAXHsCZDO%2BZ95tVEu8hVi3ojOmNDgydRljHeJXhjB5knHXGJr9RGP9m0WSJXiVtVy%2B74xYzIyNBKJO0Jc7RFzqE4eUMzTHeclmkgckoNFjD92wTE8ENMbz75EBmh6g6yx0Bwo%2FhT3YKx1eqTOOYvfaw4NZgwg1wSyBvs1eoULSq%2FLXo0H8Cii%2BpufxoSddOei146gdETEOut0uSRKFT3IJClq4QxqXWjzE917HPJp%2FfQN5Xg1xbx3M9DnaVzqCX1YY%2B6w6lhrRcXd9GGxo7rIMCIWUueg130rH%2F5lf4DJOpC6juGSX8i%2B%2BNz9OZwXV4MI7zNdVZSJCHCAGLpvtbISZB04TeMInLs74GOqUBIeW%2BI35oKv9bPmJU6lMS2V6YJ%2Bivek1c9MwNH9%2FqhqBY6gB%2F0BvJ7icWibYOlnRro3UqdzN%2BGC3Vf7PvWs5F%2BmI8zFKB2W8hsezqkzyM1pPAr1cFiLaj7ALVKiwsdE9vBDscZXVUUYtfSNCSXPZTbwxKD6ux8TaxjmGCrh5nEJCMu5qie%2FNU18LX6Zd68w5nXlyLQwy7sxmF90vzHGRMR88mYCxQ&X-Amz-Signature=6b0b4be1432176ade80f88172a24fa01a756ea214d47271f1729a7f1fe345ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
