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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTLZYJ3B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqljTGNqXzPw95zBhob%2BSxeiA9UTTrQSa%2BJOf9ZawL4AIhALyv1LNmyt1e%2FeOPQ8mggVpYVxLNmA%2F07DdFq6SzJaKpKv8DCDgQABoMNjM3NDIzMTgzODA1IgxWUrveH4TGqFLKv34q3AOVUaLg10ht6X%2FYqvGSi5FoDJX7NgjmCAZO0yIqS21OXu9aIx%2BPOWwwxoO0hl2vw8qlhm4TKeruBnH7HLZpE0OojSToH3rdjAc6Tz1FCTKM1mnc54BiAQtF6rt5%2BL0OL6fagddkbVLoV40OWrbq4y18oY5tJU3Y1YL9XNMowJTUDiCv55NI17CSoU4x9jzenou4e%2Bf0W8MnwxXI%2B3t5mg4SZYF9XVwjTm5P7wkVxELWpB4SQXw4rTaU6PdEBJULAuGjCDn8AKGNxfyD5yRtkPk6bc60hk5205LFQ5642v3zl4g07jEKN%2BWpMy3T7QHdA%2BaiuSi7%2FC96dAHlSedz9tRvlux9e%2FXeM3XJ%2FvmbS6qbFo7vxsHyRbaYysGnldF%2Bei5tRoehWX9rpXXl3Tapir2fTz%2BS3OIwQ1uGZSVWJ8rzXEQjlQZ3bM%2F%2BX%2FZctVUCIy6DMhNFVbD2yryKPL4juiGsAzqn6kF4xXqqUQpLHUaFOLEBFGSQbFDq0ngjS7A5M3jIURUMlCdPnoaD86%2B4Es8C%2B%2BUXftHF22APWtqFdGul%2B0hOiJKh9WBy1fgYRHaj%2Bpd3wI8asSwO9mrmbVskq6fUo1dFxwWIotaR%2FfUsp8AkyX7fGIsdQVsauHYZjjDkyKi%2BBjqkASgnuiccRTCUAAqdTTTcV19QIE7weu0QU0L65RRiXAzv9oc3ZZYEHLzxrEeHaMgtryWO5kY%2FbvhC6QnQxp8q0sWGn4bFoCSMWOVH2MSkK4UAFrrRHOxHhjG1rlQ7e6n%2BdWCGRPiRASqwB4j5MNDSDXyw9yO44dtu9b6FiaZiITuMcjwX8Koj%2Bn2oDw1w1JNPGKMB8uDTjFI%2FHfDIj4AwGaTKvwfx&X-Amz-Signature=54165b466f6a72a82e4e86f6633808bf086993959041b040d48574aa09697e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTLZYJ3B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqljTGNqXzPw95zBhob%2BSxeiA9UTTrQSa%2BJOf9ZawL4AIhALyv1LNmyt1e%2FeOPQ8mggVpYVxLNmA%2F07DdFq6SzJaKpKv8DCDgQABoMNjM3NDIzMTgzODA1IgxWUrveH4TGqFLKv34q3AOVUaLg10ht6X%2FYqvGSi5FoDJX7NgjmCAZO0yIqS21OXu9aIx%2BPOWwwxoO0hl2vw8qlhm4TKeruBnH7HLZpE0OojSToH3rdjAc6Tz1FCTKM1mnc54BiAQtF6rt5%2BL0OL6fagddkbVLoV40OWrbq4y18oY5tJU3Y1YL9XNMowJTUDiCv55NI17CSoU4x9jzenou4e%2Bf0W8MnwxXI%2B3t5mg4SZYF9XVwjTm5P7wkVxELWpB4SQXw4rTaU6PdEBJULAuGjCDn8AKGNxfyD5yRtkPk6bc60hk5205LFQ5642v3zl4g07jEKN%2BWpMy3T7QHdA%2BaiuSi7%2FC96dAHlSedz9tRvlux9e%2FXeM3XJ%2FvmbS6qbFo7vxsHyRbaYysGnldF%2Bei5tRoehWX9rpXXl3Tapir2fTz%2BS3OIwQ1uGZSVWJ8rzXEQjlQZ3bM%2F%2BX%2FZctVUCIy6DMhNFVbD2yryKPL4juiGsAzqn6kF4xXqqUQpLHUaFOLEBFGSQbFDq0ngjS7A5M3jIURUMlCdPnoaD86%2B4Es8C%2B%2BUXftHF22APWtqFdGul%2B0hOiJKh9WBy1fgYRHaj%2Bpd3wI8asSwO9mrmbVskq6fUo1dFxwWIotaR%2FfUsp8AkyX7fGIsdQVsauHYZjjDkyKi%2BBjqkASgnuiccRTCUAAqdTTTcV19QIE7weu0QU0L65RRiXAzv9oc3ZZYEHLzxrEeHaMgtryWO5kY%2FbvhC6QnQxp8q0sWGn4bFoCSMWOVH2MSkK4UAFrrRHOxHhjG1rlQ7e6n%2BdWCGRPiRASqwB4j5MNDSDXyw9yO44dtu9b6FiaZiITuMcjwX8Koj%2Bn2oDw1w1JNPGKMB8uDTjFI%2FHfDIj4AwGaTKvwfx&X-Amz-Signature=e939f31f31a2b848ae7d24e242e606719a80630716d03bb9cf2c2fa57bf82e60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
