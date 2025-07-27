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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NEY3HR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC2FFhDi2%2FEke%2Fv3hOQ3xTFTmElqp0CpIqdprPE4EtlGgIhANwcyp2cgyCNr3V%2FWeFkKYTNz80HPUdkqgWQSjI4gZeIKv8DCH4QABoMNjM3NDIzMTgzODA1IgzlOMYmllHyGTWkzJ4q3AO6081OYz%2FNDBhbJq6Q%2B28WtYLNn50prq%2B1HBSr8VqUvWHYTF%2FnqbQ%2F%2B9ubhQPtO2pqVTHNwKeofQZVI%2FtrPUSMj2RI2oOZ8cz7f%2Bgtgdc%2B5k5bAhlOYU0vg4IuCj9t06GpNUUlhIZzhi%2BrSdYFyZZE9nLGsrqRTCvAj3iTOF0U3rafa7X%2Bs2LP50YmkAvI3C3FS6Z7nrZlf%2B%2FoRmTS6XIE%2BWZQZvnmUMc5BTocxrcFhbAFYpBZI4sra3evuzNxzMjJKSpeIYi42NUy%2FrbLU3cymZ13b0p4TONbZuHwiHFKxmXd51MFZ1q4VlrUT7i6mW8amK7H7wSz%2Bs6jTU33QEUEn%2FXidmDOt2Dj0EL4hq56scoP0KpwY6vPK4gfu0ZsgBD8mkoM25H47bLIjy88brHDwaJiV3VzgtUM5fmor7Rlga2vLA3FWdoICpt0LVnJk8q2u3cqcIIM6psmMGXE0iD3GQ9AYS7xdHtSicDNrqTeHD1XJdFW4Q7W%2FodTRRPsSwmS9OmW2rrr2mu4uutF9JGc6FD4zlwqAIbChNpQeUgq5nrw8useSHKUw3IUscRGxB%2ByW0oxn1%2Fjbyp%2BDe%2FM2orxLpKXe4kfoTlawXERn9c4jJduQBynEyj5Jh%2FDWTC2o5rEBjqkAVHRMKvXBzmduNzVSxIuprgqIUgGr%2BjHJ8UjBLwfOXJY1mcz04aO%2Bw1buKb7Jsnl93LYWFHyBHUx4LyeLpO8KigP32ebU1C1kayB6uWHmLS%2FC%2FD4FrzJlp3WmcY%2B6rknRBwC%2B4TmSKaBLCdXJnMhUds1H7xBojChCi1VTSXB5qTPYooQv%2BLqyJseZzzOn0eyD66u5lKp1jqQdL6cbOkhmmrptKD2&X-Amz-Signature=be413813c4d064337606f777977a26f57512cd5d6506de5c9c7cfc06c3f82496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NEY3HR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC2FFhDi2%2FEke%2Fv3hOQ3xTFTmElqp0CpIqdprPE4EtlGgIhANwcyp2cgyCNr3V%2FWeFkKYTNz80HPUdkqgWQSjI4gZeIKv8DCH4QABoMNjM3NDIzMTgzODA1IgzlOMYmllHyGTWkzJ4q3AO6081OYz%2FNDBhbJq6Q%2B28WtYLNn50prq%2B1HBSr8VqUvWHYTF%2FnqbQ%2F%2B9ubhQPtO2pqVTHNwKeofQZVI%2FtrPUSMj2RI2oOZ8cz7f%2Bgtgdc%2B5k5bAhlOYU0vg4IuCj9t06GpNUUlhIZzhi%2BrSdYFyZZE9nLGsrqRTCvAj3iTOF0U3rafa7X%2Bs2LP50YmkAvI3C3FS6Z7nrZlf%2B%2FoRmTS6XIE%2BWZQZvnmUMc5BTocxrcFhbAFYpBZI4sra3evuzNxzMjJKSpeIYi42NUy%2FrbLU3cymZ13b0p4TONbZuHwiHFKxmXd51MFZ1q4VlrUT7i6mW8amK7H7wSz%2Bs6jTU33QEUEn%2FXidmDOt2Dj0EL4hq56scoP0KpwY6vPK4gfu0ZsgBD8mkoM25H47bLIjy88brHDwaJiV3VzgtUM5fmor7Rlga2vLA3FWdoICpt0LVnJk8q2u3cqcIIM6psmMGXE0iD3GQ9AYS7xdHtSicDNrqTeHD1XJdFW4Q7W%2FodTRRPsSwmS9OmW2rrr2mu4uutF9JGc6FD4zlwqAIbChNpQeUgq5nrw8useSHKUw3IUscRGxB%2ByW0oxn1%2Fjbyp%2BDe%2FM2orxLpKXe4kfoTlawXERn9c4jJduQBynEyj5Jh%2FDWTC2o5rEBjqkAVHRMKvXBzmduNzVSxIuprgqIUgGr%2BjHJ8UjBLwfOXJY1mcz04aO%2Bw1buKb7Jsnl93LYWFHyBHUx4LyeLpO8KigP32ebU1C1kayB6uWHmLS%2FC%2FD4FrzJlp3WmcY%2B6rknRBwC%2B4TmSKaBLCdXJnMhUds1H7xBojChCi1VTSXB5qTPYooQv%2BLqyJseZzzOn0eyD66u5lKp1jqQdL6cbOkhmmrptKD2&X-Amz-Signature=1cf9c60caa5e9596cd27e5cd5152de86d13f0d25e8588a88c240aebe62ec676c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
