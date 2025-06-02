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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NW2CTHH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCEMM0pQwQKmhHvslwrU0VC3qhuqp%2FdP49mreUepcBe0QIgMGAlBTqOTJNvvhkNI4fOyIDYHu0ElJzWWMMz5oGO97EqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYetWICTpTLmBw0LCrcAyqIvnGgYqiyCQWxdemm2gT6Ug2qKAL1XfRpq4zTLex1iq2XU%2Bn7VmQPUCE03Kc4HlOwhIViHUhkmQehX97ijXF6dgHTWg2xgjp9a%2Fy9uQgZLd%2Bkr%2Fkd3UOf5C%2BntIqfvLFQ4SMfA7fc74FuTsQNFY6xtkDAUm6cfXxuSn7hsDCucYMeCipX%2B8ypQjNTW0qArUFAo7av2NEHgz4CxPu4Ci7zmvDDyzZ2Jnidkp9IX5eEIEs5QrPsI7bg0%2BKoQ%2BZGUeZFZjt7LiyYwbJ2xsKXXyLyGAB7c9ai%2B%2Bs5IiBlItgu2TFBlLUMHFfUDjJUGunhbnDkbbe%2Bl9Z9vguWxHQpY9HBjZXtUPVQgrhPbrjylyvE3O5QGePYsFMeXtJLhr4AIODNFbgZnQsv4mclbY72kkD8vQ3asdcK1Oy0ehsfj4DotVc7l3PXRDCfQr%2BYWOgLcAPdJFmgaxH73wDrcP5pL9hzEd3EzsHk5PS7w3aGK5EWMxHZyJ0unRvcGnzPjhnsNsTq%2BB4%2FCI32sJApMuTnIqCXWemQYBCQy3KFlFFqzOhxjAlxqqDa5QVUmIugSFcAz1c%2F8cc6nnln%2BDAQ%2B6SwNwHcTmTACnlneGuKtUjoXSsbwVpwj%2BHRwsjjEy9LMKv09cEGOqUB3DxcVk3tvn0QxgrMR2z7m55UIPWJmDKhakKD1K2LyuL7rPREiJl9TNsPVAJXxtcVFYQrFenpCNGCczAgAXKnWPqhXN1DuUmUV9FZ9geTZl7UhRGWxeGKAUfGBh531sPKTslSTclYOBP8w%2BLtmu9Fao%2BpKPSgFGK3XOlCncMckb6lJ%2FjAok8bUeR9MXh4xJfr9O6O84Vce7upsGIHywDJPG4tyfgD&X-Amz-Signature=2041524cb850b46b35531a3f877b1a589e81ca9aef42939cb175665e2587a806&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NW2CTHH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCEMM0pQwQKmhHvslwrU0VC3qhuqp%2FdP49mreUepcBe0QIgMGAlBTqOTJNvvhkNI4fOyIDYHu0ElJzWWMMz5oGO97EqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYetWICTpTLmBw0LCrcAyqIvnGgYqiyCQWxdemm2gT6Ug2qKAL1XfRpq4zTLex1iq2XU%2Bn7VmQPUCE03Kc4HlOwhIViHUhkmQehX97ijXF6dgHTWg2xgjp9a%2Fy9uQgZLd%2Bkr%2Fkd3UOf5C%2BntIqfvLFQ4SMfA7fc74FuTsQNFY6xtkDAUm6cfXxuSn7hsDCucYMeCipX%2B8ypQjNTW0qArUFAo7av2NEHgz4CxPu4Ci7zmvDDyzZ2Jnidkp9IX5eEIEs5QrPsI7bg0%2BKoQ%2BZGUeZFZjt7LiyYwbJ2xsKXXyLyGAB7c9ai%2B%2Bs5IiBlItgu2TFBlLUMHFfUDjJUGunhbnDkbbe%2Bl9Z9vguWxHQpY9HBjZXtUPVQgrhPbrjylyvE3O5QGePYsFMeXtJLhr4AIODNFbgZnQsv4mclbY72kkD8vQ3asdcK1Oy0ehsfj4DotVc7l3PXRDCfQr%2BYWOgLcAPdJFmgaxH73wDrcP5pL9hzEd3EzsHk5PS7w3aGK5EWMxHZyJ0unRvcGnzPjhnsNsTq%2BB4%2FCI32sJApMuTnIqCXWemQYBCQy3KFlFFqzOhxjAlxqqDa5QVUmIugSFcAz1c%2F8cc6nnln%2BDAQ%2B6SwNwHcTmTACnlneGuKtUjoXSsbwVpwj%2BHRwsjjEy9LMKv09cEGOqUB3DxcVk3tvn0QxgrMR2z7m55UIPWJmDKhakKD1K2LyuL7rPREiJl9TNsPVAJXxtcVFYQrFenpCNGCczAgAXKnWPqhXN1DuUmUV9FZ9geTZl7UhRGWxeGKAUfGBh531sPKTslSTclYOBP8w%2BLtmu9Fao%2BpKPSgFGK3XOlCncMckb6lJ%2FjAok8bUeR9MXh4xJfr9O6O84Vce7upsGIHywDJPG4tyfgD&X-Amz-Signature=cde4657a3090a3a49c0ce4808e210404ac83670b0a9686c41e379305ac678392&X-Amz-SignedHeaders=host&x-id=GetObject)

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
