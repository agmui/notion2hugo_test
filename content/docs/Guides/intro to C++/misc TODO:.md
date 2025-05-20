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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CFLHW6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFvDvn1Dbxv8MI8Bla5DxI2pK4%2FPMulQ%2FjOEoIe6F1JAIhAO1WyLiDZl%2B8sGSJUt8Sa8LChOuXMeYW10VxWTS2S4O8KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJp0CHgCOcS%2BUBDqAq3AMP6gp4L8ZwG7MARlN5Xaa%2FAfnZGqdqNUpb7pRVnYSvGDowBKjXk%2B8soWCmbgJn2wKbXpkaQLPNt%2BfgZv8U19u3mfYyXE70RoFR88kDFyNwfbqSLF7flfBOgoC9kos1eZICVLwYjbRJNm46SrO%2F34ysjEzJrXlcyzVlP4igG3WSgajGfZR7vCmi7EJBfrZXs52oRzx0UIzQsj7%2B4HAt0q5PlSfFuFJbqcga2IMxuH1h4%2FSslBBj77YMhdDDOn%2FrT84Ri4vRu4StmzX5BIxhrfOVKtwhUzG5zrICkRvoJj%2FLmxvvinI5u3CwhWe%2BHMRLxc%2F%2B2Zlrf6RrBpxcFUpifYqYM%2BuyxiuGIKi0QwzZr%2FR2nnRkAKYXTBEV3%2BMsNAHAIQvbBev6qFaoeVVnC2jEm4zTjbu4PIC5BXX6c2mw3Q7WPzadKWoSNC6zzC93iIMBB3v1QJqpH5dUy8ZoUtwreQNtAh%2BL3jzvwI5K7qZcg7teuZkdXGBUb0YotOc7kUY6MeU9jn6dYnoX7E0%2FfmRyarO38N%2FSM%2BdBFf6dWOC8Gczet1F9k0%2B3fRBm4nuDvhcCmDxnOz6UBA6Arx1j4OsgHqSZbV%2Fu8DK%2F%2F83TLQv6%2FHYV3X1JlbDhyeTyoFcOdDCqxrDBBjqkAW3tmhJyhWvuMs1CMjp0ogqNcWCnNniqjdai4hzjA40U126EZEYpHIOQPfXXB%2FdxZ11MeM%2FD1crjqVvK9%2B7sQAmY8%2BWZdf1Lf%2BXekUc0gkVs3t%2Bu8ttdmhAQedYAf%2Ft7gFO37XJPfLdQhQ9LAHHU%2BmsSLqXGQqxwvm%2FxQkJppDJiGd3OU1fIwVh4BgbgazHxz%2FRPjTfSVaEvNzkNsrCC1fbHD9Vy&X-Amz-Signature=cee3888d03e2eece569e9b3860be3aeb5b6cf0bfb29c7f7d448c57ddd619e6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CFLHW6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFvDvn1Dbxv8MI8Bla5DxI2pK4%2FPMulQ%2FjOEoIe6F1JAIhAO1WyLiDZl%2B8sGSJUt8Sa8LChOuXMeYW10VxWTS2S4O8KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJp0CHgCOcS%2BUBDqAq3AMP6gp4L8ZwG7MARlN5Xaa%2FAfnZGqdqNUpb7pRVnYSvGDowBKjXk%2B8soWCmbgJn2wKbXpkaQLPNt%2BfgZv8U19u3mfYyXE70RoFR88kDFyNwfbqSLF7flfBOgoC9kos1eZICVLwYjbRJNm46SrO%2F34ysjEzJrXlcyzVlP4igG3WSgajGfZR7vCmi7EJBfrZXs52oRzx0UIzQsj7%2B4HAt0q5PlSfFuFJbqcga2IMxuH1h4%2FSslBBj77YMhdDDOn%2FrT84Ri4vRu4StmzX5BIxhrfOVKtwhUzG5zrICkRvoJj%2FLmxvvinI5u3CwhWe%2BHMRLxc%2F%2B2Zlrf6RrBpxcFUpifYqYM%2BuyxiuGIKi0QwzZr%2FR2nnRkAKYXTBEV3%2BMsNAHAIQvbBev6qFaoeVVnC2jEm4zTjbu4PIC5BXX6c2mw3Q7WPzadKWoSNC6zzC93iIMBB3v1QJqpH5dUy8ZoUtwreQNtAh%2BL3jzvwI5K7qZcg7teuZkdXGBUb0YotOc7kUY6MeU9jn6dYnoX7E0%2FfmRyarO38N%2FSM%2BdBFf6dWOC8Gczet1F9k0%2B3fRBm4nuDvhcCmDxnOz6UBA6Arx1j4OsgHqSZbV%2Fu8DK%2F%2F83TLQv6%2FHYV3X1JlbDhyeTyoFcOdDCqxrDBBjqkAW3tmhJyhWvuMs1CMjp0ogqNcWCnNniqjdai4hzjA40U126EZEYpHIOQPfXXB%2FdxZ11MeM%2FD1crjqVvK9%2B7sQAmY8%2BWZdf1Lf%2BXekUc0gkVs3t%2Bu8ttdmhAQedYAf%2Ft7gFO37XJPfLdQhQ9LAHHU%2BmsSLqXGQqxwvm%2FxQkJppDJiGd3OU1fIwVh4BgbgazHxz%2FRPjTfSVaEvNzkNsrCC1fbHD9Vy&X-Amz-Signature=5109749d5a468bd2c7d331ea4c3b09dfed9179a1cbb91788cc53b705ab318543&X-Amz-SignedHeaders=host&x-id=GetObject)

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
