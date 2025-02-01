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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQPJ5BP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs3gKLQPeiqLQr4E3yMRC28ruTU4wEwLd2eZR%2BMjFDMwIhAOPI0kcowEbzMhjGhB13wVSX%2BgH4muX%2FLdiIqurMuZR2KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHTSxVjruzlMGFKfkq3ANBGXUgQyaR%2F9P1IR2i51EpEUCwLpA11PasW5i2yskgrEVuR2g%2FUpUdECASWPzG%2F5JY%2FFLNdhKeD5msEZ84UC2gX1PzbmASIYrx0IVc6suAmOOvgYXyajVCfrDmqrR0YXYYSQqYxjjqiDiMk%2F58tscXHGVhoNzyAGOPv3bk67tskj%2FvCAyE5zfJOEQuE%2F2Gn5plzqKUzfnJa5go6ruODSPfb%2BoTvzdah6KeRSxt%2FWcP1MTLOr2xZALilY3z%2Fr5BP3A6Kfpzz1XFw6UK%2BFQSgEO7gf5%2FmKFSFDeRI%2F%2BUaOPFpDLOyGchl0QCFSQ9dnNGZgEvuv404wTApLyqSWDZ5Oh1mN2oLPgzZjUKBgKjZxlWVjtlmbyBauFrQYJGxk0IWfRXgd1kb9X2scum0e%2FJ2%2F8IMPknL%2FOJ%2F85dphiFYIVVhpTw2lXLt1W2gjhdzByu%2F89g2rJQRnH5JLCYbbtrKcEHIMSRNeesU5niRJ%2BUD1IOgIG2DCb%2F%2Bx052oOtCXuSvNPG9Ox%2FY7V1GLcjt4IEMLqAFoZcshPekRrPJG50mZQD16u%2FaicAxStM4LdHmS93s%2FgxhTTjqq%2FX0doan8aNsLnyewVk4ARYHEv9yun87a5mtIsH91K3ZK75CcFjsjDrwvi8BjqkAT%2F0UnekI2HFjQnk1la0BH%2BCUonMUh2fYco%2Fv8FguX5LzFqxIKU9oKm9GzKHP6UyfT6a3VS04UjaOdjzRk%2FSkrwjDKq0lTxJxr%2FQ%2BcrgJy4sIgoxjDuUWllDWJEWgzwY9yPnf0OEjfwnm9lCAIvt1AsFugC1GqYw3F%2BDLUL2uRdfAQyAiNWhWI6X%2BTffS8lflRktIrBrxKu1lb%2FZeIkHNibgHL5y&X-Amz-Signature=d3675b5812ea67091b637d187d6b1141dffaa80bee22b09a2ab0bb29d99607ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQPJ5BP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs3gKLQPeiqLQr4E3yMRC28ruTU4wEwLd2eZR%2BMjFDMwIhAOPI0kcowEbzMhjGhB13wVSX%2BgH4muX%2FLdiIqurMuZR2KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHTSxVjruzlMGFKfkq3ANBGXUgQyaR%2F9P1IR2i51EpEUCwLpA11PasW5i2yskgrEVuR2g%2FUpUdECASWPzG%2F5JY%2FFLNdhKeD5msEZ84UC2gX1PzbmASIYrx0IVc6suAmOOvgYXyajVCfrDmqrR0YXYYSQqYxjjqiDiMk%2F58tscXHGVhoNzyAGOPv3bk67tskj%2FvCAyE5zfJOEQuE%2F2Gn5plzqKUzfnJa5go6ruODSPfb%2BoTvzdah6KeRSxt%2FWcP1MTLOr2xZALilY3z%2Fr5BP3A6Kfpzz1XFw6UK%2BFQSgEO7gf5%2FmKFSFDeRI%2F%2BUaOPFpDLOyGchl0QCFSQ9dnNGZgEvuv404wTApLyqSWDZ5Oh1mN2oLPgzZjUKBgKjZxlWVjtlmbyBauFrQYJGxk0IWfRXgd1kb9X2scum0e%2FJ2%2F8IMPknL%2FOJ%2F85dphiFYIVVhpTw2lXLt1W2gjhdzByu%2F89g2rJQRnH5JLCYbbtrKcEHIMSRNeesU5niRJ%2BUD1IOgIG2DCb%2F%2Bx052oOtCXuSvNPG9Ox%2FY7V1GLcjt4IEMLqAFoZcshPekRrPJG50mZQD16u%2FaicAxStM4LdHmS93s%2FgxhTTjqq%2FX0doan8aNsLnyewVk4ARYHEv9yun87a5mtIsH91K3ZK75CcFjsjDrwvi8BjqkAT%2F0UnekI2HFjQnk1la0BH%2BCUonMUh2fYco%2Fv8FguX5LzFqxIKU9oKm9GzKHP6UyfT6a3VS04UjaOdjzRk%2FSkrwjDKq0lTxJxr%2FQ%2BcrgJy4sIgoxjDuUWllDWJEWgzwY9yPnf0OEjfwnm9lCAIvt1AsFugC1GqYw3F%2BDLUL2uRdfAQyAiNWhWI6X%2BTffS8lflRktIrBrxKu1lb%2FZeIkHNibgHL5y&X-Amz-Signature=2f6a862113b37df35c9e0ce98e2ce13cb595dee78386d7c9129faab958f0d0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
