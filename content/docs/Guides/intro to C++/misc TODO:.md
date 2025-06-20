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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNRJ3HA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUZFuGU9y7%2BfvkH6OQTJsjXyX9%2BntwgfsywYgpyXxfjgIhAPynAYsqO1GxOXfIRYlwIj0%2Bm71rYtgGY5JlHhZVJR6aKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpQ1s7q4hmU59QvMcq3ANES%2FAjYOzdzBi12oaL5AEo1JOzu1Pya4ZTW%2Bn2oRuW5ZSsYuxxRMY%2B7AXqsAR0bkaHMCCy6oL0rQ8QfkOshWbFYFsujZMLVG7zD5hidlKSBvH8VCWqCuG3OkVYmIDIdi9RqgGhWEivqrkp4KKnguJCxifc%2BLGJvzT%2FTUQ4idBddXNhxPcqsqKuWPrqrDcRBS0itW0P8v6Gahk%2BqAosJkY97%2BpUx2qAyFhZ1qGeeLR6XP9PsBl%2BEYjlrGH2Whngjo4lyg2XBpLdnW0IwwOTXrPaGTzV%2B3i9C8lXWmlF2d%2FTNXW8p9avrOu7QfIfYrr8mN5cXBjZ9pwgHT%2FnK1emZnmX23NCnATWmW3TCNi7wMfSEuaArVuU70FT4hvDa8%2BNuNdU1Ut4jB9irYV37Kv1TuH5KuhDbrLbO5DUqoHQxljOTWF51ALn3bbkBLkMEmIuOBNbida%2FkS3OagUJzYBB74XRqNUZuprHZQlOmY7ACpiR9PbAQK%2FKn4o%2FtEt38QwUZsE16TMlJrS%2Bbr3nXltm%2Bp7QezFPpa20y1Kd%2Bm0%2BxD9EgnzkZJ0n3drOEo2YmQHL7CtLAi8rwDANexOfNCHonPemNIznKnV876gdEu%2FNqVgjLXp0dD9TPWpSgX6uyTDrpNXCBjqkAUX9ZHhrrEii3ggaW4TPRtaEjALXMfQrm5uzSwIusIDSZ6%2BhhZhZaMGS%2FGjmvby2yOnvE5mCtMDTfvBJykihFfN18Xzx7y2AHFMTVRIZ77TR8IGAhKgB7MRBKDihq3kjmKT8T7ns2znLkrR6yZZXD%2FRV2QFtdQv0kvIgoRUrkYwM73ClmyLu7jWXYhTNXAssFv7ni9aqQHOCP2EfiiYMdvUCsdyX&X-Amz-Signature=870a09eae95c82da9d0b3fdcbc88ffbb2a511e984b2924933775d27343d5999f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNRJ3HA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUZFuGU9y7%2BfvkH6OQTJsjXyX9%2BntwgfsywYgpyXxfjgIhAPynAYsqO1GxOXfIRYlwIj0%2Bm71rYtgGY5JlHhZVJR6aKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpQ1s7q4hmU59QvMcq3ANES%2FAjYOzdzBi12oaL5AEo1JOzu1Pya4ZTW%2Bn2oRuW5ZSsYuxxRMY%2B7AXqsAR0bkaHMCCy6oL0rQ8QfkOshWbFYFsujZMLVG7zD5hidlKSBvH8VCWqCuG3OkVYmIDIdi9RqgGhWEivqrkp4KKnguJCxifc%2BLGJvzT%2FTUQ4idBddXNhxPcqsqKuWPrqrDcRBS0itW0P8v6Gahk%2BqAosJkY97%2BpUx2qAyFhZ1qGeeLR6XP9PsBl%2BEYjlrGH2Whngjo4lyg2XBpLdnW0IwwOTXrPaGTzV%2B3i9C8lXWmlF2d%2FTNXW8p9avrOu7QfIfYrr8mN5cXBjZ9pwgHT%2FnK1emZnmX23NCnATWmW3TCNi7wMfSEuaArVuU70FT4hvDa8%2BNuNdU1Ut4jB9irYV37Kv1TuH5KuhDbrLbO5DUqoHQxljOTWF51ALn3bbkBLkMEmIuOBNbida%2FkS3OagUJzYBB74XRqNUZuprHZQlOmY7ACpiR9PbAQK%2FKn4o%2FtEt38QwUZsE16TMlJrS%2Bbr3nXltm%2Bp7QezFPpa20y1Kd%2Bm0%2BxD9EgnzkZJ0n3drOEo2YmQHL7CtLAi8rwDANexOfNCHonPemNIznKnV876gdEu%2FNqVgjLXp0dD9TPWpSgX6uyTDrpNXCBjqkAUX9ZHhrrEii3ggaW4TPRtaEjALXMfQrm5uzSwIusIDSZ6%2BhhZhZaMGS%2FGjmvby2yOnvE5mCtMDTfvBJykihFfN18Xzx7y2AHFMTVRIZ77TR8IGAhKgB7MRBKDihq3kjmKT8T7ns2znLkrR6yZZXD%2FRV2QFtdQv0kvIgoRUrkYwM73ClmyLu7jWXYhTNXAssFv7ni9aqQHOCP2EfiiYMdvUCsdyX&X-Amz-Signature=0e4b3de904ee300da67f65786ec43b7972044d6c54b0dc33c42c2836bb3a649c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
