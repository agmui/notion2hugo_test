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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGCQQC7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHzhNxTvDgxSt8QaRc7ppUI%2Bcrg0n3h2o9kWTSV90YLkAiEAk9CkKSTDcawltKGVnL1SmArgUgT1FUBX%2FwU3ajIMbOkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIWWl75lEYKa3pzvEircA%2F3rHzHq303frldT%2Fvz3vonKzUG%2FM3wa8RYNDtnLlHECDWNlOsWKeE%2B5%2FfbSoHyJsIhaJ0gHMx%2BDvJJYsk%2BJ9bCGaDnCn%2BK5rGPcBbzi25TZCVqW16dHvVnRXfZBEvEvhicnvSAdZEW9qstfN5P%2Byl1nP2%2B4TC1q3fiOSq6ISwEb3JgyjzvNcidsChqlzLz436ZuJsWDMV8BBYhOCSBkucmTQX2aJpvUF9gp7CuDQgDiaCE75KCSwir6W45bdEXldh6zvTBphig%2BxR%2BhaA%2F9GY%2FFrCKaatxnNMXI2AXuNSzUTBtx9pzvJu201fwjoHw%2FF0s7DvufabLWDbx%2Fs0Y90BOFzTvOwqiDhhLKpV%2Bm5uLuiCBWlxClYrZ3fl9%2FOW33OnFiuMia%2FOXldo9CNXIGczFwFB2TnLTo216cfwI9dvPWaiJERUf6AQ3g7cHTSeSGDwdfH%2FAMRyw4lxE4gQFZRbU6Ud1BF3Qpe1mKPus9Wce4zt2QgrWhem1bCimqODnk40rQVBlcmcBRB9N%2F3G95IwpP9bBTTcr3raRERHADKgoadyQ%2FJFMYf682ls%2Fpr0O5zFK5NOmMIuwhE6LHR3sY5yLxaKvdyRrVsa%2BWxZG5iNNYFdV9eo9%2FRYRCAWy5MIyj%2BsQGOqUBT%2F4inDlsJ9QUxhkPYmge76SnGcOegi4QrTB%2B3j0ZH5eP6AB7DesXMpTnFD3TUd%2Fe2sjmUKO%2BJcfXU5HHwW6O%2BwhNFyJpa93MM0BZpYCEWu%2BZdeplNfh2jgn3kvcEgPB%2FE0pV6OSkVkhsyDUAnIgPiczgWbTOiEucQihACMfoPeB1aRDwNskuiWunLKVX%2BCFs%2FjjAtj%2BOQtadwrYXexvLuCW8VA26&X-Amz-Signature=328869d13ebf07df06010596157963b828fccc5c60e2b7fbc84d0b3ee40929bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGCQQC7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHzhNxTvDgxSt8QaRc7ppUI%2Bcrg0n3h2o9kWTSV90YLkAiEAk9CkKSTDcawltKGVnL1SmArgUgT1FUBX%2FwU3ajIMbOkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIWWl75lEYKa3pzvEircA%2F3rHzHq303frldT%2Fvz3vonKzUG%2FM3wa8RYNDtnLlHECDWNlOsWKeE%2B5%2FfbSoHyJsIhaJ0gHMx%2BDvJJYsk%2BJ9bCGaDnCn%2BK5rGPcBbzi25TZCVqW16dHvVnRXfZBEvEvhicnvSAdZEW9qstfN5P%2Byl1nP2%2B4TC1q3fiOSq6ISwEb3JgyjzvNcidsChqlzLz436ZuJsWDMV8BBYhOCSBkucmTQX2aJpvUF9gp7CuDQgDiaCE75KCSwir6W45bdEXldh6zvTBphig%2BxR%2BhaA%2F9GY%2FFrCKaatxnNMXI2AXuNSzUTBtx9pzvJu201fwjoHw%2FF0s7DvufabLWDbx%2Fs0Y90BOFzTvOwqiDhhLKpV%2Bm5uLuiCBWlxClYrZ3fl9%2FOW33OnFiuMia%2FOXldo9CNXIGczFwFB2TnLTo216cfwI9dvPWaiJERUf6AQ3g7cHTSeSGDwdfH%2FAMRyw4lxE4gQFZRbU6Ud1BF3Qpe1mKPus9Wce4zt2QgrWhem1bCimqODnk40rQVBlcmcBRB9N%2F3G95IwpP9bBTTcr3raRERHADKgoadyQ%2FJFMYf682ls%2Fpr0O5zFK5NOmMIuwhE6LHR3sY5yLxaKvdyRrVsa%2BWxZG5iNNYFdV9eo9%2FRYRCAWy5MIyj%2BsQGOqUBT%2F4inDlsJ9QUxhkPYmge76SnGcOegi4QrTB%2B3j0ZH5eP6AB7DesXMpTnFD3TUd%2Fe2sjmUKO%2BJcfXU5HHwW6O%2BwhNFyJpa93MM0BZpYCEWu%2BZdeplNfh2jgn3kvcEgPB%2FE0pV6OSkVkhsyDUAnIgPiczgWbTOiEucQihACMfoPeB1aRDwNskuiWunLKVX%2BCFs%2FjjAtj%2BOQtadwrYXexvLuCW8VA26&X-Amz-Signature=a193864f762f27ae3cfc6e5d3ca385663c3644a2caa578a66790acd82c2c7dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
