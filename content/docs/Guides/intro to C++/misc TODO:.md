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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3YODQC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcoJvogU6de%2F5TMgEp3fDbX5aNVwg%2FkVh4XdxMMKCRWAIgELOSYXbZfeumcLUQSrcf8ZO8tF1r4dGVOdVMUCAxk5wqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzfyXCx6hrjXPNkJSrcA9TOE%2F4NwZlNZC%2B4jLBNoLAS2yb0VPg8yEiEelCSztjLA41Y9jVkiobJqoKR9qXfKlp2BnpKmJjr8k7xHtnu%2BmMsLAIrAVAbLVLkamEN0VzxI5CFJZTQvTyZNMb7cDFjhigP9UiT%2Fi%2BFPbR9jzdf%2BjE4yvaOMaVKPSLIHUATQVh8bhC79fMDJz1uJUa2lRbBxS%2F1QLD7mGpeDcYiMSiV5yKAfIGNPYoFXZdQTISyQFMRYsiG3uqLqkizZxm6Z2kXomy3Rj8dMmuVT4YuHumTKJQiNqAJ9mK4IWQuo0m0Y5X0GAkhzw%2BuFmVMCkOmWdwJTN%2FI3%2FW3OroR8VG1jdPS6Kw1KRNLZDXNAkglkC12GYGOXinrdWMb9EDAxb0qV%2BaBQXYjiTFTaklwz4W4Jbb%2Ff7MlaORVcXE7nhVYd7OSgy%2BJKybki962mnuCNbf15EiSC7r7Lqp6YqcOymOgXRJTKtVIGpLgw8mPtUoFTZ%2FDUozqTP%2FNRgKX0Nle6w78S%2F0dabIxFUDe40Wj8p91hm0ywK2OP01sdauRsfUhdIOn82im9wiAw1xkqPPcxxIst7NZiuHrGKQRfBXi5%2BQi74ebi0107F25ilQScszHtJhQRTTsou112UqLNesC2swGMKzemsIGOqUBZC3jeAfPl4tysWmRcULz6cjTGzxdS7rKIdsGIRVxvJMjV1dYIz%2F9ObJl6YY4QI8mpjeKo0DjxcT8Kx8j7guehFKR8QjfSGrD5gP1Sw95hUBnN3%2FgMu4t4Qvf53rWqcGEKOMI%2BbxIiKLa7VDdJZi9HcnoKmHLwlRxG8vhZ2ww340zPs5dry9IbZyMDgbOKYYv%2BbcXj%2BF85f%2BHtQsxTgsD2fL05FfT&X-Amz-Signature=497be248ac2eb3faebbd714e6d2d6fd76eaabc4f12f820aa5b78536e2010a422&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3YODQC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcoJvogU6de%2F5TMgEp3fDbX5aNVwg%2FkVh4XdxMMKCRWAIgELOSYXbZfeumcLUQSrcf8ZO8tF1r4dGVOdVMUCAxk5wqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzfyXCx6hrjXPNkJSrcA9TOE%2F4NwZlNZC%2B4jLBNoLAS2yb0VPg8yEiEelCSztjLA41Y9jVkiobJqoKR9qXfKlp2BnpKmJjr8k7xHtnu%2BmMsLAIrAVAbLVLkamEN0VzxI5CFJZTQvTyZNMb7cDFjhigP9UiT%2Fi%2BFPbR9jzdf%2BjE4yvaOMaVKPSLIHUATQVh8bhC79fMDJz1uJUa2lRbBxS%2F1QLD7mGpeDcYiMSiV5yKAfIGNPYoFXZdQTISyQFMRYsiG3uqLqkizZxm6Z2kXomy3Rj8dMmuVT4YuHumTKJQiNqAJ9mK4IWQuo0m0Y5X0GAkhzw%2BuFmVMCkOmWdwJTN%2FI3%2FW3OroR8VG1jdPS6Kw1KRNLZDXNAkglkC12GYGOXinrdWMb9EDAxb0qV%2BaBQXYjiTFTaklwz4W4Jbb%2Ff7MlaORVcXE7nhVYd7OSgy%2BJKybki962mnuCNbf15EiSC7r7Lqp6YqcOymOgXRJTKtVIGpLgw8mPtUoFTZ%2FDUozqTP%2FNRgKX0Nle6w78S%2F0dabIxFUDe40Wj8p91hm0ywK2OP01sdauRsfUhdIOn82im9wiAw1xkqPPcxxIst7NZiuHrGKQRfBXi5%2BQi74ebi0107F25ilQScszHtJhQRTTsou112UqLNesC2swGMKzemsIGOqUBZC3jeAfPl4tysWmRcULz6cjTGzxdS7rKIdsGIRVxvJMjV1dYIz%2F9ObJl6YY4QI8mpjeKo0DjxcT8Kx8j7guehFKR8QjfSGrD5gP1Sw95hUBnN3%2FgMu4t4Qvf53rWqcGEKOMI%2BbxIiKLa7VDdJZi9HcnoKmHLwlRxG8vhZ2ww340zPs5dry9IbZyMDgbOKYYv%2BbcXj%2BF85f%2BHtQsxTgsD2fL05FfT&X-Amz-Signature=0f01ac18a29f058a56a779784ba21bfa039cc3131a16b6e08607e552e9a260bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
