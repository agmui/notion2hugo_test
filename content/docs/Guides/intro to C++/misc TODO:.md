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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNGY27F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXLDMgxz151PIdFOEgISgGkdRNKqelW1Hu9mNkb6RxgIhAMMVRAwMCqiPKg%2FS%2BPUolKaWqLdKGFjijmjnQaFBNqHyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FYJdscGmUrhc6PMoq3AN%2BCbYgWygLv2DtjJ36C17rbuQHI5f32J0vKlGghB4wUMIYPWBUVAA5%2B0pYWmhGoFoIQuWjbaWEo1EqLZf17XMdhIpuFyeQ6HujY2uAP1NrVxh876Ljnyk8WO2VVtrImCIDmNfkmbZVHuUUnr0HESNYkLLtcNb%2BOKO4jhhqDn%2FkuuTwyzrX5DZB%2F6vbPuUQIe8d9ThatoUJbFuR8j5T4M2AkMVaSCGzjsbF60%2Butck7Xbr8%2BKvXVIt%2BTFi6aKDHCeR%2BcCmMp273pg9vChZx2p6FhDoJGowfRwMQwG%2FU1JIUO35kdAJQpx4ybt5gvjSmJdN82MKHwP2cQz2Vj5zsKmJ4Of7eWTBxpRorRQETRTrK%2F7LGz3b%2F%2BakMi%2FnjzH5qlUL0YeSAKvXNlxyYa9Ih1m8siL6vsQ3rDNI4dRxTSmernWlY9SWDCPJz%2Ffpxj28m%2FFiyG6fcz21O%2Fxe5gBvjyl1%2FBO4shSwn6INLFIHwpx385A6GZ42iNJSMM9Qze4L3RzvIkLSW9Dmho%2Blz376d9NGbNoXx8gtMpj8hDAK4sy%2FR%2Fz%2Bag8MgJFUzdUKdOLA87nbRtoOHubJY%2F9%2Fpw3cNDMBa2B0WyhOKqTZUy5aK2BUe%2BJNx%2FdpdRYSLCoscOzCBs9bCBjqkAdTlHoEWy%2BvURLb80m%2FPdtRyTWxDT%2FZ8JMD0xmDTRzAb4xPDs%2FbtHyA4l5cIrISxNB18ktQagj5VukF%2FJ5GcCuDRG6ABXWakH60V%2BW57w%2BlU3h3O8bB6fG5ovxOZgVbLJK4NZfTKou5ILMugB1IEaIdtyUBerI1xpXP0A3toGdJwYMsQa%2BCs94l8aa1j39YcxZwUUqOa5HFzFuWwXH6Qn03wlG5K&X-Amz-Signature=297f0babec562173542e6b043a79dfcfb232daa39cb9a0a454d23e8fa2d98f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THNGY27F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwXLDMgxz151PIdFOEgISgGkdRNKqelW1Hu9mNkb6RxgIhAMMVRAwMCqiPKg%2FS%2BPUolKaWqLdKGFjijmjnQaFBNqHyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FYJdscGmUrhc6PMoq3AN%2BCbYgWygLv2DtjJ36C17rbuQHI5f32J0vKlGghB4wUMIYPWBUVAA5%2B0pYWmhGoFoIQuWjbaWEo1EqLZf17XMdhIpuFyeQ6HujY2uAP1NrVxh876Ljnyk8WO2VVtrImCIDmNfkmbZVHuUUnr0HESNYkLLtcNb%2BOKO4jhhqDn%2FkuuTwyzrX5DZB%2F6vbPuUQIe8d9ThatoUJbFuR8j5T4M2AkMVaSCGzjsbF60%2Butck7Xbr8%2BKvXVIt%2BTFi6aKDHCeR%2BcCmMp273pg9vChZx2p6FhDoJGowfRwMQwG%2FU1JIUO35kdAJQpx4ybt5gvjSmJdN82MKHwP2cQz2Vj5zsKmJ4Of7eWTBxpRorRQETRTrK%2F7LGz3b%2F%2BakMi%2FnjzH5qlUL0YeSAKvXNlxyYa9Ih1m8siL6vsQ3rDNI4dRxTSmernWlY9SWDCPJz%2Ffpxj28m%2FFiyG6fcz21O%2Fxe5gBvjyl1%2FBO4shSwn6INLFIHwpx385A6GZ42iNJSMM9Qze4L3RzvIkLSW9Dmho%2Blz376d9NGbNoXx8gtMpj8hDAK4sy%2FR%2Fz%2Bag8MgJFUzdUKdOLA87nbRtoOHubJY%2F9%2Fpw3cNDMBa2B0WyhOKqTZUy5aK2BUe%2BJNx%2FdpdRYSLCoscOzCBs9bCBjqkAdTlHoEWy%2BvURLb80m%2FPdtRyTWxDT%2FZ8JMD0xmDTRzAb4xPDs%2FbtHyA4l5cIrISxNB18ktQagj5VukF%2FJ5GcCuDRG6ABXWakH60V%2BW57w%2BlU3h3O8bB6fG5ovxOZgVbLJK4NZfTKou5ILMugB1IEaIdtyUBerI1xpXP0A3toGdJwYMsQa%2BCs94l8aa1j39YcxZwUUqOa5HFzFuWwXH6Qn03wlG5K&X-Amz-Signature=0066ac60f31a1b963c0371be962111c3e5549a3f791e8439c7fed57771ce03fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
