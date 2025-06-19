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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRZ3TYY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7XKnyCFlH7RNhxIkCnl2tgSfo%2FBekGsq38RIOz%2B5Z4AiEA6xZKkSRTm0KXjc3wuazfzwQee21RoOGvPBkR9lq6HJsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJlbZYcQzABucD%2BbyrcA%2FRt2%2Bvnn%2FNuCYceyPmA%2FKNfdgYy56QtzKSgj%2BfrAR4vIpJc%2BH%2FJyqgDy3hG%2BsNitGQazwxmpL5UGVbGVB8s7PpeHVAPiv6O%2FRlXg8CT0rgAXRAyTWQmbErJgbVB2ywBxdRbPi%2FPGoOZ7KWOn3zUAuWTmsg9ftvTD1kuxla0vcDhHBf8E1BbVRJOLQ5wFFNw7GbhXCd7gKf5aD%2BUU7P4Y6Fo7BvAVAiDbAuMcEBYTTQt%2F1i1Ud%2BvSJK%2BQfhe2%2FcOkHAxscJVINdlOX%2BOUL5vN%2BqIXfhPd32cyNFoFixciT5HBYFwIgPYWX2XmUs8xMJro5uw85QvQk3KvJqxZ%2BfT8hMop0JFQRUMiqfzPXXYUIaKrqpvfypP2UYJbz4f6nqNkwTlXeIBuuW5FFgkMctvo0TznOqLzfN5%2FPFoJS4sJ5zSObqjE1xvPx4xx%2FjKi3zGP0QRkP%2FtyCSmYjnQRacs9m1bpFks6yUt3AvAQtBNwhIf3D7M1fsUADpXkBK2Km2MncaYyWpXIBlm%2BX5T7%2FDGaK3cR%2FBjuvp2taXGciFDk9zd0fLs0ln8cwHd6gYGjwyCsjVVuzNlol9HhumcGdErb5uuCxsBlBxmYlDVAvBZdDWJdQyx1kGOvgMWcv36MOuRz8IGOqUBmoH6HXsL7ztsKnMQNnOR2HcMUMvfu0JGaoFJkg05c7I9fC2qHQ8NcPx2OYmXlHR3YxHa7scas9BBEBHJYWnwyfEYFaxg55WVeCaZSPRle5G5OJeTYTub04op0fqta3KO4sOzBurAVaXIbdqaG0qkOpRt%2FI5FB2bplhTIw9Nqvx6e7Gm3l8e8JGQQ5HycobBPPvjyXpf7G4fwTTquSzEeN9aRA99g&X-Amz-Signature=7567f90390ea49dc7c420a1967902eb799005173ecf62d03bd446d0d06415d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRZ3TYY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7XKnyCFlH7RNhxIkCnl2tgSfo%2FBekGsq38RIOz%2B5Z4AiEA6xZKkSRTm0KXjc3wuazfzwQee21RoOGvPBkR9lq6HJsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJlbZYcQzABucD%2BbyrcA%2FRt2%2Bvnn%2FNuCYceyPmA%2FKNfdgYy56QtzKSgj%2BfrAR4vIpJc%2BH%2FJyqgDy3hG%2BsNitGQazwxmpL5UGVbGVB8s7PpeHVAPiv6O%2FRlXg8CT0rgAXRAyTWQmbErJgbVB2ywBxdRbPi%2FPGoOZ7KWOn3zUAuWTmsg9ftvTD1kuxla0vcDhHBf8E1BbVRJOLQ5wFFNw7GbhXCd7gKf5aD%2BUU7P4Y6Fo7BvAVAiDbAuMcEBYTTQt%2F1i1Ud%2BvSJK%2BQfhe2%2FcOkHAxscJVINdlOX%2BOUL5vN%2BqIXfhPd32cyNFoFixciT5HBYFwIgPYWX2XmUs8xMJro5uw85QvQk3KvJqxZ%2BfT8hMop0JFQRUMiqfzPXXYUIaKrqpvfypP2UYJbz4f6nqNkwTlXeIBuuW5FFgkMctvo0TznOqLzfN5%2FPFoJS4sJ5zSObqjE1xvPx4xx%2FjKi3zGP0QRkP%2FtyCSmYjnQRacs9m1bpFks6yUt3AvAQtBNwhIf3D7M1fsUADpXkBK2Km2MncaYyWpXIBlm%2BX5T7%2FDGaK3cR%2FBjuvp2taXGciFDk9zd0fLs0ln8cwHd6gYGjwyCsjVVuzNlol9HhumcGdErb5uuCxsBlBxmYlDVAvBZdDWJdQyx1kGOvgMWcv36MOuRz8IGOqUBmoH6HXsL7ztsKnMQNnOR2HcMUMvfu0JGaoFJkg05c7I9fC2qHQ8NcPx2OYmXlHR3YxHa7scas9BBEBHJYWnwyfEYFaxg55WVeCaZSPRle5G5OJeTYTub04op0fqta3KO4sOzBurAVaXIbdqaG0qkOpRt%2FI5FB2bplhTIw9Nqvx6e7Gm3l8e8JGQQ5HycobBPPvjyXpf7G4fwTTquSzEeN9aRA99g&X-Amz-Signature=b8554d488e538a49d161c097685d81b40070cb122c3dfefa6170901452704154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
