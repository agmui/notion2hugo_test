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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFB33EER%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFiBMK%2Bdgb%2BLYHzJrGfNhLyJIHU0WnkgA6CRF28gcXU%2FAiBTzuoX5p85WtyMP1ooh6IxWxRHLVqGgWHe9BoY6LS6rCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMc54aSUEvlqQUrA7eKtwDXdMk6lycLvxZs6ymeDL5u6k%2FyDB4B%2BNumj3NaRF26BVrrjUZU7zNGjOAioz4EM7qG8dnTMHXJsqgTrSe0oTyZghoDSu1dfFnI8uSeZi9HG5bDfmklAK1MsG9j7FEqGlnzOvDu6Xvwah1eym6PPUTcRoaTyq0qnvKT22Aj2N1XYMK0VkJ59GLxHUqOTLAIRd6ULnxC6DN9mK6QUKxfxF9JNV5ISqTIer%2BBFXZ6WwYunB2ltKrqCE3cmqhWO1%2BZn9qpnsQzoA19UpqkD4TF5yrxAmhmBSQAdFDxOHuKF3hSAiwYhx4lXkhJN4XYmU31dBszHBPNK7sLhpxKRilzFKprDPYUfMUdImeFMsFWQ%2BPaXZoFpeoaV276C9XzgY%2FGQhj0fnIj9aEmXoqdiiiYTuIYW%2BsHvdtQTWi082HBRWZYMUJHBz2b4fmdwCAbm4BraNfvbwiqDxaaRDAbU5LcHqqNad9QOCNaJAtvd5k0h9mdldGknBulrwFUi8PFe4vu%2FQCdPAi9EWgTECJCr8qwPgA%2BTPZ7fj2fFuY9NGn5h6FMHJPJOGfrAIabw33Me8qNjeZvlAsqnIZDOt8nnz%2Fm0x4ZoJ8j68nzNGal2MCP0BTyOF2gdmZ4%2FT8KmHI7P0w4b%2BGvQY6pgGencus2mtNnZX0y77sYuBu4KWypZcWXPKW%2FL%2FF%2FmWMi66nkDc0P5RlaI2BHGn4xD7bIkwUo%2FhZkKGDPkeSfF%2FJwaQXIg2Tamr3Yx7Ccdqot5MXTExVntCsrQNTQO8%2Ba7Gphd4tZE3nnsqQD8I7kmbOlQCn5Xti%2FSScImuNB6hz%2BKdBM9x0V0env%2BHQ6sspFQyJbhR6g5%2BCKAkKbXTm8YeD4byHu8VM&X-Amz-Signature=38a5b7c4cb3b136a15d712240f9d8e21c472f5892aa7c40960042a0945cc71a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFB33EER%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFiBMK%2Bdgb%2BLYHzJrGfNhLyJIHU0WnkgA6CRF28gcXU%2FAiBTzuoX5p85WtyMP1ooh6IxWxRHLVqGgWHe9BoY6LS6rCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMc54aSUEvlqQUrA7eKtwDXdMk6lycLvxZs6ymeDL5u6k%2FyDB4B%2BNumj3NaRF26BVrrjUZU7zNGjOAioz4EM7qG8dnTMHXJsqgTrSe0oTyZghoDSu1dfFnI8uSeZi9HG5bDfmklAK1MsG9j7FEqGlnzOvDu6Xvwah1eym6PPUTcRoaTyq0qnvKT22Aj2N1XYMK0VkJ59GLxHUqOTLAIRd6ULnxC6DN9mK6QUKxfxF9JNV5ISqTIer%2BBFXZ6WwYunB2ltKrqCE3cmqhWO1%2BZn9qpnsQzoA19UpqkD4TF5yrxAmhmBSQAdFDxOHuKF3hSAiwYhx4lXkhJN4XYmU31dBszHBPNK7sLhpxKRilzFKprDPYUfMUdImeFMsFWQ%2BPaXZoFpeoaV276C9XzgY%2FGQhj0fnIj9aEmXoqdiiiYTuIYW%2BsHvdtQTWi082HBRWZYMUJHBz2b4fmdwCAbm4BraNfvbwiqDxaaRDAbU5LcHqqNad9QOCNaJAtvd5k0h9mdldGknBulrwFUi8PFe4vu%2FQCdPAi9EWgTECJCr8qwPgA%2BTPZ7fj2fFuY9NGn5h6FMHJPJOGfrAIabw33Me8qNjeZvlAsqnIZDOt8nnz%2Fm0x4ZoJ8j68nzNGal2MCP0BTyOF2gdmZ4%2FT8KmHI7P0w4b%2BGvQY6pgGencus2mtNnZX0y77sYuBu4KWypZcWXPKW%2FL%2FF%2FmWMi66nkDc0P5RlaI2BHGn4xD7bIkwUo%2FhZkKGDPkeSfF%2FJwaQXIg2Tamr3Yx7Ccdqot5MXTExVntCsrQNTQO8%2Ba7Gphd4tZE3nnsqQD8I7kmbOlQCn5Xti%2FSScImuNB6hz%2BKdBM9x0V0env%2BHQ6sspFQyJbhR6g5%2BCKAkKbXTm8YeD4byHu8VM&X-Amz-Signature=54da534df5b028092d9f1a85e36cfea9028457406663b31e2220effbe4340fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
