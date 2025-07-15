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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YY45OL%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICitOS4EBTtPv2Vt5yM6FzRkl%2FB3WhRorG1LC5iY25TqAiAGc71v5gTudpveoLZAyfrmDwUwAF%2Bylrbpiew686aqDCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGM8JMNby4wLAkM0sKtwD0JmkX8VX3mk6IBhe4%2Bj%2B0N%2BI%2FrHUoq7xoYGNc6YfKeJbcOTjeKG1Rigld1TNA4Gk%2BUH9Yzd9pPSDlNIyVwur4Gt40SOQLNVLtgv8LVFMdcovY8MDX4o3QPW2SB2Na4qp3VqAO%2B7%2BnJadovZsQP3zV8dh5B97v1d6T2jBW5m9w%2FBGifblT1ctpwWSjaI2uU3ZIN79k%2BqJfcB%2F1aW8rumgkryTkuJSwO5U4glisMHrAIsOFbIRwUb2v4Zelpx8nYMGiPK37AsRbA4i%2FOvc0voUjsQFxIXYrT1%2BPok51WMMHQ6pZUipIVTpeZ0IrPytCuSQyXhOpupuhUfPhoX9yqt9t%2FcQ%2BizH5oKV%2BR%2FKYPITwA7YML9UDDe77FdcFBC%2BibSlaLuWpmzR2knrzeknOz2IUFDuKrV3qAv81Ws%2BNycIv5zXyTdMCTswPKhR7rveJlTjx43m8FJ%2F6LRkP2z8dYrHehXBnrIyXy8UjZJBPxuA58V80Zn82z5Ob0wYB%2Bzm4tdM%2BSpvgymZFh8CrtN9hmxrKZyqtBoc1UY4ixmTAn7OE1F2wBQAgiXjLHRao5iJBRe76dwx5tp1ZXs%2BxWgINwGppOGajdhKMm8e0%2FHJYh0yihywkcGd5DCLWpELOTwwztnZwwY6pgGvJk1WHPZG6hOZs1tjlXg%2Ftx4eStNQpdP6sAaBvbyDESirvX41uL2PB%2Bt%2F6VUQAMGVqDRC2eh44aTOj7FZq4%2FH3esk%2BUtCpsb2dnAL1eees28JQ%2B9g%2BLLbzlGhPIQlKZofhqLA6JV3cfM1vuiT0nPBzKKY8WuL8xm8Q89urR29I1m5Ur%2FrR0kFUqdJdKDbXmFFf1EmQipEAE3BZ%2F4wonjUO9EZFtJr&X-Amz-Signature=1e93a22f64df981e24a6e0bfc22f4dab96e601df9f6fe3d3b430f2837387ca65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YY45OL%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICitOS4EBTtPv2Vt5yM6FzRkl%2FB3WhRorG1LC5iY25TqAiAGc71v5gTudpveoLZAyfrmDwUwAF%2Bylrbpiew686aqDCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGM8JMNby4wLAkM0sKtwD0JmkX8VX3mk6IBhe4%2Bj%2B0N%2BI%2FrHUoq7xoYGNc6YfKeJbcOTjeKG1Rigld1TNA4Gk%2BUH9Yzd9pPSDlNIyVwur4Gt40SOQLNVLtgv8LVFMdcovY8MDX4o3QPW2SB2Na4qp3VqAO%2B7%2BnJadovZsQP3zV8dh5B97v1d6T2jBW5m9w%2FBGifblT1ctpwWSjaI2uU3ZIN79k%2BqJfcB%2F1aW8rumgkryTkuJSwO5U4glisMHrAIsOFbIRwUb2v4Zelpx8nYMGiPK37AsRbA4i%2FOvc0voUjsQFxIXYrT1%2BPok51WMMHQ6pZUipIVTpeZ0IrPytCuSQyXhOpupuhUfPhoX9yqt9t%2FcQ%2BizH5oKV%2BR%2FKYPITwA7YML9UDDe77FdcFBC%2BibSlaLuWpmzR2knrzeknOz2IUFDuKrV3qAv81Ws%2BNycIv5zXyTdMCTswPKhR7rveJlTjx43m8FJ%2F6LRkP2z8dYrHehXBnrIyXy8UjZJBPxuA58V80Zn82z5Ob0wYB%2Bzm4tdM%2BSpvgymZFh8CrtN9hmxrKZyqtBoc1UY4ixmTAn7OE1F2wBQAgiXjLHRao5iJBRe76dwx5tp1ZXs%2BxWgINwGppOGajdhKMm8e0%2FHJYh0yihywkcGd5DCLWpELOTwwztnZwwY6pgGvJk1WHPZG6hOZs1tjlXg%2Ftx4eStNQpdP6sAaBvbyDESirvX41uL2PB%2Bt%2F6VUQAMGVqDRC2eh44aTOj7FZq4%2FH3esk%2BUtCpsb2dnAL1eees28JQ%2B9g%2BLLbzlGhPIQlKZofhqLA6JV3cfM1vuiT0nPBzKKY8WuL8xm8Q89urR29I1m5Ur%2FrR0kFUqdJdKDbXmFFf1EmQipEAE3BZ%2F4wonjUO9EZFtJr&X-Amz-Signature=d2db8c236256af99d9ee24a755d57ea6d12e8e1d76ad2536c14195b2efcefb31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
