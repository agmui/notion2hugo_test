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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVOYYQN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAdXLAe41HpNFFBJP2Tlk9AETExqnbRAmqvxnLZXD0w7AiA6QKOpqXJzcGZDRt%2B2ei4kBKVRojr%2FY03mdS0jDPIPjSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEDZG3XSxxk0iND4IKtwD%2BtSDuNd2rPLYrkIGBMmE7Cxm76sNgTDTZjS2YL7UH9Bmq95W9BpRvHV3EtYjJXLTh1FAOMamjOz7XGDiwUJsYg7soA4Tz%2BEpMqXuPCbkq8%2FJeRHz1ziWclAcDA%2FwqvNaNKnyKxNz9TUW6XRSzWD28Z7nKFrqiEWN9qyKQ%2Bn3o%2FAOaT%2BXe2BgxaXPi1pR80rccJmew1qTngnKbu5QzUieTQVNEDsBQL6Iv861Qf%2FYa4Bnq8X%2FnhlWyLxOOozQb9FwxYTL%2BDAI9sPwBJcqgcKbuU4sHA57swkT%2B5912xKv%2BFrteexd%2BmaHvyE%2F1WyMNI%2BHCqxwsNbAhA1%2FMv0fD0aeTgAA8bRQIF5oa1BRHQR9GiNZNf3uJfxYBohK6PLsdBwJg1F%2FfhjER4yG7IhR1XvVB4bB5Ylg2OpJNhPbwHyWwhJxRaOZbYwOgxSZAW8fGJil4to1FYSkc4YRJqwdnDOTOifL2EC204amVi0clS9UGVAj8u0dlnPrhLryCITDFLa%2BYgSJgW%2Ff6MQ2RBwV2WpxPY8M7%2BGacbIzd8MtAgewTcFJ5byuTy1CxIRsEINgU%2BgyR2KVNcAi9Rd9gptE17W4xFyl3aPOTH0OJMKyz5ItkMmcrKAWGJH21NVhRgwwyPq4vgY6pgEmbmRqAY20iG%2FsjLkSPSIETzRa0rlcdRJj6besQ%2BHArkKGEuNJzVCa03ABZ9TBuR%2FCFOdT%2BLFA%2F%2B8MoK7%2BWWdG3OkWWaIwfasxSaHI7gffd6JOUu0foFWz8MzCdrf1SSw7f%2BqvvM3BwnsahGo4K1VJcqsuz2XMG1lzRLAPvVFe97llrsQ8mtUvbJvzZqxgwchLeusKB19GTMQsPb3RieMa8ny6%2BQu%2F&X-Amz-Signature=86755127030cf41f8aad986cec803cc0e4f674e32a41dc31497fa59bfece3730&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVOYYQN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAdXLAe41HpNFFBJP2Tlk9AETExqnbRAmqvxnLZXD0w7AiA6QKOpqXJzcGZDRt%2B2ei4kBKVRojr%2FY03mdS0jDPIPjSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEDZG3XSxxk0iND4IKtwD%2BtSDuNd2rPLYrkIGBMmE7Cxm76sNgTDTZjS2YL7UH9Bmq95W9BpRvHV3EtYjJXLTh1FAOMamjOz7XGDiwUJsYg7soA4Tz%2BEpMqXuPCbkq8%2FJeRHz1ziWclAcDA%2FwqvNaNKnyKxNz9TUW6XRSzWD28Z7nKFrqiEWN9qyKQ%2Bn3o%2FAOaT%2BXe2BgxaXPi1pR80rccJmew1qTngnKbu5QzUieTQVNEDsBQL6Iv861Qf%2FYa4Bnq8X%2FnhlWyLxOOozQb9FwxYTL%2BDAI9sPwBJcqgcKbuU4sHA57swkT%2B5912xKv%2BFrteexd%2BmaHvyE%2F1WyMNI%2BHCqxwsNbAhA1%2FMv0fD0aeTgAA8bRQIF5oa1BRHQR9GiNZNf3uJfxYBohK6PLsdBwJg1F%2FfhjER4yG7IhR1XvVB4bB5Ylg2OpJNhPbwHyWwhJxRaOZbYwOgxSZAW8fGJil4to1FYSkc4YRJqwdnDOTOifL2EC204amVi0clS9UGVAj8u0dlnPrhLryCITDFLa%2BYgSJgW%2Ff6MQ2RBwV2WpxPY8M7%2BGacbIzd8MtAgewTcFJ5byuTy1CxIRsEINgU%2BgyR2KVNcAi9Rd9gptE17W4xFyl3aPOTH0OJMKyz5ItkMmcrKAWGJH21NVhRgwwyPq4vgY6pgEmbmRqAY20iG%2FsjLkSPSIETzRa0rlcdRJj6besQ%2BHArkKGEuNJzVCa03ABZ9TBuR%2FCFOdT%2BLFA%2F%2B8MoK7%2BWWdG3OkWWaIwfasxSaHI7gffd6JOUu0foFWz8MzCdrf1SSw7f%2BqvvM3BwnsahGo4K1VJcqsuz2XMG1lzRLAPvVFe97llrsQ8mtUvbJvzZqxgwchLeusKB19GTMQsPb3RieMa8ny6%2BQu%2F&X-Amz-Signature=3fe1e1660c4f4f3103b37d97d8634893c7a8e039258329a4e35de54aad805596&X-Amz-SignedHeaders=host&x-id=GetObject)

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
