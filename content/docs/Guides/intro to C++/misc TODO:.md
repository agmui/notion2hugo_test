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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5A4VZA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA6rAEWm1ghEpbl%2B66CjgqPZ5VTG4%2Fx2n8ndV06TbI92AiAq%2Fq1DysFw6Ewvt4aodsia9tpGnDafDagxGy%2BwPE9fJSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMbVmhMgHLHwjBG99QKtwD8Sjhe1%2BAXHnuKCjw1rfz5ghn3Kb74rtXXkhfVffQOeVuxuWrvyp06nHqmIPqXGrkLNt6w5YOQh1IGIRdZWJcZQ002U8LijYxEa59Fp4WVMdlouNBpF5u4Z0j5Rp9Qd5GvPnfDyHqD%2FpzPEQ6Wsrofx%2Bpu9GWqzBhDDSmi%2FIIt5nRmXhocyUPDUMm5ZeTHW9dN3cIGeJidKAN%2BRh3gyThhqPcKP2aaL0lSmTkA8aQ1yYRaonMfVwNzVHvRQJh026NKASKGuYjJxibCbE1HRXFLnhMiKcIYirKquKW9irMzuDGJyPdUk1tT3Ug%2FLpOhfqqgbRc3h5WmKJmTL5kMvlL6x8VJnX7OlxEYmz4Li06g9FQU0ueewtgsar5%2FjD5zUw0w0CFHfsqfjV4OKVZeDFfPouODaTFz%2FJsNirPEODF4qSN9llocu7lwKqLD2b8WFsZ6taPn4OA1JoiyXYHVae78Tg6l7BqxuoZ3NAYXfSInFhX%2BXMS3SSCUVfVWPFhsav%2FsTClH5eGB%2Bky7es8cbf6GWUb10AC08ED9Y0tFr44Rz%2FpVLIoshQacIkunNbAopRZqbXYJNxNcYPX0ZFlM6GTPlgvogd7EiCVH%2F9yNlAbpKk4wG3TkmPCzKDN%2B4swsI%2FlwwY6pgH5KMJdEbzSizpclNfP8VPvfYxxY63mDC4RBjlmqZ73Yu6Ag8pJWN3UxZii035Mpo0XIAxamlw00aHEkvTADL%2F9XUvKWOFQ32q9NxZdUk9Tp1jmjciBu4yQSpi3B5Sr960Np4M3FpG%2FlSU7%2F2OSV7sBcvI10K2oFstrdtVsn3OT5fm6wT%2BlDXJJikf1rLz4kCFBjZhvkDoKEh5gUmWWyhfM6dfIbNkg&X-Amz-Signature=3c569678fa5943572b86626a0b2c7273f294661f325c7027220193945655cac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5A4VZA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA6rAEWm1ghEpbl%2B66CjgqPZ5VTG4%2Fx2n8ndV06TbI92AiAq%2Fq1DysFw6Ewvt4aodsia9tpGnDafDagxGy%2BwPE9fJSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMbVmhMgHLHwjBG99QKtwD8Sjhe1%2BAXHnuKCjw1rfz5ghn3Kb74rtXXkhfVffQOeVuxuWrvyp06nHqmIPqXGrkLNt6w5YOQh1IGIRdZWJcZQ002U8LijYxEa59Fp4WVMdlouNBpF5u4Z0j5Rp9Qd5GvPnfDyHqD%2FpzPEQ6Wsrofx%2Bpu9GWqzBhDDSmi%2FIIt5nRmXhocyUPDUMm5ZeTHW9dN3cIGeJidKAN%2BRh3gyThhqPcKP2aaL0lSmTkA8aQ1yYRaonMfVwNzVHvRQJh026NKASKGuYjJxibCbE1HRXFLnhMiKcIYirKquKW9irMzuDGJyPdUk1tT3Ug%2FLpOhfqqgbRc3h5WmKJmTL5kMvlL6x8VJnX7OlxEYmz4Li06g9FQU0ueewtgsar5%2FjD5zUw0w0CFHfsqfjV4OKVZeDFfPouODaTFz%2FJsNirPEODF4qSN9llocu7lwKqLD2b8WFsZ6taPn4OA1JoiyXYHVae78Tg6l7BqxuoZ3NAYXfSInFhX%2BXMS3SSCUVfVWPFhsav%2FsTClH5eGB%2Bky7es8cbf6GWUb10AC08ED9Y0tFr44Rz%2FpVLIoshQacIkunNbAopRZqbXYJNxNcYPX0ZFlM6GTPlgvogd7EiCVH%2F9yNlAbpKk4wG3TkmPCzKDN%2B4swsI%2FlwwY6pgH5KMJdEbzSizpclNfP8VPvfYxxY63mDC4RBjlmqZ73Yu6Ag8pJWN3UxZii035Mpo0XIAxamlw00aHEkvTADL%2F9XUvKWOFQ32q9NxZdUk9Tp1jmjciBu4yQSpi3B5Sr960Np4M3FpG%2FlSU7%2F2OSV7sBcvI10K2oFstrdtVsn3OT5fm6wT%2BlDXJJikf1rLz4kCFBjZhvkDoKEh5gUmWWyhfM6dfIbNkg&X-Amz-Signature=26a7ea389b5f335396b462b13bf0da9186622981965ed6da5d3132e0541e4f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
