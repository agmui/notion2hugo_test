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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTAXIEU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUUWGJp35Q7KwyMDAP4wFwrD41%2FzxUnVI64eHEzyqq2AiEAprBOUuK5H0R4A9BUnzhJDugLGDCxKel5sdpDQgc%2F6Mgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI9fERDn3%2FKrQaJHtCrcAx7yhgmEqiCqja1KM9tyifiM2e0MjhGmH7HyTTbLexzhFUExEtjSxocmJtJQA%2FNA2Ym5GqE6BJmryVIaUW9ddC2KjKEYZI91QUZjOyCGH1eIzLMI6WQu3HxB2YI%2F4xGJaEAFIhRs7DB0pm3wbmkEPbjcpss9aLkPCNDjVIN6isHWAK0GXhqDD%2Bb4mQ3Q9EQnAJh62bUEHaW5EPlTftHr9tfZER248ddIM%2B5D2eYCS6y1xN7mz62jEm1QM0wF0298rAIMXYi%2FzS0e4YyiAXxTx5xR%2BsIX3ZozED%2FIddyNdtNlDLlh%2F2MqjtZzmz%2BCSCZ%2BjNM24ynO7ycgpVDsHpgQnihmeD%2FOl%2BEoAx6VRjz%2BF0%2F95Vx5qDBAlPE4FgEEX1CEv4bIyK51MB3W7afYBQqy2Nj5mTy8aL41SoqW6ozd71ww4BaccYmRgKWxu639GrXpKr2BlfHevzOYGXJjbfSJfvpjBSpyaegDaGJB3BorYdisKjT4nppFBhSTUOsJleWYq8AeS0YLeHpS1a8mMlbnra491HrxDibj9fd2vYS44U2NzUlp2eAklbfk7la3gT5OFaN1LK01cyttTGqYMLJZAsfdOnoilsrIF%2BHkNH%2BIaTXks3Kp1uYK0RoHDMO%2BMLLq88QGOqUBmlGqrsINOsMkZ2R1XkX4RiwPY639Bm1gecocxUa8E5tm4lnwJcdUTKcDe1oE3WltSgciyClVeujmAQcueEYPTEIy33EiksyaOo64aFmv7TEvIKDAOiYy3jeXlMM9vZMN0xJP2jcuiqEAAzP3Fyll4RUQtm6b%2BKxGnd82xmKeeBo875NzMSBM20%2BC018oGPtub%2B3KcNsAvhbPAYn4vbJHVpOTtNwq&X-Amz-Signature=fafbc44f9a8d6a2fe322d595e30af9abd0e597645a532fc18e91850ff28d03c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTAXIEU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUUWGJp35Q7KwyMDAP4wFwrD41%2FzxUnVI64eHEzyqq2AiEAprBOUuK5H0R4A9BUnzhJDugLGDCxKel5sdpDQgc%2F6Mgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI9fERDn3%2FKrQaJHtCrcAx7yhgmEqiCqja1KM9tyifiM2e0MjhGmH7HyTTbLexzhFUExEtjSxocmJtJQA%2FNA2Ym5GqE6BJmryVIaUW9ddC2KjKEYZI91QUZjOyCGH1eIzLMI6WQu3HxB2YI%2F4xGJaEAFIhRs7DB0pm3wbmkEPbjcpss9aLkPCNDjVIN6isHWAK0GXhqDD%2Bb4mQ3Q9EQnAJh62bUEHaW5EPlTftHr9tfZER248ddIM%2B5D2eYCS6y1xN7mz62jEm1QM0wF0298rAIMXYi%2FzS0e4YyiAXxTx5xR%2BsIX3ZozED%2FIddyNdtNlDLlh%2F2MqjtZzmz%2BCSCZ%2BjNM24ynO7ycgpVDsHpgQnihmeD%2FOl%2BEoAx6VRjz%2BF0%2F95Vx5qDBAlPE4FgEEX1CEv4bIyK51MB3W7afYBQqy2Nj5mTy8aL41SoqW6ozd71ww4BaccYmRgKWxu639GrXpKr2BlfHevzOYGXJjbfSJfvpjBSpyaegDaGJB3BorYdisKjT4nppFBhSTUOsJleWYq8AeS0YLeHpS1a8mMlbnra491HrxDibj9fd2vYS44U2NzUlp2eAklbfk7la3gT5OFaN1LK01cyttTGqYMLJZAsfdOnoilsrIF%2BHkNH%2BIaTXks3Kp1uYK0RoHDMO%2BMLLq88QGOqUBmlGqrsINOsMkZ2R1XkX4RiwPY639Bm1gecocxUa8E5tm4lnwJcdUTKcDe1oE3WltSgciyClVeujmAQcueEYPTEIy33EiksyaOo64aFmv7TEvIKDAOiYy3jeXlMM9vZMN0xJP2jcuiqEAAzP3Fyll4RUQtm6b%2BKxGnd82xmKeeBo875NzMSBM20%2BC018oGPtub%2B3KcNsAvhbPAYn4vbJHVpOTtNwq&X-Amz-Signature=0b3cb91a27764079c988d3e190a532d74c14080275f4580b473d0d6667ebca22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
