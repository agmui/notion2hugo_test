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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZBTUQ66%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDrQ7SnRG3lxbXLOHtJd45TBBwR7wHLCik7rww0Aeq4zQIgbF6UNTqEHN0SDWkGadiTax0%2FQeFr5DdaPP23e8OzbVoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDkbeTTmVEYgoiJhCrcAymmVllXa8wYzzuQVEuziZqegugZMvYCYRA4df7K7r6yrYeqrrDO5Reywc6n5mmrslsbhZw8ChW7G8DCtXBXfbRNyzYRZRnJuJuAoZ4m3m%2FbkKGQgkx%2B3sImpPSIL5i949qQIO0fAAEf2toVlor%2BbPIq2J54ajRat21LUbeYkSsvIUe0z7WSeNHYcRyplzoRSK%2BxRStB9Mx%2F6%2B7cNjpAMo6UZHEu39DpbtiXWhYx%2FxQpHSobm9OcHW0iAYdmuH9g1QaCR8bm6bzFq%2B38XNR939g16tFAB2%2Fzm72pWWvmRTnKb3kgCIIg%2Bm1YEr9ckxnGaqX4gxABqnKEANb3MiS%2FD%2BPsppsvQclgqTSBK8epSWt2gpzzDIqaqgUY8ScOESk%2B2VmL3%2F3QQDHkDN3Z%2BAu9uMpqi6IvxuRbonogvwi%2F7oPlShwFPyPOiyv68EgxGod9FalgdygXBVm33oZAvFR9qZ7EUsVU11keDZdaqPFqLgM8cAWmZXgRuJufQgbgvjTXJOai%2BjEBjyPP01iMrIuesrvXt%2FilUt5zEFMqirk1YcFXLHs6%2Btm6bijZOGa3gwew8EfH%2FN9h4%2BqMp0nEar6wFt3eaHY5Pa37zU4xnxmKB7Cxaxx8pIn2%2B0HOHdegMObxn8QGOqUBi93mi2wF88ICa9YTVuigya0xEVMIoNHb6zA1yZw7bpoqCaUoxaRD06wxKK3EFMrUrMMhc5IWEtxlPp5frix0KLw6ffatL5UJCBLaZw0EFph2s74MuNGIuxEuR8%2FiyzpfPFsWv1Bgc%2BOnxLs1ZP9lNThrYh%2FbCVa3gzrJ7xFFRKpuWFRrQEd5KinO6UU0D2gZZBKfp410Peut4GIqH5l3qqtgBjiM&X-Amz-Signature=2544dbfebcc455c5b3fb6d678be725ca5485dc80dd2bbe5a27223b6e2abb5413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZBTUQ66%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDrQ7SnRG3lxbXLOHtJd45TBBwR7wHLCik7rww0Aeq4zQIgbF6UNTqEHN0SDWkGadiTax0%2FQeFr5DdaPP23e8OzbVoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDkbeTTmVEYgoiJhCrcAymmVllXa8wYzzuQVEuziZqegugZMvYCYRA4df7K7r6yrYeqrrDO5Reywc6n5mmrslsbhZw8ChW7G8DCtXBXfbRNyzYRZRnJuJuAoZ4m3m%2FbkKGQgkx%2B3sImpPSIL5i949qQIO0fAAEf2toVlor%2BbPIq2J54ajRat21LUbeYkSsvIUe0z7WSeNHYcRyplzoRSK%2BxRStB9Mx%2F6%2B7cNjpAMo6UZHEu39DpbtiXWhYx%2FxQpHSobm9OcHW0iAYdmuH9g1QaCR8bm6bzFq%2B38XNR939g16tFAB2%2Fzm72pWWvmRTnKb3kgCIIg%2Bm1YEr9ckxnGaqX4gxABqnKEANb3MiS%2FD%2BPsppsvQclgqTSBK8epSWt2gpzzDIqaqgUY8ScOESk%2B2VmL3%2F3QQDHkDN3Z%2BAu9uMpqi6IvxuRbonogvwi%2F7oPlShwFPyPOiyv68EgxGod9FalgdygXBVm33oZAvFR9qZ7EUsVU11keDZdaqPFqLgM8cAWmZXgRuJufQgbgvjTXJOai%2BjEBjyPP01iMrIuesrvXt%2FilUt5zEFMqirk1YcFXLHs6%2Btm6bijZOGa3gwew8EfH%2FN9h4%2BqMp0nEar6wFt3eaHY5Pa37zU4xnxmKB7Cxaxx8pIn2%2B0HOHdegMObxn8QGOqUBi93mi2wF88ICa9YTVuigya0xEVMIoNHb6zA1yZw7bpoqCaUoxaRD06wxKK3EFMrUrMMhc5IWEtxlPp5frix0KLw6ffatL5UJCBLaZw0EFph2s74MuNGIuxEuR8%2FiyzpfPFsWv1Bgc%2BOnxLs1ZP9lNThrYh%2FbCVa3gzrJ7xFFRKpuWFRrQEd5KinO6UU0D2gZZBKfp410Peut4GIqH5l3qqtgBjiM&X-Amz-Signature=d3a44394c7c77f8ab7e76f0d609a709cfe6abe9b457e48d5d4d0cbe8e33fc619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
