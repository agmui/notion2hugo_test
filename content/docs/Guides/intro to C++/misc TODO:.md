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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYR7QBD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCJwz7m7I%2BSUyyN57P6wMqvWCce6GY7LJFtd%2BvTLvDs2AIhANWPU1SBENi%2FCx%2B3G4fkWDfC5wbTu1Yp%2F3f1qzRV%2FZxuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZwdMd3jfgIqqPn8q3ANlKdwgXLd9O4EdlA1MdZhmbFAQY515%2BSYVwqgbk0WxgqBE2T6bQTNnsTX%2FJCCbIa7jW9BChL3GUxHzgxjHdKGeP5R5i8CLGEg%2FgZluIsJfMz2DvX5jdkwPIhlAPjrb%2FNcAt%2BTxOno%2BE9BhUnpAxzxJhoGSLPbZULWAY%2FWdVfMJCkWfFUp66jOtvKQ11GIzjIdX8TCAlKxt7YjHi1p8tWvkxJTgGMmyOBIvdj3gDneEnHax33Mebj4ELCZjJQeTn8FoR4Tkx%2B%2FKvL4Bdy8F4bAjusugGONj7vqP2uwyD8exocrcJL1hy6mJ8WZJUIEwr9yJ0vtKIWIr45PYSwv73PMRrZE9z9yHjpObF5VwTw3bzbo0dYODquQDJWU5ach9MeX9irY984Yv6ZH3nrTGeUSirYdSU3TEcCLSufAK9j0Vm3Rgd2yUHYdNR7BrK7Zev3uA0B%2BaNXHNPlZFiHg%2BXvaR2NeQJLJOemFX4trDkA7c10x%2B%2BgpojH1qf60jeZAn86wXpHTmr6zq54yhgmAglN5OckTcKC0N%2BZpydoYyXHKDNTw0BMULIIVbZdxZz4wH%2B7CkYF7Jr%2Fpi2ESEtwZTbzFuzC6kjpVh88329Dx3HZQGDLDYc6w6O3TVkZJrGTDNloTBBjqkASqT6jE27rS00A7tqELb%2FQY7wfZW3rClPm%2BYurzdIDGL4eMKVi9J0ei32%2FIi60B838AAMmwG8kfnewIWeSXffNtsSJnQdGMEK3yXN7BkMYLDROFRnrvuGfJGEL3W7feL7qEZWuVqaR2FX9aQ%2Bmj06B6v82%2F46CSO3eX1YUYVVbuQO%2BVh3vi9gYHpAHN0JwYRGPpNjIcczFdNCeNpPUROM13bvtkD&X-Amz-Signature=c3fc251bf581b82349ef7d649c1a24f31079805040266d16e527e7d16bf03839&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYR7QBD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCJwz7m7I%2BSUyyN57P6wMqvWCce6GY7LJFtd%2BvTLvDs2AIhANWPU1SBENi%2FCx%2B3G4fkWDfC5wbTu1Yp%2F3f1qzRV%2FZxuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZwdMd3jfgIqqPn8q3ANlKdwgXLd9O4EdlA1MdZhmbFAQY515%2BSYVwqgbk0WxgqBE2T6bQTNnsTX%2FJCCbIa7jW9BChL3GUxHzgxjHdKGeP5R5i8CLGEg%2FgZluIsJfMz2DvX5jdkwPIhlAPjrb%2FNcAt%2BTxOno%2BE9BhUnpAxzxJhoGSLPbZULWAY%2FWdVfMJCkWfFUp66jOtvKQ11GIzjIdX8TCAlKxt7YjHi1p8tWvkxJTgGMmyOBIvdj3gDneEnHax33Mebj4ELCZjJQeTn8FoR4Tkx%2B%2FKvL4Bdy8F4bAjusugGONj7vqP2uwyD8exocrcJL1hy6mJ8WZJUIEwr9yJ0vtKIWIr45PYSwv73PMRrZE9z9yHjpObF5VwTw3bzbo0dYODquQDJWU5ach9MeX9irY984Yv6ZH3nrTGeUSirYdSU3TEcCLSufAK9j0Vm3Rgd2yUHYdNR7BrK7Zev3uA0B%2BaNXHNPlZFiHg%2BXvaR2NeQJLJOemFX4trDkA7c10x%2B%2BgpojH1qf60jeZAn86wXpHTmr6zq54yhgmAglN5OckTcKC0N%2BZpydoYyXHKDNTw0BMULIIVbZdxZz4wH%2B7CkYF7Jr%2Fpi2ESEtwZTbzFuzC6kjpVh88329Dx3HZQGDLDYc6w6O3TVkZJrGTDNloTBBjqkASqT6jE27rS00A7tqELb%2FQY7wfZW3rClPm%2BYurzdIDGL4eMKVi9J0ei32%2FIi60B838AAMmwG8kfnewIWeSXffNtsSJnQdGMEK3yXN7BkMYLDROFRnrvuGfJGEL3W7feL7qEZWuVqaR2FX9aQ%2Bmj06B6v82%2F46CSO3eX1YUYVVbuQO%2BVh3vi9gYHpAHN0JwYRGPpNjIcczFdNCeNpPUROM13bvtkD&X-Amz-Signature=48c8ae8589927d1157f173a43ebf04a1f1e9385829b7a07599f8cf2415ac63ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
