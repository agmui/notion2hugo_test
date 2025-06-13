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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNSFOOS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEQd3FNvW8eJalMXNRAGRDKKp%2B%2BNwYgWof74vk%2FDbgRkAiAA9kM8BhLlbiPC6dAHUcL1JwYGywsk2iY8zMe8VKXjcCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvv5MuWWwTRX18K2KtwDi6dcipF0%2F6Dh6YXBXtadynyeTxr6jZWx8Cv0QuIXWdsFzdr5AXDXFdiP4O%2BrhYLV5sz4sfU2WvO5u6J8dgQ36jcfRCE0yPPrHsY8g4jZqhB3QKCR6asVany04CDLKuaJcodPUGhktKhRUkF0JQiyDsJ1OuRXvBIJ7O%2FAUUGSsypnstQDikf5kext0WQY%2BWvtW99fHeLN%2BN%2BbP35FdIhJ%2BWWPQiDunqc7%2Fgs2jqnKSkBmjOmOkrRmZiu4QC2dCUZYYbEaGoVEEajRhWk41pEbP9%2B%2BwjDXOgZfx3bTpEHlGTr5koHYogPfJiJnr5ESaess69pcSchI22j0P5KnFni0EfHaJsOTB8oaDHy3GeLFWsVrHIeFxpNh0B4Sj5NnixPtlzD0djcrXtxKeIgwl1IuIUCu4rLzfdHeny%2FQMWVioaj5xQykUHlPnmNRZr811nvLW9VQPRQnoHmjRlEoCNR4vhon0TD%2F4XLCjSYx3%2FxJ%2FTH5yg358p1zfTXu6S3aIj4u0I77us5rBmRsgSWC7D7jVzlOLwc%2F45XNbSshQNeyTJoBKkGL3kBUsghp8lWxXeB9GLIRr9Um4%2BpJfOd%2BhbnVTxQd8NeBLMvJjQZhACpunVa9njB%2B5LluMlO4Oo0w%2FritwgY6pgGKobUVAvnr0kXnpFqWwqf97hSZDmAYGiDzWmjZFYCns7tuqlauM9vZ2%2B03JJGuHGh1%2FXcDjsUb2rimJoeYPZoJiUHt4%2FHWXEksuFgs4%2BCTYtASc0gX91NJGJd3hjNIx3f6dpBe9ZhTLcqiOvoJJ0xw9u5%2FN3QLmbx3phnDJZiDYrNKbfCJ1feaVC5ApcBLaWzXTnkfUd9OJcjwH7OPylLIIelGnn3f&X-Amz-Signature=a9b9055f5901e8289e6322fc4ccfb2918c6c2c73a3316673fbd44d6909e83755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNSFOOS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEQd3FNvW8eJalMXNRAGRDKKp%2B%2BNwYgWof74vk%2FDbgRkAiAA9kM8BhLlbiPC6dAHUcL1JwYGywsk2iY8zMe8VKXjcCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvv5MuWWwTRX18K2KtwDi6dcipF0%2F6Dh6YXBXtadynyeTxr6jZWx8Cv0QuIXWdsFzdr5AXDXFdiP4O%2BrhYLV5sz4sfU2WvO5u6J8dgQ36jcfRCE0yPPrHsY8g4jZqhB3QKCR6asVany04CDLKuaJcodPUGhktKhRUkF0JQiyDsJ1OuRXvBIJ7O%2FAUUGSsypnstQDikf5kext0WQY%2BWvtW99fHeLN%2BN%2BbP35FdIhJ%2BWWPQiDunqc7%2Fgs2jqnKSkBmjOmOkrRmZiu4QC2dCUZYYbEaGoVEEajRhWk41pEbP9%2B%2BwjDXOgZfx3bTpEHlGTr5koHYogPfJiJnr5ESaess69pcSchI22j0P5KnFni0EfHaJsOTB8oaDHy3GeLFWsVrHIeFxpNh0B4Sj5NnixPtlzD0djcrXtxKeIgwl1IuIUCu4rLzfdHeny%2FQMWVioaj5xQykUHlPnmNRZr811nvLW9VQPRQnoHmjRlEoCNR4vhon0TD%2F4XLCjSYx3%2FxJ%2FTH5yg358p1zfTXu6S3aIj4u0I77us5rBmRsgSWC7D7jVzlOLwc%2F45XNbSshQNeyTJoBKkGL3kBUsghp8lWxXeB9GLIRr9Um4%2BpJfOd%2BhbnVTxQd8NeBLMvJjQZhACpunVa9njB%2B5LluMlO4Oo0w%2FritwgY6pgGKobUVAvnr0kXnpFqWwqf97hSZDmAYGiDzWmjZFYCns7tuqlauM9vZ2%2B03JJGuHGh1%2FXcDjsUb2rimJoeYPZoJiUHt4%2FHWXEksuFgs4%2BCTYtASc0gX91NJGJd3hjNIx3f6dpBe9ZhTLcqiOvoJJ0xw9u5%2FN3QLmbx3phnDJZiDYrNKbfCJ1feaVC5ApcBLaWzXTnkfUd9OJcjwH7OPylLIIelGnn3f&X-Amz-Signature=af451c2855bfe29a96a280b31db9e85674a7172ca98fefb228e55587ab6304c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
