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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S53VZWZY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCOR6oVvVfJNzRHiXH%2F932vCD79AqJ8XkZr1FBHyFamKQIhAN6VqI6hbXA2FibEM6yP%2FvdMLMSockqcz6zczsA1SMEBKv8DCEYQABoMNjM3NDIzMTgzODA1IgwzzQsPXvdp%2BtX%2Fw0kq3APT2ew%2FUCOMTL9pdC%2B35lVbvnJHPIBg6aw%2BhuwLjBUUSGCSthELPCyRtxbvwLpgx66bZSslC34GFPrDrvMc06kZSUQkGDELdb82nOPA0RgR3xyRKNmgADPaUz8hvbLx9Rp9foMsRdsqY36mJjieXKem8kDwwehZEmGH3DObAJUL7HglBzL%2B3mE2DPHM4CQOLPQEUDgjh6HUqQX1EnnO7sEVPrDr4wbyDaBwqZI3wXZF9VbWIXcLjj%2FyBkXa6e6677d6HAFGx8En%2BO%2FS9nvsedMsIMS0r28XipG3l1Jkxc4%2BWE3L81q3HPi2vcTfFpyPDdHkvio2cXGVYhp8Sqqgu%2FZQsUfKjlux9SC508Ta%2B07dLbDu7NfThTNZ%2F7dIoBEtgZ5AcsAJ8YxvaYxPtHs2PPz%2FRqQq2k3ulmk%2B6tBj5ikdTtKyGr%2Fi9vLPQENQTt6hjuJ9%2FVxxGColB%2F8teQMlDVvIAd5a41zS025v9Qz1exb5usgdruXYyaxX7kxZ7jZR%2FiwW%2BOARsYaTXZ1iOz2EPA4w7%2FkZRBpKXmVbvXUBWm0OK40QnzRUc2bRnXOCAjFcSAB15Owl7Uk6iyavlVbKFznpSu603jP32qRU5hIi7cPyl17%2FBr5MpAUX%2BXUYuDDS7%2B%2FCBjqkAak1HRveq1100jb0ud8SPUghXLMGaPl8%2BrhShKOFOLvadYGCbj7TITO%2FGZpVs316Pld2AqGLAi25csshWbDIfrAWxmJ6bqWjDdU6kj2WEY9zlF4C2%2BH%2BWe6Xn1wj%2BQD5aUlIdk9vNHspuDePE48XMkjtooh%2FOBeZTpu%2B0DRCsSqUfVdUCJxpiou4P45qodyK5I0Pp2pH270iiySHkHWL4jd%2FAqSm&X-Amz-Signature=1992bde2ce26121f2d69614d46cb00f96bc352786e038b2e9fcec8a99af3dbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S53VZWZY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCOR6oVvVfJNzRHiXH%2F932vCD79AqJ8XkZr1FBHyFamKQIhAN6VqI6hbXA2FibEM6yP%2FvdMLMSockqcz6zczsA1SMEBKv8DCEYQABoMNjM3NDIzMTgzODA1IgwzzQsPXvdp%2BtX%2Fw0kq3APT2ew%2FUCOMTL9pdC%2B35lVbvnJHPIBg6aw%2BhuwLjBUUSGCSthELPCyRtxbvwLpgx66bZSslC34GFPrDrvMc06kZSUQkGDELdb82nOPA0RgR3xyRKNmgADPaUz8hvbLx9Rp9foMsRdsqY36mJjieXKem8kDwwehZEmGH3DObAJUL7HglBzL%2B3mE2DPHM4CQOLPQEUDgjh6HUqQX1EnnO7sEVPrDr4wbyDaBwqZI3wXZF9VbWIXcLjj%2FyBkXa6e6677d6HAFGx8En%2BO%2FS9nvsedMsIMS0r28XipG3l1Jkxc4%2BWE3L81q3HPi2vcTfFpyPDdHkvio2cXGVYhp8Sqqgu%2FZQsUfKjlux9SC508Ta%2B07dLbDu7NfThTNZ%2F7dIoBEtgZ5AcsAJ8YxvaYxPtHs2PPz%2FRqQq2k3ulmk%2B6tBj5ikdTtKyGr%2Fi9vLPQENQTt6hjuJ9%2FVxxGColB%2F8teQMlDVvIAd5a41zS025v9Qz1exb5usgdruXYyaxX7kxZ7jZR%2FiwW%2BOARsYaTXZ1iOz2EPA4w7%2FkZRBpKXmVbvXUBWm0OK40QnzRUc2bRnXOCAjFcSAB15Owl7Uk6iyavlVbKFznpSu603jP32qRU5hIi7cPyl17%2FBr5MpAUX%2BXUYuDDS7%2B%2FCBjqkAak1HRveq1100jb0ud8SPUghXLMGaPl8%2BrhShKOFOLvadYGCbj7TITO%2FGZpVs316Pld2AqGLAi25csshWbDIfrAWxmJ6bqWjDdU6kj2WEY9zlF4C2%2BH%2BWe6Xn1wj%2BQD5aUlIdk9vNHspuDePE48XMkjtooh%2FOBeZTpu%2B0DRCsSqUfVdUCJxpiou4P45qodyK5I0Pp2pH270iiySHkHWL4jd%2FAqSm&X-Amz-Signature=f8baca31dd3636d1d71145aceb5215e7f36e6c6165501d3dde6fe9ff994bc9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
