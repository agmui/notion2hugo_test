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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIVV6AC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHB6IZ%2B2uMx%2FM%2Fu%2BJjrbGGJCfaIRqb4dbXK%2BUKzKD1d1AiBgkMowePusxxgMUDzWFVae2qm%2B0cMFRjtMMPRm2TH7fCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM%2B1YendlgmgD%2FqBswKtwDQpam5T3bKV4YwmWx9gk3g8WetgApoRrhEMKPGNMyAxDW0%2BUpQIBIKG6vcVdI7tF7ARSzXy0bbWqNtQSkEf%2B%2F%2FHIHhv5cITdh60887gDJbz%2F4L0Xz4LgfTIB4Up1PPxTTb82V9m9EtjpyN7Qqpl%2FOptjqt1Zh3QSOuRxemyNTx601v2WrnVLh9pXxtLDWvPK8SIKa7kVp%2FrzNBzY1T%2FLXW3g5cIs6VOzDfrUyt%2Bg1upI0MJOXdi3hkj%2BqjtmVZtPJaGRJ6Zgw%2FIIyQ%2F8DEufIw4vzi22M3Eh4Ek%2BJEZguGBoAl0qWoMzzucq1%2Fffo6F9bA18%2Be0sp0c3NMEmwZJ2GuGa6QCiUSXiS%2BYAcYVBYI3pshx4CVrU5QwKeJhugNIzljAGNhkrndoL5B%2B11tLt6UBoJeUqWeuHbbFrMzhiX6bxZ4PCoiPJifEpk%2F2UxgJg7Qh6eW%2F9dIuMCsVuD4KC7XCh6zgpEXKUMiZr2%2FKpW4Oexds%2Bzi3VBh4tuzjE6NVXYFEpaZiG3wMFC1Uyn1c6rthozvIIe6e3QW4uzP%2B70BTclQ03NYlNviUW2szcsYVAk0XZQJ0YK0HL9EQqJLTAYBEGhq5NkBVeQJZKJ9DGm4tEnv3Wepww4Xb98W7swhcv3wgY6pgHBM7eEmVS517j4l%2BfooJAK9oB3lEWO7JdvcWaMkZvurnOFO1JVTlaAzi3Lbb8j7FqDmVqNauTFUhG1U1xHW4wzQO7v8uiy3UGRJJP24NLHMCvqqlfgq2YyaB2T%2BtZLCE2TQDJfzWmmsSwO7Q7nzTpMQGillhv9fNWJGY4%2BYudVTAqS8XncGazyYi%2B1gL4VUJPcrJo%2FBFH0LNOeNl%2BxlZHjZjgdJUKL&X-Amz-Signature=5aac2f8cecc398a019a4d4d135a2619df13e0ccce23cc8f53c7a8f09ffcbc8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIVV6AC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHB6IZ%2B2uMx%2FM%2Fu%2BJjrbGGJCfaIRqb4dbXK%2BUKzKD1d1AiBgkMowePusxxgMUDzWFVae2qm%2B0cMFRjtMMPRm2TH7fCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM%2B1YendlgmgD%2FqBswKtwDQpam5T3bKV4YwmWx9gk3g8WetgApoRrhEMKPGNMyAxDW0%2BUpQIBIKG6vcVdI7tF7ARSzXy0bbWqNtQSkEf%2B%2F%2FHIHhv5cITdh60887gDJbz%2F4L0Xz4LgfTIB4Up1PPxTTb82V9m9EtjpyN7Qqpl%2FOptjqt1Zh3QSOuRxemyNTx601v2WrnVLh9pXxtLDWvPK8SIKa7kVp%2FrzNBzY1T%2FLXW3g5cIs6VOzDfrUyt%2Bg1upI0MJOXdi3hkj%2BqjtmVZtPJaGRJ6Zgw%2FIIyQ%2F8DEufIw4vzi22M3Eh4Ek%2BJEZguGBoAl0qWoMzzucq1%2Fffo6F9bA18%2Be0sp0c3NMEmwZJ2GuGa6QCiUSXiS%2BYAcYVBYI3pshx4CVrU5QwKeJhugNIzljAGNhkrndoL5B%2B11tLt6UBoJeUqWeuHbbFrMzhiX6bxZ4PCoiPJifEpk%2F2UxgJg7Qh6eW%2F9dIuMCsVuD4KC7XCh6zgpEXKUMiZr2%2FKpW4Oexds%2Bzi3VBh4tuzjE6NVXYFEpaZiG3wMFC1Uyn1c6rthozvIIe6e3QW4uzP%2B70BTclQ03NYlNviUW2szcsYVAk0XZQJ0YK0HL9EQqJLTAYBEGhq5NkBVeQJZKJ9DGm4tEnv3Wepww4Xb98W7swhcv3wgY6pgHBM7eEmVS517j4l%2BfooJAK9oB3lEWO7JdvcWaMkZvurnOFO1JVTlaAzi3Lbb8j7FqDmVqNauTFUhG1U1xHW4wzQO7v8uiy3UGRJJP24NLHMCvqqlfgq2YyaB2T%2BtZLCE2TQDJfzWmmsSwO7Q7nzTpMQGillhv9fNWJGY4%2BYudVTAqS8XncGazyYi%2B1gL4VUJPcrJo%2FBFH0LNOeNl%2BxlZHjZjgdJUKL&X-Amz-Signature=80a6ce1e5c5f3df601f6b6bd8da7fc3b17dd1dc76f7321bafb48c5b0fe746aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
