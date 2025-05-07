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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPETKXU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FHFCSbvW%2BWPFAV%2FpSBvR5qqFFr%2BROnxq6coCTMmUrvAIhAKLWojG05%2BROx790OR5PCO9mCNqfy3l8vDptWRZ9qz4dKv8DCGMQABoMNjM3NDIzMTgzODA1Igx2uIsCE4dXKPKMwLUq3APATV1vwpkbbloUzQFwCkZX7QZ0t8gxXRPiv8iG3w5VPRlUKq9AjUf6jBfGClLGHTuTFl%2FxVmNWRx0IShf42cZNevSulbO7WY0yjSpCjuDQFiW%2BwmTf28KrcfCLs1ZpyX%2FfKoB4X1ZM2jiVgDeLZswXDTAX%2FyQSmS0lQBjpOQY%2FTD%2Fs1q%2BVPsJPhVdbmYzbKNVzZmQnItlsXyRdNd26%2FQEMcxLRbTE5sPdokDZmInprEuraUWvncfbCT9tHEamIUrz3YfNlAZYTR0IB2MsWQm2PB9oYljDz2HCLQMDZthSa6uYoo8hVOnqio2Qvlnxgma%2Fo9TnApzqKlDbrJtVHiVoEDcNj28mNHHig3%2FSB3SCXHi3dino3lKBZgTl2qxllU41fdb6dwVFQctAYRlozM5pcdyHl7dL0%2BYMmgzqihmEdeEI0QtJLr3nP%2B0PQQ8MW93SEU9P0OxEH7tfndBpvYiUJHAaZWfJKsGDAng9oOjPL38QOB9%2B%2Fy9PbEKV%2FZA9tMSbEPNQdVquKgPqFz6O6VKUuvjdVXts5aVXwwYj%2BHLiL%2FfnIirhaH1ugS%2FY8y2A9M9ZDZb9ljYATYRlJU8DSXMd1T5Vbbhw88UIXvEf%2B6JmBoeKMYfWhYUjed%2BJfWzCsue7ABjqkAYiBwwaZwFZbrKeAWxz0ThFfkUo5NXpwT2qKP7UWQT%2FtJDRJZ8PyyVDiFmiZNXk2FP090xMrY8wztwHwWuMAZTkG%2BhS9kfIE9LsOVhDH6yPkdWdB%2BpN9v4Ujwq%2FaXKKkQM4yxYcVcCixh%2Fs5Rnn9rM7ROXNkPB6kupq90V1e%2FAnTxF3ddhD1zw%2FX2toou04Axt9k0fW3TJewN8F4Zs3KTxflor66&X-Amz-Signature=63a51ef5ca4e5762b14196020616c65621c454cc4d2a692141b1edfd6ab24a36&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPETKXU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FHFCSbvW%2BWPFAV%2FpSBvR5qqFFr%2BROnxq6coCTMmUrvAIhAKLWojG05%2BROx790OR5PCO9mCNqfy3l8vDptWRZ9qz4dKv8DCGMQABoMNjM3NDIzMTgzODA1Igx2uIsCE4dXKPKMwLUq3APATV1vwpkbbloUzQFwCkZX7QZ0t8gxXRPiv8iG3w5VPRlUKq9AjUf6jBfGClLGHTuTFl%2FxVmNWRx0IShf42cZNevSulbO7WY0yjSpCjuDQFiW%2BwmTf28KrcfCLs1ZpyX%2FfKoB4X1ZM2jiVgDeLZswXDTAX%2FyQSmS0lQBjpOQY%2FTD%2Fs1q%2BVPsJPhVdbmYzbKNVzZmQnItlsXyRdNd26%2FQEMcxLRbTE5sPdokDZmInprEuraUWvncfbCT9tHEamIUrz3YfNlAZYTR0IB2MsWQm2PB9oYljDz2HCLQMDZthSa6uYoo8hVOnqio2Qvlnxgma%2Fo9TnApzqKlDbrJtVHiVoEDcNj28mNHHig3%2FSB3SCXHi3dino3lKBZgTl2qxllU41fdb6dwVFQctAYRlozM5pcdyHl7dL0%2BYMmgzqihmEdeEI0QtJLr3nP%2B0PQQ8MW93SEU9P0OxEH7tfndBpvYiUJHAaZWfJKsGDAng9oOjPL38QOB9%2B%2Fy9PbEKV%2FZA9tMSbEPNQdVquKgPqFz6O6VKUuvjdVXts5aVXwwYj%2BHLiL%2FfnIirhaH1ugS%2FY8y2A9M9ZDZb9ljYATYRlJU8DSXMd1T5Vbbhw88UIXvEf%2B6JmBoeKMYfWhYUjed%2BJfWzCsue7ABjqkAYiBwwaZwFZbrKeAWxz0ThFfkUo5NXpwT2qKP7UWQT%2FtJDRJZ8PyyVDiFmiZNXk2FP090xMrY8wztwHwWuMAZTkG%2BhS9kfIE9LsOVhDH6yPkdWdB%2BpN9v4Ujwq%2FaXKKkQM4yxYcVcCixh%2Fs5Rnn9rM7ROXNkPB6kupq90V1e%2FAnTxF3ddhD1zw%2FX2toou04Axt9k0fW3TJewN8F4Zs3KTxflor66&X-Amz-Signature=1bbadb0912af5492b3b58684d48dcf74a68149adc43217c4936e1e5326e6be51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
