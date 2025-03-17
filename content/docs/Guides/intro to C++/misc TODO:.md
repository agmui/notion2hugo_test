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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HT6PQMN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKiwOwjQwnBGfOZlQmZQAMCnG%2Fv3wWRwCHBqBJ%2Fg4MmgIhANScgbkq78Is6X6wWMwqI76Na%2FkZ2hwodiYnA3%2B9w%2FQxKv8DCEIQABoMNjM3NDIzMTgzODA1Igwo5Arzmkoeiqkuxsoq3APQJSbQVaQYAgKOI%2BwPadokfh0LUkY9B%2BVu4TeAEyt6BAFxGQtAvSkhtxfi6n3h8Qjvs%2Bda8NGduXfJSx3GApQ0e1bZtS1dPzA4nKyiKWihYYu5ug9l4H9MwJ55%2F01vld%2BRRNEyJb5Sgm6x13RqGfX%2FyyLp6NYzA2vhdg4hmze%2B2%2FGUY9hyn1E5xBflCefYAHctlkOhHCJylH1gTAuONqlddbs7s%2BCnVPXTEKB%2FC1iRW1SFiLrOHLxnaNzxPaJvgmW5CKfzCwh%2BIaTZIqOK5nicns33aufR4LKCuIDea2moUHXxUlqa4U1rqx5WACaY593FxLIegzlhxhECEaauxlXpV%2FX%2BAH6CkdICN88Z%2FpIQ7anrMN8f8kMzhPnyOUjHZ7DyGHeDAjJWt3l9abAmWnQ8%2FkN0xiI87ajnoJ0FAQBZIKbpnbZ18knGSCvHVt%2Fjlwo9pfZeP6Go8HDQgGg2j%2FbRAlQdsZxbyIXZKNzjb57msk6tIwELhJMcqIrCe%2F%2BjHvj1EgOzWwRn2z6EWKkx4vXlULDB%2FYlTm38kczrGK20UkB0ZJBG6DuoyRlWUx1Jtpgkc7S3BjfSc3VPafQ5Rb4PJYKgaAg2Q6QQC9VND4eqtXwebQb2cFsrR5twFlzDlzt%2B%2BBjqkAdeBqXa7fH%2Fhu3ALrpGUtJZ9fY%2BxOO8I55sHYLjkUX5LxlRMSfde6AKP07i%2F8GRP8x9cbOyJvmoh2V8NQuZYYukhPwyvItDEQWpX4912%2FMdIr2bfhdNMIFVxBgJmpQMrE108RntVy0SaT976JloIpFfA0jRIgk1VDrZLL6EPTwoDxYddf5VKdT8AHJusG%2BZ2EsBfI%2FQnvhc01QnIglDJ4V7dLXEJ&X-Amz-Signature=fa60148199ea15bdc30e783dcdd2d60bdefc3ebbfe4b278a85f839247ab08176&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HT6PQMN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKiwOwjQwnBGfOZlQmZQAMCnG%2Fv3wWRwCHBqBJ%2Fg4MmgIhANScgbkq78Is6X6wWMwqI76Na%2FkZ2hwodiYnA3%2B9w%2FQxKv8DCEIQABoMNjM3NDIzMTgzODA1Igwo5Arzmkoeiqkuxsoq3APQJSbQVaQYAgKOI%2BwPadokfh0LUkY9B%2BVu4TeAEyt6BAFxGQtAvSkhtxfi6n3h8Qjvs%2Bda8NGduXfJSx3GApQ0e1bZtS1dPzA4nKyiKWihYYu5ug9l4H9MwJ55%2F01vld%2BRRNEyJb5Sgm6x13RqGfX%2FyyLp6NYzA2vhdg4hmze%2B2%2FGUY9hyn1E5xBflCefYAHctlkOhHCJylH1gTAuONqlddbs7s%2BCnVPXTEKB%2FC1iRW1SFiLrOHLxnaNzxPaJvgmW5CKfzCwh%2BIaTZIqOK5nicns33aufR4LKCuIDea2moUHXxUlqa4U1rqx5WACaY593FxLIegzlhxhECEaauxlXpV%2FX%2BAH6CkdICN88Z%2FpIQ7anrMN8f8kMzhPnyOUjHZ7DyGHeDAjJWt3l9abAmWnQ8%2FkN0xiI87ajnoJ0FAQBZIKbpnbZ18knGSCvHVt%2Fjlwo9pfZeP6Go8HDQgGg2j%2FbRAlQdsZxbyIXZKNzjb57msk6tIwELhJMcqIrCe%2F%2BjHvj1EgOzWwRn2z6EWKkx4vXlULDB%2FYlTm38kczrGK20UkB0ZJBG6DuoyRlWUx1Jtpgkc7S3BjfSc3VPafQ5Rb4PJYKgaAg2Q6QQC9VND4eqtXwebQb2cFsrR5twFlzDlzt%2B%2BBjqkAdeBqXa7fH%2Fhu3ALrpGUtJZ9fY%2BxOO8I55sHYLjkUX5LxlRMSfde6AKP07i%2F8GRP8x9cbOyJvmoh2V8NQuZYYukhPwyvItDEQWpX4912%2FMdIr2bfhdNMIFVxBgJmpQMrE108RntVy0SaT976JloIpFfA0jRIgk1VDrZLL6EPTwoDxYddf5VKdT8AHJusG%2BZ2EsBfI%2FQnvhc01QnIglDJ4V7dLXEJ&X-Amz-Signature=b37bb08f3ae9392755603e98f479ac89489f6dbd9d53920f1036e80fd5f44043&X-Amz-SignedHeaders=host&x-id=GetObject)

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
