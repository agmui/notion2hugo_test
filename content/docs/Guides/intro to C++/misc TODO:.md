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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ERJKZB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGuW3NEVDiOXM71iORDrLJ2Jd9ZRBgsSM8Q9AXBitJOEAiEAoDPYsHl4xONRCZuuOkuDB2dPoKxvjcHOsvyiYKoD%2B6Aq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDF2j1PS55QUG0E%2F2XCrcA00s4ocJDyuCHfr2HpfeSgpews7xXAq2OmFjhfbymHOKe4Tlm%2FvkWhdKXU6xSxRjRG44Qk2sDRUeUqbitjm3p4xz6qGf980ScZZj8XhdHrmWlIT15DTdEAPEz0u7VmQlJ6128fZfxQkPTr2qsW7VCkFRMZkFZS4sza6AUHtNIOzv4RvPlINBuZPal2v%2Fl2oWTomoIqHRGMIFUH%2BgWqK6W9fNANsfl7dNl852FUV5cuM1o%2BzC7pMnJr%2F6uN1XlFuSep6APCk9PBaUe3GJkKOJClphIvi78%2FZcqhUvhy4rgvjj8Q8LxDl6WcPgO1l9olPUMgmpDUA4k6%2BKwcaNUarnDzV8HqQMIiEi2kzbAw%2FW0V%2BloC%2B0EjOTTZ4creAjdLPIDQYGO%2Fy1MoSx9c%2BkzSvTQ25JPd%2FhG9HKDucNSejS7M747aBZJ0Ryxuo2vDpNAt3alsb8bmRK8bc2RVT06TSBxE%2BeuMnWDExoiUKEvhX9SIbG%2BwuA2TbuSmxuQcoVyBMLqY3QvCNOsdcYL18ctdnM7mQZ3JhpjQgbMK31vYIJ2wuAo3yzmzkLNXifHeIenErsbwpJ8WXEQJ8vz2DSeNtvbl2WxRp9qa7tdzzkgGYDAiymcvy5ISoQCZWMn9H5MMuvh70GOqUBFnBlCGqO5SQRtJ4EuVuRERhYb1geS1%2F0%2BHtgx0qi8W9F50fPdIBU4dhJygxRw%2FMn1UQyNxpzdtd6v%2B5EK6wsGM4iuYMwvo20E9BuRij%2BrUrZ%2B%2BTt9lWV5bRvPodS6HuQMz%2BMP%2BY%2Fw2lW2LF%2BAPEDM0MjudSkCm58cK%2FCSugU1N2BYVz0BkCas5tFqPhYgavASa3OH%2BHHaQnJxtX2oy4obAfKX80%2F&X-Amz-Signature=0c397929857b84bbc69dda3d8139855e3fdfed37b937dd1e5c4bba3646db26ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ERJKZB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGuW3NEVDiOXM71iORDrLJ2Jd9ZRBgsSM8Q9AXBitJOEAiEAoDPYsHl4xONRCZuuOkuDB2dPoKxvjcHOsvyiYKoD%2B6Aq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDF2j1PS55QUG0E%2F2XCrcA00s4ocJDyuCHfr2HpfeSgpews7xXAq2OmFjhfbymHOKe4Tlm%2FvkWhdKXU6xSxRjRG44Qk2sDRUeUqbitjm3p4xz6qGf980ScZZj8XhdHrmWlIT15DTdEAPEz0u7VmQlJ6128fZfxQkPTr2qsW7VCkFRMZkFZS4sza6AUHtNIOzv4RvPlINBuZPal2v%2Fl2oWTomoIqHRGMIFUH%2BgWqK6W9fNANsfl7dNl852FUV5cuM1o%2BzC7pMnJr%2F6uN1XlFuSep6APCk9PBaUe3GJkKOJClphIvi78%2FZcqhUvhy4rgvjj8Q8LxDl6WcPgO1l9olPUMgmpDUA4k6%2BKwcaNUarnDzV8HqQMIiEi2kzbAw%2FW0V%2BloC%2B0EjOTTZ4creAjdLPIDQYGO%2Fy1MoSx9c%2BkzSvTQ25JPd%2FhG9HKDucNSejS7M747aBZJ0Ryxuo2vDpNAt3alsb8bmRK8bc2RVT06TSBxE%2BeuMnWDExoiUKEvhX9SIbG%2BwuA2TbuSmxuQcoVyBMLqY3QvCNOsdcYL18ctdnM7mQZ3JhpjQgbMK31vYIJ2wuAo3yzmzkLNXifHeIenErsbwpJ8WXEQJ8vz2DSeNtvbl2WxRp9qa7tdzzkgGYDAiymcvy5ISoQCZWMn9H5MMuvh70GOqUBFnBlCGqO5SQRtJ4EuVuRERhYb1geS1%2F0%2BHtgx0qi8W9F50fPdIBU4dhJygxRw%2FMn1UQyNxpzdtd6v%2B5EK6wsGM4iuYMwvo20E9BuRij%2BrUrZ%2B%2BTt9lWV5bRvPodS6HuQMz%2BMP%2BY%2Fw2lW2LF%2BAPEDM0MjudSkCm58cK%2FCSugU1N2BYVz0BkCas5tFqPhYgavASa3OH%2BHHaQnJxtX2oy4obAfKX80%2F&X-Amz-Signature=c66ab6faefe99e888c95b7343072c5f065f7866482e56e0cc7ef92677bdd0546&X-Amz-SignedHeaders=host&x-id=GetObject)

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
