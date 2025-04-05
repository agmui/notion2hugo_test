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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HKFEVMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECpl5Ku709xGP0%2FUr8twybpNZgX5%2FTzE3I5MPumjLugIgaxnEFAFyOeYyAf3n%2FrNFWIamoSqMmMLnudJ18UsmnSoq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICoG9Uls3lHaYtgcyrcAxmm61gPEVq91hOPCvVp9G%2FfbqBgU2owISaViGdhofwSDosl4%2FN4XkGDJ5nUi3AXXzVUXtSADSg2RM91N9OLouxIq%2FPnrvF53zCoK%2Bvsydbp2h3YOWOaMb9GMd9n62t1GwWO3tLUDoFhjr7C5yINic90Daw6GftFfjz%2Fvo0hMBzLxCnaurm2dtqJ3wIOKuwXeH48cx6cakKpBT%2FUQ%2FQon7%2BrAtfKNbkPOkjJYDf0bU4KzAvS0kg66wf42V7ClcVBJv03R2OCE3wpj5DRYPDifapgfJFCRXul5vhLvaJtp1%2FlF9ip4GKLiKalnCVVbsWfn%2B%2BZVtl7EzdIqJiBs3mnanC4ZHJwXLAN4nbMrUCCm784DOZ0fHFwe1nykxRw%2B22vql4I2wQEtVYboMGJvtwZ7yo3Tma4My7hLD%2FkbUhVisBxtcG%2F4tsBaVdGIiKfNCIs6sw1c%2FwYxuLek1DvEk4vjvDhDJGhqL2JtfaALyZNy2mscL1urPqZF0MPcn9kBVXwfWi6vU3wO3ndTIPG452IbN5LqNMqtdFAo0hLw4ZXpvqYiKiXVIL9PzQVCPGgb5Jps4SU2651b0ATQXyPqgtHTuXUoK2t9zuNbkEM2Ig%2BJFo%2BsxoOLkHXGdFqTmf8MNjXwr8GOqUB42hdajLvC2xMc%2FAfAmbUnarcltlAnTOwUAtaa1jL5Ty37SB8YAFP1mXm7UC%2Bw95VmS4ToO2wVApD9sJOxpv9dXASG4EUuUBidoD0nVljEN89HqBMaKQA5CFNuvQqtyMkWLJHlxjpq5sEbwYkGUEQDL3v9onfax1S3%2BW8GEMPaPFsBFRk7%2F139paIRzAsgDNX3aDUCDbyemoWW5BAqjjhV%2BM7VNO8&X-Amz-Signature=fb627839d04ece95ad48e2ea9918ae8513b4b60cbcf1faf579e47267956b3591&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HKFEVMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCECpl5Ku709xGP0%2FUr8twybpNZgX5%2FTzE3I5MPumjLugIgaxnEFAFyOeYyAf3n%2FrNFWIamoSqMmMLnudJ18UsmnSoq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDICoG9Uls3lHaYtgcyrcAxmm61gPEVq91hOPCvVp9G%2FfbqBgU2owISaViGdhofwSDosl4%2FN4XkGDJ5nUi3AXXzVUXtSADSg2RM91N9OLouxIq%2FPnrvF53zCoK%2Bvsydbp2h3YOWOaMb9GMd9n62t1GwWO3tLUDoFhjr7C5yINic90Daw6GftFfjz%2Fvo0hMBzLxCnaurm2dtqJ3wIOKuwXeH48cx6cakKpBT%2FUQ%2FQon7%2BrAtfKNbkPOkjJYDf0bU4KzAvS0kg66wf42V7ClcVBJv03R2OCE3wpj5DRYPDifapgfJFCRXul5vhLvaJtp1%2FlF9ip4GKLiKalnCVVbsWfn%2B%2BZVtl7EzdIqJiBs3mnanC4ZHJwXLAN4nbMrUCCm784DOZ0fHFwe1nykxRw%2B22vql4I2wQEtVYboMGJvtwZ7yo3Tma4My7hLD%2FkbUhVisBxtcG%2F4tsBaVdGIiKfNCIs6sw1c%2FwYxuLek1DvEk4vjvDhDJGhqL2JtfaALyZNy2mscL1urPqZF0MPcn9kBVXwfWi6vU3wO3ndTIPG452IbN5LqNMqtdFAo0hLw4ZXpvqYiKiXVIL9PzQVCPGgb5Jps4SU2651b0ATQXyPqgtHTuXUoK2t9zuNbkEM2Ig%2BJFo%2BsxoOLkHXGdFqTmf8MNjXwr8GOqUB42hdajLvC2xMc%2FAfAmbUnarcltlAnTOwUAtaa1jL5Ty37SB8YAFP1mXm7UC%2Bw95VmS4ToO2wVApD9sJOxpv9dXASG4EUuUBidoD0nVljEN89HqBMaKQA5CFNuvQqtyMkWLJHlxjpq5sEbwYkGUEQDL3v9onfax1S3%2BW8GEMPaPFsBFRk7%2F139paIRzAsgDNX3aDUCDbyemoWW5BAqjjhV%2BM7VNO8&X-Amz-Signature=a2dd270569f2639107826dd4b4b2a1c1b1b22ce844af9eff50059707c608fb59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
