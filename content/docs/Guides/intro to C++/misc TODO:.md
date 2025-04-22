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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3BRR6F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDF0T06MH3LSQlOxzBNl7eRuFdaWtTbF45dNRYXDHzq7QIhAJIhG%2FnY4Ae0EnfeTiCysH%2Bh%2Foc6LGBWkS8Ldody%2F%2BT1KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtYMYJiToQWSS3otIq3AO24dp6YE5ZJRYBAi%2BqD5eUohvfSVqih%2Bhwm3xqrBCZ%2BLEi66Ha6PlTRmq3hqxDcdqoYX28VhaawXjHuqLVM3G0kXv3rd%2BNL4ZwL0z7jy3mhVdwGIpOrSAU5cFW6NtSvxq%2F2zj%2BUHDgEFv%2FocH5NAeBA3wDJhsU4ZRYCKm%2B9i2sOfO0YSuV0o9uLlW5l84tHdNdEBUrkx12CA5rN%2Bxlt835msxgSwYg4yRVT2FHdRVMcAmoYHYJFxf7yOnBglUxwBrzu98xuP3%2F4CJ3Ez83gvTTZZOiM0F1NR%2FOYhMMR%2B8eaja1eS%2B33A9b7VBtCt3lH8ekNSofj4mn5vD4bXSRHCzkcDbbz9D%2FumTDaSd6fy1LN7cxLJxURqwImrLtKko0aQS%2BnOJWZOcIzrwquJLfinGRSSWvblchhUYA0b0Foo6rOaeZu6DuX4Y5aM0d0dzFrXbI9cAZarV9KlpVkkZz%2FZJq9P6hYOJZAUb5B8vehLWTW0KjInWG09QDB0iMa1Zbj06BrPx4Ti4kQVzPVOyxLZbPAWyWU5%2BnR04H8IqJbHUwh6zbojDEzwqzj23CMHqVHvKOfPzUY2iv%2BFZky6o3BSFuI6JOew3Gw2VAp5gFc4LTeWNi2ehQTFjfT%2FrkvDDM75%2FABjqkAeO%2FUsde6ri1YLLiojl2rRicwTW%2F09DbXXqRlZh9i3HO6r39ChtJnET%2B99nhQIHSA7KuOCvUky%2F%2FhgsuJ%2B1pe36KUb2uUiJY0Q4upcgSm7nqjAJmAWDZWQ6b%2BeqcVzxJ4yo8G6AARlyrh0u6czL1dJufi2oVnZoQLGJTj9G%2B23y6dfQYaggwq4OzBhiqDvy8%2Bc9w3YgaJv9ubned4kmrF9orwuPF&X-Amz-Signature=37cffc3565fe02dcd6775e696fb9965ccf9a2cfe54798380289a94426b1ebe49&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3BRR6F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDF0T06MH3LSQlOxzBNl7eRuFdaWtTbF45dNRYXDHzq7QIhAJIhG%2FnY4Ae0EnfeTiCysH%2Bh%2Foc6LGBWkS8Ldody%2F%2BT1KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtYMYJiToQWSS3otIq3AO24dp6YE5ZJRYBAi%2BqD5eUohvfSVqih%2Bhwm3xqrBCZ%2BLEi66Ha6PlTRmq3hqxDcdqoYX28VhaawXjHuqLVM3G0kXv3rd%2BNL4ZwL0z7jy3mhVdwGIpOrSAU5cFW6NtSvxq%2F2zj%2BUHDgEFv%2FocH5NAeBA3wDJhsU4ZRYCKm%2B9i2sOfO0YSuV0o9uLlW5l84tHdNdEBUrkx12CA5rN%2Bxlt835msxgSwYg4yRVT2FHdRVMcAmoYHYJFxf7yOnBglUxwBrzu98xuP3%2F4CJ3Ez83gvTTZZOiM0F1NR%2FOYhMMR%2B8eaja1eS%2B33A9b7VBtCt3lH8ekNSofj4mn5vD4bXSRHCzkcDbbz9D%2FumTDaSd6fy1LN7cxLJxURqwImrLtKko0aQS%2BnOJWZOcIzrwquJLfinGRSSWvblchhUYA0b0Foo6rOaeZu6DuX4Y5aM0d0dzFrXbI9cAZarV9KlpVkkZz%2FZJq9P6hYOJZAUb5B8vehLWTW0KjInWG09QDB0iMa1Zbj06BrPx4Ti4kQVzPVOyxLZbPAWyWU5%2BnR04H8IqJbHUwh6zbojDEzwqzj23CMHqVHvKOfPzUY2iv%2BFZky6o3BSFuI6JOew3Gw2VAp5gFc4LTeWNi2ehQTFjfT%2FrkvDDM75%2FABjqkAeO%2FUsde6ri1YLLiojl2rRicwTW%2F09DbXXqRlZh9i3HO6r39ChtJnET%2B99nhQIHSA7KuOCvUky%2F%2FhgsuJ%2B1pe36KUb2uUiJY0Q4upcgSm7nqjAJmAWDZWQ6b%2BeqcVzxJ4yo8G6AARlyrh0u6czL1dJufi2oVnZoQLGJTj9G%2B23y6dfQYaggwq4OzBhiqDvy8%2Bc9w3YgaJv9ubned4kmrF9orwuPF&X-Amz-Signature=5388e6c27f742856faefd214d9b0c456f260842990d80d217f4913641eb58fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
