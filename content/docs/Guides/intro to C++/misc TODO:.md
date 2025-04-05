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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K65ZOHT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BdG69V%2FHqvj0t1AxRFmB%2FijBojOR2iNq0hpXPwIbsWAiEAg3Fmjw7USA4z7pxcqf6atDi92v0fDOkeLLGzQg1K5OQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDF0nY1U7j%2F2kyuk4FCrcA73Is%2FviV1dn67LKVW75iLJFmEyPr2G%2BYVv7dOipaQcAQVMsY1IaUlkKENlJGdIHLfc7a7xzK%2BRqY8jBpcPgEmCfY5ZQL1zGNSpcqRlzNyNHLJox57QIceGxezxOqHYrPe8zjfqIL71sKpPS6EzeO4TvrsckCo4vs7ZHPZf7Xt%2Ff4%2BNOocmcI3W3%2B0Y39K2l%2Fu6WZH6rPo%2BSldI9qxf0pHUh0fawSyduu3eNrGuMXdpjtoZWCar9ia%2BqHBV4sfsYUGHJPUfCut7yqOCwWLlYZPJFZ6nxWG2Y2FPev43tLqF2xzZ%2B8hVPyrcd7J7dvI8ApK484K9dVoxD67WqSbdbm9iCCxxFODv5XFPFBJRGPFK23TFlyoiISEa%2BIFWaKjDBskaUbwhF0e5raynJXVANafGK%2BPrNKPw8hPMjJCX00ekF7xmWRZ4b%2By6bIZA5TgGAK17FP%2FXQnSbi%2FG8shhWzh%2BQ5PJYZZrJrrW%2F9PagrExen%2BRLB8Vxp28uaGijHdgUh%2FGgYfhfscaAcOK8hy4WkT5uscIDkG1zZ5SvhSH2p7as2TCd50YUQFsFE8%2FK0JjrZJMeq3WzEu8ZBjkbpulXE%2BWE1vNoLm0Xd%2Ftf7YOwPh4bJTJuG0kv%2FLauztRC5MLHkw78GOqUBUIb%2B%2FtQ2AVwuJexw3xwZm1Td6P1CglYr9L1Q1QpztGKSqmBYmoMuIb9bpwLfvRMAwVDSVy4sW2QQHACApvy%2FLnB7QZh%2B0CmqqfGEWRAY4E8AD8dWwVx0vgXh10%2FMdEXn8KIW%2BCxD30wQ1Imj7qqWRFUQG0WfmzeDZa%2Fp5kXZ9k9AppkRztzN5QsrO49X1PNmnrF0CS4UPozVdYtmjx%2F0P7F0KvYM&X-Amz-Signature=816b12f95f4a7b40961f3aac42b522b0061a1a1a77f18c2c70c72c7d3e9a6cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K65ZOHT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BdG69V%2FHqvj0t1AxRFmB%2FijBojOR2iNq0hpXPwIbsWAiEAg3Fmjw7USA4z7pxcqf6atDi92v0fDOkeLLGzQg1K5OQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDF0nY1U7j%2F2kyuk4FCrcA73Is%2FviV1dn67LKVW75iLJFmEyPr2G%2BYVv7dOipaQcAQVMsY1IaUlkKENlJGdIHLfc7a7xzK%2BRqY8jBpcPgEmCfY5ZQL1zGNSpcqRlzNyNHLJox57QIceGxezxOqHYrPe8zjfqIL71sKpPS6EzeO4TvrsckCo4vs7ZHPZf7Xt%2Ff4%2BNOocmcI3W3%2B0Y39K2l%2Fu6WZH6rPo%2BSldI9qxf0pHUh0fawSyduu3eNrGuMXdpjtoZWCar9ia%2BqHBV4sfsYUGHJPUfCut7yqOCwWLlYZPJFZ6nxWG2Y2FPev43tLqF2xzZ%2B8hVPyrcd7J7dvI8ApK484K9dVoxD67WqSbdbm9iCCxxFODv5XFPFBJRGPFK23TFlyoiISEa%2BIFWaKjDBskaUbwhF0e5raynJXVANafGK%2BPrNKPw8hPMjJCX00ekF7xmWRZ4b%2By6bIZA5TgGAK17FP%2FXQnSbi%2FG8shhWzh%2BQ5PJYZZrJrrW%2F9PagrExen%2BRLB8Vxp28uaGijHdgUh%2FGgYfhfscaAcOK8hy4WkT5uscIDkG1zZ5SvhSH2p7as2TCd50YUQFsFE8%2FK0JjrZJMeq3WzEu8ZBjkbpulXE%2BWE1vNoLm0Xd%2Ftf7YOwPh4bJTJuG0kv%2FLauztRC5MLHkw78GOqUBUIb%2B%2FtQ2AVwuJexw3xwZm1Td6P1CglYr9L1Q1QpztGKSqmBYmoMuIb9bpwLfvRMAwVDSVy4sW2QQHACApvy%2FLnB7QZh%2B0CmqqfGEWRAY4E8AD8dWwVx0vgXh10%2FMdEXn8KIW%2BCxD30wQ1Imj7qqWRFUQG0WfmzeDZa%2Fp5kXZ9k9AppkRztzN5QsrO49X1PNmnrF0CS4UPozVdYtmjx%2F0P7F0KvYM&X-Amz-Signature=46c62733fcb3cd1379ff425caf1bec81d35c635c906d9d51a0956e67dc0a4ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
