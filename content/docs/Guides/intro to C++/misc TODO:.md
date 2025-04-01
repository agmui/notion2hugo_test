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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6DRFTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCJ%2BHHhKT%2BUgi5L7bbIp61xMbYq8rw1kkphAGNUFsKzdQIhAJC167SY3JeOlz83OW8NywHo7B0KpLVcMbU1UuVZ%2FeL8KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDm94CVBPMScEjSrAq3APTznZpeqUNrsdhTKMM64ApjchZ4ok%2BITRMsqLrplhKTNU1ZWIzVFp7D1IQIm7ywFlE2lMQHCvI6yBNLbtqeXx%2FnX9qwzI8Q8b8zMsCGpTHA83cz1SZ1uE%2FKCGabheHmvHnC9yJtRIi2RciTmW%2FG0Oh7ni8O3CbQQdgCKQ7jQ8jrCU9kyqRzWvZJuB4UucJCMP9RKHFXXkhZ6vsoOCRUBl41iwgkwAuRv%2FACv1M242lIqf4NpMulhmbrfjttrrK%2FDmYTSP%2BqPBbGJSTp3RZon4vOEpn9cQ%2F4PefUgwzvifMW%2F4uQ%2FHZD%2BD37SFrkJ6sa%2FhzUHNfJ%2F2gAiT4I9U6XPnqWrx6Rpfkk2wYbE2pxJ4PwvZn2bZrTdziUI8oimeOSLcY5q0VmcoJzkuetBqAm%2FwabNz51cDtLCpxHuoCo0sgiJDh7WYqpGz0VZTzcPtFleDTXa3B0SULZJYAfkvIFH3e907RyrfvqcG8x6FrvQ2t1H8fsxSgvIQss9ip%2BWiEIxtLP1i2bspQaqaQsYUZYkKBh7L9wLoDlEod%2B3Yr%2BzgWjat1FG4NM94JfClr9Jrqr5a9BwrW4qNkH%2FDRACPt%2FUKybs%2BmF%2BIv6J%2BZ4FLWPOy7t8Q7BmN6hXkFR5U91zCEzK6%2FBjqkAWdfQeMo88guFMWWgavHN4ON8YHoLAj%2B9%2FKbxflitgG41mWo0hhVmXqWGlPDjkBNwqt%2Fe3lm8rYHK5QkaGhGQP9VS6wLWRQYhcoMY4aTAfmccwB7vv6UpUtL4%2Fs6tJUVEM144z1nwa08xever0hAP7wRvheoTf5%2FBrGA%2BFQgZ4268CWPaaiLNbeGDtmhAbCu4cLr4zgNlywti3MzmDQjs7%2FEckaQ&X-Amz-Signature=78bb8bdd73694bf0a52e80d9efe768958b3cafe9bee4c31335369c2f0843d1cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6DRFTZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCJ%2BHHhKT%2BUgi5L7bbIp61xMbYq8rw1kkphAGNUFsKzdQIhAJC167SY3JeOlz83OW8NywHo7B0KpLVcMbU1UuVZ%2FeL8KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDm94CVBPMScEjSrAq3APTznZpeqUNrsdhTKMM64ApjchZ4ok%2BITRMsqLrplhKTNU1ZWIzVFp7D1IQIm7ywFlE2lMQHCvI6yBNLbtqeXx%2FnX9qwzI8Q8b8zMsCGpTHA83cz1SZ1uE%2FKCGabheHmvHnC9yJtRIi2RciTmW%2FG0Oh7ni8O3CbQQdgCKQ7jQ8jrCU9kyqRzWvZJuB4UucJCMP9RKHFXXkhZ6vsoOCRUBl41iwgkwAuRv%2FACv1M242lIqf4NpMulhmbrfjttrrK%2FDmYTSP%2BqPBbGJSTp3RZon4vOEpn9cQ%2F4PefUgwzvifMW%2F4uQ%2FHZD%2BD37SFrkJ6sa%2FhzUHNfJ%2F2gAiT4I9U6XPnqWrx6Rpfkk2wYbE2pxJ4PwvZn2bZrTdziUI8oimeOSLcY5q0VmcoJzkuetBqAm%2FwabNz51cDtLCpxHuoCo0sgiJDh7WYqpGz0VZTzcPtFleDTXa3B0SULZJYAfkvIFH3e907RyrfvqcG8x6FrvQ2t1H8fsxSgvIQss9ip%2BWiEIxtLP1i2bspQaqaQsYUZYkKBh7L9wLoDlEod%2B3Yr%2BzgWjat1FG4NM94JfClr9Jrqr5a9BwrW4qNkH%2FDRACPt%2FUKybs%2BmF%2BIv6J%2BZ4FLWPOy7t8Q7BmN6hXkFR5U91zCEzK6%2FBjqkAWdfQeMo88guFMWWgavHN4ON8YHoLAj%2B9%2FKbxflitgG41mWo0hhVmXqWGlPDjkBNwqt%2Fe3lm8rYHK5QkaGhGQP9VS6wLWRQYhcoMY4aTAfmccwB7vv6UpUtL4%2Fs6tJUVEM144z1nwa08xever0hAP7wRvheoTf5%2FBrGA%2BFQgZ4268CWPaaiLNbeGDtmhAbCu4cLr4zgNlywti3MzmDQjs7%2FEckaQ&X-Amz-Signature=64e43cf0a845412637a09dcd7f4ef411acd3768b7e573620261381ddef9cba5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
