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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMD4MZHF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCBi8umH6dQf240ZLfRWwgbLriVC4m63dSgoPBvRfS65gIhALS11xN4TyLV6XOGHzcZL0oIj81q4KbZoxEE9GOXgyucKv8DCBIQABoMNjM3NDIzMTgzODA1IgxOsmBlZM6vBgarL7oq3APDqb4OjczAowCbKpldTwB3l8wj5yFufwZXfZyIqDTt9z6RvmzEXb0t3ixx4uWJnftFu8tFiLgdaK%2BpOxF1TklsbHfGv6BN8n0fGeCfe3ff8D8xiNsXsmM6HFKgDSy9paDJHb64G4KWk6%2Bklrlyc7vDgqa%2B1TpX3TEw3AIUGTtd5m%2BQwOhni1puoT8dHREv9o8wfJm7AQZ%2BlTKq1o%2B5XrTt1VMaJOzy%2Bkn83eQ1G002CW5WmTRbxDwlNSkU4nh1CkpUrXi1%2BKdXfBvxQ1R5dj2NvnACgaQGIJUBvy%2BfzuC4kdxLMilsT34oaTYHd5C9eHMJdoIp8H2sjaYgc3%2BFYcDoGv4LWxCypd4NWOjWpcNtbtNmjObj%2Bte6AJk0tLooAlDnvnHhnalyAiyuZrfrA1Bne%2Buf1qjqiGDF8h1MONU5midtkDoTQJ6XKuERQVsn7qBdCpkIOLeHy45TKJfe7RWqlqC7VsfamJZqyodolfWxO13VPvpvIVI5mohdsAXyvDT4l6mj7tIMvud%2B94aT7dUpS%2FpxkDynke325adb8UudL%2FGzrwKXok9l2HHXu5PLhhS81Rf8Gw45XbjR1iyGSIIJBeR77fghvHUyEj66w8GZh8LROiYFC09RZS6vYzCriJnDBjqkAeYMi%2FU6JIoiY4kj80LyKjqzooe7cyqCEd%2BrRtjoZ5I%2F5t%2FjsYKO0VvnGt%2B96JpuQZbnt6XtrHdpWDOYohtQv5geruF93%2FuQP8DbtOxts3lLav7je9n2kK0C9vp68Ae8MlB5CPihbw4rqMSsEH5DnTN0aoP7JFLeoAwtPuDjMLPOlvnpV94gTIrxV2GCGdQ8yPkk%2BRkYzVsysy%2BbAGkU5D1eJ8XR&X-Amz-Signature=0972f108a4c8a80e401bca0bba806c6c0ddfb0d38750a7834ede6105d0cd142c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMD4MZHF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCBi8umH6dQf240ZLfRWwgbLriVC4m63dSgoPBvRfS65gIhALS11xN4TyLV6XOGHzcZL0oIj81q4KbZoxEE9GOXgyucKv8DCBIQABoMNjM3NDIzMTgzODA1IgxOsmBlZM6vBgarL7oq3APDqb4OjczAowCbKpldTwB3l8wj5yFufwZXfZyIqDTt9z6RvmzEXb0t3ixx4uWJnftFu8tFiLgdaK%2BpOxF1TklsbHfGv6BN8n0fGeCfe3ff8D8xiNsXsmM6HFKgDSy9paDJHb64G4KWk6%2Bklrlyc7vDgqa%2B1TpX3TEw3AIUGTtd5m%2BQwOhni1puoT8dHREv9o8wfJm7AQZ%2BlTKq1o%2B5XrTt1VMaJOzy%2Bkn83eQ1G002CW5WmTRbxDwlNSkU4nh1CkpUrXi1%2BKdXfBvxQ1R5dj2NvnACgaQGIJUBvy%2BfzuC4kdxLMilsT34oaTYHd5C9eHMJdoIp8H2sjaYgc3%2BFYcDoGv4LWxCypd4NWOjWpcNtbtNmjObj%2Bte6AJk0tLooAlDnvnHhnalyAiyuZrfrA1Bne%2Buf1qjqiGDF8h1MONU5midtkDoTQJ6XKuERQVsn7qBdCpkIOLeHy45TKJfe7RWqlqC7VsfamJZqyodolfWxO13VPvpvIVI5mohdsAXyvDT4l6mj7tIMvud%2B94aT7dUpS%2FpxkDynke325adb8UudL%2FGzrwKXok9l2HHXu5PLhhS81Rf8Gw45XbjR1iyGSIIJBeR77fghvHUyEj66w8GZh8LROiYFC09RZS6vYzCriJnDBjqkAeYMi%2FU6JIoiY4kj80LyKjqzooe7cyqCEd%2BrRtjoZ5I%2F5t%2FjsYKO0VvnGt%2B96JpuQZbnt6XtrHdpWDOYohtQv5geruF93%2FuQP8DbtOxts3lLav7je9n2kK0C9vp68Ae8MlB5CPihbw4rqMSsEH5DnTN0aoP7JFLeoAwtPuDjMLPOlvnpV94gTIrxV2GCGdQ8yPkk%2BRkYzVsysy%2BbAGkU5D1eJ8XR&X-Amz-Signature=6d89354c649530029e1606178e822090bb4e049736f20481d9f2c16aec7a53ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
