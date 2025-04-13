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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVM2AGGY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID2l886wkvwH01Vp5UDgRv9Lka4tsEM42s83tCkCQd2MAiADh7ui0P%2FRKv2GLP%2BTZ23Ac%2B1jdkHg3f8hC3xGRVc2EiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnUAClIypfP2W3HkcKtwD6P6h03uSMa%2BKuF%2FxcjpzNgya6FwNcXYb91lW6bVBrAl0%2BeIlcLSpBoj1qo%2Bf81GX4bTpfbHLiYXUKcxF42d22rK9qyU3wPhOCvY3uNx3yUPIO4oWPTH4EBrkmuZ3B%2BDyUF9j4VQj4zqPyIzCwmxFnGbX0u9FpOx1QKmYkiNoPLvd90Fi8AJcu4L8R8L5YEl1uVc3EU9e5vx5Xs8%2BsTd8q8NQ98YjGks44jHL%2FHXlB4hDprcROArkiV48ZyJUF0%2BgoeLp2jdxoLE9VYVnXK9IizT7hves9MCigcO9%2BnSZQ2RC5ECE%2FiEH6GFE3oYXo1BNsPCp9a2t1k%2F40AQxt3i%2FdG1v0ZgFjoTjJxAasgMMiT9tRNs672Rcvm72n%2BoKpkkFgW4j85gMPr11jAVF%2BV6pLviofRC2Ws7cwHlmB2GpgE2LEQQlZK55cA2KbLd8NlpjnBNPUfp58TTRLpm8iXFaWX91lOeskqBBMXKEVMhto5yPqr%2BGMSpCUskoKvFKcw%2FksynyPK%2F3DtFF6doJq7b9XSKXfu5ZHAfvziLNXSDRipg4ZujeSLsu5gjmU%2BmvXowLuD7rthKB3BVXXU2Y6EppGlDt4PXWzuPF4ZfYCeRHSLifelHBQoJlGzxAet8wmb3uvwY6pgFrpTOyZVe7oT0TPouyRvogWrVQBiHvjEPfC4lCiI%2BbQGDCq%2FbwBTQj6SOmg2EegAnCK2dBrVeebzEf39HCkHe3aoZQXNuY0amPG05Mit%2BhpsYyXc8hhgg25bzVcAxnFlb8%2FiRXAEO1lA4qpJrsJ6V%2B%2BGHi%2BG53Wnz8Ezg6c90ghukuII7x1NUOm1jAiwwE%2BUv0r0vvrraUi5svpQbXZUpp8YV0%2FgBf&X-Amz-Signature=ccab0b012e002131f1a3446738d67f5264a94fee2e735328d2cbc1d659b59648&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVM2AGGY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID2l886wkvwH01Vp5UDgRv9Lka4tsEM42s83tCkCQd2MAiADh7ui0P%2FRKv2GLP%2BTZ23Ac%2B1jdkHg3f8hC3xGRVc2EiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnUAClIypfP2W3HkcKtwD6P6h03uSMa%2BKuF%2FxcjpzNgya6FwNcXYb91lW6bVBrAl0%2BeIlcLSpBoj1qo%2Bf81GX4bTpfbHLiYXUKcxF42d22rK9qyU3wPhOCvY3uNx3yUPIO4oWPTH4EBrkmuZ3B%2BDyUF9j4VQj4zqPyIzCwmxFnGbX0u9FpOx1QKmYkiNoPLvd90Fi8AJcu4L8R8L5YEl1uVc3EU9e5vx5Xs8%2BsTd8q8NQ98YjGks44jHL%2FHXlB4hDprcROArkiV48ZyJUF0%2BgoeLp2jdxoLE9VYVnXK9IizT7hves9MCigcO9%2BnSZQ2RC5ECE%2FiEH6GFE3oYXo1BNsPCp9a2t1k%2F40AQxt3i%2FdG1v0ZgFjoTjJxAasgMMiT9tRNs672Rcvm72n%2BoKpkkFgW4j85gMPr11jAVF%2BV6pLviofRC2Ws7cwHlmB2GpgE2LEQQlZK55cA2KbLd8NlpjnBNPUfp58TTRLpm8iXFaWX91lOeskqBBMXKEVMhto5yPqr%2BGMSpCUskoKvFKcw%2FksynyPK%2F3DtFF6doJq7b9XSKXfu5ZHAfvziLNXSDRipg4ZujeSLsu5gjmU%2BmvXowLuD7rthKB3BVXXU2Y6EppGlDt4PXWzuPF4ZfYCeRHSLifelHBQoJlGzxAet8wmb3uvwY6pgFrpTOyZVe7oT0TPouyRvogWrVQBiHvjEPfC4lCiI%2BbQGDCq%2FbwBTQj6SOmg2EegAnCK2dBrVeebzEf39HCkHe3aoZQXNuY0amPG05Mit%2BhpsYyXc8hhgg25bzVcAxnFlb8%2FiRXAEO1lA4qpJrsJ6V%2B%2BGHi%2BG53Wnz8Ezg6c90ghukuII7x1NUOm1jAiwwE%2BUv0r0vvrraUi5svpQbXZUpp8YV0%2FgBf&X-Amz-Signature=85077617c3da871a4df41920f99dcf2e374af683430510b1b2bf7de169c82301&X-Amz-SignedHeaders=host&x-id=GetObject)

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
