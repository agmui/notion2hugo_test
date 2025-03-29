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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVUQJJM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCVWyH3WqMwLJ%2B5VK2906y7rMFGVOMLMy%2Fzw6siHSpaTgIhAI7UQC5nGp%2BOiMy0pXnqk9Q7QXJlLz2Mg5IwBQlrcSwQKv8DCH0QABoMNjM3NDIzMTgzODA1IgwX0zRwmMCCwwu8uTEq3APMH2kqDs6U%2BnnxlHewRmmk3OiWwW08YttnLPmS3x234Z73EVafbsS84NfdjlezxtbiS7aR2LP41a%2BL1atcKusJct%2FUaTVIwaFvSli0LOUeZYj8x86EX78hMoq03aC6m0Nr68wwqjwT77q2g4a5VJ43k64cLHWOdbAMihjpWE21wQ4C9IyxPzmDR%2BSFBvUexsJQ8MT01WV%2BcsxOqdfybsBCohwKJxfUAeqh%2BqwL7liOuYcaqANp6b06KxhJNwZebpM7oFnxqLua78F9sCADLVCuEYHqXp1Q4dyxIBfNGG2x0hp9SHw1P0tcKZ1bCNH25ygboeHy2DS1W0VxIvXRlA%2FDSw5NxyAVR%2BCX78S4em1XDjdJdaGG5d5aMCFfNJ7mnx9M9IFI%2Fb5mD%2FrZS9ib8uoKRb%2BGsOKz%2BnsIff8xdy0qwnnIwMQO7vN816BayFWTmUFcIJbf9%2BBQW2KZ6mPh%2Fpu6nrC9e0mk6cl2qrJteqdHBMSArDtTtiAisyxk34P8rdF1l2Td2uQpYGbMJHa4lw7oMJ8vt8ZYf%2BfThLwImamJxV6o63bqY0viyaQiN2K2x%2FrvuxYEN%2FLgd2GJqIeC8wu0zFURFlO60Cn94Pl8aL%2BozY4PneK0nKTfW5OwdjCmqKG%2FBjqkAZwylT7xXKhjyz3rO9nYujf9CM1CqMgN8HxLKJy7jJOiFWh%2F%2FFFp7Ehusl%2BQRjeqd2fU9cjDiatz4tZfLS0DRNGesrPW6yDagR7BG%2BInPRZFCGKHjuHamYQcX9BOCGkzsE6y%2B%2BzXjgZTw8vHJhSTKBgH%2Bc%2BRWwuSjLqPjkt%2FCh5WB2opEO8KIMVi%2B%2BAmVeLGa45prLixTJKb27Z4LbvIJBY%2BdrK%2F&X-Amz-Signature=ce4c18cc0c59b8f73016f78f7b6a96570cf7d56fba734abb0966a418c66df904&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVUQJJM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCVWyH3WqMwLJ%2B5VK2906y7rMFGVOMLMy%2Fzw6siHSpaTgIhAI7UQC5nGp%2BOiMy0pXnqk9Q7QXJlLz2Mg5IwBQlrcSwQKv8DCH0QABoMNjM3NDIzMTgzODA1IgwX0zRwmMCCwwu8uTEq3APMH2kqDs6U%2BnnxlHewRmmk3OiWwW08YttnLPmS3x234Z73EVafbsS84NfdjlezxtbiS7aR2LP41a%2BL1atcKusJct%2FUaTVIwaFvSli0LOUeZYj8x86EX78hMoq03aC6m0Nr68wwqjwT77q2g4a5VJ43k64cLHWOdbAMihjpWE21wQ4C9IyxPzmDR%2BSFBvUexsJQ8MT01WV%2BcsxOqdfybsBCohwKJxfUAeqh%2BqwL7liOuYcaqANp6b06KxhJNwZebpM7oFnxqLua78F9sCADLVCuEYHqXp1Q4dyxIBfNGG2x0hp9SHw1P0tcKZ1bCNH25ygboeHy2DS1W0VxIvXRlA%2FDSw5NxyAVR%2BCX78S4em1XDjdJdaGG5d5aMCFfNJ7mnx9M9IFI%2Fb5mD%2FrZS9ib8uoKRb%2BGsOKz%2BnsIff8xdy0qwnnIwMQO7vN816BayFWTmUFcIJbf9%2BBQW2KZ6mPh%2Fpu6nrC9e0mk6cl2qrJteqdHBMSArDtTtiAisyxk34P8rdF1l2Td2uQpYGbMJHa4lw7oMJ8vt8ZYf%2BfThLwImamJxV6o63bqY0viyaQiN2K2x%2FrvuxYEN%2FLgd2GJqIeC8wu0zFURFlO60Cn94Pl8aL%2BozY4PneK0nKTfW5OwdjCmqKG%2FBjqkAZwylT7xXKhjyz3rO9nYujf9CM1CqMgN8HxLKJy7jJOiFWh%2F%2FFFp7Ehusl%2BQRjeqd2fU9cjDiatz4tZfLS0DRNGesrPW6yDagR7BG%2BInPRZFCGKHjuHamYQcX9BOCGkzsE6y%2B%2BzXjgZTw8vHJhSTKBgH%2Bc%2BRWwuSjLqPjkt%2FCh5WB2opEO8KIMVi%2B%2BAmVeLGa45prLixTJKb27Z4LbvIJBY%2BdrK%2F&X-Amz-Signature=cc46db534f946a029bb1a4b4de2400d7d275e9d7d9ed17f08c42ae0fa55465d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
