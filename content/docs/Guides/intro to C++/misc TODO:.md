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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJEMFSZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TFbNnaWWPjmNWVMsABHCxig7uqLH7xLGHGqqVK6w0AiAkRs9UK5k9HVGQ0iaZcN%2BQEvVSMk2j3d6eKh3APX5UUCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMdAcJECFSK8Ch%2F94EKtwDnqjo9oqpYHz%2B5qr%2BcV8U7Onz5%2B30f4yjTnIkJQAU2nMEj%2BUPVUxt8VixLGzYePGkPPex6PaxKwjhHkrLJqlIEuSvV571cJlzpALI%2Bz%2FhaoA9iZdNgd57goAfAGnfx6sGEGgvJNc0KNnT31tBKyBILKg7nFEnyM9MYzlKaIyfx%2FcW0B%2FY%2FiFj%2BfqIt3HVLfQCNAxLzTZoJRQzm2AdXZL6DIEdfLapCelajmapN3TA5413%2Bq0T7SK56kqhHNTgldN7N0tNucv4oe5pMlU8qUVupraZfhmt%2FG1wsZ5VFQ4xHa9OEvxkMNwinswyuznXJA58eeK79SKRA60xemp1njScv9ruojX2BPzlsXrMMLQF3cLiMj%2Bjp%2BAZuN66oXU3N2TsTs8QjKGj1je64P6h0%2BkW6tRt6dt5JwzWk2yukN3GffafTvGgOin0cPoymvlZWdg09LkZLrr6kYlu98CNDMqRWx0ovIp2grDBlBA801%2Bu89SKKTgsvgF6a8xQFYgQQSKdEPYeDYn9sLEwm2siP5dPK%2BMf3d9xl8AZ2zS9oJs6V8yYeHVhlaBRS%2F9ERW7%2F8NbXED3Xn760DS%2BozDXR8bBkKLmos58L5gUWAMqciL4mRCrKrmyyvVWePYZdkTgwjPC2xAY6pgFxTxH4K7%2BSlb9n3QMFjSAfvXgLXS3sGyzXPysW8KymyRd8Yh6YW1T5Zpv4iCdNguZxGv4pfkEqlhUO7vhrHinF1eHFphWORRsxNer3KDttqpVC6iwd57VUeyl6HBOU5IXABSYldkyS16rPcAlqMpiBftnUb2GdhXkSF0JttbZp%2BJCvbF%2FT9isRR2BXzHzhzv6%2BH5BZxR86ti6MNVkMA6zr1l2TO6ZZ&X-Amz-Signature=cad143e6f803edef9a6bbadf1504edfbd7884f87243b37ceae4480fa641240fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJEMFSZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TFbNnaWWPjmNWVMsABHCxig7uqLH7xLGHGqqVK6w0AiAkRs9UK5k9HVGQ0iaZcN%2BQEvVSMk2j3d6eKh3APX5UUCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMdAcJECFSK8Ch%2F94EKtwDnqjo9oqpYHz%2B5qr%2BcV8U7Onz5%2B30f4yjTnIkJQAU2nMEj%2BUPVUxt8VixLGzYePGkPPex6PaxKwjhHkrLJqlIEuSvV571cJlzpALI%2Bz%2FhaoA9iZdNgd57goAfAGnfx6sGEGgvJNc0KNnT31tBKyBILKg7nFEnyM9MYzlKaIyfx%2FcW0B%2FY%2FiFj%2BfqIt3HVLfQCNAxLzTZoJRQzm2AdXZL6DIEdfLapCelajmapN3TA5413%2Bq0T7SK56kqhHNTgldN7N0tNucv4oe5pMlU8qUVupraZfhmt%2FG1wsZ5VFQ4xHa9OEvxkMNwinswyuznXJA58eeK79SKRA60xemp1njScv9ruojX2BPzlsXrMMLQF3cLiMj%2Bjp%2BAZuN66oXU3N2TsTs8QjKGj1je64P6h0%2BkW6tRt6dt5JwzWk2yukN3GffafTvGgOin0cPoymvlZWdg09LkZLrr6kYlu98CNDMqRWx0ovIp2grDBlBA801%2Bu89SKKTgsvgF6a8xQFYgQQSKdEPYeDYn9sLEwm2siP5dPK%2BMf3d9xl8AZ2zS9oJs6V8yYeHVhlaBRS%2F9ERW7%2F8NbXED3Xn760DS%2BozDXR8bBkKLmos58L5gUWAMqciL4mRCrKrmyyvVWePYZdkTgwjPC2xAY6pgFxTxH4K7%2BSlb9n3QMFjSAfvXgLXS3sGyzXPysW8KymyRd8Yh6YW1T5Zpv4iCdNguZxGv4pfkEqlhUO7vhrHinF1eHFphWORRsxNer3KDttqpVC6iwd57VUeyl6HBOU5IXABSYldkyS16rPcAlqMpiBftnUb2GdhXkSF0JttbZp%2BJCvbF%2FT9isRR2BXzHzhzv6%2BH5BZxR86ti6MNVkMA6zr1l2TO6ZZ&X-Amz-Signature=39a91dd5e0c4adee022673449e474e7926effb4f926096d60c636b4d6846b4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
