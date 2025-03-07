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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK7KGG4R%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV3OHMVdwof7Zdj2wMzHVWfc25uhoZC3B7aIDhErzegAiB5r2y2BxLu1qOFBMhp9BpqGTGoXwIh4VCKSCZcuT0MiSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMbGITy4xDGDj3hIDnKtwDu9cSOSHea3O%2F04diCund1RsmnefM1jYYSOLGP97qFBnTEwKnw7%2BSjGl7l1OkYfKtt2g4AH5SVeTWfaY3WDWgfsiX0Bn%2FBCTpl6tDSPMahMSp6d2tXWL5GQgxIOXSNFouSk5IRZrhAR8iy1IKpLM118CVYCoqlqNn3n%2F7u8afFRyXId5CkSCEct11upJ6zuN67rw0IZXmiKjzfnes3xzRSK4YNK7xgpxMVZjnm2XbPkalSK26CtGYQRYdXxkkcOtfz5zSF4LF4k%2F1teTtxvRI7dSaEpoJ8Itxy2EWHaAjJkaKOV4Qj6pMm8q2V1PR2CLO3d3aYXUXMmXeuw7HN5GTPS0aSASkzYE3Dwr6soNIUTtvFoFmk8Cj38syMvd64tlAgcxaevE1QdB6WP%2B45ytIExHeF3UQrztB2ToPz6wdxrhpKdNZso62mlcLeA4hfp1VXa7yV6mmjJLhQ9QT%2FgUaRvZkAXP2KKw7k9FAkrsFW91vz4z6MnVd1OIR04vW0lW2thT8bN6ks1R6yJXpi%2F7pR9YKwigY%2F7OoHvGQ1F9Xxsl7bWt8rKMMWc3Xb2GpsGHFToR7HmzhdqRTlHQqe8G2S1YqFVvYH7J6BhA4rxu59TRxhOqwwtcKVFobAHow78iovgY6pgHfnKRx%2BvDOWaHI1Eo5vpKtdQCoAreQ6WhjyIZSabDjmqnPoJUFJRHpLREW%2B4KBQ2s8tPcyn6MCL32yAG4j2is7XD8Mrkl%2B8du2umX5GNbqqF3f8KugDSAI6HhpHm03kkdJPqmLIIcGyVaqYYIKsKcqTtmwOIvPUurICmyfLflP%2Fd8CD56o0Gc1q0lX9OqWiLslZ0rpk01QPdrRJZNXBRinDoxiJ0hH&X-Amz-Signature=553bef86b30ed6dd8730e23de8eb6fd437fc8f675e91bfd8b425e8f3c57217cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK7KGG4R%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV3OHMVdwof7Zdj2wMzHVWfc25uhoZC3B7aIDhErzegAiB5r2y2BxLu1qOFBMhp9BpqGTGoXwIh4VCKSCZcuT0MiSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMbGITy4xDGDj3hIDnKtwDu9cSOSHea3O%2F04diCund1RsmnefM1jYYSOLGP97qFBnTEwKnw7%2BSjGl7l1OkYfKtt2g4AH5SVeTWfaY3WDWgfsiX0Bn%2FBCTpl6tDSPMahMSp6d2tXWL5GQgxIOXSNFouSk5IRZrhAR8iy1IKpLM118CVYCoqlqNn3n%2F7u8afFRyXId5CkSCEct11upJ6zuN67rw0IZXmiKjzfnes3xzRSK4YNK7xgpxMVZjnm2XbPkalSK26CtGYQRYdXxkkcOtfz5zSF4LF4k%2F1teTtxvRI7dSaEpoJ8Itxy2EWHaAjJkaKOV4Qj6pMm8q2V1PR2CLO3d3aYXUXMmXeuw7HN5GTPS0aSASkzYE3Dwr6soNIUTtvFoFmk8Cj38syMvd64tlAgcxaevE1QdB6WP%2B45ytIExHeF3UQrztB2ToPz6wdxrhpKdNZso62mlcLeA4hfp1VXa7yV6mmjJLhQ9QT%2FgUaRvZkAXP2KKw7k9FAkrsFW91vz4z6MnVd1OIR04vW0lW2thT8bN6ks1R6yJXpi%2F7pR9YKwigY%2F7OoHvGQ1F9Xxsl7bWt8rKMMWc3Xb2GpsGHFToR7HmzhdqRTlHQqe8G2S1YqFVvYH7J6BhA4rxu59TRxhOqwwtcKVFobAHow78iovgY6pgHfnKRx%2BvDOWaHI1Eo5vpKtdQCoAreQ6WhjyIZSabDjmqnPoJUFJRHpLREW%2B4KBQ2s8tPcyn6MCL32yAG4j2is7XD8Mrkl%2B8du2umX5GNbqqF3f8KugDSAI6HhpHm03kkdJPqmLIIcGyVaqYYIKsKcqTtmwOIvPUurICmyfLflP%2Fd8CD56o0Gc1q0lX9OqWiLslZ0rpk01QPdrRJZNXBRinDoxiJ0hH&X-Amz-Signature=e5f6e708377c8b261a01805dc080a1cc0f8cd3af2a72306e1217b861f240a11e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
