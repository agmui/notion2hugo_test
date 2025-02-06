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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVLUA6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAG6HutLyBd%2FkqGHUZcvYjGL%2FdEmZnB3zQsJSBVD9TYSAiBoRImilSeM5t0fsZsEdYliRqnUT7myTAXw3rW1J%2FMSfir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2B%2BHV8iMzAK4d2wW9KtwDYkUwOWavUeowS%2Bo5IfbQADYRYgKMTvqyMQA%2F0sjFlpvwa7zIGg1sp0SQhSlRxkNp2jY6ipfpMI70hLLmRsjVadOUsgcILSuOTTK%2FG%2B7CnN4v%2BpOm5zhlYH7oMRaPZVaE7jGoTrTlbsCPx30rCCIDKfc86Dpyb0OgscTlhog3eBjOAnblm9UAgP%2FcMvOw35hSmYRjG%2BLBjmfQq7HJYue4TzZ%2F2wu7Xyt7K11qtNeNDVyLeq%2BjWSSEfRMdeazrULFmVUPUGYvDAWB60QhkdL0VF8MqrtIa5ZU6OuBRr8q4apDNY%2F1ppeoPjHcqMRRDO%2FhishheW4wY%2FuakugPwIqRfikaUs4D7kvr6k%2Fmxzr%2BuvAusw4JgCUZHpcMYSwAVOBv6%2F8P%2FP9IbyuTrPDvatt4AhfTrNf0RivJdefshsAvDYK%2Fb%2Bq%2BWvmRkMXyeLc98hbjMYkTSOgLg7XKwTEjtrCEcfAJBr2TSOJ5YA3dcLiVkh697BPdD56Y2vVCRi2Oe6ItbMLyaPhILFkEHYfQ%2FTPnFzuboijRKhMO609V2uapNcKo%2BS56B%2BPKWWuXn296nZTQd34VJmWBHtE8W8NqSUjgo5vwUvVH0Z4CO2yQrwiHrw1j8MSgkd0FeOgxpGPcwxJuRvQY6pgGibYC28vyiX%2FAwFgQO69RgZF7yHEReDowCTiXYyjkoUZzC5Oiti%2F3b9MbmW0yGWV8aL%2FJAt22iZUkMa1n2EbMgLej6r8KGTuerdiEnoLE0aCizPJnKoWcJylrMmL9FAK0N2jQa%2Fblh3Mxl9sUUzDNuTCHiXE4NlYBCdlLxX95FDhBzeTi7a026oIzL8KlXywfNY5YtDtzWBOeX5CNwtGsEThvbb8do&X-Amz-Signature=60a8cc2b5e50beb43ddd4db5ad5ef35b1923ed757533c270867924c1b9ba0bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVLUA6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAG6HutLyBd%2FkqGHUZcvYjGL%2FdEmZnB3zQsJSBVD9TYSAiBoRImilSeM5t0fsZsEdYliRqnUT7myTAXw3rW1J%2FMSfir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2B%2BHV8iMzAK4d2wW9KtwDYkUwOWavUeowS%2Bo5IfbQADYRYgKMTvqyMQA%2F0sjFlpvwa7zIGg1sp0SQhSlRxkNp2jY6ipfpMI70hLLmRsjVadOUsgcILSuOTTK%2FG%2B7CnN4v%2BpOm5zhlYH7oMRaPZVaE7jGoTrTlbsCPx30rCCIDKfc86Dpyb0OgscTlhog3eBjOAnblm9UAgP%2FcMvOw35hSmYRjG%2BLBjmfQq7HJYue4TzZ%2F2wu7Xyt7K11qtNeNDVyLeq%2BjWSSEfRMdeazrULFmVUPUGYvDAWB60QhkdL0VF8MqrtIa5ZU6OuBRr8q4apDNY%2F1ppeoPjHcqMRRDO%2FhishheW4wY%2FuakugPwIqRfikaUs4D7kvr6k%2Fmxzr%2BuvAusw4JgCUZHpcMYSwAVOBv6%2F8P%2FP9IbyuTrPDvatt4AhfTrNf0RivJdefshsAvDYK%2Fb%2Bq%2BWvmRkMXyeLc98hbjMYkTSOgLg7XKwTEjtrCEcfAJBr2TSOJ5YA3dcLiVkh697BPdD56Y2vVCRi2Oe6ItbMLyaPhILFkEHYfQ%2FTPnFzuboijRKhMO609V2uapNcKo%2BS56B%2BPKWWuXn296nZTQd34VJmWBHtE8W8NqSUjgo5vwUvVH0Z4CO2yQrwiHrw1j8MSgkd0FeOgxpGPcwxJuRvQY6pgGibYC28vyiX%2FAwFgQO69RgZF7yHEReDowCTiXYyjkoUZzC5Oiti%2F3b9MbmW0yGWV8aL%2FJAt22iZUkMa1n2EbMgLej6r8KGTuerdiEnoLE0aCizPJnKoWcJylrMmL9FAK0N2jQa%2Fblh3Mxl9sUUzDNuTCHiXE4NlYBCdlLxX95FDhBzeTi7a026oIzL8KlXywfNY5YtDtzWBOeX5CNwtGsEThvbb8do&X-Amz-Signature=187c573c1a859a89689aa986fc3db5983ce7dda4b30612d515dd8a8eacad5faa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
