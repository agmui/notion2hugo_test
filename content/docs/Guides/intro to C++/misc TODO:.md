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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R772ZVAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXaxoqUBvKov5KeACckXXo%2FuSZ%2FRuqUoi7qIrO3Jl4xAiEArj26x33R8MnRB9xKTxtEfq4Qq5J8o9XiTWS1UyhyWsQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrYg6mK3RM7mbfryircA78ByvjUNPe9AvtAgK73yMH9p8UDAXQaypgjg%2F5TeQWGtpQU9CnYwADJmka9Bi2eyJ5Ha1r6jUjJ4tqdCbbKnve8fzxWi%2F3%2FJzMEt7cprHhflR%2F0QFclQAyS7H4eDUXrievdLvmo7TPMpufvJH7wn4joO8QSXI7zvN6J3ewRTAgWykTpv1K67RTB%2Fj25XgzqsYnGeOuO%2F3OxQ70uh%2F602n49ZS2o%2BFfedJye4M3eW3ZLM9AUcJIJgzuWk1zNuQZuVXQE0jqpFzi8Dzg8IG7DglSgFgnmS6FyMHwJlAxupWofBEVyGSzhukaTGGZxHiVsLCG7%2FIV9utLcc4%2BEIfHQ4WOYMnvyAy7%2BI05zkv4rD5T26eNF67xKEDDm2grWpvcjGR1nQ0ao5PhPCwvSJ05UuZ62%2FSUbbW4zliO8MqiW%2BMYSA%2BzzPtpdwfyElL5OFlzzT5iJAni57y117n2h8tpUj%2FHq%2BoaTWATvri%2Fd6DpjYaBDt0rvemBGWjf43VQNNJFPpTOH1F1Lrai2Dl%2FC0Nf7cFYpOMKmrl7YhLHLNAwR%2FEZC7IDFsWMo0q%2BA1j4SxHNJrq4ZYgVS52kaVuoDesQ8L2meonLbV7U4dltoR7uRtlANz0QhfeNcpmS9OUi8ML%2FMo8QGOqUBqdgE4lg9mG88S%2BpyH%2B752t%2F%2BDeQwc%2FZdVsW2VXZ4msTkiFQjW2vlIMYCHVDcO3jL6YuvRmjqMVWd3q4PfjiScQxNpjtFDv1emHJZbqbV6pnbk5KjBfnw5NNETzimaS8q%2B%2BNTof0wwy0fA66qq5OCMeDwVYwh9YTZp84hSS5xW%2F4hD0Aawm5soUp7475LAkdYNAxIA2pjLb%2FlcbYdXur7%2BiUmQ1tL&X-Amz-Signature=07af4e4fa56cd0a8192e85aa1d295f3efe9e51f082804c8079a102c20593460c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R772ZVAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXaxoqUBvKov5KeACckXXo%2FuSZ%2FRuqUoi7qIrO3Jl4xAiEArj26x33R8MnRB9xKTxtEfq4Qq5J8o9XiTWS1UyhyWsQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrYg6mK3RM7mbfryircA78ByvjUNPe9AvtAgK73yMH9p8UDAXQaypgjg%2F5TeQWGtpQU9CnYwADJmka9Bi2eyJ5Ha1r6jUjJ4tqdCbbKnve8fzxWi%2F3%2FJzMEt7cprHhflR%2F0QFclQAyS7H4eDUXrievdLvmo7TPMpufvJH7wn4joO8QSXI7zvN6J3ewRTAgWykTpv1K67RTB%2Fj25XgzqsYnGeOuO%2F3OxQ70uh%2F602n49ZS2o%2BFfedJye4M3eW3ZLM9AUcJIJgzuWk1zNuQZuVXQE0jqpFzi8Dzg8IG7DglSgFgnmS6FyMHwJlAxupWofBEVyGSzhukaTGGZxHiVsLCG7%2FIV9utLcc4%2BEIfHQ4WOYMnvyAy7%2BI05zkv4rD5T26eNF67xKEDDm2grWpvcjGR1nQ0ao5PhPCwvSJ05UuZ62%2FSUbbW4zliO8MqiW%2BMYSA%2BzzPtpdwfyElL5OFlzzT5iJAni57y117n2h8tpUj%2FHq%2BoaTWATvri%2Fd6DpjYaBDt0rvemBGWjf43VQNNJFPpTOH1F1Lrai2Dl%2FC0Nf7cFYpOMKmrl7YhLHLNAwR%2FEZC7IDFsWMo0q%2BA1j4SxHNJrq4ZYgVS52kaVuoDesQ8L2meonLbV7U4dltoR7uRtlANz0QhfeNcpmS9OUi8ML%2FMo8QGOqUBqdgE4lg9mG88S%2BpyH%2B752t%2F%2BDeQwc%2FZdVsW2VXZ4msTkiFQjW2vlIMYCHVDcO3jL6YuvRmjqMVWd3q4PfjiScQxNpjtFDv1emHJZbqbV6pnbk5KjBfnw5NNETzimaS8q%2B%2BNTof0wwy0fA66qq5OCMeDwVYwh9YTZp84hSS5xW%2F4hD0Aawm5soUp7475LAkdYNAxIA2pjLb%2FlcbYdXur7%2BiUmQ1tL&X-Amz-Signature=3b1aec662ebd2879976f33131ad6a48f9a9542a98641d78a307593c2fb2a7dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
