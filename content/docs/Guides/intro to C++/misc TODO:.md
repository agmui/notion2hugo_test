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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YXPEUP%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHxe0tftaswWbCOX3pWrRFFlDdUU824ajvtANfXjrijtAiEA2qivj7L9fIffUY%2BlrjVc9UpBil4v60o5cMVaxY36P%2F4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZO%2BiDGWvHT%2Bd%2F40CrcA%2Fa7K9wpTwRyjG%2Fb5q9Xir%2F2Jrjxz4WSgL8nDMfoymdOGxh4YrZr%2FByqLsXQr%2BI1hNlaiAhz2sqESw7ykvwB1cdeL%2B3xwzwT7YiZbhc3n5EcG3%2B5pPBCsVItrkKxVqpIVO1WwVnmFfnB9LdvQkc7200nBwkg%2BDFP4ru%2FXoZddz7gFNK25NoE7TbJQ2eBTPDRPWPB1K4Zff40ppbphQCapcxSwouWlnzLI6rwQ7T%2BQ1hXseAR1tHGDWJ%2B1QwStSYIJ%2BN0Y5nWSS7KWF5YbT9aUGPUBU0HLf%2BKtvGIjJe8%2Bs4tovWyHWuSG3M9cZCaAQM2SgJGACaW55JCVNcEDLaMkuuTv7KyBAR2kyRI4ThztaerHVV9EQJoDjK0CESQy0heZzEJbhBuupG65WpDHzRbrKyr7J1l1pz0ILOAAOHe6A%2F3jFl7FpyTpU6Rs2u889aBGdWZP5%2BAYfDzVq29rhkDi1b%2FxJcYhVhPSge%2F6gxRot%2BeEIv9pDtsdTh3z2%2F8cyIwmOLWGl%2FDWxp1w4%2BQxj3ZbtCPELtmwlzrXbLNZJ0xO4tQkgwErlq4skJNrAvc56q0up%2F0WWvLVvuEJ941hqsaqhYbLu6h3ck4Q9Se0EMnpLoIKhjbhIMDiyTIVysTMJe%2F4cYGOqUBeF4VlIFVSApogUen3LV6YKEGZpNKmJllE0A9WVUYbh%2B%2BlyqIV4YMZKfZ%2FR3DLsyTYKQ315YUqzX%2BWLvOl1r0j6UOKfvM1hTAj8Awbroq19CS2p5HVd5zZiHXtYOMzwKulGqGq8O0IkPozEJwb27HM7mVjfp3zPKNSIAjVsVnP4YL0oggeSw6oAUlHH7hCnJ6JPIAfy2mJzziiETL9MOf%2B6GawWIs&X-Amz-Signature=207545a0d2e322abae6f437193ae2580d7a0803c914f296b91d394d27d4c6741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YXPEUP%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHxe0tftaswWbCOX3pWrRFFlDdUU824ajvtANfXjrijtAiEA2qivj7L9fIffUY%2BlrjVc9UpBil4v60o5cMVaxY36P%2F4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZO%2BiDGWvHT%2Bd%2F40CrcA%2Fa7K9wpTwRyjG%2Fb5q9Xir%2F2Jrjxz4WSgL8nDMfoymdOGxh4YrZr%2FByqLsXQr%2BI1hNlaiAhz2sqESw7ykvwB1cdeL%2B3xwzwT7YiZbhc3n5EcG3%2B5pPBCsVItrkKxVqpIVO1WwVnmFfnB9LdvQkc7200nBwkg%2BDFP4ru%2FXoZddz7gFNK25NoE7TbJQ2eBTPDRPWPB1K4Zff40ppbphQCapcxSwouWlnzLI6rwQ7T%2BQ1hXseAR1tHGDWJ%2B1QwStSYIJ%2BN0Y5nWSS7KWF5YbT9aUGPUBU0HLf%2BKtvGIjJe8%2Bs4tovWyHWuSG3M9cZCaAQM2SgJGACaW55JCVNcEDLaMkuuTv7KyBAR2kyRI4ThztaerHVV9EQJoDjK0CESQy0heZzEJbhBuupG65WpDHzRbrKyr7J1l1pz0ILOAAOHe6A%2F3jFl7FpyTpU6Rs2u889aBGdWZP5%2BAYfDzVq29rhkDi1b%2FxJcYhVhPSge%2F6gxRot%2BeEIv9pDtsdTh3z2%2F8cyIwmOLWGl%2FDWxp1w4%2BQxj3ZbtCPELtmwlzrXbLNZJ0xO4tQkgwErlq4skJNrAvc56q0up%2F0WWvLVvuEJ941hqsaqhYbLu6h3ck4Q9Se0EMnpLoIKhjbhIMDiyTIVysTMJe%2F4cYGOqUBeF4VlIFVSApogUen3LV6YKEGZpNKmJllE0A9WVUYbh%2B%2BlyqIV4YMZKfZ%2FR3DLsyTYKQ315YUqzX%2BWLvOl1r0j6UOKfvM1hTAj8Awbroq19CS2p5HVd5zZiHXtYOMzwKulGqGq8O0IkPozEJwb27HM7mVjfp3zPKNSIAjVsVnP4YL0oggeSw6oAUlHH7hCnJ6JPIAfy2mJzziiETL9MOf%2B6GawWIs&X-Amz-Signature=70f4ae2c959b6b850b9d1343b5283b9298a0a16545cc9a2aafd2f456e62245e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
