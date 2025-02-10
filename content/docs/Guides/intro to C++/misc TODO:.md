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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHOS7PO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8trBq%2BjDnEggrZbOBakBrPTQ73q%2B%2BVIEJ96by3MHMDgIhAOPd48RCtoZmpQHFN0g%2FOHE%2BwMO6%2BgFuITTlRqRVldV6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTHnbk1Zjrc1S8NbAq3AMAYCf2mipci0I4IhSHkaEOSVIOwtP6EBP1trDDRj4VL%2BQhOqhQUM3G4tJxnMXiJaiXh2FV3EPY9%2FdTEux7UuxYrsqEs9%2FACh0xIAqe29Mb8gW0FOI8UltzsH7z13GKSbcOE4TIRdBNGuLgtT2sXKUMLFDyXTcl19Lz19wIt8XbgYbgi80oSNNMIOKbsneZeQwTg%2BTOGQvhi3vzl%2FC12Y4t21c%2F9%2Ft3rLo2I70ZgZdAYVgP7gxjIpDhOf3gxwPyYqAziZlY9CzK7U1%2B0Rrn7pmF6vcd%2FOX%2F0HVugdxt4Fdeedn8rrCPSpMh%2BCaXo8b1qKIXACu5HJjxCGhC41QtWJIHLQJOlVjjmx4FR1Eboeo%2FfCsFI97EWP%2BsRZv7vovcYgXUg%2BohqQUG6A2bGpUG9Vx3d9rHzE4QgJG6%2BqZV35YM6mdeqOZ%2BA31BFfefWJwUcoq2Fr0IX5holB6KhqYJeX8GSAQgK8O6UXyTwgr7ZviNHlZ7J9vosxdSYfNCIduzIfgSu2tk6oR5rcQKBvyvRp8ziT1tfSa3LNjoGhZZcBXOzr1tMhvZN4U%2FK%2F0uNSsZDQC%2Fz12ADw1VD1CvhN0u8cyBHbEt%2B6wR8NRqKRVwZAyCoq1%2FySeAwOAEVHR4fzCprqe9BjqkAevhap%2FL6z44GilrbPc6%2BPLHBk5HoHRz8tmaSDKKwzHVbVapehqYBMsFsIyddhQ0513KHcz8oX6MVLVDhRSyDXc0xt%2BlOrw7cJ5fnU1JhCVq%2F6RITh2Z8tKa4gH9T8SnN9ZIWcQW0HGjh7IUZA%2FtVhHeVOYJKfDxI72CyGRj8zUGsI%2BbhZa7dmkD9egU2Q4C7BKmJhmq3q0pfPAFeSDvIvC0k%2F1J&X-Amz-Signature=bec9f03b4411abfadc5b3dc004da6dfd5f23592d0658c4b8c8b740216f6668f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHOS7PO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8trBq%2BjDnEggrZbOBakBrPTQ73q%2B%2BVIEJ96by3MHMDgIhAOPd48RCtoZmpQHFN0g%2FOHE%2BwMO6%2BgFuITTlRqRVldV6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTHnbk1Zjrc1S8NbAq3AMAYCf2mipci0I4IhSHkaEOSVIOwtP6EBP1trDDRj4VL%2BQhOqhQUM3G4tJxnMXiJaiXh2FV3EPY9%2FdTEux7UuxYrsqEs9%2FACh0xIAqe29Mb8gW0FOI8UltzsH7z13GKSbcOE4TIRdBNGuLgtT2sXKUMLFDyXTcl19Lz19wIt8XbgYbgi80oSNNMIOKbsneZeQwTg%2BTOGQvhi3vzl%2FC12Y4t21c%2F9%2Ft3rLo2I70ZgZdAYVgP7gxjIpDhOf3gxwPyYqAziZlY9CzK7U1%2B0Rrn7pmF6vcd%2FOX%2F0HVugdxt4Fdeedn8rrCPSpMh%2BCaXo8b1qKIXACu5HJjxCGhC41QtWJIHLQJOlVjjmx4FR1Eboeo%2FfCsFI97EWP%2BsRZv7vovcYgXUg%2BohqQUG6A2bGpUG9Vx3d9rHzE4QgJG6%2BqZV35YM6mdeqOZ%2BA31BFfefWJwUcoq2Fr0IX5holB6KhqYJeX8GSAQgK8O6UXyTwgr7ZviNHlZ7J9vosxdSYfNCIduzIfgSu2tk6oR5rcQKBvyvRp8ziT1tfSa3LNjoGhZZcBXOzr1tMhvZN4U%2FK%2F0uNSsZDQC%2Fz12ADw1VD1CvhN0u8cyBHbEt%2B6wR8NRqKRVwZAyCoq1%2FySeAwOAEVHR4fzCprqe9BjqkAevhap%2FL6z44GilrbPc6%2BPLHBk5HoHRz8tmaSDKKwzHVbVapehqYBMsFsIyddhQ0513KHcz8oX6MVLVDhRSyDXc0xt%2BlOrw7cJ5fnU1JhCVq%2F6RITh2Z8tKa4gH9T8SnN9ZIWcQW0HGjh7IUZA%2FtVhHeVOYJKfDxI72CyGRj8zUGsI%2BbhZa7dmkD9egU2Q4C7BKmJhmq3q0pfPAFeSDvIvC0k%2F1J&X-Amz-Signature=8a60e06d2d1d0408eeb285653df217abbeaa67a40c387909bc2a2b596a04569f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
