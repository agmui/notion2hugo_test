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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFLWRAY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEi7UEYuquQ3LXOIIH%2B6y0SxKuDhXD03jxWMl%2FySnk5fAiAWlbve3SPupM5Xfo2907Y5mhStvpgqF5l8gQtVu6xjiCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPl7SpupUz%2F%2Bze1RTKtwDWc5MZBzhqPpUE2L54unpaigxHf51HVWetstK54ll%2FdJuPtuS5CGUtV4VIzNbg0bUtUum90qTA8olQ9TyOotpg8ytER5L6n%2FVTq2M%2F2Z8zJQJ616DdbPRSqslqMxXkSfebNxPKc3N7%2Fmn9N3d8XKsT9WVUUHwwh5m8wPjMPJW2BAoDlb0%2FRG4AcdPVp26G544y6x49Izw1PdQcFZcLqz8TkMpc1GyN1NNfxOxDP14N%2B%2F%2BXCw2ZgJ1TfMzFJ76iJALyCFYDX324vwYVSrreJzp4Ws2uSBySgwE84pcZOZzQ%2Bq7Rj5A9%2Bb39XQ%2Br1%2FA9RFv4T6%2FcybHMqZWhnyY5vlWFAPr%2B6CuEARff3YvrkYSXwV2UN3yqO0YucZSPTm1tV8l7Hlz7%2FPEM8EcnPcN%2FSHFbCLjG%2Fp3GmhFoQIMuXhFMGh%2F8pzKM1l808vzZKWln2%2BCHt%2FG2gRhs2mUrd%2Fmlu0Lk3AA6YfTlD2v1%2B6B3icuId7iyKjlWY1H2GEh28q1QmiG8O7dztl59piIsIvGzkmGCDKsGN2u9uTX8H7rWQs3Vjq6mqEWZy42FwIEPgEIhTRIGX5QgAZwnQ%2FaALHNC1Qg8fvwiZNYX9VQDye%2FHyulZ3z6atNOSYcMerIEFfQwydnBwQY6pgFSJ0abh9BlM17zItCNLN7j9FIHbMoR7y8aEvmtrk58CN4ib8SjJFKAbUTJ1yQhD5%2BeeZg3WoVMqEW7l0RPfZe1XUhXjnyX%2FkDkBpKZaZn4JSCyhYEUReRcEPg9bryimkxlNqy675cw3fwD6WZiOmCRaifT6MHFKlJzuOnIS6X6Gu3mqWjowRaqp9hFSuSkk6MtOD9RltfPuVT3M9ZAwSrPTPehBROb&X-Amz-Signature=6500519d7bdb02edae3b464eb65ffb9d54b1eb0a40c332d511b791d5e1d082ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFLWRAY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEi7UEYuquQ3LXOIIH%2B6y0SxKuDhXD03jxWMl%2FySnk5fAiAWlbve3SPupM5Xfo2907Y5mhStvpgqF5l8gQtVu6xjiCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPl7SpupUz%2F%2Bze1RTKtwDWc5MZBzhqPpUE2L54unpaigxHf51HVWetstK54ll%2FdJuPtuS5CGUtV4VIzNbg0bUtUum90qTA8olQ9TyOotpg8ytER5L6n%2FVTq2M%2F2Z8zJQJ616DdbPRSqslqMxXkSfebNxPKc3N7%2Fmn9N3d8XKsT9WVUUHwwh5m8wPjMPJW2BAoDlb0%2FRG4AcdPVp26G544y6x49Izw1PdQcFZcLqz8TkMpc1GyN1NNfxOxDP14N%2B%2F%2BXCw2ZgJ1TfMzFJ76iJALyCFYDX324vwYVSrreJzp4Ws2uSBySgwE84pcZOZzQ%2Bq7Rj5A9%2Bb39XQ%2Br1%2FA9RFv4T6%2FcybHMqZWhnyY5vlWFAPr%2B6CuEARff3YvrkYSXwV2UN3yqO0YucZSPTm1tV8l7Hlz7%2FPEM8EcnPcN%2FSHFbCLjG%2Fp3GmhFoQIMuXhFMGh%2F8pzKM1l808vzZKWln2%2BCHt%2FG2gRhs2mUrd%2Fmlu0Lk3AA6YfTlD2v1%2B6B3icuId7iyKjlWY1H2GEh28q1QmiG8O7dztl59piIsIvGzkmGCDKsGN2u9uTX8H7rWQs3Vjq6mqEWZy42FwIEPgEIhTRIGX5QgAZwnQ%2FaALHNC1Qg8fvwiZNYX9VQDye%2FHyulZ3z6atNOSYcMerIEFfQwydnBwQY6pgFSJ0abh9BlM17zItCNLN7j9FIHbMoR7y8aEvmtrk58CN4ib8SjJFKAbUTJ1yQhD5%2BeeZg3WoVMqEW7l0RPfZe1XUhXjnyX%2FkDkBpKZaZn4JSCyhYEUReRcEPg9bryimkxlNqy675cw3fwD6WZiOmCRaifT6MHFKlJzuOnIS6X6Gu3mqWjowRaqp9hFSuSkk6MtOD9RltfPuVT3M9ZAwSrPTPehBROb&X-Amz-Signature=dd12913d27c447384482a0c2eacfeab9fdd516332d76f6958f3b9eefb46f5a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
