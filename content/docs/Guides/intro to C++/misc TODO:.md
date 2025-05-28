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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YSXAWGA%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXQnyFwiUvggude43v7JNmR%2B6jlkQLpqj0syiXAVZZ0AiA%2F2TGvzhOxReQWhBwhFohTRxeWtWMqJOHjsBW4mD9T%2Byr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMldxzDEdx7aNRnOusKtwD8jI0rid3kMsWU6QXoXnMAxLCVYT5R20gfhX1HU81MwyRqWFyIzJR6AhkgmcrsOXkmNpFrF8VEPu%2BRte2xz2SNoWBB2LFFB4pnYnkgCKf8U6GPqqMI5exirLT5q%2BbTaI7RrzeLsljJ6E%2FXSpKquHisVc4asID86e1rqpsh8wlLl3K%2Fdiry8Ypo2ZH8AJOhk%2FVsJMM7WKZQE6RdyFUWkvol4BwE%2BNQwBh77Gba5%2BFnToIdwXMD3Z3HCUtRh2jwGny2uODqWiFu4sB2fM3zIAcLOFoozBjrnGPBjX8nOCGMWdjB3nBK4Ji8FdBE%2Ffmel9mLxGPbsNmGYdLH2B5iPL9UGeoymGWTNoc9JGoxTdo8D9Te7WA2JSI8LexsufWMzp3sSAQpOAgXa4ADH3%2FMFtEg0GUAaoatf8ReuMMdocBXG1YhE%2BxFFl0M%2BPY7Q4VfQR6EVOmcyZoNB%2BMW%2B%2F9qLi3VlU%2BCJqB3pJ5GFhGNpiFT%2B9G4ekXI%2FDQTtMCeXipvVhBq0Qd4S69R9tmldRAUKg99iH5Y63783AXcMKpzSRis2mousl3I1Tf7P2yscpAVlwgH6qWBzSPRb4xx9XCXqOr9xAAz6%2BO0727gKCdj3g4HNgRBj5cVvEPK%2Bi9Q90kwgfjcwQY6pgG6AUIw8g0ShWPhr0Z7Mya%2B8trXrlfp339HA3fIPMkMKKH%2FyN1GQ187NHKlpM3sh78tX0tQJNw8wuy6JgqcqyBHIHUT%2BrieCn5wL3HSzdwf%2FAAUBILLtQktBDV2UlTtMUAJfYCd%2FUtWmOM0epNIUrOAnVSEKhF1vzRMCUvBfz5KxPOZe78Ay03we1UBOY32PNMJLAmxIi08BaQnlt7WUS9FsiRf6LZn&X-Amz-Signature=782bd2bc452417f26b87e3a08da5d43fe341d23a73c057bd5da7e084302dbd81&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YSXAWGA%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXQnyFwiUvggude43v7JNmR%2B6jlkQLpqj0syiXAVZZ0AiA%2F2TGvzhOxReQWhBwhFohTRxeWtWMqJOHjsBW4mD9T%2Byr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMldxzDEdx7aNRnOusKtwD8jI0rid3kMsWU6QXoXnMAxLCVYT5R20gfhX1HU81MwyRqWFyIzJR6AhkgmcrsOXkmNpFrF8VEPu%2BRte2xz2SNoWBB2LFFB4pnYnkgCKf8U6GPqqMI5exirLT5q%2BbTaI7RrzeLsljJ6E%2FXSpKquHisVc4asID86e1rqpsh8wlLl3K%2Fdiry8Ypo2ZH8AJOhk%2FVsJMM7WKZQE6RdyFUWkvol4BwE%2BNQwBh77Gba5%2BFnToIdwXMD3Z3HCUtRh2jwGny2uODqWiFu4sB2fM3zIAcLOFoozBjrnGPBjX8nOCGMWdjB3nBK4Ji8FdBE%2Ffmel9mLxGPbsNmGYdLH2B5iPL9UGeoymGWTNoc9JGoxTdo8D9Te7WA2JSI8LexsufWMzp3sSAQpOAgXa4ADH3%2FMFtEg0GUAaoatf8ReuMMdocBXG1YhE%2BxFFl0M%2BPY7Q4VfQR6EVOmcyZoNB%2BMW%2B%2F9qLi3VlU%2BCJqB3pJ5GFhGNpiFT%2B9G4ekXI%2FDQTtMCeXipvVhBq0Qd4S69R9tmldRAUKg99iH5Y63783AXcMKpzSRis2mousl3I1Tf7P2yscpAVlwgH6qWBzSPRb4xx9XCXqOr9xAAz6%2BO0727gKCdj3g4HNgRBj5cVvEPK%2Bi9Q90kwgfjcwQY6pgG6AUIw8g0ShWPhr0Z7Mya%2B8trXrlfp339HA3fIPMkMKKH%2FyN1GQ187NHKlpM3sh78tX0tQJNw8wuy6JgqcqyBHIHUT%2BrieCn5wL3HSzdwf%2FAAUBILLtQktBDV2UlTtMUAJfYCd%2FUtWmOM0epNIUrOAnVSEKhF1vzRMCUvBfz5KxPOZe78Ay03we1UBOY32PNMJLAmxIi08BaQnlt7WUS9FsiRf6LZn&X-Amz-Signature=950c048047041f4267b5721efeebce0d4dd33fec6b33f8f5bd709b0f090e31f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
