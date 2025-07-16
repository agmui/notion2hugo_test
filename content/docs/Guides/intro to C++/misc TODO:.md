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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5BXXZRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIBxGb1OVVUyQ3FUczPdJQ9Auppror4JDATO6hImqcDb4AiEA99pmzU8AWiogNJ9NDe6VTu7zfZFMsnlwBV2TACdnkGgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJOiBqdzSlWTiBdXmyrcA8wQ0XK0I7hX9nhccx2S3MSo3W0QPAlg3kwLD1SMMQ8GrzpV2Yt0ffko7lCBjV071BTuiXXYIyEt74nE48psKW0py0edFLTAPT1Dhtg2R2Kl7k3m%2FJpCQOMnp2X3pamFZlbwfXxVUmK%2FXwKkqHicaBG3TDfp1um7vknYtk6Vrt6tj8WE3FBkQIzJCg8BAR9V%2FJEyQa1nOkUtxCMm0T%2BlPxskiGm5MYylKUjfl0erKKEXUi69bkk47l6bvnfC%2FvfnvHQFMiS5yHEq%2Bk6h30bYeU3TQ%2Ff7KGaDYRKRhiefA8fqUo0oSR%2F1qZ7RHRhRsFrcJwC4ewxmrOSsUX5MTzxQn8r3vCawGzJx6AvJ5K7X1RfQ6SpEuzgIJ%2FN4YXFsmU1%2BX2R9Oe6pwQGolPIWv6EUSo5OlUXeY%2BPcnWS83AcImI50F%2FCYvSdhicwc5pjUNkQGYBE5K2BA4gZFe0RfeJd%2BJai1ozdAzRM1jJMGHR%2FfqeQvxtbw%2B17k1FPac7bdVBrSkaPUwHJnTOiO0wB%2FQ1d%2FlbCXc8WhHvVEBOCV9hBjG1zxjJbW7UR0Yehzz19R2gkBJfns8%2Fu2OzOuWUieeC0tCkw5%2BDZxBEusMje66xzy6gVNJiluuAs6jAhBOYUKMPjn3cMGOqUBn1nZvS1ZZEFpUqdcc%2FfKjtAwzYjuFyRxQkwrzbQqW3iGNlETWiuBOSYfLJAP%2Fzfl76vxYeGB%2B7fthrONgtPE2ywGRgvIa3Qxx0SUyzgNH8FfsLPE76XFfZlioDU7B7UldOPtf0wS3lPuAaxSKZ9DFl9fATeP06FLCYfCRe%2Bf51fzmma2hG%2BXVzyTZg%2BN6EzBTxWw%2B8lEtY7H9mJ%2B7A%2BbME%2FCMHrn&X-Amz-Signature=07a764068af06f65bdc238595487fe7b9d49a23a6183071d5b8ba88098e8326c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5BXXZRX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIBxGb1OVVUyQ3FUczPdJQ9Auppror4JDATO6hImqcDb4AiEA99pmzU8AWiogNJ9NDe6VTu7zfZFMsnlwBV2TACdnkGgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJOiBqdzSlWTiBdXmyrcA8wQ0XK0I7hX9nhccx2S3MSo3W0QPAlg3kwLD1SMMQ8GrzpV2Yt0ffko7lCBjV071BTuiXXYIyEt74nE48psKW0py0edFLTAPT1Dhtg2R2Kl7k3m%2FJpCQOMnp2X3pamFZlbwfXxVUmK%2FXwKkqHicaBG3TDfp1um7vknYtk6Vrt6tj8WE3FBkQIzJCg8BAR9V%2FJEyQa1nOkUtxCMm0T%2BlPxskiGm5MYylKUjfl0erKKEXUi69bkk47l6bvnfC%2FvfnvHQFMiS5yHEq%2Bk6h30bYeU3TQ%2Ff7KGaDYRKRhiefA8fqUo0oSR%2F1qZ7RHRhRsFrcJwC4ewxmrOSsUX5MTzxQn8r3vCawGzJx6AvJ5K7X1RfQ6SpEuzgIJ%2FN4YXFsmU1%2BX2R9Oe6pwQGolPIWv6EUSo5OlUXeY%2BPcnWS83AcImI50F%2FCYvSdhicwc5pjUNkQGYBE5K2BA4gZFe0RfeJd%2BJai1ozdAzRM1jJMGHR%2FfqeQvxtbw%2B17k1FPac7bdVBrSkaPUwHJnTOiO0wB%2FQ1d%2FlbCXc8WhHvVEBOCV9hBjG1zxjJbW7UR0Yehzz19R2gkBJfns8%2Fu2OzOuWUieeC0tCkw5%2BDZxBEusMje66xzy6gVNJiluuAs6jAhBOYUKMPjn3cMGOqUBn1nZvS1ZZEFpUqdcc%2FfKjtAwzYjuFyRxQkwrzbQqW3iGNlETWiuBOSYfLJAP%2Fzfl76vxYeGB%2B7fthrONgtPE2ywGRgvIa3Qxx0SUyzgNH8FfsLPE76XFfZlioDU7B7UldOPtf0wS3lPuAaxSKZ9DFl9fATeP06FLCYfCRe%2Bf51fzmma2hG%2BXVzyTZg%2BN6EzBTxWw%2B8lEtY7H9mJ%2B7A%2BbME%2FCMHrn&X-Amz-Signature=c2a195cbdedca26202d061dcc5b60e7caa29826b9db479f9c8f63612b7a27c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
