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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Z4DURK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWRl6w3Lp%2BmtMdYNGW%2BhjhDSMovmyiYTeJnCdCr7P6sAiEAoOIdH9RZdRhmteKNIPg8qiHD%2FZE5S8SS4XAD9xEfqzAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGkuvdgkqpLNUKHnnircAyOLK91n6%2FubbwjJNRfM862FFKH6ZTnZMBDR5jtMEFZyIzFm3z%2BlzzJA50OOR72KJn4C7ECA5iGaWVV8drcNnSuR51eK4zAfPbUE%2B4eMjfIRbRBLNFVKb9saJ1cvr5C24ZsyDcn36M8NYCH0Or%2FBgP5aJk2zTW35p4rw5jdtI9y%2Fp%2FbywZKsoSFMBE%2F2678N8fkvBM6Rwxjc1WG9Wp0bhja2H%2BlRB8ssEJ7hpNSClvHugLy%2Fo6phUtRuPd%2B7%2F6smjoHuj0aYYVeYLL5I6lbl%2FQmIVWmfMVfcuRWJHIKsR3XOrzJHgAhN9EkYsa8bQm%2FdM91%2FIEBL4q7e7wuYE2aw26UVspEV5HepTnAaExRcpNOx%2Fbi%2Bw1HqmJo6k52N9hugHFvhpfy9oAf37QOZ7%2F3pjlOg6eBzFE175j2ERzo18tBAP%2BQg3spl6NNmfTpcMroyI57xIU0m2jYewS4ZE6qe1IYXrq9PB0ROlQIs%2FIWsvkND2YrxdTi8MUrWB7G6iYDoheV9ENaFgtznIOOFSmNlB3D8LbRgA0WhleE05iVA%2F2Yh36EQzyCwcCQtEFE2ea06aSP0U%2BkmGzDERy77x8MffX6jBwgHxgyI4N5U%2B4NMp37A2H%2FS8Z3j3IVncxoKMMzKzsMGOqUB4B9MzcqwbzFMeLEUSqML0x3eEKMUhon70IFmktbrnAfTfpP%2FVlw1niDycgNJYwcJN8GBKKEvo5Z6Vhm2QOqeOhahOE4BQAatNqFdY%2BKbSzH3GUzTYtd1I1JAUMUB63LTDO3BNtssNHdfbR0ggufgMfT15nlmmyB%2BEM2LS4%2Fp81C9MHEYkjzkwntonyPDOtD86r%2BU69iLO%2BxfHU6nWfO%2F6WzWVd0k&X-Amz-Signature=f10d217c223c663c626df781dfb4a3df3335e509f00e22076e3fc87eff9d448a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Z4DURK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWRl6w3Lp%2BmtMdYNGW%2BhjhDSMovmyiYTeJnCdCr7P6sAiEAoOIdH9RZdRhmteKNIPg8qiHD%2FZE5S8SS4XAD9xEfqzAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGkuvdgkqpLNUKHnnircAyOLK91n6%2FubbwjJNRfM862FFKH6ZTnZMBDR5jtMEFZyIzFm3z%2BlzzJA50OOR72KJn4C7ECA5iGaWVV8drcNnSuR51eK4zAfPbUE%2B4eMjfIRbRBLNFVKb9saJ1cvr5C24ZsyDcn36M8NYCH0Or%2FBgP5aJk2zTW35p4rw5jdtI9y%2Fp%2FbywZKsoSFMBE%2F2678N8fkvBM6Rwxjc1WG9Wp0bhja2H%2BlRB8ssEJ7hpNSClvHugLy%2Fo6phUtRuPd%2B7%2F6smjoHuj0aYYVeYLL5I6lbl%2FQmIVWmfMVfcuRWJHIKsR3XOrzJHgAhN9EkYsa8bQm%2FdM91%2FIEBL4q7e7wuYE2aw26UVspEV5HepTnAaExRcpNOx%2Fbi%2Bw1HqmJo6k52N9hugHFvhpfy9oAf37QOZ7%2F3pjlOg6eBzFE175j2ERzo18tBAP%2BQg3spl6NNmfTpcMroyI57xIU0m2jYewS4ZE6qe1IYXrq9PB0ROlQIs%2FIWsvkND2YrxdTi8MUrWB7G6iYDoheV9ENaFgtznIOOFSmNlB3D8LbRgA0WhleE05iVA%2F2Yh36EQzyCwcCQtEFE2ea06aSP0U%2BkmGzDERy77x8MffX6jBwgHxgyI4N5U%2B4NMp37A2H%2FS8Z3j3IVncxoKMMzKzsMGOqUB4B9MzcqwbzFMeLEUSqML0x3eEKMUhon70IFmktbrnAfTfpP%2FVlw1niDycgNJYwcJN8GBKKEvo5Z6Vhm2QOqeOhahOE4BQAatNqFdY%2BKbSzH3GUzTYtd1I1JAUMUB63LTDO3BNtssNHdfbR0ggufgMfT15nlmmyB%2BEM2LS4%2Fp81C9MHEYkjzkwntonyPDOtD86r%2BU69iLO%2BxfHU6nWfO%2F6WzWVd0k&X-Amz-Signature=eb929a272463b228cda5b40d20fc1247c893c8e5dc52a1d74d27f9f27422d724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
