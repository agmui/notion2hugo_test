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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVSXGLB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMmpMMvlA3ZUAFYvvYO2PRhU6x1pb5hKLxkuH5Oh0RRgIgfQJ3NMidHehsQloIgOGQlC8IJqM7Fw7fLkkGbULpWhEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIgRiXzAyAaev4Z7xCrcAz7Bn0YWH4BGMsKoywzWDCwjIT5uLpJVVhc8GnwIPGelVmfST2vxhna9YXRW6LKU6iBn%2FxItlizwOstkePNqZRK7pFITqKxSe3Z8xsG8Rkpyk3bLLZoI1TTSrgk7jPoFE%2FRfVfM%2B1aOqAg%2FtAHEfR7TUxg6zNC1KIvUHb%2FeKY5fn4Emm4AGO8AFXlDjBuczf0Eu8mmnQH0Pr6XbLEPhWeJx8c74yNnmwuSBWhhA6PCXnSN6FYZ94IqB8gX59OwMs%2BXEJOfAL0nMgloZZfbUYZ6SLhEb2PuBMiywvS4uDaudNP%2FnT8ieoo95KGRZUddRHEZIttFstx%2ByLY3RnMHzaz6O%2BVgrfk84RUSn7LnzMUjAaBCYInBxHNcWJBjud7YWIzI%2FzAVPTw0kmSM6CxYOc6uG03OshIAkkk2B4fJMmIu%2FqJBIAQ2Uy8XKws6wo5KWZeyLPsCi7zhF1yR%2BbFRwDlENkCMyBCbFaW%2Fc%2BUuIamA%2BbrOuoAkGYux%2Fz7MACJnk8EaWAdO6mhfphBWJHdh5oLRJ2XUMZKh7Y9zyLKRpIRoBfwrEXQkJ1S%2BMb%2FV0QjiXqajs0cXQsAefyqbhiAZoJauzikYGKyolBo0nYu1tcNrAbVELvcIIB7Qc%2Bf3a7MIzOyb8GOqUBgJVZXCMRc3L6px4h%2BZ5TSgFkEY5HUBmT%2FrXo3XeG0i53xR2ssB3AYq3lyAg5pi5QYEuOhdKzOXsX1D6Yi%2FeJbzfTO0ZvXGrnTtL%2FQh%2BFIE%2BEal4FE4KJhf5OwrPWucsb5mMsXpRWDoaXQ5ZVbc7jBZpw4svJXcJ2NiGqPiwW8LiioQOvU%2BoOv%2BwP8K26%2BgpRJC1RVl1XWEPWcUl%2BqREKCVvTofct&X-Amz-Signature=d3cac360f48507c935a1594282a2b294d81a2bd69afee3b33b053286166e061b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVSXGLB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMmpMMvlA3ZUAFYvvYO2PRhU6x1pb5hKLxkuH5Oh0RRgIgfQJ3NMidHehsQloIgOGQlC8IJqM7Fw7fLkkGbULpWhEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIgRiXzAyAaev4Z7xCrcAz7Bn0YWH4BGMsKoywzWDCwjIT5uLpJVVhc8GnwIPGelVmfST2vxhna9YXRW6LKU6iBn%2FxItlizwOstkePNqZRK7pFITqKxSe3Z8xsG8Rkpyk3bLLZoI1TTSrgk7jPoFE%2FRfVfM%2B1aOqAg%2FtAHEfR7TUxg6zNC1KIvUHb%2FeKY5fn4Emm4AGO8AFXlDjBuczf0Eu8mmnQH0Pr6XbLEPhWeJx8c74yNnmwuSBWhhA6PCXnSN6FYZ94IqB8gX59OwMs%2BXEJOfAL0nMgloZZfbUYZ6SLhEb2PuBMiywvS4uDaudNP%2FnT8ieoo95KGRZUddRHEZIttFstx%2ByLY3RnMHzaz6O%2BVgrfk84RUSn7LnzMUjAaBCYInBxHNcWJBjud7YWIzI%2FzAVPTw0kmSM6CxYOc6uG03OshIAkkk2B4fJMmIu%2FqJBIAQ2Uy8XKws6wo5KWZeyLPsCi7zhF1yR%2BbFRwDlENkCMyBCbFaW%2Fc%2BUuIamA%2BbrOuoAkGYux%2Fz7MACJnk8EaWAdO6mhfphBWJHdh5oLRJ2XUMZKh7Y9zyLKRpIRoBfwrEXQkJ1S%2BMb%2FV0QjiXqajs0cXQsAefyqbhiAZoJauzikYGKyolBo0nYu1tcNrAbVELvcIIB7Qc%2Bf3a7MIzOyb8GOqUBgJVZXCMRc3L6px4h%2BZ5TSgFkEY5HUBmT%2FrXo3XeG0i53xR2ssB3AYq3lyAg5pi5QYEuOhdKzOXsX1D6Yi%2FeJbzfTO0ZvXGrnTtL%2FQh%2BFIE%2BEal4FE4KJhf5OwrPWucsb5mMsXpRWDoaXQ5ZVbc7jBZpw4svJXcJ2NiGqPiwW8LiioQOvU%2BoOv%2BwP8K26%2BgpRJC1RVl1XWEPWcUl%2BqREKCVvTofct&X-Amz-Signature=3e1ab68de1f61528676abb22b085c075c6c2c1e8755421f6f19daa6ba1dadbf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
