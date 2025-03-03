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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWOECDU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIDosI%2BP7A7G%2F4P6BS7wF1fYu7maTb8ZLY8NyCc5HEAiA2AamV%2Fhv6EjCjorahE6GXMp1I6ObTFFT%2Fo8ZQ%2FbxdqyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpT1myJMEwAgxHj9cKtwDOxKDdi7lhaiWtpvCV46%2BKP%2Bvybq%2FMEmEmLeRLB79XTCemwrxSdDyQt8Rg8YDgCcmLobhGXgIrDkEDEuTjhVYTO%2F6qjJP45VbnTrAb0lU1VbtO81OvYYxsr%2BBvPjEdIukR7oW0wDa%2BxOHPMMm7ooabOgrK5SgtNCiPRk4Em%2BiKfpD7TsiI86RzvOvUBVnYI3HkV8l71Qry06W8lq%2BB1lATxDMYiDbQslULs3%2F6vLzXtVbLCyIRYuQuTfGYyJvnO0NYuLOFak444o0QshXqC3XTFDqbclQSgpF4L%2FaYrFUOhDFuim3YY6Tye0KJXEunLwwlLF6x0hm3cs%2BeDX7yRmeZD6oQvouwU9XQNfVqfzJERvebuZrGEoElPgJw%2Ftvspx5pu23y817MyNO%2FH6DVV%2BBsljxOV7KKNIx4uBrw3T%2BKeIEQqR%2Bq6XP%2BlYGfry9SmW9RxQRYy3BeZ5LpVwcWnWN30DXFHhhQNpGteAvUvs4yjB40eG7hbzJXq4QF8XrFWSVA%2Be9xZbDbUWO33eWS%2F3yO9Snv%2FR%2FABdnNKi5AMxWFQq4EomhJ%2BOvxfRpgCaMPwheE0CI%2BlHMgVz5RI06IESYHLKdVByQrG5xvP2PYEe%2BMKspnnhhuPZ9JlGwcVYwnLyXvgY6pgGRjlclXawfEH1z77vItmntfr%2BNTRmk43BSRUCOmJa%2Ft3PdpUp%2B4PNMWy5wemLpONHLiomqOVx4ShY0HzxOa7KgUABvuu8GtiUSkiBmN2pnaN05DdZpvogY0%2F%2F79B9hcJBk0Z9sAJRYm4rue%2BbFQeuCo8uKRRCH29tat2xVhDZhbiOZtsywtXGuxhQ1geeLGCDh8SGB1GCehZ%2Fr%2BLozyE%2Bvsz74dhTO&X-Amz-Signature=3fe63cadaf92c2bee5fa59fed689099c7dc79e92f6ec1b12e55f929e193fcc69&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWOECDU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIDosI%2BP7A7G%2F4P6BS7wF1fYu7maTb8ZLY8NyCc5HEAiA2AamV%2Fhv6EjCjorahE6GXMp1I6ObTFFT%2Fo8ZQ%2FbxdqyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpT1myJMEwAgxHj9cKtwDOxKDdi7lhaiWtpvCV46%2BKP%2Bvybq%2FMEmEmLeRLB79XTCemwrxSdDyQt8Rg8YDgCcmLobhGXgIrDkEDEuTjhVYTO%2F6qjJP45VbnTrAb0lU1VbtO81OvYYxsr%2BBvPjEdIukR7oW0wDa%2BxOHPMMm7ooabOgrK5SgtNCiPRk4Em%2BiKfpD7TsiI86RzvOvUBVnYI3HkV8l71Qry06W8lq%2BB1lATxDMYiDbQslULs3%2F6vLzXtVbLCyIRYuQuTfGYyJvnO0NYuLOFak444o0QshXqC3XTFDqbclQSgpF4L%2FaYrFUOhDFuim3YY6Tye0KJXEunLwwlLF6x0hm3cs%2BeDX7yRmeZD6oQvouwU9XQNfVqfzJERvebuZrGEoElPgJw%2Ftvspx5pu23y817MyNO%2FH6DVV%2BBsljxOV7KKNIx4uBrw3T%2BKeIEQqR%2Bq6XP%2BlYGfry9SmW9RxQRYy3BeZ5LpVwcWnWN30DXFHhhQNpGteAvUvs4yjB40eG7hbzJXq4QF8XrFWSVA%2Be9xZbDbUWO33eWS%2F3yO9Snv%2FR%2FABdnNKi5AMxWFQq4EomhJ%2BOvxfRpgCaMPwheE0CI%2BlHMgVz5RI06IESYHLKdVByQrG5xvP2PYEe%2BMKspnnhhuPZ9JlGwcVYwnLyXvgY6pgGRjlclXawfEH1z77vItmntfr%2BNTRmk43BSRUCOmJa%2Ft3PdpUp%2B4PNMWy5wemLpONHLiomqOVx4ShY0HzxOa7KgUABvuu8GtiUSkiBmN2pnaN05DdZpvogY0%2F%2F79B9hcJBk0Z9sAJRYm4rue%2BbFQeuCo8uKRRCH29tat2xVhDZhbiOZtsywtXGuxhQ1geeLGCDh8SGB1GCehZ%2Fr%2BLozyE%2Bvsz74dhTO&X-Amz-Signature=3fb6df8b9905ce199dfd9d424e2f5b2df3654062877adfb6b074b37d0b070d22&X-Amz-SignedHeaders=host&x-id=GetObject)

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
