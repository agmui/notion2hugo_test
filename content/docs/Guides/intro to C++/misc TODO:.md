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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNPJA6Z%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDwjv4Y4EzVP20sAPsrazod%2FWc1fbq%2BqIYjGj9bQMuyuwIgOamEg1dINhlVt8vAEAV5bQ%2F2ogwluKKKZpb28kPkp7QqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1CTI46gTBy5v3c%2FyrcA2F8aYLA30N8pSmF%2FYTJ9pLkfyqB3BZyl3j4kJR6RRZq5Mf%2BahY2516O98iIex0gIAhQukvHp1%2BthE0A0hchoXkJz1MS60rRbHGY6sqUveB%2Bo2jmELXPGFiUlHae8%2BYS5UrIKd6w68AfNtJTKPhWRUgvNdYiDhFx9QPYWCsFIBdylKCeou%2BGk84LqBQtvXXs2iXmabdgaEfKetOS5NYdvAriIGX4eWApq9nBN8L6DwOQe%2FWDMr1XFJ0l3ZmMc1HCvG2CNNPVwaaIzloS%2B8a4P9Zg%2FKEwNFWPbLLtFP8%2FikpNY%2FaRZzd5JgZ8TfFRnOjdWhgcF5eG%2FaUH%2FL3FHQ3sKub%2F4bxSoA9e2HuJWW7toO2AFClF9tPWj%2FVKyuLhGhgC%2FCO6tL3zVcTciPM26LmhX70qcOO7sB748EAIR21%2BOrbbKk7IW%2BaCOU0HrFx3z4gLMj9Z6BDonacH6z4qWqVupYvPYUL7pj0tK78FP5%2B3bCnVyQKYEt76AGmi%2Fm0w3fT7FclwS9ZWPBgt7SiE99MHXKz8qlmaA%2BQOKY8xF3NlJKSOqXXOKraj%2FPrP1GUK41DrGGz%2BXkmyUBEZz8iukjsxmiV8syfUaTdHo%2Bribqa0Ss3K9aQdtqR58yoKnwtcMMqDvsEGOqUBR5BRfy8DULre65pEijmY0ZJRRMEi9FrfGLdU6DHevztWbwKVfqDR%2FpY2nmwnMu8ku46jhuC2k3eBhp%2FxI%2BmC8N%2BWujpiwH3Kcj4nuWWBgyqPX5ucNXd94DvkmaGCQs1QW9WBmzp5Bo0%2B1%2FKEWIm3E%2FBoO%2FjSUfpBg8V31Ylha0iqT3PCwbu7AMxPtJfXOdf0Rl1n3aRBabpy0pYqNVahc29SEHw1&X-Amz-Signature=d38aa2eb8b417ed1076ae0b2ed6c91f1f88882c991e2418c37919a1783cf11f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNPJA6Z%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDwjv4Y4EzVP20sAPsrazod%2FWc1fbq%2BqIYjGj9bQMuyuwIgOamEg1dINhlVt8vAEAV5bQ%2F2ogwluKKKZpb28kPkp7QqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1CTI46gTBy5v3c%2FyrcA2F8aYLA30N8pSmF%2FYTJ9pLkfyqB3BZyl3j4kJR6RRZq5Mf%2BahY2516O98iIex0gIAhQukvHp1%2BthE0A0hchoXkJz1MS60rRbHGY6sqUveB%2Bo2jmELXPGFiUlHae8%2BYS5UrIKd6w68AfNtJTKPhWRUgvNdYiDhFx9QPYWCsFIBdylKCeou%2BGk84LqBQtvXXs2iXmabdgaEfKetOS5NYdvAriIGX4eWApq9nBN8L6DwOQe%2FWDMr1XFJ0l3ZmMc1HCvG2CNNPVwaaIzloS%2B8a4P9Zg%2FKEwNFWPbLLtFP8%2FikpNY%2FaRZzd5JgZ8TfFRnOjdWhgcF5eG%2FaUH%2FL3FHQ3sKub%2F4bxSoA9e2HuJWW7toO2AFClF9tPWj%2FVKyuLhGhgC%2FCO6tL3zVcTciPM26LmhX70qcOO7sB748EAIR21%2BOrbbKk7IW%2BaCOU0HrFx3z4gLMj9Z6BDonacH6z4qWqVupYvPYUL7pj0tK78FP5%2B3bCnVyQKYEt76AGmi%2Fm0w3fT7FclwS9ZWPBgt7SiE99MHXKz8qlmaA%2BQOKY8xF3NlJKSOqXXOKraj%2FPrP1GUK41DrGGz%2BXkmyUBEZz8iukjsxmiV8syfUaTdHo%2Bribqa0Ss3K9aQdtqR58yoKnwtcMMqDvsEGOqUBR5BRfy8DULre65pEijmY0ZJRRMEi9FrfGLdU6DHevztWbwKVfqDR%2FpY2nmwnMu8ku46jhuC2k3eBhp%2FxI%2BmC8N%2BWujpiwH3Kcj4nuWWBgyqPX5ucNXd94DvkmaGCQs1QW9WBmzp5Bo0%2B1%2FKEWIm3E%2FBoO%2FjSUfpBg8V31Ylha0iqT3PCwbu7AMxPtJfXOdf0Rl1n3aRBabpy0pYqNVahc29SEHw1&X-Amz-Signature=9b3ac20af948f26031ef682b859a575ad416d0a76954aa2aaf85d3c1625b440a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
