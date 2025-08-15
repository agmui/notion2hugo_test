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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BU6ZTMA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHUagouKrVzNhJFKsargDMgrG3dmWZuJRJwbAi97aFjwIhAMYuXOJxN2gQExPHmSrlYvUDF8dVAeXATQwTEP%2F1B5ilKv8DCGcQABoMNjM3NDIzMTgzODA1Igzh9eLFw7A7wcHZKx8q3AM0JQIhR%2FO5cv6jEMC6HM%2B%2By98osP5j0B8pAutPYweCn7M%2FeJzqkIQe4rLZrsuCVpISCdlIDffTTYoiammjpiJuonWZTFz2eOmrG2hcTx1r4hgje2flsqi%2F9BrjQvy%2B2txLjHyagQAa7RYu6IKlBQ0LJCZmjZZl4M8gO1ZtVUUa0sArbELmtnFSggMYriElhlapo5iq9spC1hrZ9F1r7dqfHGclJ%2FinTnpHxw23w%2FZIsDqs9DVizVg8ODvKIZeuoKcB7zIXSIUBargffJABUGtejxI%2B%2F93tb0uXxqAhI5GsBgyK8Du7CoJA3vPzmM6%2F4pGWApkCd6JVLxLedzoGDwfQUYTHc%2Fdgg%2BgnsSlBQuPEkb2%2BNHMVhWaTmg6v9aCKgQFsBOJZJS%2B4f4P7axgAcgBR2lAwiF1q7Ci%2BKCNKwyGVA50u1cYwZCmhxpktdMg3zErfIbW1usgbvboiA6F0zVc3beKknMZj0aJy%2F1f0rDtqrp17St2qRz69FXPLV9Vmo255eSl5uIp2D3C3KcyhNXZwLBT26USZfzBKDXCKLTXaZVxkFvnqOUdZ%2BpbQXfa0NOuegFzjNSpnIcXQZmcF3sV28j3Ndp%2FDK4hM2ta5MbNhQ257uZvPw%2BfCPIS9oTDx1%2F7EBjqkAUz0IJLZrZUEz0n4xjoK7fMYPcKGTkC5OyWxLhASyfzM5uVomFd2um2dtw%2B09dPz2uPXkbCTH3CNAmEs7ffGYMqqYp1%2F7soRNImVg7b02aEyU8Z1Mw046Xk10EmLpDGWb57zKWQMWm1eEWn%2FpwPMw3xOv1SvOcBW%2BYvRepQ%2BdfslJE8PtI1PByWxmYKcXRlAaUAmT%2Fb8JXlcfsV0PkVBL3OZ%2FvkX&X-Amz-Signature=cc9b3b0857f532e09d2df24a1fdc96cffc36a392230f1ee9d256800a0a6461a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BU6ZTMA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCHUagouKrVzNhJFKsargDMgrG3dmWZuJRJwbAi97aFjwIhAMYuXOJxN2gQExPHmSrlYvUDF8dVAeXATQwTEP%2F1B5ilKv8DCGcQABoMNjM3NDIzMTgzODA1Igzh9eLFw7A7wcHZKx8q3AM0JQIhR%2FO5cv6jEMC6HM%2B%2By98osP5j0B8pAutPYweCn7M%2FeJzqkIQe4rLZrsuCVpISCdlIDffTTYoiammjpiJuonWZTFz2eOmrG2hcTx1r4hgje2flsqi%2F9BrjQvy%2B2txLjHyagQAa7RYu6IKlBQ0LJCZmjZZl4M8gO1ZtVUUa0sArbELmtnFSggMYriElhlapo5iq9spC1hrZ9F1r7dqfHGclJ%2FinTnpHxw23w%2FZIsDqs9DVizVg8ODvKIZeuoKcB7zIXSIUBargffJABUGtejxI%2B%2F93tb0uXxqAhI5GsBgyK8Du7CoJA3vPzmM6%2F4pGWApkCd6JVLxLedzoGDwfQUYTHc%2Fdgg%2BgnsSlBQuPEkb2%2BNHMVhWaTmg6v9aCKgQFsBOJZJS%2B4f4P7axgAcgBR2lAwiF1q7Ci%2BKCNKwyGVA50u1cYwZCmhxpktdMg3zErfIbW1usgbvboiA6F0zVc3beKknMZj0aJy%2F1f0rDtqrp17St2qRz69FXPLV9Vmo255eSl5uIp2D3C3KcyhNXZwLBT26USZfzBKDXCKLTXaZVxkFvnqOUdZ%2BpbQXfa0NOuegFzjNSpnIcXQZmcF3sV28j3Ndp%2FDK4hM2ta5MbNhQ257uZvPw%2BfCPIS9oTDx1%2F7EBjqkAUz0IJLZrZUEz0n4xjoK7fMYPcKGTkC5OyWxLhASyfzM5uVomFd2um2dtw%2B09dPz2uPXkbCTH3CNAmEs7ffGYMqqYp1%2F7soRNImVg7b02aEyU8Z1Mw046Xk10EmLpDGWb57zKWQMWm1eEWn%2FpwPMw3xOv1SvOcBW%2BYvRepQ%2BdfslJE8PtI1PByWxmYKcXRlAaUAmT%2Fb8JXlcfsV0PkVBL3OZ%2FvkX&X-Amz-Signature=8f66866c2dc42100d50c040bab0a59abf2234faa001e57c4150a6c9cb63907f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
