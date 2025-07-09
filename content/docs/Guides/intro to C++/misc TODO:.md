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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I5ZOYMO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg0%2BJEhiaaw0%2BNnyScEl7YifXC8EALgcxVmQ808u1t8wIhAI2noxWWat0TarFqLTVIiCe%2BWPRVQbyW9CZ5QNqpyZBcKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKd%2B8zl8KO3hNSEP4q3APVntyyD6WqEWUCQC5ShmduOxs7sRDY0zVQGujlcNQ2BgfO3e%2FlNTlKrRxmqnEApRqcRDb1mhuSd7ZH7Bh6BWJ31x%2BG26fOV%2FdLIC%2BudvlB7Qd2b3a%2BwloBo3g1yGENKaI9z4jn9814D%2Bv1w4uXeAgLlkTNK2hgAkFl%2FJExlw9zkzgDSwezP%2BllbBHenL5DSkyTJKwd9ojYihMk2rbvYgvmogPSaQWGKZMdd88lMrS4TdnQrfOulJoxqS5LBMGnmChalc49ZtEvKyFvjlI6%2BK%2BO9Gm3JBGX4Ru9bOf3bl1tA3KmRVADNqZJwRBw80IrOIski9nYBzjvjKxuDkUQmhpJqooHIo%2BB0dG6WzBPKIgGug8zBre%2F62N0truqRBlcs4Lm8qh0F%2B%2Fju4gfPfXVRn79VWfQGwAObAwj2Pz%2F1C3lGF3WMM%2F4tXhSZu0Raefa3e5qxmGgu6rAx08IcEwfrPZGAQcdGp0wDAT76fUQYGsdZfj4tWmc8U2UJfA0Z%2Boy9uGL7A7kfncgoCbADerRUbjvibMrv6TOEXvHJXt6QYH%2FSIIHnf%2FknaaKgtqsX2deZMrTfeFUHyVDt%2BOEcgSaemLwf3aZ%2F7K2yuHGyrkl5tXgIdXAFffiBffOuM7VizDy6rnDBjqkAVc%2FL5P5SWUJRNX1iV58vifAd8lwf9CivckNuBGGtZOrFU2MKO8dmghuZShguE%2FMTgzbwe0XL9MRg15ry2l4PD7KFdPXyxUqJnWyNcJVQNZhKOaPUATo8XSDkLioiR%2Bma9KG4W%2FsTZcKqJltD%2BKGcGzIbBTJLLmITFf6hdJLXv%2BGxHB23YVsrDZGh%2FskizO0EMzimXRzUi4GY2ekrp56S1z9ZIRB&X-Amz-Signature=a748786918e31333b76e0a80bbe2774a6153643df6df907bee287e3c8b4a903f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I5ZOYMO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg0%2BJEhiaaw0%2BNnyScEl7YifXC8EALgcxVmQ808u1t8wIhAI2noxWWat0TarFqLTVIiCe%2BWPRVQbyW9CZ5QNqpyZBcKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKd%2B8zl8KO3hNSEP4q3APVntyyD6WqEWUCQC5ShmduOxs7sRDY0zVQGujlcNQ2BgfO3e%2FlNTlKrRxmqnEApRqcRDb1mhuSd7ZH7Bh6BWJ31x%2BG26fOV%2FdLIC%2BudvlB7Qd2b3a%2BwloBo3g1yGENKaI9z4jn9814D%2Bv1w4uXeAgLlkTNK2hgAkFl%2FJExlw9zkzgDSwezP%2BllbBHenL5DSkyTJKwd9ojYihMk2rbvYgvmogPSaQWGKZMdd88lMrS4TdnQrfOulJoxqS5LBMGnmChalc49ZtEvKyFvjlI6%2BK%2BO9Gm3JBGX4Ru9bOf3bl1tA3KmRVADNqZJwRBw80IrOIski9nYBzjvjKxuDkUQmhpJqooHIo%2BB0dG6WzBPKIgGug8zBre%2F62N0truqRBlcs4Lm8qh0F%2B%2Fju4gfPfXVRn79VWfQGwAObAwj2Pz%2F1C3lGF3WMM%2F4tXhSZu0Raefa3e5qxmGgu6rAx08IcEwfrPZGAQcdGp0wDAT76fUQYGsdZfj4tWmc8U2UJfA0Z%2Boy9uGL7A7kfncgoCbADerRUbjvibMrv6TOEXvHJXt6QYH%2FSIIHnf%2FknaaKgtqsX2deZMrTfeFUHyVDt%2BOEcgSaemLwf3aZ%2F7K2yuHGyrkl5tXgIdXAFffiBffOuM7VizDy6rnDBjqkAVc%2FL5P5SWUJRNX1iV58vifAd8lwf9CivckNuBGGtZOrFU2MKO8dmghuZShguE%2FMTgzbwe0XL9MRg15ry2l4PD7KFdPXyxUqJnWyNcJVQNZhKOaPUATo8XSDkLioiR%2Bma9KG4W%2FsTZcKqJltD%2BKGcGzIbBTJLLmITFf6hdJLXv%2BGxHB23YVsrDZGh%2FskizO0EMzimXRzUi4GY2ekrp56S1z9ZIRB&X-Amz-Signature=20108587b379991bde9b7d2f382c5d56c92b41bd312b6bba9122c80842280e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
