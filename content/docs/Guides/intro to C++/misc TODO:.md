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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JL6VY7D%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB0zVKX8avroShfd%2FA3DnD9pZjhsKmvdK2RkPq8mPLltAiEAzQJ8qEspXZ9kbPTGJAnJP6VsBpWtlXMFzqH0GjjjIJcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5ASWhHEEkgjUz%2FBircAxTarEojOuaERXRp2%2FfM5A%2FVqNfdPfJwuE4VsDWbaDXOwmdyUqNwurciReEN1WP3wRt75QWKHlAP4fdXvFYH8ikhuJtRur23F9Pq9%2FyRkrtGZgTgYO0BIPZaQr3BpmK%2FJxfe7Q1x7QfhJKGhyzkFFIZGmAdcn3jKDDGn6HPimLyKGtodMIiq07okgF4QUvOBFRhQrjvW9KXR9WJzjr7fBUuH9MpXwjwyY3wOOgIChW6EyV2qNSChFCLiHe6F0PdT75YIG0fodwvWV4OCVwpJPB920l9RVmFXkSksjIADlPpZL5bniQ0d4h68C0cF2F3qyaz7AgjwFknAiwb%2B3QhZsGXKJ4Wn27J7F78x%2FgNW16iIBOBbQ%2FIoyotbu43%2FWVROY2fTTJ4u4lL6h%2BbUWnn25FAGuVjUxhBMBIvRfqqNDYH7U%2BVrYXxORdP2OjSE7Q%2F91Ih%2BJUiXeM7jvU0V%2Fq%2BE2c0GkLzfLaCK42V7jPJhR%2Fnp4X%2BBhqnmjU5dMBiWFW3PBIBlAiKMVp9y%2Bo7aFh6TX9XCHnXyy515c6ttpf3BC8%2BiCuRRQL1yB5kPb7lJNWAmSOIGek5q075I2hfplSWAgfQMW4sPi2MK6a9Ct3VsmB5f0r2k9IDiMaR6%2BgzUMMeNj8EGOqUBF1tV2X5GJqOMvzP3wKWwVA5mJXSbVTY2IskU%2Fz9ST0tEevPaq883UsuJ81fOphvTqKZA6%2FuJSeU3I7Rz4m2k8w0%2FyM5ZT6HVyRhEuen0UKrprUHUV8WpHml5Z9Ej3dwWmIB8PbLBjOM7UTAmCTYBNw6yLQK8ocp4DRNli4uS4IFg%2B0OqTuvmM15%2FksulP78RWwKlf%2BRjy6qvo0kBtFmajpSdf%2FA6&X-Amz-Signature=45935fab669292307e76e535471637c9f6a0b83438420dd4b946eaf37e8b55ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JL6VY7D%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB0zVKX8avroShfd%2FA3DnD9pZjhsKmvdK2RkPq8mPLltAiEAzQJ8qEspXZ9kbPTGJAnJP6VsBpWtlXMFzqH0GjjjIJcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5ASWhHEEkgjUz%2FBircAxTarEojOuaERXRp2%2FfM5A%2FVqNfdPfJwuE4VsDWbaDXOwmdyUqNwurciReEN1WP3wRt75QWKHlAP4fdXvFYH8ikhuJtRur23F9Pq9%2FyRkrtGZgTgYO0BIPZaQr3BpmK%2FJxfe7Q1x7QfhJKGhyzkFFIZGmAdcn3jKDDGn6HPimLyKGtodMIiq07okgF4QUvOBFRhQrjvW9KXR9WJzjr7fBUuH9MpXwjwyY3wOOgIChW6EyV2qNSChFCLiHe6F0PdT75YIG0fodwvWV4OCVwpJPB920l9RVmFXkSksjIADlPpZL5bniQ0d4h68C0cF2F3qyaz7AgjwFknAiwb%2B3QhZsGXKJ4Wn27J7F78x%2FgNW16iIBOBbQ%2FIoyotbu43%2FWVROY2fTTJ4u4lL6h%2BbUWnn25FAGuVjUxhBMBIvRfqqNDYH7U%2BVrYXxORdP2OjSE7Q%2F91Ih%2BJUiXeM7jvU0V%2Fq%2BE2c0GkLzfLaCK42V7jPJhR%2Fnp4X%2BBhqnmjU5dMBiWFW3PBIBlAiKMVp9y%2Bo7aFh6TX9XCHnXyy515c6ttpf3BC8%2BiCuRRQL1yB5kPb7lJNWAmSOIGek5q075I2hfplSWAgfQMW4sPi2MK6a9Ct3VsmB5f0r2k9IDiMaR6%2BgzUMMeNj8EGOqUBF1tV2X5GJqOMvzP3wKWwVA5mJXSbVTY2IskU%2Fz9ST0tEevPaq883UsuJ81fOphvTqKZA6%2FuJSeU3I7Rz4m2k8w0%2FyM5ZT6HVyRhEuen0UKrprUHUV8WpHml5Z9Ej3dwWmIB8PbLBjOM7UTAmCTYBNw6yLQK8ocp4DRNli4uS4IFg%2B0OqTuvmM15%2FksulP78RWwKlf%2BRjy6qvo0kBtFmajpSdf%2FA6&X-Amz-Signature=660fb1939ac89d34239c5a2f44ee367f181a031c924126252b96d285334cee5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
