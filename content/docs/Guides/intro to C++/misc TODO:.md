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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYT3U3L2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfIbn7SQ8Un11l2pE42UD4jzKDieahwkhIYXhWwRYlowIhALdQd0jleOYONFQXQ1eZ%2BgxB%2BxMpVJ6waNkxf4QfFqDTKv8DCEsQABoMNjM3NDIzMTgzODA1IgyLmkEwIGKnfiX%2BXZQq3APGxDO%2BivIOcVm6QHHRUSXb2uSQliyeUp886dLSwpaiX3nfKTS4Y2bpiB4Mv0bL9r8tYFCbnF45xx5ornmoCCx0wAFqFriKB79quqLa%2F9tDtA7h%2BR2ZydoubSu1r%2FfOv1EdOsYA3BIu3TVXeXK4tIADjKSkduqMTtr3PtvIDUD87%2BnCluOqxKlke7xUuNsXsbbxcRFyGmkT5PrV9I%2BhMYHZyJM6hbAuF%2BylY7whH9VzPt3CnYBh%2F7d2Kim1V1s4Ad%2B4RvPONXo7qmMjLPAvQLPLARUExhwcE32HmGFomZ3%2BqbDFXIHzZj%2ByfNE3iP8J7Zx5v4AtaO1sV%2FU3iedBgys4PjRdq4KKnMsKpTKISe%2BuX3s1xMMWsY33fvcs%2F2PHwxniDb9xdgUL%2Ffkk0azMpQFSzBc12gbBj64QSR6VeQvBGAadmCrdJvB%2F5%2FmFnNQKDKlfmGE0aoQoPlLpJvy1xjC8bgHUNkijjGeiaBTfDMgEx4CmZ0G442UK%2FlTGtF35vS74OQZTzp5R5CDkwmM3nnqQjyYCiDaIed2jz4l78QzmWuTJVwJmrED8qBF6JQMrwJD7TtC6zJr9%2BYBNKi8ccy6U58IpQJpllLqnCGLSn3xe5jJPPDn%2BOfSthq%2FyajCo0NLBBjqkAY%2BUR0%2B0TuxLXhnUJBPXe6nxOg31L8znfp%2FuL1FYew%2B%2FUXhK9DW%2FNx7RT5oajnPlyYA8u81vflG6jk18EHHPpa5sWWD441nTrbdW1gFfl6Bo5lIqfz5b4JQif9AK5RJsFFCAbF4WATQsN6ko9yOkelM35LvpcsKAbo%2Be%2B%2FMzcIcG9mL8JYqQGLA%2FbEOHdx8KRYMnfqMokBojW6rRaBQuzhIpOh%2B2&X-Amz-Signature=344b3585dbaefce8071b3a3f0b998d658dd40f7cd27941dc3be97a6a6112c380&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYT3U3L2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfIbn7SQ8Un11l2pE42UD4jzKDieahwkhIYXhWwRYlowIhALdQd0jleOYONFQXQ1eZ%2BgxB%2BxMpVJ6waNkxf4QfFqDTKv8DCEsQABoMNjM3NDIzMTgzODA1IgyLmkEwIGKnfiX%2BXZQq3APGxDO%2BivIOcVm6QHHRUSXb2uSQliyeUp886dLSwpaiX3nfKTS4Y2bpiB4Mv0bL9r8tYFCbnF45xx5ornmoCCx0wAFqFriKB79quqLa%2F9tDtA7h%2BR2ZydoubSu1r%2FfOv1EdOsYA3BIu3TVXeXK4tIADjKSkduqMTtr3PtvIDUD87%2BnCluOqxKlke7xUuNsXsbbxcRFyGmkT5PrV9I%2BhMYHZyJM6hbAuF%2BylY7whH9VzPt3CnYBh%2F7d2Kim1V1s4Ad%2B4RvPONXo7qmMjLPAvQLPLARUExhwcE32HmGFomZ3%2BqbDFXIHzZj%2ByfNE3iP8J7Zx5v4AtaO1sV%2FU3iedBgys4PjRdq4KKnMsKpTKISe%2BuX3s1xMMWsY33fvcs%2F2PHwxniDb9xdgUL%2Ffkk0azMpQFSzBc12gbBj64QSR6VeQvBGAadmCrdJvB%2F5%2FmFnNQKDKlfmGE0aoQoPlLpJvy1xjC8bgHUNkijjGeiaBTfDMgEx4CmZ0G442UK%2FlTGtF35vS74OQZTzp5R5CDkwmM3nnqQjyYCiDaIed2jz4l78QzmWuTJVwJmrED8qBF6JQMrwJD7TtC6zJr9%2BYBNKi8ccy6U58IpQJpllLqnCGLSn3xe5jJPPDn%2BOfSthq%2FyajCo0NLBBjqkAY%2BUR0%2B0TuxLXhnUJBPXe6nxOg31L8znfp%2FuL1FYew%2B%2FUXhK9DW%2FNx7RT5oajnPlyYA8u81vflG6jk18EHHPpa5sWWD441nTrbdW1gFfl6Bo5lIqfz5b4JQif9AK5RJsFFCAbF4WATQsN6ko9yOkelM35LvpcsKAbo%2Be%2B%2FMzcIcG9mL8JYqQGLA%2FbEOHdx8KRYMnfqMokBojW6rRaBQuzhIpOh%2B2&X-Amz-Signature=8e4a0348803ef6c8dcdf15cea6d1219952f26be6cb84c85f5264fc9788230607&X-Amz-SignedHeaders=host&x-id=GetObject)

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
