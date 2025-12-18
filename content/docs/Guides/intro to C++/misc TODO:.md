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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BWLEKA%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6J42NxO0QshaxUfx9ZCC7Aw2TGX3g8aMtTBIgyRz82QIgFzWNTMIcnt1cjmNg9773epvQkiZC%2BjOmO5f3eiX2zrcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKL674EglQwrjfldCrcAxq5%2BTzn49I1bMXbisHAwDkMj8jkBHgHuOCURTCIeFaPYluTXdZtYX6KZacMHepjx%2BzwhzUUaX%2B5bVFZLj3WO9g9SG4rURhSTXIKnv1jIBbYiR6rppTQJ0QSLl%2BBf4u3d76SaPFA8zk71v0S%2FJAmboEMUx4MzdWTRSRTBxu0VYBIHBMxwweMvjNtUuYoAH1VFwZ7lVPC3bFmQTpPwQ9naeDm%2FncpfWuxip3IOt1zK9ckmaF6aqwX3xvkyT0UPM0zjOfQlZ8KGRTHX%2BPr5MVZTVaknIG4fB3Op32kGl7GsDYE2X1bUDdAKxU8QaLkoSVyGHUfCZVWAqzfkEsuWhdxh5n%2BazJS0l0%2Bg3vFb55TxGyGOWEYZY%2BQkMJqAXvwen3rjSNaX5Uv5JdTQN4RIfQ7nhcZQO0gLJ6u9jOzMZbMvTZK7IolaA9TSyqQHGAfFt8EIZ2ieEmY%2FFIrRd%2Bks6V59Agdcji7xFzwE5fH%2FOxRUDjJviOPWfskby0ijOBKMm9ckuszjylLbSc1oYf8CF9SmTzx%2FH3G8qmmBykQFoIIzpGehxGNyt48v524vcOt5oZHlL%2FcsWAq4QT%2FtYUQkhb6pX7pP5lBsLXTvfVQov2s7kQsCR1ykanDztG24AxEMP2sjcoGOqUBbZ2W1Lq0A18UG8xrcpHhMs3TYn49xEsBsP%2BvHkhMuUPgp5PNzedtF1IJP%2BOyyI1rvOvMU8hHbgEpHxEhebfTZ%2Bp%2FhUSnviyPCCo7wl8iLr%2BFgFnNq7wkutbZ9bpDR%2B%2Bhvswt%2FMZ6euPhpCc4zR1ZhBri%2FxPsvLqdJMSnJhzSG2YwquEfUC2qiCrj8ZGXwW0sRqGtS9s7f75fstqCL22NuoSyqi1O&X-Amz-Signature=a36444af5b6ad9142ac2b5a2b154127ffe45f8a4f1ef2ff564cee632c828c1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BWLEKA%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6J42NxO0QshaxUfx9ZCC7Aw2TGX3g8aMtTBIgyRz82QIgFzWNTMIcnt1cjmNg9773epvQkiZC%2BjOmO5f3eiX2zrcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKL674EglQwrjfldCrcAxq5%2BTzn49I1bMXbisHAwDkMj8jkBHgHuOCURTCIeFaPYluTXdZtYX6KZacMHepjx%2BzwhzUUaX%2B5bVFZLj3WO9g9SG4rURhSTXIKnv1jIBbYiR6rppTQJ0QSLl%2BBf4u3d76SaPFA8zk71v0S%2FJAmboEMUx4MzdWTRSRTBxu0VYBIHBMxwweMvjNtUuYoAH1VFwZ7lVPC3bFmQTpPwQ9naeDm%2FncpfWuxip3IOt1zK9ckmaF6aqwX3xvkyT0UPM0zjOfQlZ8KGRTHX%2BPr5MVZTVaknIG4fB3Op32kGl7GsDYE2X1bUDdAKxU8QaLkoSVyGHUfCZVWAqzfkEsuWhdxh5n%2BazJS0l0%2Bg3vFb55TxGyGOWEYZY%2BQkMJqAXvwen3rjSNaX5Uv5JdTQN4RIfQ7nhcZQO0gLJ6u9jOzMZbMvTZK7IolaA9TSyqQHGAfFt8EIZ2ieEmY%2FFIrRd%2Bks6V59Agdcji7xFzwE5fH%2FOxRUDjJviOPWfskby0ijOBKMm9ckuszjylLbSc1oYf8CF9SmTzx%2FH3G8qmmBykQFoIIzpGehxGNyt48v524vcOt5oZHlL%2FcsWAq4QT%2FtYUQkhb6pX7pP5lBsLXTvfVQov2s7kQsCR1ykanDztG24AxEMP2sjcoGOqUBbZ2W1Lq0A18UG8xrcpHhMs3TYn49xEsBsP%2BvHkhMuUPgp5PNzedtF1IJP%2BOyyI1rvOvMU8hHbgEpHxEhebfTZ%2Bp%2FhUSnviyPCCo7wl8iLr%2BFgFnNq7wkutbZ9bpDR%2B%2Bhvswt%2FMZ6euPhpCc4zR1ZhBri%2FxPsvLqdJMSnJhzSG2YwquEfUC2qiCrj8ZGXwW0sRqGtS9s7f75fstqCL22NuoSyqi1O&X-Amz-Signature=d6ea7de813a0e0d4a350be8cf7707db25bcc1d1ac718c270f96a2ec22d7b9859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
