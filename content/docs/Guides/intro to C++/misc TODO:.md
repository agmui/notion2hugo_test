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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJX6YENI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3uRGSI%2BWcKKcgc9G7UAeqX2OsOF47pCNxo%2BuaSillJAiEA6%2FaUdJPCrf0o8jcXjvbvCGbWeRfNP%2Bow1KB7dq2T5tkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSUTZHe6F34%2FzBtzSrcAwK974A9rPEJEiuv67zunELFX4k8%2B5momqsEiMG4dB1uWoFEBbxQbPtGjojEh62a36Uola3dgExIhfmeNLGEjPl8SEAVPADrLLwGj2N6lIxjJvK8WFWimeuIIEeUM9O%2B%2FsHJRkdUYccPnhz8W4PQdgNDRIWsQW%2BftMX%2BTOQWJ2quf2%2Bf1Vr45QLr19NaC9DNqsz42gTH7aV3bcDNlAC5GAfWZj1van6hwL03nI7RGv6J6dneJhrFTuSzlcU%2BPHROjOwUA2LlxezA9lqNK9eeeKiCsxCVYMbVUSuIFYa3d%2FFCJQX%2BTCnn39QmXThcfqGu2HPE8lNdqfBQlrPEKH0wCIoSHhKHuZ6SOTHFkQ6OSH966HKWNFYm7yHucZkhxrb3YgHc27NY4fO3Vrj0f%2Bc9lfKFXetoWYvQ3%2BxgBFhSdFM8AZnH1KfFK0Hyt8uTOpfD%2BISg0X1os7QmCDC2TE%2F98vJgbvdBbdAqh4ZpsA6a4B%2F0mQCMoqUCPJMYFvEaAFgRItNga%2Ft9gqtIJdJgHcmsQkPW%2BmxQCKBi2GHY8Bxf5z3POVFJlsc5uOAr81SGrwgTioQb6p%2BmxovFDjrhra05r3xcjWdllfBC%2Bthrt9qTdg1HydHcLlOA9NKucQ7PMIDkq70GOqUBwtETe5XQESqcXBPtpuJMxFHqipC%2BpBGPGzkDdrpBt5vssU77yaPQ7Yf5T2%2FGBWB1iEUU67osqdiIHbMVdK%2FCNv%2BvN8%2FTC%2BfpMgWvoCzbx3Qoe3F633PzibkBf5%2Fq7vZSDaJOXUdMJv5OL9zHN9rKBmKnJ%2Fi8Rmi2m5RmlVfkuEZVw6LNBBjK3%2BckYHHuwxuLj6lKvJjMuGw%2B%2BPKJ68%2B6KRH581ie&X-Amz-Signature=ed8ab652d64fdb3581e6e0420491fdfb6b52c6532cfd243e1ebbfe8e377f4354&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJX6YENI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3uRGSI%2BWcKKcgc9G7UAeqX2OsOF47pCNxo%2BuaSillJAiEA6%2FaUdJPCrf0o8jcXjvbvCGbWeRfNP%2Bow1KB7dq2T5tkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSUTZHe6F34%2FzBtzSrcAwK974A9rPEJEiuv67zunELFX4k8%2B5momqsEiMG4dB1uWoFEBbxQbPtGjojEh62a36Uola3dgExIhfmeNLGEjPl8SEAVPADrLLwGj2N6lIxjJvK8WFWimeuIIEeUM9O%2B%2FsHJRkdUYccPnhz8W4PQdgNDRIWsQW%2BftMX%2BTOQWJ2quf2%2Bf1Vr45QLr19NaC9DNqsz42gTH7aV3bcDNlAC5GAfWZj1van6hwL03nI7RGv6J6dneJhrFTuSzlcU%2BPHROjOwUA2LlxezA9lqNK9eeeKiCsxCVYMbVUSuIFYa3d%2FFCJQX%2BTCnn39QmXThcfqGu2HPE8lNdqfBQlrPEKH0wCIoSHhKHuZ6SOTHFkQ6OSH966HKWNFYm7yHucZkhxrb3YgHc27NY4fO3Vrj0f%2Bc9lfKFXetoWYvQ3%2BxgBFhSdFM8AZnH1KfFK0Hyt8uTOpfD%2BISg0X1os7QmCDC2TE%2F98vJgbvdBbdAqh4ZpsA6a4B%2F0mQCMoqUCPJMYFvEaAFgRItNga%2Ft9gqtIJdJgHcmsQkPW%2BmxQCKBi2GHY8Bxf5z3POVFJlsc5uOAr81SGrwgTioQb6p%2BmxovFDjrhra05r3xcjWdllfBC%2Bthrt9qTdg1HydHcLlOA9NKucQ7PMIDkq70GOqUBwtETe5XQESqcXBPtpuJMxFHqipC%2BpBGPGzkDdrpBt5vssU77yaPQ7Yf5T2%2FGBWB1iEUU67osqdiIHbMVdK%2FCNv%2BvN8%2FTC%2BfpMgWvoCzbx3Qoe3F633PzibkBf5%2Fq7vZSDaJOXUdMJv5OL9zHN9rKBmKnJ%2Fi8Rmi2m5RmlVfkuEZVw6LNBBjK3%2BckYHHuwxuLj6lKvJjMuGw%2B%2BPKJ68%2B6KRH581ie&X-Amz-Signature=8b549aaef6fb4aa05d7c8ad422455b76bbf48a70224eddda45b3c96bd96e2fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
