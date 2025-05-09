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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVU2XOC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRYNgzfOS6Y8Gk%2FSOkh8ui62pUeUOrRsYIWCFA4SbfOAiByWzqESlCkraxEgatmTLkT8xdsM6SveVkoLhPbdIAifSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLukx5n1quz%2F9wz2KtwDwJIvhsW3w5WdQGwrd7oiogOQ508OmQy1jKnSGXyzWdF0E6BxlxxknGgotUd%2FaSQm%2BMZJWXIxF0o%2FGVtkYkymAKYMDSheBQZGb2J48NtWjH3LMoUzc0kwAFuwBzEfPJHMg5IvG9yGINdKyfuE8P2JvzDwH3SuzrC74L%2FVNI5sbI73C2hP%2FbH%2FGpJHhk7RamUm1njh8xWcUPWk8aESNRXnrwmn%2BpGpU0T%2F1zk7%2BvXSvrUcewjYaDdfKSLZC3lYBMJbFa493qiwvTNlcnCcRLXsyL%2BROVmFJMoEBn3woirnIysz7xCiC1bSdR7PF8VUvou7G5%2BpAzgC9ksEEq4sr2ireMzvDCcCYZFAOjevJbPpa6jy7RaNzMdsEyNiPvo3t5RCQet2icg849dwbKCr9wcbqY9z%2BBKQ8H6AEwAzIQ9dgjt3ZTgKoid5jd%2FLh6VMPBEzQQ7ePOREgzcukh7mY7Qe8CUUApJEezBbdiCzJfXPCAOVmXUPTZ494Ef%2BvzlJyItnSJjRTzEtsBfOb1Se4zb9Y64hjtgqhQnMD8qiGrSppcWuJZnKKdpU6dwWLPBHIKxI%2F4p7AnAoExp1L6Y1CZpjvhdHR9%2FbrdpKTrbw9ZY0EzJx%2BAx0R%2B%2B8P8CYVzsw0cT5wAY6pgEyg9flkrfvjhI%2BYjBMWCKPBWffwYhhnjlruh6N34fSiNosBxZVKCBpP08W0UcZ6XUotJk%2BQiiaUMnaa2OUvHxgq6VcKOJYafk86tqWwnHtb0BtjGkz0ptzGGS1t5l12H%2Fv2IRhOtg992cB5xj0OUiBOLfiNGe8kysr5BOwrnbagc0N8ChEYJ6MZ30HGeWpq3npAaOZ76F5DHS%2BeFyCIw3YHQwwDEnf&X-Amz-Signature=044d215f96742ce2cd100377bccb551cec4958b128f20c6a8457beef0088099f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVU2XOC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRYNgzfOS6Y8Gk%2FSOkh8ui62pUeUOrRsYIWCFA4SbfOAiByWzqESlCkraxEgatmTLkT8xdsM6SveVkoLhPbdIAifSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLukx5n1quz%2F9wz2KtwDwJIvhsW3w5WdQGwrd7oiogOQ508OmQy1jKnSGXyzWdF0E6BxlxxknGgotUd%2FaSQm%2BMZJWXIxF0o%2FGVtkYkymAKYMDSheBQZGb2J48NtWjH3LMoUzc0kwAFuwBzEfPJHMg5IvG9yGINdKyfuE8P2JvzDwH3SuzrC74L%2FVNI5sbI73C2hP%2FbH%2FGpJHhk7RamUm1njh8xWcUPWk8aESNRXnrwmn%2BpGpU0T%2F1zk7%2BvXSvrUcewjYaDdfKSLZC3lYBMJbFa493qiwvTNlcnCcRLXsyL%2BROVmFJMoEBn3woirnIysz7xCiC1bSdR7PF8VUvou7G5%2BpAzgC9ksEEq4sr2ireMzvDCcCYZFAOjevJbPpa6jy7RaNzMdsEyNiPvo3t5RCQet2icg849dwbKCr9wcbqY9z%2BBKQ8H6AEwAzIQ9dgjt3ZTgKoid5jd%2FLh6VMPBEzQQ7ePOREgzcukh7mY7Qe8CUUApJEezBbdiCzJfXPCAOVmXUPTZ494Ef%2BvzlJyItnSJjRTzEtsBfOb1Se4zb9Y64hjtgqhQnMD8qiGrSppcWuJZnKKdpU6dwWLPBHIKxI%2F4p7AnAoExp1L6Y1CZpjvhdHR9%2FbrdpKTrbw9ZY0EzJx%2BAx0R%2B%2B8P8CYVzsw0cT5wAY6pgEyg9flkrfvjhI%2BYjBMWCKPBWffwYhhnjlruh6N34fSiNosBxZVKCBpP08W0UcZ6XUotJk%2BQiiaUMnaa2OUvHxgq6VcKOJYafk86tqWwnHtb0BtjGkz0ptzGGS1t5l12H%2Fv2IRhOtg992cB5xj0OUiBOLfiNGe8kysr5BOwrnbagc0N8ChEYJ6MZ30HGeWpq3npAaOZ76F5DHS%2BeFyCIw3YHQwwDEnf&X-Amz-Signature=751e30fcc0b56204db32bc98544c72037a3007d53db831327e85008f876b2d66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
