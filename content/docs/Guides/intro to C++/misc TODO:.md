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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMA3VLY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnEXm0wN4ep8t2mt8l%2FDdG6YrY6fgf9WA7BouWd8v5IQIhAPFs4UDBSmJ9hAyTLWdAGEEMUpLBGleH38v2yHkupwWtKv8DCE4QABoMNjM3NDIzMTgzODA1IgzOO6hBBsS3jC9BT6Iq3AOAjxJJyaglf%2BHdfepmwWVvab%2BPADBU7wWAOZIlOwagKLSn0UESHvnW2rgRAefmDF1TjJJeueL5VmBPZhGBfKt9KQkPjdO5PhL5wy7mRBOATgQwdhw0W0XFohFVjoMTR5VOHTVjiZO6vlcSvqeyIRNqcTVzaPMlS3k4eeB9FduHXH8eQKno3uHXbXmJBD4uaGJ9kseWWuXlZtymoh6ZjwOCvY6ifuAMWMz4bJaIquy3%2B0NwshlIVo9o2iHd2C1wu%2BM3%2F3YaBlp3M6sd7bb6IdtsMHiTmAxyuoaccZmPVRehTRzFSjVbJfgt5pJNHuA9%2BXA%2BX80CFBPxTDr%2Bup0RQgmWZZNYGs65ojLblE2nPVa%2Brn2RZGF2oer4oZGjVNV8OEjMXRdqF3ushnUcifnzQl5luT9tdgIU6q6akR85dE1FjWrdoGXwzRTFxGMhFA2%2BLNltuxKnj84XUZR8lYyzOAAlJPV7Dp7sb7PxcxX44Hnf7kHHRBySbpsKapzTDdUp%2FKbIhiehQW%2B0JPpDCjS73hqMIKQGdChswgYKoB8AUcyssTm53c%2Fofamvncey1OaOx9QLh4Z%2B%2Fyyr4qyFjFy1NJrMSmIDqPLfM0HUh05VG8T2yRk7nR3IrKvE69XjuDCKxJ7BBjqkAXI5wiI3AFd4%2F6ZEdiG%2FXCJ9YgQqa7shJfG3RjsoVue7KIDtOEIT%2Btaymxy3CjxDJLeBpk724fUVjvVTBWxJOLLCC4PumVPsA0O5%2FFrJcZrbmZjiS%2FTl2kdHc7zotNiMD9M0bGSkU0uw%2FQBVzUaTD2X%2FBRHSb48ZLs3W5ODQixmny9Q9kwFIDrLu1V6zhnOcyDd3JHU4Nn4phOTaA98Zi8zANI%2BC&X-Amz-Signature=cd7e44ef950e1db352f36e67812f8138b27552589a8e5ce3ae749f5abe304eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMA3VLY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnEXm0wN4ep8t2mt8l%2FDdG6YrY6fgf9WA7BouWd8v5IQIhAPFs4UDBSmJ9hAyTLWdAGEEMUpLBGleH38v2yHkupwWtKv8DCE4QABoMNjM3NDIzMTgzODA1IgzOO6hBBsS3jC9BT6Iq3AOAjxJJyaglf%2BHdfepmwWVvab%2BPADBU7wWAOZIlOwagKLSn0UESHvnW2rgRAefmDF1TjJJeueL5VmBPZhGBfKt9KQkPjdO5PhL5wy7mRBOATgQwdhw0W0XFohFVjoMTR5VOHTVjiZO6vlcSvqeyIRNqcTVzaPMlS3k4eeB9FduHXH8eQKno3uHXbXmJBD4uaGJ9kseWWuXlZtymoh6ZjwOCvY6ifuAMWMz4bJaIquy3%2B0NwshlIVo9o2iHd2C1wu%2BM3%2F3YaBlp3M6sd7bb6IdtsMHiTmAxyuoaccZmPVRehTRzFSjVbJfgt5pJNHuA9%2BXA%2BX80CFBPxTDr%2Bup0RQgmWZZNYGs65ojLblE2nPVa%2Brn2RZGF2oer4oZGjVNV8OEjMXRdqF3ushnUcifnzQl5luT9tdgIU6q6akR85dE1FjWrdoGXwzRTFxGMhFA2%2BLNltuxKnj84XUZR8lYyzOAAlJPV7Dp7sb7PxcxX44Hnf7kHHRBySbpsKapzTDdUp%2FKbIhiehQW%2B0JPpDCjS73hqMIKQGdChswgYKoB8AUcyssTm53c%2Fofamvncey1OaOx9QLh4Z%2B%2Fyyr4qyFjFy1NJrMSmIDqPLfM0HUh05VG8T2yRk7nR3IrKvE69XjuDCKxJ7BBjqkAXI5wiI3AFd4%2F6ZEdiG%2FXCJ9YgQqa7shJfG3RjsoVue7KIDtOEIT%2Btaymxy3CjxDJLeBpk724fUVjvVTBWxJOLLCC4PumVPsA0O5%2FFrJcZrbmZjiS%2FTl2kdHc7zotNiMD9M0bGSkU0uw%2FQBVzUaTD2X%2FBRHSb48ZLs3W5ODQixmny9Q9kwFIDrLu1V6zhnOcyDd3JHU4Nn4phOTaA98Zi8zANI%2BC&X-Amz-Signature=1fc397c14c78c535152cf9ee89fd1d0336f3f1fffd9c7637b4ebe3cd0309704c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
