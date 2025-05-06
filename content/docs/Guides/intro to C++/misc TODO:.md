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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662INPNUYM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2KRJPfvx5trg39geSF%2BquZ3aKEumED2iN1flFHPf1AIhANwqP9BgZtoeaFOUNO7Cpoh8y6HJpetU9k16pzH3kOWnKv8DCDwQABoMNjM3NDIzMTgzODA1Igx45h818sh4oCELzcsq3ANFqeHZXdQnnXuP8xoGBh8Ln1gmrLJDSsV%2F2Kdat5RmMQ39Y60u0MSItgYurp6GyUgTnL8PU73H1ioNM6Nic%2BU5GjqnROs%2FgZdnESynXmi6PEiPKw7Gf3MCpGqQARLfFs5OjxYxP04y7czUGCGCrt58ytYaMUqoyx9kSy8QW9rZn%2FqO17wi%2FY8S9D7kAb%2FFmARZEG29QAL28r46ydY93pVUOX6XW9q0Rmx373Wm%2B%2F5DrNwytf86mi2kTGyAz3aucQOi9tEaa%2BIkcG85y1n6rqxIPGDzSTlL%2FexuEwToVaC7Xd5CrhdJb3tyGM9BvwtV63l7aQKjAAn0ErNpG16PbeR8uRz04u5VBj2LUdzOYsxzDrcd7GuikeBYCp%2FtXnrc%2BNWwqifhSjDx2KL%2Bv0UFrZf94m1JBRixDwgc7oha5yNguFO%2BIJ3aXFI0TAYxfwQHggjwqn4TFhZKqAzkbLJY8GtfoxUPteO7ZllRHm7gyf9mCKfyTVBxZIc%2BO%2FKWIkvKeWzr6JxCOEXGvEtf54I5YlLz99clYrzYVIijMGun9pBhCS8AToPQQdZfWe87pVHDoZwvZJUg4yfJ0%2BhGHD2iK1c4d7CDQNroN%2Bd4Qaao8N0dteNCoR7zuQB%2FA5IfmzCn%2FuXABjqkAY%2FMcoH0kEqY1jpKDUPNI3M%2B7t%2F6NemM8THhfnVC2rhlkMwvXYuV7KogLV0Cycwkhgxc2S%2FhWJRYTEmr79P0N0XEaO9Ajhs72UXHNF%2BDa%2B42bdnT%2BPy2w8HQ1fiBoTsjC8GTdmVgXxkREsc4%2BWy6zt78KZi%2FQrSD2f4x9vrtR3sRfSDPZqpkCU1Z6M1DiE5yFf4fN0Mn6kwRGIkCqWkvFOpPjSLq&X-Amz-Signature=a5a1a0f2882802ce4baa8387b34e4cc5e9b8eb1bbdd7e74d55837eb8842b5362&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662INPNUYM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2KRJPfvx5trg39geSF%2BquZ3aKEumED2iN1flFHPf1AIhANwqP9BgZtoeaFOUNO7Cpoh8y6HJpetU9k16pzH3kOWnKv8DCDwQABoMNjM3NDIzMTgzODA1Igx45h818sh4oCELzcsq3ANFqeHZXdQnnXuP8xoGBh8Ln1gmrLJDSsV%2F2Kdat5RmMQ39Y60u0MSItgYurp6GyUgTnL8PU73H1ioNM6Nic%2BU5GjqnROs%2FgZdnESynXmi6PEiPKw7Gf3MCpGqQARLfFs5OjxYxP04y7czUGCGCrt58ytYaMUqoyx9kSy8QW9rZn%2FqO17wi%2FY8S9D7kAb%2FFmARZEG29QAL28r46ydY93pVUOX6XW9q0Rmx373Wm%2B%2F5DrNwytf86mi2kTGyAz3aucQOi9tEaa%2BIkcG85y1n6rqxIPGDzSTlL%2FexuEwToVaC7Xd5CrhdJb3tyGM9BvwtV63l7aQKjAAn0ErNpG16PbeR8uRz04u5VBj2LUdzOYsxzDrcd7GuikeBYCp%2FtXnrc%2BNWwqifhSjDx2KL%2Bv0UFrZf94m1JBRixDwgc7oha5yNguFO%2BIJ3aXFI0TAYxfwQHggjwqn4TFhZKqAzkbLJY8GtfoxUPteO7ZllRHm7gyf9mCKfyTVBxZIc%2BO%2FKWIkvKeWzr6JxCOEXGvEtf54I5YlLz99clYrzYVIijMGun9pBhCS8AToPQQdZfWe87pVHDoZwvZJUg4yfJ0%2BhGHD2iK1c4d7CDQNroN%2Bd4Qaao8N0dteNCoR7zuQB%2FA5IfmzCn%2FuXABjqkAY%2FMcoH0kEqY1jpKDUPNI3M%2B7t%2F6NemM8THhfnVC2rhlkMwvXYuV7KogLV0Cycwkhgxc2S%2FhWJRYTEmr79P0N0XEaO9Ajhs72UXHNF%2BDa%2B42bdnT%2BPy2w8HQ1fiBoTsjC8GTdmVgXxkREsc4%2BWy6zt78KZi%2FQrSD2f4x9vrtR3sRfSDPZqpkCU1Z6M1DiE5yFf4fN0Mn6kwRGIkCqWkvFOpPjSLq&X-Amz-Signature=85d051d8f482a5fe2188d3c8d997ebe08facff9238ea737d78fbbbdbb95637a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
