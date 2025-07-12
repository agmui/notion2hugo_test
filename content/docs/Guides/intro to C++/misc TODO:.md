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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64ZEBDY%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG47dTtJ%2BqSViPPX6XOSIVN3z4NNBqkERTocnMTLolfHAiAU4lypdQtAz7PC%2BMzVNJKZHiHy8Rfbd3i%2BYNuCb1ATCyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBq7TEV5cKy43g1PxKtwDGj37eR6mDCxs6KlQv%2FZI%2F1iXlKbvLDqItPTk8DngCVps7pwlHSCWyeF6OnHGrSrYDE%2FN4IvaJNyNuHvMkIju7WcobBzvwlajDCjGyShZBldVr8Z597k5yHFR99iWE05jTgAPqd6LISpKEbZGcYMBXjdVe7OvIiQ33hSn%2BCOY%2B8ZXcQXDXgrvRWMzSr7D0I3mWE1d%2FRlPNfZcbc6kx0ZbLC5wRJKylsX8A1k6Ylr7%2BQHfPFoVbTeVBeb4NwvZmQKfuM5bduI%2B%2B2HASE%2FBxUAaIznISQJPl4fUfUNH29PF%2B4%2FKJK5vZTchwBduc7H77Xg6v1q6EDX2QyfdM3binBrDl568lBJwnFJS19kwEPav0lnEQveb6okTG29jDUR2oL6nq3yd%2FSgRECbz8y4fqJetE6GEnoSEuCtXOhbh79ccSKh8f1FuYj4XrJNoojJuCtTPApm84JarZPplCfgzP2XL5jkoeXADPvZ%2FKN98W%2BXQ2a4Y3LOu0%2FpLyLicANK0NXcXZ%2FmPMBTa0yWQFR1jhYnQzCruvbLGRmKCW7wr0lZgQ3bWHozXk977MZ%2FSsCOjoiCEwJMsIZTQmzvb%2BbebS6iBEX82Lo7CarNtWeQoaJCTigvffZIHD6RzoifVsHkw0qLIwwY6pgEBRNBH1yxwVUHI2blYsxpsFYZQdimHwBOsx%2F6C4ToUJ8cPdeTe5x3Imcwm5qxNkbu0RAlPE64VM7mZd6aXCeK1hE0wnYGomQJ9ZH0%2FLG6hciwXlV8LfaQH9ZTGB0fVw0IJQ9pxi6%2Fo6ksN%2FdcSzNfCwRiDU3W0RbzshtymrJ2W41BAYQCup4Ly8xWB9SRAf9X9yHs8cZGmq6dJwtAnCjCrx9bGdyYd&X-Amz-Signature=d177a07c5f5ed4538fad0269025713e458aff1fc7c2f26b118015e48b70d2af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64ZEBDY%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG47dTtJ%2BqSViPPX6XOSIVN3z4NNBqkERTocnMTLolfHAiAU4lypdQtAz7PC%2BMzVNJKZHiHy8Rfbd3i%2BYNuCb1ATCyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBq7TEV5cKy43g1PxKtwDGj37eR6mDCxs6KlQv%2FZI%2F1iXlKbvLDqItPTk8DngCVps7pwlHSCWyeF6OnHGrSrYDE%2FN4IvaJNyNuHvMkIju7WcobBzvwlajDCjGyShZBldVr8Z597k5yHFR99iWE05jTgAPqd6LISpKEbZGcYMBXjdVe7OvIiQ33hSn%2BCOY%2B8ZXcQXDXgrvRWMzSr7D0I3mWE1d%2FRlPNfZcbc6kx0ZbLC5wRJKylsX8A1k6Ylr7%2BQHfPFoVbTeVBeb4NwvZmQKfuM5bduI%2B%2B2HASE%2FBxUAaIznISQJPl4fUfUNH29PF%2B4%2FKJK5vZTchwBduc7H77Xg6v1q6EDX2QyfdM3binBrDl568lBJwnFJS19kwEPav0lnEQveb6okTG29jDUR2oL6nq3yd%2FSgRECbz8y4fqJetE6GEnoSEuCtXOhbh79ccSKh8f1FuYj4XrJNoojJuCtTPApm84JarZPplCfgzP2XL5jkoeXADPvZ%2FKN98W%2BXQ2a4Y3LOu0%2FpLyLicANK0NXcXZ%2FmPMBTa0yWQFR1jhYnQzCruvbLGRmKCW7wr0lZgQ3bWHozXk977MZ%2FSsCOjoiCEwJMsIZTQmzvb%2BbebS6iBEX82Lo7CarNtWeQoaJCTigvffZIHD6RzoifVsHkw0qLIwwY6pgEBRNBH1yxwVUHI2blYsxpsFYZQdimHwBOsx%2F6C4ToUJ8cPdeTe5x3Imcwm5qxNkbu0RAlPE64VM7mZd6aXCeK1hE0wnYGomQJ9ZH0%2FLG6hciwXlV8LfaQH9ZTGB0fVw0IJQ9pxi6%2Fo6ksN%2FdcSzNfCwRiDU3W0RbzshtymrJ2W41BAYQCup4Ly8xWB9SRAf9X9yHs8cZGmq6dJwtAnCjCrx9bGdyYd&X-Amz-Signature=9d39084d44e8b4607d2b8c02a93a055af1ba02b085c25dc16e69f755411f31ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
