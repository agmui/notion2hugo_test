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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMHVX6E3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFIJMHloikI1Z3lM1bdE0S6LF8Hb0rJ4t2VtL7uFZybwAiEArxUWyNBolSNnaRPLygYBYMK8Gk5DqHlh2m8evMh%2BRU8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCuU0uMeBskaFFj%2BPCrcA3D405G4Au%2FwLQ9VsGCEtD%2FaBYrP%2BlX3%2FdwrgMOzcVM6%2FJetew77tWLk8vkEuylDNjaXi%2F4TKR0bYgEBpd18kyPHcNgbaYAbASKwsdUFu9VgLSoPspmG9arTIU0Gu2EVn1GZ68tdFHK522Vl1m0Ppgw2gareUJbpv6YL0mWsawVJmhy482%2B4TUZhBjoq9qnBqWr59VpipcFp%2BrTSuKwAOoiGapTAnPdnYYR2QGfyCvu05I5jyTJkeD8PW2ElSgk4Sn8tCTAVXy5nRMXnGjBMAtW%2FTPi0fb1iggd0ELo4N%2BC9uYN%2B5hKASXDIt9KHMKLuv%2Bte1xiiMFloxCmj4SoooePB%2FjcjXYvHWl4NCVKSYcOEIUHOUYkrw6w%2Fyto5OaHq%2F3I3uXLZh5cDCobAinw4EBNgKoNQ2VIHqqTqzgoiIjsgpQitt%2FdN%2Byp4qN3GcOh%2FNhfSf9jvJSV5wVokmDg%2F5QY4M5sy44Nardk9eWxppYDZ%2Bm4LclLXtbIjCxfCUFUnMLyID1uybL8HOzFaCFjtg%2FsN6JSkY9aIoYnetBmt6fFI%2BaiUt1vTHqukPwO%2BEvQR3FwwtGy6e6BSRWDMxIx4ihrB2v0nLv%2F31SApEjJuyaZJjh0Fs4o9QqEC8u%2FwMNSSp8MGOqUBW%2FfYLPEcyNd9uDJPYaLnWcjgovocVmRFR5NbpJ0%2BS%2FURutPQ0ErvECKFePQm91oGSIb2SFoBUgNHw4mWP9YdWLMTOpJk6a4eKJ0ebIL1XjrviY%2B4wuK%2FEcsupN7T2%2B%2BFDRH7HGfKPBoSTsPLF2bNXexomuEyBaAYuzdwu%2B1VoELAUjEsR%2BjvgVO%2BwesIFcKHe3DcRT33vOAJX9Ytp0MNQcwJkS4S&X-Amz-Signature=642a31b4c943722b07d1036bec17a58614a79d52d8d796c812ed9ee47b6eb6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMHVX6E3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFIJMHloikI1Z3lM1bdE0S6LF8Hb0rJ4t2VtL7uFZybwAiEArxUWyNBolSNnaRPLygYBYMK8Gk5DqHlh2m8evMh%2BRU8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCuU0uMeBskaFFj%2BPCrcA3D405G4Au%2FwLQ9VsGCEtD%2FaBYrP%2BlX3%2FdwrgMOzcVM6%2FJetew77tWLk8vkEuylDNjaXi%2F4TKR0bYgEBpd18kyPHcNgbaYAbASKwsdUFu9VgLSoPspmG9arTIU0Gu2EVn1GZ68tdFHK522Vl1m0Ppgw2gareUJbpv6YL0mWsawVJmhy482%2B4TUZhBjoq9qnBqWr59VpipcFp%2BrTSuKwAOoiGapTAnPdnYYR2QGfyCvu05I5jyTJkeD8PW2ElSgk4Sn8tCTAVXy5nRMXnGjBMAtW%2FTPi0fb1iggd0ELo4N%2BC9uYN%2B5hKASXDIt9KHMKLuv%2Bte1xiiMFloxCmj4SoooePB%2FjcjXYvHWl4NCVKSYcOEIUHOUYkrw6w%2Fyto5OaHq%2F3I3uXLZh5cDCobAinw4EBNgKoNQ2VIHqqTqzgoiIjsgpQitt%2FdN%2Byp4qN3GcOh%2FNhfSf9jvJSV5wVokmDg%2F5QY4M5sy44Nardk9eWxppYDZ%2Bm4LclLXtbIjCxfCUFUnMLyID1uybL8HOzFaCFjtg%2FsN6JSkY9aIoYnetBmt6fFI%2BaiUt1vTHqukPwO%2BEvQR3FwwtGy6e6BSRWDMxIx4ihrB2v0nLv%2F31SApEjJuyaZJjh0Fs4o9QqEC8u%2FwMNSSp8MGOqUBW%2FfYLPEcyNd9uDJPYaLnWcjgovocVmRFR5NbpJ0%2BS%2FURutPQ0ErvECKFePQm91oGSIb2SFoBUgNHw4mWP9YdWLMTOpJk6a4eKJ0ebIL1XjrviY%2B4wuK%2FEcsupN7T2%2B%2BFDRH7HGfKPBoSTsPLF2bNXexomuEyBaAYuzdwu%2B1VoELAUjEsR%2BjvgVO%2BwesIFcKHe3DcRT33vOAJX9Ytp0MNQcwJkS4S&X-Amz-Signature=345301d0fbd6570d23b9bf9415f4a6bf11a08452161cc204f14f32a737977b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
