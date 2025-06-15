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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCB24X5F%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD8tcViY%2BPem8Euw85U9bfunE2A4Gfrdn5N5ClP0uboNQIhAPRrDjYGM4Ss4Rq67SFj6ix6IYE%2F1PTsYNS8DRpxcZ8zKv8DCE0QABoMNjM3NDIzMTgzODA1IgwvkQr3U2iws91UnaEq3APpEypDWAHalTm4kGjM2sC%2FVKiSDWyzlrSYqpesjmODuPmVxx9Y6dIIwI2nHVX4zUHvCnkG%2F9oXTnqZbpaxXxpFQmEZLrKUCGiY4eUkJIVciGD2iYMCmoxbyR2eaXNKUz1Vta4ZBGZsX5dL7FPQGs8NGPKtq9YUdbjPS0eDs%2FJAJ9YbPHaycYZlHnxwEzAkaXYXVfhiao%2FUTIqSWXjNOYnIY%2FMFSrYQ%2FZDtacNHFihuiBa%2BioCF28EGiB9ZRYgpGg6hhSyQ3xYRQO2YtOfceeHzBx%2BBDJmED74niBWDkVgeDr2yzZp2y2Ypc7tU51KRlsqwFUz8POLU042WMSq8g%2FXCuIAeEesAFtl5I1TS0iHN3LhLZEZsIUG%2BxeGX6yKTNNMb%2FqCS%2BS5R0xRnkP8ZxhcSjiMEMAIQy8Gmu%2BygKRPAeeIt8rGrUzD2782C0XSjpS96IWtLsfqNtkV9OmH6Bo%2B4C%2FkbxA9FjKgOfkLh5%2F9UFMMfiSh9VG5ldjueRjjmgSQAvR%2B9NMJ9ifyyi266BpwQPgFLn%2BubEl4FL2366iJxV0X5VFEhGP8g6CIwagSmgfnKcu%2FqoVNOVjBhICP6yU6IE%2BU0UBJIGiTxpdJR4yznIF2ZPV9z3ZJyiygRNjCnz7zCBjqkAW3bjXPLZz%2F66lERNTAECEwhejS26kN2QjGySKDFfKHQMki0pG3gPT57yBZzfwjNEyZouKRpH5JIzxlLfgqdvnHIytUCX3AcAwsFUZzqV6o%2Fz%2Fjrf7JsQZGQdl%2BfvzFX6VuWvZ2Hv3ABlDYhC2SdfV7hQehc5ZXRF2ylfAWOhLQI2LnMyqPPUHz2VeUygUCQyjdPBC6cVlAOeDHuPDYcXAYYt99N&X-Amz-Signature=e0d6e55bcd07530705bbba0ec2de4eb341e3504af69795d22a5d3da2f208e9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCB24X5F%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD8tcViY%2BPem8Euw85U9bfunE2A4Gfrdn5N5ClP0uboNQIhAPRrDjYGM4Ss4Rq67SFj6ix6IYE%2F1PTsYNS8DRpxcZ8zKv8DCE0QABoMNjM3NDIzMTgzODA1IgwvkQr3U2iws91UnaEq3APpEypDWAHalTm4kGjM2sC%2FVKiSDWyzlrSYqpesjmODuPmVxx9Y6dIIwI2nHVX4zUHvCnkG%2F9oXTnqZbpaxXxpFQmEZLrKUCGiY4eUkJIVciGD2iYMCmoxbyR2eaXNKUz1Vta4ZBGZsX5dL7FPQGs8NGPKtq9YUdbjPS0eDs%2FJAJ9YbPHaycYZlHnxwEzAkaXYXVfhiao%2FUTIqSWXjNOYnIY%2FMFSrYQ%2FZDtacNHFihuiBa%2BioCF28EGiB9ZRYgpGg6hhSyQ3xYRQO2YtOfceeHzBx%2BBDJmED74niBWDkVgeDr2yzZp2y2Ypc7tU51KRlsqwFUz8POLU042WMSq8g%2FXCuIAeEesAFtl5I1TS0iHN3LhLZEZsIUG%2BxeGX6yKTNNMb%2FqCS%2BS5R0xRnkP8ZxhcSjiMEMAIQy8Gmu%2BygKRPAeeIt8rGrUzD2782C0XSjpS96IWtLsfqNtkV9OmH6Bo%2B4C%2FkbxA9FjKgOfkLh5%2F9UFMMfiSh9VG5ldjueRjjmgSQAvR%2B9NMJ9ifyyi266BpwQPgFLn%2BubEl4FL2366iJxV0X5VFEhGP8g6CIwagSmgfnKcu%2FqoVNOVjBhICP6yU6IE%2BU0UBJIGiTxpdJR4yznIF2ZPV9z3ZJyiygRNjCnz7zCBjqkAW3bjXPLZz%2F66lERNTAECEwhejS26kN2QjGySKDFfKHQMki0pG3gPT57yBZzfwjNEyZouKRpH5JIzxlLfgqdvnHIytUCX3AcAwsFUZzqV6o%2Fz%2Fjrf7JsQZGQdl%2BfvzFX6VuWvZ2Hv3ABlDYhC2SdfV7hQehc5ZXRF2ylfAWOhLQI2LnMyqPPUHz2VeUygUCQyjdPBC6cVlAOeDHuPDYcXAYYt99N&X-Amz-Signature=8d918d97c5702c0c821df185d641a145f3f327b84ebafd0b7cec5181c6124643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
