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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKG327O%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlBZWjfjOdWfUTfFYqEcvv4Rs2k5xDoogwm4UUCCgesAiB0zBXn9IQn2h9XMP0a0a031ZHDZOQT5iZYB7ci9EhejyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3Fs6OIO1y1EbmOKKtwDwPWJIeur0uXwLWKRyEZhAKot5iNfF7V%2FAjuNPhXPbCF63t0iNTdZDDKMs9xev2hUFVya7xBKTLzLqqT9GqHI6JhR%2BZwYQowfIejRllqIYPxVJ%2BHVxv%2FGcHbzUvDeKYZM9l6BoqLdX4QbkErIljZLGwix9UOWQGDYiL53BUHPhysYXuP0I3T%2FJ6NYlDvWns0zjVoLluKimw%2B7v2Mm0aHuezwBNrabsmzBgKc99%2BIfi2UlVn25Uehw2xpaeqCBPey8Dchoo9ghVj9YjHpv9HZR0YhgZxknRlqyVdJIUiFWWqwc016CHTwAUPeOh3iSckOgRKGZ05v2YvsjSG4FeKVve2CkJqDq6QTOb0XGYAMGDwSwtpgpQyFDVymM4A5solRZ2CkbXUs7yzwQui9IuaiJSnYoLj4%2By8g1QabbNh%2FflLO1RGdRyYrm%2FFtiydxfmgKydHDFa8kuIKuVjRoczWQRDaQYFralpDKYzmfTjiMxg5abC0TH7%2FkO4eNKJKSoeDDZCrMFloKDfXncHTjQXugCNUy6wcuFKRUi3wUuxTB%2Be4Qew%2BzGmQe8vE4r%2B0kvlQ2phKfqbOZJsuvvILQK0AYd%2FBOOxekMd8n3bHnzLCkw948Z%2Fvwu%2BoEhnGmiqwMw1YqcvgY6pgGXPpyRae3TRTpAjqSojnziKdHB68mS2yBNuf6LSAT9y2zfE83gdnja9GHWjC569GwEomMgmjKCu1%2BYcBCdF5FPhI1CwjhOMfj23OQMUUe7VCulvmzSNWE1KbGwnOQFJZ5WcQQmWRXG15%2FiqYsTErtjwpSlD060gw71dXOB0TRofCi%2B7OovZM%2F1%2BhmMxqOp5lrADJtidHKGYfNd997upGeqEVY%2FpGe0&X-Amz-Signature=641a2d14e030cbbb59c2d0775af37377c8cfe78f9aac297e66319e7e58e7207d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKG327O%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlBZWjfjOdWfUTfFYqEcvv4Rs2k5xDoogwm4UUCCgesAiB0zBXn9IQn2h9XMP0a0a031ZHDZOQT5iZYB7ci9EhejyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3Fs6OIO1y1EbmOKKtwDwPWJIeur0uXwLWKRyEZhAKot5iNfF7V%2FAjuNPhXPbCF63t0iNTdZDDKMs9xev2hUFVya7xBKTLzLqqT9GqHI6JhR%2BZwYQowfIejRllqIYPxVJ%2BHVxv%2FGcHbzUvDeKYZM9l6BoqLdX4QbkErIljZLGwix9UOWQGDYiL53BUHPhysYXuP0I3T%2FJ6NYlDvWns0zjVoLluKimw%2B7v2Mm0aHuezwBNrabsmzBgKc99%2BIfi2UlVn25Uehw2xpaeqCBPey8Dchoo9ghVj9YjHpv9HZR0YhgZxknRlqyVdJIUiFWWqwc016CHTwAUPeOh3iSckOgRKGZ05v2YvsjSG4FeKVve2CkJqDq6QTOb0XGYAMGDwSwtpgpQyFDVymM4A5solRZ2CkbXUs7yzwQui9IuaiJSnYoLj4%2By8g1QabbNh%2FflLO1RGdRyYrm%2FFtiydxfmgKydHDFa8kuIKuVjRoczWQRDaQYFralpDKYzmfTjiMxg5abC0TH7%2FkO4eNKJKSoeDDZCrMFloKDfXncHTjQXugCNUy6wcuFKRUi3wUuxTB%2Be4Qew%2BzGmQe8vE4r%2B0kvlQ2phKfqbOZJsuvvILQK0AYd%2FBOOxekMd8n3bHnzLCkw948Z%2Fvwu%2BoEhnGmiqwMw1YqcvgY6pgGXPpyRae3TRTpAjqSojnziKdHB68mS2yBNuf6LSAT9y2zfE83gdnja9GHWjC569GwEomMgmjKCu1%2BYcBCdF5FPhI1CwjhOMfj23OQMUUe7VCulvmzSNWE1KbGwnOQFJZ5WcQQmWRXG15%2FiqYsTErtjwpSlD060gw71dXOB0TRofCi%2B7OovZM%2F1%2BhmMxqOp5lrADJtidHKGYfNd997upGeqEVY%2FpGe0&X-Amz-Signature=0feb9d77eab0964f16dcd31d8682f82fd7b0ff8f76c5e755ae2cdaf0885352ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
