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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNF7MJD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAMC24exK%2Fd4QDdFb%2FlhSIaC0ievpmDiQMDT7yxqKS2iAiEAmiZo%2FeSXswRQd%2BJ4tXv5sgx%2Bo%2FuXsMXGppezqQzuwZ4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjzZzGKUIdJTkmK5CrcAxdt7DD5lufw7CnlzKWFPvXXSiAyBLSxMsbbz6zQA495S9PGqVd%2BLAxrJK6AzY4xxaH1yFbo7A1MRIDgD%2BUPiQfmRCvs9IEm1WZP4VIh9d3%2BjYFQkCeRMpyEmy7nUffxaHOBoyv%2B2DK%2FNdzSM%2BSEGRJcrbaL2n9WqzdfVN18sF3JYJWUq5YQMjcuJ5CktUQx4h748u9AWMHGqrc2z%2FBSYJZF2GidXogTqd4Sj%2BVHtxHFVCPj%2BAgjcMSGMmQLlSTtgs3Z%2Brp5GrvBIz9HXECUqv4rO6xlHRRtNnj6BiplSbutKP1Ib9cUifDcZHiTwpg8zmh6qDFwwmojFp5cBDbRbov040fb4RU6Le325Qs8RGO0kVe5O8pgUHsz%2Fr0lE9qM31iSCwS3MRr%2Be3M3W7r%2FXOiNJQKvKsuGBEvtypJLI3HJW12%2BMzBHtQrArzsClVsdlpv1EG%2ByRZxxBpbSAXmSplwBCyT%2FDcl1mfGSUaoUILNJRa4crIsWzFdv7WEhquJyChKJlxsHltSmBh5ZLzM0VgdiRu2AZAebo122mjvjrvnUj%2FdqjP%2FFnP959J8H3S1iJ%2BJolkhaUA5b04EMO9I2kaUUrtwBxrdFYMPvUDAaQ6GwxTC65CIzFrNLe6tXMLmhg8EGOqUBxW77RVMnPH2Vr%2BGxdU3DhiT5oAjlfrd08%2Fi6TmWvsqTrUW2FoJkqHelodp%2Bbte6dOK1Bs0iUdrudDGQ%2Bbwwip%2Bj7n8G5pWuT1C8q5psfFazGtejRh1smA5oxjcS3X7IUZ1LLDY67%2BzH3s%2Bjc2CKRDi6IuZh5ck%2FpGwrx4HlpVyQKMCTYBt3vHPqkQjNRDu7muKgqgZQE1rDlX5eyJ8QSzrl2kREF&X-Amz-Signature=12e562750bc9acf6f15318d2a6574f940ba6f62f4d00b534f320153466d19f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNF7MJD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAMC24exK%2Fd4QDdFb%2FlhSIaC0ievpmDiQMDT7yxqKS2iAiEAmiZo%2FeSXswRQd%2BJ4tXv5sgx%2Bo%2FuXsMXGppezqQzuwZ4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjzZzGKUIdJTkmK5CrcAxdt7DD5lufw7CnlzKWFPvXXSiAyBLSxMsbbz6zQA495S9PGqVd%2BLAxrJK6AzY4xxaH1yFbo7A1MRIDgD%2BUPiQfmRCvs9IEm1WZP4VIh9d3%2BjYFQkCeRMpyEmy7nUffxaHOBoyv%2B2DK%2FNdzSM%2BSEGRJcrbaL2n9WqzdfVN18sF3JYJWUq5YQMjcuJ5CktUQx4h748u9AWMHGqrc2z%2FBSYJZF2GidXogTqd4Sj%2BVHtxHFVCPj%2BAgjcMSGMmQLlSTtgs3Z%2Brp5GrvBIz9HXECUqv4rO6xlHRRtNnj6BiplSbutKP1Ib9cUifDcZHiTwpg8zmh6qDFwwmojFp5cBDbRbov040fb4RU6Le325Qs8RGO0kVe5O8pgUHsz%2Fr0lE9qM31iSCwS3MRr%2Be3M3W7r%2FXOiNJQKvKsuGBEvtypJLI3HJW12%2BMzBHtQrArzsClVsdlpv1EG%2ByRZxxBpbSAXmSplwBCyT%2FDcl1mfGSUaoUILNJRa4crIsWzFdv7WEhquJyChKJlxsHltSmBh5ZLzM0VgdiRu2AZAebo122mjvjrvnUj%2FdqjP%2FFnP959J8H3S1iJ%2BJolkhaUA5b04EMO9I2kaUUrtwBxrdFYMPvUDAaQ6GwxTC65CIzFrNLe6tXMLmhg8EGOqUBxW77RVMnPH2Vr%2BGxdU3DhiT5oAjlfrd08%2Fi6TmWvsqTrUW2FoJkqHelodp%2Bbte6dOK1Bs0iUdrudDGQ%2Bbwwip%2Bj7n8G5pWuT1C8q5psfFazGtejRh1smA5oxjcS3X7IUZ1LLDY67%2BzH3s%2Bjc2CKRDi6IuZh5ck%2FpGwrx4HlpVyQKMCTYBt3vHPqkQjNRDu7muKgqgZQE1rDlX5eyJ8QSzrl2kREF&X-Amz-Signature=9a2e195a0e3ab99941381a94e2ee25648056b41f3a3098d930c8f95d1adec391&X-Amz-SignedHeaders=host&x-id=GetObject)

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
