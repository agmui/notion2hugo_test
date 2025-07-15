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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHWXDZX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDW8Z7pte0LmVNM%2BQncfEOHZdNB92vT50rGvPqrv3h6ZAiAEOrskLrEe4R5uer4nZFfgYnilctNoUHNnS%2FqG87TVoir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMMP2xOkho1hTLTMxXKtwDBBqS8CkC%2FADfdhk8M4FwHbd3txtnTNgXVsQFxq3dXAJbcVHucmvug8gtq%2FFPU8TxZfsUKHn%2FnouE2kGLf4d%2Br3zRnK%2BHHFPfjx%2FDjRHh3cYOderG1yipzVEOupVze3UNNNLEYXB%2FCcTkAeBilXzOkbyqZWM6tnu62w%2FB6YnmBP7xo4dyb3cNnk1EHF9dyil0RZ8AZfbCygzcnbzzaPgmPve9lH3yodijyv1pNhiWOH%2B6YtiQrrrN9nxP81D2OwsNZhz92g02jfwdANuagwmQBhz2RCzS1xyIMeRfykpxivMVHr7RCJjq2x%2Bj1gvz4RxPZiICZQ%2Fy%2FtaK%2BtovKdJdWquK6r7IhMU14XhNpdceX%2Ff2pCClWkmLhxAzvhCJMxauE7wik8AWl7KXQstvyvfvwiYAUI33WxKk9ZkeStFdp7MfHrOXksE5f2LAmIpIchQkv7DRDxAaowlHy%2BbR%2FgIFJIJp6Acxpx0KmSyIL8uglBt9xlepeVtynOD1kwtScNk2ns%2FnQyQTEQAgyil9qVLYZ25498G5vE9XKLDIQAaXZ0NXAzDYnycBshck%2BJGIX3TlqwofOzGxJx6fkM9gjZBHE2pdKNuGuozVSOQ9tz3oEPV5%2FTaDiyjZ6oRKxT8w7oXawwY6pgHQF7sjOWe9XM3w5o9tYbkiipHJnWHSoDQQAibcYc0KeCe8k4yB104FGymK9GbrPGcRbE1PWo6kNlGQn1VyzmEhmhBPKQtGKJ74Xj9G%2B97PZDUeIVRWU4PPZzw6ytwAqYvVqhfmif9q1fyqUeIgnTA3vQll37Y8vLGuyaCQh4dJsfNAweGV65oZCpesnOgSqPwOKgn0tgw4JNtsRZ5qWX3iVtgmjnlh&X-Amz-Signature=457347e07502ad02f1606f02f0bf9db4e36755a14cd7ea27acbb9efd4c34147b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHWXDZX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDW8Z7pte0LmVNM%2BQncfEOHZdNB92vT50rGvPqrv3h6ZAiAEOrskLrEe4R5uer4nZFfgYnilctNoUHNnS%2FqG87TVoir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMMP2xOkho1hTLTMxXKtwDBBqS8CkC%2FADfdhk8M4FwHbd3txtnTNgXVsQFxq3dXAJbcVHucmvug8gtq%2FFPU8TxZfsUKHn%2FnouE2kGLf4d%2Br3zRnK%2BHHFPfjx%2FDjRHh3cYOderG1yipzVEOupVze3UNNNLEYXB%2FCcTkAeBilXzOkbyqZWM6tnu62w%2FB6YnmBP7xo4dyb3cNnk1EHF9dyil0RZ8AZfbCygzcnbzzaPgmPve9lH3yodijyv1pNhiWOH%2B6YtiQrrrN9nxP81D2OwsNZhz92g02jfwdANuagwmQBhz2RCzS1xyIMeRfykpxivMVHr7RCJjq2x%2Bj1gvz4RxPZiICZQ%2Fy%2FtaK%2BtovKdJdWquK6r7IhMU14XhNpdceX%2Ff2pCClWkmLhxAzvhCJMxauE7wik8AWl7KXQstvyvfvwiYAUI33WxKk9ZkeStFdp7MfHrOXksE5f2LAmIpIchQkv7DRDxAaowlHy%2BbR%2FgIFJIJp6Acxpx0KmSyIL8uglBt9xlepeVtynOD1kwtScNk2ns%2FnQyQTEQAgyil9qVLYZ25498G5vE9XKLDIQAaXZ0NXAzDYnycBshck%2BJGIX3TlqwofOzGxJx6fkM9gjZBHE2pdKNuGuozVSOQ9tz3oEPV5%2FTaDiyjZ6oRKxT8w7oXawwY6pgHQF7sjOWe9XM3w5o9tYbkiipHJnWHSoDQQAibcYc0KeCe8k4yB104FGymK9GbrPGcRbE1PWo6kNlGQn1VyzmEhmhBPKQtGKJ74Xj9G%2B97PZDUeIVRWU4PPZzw6ytwAqYvVqhfmif9q1fyqUeIgnTA3vQll37Y8vLGuyaCQh4dJsfNAweGV65oZCpesnOgSqPwOKgn0tgw4JNtsRZ5qWX3iVtgmjnlh&X-Amz-Signature=11ba400bd6a3c5c7b7fcbd54608caff3a3381cee66104e9962a7686be0595e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
