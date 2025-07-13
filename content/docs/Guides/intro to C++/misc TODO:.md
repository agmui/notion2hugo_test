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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HCL7SC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDghN%2FjcML1gnmXgCcIPWCVTZSBQuOtG%2BRr3im7U0mYiwIgbAyVfq3ioBELhPdZc2%2FKy4drWulMEFp8gXnuL%2B9Pr2Mq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEStZmSnTJ7NVIwKkCrcA%2F3J6A89kL9790GKueQKG%2FRe9mE9kc6AZrk43U5xqMzANAopQFVttt0V4OsKYo93Swagwt9MjAtXDxVgToQzZWXsCnU2Ve9fCP2TJD3najSF6xSgtp4a9mlatNukIpWZttt81yM3o%2FJKvvaTnERi8sUSgH4LacmKOqCdbvOnD9EWD3np5CCeWFseYqBxjHoy%2FBLOEyyAkw1FQi8JUXuIqWL%2BuflJz5PRedBHPLMxJ2vO2IVLr8F3dAHddrjMAzXpAWJ43qrmU4dHZ7CYY7sSE%2FvfntLTB18KnVi5wHbRKe3Erzktgd9EkhbiYvjnTc0k242NIWZiegbo%2FqfBU663MCqrBgXu38%2FYZXowVollY6Ho3sdGUNVX%2BlEdbi8BMzkf607RY8TMh1aP0r0cVuZRXM6OotI94%2B5bx2nwV4sWJnLUCI7upO2b5CvWAjqBF%2BFRpldpqbeuXyWOQkEkDhJV5H%2Fk80OX4Bqk3exqFUJkejMxO1qNfQcNwNSlq7rQKrShIOyPYKWN8%2Bn7xZSeJQcTIfCsX3qKPDe6Ag65W9j02e4c9w56KoUGDEVWqa7mdHTrqI1XdvYZKFhDpF30YB4SVQMscRBzUgXy0If0TRY96hFPkwANUeTXK%2BWdpQ6rMLbHzsMGOqUBz6bM9sIPgAUh6s45lNY0JXcJOhcqVtvb3s4ZBf3baRXd4m2bX7ZKL11XM766CKiCZjIkKaMAD0cES6F9g9yU1R%2FyuGNX7zbtyn9wnUEHdRV70T7v7Jh2jjDR6Ukrpbu72Kkx1yOaYYaLOx%2F0b2RJLk93FEfdJUPhapWu5CuCtAnaz2QVs23OwfLHg6bugJcfFArPgMVRw0h2MpodT36VzPMjIU8z&X-Amz-Signature=635858d832d5307445d4d89a91fa272d4635f72d09b53f5030128d3366bcb286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HCL7SC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDghN%2FjcML1gnmXgCcIPWCVTZSBQuOtG%2BRr3im7U0mYiwIgbAyVfq3ioBELhPdZc2%2FKy4drWulMEFp8gXnuL%2B9Pr2Mq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEStZmSnTJ7NVIwKkCrcA%2F3J6A89kL9790GKueQKG%2FRe9mE9kc6AZrk43U5xqMzANAopQFVttt0V4OsKYo93Swagwt9MjAtXDxVgToQzZWXsCnU2Ve9fCP2TJD3najSF6xSgtp4a9mlatNukIpWZttt81yM3o%2FJKvvaTnERi8sUSgH4LacmKOqCdbvOnD9EWD3np5CCeWFseYqBxjHoy%2FBLOEyyAkw1FQi8JUXuIqWL%2BuflJz5PRedBHPLMxJ2vO2IVLr8F3dAHddrjMAzXpAWJ43qrmU4dHZ7CYY7sSE%2FvfntLTB18KnVi5wHbRKe3Erzktgd9EkhbiYvjnTc0k242NIWZiegbo%2FqfBU663MCqrBgXu38%2FYZXowVollY6Ho3sdGUNVX%2BlEdbi8BMzkf607RY8TMh1aP0r0cVuZRXM6OotI94%2B5bx2nwV4sWJnLUCI7upO2b5CvWAjqBF%2BFRpldpqbeuXyWOQkEkDhJV5H%2Fk80OX4Bqk3exqFUJkejMxO1qNfQcNwNSlq7rQKrShIOyPYKWN8%2Bn7xZSeJQcTIfCsX3qKPDe6Ag65W9j02e4c9w56KoUGDEVWqa7mdHTrqI1XdvYZKFhDpF30YB4SVQMscRBzUgXy0If0TRY96hFPkwANUeTXK%2BWdpQ6rMLbHzsMGOqUBz6bM9sIPgAUh6s45lNY0JXcJOhcqVtvb3s4ZBf3baRXd4m2bX7ZKL11XM766CKiCZjIkKaMAD0cES6F9g9yU1R%2FyuGNX7zbtyn9wnUEHdRV70T7v7Jh2jjDR6Ukrpbu72Kkx1yOaYYaLOx%2F0b2RJLk93FEfdJUPhapWu5CuCtAnaz2QVs23OwfLHg6bugJcfFArPgMVRw0h2MpodT36VzPMjIU8z&X-Amz-Signature=d8bff700557089ab74418b06d2e727eea4969106a6bdde9e7fd17bbebd1343b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
