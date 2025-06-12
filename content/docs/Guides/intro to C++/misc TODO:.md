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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIXLCPTZ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIA4zAYOMLHJiYgW4VHG7S8ctWe21o0ATYxqelZOU7JQ4AiBiJkb6eD9ZpdKFZsWBXJtTv7nwgwKZUPC2rDcDYcnMhSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BcCfcYoJRlNkC5NKtwDeE44yCMAIiSgJEjGpL8LJO%2Fwy%2BLEGDMTdb9KqIFlx9NDywFGjRhuOjA81dFAWucX%2F0Z%2FPs9LoX4Cmx0zq4iq95amW%2BMm2M43cOxCKDjYnTiZysWZfvvckLoXGu9grUAmt3liwCdZPbNXTFgvykxoY2Cfl2pnDy2Sg75%2BK1Dm%2Blf0Pa0xfMCyWdyn15qcdRYdOeoRCwFE5t6dLOjJ8Z8IEmzmdfCH0RW4sJ1GOy2kSkMhPbXhFQNz3ddofAte3v2sYkQbkgM8B2v63OCZeHqxss9G1c1Kv3Lrg%2Fll8SFUmyzxpLCKOfN4tmgPJPEEuLQoArKFp9yxAkswMqu8EtlCwKD5W4IxkAyqiDhxZAUjETD5DjvIjreGTyEkDdo5BTu8ALv%2FSrB17uArjQaAlQmc5eGgT0PiycnK82VwQDfm57Kz1v1xFdaLx4euhzUp%2FvdGKOU5JKP7aI2xDO8dD6Lh6SKrhDbcSQt51HVguP6HuOiwEJwn4E4Wz5bRkKYoy1MCFuhDWPP%2FOaxIREwQKnMEzW4TeJfLYneDbIT06aTc%2BaSnu2djFvcRaWlr%2FN2jUQ%2FnP5uro9iWk7zBMvLQzJyj4mYhR%2FPDiQ1XbPT0oYrT7EV5%2FwSZK%2FgCx3GNtAcwpJSpwgY6pgEjlG4TZse3LgT%2B5cpLomQ5ooylcGWyd%2B17OWLg6QPjpUnziVmXE4LcRF%2FnZPXdlBr0HhT43NleRiZkTnhYfZGiM7CYWqitD5xCvY3podfT86WYf9aJMMNcWbIkjk85elvkTmTFiv8zbwBSdy1494qfouz%2Bxj80zgJ5n20ANrBPHmzVEvTma9Yj0Uw0VxPrPwrL9EytZ0UAiTWbFARRjaLhqt51Xbjd&X-Amz-Signature=2e9440d7645638bdafd0a0df796c7f68afec44dcc1c56ead38d077e7b6fbc12c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIXLCPTZ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIA4zAYOMLHJiYgW4VHG7S8ctWe21o0ATYxqelZOU7JQ4AiBiJkb6eD9ZpdKFZsWBXJtTv7nwgwKZUPC2rDcDYcnMhSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BcCfcYoJRlNkC5NKtwDeE44yCMAIiSgJEjGpL8LJO%2Fwy%2BLEGDMTdb9KqIFlx9NDywFGjRhuOjA81dFAWucX%2F0Z%2FPs9LoX4Cmx0zq4iq95amW%2BMm2M43cOxCKDjYnTiZysWZfvvckLoXGu9grUAmt3liwCdZPbNXTFgvykxoY2Cfl2pnDy2Sg75%2BK1Dm%2Blf0Pa0xfMCyWdyn15qcdRYdOeoRCwFE5t6dLOjJ8Z8IEmzmdfCH0RW4sJ1GOy2kSkMhPbXhFQNz3ddofAte3v2sYkQbkgM8B2v63OCZeHqxss9G1c1Kv3Lrg%2Fll8SFUmyzxpLCKOfN4tmgPJPEEuLQoArKFp9yxAkswMqu8EtlCwKD5W4IxkAyqiDhxZAUjETD5DjvIjreGTyEkDdo5BTu8ALv%2FSrB17uArjQaAlQmc5eGgT0PiycnK82VwQDfm57Kz1v1xFdaLx4euhzUp%2FvdGKOU5JKP7aI2xDO8dD6Lh6SKrhDbcSQt51HVguP6HuOiwEJwn4E4Wz5bRkKYoy1MCFuhDWPP%2FOaxIREwQKnMEzW4TeJfLYneDbIT06aTc%2BaSnu2djFvcRaWlr%2FN2jUQ%2FnP5uro9iWk7zBMvLQzJyj4mYhR%2FPDiQ1XbPT0oYrT7EV5%2FwSZK%2FgCx3GNtAcwpJSpwgY6pgEjlG4TZse3LgT%2B5cpLomQ5ooylcGWyd%2B17OWLg6QPjpUnziVmXE4LcRF%2FnZPXdlBr0HhT43NleRiZkTnhYfZGiM7CYWqitD5xCvY3podfT86WYf9aJMMNcWbIkjk85elvkTmTFiv8zbwBSdy1494qfouz%2Bxj80zgJ5n20ANrBPHmzVEvTma9Yj0Uw0VxPrPwrL9EytZ0UAiTWbFARRjaLhqt51Xbjd&X-Amz-Signature=8926836f26683f3f9822aa8c90a28f7533da25a840bd5e86f436aa46d732c40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
