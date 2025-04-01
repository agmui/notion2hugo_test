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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYQTGEA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJFMEMCIHQq57Hql%2B9%2FaJojmgR01Y8%2FKyzPyLY2403bTZoMi%2BXwAh9WGvQ%2BdRDqpFqXoZRRbDMg%2BAkBBte2pgThHYjTISyiKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrV2FZZES1bhAnnyMq3AOl0NiU6HT8DLfyb2de2cfroHZa0J2nggJtsYjfDVTD%2B1%2BJilUwFEnzEA4%2F5cSKLxo4Rc%2Fwxs93WWhyIIzNicmj532yhWMnu1XF8DFZp%2Bj9uwmM%2BZqs6%2BerVOzdikxmE6xKRkno62IYhLUYszuOkmN5VJYo%2BHSWV72DJwX3Bc8%2BycvMMvsmPwH%2B1h9heQWsDhXRoRsCsWC14qE%2B2b0EfDY2W%2FQ9%2FZ%2FBTEx%2BBhJ2m6o00HmeWg4ha3xuxZE9qeaaWWnbpqt4cKFbaH4khE%2FT982B84dyUhqilCXUku5hIVW8vEfJUCMYCgO4i4MCijsNUVwyM60t5TyXGX5%2BI2A2Ehspw6cDklabcaSkoLD35jEIUappZW1vHFWQXxg41joUBXir2YkxXiyFFLcfxrSg8LuTnmBb3cyTcaJIukQt1vqXb13FNVy5TnkOKmiy1yRgc3KlxHOy6YjavyJQQaeeX%2BynbBfuthfzSpYP1%2FpI7gxrpzyEwvajD%2BP3QZWA3LywDDE13BQvDOcVfrru6WotUFH5u8ZsCdL8mISoWWfYmHlYMBPWKXRBigoWTHEUFy4lhO82Ra9YkmWVPaJD2AuEad%2FEhZizUhMbPSMPxjOH7OGRARjkdpg9tBLpNkoIvTD2tq%2B%2FBjqnATXNq%2F1Fiu0ZLS2db8Qkm1OYzo7OKnJN8Z%2BvIM%2FVm37kpHHFKEQT5HzgOL5%2Bl%2FMdETRloRZeX1q8k2e%2BShle%2FbgEOsCTs%2FItGJP4Xc0cCRtouNNT5XrMfPO%2FlBqrOmTkHzXpTzk6r3QQobAIJPXzrTD2einLENIpUMIoWH18kOKQ0JW7%2BHYjc6zcAEy%2BYQbbJqCKqRIiw%2FPiMb5rbqL%2FP8RGD9akStOI&X-Amz-Signature=9739609105e8e58e5084122b47583f1d66ed9c7769d738953b7b12fda4047554&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGYQTGEA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJFMEMCIHQq57Hql%2B9%2FaJojmgR01Y8%2FKyzPyLY2403bTZoMi%2BXwAh9WGvQ%2BdRDqpFqXoZRRbDMg%2BAkBBte2pgThHYjTISyiKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrV2FZZES1bhAnnyMq3AOl0NiU6HT8DLfyb2de2cfroHZa0J2nggJtsYjfDVTD%2B1%2BJilUwFEnzEA4%2F5cSKLxo4Rc%2Fwxs93WWhyIIzNicmj532yhWMnu1XF8DFZp%2Bj9uwmM%2BZqs6%2BerVOzdikxmE6xKRkno62IYhLUYszuOkmN5VJYo%2BHSWV72DJwX3Bc8%2BycvMMvsmPwH%2B1h9heQWsDhXRoRsCsWC14qE%2B2b0EfDY2W%2FQ9%2FZ%2FBTEx%2BBhJ2m6o00HmeWg4ha3xuxZE9qeaaWWnbpqt4cKFbaH4khE%2FT982B84dyUhqilCXUku5hIVW8vEfJUCMYCgO4i4MCijsNUVwyM60t5TyXGX5%2BI2A2Ehspw6cDklabcaSkoLD35jEIUappZW1vHFWQXxg41joUBXir2YkxXiyFFLcfxrSg8LuTnmBb3cyTcaJIukQt1vqXb13FNVy5TnkOKmiy1yRgc3KlxHOy6YjavyJQQaeeX%2BynbBfuthfzSpYP1%2FpI7gxrpzyEwvajD%2BP3QZWA3LywDDE13BQvDOcVfrru6WotUFH5u8ZsCdL8mISoWWfYmHlYMBPWKXRBigoWTHEUFy4lhO82Ra9YkmWVPaJD2AuEad%2FEhZizUhMbPSMPxjOH7OGRARjkdpg9tBLpNkoIvTD2tq%2B%2FBjqnATXNq%2F1Fiu0ZLS2db8Qkm1OYzo7OKnJN8Z%2BvIM%2FVm37kpHHFKEQT5HzgOL5%2Bl%2FMdETRloRZeX1q8k2e%2BShle%2FbgEOsCTs%2FItGJP4Xc0cCRtouNNT5XrMfPO%2FlBqrOmTkHzXpTzk6r3QQobAIJPXzrTD2einLENIpUMIoWH18kOKQ0JW7%2BHYjc6zcAEy%2BYQbbJqCKqRIiw%2FPiMb5rbqL%2FP8RGD9akStOI&X-Amz-Signature=7a890f53c9c92451982d1f3cc92f48ebce0b3145611d5c10e909a88ea9ce3395&X-Amz-SignedHeaders=host&x-id=GetObject)

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
