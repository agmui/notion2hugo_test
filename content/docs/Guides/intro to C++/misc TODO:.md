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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTLXI4O%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF7YlydAi4lOanTmNDHkvIi4jOW7yaw1P0zeakOO9Ux9AiB9HwlOSYBGxRmT8NGSFLcN3XtsRZh6kqfeFNgela2YNCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMr%2FZmqHbbzqR5sD1IKtwDwrXKKo%2FWs7RiTv%2Bb0T%2FesWuZ5OSssDSFcEekmZ%2F4nR8RUOs5FeeTotI7rRxeFQ64Ud7OFnSvI%2FqZ6TyPUQFYrJC240gARRov4ElTV30G8HFLNQ7thNW1maqUBl9So5F3n0r%2FCMzOnr9Ma86XYYydcsNg%2BkEEdE0z7hcEYokun%2B9nZ1booiH1I1r8m3fijT3FtY01QoVjA12tgqmuEYy2OUeXAwSk%2B8z34S4dOk28RfPyzO6UFjJ9BigoETtySO0mgI3jgrJmq28uaE18XU7rmz69VuCeGKNTr4W%2BgpPjn0G8UQLVy2qAmVFBwuIxHgk6NMP5psMPPMqasf0%2B0KWTKksfay2y%2FS275UzIcF%2BSdyKec2DlOziti0aq%2BDkfTNrLQD1FHHwktGi3PgciLczfJ7t2WzsRkdPts1GqbnsSlG63UHC92FMgZ%2FpLZaR3ekWbUEVjkkglpt2x5hKnsL86WWmqBlyW5%2BBxlpoAPefey0PiBMDwqbbmdZGIOSF6XB4rkSSSc5ehsuV%2BYip5xmVO5UwGSXptSKc3AO9dKoJrFqi6QqB1hYs%2FXunKY%2FczsV3EtBGqSKoMoyuNTwBPW6vuEn4Ow6FRVbcMPow2OdzwBUsEWp4lGvXiNtRuxlowxbL%2FvQY6pgEx8clLd0mnahVUWSkyo6nICi49N6sR3HFTwSQkgHCe9pb5PD%2B0BL4LzJ4wfvCx2Sy%2FYX9zII1TPQ2vvo17fYDDuKvhKxwL5MBkC81jUpKPAQpmOjlG76Gjx9c6omVmirH7QSPqw4LgPX2OBcJ47Fl3CTv4%2BJuJLH0BrQmvGER2htJZEuktaHuhiDMM4mMW%2BmCHzxzuIFLFKVPkKl%2BeIzZjcXtPcigu&X-Amz-Signature=c5f628fa0e6f83b0a233649b3f721029254b8af8f551f0544788dcdb2764a119&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YTLXI4O%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF7YlydAi4lOanTmNDHkvIi4jOW7yaw1P0zeakOO9Ux9AiB9HwlOSYBGxRmT8NGSFLcN3XtsRZh6kqfeFNgela2YNCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMr%2FZmqHbbzqR5sD1IKtwDwrXKKo%2FWs7RiTv%2Bb0T%2FesWuZ5OSssDSFcEekmZ%2F4nR8RUOs5FeeTotI7rRxeFQ64Ud7OFnSvI%2FqZ6TyPUQFYrJC240gARRov4ElTV30G8HFLNQ7thNW1maqUBl9So5F3n0r%2FCMzOnr9Ma86XYYydcsNg%2BkEEdE0z7hcEYokun%2B9nZ1booiH1I1r8m3fijT3FtY01QoVjA12tgqmuEYy2OUeXAwSk%2B8z34S4dOk28RfPyzO6UFjJ9BigoETtySO0mgI3jgrJmq28uaE18XU7rmz69VuCeGKNTr4W%2BgpPjn0G8UQLVy2qAmVFBwuIxHgk6NMP5psMPPMqasf0%2B0KWTKksfay2y%2FS275UzIcF%2BSdyKec2DlOziti0aq%2BDkfTNrLQD1FHHwktGi3PgciLczfJ7t2WzsRkdPts1GqbnsSlG63UHC92FMgZ%2FpLZaR3ekWbUEVjkkglpt2x5hKnsL86WWmqBlyW5%2BBxlpoAPefey0PiBMDwqbbmdZGIOSF6XB4rkSSSc5ehsuV%2BYip5xmVO5UwGSXptSKc3AO9dKoJrFqi6QqB1hYs%2FXunKY%2FczsV3EtBGqSKoMoyuNTwBPW6vuEn4Ow6FRVbcMPow2OdzwBUsEWp4lGvXiNtRuxlowxbL%2FvQY6pgEx8clLd0mnahVUWSkyo6nICi49N6sR3HFTwSQkgHCe9pb5PD%2B0BL4LzJ4wfvCx2Sy%2FYX9zII1TPQ2vvo17fYDDuKvhKxwL5MBkC81jUpKPAQpmOjlG76Gjx9c6omVmirH7QSPqw4LgPX2OBcJ47Fl3CTv4%2BJuJLH0BrQmvGER2htJZEuktaHuhiDMM4mMW%2BmCHzxzuIFLFKVPkKl%2BeIzZjcXtPcigu&X-Amz-Signature=5b65d1c464b3d193b1fa10cb49256edf20906d759022fe6aa00f334c5cd757d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
