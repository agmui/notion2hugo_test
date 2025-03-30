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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBRVTV6I%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDtFdXrIJMcLFfsXkc42BFUbcN8dxQ1a%2FRJyggjL1r0XgIgSWndfDeJn3k8JAoSai3sfX8wI5v%2FvXe%2BVdV6eoFdbGEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLVkLIwfl%2FJ7tfQGyrcAwNqikNtcQKxe4fo4iL19dH82uDtwGOz6cxuFNlA2eqByJPRVro%2F%2FPnI2aV1Y0uvr%2BQVPCiS4NASTd%2BVM19CvvEZZP1bFVwJI3M50RfmyiA7QWAJaqURF2AchRP%2BgSmxy%2FWKylWUI0i1UQe6jBOR3ArpHPVbii%2FvYx5Oj6G6G1q%2B4Z%2BgP%2BaNnKnacPv0Pw8sBCgPgqjA5NdSAVM%2BBJ%2B5U9f0zoiIp9UATygkMdG78018Yaxr0Qp3h53DgaDiQbIhSp%2Fh6oxNOL0wlkc%2F7mvSg3rUq5wojtHaul456t4j5%2FyHhfz911lCKxZZ0yUuqfWFX5B%2FVwTAXNES3TfR6kr7ysTbNCMWfa6bqVNvfg9BSiNDvWevNzTnoMiTk8ifmk5KuAGHFnLMtdTm%2BHdqGI499hTRkvLYWhfmNiI0xNiGIHhw07jV%2Bm4aAaiqXFIJ%2BUX1s5PFC9cX6Rpibp6zrTkT1vmQu%2B49d32RJ8FTcqI05yErUAfDRJoZEOFq4TKSMijEAHF4Q4iwGAT2zSLmlLfI0Xl8K6TqacJsOwP2z7tfGPpnUwbAXVUn%2BKbEK6ZaUQCx7%2F5ke%2F9L1CdOC%2Bw1zr4uVjtpAXRoBmrRU2aYryKmW3FOTbBduuoEkCX27WiCMIibpr8GOqUBSPjTfvLSIvbmydBEf2YElhGRUro9AU8lKIxHN7CbDZgnEisjuxOA8JEee1bzg0rocEnhjX0963C9bblXe8vvvXHH0xlRKMx%2F5%2BcloMboBM3iTRIvdGrPXSkmC%2Bg5qn%2BQpUVjV%2BuGfoRz4KMkH5g%2FXo0L1uol2SgjgMkAWehIQZbM7qBbQ%2Fl6tcLMpDtrLa4td7CwMq9fC3JM9Kyg8IEzxaDsqg8Y&X-Amz-Signature=8e178a1fffbf52a5af4c4974e11ddea5a8d21ab4d619e6253458334354590684&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBRVTV6I%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDtFdXrIJMcLFfsXkc42BFUbcN8dxQ1a%2FRJyggjL1r0XgIgSWndfDeJn3k8JAoSai3sfX8wI5v%2FvXe%2BVdV6eoFdbGEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLVkLIwfl%2FJ7tfQGyrcAwNqikNtcQKxe4fo4iL19dH82uDtwGOz6cxuFNlA2eqByJPRVro%2F%2FPnI2aV1Y0uvr%2BQVPCiS4NASTd%2BVM19CvvEZZP1bFVwJI3M50RfmyiA7QWAJaqURF2AchRP%2BgSmxy%2FWKylWUI0i1UQe6jBOR3ArpHPVbii%2FvYx5Oj6G6G1q%2B4Z%2BgP%2BaNnKnacPv0Pw8sBCgPgqjA5NdSAVM%2BBJ%2B5U9f0zoiIp9UATygkMdG78018Yaxr0Qp3h53DgaDiQbIhSp%2Fh6oxNOL0wlkc%2F7mvSg3rUq5wojtHaul456t4j5%2FyHhfz911lCKxZZ0yUuqfWFX5B%2FVwTAXNES3TfR6kr7ysTbNCMWfa6bqVNvfg9BSiNDvWevNzTnoMiTk8ifmk5KuAGHFnLMtdTm%2BHdqGI499hTRkvLYWhfmNiI0xNiGIHhw07jV%2Bm4aAaiqXFIJ%2BUX1s5PFC9cX6Rpibp6zrTkT1vmQu%2B49d32RJ8FTcqI05yErUAfDRJoZEOFq4TKSMijEAHF4Q4iwGAT2zSLmlLfI0Xl8K6TqacJsOwP2z7tfGPpnUwbAXVUn%2BKbEK6ZaUQCx7%2F5ke%2F9L1CdOC%2Bw1zr4uVjtpAXRoBmrRU2aYryKmW3FOTbBduuoEkCX27WiCMIibpr8GOqUBSPjTfvLSIvbmydBEf2YElhGRUro9AU8lKIxHN7CbDZgnEisjuxOA8JEee1bzg0rocEnhjX0963C9bblXe8vvvXHH0xlRKMx%2F5%2BcloMboBM3iTRIvdGrPXSkmC%2Bg5qn%2BQpUVjV%2BuGfoRz4KMkH5g%2FXo0L1uol2SgjgMkAWehIQZbM7qBbQ%2Fl6tcLMpDtrLa4td7CwMq9fC3JM9Kyg8IEzxaDsqg8Y&X-Amz-Signature=276e95552ffd687628dbb200fba64e3cbb0b10473ba93540caf377bce246f513&X-Amz-SignedHeaders=host&x-id=GetObject)

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
