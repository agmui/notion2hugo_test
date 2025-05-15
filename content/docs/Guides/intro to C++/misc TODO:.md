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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJLDD4D%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICFzej3voNkap0Rcr8%2FyQuC4uJfzzwFIsVbzzmzCp7WvAiAujel07abb0lHAM6AHYRAydMrFbAD22SCMMD93%2BkFCKyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMeIw9eEvFC030cAwDKtwDWCNzR7%2Fp8o63mOrciCZ7Ng%2FeLip8msYhCjdqpdKS620kRWtwCusB7L%2FKuMYkf1cwWsaSVbT9%2FzBeCPO1qClS5ZkB3aeiCJRePucgBKgHGRb8P7WMEUVJchUhICYmiDVmRZGEg3G9K2A1xLcbTFqIlqRJqcTOmhPhfJgPZ20YERpjUgDIOsYwU1A%2FWLn7c1vYcXsQtG6ZkmPTWpxwXOCBaRt7qPzqnN5BqMiXMpUL3Jf8440QFBnmqOLr732XOfc1qF7rkqIpRlaUKqpp3ztZrLtZncagewSpJa4IIBvcuXCNM3etWpsqqxdgo5VOs54KdUG18twL0Hr4m3SmuOMfTm88Y1qDwtadL2EseNrCRHerpANAVldtnJac%2BRxuQk%2Fg8R2sLJsiNozZ%2Ft1G3ZtIWqqyUQGfZmwUqVgPihK1wRXswUmESIfG%2FbNc8X64C%2F1BYINcDM%2FNdlInjNizVa7ZuXpOBt5JqA09zqdvep%2F8cbsbuZZucEBdIfCo%2FDwRjSzIui7DsUTROk%2BBw7z6Qox4CNibBvD23Bqo4B6O%2FDjBLk9oHKOIFbVezMp5h9Ej%2FwRLxVzIbJMkxIJdbGdC30KWFrlcZKcoOAZn4ntzcHa0wvjBOjIscw1AwR%2FWqvQw1%2BuWwQY6pgF5CsfIsCP%2FZ9B0zJkoaw5Ji8i5HIBQeAgc5eupSavXxHRoygB5MXNr2mG5G2kGopGY5LZYoquz17vHVxqqiTSMeRxMdl6hyMwOHzDdPFkblRsC0%2FDCZZL4t6K9PT%2BpWF6RYB8X21%2FY1nIpUs4AK9RK6BdMMQ13pIujZEAEuvTVw2%2BMmllzNA2aftqlPy6lFOo0ISy0XNhb%2BENcPH%2BWrr9D3oMffRFY&X-Amz-Signature=d6cf1b0d8a254b5b59ae170b420a0dc5c53df4047922f6cb3fbc78f8f6e00823&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJLDD4D%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICFzej3voNkap0Rcr8%2FyQuC4uJfzzwFIsVbzzmzCp7WvAiAujel07abb0lHAM6AHYRAydMrFbAD22SCMMD93%2BkFCKyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMeIw9eEvFC030cAwDKtwDWCNzR7%2Fp8o63mOrciCZ7Ng%2FeLip8msYhCjdqpdKS620kRWtwCusB7L%2FKuMYkf1cwWsaSVbT9%2FzBeCPO1qClS5ZkB3aeiCJRePucgBKgHGRb8P7WMEUVJchUhICYmiDVmRZGEg3G9K2A1xLcbTFqIlqRJqcTOmhPhfJgPZ20YERpjUgDIOsYwU1A%2FWLn7c1vYcXsQtG6ZkmPTWpxwXOCBaRt7qPzqnN5BqMiXMpUL3Jf8440QFBnmqOLr732XOfc1qF7rkqIpRlaUKqpp3ztZrLtZncagewSpJa4IIBvcuXCNM3etWpsqqxdgo5VOs54KdUG18twL0Hr4m3SmuOMfTm88Y1qDwtadL2EseNrCRHerpANAVldtnJac%2BRxuQk%2Fg8R2sLJsiNozZ%2Ft1G3ZtIWqqyUQGfZmwUqVgPihK1wRXswUmESIfG%2FbNc8X64C%2F1BYINcDM%2FNdlInjNizVa7ZuXpOBt5JqA09zqdvep%2F8cbsbuZZucEBdIfCo%2FDwRjSzIui7DsUTROk%2BBw7z6Qox4CNibBvD23Bqo4B6O%2FDjBLk9oHKOIFbVezMp5h9Ej%2FwRLxVzIbJMkxIJdbGdC30KWFrlcZKcoOAZn4ntzcHa0wvjBOjIscw1AwR%2FWqvQw1%2BuWwQY6pgF5CsfIsCP%2FZ9B0zJkoaw5Ji8i5HIBQeAgc5eupSavXxHRoygB5MXNr2mG5G2kGopGY5LZYoquz17vHVxqqiTSMeRxMdl6hyMwOHzDdPFkblRsC0%2FDCZZL4t6K9PT%2BpWF6RYB8X21%2FY1nIpUs4AK9RK6BdMMQ13pIujZEAEuvTVw2%2BMmllzNA2aftqlPy6lFOo0ISy0XNhb%2BENcPH%2BWrr9D3oMffRFY&X-Amz-Signature=aa55d5d967950ba68d551776ed0b924dbaf4cec3b87bcd1433ab954c66b9e13b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
