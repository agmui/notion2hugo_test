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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ILHZXD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5vPfuLzHzBTKDJMGmq40DzUP7FFxcjjYzRx3LFGHuAiEAtKnkvPYbklJlokWGgj3EB6%2FVeL%2B864tw0ao3tLMw%2FZgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIqAL%2B0JHZV2tSl6lCrcA3fxNZfWvgHEcDLS4TQ7gA%2FvivdP2mQyl%2Bqpa8esTxzJW2oR7bcUZ9qNEHkvcypTLgehuQ9F0vcsNzYOaUF2DHXU8TFgQicWIOqNhpIiyYg2VGdC5PjFu8TIeVbZRl9CdE9ucsy6CVZAyZoa7EClglBZkwRr9hyOXV5BdmHNgLnryOcPuwM699RZmqqQ0C2H9ZLo%2FJhIRl7xoYXdzurY3%2Fqnv1%2BwzlFi2SFH5VsuF1L16e0R6Gg4YDAdUbF8wWT8PweRIVJIXUJupkkfipVzSO8xa3xNzlxRtqAbs%2FzMjpcdikgHTXrzdZShFkrlFkkEHPy4VGngub56xaOnMmnhBKzQrslxdqKRrsIHmjKJY6c7iHTYxKIpYeU5dbM3HTO1MRsnI%2FhaCIXbzabbN0lVgYitU0Q%2FHItkZbaU%2FWFR4TaUzL2WuiEPHIUqvsSaEKh%2FGVMqBrnV9NfnD%2FX4TZwOrUVB2clFk0ajiS6%2F1vm16f5Us29z91nYqIpjCl6vVz1%2BwPbeZ8UXwiAvH0PCsIawzYmpovDUMTuYtGfk4QuKqzayOsxyfc4Pl9WikPvqlXMj7x8RreLTV%2FzXQCVbWej2lL%2FOAb%2BuVFGQJ%2FrGKVJXq6bq3FmbSfLzo%2BOqjLLdMIOr4L4GOqUBOv67WR9xEe%2BxwTcca7orFV6bnxnUJe9hKS%2FWoyiu2y0AYIsUuv%2FvF%2BT%2B6D9rEhAe9R7ZbNVetGO97c%2BeBOJtOHQf9c1dRSXcIv2Fk7nEmSjdEbEiMe4lioaFRUQeVoxDaI0upsiL9Uddq38LofbtrdNG%2Fa1x0%2FvC%2FvA2IMRpaKQ6jnxvW84rGw11E2UktNQ50Qg8Vbo7FVgHLNREf1oVxMHsf9LR&X-Amz-Signature=e8a1a9654d307714bc7c78b8570944580f415075a5e980ea2c417e9ba17eedea&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ILHZXD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5vPfuLzHzBTKDJMGmq40DzUP7FFxcjjYzRx3LFGHuAiEAtKnkvPYbklJlokWGgj3EB6%2FVeL%2B864tw0ao3tLMw%2FZgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIqAL%2B0JHZV2tSl6lCrcA3fxNZfWvgHEcDLS4TQ7gA%2FvivdP2mQyl%2Bqpa8esTxzJW2oR7bcUZ9qNEHkvcypTLgehuQ9F0vcsNzYOaUF2DHXU8TFgQicWIOqNhpIiyYg2VGdC5PjFu8TIeVbZRl9CdE9ucsy6CVZAyZoa7EClglBZkwRr9hyOXV5BdmHNgLnryOcPuwM699RZmqqQ0C2H9ZLo%2FJhIRl7xoYXdzurY3%2Fqnv1%2BwzlFi2SFH5VsuF1L16e0R6Gg4YDAdUbF8wWT8PweRIVJIXUJupkkfipVzSO8xa3xNzlxRtqAbs%2FzMjpcdikgHTXrzdZShFkrlFkkEHPy4VGngub56xaOnMmnhBKzQrslxdqKRrsIHmjKJY6c7iHTYxKIpYeU5dbM3HTO1MRsnI%2FhaCIXbzabbN0lVgYitU0Q%2FHItkZbaU%2FWFR4TaUzL2WuiEPHIUqvsSaEKh%2FGVMqBrnV9NfnD%2FX4TZwOrUVB2clFk0ajiS6%2F1vm16f5Us29z91nYqIpjCl6vVz1%2BwPbeZ8UXwiAvH0PCsIawzYmpovDUMTuYtGfk4QuKqzayOsxyfc4Pl9WikPvqlXMj7x8RreLTV%2FzXQCVbWej2lL%2FOAb%2BuVFGQJ%2FrGKVJXq6bq3FmbSfLzo%2BOqjLLdMIOr4L4GOqUBOv67WR9xEe%2BxwTcca7orFV6bnxnUJe9hKS%2FWoyiu2y0AYIsUuv%2FvF%2BT%2B6D9rEhAe9R7ZbNVetGO97c%2BeBOJtOHQf9c1dRSXcIv2Fk7nEmSjdEbEiMe4lioaFRUQeVoxDaI0upsiL9Uddq38LofbtrdNG%2Fa1x0%2FvC%2FvA2IMRpaKQ6jnxvW84rGw11E2UktNQ50Qg8Vbo7FVgHLNREf1oVxMHsf9LR&X-Amz-Signature=2198e3392f45f12b15d481c79694147107fb4788410399da13e11a1065f24777&X-Amz-SignedHeaders=host&x-id=GetObject)

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
