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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZPWI2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFV41qg%2B1IZT0y01jkd%2BVW8HiqfrpWYZhlabkij2tBbAiAyucuacXHEywsYRIsNOy%2By0oTnLnhVkhbWMRmhXCsjnCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMvPxGsaWjD3HlFKTEKtwDzM%2F8cFcCNlPEN9sKuXQohH2E%2Fc2uECMFwsu6r0GGkNQBzwK%2BzSLxFPQJQ02Mafa%2BVabVI9Z65ROn4Y8V7z9BWOA2%2BEsF8yXY77vBBHSdzzxYv1GfHm7LFZpJYzxdS4kK7%2FsDAn4LVogoBHAVOhbysH5y4CzOWvV2ga4yVDpUNbyxtqOAYWYfE56p3RXgvv06Mbnhnxt5N0xqZuRBTTj7zQn51GYrEVYrhaxRuDkplvs4pndBrCiT8iKsW%2BdlL6sCFWKhxb3is109ZeORj6G%2FSOrAnuNLvLN1pcI%2BUF3x6ZvuLVK37reun42TrNI2jSY9f24jAOkILu50ZD373Mk9191UpLYbTdg9yJ5o81aHg8wDJz4Sq%2BEsxFgzVrCD%2BNG93sWcdkFcPObQEtnQ%2BS6sf7bHosNoY1C010%2Fekce8wO9A3kpaUza9uG6nw8Rh4QXuDueC%2F9dxoHSV3%2BMGS%2F9yXpxA2T9MqGcTPU5rt0KtEVwqu5PHzKkNC6ZFiDxNVMLI7fnGJGfGLOGlQJT0FZYc4ISJjiI35w2Kg7%2F1%2FKYEekpYkuINIImLbV75LbG%2BLhVSYCCWjhwDt5ESGNvM%2BxaFsR%2F6b9XFXYoVDzGOgnl%2BBxZyZCUjg3GCj0dSzscwguzDwgY6pgEda1uJYXyUVPLKwaAi2zQ3MUdl6mMMLC1L%2Fr3q5pn3gn%2Bxk83etPfwJYnzjEegpMhx1mUSbe36LMMY%2FrKbFdKjpYRitazx3risLXIhrC7gr4hyqUv2vLjHw9z9rw5BfEDzGRQmuILj8SlHJCtmCAVVlA7qRijF7uMD7KaEbaENR6I%2Bk3nPHR9W%2F3Jsw5Wv6TXxD5rV9IPLZ4B63wz8BY7WpB2Mdeaf&X-Amz-Signature=cd196cfef84c5c9b7da5f4e2c25ba6ede15b2e5bdc4df7caa180ec5301f4c466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y77ZPWI2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFV41qg%2B1IZT0y01jkd%2BVW8HiqfrpWYZhlabkij2tBbAiAyucuacXHEywsYRIsNOy%2By0oTnLnhVkhbWMRmhXCsjnCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMvPxGsaWjD3HlFKTEKtwDzM%2F8cFcCNlPEN9sKuXQohH2E%2Fc2uECMFwsu6r0GGkNQBzwK%2BzSLxFPQJQ02Mafa%2BVabVI9Z65ROn4Y8V7z9BWOA2%2BEsF8yXY77vBBHSdzzxYv1GfHm7LFZpJYzxdS4kK7%2FsDAn4LVogoBHAVOhbysH5y4CzOWvV2ga4yVDpUNbyxtqOAYWYfE56p3RXgvv06Mbnhnxt5N0xqZuRBTTj7zQn51GYrEVYrhaxRuDkplvs4pndBrCiT8iKsW%2BdlL6sCFWKhxb3is109ZeORj6G%2FSOrAnuNLvLN1pcI%2BUF3x6ZvuLVK37reun42TrNI2jSY9f24jAOkILu50ZD373Mk9191UpLYbTdg9yJ5o81aHg8wDJz4Sq%2BEsxFgzVrCD%2BNG93sWcdkFcPObQEtnQ%2BS6sf7bHosNoY1C010%2Fekce8wO9A3kpaUza9uG6nw8Rh4QXuDueC%2F9dxoHSV3%2BMGS%2F9yXpxA2T9MqGcTPU5rt0KtEVwqu5PHzKkNC6ZFiDxNVMLI7fnGJGfGLOGlQJT0FZYc4ISJjiI35w2Kg7%2F1%2FKYEekpYkuINIImLbV75LbG%2BLhVSYCCWjhwDt5ESGNvM%2BxaFsR%2F6b9XFXYoVDzGOgnl%2BBxZyZCUjg3GCj0dSzscwguzDwgY6pgEda1uJYXyUVPLKwaAi2zQ3MUdl6mMMLC1L%2Fr3q5pn3gn%2Bxk83etPfwJYnzjEegpMhx1mUSbe36LMMY%2FrKbFdKjpYRitazx3risLXIhrC7gr4hyqUv2vLjHw9z9rw5BfEDzGRQmuILj8SlHJCtmCAVVlA7qRijF7uMD7KaEbaENR6I%2Bk3nPHR9W%2F3Jsw5Wv6TXxD5rV9IPLZ4B63wz8BY7WpB2Mdeaf&X-Amz-Signature=d80150f8365e1c92ee21055ee3da1b31136342f094aba6a161cb6d647840a2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
