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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7VMBHQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuFjNgPlJ1vuk2ru9o6Twx5bIhAT7WwMxkfBCo6J38uAIgPI3jrD%2FwNx0JIo%2Bi1VQzpj%2FsQaSj7CqsYasA6Vc9yo0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDIRQSZ1oOwGG%2FTrLKCrcA4t2ufrnN6xrcvHOxp0wh3dnRilHZAIoRwJFrbU2Tj%2BDZoB4uhcXym4N2f1kWlVbi7JNWAzdfaR90LeU57Mln1YboEUolAVKMrdE77kNXp3KSEndf%2BpBssMJzwzm3x4x8usgFICKo3LgRzX%2Ft5US7HSxr8PSu9bQ5yt%2FttdPFBMaVpJHiJjKIqzv83odzpwe3LqWleEzn3qJdh3k9Kf0cYTSPvUTe5%2BhdEhZYBAuxGOv1vqoNIYPCR%2FPWkrBvzxHnsP3MEhiiFv%2FHM%2FPklTfFb3pbOX5iWmj96vwsUxrVyNNkPZ2o5hItEn6rkOFLsx7dzO849S7MSfdyA8ccsVyO2Fe%2BqLBvqoA3NeVN6%2BngPXbo%2Br20r9zL2KPKZRpi9uPhX0UxtzCVGRRAh6auBJMcz9PXos68t7Ic%2BiMsG46l5N%2Fhkjf0QdNsLre00S8tBs8MwDFc6M4hNklojfqID%2FSP7mC2%2B6tsHOBxeT7xNBXArwl%2FsSywja5ayuXwpqmzEpDhlHoequmUdIib4BBk9m3WzcywxKgys9vzk6Qh4Cg0x6vxRaMYHFLNuhwerwTlZEyE5uW9GyWx%2BFv9nIhTchK%2FQa%2BdxM2j18cbIt5eL8P060LHtj4PAi5NHqTuIWPMI26qcAGOqUB%2F%2FYxSnerjMGeYsTJcdTecBbY5ndYxe77%2Bb23XkPer8Xz0yj%2B0zG2t2JmR11UR5wj7kdcOMvjoZZUqqMjCZZdEOv%2BBRB2lcdaFfG%2BMXclz4IvCudSzHC6ZoR4DMK7nAEzkDp6YECcc5NH1a491V%2BrXv8nys8PIcC%2BjxuMFvIRbtbes%2BC4tIPEgzPhN3Pt0FqAHZN%2B40LvqJ%2FfEKtb%2FYfMg0oOCRfS&X-Amz-Signature=bc5be3045b250a1a5ebc4cdaea16681e26272c16a06ded901a32bd155d509b61&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7VMBHQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuFjNgPlJ1vuk2ru9o6Twx5bIhAT7WwMxkfBCo6J38uAIgPI3jrD%2FwNx0JIo%2Bi1VQzpj%2FsQaSj7CqsYasA6Vc9yo0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDIRQSZ1oOwGG%2FTrLKCrcA4t2ufrnN6xrcvHOxp0wh3dnRilHZAIoRwJFrbU2Tj%2BDZoB4uhcXym4N2f1kWlVbi7JNWAzdfaR90LeU57Mln1YboEUolAVKMrdE77kNXp3KSEndf%2BpBssMJzwzm3x4x8usgFICKo3LgRzX%2Ft5US7HSxr8PSu9bQ5yt%2FttdPFBMaVpJHiJjKIqzv83odzpwe3LqWleEzn3qJdh3k9Kf0cYTSPvUTe5%2BhdEhZYBAuxGOv1vqoNIYPCR%2FPWkrBvzxHnsP3MEhiiFv%2FHM%2FPklTfFb3pbOX5iWmj96vwsUxrVyNNkPZ2o5hItEn6rkOFLsx7dzO849S7MSfdyA8ccsVyO2Fe%2BqLBvqoA3NeVN6%2BngPXbo%2Br20r9zL2KPKZRpi9uPhX0UxtzCVGRRAh6auBJMcz9PXos68t7Ic%2BiMsG46l5N%2Fhkjf0QdNsLre00S8tBs8MwDFc6M4hNklojfqID%2FSP7mC2%2B6tsHOBxeT7xNBXArwl%2FsSywja5ayuXwpqmzEpDhlHoequmUdIib4BBk9m3WzcywxKgys9vzk6Qh4Cg0x6vxRaMYHFLNuhwerwTlZEyE5uW9GyWx%2BFv9nIhTchK%2FQa%2BdxM2j18cbIt5eL8P060LHtj4PAi5NHqTuIWPMI26qcAGOqUB%2F%2FYxSnerjMGeYsTJcdTecBbY5ndYxe77%2Bb23XkPer8Xz0yj%2B0zG2t2JmR11UR5wj7kdcOMvjoZZUqqMjCZZdEOv%2BBRB2lcdaFfG%2BMXclz4IvCudSzHC6ZoR4DMK7nAEzkDp6YECcc5NH1a491V%2BrXv8nys8PIcC%2BjxuMFvIRbtbes%2BC4tIPEgzPhN3Pt0FqAHZN%2B40LvqJ%2FfEKtb%2FYfMg0oOCRfS&X-Amz-Signature=7d0b0698db9c210988a24de453897c66a65516bf38d3c9466c8533ff13f801c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
