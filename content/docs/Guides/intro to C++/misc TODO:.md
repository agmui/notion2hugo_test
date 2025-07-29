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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DV4T4Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs%2BwIuTHVklJTUauriSaWuZkf5cgbXemPEo4Ot5a%2BYPAIhAPmAy2b%2FyXzXQbUJ3cH%2BN3ey2K%2BV6wN6mfKgDGU5y%2B3xKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs5eSzNu4GToGhdlkq3APK24SDNEa8dwqshnoCvURttBTmYh8fFW99GwwfVOBXeYJgMni6kFxR7LIlzHlKd2E904z%2Bwwcd4lsUrqXlt%2FSbj0vB1RfBDdqkVrAAqhiD%2Fl5kiD%2FnZ0UpI607tKmJFQ4tUD7wrKb0RB8tJPWT4SuQi9M8%2BCHmDDS%2FocSlgtueSoJYsHOIB3x7cKFyKYZPn2UW1iK%2BgWj4mdxOaNf2%2BGP%2FFzo9Yuj9vZt5ZVhubSc4%2Br4jPcmnUyjceOAeoMfBAQaw7y0QXZhPHEJp8sorzSuTtEXiZa%2Bfkv%2F2NAUbUpH9NmGxy1xQqMJ%2B%2FOupbccm5xZtI9bdpCZTzPoF57FScRE8xP%2Bt3jPu1dUfNQeVRwX7gBA4u%2BQyEGPyCWNpm%2FxwoAcW95wHNdXuVKK8UTyEnBiFs%2FID7H%2B%2Bpfnp4xTEEAyo6%2BacDuM3WmMCrFVuii6KxGUnVL9sDaM%2FgA3mBvDbrIFALMuX56jQJwLpSyRP7bYjgk298Fve4D%2B5lBPcM23xQP1NvWkuqOGFmLSyGJYJHzspxC6qpAOrOp2VC61cWPLjSL%2BtGwccKoWL88hbiWre3K8HxIJY2PvBumk2iuYy8v3FX%2BsE%2FvC7I%2FgCMD0sBkOTAcRj0WPS7sVYG7NtOzD8iaXEBjqkAcqAerArUGlZXm%2FZaSZIlhpOH%2Ftntzuzs9b5M7rM%2B9YQyxDtktuTzniZPpJx9JBf0HhdFzWyDDqPGilHLwQix9U3lkVLtIlcx4Y4r7nJXYSwz17vnBpNGmGlCKEc%2FYc8oYOnMD37QZjtIe7g1p%2FPBy7GsbA%2FqeyOA1sfhLDlG6kAwvY2JoUS%2BBedxrBEsVWVLkf1wLrGchEwIIrFFHw5ktiyd59I&X-Amz-Signature=8d6354a69a286a1fb67fcc45f247cfbf7c97623f5bf39cb4329d9a56a4bbff43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DV4T4Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs%2BwIuTHVklJTUauriSaWuZkf5cgbXemPEo4Ot5a%2BYPAIhAPmAy2b%2FyXzXQbUJ3cH%2BN3ey2K%2BV6wN6mfKgDGU5y%2B3xKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs5eSzNu4GToGhdlkq3APK24SDNEa8dwqshnoCvURttBTmYh8fFW99GwwfVOBXeYJgMni6kFxR7LIlzHlKd2E904z%2Bwwcd4lsUrqXlt%2FSbj0vB1RfBDdqkVrAAqhiD%2Fl5kiD%2FnZ0UpI607tKmJFQ4tUD7wrKb0RB8tJPWT4SuQi9M8%2BCHmDDS%2FocSlgtueSoJYsHOIB3x7cKFyKYZPn2UW1iK%2BgWj4mdxOaNf2%2BGP%2FFzo9Yuj9vZt5ZVhubSc4%2Br4jPcmnUyjceOAeoMfBAQaw7y0QXZhPHEJp8sorzSuTtEXiZa%2Bfkv%2F2NAUbUpH9NmGxy1xQqMJ%2B%2FOupbccm5xZtI9bdpCZTzPoF57FScRE8xP%2Bt3jPu1dUfNQeVRwX7gBA4u%2BQyEGPyCWNpm%2FxwoAcW95wHNdXuVKK8UTyEnBiFs%2FID7H%2B%2Bpfnp4xTEEAyo6%2BacDuM3WmMCrFVuii6KxGUnVL9sDaM%2FgA3mBvDbrIFALMuX56jQJwLpSyRP7bYjgk298Fve4D%2B5lBPcM23xQP1NvWkuqOGFmLSyGJYJHzspxC6qpAOrOp2VC61cWPLjSL%2BtGwccKoWL88hbiWre3K8HxIJY2PvBumk2iuYy8v3FX%2BsE%2FvC7I%2FgCMD0sBkOTAcRj0WPS7sVYG7NtOzD8iaXEBjqkAcqAerArUGlZXm%2FZaSZIlhpOH%2Ftntzuzs9b5M7rM%2B9YQyxDtktuTzniZPpJx9JBf0HhdFzWyDDqPGilHLwQix9U3lkVLtIlcx4Y4r7nJXYSwz17vnBpNGmGlCKEc%2FYc8oYOnMD37QZjtIe7g1p%2FPBy7GsbA%2FqeyOA1sfhLDlG6kAwvY2JoUS%2BBedxrBEsVWVLkf1wLrGchEwIIrFFHw5ktiyd59I&X-Amz-Signature=c7f38959736b4db1cf978106816576183125424eed9f570eb656dbfc79e299bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
