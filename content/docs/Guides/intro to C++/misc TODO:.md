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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCYDNUB%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDokTOJTdmBJ3zcgSyCcvN7NJZiXlAAzcgVcXxmTWByDAiA5AeTT01k1z0vrBz4ZhdpCjBESu8MdKcxcj7aDsFCW8Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMHm2Qp0LCBXaGW2jFKtwDgzJ0jvp6E7rsmR5%2Fn23Qc5rSJ8SNG7fD4ViMvA92hi0ViEpeBZueN8kZh1rlXH4m1l4OKMqVB0UhU%2B5P1te%2FkcyJGgrs%2Bys59S7c4Led70W1SccaeM3qB1EMHsg0HRrux52fEIjDp8M5DVLLeiRMVbxRufp1GfYbx%2FG2PO71VFIn26027sA%2FzngzIeXWfNxu197pcNz61bTdTGkwg28kyvCfNaEV3ZVl5UAKYTN%2F2p22UyHafQA1nQNrnNIme%2BZZEvj3Z8IbsiJZPaHSGvF6a6xVFPVt0owepzLg8wLtL5Ja6hGBTeUioYWUbmnZ%2F9ZmB7twF3WOVkC1asZI8tiN%2BkEDsp0KU0oReQJq5X1gkW9tscAbSkUwTfh2VhLZ1zL4%2BEHvIJVbfz7AntahAG1wVZ4%2BL4DWyTBeWmM87jdAO6Jc8kmCo3Y%2BcCZRmPD9u8AwIk1K%2FDD9PghaZH4A%2FV9A%2F3Nkqkw0yWiNPdZzXFPdAAI2%2BiTOh3rgQrUE4jjFojSRr%2BwwxsdWkQGXSov5hefqjg3cb1k3eW5of%2BIfcI3xJ2l9oF0UTvD4J%2BW2XUe2Q6kTL7p9q4pmVVYqcf7yQS7M2pCVKwqHuNQC66a15i%2BzM%2Bd2vU6GIMIMlQ2k1qUw2rGZyQY6pgGLdOYRGSTxP1crrvd61d7aOlbtzAT%2F97W6ciN%2FC36Q0LcvA4OPJFVAlXtrqdEShKjUjOAVn6kxdOpKuEUzcRYAi5EBXh1ELoH8xWqkL8O%2FcBA4iGxPmPJykz6ulg1tDSdE42W12M5dcj0QeQuRNQc%2BPASrw35y%2BZJoe3eiXJKmzJGJEtl3xaiGUqqqiMrwCbNLd%2FOzeYX9UAuq0QUtSh2g3Rkid3OB&X-Amz-Signature=fb222eec02b6f6569a88ee29fdc90c1c75958ce0f325de99134cde7e49d2c18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCYDNUB%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDokTOJTdmBJ3zcgSyCcvN7NJZiXlAAzcgVcXxmTWByDAiA5AeTT01k1z0vrBz4ZhdpCjBESu8MdKcxcj7aDsFCW8Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMHm2Qp0LCBXaGW2jFKtwDgzJ0jvp6E7rsmR5%2Fn23Qc5rSJ8SNG7fD4ViMvA92hi0ViEpeBZueN8kZh1rlXH4m1l4OKMqVB0UhU%2B5P1te%2FkcyJGgrs%2Bys59S7c4Led70W1SccaeM3qB1EMHsg0HRrux52fEIjDp8M5DVLLeiRMVbxRufp1GfYbx%2FG2PO71VFIn26027sA%2FzngzIeXWfNxu197pcNz61bTdTGkwg28kyvCfNaEV3ZVl5UAKYTN%2F2p22UyHafQA1nQNrnNIme%2BZZEvj3Z8IbsiJZPaHSGvF6a6xVFPVt0owepzLg8wLtL5Ja6hGBTeUioYWUbmnZ%2F9ZmB7twF3WOVkC1asZI8tiN%2BkEDsp0KU0oReQJq5X1gkW9tscAbSkUwTfh2VhLZ1zL4%2BEHvIJVbfz7AntahAG1wVZ4%2BL4DWyTBeWmM87jdAO6Jc8kmCo3Y%2BcCZRmPD9u8AwIk1K%2FDD9PghaZH4A%2FV9A%2F3Nkqkw0yWiNPdZzXFPdAAI2%2BiTOh3rgQrUE4jjFojSRr%2BwwxsdWkQGXSov5hefqjg3cb1k3eW5of%2BIfcI3xJ2l9oF0UTvD4J%2BW2XUe2Q6kTL7p9q4pmVVYqcf7yQS7M2pCVKwqHuNQC66a15i%2BzM%2Bd2vU6GIMIMlQ2k1qUw2rGZyQY6pgGLdOYRGSTxP1crrvd61d7aOlbtzAT%2F97W6ciN%2FC36Q0LcvA4OPJFVAlXtrqdEShKjUjOAVn6kxdOpKuEUzcRYAi5EBXh1ELoH8xWqkL8O%2FcBA4iGxPmPJykz6ulg1tDSdE42W12M5dcj0QeQuRNQc%2BPASrw35y%2BZJoe3eiXJKmzJGJEtl3xaiGUqqqiMrwCbNLd%2FOzeYX9UAuq0QUtSh2g3Rkid3OB&X-Amz-Signature=0253518486b9697e845366c489266982a97d100a4b81c5f2e2721bbdfe1729aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
