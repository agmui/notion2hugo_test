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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLUOU4P%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgkYEhP9IzXUAfwq%2F6FEzLU21muT7kwIA%2FE12ItRKZpgIgEzTYnhOH2u0eNVgKnXFauf9hnwZm7bPnrUA45OCSB4wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzaYSglemAA8jFLWCrcA4C3m3CH0jKQ7WBPH08Hn%2FJDUjoOL5Tj1iDECH4%2BdgXnw8oNxA1aKEw%2FLGd6aqycJmE0BinH1%2Bt4WDLFAAVqN92d5TfAoxQbMS6OCgdwbcBspGZwlsmgt5Rzl6F%2Bb1cK8FDMGEOuZVWq7TmBTEMhFg5dUT%2FD9CR3jxFQS8H9MpvseepZBk8qtKIij2vwhUFpdJLFgd3kZy%2FLg4ly8iq4YmvZ%2B9QIH%2FozI5p1LXKLjwGPFaDpknPAoJ6IYRVh7MRlhtpA08t8YNBfKMxPUL9uQ2DnyA8XtS2ebM7TP3RBR14ihXhgxA8fkwi68CQX6JFVZKeiWy5%2F6gut7h28i%2FJYl82Al8NgGJjxgGtE5CuzMyRBNG%2FZz2PnpFCllusNn7Mq1ujWr0TiM912Z%2B%2FcAbvUkoi17zBSF3Jbi8CYqvFq4jbM1Vfuls02yAU47r%2FGoJl2zUx%2BxuvfTw4r2W%2FpI%2FmqboMFhQBCMoZuEOsywFXpjII%2FeIuqnZNoCCGu6GivMle6XgxL%2FX%2BXhhFnbPPThKspcQi%2FnbOxifhaqgnXp8dYO%2B2mxinDnhn4fWaGtcyP%2FvUFWv%2FSkXd8EPXTYhUGwEn%2Ff1fnx4g9zTJxWjjktS81oxXJHwlwve5tvSk1WZVMML7It8MGOqUB5P9R3o%2FArKmm8U0zGQLz7nhrhF6J56QwN2yRAjMN%2FzJXcZFx%2FoxSQjyzKjxj4TQ3R42m%2BTiUJdBfTSXcj%2F%2BPXdw66nozIIHGyJPRgdhiUXV2onldoF14KA4x2tkUhzIjfvc%2BiyMbCuUeJUoOVbwWfTQXkDu1GuFqGvGDYrO0zlWpUUQDEvdAEmiRIH97xzSZTQuU1%2B7%2BsDLlar4oSaT7TU68wsC3&X-Amz-Signature=d4d65d5a69c66c39836ec582cca3bd8021cea699c0e65904b6d342af97f79fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLUOU4P%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T051453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgkYEhP9IzXUAfwq%2F6FEzLU21muT7kwIA%2FE12ItRKZpgIgEzTYnhOH2u0eNVgKnXFauf9hnwZm7bPnrUA45OCSB4wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzaYSglemAA8jFLWCrcA4C3m3CH0jKQ7WBPH08Hn%2FJDUjoOL5Tj1iDECH4%2BdgXnw8oNxA1aKEw%2FLGd6aqycJmE0BinH1%2Bt4WDLFAAVqN92d5TfAoxQbMS6OCgdwbcBspGZwlsmgt5Rzl6F%2Bb1cK8FDMGEOuZVWq7TmBTEMhFg5dUT%2FD9CR3jxFQS8H9MpvseepZBk8qtKIij2vwhUFpdJLFgd3kZy%2FLg4ly8iq4YmvZ%2B9QIH%2FozI5p1LXKLjwGPFaDpknPAoJ6IYRVh7MRlhtpA08t8YNBfKMxPUL9uQ2DnyA8XtS2ebM7TP3RBR14ihXhgxA8fkwi68CQX6JFVZKeiWy5%2F6gut7h28i%2FJYl82Al8NgGJjxgGtE5CuzMyRBNG%2FZz2PnpFCllusNn7Mq1ujWr0TiM912Z%2B%2FcAbvUkoi17zBSF3Jbi8CYqvFq4jbM1Vfuls02yAU47r%2FGoJl2zUx%2BxuvfTw4r2W%2FpI%2FmqboMFhQBCMoZuEOsywFXpjII%2FeIuqnZNoCCGu6GivMle6XgxL%2FX%2BXhhFnbPPThKspcQi%2FnbOxifhaqgnXp8dYO%2B2mxinDnhn4fWaGtcyP%2FvUFWv%2FSkXd8EPXTYhUGwEn%2Ff1fnx4g9zTJxWjjktS81oxXJHwlwve5tvSk1WZVMML7It8MGOqUB5P9R3o%2FArKmm8U0zGQLz7nhrhF6J56QwN2yRAjMN%2FzJXcZFx%2FoxSQjyzKjxj4TQ3R42m%2BTiUJdBfTSXcj%2F%2BPXdw66nozIIHGyJPRgdhiUXV2onldoF14KA4x2tkUhzIjfvc%2BiyMbCuUeJUoOVbwWfTQXkDu1GuFqGvGDYrO0zlWpUUQDEvdAEmiRIH97xzSZTQuU1%2B7%2BsDLlar4oSaT7TU68wsC3&X-Amz-Signature=b46a055cffef5e9bbe5aba0f6f238afbceb745e08097a87bdc1ed015d90fa657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
