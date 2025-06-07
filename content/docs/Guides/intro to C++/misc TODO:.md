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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YTYZ6L%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDHpVeTsXPE30JetMZF2bb6zYQs1p7cf3xNRZgDL%2FQAiAuZWcMvfO0WaSQlsXrwI82t8xrn5GrCsMxQEbfy%2F4eECr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMEb4LsxRBc2xj%2BqwrKtwDM6c%2BIdSz88InX%2Fav2zn1poF4IOn1z6lOn6p0xpJj4YWyPFhboIpF%2BXFTSQsU5cS%2Brdjr0suFC2ybAtSFleVMe2UId12pUJmMZ5oFnHJ%2FkZWZ7UCLA8%2BGW5kaxEwcLFQ8rQT4elsG8asiHbKnT0lbcn74hsWrdXjIDBpb6GifKhUohkZqRNqL0NePLcNjecEQdzyamSrUHT1hdBZsqXkvS9xzVlXt6K%2FpX8DhKSPrECPgVb5zMf7ZZwrqTnZtvW9AtBSSawKUEfOuZUcoxD82NW%2FiGwOdJDtGkiILszBRyvKK%2FZQhSjK9K16QdNsHcx27kRhiAM6VabUoCpOIFASD%2BF7pwJCmwVHzIGJxuQQqUSOplAIJu92FAuukKEyQjVV%2BFYTexKsf%2FbA4feMEFRqL%2BWqvN8xa2qDO6E1p9H5AUOqaH9UDy6agHHsZ5tetP4Cye05Ng%2FLQzR7sMO4X8Boqqr6qkz1FUVGUmrOFuQ6mgxaK1mAvG8O33E9f9wFEHAE3Jp1svZ0qmr7Y5dER%2FpxPbQc9nECHYRrDKU7CtVqzhJsBKzzb9CYE%2F56aMCSw%2FCfKaXbNnYLw4VMG8PIzOBEE%2BDkAWlgNpNYPTGtaGBEmLDgcIv%2Ff2gmRcv2hVWwwrIGRwgY6pgFZ1P1e%2BsfIjP9LKAzbW4BnLyJb62K8QoTDW8%2BRfLFnYeCw%2FkobS2XY%2FHHw1bX0KnGj8Z0Q%2BIsW61cMEoVID%2B%2FOM09oKcvYkTId9FG0S3470svWiOL6WykiC5l1SVbknXg53lkSUndY9FkS7bp6h7Io0iMrRs1xrKdrdrsGVPdrYPDoqwjF5L1Cf5CgVXBgqCo2%2FGy8F%2FygFLXdiIo932EIc2wkBeVD&X-Amz-Signature=c6b834be19ddf5f4808ccd59f7ae76b5372e64cc2d855127acbc2eed8e13f0de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672YTYZ6L%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDHpVeTsXPE30JetMZF2bb6zYQs1p7cf3xNRZgDL%2FQAiAuZWcMvfO0WaSQlsXrwI82t8xrn5GrCsMxQEbfy%2F4eECr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMEb4LsxRBc2xj%2BqwrKtwDM6c%2BIdSz88InX%2Fav2zn1poF4IOn1z6lOn6p0xpJj4YWyPFhboIpF%2BXFTSQsU5cS%2Brdjr0suFC2ybAtSFleVMe2UId12pUJmMZ5oFnHJ%2FkZWZ7UCLA8%2BGW5kaxEwcLFQ8rQT4elsG8asiHbKnT0lbcn74hsWrdXjIDBpb6GifKhUohkZqRNqL0NePLcNjecEQdzyamSrUHT1hdBZsqXkvS9xzVlXt6K%2FpX8DhKSPrECPgVb5zMf7ZZwrqTnZtvW9AtBSSawKUEfOuZUcoxD82NW%2FiGwOdJDtGkiILszBRyvKK%2FZQhSjK9K16QdNsHcx27kRhiAM6VabUoCpOIFASD%2BF7pwJCmwVHzIGJxuQQqUSOplAIJu92FAuukKEyQjVV%2BFYTexKsf%2FbA4feMEFRqL%2BWqvN8xa2qDO6E1p9H5AUOqaH9UDy6agHHsZ5tetP4Cye05Ng%2FLQzR7sMO4X8Boqqr6qkz1FUVGUmrOFuQ6mgxaK1mAvG8O33E9f9wFEHAE3Jp1svZ0qmr7Y5dER%2FpxPbQc9nECHYRrDKU7CtVqzhJsBKzzb9CYE%2F56aMCSw%2FCfKaXbNnYLw4VMG8PIzOBEE%2BDkAWlgNpNYPTGtaGBEmLDgcIv%2Ff2gmRcv2hVWwwrIGRwgY6pgFZ1P1e%2BsfIjP9LKAzbW4BnLyJb62K8QoTDW8%2BRfLFnYeCw%2FkobS2XY%2FHHw1bX0KnGj8Z0Q%2BIsW61cMEoVID%2B%2FOM09oKcvYkTId9FG0S3470svWiOL6WykiC5l1SVbknXg53lkSUndY9FkS7bp6h7Io0iMrRs1xrKdrdrsGVPdrYPDoqwjF5L1Cf5CgVXBgqCo2%2FGy8F%2FygFLXdiIo932EIc2wkBeVD&X-Amz-Signature=3000687a91ae4fba6bc533768e38a96f221382c567859639293967db338c366e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
