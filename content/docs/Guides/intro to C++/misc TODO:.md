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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPP5BL33%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhYUkGBklXc5QcTYseJ4MNsSuCv6CWoBy3H6RM3G18wIhAOLKn9ZW1RLJSwno%2B2McW9al1QSy9Kg6DHN7V8vBHD1OKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwdc1wqH%2BK3lrxBM9Mq3ANyHl26gnvOBkyLC8Frn63Mgv8S6t%2BN5sZJtjN5u2VOGlKzHUtWyuPGru18Kn%2F%2BLLkc2U8IkgwzE3p93HtSKbh7KwjSYGU2F0ikVF2lB2Qu5qDmCjpFaIRHi3YqpX9At93X0r2L9wC0JEt9ZPWJ5UtCPsDvz955rS8RqaSqOIKhU%2BJdvzSvE6X4etL%2ByIAm0QPQoACMkpDPkTF8FJ6v%2BQ%2FoHwidpG2YTURN%2BRL7gGDVURdrBhfpBhW4TcHglx0Rpzy7nzNTrW2CmqFSEEXZ%2FtJNu8OtveHT7zmu8xOjEFsDHRNvICi86P8mCwfhXJ03pSGV9nRw7DkO7PpsJndnQ64RymUCrjIyv1ywYao8JmOJOzJFCgigriMF0HLM%2BFDqFQplG4F7jhhr2vzrT8h60g2ZEne2eSWzRi6J5A85wYO7Fx5SM%2FbxMXwdDZMaVG8XKqL80TgTp13vh9Xz%2BRW6Ws0Mr4b97qLpFd%2Fasdv7eBuvHc76usx4HjN2g8NkPURaDCvZ4PLpuvhGSuOoBDvgB%2FCFuVYe%2Fr%2Ba3u4Uuk3h23MSg%2Bh65IbJVrB4KRwYI7ZG2QvfVat0D2QgJI7s8Oa6GR%2BF8CTbEW%2BolALK9iKCfVDK7IrMVxX8lV3xQB9NhzDU9uO9BjqkAa2Wv2n1YjhmoREfXHClbG2wSnAVTCfBHViPEiV0MUUPo5P1mu%2BMwxNGsVgPny1x5NdyZGMyEYByPxLipPMwR3aEkIWOmnuMrRO%2F1eOq5Qjroke4NTIotBS%2B0c4vkWOi23v%2FDWMH6RidfZCPiA%2Bgaw4fa6cvyhJ0%2B71l%2BrqgZ%2F2IYOCYVCk36Lm3sbshfkbVWhuyjGat0jPsCzJiOnerQ7PcN9ND&X-Amz-Signature=40d1404e539d9df46599736f61ce647c9f73750914744464483c798eb321f757&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPP5BL33%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhYUkGBklXc5QcTYseJ4MNsSuCv6CWoBy3H6RM3G18wIhAOLKn9ZW1RLJSwno%2B2McW9al1QSy9Kg6DHN7V8vBHD1OKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwdc1wqH%2BK3lrxBM9Mq3ANyHl26gnvOBkyLC8Frn63Mgv8S6t%2BN5sZJtjN5u2VOGlKzHUtWyuPGru18Kn%2F%2BLLkc2U8IkgwzE3p93HtSKbh7KwjSYGU2F0ikVF2lB2Qu5qDmCjpFaIRHi3YqpX9At93X0r2L9wC0JEt9ZPWJ5UtCPsDvz955rS8RqaSqOIKhU%2BJdvzSvE6X4etL%2ByIAm0QPQoACMkpDPkTF8FJ6v%2BQ%2FoHwidpG2YTURN%2BRL7gGDVURdrBhfpBhW4TcHglx0Rpzy7nzNTrW2CmqFSEEXZ%2FtJNu8OtveHT7zmu8xOjEFsDHRNvICi86P8mCwfhXJ03pSGV9nRw7DkO7PpsJndnQ64RymUCrjIyv1ywYao8JmOJOzJFCgigriMF0HLM%2BFDqFQplG4F7jhhr2vzrT8h60g2ZEne2eSWzRi6J5A85wYO7Fx5SM%2FbxMXwdDZMaVG8XKqL80TgTp13vh9Xz%2BRW6Ws0Mr4b97qLpFd%2Fasdv7eBuvHc76usx4HjN2g8NkPURaDCvZ4PLpuvhGSuOoBDvgB%2FCFuVYe%2Fr%2Ba3u4Uuk3h23MSg%2Bh65IbJVrB4KRwYI7ZG2QvfVat0D2QgJI7s8Oa6GR%2BF8CTbEW%2BolALK9iKCfVDK7IrMVxX8lV3xQB9NhzDU9uO9BjqkAa2Wv2n1YjhmoREfXHClbG2wSnAVTCfBHViPEiV0MUUPo5P1mu%2BMwxNGsVgPny1x5NdyZGMyEYByPxLipPMwR3aEkIWOmnuMrRO%2F1eOq5Qjroke4NTIotBS%2B0c4vkWOi23v%2FDWMH6RidfZCPiA%2Bgaw4fa6cvyhJ0%2B71l%2BrqgZ%2F2IYOCYVCk36Lm3sbshfkbVWhuyjGat0jPsCzJiOnerQ7PcN9ND&X-Amz-Signature=f7d397d451d78885a8461baad52a5633103c82863295f333fe60b97dd231ee88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
