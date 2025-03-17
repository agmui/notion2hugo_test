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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4E4V46M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8Ygsu3BmakcAOLlNS3lHPfbi0D6BUSxnvx9xIGAZ0QAiEA5GPipZB7pC38BvbAgyuhhGc7tRyV%2FMsSlWl%2FYZWZxoYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGs6JsUCwP2EzfOykCrcAwRBU1WR5D%2ByIjDFNx2UZhYKTuHhBx%2BOj5ZNQKf5PuKm5rJMPxoFg6JSjTuAixBYBz1sa3NjqSanCsuB1%2BWHpBdhBQPqxzcaKKreWs9y3aNDkHrWiOkB3VDn%2Fg%2Fu4wlX5Cw6tQFvcoYyzX2HtrYD%2FRIDkpI93JQq2RqXa6TQmTJg8zlT64rB2FD613G66oAesVBmR%2BlMOeaOJahFGjGSECdfjqYwihc%2F0VVXItRq3x7%2BMMdXDVtc8OtNFTEK0K4dQ%2FTGaGodcudWdof2soozQ8jqTtmPCMmhV4SOqShTXSmdclCYO%2FBZdHb7eh4TBtRivon9pmDz6k%2B6wMx9Zj%2BaxwxIE383lgs7aP8z3f85QoZuc1hkwYouiWyul1qNbH1qHbL3%2BWKOw6YmCv%2B5q5Vb0fM%2F4Pu2E7bf02%2FSo%2Bih94Z2%2F3Glw85YOVgYIs%2BEvFYbgE8K7%2BDv0tqMqGFph6m5vBuXApUyEMExD9LEKFMmWkaY0lmVQAdBY5b10S3%2FIyNsEvRc%2F67WtsBDTiqE%2BpRtJZqPKLrLHkGkgjSXryOJimTLuz5h1EQhXAo0wk%2B7T0z65tOXW9Nguh2gw69CKpxERNHZWgN%2BM45VUKqpGqvX5vd4ufCW8%2Bg4gD518X1kMODb3r4GOqUBAtGZmgDHoHhBsDIqr5jOm0ZzHOFmReDIIjHztARZfT8T6wdqRTu8lquDKGBkX3%2FrEnBXSSyjhEWjhlXiRYbYO%2FQm5mBCv%2B7Ou7uQ2OmcT8GlNr958bxBsY5xgu9RaD5EL%2BEYp8nDPqA1OZ%2FxGi6DtjIEHE62k9%2Fj5EX71jIubDdJkVQFDKtRUzO17237HrFFoGPGy00tEjrFNw5QCiW%2F6UfnkhyW&X-Amz-Signature=e7f7e632b1f10e62d7db775d3f37c09a3ec1af55bc2ffd6298de279c1ce31164&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4E4V46M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8Ygsu3BmakcAOLlNS3lHPfbi0D6BUSxnvx9xIGAZ0QAiEA5GPipZB7pC38BvbAgyuhhGc7tRyV%2FMsSlWl%2FYZWZxoYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGs6JsUCwP2EzfOykCrcAwRBU1WR5D%2ByIjDFNx2UZhYKTuHhBx%2BOj5ZNQKf5PuKm5rJMPxoFg6JSjTuAixBYBz1sa3NjqSanCsuB1%2BWHpBdhBQPqxzcaKKreWs9y3aNDkHrWiOkB3VDn%2Fg%2Fu4wlX5Cw6tQFvcoYyzX2HtrYD%2FRIDkpI93JQq2RqXa6TQmTJg8zlT64rB2FD613G66oAesVBmR%2BlMOeaOJahFGjGSECdfjqYwihc%2F0VVXItRq3x7%2BMMdXDVtc8OtNFTEK0K4dQ%2FTGaGodcudWdof2soozQ8jqTtmPCMmhV4SOqShTXSmdclCYO%2FBZdHb7eh4TBtRivon9pmDz6k%2B6wMx9Zj%2BaxwxIE383lgs7aP8z3f85QoZuc1hkwYouiWyul1qNbH1qHbL3%2BWKOw6YmCv%2B5q5Vb0fM%2F4Pu2E7bf02%2FSo%2Bih94Z2%2F3Glw85YOVgYIs%2BEvFYbgE8K7%2BDv0tqMqGFph6m5vBuXApUyEMExD9LEKFMmWkaY0lmVQAdBY5b10S3%2FIyNsEvRc%2F67WtsBDTiqE%2BpRtJZqPKLrLHkGkgjSXryOJimTLuz5h1EQhXAo0wk%2B7T0z65tOXW9Nguh2gw69CKpxERNHZWgN%2BM45VUKqpGqvX5vd4ufCW8%2Bg4gD518X1kMODb3r4GOqUBAtGZmgDHoHhBsDIqr5jOm0ZzHOFmReDIIjHztARZfT8T6wdqRTu8lquDKGBkX3%2FrEnBXSSyjhEWjhlXiRYbYO%2FQm5mBCv%2B7Ou7uQ2OmcT8GlNr958bxBsY5xgu9RaD5EL%2BEYp8nDPqA1OZ%2FxGi6DtjIEHE62k9%2Fj5EX71jIubDdJkVQFDKtRUzO17237HrFFoGPGy00tEjrFNw5QCiW%2F6UfnkhyW&X-Amz-Signature=48ef71499c32fce448e409f095110f94130498f174e04844f65acef91e0310ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
