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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRXZV6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDODqfhqmw8j4ebh5GJg%2BZ1neaokWZ0I%2B7oXnODc4j%2BYQIhAKjYjZ8U7IVYiZf75WRaSgIRLC5HMUKPD2NVmk4444vbKv8DCCkQABoMNjM3NDIzMTgzODA1Igy%2FvMZYsYLGKahD6zcq3APGF3bL55ETedUsPUH2gbGpd7bA%2BHdDyY4GwkOENi13T7JW9Ty0TIMn6puDTZI1aZsDbAx92f9TfHGt3CR%2Fbn6jR19pDYKMkFlZFBbelhwbko6h1B0AaKowyGoqbk0815ihZzb5yLgyrFcmwTNKm3ujJ7oBpMaUVNohPH3cOB85q0Tw5ydKPOy3T6wTnDOSzFdoXEEO1VULkg4IM63c1FGrEm4T9YdN7sTJFwxEHah9I5Cw8ai5Uz9%2F8N2NyY9Mzez2PRXUJWgw33sniboqXcteHuft0bGe%2BM2rVxlhkqNxC3sgdR3nJjTk%2FWRAmEnZ3%2FejaTB1znhyxD8Asqe%2FeGl9U5etgzbXt0xvek%2FA787EmivocxHkNUCY0KGvA8kTKLSEtwtmM5DXPkvUX3yYdmQVvgQ%2FyCCOKyNOoc6qeO%2BWVbqhF63qx3JMNi0hiincuKJURP5AMka1yq1mXuKAnmdccW3deZJ9xse%2FdEvQaUSgN%2BZrTUnl8E033fIh76jqnm%2Fkp4TxiF%2ByqewK929wn8eFryJ5Z1U7Ch7tkrv89T4745B6Zlcul9urHJ36D1RT19z0E6jAj4ymVSn6sCuNTDsvdXfYyhyxq5QAvxiBTOcap1S9WjHEgJEzzf5EbjDHgq3ABjqkAb%2BM2Rda7h8iiQ2Au%2FmIs9V%2BBJ6la2bcCH%2Bu3WhMEuFX2A%2BkKrBShwdsU814Wk%2BXDHkMSCfymlaOHPJa6M9hAJFjOUg9BZJXywRTVWY1ytJJHtEGq6ujxyG2%2FhlaN8ujdK74RHuILIS%2BGGkK11yCzmsB%2FVTKPz5OKkLZbTn6180lznyQl4ux6gw29SRukkEKHjc3wV6yKD0G9unNutBDr%2BATaZi%2B&X-Amz-Signature=3071b58118812112af76c224c3385ff25bb21604cbb39e08a6dfffeda1ddda42&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJRXZV6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDODqfhqmw8j4ebh5GJg%2BZ1neaokWZ0I%2B7oXnODc4j%2BYQIhAKjYjZ8U7IVYiZf75WRaSgIRLC5HMUKPD2NVmk4444vbKv8DCCkQABoMNjM3NDIzMTgzODA1Igy%2FvMZYsYLGKahD6zcq3APGF3bL55ETedUsPUH2gbGpd7bA%2BHdDyY4GwkOENi13T7JW9Ty0TIMn6puDTZI1aZsDbAx92f9TfHGt3CR%2Fbn6jR19pDYKMkFlZFBbelhwbko6h1B0AaKowyGoqbk0815ihZzb5yLgyrFcmwTNKm3ujJ7oBpMaUVNohPH3cOB85q0Tw5ydKPOy3T6wTnDOSzFdoXEEO1VULkg4IM63c1FGrEm4T9YdN7sTJFwxEHah9I5Cw8ai5Uz9%2F8N2NyY9Mzez2PRXUJWgw33sniboqXcteHuft0bGe%2BM2rVxlhkqNxC3sgdR3nJjTk%2FWRAmEnZ3%2FejaTB1znhyxD8Asqe%2FeGl9U5etgzbXt0xvek%2FA787EmivocxHkNUCY0KGvA8kTKLSEtwtmM5DXPkvUX3yYdmQVvgQ%2FyCCOKyNOoc6qeO%2BWVbqhF63qx3JMNi0hiincuKJURP5AMka1yq1mXuKAnmdccW3deZJ9xse%2FdEvQaUSgN%2BZrTUnl8E033fIh76jqnm%2Fkp4TxiF%2ByqewK929wn8eFryJ5Z1U7Ch7tkrv89T4745B6Zlcul9urHJ36D1RT19z0E6jAj4ymVSn6sCuNTDsvdXfYyhyxq5QAvxiBTOcap1S9WjHEgJEzzf5EbjDHgq3ABjqkAb%2BM2Rda7h8iiQ2Au%2FmIs9V%2BBJ6la2bcCH%2Bu3WhMEuFX2A%2BkKrBShwdsU814Wk%2BXDHkMSCfymlaOHPJa6M9hAJFjOUg9BZJXywRTVWY1ytJJHtEGq6ujxyG2%2FhlaN8ujdK74RHuILIS%2BGGkK11yCzmsB%2FVTKPz5OKkLZbTn6180lznyQl4ux6gw29SRukkEKHjc3wV6yKD0G9unNutBDr%2BATaZi%2B&X-Amz-Signature=54528465f4466f75ef5376846eb07bc28343794e3768cc85cd9b4f4f7f4969fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
