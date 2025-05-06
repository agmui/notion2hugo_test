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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5J52ZJ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ybASf3eEIDEGUNF1jaMAew27jnJvXaFeRJG4Npv3JwIhAMrZGosLvErHnr37bEke7H4xz1xpkJap%2FTtI9vq4T7PxKv8DCEwQABoMNjM3NDIzMTgzODA1Igw54jcLaB62IGNZn0kq3ANWADc4HDc7L0hydvVFbiQq7Jg7dVqSOAMWN%2FfVxOHZjzMG5k7DMKw08GexsrKbj4LTTFlD5htQHAtZx5Nj9Q1kujUb7acQ7MxjYsj%2F52RLPfernT4kicAHx3XHyuQVBzaDLdQnUz8i%2BiN8GRHqg1CWJ4%2FdWQysRm70hL9Jcx4gHEqNjHH%2BHcEAKDOimTQ4zxGjDMOw%2FhS1z9Zr6kGYYB9AMzOwZwvxxoD%2FbxF9%2FGZ1bGLoI5i4moVewQJRWb65Iugyh45Y2AYOEnKMXsPthZn56UvmDjcTml06SPoO2Ka6h1n%2B458tk6dG2k%2BcfYFHg9sF%2BHB%2Fn0cym1KhDxL8GpEh3bnRIhz12GMAHV%2Fcca1HMi5ewr8m%2B8IUk06FDWNXrkIwaFbEbMWvkPeFqt0esn4e0H3Ay2s%2BbTB0mrkMIBR8DSYv472vP4FWz1z%2FuejcDCEKsWaV9CgwVLKbxn9%2FOTMQwfX5XK13gUVoSEywp%2BxGTVjUflwKCmIEnB07p2XUfT8C8huauWGfP66Lbd9vkWAxJgY7yipjn5v%2BOs%2ByiqW9%2FM0Y8JnCdYv8BaVzeCfixLhfWG0IAS9vWI1KWVs5xTT2FkoUqZb%2BPgvjrW1kVqDPZz2lkHERcFUmr21YKDDbs%2BnABjqkAZ9%2B8Dh7VqyZfocLi28W1j8xC%2BTtUCczgqzR3regYmRVZvbSEgxlRPpxRBFv7fFs1VSGOne4Z%2FwfPy4AcMDJaIGGIKIsHe%2BQBFYjOhfg5i2AIq9%2FVpuYwuwnDcYGw88PTaleEgBj3XjjxaCf5%2FYMbFht%2FVQLbHZqs0BZNVA5yggA72v0SQRzgZVful4rjkfYg3DpRG4k2YGQReKTNB%2F6p%2FrIr%2F9M&X-Amz-Signature=96412b6237a8b8f7271e1f6a641cf4032cc85d820a20a0ee9e4ab8fc8d70f12f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5J52ZJ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0ybASf3eEIDEGUNF1jaMAew27jnJvXaFeRJG4Npv3JwIhAMrZGosLvErHnr37bEke7H4xz1xpkJap%2FTtI9vq4T7PxKv8DCEwQABoMNjM3NDIzMTgzODA1Igw54jcLaB62IGNZn0kq3ANWADc4HDc7L0hydvVFbiQq7Jg7dVqSOAMWN%2FfVxOHZjzMG5k7DMKw08GexsrKbj4LTTFlD5htQHAtZx5Nj9Q1kujUb7acQ7MxjYsj%2F52RLPfernT4kicAHx3XHyuQVBzaDLdQnUz8i%2BiN8GRHqg1CWJ4%2FdWQysRm70hL9Jcx4gHEqNjHH%2BHcEAKDOimTQ4zxGjDMOw%2FhS1z9Zr6kGYYB9AMzOwZwvxxoD%2FbxF9%2FGZ1bGLoI5i4moVewQJRWb65Iugyh45Y2AYOEnKMXsPthZn56UvmDjcTml06SPoO2Ka6h1n%2B458tk6dG2k%2BcfYFHg9sF%2BHB%2Fn0cym1KhDxL8GpEh3bnRIhz12GMAHV%2Fcca1HMi5ewr8m%2B8IUk06FDWNXrkIwaFbEbMWvkPeFqt0esn4e0H3Ay2s%2BbTB0mrkMIBR8DSYv472vP4FWz1z%2FuejcDCEKsWaV9CgwVLKbxn9%2FOTMQwfX5XK13gUVoSEywp%2BxGTVjUflwKCmIEnB07p2XUfT8C8huauWGfP66Lbd9vkWAxJgY7yipjn5v%2BOs%2ByiqW9%2FM0Y8JnCdYv8BaVzeCfixLhfWG0IAS9vWI1KWVs5xTT2FkoUqZb%2BPgvjrW1kVqDPZz2lkHERcFUmr21YKDDbs%2BnABjqkAZ9%2B8Dh7VqyZfocLi28W1j8xC%2BTtUCczgqzR3regYmRVZvbSEgxlRPpxRBFv7fFs1VSGOne4Z%2FwfPy4AcMDJaIGGIKIsHe%2BQBFYjOhfg5i2AIq9%2FVpuYwuwnDcYGw88PTaleEgBj3XjjxaCf5%2FYMbFht%2FVQLbHZqs0BZNVA5yggA72v0SQRzgZVful4rjkfYg3DpRG4k2YGQReKTNB%2F6p%2FrIr%2F9M&X-Amz-Signature=423dd84d062fb6f52a70c4fadc28309c193b721541174cb2f2a3bc90dc9ae03d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
