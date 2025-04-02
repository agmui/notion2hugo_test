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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNONZJG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCBIuzGqdQDmEPN2SADHnFAlyvehTrmR3g4t3Ewkk7mewIgQ3o8vUa93V8oXxsvAoBkprKMU7%2FfChStuct10vAnNrIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMERQN%2Fk9cVNcytWQCrcA3Wy3nGjDJpHs3bPpS8BIxndFJMxMne%2BLY2ooAjfZniOjBf1PVwKpk2%2BC1ixgP1jdCpBuU%2Fj46cNcZbJSCaMUoP41rG7QJofLVWnPX7upUsFxWbqyBQcZW5npeNvQJVHff0wrUVtC%2FwYrqQm9fTQyiKmgukKJ%2F8MtYjJWAVnC7%2Bt6PZBnjpq4TDOV3At4z4nMlR2eYHqIUeSdgSGxj4k5y693%2FLMLifx064YZNlmCoR%2F2ai4p6k74teZuD%2FIzq%2FFCVb75nyPHa%2FMHdq1O3JRlQ8iML7j1f8R2NdusRRdFecRyVFj9Gvxr2mjsQOrQaXo0ktHf37qdch6mw1CEgBZ2lLGqMGy8K%2FlAh5TTKPSbkeffPOjKlCXSD5%2FtBQ3pXDjYv%2BlVTxzCQ7s8QAbjEvzOIrYvB98HanAl7AOH7dkXjGtrLPJy%2FDt5gxCFTZJgAdZHjCjcsharaMiOh81beGD7%2BkTNfdFnsnhGb3%2Fc%2FXmICVL4YnlJZZrfSiNSaD1LCAdfHtCiOHSwgGV8qu1qI43fOoWR5fCUuuAb0QYw%2FshoSa5KtQWmIUK5Cjo94bEZWXkUnLewI0K2JNch4qfJ3r3yrsxogblTzLs7a6POkCqLMWjGRTOR36eWxl4eJv1MMfptb8GOqUBmwwKTUyBXlwgmtkGZSIl5o01cPHzbKa%2Bzj2pkQ5A%2Fug%2FhV%2F%2Fvh%2Fpe8YFM3GGWWMEZBK0jdCKxqUnFa6O8SdLUPAKggNJB1%2BFVaGiCRTZdFtKYOSREgEEqDrzLEkAJYGAjxYj9COuc%2BBCSP%2FnUi55vce3nAUO%2B7uS6FGtKgNHQdeCuhpjfbpUW0IolqzzCd2OaLxrrTwRkudoiOGduYd00DsGtk1T&X-Amz-Signature=a582062fd6281755ae0c507e198c1d82323d1b237a3fcd8455fdd87488d46e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNONZJG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCBIuzGqdQDmEPN2SADHnFAlyvehTrmR3g4t3Ewkk7mewIgQ3o8vUa93V8oXxsvAoBkprKMU7%2FfChStuct10vAnNrIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMERQN%2Fk9cVNcytWQCrcA3Wy3nGjDJpHs3bPpS8BIxndFJMxMne%2BLY2ooAjfZniOjBf1PVwKpk2%2BC1ixgP1jdCpBuU%2Fj46cNcZbJSCaMUoP41rG7QJofLVWnPX7upUsFxWbqyBQcZW5npeNvQJVHff0wrUVtC%2FwYrqQm9fTQyiKmgukKJ%2F8MtYjJWAVnC7%2Bt6PZBnjpq4TDOV3At4z4nMlR2eYHqIUeSdgSGxj4k5y693%2FLMLifx064YZNlmCoR%2F2ai4p6k74teZuD%2FIzq%2FFCVb75nyPHa%2FMHdq1O3JRlQ8iML7j1f8R2NdusRRdFecRyVFj9Gvxr2mjsQOrQaXo0ktHf37qdch6mw1CEgBZ2lLGqMGy8K%2FlAh5TTKPSbkeffPOjKlCXSD5%2FtBQ3pXDjYv%2BlVTxzCQ7s8QAbjEvzOIrYvB98HanAl7AOH7dkXjGtrLPJy%2FDt5gxCFTZJgAdZHjCjcsharaMiOh81beGD7%2BkTNfdFnsnhGb3%2Fc%2FXmICVL4YnlJZZrfSiNSaD1LCAdfHtCiOHSwgGV8qu1qI43fOoWR5fCUuuAb0QYw%2FshoSa5KtQWmIUK5Cjo94bEZWXkUnLewI0K2JNch4qfJ3r3yrsxogblTzLs7a6POkCqLMWjGRTOR36eWxl4eJv1MMfptb8GOqUBmwwKTUyBXlwgmtkGZSIl5o01cPHzbKa%2Bzj2pkQ5A%2Fug%2FhV%2F%2Fvh%2Fpe8YFM3GGWWMEZBK0jdCKxqUnFa6O8SdLUPAKggNJB1%2BFVaGiCRTZdFtKYOSREgEEqDrzLEkAJYGAjxYj9COuc%2BBCSP%2FnUi55vce3nAUO%2B7uS6FGtKgNHQdeCuhpjfbpUW0IolqzzCd2OaLxrrTwRkudoiOGduYd00DsGtk1T&X-Amz-Signature=42e263da1eda9e1700baa57675a7496996554b81f2fe4ca3655cda56dccb3801&X-Amz-SignedHeaders=host&x-id=GetObject)

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
