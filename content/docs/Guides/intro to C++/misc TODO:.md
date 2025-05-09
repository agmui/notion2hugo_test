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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NXCWTLJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChOPkrQkvdO%2FKlzF99%2B3G%2FftWOPCIXVoguhNxvpkPwYgIhAPk%2BwA0ErLAtxODRUIwG3Y9419GBbSsfvjgQ4ICVOLQTKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkhbyb4UukEeqqE6Yq3ANjG4eieXlzcEQWppAhJQR3VVwe4qeSokRxGetYFShyucoUGEjz4tmYwn3c66OLwOPttfSIdURjzGLijmSXUafcx0PQysxar5enlR0ss1c4nrz4YQEkTS9vXr4xHbwya10Hyqx6opZM5jmGwdzo9Z1WifOnOeXbXX6n4EJi1lpd%2BmBIjVuPanPZU%2BFrtCMYoYhY9iXIoYUA%2FPJzCa%2Fnd5%2BzBZkoDlaITrRTumiYqLR1hDtXtAj6eHv8XZKUOkPreDEIEXgksPUwxc4dnvks%2Btv%2F93qIz%2B5UyK495nnkUMK51W34sy2j52DTETjeDP6KoxqYTFzhJTqke5fKqqz9SXiQZABL2BFHQsE000hgMAr5DXq3qgNkWuGXR3WCItna9fq0hCXCwXlsMb9%2FZ30xQsB8TGxNl6Wk6ctt7xlSGOM2Yl8y0aT2Dxz4h5O0%2BfZLmDqpk6MojTWswv4nv65A1V56MYSn%2BxSRJ4nBDAiVW%2FmU0Mw468ugP4m4gtemVZvAk3mKgoa7U4T9Fgd9%2FK2D%2F1LJyzHAa%2B%2FseHPLb9BwR601NRaP9R1g5%2B8ZomBJNXwN5iwkMD%2FqzLx70IwR82jSdH7zWc%2BAMBD5cemgkcamw5SlNxHkE1c7C6Jrd%2B%2BxUzDH4%2FTABjqkAR06%2FmmTqwCyDyWlXojstrJSZn9foLkhW5xJXuIFoMkG40N3Jh65F5dvvwT0ehQFD5AQWNLEUL%2B8Qnm2JoshVF7ZQTkfXKTWMOgl64V7YNpx9YXqZ6UA%2F403LOtxesBUPAIqUmdGFqswAH59tLYPoUVbjEGcfmgoizi2edP9TvAUDmIre50mqtxCF2AdSDfekgoIQ02KW9bwq3d4vMLBfZOh49NS&X-Amz-Signature=26017ab83791bd84083fafe3926e65df705cf40f129ebc811829d630186968a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NXCWTLJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChOPkrQkvdO%2FKlzF99%2B3G%2FftWOPCIXVoguhNxvpkPwYgIhAPk%2BwA0ErLAtxODRUIwG3Y9419GBbSsfvjgQ4ICVOLQTKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkhbyb4UukEeqqE6Yq3ANjG4eieXlzcEQWppAhJQR3VVwe4qeSokRxGetYFShyucoUGEjz4tmYwn3c66OLwOPttfSIdURjzGLijmSXUafcx0PQysxar5enlR0ss1c4nrz4YQEkTS9vXr4xHbwya10Hyqx6opZM5jmGwdzo9Z1WifOnOeXbXX6n4EJi1lpd%2BmBIjVuPanPZU%2BFrtCMYoYhY9iXIoYUA%2FPJzCa%2Fnd5%2BzBZkoDlaITrRTumiYqLR1hDtXtAj6eHv8XZKUOkPreDEIEXgksPUwxc4dnvks%2Btv%2F93qIz%2B5UyK495nnkUMK51W34sy2j52DTETjeDP6KoxqYTFzhJTqke5fKqqz9SXiQZABL2BFHQsE000hgMAr5DXq3qgNkWuGXR3WCItna9fq0hCXCwXlsMb9%2FZ30xQsB8TGxNl6Wk6ctt7xlSGOM2Yl8y0aT2Dxz4h5O0%2BfZLmDqpk6MojTWswv4nv65A1V56MYSn%2BxSRJ4nBDAiVW%2FmU0Mw468ugP4m4gtemVZvAk3mKgoa7U4T9Fgd9%2FK2D%2F1LJyzHAa%2B%2FseHPLb9BwR601NRaP9R1g5%2B8ZomBJNXwN5iwkMD%2FqzLx70IwR82jSdH7zWc%2BAMBD5cemgkcamw5SlNxHkE1c7C6Jrd%2B%2BxUzDH4%2FTABjqkAR06%2FmmTqwCyDyWlXojstrJSZn9foLkhW5xJXuIFoMkG40N3Jh65F5dvvwT0ehQFD5AQWNLEUL%2B8Qnm2JoshVF7ZQTkfXKTWMOgl64V7YNpx9YXqZ6UA%2F403LOtxesBUPAIqUmdGFqswAH59tLYPoUVbjEGcfmgoizi2edP9TvAUDmIre50mqtxCF2AdSDfekgoIQ02KW9bwq3d4vMLBfZOh49NS&X-Amz-Signature=499a939617123060cc5e641f9a1889bb66bf041dc753b4dfcfc0c540e0e4e50f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
