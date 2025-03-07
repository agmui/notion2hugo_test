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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSRGOBJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTpeJqOxywzBeZXkHXNvFtEeP3cmroRsg7qf2%2F4OXdXAIhALJCFlz9wVb61d6mVs%2BJLpUDm2bynbDb41n3iJfV0b82Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyfY0cGy5hxVJEX1OMq3AP9a%2F8jtu1pqCp10%2Bb6c3eaUYLG7jl5UYPuhguy4%2BvoZNqbvhRzr857xPqJuaJXvv7myufCoDC6HupHWe%2FlnyUmlkVkjWxrYIAqrfkQD5JpWXygJZt9EJoJhMeVcRWJ3%2BawU6uMZOqMqHBqTZw9rqjoCFI77M1Ef8ELSFw8AxRMg8vRj5tsFfX5nrnZH%2F%2B0IHHwnENBI7psQS%2BcMq3zifERx908LfhI5Ryy51yvocW2Kllg8TmaZtMtqZosc%2BZIY6R4HtCDPymydc3C8ujbvEzymCUBwz763m9I%2BAlyHdnGr6ghaL%2FJ15v6tKJhqzPK9yUPb1sx1UzDtnD%2FTWtbgV%2B29PTylbrkpZ0MrQ0nJ5%2B%2B9aTtF6LzyUIOd66fTvVwVVDyglLjAHhauODZYYcy1s19azASu5rl1peimOBJtt069xadK1jK9RiMI4LBRq3DsJLH%2BnuYZtBUOF%2F0k06ZleLjxZVv5UJPWsDCUwRrz6CuB%2BtAXJoWY0GC0LmHCuwUmKG8tXs0Zfd9aXqpKjcU3v5IEIWw8RaCgptVDjRO%2F1cp3vwIsPbgBUBZUiqP5HIflBoLT3UYQJJodG8XxyiTaibE%2F35d5o1qPtB4Fe9ap9KI8%2FUyQ4VqEyhzSvBv9TD236y%2BBjqkATIcPiXIbTRUCGG710SvLdnoVyUddB3HH15DZ7Qcm1Nc6u%2B0kEIxHTD4sIkWYULRLsG57cilJ5fFBznagg2ReCnvYv6nKnyQSS6s4zAg5XlCUfKwYmwp3F8920rPLiRXctQPXiOVnhujxqwASgh7vz0s4bAl%2FUqGxBARQqlbzgvMD%2FzonIyLZEBizv7z4RuUYJNx6tDqDy6pNhRsU%2BE9tsHZYEPI&X-Amz-Signature=61ed4e8523898c7ea2c7433d07c55bb00454c8c92add28bce98df1c35a7f99a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSRGOBJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTpeJqOxywzBeZXkHXNvFtEeP3cmroRsg7qf2%2F4OXdXAIhALJCFlz9wVb61d6mVs%2BJLpUDm2bynbDb41n3iJfV0b82Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyfY0cGy5hxVJEX1OMq3AP9a%2F8jtu1pqCp10%2Bb6c3eaUYLG7jl5UYPuhguy4%2BvoZNqbvhRzr857xPqJuaJXvv7myufCoDC6HupHWe%2FlnyUmlkVkjWxrYIAqrfkQD5JpWXygJZt9EJoJhMeVcRWJ3%2BawU6uMZOqMqHBqTZw9rqjoCFI77M1Ef8ELSFw8AxRMg8vRj5tsFfX5nrnZH%2F%2B0IHHwnENBI7psQS%2BcMq3zifERx908LfhI5Ryy51yvocW2Kllg8TmaZtMtqZosc%2BZIY6R4HtCDPymydc3C8ujbvEzymCUBwz763m9I%2BAlyHdnGr6ghaL%2FJ15v6tKJhqzPK9yUPb1sx1UzDtnD%2FTWtbgV%2B29PTylbrkpZ0MrQ0nJ5%2B%2B9aTtF6LzyUIOd66fTvVwVVDyglLjAHhauODZYYcy1s19azASu5rl1peimOBJtt069xadK1jK9RiMI4LBRq3DsJLH%2BnuYZtBUOF%2F0k06ZleLjxZVv5UJPWsDCUwRrz6CuB%2BtAXJoWY0GC0LmHCuwUmKG8tXs0Zfd9aXqpKjcU3v5IEIWw8RaCgptVDjRO%2F1cp3vwIsPbgBUBZUiqP5HIflBoLT3UYQJJodG8XxyiTaibE%2F35d5o1qPtB4Fe9ap9KI8%2FUyQ4VqEyhzSvBv9TD236y%2BBjqkATIcPiXIbTRUCGG710SvLdnoVyUddB3HH15DZ7Qcm1Nc6u%2B0kEIxHTD4sIkWYULRLsG57cilJ5fFBznagg2ReCnvYv6nKnyQSS6s4zAg5XlCUfKwYmwp3F8920rPLiRXctQPXiOVnhujxqwASgh7vz0s4bAl%2FUqGxBARQqlbzgvMD%2FzonIyLZEBizv7z4RuUYJNx6tDqDy6pNhRsU%2BE9tsHZYEPI&X-Amz-Signature=817cb00f479664e06584c056b42756c00373c2d065f5a8f01ebc3faec9d181f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
