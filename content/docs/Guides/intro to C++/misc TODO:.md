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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LLF7NS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtee8dC0vOkylmaUdVbVOXShEETGfDDgFWYDvXNfV4%2FAIhALUh4vDTnWo9Dl%2Fqm4LXz8L5X9%2FzYwk5fmGjIMBoxTNfKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOXd2Cor3Uki%2BCqsYq3AM8FYHO2AsonzYcIb%2F%2Bh1%2FAsZXj44gRjVDe2xLlD8k35zOuVg4mUXbWNZh50oFlDtOhMGugw617KBdmQ%2FiJcPPlP5iyPgg6RwgoHMCcbxW%2BCcvQSy%2BeSOgzKCukJ%2FYng6XkjL3FZ0pl9NAkwVo6%2BUM2OByMTAphrYMvQpGs5qC20R7khWXFFCBcd%2FucOCAO3Mp2AfgkiFTpVGeUGHCoIHVSxqynN4tjc%2B6z6uJp8uPkqRQQdW5iywYA6OslR8o1UWu79MYK5u6QFEa%2Bo2BPblRMQOol%2FDzXt8nRNQOo8B85p88hwVA%2FSYFHViP0Kukdt4GaaGXma9P6cUceB3qocWixtAaEYNLkac%2BI6ZN1JEQoxktbYWpK9B7sZ63yCB%2Fl%2FKwaUOfWGwzsDKXwYyyhCMz9lix8kuz7%2FS3QJk3adZ%2FzZH75LdCopjcXvA78ok%2BK53kfrm0OPuXhfS6fC7pawT%2FDmDCBeIXwEggTwomcjO%2Fo2taeEBjiFU33ZwRZGo6pyv1p1oT2LA7e8yUtCH3ly%2FVJbJYUeKOc61Vxj3BLvHRL36edD%2Bf8niEkDg5WF1n4a9nXUHYYDHTlzFMLJ7A9oToBJ6YyV1X54CmwEXS92mebFLIGzFZzSTBcL4cFezDT2czDBjqkAVjRMNoRzKMrgzqmxuCtkTuT1kPEQrjiIlPiecVQJuAa%2B%2B6zh66CxBvGQeMvwKk0b6lK55a%2FzllxyYLE0UOUET1FBvZsYtR23YuzgESHbftMAS%2FDDr0W3xK1BAQBB8URa04tz%2FJTOwPO3vDKx2mcSfSSgdwHAorBh8%2BHUmQ5kwkHHrd6yAyVyQ5UjXgfXvKv3milSnbd4tT46LwhX5kAnOki1sFK&X-Amz-Signature=3ec1942567617020a4139298e1ed3bea0a59a0f66d7f6b979ab71b88a6f08b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LLF7NS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtee8dC0vOkylmaUdVbVOXShEETGfDDgFWYDvXNfV4%2FAIhALUh4vDTnWo9Dl%2Fqm4LXz8L5X9%2FzYwk5fmGjIMBoxTNfKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOXd2Cor3Uki%2BCqsYq3AM8FYHO2AsonzYcIb%2F%2Bh1%2FAsZXj44gRjVDe2xLlD8k35zOuVg4mUXbWNZh50oFlDtOhMGugw617KBdmQ%2FiJcPPlP5iyPgg6RwgoHMCcbxW%2BCcvQSy%2BeSOgzKCukJ%2FYng6XkjL3FZ0pl9NAkwVo6%2BUM2OByMTAphrYMvQpGs5qC20R7khWXFFCBcd%2FucOCAO3Mp2AfgkiFTpVGeUGHCoIHVSxqynN4tjc%2B6z6uJp8uPkqRQQdW5iywYA6OslR8o1UWu79MYK5u6QFEa%2Bo2BPblRMQOol%2FDzXt8nRNQOo8B85p88hwVA%2FSYFHViP0Kukdt4GaaGXma9P6cUceB3qocWixtAaEYNLkac%2BI6ZN1JEQoxktbYWpK9B7sZ63yCB%2Fl%2FKwaUOfWGwzsDKXwYyyhCMz9lix8kuz7%2FS3QJk3adZ%2FzZH75LdCopjcXvA78ok%2BK53kfrm0OPuXhfS6fC7pawT%2FDmDCBeIXwEggTwomcjO%2Fo2taeEBjiFU33ZwRZGo6pyv1p1oT2LA7e8yUtCH3ly%2FVJbJYUeKOc61Vxj3BLvHRL36edD%2Bf8niEkDg5WF1n4a9nXUHYYDHTlzFMLJ7A9oToBJ6YyV1X54CmwEXS92mebFLIGzFZzSTBcL4cFezDT2czDBjqkAVjRMNoRzKMrgzqmxuCtkTuT1kPEQrjiIlPiecVQJuAa%2B%2B6zh66CxBvGQeMvwKk0b6lK55a%2FzllxyYLE0UOUET1FBvZsYtR23YuzgESHbftMAS%2FDDr0W3xK1BAQBB8URa04tz%2FJTOwPO3vDKx2mcSfSSgdwHAorBh8%2BHUmQ5kwkHHrd6yAyVyQ5UjXgfXvKv3milSnbd4tT46LwhX5kAnOki1sFK&X-Amz-Signature=15cc890012d0f4e39ae8cda6048b04583f0214bf714381a5be9ff419a03ae936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
