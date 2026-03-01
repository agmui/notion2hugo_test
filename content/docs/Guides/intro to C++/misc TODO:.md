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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIBB5JB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH2iYGPCyM3Qa%2FXNz33It3B8AZZwSOjDGxuSwFxC5oDAiBIXLMvXpVd1QWS1%2Fj9mUhop8k5FdBmwKJw8fB0mOvtqSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMPV3X%2FJxl3GmYXMe8KtwD2M2SoZ%2Fgb8Fsb4DoIWllGFZoGd03AJ6%2FmAZfSIpYWohGZvown6EdTaCV3brUzeqRjqZZXFwBjKOMzC7lv5VFW04rwMqYwolMAG45vT1N9VJO%2Fwv6oX9DOIA1A9AbX4012X0H2mnOxOa7N2OuidQ2pCn9KTrxlz795WVk2c08KRq7U7qPwG6sbV%2FVYf4mwgIuq8K5odUxsM5oakqwLHG8A7NVJdWOG36MpzfblNDEZ%2FCYTWC8fvRSpmDzEE1yvNMv1beONjuS2vsOQ0RP6F2VlW7KZ3PtfZSjDnLDBL1zbUYyftp0xzrtLdTf5HdqMFejrOjVLRBtDibEX%2B5WxqmTmW7EkGhrjpwhfCpsJ7lm%2FgsJei8Q3R2wW9sRr1lJIvWsTn0E5vnyTvGzmzy85oFVvsHOugiZgKSSPHqEkwrpD8ncclPLa7wLbGNjxbFItZw7QpoMrLTEjsZ9ohROoT9a17t5pwcnl998osHJTPJr8wzcMvSskHCvwnDh3Z%2By703u8KkPoPvZtswSMqsJmS25dKPhdceyBFotr151LdsJayKwi8HD49st%2F9FqyIfPX%2B3uJUmUTDKDUSz%2Bd25FIwf%2Br9vS8NQpQOP9HH25JWVZdUXyO8A3DG14sWLsFxkwjq6OzQY6pgE8jQk4T0rUhtQUmA8FkjmglXg5F%2FIepRvyKbvXAgCIFE44qo3aGx8V4ePdX51T3i4sAelZLUtdcrVBK8oLOm%2BFMdqJ8%2BoS1MSsoSpUzicZyOb79RoItOMRkuJvWX%2FNZpwbfhFqGedfN%2FHxTPHXsUXL4nOAIBC0viySbQW7KuKGvdPs90bsiaWH4P0zW6chUxK6peifO8IotLAP9Rhsh2eSyx%2FlNiwM&X-Amz-Signature=a8c97056b63fa4c9bb3b53335fe66e8e08eac3cf5378df2d01ea4c672ca65c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIBB5JB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH2iYGPCyM3Qa%2FXNz33It3B8AZZwSOjDGxuSwFxC5oDAiBIXLMvXpVd1QWS1%2Fj9mUhop8k5FdBmwKJw8fB0mOvtqSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMPV3X%2FJxl3GmYXMe8KtwD2M2SoZ%2Fgb8Fsb4DoIWllGFZoGd03AJ6%2FmAZfSIpYWohGZvown6EdTaCV3brUzeqRjqZZXFwBjKOMzC7lv5VFW04rwMqYwolMAG45vT1N9VJO%2Fwv6oX9DOIA1A9AbX4012X0H2mnOxOa7N2OuidQ2pCn9KTrxlz795WVk2c08KRq7U7qPwG6sbV%2FVYf4mwgIuq8K5odUxsM5oakqwLHG8A7NVJdWOG36MpzfblNDEZ%2FCYTWC8fvRSpmDzEE1yvNMv1beONjuS2vsOQ0RP6F2VlW7KZ3PtfZSjDnLDBL1zbUYyftp0xzrtLdTf5HdqMFejrOjVLRBtDibEX%2B5WxqmTmW7EkGhrjpwhfCpsJ7lm%2FgsJei8Q3R2wW9sRr1lJIvWsTn0E5vnyTvGzmzy85oFVvsHOugiZgKSSPHqEkwrpD8ncclPLa7wLbGNjxbFItZw7QpoMrLTEjsZ9ohROoT9a17t5pwcnl998osHJTPJr8wzcMvSskHCvwnDh3Z%2By703u8KkPoPvZtswSMqsJmS25dKPhdceyBFotr151LdsJayKwi8HD49st%2F9FqyIfPX%2B3uJUmUTDKDUSz%2Bd25FIwf%2Br9vS8NQpQOP9HH25JWVZdUXyO8A3DG14sWLsFxkwjq6OzQY6pgE8jQk4T0rUhtQUmA8FkjmglXg5F%2FIepRvyKbvXAgCIFE44qo3aGx8V4ePdX51T3i4sAelZLUtdcrVBK8oLOm%2BFMdqJ8%2BoS1MSsoSpUzicZyOb79RoItOMRkuJvWX%2FNZpwbfhFqGedfN%2FHxTPHXsUXL4nOAIBC0viySbQW7KuKGvdPs90bsiaWH4P0zW6chUxK6peifO8IotLAP9Rhsh2eSyx%2FlNiwM&X-Amz-Signature=fde700a0bf166854a1d5f49f7e92d9572189498ab2ec66df53d0fdf72ff69793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
