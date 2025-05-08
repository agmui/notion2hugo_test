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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ITSHIG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzmnv2c4Hcu8G7khmy8AcmD%2B8cTXC5TKKf87herSTeZAiEAiihYXTJ8stpt2VnfdBjQOq65zQ4aAF%2F1B4uQh1%2BPgT8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBu5J4zfffssnu%2BeJyrcAy1eCIY7fgWDRUTkyCTXla6HNKzMwbO6PKgqQhD%2B0mTm7afuYeiQIrgowyKy8N5aFK%2BepmtpPH569%2Fvz58kCBERW4jYuWgTO94u7TQfL2ss1Q%2BYKD%2BeLXrw50HdOWnsKi8nwm8LPEoqI7prwMXD7O%2FaMw6dxTiVl0ZS4b3LeXDgYBA2QMiTRAwcBd%2FpSVswAecrc8ofeny4yRCoUVUyonU5CdmrFEnxixF95QPLqTMJfIWMI7Q%2BTF4rNSQIt%2BL3wZSScnEryK7oAOOp3ZE0QlW6cgQQC6MXc6%2BZTbl4FsJOrX9OEVwYWDfjtRWUouZbRVrbTiT1amtq64eEJ1Ebezlp9Gip7WtPvbLWYbmRGLmwm8L8YyFdQl3mOypY0habScI3tv0DiC7d9vJB3vew1ydL2oNjrsQxjCcZHiJ9cHf7YSeevo5qnNfUyJwu9zdCPKQA9GBcUjYDAhLwEtkom3uG9JB4gzx5%2FBEOTj6plMaPZXuuiIhghVWKvzqBs%2BDdgLUbS2A7qFhPTrREEPjjhyFP3FAs7MzcH8Tz4KfWn8nvHdQ%2FbfnyNslM5haQz078mb4q17sjyd6wUnD3YauAhhG%2FGDLAxxbwE0r9XoyAD%2ByhUUkZl5pvKZ%2F5twbodMN6z88AGOqUBo%2BZO9KWT7u8jZVaKO3XPPunUaXqf7MyUNT%2FQGhwY%2FHRsh9HFwj2vH0Y5FSZ%2FaJYu2%2BNrc8%2B06lE3zepDsMnJVNToKt853wuIwAux02RwZy47%2FyPFcWydM%2F5drBiTCyFSWs4Jwq9023aNMLhmNJTim3PcPfy37CJRMgSA%2BfqMLj52E07JW%2FhnmgWxydfMxjMaTCTk3yFcb75mZ4g2iCBicgDiIryf&X-Amz-Signature=104fbabbdd5eafa7fe21769f5762cbbcf03455cfb6880643f62d39dfe0f73f04&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ITSHIG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzmnv2c4Hcu8G7khmy8AcmD%2B8cTXC5TKKf87herSTeZAiEAiihYXTJ8stpt2VnfdBjQOq65zQ4aAF%2F1B4uQh1%2BPgT8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBu5J4zfffssnu%2BeJyrcAy1eCIY7fgWDRUTkyCTXla6HNKzMwbO6PKgqQhD%2B0mTm7afuYeiQIrgowyKy8N5aFK%2BepmtpPH569%2Fvz58kCBERW4jYuWgTO94u7TQfL2ss1Q%2BYKD%2BeLXrw50HdOWnsKi8nwm8LPEoqI7prwMXD7O%2FaMw6dxTiVl0ZS4b3LeXDgYBA2QMiTRAwcBd%2FpSVswAecrc8ofeny4yRCoUVUyonU5CdmrFEnxixF95QPLqTMJfIWMI7Q%2BTF4rNSQIt%2BL3wZSScnEryK7oAOOp3ZE0QlW6cgQQC6MXc6%2BZTbl4FsJOrX9OEVwYWDfjtRWUouZbRVrbTiT1amtq64eEJ1Ebezlp9Gip7WtPvbLWYbmRGLmwm8L8YyFdQl3mOypY0habScI3tv0DiC7d9vJB3vew1ydL2oNjrsQxjCcZHiJ9cHf7YSeevo5qnNfUyJwu9zdCPKQA9GBcUjYDAhLwEtkom3uG9JB4gzx5%2FBEOTj6plMaPZXuuiIhghVWKvzqBs%2BDdgLUbS2A7qFhPTrREEPjjhyFP3FAs7MzcH8Tz4KfWn8nvHdQ%2FbfnyNslM5haQz078mb4q17sjyd6wUnD3YauAhhG%2FGDLAxxbwE0r9XoyAD%2ByhUUkZl5pvKZ%2F5twbodMN6z88AGOqUBo%2BZO9KWT7u8jZVaKO3XPPunUaXqf7MyUNT%2FQGhwY%2FHRsh9HFwj2vH0Y5FSZ%2FaJYu2%2BNrc8%2B06lE3zepDsMnJVNToKt853wuIwAux02RwZy47%2FyPFcWydM%2F5drBiTCyFSWs4Jwq9023aNMLhmNJTim3PcPfy37CJRMgSA%2BfqMLj52E07JW%2FhnmgWxydfMxjMaTCTk3yFcb75mZ4g2iCBicgDiIryf&X-Amz-Signature=3c21a23fcc09ee8e3697d29fb7ea6a4f05dd7e0c05ea3df23383a9bfdc856f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
