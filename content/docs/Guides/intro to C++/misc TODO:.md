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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW76DBZ4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaYlMdt0WlpagOLFtN0Ik3OTd%2B%2Bl7JesW1FNFe6zDaxgIhANXnWSZpso2e%2BTF0BLBYVIX59tnX%2FWVfqNvj85KHbkZPKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp70NifFbYIltwCrwq3AN5AJqAeMyFbvpUyrllpE384xP5ULu5CrQIHw3o1Suchc2uPKbb7E0Jcxg3mIsEqG%2BgZSZvOXiQ%2BGeecf9iLylfrGC1SxYjYcdQT2sBodw%2B7NHxFQy%2BMYemkp8XKJQMWcPbVRAF4QhbiXWePywGMrRwvR%2FTvEGle7afT7EftxCDGIzCAi7DMvC59KAsL54DyVjlQfhAg1hd%2FYChKb%2B5B4UjJJntI87rhq%2BvxV0ddPB0c1bB0KnVxfzzjNjxU66AeRb4w0SdBhhhT0yoXFyBvoVb9Vfg2nwitqu3S4ZBFVEXY2gC69fXkaq1JQakg7c74hUN2Uo9FM%2BAKARVHr%2FXQIJrO%2Fd0b4V4hEnhdlFnkyyEYiwDhUXrUqzUwZP4XP2Z%2FbI4BxQU%2FqKDqsQsBqsa67IEaYUpnPRyqIOMKhU3Of9BL3HzgndogibaYaEcAz0GLBeFibu5om1uEYoZhvNxah1dA3lZ69gxB3Vx%2FieRDkwsSDZpIHY8F7ozihs%2BHgtAqaPRcwg2%2FE3RBeqj0y1haNJnau6NQMGTpQHP5KtBLZzCVK3nSLvCXv0PrjkHKiu9y5rROhZQtY%2BeMSmn0uwanEw6CnrbcLVk3%2Fe3Jss9i%2BxIj%2BwnZgrCTU8l9J%2BwljDgkq69BjqkAQ3f5rKV5vaqkuRj5OV2vTGtIIuRDJNNSzsTPNgFDNRi%2FZNZeUf1opF8aHViPomKp5BNAQ%2BwWoDl41vjjmxThmKez6PaRV5Ej6gxHkywLysUj4MF1Frr8ITDcGNkS0hbzg4bJjF59zlvzX71sHY2afbkCy1agmBdbp2a75%2BCo0WOyqeApj1DSMcHe8wOSCvUamifDBy0540%2Bmxtvp%2BwzOzzVqPDo&X-Amz-Signature=411474964a6f03028fbc22e5fa981daa80453a1f56b10a920135eb101d12bbbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW76DBZ4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaYlMdt0WlpagOLFtN0Ik3OTd%2B%2Bl7JesW1FNFe6zDaxgIhANXnWSZpso2e%2BTF0BLBYVIX59tnX%2FWVfqNvj85KHbkZPKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp70NifFbYIltwCrwq3AN5AJqAeMyFbvpUyrllpE384xP5ULu5CrQIHw3o1Suchc2uPKbb7E0Jcxg3mIsEqG%2BgZSZvOXiQ%2BGeecf9iLylfrGC1SxYjYcdQT2sBodw%2B7NHxFQy%2BMYemkp8XKJQMWcPbVRAF4QhbiXWePywGMrRwvR%2FTvEGle7afT7EftxCDGIzCAi7DMvC59KAsL54DyVjlQfhAg1hd%2FYChKb%2B5B4UjJJntI87rhq%2BvxV0ddPB0c1bB0KnVxfzzjNjxU66AeRb4w0SdBhhhT0yoXFyBvoVb9Vfg2nwitqu3S4ZBFVEXY2gC69fXkaq1JQakg7c74hUN2Uo9FM%2BAKARVHr%2FXQIJrO%2Fd0b4V4hEnhdlFnkyyEYiwDhUXrUqzUwZP4XP2Z%2FbI4BxQU%2FqKDqsQsBqsa67IEaYUpnPRyqIOMKhU3Of9BL3HzgndogibaYaEcAz0GLBeFibu5om1uEYoZhvNxah1dA3lZ69gxB3Vx%2FieRDkwsSDZpIHY8F7ozihs%2BHgtAqaPRcwg2%2FE3RBeqj0y1haNJnau6NQMGTpQHP5KtBLZzCVK3nSLvCXv0PrjkHKiu9y5rROhZQtY%2BeMSmn0uwanEw6CnrbcLVk3%2Fe3Jss9i%2BxIj%2BwnZgrCTU8l9J%2BwljDgkq69BjqkAQ3f5rKV5vaqkuRj5OV2vTGtIIuRDJNNSzsTPNgFDNRi%2FZNZeUf1opF8aHViPomKp5BNAQ%2BwWoDl41vjjmxThmKez6PaRV5Ej6gxHkywLysUj4MF1Frr8ITDcGNkS0hbzg4bJjF59zlvzX71sHY2afbkCy1agmBdbp2a75%2BCo0WOyqeApj1DSMcHe8wOSCvUamifDBy0540%2Bmxtvp%2BwzOzzVqPDo&X-Amz-Signature=1938827b5926784e912c6dc6162aed51f5b985afd2dd0a32422725200449fcbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
