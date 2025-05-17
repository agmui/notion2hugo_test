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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ASAUXNU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLhnPw89h2Z0X5TbmhV9xbMng1lzlhu%2BIC5uXSapAjPAiEAvfsYC2WGFRHBB378DFoNqVeqyVbgua7HpvV20FeGH9Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFphYXQaczYe0qehdCrcA6NVgPWtXhDajSt2REryhr4N31pmeRlWQ58emh6ANrQKawwiX%2BKvRMCe7u66BA%2BZyOCDeQuQC%2FmwM8KhFoC5eAuzh3wtRyS7U5lKEFLhHPsTzHL%2BKBAhH4jIn3E0O32axbLZX%2FKKkYzoeEOHh%2FyDzxHKQqpFmvWpw%2F49G6VGX6Huz347LiYwng%2B6rW2p7ne08MvehIVoW%2FlN9qhf%2Bp2%2BlYmQc3vOUUpJHtyEfg%2FWn%2FINn9RSFlX8GbobzQ6PcsesY2DsQdxOJyDQQCqUl3QUYCc0qsO0TGkkDJ%2BdXNHRfIJikcxAouzQwPXMD3TXsmN6%2FqsKNYjxWDSh6ypGLFE%2BGx7Fh5sSYpmV0xzLqRpTn%2BSUDHUx8RwFhyzzY4xUa%2B9eSbbGhcA9lNNAxszIFxRZAhsKKtfKkeICGXzXmx%2BP7r%2Fsv332DsNFeTvKxUPdeuUt2I4QWBcWftpYCKzhmQ%2F6G7x4iAj5m6xlTPaParEO2aykAgTHage%2B7%2Bn1s57kqaR1ZY7aOiDCB%2FF2m5gN4mSOT5X008iSaFKMACgqPVd%2FkBES2%2BvHb7VkXMGBr96y2TNBOKudVfoBKLzqKATHAlYq1zSltqMviOjKz4YQRrI6XtLNwjOcF7B0D2dunDc2MLW8ocEGOqUBCUkIeqadOHcVc0wEc2H2ovN7LTT9pqr%2BVoarm3nDgPrDJZSrUkUKbJtIFf6VPsrQNvI41C8rX8o1p%2F1rkYcLIFwOm8onVRv7V2pYMnFSapXwzgITz2MBxMrYSom2ZZuqgGnC%2FJxlZEPdBK%2BGxCnq0zajPbGdmvYUa3ERJBGS74bXOsMIRroJMULgsbfANJknFajZpFO2c%2F9v3WXhg8wzR3wNdl90&X-Amz-Signature=95357fc2d95cb6978936360d4c08d4b6974261c540948dbb1626c203362bcab9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ASAUXNU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLhnPw89h2Z0X5TbmhV9xbMng1lzlhu%2BIC5uXSapAjPAiEAvfsYC2WGFRHBB378DFoNqVeqyVbgua7HpvV20FeGH9Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFphYXQaczYe0qehdCrcA6NVgPWtXhDajSt2REryhr4N31pmeRlWQ58emh6ANrQKawwiX%2BKvRMCe7u66BA%2BZyOCDeQuQC%2FmwM8KhFoC5eAuzh3wtRyS7U5lKEFLhHPsTzHL%2BKBAhH4jIn3E0O32axbLZX%2FKKkYzoeEOHh%2FyDzxHKQqpFmvWpw%2F49G6VGX6Huz347LiYwng%2B6rW2p7ne08MvehIVoW%2FlN9qhf%2Bp2%2BlYmQc3vOUUpJHtyEfg%2FWn%2FINn9RSFlX8GbobzQ6PcsesY2DsQdxOJyDQQCqUl3QUYCc0qsO0TGkkDJ%2BdXNHRfIJikcxAouzQwPXMD3TXsmN6%2FqsKNYjxWDSh6ypGLFE%2BGx7Fh5sSYpmV0xzLqRpTn%2BSUDHUx8RwFhyzzY4xUa%2B9eSbbGhcA9lNNAxszIFxRZAhsKKtfKkeICGXzXmx%2BP7r%2Fsv332DsNFeTvKxUPdeuUt2I4QWBcWftpYCKzhmQ%2F6G7x4iAj5m6xlTPaParEO2aykAgTHage%2B7%2Bn1s57kqaR1ZY7aOiDCB%2FF2m5gN4mSOT5X008iSaFKMACgqPVd%2FkBES2%2BvHb7VkXMGBr96y2TNBOKudVfoBKLzqKATHAlYq1zSltqMviOjKz4YQRrI6XtLNwjOcF7B0D2dunDc2MLW8ocEGOqUBCUkIeqadOHcVc0wEc2H2ovN7LTT9pqr%2BVoarm3nDgPrDJZSrUkUKbJtIFf6VPsrQNvI41C8rX8o1p%2F1rkYcLIFwOm8onVRv7V2pYMnFSapXwzgITz2MBxMrYSom2ZZuqgGnC%2FJxlZEPdBK%2BGxCnq0zajPbGdmvYUa3ERJBGS74bXOsMIRroJMULgsbfANJknFajZpFO2c%2F9v3WXhg8wzR3wNdl90&X-Amz-Signature=e6ecdf2f709d40ec44bedc2a297109b1c5a3245b5dd81a1cc68e7edf0780ae93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
