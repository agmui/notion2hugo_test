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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBDKCA5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEcV%2Bj%2Fg7Vsebd8YOQVdpRzcv6%2BqHHrJuosQ5OU8nSadAiAFxFY6neeFNWgioBI7jJ2%2F3kAgoS3JAFZbpqdqP%2F83OSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaOMZTya9XoBq5jHUKtwDksT9xCaMa5yZVo%2BmH7t2mBblOwZ9sSpyCOAB1%2BSdRiRRTk2xQ7zsUfdN2BKhhMfhEUwRE8%2Ba0rrOf1ELgBoD%2Bcxpfnphh8Mu6wSBfTmgv28m5xc48wQ8MuSRFGunP5xKYsAshwL7DBlM5Idw4yqKiLb0aeoMKywFsceecwXQoDQG4bs689wHfdM%2FNOT1DlmZfa28bawpf4q2BVfx2%2Bn8AkkrsoX2Ljlak2MYMWFACtsS05JdloYf23IJ13yugpQ1JOPpmMgW%2B%2B6YUrC%2FTptbZxOXkOZl4SvMF0NcVTXUgsEZY%2Bm7O%2FftYdg%2BIOYY1oNONUvh2US%2BU0tIGtxWtkgOrZFLPN4PJI2M31dEJ38w4pdkp3cmwH83Th4x4LIjTeeHgj71Jk0kCVrCGIAPWTrv01L8zGogMe2FkgiOrX%2BbpDYV8EOiovaNwI5olqHhpwdCFrSHy2%2B9Ryud%2BhlGoRZrkelAuEyCw4vMXB77xGcWfM8gpJSu8AnGtAhQH1M%2B3QGeqG1kzsOB5wSjCr1TDimx9ncPgDW0sarozGXC5t2a9AZRTrhf80w4eqB5mEmxpAcoQ3UCTpyjfQJ2akI%2FS%2F33y8YCPTKUdUFdny5Elk%2FTW%2Fzlr%2BRWkRXIqpPYfcgwzYqiwwY6pgHtr29iaEm1vz6MsY41nYHzrj51ZXRl3rbfizI3XGdRx1S3xySUtA1acCIiZ%2Fj8pVU5eYtIckoIsmLLTAmZZAn2IuVyjoVHIzqZNf4lHOlqL1oqaLnThppg52maf9kVvrNF7MjQUnzy5P%2FVjrReUTSF6%2BFJWlTBmHyO2LSpEs6c0Hjrm4zSZX%2BiC97DPkcU7OiBMJHhN43zwTlmsutQuaeFXPj5H07I&X-Amz-Signature=762abb0e99ba1a24054bca7554fe073bdbc23239567fc846f8550a669bfc85d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBDKCA5%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEcV%2Bj%2Fg7Vsebd8YOQVdpRzcv6%2BqHHrJuosQ5OU8nSadAiAFxFY6neeFNWgioBI7jJ2%2F3kAgoS3JAFZbpqdqP%2F83OSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaOMZTya9XoBq5jHUKtwDksT9xCaMa5yZVo%2BmH7t2mBblOwZ9sSpyCOAB1%2BSdRiRRTk2xQ7zsUfdN2BKhhMfhEUwRE8%2Ba0rrOf1ELgBoD%2Bcxpfnphh8Mu6wSBfTmgv28m5xc48wQ8MuSRFGunP5xKYsAshwL7DBlM5Idw4yqKiLb0aeoMKywFsceecwXQoDQG4bs689wHfdM%2FNOT1DlmZfa28bawpf4q2BVfx2%2Bn8AkkrsoX2Ljlak2MYMWFACtsS05JdloYf23IJ13yugpQ1JOPpmMgW%2B%2B6YUrC%2FTptbZxOXkOZl4SvMF0NcVTXUgsEZY%2Bm7O%2FftYdg%2BIOYY1oNONUvh2US%2BU0tIGtxWtkgOrZFLPN4PJI2M31dEJ38w4pdkp3cmwH83Th4x4LIjTeeHgj71Jk0kCVrCGIAPWTrv01L8zGogMe2FkgiOrX%2BbpDYV8EOiovaNwI5olqHhpwdCFrSHy2%2B9Ryud%2BhlGoRZrkelAuEyCw4vMXB77xGcWfM8gpJSu8AnGtAhQH1M%2B3QGeqG1kzsOB5wSjCr1TDimx9ncPgDW0sarozGXC5t2a9AZRTrhf80w4eqB5mEmxpAcoQ3UCTpyjfQJ2akI%2FS%2F33y8YCPTKUdUFdny5Elk%2FTW%2Fzlr%2BRWkRXIqpPYfcgwzYqiwwY6pgHtr29iaEm1vz6MsY41nYHzrj51ZXRl3rbfizI3XGdRx1S3xySUtA1acCIiZ%2Fj8pVU5eYtIckoIsmLLTAmZZAn2IuVyjoVHIzqZNf4lHOlqL1oqaLnThppg52maf9kVvrNF7MjQUnzy5P%2FVjrReUTSF6%2BFJWlTBmHyO2LSpEs6c0Hjrm4zSZX%2BiC97DPkcU7OiBMJHhN43zwTlmsutQuaeFXPj5H07I&X-Amz-Signature=f0a0e78ececfe15d2b7d124c3a41dad7717fa1493db229e3acb3cbe47c65c7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
