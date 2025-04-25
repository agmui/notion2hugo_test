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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7IZHW7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwly3SEmeiGQrV0QkBy0xHersjv2JBXUZ7jJwdwg5qAIhAI8cf8Og08%2FWU6%2Bxa36nLJHWXfEZL%2BKXc70Gb36021k4Kv8DCCYQABoMNjM3NDIzMTgzODA1Igzr0hSlgzJiCRytRCoq3APioI%2BlZYNk%2F8jMRZqWy%2F%2Fd41q3sOJ48p8xuH6S3O4PmHh%2B8nThGNmWsiB3jlqbB3gMT6nt%2F2uONOp7SgzkMx8b17szLNBpzhCsx%2FtOIumx5uC0VWFSwLe64tkBx1XSQsaxM1aWWUbY2Gecj2ntHvKhMlcZUVwCso74GyQkexnCd3jNT60KZgDEGRPNM%2FhGvWXp2KIGfXVAdKX6QaBIerrNLdtybHtXN9SH6i5XCS8kYJyn9FNz%2FGHOAONxsHLFHShjGYo51maAIO9cKOugxEH9JLPRZwGa11k2IjQeKiToorOL01MuHE6f23p8BYqB4MdpjTMNTkDPd7wyqxJjA%2FJbGMyZI3AW5rxBbp0o94SffL5fMMBsSQ%2B2sohtV34ySK8Z3HIM3svDk644wFyH37Dnj7o3IVMNOlvCu027AOL7FFYk5hf6UzEhi5m4aqIzeHL85BMur5F7Ldtwp%2FL8zr3eV1gfuINzl4z21Kx4ttZMvFRiL5CFQ4k4vQUWhkgL3%2FF4f9sivfmXJLu%2FymI4GZRaCW4Ec5CIGGGu7lKgimIbH%2Fs4FsAKSGCwxHA%2B7b5apKLUFzJYQtDDb4VLuYVQTnX%2B6ZJ%2BjSrg%2FiVLqV%2BE6aK2MNOOuuILqNzevPOUUTD3r6zABjqkAWwLTF3e45nfH7VLdiZQlsfYA645jhklmWoD6XdV25Acosatw2Zl%2FBicfvhzFk2bKX%2FnOT2jvOlISPwKnc3bpBH5ElnjWrPsiBHKCw1T3EYMnzGyhnAm5q5KHmXxcRrbl7fvAQLsvSgIwEscqTwilxo%2F9Kz7YciVNd7XKLwYHIpUXx%2BhCbQVTH%2F7FTqJPE3ak51yJ0N1gsO3aMswdoCVynv16CVk&X-Amz-Signature=15de6c73e420c536b8baa5a6b8099cfa31b7f8c5643cad342dbd575244444315&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7IZHW7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVwly3SEmeiGQrV0QkBy0xHersjv2JBXUZ7jJwdwg5qAIhAI8cf8Og08%2FWU6%2Bxa36nLJHWXfEZL%2BKXc70Gb36021k4Kv8DCCYQABoMNjM3NDIzMTgzODA1Igzr0hSlgzJiCRytRCoq3APioI%2BlZYNk%2F8jMRZqWy%2F%2Fd41q3sOJ48p8xuH6S3O4PmHh%2B8nThGNmWsiB3jlqbB3gMT6nt%2F2uONOp7SgzkMx8b17szLNBpzhCsx%2FtOIumx5uC0VWFSwLe64tkBx1XSQsaxM1aWWUbY2Gecj2ntHvKhMlcZUVwCso74GyQkexnCd3jNT60KZgDEGRPNM%2FhGvWXp2KIGfXVAdKX6QaBIerrNLdtybHtXN9SH6i5XCS8kYJyn9FNz%2FGHOAONxsHLFHShjGYo51maAIO9cKOugxEH9JLPRZwGa11k2IjQeKiToorOL01MuHE6f23p8BYqB4MdpjTMNTkDPd7wyqxJjA%2FJbGMyZI3AW5rxBbp0o94SffL5fMMBsSQ%2B2sohtV34ySK8Z3HIM3svDk644wFyH37Dnj7o3IVMNOlvCu027AOL7FFYk5hf6UzEhi5m4aqIzeHL85BMur5F7Ldtwp%2FL8zr3eV1gfuINzl4z21Kx4ttZMvFRiL5CFQ4k4vQUWhkgL3%2FF4f9sivfmXJLu%2FymI4GZRaCW4Ec5CIGGGu7lKgimIbH%2Fs4FsAKSGCwxHA%2B7b5apKLUFzJYQtDDb4VLuYVQTnX%2B6ZJ%2BjSrg%2FiVLqV%2BE6aK2MNOOuuILqNzevPOUUTD3r6zABjqkAWwLTF3e45nfH7VLdiZQlsfYA645jhklmWoD6XdV25Acosatw2Zl%2FBicfvhzFk2bKX%2FnOT2jvOlISPwKnc3bpBH5ElnjWrPsiBHKCw1T3EYMnzGyhnAm5q5KHmXxcRrbl7fvAQLsvSgIwEscqTwilxo%2F9Kz7YciVNd7XKLwYHIpUXx%2BhCbQVTH%2F7FTqJPE3ak51yJ0N1gsO3aMswdoCVynv16CVk&X-Amz-Signature=6220b42caa89c4b9fe0e85489f2fbac1e1a2aa52203313ac371011f5ec594f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
