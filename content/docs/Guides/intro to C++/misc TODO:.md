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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W2BLDLP%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIApKUE36Ocw1lBaOsGLOzULAjNVpkIEAessxiNv5VKOoAiBFm5w7kgBACXcEqG1yCr4MWOp7J3%2B7jdhyJp53znS5jCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMqEG4Az3mxsV4fj%2BLKtwD1iGnNa4%2Fn8LgeXtFLzZucHgM5zprO5v6EQjUXPGQx4dBU3xZo2jX6POsBpW3yg7861%2BmBd0GXdQnE2S0C4HM%2FWNzxW%2FsKb9acS0uRTTd8AOqXvtYb04Vc5UOcx8OJ%2BbXu0xYdLUa1xDHn4wTvSFfbaxrpXNO%2BMLkahJZZhpbeSnCdI6uCiBFHC4QFemspbSt%2FbgE0K5JAFwJXL%2FmnR7X36UAz6bhTVXGOh2SEulZqVKcEfXvSvlO6psv9PF7vj%2FQiu4YfCwRZShIoeONpR7yy7op%2FKZFDMA4dLhPhFUTxtsOnSxYyhBQf%2B7DwdfhOZ5OieOlOhd2tidQq4vl7kgAGIjbrIC9wel9qZsXCFR4PDNVB7uNGBejlusNNyCg2%2B6xWll5MDpQqf4Ke8B5aCJhWS3P44%2BwmIPCnxnini4AKzxX04bHQh3rrDbUC7GLmV7Wq0btDlrRw4yW6u2g25uTGR5xhTTyBNia8VkDNDLpRskD%2F3C0xj4pR0ZMgd2S71sP16tCLXTOgemQB%2B5NErdpOed7r9mf8i1TPpCX0BTmtXFg%2B73kM3Na9KkrzvYueN6T%2BeAiO0h5JUPKW%2FN3MqXSCtS5TEJuS%2FJtq0wCW2ULo7rnOUBsEW6lLampLh0w4tzqwgY6pgE7TKMdy58ybpX7ESfGRbmYEBREtB%2B9ZxUnbgnXzX1vaidnQydJHMiTwAZd6CwfDTtZPida1zTwHkZYrG7xaGTqhYtk6r%2FHD%2FdSyi%2FHClNR0zmw%2FIGaCV5IdV5oWEycxxggmtWRlQTD8vRUzXJ3GX3R8gosbee280xZCRxcuzSShqyfhBeWdj0JJpJ6R2itkZnRr2Wex4p4z7qYquAwRWjhSwsFNZSX&X-Amz-Signature=968cc1527e4365d55f58c08c4cedd37bc1a15e6d029af4d9e89494a7160baf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W2BLDLP%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIApKUE36Ocw1lBaOsGLOzULAjNVpkIEAessxiNv5VKOoAiBFm5w7kgBACXcEqG1yCr4MWOp7J3%2B7jdhyJp53znS5jCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMqEG4Az3mxsV4fj%2BLKtwD1iGnNa4%2Fn8LgeXtFLzZucHgM5zprO5v6EQjUXPGQx4dBU3xZo2jX6POsBpW3yg7861%2BmBd0GXdQnE2S0C4HM%2FWNzxW%2FsKb9acS0uRTTd8AOqXvtYb04Vc5UOcx8OJ%2BbXu0xYdLUa1xDHn4wTvSFfbaxrpXNO%2BMLkahJZZhpbeSnCdI6uCiBFHC4QFemspbSt%2FbgE0K5JAFwJXL%2FmnR7X36UAz6bhTVXGOh2SEulZqVKcEfXvSvlO6psv9PF7vj%2FQiu4YfCwRZShIoeONpR7yy7op%2FKZFDMA4dLhPhFUTxtsOnSxYyhBQf%2B7DwdfhOZ5OieOlOhd2tidQq4vl7kgAGIjbrIC9wel9qZsXCFR4PDNVB7uNGBejlusNNyCg2%2B6xWll5MDpQqf4Ke8B5aCJhWS3P44%2BwmIPCnxnini4AKzxX04bHQh3rrDbUC7GLmV7Wq0btDlrRw4yW6u2g25uTGR5xhTTyBNia8VkDNDLpRskD%2F3C0xj4pR0ZMgd2S71sP16tCLXTOgemQB%2B5NErdpOed7r9mf8i1TPpCX0BTmtXFg%2B73kM3Na9KkrzvYueN6T%2BeAiO0h5JUPKW%2FN3MqXSCtS5TEJuS%2FJtq0wCW2ULo7rnOUBsEW6lLampLh0w4tzqwgY6pgE7TKMdy58ybpX7ESfGRbmYEBREtB%2B9ZxUnbgnXzX1vaidnQydJHMiTwAZd6CwfDTtZPida1zTwHkZYrG7xaGTqhYtk6r%2FHD%2FdSyi%2FHClNR0zmw%2FIGaCV5IdV5oWEycxxggmtWRlQTD8vRUzXJ3GX3R8gosbee280xZCRxcuzSShqyfhBeWdj0JJpJ6R2itkZnRr2Wex4p4z7qYquAwRWjhSwsFNZSX&X-Amz-Signature=492cfccb8e20a58c0a945f02d2359d94f4cf8d2de4d512a470a339f0ece98ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
