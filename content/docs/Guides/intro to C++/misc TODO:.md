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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6I43FS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHxDGSXKehlQHC3v45f1Bq0psWNA6TR2TZB6j7tnj8q7AiEA7vSPYQZb1ZQTBNrdmCSz6VRgsB6PKthPamuNtpnYKlkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXYHtenO80XG0WfhircAzIGXxilHGr8FkNimWCopL4Ki1x9I7BqV0u6q9PTyi7AFTxOJ4WGupRY%2FerUyzEKCU0CHdIyDghP2%2BCJA6N8bH5lvJ05ToUDgsx6%2FNmYgjMjhMQvs9gqwB25rBjEnuITf8hpvMEFf2eTq5FqAaQIH8AUnk2YxtFvIgs9EchmYRvXcEgE4iSmRyr9WGdLhC0rCFqMNAqvZCi7%2BNO5ibADYduVLG3wucEGpGudsvlEVXxg054AY0kgTIP344zJRr55G7tDCOHwatdHN6ndb4usoxHxSlQlPq0%2FMSLFaP%2BAAhcoJFs7cyWSn7sjrLQhOpAlU8FL0%2BXJ%2BAJgGorlpszdoAEmB%2B2ml%2Fc7ZShui9WuOad%2FGsV%2F8D%2FLPFbAZsO4Q3S93duccf6M%2BhTZFXjMg8bUbuWpe6Ni7953Dd5LQRGZAP0eicbWQ83nsV5CIAGXp%2BASeL0I38bFFknp%2FF9FV2jHL3JlIziSkODAWMQLKp9M9za8p3JNrnki4VKkYZgIXmbsg7GLSjXr8TGFPjLS%2BV9%2BqoCl49l4xb0JMdgeaONcWL46870N4Ma26NjTRVQeRFCln%2BRO0s84hpZ0lDA6a4RwsaFrRvRp1h4o%2F96wMxXXh%2BgX54aGjpyNVtCIIHXgMNuzz8QGOqUB6dYlx4hB1QTmGloHjcTEidvHVVt6ptFZguN5n4%2BgoIzFuHyAwfTaLrbqbhiFrnZ5867mkgtSI36n5weY4kSyvnvzVA8TKVlkmW5Q0wpzuFnsk1a0Aw%2BebKBhoiNG1VfyqaDIq4F7QCmXkthhD82nfk6z%2BwjXzRSJZhd9FACDetyUJMcLsQv4xGgkSVaEd%2FedWuKcsRHkRZOQZqTcGWd1V4lr0ibM&X-Amz-Signature=1f2cce51d324589dde9e3b634c0fa4137f3b492f40ce14a56e9daabce9de3a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6I43FS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHxDGSXKehlQHC3v45f1Bq0psWNA6TR2TZB6j7tnj8q7AiEA7vSPYQZb1ZQTBNrdmCSz6VRgsB6PKthPamuNtpnYKlkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXYHtenO80XG0WfhircAzIGXxilHGr8FkNimWCopL4Ki1x9I7BqV0u6q9PTyi7AFTxOJ4WGupRY%2FerUyzEKCU0CHdIyDghP2%2BCJA6N8bH5lvJ05ToUDgsx6%2FNmYgjMjhMQvs9gqwB25rBjEnuITf8hpvMEFf2eTq5FqAaQIH8AUnk2YxtFvIgs9EchmYRvXcEgE4iSmRyr9WGdLhC0rCFqMNAqvZCi7%2BNO5ibADYduVLG3wucEGpGudsvlEVXxg054AY0kgTIP344zJRr55G7tDCOHwatdHN6ndb4usoxHxSlQlPq0%2FMSLFaP%2BAAhcoJFs7cyWSn7sjrLQhOpAlU8FL0%2BXJ%2BAJgGorlpszdoAEmB%2B2ml%2Fc7ZShui9WuOad%2FGsV%2F8D%2FLPFbAZsO4Q3S93duccf6M%2BhTZFXjMg8bUbuWpe6Ni7953Dd5LQRGZAP0eicbWQ83nsV5CIAGXp%2BASeL0I38bFFknp%2FF9FV2jHL3JlIziSkODAWMQLKp9M9za8p3JNrnki4VKkYZgIXmbsg7GLSjXr8TGFPjLS%2BV9%2BqoCl49l4xb0JMdgeaONcWL46870N4Ma26NjTRVQeRFCln%2BRO0s84hpZ0lDA6a4RwsaFrRvRp1h4o%2F96wMxXXh%2BgX54aGjpyNVtCIIHXgMNuzz8QGOqUB6dYlx4hB1QTmGloHjcTEidvHVVt6ptFZguN5n4%2BgoIzFuHyAwfTaLrbqbhiFrnZ5867mkgtSI36n5weY4kSyvnvzVA8TKVlkmW5Q0wpzuFnsk1a0Aw%2BebKBhoiNG1VfyqaDIq4F7QCmXkthhD82nfk6z%2BwjXzRSJZhd9FACDetyUJMcLsQv4xGgkSVaEd%2FedWuKcsRHkRZOQZqTcGWd1V4lr0ibM&X-Amz-Signature=f5a2117755fa048dc748dfdc2363489d4513e2054eb5d1b617ec4c242b2f61a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
