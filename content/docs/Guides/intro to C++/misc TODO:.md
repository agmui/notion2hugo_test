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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBIADO6X%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBX6XyBljN97Ps9DgRPCgHU%2BLKVpTxTsnQOjJjVovhjIAiBQIe2Eh6uj%2F7Uucw8fz6%2BpETzU2RPZAWG%2B20Hy3EbvgCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM25XWazv84t%2BbF69JKtwDhn%2BOtEaADZr8hm3pElW5g8q11E8GaLGr9iMoP7d9EnTM6b4X18%2FIJlu9%2FYVe2dC2Vg4Uo8R%2BqS%2FQIzmxYct3nB5w3gW0nMhgYoJsUkfLmHKidizeLMugEGW7sLKi%2F3BujeyEdW6FWriWl62ZNTIyvpy0MBMn8Nfa2B0IGo%2Fb5sTZjNHgQlxJTIbJUrGjeDVySd24Fq71lvwGWK8katNn7o%2BbsXbBr5CnaPUMr4azLE2eee7XAQ3FDxLyNtQbEMrPOjXp3K8AAXqbPCoP8mv74hgFLwO1hTi%2F4z5jZhRtn%2Fl%2BWIPN%2FxVzCVgbZctk8JpxmSQFWdwwEw1mr7yDPMfmiO%2BQMl6hgMMA%2BICGZH2q4p7IrJTYmoTFVvw5OGtmtChvZ8Fk6O5cqCFz0oGmEHl8l4xr2rM138FYD8Gq6%2FJHe%2BKqac%2FXUXkqzGLs7BMP1trZaHJWzb9Qx7sEKudggYmM01Xy7KcKh1GNo18HxwRmqsWwbjlDJ9Z7y%2FpsTy%2F5gBgL7Oy21NjHrTCH625BfmoGDqDwj6mDAwH0v1jfh9j%2BZrTF9RBuCTktpwy819svkg0yaA%2FVmO6IfOmBLb%2Bzh1zXWlJoAiSttHTQgpWyCGur1aZMMFht8GPirio95tIwhILywQY6pgESp7KSBey%2Fc%2FMPS%2FeoENBf%2FHYuna97QzIVATTbCToifvHbXUhbAJQhNwUJexJgSrlT7b8j%2Fzda21z60KgSYsd9pfmJCFIBe%2BaWmIbVFxH46a4VPpCAe5f4raSp2NDHiBgYHCCZUvvaAARo8y2AhaHDDt9hTAADDxAmyDp35718WPu0iHVdArWIOw3tHeZ9%2BJr18rxHPdjh9DIXS3cvQgF15KLuIHQc&X-Amz-Signature=cc3d51ca284005d79f920f3f4ebf9209c2f7c73f1b0bdfc0f09fddbd9c10267f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBIADO6X%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBX6XyBljN97Ps9DgRPCgHU%2BLKVpTxTsnQOjJjVovhjIAiBQIe2Eh6uj%2F7Uucw8fz6%2BpETzU2RPZAWG%2B20Hy3EbvgCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM25XWazv84t%2BbF69JKtwDhn%2BOtEaADZr8hm3pElW5g8q11E8GaLGr9iMoP7d9EnTM6b4X18%2FIJlu9%2FYVe2dC2Vg4Uo8R%2BqS%2FQIzmxYct3nB5w3gW0nMhgYoJsUkfLmHKidizeLMugEGW7sLKi%2F3BujeyEdW6FWriWl62ZNTIyvpy0MBMn8Nfa2B0IGo%2Fb5sTZjNHgQlxJTIbJUrGjeDVySd24Fq71lvwGWK8katNn7o%2BbsXbBr5CnaPUMr4azLE2eee7XAQ3FDxLyNtQbEMrPOjXp3K8AAXqbPCoP8mv74hgFLwO1hTi%2F4z5jZhRtn%2Fl%2BWIPN%2FxVzCVgbZctk8JpxmSQFWdwwEw1mr7yDPMfmiO%2BQMl6hgMMA%2BICGZH2q4p7IrJTYmoTFVvw5OGtmtChvZ8Fk6O5cqCFz0oGmEHl8l4xr2rM138FYD8Gq6%2FJHe%2BKqac%2FXUXkqzGLs7BMP1trZaHJWzb9Qx7sEKudggYmM01Xy7KcKh1GNo18HxwRmqsWwbjlDJ9Z7y%2FpsTy%2F5gBgL7Oy21NjHrTCH625BfmoGDqDwj6mDAwH0v1jfh9j%2BZrTF9RBuCTktpwy819svkg0yaA%2FVmO6IfOmBLb%2Bzh1zXWlJoAiSttHTQgpWyCGur1aZMMFht8GPirio95tIwhILywQY6pgESp7KSBey%2Fc%2FMPS%2FeoENBf%2FHYuna97QzIVATTbCToifvHbXUhbAJQhNwUJexJgSrlT7b8j%2Fzda21z60KgSYsd9pfmJCFIBe%2BaWmIbVFxH46a4VPpCAe5f4raSp2NDHiBgYHCCZUvvaAARo8y2AhaHDDt9hTAADDxAmyDp35718WPu0iHVdArWIOw3tHeZ9%2BJr18rxHPdjh9DIXS3cvQgF15KLuIHQc&X-Amz-Signature=bcef50b9381320ab6b99e6a78442fff563f4a6c731b718225eecc9e12b59b9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
