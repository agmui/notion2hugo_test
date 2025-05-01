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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653TZ2OWW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDhyKIDpr6M%2FZqUda7u9FNALSelZtSNn%2FZ1d285JkwKXQIhAP9wdBygsBZ6YvX91o8F0tSN4f6WzWcEmrfxgPJugdaAKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnbc0cV8CYpIsQ2sgq3ANYpUaltrw4fFiZfCyAnjVKx2P9UJUon6N70%2BGXY1GBEUXqfcDD5DL3UDKCzY40GVt9yKFTWDjysXq5W44pPv7FMjTKcWU%2Biv1GqqV5NZDmnavMkGf%2FFo9f6YjpEbS1UtvL6JZfzhdcu0lpl2UFUyrZdFQYJfdLwKlGDz0VUbt39SHXWQh7EO60PugIk4RhzGZw%2B80%2Bixmo9iPxcLDGi6GttyM7chdpKOkB2Do397e1vaUk9oeJEyJ4r7M5gbkB%2FthgxQ%2Bn4NEJVzNwXk7z%2FPIKCxwRVKJth9ka8Zz%2F9IJb8Yv60t3Q7nuCeLrvqkrO6tXd9W6P%2FPqaLTqTq%2FAimR%2BSXKp9jw1MDnhdzo%2Bb8FvxCeQhJVBg%2BuvemTcGXaZ3qyiylN8cH%2FI1MVMsv4InFNXTEb1jwBCt4ViKbN%2BKj%2BE5BMD0kXxrtHl2BIsMPSQMILQ6fnDyhNaZMLTduawBnZswyL3v53RGdro0QgtR2u42LwgxmUolUXjVMJJifxLofPjGcR3W8J2qAxMOjapwGX9lfRQEk%2BK%2BabC0hvACUXOZ85Fu4kPRJkmpSQyhk1IyX0elLgjXtlIwzh8bLaHgav9%2BsUqa%2Bny12KGgV91wUxB7I0yrDE1D1yaU3Ep%2BETDEhc7ABjqkATOw7%2Fl88pH5pvcnzWKFV9dXxPbi9YRBoKaiG77cwBtPkQdsYGXSTs%2BOadkI8MGJurngWRbK6KEEy%2BdWdoqZEV7qMPU%2BZqBSeMTBJ35LyjQYCKyieNbhR5zxjsP0se3M4Y9WIomIwHZQZOBZcpHZLJAHVo29SB2xnEdSWh7A5PoT2mkiukbDuvcu0an34ZlXES809Y8ddVD0KRRK9xIXjhPNkFQA&X-Amz-Signature=ff5e6a14c257f492f55a477e143cbf8da9d9128a4e46805911fa76dd0101adc5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653TZ2OWW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDhyKIDpr6M%2FZqUda7u9FNALSelZtSNn%2FZ1d285JkwKXQIhAP9wdBygsBZ6YvX91o8F0tSN4f6WzWcEmrfxgPJugdaAKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnbc0cV8CYpIsQ2sgq3ANYpUaltrw4fFiZfCyAnjVKx2P9UJUon6N70%2BGXY1GBEUXqfcDD5DL3UDKCzY40GVt9yKFTWDjysXq5W44pPv7FMjTKcWU%2Biv1GqqV5NZDmnavMkGf%2FFo9f6YjpEbS1UtvL6JZfzhdcu0lpl2UFUyrZdFQYJfdLwKlGDz0VUbt39SHXWQh7EO60PugIk4RhzGZw%2B80%2Bixmo9iPxcLDGi6GttyM7chdpKOkB2Do397e1vaUk9oeJEyJ4r7M5gbkB%2FthgxQ%2Bn4NEJVzNwXk7z%2FPIKCxwRVKJth9ka8Zz%2F9IJb8Yv60t3Q7nuCeLrvqkrO6tXd9W6P%2FPqaLTqTq%2FAimR%2BSXKp9jw1MDnhdzo%2Bb8FvxCeQhJVBg%2BuvemTcGXaZ3qyiylN8cH%2FI1MVMsv4InFNXTEb1jwBCt4ViKbN%2BKj%2BE5BMD0kXxrtHl2BIsMPSQMILQ6fnDyhNaZMLTduawBnZswyL3v53RGdro0QgtR2u42LwgxmUolUXjVMJJifxLofPjGcR3W8J2qAxMOjapwGX9lfRQEk%2BK%2BabC0hvACUXOZ85Fu4kPRJkmpSQyhk1IyX0elLgjXtlIwzh8bLaHgav9%2BsUqa%2Bny12KGgV91wUxB7I0yrDE1D1yaU3Ep%2BETDEhc7ABjqkATOw7%2Fl88pH5pvcnzWKFV9dXxPbi9YRBoKaiG77cwBtPkQdsYGXSTs%2BOadkI8MGJurngWRbK6KEEy%2BdWdoqZEV7qMPU%2BZqBSeMTBJ35LyjQYCKyieNbhR5zxjsP0se3M4Y9WIomIwHZQZOBZcpHZLJAHVo29SB2xnEdSWh7A5PoT2mkiukbDuvcu0an34ZlXES809Y8ddVD0KRRK9xIXjhPNkFQA&X-Amz-Signature=94a3a610d680cb6216c03ebac04f9ba4a5fff12aa1a398527580013e907fa34f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
