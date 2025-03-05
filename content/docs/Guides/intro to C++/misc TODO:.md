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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSAPHFC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLT92BGM5L%2BacHaStU7hBAcSMsrt35kx2s8MCHZS2rlAiBCLTRottUJZDHDIKaFUDJhNkzjrX6jNN0f9EfXSlvCyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMDhOlVyB4MLnexalPKtwDXwQVVOA123amdnPWmEfLAzkUFNXEz2CaOIZwb2AHWR7F%2FG3krDmc%2BP6PJb8sKTVG4RALjuHqftmINbvfuissdB1cShQyJw%2Bq%2BnrAgimkM9jM%2BU%2BioIqp%2BJjbkN5m4%2BwggdZHXTUPriSZRTD%2F5nwIO1KoLDx3ITVOyxgMbT0SES8SgHVj0V5lE0f1wzPXLDVIoIqjtyD87%2FuCZojFywql6omP7PFqmV4Vuj1FdxUqtv2LR8RQX9y9dhexY7cmyQoUwsQqdEcyQae5YPrTrHhQfc61lJ7J%2F3leGEwzkxQiw8rHz%2BN5x8bAMhWqyUXyxu4yfU65mTNyTMWKAURvo8ECoDzLyvjdsrMFAqo8IH37JbkMAFAJ51QRLVMFYn0XRqhbEKtwO%2BUGc3XCEQgY0jT3BTwVMaa5b4iCBqZmHrVjAgpw72J8mWTb%2Bw32EzWKg2sVVStYvV2uRtdOEq24uXBYRzLumdQUJ3sAaATcWDtjiK%2FHxHTEUQpPWKDWa6F1UdWzLkxfPb1IsTyarPPjfw%2BmE9Yqt90lUGAGA8WLh7JC2vARczxmclPXqLAn4PBZNrlU2%2FzuxVL%2FmkEDW0MWT8jxUcJ4%2FRP05XWQpjV8z8Mw63ZcLP5wMy3%2Bgg70EkYwnpahvgY6pgGmEVJUmkaBId2Uc1sb5oIvPiFxMJK77gm275q1fCP7CZObgaZUo51AUuk3PCf35nOxzgv5wVSwhSHpqy2tpbe%2BrbuishfNEcWk3z3YFAYGdSMk1CV14xoyFJ4alaLhss02bJk92TLMEyPfkZJ99hhuG%2B%2F%2BY3QB683%2FxGvlSWZ983M2%2BsDOU2CIdqcdiLHk8TV4F2W9Qo3Uk6de24LILO1qoRodjcI%2B&X-Amz-Signature=869f90993cbbbc413850cfff11d83f87289674c232f0db47438bbf47889b7873&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSAPHFC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLT92BGM5L%2BacHaStU7hBAcSMsrt35kx2s8MCHZS2rlAiBCLTRottUJZDHDIKaFUDJhNkzjrX6jNN0f9EfXSlvCyCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMDhOlVyB4MLnexalPKtwDXwQVVOA123amdnPWmEfLAzkUFNXEz2CaOIZwb2AHWR7F%2FG3krDmc%2BP6PJb8sKTVG4RALjuHqftmINbvfuissdB1cShQyJw%2Bq%2BnrAgimkM9jM%2BU%2BioIqp%2BJjbkN5m4%2BwggdZHXTUPriSZRTD%2F5nwIO1KoLDx3ITVOyxgMbT0SES8SgHVj0V5lE0f1wzPXLDVIoIqjtyD87%2FuCZojFywql6omP7PFqmV4Vuj1FdxUqtv2LR8RQX9y9dhexY7cmyQoUwsQqdEcyQae5YPrTrHhQfc61lJ7J%2F3leGEwzkxQiw8rHz%2BN5x8bAMhWqyUXyxu4yfU65mTNyTMWKAURvo8ECoDzLyvjdsrMFAqo8IH37JbkMAFAJ51QRLVMFYn0XRqhbEKtwO%2BUGc3XCEQgY0jT3BTwVMaa5b4iCBqZmHrVjAgpw72J8mWTb%2Bw32EzWKg2sVVStYvV2uRtdOEq24uXBYRzLumdQUJ3sAaATcWDtjiK%2FHxHTEUQpPWKDWa6F1UdWzLkxfPb1IsTyarPPjfw%2BmE9Yqt90lUGAGA8WLh7JC2vARczxmclPXqLAn4PBZNrlU2%2FzuxVL%2FmkEDW0MWT8jxUcJ4%2FRP05XWQpjV8z8Mw63ZcLP5wMy3%2Bgg70EkYwnpahvgY6pgGmEVJUmkaBId2Uc1sb5oIvPiFxMJK77gm275q1fCP7CZObgaZUo51AUuk3PCf35nOxzgv5wVSwhSHpqy2tpbe%2BrbuishfNEcWk3z3YFAYGdSMk1CV14xoyFJ4alaLhss02bJk92TLMEyPfkZJ99hhuG%2B%2F%2BY3QB683%2FxGvlSWZ983M2%2BsDOU2CIdqcdiLHk8TV4F2W9Qo3Uk6de24LILO1qoRodjcI%2B&X-Amz-Signature=9156fead5bc4d9f37309ceb86bb63adb84fa23a2eb0967b4570dd23ee0749197&X-Amz-SignedHeaders=host&x-id=GetObject)

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
