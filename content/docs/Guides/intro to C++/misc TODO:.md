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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHZTKFG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC82sBFkYUZWyyInmctvVIjeTTfB3UmhJA9hSPWoNIigAIhAKXHdjxoScFkypMncyAvWf1W9jSmb%2B5P4IIPYTvn65k3Kv8DCFgQABoMNjM3NDIzMTgzODA1Igwy%2F%2FGtnwYvp5GOqDUq3AOIOOF6jzk7n7%2F15iF8%2Bqo2Ryry2YBl9XrUWanapHy21L%2BOYid0rpckY7%2FFyQTjJYacJRAU7Mr%2BQesfG9sjKWEPE4vOUtnPz84P4rED1Z%2B8dZE6MwGoaJI6Vf5K8DxYQHOUAyIFRIfVj4jlsYZ5gLJczuFBYnvNiwOeYCakKk67fZDx3NiPZCcvZNaTIVjh9iQFDGHCRCoCchwCP8jZKlf8GBMiS%2BYDaUYIliOWDoWotw09J61eqd5HpwK0V7qBz4R7a1vdoTeUu32IepVf0Bndqh1TBJrVbWtEaIKLov2%2FNpMhd8w%2BjM4F4NAvTX5VWzPFrqDd8XPS3hXuBSWPcDlRcUhZZ2DJ8e%2B0sfmncPV%2B8SkCD4xxOyri%2B4VeDovtpWGQGifHno63VQOrZX9nzcbWYIBozJfoAP0b%2FwWEvzpGePDuQvw%2FzzH1jvuU15dqA8po1QuJjMtvAxxwXSEgkgKy73%2F%2BiNgMX%2ByB%2FmIuPD%2BkqIIrF8THypBfa6ij%2FZuujfk4i1QE3hn6NXng8AK%2F7EwZGPrPvxZCf%2B5ZPhihRnvBYcVX%2FjkD472s9Iy8RJ6z7%2FfPuiaVkvURVb%2BlbEegDyEvuHykxWdnBa0pQGiov5aTwIcvi3F93YMyRHWMDTDCtqjDBjqkAbkNqqxpymR1FNEroGg5U8tCHX9Pt1eWud1wbQizkWEyF0r%2FGXYb2eZgS%2B7pKMkOh%2B30qn4I6zir01qrffqn7T91dvrvV3Xg3%2B3fhBdEh7EpSkzJAI0kRko0B7sG2s89%2BeWd7O6B4pkQTemVhq9%2BclqCwB8b1GVgyCKtREiMkOhPIS0Qx93VMTmDYlryG5Bh7AZLMoNjsuXxm87VNgDXB7phPlBl&X-Amz-Signature=b96cff4b7e06a283907964ab4463644a83022540dbae76cac0f3a717e2a01f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHZTKFG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC82sBFkYUZWyyInmctvVIjeTTfB3UmhJA9hSPWoNIigAIhAKXHdjxoScFkypMncyAvWf1W9jSmb%2B5P4IIPYTvn65k3Kv8DCFgQABoMNjM3NDIzMTgzODA1Igwy%2F%2FGtnwYvp5GOqDUq3AOIOOF6jzk7n7%2F15iF8%2Bqo2Ryry2YBl9XrUWanapHy21L%2BOYid0rpckY7%2FFyQTjJYacJRAU7Mr%2BQesfG9sjKWEPE4vOUtnPz84P4rED1Z%2B8dZE6MwGoaJI6Vf5K8DxYQHOUAyIFRIfVj4jlsYZ5gLJczuFBYnvNiwOeYCakKk67fZDx3NiPZCcvZNaTIVjh9iQFDGHCRCoCchwCP8jZKlf8GBMiS%2BYDaUYIliOWDoWotw09J61eqd5HpwK0V7qBz4R7a1vdoTeUu32IepVf0Bndqh1TBJrVbWtEaIKLov2%2FNpMhd8w%2BjM4F4NAvTX5VWzPFrqDd8XPS3hXuBSWPcDlRcUhZZ2DJ8e%2B0sfmncPV%2B8SkCD4xxOyri%2B4VeDovtpWGQGifHno63VQOrZX9nzcbWYIBozJfoAP0b%2FwWEvzpGePDuQvw%2FzzH1jvuU15dqA8po1QuJjMtvAxxwXSEgkgKy73%2F%2BiNgMX%2ByB%2FmIuPD%2BkqIIrF8THypBfa6ij%2FZuujfk4i1QE3hn6NXng8AK%2F7EwZGPrPvxZCf%2B5ZPhihRnvBYcVX%2FjkD472s9Iy8RJ6z7%2FfPuiaVkvURVb%2BlbEegDyEvuHykxWdnBa0pQGiov5aTwIcvi3F93YMyRHWMDTDCtqjDBjqkAbkNqqxpymR1FNEroGg5U8tCHX9Pt1eWud1wbQizkWEyF0r%2FGXYb2eZgS%2B7pKMkOh%2B30qn4I6zir01qrffqn7T91dvrvV3Xg3%2B3fhBdEh7EpSkzJAI0kRko0B7sG2s89%2BeWd7O6B4pkQTemVhq9%2BclqCwB8b1GVgyCKtREiMkOhPIS0Qx93VMTmDYlryG5Bh7AZLMoNjsuXxm87VNgDXB7phPlBl&X-Amz-Signature=feaa287cb5f6ef7fcb778ddbd1e1332d9880fa4896f6a383b0e34cc13b80cf82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
