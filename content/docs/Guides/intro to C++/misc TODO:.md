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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOPYMD7X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVSA5r4GPwtaLzoinr3aHMgWyORLaruffv1dmvTxmGqAiASmsS%2BdWZXgpe6vCYk4HqOQJxxdFn1QzaFIdesLDpCbir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMI0RITlDCmRTK2aR%2BKtwDNjo7n%2Bhm%2F81xhVsRnmSK1gvp0vXhug6UfNsSiPL%2Bq3KoZ2J4gXd0C%2Bh7rW8Q1nLOhzgMIMN4%2FTrDqrg07hqtxgOoD2mWgKZvPjcKYT4ffbTZtzWcA3d4t0WqvQOnK5UjED53YibHQkLCNx3h8ibLP09qXJHzAHZ6OlyFFAMiU0PsLel7gprTG0c4LnAlGKrp4kDtdvYskb7NI2vh3rEV7S1YJHELkobVxSsKCbg7P6Lx8AjhOhxjqOncVmbQE6NEPI3m8oD6qRya0h19Zs1Bciz5pborS8L8t%2Fa2u4rknw81SiPtp3DkNQb4qKRJvxkW9MRd7vfwNzCXNafyW1k%2FQ%2BRHrRyoqBjEf3GWrapLvzOZRp8JLqDCi8Vrjs%2BIDyv%2Fz4UIG5JutwH699nLvKcb36vgdCe3xdFN7wHdTxnZ6oszIkxT8H6Ca60JhZIVG%2FoQVVLcm79%2BL0D0fEwnLFs%2BJEBe7tPTXvDYFpCg68AXXKlhJvNdgg5RSyZIK%2BIKRYRkfTKQBPz7IaqebefXij0%2FFIlNa2Dtv1VP0kCs2G6Z704PfNU%2Fibwu2vnM0zuQs75fgvM1M%2FFRCWm8pfwdyhiIwFa6eATM7RLm%2FK9Ad0dkQmqW7oc8AGz5AN9SzpcwpNKvwAY6pgHYVIY%2FMyY%2B68xdrd62w1UzU%2BfzyDJcNp00sgUSry%2BW6%2B77Y4FnrT2iC6S9VvzFFxZ2V1737MAzDYJcldJquisACG2CWQQddxSQLb1By1LVug%2FXczj7B0ZY83Zt0KjH6s0l%2BSlMizvfahDtHhTrcyYO3wY%2BE0qpJa3OqjWTD0%2FoOV0mct7n1J%2F8kEIS585E%2FUadj4aybg7GPMs3Zlrz5JlNBBcbO22K&X-Amz-Signature=4e51a15ef892056b0c2681bcbe7690153d4eb0df6cb70aa95a823c1fc15bc104&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOPYMD7X%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVSA5r4GPwtaLzoinr3aHMgWyORLaruffv1dmvTxmGqAiASmsS%2BdWZXgpe6vCYk4HqOQJxxdFn1QzaFIdesLDpCbir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMI0RITlDCmRTK2aR%2BKtwDNjo7n%2Bhm%2F81xhVsRnmSK1gvp0vXhug6UfNsSiPL%2Bq3KoZ2J4gXd0C%2Bh7rW8Q1nLOhzgMIMN4%2FTrDqrg07hqtxgOoD2mWgKZvPjcKYT4ffbTZtzWcA3d4t0WqvQOnK5UjED53YibHQkLCNx3h8ibLP09qXJHzAHZ6OlyFFAMiU0PsLel7gprTG0c4LnAlGKrp4kDtdvYskb7NI2vh3rEV7S1YJHELkobVxSsKCbg7P6Lx8AjhOhxjqOncVmbQE6NEPI3m8oD6qRya0h19Zs1Bciz5pborS8L8t%2Fa2u4rknw81SiPtp3DkNQb4qKRJvxkW9MRd7vfwNzCXNafyW1k%2FQ%2BRHrRyoqBjEf3GWrapLvzOZRp8JLqDCi8Vrjs%2BIDyv%2Fz4UIG5JutwH699nLvKcb36vgdCe3xdFN7wHdTxnZ6oszIkxT8H6Ca60JhZIVG%2FoQVVLcm79%2BL0D0fEwnLFs%2BJEBe7tPTXvDYFpCg68AXXKlhJvNdgg5RSyZIK%2BIKRYRkfTKQBPz7IaqebefXij0%2FFIlNa2Dtv1VP0kCs2G6Z704PfNU%2Fibwu2vnM0zuQs75fgvM1M%2FFRCWm8pfwdyhiIwFa6eATM7RLm%2FK9Ad0dkQmqW7oc8AGz5AN9SzpcwpNKvwAY6pgHYVIY%2FMyY%2B68xdrd62w1UzU%2BfzyDJcNp00sgUSry%2BW6%2B77Y4FnrT2iC6S9VvzFFxZ2V1737MAzDYJcldJquisACG2CWQQddxSQLb1By1LVug%2FXczj7B0ZY83Zt0KjH6s0l%2BSlMizvfahDtHhTrcyYO3wY%2BE0qpJa3OqjWTD0%2FoOV0mct7n1J%2F8kEIS585E%2FUadj4aybg7GPMs3Zlrz5JlNBBcbO22K&X-Amz-Signature=ea4e23dd799896a54df76eaa0c7db0c357f2e3d01186f7fda70b029a374907d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
