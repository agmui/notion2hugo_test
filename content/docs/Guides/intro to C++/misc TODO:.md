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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6JM4K7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5yJdA8%2B5Qxf8699FQhnzvUTaZtHtGXNW33P6G8pNn8AiB3o25xfYmA8weosCZFZGO5ZZjEP43gsxzTSMIF%2BNn9dir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMXjzSi8d65lYLda0bKtwDABnKsfi0Misx%2F3k%2BCBBNWvKr4qwdCqEnVLU0SwhTiQod0ma9CaFiY8zk%2F2gTHYhKNVPKQ5EVunCjDzJVGLgyjyS8SqwuPfeyMnuSJalikRBvO5LHvgrgzuTKVKh4neJy7W1FNDdgPY%2FUrQ1ficWNMV9p4%2F%2FG11ZESGlaH2Qv0EY9ZdioyesbU5R2t%2Faa95xFNhkMLa5%2BN64gLv25SMlQf9V8tYhUqvdR4OFOA%2BTF1sUEogYhuwETQLWvBRZtSuF0HtN4Kkwl2PQwqwg8yHerSoyFGxDb%2BRyWqf39VTWUx7RLqoLr4ftQxy4YAH%2BKWN0ntxuA2H8iuUBniEx7%2FmyECEkciJvJfTuvMO9TEu7ffri2W%2FRennCACtFOnVOC9mxUuLUMhGsAWk0Hdw74fzq1F29F2T1h0qI5%2BVhISx9Z8twesCj0QZrwzJmblhl4lYhjCLNf9pEmR6AwEyh5W3V6Cxv0nb0NoRS%2Fp28blGMxoTACwDz3T0kX8%2FUgZpJ6u2itudzOu8bD8a%2BEtq7jruTMPoPhYFoVXvCjJWJMvzF6Zm%2BtyfYZpwiGm4Gq8qcvlCJPIOXmSSnz3HryCPo9bMxXl20HsSJ%2Bag5sNEh6iS9EI8b%2Fah5uqajykP5i3jcw6%2B%2FmwAY6pgEBtKQk9QL7oz3qbFL9Z7JMtX%2BhhJHYPoeFXrsWUWqPFR1s7GBhQhxhGXM%2FGPSw2GblyVS3K33Lz68ITnWz7oWG3CvhDBzYH9LeXJEWKx2ldQMn5UzTmfyLAyR4cqwWgDql3ImGH9VB4JwDTw6ggN0nngDHkGp9h7Mej55DFHEPgmyThxMvPskCwJPa5QbiZwAcIfYyR%2BrbhZTCjRiLuZMujrA4HWLT&X-Amz-Signature=1c1cf8252ab5afe73cfdcdbc6f22a2f7468b335e95dc5fe8aeeba9eaa71da1de&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6JM4K7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5yJdA8%2B5Qxf8699FQhnzvUTaZtHtGXNW33P6G8pNn8AiB3o25xfYmA8weosCZFZGO5ZZjEP43gsxzTSMIF%2BNn9dir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMXjzSi8d65lYLda0bKtwDABnKsfi0Misx%2F3k%2BCBBNWvKr4qwdCqEnVLU0SwhTiQod0ma9CaFiY8zk%2F2gTHYhKNVPKQ5EVunCjDzJVGLgyjyS8SqwuPfeyMnuSJalikRBvO5LHvgrgzuTKVKh4neJy7W1FNDdgPY%2FUrQ1ficWNMV9p4%2F%2FG11ZESGlaH2Qv0EY9ZdioyesbU5R2t%2Faa95xFNhkMLa5%2BN64gLv25SMlQf9V8tYhUqvdR4OFOA%2BTF1sUEogYhuwETQLWvBRZtSuF0HtN4Kkwl2PQwqwg8yHerSoyFGxDb%2BRyWqf39VTWUx7RLqoLr4ftQxy4YAH%2BKWN0ntxuA2H8iuUBniEx7%2FmyECEkciJvJfTuvMO9TEu7ffri2W%2FRennCACtFOnVOC9mxUuLUMhGsAWk0Hdw74fzq1F29F2T1h0qI5%2BVhISx9Z8twesCj0QZrwzJmblhl4lYhjCLNf9pEmR6AwEyh5W3V6Cxv0nb0NoRS%2Fp28blGMxoTACwDz3T0kX8%2FUgZpJ6u2itudzOu8bD8a%2BEtq7jruTMPoPhYFoVXvCjJWJMvzF6Zm%2BtyfYZpwiGm4Gq8qcvlCJPIOXmSSnz3HryCPo9bMxXl20HsSJ%2Bag5sNEh6iS9EI8b%2Fah5uqajykP5i3jcw6%2B%2FmwAY6pgEBtKQk9QL7oz3qbFL9Z7JMtX%2BhhJHYPoeFXrsWUWqPFR1s7GBhQhxhGXM%2FGPSw2GblyVS3K33Lz68ITnWz7oWG3CvhDBzYH9LeXJEWKx2ldQMn5UzTmfyLAyR4cqwWgDql3ImGH9VB4JwDTw6ggN0nngDHkGp9h7Mej55DFHEPgmyThxMvPskCwJPa5QbiZwAcIfYyR%2BrbhZTCjRiLuZMujrA4HWLT&X-Amz-Signature=ca0d8b3e9125742c4a433a4b8c742e83b5eeb9ccdb28cbb59a15c31b7ff84022&X-Amz-SignedHeaders=host&x-id=GetObject)

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
