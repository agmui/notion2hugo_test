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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=5f92c437649200c4f98f55eee65c1fd5326e7bec51ab1e787d12aa9169a5e829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LUELKIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHkc7jxLWC2S7Q9hrU8O%2Fw91p2hBd2NCt%2Fy0v2VnHS3FAiEA1MbuK2l4%2BnYb%2BeoJyxmUBQQxrU86ahHYq%2FFsqU3Grdkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAmHkRl4L%2Fu5R%2Fm%2BvSrcA%2BZWoBOPVsYsBq0Sj5rGLNL5MWfDmDRJVYvzzolkC70QmYSSt9AvcilGmb8E8jfmaRoqx6lOb9JlcAhGAKGWaezF2pZfxlg1%2BHv0EMTmw%2Bd5m%2B1alVUVIOMaVv4BcghikHeyJZAYa5m%2B1liTSv336vtOSSePyBH2jEaYR%2BIdJ6sxLVdqoOj6Kp68VXhiTm3VCUvO6bg%2FvqJyXrwEN4joOyX4%2BQyZtUOLXhyVOjH7Kblr2cdDcNAKDWQiAyU44p%2FdDtQic8JWXT5xRFbPUIiiwiZX5m415uPDRERoWu6rgK20kaJq3HCp1PnuWSOVxzySXh1ekwUiowgoqNzhZ3J0B0eDXdE1YdEgGFDpq5MnizCQhAU%2FSGghSLQU73VW6wxxKQWFIDljzFXxorsKc9Znh0GtpX3SpIa9ZW4VQryTRePSvqzWpox328KsdbWNtDcM9RQYQGUKoEsx6L%2BunfwZNBE1syrm7jnFDX9Z%2Fd56hVE3lJsT6LLQ12BYK7qd9VM5VAAsAaftZ%2F8TIFOHgvUqpoCv0P9NLIwGkAa%2Bgj2mLXmohmAwpgfoCk8yjr72y2oj6G0Q24Iqal4WfP8eu1El8swA5gUW7%2BOsNpYDaJnKf9rYJuyJyHU8qksDx9QYMIyH2sMGOqUBniAvk3WyGYpRwk2yJUgnSJZe0OXAaf7qpWs8BhA4iVSMtz3DtpfToNqRnnttzPfG%2B0hOs3sm7C9WpgsSKDeow2lS1R%2BUHhqI8sO1bQKwIrOdmnyf0ncwjMpBSkfR1Qk4oU4op2MqfIB21cXqsCNH9TQ1wLHfEumwCr1shdOzcqqzAdsJ8YmNh0m1LYvdwv2kpsKgFSS%2FDDBaMt1C8QlMGObG5oAi&X-Amz-Signature=3009d5bee98ef703338f47d4d941ee882b0a09059140ad43cab3af8cb7119935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
