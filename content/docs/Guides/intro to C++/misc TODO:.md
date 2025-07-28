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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKUP3OU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCr7k54a0CukiAtmadTCF1xzHuLKW8g6vD5lM0SC4pYqgIgPSep7BgS0dmHweetv9Y3GiXsmeqw9W29NFtzNW%2FlvAMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjlkUQA389x0oRlvyrcAznlls1sLKVfJKMCwgFHKuZXsn8mQASsr0OSCQEOVejH2QlE7FbQq4CAkjg%2F5uVR3NeR0XbqU1LbLOF0NyaP1XKkbLsNMTd0Kd6WcLYqFz7qSz12JE43z4g2bqVJpD0Caoe3dxwdQmq%2FTHVWtEpZ9L6h5JKUTy%2BU7mgGme1Gp6Lj5vFJRqDtWUcfap8HROwnTiHG75BdGzoOPZxlWXubO2Qf3GVH9%2Byqt8Wu%2FD25MXV%2BY585xtFYHvhKBsbv3T4odaywnwVko5L9pLJLdyzr9C2ZnAO9%2FUnznCyrlHIvTfY2keh5%2Bum5RjifGy5QJ8CMfR1hlxwZLad8uW3nOOCBdeOBaYW0j1zMzDkM5xzyY2lO536M0sFJD8v%2FJNNQAf%2FiddPDBR%2FEOzbrqP06yTQsx%2BD7Y0ipamVR7d3Nl%2F10Wnzf0TSUukzaS3vhO%2FYBdcBwx9Y4ROmgEfB95k%2FonrvRoB9HsI73JYKbQsgVkW0ISf7lyYb3kvUlr6IgXmnIgzBXFqLuEW4Yx6lljZ4PF3xGi24Uyqip0zM6lurheax77MNWeEnH6E9d9HxQRcoxfYXWJMyLQKi86bOKYNfK4lIguJwsSkp3PPi29eNwUnBAEbDy4qTjqAx%2BZFZioLpdML%2BTm8QGOqUB4Dr1ZB6dLbtbPn7kca7CIAJU1RbXmJunq21IW1jHg7ex75EZ2gszjKa6t%2Btr4qzU2VrGR3b9zdnbX1ujjTOtYufJm7co3wZwuktF1Q0fTxonPNzwIJGeLnChUvAqqteGa1iltYWkPKU673vUNWXqVLvLrotT7gnaMGEHSKsFJ7F9TqaoTTdOv5Gdoc%2BauIxw878X5UV%2FXJp1F35Uhj4Z%2BTvmzXyQ&X-Amz-Signature=734f3ad40f07097e5d1e291cb489519ab91badc312854c790fd0bed69a5ccd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKUP3OU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCr7k54a0CukiAtmadTCF1xzHuLKW8g6vD5lM0SC4pYqgIgPSep7BgS0dmHweetv9Y3GiXsmeqw9W29NFtzNW%2FlvAMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjlkUQA389x0oRlvyrcAznlls1sLKVfJKMCwgFHKuZXsn8mQASsr0OSCQEOVejH2QlE7FbQq4CAkjg%2F5uVR3NeR0XbqU1LbLOF0NyaP1XKkbLsNMTd0Kd6WcLYqFz7qSz12JE43z4g2bqVJpD0Caoe3dxwdQmq%2FTHVWtEpZ9L6h5JKUTy%2BU7mgGme1Gp6Lj5vFJRqDtWUcfap8HROwnTiHG75BdGzoOPZxlWXubO2Qf3GVH9%2Byqt8Wu%2FD25MXV%2BY585xtFYHvhKBsbv3T4odaywnwVko5L9pLJLdyzr9C2ZnAO9%2FUnznCyrlHIvTfY2keh5%2Bum5RjifGy5QJ8CMfR1hlxwZLad8uW3nOOCBdeOBaYW0j1zMzDkM5xzyY2lO536M0sFJD8v%2FJNNQAf%2FiddPDBR%2FEOzbrqP06yTQsx%2BD7Y0ipamVR7d3Nl%2F10Wnzf0TSUukzaS3vhO%2FYBdcBwx9Y4ROmgEfB95k%2FonrvRoB9HsI73JYKbQsgVkW0ISf7lyYb3kvUlr6IgXmnIgzBXFqLuEW4Yx6lljZ4PF3xGi24Uyqip0zM6lurheax77MNWeEnH6E9d9HxQRcoxfYXWJMyLQKi86bOKYNfK4lIguJwsSkp3PPi29eNwUnBAEbDy4qTjqAx%2BZFZioLpdML%2BTm8QGOqUB4Dr1ZB6dLbtbPn7kca7CIAJU1RbXmJunq21IW1jHg7ex75EZ2gszjKa6t%2Btr4qzU2VrGR3b9zdnbX1ujjTOtYufJm7co3wZwuktF1Q0fTxonPNzwIJGeLnChUvAqqteGa1iltYWkPKU673vUNWXqVLvLrotT7gnaMGEHSKsFJ7F9TqaoTTdOv5Gdoc%2BauIxw878X5UV%2FXJp1F35Uhj4Z%2BTvmzXyQ&X-Amz-Signature=73be268dc5536a03b021bd93f035e55104d12fcd5c531f9b9c37dd890bae5634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
