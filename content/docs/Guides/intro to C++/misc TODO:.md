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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXUX2XC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iVcTbNBfTTxSiCqlcGYNyJIU5cEqlMGv56P49EMvewIgbp9fkiJIXY1VbhVRj7l3RMtMdhWYgjURSSSBi6Q7irwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCUL%2BJxUbKbTrR3UHircA%2BdTanVO%2FudX%2FUKUfLLqxz%2FKupvpUdUJoIZHAO9Kvcwtm5TWwKH%2FiLlmJOyhLIczMQ8INfphha37av4D8TIQVhEpyYJDvYGeDE8y79VLbd1ip%2F53VoEFEEP%2BftDMtGIh9UptOX4YRhS04SRC4y28THYc%2F0gc73Ja2uotG%2F2MI3NP4dTJO4QP9XStJcX73IBwqx3ZuzYsQW1cZarIlgr2fgWbJFoWC9r%2B7UgBRPGRwdJJuuVEvhsD8EGxpfbcJUZP1YIRlw29G46msiG70JfUlgG%2BqQ4lCXfzWJd1AQuBQ6MG%2B2KjPYUP7qjQy0kSTJ1bTgtk4ztvCVJ2LWzTjGeppBrtuPzL91aRAkqiUdqbiBsiMh%2FzxS5T%2BXKSdS8S5VQJIZa2rZF6etE27JNQxemKXD62yhrePFgIFWKBQgm8m6%2FjCbGqYW4u3%2FkXz0myQMlGhTJ3RZU%2FMb0zHGB6jNaUrvgjbHQ8ca%2BYbOLk8RcrgDqA%2Bm2AW27Vw4SNIS%2BQCTjv97uV2N4eUTgDGgrKNco4phO4N6rQSnxTJkFaoEgXQxGLa5C%2BwnZm0rQzqS4MQPX7qLTCWwjuL1aXnHjn2yCEnmMeZTrlGfIY29jHjdcwKT0ps%2FKGKXjFhUx4mBlbMK2L58AGOqUBjYhhUnGgCeDfZYJcNZCka5oJ%2B46ph%2Full%2BwgUaJ0rQ2LOCAVF7bkV%2B1t6btGLBk%2B5%2FcHZwYmK0t37msCdWQFyArJLnWMBBhTHQ3lNuSfRazPD%2BSdezeB15F5LG0le7a8ejFYJ5hLGzvJgAkKcwnO%2F%2FuKcmmsP%2BIeFwW4gaAdD3NjcPMUUxDyWAtMKgAyc4AMFy2cgng5Uq0OQABpRTMPEfVMY87Y&X-Amz-Signature=2d6de7c830b466befe226305f02f60c323416bb2491390a2791ab05725242169&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXUX2XC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iVcTbNBfTTxSiCqlcGYNyJIU5cEqlMGv56P49EMvewIgbp9fkiJIXY1VbhVRj7l3RMtMdhWYgjURSSSBi6Q7irwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCUL%2BJxUbKbTrR3UHircA%2BdTanVO%2FudX%2FUKUfLLqxz%2FKupvpUdUJoIZHAO9Kvcwtm5TWwKH%2FiLlmJOyhLIczMQ8INfphha37av4D8TIQVhEpyYJDvYGeDE8y79VLbd1ip%2F53VoEFEEP%2BftDMtGIh9UptOX4YRhS04SRC4y28THYc%2F0gc73Ja2uotG%2F2MI3NP4dTJO4QP9XStJcX73IBwqx3ZuzYsQW1cZarIlgr2fgWbJFoWC9r%2B7UgBRPGRwdJJuuVEvhsD8EGxpfbcJUZP1YIRlw29G46msiG70JfUlgG%2BqQ4lCXfzWJd1AQuBQ6MG%2B2KjPYUP7qjQy0kSTJ1bTgtk4ztvCVJ2LWzTjGeppBrtuPzL91aRAkqiUdqbiBsiMh%2FzxS5T%2BXKSdS8S5VQJIZa2rZF6etE27JNQxemKXD62yhrePFgIFWKBQgm8m6%2FjCbGqYW4u3%2FkXz0myQMlGhTJ3RZU%2FMb0zHGB6jNaUrvgjbHQ8ca%2BYbOLk8RcrgDqA%2Bm2AW27Vw4SNIS%2BQCTjv97uV2N4eUTgDGgrKNco4phO4N6rQSnxTJkFaoEgXQxGLa5C%2BwnZm0rQzqS4MQPX7qLTCWwjuL1aXnHjn2yCEnmMeZTrlGfIY29jHjdcwKT0ps%2FKGKXjFhUx4mBlbMK2L58AGOqUBjYhhUnGgCeDfZYJcNZCka5oJ%2B46ph%2Full%2BwgUaJ0rQ2LOCAVF7bkV%2B1t6btGLBk%2B5%2FcHZwYmK0t37msCdWQFyArJLnWMBBhTHQ3lNuSfRazPD%2BSdezeB15F5LG0le7a8ejFYJ5hLGzvJgAkKcwnO%2F%2FuKcmmsP%2BIeFwW4gaAdD3NjcPMUUxDyWAtMKgAyc4AMFy2cgng5Uq0OQABpRTMPEfVMY87Y&X-Amz-Signature=8c668e8b72928a5431ddf8081363d6c102c851bfec0efb5dd74286d50f174d50&X-Amz-SignedHeaders=host&x-id=GetObject)

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
