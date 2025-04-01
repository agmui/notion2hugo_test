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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BSMNNG6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGk4uEJrIdRizTWdD%2Bq%2Bzf7huWYl8DBUG0OmTuBKw3MpAiBYKVsdIChdxcNL7x%2BntBf9j1eMCw3GWP7oPuKNSX2voCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLFizE2cNFsNzHS%2FHKtwDMWc%2BmD5C63VALNeg9dmop%2BiaIz0bWgupQuFoFp5b3aCZOSlSCJYbRQqJ2KVkB2iQ5fvqOcdTaKDSFJVdmPbpY2BeE%2FZoKj21ZdlFVoOJM4orjgrv8pUeF3gHy2pj%2FkffsbgfBwW7dsQA2IqR93P0Q84fe4Pmka4b%2Be14gPcO0oLA%2Fny7Pn00buo%2B2fqZfzCGvFEOx61zof64ZqCfeiZBK9hcnGHh%2FULzhmBtN8je9QSNQiyN6GDi3lrtAqEHz%2B%2F%2F68rPY8rmmAGdUMWFEo%2FWnf%2FUiYonj8vJssyDdzXwwY4eaOrylSyyP2rtfzaMLKh12X%2B9nNAaBOD%2BLEPY3GAWaJgNQ7%2FZ9kUhhkLixlDHRcVvNhEOfO4TplbPXBGYotWTKRXoNlcEuf3%2FlSkWRu0PS4mHO1%2Fuy7RuC0GvONtcZNtj%2FYR4LSVFOmV3YO6y50WdyDdWmpUcQKBi4Xfb8INEXi%2Fz8DVZ%2FHMs0Ri1EIWOU%2BJVRiz6dGTLqUqB7sZnochqLqG7YTFybHsigvJLa3IX0THNUfXYYf0rlWVpDRTnNttuftdNAuzWgt0dxGWG3hxFcun3AxSawJ%2FZ1hOZlV3YJPZN3i9Lo9JFxnJxh27L9j2bFy8Ej6j0ntf7Bq8wkNewvwY6pgHOergnKjj5DlZzmxCUTHPfu6AUWR8ZaCfYJMZOtOF1ow2qiuzNn8qIkUd19ViT%2FyMiJIqGq0UtK%2BCMPXDlcqD6AH34%2Fz7M0wdr4yti3FXU8rpcIb0NWIsnSilt3lSPvn6L2EbKgmvNy79aKbzj5buvXRYDW6HzWaVqxa1rDcAhgDGBe9j6GOgZREZGLiCcBpkK69Y%2Bd38Q7f5TRdGrL9TRxEY7EWNO&X-Amz-Signature=e43eb3f0105a0c71a476d6e57a4dfd9b3b9bd41d686f90125a50d96cdfbb4199&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BSMNNG6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGk4uEJrIdRizTWdD%2Bq%2Bzf7huWYl8DBUG0OmTuBKw3MpAiBYKVsdIChdxcNL7x%2BntBf9j1eMCw3GWP7oPuKNSX2voCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLFizE2cNFsNzHS%2FHKtwDMWc%2BmD5C63VALNeg9dmop%2BiaIz0bWgupQuFoFp5b3aCZOSlSCJYbRQqJ2KVkB2iQ5fvqOcdTaKDSFJVdmPbpY2BeE%2FZoKj21ZdlFVoOJM4orjgrv8pUeF3gHy2pj%2FkffsbgfBwW7dsQA2IqR93P0Q84fe4Pmka4b%2Be14gPcO0oLA%2Fny7Pn00buo%2B2fqZfzCGvFEOx61zof64ZqCfeiZBK9hcnGHh%2FULzhmBtN8je9QSNQiyN6GDi3lrtAqEHz%2B%2F%2F68rPY8rmmAGdUMWFEo%2FWnf%2FUiYonj8vJssyDdzXwwY4eaOrylSyyP2rtfzaMLKh12X%2B9nNAaBOD%2BLEPY3GAWaJgNQ7%2FZ9kUhhkLixlDHRcVvNhEOfO4TplbPXBGYotWTKRXoNlcEuf3%2FlSkWRu0PS4mHO1%2Fuy7RuC0GvONtcZNtj%2FYR4LSVFOmV3YO6y50WdyDdWmpUcQKBi4Xfb8INEXi%2Fz8DVZ%2FHMs0Ri1EIWOU%2BJVRiz6dGTLqUqB7sZnochqLqG7YTFybHsigvJLa3IX0THNUfXYYf0rlWVpDRTnNttuftdNAuzWgt0dxGWG3hxFcun3AxSawJ%2FZ1hOZlV3YJPZN3i9Lo9JFxnJxh27L9j2bFy8Ej6j0ntf7Bq8wkNewvwY6pgHOergnKjj5DlZzmxCUTHPfu6AUWR8ZaCfYJMZOtOF1ow2qiuzNn8qIkUd19ViT%2FyMiJIqGq0UtK%2BCMPXDlcqD6AH34%2Fz7M0wdr4yti3FXU8rpcIb0NWIsnSilt3lSPvn6L2EbKgmvNy79aKbzj5buvXRYDW6HzWaVqxa1rDcAhgDGBe9j6GOgZREZGLiCcBpkK69Y%2Bd38Q7f5TRdGrL9TRxEY7EWNO&X-Amz-Signature=b3f05f219339e525b037c0959a2056fde3d6fd43d31059e5eaeeb353a35e2c54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
