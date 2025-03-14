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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FG5ATZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3AVQFjlb%2FT7Q%2FHLJdZK5qAoMkmqm9qEwaV8t4sQobDAIhAKrsAfYRB0f4oDbXnvlKArS5XgIBeV%2FfrjK2G0N3K9qTKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhA3lsieInopfwT9kq3AMf588sYv7UTBHfQ5ya8nIJySC07gjZuT%2FI%2Fqeludhu6N8QF78QikVAGjhoGy8Uksda9X7o%2FFczFo4KyhIgA9l8nXa9NeQI15kUiaCJPpJNkWcxXzzBNjLS5fqZng2MDU6oE1fWPKac8UqtzhH%2BMSmVSuSFqpMwHWjU6eUl3%2F6HYI%2B46cXIonU3iU373aOGtE5BgwL6qx2hu16bELJ8rCKqvHe6yPnpJ7piRVPIiM%2FyUe8Y4XwVvgSPT1MMQmwfVVwKsp140ukX9kVBgq8ug%2BOCmmRA%2BfUPM2dWlqyNz%2FmmcZqLe5pPZ4aOM1iGfHALdCIGezTlmR26v9i5HbxrLHo6e%2Ff47WYBSI4Sz6TJhEX8t4JbyqMdoA9w0srnt2Xu5Cf9MDZ2yhws4xGotwhhXfhTWhSPdAQqzJ2OqKyX6t79qlCuVkl7PFbvE6%2BRpAv51a0SEoy8HyMeeBZ2HIy5pQlwKUJHkVjGk1Zzx461Wq9zkewaJJeSdP5el5ZiHJHmaChbikRGhscjaRrR9Gfja7bHfhC21qSai4%2FCW50hohbuhKdYqI%2BFMbW4XtA2nmZkvwfe%2Bbeivx%2BaiKIq3dOfRZNk1xaIEYmcqim5cROPdVQ7Qn8WBGo7fxD%2BE8utEDDl0NK%2BBjqkAScmAOZKb5RM0JfnMb3HqaIJ7ydGGPBxEj9hgut1FF703bXzLSPzkRp16zLYGiMdODprGgfb98BL6oQbXa8gVoM7v8wke5tzt9bIaPkNwR6L9fdpn%2FqXEprhGaGh9K%2FTZwsgzYmo0PT1ATNJbetQV3nFAaJhm%2B2LG57HyWhuzd49eEN%2B7bG0gYOmtX%2BGZrh%2F8bEUxpRAfIf4prqjmO0BgFJzvG9H&X-Amz-Signature=9a49ff5329c0db51afb969b87621cca5702e891d534a135fd07e9a14f0e565c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FG5ATZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3AVQFjlb%2FT7Q%2FHLJdZK5qAoMkmqm9qEwaV8t4sQobDAIhAKrsAfYRB0f4oDbXnvlKArS5XgIBeV%2FfrjK2G0N3K9qTKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhA3lsieInopfwT9kq3AMf588sYv7UTBHfQ5ya8nIJySC07gjZuT%2FI%2Fqeludhu6N8QF78QikVAGjhoGy8Uksda9X7o%2FFczFo4KyhIgA9l8nXa9NeQI15kUiaCJPpJNkWcxXzzBNjLS5fqZng2MDU6oE1fWPKac8UqtzhH%2BMSmVSuSFqpMwHWjU6eUl3%2F6HYI%2B46cXIonU3iU373aOGtE5BgwL6qx2hu16bELJ8rCKqvHe6yPnpJ7piRVPIiM%2FyUe8Y4XwVvgSPT1MMQmwfVVwKsp140ukX9kVBgq8ug%2BOCmmRA%2BfUPM2dWlqyNz%2FmmcZqLe5pPZ4aOM1iGfHALdCIGezTlmR26v9i5HbxrLHo6e%2Ff47WYBSI4Sz6TJhEX8t4JbyqMdoA9w0srnt2Xu5Cf9MDZ2yhws4xGotwhhXfhTWhSPdAQqzJ2OqKyX6t79qlCuVkl7PFbvE6%2BRpAv51a0SEoy8HyMeeBZ2HIy5pQlwKUJHkVjGk1Zzx461Wq9zkewaJJeSdP5el5ZiHJHmaChbikRGhscjaRrR9Gfja7bHfhC21qSai4%2FCW50hohbuhKdYqI%2BFMbW4XtA2nmZkvwfe%2Bbeivx%2BaiKIq3dOfRZNk1xaIEYmcqim5cROPdVQ7Qn8WBGo7fxD%2BE8utEDDl0NK%2BBjqkAScmAOZKb5RM0JfnMb3HqaIJ7ydGGPBxEj9hgut1FF703bXzLSPzkRp16zLYGiMdODprGgfb98BL6oQbXa8gVoM7v8wke5tzt9bIaPkNwR6L9fdpn%2FqXEprhGaGh9K%2FTZwsgzYmo0PT1ATNJbetQV3nFAaJhm%2B2LG57HyWhuzd49eEN%2B7bG0gYOmtX%2BGZrh%2F8bEUxpRAfIf4prqjmO0BgFJzvG9H&X-Amz-Signature=a1efb34805d44e0287289b43aed1a5d7ee654470c99f580adb4fd0fec924df83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
