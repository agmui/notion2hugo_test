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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NQROAP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFndaf19sHRTeaHg3OZFW48TsD4YjsZjgKkJ3F%2Bp6k4wAiEA3f6Hkt%2FhvvIuYv3LmX%2FhOAAmmtG30q4AgJEROgNAASQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJCog6wa1pNOm3ZOuircA6YvUucOf9z7YUWWcdoM2eXRM8VlgF0zp7IFzBwb%2BF5rdo7nvGyUqvradEuKdkjNfNwrtJ8XdiOAETBNQkeL5RHC85oelzoK39yi3SJazp6bPqgQ2nSVyTkzxwYnsDWPLU2FF8jSR2ga2fHAQis8%2BdjTRqukpOY7szIb8xBoLCzyXJLhREUnDus2PPPeDN5KJGGeHnAHI22%2BRbaRFv1%2FGamjUtWwWyF4sQlj9Oi43UwxaIHwmzpC1mmimU6a6X6X30ORKvD4LzCmCCpi0%2BTFldcGjsNcV3RHnLOi01%2Fa%2B%2FoYVr%2F49qh92mpCI%2FPux1OS1R5va2d1OJqh5hDxFvQkmnx%2FpkwVcNhZje%2Fne0i8tchiCnk9sDge%2FvGicfjgBz8aKIhV%2FAOVUWQHkxu3TuIAidlB4JmBPZ7UsQT93Ci6fJDP%2FHpn%2BNDo8Oskg1k9Z2eMphfAI9WO0VcQmCpIcKJ57cfuKz4T8jOt6M8LKvpOSJV6ZePQ7JMuO5L87k1uzcx4hYBH%2BRvz4dxT9hPHfiQGNICq1LV8a%2BbY1TPW8DdniWahC5R4bORJzbtIdWtDSlkaoa%2B4FZZFK1ilkFGIm85ix57YHUucLkW6nPDYQLq83qQNccGtYed%2B9US0HNcwMOvk8sAGOqUBfGGoavqAX9%2FetnUGLcl7YVbXSMNKsDSwSYvsKYl0K%2BasKImz5Cgfm7teR7ZdztL2gMoKXBli7N8ZOosqyUoR9hfqEV0HpIU6kWccSZMwwK1Nu2SiHGjnjeEFeQvXp1Ev0vXWb5jMswMK%2BDOpHnzO161SzAsiHW5FaldBrFAH3ScgRLtPbyzFFf2dXVOrnMA9wSksbNjN25niieSdY7z4SdqUeJ9Y&X-Amz-Signature=fbcb5ba52d2f735de4942e20774152ff24a93c1deadcce7f20297413f2320fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NQROAP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFndaf19sHRTeaHg3OZFW48TsD4YjsZjgKkJ3F%2Bp6k4wAiEA3f6Hkt%2FhvvIuYv3LmX%2FhOAAmmtG30q4AgJEROgNAASQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJCog6wa1pNOm3ZOuircA6YvUucOf9z7YUWWcdoM2eXRM8VlgF0zp7IFzBwb%2BF5rdo7nvGyUqvradEuKdkjNfNwrtJ8XdiOAETBNQkeL5RHC85oelzoK39yi3SJazp6bPqgQ2nSVyTkzxwYnsDWPLU2FF8jSR2ga2fHAQis8%2BdjTRqukpOY7szIb8xBoLCzyXJLhREUnDus2PPPeDN5KJGGeHnAHI22%2BRbaRFv1%2FGamjUtWwWyF4sQlj9Oi43UwxaIHwmzpC1mmimU6a6X6X30ORKvD4LzCmCCpi0%2BTFldcGjsNcV3RHnLOi01%2Fa%2B%2FoYVr%2F49qh92mpCI%2FPux1OS1R5va2d1OJqh5hDxFvQkmnx%2FpkwVcNhZje%2Fne0i8tchiCnk9sDge%2FvGicfjgBz8aKIhV%2FAOVUWQHkxu3TuIAidlB4JmBPZ7UsQT93Ci6fJDP%2FHpn%2BNDo8Oskg1k9Z2eMphfAI9WO0VcQmCpIcKJ57cfuKz4T8jOt6M8LKvpOSJV6ZePQ7JMuO5L87k1uzcx4hYBH%2BRvz4dxT9hPHfiQGNICq1LV8a%2BbY1TPW8DdniWahC5R4bORJzbtIdWtDSlkaoa%2B4FZZFK1ilkFGIm85ix57YHUucLkW6nPDYQLq83qQNccGtYed%2B9US0HNcwMOvk8sAGOqUBfGGoavqAX9%2FetnUGLcl7YVbXSMNKsDSwSYvsKYl0K%2BasKImz5Cgfm7teR7ZdztL2gMoKXBli7N8ZOosqyUoR9hfqEV0HpIU6kWccSZMwwK1Nu2SiHGjnjeEFeQvXp1Ev0vXWb5jMswMK%2BDOpHnzO161SzAsiHW5FaldBrFAH3ScgRLtPbyzFFf2dXVOrnMA9wSksbNjN25niieSdY7z4SdqUeJ9Y&X-Amz-Signature=2297c7415eeb0996375e68d356a68913f810943c032c22b9b517cd3b34c6885b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
