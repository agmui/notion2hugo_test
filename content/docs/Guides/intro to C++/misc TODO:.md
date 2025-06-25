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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MTX4GN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGG7Hts4JeSCYEtkOUclJHuWn%2FP2yjBnHaELlPUDLWSzAiA4vFgfwHSfQSxECR2zzDbhXfXq63WTo32CgY2EtEU5Eyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMXY90dF3BSZdIU4UQKtwDdU%2F57UmbB5OSsjRO5SQoaSfDRadXL87%2FItDJ8CV6JGkLMetyGeRKnkXBMHMvvwy4Xv9qGqbQhy5ei01EYAR7my0XdJPshuf2wzCEoafbDwvkQiqpvgQlnmK%2FOoyeNzfpiq69PdPniQLs5M3xfZ%2BDg0LY9QjPfRxm9GmmcfFkO8QBBD2PxCBZIuOw4pP3r5oetgqw87FyW9GppC68VtbLhkHYChpQ4DwWLcZ3BZUt5jNG8ZPFpb%2FEvBk8a5Tzw7sPXgu1c5BEWyGSLtgmXxw7D4dULoKw3X0xBh3C%2BDLfkl1pZGCL958BT5ekG0kwdZQ4BfcE66VvYl%2F75va0mX%2Bh%2BSw06u0rx6IdGx19erU26MAUvXd7v4lJFOaRsfRcx2bzImXQzUL5gzauRWS4GVyCOgDV%2FKgbPOxUkNM4YOecdaYb0hMWKsoc76Z0L5eHjMGw1dOshzly0vPlLaUYbf0HRiVAGMzkoOH5p3uPed3uM6TzTZyfFHxt%2FxyeNBfD4SDaoBAIs9omqfw8%2BzPniWKpAHAOTzIPA%2BpU2GkCzidOAIHxTyC9FNBxv%2FfJjEhM2tXVm8NLOOee8fPEHx2WhZuielE3Ol59zE6%2Fd%2FU8c63xhdEcYLFg16bLNI6SRTcwkcPtwgY6pgGEt3lRxab2H3%2FXQtp0GbTGXod%2BFBwH5R4oV%2F%2FnrN8cB7QJ5MfYmcmmVGOX3AvCdpK67kAVsVAUq6bZC7WhJ3Q24Ip7D6%2Fgudff9G4g%2BoBAmYqDaHBB9ENMguOLi64kbQFPEagnJuMHIyl3Bj%2FajlYY7jDgRrWtdgRCtggMT6UYPc%2BVdakKFy64%2BFQRVLjBtKUYwebzJuEYSA7M3dx5aGCtJswgpE3B&X-Amz-Signature=f18cb73a7bc59976b4755b317ac086c6bc67673b8c58097320e4de51dc7a1351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MTX4GN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGG7Hts4JeSCYEtkOUclJHuWn%2FP2yjBnHaELlPUDLWSzAiA4vFgfwHSfQSxECR2zzDbhXfXq63WTo32CgY2EtEU5Eyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMXY90dF3BSZdIU4UQKtwDdU%2F57UmbB5OSsjRO5SQoaSfDRadXL87%2FItDJ8CV6JGkLMetyGeRKnkXBMHMvvwy4Xv9qGqbQhy5ei01EYAR7my0XdJPshuf2wzCEoafbDwvkQiqpvgQlnmK%2FOoyeNzfpiq69PdPniQLs5M3xfZ%2BDg0LY9QjPfRxm9GmmcfFkO8QBBD2PxCBZIuOw4pP3r5oetgqw87FyW9GppC68VtbLhkHYChpQ4DwWLcZ3BZUt5jNG8ZPFpb%2FEvBk8a5Tzw7sPXgu1c5BEWyGSLtgmXxw7D4dULoKw3X0xBh3C%2BDLfkl1pZGCL958BT5ekG0kwdZQ4BfcE66VvYl%2F75va0mX%2Bh%2BSw06u0rx6IdGx19erU26MAUvXd7v4lJFOaRsfRcx2bzImXQzUL5gzauRWS4GVyCOgDV%2FKgbPOxUkNM4YOecdaYb0hMWKsoc76Z0L5eHjMGw1dOshzly0vPlLaUYbf0HRiVAGMzkoOH5p3uPed3uM6TzTZyfFHxt%2FxyeNBfD4SDaoBAIs9omqfw8%2BzPniWKpAHAOTzIPA%2BpU2GkCzidOAIHxTyC9FNBxv%2FfJjEhM2tXVm8NLOOee8fPEHx2WhZuielE3Ol59zE6%2Fd%2FU8c63xhdEcYLFg16bLNI6SRTcwkcPtwgY6pgGEt3lRxab2H3%2FXQtp0GbTGXod%2BFBwH5R4oV%2F%2FnrN8cB7QJ5MfYmcmmVGOX3AvCdpK67kAVsVAUq6bZC7WhJ3Q24Ip7D6%2Fgudff9G4g%2BoBAmYqDaHBB9ENMguOLi64kbQFPEagnJuMHIyl3Bj%2FajlYY7jDgRrWtdgRCtggMT6UYPc%2BVdakKFy64%2BFQRVLjBtKUYwebzJuEYSA7M3dx5aGCtJswgpE3B&X-Amz-Signature=5e2393bbdf3f4e00d389ca81a51d7d106513b6c8bc4bf55e0a27e48baad87f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
